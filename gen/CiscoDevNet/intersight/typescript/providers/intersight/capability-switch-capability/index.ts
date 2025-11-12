// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapabilitySwitchCapabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#account_moid CapabilitySwitchCapability#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Range of port-channel IDs supported on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#allowed_uplink_pc_id_range CapabilitySwitchCapability#allowed_uplink_pc_id_range}
  */
  readonly allowedUplinkPcIdRange?: CapabilitySwitchCapabilityAllowedUplinkPcIdRange[] | cdktf.IResolvable;
  /**
  * An array of relationships to moBaseMo resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ancestors CapabilitySwitchCapability#ancestors}
  */
  readonly ancestors?: CapabilitySwitchCapabilityAncestors[] | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#create_time CapabilitySwitchCapability#create_time}
  */
  readonly createTime?: string;
  /**
  * Default Fcoe VLAN associated with this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#default_fcoe_vlan CapabilitySwitchCapability#default_fcoe_vlan}
  */
  readonly defaultFcoeVlan?: number;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#domain_group_moid CapabilitySwitchCapability#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Dynamic VIFs support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#dynamic_vifs_supported CapabilitySwitchCapability#dynamic_vifs_supported}
  */
  readonly dynamicVifsSupported?: boolean | cdktf.IResolvable;
  /**
  * Fan Modules support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#fan_modules_supported CapabilitySwitchCapability#fan_modules_supported}
  */
  readonly fanModulesSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#fc_end_host_mode_reserved_vsans CapabilitySwitchCapability#fc_end_host_mode_reserved_vsans}
  */
  readonly fcEndHostModeReservedVsans?: CapabilitySwitchCapabilityFcEndHostModeReservedVsans[] | cdktf.IResolvable;
  /**
  * Fc Uplink ports auto negotiation speed support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#fc_uplink_ports_auto_negotiation_supported CapabilitySwitchCapability#fc_uplink_ports_auto_negotiation_supported}
  */
  readonly fcUplinkPortsAutoNegotiationSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#id CapabilitySwitchCapability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VlanPort Compression is controlled by IMM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#imm_controls_vpcompression CapabilitySwitchCapability#imm_controls_vpcompression}
  */
  readonly immControlsVpcompression?: boolean | cdktf.IResolvable;
  /**
  * Inter cluster link vlan support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#inter_cluster_link_vlan_supported CapabilitySwitchCapability#inter_cluster_link_vlan_supported}
  */
  readonly interClusterLinkVlanSupported?: boolean | cdktf.IResolvable;
  /**
  * Locator Beacon LED support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#locator_beacon_supported CapabilitySwitchCapability#locator_beacon_supported}
  */
  readonly locatorBeaconSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#macsec_supported_ports CapabilitySwitchCapability#macsec_supported_ports}
  */
  readonly macsecSupportedPorts?: CapabilitySwitchCapabilityMacsecSupportedPorts[] | cdktf.IResolvable;
  /**
  * Maximum allowed physical ports on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#max_ports CapabilitySwitchCapability#max_ports}
  */
  readonly maxPorts?: number;
  /**
  * Maximum allowed physical slots on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#max_slots CapabilitySwitchCapability#max_slots}
  */
  readonly maxSlots?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#min_version_map_for_switch_features CapabilitySwitchCapability#min_version_map_for_switch_features}
  */
  readonly minVersionMapForSwitchFeatures?: CapabilitySwitchCapabilityMinVersionMapForSwitchFeatures[] | cdktf.IResolvable;
  /**
  * Minimum firmware version supported for breakout ports on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#min_version_map_with_breakout_support CapabilitySwitchCapability#min_version_map_with_breakout_support}
  */
  readonly minVersionMapWithBreakoutSupport?: CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport[] | cdktf.IResolvable;
  /**
  * Minimum firmware version supported for locator leds on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#min_version_map_with_locator_led_support CapabilitySwitchCapability#min_version_map_with_locator_led_support}
  */
  readonly minVersionMapWithLocatorLedSupport?: CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport[] | cdktf.IResolvable;
  /**
  * Minimum firmware version supported for 'negotiate auto 25000' port admin speed on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#min_version_map_with_neg_auto25g_support CapabilitySwitchCapability#min_version_map_with_neg_auto25g_support}
  */
  readonly minVersionMapWithNegAuto25GSupport?: CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport[] | cdktf.IResolvable;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#mod_time CapabilitySwitchCapability#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#moid CapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * An unique identifer for a capability descriptor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#name CapabilitySwitchCapability#name}
  */
  readonly name?: string;
  /**
  * List of network limitations for this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#network_limits CapabilitySwitchCapability#network_limits}
  */
  readonly networkLimits?: CapabilitySwitchCapabilityNetworkLimits[] | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#owners CapabilitySwitchCapability#owners}
  */
  readonly owners?: string[];
  /**
  * A reference to a moBaseMo resource.
  * When the $expand query parameter is specified, the referenced resource is returned inline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#parent CapabilitySwitchCapability#parent}
  */
  readonly parent?: CapabilitySwitchCapabilityParent[] | cdktf.IResolvable;
  /**
  * An array of relationships to moBaseMo resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#permission_resources CapabilitySwitchCapability#permission_resources}
  */
  readonly permissionResources?: CapabilitySwitchCapabilityPermissionResources[] | cdktf.IResolvable;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#pid CapabilitySwitchCapability#pid}
  */
  readonly pid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting100g_speed CapabilitySwitchCapability#ports_supporting100g_speed}
  */
  readonly portsSupporting100GSpeed?: CapabilitySwitchCapabilityPortsSupporting100GSpeed[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting10g_speed CapabilitySwitchCapability#ports_supporting10g_speed}
  */
  readonly portsSupporting10GSpeed?: CapabilitySwitchCapabilityPortsSupporting10GSpeed[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting1g_speed CapabilitySwitchCapability#ports_supporting1g_speed}
  */
  readonly portsSupporting1GSpeed?: CapabilitySwitchCapabilityPortsSupporting1GSpeed[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting25g_speed CapabilitySwitchCapability#ports_supporting25g_speed}
  */
  readonly portsSupporting25GSpeed?: CapabilitySwitchCapabilityPortsSupporting25GSpeed[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting40g_speed CapabilitySwitchCapability#ports_supporting40g_speed}
  */
  readonly portsSupporting40GSpeed?: CapabilitySwitchCapabilityPortsSupporting40GSpeed[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting_appliance_role CapabilitySwitchCapability#ports_supporting_appliance_role}
  */
  readonly portsSupportingApplianceRole?: CapabilitySwitchCapabilityPortsSupportingApplianceRole[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting_breakout CapabilitySwitchCapability#ports_supporting_breakout}
  */
  readonly portsSupportingBreakout?: CapabilitySwitchCapabilityPortsSupportingBreakout[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting_fcoe CapabilitySwitchCapability#ports_supporting_fcoe}
  */
  readonly portsSupportingFcoe?: CapabilitySwitchCapabilityPortsSupportingFcoe[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting_inter_cluster_link CapabilitySwitchCapability#ports_supporting_inter_cluster_link}
  */
  readonly portsSupportingInterClusterLink?: CapabilitySwitchCapabilityPortsSupportingInterClusterLink[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ports_supporting_server_role CapabilitySwitchCapability#ports_supporting_server_role}
  */
  readonly portsSupportingServerRole?: CapabilitySwitchCapabilityPortsSupportingServerRole[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#reserved_vsans CapabilitySwitchCapability#reserved_vsans}
  */
  readonly reservedVsans?: CapabilitySwitchCapabilityReservedVsans[] | cdktf.IResolvable;
  /**
  * Sereno Adaptor with Netflow support on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#sereno_netflow_supported CapabilitySwitchCapability#sereno_netflow_supported}
  */
  readonly serenoNetflowSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#server_role_supported_on_breakout CapabilitySwitchCapability#server_role_supported_on_breakout}
  */
  readonly serverRoleSupportedOnBreakout?: string[];
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#shared_scope CapabilitySwitchCapability#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * SKU information for Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#sku CapabilitySwitchCapability#sku}
  */
  readonly sku?: string;
  /**
  * List of storage limitations for this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#storage_limits CapabilitySwitchCapability#storage_limits}
  */
  readonly storageLimits?: CapabilitySwitchCapabilityStorageLimits[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#switching_mode_capabilities CapabilitySwitchCapability#switching_mode_capabilities}
  */
  readonly switchingModeCapabilities?: CapabilitySwitchCapabilitySwitchingModeCapabilities[] | cdktf.IResolvable;
  /**
  * List of system limitations for this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#system_limits CapabilitySwitchCapability#system_limits}
  */
  readonly systemLimits?: CapabilitySwitchCapabilitySystemLimits[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#tags CapabilitySwitchCapability#tags}
  */
  readonly tags?: CapabilitySwitchCapabilityTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#un_supported_equipment_model CapabilitySwitchCapability#un_supported_equipment_model}
  */
  readonly unSupportedEquipmentModel?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#unified_ports CapabilitySwitchCapability#unified_ports}
  */
  readonly unifiedPorts?: CapabilitySwitchCapabilityUnifiedPorts[] | cdktf.IResolvable;
  /**
  * The Slider rule for Unified ports on this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#unified_rule CapabilitySwitchCapability#unified_rule}
  */
  readonly unifiedRule?: string;
  /**
  * 'Negotiate Auto 25000' admin speed support on this switch for port or port-channel
  * with Ethernet Uplink/Appliance/FCoE Uplink roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#uplink_admin_port_speed_neg_auto25_gbps_supported CapabilitySwitchCapability#uplink_admin_port_speed_neg_auto25_gbps_supported}
  */
  readonly uplinkAdminPortSpeedNegAuto25GbpsSupported?: boolean | cdktf.IResolvable;
  /**
  * The versioning info for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#version_context CapabilitySwitchCapability#version_context}
  */
  readonly versionContext?: CapabilitySwitchCapabilityVersionContext[] | cdktf.IResolvable;
  /**
  * VID information for Switch/Fabric-Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#vid CapabilitySwitchCapability#vid}
  */
  readonly vid?: string;
}
export interface CapabilitySwitchCapabilityAllowedUplinkPcIdRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_pc_id CapabilitySwitchCapability#end_pc_id}
  */
  readonly endPcId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_pc_id CapabilitySwitchCapability#start_pc_id}
  */
  readonly startPcId?: number;
}

export function capabilitySwitchCapabilityAllowedUplinkPcIdRangeToTerraform(struct?: CapabilitySwitchCapabilityAllowedUplinkPcIdRange | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityAllowedUplinkPcIdRangeToHclTerraform(struct?: CapabilitySwitchCapabilityAllowedUplinkPcIdRange | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityAllowedUplinkPcIdRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityAllowedUplinkPcIdRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityAllowedUplinkPcIdRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._endPcId = undefined;
      this._objectType = undefined;
      this._startPcId = undefined;
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
      this._endPcId = value.endPcId;
      this._objectType = value.objectType;
      this._startPcId = value.startPcId;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_pc_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_pc_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityAllowedUplinkPcIdRangeList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityAllowedUplinkPcIdRange[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityAllowedUplinkPcIdRangeOutputReference {
    return new CapabilitySwitchCapabilityAllowedUplinkPcIdRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#moid CapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#selector CapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function capabilitySwitchCapabilityAncestorsToTerraform(struct?: CapabilitySwitchCapabilityAncestors | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityAncestorsToHclTerraform(struct?: CapabilitySwitchCapabilityAncestors | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityAncestors | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityAncestorsList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityAncestors[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityAncestorsOutputReference {
    return new CapabilitySwitchCapabilityAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityFcEndHostModeReservedVsans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityFcEndHostModeReservedVsansToTerraform(struct?: CapabilitySwitchCapabilityFcEndHostModeReservedVsans | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityFcEndHostModeReservedVsansToHclTerraform(struct?: CapabilitySwitchCapabilityFcEndHostModeReservedVsans | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityFcEndHostModeReservedVsansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityFcEndHostModeReservedVsans | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityFcEndHostModeReservedVsans | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityFcEndHostModeReservedVsansList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityFcEndHostModeReservedVsans[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityFcEndHostModeReservedVsansOutputReference {
    return new CapabilitySwitchCapabilityFcEndHostModeReservedVsansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityMacsecSupportedPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityMacsecSupportedPortsToTerraform(struct?: CapabilitySwitchCapabilityMacsecSupportedPorts | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityMacsecSupportedPortsToHclTerraform(struct?: CapabilitySwitchCapabilityMacsecSupportedPorts | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityMacsecSupportedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityMacsecSupportedPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityMacsecSupportedPorts | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityMacsecSupportedPortsList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityMacsecSupportedPorts[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityMacsecSupportedPortsOutputReference {
    return new CapabilitySwitchCapabilityMacsecSupportedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#bundle_version CapabilitySwitchCapability#bundle_version}
  */
  readonly bundleVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#device_firmware_version CapabilitySwitchCapability#device_firmware_version}
  */
  readonly deviceFirmwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function capabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapToTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapToHclTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._bundleVersion = undefined;
      this._classId = undefined;
      this._deviceFirmwareVersion = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._bundleVersion = value.bundleVersion;
      this._classId = value.classId;
      this._deviceFirmwareVersion = value.deviceFirmwareVersion;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // bundle_version - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // device_firmware_version - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapOutputReference {
    return new CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityMinVersionMapForSwitchFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#feature_name CapabilitySwitchCapability#feature_name}
  */
  readonly featureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#version_map CapabilitySwitchCapability#version_map}
  */
  readonly versionMap?: CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap[] | cdktf.IResolvable;
}

export function capabilitySwitchCapabilityMinVersionMapForSwitchFeaturesToTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapForSwitchFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    version_map: cdktf.listMapper(capabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapToTerraform, false)(struct!.versionMap),
  }
}


export function capabilitySwitchCapabilityMinVersionMapForSwitchFeaturesToHclTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapForSwitchFeatures | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(capabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapToHclTerraform, false)(struct!.versionMap),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityMinVersionMapForSwitchFeatures | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityMinVersionMapForSwitchFeatures | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // feature_name - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // version_map - computed: true, optional: true, required: false
  private _versionMap = new CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMapList(this, "version_map", false);
  public get versionMap() {
    return this._versionMap;
  }
  public putVersionMap(value: CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesVersionMap[] | cdktf.IResolvable) {
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

export class CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityMinVersionMapForSwitchFeatures[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesOutputReference {
    return new CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#bundle_version CapabilitySwitchCapability#bundle_version}
  */
  readonly bundleVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#device_firmware_version CapabilitySwitchCapability#device_firmware_version}
  */
  readonly deviceFirmwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function capabilitySwitchCapabilityMinVersionMapWithBreakoutSupportToTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityMinVersionMapWithBreakoutSupportToHclTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._bundleVersion = undefined;
      this._classId = undefined;
      this._deviceFirmwareVersion = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._bundleVersion = value.bundleVersion;
      this._classId = value.classId;
      this._deviceFirmwareVersion = value.deviceFirmwareVersion;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // bundle_version - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // device_firmware_version - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportOutputReference {
    return new CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#bundle_version CapabilitySwitchCapability#bundle_version}
  */
  readonly bundleVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#device_firmware_version CapabilitySwitchCapability#device_firmware_version}
  */
  readonly deviceFirmwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function capabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportToTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportToHclTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._bundleVersion = undefined;
      this._classId = undefined;
      this._deviceFirmwareVersion = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._bundleVersion = value.bundleVersion;
      this._classId = value.classId;
      this._deviceFirmwareVersion = value.deviceFirmwareVersion;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // bundle_version - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // device_firmware_version - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportOutputReference {
    return new CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#bundle_version CapabilitySwitchCapability#bundle_version}
  */
  readonly bundleVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#device_firmware_version CapabilitySwitchCapability#device_firmware_version}
  */
  readonly deviceFirmwareVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function capabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportToTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportToHclTerraform(struct?: CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._bundleVersion = undefined;
      this._classId = undefined;
      this._deviceFirmwareVersion = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._bundleVersion = value.bundleVersion;
      this._classId = value.classId;
      this._deviceFirmwareVersion = value.deviceFirmwareVersion;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // bundle_version - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // device_firmware_version - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportOutputReference {
    return new CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityNetworkLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#max_compressed_port_vlan_count CapabilitySwitchCapability#max_compressed_port_vlan_count}
  */
  readonly maxCompressedPortVlanCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#max_uncompressed_port_vlan_count CapabilitySwitchCapability#max_uncompressed_port_vlan_count}
  */
  readonly maxUncompressedPortVlanCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_active_traffic_monitoring_sessions CapabilitySwitchCapability#maximum_active_traffic_monitoring_sessions}
  */
  readonly maximumActiveTrafficMonitoringSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_ethernet_port_channels CapabilitySwitchCapability#maximum_ethernet_port_channels}
  */
  readonly maximumEthernetPortChannels?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_ethernet_uplink_ports CapabilitySwitchCapability#maximum_ethernet_uplink_ports}
  */
  readonly maximumEthernetUplinkPorts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_fc_port_channel_members CapabilitySwitchCapability#maximum_fc_port_channel_members}
  */
  readonly maximumFcPortChannelMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_fc_port_channels CapabilitySwitchCapability#maximum_fc_port_channels}
  */
  readonly maximumFcPortChannels?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_igmp_groups CapabilitySwitchCapability#maximum_igmp_groups}
  */
  readonly maximumIgmpGroups?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_port_channel_members CapabilitySwitchCapability#maximum_port_channel_members}
  */
  readonly maximumPortChannelMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_primary_vlan CapabilitySwitchCapability#maximum_primary_vlan}
  */
  readonly maximumPrimaryVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_secondary_vlan CapabilitySwitchCapability#maximum_secondary_vlan}
  */
  readonly maximumSecondaryVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_secondary_vlan_per_primary CapabilitySwitchCapability#maximum_secondary_vlan_per_primary}
  */
  readonly maximumSecondaryVlanPerPrimary?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_vifs CapabilitySwitchCapability#maximum_vifs}
  */
  readonly maximumVifs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_vlans CapabilitySwitchCapability#maximum_vlans}
  */
  readonly maximumVlans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#minimum_active_fans CapabilitySwitchCapability#minimum_active_fans}
  */
  readonly minimumActiveFans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function capabilitySwitchCapabilityNetworkLimitsToTerraform(struct?: CapabilitySwitchCapabilityNetworkLimits | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityNetworkLimitsToHclTerraform(struct?: CapabilitySwitchCapabilityNetworkLimits | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityNetworkLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityNetworkLimits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityNetworkLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // max_compressed_port_vlan_count - computed: true, optional: true, required: false
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

  // max_uncompressed_port_vlan_count - computed: true, optional: true, required: false
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

  // maximum_active_traffic_monitoring_sessions - computed: true, optional: true, required: false
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

  // maximum_ethernet_port_channels - computed: true, optional: true, required: false
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

  // maximum_ethernet_uplink_ports - computed: true, optional: true, required: false
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

  // maximum_fc_port_channel_members - computed: true, optional: true, required: false
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

  // maximum_fc_port_channels - computed: true, optional: true, required: false
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

  // maximum_igmp_groups - computed: true, optional: true, required: false
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

  // maximum_port_channel_members - computed: true, optional: true, required: false
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

  // maximum_primary_vlan - computed: true, optional: true, required: false
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

  // maximum_secondary_vlan - computed: true, optional: true, required: false
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

  // maximum_secondary_vlan_per_primary - computed: true, optional: true, required: false
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

  // maximum_vifs - computed: true, optional: true, required: false
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

  // maximum_vlans - computed: true, optional: true, required: false
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

  // minimum_active_fans - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityNetworkLimitsList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityNetworkLimits[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityNetworkLimitsOutputReference {
    return new CapabilitySwitchCapabilityNetworkLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#moid CapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#selector CapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function capabilitySwitchCapabilityParentToTerraform(struct?: CapabilitySwitchCapabilityParent | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityParentToHclTerraform(struct?: CapabilitySwitchCapabilityParent | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityParent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityParent | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityParentList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityParent[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityParentOutputReference {
    return new CapabilitySwitchCapabilityParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#moid CapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#selector CapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function capabilitySwitchCapabilityPermissionResourcesToTerraform(struct?: CapabilitySwitchCapabilityPermissionResources | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPermissionResourcesToHclTerraform(struct?: CapabilitySwitchCapabilityPermissionResources | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPermissionResources | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPermissionResourcesOutputReference {
    return new CapabilitySwitchCapabilityPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupporting100GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupporting100GSpeedToTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting100GSpeed | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupporting100GSpeedToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting100GSpeed | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupporting100GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupporting100GSpeed | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupporting100GSpeed | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupporting100GSpeedList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupporting100GSpeed[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupporting100GSpeedOutputReference {
    return new CapabilitySwitchCapabilityPortsSupporting100GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupporting10GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupporting10GSpeedToTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting10GSpeed | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupporting10GSpeedToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting10GSpeed | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupporting10GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupporting10GSpeed | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupporting10GSpeed | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupporting10GSpeedList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupporting10GSpeed[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupporting10GSpeedOutputReference {
    return new CapabilitySwitchCapabilityPortsSupporting10GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupporting1GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupporting1GSpeedToTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting1GSpeed | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupporting1GSpeedToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting1GSpeed | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupporting1GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupporting1GSpeed | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupporting1GSpeed | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupporting1GSpeedList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupporting1GSpeed[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupporting1GSpeedOutputReference {
    return new CapabilitySwitchCapabilityPortsSupporting1GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupporting25GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupporting25GSpeedToTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting25GSpeed | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupporting25GSpeedToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting25GSpeed | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupporting25GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupporting25GSpeed | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupporting25GSpeed | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupporting25GSpeedList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupporting25GSpeed[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupporting25GSpeedOutputReference {
    return new CapabilitySwitchCapabilityPortsSupporting25GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupporting40GSpeed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupporting40GSpeedToTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting40GSpeed | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupporting40GSpeedToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupporting40GSpeed | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupporting40GSpeedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupporting40GSpeed | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupporting40GSpeed | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupporting40GSpeedList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupporting40GSpeed[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupporting40GSpeedOutputReference {
    return new CapabilitySwitchCapabilityPortsSupporting40GSpeedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupportingApplianceRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupportingApplianceRoleToTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingApplianceRole | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupportingApplianceRoleToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingApplianceRole | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupportingApplianceRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupportingApplianceRole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupportingApplianceRole | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupportingApplianceRoleList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupportingApplianceRole[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupportingApplianceRoleOutputReference {
    return new CapabilitySwitchCapabilityPortsSupportingApplianceRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupportingBreakout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupportingBreakoutToTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingBreakout | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupportingBreakoutToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingBreakout | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupportingBreakoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupportingBreakout | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupportingBreakout | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupportingBreakoutList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupportingBreakout[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupportingBreakoutOutputReference {
    return new CapabilitySwitchCapabilityPortsSupportingBreakoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupportingFcoe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupportingFcoeToTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingFcoe | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupportingFcoeToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingFcoe | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupportingFcoeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupportingFcoe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupportingFcoe | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupportingFcoeList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupportingFcoe[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupportingFcoeOutputReference {
    return new CapabilitySwitchCapabilityPortsSupportingFcoeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupportingInterClusterLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupportingInterClusterLinkToTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingInterClusterLink | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupportingInterClusterLinkToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingInterClusterLink | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupportingInterClusterLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupportingInterClusterLink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupportingInterClusterLink | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupportingInterClusterLinkList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupportingInterClusterLink[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupportingInterClusterLinkOutputReference {
    return new CapabilitySwitchCapabilityPortsSupportingInterClusterLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityPortsSupportingServerRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityPortsSupportingServerRoleToTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingServerRole | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityPortsSupportingServerRoleToHclTerraform(struct?: CapabilitySwitchCapabilityPortsSupportingServerRole | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityPortsSupportingServerRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityPortsSupportingServerRole | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityPortsSupportingServerRole | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityPortsSupportingServerRoleList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityPortsSupportingServerRole[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityPortsSupportingServerRoleOutputReference {
    return new CapabilitySwitchCapabilityPortsSupportingServerRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityReservedVsans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityReservedVsansToTerraform(struct?: CapabilitySwitchCapabilityReservedVsans | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityReservedVsansToHclTerraform(struct?: CapabilitySwitchCapabilityReservedVsans | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityReservedVsansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityReservedVsans | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityReservedVsans | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityReservedVsansList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityReservedVsans[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityReservedVsansOutputReference {
    return new CapabilitySwitchCapabilityReservedVsansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityStorageLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_user_zone_count CapabilitySwitchCapability#maximum_user_zone_count}
  */
  readonly maximumUserZoneCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_virtual_fc_interfaces CapabilitySwitchCapability#maximum_virtual_fc_interfaces}
  */
  readonly maximumVirtualFcInterfaces?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_virtual_fc_interfaces_per_blade_server CapabilitySwitchCapability#maximum_virtual_fc_interfaces_per_blade_server}
  */
  readonly maximumVirtualFcInterfacesPerBladeServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_vsans CapabilitySwitchCapability#maximum_vsans}
  */
  readonly maximumVsans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_zone_count CapabilitySwitchCapability#maximum_zone_count}
  */
  readonly maximumZoneCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function capabilitySwitchCapabilityStorageLimitsToTerraform(struct?: CapabilitySwitchCapabilityStorageLimits | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityStorageLimitsToHclTerraform(struct?: CapabilitySwitchCapabilityStorageLimits | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityStorageLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityStorageLimits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityStorageLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._maximumUserZoneCount = undefined;
      this._maximumVirtualFcInterfaces = undefined;
      this._maximumVirtualFcInterfacesPerBladeServer = undefined;
      this._maximumVsans = undefined;
      this._maximumZoneCount = undefined;
      this._objectType = undefined;
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
      this._maximumUserZoneCount = value.maximumUserZoneCount;
      this._maximumVirtualFcInterfaces = value.maximumVirtualFcInterfaces;
      this._maximumVirtualFcInterfacesPerBladeServer = value.maximumVirtualFcInterfacesPerBladeServer;
      this._maximumVsans = value.maximumVsans;
      this._maximumZoneCount = value.maximumZoneCount;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // maximum_user_zone_count - computed: true, optional: true, required: false
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

  // maximum_virtual_fc_interfaces - computed: true, optional: true, required: false
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

  // maximum_virtual_fc_interfaces_per_blade_server - computed: true, optional: true, required: false
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

  // maximum_vsans - computed: true, optional: true, required: false
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

  // maximum_zone_count - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityStorageLimitsList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityStorageLimits[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityStorageLimitsOutputReference {
    return new CapabilitySwitchCapabilityStorageLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilitySwitchingModeCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#switching_mode CapabilitySwitchCapability#switching_mode}
  */
  readonly switchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#vp_compression_supported CapabilitySwitchCapability#vp_compression_supported}
  */
  readonly vpCompressionSupported?: boolean | cdktf.IResolvable;
}

export function capabilitySwitchCapabilitySwitchingModeCapabilitiesToTerraform(struct?: CapabilitySwitchCapabilitySwitchingModeCapabilities | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilitySwitchingModeCapabilitiesToHclTerraform(struct?: CapabilitySwitchCapabilitySwitchingModeCapabilities | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilitySwitchingModeCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilitySwitchingModeCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilitySwitchingModeCapabilities | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // switching_mode - computed: true, optional: true, required: false
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

  // vp_compression_supported - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilitySwitchingModeCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilitySwitchingModeCapabilities[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilitySwitchingModeCapabilitiesOutputReference {
    return new CapabilitySwitchCapabilitySwitchingModeCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilitySystemLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_chassis_count CapabilitySwitchCapability#maximum_chassis_count}
  */
  readonly maximumChassisCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_fex_per_domain CapabilitySwitchCapability#maximum_fex_per_domain}
  */
  readonly maximumFexPerDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#maximum_servers_per_domain CapabilitySwitchCapability#maximum_servers_per_domain}
  */
  readonly maximumServersPerDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
}

export function capabilitySwitchCapabilitySystemLimitsToTerraform(struct?: CapabilitySwitchCapabilitySystemLimits | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilitySystemLimitsToHclTerraform(struct?: CapabilitySwitchCapabilitySystemLimits | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilitySystemLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilitySystemLimits | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilitySystemLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._maximumChassisCount = undefined;
      this._maximumFexPerDomain = undefined;
      this._maximumServersPerDomain = undefined;
      this._objectType = undefined;
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
      this._maximumChassisCount = value.maximumChassisCount;
      this._maximumFexPerDomain = value.maximumFexPerDomain;
      this._maximumServersPerDomain = value.maximumServersPerDomain;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // maximum_chassis_count - computed: true, optional: true, required: false
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

  // maximum_fex_per_domain - computed: true, optional: true, required: false
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

  // maximum_servers_per_domain - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilitySystemLimitsList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilitySystemLimits[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilitySystemLimitsOutputReference {
    return new CapabilitySwitchCapabilitySystemLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#moid CapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#selector CapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function capabilitySwitchCapabilityTagsAncestorDefinitionsToTerraform(struct?: CapabilitySwitchCapabilityTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityTagsAncestorDefinitionsToHclTerraform(struct?: CapabilitySwitchCapabilityTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityTagsAncestorDefinitionsOutputReference {
    return new CapabilitySwitchCapabilityTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#moid CapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#selector CapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function capabilitySwitchCapabilityTagsDefinitionToTerraform(struct?: CapabilitySwitchCapabilityTagsDefinition | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityTagsDefinitionToHclTerraform(struct?: CapabilitySwitchCapabilityTagsDefinition | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityTagsDefinition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityTagsDefinition | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityTagsDefinitionList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityTagsDefinition[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityTagsDefinitionOutputReference {
    return new CapabilitySwitchCapabilityTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ancestor_definitions CapabilitySwitchCapability#ancestor_definitions}
  */
  readonly ancestorDefinitions?: CapabilitySwitchCapabilityTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#definition CapabilitySwitchCapability#definition}
  */
  readonly definition?: CapabilitySwitchCapabilityTagsDefinition[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#key CapabilitySwitchCapability#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#propagated CapabilitySwitchCapability#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#type CapabilitySwitchCapability#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#value CapabilitySwitchCapability#value}
  */
  readonly value?: string;
}

export function capabilitySwitchCapabilityTagsToTerraform(struct?: CapabilitySwitchCapabilityTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    ancestor_definitions: cdktf.listMapper(capabilitySwitchCapabilityTagsAncestorDefinitionsToTerraform, false)(struct!.ancestorDefinitions),
    definition: cdktf.listMapper(capabilitySwitchCapabilityTagsDefinitionToTerraform, false)(struct!.definition),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function capabilitySwitchCapabilityTagsToHclTerraform(struct?: CapabilitySwitchCapabilityTags | cdktf.IResolvable): any {
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
    ancestor_definitions: {
      value: cdktf.listMapperHcl(capabilitySwitchCapabilityTagsAncestorDefinitionsToHclTerraform, false)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilitySwitchCapabilityTagsAncestorDefinitionsList",
    },
    definition: {
      value: cdktf.listMapperHcl(capabilitySwitchCapabilityTagsDefinitionToHclTerraform, false)(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilitySwitchCapabilityTagsDefinitionList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapabilitySwitchCapabilityTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapabilitySwitchCapabilityTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
      this._key = value.key;
      this._propagated = value.propagated;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // ancestor_definitions - computed: true, optional: true, required: false
  private _ancestorDefinitions = new CapabilitySwitchCapabilityTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: CapabilitySwitchCapabilityTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: true, optional: true, required: false
  private _definition = new CapabilitySwitchCapabilityTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: CapabilitySwitchCapabilityTagsDefinition[] | cdktf.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // key - computed: true, optional: true, required: false
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

  // propagated - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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
}

export class CapabilitySwitchCapabilityTagsList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityTags[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityTagsOutputReference {
    return new CapabilitySwitchCapabilityTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityUnifiedPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_port_id CapabilitySwitchCapability#end_port_id}
  */
  readonly endPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#end_slot_id CapabilitySwitchCapability#end_slot_id}
  */
  readonly endSlotId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_port_id CapabilitySwitchCapability#start_port_id}
  */
  readonly startPortId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#start_slot_id CapabilitySwitchCapability#start_slot_id}
  */
  readonly startSlotId?: number;
}

export function capabilitySwitchCapabilityUnifiedPortsToTerraform(struct?: CapabilitySwitchCapabilityUnifiedPorts | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityUnifiedPortsToHclTerraform(struct?: CapabilitySwitchCapabilityUnifiedPorts | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityUnifiedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityUnifiedPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityUnifiedPorts | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // end_port_id - computed: true, optional: true, required: false
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

  // end_slot_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // start_port_id - computed: true, optional: true, required: false
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

  // start_slot_id - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityUnifiedPortsList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityUnifiedPorts[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityUnifiedPortsOutputReference {
    return new CapabilitySwitchCapabilityUnifiedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#moid CapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#selector CapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function capabilitySwitchCapabilityVersionContextInterestedMosToTerraform(struct?: CapabilitySwitchCapabilityVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityVersionContextInterestedMosToHclTerraform(struct?: CapabilitySwitchCapabilityVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityVersionContextInterestedMosOutputReference {
    return new CapabilitySwitchCapabilityVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#moid CapabilitySwitchCapability#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#selector CapabilitySwitchCapability#selector}
  */
  readonly selector?: string;
}

export function capabilitySwitchCapabilityVersionContextRefMoToTerraform(struct?: CapabilitySwitchCapabilityVersionContextRefMo | cdktf.IResolvable): any {
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


export function capabilitySwitchCapabilityVersionContextRefMoToHclTerraform(struct?: CapabilitySwitchCapabilityVersionContextRefMo | cdktf.IResolvable): any {
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

export class CapabilitySwitchCapabilityVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityVersionContextRefMo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CapabilitySwitchCapabilityVersionContextRefMo | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class CapabilitySwitchCapabilityVersionContextRefMoList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityVersionContextRefMo[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityVersionContextRefMoOutputReference {
    return new CapabilitySwitchCapabilityVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CapabilitySwitchCapabilityVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#additional_properties CapabilitySwitchCapability#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#class_id CapabilitySwitchCapability#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#interested_mos CapabilitySwitchCapability#interested_mos}
  */
  readonly interestedMos?: CapabilitySwitchCapabilityVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#marked_for_deletion CapabilitySwitchCapability#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#nr_version CapabilitySwitchCapability#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#object_type CapabilitySwitchCapability#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#ref_mo CapabilitySwitchCapability#ref_mo}
  */
  readonly refMo?: CapabilitySwitchCapabilityVersionContextRefMo[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#timestamp CapabilitySwitchCapability#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#version_type CapabilitySwitchCapability#version_type}
  */
  readonly versionType?: string;
}

export function capabilitySwitchCapabilityVersionContextToTerraform(struct?: CapabilitySwitchCapabilityVersionContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    interested_mos: cdktf.listMapper(capabilitySwitchCapabilityVersionContextInterestedMosToTerraform, false)(struct!.interestedMos),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ref_mo: cdktf.listMapper(capabilitySwitchCapabilityVersionContextRefMoToTerraform, false)(struct!.refMo),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
  }
}


export function capabilitySwitchCapabilityVersionContextToHclTerraform(struct?: CapabilitySwitchCapabilityVersionContext | cdktf.IResolvable): any {
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
    interested_mos: {
      value: cdktf.listMapperHcl(capabilitySwitchCapabilityVersionContextInterestedMosToHclTerraform, false)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilitySwitchCapabilityVersionContextInterestedMosList",
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
    ref_mo: {
      value: cdktf.listMapperHcl(capabilitySwitchCapabilityVersionContextRefMoToHclTerraform, false)(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "CapabilitySwitchCapabilityVersionContextRefMoList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CapabilitySwitchCapabilityVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CapabilitySwitchCapabilityVersionContext | cdktf.IResolvable | undefined {
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
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
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
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CapabilitySwitchCapabilityVersionContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._interestedMos.internalValue = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._refMo.internalValue = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
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
      this._interestedMos.internalValue = value.interestedMos;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._refMo.internalValue = value.refMo;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // interested_mos - computed: true, optional: true, required: false
  private _interestedMos = new CapabilitySwitchCapabilityVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: CapabilitySwitchCapabilityVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // marked_for_deletion - computed: true, optional: true, required: false
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

  // nr_version - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // ref_mo - computed: true, optional: true, required: false
  private _refMo = new CapabilitySwitchCapabilityVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: CapabilitySwitchCapabilityVersionContextRefMo[] | cdktf.IResolvable) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }

  // timestamp - computed: true, optional: true, required: false
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

  // version_type - computed: true, optional: true, required: false
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
}

export class CapabilitySwitchCapabilityVersionContextList extends cdktf.ComplexList {
  public internalValue? : CapabilitySwitchCapabilityVersionContext[] | cdktf.IResolvable

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
  public get(index: number): CapabilitySwitchCapabilityVersionContextOutputReference {
    return new CapabilitySwitchCapabilityVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability intersight_capability_switch_capability}
*/
export class CapabilitySwitchCapability extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_capability_switch_capability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapabilitySwitchCapability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapabilitySwitchCapability to import
  * @param importFromId The id of the existing CapabilitySwitchCapability that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapabilitySwitchCapability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_capability_switch_capability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/resources/capability_switch_capability intersight_capability_switch_capability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapabilitySwitchCapabilityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CapabilitySwitchCapabilityConfig = {}) {
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
    this._allowedUplinkPcIdRange.internalValue = config.allowedUplinkPcIdRange;
    this._ancestors.internalValue = config.ancestors;
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._defaultFcoeVlan = config.defaultFcoeVlan;
    this._domainGroupMoid = config.domainGroupMoid;
    this._dynamicVifsSupported = config.dynamicVifsSupported;
    this._fanModulesSupported = config.fanModulesSupported;
    this._fcEndHostModeReservedVsans.internalValue = config.fcEndHostModeReservedVsans;
    this._fcUplinkPortsAutoNegotiationSupported = config.fcUplinkPortsAutoNegotiationSupported;
    this._id = config.id;
    this._immControlsVpcompression = config.immControlsVpcompression;
    this._interClusterLinkVlanSupported = config.interClusterLinkVlanSupported;
    this._locatorBeaconSupported = config.locatorBeaconSupported;
    this._macsecSupportedPorts.internalValue = config.macsecSupportedPorts;
    this._maxPorts = config.maxPorts;
    this._maxSlots = config.maxSlots;
    this._minVersionMapForSwitchFeatures.internalValue = config.minVersionMapForSwitchFeatures;
    this._minVersionMapWithBreakoutSupport.internalValue = config.minVersionMapWithBreakoutSupport;
    this._minVersionMapWithLocatorLedSupport.internalValue = config.minVersionMapWithLocatorLedSupport;
    this._minVersionMapWithNegAuto25GSupport.internalValue = config.minVersionMapWithNegAuto25GSupport;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._name = config.name;
    this._networkLimits.internalValue = config.networkLimits;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._pid = config.pid;
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
    this._serenoNetflowSupported = config.serenoNetflowSupported;
    this._serverRoleSupportedOnBreakout = config.serverRoleSupportedOnBreakout;
    this._sharedScope = config.sharedScope;
    this._sku = config.sku;
    this._storageLimits.internalValue = config.storageLimits;
    this._switchingModeCapabilities.internalValue = config.switchingModeCapabilities;
    this._systemLimits.internalValue = config.systemLimits;
    this._tags.internalValue = config.tags;
    this._unSupportedEquipmentModel = config.unSupportedEquipmentModel;
    this._unifiedPorts.internalValue = config.unifiedPorts;
    this._unifiedRule = config.unifiedRule;
    this._uplinkAdminPortSpeedNegAuto25GbpsSupported = config.uplinkAdminPortSpeedNegAuto25GbpsSupported;
    this._versionContext.internalValue = config.versionContext;
    this._vid = config.vid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: true, optional: true, required: false
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

  // allowed_uplink_pc_id_range - computed: true, optional: true, required: false
  private _allowedUplinkPcIdRange = new CapabilitySwitchCapabilityAllowedUplinkPcIdRangeList(this, "allowed_uplink_pc_id_range", false);
  public get allowedUplinkPcIdRange() {
    return this._allowedUplinkPcIdRange;
  }
  public putAllowedUplinkPcIdRange(value: CapabilitySwitchCapabilityAllowedUplinkPcIdRange[] | cdktf.IResolvable) {
    this._allowedUplinkPcIdRange.internalValue = value;
  }
  public resetAllowedUplinkPcIdRange() {
    this._allowedUplinkPcIdRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUplinkPcIdRangeInput() {
    return this._allowedUplinkPcIdRange.internalValue;
  }

  // ancestors - computed: true, optional: true, required: false
  private _ancestors = new CapabilitySwitchCapabilityAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: CapabilitySwitchCapabilityAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
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

  // create_time - computed: true, optional: true, required: false
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

  // default_fcoe_vlan - computed: true, optional: true, required: false
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

  // domain_group_moid - computed: true, optional: true, required: false
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

  // dynamic_vifs_supported - computed: true, optional: true, required: false
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

  // fan_modules_supported - computed: true, optional: true, required: false
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

  // fc_end_host_mode_reserved_vsans - computed: true, optional: true, required: false
  private _fcEndHostModeReservedVsans = new CapabilitySwitchCapabilityFcEndHostModeReservedVsansList(this, "fc_end_host_mode_reserved_vsans", false);
  public get fcEndHostModeReservedVsans() {
    return this._fcEndHostModeReservedVsans;
  }
  public putFcEndHostModeReservedVsans(value: CapabilitySwitchCapabilityFcEndHostModeReservedVsans[] | cdktf.IResolvable) {
    this._fcEndHostModeReservedVsans.internalValue = value;
  }
  public resetFcEndHostModeReservedVsans() {
    this._fcEndHostModeReservedVsans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcEndHostModeReservedVsansInput() {
    return this._fcEndHostModeReservedVsans.internalValue;
  }

  // fc_uplink_ports_auto_negotiation_supported - computed: true, optional: true, required: false
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

  // imm_controls_vpcompression - computed: true, optional: true, required: false
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

  // inter_cluster_link_vlan_supported - computed: true, optional: true, required: false
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

  // locator_beacon_supported - computed: true, optional: true, required: false
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

  // macsec_supported_ports - computed: true, optional: true, required: false
  private _macsecSupportedPorts = new CapabilitySwitchCapabilityMacsecSupportedPortsList(this, "macsec_supported_ports", false);
  public get macsecSupportedPorts() {
    return this._macsecSupportedPorts;
  }
  public putMacsecSupportedPorts(value: CapabilitySwitchCapabilityMacsecSupportedPorts[] | cdktf.IResolvable) {
    this._macsecSupportedPorts.internalValue = value;
  }
  public resetMacsecSupportedPorts() {
    this._macsecSupportedPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecSupportedPortsInput() {
    return this._macsecSupportedPorts.internalValue;
  }

  // max_ports - computed: true, optional: true, required: false
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

  // max_slots - computed: true, optional: true, required: false
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

  // min_version_map_for_switch_features - computed: true, optional: true, required: false
  private _minVersionMapForSwitchFeatures = new CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesList(this, "min_version_map_for_switch_features", false);
  public get minVersionMapForSwitchFeatures() {
    return this._minVersionMapForSwitchFeatures;
  }
  public putMinVersionMapForSwitchFeatures(value: CapabilitySwitchCapabilityMinVersionMapForSwitchFeatures[] | cdktf.IResolvable) {
    this._minVersionMapForSwitchFeatures.internalValue = value;
  }
  public resetMinVersionMapForSwitchFeatures() {
    this._minVersionMapForSwitchFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionMapForSwitchFeaturesInput() {
    return this._minVersionMapForSwitchFeatures.internalValue;
  }

  // min_version_map_with_breakout_support - computed: true, optional: true, required: false
  private _minVersionMapWithBreakoutSupport = new CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportList(this, "min_version_map_with_breakout_support", false);
  public get minVersionMapWithBreakoutSupport() {
    return this._minVersionMapWithBreakoutSupport;
  }
  public putMinVersionMapWithBreakoutSupport(value: CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupport[] | cdktf.IResolvable) {
    this._minVersionMapWithBreakoutSupport.internalValue = value;
  }
  public resetMinVersionMapWithBreakoutSupport() {
    this._minVersionMapWithBreakoutSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionMapWithBreakoutSupportInput() {
    return this._minVersionMapWithBreakoutSupport.internalValue;
  }

  // min_version_map_with_locator_led_support - computed: true, optional: true, required: false
  private _minVersionMapWithLocatorLedSupport = new CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportList(this, "min_version_map_with_locator_led_support", false);
  public get minVersionMapWithLocatorLedSupport() {
    return this._minVersionMapWithLocatorLedSupport;
  }
  public putMinVersionMapWithLocatorLedSupport(value: CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupport[] | cdktf.IResolvable) {
    this._minVersionMapWithLocatorLedSupport.internalValue = value;
  }
  public resetMinVersionMapWithLocatorLedSupport() {
    this._minVersionMapWithLocatorLedSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionMapWithLocatorLedSupportInput() {
    return this._minVersionMapWithLocatorLedSupport.internalValue;
  }

  // min_version_map_with_neg_auto25g_support - computed: true, optional: true, required: false
  private _minVersionMapWithNegAuto25GSupport = new CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportList(this, "min_version_map_with_neg_auto25g_support", false);
  public get minVersionMapWithNegAuto25GSupport() {
    return this._minVersionMapWithNegAuto25GSupport;
  }
  public putMinVersionMapWithNegAuto25GSupport(value: CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupport[] | cdktf.IResolvable) {
    this._minVersionMapWithNegAuto25GSupport.internalValue = value;
  }
  public resetMinVersionMapWithNegAuto25GSupport() {
    this._minVersionMapWithNegAuto25GSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionMapWithNegAuto25GSupportInput() {
    return this._minVersionMapWithNegAuto25GSupport.internalValue;
  }

  // mod_time - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // network_limits - computed: true, optional: true, required: false
  private _networkLimits = new CapabilitySwitchCapabilityNetworkLimitsList(this, "network_limits", false);
  public get networkLimits() {
    return this._networkLimits;
  }
  public putNetworkLimits(value: CapabilitySwitchCapabilityNetworkLimits[] | cdktf.IResolvable) {
    this._networkLimits.internalValue = value;
  }
  public resetNetworkLimits() {
    this._networkLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLimitsInput() {
    return this._networkLimits.internalValue;
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

  // owners - computed: true, optional: true, required: false
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

  // parent - computed: true, optional: true, required: false
  private _parent = new CapabilitySwitchCapabilityParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }
  public putParent(value: CapabilitySwitchCapabilityParent[] | cdktf.IResolvable) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: true, optional: true, required: false
  private _permissionResources = new CapabilitySwitchCapabilityPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: CapabilitySwitchCapabilityPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
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

  // ports_supporting100g_speed - computed: true, optional: true, required: false
  private _portsSupporting100GSpeed = new CapabilitySwitchCapabilityPortsSupporting100GSpeedList(this, "ports_supporting100g_speed", false);
  public get portsSupporting100GSpeed() {
    return this._portsSupporting100GSpeed;
  }
  public putPortsSupporting100GSpeed(value: CapabilitySwitchCapabilityPortsSupporting100GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting100GSpeed.internalValue = value;
  }
  public resetPortsSupporting100GSpeed() {
    this._portsSupporting100GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting100GSpeedInput() {
    return this._portsSupporting100GSpeed.internalValue;
  }

  // ports_supporting10g_speed - computed: true, optional: true, required: false
  private _portsSupporting10GSpeed = new CapabilitySwitchCapabilityPortsSupporting10GSpeedList(this, "ports_supporting10g_speed", false);
  public get portsSupporting10GSpeed() {
    return this._portsSupporting10GSpeed;
  }
  public putPortsSupporting10GSpeed(value: CapabilitySwitchCapabilityPortsSupporting10GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting10GSpeed.internalValue = value;
  }
  public resetPortsSupporting10GSpeed() {
    this._portsSupporting10GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting10GSpeedInput() {
    return this._portsSupporting10GSpeed.internalValue;
  }

  // ports_supporting1g_speed - computed: true, optional: true, required: false
  private _portsSupporting1GSpeed = new CapabilitySwitchCapabilityPortsSupporting1GSpeedList(this, "ports_supporting1g_speed", false);
  public get portsSupporting1GSpeed() {
    return this._portsSupporting1GSpeed;
  }
  public putPortsSupporting1GSpeed(value: CapabilitySwitchCapabilityPortsSupporting1GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting1GSpeed.internalValue = value;
  }
  public resetPortsSupporting1GSpeed() {
    this._portsSupporting1GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting1GSpeedInput() {
    return this._portsSupporting1GSpeed.internalValue;
  }

  // ports_supporting25g_speed - computed: true, optional: true, required: false
  private _portsSupporting25GSpeed = new CapabilitySwitchCapabilityPortsSupporting25GSpeedList(this, "ports_supporting25g_speed", false);
  public get portsSupporting25GSpeed() {
    return this._portsSupporting25GSpeed;
  }
  public putPortsSupporting25GSpeed(value: CapabilitySwitchCapabilityPortsSupporting25GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting25GSpeed.internalValue = value;
  }
  public resetPortsSupporting25GSpeed() {
    this._portsSupporting25GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting25GSpeedInput() {
    return this._portsSupporting25GSpeed.internalValue;
  }

  // ports_supporting40g_speed - computed: true, optional: true, required: false
  private _portsSupporting40GSpeed = new CapabilitySwitchCapabilityPortsSupporting40GSpeedList(this, "ports_supporting40g_speed", false);
  public get portsSupporting40GSpeed() {
    return this._portsSupporting40GSpeed;
  }
  public putPortsSupporting40GSpeed(value: CapabilitySwitchCapabilityPortsSupporting40GSpeed[] | cdktf.IResolvable) {
    this._portsSupporting40GSpeed.internalValue = value;
  }
  public resetPortsSupporting40GSpeed() {
    this._portsSupporting40GSpeed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupporting40GSpeedInput() {
    return this._portsSupporting40GSpeed.internalValue;
  }

  // ports_supporting_appliance_role - computed: true, optional: true, required: false
  private _portsSupportingApplianceRole = new CapabilitySwitchCapabilityPortsSupportingApplianceRoleList(this, "ports_supporting_appliance_role", false);
  public get portsSupportingApplianceRole() {
    return this._portsSupportingApplianceRole;
  }
  public putPortsSupportingApplianceRole(value: CapabilitySwitchCapabilityPortsSupportingApplianceRole[] | cdktf.IResolvable) {
    this._portsSupportingApplianceRole.internalValue = value;
  }
  public resetPortsSupportingApplianceRole() {
    this._portsSupportingApplianceRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingApplianceRoleInput() {
    return this._portsSupportingApplianceRole.internalValue;
  }

  // ports_supporting_breakout - computed: true, optional: true, required: false
  private _portsSupportingBreakout = new CapabilitySwitchCapabilityPortsSupportingBreakoutList(this, "ports_supporting_breakout", false);
  public get portsSupportingBreakout() {
    return this._portsSupportingBreakout;
  }
  public putPortsSupportingBreakout(value: CapabilitySwitchCapabilityPortsSupportingBreakout[] | cdktf.IResolvable) {
    this._portsSupportingBreakout.internalValue = value;
  }
  public resetPortsSupportingBreakout() {
    this._portsSupportingBreakout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingBreakoutInput() {
    return this._portsSupportingBreakout.internalValue;
  }

  // ports_supporting_fcoe - computed: true, optional: true, required: false
  private _portsSupportingFcoe = new CapabilitySwitchCapabilityPortsSupportingFcoeList(this, "ports_supporting_fcoe", false);
  public get portsSupportingFcoe() {
    return this._portsSupportingFcoe;
  }
  public putPortsSupportingFcoe(value: CapabilitySwitchCapabilityPortsSupportingFcoe[] | cdktf.IResolvable) {
    this._portsSupportingFcoe.internalValue = value;
  }
  public resetPortsSupportingFcoe() {
    this._portsSupportingFcoe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingFcoeInput() {
    return this._portsSupportingFcoe.internalValue;
  }

  // ports_supporting_inter_cluster_link - computed: true, optional: true, required: false
  private _portsSupportingInterClusterLink = new CapabilitySwitchCapabilityPortsSupportingInterClusterLinkList(this, "ports_supporting_inter_cluster_link", false);
  public get portsSupportingInterClusterLink() {
    return this._portsSupportingInterClusterLink;
  }
  public putPortsSupportingInterClusterLink(value: CapabilitySwitchCapabilityPortsSupportingInterClusterLink[] | cdktf.IResolvable) {
    this._portsSupportingInterClusterLink.internalValue = value;
  }
  public resetPortsSupportingInterClusterLink() {
    this._portsSupportingInterClusterLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingInterClusterLinkInput() {
    return this._portsSupportingInterClusterLink.internalValue;
  }

  // ports_supporting_server_role - computed: true, optional: true, required: false
  private _portsSupportingServerRole = new CapabilitySwitchCapabilityPortsSupportingServerRoleList(this, "ports_supporting_server_role", false);
  public get portsSupportingServerRole() {
    return this._portsSupportingServerRole;
  }
  public putPortsSupportingServerRole(value: CapabilitySwitchCapabilityPortsSupportingServerRole[] | cdktf.IResolvable) {
    this._portsSupportingServerRole.internalValue = value;
  }
  public resetPortsSupportingServerRole() {
    this._portsSupportingServerRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsSupportingServerRoleInput() {
    return this._portsSupportingServerRole.internalValue;
  }

  // reserved_vsans - computed: true, optional: true, required: false
  private _reservedVsans = new CapabilitySwitchCapabilityReservedVsansList(this, "reserved_vsans", false);
  public get reservedVsans() {
    return this._reservedVsans;
  }
  public putReservedVsans(value: CapabilitySwitchCapabilityReservedVsans[] | cdktf.IResolvable) {
    this._reservedVsans.internalValue = value;
  }
  public resetReservedVsans() {
    this._reservedVsans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedVsansInput() {
    return this._reservedVsans.internalValue;
  }

  // sereno_netflow_supported - computed: true, optional: true, required: false
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

  // server_role_supported_on_breakout - computed: true, optional: true, required: false
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

  // shared_scope - computed: true, optional: true, required: false
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

  // storage_limits - computed: true, optional: true, required: false
  private _storageLimits = new CapabilitySwitchCapabilityStorageLimitsList(this, "storage_limits", false);
  public get storageLimits() {
    return this._storageLimits;
  }
  public putStorageLimits(value: CapabilitySwitchCapabilityStorageLimits[] | cdktf.IResolvable) {
    this._storageLimits.internalValue = value;
  }
  public resetStorageLimits() {
    this._storageLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLimitsInput() {
    return this._storageLimits.internalValue;
  }

  // switching_mode_capabilities - computed: true, optional: true, required: false
  private _switchingModeCapabilities = new CapabilitySwitchCapabilitySwitchingModeCapabilitiesList(this, "switching_mode_capabilities", false);
  public get switchingModeCapabilities() {
    return this._switchingModeCapabilities;
  }
  public putSwitchingModeCapabilities(value: CapabilitySwitchCapabilitySwitchingModeCapabilities[] | cdktf.IResolvable) {
    this._switchingModeCapabilities.internalValue = value;
  }
  public resetSwitchingModeCapabilities() {
    this._switchingModeCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingModeCapabilitiesInput() {
    return this._switchingModeCapabilities.internalValue;
  }

  // system_limits - computed: true, optional: true, required: false
  private _systemLimits = new CapabilitySwitchCapabilitySystemLimitsList(this, "system_limits", false);
  public get systemLimits() {
    return this._systemLimits;
  }
  public putSystemLimits(value: CapabilitySwitchCapabilitySystemLimits[] | cdktf.IResolvable) {
    this._systemLimits.internalValue = value;
  }
  public resetSystemLimits() {
    this._systemLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLimitsInput() {
    return this._systemLimits.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new CapabilitySwitchCapabilityTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CapabilitySwitchCapabilityTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // un_supported_equipment_model - computed: true, optional: true, required: false
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

  // unified_ports - computed: true, optional: true, required: false
  private _unifiedPorts = new CapabilitySwitchCapabilityUnifiedPortsList(this, "unified_ports", false);
  public get unifiedPorts() {
    return this._unifiedPorts;
  }
  public putUnifiedPorts(value: CapabilitySwitchCapabilityUnifiedPorts[] | cdktf.IResolvable) {
    this._unifiedPorts.internalValue = value;
  }
  public resetUnifiedPorts() {
    this._unifiedPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedPortsInput() {
    return this._unifiedPorts.internalValue;
  }

  // unified_rule - computed: true, optional: true, required: false
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

  // uplink_admin_port_speed_neg_auto25_gbps_supported - computed: true, optional: true, required: false
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

  // version_context - computed: true, optional: true, required: false
  private _versionContext = new CapabilitySwitchCapabilityVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: CapabilitySwitchCapabilityVersionContext[] | cdktf.IResolvable) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      allowed_uplink_pc_id_range: cdktf.listMapper(capabilitySwitchCapabilityAllowedUplinkPcIdRangeToTerraform, false)(this._allowedUplinkPcIdRange.internalValue),
      ancestors: cdktf.listMapper(capabilitySwitchCapabilityAncestorsToTerraform, false)(this._ancestors.internalValue),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      default_fcoe_vlan: cdktf.numberToTerraform(this._defaultFcoeVlan),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      dynamic_vifs_supported: cdktf.booleanToTerraform(this._dynamicVifsSupported),
      fan_modules_supported: cdktf.booleanToTerraform(this._fanModulesSupported),
      fc_end_host_mode_reserved_vsans: cdktf.listMapper(capabilitySwitchCapabilityFcEndHostModeReservedVsansToTerraform, false)(this._fcEndHostModeReservedVsans.internalValue),
      fc_uplink_ports_auto_negotiation_supported: cdktf.booleanToTerraform(this._fcUplinkPortsAutoNegotiationSupported),
      id: cdktf.stringToTerraform(this._id),
      imm_controls_vpcompression: cdktf.booleanToTerraform(this._immControlsVpcompression),
      inter_cluster_link_vlan_supported: cdktf.booleanToTerraform(this._interClusterLinkVlanSupported),
      locator_beacon_supported: cdktf.booleanToTerraform(this._locatorBeaconSupported),
      macsec_supported_ports: cdktf.listMapper(capabilitySwitchCapabilityMacsecSupportedPortsToTerraform, false)(this._macsecSupportedPorts.internalValue),
      max_ports: cdktf.numberToTerraform(this._maxPorts),
      max_slots: cdktf.numberToTerraform(this._maxSlots),
      min_version_map_for_switch_features: cdktf.listMapper(capabilitySwitchCapabilityMinVersionMapForSwitchFeaturesToTerraform, false)(this._minVersionMapForSwitchFeatures.internalValue),
      min_version_map_with_breakout_support: cdktf.listMapper(capabilitySwitchCapabilityMinVersionMapWithBreakoutSupportToTerraform, false)(this._minVersionMapWithBreakoutSupport.internalValue),
      min_version_map_with_locator_led_support: cdktf.listMapper(capabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportToTerraform, false)(this._minVersionMapWithLocatorLedSupport.internalValue),
      min_version_map_with_neg_auto25g_support: cdktf.listMapper(capabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportToTerraform, false)(this._minVersionMapWithNegAuto25GSupport.internalValue),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      network_limits: cdktf.listMapper(capabilitySwitchCapabilityNetworkLimitsToTerraform, false)(this._networkLimits.internalValue),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      parent: cdktf.listMapper(capabilitySwitchCapabilityParentToTerraform, false)(this._parent.internalValue),
      permission_resources: cdktf.listMapper(capabilitySwitchCapabilityPermissionResourcesToTerraform, false)(this._permissionResources.internalValue),
      pid: cdktf.stringToTerraform(this._pid),
      ports_supporting100g_speed: cdktf.listMapper(capabilitySwitchCapabilityPortsSupporting100GSpeedToTerraform, false)(this._portsSupporting100GSpeed.internalValue),
      ports_supporting10g_speed: cdktf.listMapper(capabilitySwitchCapabilityPortsSupporting10GSpeedToTerraform, false)(this._portsSupporting10GSpeed.internalValue),
      ports_supporting1g_speed: cdktf.listMapper(capabilitySwitchCapabilityPortsSupporting1GSpeedToTerraform, false)(this._portsSupporting1GSpeed.internalValue),
      ports_supporting25g_speed: cdktf.listMapper(capabilitySwitchCapabilityPortsSupporting25GSpeedToTerraform, false)(this._portsSupporting25GSpeed.internalValue),
      ports_supporting40g_speed: cdktf.listMapper(capabilitySwitchCapabilityPortsSupporting40GSpeedToTerraform, false)(this._portsSupporting40GSpeed.internalValue),
      ports_supporting_appliance_role: cdktf.listMapper(capabilitySwitchCapabilityPortsSupportingApplianceRoleToTerraform, false)(this._portsSupportingApplianceRole.internalValue),
      ports_supporting_breakout: cdktf.listMapper(capabilitySwitchCapabilityPortsSupportingBreakoutToTerraform, false)(this._portsSupportingBreakout.internalValue),
      ports_supporting_fcoe: cdktf.listMapper(capabilitySwitchCapabilityPortsSupportingFcoeToTerraform, false)(this._portsSupportingFcoe.internalValue),
      ports_supporting_inter_cluster_link: cdktf.listMapper(capabilitySwitchCapabilityPortsSupportingInterClusterLinkToTerraform, false)(this._portsSupportingInterClusterLink.internalValue),
      ports_supporting_server_role: cdktf.listMapper(capabilitySwitchCapabilityPortsSupportingServerRoleToTerraform, false)(this._portsSupportingServerRole.internalValue),
      reserved_vsans: cdktf.listMapper(capabilitySwitchCapabilityReservedVsansToTerraform, false)(this._reservedVsans.internalValue),
      sereno_netflow_supported: cdktf.booleanToTerraform(this._serenoNetflowSupported),
      server_role_supported_on_breakout: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverRoleSupportedOnBreakout),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      sku: cdktf.stringToTerraform(this._sku),
      storage_limits: cdktf.listMapper(capabilitySwitchCapabilityStorageLimitsToTerraform, false)(this._storageLimits.internalValue),
      switching_mode_capabilities: cdktf.listMapper(capabilitySwitchCapabilitySwitchingModeCapabilitiesToTerraform, false)(this._switchingModeCapabilities.internalValue),
      system_limits: cdktf.listMapper(capabilitySwitchCapabilitySystemLimitsToTerraform, false)(this._systemLimits.internalValue),
      tags: cdktf.listMapper(capabilitySwitchCapabilityTagsToTerraform, false)(this._tags.internalValue),
      un_supported_equipment_model: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unSupportedEquipmentModel),
      unified_ports: cdktf.listMapper(capabilitySwitchCapabilityUnifiedPortsToTerraform, false)(this._unifiedPorts.internalValue),
      unified_rule: cdktf.stringToTerraform(this._unifiedRule),
      uplink_admin_port_speed_neg_auto25_gbps_supported: cdktf.booleanToTerraform(this._uplinkAdminPortSpeedNegAuto25GbpsSupported),
      version_context: cdktf.listMapper(capabilitySwitchCapabilityVersionContextToTerraform, false)(this._versionContext.internalValue),
      vid: cdktf.stringToTerraform(this._vid),
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
      allowed_uplink_pc_id_range: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityAllowedUplinkPcIdRangeToHclTerraform, false)(this._allowedUplinkPcIdRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityAllowedUplinkPcIdRangeList",
      },
      ancestors: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityAncestorsToHclTerraform, false)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityAncestorsList",
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
      fc_end_host_mode_reserved_vsans: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityFcEndHostModeReservedVsansToHclTerraform, false)(this._fcEndHostModeReservedVsans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityFcEndHostModeReservedVsansList",
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
      macsec_supported_ports: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityMacsecSupportedPortsToHclTerraform, false)(this._macsecSupportedPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityMacsecSupportedPortsList",
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
      min_version_map_for_switch_features: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityMinVersionMapForSwitchFeaturesToHclTerraform, false)(this._minVersionMapForSwitchFeatures.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityMinVersionMapForSwitchFeaturesList",
      },
      min_version_map_with_breakout_support: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityMinVersionMapWithBreakoutSupportToHclTerraform, false)(this._minVersionMapWithBreakoutSupport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityMinVersionMapWithBreakoutSupportList",
      },
      min_version_map_with_locator_led_support: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportToHclTerraform, false)(this._minVersionMapWithLocatorLedSupport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityMinVersionMapWithLocatorLedSupportList",
      },
      min_version_map_with_neg_auto25g_support: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportToHclTerraform, false)(this._minVersionMapWithNegAuto25GSupport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityMinVersionMapWithNegAuto25GSupportList",
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
      network_limits: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityNetworkLimitsToHclTerraform, false)(this._networkLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityNetworkLimitsList",
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
      parent: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityParentToHclTerraform, false)(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPermissionResourcesToHclTerraform, false)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPermissionResourcesList",
      },
      pid: {
        value: cdktf.stringToHclTerraform(this._pid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports_supporting100g_speed: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupporting100GSpeedToHclTerraform, false)(this._portsSupporting100GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupporting100GSpeedList",
      },
      ports_supporting10g_speed: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupporting10GSpeedToHclTerraform, false)(this._portsSupporting10GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupporting10GSpeedList",
      },
      ports_supporting1g_speed: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupporting1GSpeedToHclTerraform, false)(this._portsSupporting1GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupporting1GSpeedList",
      },
      ports_supporting25g_speed: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupporting25GSpeedToHclTerraform, false)(this._portsSupporting25GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupporting25GSpeedList",
      },
      ports_supporting40g_speed: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupporting40GSpeedToHclTerraform, false)(this._portsSupporting40GSpeed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupporting40GSpeedList",
      },
      ports_supporting_appliance_role: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupportingApplianceRoleToHclTerraform, false)(this._portsSupportingApplianceRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupportingApplianceRoleList",
      },
      ports_supporting_breakout: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupportingBreakoutToHclTerraform, false)(this._portsSupportingBreakout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupportingBreakoutList",
      },
      ports_supporting_fcoe: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupportingFcoeToHclTerraform, false)(this._portsSupportingFcoe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupportingFcoeList",
      },
      ports_supporting_inter_cluster_link: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupportingInterClusterLinkToHclTerraform, false)(this._portsSupportingInterClusterLink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupportingInterClusterLinkList",
      },
      ports_supporting_server_role: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityPortsSupportingServerRoleToHclTerraform, false)(this._portsSupportingServerRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityPortsSupportingServerRoleList",
      },
      reserved_vsans: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityReservedVsansToHclTerraform, false)(this._reservedVsans.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityReservedVsansList",
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
      storage_limits: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityStorageLimitsToHclTerraform, false)(this._storageLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityStorageLimitsList",
      },
      switching_mode_capabilities: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilitySwitchingModeCapabilitiesToHclTerraform, false)(this._switchingModeCapabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilitySwitchingModeCapabilitiesList",
      },
      system_limits: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilitySystemLimitsToHclTerraform, false)(this._systemLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilitySystemLimitsList",
      },
      tags: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityTagsList",
      },
      un_supported_equipment_model: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unSupportedEquipmentModel),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      unified_ports: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityUnifiedPortsToHclTerraform, false)(this._unifiedPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityUnifiedPortsList",
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
      version_context: {
        value: cdktf.listMapperHcl(capabilitySwitchCapabilityVersionContextToHclTerraform, false)(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CapabilitySwitchCapabilityVersionContextList",
      },
      vid: {
        value: cdktf.stringToHclTerraform(this._vid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
