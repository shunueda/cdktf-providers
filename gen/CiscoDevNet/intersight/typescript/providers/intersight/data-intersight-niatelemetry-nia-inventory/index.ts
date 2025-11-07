// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightNiatelemetryNiaInventoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#account_moid DataIntersightNiatelemetryNiaInventory#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Returns controller's IP address details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#controller_ip_address DataIntersightNiatelemetryNiaInventory#controller_ip_address}
  */
  readonly controllerIpAddress?: string;
  /**
  * CPU usage of device being inventoried. This determines the percentage of CPU resources used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#cpu DataIntersightNiatelemetryNiaInventory#cpu}
  */
  readonly cpu?: number;
  /**
  * Last crash reset reason of device being inventoried. This determines the last reason for a device's restart due to crash of the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#crash_reset_logs DataIntersightNiatelemetryNiaInventory#crash_reset_logs}
  */
  readonly crashResetLogs?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#create_time DataIntersightNiatelemetryNiaInventory#create_time}
  */
  readonly createTime?: string;
  /**
  * Returns the value of the customerDeviceConnector field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#customer_device_connector DataIntersightNiatelemetryNiaInventory#customer_device_connector}
  */
  readonly customerDeviceConnector?: string;
  /**
  * Returns the License state of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#dcnm_license_state DataIntersightNiatelemetryNiaInventory#dcnm_license_state}
  */
  readonly dcnmLicenseState?: string;
  /**
  * Returns the value of the deviceDiscovery field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#device_discovery DataIntersightNiatelemetryNiaInventory#device_discovery}
  */
  readonly deviceDiscovery?: string;
  /**
  * Returns the device health.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#device_health DataIntersightNiatelemetryNiaInventory#device_health}
  */
  readonly deviceHealth?: number;
  /**
  * Returns the value of the deviceId field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#device_id DataIntersightNiatelemetryNiaInventory#device_id}
  */
  readonly deviceId?: string;
  /**
  * Name of device being inventoried. The name the user assigns to the device is inventoried here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#device_name DataIntersightNiatelemetryNiaInventory#device_name}
  */
  readonly deviceName?: string;
  /**
  * Type of device being inventoried. This determines whether the device is a controller, leaf or spine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#device_type DataIntersightNiatelemetryNiaInventory#device_type}
  */
  readonly deviceType?: string;
  /**
  * Returns the device up time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#device_up_time DataIntersightNiatelemetryNiaInventory#device_up_time}
  */
  readonly deviceUpTime?: number;
  /**
  * Dn for the inventories present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#dn DataIntersightNiatelemetryNiaInventory#dn}
  */
  readonly dn?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#domain_group_moid DataIntersightNiatelemetryNiaInventory#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Name of the fabric of the device being inventoried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#fabric_name DataIntersightNiatelemetryNiaInventory#fabric_name}
  */
  readonly fabricName?: string;
  /**
  * Number of fabric extendors utilized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#fex_count DataIntersightNiatelemetryNiaInventory#fex_count}
  */
  readonly fexCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#id DataIntersightNiatelemetryNiaInventory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of appliances as physical device that are wired into the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#infra_wi_node_count DataIntersightNiatelemetryNiaInventory#infra_wi_node_count}
  */
  readonly infraWiNodeCount?: number;
  /**
  * The IP address of the device being inventoried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#ip_address DataIntersightNiatelemetryNiaInventory#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Flag to specify if the node is virtual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#is_virtual_node DataIntersightNiatelemetryNiaInventory#is_virtual_node}
  */
  readonly isVirtualNode?: string;
  /**
  * Returns the last reboot Time of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#last_reboot_time DataIntersightNiatelemetryNiaInventory#last_reboot_time}
  */
  readonly lastRebootTime?: string;
  /**
  * Returns the last reset reason of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#last_reset_reason DataIntersightNiatelemetryNiaInventory#last_reset_reason}
  */
  readonly lastResetReason?: string;
  /**
  * Returns the License type of the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#license_type DataIntersightNiatelemetryNiaInventory#license_type}
  */
  readonly licenseType?: string;
  /**
  * Last log in time device being inventoried. This determines the last login time on the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#log_in_time DataIntersightNiatelemetryNiaInventory#log_in_time}
  */
  readonly logInTime?: string;
  /**
  * Last log out time of device being inventoried. This determines the last logout time on the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#log_out_time DataIntersightNiatelemetryNiaInventory#log_out_time}
  */
  readonly logOutTime?: string;
  /**
  * Number of Macsec configured interfaces on a TOR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#mac_sec_count DataIntersightNiatelemetryNiaInventory#mac_sec_count}
  */
  readonly macSecCount?: number;
  /**
  * Number of Macsec configured interfaces on a Spine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#mac_sec_fab_count DataIntersightNiatelemetryNiaInventory#mac_sec_fab_count}
  */
  readonly macSecFabCount?: number;
  /**
  * Number of total Macsec configured interfaces for all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#macsec_total_count DataIntersightNiatelemetryNiaInventory#macsec_total_count}
  */
  readonly macsecTotalCount?: number;
  /**
  * Memory usage of device being inventoried. This determines the percentage of memory resources used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#memory DataIntersightNiatelemetryNiaInventory#memory}
  */
  readonly memory?: number;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#mod_time DataIntersightNiatelemetryNiaInventory#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * Returns if site has been onboarded to nexus cloud or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nexus_cloud_membership_status DataIntersightNiatelemetryNiaInventory#nexus_cloud_membership_status}
  */
  readonly nexusCloudMembershipStatus?: boolean | cdktf.IResolvable;
  /**
  * The ID of the device being inventoried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#node_id DataIntersightNiatelemetryNiaInventory#node_id}
  */
  readonly nodeId?: string;
  /**
  * Software version of device being inventoried. The various software version values for each device are available on cisco.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nr_version DataIntersightNiatelemetryNiaInventory#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Returns the status of dci interface configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_dci_interface_status DataIntersightNiatelemetryNiaInventory#nxos_dci_interface_status}
  */
  readonly nxosDciInterfaceStatus?: string;
  /**
  * Returns the value of the nxosNveInterface field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_nve_interface_status DataIntersightNiatelemetryNiaInventory#nxos_nve_interface_status}
  */
  readonly nxosNveInterfaceStatus?: string;
  /**
  * Total number of ospf neighbors per switch in DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_ospf_neighbors DataIntersightNiatelemetryNiaInventory#nxos_ospf_neighbors}
  */
  readonly nxosOspfNeighbors?: number;
  /**
  * Total number of pim neighbors per switch in DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_pim_neighbors DataIntersightNiatelemetryNiaInventory#nxos_pim_neighbors}
  */
  readonly nxosPimNeighbors?: string;
  /**
  * Returns the value of the nxosTelnet field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_telnet DataIntersightNiatelemetryNiaInventory#nxos_telnet}
  */
  readonly nxosTelnet?: string;
  /**
  * Total number of routes configured in the DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_total_routes DataIntersightNiatelemetryNiaInventory#nxos_total_routes}
  */
  readonly nxosTotalRoutes?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#owners DataIntersightNiatelemetryNiaInventory#owners}
  */
  readonly owners?: string[];
  /**
  * Type of record DCNM / APIC / SE / Nexus Switch. This determines the type of platform where inventory was collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#record_type DataIntersightNiatelemetryNiaInventory#record_type}
  */
  readonly recordType?: string;
  /**
  * Version of record being pushed. This determines what was the API version for data available from the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#record_version DataIntersightNiatelemetryNiaInventory#record_version}
  */
  readonly recordVersion?: string;
  /**
  * Total nuumber of v4 and v6 routes per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#route_prefix_count DataIntersightNiatelemetryNiaInventory#route_prefix_count}
  */
  readonly routePrefixCount?: number;
  /**
  * Number of v4 routes per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#route_prefix_v4_count DataIntersightNiatelemetryNiaInventory#route_prefix_v4_count}
  */
  readonly routePrefixV4Count?: number;
  /**
  * Number of v6 routes per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#route_prefix_v6_count DataIntersightNiatelemetryNiaInventory#route_prefix_v6_count}
  */
  readonly routePrefixV6Count?: number;
  /**
  * Serial number of device being invetoried. The serial number is unique per device and will be used as the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#serial DataIntersightNiatelemetryNiaInventory#serial}
  */
  readonly serial?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#shared_scope DataIntersightNiatelemetryNiaInventory#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Name of fabric domain of the controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#site_name DataIntersightNiatelemetryNiaInventory#site_name}
  */
  readonly siteName?: string;
  /**
  * Returns the uuid of the Nexus Cloud site associated to the inventory object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#siteuuid DataIntersightNiatelemetryNiaInventory#siteuuid}
  */
  readonly siteuuid?: string;
  /**
  * Returns the value of the smartAccountId/CustomerId field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#smart_account_id DataIntersightNiatelemetryNiaInventory#smart_account_id}
  */
  readonly smartAccountId?: number;
  /**
  * Last software downloaded of device being inventoried. This determines if software download API was used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#software_download DataIntersightNiatelemetryNiaInventory#software_download}
  */
  readonly softwareDownload?: string;
  /**
  * The amount of time that the device being inventoried been up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#system_up_time DataIntersightNiatelemetryNiaInventory#system_up_time}
  */
  readonly systemUpTime?: string;
  /**
  * The TEP IP address of the node's vPC peer, if present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#vpc_peer_ip_address DataIntersightNiatelemetryNiaInventory#vpc_peer_ip_address}
  */
  readonly vpcPeerIpAddress?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#ancestors DataIntersightNiatelemetryNiaInventory#ancestors}
  */
  readonly ancestors?: DataIntersightNiatelemetryNiaInventoryAncestors[] | cdktf.IResolvable;
  /**
  * dcnm_fan_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#dcnm_fan_details DataIntersightNiatelemetryNiaInventory#dcnm_fan_details}
  */
  readonly dcnmFanDetails?: DataIntersightNiatelemetryNiaInventoryDcnmFanDetails[] | cdktf.IResolvable;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#disk DataIntersightNiatelemetryNiaInventory#disk}
  */
  readonly disk?: DataIntersightNiatelemetryNiaInventoryDisk;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#interface DataIntersightNiatelemetryNiaInventory#interface}
  */
  readonly interface?: DataIntersightNiatelemetryNiaInventoryInterface[] | cdktf.IResolvable;
  /**
  * license_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#license_state DataIntersightNiatelemetryNiaInventory#license_state}
  */
  readonly licenseState?: DataIntersightNiatelemetryNiaInventoryLicenseState;
  /**
  * nxos_bgp_evpn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_bgp_evpn DataIntersightNiatelemetryNiaInventory#nxos_bgp_evpn}
  */
  readonly nxosBgpEvpn?: DataIntersightNiatelemetryNiaInventoryNxosBgpEvpn;
  /**
  * nxos_bgp_mvpn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_bgp_mvpn DataIntersightNiatelemetryNiaInventory#nxos_bgp_mvpn}
  */
  readonly nxosBgpMvpn?: DataIntersightNiatelemetryNiaInventoryNxosBgpMvpn;
  /**
  * nxos_bootflash_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_bootflash_details DataIntersightNiatelemetryNiaInventory#nxos_bootflash_details}
  */
  readonly nxosBootflashDetails?: DataIntersightNiatelemetryNiaInventoryNxosBootflashDetails;
  /**
  * nxos_interface_brief block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_interface_brief DataIntersightNiatelemetryNiaInventory#nxos_interface_brief}
  */
  readonly nxosInterfaceBrief?: DataIntersightNiatelemetryNiaInventoryNxosInterfaceBrief;
  /**
  * nxos_nve_packet_counters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_nve_packet_counters DataIntersightNiatelemetryNiaInventory#nxos_nve_packet_counters}
  */
  readonly nxosNvePacketCounters?: DataIntersightNiatelemetryNiaInventoryNxosNvePacketCounters;
  /**
  * nxos_nve_vni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_nve_vni DataIntersightNiatelemetryNiaInventory#nxos_nve_vni}
  */
  readonly nxosNveVni?: DataIntersightNiatelemetryNiaInventoryNxosNveVni;
  /**
  * nxos_vtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_vtp DataIntersightNiatelemetryNiaInventory#nxos_vtp}
  */
  readonly nxosVtp?: DataIntersightNiatelemetryNiaInventoryNxosVtp;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#parent DataIntersightNiatelemetryNiaInventory#parent}
  */
  readonly parent?: DataIntersightNiatelemetryNiaInventoryParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#permission_resources DataIntersightNiatelemetryNiaInventory#permission_resources}
  */
  readonly permissionResources?: DataIntersightNiatelemetryNiaInventoryPermissionResources[] | cdktf.IResolvable;
  /**
  * registered_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#registered_device DataIntersightNiatelemetryNiaInventory#registered_device}
  */
  readonly registeredDevice?: DataIntersightNiatelemetryNiaInventoryRegisteredDevice;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#tags DataIntersightNiatelemetryNiaInventory#tags}
  */
  readonly tags?: DataIntersightNiatelemetryNiaInventoryTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#version_context DataIntersightNiatelemetryNiaInventory#version_context}
  */
  readonly versionContext?: DataIntersightNiatelemetryNiaInventoryVersionContext;
  /**
  * vni_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#vni_status DataIntersightNiatelemetryNiaInventory#vni_status}
  */
  readonly vniStatus?: DataIntersightNiatelemetryNiaInventoryVniStatus[] | cdktf.IResolvable;
}
export interface DataIntersightNiatelemetryNiaInventoryResultsAncestors {
}

export function dataIntersightNiatelemetryNiaInventoryResultsAncestorsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsAncestors | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsAncestorsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetails {
}

export function dataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetailsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetailsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetails | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetailsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsDisk {
}

export function dataIntersightNiatelemetryNiaInventoryResultsDiskToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsDiskToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsDisk | undefined) {
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

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getNumberAttribute('free');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsDiskOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsInterface {
}

export function dataIntersightNiatelemetryNiaInventoryResultsInterfaceToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsInterfaceToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsInterface | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // oper_state - computed: true, optional: false, required: false
  public get operState() {
    return this.getStringAttribute('oper_state');
  }

  // xcvr_present - computed: true, optional: false, required: false
  public get xcvrPresent() {
    return this.getStringAttribute('xcvr_present');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsInterfaceOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsLicenseState {
}

export function dataIntersightNiatelemetryNiaInventoryResultsLicenseStateToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsLicenseState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsLicenseStateToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsLicenseState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsLicenseStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsLicenseState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsLicenseState | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryResultsLicenseStateList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsLicenseStateOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsLicenseStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpn {
}

export function dataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpnToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpnToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpn | undefined) {
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

  // nxos_evpn_mac_count - computed: true, optional: false, required: false
  public get nxosEvpnMacCount() {
    return this.getStringAttribute('nxos_evpn_mac_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // total_networks - computed: true, optional: false, required: false
  public get totalNetworks() {
    return this.getNumberAttribute('total_networks');
  }

  // total_paths - computed: true, optional: false, required: false
  public get totalPaths() {
    return this.getNumberAttribute('total_paths');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpnList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpnOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpn {
}

export function dataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpnToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpnToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpn | undefined) {
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

  // capable_peers - computed: true, optional: false, required: false
  public get capablePeers() {
    return this.getNumberAttribute('capable_peers');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // configured_peers - computed: true, optional: false, required: false
  public get configuredPeers() {
    return this.getNumberAttribute('configured_peers');
  }

  // memory_used - computed: true, optional: false, required: false
  public get memoryUsed() {
    return this.getNumberAttribute('memory_used');
  }

  // number_of_cluster_lists - computed: true, optional: false, required: false
  public get numberOfClusterLists() {
    return this.getNumberAttribute('number_of_cluster_lists');
  }

  // number_of_communities - computed: true, optional: false, required: false
  public get numberOfCommunities() {
    return this.getNumberAttribute('number_of_communities');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // table_version - computed: true, optional: false, required: false
  public get tableVersion() {
    return this.getNumberAttribute('table_version');
  }

  // total_networks - computed: true, optional: false, required: false
  public get totalNetworks() {
    return this.getNumberAttribute('total_networks');
  }

  // total_paths - computed: true, optional: false, required: false
  public get totalPaths() {
    return this.getNumberAttribute('total_paths');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpnList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpnOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetails {
}

export function dataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetailsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetailsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetails | undefined) {
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

  // fw_rev - computed: true, optional: false, required: false
  public get fwRev() {
    return this.getStringAttribute('fw_rev');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetailsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBrief {
}

export function dataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBriefToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBrief): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBriefToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBrief): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBriefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBrief | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBrief | undefined) {
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

  // interface_down_count - computed: true, optional: false, required: false
  public get interfaceDownCount() {
    return this.getNumberAttribute('interface_down_count');
  }

  // interface_up_count - computed: true, optional: false, required: false
  public get interfaceUpCount() {
    return this.getNumberAttribute('interface_up_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBriefList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBriefOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBriefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCounters {
}

export function dataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCountersToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCounters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCountersToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCounters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCountersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCounters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCounters | undefined) {
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

  // mcast_inpkts - computed: true, optional: false, required: false
  public get mcastInpkts() {
    return this.getNumberAttribute('mcast_inpkts');
  }

  // mcast_outbytes - computed: true, optional: false, required: false
  public get mcastOutbytes() {
    return this.getNumberAttribute('mcast_outbytes');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ucast_inpkts - computed: true, optional: false, required: false
  public get ucastInpkts() {
    return this.getNumberAttribute('ucast_inpkts');
  }

  // ucast_outpkts - computed: true, optional: false, required: false
  public get ucastOutpkts() {
    return this.getNumberAttribute('ucast_outpkts');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCountersList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCountersOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCountersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsNxosNveVni {
}

export function dataIntersightNiatelemetryNiaInventoryResultsNxosNveVniToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosNveVni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsNxosNveVniToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosNveVni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosNveVniOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsNxosNveVni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsNxosNveVni | undefined) {
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

  // cp_vni_count - computed: true, optional: false, required: false
  public get cpVniCount() {
    return this.getNumberAttribute('cp_vni_count');
  }

  // cp_vni_down - computed: true, optional: false, required: false
  public get cpVniDown() {
    return this.getNumberAttribute('cp_vni_down');
  }

  // cp_vni_up - computed: true, optional: false, required: false
  public get cpVniUp() {
    return this.getNumberAttribute('cp_vni_up');
  }

  // dp_vni_count - computed: true, optional: false, required: false
  public get dpVniCount() {
    return this.getNumberAttribute('dp_vni_count');
  }

  // dp_vni_down - computed: true, optional: false, required: false
  public get dpVniDown() {
    return this.getNumberAttribute('dp_vni_down');
  }

  // dp_vni_up - computed: true, optional: false, required: false
  public get dpVniUp() {
    return this.getNumberAttribute('dp_vni_up');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosNveVniList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsNxosNveVniOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsNxosNveVniOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsNxosVtp {
}

export function dataIntersightNiatelemetryNiaInventoryResultsNxosVtpToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosVtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsNxosVtpToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsNxosVtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosVtpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsNxosVtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsNxosVtp | undefined) {
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

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getNumberAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // oper_mode - computed: true, optional: false, required: false
  public get operMode() {
    return this.getStringAttribute('oper_mode');
  }

  // pruning_mode - computed: true, optional: false, required: false
  public get pruningMode() {
    return this.getStringAttribute('pruning_mode');
  }

  // running_version - computed: true, optional: false, required: false
  public get runningVersion() {
    return this.getStringAttribute('running_version');
  }

  // trap_enabled - computed: true, optional: false, required: false
  public get trapEnabled() {
    return this.getStringAttribute('trap_enabled');
  }

  // v2_mode - computed: true, optional: false, required: false
  public get v2Mode() {
    return this.getStringAttribute('v2_mode');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsNxosVtpList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsNxosVtpOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsNxosVtpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsParent {
}

export function dataIntersightNiatelemetryNiaInventoryResultsParentToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsParentToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsParent | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsParentOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsPermissionResources {
}

export function dataIntersightNiatelemetryNiaInventoryResultsPermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsPermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsPermissionResources | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsPermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsRegisteredDevice {
}

export function dataIntersightNiatelemetryNiaInventoryResultsRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsRegisteredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsRegisteredDevice | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryResultsRegisteredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsRegisteredDeviceOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitions {
}

export function dataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitions | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsTagsDefinition {
}

export function dataIntersightNiatelemetryNiaInventoryResultsTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsTagsDefinition | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsTagsDefinitionOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsTags {
}

export function dataIntersightNiatelemetryNiaInventoryResultsTagsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsTagsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsTags | undefined) {
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
  private _ancestorDefinitions = new DataIntersightNiatelemetryNiaInventoryResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightNiatelemetryNiaInventoryResultsTagsDefinitionList(this, "definition", false);
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

export class DataIntersightNiatelemetryNiaInventoryResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsTagsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMos {
}

export function dataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMos | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMo {
}

export function dataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMo | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMoOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsVersionContext {
}

export function dataIntersightNiatelemetryNiaInventoryResultsVersionContextToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightNiatelemetryNiaInventoryResultsVersionContextInterestedMosList(this, "interested_mos", false);
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
  private _refMo = new DataIntersightNiatelemetryNiaInventoryResultsVersionContextRefMoList(this, "ref_mo", false);
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

export class DataIntersightNiatelemetryNiaInventoryResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsVersionContextOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResultsVniStatus {
}

export function dataIntersightNiatelemetryNiaInventoryResultsVniStatusToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsVniStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsVniStatusToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResultsVniStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsVniStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResultsVniStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResultsVniStatus | undefined) {
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

  // vni - computed: true, optional: false, required: false
  public get vni() {
    return this.getStringAttribute('vni');
  }

  // vni_state - computed: true, optional: false, required: false
  public get vniState() {
    return this.getStringAttribute('vni_state');
  }

  // vni_type - computed: true, optional: false, required: false
  public get vniType() {
    return this.getStringAttribute('vni_type');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsVniStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsVniStatusOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsVniStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryResults {
}

export function dataIntersightNiatelemetryNiaInventoryResultsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryResultsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryResults | undefined) {
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

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightNiatelemetryNiaInventoryResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // controller_ip_address - computed: true, optional: false, required: false
  public get controllerIpAddress() {
    return this.getStringAttribute('controller_ip_address');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }

  // crash_reset_logs - computed: true, optional: false, required: false
  public get crashResetLogs() {
    return this.getStringAttribute('crash_reset_logs');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_device_connector - computed: true, optional: false, required: false
  public get customerDeviceConnector() {
    return this.getStringAttribute('customer_device_connector');
  }

  // dcnm_fan_details - computed: true, optional: false, required: false
  private _dcnmFanDetails = new DataIntersightNiatelemetryNiaInventoryResultsDcnmFanDetailsList(this, "dcnm_fan_details", false);
  public get dcnmFanDetails() {
    return this._dcnmFanDetails;
  }

  // dcnm_license_state - computed: true, optional: false, required: false
  public get dcnmLicenseState() {
    return this.getStringAttribute('dcnm_license_state');
  }

  // device_discovery - computed: true, optional: false, required: false
  public get deviceDiscovery() {
    return this.getStringAttribute('device_discovery');
  }

  // device_health - computed: true, optional: false, required: false
  public get deviceHealth() {
    return this.getNumberAttribute('device_health');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // device_up_time - computed: true, optional: false, required: false
  public get deviceUpTime() {
    return this.getNumberAttribute('device_up_time');
  }

  // disk - computed: true, optional: false, required: false
  private _disk = new DataIntersightNiatelemetryNiaInventoryResultsDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }

  // dn - computed: true, optional: false, required: false
  public get dn() {
    return this.getStringAttribute('dn');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // fabric_name - computed: true, optional: false, required: false
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }

  // fex_count - computed: true, optional: false, required: false
  public get fexCount() {
    return this.getNumberAttribute('fex_count');
  }

  // infra_wi_node_count - computed: true, optional: false, required: false
  public get infraWiNodeCount() {
    return this.getNumberAttribute('infra_wi_node_count');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataIntersightNiatelemetryNiaInventoryResultsInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_virtual_node - computed: true, optional: false, required: false
  public get isVirtualNode() {
    return this.getStringAttribute('is_virtual_node');
  }

  // last_reboot_time - computed: true, optional: false, required: false
  public get lastRebootTime() {
    return this.getStringAttribute('last_reboot_time');
  }

  // last_reset_reason - computed: true, optional: false, required: false
  public get lastResetReason() {
    return this.getStringAttribute('last_reset_reason');
  }

  // license_state - computed: true, optional: false, required: false
  private _licenseState = new DataIntersightNiatelemetryNiaInventoryResultsLicenseStateList(this, "license_state", false);
  public get licenseState() {
    return this._licenseState;
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // log_in_time - computed: true, optional: false, required: false
  public get logInTime() {
    return this.getStringAttribute('log_in_time');
  }

  // log_out_time - computed: true, optional: false, required: false
  public get logOutTime() {
    return this.getStringAttribute('log_out_time');
  }

  // mac_sec_count - computed: true, optional: false, required: false
  public get macSecCount() {
    return this.getNumberAttribute('mac_sec_count');
  }

  // mac_sec_fab_count - computed: true, optional: false, required: false
  public get macSecFabCount() {
    return this.getNumberAttribute('mac_sec_fab_count');
  }

  // macsec_total_count - computed: true, optional: false, required: false
  public get macsecTotalCount() {
    return this.getNumberAttribute('macsec_total_count');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // nexus_cloud_membership_status - computed: true, optional: false, required: false
  public get nexusCloudMembershipStatus() {
    return this.getBooleanAttribute('nexus_cloud_membership_status');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // nxos_bgp_evpn - computed: true, optional: false, required: false
  private _nxosBgpEvpn = new DataIntersightNiatelemetryNiaInventoryResultsNxosBgpEvpnList(this, "nxos_bgp_evpn", false);
  public get nxosBgpEvpn() {
    return this._nxosBgpEvpn;
  }

  // nxos_bgp_mvpn - computed: true, optional: false, required: false
  private _nxosBgpMvpn = new DataIntersightNiatelemetryNiaInventoryResultsNxosBgpMvpnList(this, "nxos_bgp_mvpn", false);
  public get nxosBgpMvpn() {
    return this._nxosBgpMvpn;
  }

  // nxos_bootflash_details - computed: true, optional: false, required: false
  private _nxosBootflashDetails = new DataIntersightNiatelemetryNiaInventoryResultsNxosBootflashDetailsList(this, "nxos_bootflash_details", false);
  public get nxosBootflashDetails() {
    return this._nxosBootflashDetails;
  }

  // nxos_dci_interface_status - computed: true, optional: false, required: false
  public get nxosDciInterfaceStatus() {
    return this.getStringAttribute('nxos_dci_interface_status');
  }

  // nxos_interface_brief - computed: true, optional: false, required: false
  private _nxosInterfaceBrief = new DataIntersightNiatelemetryNiaInventoryResultsNxosInterfaceBriefList(this, "nxos_interface_brief", false);
  public get nxosInterfaceBrief() {
    return this._nxosInterfaceBrief;
  }

  // nxos_nve_interface_status - computed: true, optional: false, required: false
  public get nxosNveInterfaceStatus() {
    return this.getStringAttribute('nxos_nve_interface_status');
  }

  // nxos_nve_packet_counters - computed: true, optional: false, required: false
  private _nxosNvePacketCounters = new DataIntersightNiatelemetryNiaInventoryResultsNxosNvePacketCountersList(this, "nxos_nve_packet_counters", false);
  public get nxosNvePacketCounters() {
    return this._nxosNvePacketCounters;
  }

  // nxos_nve_vni - computed: true, optional: false, required: false
  private _nxosNveVni = new DataIntersightNiatelemetryNiaInventoryResultsNxosNveVniList(this, "nxos_nve_vni", false);
  public get nxosNveVni() {
    return this._nxosNveVni;
  }

  // nxos_ospf_neighbors - computed: true, optional: false, required: false
  public get nxosOspfNeighbors() {
    return this.getNumberAttribute('nxos_ospf_neighbors');
  }

  // nxos_pim_neighbors - computed: true, optional: false, required: false
  public get nxosPimNeighbors() {
    return this.getStringAttribute('nxos_pim_neighbors');
  }

  // nxos_telnet - computed: true, optional: false, required: false
  public get nxosTelnet() {
    return this.getStringAttribute('nxos_telnet');
  }

  // nxos_total_routes - computed: true, optional: false, required: false
  public get nxosTotalRoutes() {
    return this.getNumberAttribute('nxos_total_routes');
  }

  // nxos_vtp - computed: true, optional: false, required: false
  private _nxosVtp = new DataIntersightNiatelemetryNiaInventoryResultsNxosVtpList(this, "nxos_vtp", false);
  public get nxosVtp() {
    return this._nxosVtp;
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
  private _parent = new DataIntersightNiatelemetryNiaInventoryResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightNiatelemetryNiaInventoryResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // record_version - computed: true, optional: false, required: false
  public get recordVersion() {
    return this.getStringAttribute('record_version');
  }

  // registered_device - computed: true, optional: false, required: false
  private _registeredDevice = new DataIntersightNiatelemetryNiaInventoryResultsRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }

  // route_prefix_count - computed: true, optional: false, required: false
  public get routePrefixCount() {
    return this.getNumberAttribute('route_prefix_count');
  }

  // route_prefix_v4_count - computed: true, optional: false, required: false
  public get routePrefixV4Count() {
    return this.getNumberAttribute('route_prefix_v4_count');
  }

  // route_prefix_v6_count - computed: true, optional: false, required: false
  public get routePrefixV6Count() {
    return this.getNumberAttribute('route_prefix_v6_count');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // siteuuid - computed: true, optional: false, required: false
  public get siteuuid() {
    return this.getStringAttribute('siteuuid');
  }

  // smart_account_id - computed: true, optional: false, required: false
  public get smartAccountId() {
    return this.getNumberAttribute('smart_account_id');
  }

  // software_download - computed: true, optional: false, required: false
  public get softwareDownload() {
    return this.getStringAttribute('software_download');
  }

  // system_up_time - computed: true, optional: false, required: false
  public get systemUpTime() {
    return this.getStringAttribute('system_up_time');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightNiatelemetryNiaInventoryResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightNiatelemetryNiaInventoryResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vni_status - computed: true, optional: false, required: false
  private _vniStatus = new DataIntersightNiatelemetryNiaInventoryResultsVniStatusList(this, "vni_status", false);
  public get vniStatus() {
    return this._vniStatus;
  }

  // vpc_peer_ip_address - computed: true, optional: false, required: false
  public get vpcPeerIpAddress() {
    return this.getStringAttribute('vpc_peer_ip_address');
  }
}

export class DataIntersightNiatelemetryNiaInventoryResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryResultsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#selector DataIntersightNiatelemetryNiaInventory#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryAncestorsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryAncestors | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryAncestors | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryAncestors | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryAncestorsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDcnmFanDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Name of the fan used in the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#name DataIntersightNiatelemetryNiaInventory#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * Product ID of the fan used in the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#product_id DataIntersightNiatelemetryNiaInventory#product_id}
  */
  readonly productId?: string;
  /**
  * Serial number of the fan used in the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#serial_number DataIntersightNiatelemetryNiaInventory#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Vendor Id of the fan used in the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#vendor_id DataIntersightNiatelemetryNiaInventory#vendor_id}
  */
  readonly vendorId?: string;
}

export function dataIntersightNiatelemetryNiaInventoryDcnmFanDetailsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmFanDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    product_id: cdktf.stringToTerraform(struct!.productId),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    vendor_id: cdktf.stringToTerraform(struct!.vendorId),
  }
}


export function dataIntersightNiatelemetryNiaInventoryDcnmFanDetailsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDcnmFanDetails | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    product_id: {
      value: cdktf.stringToHclTerraform(struct!.productId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_id: {
      value: cdktf.stringToHclTerraform(struct!.vendorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryDcnmFanDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDcnmFanDetails | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._productId !== undefined) {
      hasAnyValues = true;
      internalValueResult.productId = this._productId;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._vendorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorId = this._vendorId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDcnmFanDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._productId = undefined;
      this._serialNumber = undefined;
      this._vendorId = undefined;
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
      this._name = value.name;
      this._objectType = value.objectType;
      this._productId = value.productId;
      this._serialNumber = value.serialNumber;
      this._vendorId = value.vendorId;
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

  // product_id - computed: false, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // vendor_id - computed: false, optional: true, required: false
  private _vendorId?: string; 
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }
  public set vendorId(value: string) {
    this._vendorId = value;
  }
  public resetVendorId() {
    this._vendorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorIdInput() {
    return this._vendorId;
  }
}

export class DataIntersightNiatelemetryNiaInventoryDcnmFanDetailsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryDcnmFanDetails[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryDcnmFanDetailsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryDcnmFanDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The free disk capacity, currently the type of this field is set to integer. This determines how much memory is free in Bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#free DataIntersightNiatelemetryNiaInventory#free}
  */
  readonly free?: number;
  /**
  * Disk Name used to identified the disk usage record. This determines the name of the disk partition that is inventoried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#name DataIntersightNiatelemetryNiaInventory#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * The total disk capacity, it should be the sum of free and used, currently the type of this field is set to integer. This determines the total memory for this partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#total DataIntersightNiatelemetryNiaInventory#total}
  */
  readonly total?: number;
  /**
  * The used disk capacity, currently the type of this field is set to integer. This determines how much memory is used in Bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#used DataIntersightNiatelemetryNiaInventory#used}
  */
  readonly used?: number;
}

export function dataIntersightNiatelemetryNiaInventoryDiskToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDiskOutputReference | DataIntersightNiatelemetryNiaInventoryDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    free: cdktf.numberToTerraform(struct!.free),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    total: cdktf.numberToTerraform(struct!.total),
    used: cdktf.numberToTerraform(struct!.used),
  }
}


export function dataIntersightNiatelemetryNiaInventoryDiskToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryDiskOutputReference | DataIntersightNiatelemetryNiaInventoryDisk): any {
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
    free: {
      value: cdktf.numberToHclTerraform(struct!.free),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used: {
      value: cdktf.numberToHclTerraform(struct!.used),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryDisk | undefined {
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
    if (this._free !== undefined) {
      hasAnyValues = true;
      internalValueResult.free = this._free;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._used !== undefined) {
      hasAnyValues = true;
      internalValueResult.used = this._used;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._free = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._total = undefined;
      this._used = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._free = value.free;
      this._name = value.name;
      this._objectType = value.objectType;
      this._total = value.total;
      this._used = value.used;
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

  // free - computed: false, optional: true, required: false
  private _free?: number; 
  public get free() {
    return this.getNumberAttribute('free');
  }
  public set free(value: number) {
    this._free = value;
  }
  public resetFree() {
    this._free = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeInput() {
    return this._free;
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

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // used - computed: false, optional: true, required: false
  private _used?: number; 
  public get used() {
    return this.getNumberAttribute('used');
  }
  public set used(value: number) {
    this._used = value;
  }
  public resetUsed() {
    this._used = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedInput() {
    return this._used;
  }
}
export interface DataIntersightNiatelemetryNiaInventoryInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Return value of name of the port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#name DataIntersightNiatelemetryNiaInventory#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * Return value of operState attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#oper_state DataIntersightNiatelemetryNiaInventory#oper_state}
  */
  readonly operState?: string;
  /**
  * Return whether sfp is present or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#xcvr_present DataIntersightNiatelemetryNiaInventory#xcvr_present}
  */
  readonly xcvrPresent?: string;
}

export function dataIntersightNiatelemetryNiaInventoryInterfaceToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    oper_state: cdktf.stringToTerraform(struct!.operState),
    xcvr_present: cdktf.stringToTerraform(struct!.xcvrPresent),
  }
}


export function dataIntersightNiatelemetryNiaInventoryInterfaceToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryInterface | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    oper_state: {
      value: cdktf.stringToHclTerraform(struct!.operState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xcvr_present: {
      value: cdktf.stringToHclTerraform(struct!.xcvrPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryInterface | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._operState !== undefined) {
      hasAnyValues = true;
      internalValueResult.operState = this._operState;
    }
    if (this._xcvrPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.xcvrPresent = this._xcvrPresent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._operState = undefined;
      this._xcvrPresent = undefined;
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
      this._name = value.name;
      this._objectType = value.objectType;
      this._operState = value.operState;
      this._xcvrPresent = value.xcvrPresent;
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

  // oper_state - computed: false, optional: true, required: false
  private _operState?: string; 
  public get operState() {
    return this.getStringAttribute('oper_state');
  }
  public set operState(value: string) {
    this._operState = value;
  }
  public resetOperState() {
    this._operState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStateInput() {
    return this._operState;
  }

  // xcvr_present - computed: false, optional: true, required: false
  private _xcvrPresent?: string; 
  public get xcvrPresent() {
    return this.getStringAttribute('xcvr_present');
  }
  public set xcvrPresent(value: string) {
    this._xcvrPresent = value;
  }
  public resetXcvrPresent() {
    this._xcvrPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xcvrPresentInput() {
    return this._xcvrPresent;
  }
}

export class DataIntersightNiatelemetryNiaInventoryInterfaceList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryInterface[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryInterfaceOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryLicenseState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#selector DataIntersightNiatelemetryNiaInventory#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryLicenseStateToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryLicenseStateOutputReference | DataIntersightNiatelemetryNiaInventoryLicenseState): any {
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


export function dataIntersightNiatelemetryNiaInventoryLicenseStateToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryLicenseStateOutputReference | DataIntersightNiatelemetryNiaInventoryLicenseState): any {
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

export class DataIntersightNiatelemetryNiaInventoryLicenseStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryLicenseState | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryLicenseState | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryNxosBgpEvpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Returns the EVPN mac count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nxos_evpn_mac_count DataIntersightNiatelemetryNiaInventory#nxos_evpn_mac_count}
  */
  readonly nxosEvpnMacCount?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns the BGP EVPN total networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#total_networks DataIntersightNiatelemetryNiaInventory#total_networks}
  */
  readonly totalNetworks?: number;
  /**
  * Returns the BGP EVPN total paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#total_paths DataIntersightNiatelemetryNiaInventory#total_paths}
  */
  readonly totalPaths?: number;
}

export function dataIntersightNiatelemetryNiaInventoryNxosBgpEvpnToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosBgpEvpnOutputReference | DataIntersightNiatelemetryNiaInventoryNxosBgpEvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    nxos_evpn_mac_count: cdktf.stringToTerraform(struct!.nxosEvpnMacCount),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    total_networks: cdktf.numberToTerraform(struct!.totalNetworks),
    total_paths: cdktf.numberToTerraform(struct!.totalPaths),
  }
}


export function dataIntersightNiatelemetryNiaInventoryNxosBgpEvpnToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosBgpEvpnOutputReference | DataIntersightNiatelemetryNiaInventoryNxosBgpEvpn): any {
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
    nxos_evpn_mac_count: {
      value: cdktf.stringToHclTerraform(struct!.nxosEvpnMacCount),
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
    total_networks: {
      value: cdktf.numberToHclTerraform(struct!.totalNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_paths: {
      value: cdktf.numberToHclTerraform(struct!.totalPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryNxosBgpEvpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryNxosBgpEvpn | undefined {
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
    if (this._nxosEvpnMacCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxosEvpnMacCount = this._nxosEvpnMacCount;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._totalNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNetworks = this._totalNetworks;
    }
    if (this._totalPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPaths = this._totalPaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryNxosBgpEvpn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._nxosEvpnMacCount = undefined;
      this._objectType = undefined;
      this._totalNetworks = undefined;
      this._totalPaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._nxosEvpnMacCount = value.nxosEvpnMacCount;
      this._objectType = value.objectType;
      this._totalNetworks = value.totalNetworks;
      this._totalPaths = value.totalPaths;
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

  // nxos_evpn_mac_count - computed: false, optional: true, required: false
  private _nxosEvpnMacCount?: string; 
  public get nxosEvpnMacCount() {
    return this.getStringAttribute('nxos_evpn_mac_count');
  }
  public set nxosEvpnMacCount(value: string) {
    this._nxosEvpnMacCount = value;
  }
  public resetNxosEvpnMacCount() {
    this._nxosEvpnMacCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosEvpnMacCountInput() {
    return this._nxosEvpnMacCount;
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

  // total_networks - computed: false, optional: true, required: false
  private _totalNetworks?: number; 
  public get totalNetworks() {
    return this.getNumberAttribute('total_networks');
  }
  public set totalNetworks(value: number) {
    this._totalNetworks = value;
  }
  public resetTotalNetworks() {
    this._totalNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNetworksInput() {
    return this._totalNetworks;
  }

  // total_paths - computed: false, optional: true, required: false
  private _totalPaths?: number; 
  public get totalPaths() {
    return this.getNumberAttribute('total_paths');
  }
  public set totalPaths(value: number) {
    this._totalPaths = value;
  }
  public resetTotalPaths() {
    this._totalPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPathsInput() {
    return this._totalPaths;
  }
}
export interface DataIntersightNiatelemetryNiaInventoryNxosBgpMvpn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Return count of BGP MVPN table capable peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#capable_peers DataIntersightNiatelemetryNiaInventory#capable_peers}
  */
  readonly capablePeers?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Return count of BGP MVPN configured peers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#configured_peers DataIntersightNiatelemetryNiaInventory#configured_peers}
  */
  readonly configuredPeers?: number;
  /**
  * Return value of BGP MVPN memory used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#memory_used DataIntersightNiatelemetryNiaInventory#memory_used}
  */
  readonly memoryUsed?: number;
  /**
  * Return value of BGP MVPN cluster list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#number_of_cluster_lists DataIntersightNiatelemetryNiaInventory#number_of_cluster_lists}
  */
  readonly numberOfClusterLists?: number;
  /**
  * Return count of BGP MVPN communities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#number_of_communities DataIntersightNiatelemetryNiaInventory#number_of_communities}
  */
  readonly numberOfCommunities?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * Return value of BGP MVPN table version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#table_version DataIntersightNiatelemetryNiaInventory#table_version}
  */
  readonly tableVersion?: number;
  /**
  * Return count of BGP MVPN networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#total_networks DataIntersightNiatelemetryNiaInventory#total_networks}
  */
  readonly totalNetworks?: number;
  /**
  * Return count of BGP MVPN paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#total_paths DataIntersightNiatelemetryNiaInventory#total_paths}
  */
  readonly totalPaths?: number;
}

export function dataIntersightNiatelemetryNiaInventoryNxosBgpMvpnToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosBgpMvpnOutputReference | DataIntersightNiatelemetryNiaInventoryNxosBgpMvpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    capable_peers: cdktf.numberToTerraform(struct!.capablePeers),
    class_id: cdktf.stringToTerraform(struct!.classId),
    configured_peers: cdktf.numberToTerraform(struct!.configuredPeers),
    memory_used: cdktf.numberToTerraform(struct!.memoryUsed),
    number_of_cluster_lists: cdktf.numberToTerraform(struct!.numberOfClusterLists),
    number_of_communities: cdktf.numberToTerraform(struct!.numberOfCommunities),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    table_version: cdktf.numberToTerraform(struct!.tableVersion),
    total_networks: cdktf.numberToTerraform(struct!.totalNetworks),
    total_paths: cdktf.numberToTerraform(struct!.totalPaths),
  }
}


export function dataIntersightNiatelemetryNiaInventoryNxosBgpMvpnToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosBgpMvpnOutputReference | DataIntersightNiatelemetryNiaInventoryNxosBgpMvpn): any {
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
    capable_peers: {
      value: cdktf.numberToHclTerraform(struct!.capablePeers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configured_peers: {
      value: cdktf.numberToHclTerraform(struct!.configuredPeers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_used: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_cluster_lists: {
      value: cdktf.numberToHclTerraform(struct!.numberOfClusterLists),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_communities: {
      value: cdktf.numberToHclTerraform(struct!.numberOfCommunities),
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
    table_version: {
      value: cdktf.numberToHclTerraform(struct!.tableVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_networks: {
      value: cdktf.numberToHclTerraform(struct!.totalNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_paths: {
      value: cdktf.numberToHclTerraform(struct!.totalPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryNxosBgpMvpnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryNxosBgpMvpn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._capablePeers !== undefined) {
      hasAnyValues = true;
      internalValueResult.capablePeers = this._capablePeers;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._configuredPeers !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredPeers = this._configuredPeers;
    }
    if (this._memoryUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsed = this._memoryUsed;
    }
    if (this._numberOfClusterLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfClusterLists = this._numberOfClusterLists;
    }
    if (this._numberOfCommunities !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCommunities = this._numberOfCommunities;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._tableVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableVersion = this._tableVersion;
    }
    if (this._totalNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNetworks = this._totalNetworks;
    }
    if (this._totalPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPaths = this._totalPaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryNxosBgpMvpn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._capablePeers = undefined;
      this._classId = undefined;
      this._configuredPeers = undefined;
      this._memoryUsed = undefined;
      this._numberOfClusterLists = undefined;
      this._numberOfCommunities = undefined;
      this._objectType = undefined;
      this._tableVersion = undefined;
      this._totalNetworks = undefined;
      this._totalPaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._capablePeers = value.capablePeers;
      this._classId = value.classId;
      this._configuredPeers = value.configuredPeers;
      this._memoryUsed = value.memoryUsed;
      this._numberOfClusterLists = value.numberOfClusterLists;
      this._numberOfCommunities = value.numberOfCommunities;
      this._objectType = value.objectType;
      this._tableVersion = value.tableVersion;
      this._totalNetworks = value.totalNetworks;
      this._totalPaths = value.totalPaths;
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

  // capable_peers - computed: false, optional: true, required: false
  private _capablePeers?: number; 
  public get capablePeers() {
    return this.getNumberAttribute('capable_peers');
  }
  public set capablePeers(value: number) {
    this._capablePeers = value;
  }
  public resetCapablePeers() {
    this._capablePeers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capablePeersInput() {
    return this._capablePeers;
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

  // configured_peers - computed: false, optional: true, required: false
  private _configuredPeers?: number; 
  public get configuredPeers() {
    return this.getNumberAttribute('configured_peers');
  }
  public set configuredPeers(value: number) {
    this._configuredPeers = value;
  }
  public resetConfiguredPeers() {
    this._configuredPeers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredPeersInput() {
    return this._configuredPeers;
  }

  // memory_used - computed: false, optional: true, required: false
  private _memoryUsed?: number; 
  public get memoryUsed() {
    return this.getNumberAttribute('memory_used');
  }
  public set memoryUsed(value: number) {
    this._memoryUsed = value;
  }
  public resetMemoryUsed() {
    this._memoryUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsedInput() {
    return this._memoryUsed;
  }

  // number_of_cluster_lists - computed: false, optional: true, required: false
  private _numberOfClusterLists?: number; 
  public get numberOfClusterLists() {
    return this.getNumberAttribute('number_of_cluster_lists');
  }
  public set numberOfClusterLists(value: number) {
    this._numberOfClusterLists = value;
  }
  public resetNumberOfClusterLists() {
    this._numberOfClusterLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfClusterListsInput() {
    return this._numberOfClusterLists;
  }

  // number_of_communities - computed: false, optional: true, required: false
  private _numberOfCommunities?: number; 
  public get numberOfCommunities() {
    return this.getNumberAttribute('number_of_communities');
  }
  public set numberOfCommunities(value: number) {
    this._numberOfCommunities = value;
  }
  public resetNumberOfCommunities() {
    this._numberOfCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCommunitiesInput() {
    return this._numberOfCommunities;
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

  // table_version - computed: false, optional: true, required: false
  private _tableVersion?: number; 
  public get tableVersion() {
    return this.getNumberAttribute('table_version');
  }
  public set tableVersion(value: number) {
    this._tableVersion = value;
  }
  public resetTableVersion() {
    this._tableVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableVersionInput() {
    return this._tableVersion;
  }

  // total_networks - computed: false, optional: true, required: false
  private _totalNetworks?: number; 
  public get totalNetworks() {
    return this.getNumberAttribute('total_networks');
  }
  public set totalNetworks(value: number) {
    this._totalNetworks = value;
  }
  public resetTotalNetworks() {
    this._totalNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNetworksInput() {
    return this._totalNetworks;
  }

  // total_paths - computed: false, optional: true, required: false
  private _totalPaths?: number; 
  public get totalPaths() {
    return this.getNumberAttribute('total_paths');
  }
  public set totalPaths(value: number) {
    this._totalPaths = value;
  }
  public resetTotalPaths() {
    this._totalPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPathsInput() {
    return this._totalPaths;
  }
}
export interface DataIntersightNiatelemetryNiaInventoryNxosBootflashDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Return firmware revision in boot flash details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#fw_rev DataIntersightNiatelemetryNiaInventory#fw_rev}
  */
  readonly fwRev?: string;
  /**
  * Return model type in boot flash details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#model_type DataIntersightNiatelemetryNiaInventory#model_type}
  */
  readonly modelType?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * Return serial id in boot flash details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#serial DataIntersightNiatelemetryNiaInventory#serial}
  */
  readonly serial?: string;
}

export function dataIntersightNiatelemetryNiaInventoryNxosBootflashDetailsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosBootflashDetailsOutputReference | DataIntersightNiatelemetryNiaInventoryNxosBootflashDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    fw_rev: cdktf.stringToTerraform(struct!.fwRev),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function dataIntersightNiatelemetryNiaInventoryNxosBootflashDetailsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosBootflashDetailsOutputReference | DataIntersightNiatelemetryNiaInventoryNxosBootflashDetails): any {
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
    fw_rev: {
      value: cdktf.stringToHclTerraform(struct!.fwRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
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
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryNxosBootflashDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryNxosBootflashDetails | undefined {
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
    if (this._fwRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwRev = this._fwRev;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryNxosBootflashDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._fwRev = undefined;
      this._modelType = undefined;
      this._objectType = undefined;
      this._serial = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._fwRev = value.fwRev;
      this._modelType = value.modelType;
      this._objectType = value.objectType;
      this._serial = value.serial;
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

  // fw_rev - computed: false, optional: true, required: false
  private _fwRev?: string; 
  public get fwRev() {
    return this.getStringAttribute('fw_rev');
  }
  public set fwRev(value: string) {
    this._fwRev = value;
  }
  public resetFwRev() {
    this._fwRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwRevInput() {
    return this._fwRev;
  }

  // model_type - computed: false, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }
}
export interface DataIntersightNiatelemetryNiaInventoryNxosInterfaceBrief {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Return value of number of interafces down.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#interface_down_count DataIntersightNiatelemetryNiaInventory#interface_down_count}
  */
  readonly interfaceDownCount?: number;
  /**
  * Return value of number of interafces up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#interface_up_count DataIntersightNiatelemetryNiaInventory#interface_up_count}
  */
  readonly interfaceUpCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightNiatelemetryNiaInventoryNxosInterfaceBriefToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosInterfaceBriefOutputReference | DataIntersightNiatelemetryNiaInventoryNxosInterfaceBrief): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    interface_down_count: cdktf.numberToTerraform(struct!.interfaceDownCount),
    interface_up_count: cdktf.numberToTerraform(struct!.interfaceUpCount),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightNiatelemetryNiaInventoryNxosInterfaceBriefToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosInterfaceBriefOutputReference | DataIntersightNiatelemetryNiaInventoryNxosInterfaceBrief): any {
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
    interface_down_count: {
      value: cdktf.numberToHclTerraform(struct!.interfaceDownCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_up_count: {
      value: cdktf.numberToHclTerraform(struct!.interfaceUpCount),
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

export class DataIntersightNiatelemetryNiaInventoryNxosInterfaceBriefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryNxosInterfaceBrief | undefined {
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
    if (this._interfaceDownCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceDownCount = this._interfaceDownCount;
    }
    if (this._interfaceUpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceUpCount = this._interfaceUpCount;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryNxosInterfaceBrief | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._interfaceDownCount = undefined;
      this._interfaceUpCount = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._interfaceDownCount = value.interfaceDownCount;
      this._interfaceUpCount = value.interfaceUpCount;
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

  // interface_down_count - computed: false, optional: true, required: false
  private _interfaceDownCount?: number; 
  public get interfaceDownCount() {
    return this.getNumberAttribute('interface_down_count');
  }
  public set interfaceDownCount(value: number) {
    this._interfaceDownCount = value;
  }
  public resetInterfaceDownCount() {
    this._interfaceDownCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDownCountInput() {
    return this._interfaceDownCount;
  }

  // interface_up_count - computed: false, optional: true, required: false
  private _interfaceUpCount?: number; 
  public get interfaceUpCount() {
    return this.getNumberAttribute('interface_up_count');
  }
  public set interfaceUpCount(value: number) {
    this._interfaceUpCount = value;
  }
  public resetInterfaceUpCount() {
    this._interfaceUpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceUpCountInput() {
    return this._interfaceUpCount;
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
export interface DataIntersightNiatelemetryNiaInventoryNxosNvePacketCounters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Return mcast in packet count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#mcast_inpkts DataIntersightNiatelemetryNiaInventory#mcast_inpkts}
  */
  readonly mcastInpkts?: number;
  /**
  * Return mcast outbytes count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#mcast_outbytes DataIntersightNiatelemetryNiaInventory#mcast_outbytes}
  */
  readonly mcastOutbytes?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * Return ucast in packet count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#ucast_inpkts DataIntersightNiatelemetryNiaInventory#ucast_inpkts}
  */
  readonly ucastInpkts?: number;
  /**
  * Return ucast out packet count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#ucast_outpkts DataIntersightNiatelemetryNiaInventory#ucast_outpkts}
  */
  readonly ucastOutpkts?: number;
}

export function dataIntersightNiatelemetryNiaInventoryNxosNvePacketCountersToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosNvePacketCountersOutputReference | DataIntersightNiatelemetryNiaInventoryNxosNvePacketCounters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    mcast_inpkts: cdktf.numberToTerraform(struct!.mcastInpkts),
    mcast_outbytes: cdktf.numberToTerraform(struct!.mcastOutbytes),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ucast_inpkts: cdktf.numberToTerraform(struct!.ucastInpkts),
    ucast_outpkts: cdktf.numberToTerraform(struct!.ucastOutpkts),
  }
}


export function dataIntersightNiatelemetryNiaInventoryNxosNvePacketCountersToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosNvePacketCountersOutputReference | DataIntersightNiatelemetryNiaInventoryNxosNvePacketCounters): any {
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
    mcast_inpkts: {
      value: cdktf.numberToHclTerraform(struct!.mcastInpkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcast_outbytes: {
      value: cdktf.numberToHclTerraform(struct!.mcastOutbytes),
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
    ucast_inpkts: {
      value: cdktf.numberToHclTerraform(struct!.ucastInpkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ucast_outpkts: {
      value: cdktf.numberToHclTerraform(struct!.ucastOutpkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryNxosNvePacketCountersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryNxosNvePacketCounters | undefined {
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
    if (this._mcastInpkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastInpkts = this._mcastInpkts;
    }
    if (this._mcastOutbytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastOutbytes = this._mcastOutbytes;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._ucastInpkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucastInpkts = this._ucastInpkts;
    }
    if (this._ucastOutpkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucastOutpkts = this._ucastOutpkts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryNxosNvePacketCounters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._mcastInpkts = undefined;
      this._mcastOutbytes = undefined;
      this._objectType = undefined;
      this._ucastInpkts = undefined;
      this._ucastOutpkts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._mcastInpkts = value.mcastInpkts;
      this._mcastOutbytes = value.mcastOutbytes;
      this._objectType = value.objectType;
      this._ucastInpkts = value.ucastInpkts;
      this._ucastOutpkts = value.ucastOutpkts;
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

  // mcast_inpkts - computed: false, optional: true, required: false
  private _mcastInpkts?: number; 
  public get mcastInpkts() {
    return this.getNumberAttribute('mcast_inpkts');
  }
  public set mcastInpkts(value: number) {
    this._mcastInpkts = value;
  }
  public resetMcastInpkts() {
    this._mcastInpkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastInpktsInput() {
    return this._mcastInpkts;
  }

  // mcast_outbytes - computed: false, optional: true, required: false
  private _mcastOutbytes?: number; 
  public get mcastOutbytes() {
    return this.getNumberAttribute('mcast_outbytes');
  }
  public set mcastOutbytes(value: number) {
    this._mcastOutbytes = value;
  }
  public resetMcastOutbytes() {
    this._mcastOutbytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastOutbytesInput() {
    return this._mcastOutbytes;
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

  // ucast_inpkts - computed: false, optional: true, required: false
  private _ucastInpkts?: number; 
  public get ucastInpkts() {
    return this.getNumberAttribute('ucast_inpkts');
  }
  public set ucastInpkts(value: number) {
    this._ucastInpkts = value;
  }
  public resetUcastInpkts() {
    this._ucastInpkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucastInpktsInput() {
    return this._ucastInpkts;
  }

  // ucast_outpkts - computed: false, optional: true, required: false
  private _ucastOutpkts?: number; 
  public get ucastOutpkts() {
    return this.getNumberAttribute('ucast_outpkts');
  }
  public set ucastOutpkts(value: number) {
    this._ucastOutpkts = value;
  }
  public resetUcastOutpkts() {
    this._ucastOutpkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucastOutpktsInput() {
    return this._ucastOutpkts;
  }
}
export interface DataIntersightNiatelemetryNiaInventoryNxosNveVni {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Return value of cp vni count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#cp_vni_count DataIntersightNiatelemetryNiaInventory#cp_vni_count}
  */
  readonly cpVniCount?: number;
  /**
  * Return value of cp vni down count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#cp_vni_down DataIntersightNiatelemetryNiaInventory#cp_vni_down}
  */
  readonly cpVniDown?: number;
  /**
  * Return value of cp vni up count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#cp_vni_up DataIntersightNiatelemetryNiaInventory#cp_vni_up}
  */
  readonly cpVniUp?: number;
  /**
  * Return value of dp vni count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#dp_vni_count DataIntersightNiatelemetryNiaInventory#dp_vni_count}
  */
  readonly dpVniCount?: number;
  /**
  * Return value of cp vni down count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#dp_vni_down DataIntersightNiatelemetryNiaInventory#dp_vni_down}
  */
  readonly dpVniDown?: number;
  /**
  * Return value of cp vni up count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#dp_vni_up DataIntersightNiatelemetryNiaInventory#dp_vni_up}
  */
  readonly dpVniUp?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightNiatelemetryNiaInventoryNxosNveVniToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosNveVniOutputReference | DataIntersightNiatelemetryNiaInventoryNxosNveVni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    cp_vni_count: cdktf.numberToTerraform(struct!.cpVniCount),
    cp_vni_down: cdktf.numberToTerraform(struct!.cpVniDown),
    cp_vni_up: cdktf.numberToTerraform(struct!.cpVniUp),
    dp_vni_count: cdktf.numberToTerraform(struct!.dpVniCount),
    dp_vni_down: cdktf.numberToTerraform(struct!.dpVniDown),
    dp_vni_up: cdktf.numberToTerraform(struct!.dpVniUp),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightNiatelemetryNiaInventoryNxosNveVniToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosNveVniOutputReference | DataIntersightNiatelemetryNiaInventoryNxosNveVni): any {
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
    cp_vni_count: {
      value: cdktf.numberToHclTerraform(struct!.cpVniCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cp_vni_down: {
      value: cdktf.numberToHclTerraform(struct!.cpVniDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cp_vni_up: {
      value: cdktf.numberToHclTerraform(struct!.cpVniUp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dp_vni_count: {
      value: cdktf.numberToHclTerraform(struct!.dpVniCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dp_vni_down: {
      value: cdktf.numberToHclTerraform(struct!.dpVniDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dp_vni_up: {
      value: cdktf.numberToHclTerraform(struct!.dpVniUp),
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

export class DataIntersightNiatelemetryNiaInventoryNxosNveVniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryNxosNveVni | undefined {
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
    if (this._cpVniCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpVniCount = this._cpVniCount;
    }
    if (this._cpVniDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpVniDown = this._cpVniDown;
    }
    if (this._cpVniUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpVniUp = this._cpVniUp;
    }
    if (this._dpVniCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpVniCount = this._dpVniCount;
    }
    if (this._dpVniDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpVniDown = this._dpVniDown;
    }
    if (this._dpVniUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpVniUp = this._dpVniUp;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryNxosNveVni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._cpVniCount = undefined;
      this._cpVniDown = undefined;
      this._cpVniUp = undefined;
      this._dpVniCount = undefined;
      this._dpVniDown = undefined;
      this._dpVniUp = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._cpVniCount = value.cpVniCount;
      this._cpVniDown = value.cpVniDown;
      this._cpVniUp = value.cpVniUp;
      this._dpVniCount = value.dpVniCount;
      this._dpVniDown = value.dpVniDown;
      this._dpVniUp = value.dpVniUp;
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

  // cp_vni_count - computed: false, optional: true, required: false
  private _cpVniCount?: number; 
  public get cpVniCount() {
    return this.getNumberAttribute('cp_vni_count');
  }
  public set cpVniCount(value: number) {
    this._cpVniCount = value;
  }
  public resetCpVniCount() {
    this._cpVniCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpVniCountInput() {
    return this._cpVniCount;
  }

  // cp_vni_down - computed: false, optional: true, required: false
  private _cpVniDown?: number; 
  public get cpVniDown() {
    return this.getNumberAttribute('cp_vni_down');
  }
  public set cpVniDown(value: number) {
    this._cpVniDown = value;
  }
  public resetCpVniDown() {
    this._cpVniDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpVniDownInput() {
    return this._cpVniDown;
  }

  // cp_vni_up - computed: false, optional: true, required: false
  private _cpVniUp?: number; 
  public get cpVniUp() {
    return this.getNumberAttribute('cp_vni_up');
  }
  public set cpVniUp(value: number) {
    this._cpVniUp = value;
  }
  public resetCpVniUp() {
    this._cpVniUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpVniUpInput() {
    return this._cpVniUp;
  }

  // dp_vni_count - computed: false, optional: true, required: false
  private _dpVniCount?: number; 
  public get dpVniCount() {
    return this.getNumberAttribute('dp_vni_count');
  }
  public set dpVniCount(value: number) {
    this._dpVniCount = value;
  }
  public resetDpVniCount() {
    this._dpVniCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpVniCountInput() {
    return this._dpVniCount;
  }

  // dp_vni_down - computed: false, optional: true, required: false
  private _dpVniDown?: number; 
  public get dpVniDown() {
    return this.getNumberAttribute('dp_vni_down');
  }
  public set dpVniDown(value: number) {
    this._dpVniDown = value;
  }
  public resetDpVniDown() {
    this._dpVniDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpVniDownInput() {
    return this._dpVniDown;
  }

  // dp_vni_up - computed: false, optional: true, required: false
  private _dpVniUp?: number; 
  public get dpVniUp() {
    return this.getNumberAttribute('dp_vni_up');
  }
  public set dpVniUp(value: number) {
    this._dpVniUp = value;
  }
  public resetDpVniUp() {
    this._dpVniUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpVniUpInput() {
    return this._dpVniUp;
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
export interface DataIntersightNiatelemetryNiaInventoryNxosVtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * Returns version of vtp running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nr_version DataIntersightNiatelemetryNiaInventory#nr_version}
  */
  readonly nrVersion?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns the status of operational mode of vtp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#oper_mode DataIntersightNiatelemetryNiaInventory#oper_mode}
  */
  readonly operMode?: string;
  /**
  * Returns the status pruning mode of vtp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#pruning_mode DataIntersightNiatelemetryNiaInventory#pruning_mode}
  */
  readonly pruningMode?: string;
  /**
  * Returns the running version of vtp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#running_version DataIntersightNiatelemetryNiaInventory#running_version}
  */
  readonly runningVersion?: string;
  /**
  * Returns the status of trap in vtp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#trap_enabled DataIntersightNiatelemetryNiaInventory#trap_enabled}
  */
  readonly trapEnabled?: string;
  /**
  * Returns the status of v2 mode of vtp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#v2_mode DataIntersightNiatelemetryNiaInventory#v2_mode}
  */
  readonly v2Mode?: string;
}

export function dataIntersightNiatelemetryNiaInventoryNxosVtpToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosVtpOutputReference | DataIntersightNiatelemetryNiaInventoryNxosVtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    nr_version: cdktf.numberToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    oper_mode: cdktf.stringToTerraform(struct!.operMode),
    pruning_mode: cdktf.stringToTerraform(struct!.pruningMode),
    running_version: cdktf.stringToTerraform(struct!.runningVersion),
    trap_enabled: cdktf.stringToTerraform(struct!.trapEnabled),
    v2_mode: cdktf.stringToTerraform(struct!.v2Mode),
  }
}


export function dataIntersightNiatelemetryNiaInventoryNxosVtpToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryNxosVtpOutputReference | DataIntersightNiatelemetryNiaInventoryNxosVtp): any {
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
    nr_version: {
      value: cdktf.numberToHclTerraform(struct!.nrVersion),
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
    oper_mode: {
      value: cdktf.stringToHclTerraform(struct!.operMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pruning_mode: {
      value: cdktf.stringToHclTerraform(struct!.pruningMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running_version: {
      value: cdktf.stringToHclTerraform(struct!.runningVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trap_enabled: {
      value: cdktf.stringToHclTerraform(struct!.trapEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v2_mode: {
      value: cdktf.stringToHclTerraform(struct!.v2Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryNxosVtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryNxosVtp | undefined {
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
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._operMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.operMode = this._operMode;
    }
    if (this._pruningMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pruningMode = this._pruningMode;
    }
    if (this._runningVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningVersion = this._runningVersion;
    }
    if (this._trapEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.trapEnabled = this._trapEnabled;
    }
    if (this._v2Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2Mode = this._v2Mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryNxosVtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._operMode = undefined;
      this._pruningMode = undefined;
      this._runningVersion = undefined;
      this._trapEnabled = undefined;
      this._v2Mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._operMode = value.operMode;
      this._pruningMode = value.pruningMode;
      this._runningVersion = value.runningVersion;
      this._trapEnabled = value.trapEnabled;
      this._v2Mode = value.v2Mode;
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

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: number; 
  public get nrVersion() {
    return this.getNumberAttribute('nr_version');
  }
  public set nrVersion(value: number) {
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

  // oper_mode - computed: false, optional: true, required: false
  private _operMode?: string; 
  public get operMode() {
    return this.getStringAttribute('oper_mode');
  }
  public set operMode(value: string) {
    this._operMode = value;
  }
  public resetOperMode() {
    this._operMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operModeInput() {
    return this._operMode;
  }

  // pruning_mode - computed: false, optional: true, required: false
  private _pruningMode?: string; 
  public get pruningMode() {
    return this.getStringAttribute('pruning_mode');
  }
  public set pruningMode(value: string) {
    this._pruningMode = value;
  }
  public resetPruningMode() {
    this._pruningMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruningModeInput() {
    return this._pruningMode;
  }

  // running_version - computed: false, optional: true, required: false
  private _runningVersion?: string; 
  public get runningVersion() {
    return this.getStringAttribute('running_version');
  }
  public set runningVersion(value: string) {
    this._runningVersion = value;
  }
  public resetRunningVersion() {
    this._runningVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningVersionInput() {
    return this._runningVersion;
  }

  // trap_enabled - computed: false, optional: true, required: false
  private _trapEnabled?: string; 
  public get trapEnabled() {
    return this.getStringAttribute('trap_enabled');
  }
  public set trapEnabled(value: string) {
    this._trapEnabled = value;
  }
  public resetTrapEnabled() {
    this._trapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapEnabledInput() {
    return this._trapEnabled;
  }

  // v2_mode - computed: false, optional: true, required: false
  private _v2Mode?: string; 
  public get v2Mode() {
    return this.getStringAttribute('v2_mode');
  }
  public set v2Mode(value: string) {
    this._v2Mode = value;
  }
  public resetV2Mode() {
    this._v2Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ModeInput() {
    return this._v2Mode;
  }
}
export interface DataIntersightNiatelemetryNiaInventoryParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#selector DataIntersightNiatelemetryNiaInventory#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryParentToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryParentOutputReference | DataIntersightNiatelemetryNiaInventoryParent): any {
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


export function dataIntersightNiatelemetryNiaInventoryParentToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryParentOutputReference | DataIntersightNiatelemetryNiaInventoryParent): any {
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

export class DataIntersightNiatelemetryNiaInventoryParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryParent | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryParent | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#selector DataIntersightNiatelemetryNiaInventory#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryPermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryPermissionResources | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryPermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryPermissionResources | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryPermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryPermissionResources | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryPermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#selector DataIntersightNiatelemetryNiaInventory#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryRegisteredDeviceOutputReference | DataIntersightNiatelemetryNiaInventoryRegisteredDevice): any {
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


export function dataIntersightNiatelemetryNiaInventoryRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryRegisteredDeviceOutputReference | DataIntersightNiatelemetryNiaInventoryRegisteredDevice): any {
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

export class DataIntersightNiatelemetryNiaInventoryRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryRegisteredDevice | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryRegisteredDevice | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#selector DataIntersightNiatelemetryNiaInventory#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#selector DataIntersightNiatelemetryNiaInventory#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryTagsDefinitionOutputReference | DataIntersightNiatelemetryNiaInventoryTagsDefinition): any {
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


export function dataIntersightNiatelemetryNiaInventoryTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryTagsDefinitionOutputReference | DataIntersightNiatelemetryNiaInventoryTagsDefinition): any {
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

export class DataIntersightNiatelemetryNiaInventoryTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryTagsDefinition | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryTagsDefinition | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#key DataIntersightNiatelemetryNiaInventory#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#propagated DataIntersightNiatelemetryNiaInventory#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#type DataIntersightNiatelemetryNiaInventory#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#value DataIntersightNiatelemetryNiaInventory#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#ancestor_definitions DataIntersightNiatelemetryNiaInventory#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#definition DataIntersightNiatelemetryNiaInventory#definition}
  */
  readonly definition?: DataIntersightNiatelemetryNiaInventoryTagsDefinition;
}

export function dataIntersightNiatelemetryNiaInventoryTagsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryTags | cdktf.IResolvable): any {
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
    ancestor_definitions: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightNiatelemetryNiaInventoryTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightNiatelemetryNiaInventoryTagsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryTags | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightNiatelemetryNiaInventoryTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryTags | cdktf.IResolvable | undefined) {
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
  private _ancestorDefinitions = new DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightNiatelemetryNiaInventoryTagsAncestorDefinitions[] | cdktf.IResolvable) {
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
  private _definition = new DataIntersightNiatelemetryNiaInventoryTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightNiatelemetryNiaInventoryTagsDefinition) {
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

export class DataIntersightNiatelemetryNiaInventoryTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryTagsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#selector DataIntersightNiatelemetryNiaInventory#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#moid DataIntersightNiatelemetryNiaInventory#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#selector DataIntersightNiatelemetryNiaInventory#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryVersionContextRefMoOutputReference | DataIntersightNiatelemetryNiaInventoryVersionContextRefMo): any {
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


export function dataIntersightNiatelemetryNiaInventoryVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryVersionContextRefMoOutputReference | DataIntersightNiatelemetryNiaInventoryVersionContextRefMo): any {
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

export class DataIntersightNiatelemetryNiaInventoryVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryVersionContextRefMo | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryVersionContextRefMo | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#marked_for_deletion DataIntersightNiatelemetryNiaInventory#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#nr_version DataIntersightNiatelemetryNiaInventory#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#timestamp DataIntersightNiatelemetryNiaInventory#timestamp}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#version_type DataIntersightNiatelemetryNiaInventory#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#interested_mos DataIntersightNiatelemetryNiaInventory#interested_mos}
  */
  readonly interestedMos?: DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#ref_mo DataIntersightNiatelemetryNiaInventory#ref_mo}
  */
  readonly refMo?: DataIntersightNiatelemetryNiaInventoryVersionContextRefMo;
}

export function dataIntersightNiatelemetryNiaInventoryVersionContextToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryVersionContextOutputReference | DataIntersightNiatelemetryNiaInventoryVersionContext): any {
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
    interested_mos: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightNiatelemetryNiaInventoryVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightNiatelemetryNiaInventoryVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryVersionContextOutputReference | DataIntersightNiatelemetryNiaInventoryVersionContext): any {
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
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightNiatelemetryNiaInventoryVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryVersionContext | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightNiatelemetryNiaInventoryVersionContextInterestedMos[] | cdktf.IResolvable) {
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
  private _refMo = new DataIntersightNiatelemetryNiaInventoryVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightNiatelemetryNiaInventoryVersionContextRefMo) {
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
export interface DataIntersightNiatelemetryNiaInventoryVniStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#additional_properties DataIntersightNiatelemetryNiaInventory#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#class_id DataIntersightNiatelemetryNiaInventory#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#object_type DataIntersightNiatelemetryNiaInventory#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns the vni id of the vni.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#vni DataIntersightNiatelemetryNiaInventory#vni}
  */
  readonly vni?: string;
  /**
  * Returns the vni state of the vni.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#vni_state DataIntersightNiatelemetryNiaInventory#vni_state}
  */
  readonly vniState?: string;
  /**
  * Returns the vni type of the vni.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#vni_type DataIntersightNiatelemetryNiaInventory#vni_type}
  */
  readonly vniType?: string;
}

export function dataIntersightNiatelemetryNiaInventoryVniStatusToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryVniStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    vni: cdktf.stringToTerraform(struct!.vni),
    vni_state: cdktf.stringToTerraform(struct!.vniState),
    vni_type: cdktf.stringToTerraform(struct!.vniType),
  }
}


export function dataIntersightNiatelemetryNiaInventoryVniStatusToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryVniStatus | cdktf.IResolvable): any {
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
    vni: {
      value: cdktf.stringToHclTerraform(struct!.vni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vni_state: {
      value: cdktf.stringToHclTerraform(struct!.vniState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vni_type: {
      value: cdktf.stringToHclTerraform(struct!.vniType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryVniStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryVniStatus | cdktf.IResolvable | undefined {
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
    if (this._vni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vni = this._vni;
    }
    if (this._vniState !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniState = this._vniState;
    }
    if (this._vniType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniType = this._vniType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryVniStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._vni = undefined;
      this._vniState = undefined;
      this._vniType = undefined;
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
      this._vni = value.vni;
      this._vniState = value.vniState;
      this._vniType = value.vniType;
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

  // vni - computed: false, optional: true, required: false
  private _vni?: string; 
  public get vni() {
    return this.getStringAttribute('vni');
  }
  public set vni(value: string) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // vni_state - computed: false, optional: true, required: false
  private _vniState?: string; 
  public get vniState() {
    return this.getStringAttribute('vni_state');
  }
  public set vniState(value: string) {
    this._vniState = value;
  }
  public resetVniState() {
    this._vniState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniStateInput() {
    return this._vniState;
  }

  // vni_type - computed: false, optional: true, required: false
  private _vniType?: string; 
  public get vniType() {
    return this.getStringAttribute('vni_type');
  }
  public set vniType(value: string) {
    this._vniType = value;
  }
  public resetVniType() {
    this._vniType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniTypeInput() {
    return this._vniType;
  }
}

export class DataIntersightNiatelemetryNiaInventoryVniStatusList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryVniStatus[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryVniStatusOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryVniStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory intersight_niatelemetry_nia_inventory}
*/
export class DataIntersightNiatelemetryNiaInventory extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_niatelemetry_nia_inventory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightNiatelemetryNiaInventory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightNiatelemetryNiaInventory to import
  * @param importFromId The id of the existing DataIntersightNiatelemetryNiaInventory that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightNiatelemetryNiaInventory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_niatelemetry_nia_inventory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/niatelemetry_nia_inventory intersight_niatelemetry_nia_inventory} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightNiatelemetryNiaInventoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightNiatelemetryNiaInventoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_niatelemetry_nia_inventory',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72'
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
    this._controllerIpAddress = config.controllerIpAddress;
    this._cpu = config.cpu;
    this._crashResetLogs = config.crashResetLogs;
    this._createTime = config.createTime;
    this._customerDeviceConnector = config.customerDeviceConnector;
    this._dcnmLicenseState = config.dcnmLicenseState;
    this._deviceDiscovery = config.deviceDiscovery;
    this._deviceHealth = config.deviceHealth;
    this._deviceId = config.deviceId;
    this._deviceName = config.deviceName;
    this._deviceType = config.deviceType;
    this._deviceUpTime = config.deviceUpTime;
    this._dn = config.dn;
    this._domainGroupMoid = config.domainGroupMoid;
    this._fabricName = config.fabricName;
    this._fexCount = config.fexCount;
    this._id = config.id;
    this._infraWiNodeCount = config.infraWiNodeCount;
    this._ipAddress = config.ipAddress;
    this._isVirtualNode = config.isVirtualNode;
    this._lastRebootTime = config.lastRebootTime;
    this._lastResetReason = config.lastResetReason;
    this._licenseType = config.licenseType;
    this._logInTime = config.logInTime;
    this._logOutTime = config.logOutTime;
    this._macSecCount = config.macSecCount;
    this._macSecFabCount = config.macSecFabCount;
    this._macsecTotalCount = config.macsecTotalCount;
    this._memory = config.memory;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._nexusCloudMembershipStatus = config.nexusCloudMembershipStatus;
    this._nodeId = config.nodeId;
    this._nrVersion = config.nrVersion;
    this._nxosDciInterfaceStatus = config.nxosDciInterfaceStatus;
    this._nxosNveInterfaceStatus = config.nxosNveInterfaceStatus;
    this._nxosOspfNeighbors = config.nxosOspfNeighbors;
    this._nxosPimNeighbors = config.nxosPimNeighbors;
    this._nxosTelnet = config.nxosTelnet;
    this._nxosTotalRoutes = config.nxosTotalRoutes;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._recordType = config.recordType;
    this._recordVersion = config.recordVersion;
    this._routePrefixCount = config.routePrefixCount;
    this._routePrefixV4Count = config.routePrefixV4Count;
    this._routePrefixV6Count = config.routePrefixV6Count;
    this._serial = config.serial;
    this._sharedScope = config.sharedScope;
    this._siteName = config.siteName;
    this._siteuuid = config.siteuuid;
    this._smartAccountId = config.smartAccountId;
    this._softwareDownload = config.softwareDownload;
    this._systemUpTime = config.systemUpTime;
    this._vpcPeerIpAddress = config.vpcPeerIpAddress;
    this._ancestors.internalValue = config.ancestors;
    this._dcnmFanDetails.internalValue = config.dcnmFanDetails;
    this._disk.internalValue = config.disk;
    this._interface.internalValue = config.interface;
    this._licenseState.internalValue = config.licenseState;
    this._nxosBgpEvpn.internalValue = config.nxosBgpEvpn;
    this._nxosBgpMvpn.internalValue = config.nxosBgpMvpn;
    this._nxosBootflashDetails.internalValue = config.nxosBootflashDetails;
    this._nxosInterfaceBrief.internalValue = config.nxosInterfaceBrief;
    this._nxosNvePacketCounters.internalValue = config.nxosNvePacketCounters;
    this._nxosNveVni.internalValue = config.nxosNveVni;
    this._nxosVtp.internalValue = config.nxosVtp;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
    this._vniStatus.internalValue = config.vniStatus;
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

  // controller_ip_address - computed: false, optional: true, required: false
  private _controllerIpAddress?: string; 
  public get controllerIpAddress() {
    return this.getStringAttribute('controller_ip_address');
  }
  public set controllerIpAddress(value: string) {
    this._controllerIpAddress = value;
  }
  public resetControllerIpAddress() {
    this._controllerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerIpAddressInput() {
    return this._controllerIpAddress;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // crash_reset_logs - computed: false, optional: true, required: false
  private _crashResetLogs?: string; 
  public get crashResetLogs() {
    return this.getStringAttribute('crash_reset_logs');
  }
  public set crashResetLogs(value: string) {
    this._crashResetLogs = value;
  }
  public resetCrashResetLogs() {
    this._crashResetLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crashResetLogsInput() {
    return this._crashResetLogs;
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

  // customer_device_connector - computed: false, optional: true, required: false
  private _customerDeviceConnector?: string; 
  public get customerDeviceConnector() {
    return this.getStringAttribute('customer_device_connector');
  }
  public set customerDeviceConnector(value: string) {
    this._customerDeviceConnector = value;
  }
  public resetCustomerDeviceConnector() {
    this._customerDeviceConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerDeviceConnectorInput() {
    return this._customerDeviceConnector;
  }

  // dcnm_license_state - computed: false, optional: true, required: false
  private _dcnmLicenseState?: string; 
  public get dcnmLicenseState() {
    return this.getStringAttribute('dcnm_license_state');
  }
  public set dcnmLicenseState(value: string) {
    this._dcnmLicenseState = value;
  }
  public resetDcnmLicenseState() {
    this._dcnmLicenseState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcnmLicenseStateInput() {
    return this._dcnmLicenseState;
  }

  // device_discovery - computed: false, optional: true, required: false
  private _deviceDiscovery?: string; 
  public get deviceDiscovery() {
    return this.getStringAttribute('device_discovery');
  }
  public set deviceDiscovery(value: string) {
    this._deviceDiscovery = value;
  }
  public resetDeviceDiscovery() {
    this._deviceDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDiscoveryInput() {
    return this._deviceDiscovery;
  }

  // device_health - computed: false, optional: true, required: false
  private _deviceHealth?: number; 
  public get deviceHealth() {
    return this.getNumberAttribute('device_health');
  }
  public set deviceHealth(value: number) {
    this._deviceHealth = value;
  }
  public resetDeviceHealth() {
    this._deviceHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceHealthInput() {
    return this._deviceHealth;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // device_up_time - computed: false, optional: true, required: false
  private _deviceUpTime?: number; 
  public get deviceUpTime() {
    return this.getNumberAttribute('device_up_time');
  }
  public set deviceUpTime(value: number) {
    this._deviceUpTime = value;
  }
  public resetDeviceUpTime() {
    this._deviceUpTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUpTimeInput() {
    return this._deviceUpTime;
  }

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
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

  // fabric_name - computed: false, optional: true, required: false
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  public resetFabricName() {
    this._fabricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
  }

  // fex_count - computed: false, optional: true, required: false
  private _fexCount?: number; 
  public get fexCount() {
    return this.getNumberAttribute('fex_count');
  }
  public set fexCount(value: number) {
    this._fexCount = value;
  }
  public resetFexCount() {
    this._fexCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fexCountInput() {
    return this._fexCount;
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

  // infra_wi_node_count - computed: false, optional: true, required: false
  private _infraWiNodeCount?: number; 
  public get infraWiNodeCount() {
    return this.getNumberAttribute('infra_wi_node_count');
  }
  public set infraWiNodeCount(value: number) {
    this._infraWiNodeCount = value;
  }
  public resetInfraWiNodeCount() {
    this._infraWiNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraWiNodeCountInput() {
    return this._infraWiNodeCount;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // is_virtual_node - computed: false, optional: true, required: false
  private _isVirtualNode?: string; 
  public get isVirtualNode() {
    return this.getStringAttribute('is_virtual_node');
  }
  public set isVirtualNode(value: string) {
    this._isVirtualNode = value;
  }
  public resetIsVirtualNode() {
    this._isVirtualNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVirtualNodeInput() {
    return this._isVirtualNode;
  }

  // last_reboot_time - computed: false, optional: true, required: false
  private _lastRebootTime?: string; 
  public get lastRebootTime() {
    return this.getStringAttribute('last_reboot_time');
  }
  public set lastRebootTime(value: string) {
    this._lastRebootTime = value;
  }
  public resetLastRebootTime() {
    this._lastRebootTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRebootTimeInput() {
    return this._lastRebootTime;
  }

  // last_reset_reason - computed: false, optional: true, required: false
  private _lastResetReason?: string; 
  public get lastResetReason() {
    return this.getStringAttribute('last_reset_reason');
  }
  public set lastResetReason(value: string) {
    this._lastResetReason = value;
  }
  public resetLastResetReason() {
    this._lastResetReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastResetReasonInput() {
    return this._lastResetReason;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // log_in_time - computed: false, optional: true, required: false
  private _logInTime?: string; 
  public get logInTime() {
    return this.getStringAttribute('log_in_time');
  }
  public set logInTime(value: string) {
    this._logInTime = value;
  }
  public resetLogInTime() {
    this._logInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInTimeInput() {
    return this._logInTime;
  }

  // log_out_time - computed: false, optional: true, required: false
  private _logOutTime?: string; 
  public get logOutTime() {
    return this.getStringAttribute('log_out_time');
  }
  public set logOutTime(value: string) {
    this._logOutTime = value;
  }
  public resetLogOutTime() {
    this._logOutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOutTimeInput() {
    return this._logOutTime;
  }

  // mac_sec_count - computed: false, optional: true, required: false
  private _macSecCount?: number; 
  public get macSecCount() {
    return this.getNumberAttribute('mac_sec_count');
  }
  public set macSecCount(value: number) {
    this._macSecCount = value;
  }
  public resetMacSecCount() {
    this._macSecCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macSecCountInput() {
    return this._macSecCount;
  }

  // mac_sec_fab_count - computed: false, optional: true, required: false
  private _macSecFabCount?: number; 
  public get macSecFabCount() {
    return this.getNumberAttribute('mac_sec_fab_count');
  }
  public set macSecFabCount(value: number) {
    this._macSecFabCount = value;
  }
  public resetMacSecFabCount() {
    this._macSecFabCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macSecFabCountInput() {
    return this._macSecFabCount;
  }

  // macsec_total_count - computed: false, optional: true, required: false
  private _macsecTotalCount?: number; 
  public get macsecTotalCount() {
    return this.getNumberAttribute('macsec_total_count');
  }
  public set macsecTotalCount(value: number) {
    this._macsecTotalCount = value;
  }
  public resetMacsecTotalCount() {
    this._macsecTotalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsecTotalCountInput() {
    return this._macsecTotalCount;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // nexus_cloud_membership_status - computed: false, optional: true, required: false
  private _nexusCloudMembershipStatus?: boolean | cdktf.IResolvable; 
  public get nexusCloudMembershipStatus() {
    return this.getBooleanAttribute('nexus_cloud_membership_status');
  }
  public set nexusCloudMembershipStatus(value: boolean | cdktf.IResolvable) {
    this._nexusCloudMembershipStatus = value;
  }
  public resetNexusCloudMembershipStatus() {
    this._nexusCloudMembershipStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexusCloudMembershipStatusInput() {
    return this._nexusCloudMembershipStatus;
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
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

  // nxos_dci_interface_status - computed: false, optional: true, required: false
  private _nxosDciInterfaceStatus?: string; 
  public get nxosDciInterfaceStatus() {
    return this.getStringAttribute('nxos_dci_interface_status');
  }
  public set nxosDciInterfaceStatus(value: string) {
    this._nxosDciInterfaceStatus = value;
  }
  public resetNxosDciInterfaceStatus() {
    this._nxosDciInterfaceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosDciInterfaceStatusInput() {
    return this._nxosDciInterfaceStatus;
  }

  // nxos_nve_interface_status - computed: false, optional: true, required: false
  private _nxosNveInterfaceStatus?: string; 
  public get nxosNveInterfaceStatus() {
    return this.getStringAttribute('nxos_nve_interface_status');
  }
  public set nxosNveInterfaceStatus(value: string) {
    this._nxosNveInterfaceStatus = value;
  }
  public resetNxosNveInterfaceStatus() {
    this._nxosNveInterfaceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosNveInterfaceStatusInput() {
    return this._nxosNveInterfaceStatus;
  }

  // nxos_ospf_neighbors - computed: false, optional: true, required: false
  private _nxosOspfNeighbors?: number; 
  public get nxosOspfNeighbors() {
    return this.getNumberAttribute('nxos_ospf_neighbors');
  }
  public set nxosOspfNeighbors(value: number) {
    this._nxosOspfNeighbors = value;
  }
  public resetNxosOspfNeighbors() {
    this._nxosOspfNeighbors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosOspfNeighborsInput() {
    return this._nxosOspfNeighbors;
  }

  // nxos_pim_neighbors - computed: false, optional: true, required: false
  private _nxosPimNeighbors?: string; 
  public get nxosPimNeighbors() {
    return this.getStringAttribute('nxos_pim_neighbors');
  }
  public set nxosPimNeighbors(value: string) {
    this._nxosPimNeighbors = value;
  }
  public resetNxosPimNeighbors() {
    this._nxosPimNeighbors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosPimNeighborsInput() {
    return this._nxosPimNeighbors;
  }

  // nxos_telnet - computed: false, optional: true, required: false
  private _nxosTelnet?: string; 
  public get nxosTelnet() {
    return this.getStringAttribute('nxos_telnet');
  }
  public set nxosTelnet(value: string) {
    this._nxosTelnet = value;
  }
  public resetNxosTelnet() {
    this._nxosTelnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosTelnetInput() {
    return this._nxosTelnet;
  }

  // nxos_total_routes - computed: false, optional: true, required: false
  private _nxosTotalRoutes?: number; 
  public get nxosTotalRoutes() {
    return this.getNumberAttribute('nxos_total_routes');
  }
  public set nxosTotalRoutes(value: number) {
    this._nxosTotalRoutes = value;
  }
  public resetNxosTotalRoutes() {
    this._nxosTotalRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosTotalRoutesInput() {
    return this._nxosTotalRoutes;
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

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // record_version - computed: false, optional: true, required: false
  private _recordVersion?: string; 
  public get recordVersion() {
    return this.getStringAttribute('record_version');
  }
  public set recordVersion(value: string) {
    this._recordVersion = value;
  }
  public resetRecordVersion() {
    this._recordVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordVersionInput() {
    return this._recordVersion;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightNiatelemetryNiaInventoryResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // route_prefix_count - computed: false, optional: true, required: false
  private _routePrefixCount?: number; 
  public get routePrefixCount() {
    return this.getNumberAttribute('route_prefix_count');
  }
  public set routePrefixCount(value: number) {
    this._routePrefixCount = value;
  }
  public resetRoutePrefixCount() {
    this._routePrefixCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePrefixCountInput() {
    return this._routePrefixCount;
  }

  // route_prefix_v4_count - computed: false, optional: true, required: false
  private _routePrefixV4Count?: number; 
  public get routePrefixV4Count() {
    return this.getNumberAttribute('route_prefix_v4_count');
  }
  public set routePrefixV4Count(value: number) {
    this._routePrefixV4Count = value;
  }
  public resetRoutePrefixV4Count() {
    this._routePrefixV4Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePrefixV4CountInput() {
    return this._routePrefixV4Count;
  }

  // route_prefix_v6_count - computed: false, optional: true, required: false
  private _routePrefixV6Count?: number; 
  public get routePrefixV6Count() {
    return this.getNumberAttribute('route_prefix_v6_count');
  }
  public set routePrefixV6Count(value: number) {
    this._routePrefixV6Count = value;
  }
  public resetRoutePrefixV6Count() {
    this._routePrefixV6Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePrefixV6CountInput() {
    return this._routePrefixV6Count;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
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

  // site_name - computed: false, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // siteuuid - computed: false, optional: true, required: false
  private _siteuuid?: string; 
  public get siteuuid() {
    return this.getStringAttribute('siteuuid');
  }
  public set siteuuid(value: string) {
    this._siteuuid = value;
  }
  public resetSiteuuid() {
    this._siteuuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteuuidInput() {
    return this._siteuuid;
  }

  // smart_account_id - computed: false, optional: true, required: false
  private _smartAccountId?: number; 
  public get smartAccountId() {
    return this.getNumberAttribute('smart_account_id');
  }
  public set smartAccountId(value: number) {
    this._smartAccountId = value;
  }
  public resetSmartAccountId() {
    this._smartAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // software_download - computed: false, optional: true, required: false
  private _softwareDownload?: string; 
  public get softwareDownload() {
    return this.getStringAttribute('software_download');
  }
  public set softwareDownload(value: string) {
    this._softwareDownload = value;
  }
  public resetSoftwareDownload() {
    this._softwareDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareDownloadInput() {
    return this._softwareDownload;
  }

  // system_up_time - computed: false, optional: true, required: false
  private _systemUpTime?: string; 
  public get systemUpTime() {
    return this.getStringAttribute('system_up_time');
  }
  public set systemUpTime(value: string) {
    this._systemUpTime = value;
  }
  public resetSystemUpTime() {
    this._systemUpTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemUpTimeInput() {
    return this._systemUpTime;
  }

  // vpc_peer_ip_address - computed: false, optional: true, required: false
  private _vpcPeerIpAddress?: string; 
  public get vpcPeerIpAddress() {
    return this.getStringAttribute('vpc_peer_ip_address');
  }
  public set vpcPeerIpAddress(value: string) {
    this._vpcPeerIpAddress = value;
  }
  public resetVpcPeerIpAddress() {
    this._vpcPeerIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeerIpAddressInput() {
    return this._vpcPeerIpAddress;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightNiatelemetryNiaInventoryAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightNiatelemetryNiaInventoryAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // dcnm_fan_details - computed: false, optional: true, required: false
  private _dcnmFanDetails = new DataIntersightNiatelemetryNiaInventoryDcnmFanDetailsList(this, "dcnm_fan_details", false);
  public get dcnmFanDetails() {
    return this._dcnmFanDetails;
  }
  public putDcnmFanDetails(value: DataIntersightNiatelemetryNiaInventoryDcnmFanDetails[] | cdktf.IResolvable) {
    this._dcnmFanDetails.internalValue = value;
  }
  public resetDcnmFanDetails() {
    this._dcnmFanDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcnmFanDetailsInput() {
    return this._dcnmFanDetails.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new DataIntersightNiatelemetryNiaInventoryDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: DataIntersightNiatelemetryNiaInventoryDisk) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new DataIntersightNiatelemetryNiaInventoryInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DataIntersightNiatelemetryNiaInventoryInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // license_state - computed: false, optional: true, required: false
  private _licenseState = new DataIntersightNiatelemetryNiaInventoryLicenseStateOutputReference(this, "license_state");
  public get licenseState() {
    return this._licenseState;
  }
  public putLicenseState(value: DataIntersightNiatelemetryNiaInventoryLicenseState) {
    this._licenseState.internalValue = value;
  }
  public resetLicenseState() {
    this._licenseState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseStateInput() {
    return this._licenseState.internalValue;
  }

  // nxos_bgp_evpn - computed: false, optional: true, required: false
  private _nxosBgpEvpn = new DataIntersightNiatelemetryNiaInventoryNxosBgpEvpnOutputReference(this, "nxos_bgp_evpn");
  public get nxosBgpEvpn() {
    return this._nxosBgpEvpn;
  }
  public putNxosBgpEvpn(value: DataIntersightNiatelemetryNiaInventoryNxosBgpEvpn) {
    this._nxosBgpEvpn.internalValue = value;
  }
  public resetNxosBgpEvpn() {
    this._nxosBgpEvpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosBgpEvpnInput() {
    return this._nxosBgpEvpn.internalValue;
  }

  // nxos_bgp_mvpn - computed: false, optional: true, required: false
  private _nxosBgpMvpn = new DataIntersightNiatelemetryNiaInventoryNxosBgpMvpnOutputReference(this, "nxos_bgp_mvpn");
  public get nxosBgpMvpn() {
    return this._nxosBgpMvpn;
  }
  public putNxosBgpMvpn(value: DataIntersightNiatelemetryNiaInventoryNxosBgpMvpn) {
    this._nxosBgpMvpn.internalValue = value;
  }
  public resetNxosBgpMvpn() {
    this._nxosBgpMvpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosBgpMvpnInput() {
    return this._nxosBgpMvpn.internalValue;
  }

  // nxos_bootflash_details - computed: false, optional: true, required: false
  private _nxosBootflashDetails = new DataIntersightNiatelemetryNiaInventoryNxosBootflashDetailsOutputReference(this, "nxos_bootflash_details");
  public get nxosBootflashDetails() {
    return this._nxosBootflashDetails;
  }
  public putNxosBootflashDetails(value: DataIntersightNiatelemetryNiaInventoryNxosBootflashDetails) {
    this._nxosBootflashDetails.internalValue = value;
  }
  public resetNxosBootflashDetails() {
    this._nxosBootflashDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosBootflashDetailsInput() {
    return this._nxosBootflashDetails.internalValue;
  }

  // nxos_interface_brief - computed: false, optional: true, required: false
  private _nxosInterfaceBrief = new DataIntersightNiatelemetryNiaInventoryNxosInterfaceBriefOutputReference(this, "nxos_interface_brief");
  public get nxosInterfaceBrief() {
    return this._nxosInterfaceBrief;
  }
  public putNxosInterfaceBrief(value: DataIntersightNiatelemetryNiaInventoryNxosInterfaceBrief) {
    this._nxosInterfaceBrief.internalValue = value;
  }
  public resetNxosInterfaceBrief() {
    this._nxosInterfaceBrief.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosInterfaceBriefInput() {
    return this._nxosInterfaceBrief.internalValue;
  }

  // nxos_nve_packet_counters - computed: false, optional: true, required: false
  private _nxosNvePacketCounters = new DataIntersightNiatelemetryNiaInventoryNxosNvePacketCountersOutputReference(this, "nxos_nve_packet_counters");
  public get nxosNvePacketCounters() {
    return this._nxosNvePacketCounters;
  }
  public putNxosNvePacketCounters(value: DataIntersightNiatelemetryNiaInventoryNxosNvePacketCounters) {
    this._nxosNvePacketCounters.internalValue = value;
  }
  public resetNxosNvePacketCounters() {
    this._nxosNvePacketCounters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosNvePacketCountersInput() {
    return this._nxosNvePacketCounters.internalValue;
  }

  // nxos_nve_vni - computed: false, optional: true, required: false
  private _nxosNveVni = new DataIntersightNiatelemetryNiaInventoryNxosNveVniOutputReference(this, "nxos_nve_vni");
  public get nxosNveVni() {
    return this._nxosNveVni;
  }
  public putNxosNveVni(value: DataIntersightNiatelemetryNiaInventoryNxosNveVni) {
    this._nxosNveVni.internalValue = value;
  }
  public resetNxosNveVni() {
    this._nxosNveVni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosNveVniInput() {
    return this._nxosNveVni.internalValue;
  }

  // nxos_vtp - computed: false, optional: true, required: false
  private _nxosVtp = new DataIntersightNiatelemetryNiaInventoryNxosVtpOutputReference(this, "nxos_vtp");
  public get nxosVtp() {
    return this._nxosVtp;
  }
  public putNxosVtp(value: DataIntersightNiatelemetryNiaInventoryNxosVtp) {
    this._nxosVtp.internalValue = value;
  }
  public resetNxosVtp() {
    this._nxosVtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosVtpInput() {
    return this._nxosVtp.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightNiatelemetryNiaInventoryParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightNiatelemetryNiaInventoryParent) {
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
  private _permissionResources = new DataIntersightNiatelemetryNiaInventoryPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightNiatelemetryNiaInventoryPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // registered_device - computed: false, optional: true, required: false
  private _registeredDevice = new DataIntersightNiatelemetryNiaInventoryRegisteredDeviceOutputReference(this, "registered_device");
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: DataIntersightNiatelemetryNiaInventoryRegisteredDevice) {
    this._registeredDevice.internalValue = value;
  }
  public resetRegisteredDevice() {
    this._registeredDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredDeviceInput() {
    return this._registeredDevice.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightNiatelemetryNiaInventoryTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightNiatelemetryNiaInventoryTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightNiatelemetryNiaInventoryVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightNiatelemetryNiaInventoryVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // vni_status - computed: false, optional: true, required: false
  private _vniStatus = new DataIntersightNiatelemetryNiaInventoryVniStatusList(this, "vni_status", false);
  public get vniStatus() {
    return this._vniStatus;
  }
  public putVniStatus(value: DataIntersightNiatelemetryNiaInventoryVniStatus[] | cdktf.IResolvable) {
    this._vniStatus.internalValue = value;
  }
  public resetVniStatus() {
    this._vniStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniStatusInput() {
    return this._vniStatus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      class_id: cdktf.stringToTerraform(this._classId),
      controller_ip_address: cdktf.stringToTerraform(this._controllerIpAddress),
      cpu: cdktf.numberToTerraform(this._cpu),
      crash_reset_logs: cdktf.stringToTerraform(this._crashResetLogs),
      create_time: cdktf.stringToTerraform(this._createTime),
      customer_device_connector: cdktf.stringToTerraform(this._customerDeviceConnector),
      dcnm_license_state: cdktf.stringToTerraform(this._dcnmLicenseState),
      device_discovery: cdktf.stringToTerraform(this._deviceDiscovery),
      device_health: cdktf.numberToTerraform(this._deviceHealth),
      device_id: cdktf.stringToTerraform(this._deviceId),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_type: cdktf.stringToTerraform(this._deviceType),
      device_up_time: cdktf.numberToTerraform(this._deviceUpTime),
      dn: cdktf.stringToTerraform(this._dn),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      fex_count: cdktf.numberToTerraform(this._fexCount),
      id: cdktf.stringToTerraform(this._id),
      infra_wi_node_count: cdktf.numberToTerraform(this._infraWiNodeCount),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      is_virtual_node: cdktf.stringToTerraform(this._isVirtualNode),
      last_reboot_time: cdktf.stringToTerraform(this._lastRebootTime),
      last_reset_reason: cdktf.stringToTerraform(this._lastResetReason),
      license_type: cdktf.stringToTerraform(this._licenseType),
      log_in_time: cdktf.stringToTerraform(this._logInTime),
      log_out_time: cdktf.stringToTerraform(this._logOutTime),
      mac_sec_count: cdktf.numberToTerraform(this._macSecCount),
      mac_sec_fab_count: cdktf.numberToTerraform(this._macSecFabCount),
      macsec_total_count: cdktf.numberToTerraform(this._macsecTotalCount),
      memory: cdktf.numberToTerraform(this._memory),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      nexus_cloud_membership_status: cdktf.booleanToTerraform(this._nexusCloudMembershipStatus),
      node_id: cdktf.stringToTerraform(this._nodeId),
      nr_version: cdktf.stringToTerraform(this._nrVersion),
      nxos_dci_interface_status: cdktf.stringToTerraform(this._nxosDciInterfaceStatus),
      nxos_nve_interface_status: cdktf.stringToTerraform(this._nxosNveInterfaceStatus),
      nxos_ospf_neighbors: cdktf.numberToTerraform(this._nxosOspfNeighbors),
      nxos_pim_neighbors: cdktf.stringToTerraform(this._nxosPimNeighbors),
      nxos_telnet: cdktf.stringToTerraform(this._nxosTelnet),
      nxos_total_routes: cdktf.numberToTerraform(this._nxosTotalRoutes),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      record_type: cdktf.stringToTerraform(this._recordType),
      record_version: cdktf.stringToTerraform(this._recordVersion),
      route_prefix_count: cdktf.numberToTerraform(this._routePrefixCount),
      route_prefix_v4_count: cdktf.numberToTerraform(this._routePrefixV4Count),
      route_prefix_v6_count: cdktf.numberToTerraform(this._routePrefixV6Count),
      serial: cdktf.stringToTerraform(this._serial),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      site_name: cdktf.stringToTerraform(this._siteName),
      siteuuid: cdktf.stringToTerraform(this._siteuuid),
      smart_account_id: cdktf.numberToTerraform(this._smartAccountId),
      software_download: cdktf.stringToTerraform(this._softwareDownload),
      system_up_time: cdktf.stringToTerraform(this._systemUpTime),
      vpc_peer_ip_address: cdktf.stringToTerraform(this._vpcPeerIpAddress),
      ancestors: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryAncestorsToTerraform, true)(this._ancestors.internalValue),
      dcnm_fan_details: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryDcnmFanDetailsToTerraform, true)(this._dcnmFanDetails.internalValue),
      disk: dataIntersightNiatelemetryNiaInventoryDiskToTerraform(this._disk.internalValue),
      interface: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryInterfaceToTerraform, true)(this._interface.internalValue),
      license_state: dataIntersightNiatelemetryNiaInventoryLicenseStateToTerraform(this._licenseState.internalValue),
      nxos_bgp_evpn: dataIntersightNiatelemetryNiaInventoryNxosBgpEvpnToTerraform(this._nxosBgpEvpn.internalValue),
      nxos_bgp_mvpn: dataIntersightNiatelemetryNiaInventoryNxosBgpMvpnToTerraform(this._nxosBgpMvpn.internalValue),
      nxos_bootflash_details: dataIntersightNiatelemetryNiaInventoryNxosBootflashDetailsToTerraform(this._nxosBootflashDetails.internalValue),
      nxos_interface_brief: dataIntersightNiatelemetryNiaInventoryNxosInterfaceBriefToTerraform(this._nxosInterfaceBrief.internalValue),
      nxos_nve_packet_counters: dataIntersightNiatelemetryNiaInventoryNxosNvePacketCountersToTerraform(this._nxosNvePacketCounters.internalValue),
      nxos_nve_vni: dataIntersightNiatelemetryNiaInventoryNxosNveVniToTerraform(this._nxosNveVni.internalValue),
      nxos_vtp: dataIntersightNiatelemetryNiaInventoryNxosVtpToTerraform(this._nxosVtp.internalValue),
      parent: dataIntersightNiatelemetryNiaInventoryParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      registered_device: dataIntersightNiatelemetryNiaInventoryRegisteredDeviceToTerraform(this._registeredDevice.internalValue),
      tags: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightNiatelemetryNiaInventoryVersionContextToTerraform(this._versionContext.internalValue),
      vni_status: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryVniStatusToTerraform, true)(this._vniStatus.internalValue),
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
      controller_ip_address: {
        value: cdktf.stringToHclTerraform(this._controllerIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crash_reset_logs: {
        value: cdktf.stringToHclTerraform(this._crashResetLogs),
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
      customer_device_connector: {
        value: cdktf.stringToHclTerraform(this._customerDeviceConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dcnm_license_state: {
        value: cdktf.stringToHclTerraform(this._dcnmLicenseState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_discovery: {
        value: cdktf.stringToHclTerraform(this._deviceDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_health: {
        value: cdktf.numberToHclTerraform(this._deviceHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_up_time: {
        value: cdktf.numberToHclTerraform(this._deviceUpTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fex_count: {
        value: cdktf.numberToHclTerraform(this._fexCount),
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
      infra_wi_node_count: {
        value: cdktf.numberToHclTerraform(this._infraWiNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_virtual_node: {
        value: cdktf.stringToHclTerraform(this._isVirtualNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_reboot_time: {
        value: cdktf.stringToHclTerraform(this._lastRebootTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_reset_reason: {
        value: cdktf.stringToHclTerraform(this._lastResetReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_in_time: {
        value: cdktf.stringToHclTerraform(this._logInTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_out_time: {
        value: cdktf.stringToHclTerraform(this._logOutTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_sec_count: {
        value: cdktf.numberToHclTerraform(this._macSecCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_sec_fab_count: {
        value: cdktf.numberToHclTerraform(this._macSecFabCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      macsec_total_count: {
        value: cdktf.numberToHclTerraform(this._macsecTotalCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
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
      nexus_cloud_membership_status: {
        value: cdktf.booleanToHclTerraform(this._nexusCloudMembershipStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nr_version: {
        value: cdktf.stringToHclTerraform(this._nrVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxos_dci_interface_status: {
        value: cdktf.stringToHclTerraform(this._nxosDciInterfaceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxos_nve_interface_status: {
        value: cdktf.stringToHclTerraform(this._nxosNveInterfaceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxos_ospf_neighbors: {
        value: cdktf.numberToHclTerraform(this._nxosOspfNeighbors),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxos_pim_neighbors: {
        value: cdktf.stringToHclTerraform(this._nxosPimNeighbors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxos_telnet: {
        value: cdktf.stringToHclTerraform(this._nxosTelnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxos_total_routes: {
        value: cdktf.numberToHclTerraform(this._nxosTotalRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_version: {
        value: cdktf.stringToHclTerraform(this._recordVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_prefix_count: {
        value: cdktf.numberToHclTerraform(this._routePrefixCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_prefix_v4_count: {
        value: cdktf.numberToHclTerraform(this._routePrefixV4Count),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_prefix_v6_count: {
        value: cdktf.numberToHclTerraform(this._routePrefixV6Count),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteuuid: {
        value: cdktf.stringToHclTerraform(this._siteuuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_account_id: {
        value: cdktf.numberToHclTerraform(this._smartAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      software_download: {
        value: cdktf.stringToHclTerraform(this._softwareDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_up_time: {
        value: cdktf.stringToHclTerraform(this._systemUpTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer_ip_address: {
        value: cdktf.stringToHclTerraform(this._vpcPeerIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryAncestorsList",
      },
      dcnm_fan_details: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryDcnmFanDetailsToHclTerraform, true)(this._dcnmFanDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDcnmFanDetailsList",
      },
      disk: {
        value: dataIntersightNiatelemetryNiaInventoryDiskToHclTerraform(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryDiskList",
      },
      interface: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryInterfaceList",
      },
      license_state: {
        value: dataIntersightNiatelemetryNiaInventoryLicenseStateToHclTerraform(this._licenseState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryLicenseStateList",
      },
      nxos_bgp_evpn: {
        value: dataIntersightNiatelemetryNiaInventoryNxosBgpEvpnToHclTerraform(this._nxosBgpEvpn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryNxosBgpEvpnList",
      },
      nxos_bgp_mvpn: {
        value: dataIntersightNiatelemetryNiaInventoryNxosBgpMvpnToHclTerraform(this._nxosBgpMvpn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryNxosBgpMvpnList",
      },
      nxos_bootflash_details: {
        value: dataIntersightNiatelemetryNiaInventoryNxosBootflashDetailsToHclTerraform(this._nxosBootflashDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryNxosBootflashDetailsList",
      },
      nxos_interface_brief: {
        value: dataIntersightNiatelemetryNiaInventoryNxosInterfaceBriefToHclTerraform(this._nxosInterfaceBrief.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryNxosInterfaceBriefList",
      },
      nxos_nve_packet_counters: {
        value: dataIntersightNiatelemetryNiaInventoryNxosNvePacketCountersToHclTerraform(this._nxosNvePacketCounters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryNxosNvePacketCountersList",
      },
      nxos_nve_vni: {
        value: dataIntersightNiatelemetryNiaInventoryNxosNveVniToHclTerraform(this._nxosNveVni.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryNxosNveVniList",
      },
      nxos_vtp: {
        value: dataIntersightNiatelemetryNiaInventoryNxosVtpToHclTerraform(this._nxosVtp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryNxosVtpList",
      },
      parent: {
        value: dataIntersightNiatelemetryNiaInventoryParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryPermissionResourcesList",
      },
      registered_device: {
        value: dataIntersightNiatelemetryNiaInventoryRegisteredDeviceToHclTerraform(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryRegisteredDeviceList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryTagsList",
      },
      version_context: {
        value: dataIntersightNiatelemetryNiaInventoryVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryVersionContextList",
      },
      vni_status: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryVniStatusToHclTerraform, true)(this._vniStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryVniStatusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
