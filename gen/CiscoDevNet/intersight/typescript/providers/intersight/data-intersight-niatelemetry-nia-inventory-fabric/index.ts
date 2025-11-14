// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightNiatelemetryNiaInventoryFabricConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#account_moid DataIntersightNiatelemetryNiaInventoryFabric#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Returns the aycast gateway mac.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#anycast_gw_mac DataIntersightNiatelemetryNiaInventoryFabric#anycast_gw_mac}
  */
  readonly anycastGwMac?: string;
  /**
  * Counts the number of BGP interfaces that are in established state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#bgp_established_interface_count DataIntersightNiatelemetryNiaInventoryFabric#bgp_established_interface_count}
  */
  readonly bgpEstablishedInterfaceCount?: number;
  /**
  * Returns number of bgw switches in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#bgw_count DataIntersightNiatelemetryNiaInventoryFabric#bgw_count}
  */
  readonly bgwCount?: number;
  /**
  * Count number of active interfaces on border gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#bgw_interface_up_count DataIntersightNiatelemetryNiaInventoryFabric#bgw_interface_up_count}
  */
  readonly bgwInterfaceUpCount?: number;
  /**
  * Count number of border gateway spines in the fabric inventory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#border_gateway_spine_count DataIntersightNiatelemetryNiaInventoryFabric#border_gateway_spine_count}
  */
  readonly borderGatewaySpineCount?: number;
  /**
  * Count number of border leafs in the fabric inventory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#border_leaf_count DataIntersightNiatelemetryNiaInventoryFabric#border_leaf_count}
  */
  readonly borderLeafCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * Cloudsec autoconfig details on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#cloudsec_autoconfig DataIntersightNiatelemetryNiaInventoryFabric#cloudsec_autoconfig}
  */
  readonly cloudsecAutoconfig?: boolean | cdktf.IResolvable;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#create_time DataIntersightNiatelemetryNiaInventoryFabric#create_time}
  */
  readonly createTime?: string;
  /**
  * Returns the dci subnet range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#dci_subnet_range DataIntersightNiatelemetryNiaInventoryFabric#dci_subnet_range}
  */
  readonly dciSubnetRange?: string;
  /**
  * Returns the dci subnet target mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#dci_subnet_target_mask DataIntersightNiatelemetryNiaInventoryFabric#dci_subnet_target_mask}
  */
  readonly dciSubnetTargetMask?: string;
  /**
  * Returns the value of the dcnmtrackerEnabled field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#dcnmtracker_enabled DataIntersightNiatelemetryNiaInventoryFabric#dcnmtracker_enabled}
  */
  readonly dcnmtrackerEnabled?: boolean | cdktf.IResolvable;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#domain_group_moid DataIntersightNiatelemetryNiaInventoryFabric#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Count number of ebgp evpn active interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#ebgp_evpn_link_up_count DataIntersightNiatelemetryNiaInventoryFabric#ebgp_evpn_link_up_count}
  */
  readonly ebgpEvpnLinkUpCount?: number;
  /**
  * Uniquely identifies a fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#fabric_id DataIntersightNiatelemetryNiaInventoryFabric#fabric_id}
  */
  readonly fabricId?: string;
  /**
  * Returns the value of the Name of a fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#fabric_name DataIntersightNiatelemetryNiaInventoryFabric#fabric_name}
  */
  readonly fabricName?: string;
  /**
  * Parent of the fabric on DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#fabric_parent DataIntersightNiatelemetryNiaInventoryFabric#fabric_parent}
  */
  readonly fabricParent?: string;
  /**
  * Fabric Technology details on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#fabric_technology DataIntersightNiatelemetryNiaInventoryFabric#fabric_technology}
  */
  readonly fabricTechnology?: string;
  /**
  * Fabric type information string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#fabric_type DataIntersightNiatelemetryNiaInventoryFabric#fabric_type}
  */
  readonly fabricType?: string;
  /**
  * PTP feature details on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#feature_ptp DataIntersightNiatelemetryNiaInventoryFabric#feature_ptp}
  */
  readonly featurePtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#id DataIntersightNiatelemetryNiaInventoryFabric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Checks if border gateway is present in the fabric inventory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#is_bgw_present DataIntersightNiatelemetryNiaInventoryFabric#is_bgw_present}
  */
  readonly isBgwPresent?: boolean | cdktf.IResolvable;
  /**
  * Check if NXAPI HTTP is enabled or not on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#is_enable_nxapi_http DataIntersightNiatelemetryNiaInventoryFabric#is_enable_nxapi_http}
  */
  readonly isEnableNxapiHttp?: boolean | cdktf.IResolvable;
  /**
  * Check if real time backup is enabled or not on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#is_enable_real_time_backup DataIntersightNiatelemetryNiaInventoryFabric#is_enable_real_time_backup}
  */
  readonly isEnableRealTimeBackup?: boolean | cdktf.IResolvable;
  /**
  * Returns if ngoam is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#is_ngoam_enabled DataIntersightNiatelemetryNiaInventoryFabric#is_ngoam_enabled}
  */
  readonly isNgoamEnabled?: boolean | cdktf.IResolvable;
  /**
  * Returns if the scheduled backup is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#is_scheduled_back_up_enabled DataIntersightNiatelemetryNiaInventoryFabric#is_scheduled_back_up_enabled}
  */
  readonly isScheduledBackUpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Is TRM enabled for the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#is_trm_enabled DataIntersightNiatelemetryNiaInventoryFabric#is_trm_enabled}
  */
  readonly isTrmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Returns total number of leafs in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#leaf_count DataIntersightNiatelemetryNiaInventoryFabric#leaf_count}
  */
  readonly leafCount?: number;
  /**
  * Link state routing details on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#link_state_routing DataIntersightNiatelemetryNiaInventoryFabric#link_state_routing}
  */
  readonly linkStateRouting?: string;
  /**
  * Fabric oper status information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#link_type DataIntersightNiatelemetryNiaInventoryFabric#link_type}
  */
  readonly linkType?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#mod_time DataIntersightNiatelemetryNiaInventoryFabric#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#moid DataIntersightNiatelemetryNiaInventoryFabric#moid}
  */
  readonly moid?: string;
  /**
  * No of networks deployed on a fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#network_deployment_count DataIntersightNiatelemetryNiaInventoryFabric#network_deployment_count}
  */
  readonly networkDeploymentCount?: number;
  /**
  * NTP server IP List on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#ntp_server_ip_list DataIntersightNiatelemetryNiaInventoryFabric#ntp_server_ip_list}
  */
  readonly ntpServerIpList?: string;
  /**
  * Returns the count of vnis between sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#nxos_vni_bw_sites_count DataIntersightNiatelemetryNiaInventoryFabric#nxos_vni_bw_sites_count}
  */
  readonly nxosVniBwSitesCount?: number;
  /**
  * Returns the count of vrfs between sites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#nxos_vrf_bw_sites_count DataIntersightNiatelemetryNiaInventoryFabric#nxos_vrf_bw_sites_count}
  */
  readonly nxosVrfBwSitesCount?: number;
  /**
  * Returns the value of the nxosVrfCount field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#nxos_vrf_count DataIntersightNiatelemetryNiaInventoryFabric#nxos_vrf_count}
  */
  readonly nxosVrfCount?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
  */
  readonly objectType?: string;
  /**
  * Fabric oper status information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#oper_status DataIntersightNiatelemetryNiaInventoryFabric#oper_status}
  */
  readonly operStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#owners DataIntersightNiatelemetryNiaInventoryFabric#owners}
  */
  readonly owners?: string[];
  /**
  * Type of record DCNM / APIC / SE. This determines the type of platform where inventory was collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#record_type DataIntersightNiatelemetryNiaInventoryFabric#record_type}
  */
  readonly recordType?: string;
  /**
  * Version of record being pushed. This determines what was the API version for data available from the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#record_version DataIntersightNiatelemetryNiaInventoryFabric#record_version}
  */
  readonly recordVersion?: string;
  /**
  * Replication mode details on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#replication_mode DataIntersightNiatelemetryNiaInventoryFabric#replication_mode}
  */
  readonly replicationMode?: string;
  /**
  * RP Mode details on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#rp_mode DataIntersightNiatelemetryNiaInventoryFabric#rp_mode}
  */
  readonly rpMode?: string;
  /**
  * Serial number of device being inventoried. The serial number is unique per device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#serial DataIntersightNiatelemetryNiaInventoryFabric#serial}
  */
  readonly serial?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#shared_scope DataIntersightNiatelemetryNiaInventoryFabric#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Name of fabric domain of the controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#site_name DataIntersightNiatelemetryNiaInventoryFabric#site_name}
  */
  readonly siteName?: string;
  /**
  * Software image details on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#software_image DataIntersightNiatelemetryNiaInventoryFabric#software_image}
  */
  readonly softwareImage?: string;
  /**
  * Returns total number of spines in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#spine_count DataIntersightNiatelemetryNiaInventoryFabric#spine_count}
  */
  readonly spineCount?: number;
  /**
  * Syslog server IP list on DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#syslog_server_ip_list DataIntersightNiatelemetryNiaInventoryFabric#syslog_server_ip_list}
  */
  readonly syslogServerIpList?: string;
  /**
  * Syslog sev details on the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#syslog_sev DataIntersightNiatelemetryNiaInventoryFabric#syslog_sev}
  */
  readonly syslogSev?: string;
  /**
  * Template name of the fabric on DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#template_name DataIntersightNiatelemetryNiaInventoryFabric#template_name}
  */
  readonly templateName?: string;
  /**
  * VLAN to VNI mappings configured in the DCNM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#vlan_vni_mappings DataIntersightNiatelemetryNiaInventoryFabric#vlan_vni_mappings}
  */
  readonly vlanVniMappings?: string;
  /**
  * Count number of IP addresses configured in the DCNM networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#vni_ip_count DataIntersightNiatelemetryNiaInventoryFabric#vni_ip_count}
  */
  readonly vniIpCount?: number;
  /**
  * No of vrfs deployed on a fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#vrf_deployment_count DataIntersightNiatelemetryNiaInventoryFabric#vrf_deployment_count}
  */
  readonly vrfDeploymentCount?: number;
  /**
  * Returns deployed network count for bgw/bgws switches in the MSD fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#xsite_network_count DataIntersightNiatelemetryNiaInventoryFabric#xsite_network_count}
  */
  readonly xsiteNetworkCount?: number;
  /**
  * Returns deployed vrf count for bgw/bgws switches in the MSD fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#xsite_vrf_count DataIntersightNiatelemetryNiaInventoryFabric#xsite_vrf_count}
  */
  readonly xsiteVrfCount?: number;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#ancestors DataIntersightNiatelemetryNiaInventoryFabric#ancestors}
  */
  readonly ancestors?: DataIntersightNiatelemetryNiaInventoryFabricAncestors[] | cdktf.IResolvable;
  /**
  * logical_links block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#logical_links DataIntersightNiatelemetryNiaInventoryFabric#logical_links}
  */
  readonly logicalLinks?: DataIntersightNiatelemetryNiaInventoryFabricLogicalLinks[] | cdktf.IResolvable;
  /**
  * network_deployment_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#network_deployment_status DataIntersightNiatelemetryNiaInventoryFabric#network_deployment_status}
  */
  readonly networkDeploymentStatus?: DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatus[] | cdktf.IResolvable;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#parent DataIntersightNiatelemetryNiaInventoryFabric#parent}
  */
  readonly parent?: DataIntersightNiatelemetryNiaInventoryFabricParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#permission_resources DataIntersightNiatelemetryNiaInventoryFabric#permission_resources}
  */
  readonly permissionResources?: DataIntersightNiatelemetryNiaInventoryFabricPermissionResources[] | cdktf.IResolvable;
  /**
  * registered_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#registered_device DataIntersightNiatelemetryNiaInventoryFabric#registered_device}
  */
  readonly registeredDevice?: DataIntersightNiatelemetryNiaInventoryFabricRegisteredDevice;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#tags DataIntersightNiatelemetryNiaInventoryFabric#tags}
  */
  readonly tags?: DataIntersightNiatelemetryNiaInventoryFabricTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#version_context DataIntersightNiatelemetryNiaInventoryFabric#version_context}
  */
  readonly versionContext?: DataIntersightNiatelemetryNiaInventoryFabricVersionContext;
  /**
  * vpc_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#vpc_details DataIntersightNiatelemetryNiaInventoryFabric#vpc_details}
  */
  readonly vpcDetails?: DataIntersightNiatelemetryNiaInventoryFabricVpcDetails[] | cdktf.IResolvable;
  /**
  * vrf_deployment_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#vrf_deployment_status DataIntersightNiatelemetryNiaInventoryFabric#vrf_deployment_status}
  */
  readonly vrfDeploymentStatus?: DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatus[] | cdktf.IResolvable;
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsAncestors {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsAncestorsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsAncestors | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsAncestorsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinks {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinksToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinksToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinks | undefined) {
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

  // db_id - computed: true, optional: false, required: false
  public get dbId() {
    return this.getNumberAttribute('db_id');
  }

  // is_present - computed: true, optional: false, required: false
  public get isPresent() {
    return this.getBooleanAttribute('is_present');
  }

  // link_addr1 - computed: true, optional: false, required: false
  public get linkAddr1() {
    return this.getStringAttribute('link_addr1');
  }

  // link_addr2 - computed: true, optional: false, required: false
  public get linkAddr2() {
    return this.getStringAttribute('link_addr2');
  }

  // link_state - computed: true, optional: false, required: false
  public get linkState() {
    return this.getStringAttribute('link_state');
  }

  // link_type - computed: true, optional: false, required: false
  public get linkType() {
    return this.getStringAttribute('link_type');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // uptime - computed: true, optional: false, required: false
  public get uptime() {
    return this.getStringAttribute('uptime');
  }
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinksOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatus {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatusToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatusToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatus | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatusOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsParent {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsParentToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsParentToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsParent | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsParentOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResources {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResources | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDevice {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDevice | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDeviceOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitions {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitions | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinition {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinition | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinitionOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsTags {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsTagsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsTagsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsTags | undefined) {
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
  private _ancestorDefinitions = new DataIntersightNiatelemetryNiaInventoryFabricResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightNiatelemetryNiaInventoryFabricResultsTagsDefinitionList(this, "definition", false);
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

  // sys_tag - computed: true, optional: false, required: false
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsTagsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMos {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMos | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMo {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMo | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMoOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContext {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextInterestedMosList(this, "interested_mos", false);
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
  private _refMo = new DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextRefMoList(this, "ref_mo", false);
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

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetails {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetailsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetailsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetails | undefined) {
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

  // is_vpc_configured - computed: true, optional: false, required: false
  public get isVpcConfigured() {
    return this.getBooleanAttribute('is_vpc_configured');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // peer_switch_db_id - computed: true, optional: false, required: false
  public get peerSwitchDbId() {
    return this.getNumberAttribute('peer_switch_db_id');
  }

  // switch_db_id - computed: true, optional: false, required: false
  public get switchDbId() {
    return this.getNumberAttribute('switch_db_id');
  }
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetailsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatus {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatusToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatusToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatus | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatusOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricResults {
}

export function dataIntersightNiatelemetryNiaInventoryFabricResultsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricResultsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricResults | undefined) {
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
  private _ancestors = new DataIntersightNiatelemetryNiaInventoryFabricResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // anycast_gw_mac - computed: true, optional: false, required: false
  public get anycastGwMac() {
    return this.getStringAttribute('anycast_gw_mac');
  }

  // bgp_established_interface_count - computed: true, optional: false, required: false
  public get bgpEstablishedInterfaceCount() {
    return this.getNumberAttribute('bgp_established_interface_count');
  }

  // bgw_count - computed: true, optional: false, required: false
  public get bgwCount() {
    return this.getNumberAttribute('bgw_count');
  }

  // bgw_interface_up_count - computed: true, optional: false, required: false
  public get bgwInterfaceUpCount() {
    return this.getNumberAttribute('bgw_interface_up_count');
  }

  // border_gateway_spine_count - computed: true, optional: false, required: false
  public get borderGatewaySpineCount() {
    return this.getNumberAttribute('border_gateway_spine_count');
  }

  // border_leaf_count - computed: true, optional: false, required: false
  public get borderLeafCount() {
    return this.getNumberAttribute('border_leaf_count');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cloudsec_autoconfig - computed: true, optional: false, required: false
  public get cloudsecAutoconfig() {
    return this.getBooleanAttribute('cloudsec_autoconfig');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dci_subnet_range - computed: true, optional: false, required: false
  public get dciSubnetRange() {
    return this.getStringAttribute('dci_subnet_range');
  }

  // dci_subnet_target_mask - computed: true, optional: false, required: false
  public get dciSubnetTargetMask() {
    return this.getStringAttribute('dci_subnet_target_mask');
  }

  // dcnmtracker_enabled - computed: true, optional: false, required: false
  public get dcnmtrackerEnabled() {
    return this.getBooleanAttribute('dcnmtracker_enabled');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // ebgp_evpn_link_up_count - computed: true, optional: false, required: false
  public get ebgpEvpnLinkUpCount() {
    return this.getNumberAttribute('ebgp_evpn_link_up_count');
  }

  // fabric_id - computed: true, optional: false, required: false
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }

  // fabric_name - computed: true, optional: false, required: false
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }

  // fabric_parent - computed: true, optional: false, required: false
  public get fabricParent() {
    return this.getStringAttribute('fabric_parent');
  }

  // fabric_technology - computed: true, optional: false, required: false
  public get fabricTechnology() {
    return this.getStringAttribute('fabric_technology');
  }

  // fabric_type - computed: true, optional: false, required: false
  public get fabricType() {
    return this.getStringAttribute('fabric_type');
  }

  // feature_ptp - computed: true, optional: false, required: false
  public get featurePtp() {
    return this.getStringAttribute('feature_ptp');
  }

  // is_bgw_present - computed: true, optional: false, required: false
  public get isBgwPresent() {
    return this.getBooleanAttribute('is_bgw_present');
  }

  // is_enable_nxapi_http - computed: true, optional: false, required: false
  public get isEnableNxapiHttp() {
    return this.getBooleanAttribute('is_enable_nxapi_http');
  }

  // is_enable_real_time_backup - computed: true, optional: false, required: false
  public get isEnableRealTimeBackup() {
    return this.getBooleanAttribute('is_enable_real_time_backup');
  }

  // is_ngoam_enabled - computed: true, optional: false, required: false
  public get isNgoamEnabled() {
    return this.getBooleanAttribute('is_ngoam_enabled');
  }

  // is_scheduled_back_up_enabled - computed: true, optional: false, required: false
  public get isScheduledBackUpEnabled() {
    return this.getBooleanAttribute('is_scheduled_back_up_enabled');
  }

  // is_trm_enabled - computed: true, optional: false, required: false
  public get isTrmEnabled() {
    return this.getBooleanAttribute('is_trm_enabled');
  }

  // leaf_count - computed: true, optional: false, required: false
  public get leafCount() {
    return this.getNumberAttribute('leaf_count');
  }

  // link_state_routing - computed: true, optional: false, required: false
  public get linkStateRouting() {
    return this.getStringAttribute('link_state_routing');
  }

  // link_type - computed: true, optional: false, required: false
  public get linkType() {
    return this.getStringAttribute('link_type');
  }

  // logical_links - computed: true, optional: false, required: false
  private _logicalLinks = new DataIntersightNiatelemetryNiaInventoryFabricResultsLogicalLinksList(this, "logical_links", false);
  public get logicalLinks() {
    return this._logicalLinks;
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // network_deployment_count - computed: true, optional: false, required: false
  public get networkDeploymentCount() {
    return this.getNumberAttribute('network_deployment_count');
  }

  // network_deployment_status - computed: true, optional: false, required: false
  private _networkDeploymentStatus = new DataIntersightNiatelemetryNiaInventoryFabricResultsNetworkDeploymentStatusList(this, "network_deployment_status", false);
  public get networkDeploymentStatus() {
    return this._networkDeploymentStatus;
  }

  // ntp_server_ip_list - computed: true, optional: false, required: false
  public get ntpServerIpList() {
    return this.getStringAttribute('ntp_server_ip_list');
  }

  // nxos_vni_bw_sites_count - computed: true, optional: false, required: false
  public get nxosVniBwSitesCount() {
    return this.getNumberAttribute('nxos_vni_bw_sites_count');
  }

  // nxos_vrf_bw_sites_count - computed: true, optional: false, required: false
  public get nxosVrfBwSitesCount() {
    return this.getNumberAttribute('nxos_vrf_bw_sites_count');
  }

  // nxos_vrf_count - computed: true, optional: false, required: false
  public get nxosVrfCount() {
    return this.getNumberAttribute('nxos_vrf_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // oper_status - computed: true, optional: false, required: false
  public get operStatus() {
    return this.getStringAttribute('oper_status');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightNiatelemetryNiaInventoryFabricResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightNiatelemetryNiaInventoryFabricResultsPermissionResourcesList(this, "permission_resources", false);
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
  private _registeredDevice = new DataIntersightNiatelemetryNiaInventoryFabricResultsRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }

  // replication_mode - computed: true, optional: false, required: false
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }

  // rp_mode - computed: true, optional: false, required: false
  public get rpMode() {
    return this.getStringAttribute('rp_mode');
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

  // software_image - computed: true, optional: false, required: false
  public get softwareImage() {
    return this.getStringAttribute('software_image');
  }

  // spine_count - computed: true, optional: false, required: false
  public get spineCount() {
    return this.getNumberAttribute('spine_count');
  }

  // syslog_server_ip_list - computed: true, optional: false, required: false
  public get syslogServerIpList() {
    return this.getStringAttribute('syslog_server_ip_list');
  }

  // syslog_sev - computed: true, optional: false, required: false
  public get syslogSev() {
    return this.getStringAttribute('syslog_sev');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightNiatelemetryNiaInventoryFabricResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightNiatelemetryNiaInventoryFabricResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vlan_vni_mappings - computed: true, optional: false, required: false
  public get vlanVniMappings() {
    return this.getStringAttribute('vlan_vni_mappings');
  }

  // vni_ip_count - computed: true, optional: false, required: false
  public get vniIpCount() {
    return this.getNumberAttribute('vni_ip_count');
  }

  // vpc_details - computed: true, optional: false, required: false
  private _vpcDetails = new DataIntersightNiatelemetryNiaInventoryFabricResultsVpcDetailsList(this, "vpc_details", false);
  public get vpcDetails() {
    return this._vpcDetails;
  }

  // vrf_deployment_count - computed: true, optional: false, required: false
  public get vrfDeploymentCount() {
    return this.getNumberAttribute('vrf_deployment_count');
  }

  // vrf_deployment_status - computed: true, optional: false, required: false
  private _vrfDeploymentStatus = new DataIntersightNiatelemetryNiaInventoryFabricResultsVrfDeploymentStatusList(this, "vrf_deployment_status", false);
  public get vrfDeploymentStatus() {
    return this._vrfDeploymentStatus;
  }

  // xsite_network_count - computed: true, optional: false, required: false
  public get xsiteNetworkCount() {
    return this.getNumberAttribute('xsite_network_count');
  }

  // xsite_vrf_count - computed: true, optional: false, required: false
  public get xsiteVrfCount() {
    return this.getNumberAttribute('xsite_vrf_count');
  }
}

export class DataIntersightNiatelemetryNiaInventoryFabricResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricResultsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#moid DataIntersightNiatelemetryNiaInventoryFabric#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#selector DataIntersightNiatelemetryNiaInventoryFabric#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricAncestorsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricAncestors | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryFabricAncestorsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricAncestors | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryFabricAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricAncestors | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryFabricAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricAncestorsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricLogicalLinks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * Return value of dbId attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#db_id DataIntersightNiatelemetryNiaInventoryFabric#db_id}
  */
  readonly dbId?: number;
  /**
  * Return value of isPresent attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#is_present DataIntersightNiatelemetryNiaInventoryFabric#is_present}
  */
  readonly isPresent?: boolean | cdktf.IResolvable;
  /**
  * Return value of linkAddr1 attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#link_addr1 DataIntersightNiatelemetryNiaInventoryFabric#link_addr1}
  */
  readonly linkAddr1?: string;
  /**
  * Return value of linkAddr2 attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#link_addr2 DataIntersightNiatelemetryNiaInventoryFabric#link_addr2}
  */
  readonly linkAddr2?: string;
  /**
  * Return value of linkState attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#link_state DataIntersightNiatelemetryNiaInventoryFabric#link_state}
  */
  readonly linkState?: string;
  /**
  * Return value of linkType attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#link_type DataIntersightNiatelemetryNiaInventoryFabric#link_type}
  */
  readonly linkType?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
  */
  readonly objectType?: string;
  /**
  * Return value of uptime attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#uptime DataIntersightNiatelemetryNiaInventoryFabric#uptime}
  */
  readonly uptime?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricLogicalLinksToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricLogicalLinks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    db_id: cdktf.numberToTerraform(struct!.dbId),
    is_present: cdktf.booleanToTerraform(struct!.isPresent),
    link_addr1: cdktf.stringToTerraform(struct!.linkAddr1),
    link_addr2: cdktf.stringToTerraform(struct!.linkAddr2),
    link_state: cdktf.stringToTerraform(struct!.linkState),
    link_type: cdktf.stringToTerraform(struct!.linkType),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    uptime: cdktf.stringToTerraform(struct!.uptime),
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricLogicalLinksToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricLogicalLinks | cdktf.IResolvable): any {
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
    db_id: {
      value: cdktf.numberToHclTerraform(struct!.dbId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_present: {
      value: cdktf.booleanToHclTerraform(struct!.isPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_addr1: {
      value: cdktf.stringToHclTerraform(struct!.linkAddr1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_addr2: {
      value: cdktf.stringToHclTerraform(struct!.linkAddr2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_state: {
      value: cdktf.stringToHclTerraform(struct!.linkState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_type: {
      value: cdktf.stringToHclTerraform(struct!.linkType),
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
    uptime: {
      value: cdktf.stringToHclTerraform(struct!.uptime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryFabricLogicalLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricLogicalLinks | cdktf.IResolvable | undefined {
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
    if (this._dbId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbId = this._dbId;
    }
    if (this._isPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPresent = this._isPresent;
    }
    if (this._linkAddr1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkAddr1 = this._linkAddr1;
    }
    if (this._linkAddr2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkAddr2 = this._linkAddr2;
    }
    if (this._linkState !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkState = this._linkState;
    }
    if (this._linkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._uptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.uptime = this._uptime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricLogicalLinks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._dbId = undefined;
      this._isPresent = undefined;
      this._linkAddr1 = undefined;
      this._linkAddr2 = undefined;
      this._linkState = undefined;
      this._linkType = undefined;
      this._objectType = undefined;
      this._uptime = undefined;
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
      this._dbId = value.dbId;
      this._isPresent = value.isPresent;
      this._linkAddr1 = value.linkAddr1;
      this._linkAddr2 = value.linkAddr2;
      this._linkState = value.linkState;
      this._linkType = value.linkType;
      this._objectType = value.objectType;
      this._uptime = value.uptime;
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

  // db_id - computed: false, optional: true, required: false
  private _dbId?: number; 
  public get dbId() {
    return this.getNumberAttribute('db_id');
  }
  public set dbId(value: number) {
    this._dbId = value;
  }
  public resetDbId() {
    this._dbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbIdInput() {
    return this._dbId;
  }

  // is_present - computed: false, optional: true, required: false
  private _isPresent?: boolean | cdktf.IResolvable; 
  public get isPresent() {
    return this.getBooleanAttribute('is_present');
  }
  public set isPresent(value: boolean | cdktf.IResolvable) {
    this._isPresent = value;
  }
  public resetIsPresent() {
    this._isPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPresentInput() {
    return this._isPresent;
  }

  // link_addr1 - computed: false, optional: true, required: false
  private _linkAddr1?: string; 
  public get linkAddr1() {
    return this.getStringAttribute('link_addr1');
  }
  public set linkAddr1(value: string) {
    this._linkAddr1 = value;
  }
  public resetLinkAddr1() {
    this._linkAddr1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkAddr1Input() {
    return this._linkAddr1;
  }

  // link_addr2 - computed: false, optional: true, required: false
  private _linkAddr2?: string; 
  public get linkAddr2() {
    return this.getStringAttribute('link_addr2');
  }
  public set linkAddr2(value: string) {
    this._linkAddr2 = value;
  }
  public resetLinkAddr2() {
    this._linkAddr2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkAddr2Input() {
    return this._linkAddr2;
  }

  // link_state - computed: false, optional: true, required: false
  private _linkState?: string; 
  public get linkState() {
    return this.getStringAttribute('link_state');
  }
  public set linkState(value: string) {
    this._linkState = value;
  }
  public resetLinkState() {
    this._linkState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateInput() {
    return this._linkState;
  }

  // link_type - computed: false, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
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

  // uptime - computed: false, optional: true, required: false
  private _uptime?: string; 
  public get uptime() {
    return this.getStringAttribute('uptime');
  }
  public set uptime(value: string) {
    this._uptime = value;
  }
  public resetUptime() {
    this._uptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeInput() {
    return this._uptime;
  }
}

export class DataIntersightNiatelemetryNiaInventoryFabricLogicalLinksList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryFabricLogicalLinks[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricLogicalLinksOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricLogicalLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * Returns the id of network/vrf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#id DataIntersightNiatelemetryNiaInventoryFabric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Returns the name of network/vrf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#name DataIntersightNiatelemetryNiaInventoryFabric#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns the deployment status of network/vrf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#status DataIntersightNiatelemetryNiaInventoryFabric#status}
  */
  readonly status?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatus | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatus | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._status = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._objectType = value.objectType;
      this._status = value.status;
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

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatus[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#moid DataIntersightNiatelemetryNiaInventoryFabric#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#selector DataIntersightNiatelemetryNiaInventoryFabric#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricParentToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricParentOutputReference | DataIntersightNiatelemetryNiaInventoryFabricParent): any {
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


export function dataIntersightNiatelemetryNiaInventoryFabricParentToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricParentOutputReference | DataIntersightNiatelemetryNiaInventoryFabricParent): any {
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

export class DataIntersightNiatelemetryNiaInventoryFabricParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricParent | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricParent | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryFabricPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#moid DataIntersightNiatelemetryNiaInventoryFabric#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#selector DataIntersightNiatelemetryNiaInventoryFabric#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricPermissionResources | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricPermissionResources | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricPermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricPermissionResources | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryFabricPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#moid DataIntersightNiatelemetryNiaInventoryFabric#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#selector DataIntersightNiatelemetryNiaInventoryFabric#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricRegisteredDeviceToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricRegisteredDeviceOutputReference | DataIntersightNiatelemetryNiaInventoryFabricRegisteredDevice): any {
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


export function dataIntersightNiatelemetryNiaInventoryFabricRegisteredDeviceToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricRegisteredDeviceOutputReference | DataIntersightNiatelemetryNiaInventoryFabricRegisteredDevice): any {
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

export class DataIntersightNiatelemetryNiaInventoryFabricRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricRegisteredDevice | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricRegisteredDevice | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#moid DataIntersightNiatelemetryNiaInventoryFabric#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#selector DataIntersightNiatelemetryNiaInventoryFabric#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#moid DataIntersightNiatelemetryNiaInventoryFabric#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#selector DataIntersightNiatelemetryNiaInventoryFabric#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricTagsDefinitionToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricTagsDefinitionOutputReference | DataIntersightNiatelemetryNiaInventoryFabricTagsDefinition): any {
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


export function dataIntersightNiatelemetryNiaInventoryFabricTagsDefinitionToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricTagsDefinitionOutputReference | DataIntersightNiatelemetryNiaInventoryFabricTagsDefinition): any {
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

export class DataIntersightNiatelemetryNiaInventoryFabricTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricTagsDefinition | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricTagsDefinition | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryFabricTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#key DataIntersightNiatelemetryNiaInventoryFabric#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#propagated DataIntersightNiatelemetryNiaInventoryFabric#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the tag is user-defined or owned by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#sys_tag DataIntersightNiatelemetryNiaInventoryFabric#sys_tag}
  */
  readonly sysTag?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#type DataIntersightNiatelemetryNiaInventoryFabric#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#value DataIntersightNiatelemetryNiaInventoryFabric#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#ancestor_definitions DataIntersightNiatelemetryNiaInventoryFabric#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#definition DataIntersightNiatelemetryNiaInventoryFabric#definition}
  */
  readonly definition?: DataIntersightNiatelemetryNiaInventoryFabricTagsDefinition;
}

export function dataIntersightNiatelemetryNiaInventoryFabricTagsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    sys_tag: cdktf.booleanToTerraform(struct!.sysTag),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightNiatelemetryNiaInventoryFabricTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricTagsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricTags | cdktf.IResolvable): any {
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
    sys_tag: {
      value: cdktf.booleanToHclTerraform(struct!.sysTag),
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
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightNiatelemetryNiaInventoryFabricTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryFabricTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricTags | cdktf.IResolvable | undefined {
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
    if (this._sysTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysTag = this._sysTag;
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._sysTag = undefined;
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
      this._sysTag = value.sysTag;
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

  // sys_tag - computed: false, optional: true, required: false
  private _sysTag?: boolean | cdktf.IResolvable; 
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }
  public set sysTag(value: boolean | cdktf.IResolvable) {
    this._sysTag = value;
  }
  public resetSysTag() {
    this._sysTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysTagInput() {
    return this._sysTag;
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
  private _ancestorDefinitions = new DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightNiatelemetryNiaInventoryFabricTagsAncestorDefinitions[] | cdktf.IResolvable) {
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
  private _definition = new DataIntersightNiatelemetryNiaInventoryFabricTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightNiatelemetryNiaInventoryFabricTagsDefinition) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryFabricTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricTagsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#moid DataIntersightNiatelemetryNiaInventoryFabric#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#selector DataIntersightNiatelemetryNiaInventoryFabric#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function dataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

export class DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#moid DataIntersightNiatelemetryNiaInventoryFabric#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#selector DataIntersightNiatelemetryNiaInventoryFabric#selector}
  */
  readonly selector?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMoToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMoOutputReference | DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMo): any {
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


export function dataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMoToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMoOutputReference | DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMo): any {
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

export class DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMo | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMo | undefined) {
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
export interface DataIntersightNiatelemetryNiaInventoryFabricVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#marked_for_deletion DataIntersightNiatelemetryNiaInventoryFabric#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#nr_version DataIntersightNiatelemetryNiaInventoryFabric#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#timestamp DataIntersightNiatelemetryNiaInventoryFabric#timestamp}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#version_type DataIntersightNiatelemetryNiaInventoryFabric#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#interested_mos DataIntersightNiatelemetryNiaInventoryFabric#interested_mos}
  */
  readonly interestedMos?: DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#ref_mo DataIntersightNiatelemetryNiaInventoryFabric#ref_mo}
  */
  readonly refMo?: DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMo;
}

export function dataIntersightNiatelemetryNiaInventoryFabricVersionContextToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVersionContextOutputReference | DataIntersightNiatelemetryNiaInventoryFabricVersionContext): any {
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
    interested_mos: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricVersionContextToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVersionContextOutputReference | DataIntersightNiatelemetryNiaInventoryFabricVersionContext): any {
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
      value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryFabricVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricVersionContext | undefined {
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

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightNiatelemetryNiaInventoryFabricVersionContextInterestedMos[] | cdktf.IResolvable) {
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
  private _refMo = new DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightNiatelemetryNiaInventoryFabricVersionContextRefMo) {
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
export interface DataIntersightNiatelemetryNiaInventoryFabricVpcDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * Returns boolean if VPC is configured on switch or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#is_vpc_configured DataIntersightNiatelemetryNiaInventoryFabric#is_vpc_configured}
  */
  readonly isVpcConfigured?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns peer switch id if VPC configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#peer_switch_db_id DataIntersightNiatelemetryNiaInventoryFabric#peer_switch_db_id}
  */
  readonly peerSwitchDbId?: number;
  /**
  * Returns the switch id of the switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#switch_db_id DataIntersightNiatelemetryNiaInventoryFabric#switch_db_id}
  */
  readonly switchDbId?: number;
}

export function dataIntersightNiatelemetryNiaInventoryFabricVpcDetailsToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVpcDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    is_vpc_configured: cdktf.booleanToTerraform(struct!.isVpcConfigured),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    peer_switch_db_id: cdktf.numberToTerraform(struct!.peerSwitchDbId),
    switch_db_id: cdktf.numberToTerraform(struct!.switchDbId),
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricVpcDetailsToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVpcDetails | cdktf.IResolvable): any {
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
    is_vpc_configured: {
      value: cdktf.booleanToHclTerraform(struct!.isVpcConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_switch_db_id: {
      value: cdktf.numberToHclTerraform(struct!.peerSwitchDbId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_db_id: {
      value: cdktf.numberToHclTerraform(struct!.switchDbId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryFabricVpcDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricVpcDetails | cdktf.IResolvable | undefined {
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
    if (this._isVpcConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVpcConfigured = this._isVpcConfigured;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._peerSwitchDbId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSwitchDbId = this._peerSwitchDbId;
    }
    if (this._switchDbId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchDbId = this._switchDbId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricVpcDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._isVpcConfigured = undefined;
      this._objectType = undefined;
      this._peerSwitchDbId = undefined;
      this._switchDbId = undefined;
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
      this._isVpcConfigured = value.isVpcConfigured;
      this._objectType = value.objectType;
      this._peerSwitchDbId = value.peerSwitchDbId;
      this._switchDbId = value.switchDbId;
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

  // is_vpc_configured - computed: false, optional: true, required: false
  private _isVpcConfigured?: boolean | cdktf.IResolvable; 
  public get isVpcConfigured() {
    return this.getBooleanAttribute('is_vpc_configured');
  }
  public set isVpcConfigured(value: boolean | cdktf.IResolvable) {
    this._isVpcConfigured = value;
  }
  public resetIsVpcConfigured() {
    this._isVpcConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVpcConfiguredInput() {
    return this._isVpcConfigured;
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

  // peer_switch_db_id - computed: false, optional: true, required: false
  private _peerSwitchDbId?: number; 
  public get peerSwitchDbId() {
    return this.getNumberAttribute('peer_switch_db_id');
  }
  public set peerSwitchDbId(value: number) {
    this._peerSwitchDbId = value;
  }
  public resetPeerSwitchDbId() {
    this._peerSwitchDbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSwitchDbIdInput() {
    return this._peerSwitchDbId;
  }

  // switch_db_id - computed: false, optional: true, required: false
  private _switchDbId?: number; 
  public get switchDbId() {
    return this.getNumberAttribute('switch_db_id');
  }
  public set switchDbId(value: number) {
    this._switchDbId = value;
  }
  public resetSwitchDbId() {
    this._switchDbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchDbIdInput() {
    return this._switchDbId;
  }
}

export class DataIntersightNiatelemetryNiaInventoryFabricVpcDetailsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryFabricVpcDetails[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricVpcDetailsOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricVpcDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#additional_properties DataIntersightNiatelemetryNiaInventoryFabric#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#class_id DataIntersightNiatelemetryNiaInventoryFabric#class_id}
  */
  readonly classId?: string;
  /**
  * Returns the id of network/vrf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#id DataIntersightNiatelemetryNiaInventoryFabric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Returns the name of network/vrf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#name DataIntersightNiatelemetryNiaInventoryFabric#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#object_type DataIntersightNiatelemetryNiaInventoryFabric#object_type}
  */
  readonly objectType?: string;
  /**
  * Returns the deployment status of network/vrf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#status DataIntersightNiatelemetryNiaInventoryFabric#status}
  */
  readonly status?: string;
}

export function dataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusToTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusToHclTerraform(struct?: DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatus | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatus | cdktf.IResolvable | undefined {
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
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._id = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._status = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._objectType = value.objectType;
      this._status = value.status;
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

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusList extends cdktf.ComplexList {
  public internalValue? : DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatus[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusOutputReference {
    return new DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric intersight_niatelemetry_nia_inventory_fabric}
*/
export class DataIntersightNiatelemetryNiaInventoryFabric extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_niatelemetry_nia_inventory_fabric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightNiatelemetryNiaInventoryFabric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightNiatelemetryNiaInventoryFabric to import
  * @param importFromId The id of the existing DataIntersightNiatelemetryNiaInventoryFabric that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightNiatelemetryNiaInventoryFabric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_niatelemetry_nia_inventory_fabric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/niatelemetry_nia_inventory_fabric intersight_niatelemetry_nia_inventory_fabric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightNiatelemetryNiaInventoryFabricConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightNiatelemetryNiaInventoryFabricConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_niatelemetry_nia_inventory_fabric',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.73',
        providerVersionConstraint: '1.0.73'
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
    this._anycastGwMac = config.anycastGwMac;
    this._bgpEstablishedInterfaceCount = config.bgpEstablishedInterfaceCount;
    this._bgwCount = config.bgwCount;
    this._bgwInterfaceUpCount = config.bgwInterfaceUpCount;
    this._borderGatewaySpineCount = config.borderGatewaySpineCount;
    this._borderLeafCount = config.borderLeafCount;
    this._classId = config.classId;
    this._cloudsecAutoconfig = config.cloudsecAutoconfig;
    this._createTime = config.createTime;
    this._dciSubnetRange = config.dciSubnetRange;
    this._dciSubnetTargetMask = config.dciSubnetTargetMask;
    this._dcnmtrackerEnabled = config.dcnmtrackerEnabled;
    this._domainGroupMoid = config.domainGroupMoid;
    this._ebgpEvpnLinkUpCount = config.ebgpEvpnLinkUpCount;
    this._fabricId = config.fabricId;
    this._fabricName = config.fabricName;
    this._fabricParent = config.fabricParent;
    this._fabricTechnology = config.fabricTechnology;
    this._fabricType = config.fabricType;
    this._featurePtp = config.featurePtp;
    this._id = config.id;
    this._isBgwPresent = config.isBgwPresent;
    this._isEnableNxapiHttp = config.isEnableNxapiHttp;
    this._isEnableRealTimeBackup = config.isEnableRealTimeBackup;
    this._isNgoamEnabled = config.isNgoamEnabled;
    this._isScheduledBackUpEnabled = config.isScheduledBackUpEnabled;
    this._isTrmEnabled = config.isTrmEnabled;
    this._leafCount = config.leafCount;
    this._linkStateRouting = config.linkStateRouting;
    this._linkType = config.linkType;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._networkDeploymentCount = config.networkDeploymentCount;
    this._ntpServerIpList = config.ntpServerIpList;
    this._nxosVniBwSitesCount = config.nxosVniBwSitesCount;
    this._nxosVrfBwSitesCount = config.nxosVrfBwSitesCount;
    this._nxosVrfCount = config.nxosVrfCount;
    this._objectType = config.objectType;
    this._operStatus = config.operStatus;
    this._owners = config.owners;
    this._recordType = config.recordType;
    this._recordVersion = config.recordVersion;
    this._replicationMode = config.replicationMode;
    this._rpMode = config.rpMode;
    this._serial = config.serial;
    this._sharedScope = config.sharedScope;
    this._siteName = config.siteName;
    this._softwareImage = config.softwareImage;
    this._spineCount = config.spineCount;
    this._syslogServerIpList = config.syslogServerIpList;
    this._syslogSev = config.syslogSev;
    this._templateName = config.templateName;
    this._vlanVniMappings = config.vlanVniMappings;
    this._vniIpCount = config.vniIpCount;
    this._vrfDeploymentCount = config.vrfDeploymentCount;
    this._xsiteNetworkCount = config.xsiteNetworkCount;
    this._xsiteVrfCount = config.xsiteVrfCount;
    this._ancestors.internalValue = config.ancestors;
    this._logicalLinks.internalValue = config.logicalLinks;
    this._networkDeploymentStatus.internalValue = config.networkDeploymentStatus;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
    this._vpcDetails.internalValue = config.vpcDetails;
    this._vrfDeploymentStatus.internalValue = config.vrfDeploymentStatus;
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

  // anycast_gw_mac - computed: false, optional: true, required: false
  private _anycastGwMac?: string; 
  public get anycastGwMac() {
    return this.getStringAttribute('anycast_gw_mac');
  }
  public set anycastGwMac(value: string) {
    this._anycastGwMac = value;
  }
  public resetAnycastGwMac() {
    this._anycastGwMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastGwMacInput() {
    return this._anycastGwMac;
  }

  // bgp_established_interface_count - computed: false, optional: true, required: false
  private _bgpEstablishedInterfaceCount?: number; 
  public get bgpEstablishedInterfaceCount() {
    return this.getNumberAttribute('bgp_established_interface_count');
  }
  public set bgpEstablishedInterfaceCount(value: number) {
    this._bgpEstablishedInterfaceCount = value;
  }
  public resetBgpEstablishedInterfaceCount() {
    this._bgpEstablishedInterfaceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpEstablishedInterfaceCountInput() {
    return this._bgpEstablishedInterfaceCount;
  }

  // bgw_count - computed: false, optional: true, required: false
  private _bgwCount?: number; 
  public get bgwCount() {
    return this.getNumberAttribute('bgw_count');
  }
  public set bgwCount(value: number) {
    this._bgwCount = value;
  }
  public resetBgwCount() {
    this._bgwCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwCountInput() {
    return this._bgwCount;
  }

  // bgw_interface_up_count - computed: false, optional: true, required: false
  private _bgwInterfaceUpCount?: number; 
  public get bgwInterfaceUpCount() {
    return this.getNumberAttribute('bgw_interface_up_count');
  }
  public set bgwInterfaceUpCount(value: number) {
    this._bgwInterfaceUpCount = value;
  }
  public resetBgwInterfaceUpCount() {
    this._bgwInterfaceUpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwInterfaceUpCountInput() {
    return this._bgwInterfaceUpCount;
  }

  // border_gateway_spine_count - computed: false, optional: true, required: false
  private _borderGatewaySpineCount?: number; 
  public get borderGatewaySpineCount() {
    return this.getNumberAttribute('border_gateway_spine_count');
  }
  public set borderGatewaySpineCount(value: number) {
    this._borderGatewaySpineCount = value;
  }
  public resetBorderGatewaySpineCount() {
    this._borderGatewaySpineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderGatewaySpineCountInput() {
    return this._borderGatewaySpineCount;
  }

  // border_leaf_count - computed: false, optional: true, required: false
  private _borderLeafCount?: number; 
  public get borderLeafCount() {
    return this.getNumberAttribute('border_leaf_count');
  }
  public set borderLeafCount(value: number) {
    this._borderLeafCount = value;
  }
  public resetBorderLeafCount() {
    this._borderLeafCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderLeafCountInput() {
    return this._borderLeafCount;
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

  // cloudsec_autoconfig - computed: false, optional: true, required: false
  private _cloudsecAutoconfig?: boolean | cdktf.IResolvable; 
  public get cloudsecAutoconfig() {
    return this.getBooleanAttribute('cloudsec_autoconfig');
  }
  public set cloudsecAutoconfig(value: boolean | cdktf.IResolvable) {
    this._cloudsecAutoconfig = value;
  }
  public resetCloudsecAutoconfig() {
    this._cloudsecAutoconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudsecAutoconfigInput() {
    return this._cloudsecAutoconfig;
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

  // dci_subnet_range - computed: false, optional: true, required: false
  private _dciSubnetRange?: string; 
  public get dciSubnetRange() {
    return this.getStringAttribute('dci_subnet_range');
  }
  public set dciSubnetRange(value: string) {
    this._dciSubnetRange = value;
  }
  public resetDciSubnetRange() {
    this._dciSubnetRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciSubnetRangeInput() {
    return this._dciSubnetRange;
  }

  // dci_subnet_target_mask - computed: false, optional: true, required: false
  private _dciSubnetTargetMask?: string; 
  public get dciSubnetTargetMask() {
    return this.getStringAttribute('dci_subnet_target_mask');
  }
  public set dciSubnetTargetMask(value: string) {
    this._dciSubnetTargetMask = value;
  }
  public resetDciSubnetTargetMask() {
    this._dciSubnetTargetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dciSubnetTargetMaskInput() {
    return this._dciSubnetTargetMask;
  }

  // dcnmtracker_enabled - computed: false, optional: true, required: false
  private _dcnmtrackerEnabled?: boolean | cdktf.IResolvable; 
  public get dcnmtrackerEnabled() {
    return this.getBooleanAttribute('dcnmtracker_enabled');
  }
  public set dcnmtrackerEnabled(value: boolean | cdktf.IResolvable) {
    this._dcnmtrackerEnabled = value;
  }
  public resetDcnmtrackerEnabled() {
    this._dcnmtrackerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcnmtrackerEnabledInput() {
    return this._dcnmtrackerEnabled;
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

  // ebgp_evpn_link_up_count - computed: false, optional: true, required: false
  private _ebgpEvpnLinkUpCount?: number; 
  public get ebgpEvpnLinkUpCount() {
    return this.getNumberAttribute('ebgp_evpn_link_up_count');
  }
  public set ebgpEvpnLinkUpCount(value: number) {
    this._ebgpEvpnLinkUpCount = value;
  }
  public resetEbgpEvpnLinkUpCount() {
    this._ebgpEvpnLinkUpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpEvpnLinkUpCountInput() {
    return this._ebgpEvpnLinkUpCount;
  }

  // fabric_id - computed: false, optional: true, required: false
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  public resetFabricId() {
    this._fabricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
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

  // fabric_parent - computed: false, optional: true, required: false
  private _fabricParent?: string; 
  public get fabricParent() {
    return this.getStringAttribute('fabric_parent');
  }
  public set fabricParent(value: string) {
    this._fabricParent = value;
  }
  public resetFabricParent() {
    this._fabricParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricParentInput() {
    return this._fabricParent;
  }

  // fabric_technology - computed: false, optional: true, required: false
  private _fabricTechnology?: string; 
  public get fabricTechnology() {
    return this.getStringAttribute('fabric_technology');
  }
  public set fabricTechnology(value: string) {
    this._fabricTechnology = value;
  }
  public resetFabricTechnology() {
    this._fabricTechnology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricTechnologyInput() {
    return this._fabricTechnology;
  }

  // fabric_type - computed: false, optional: true, required: false
  private _fabricType?: string; 
  public get fabricType() {
    return this.getStringAttribute('fabric_type');
  }
  public set fabricType(value: string) {
    this._fabricType = value;
  }
  public resetFabricType() {
    this._fabricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricTypeInput() {
    return this._fabricType;
  }

  // feature_ptp - computed: false, optional: true, required: false
  private _featurePtp?: string; 
  public get featurePtp() {
    return this.getStringAttribute('feature_ptp');
  }
  public set featurePtp(value: string) {
    this._featurePtp = value;
  }
  public resetFeaturePtp() {
    this._featurePtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePtpInput() {
    return this._featurePtp;
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

  // is_bgw_present - computed: false, optional: true, required: false
  private _isBgwPresent?: boolean | cdktf.IResolvable; 
  public get isBgwPresent() {
    return this.getBooleanAttribute('is_bgw_present');
  }
  public set isBgwPresent(value: boolean | cdktf.IResolvable) {
    this._isBgwPresent = value;
  }
  public resetIsBgwPresent() {
    this._isBgwPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBgwPresentInput() {
    return this._isBgwPresent;
  }

  // is_enable_nxapi_http - computed: false, optional: true, required: false
  private _isEnableNxapiHttp?: boolean | cdktf.IResolvable; 
  public get isEnableNxapiHttp() {
    return this.getBooleanAttribute('is_enable_nxapi_http');
  }
  public set isEnableNxapiHttp(value: boolean | cdktf.IResolvable) {
    this._isEnableNxapiHttp = value;
  }
  public resetIsEnableNxapiHttp() {
    this._isEnableNxapiHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnableNxapiHttpInput() {
    return this._isEnableNxapiHttp;
  }

  // is_enable_real_time_backup - computed: false, optional: true, required: false
  private _isEnableRealTimeBackup?: boolean | cdktf.IResolvable; 
  public get isEnableRealTimeBackup() {
    return this.getBooleanAttribute('is_enable_real_time_backup');
  }
  public set isEnableRealTimeBackup(value: boolean | cdktf.IResolvable) {
    this._isEnableRealTimeBackup = value;
  }
  public resetIsEnableRealTimeBackup() {
    this._isEnableRealTimeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnableRealTimeBackupInput() {
    return this._isEnableRealTimeBackup;
  }

  // is_ngoam_enabled - computed: false, optional: true, required: false
  private _isNgoamEnabled?: boolean | cdktf.IResolvable; 
  public get isNgoamEnabled() {
    return this.getBooleanAttribute('is_ngoam_enabled');
  }
  public set isNgoamEnabled(value: boolean | cdktf.IResolvable) {
    this._isNgoamEnabled = value;
  }
  public resetIsNgoamEnabled() {
    this._isNgoamEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNgoamEnabledInput() {
    return this._isNgoamEnabled;
  }

  // is_scheduled_back_up_enabled - computed: false, optional: true, required: false
  private _isScheduledBackUpEnabled?: boolean | cdktf.IResolvable; 
  public get isScheduledBackUpEnabled() {
    return this.getBooleanAttribute('is_scheduled_back_up_enabled');
  }
  public set isScheduledBackUpEnabled(value: boolean | cdktf.IResolvable) {
    this._isScheduledBackUpEnabled = value;
  }
  public resetIsScheduledBackUpEnabled() {
    this._isScheduledBackUpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScheduledBackUpEnabledInput() {
    return this._isScheduledBackUpEnabled;
  }

  // is_trm_enabled - computed: false, optional: true, required: false
  private _isTrmEnabled?: boolean | cdktf.IResolvable; 
  public get isTrmEnabled() {
    return this.getBooleanAttribute('is_trm_enabled');
  }
  public set isTrmEnabled(value: boolean | cdktf.IResolvable) {
    this._isTrmEnabled = value;
  }
  public resetIsTrmEnabled() {
    this._isTrmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTrmEnabledInput() {
    return this._isTrmEnabled;
  }

  // leaf_count - computed: false, optional: true, required: false
  private _leafCount?: number; 
  public get leafCount() {
    return this.getNumberAttribute('leaf_count');
  }
  public set leafCount(value: number) {
    this._leafCount = value;
  }
  public resetLeafCount() {
    this._leafCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafCountInput() {
    return this._leafCount;
  }

  // link_state_routing - computed: false, optional: true, required: false
  private _linkStateRouting?: string; 
  public get linkStateRouting() {
    return this.getStringAttribute('link_state_routing');
  }
  public set linkStateRouting(value: string) {
    this._linkStateRouting = value;
  }
  public resetLinkStateRouting() {
    this._linkStateRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStateRoutingInput() {
    return this._linkStateRouting;
  }

  // link_type - computed: false, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
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

  // network_deployment_count - computed: false, optional: true, required: false
  private _networkDeploymentCount?: number; 
  public get networkDeploymentCount() {
    return this.getNumberAttribute('network_deployment_count');
  }
  public set networkDeploymentCount(value: number) {
    this._networkDeploymentCount = value;
  }
  public resetNetworkDeploymentCount() {
    this._networkDeploymentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeploymentCountInput() {
    return this._networkDeploymentCount;
  }

  // ntp_server_ip_list - computed: false, optional: true, required: false
  private _ntpServerIpList?: string; 
  public get ntpServerIpList() {
    return this.getStringAttribute('ntp_server_ip_list');
  }
  public set ntpServerIpList(value: string) {
    this._ntpServerIpList = value;
  }
  public resetNtpServerIpList() {
    this._ntpServerIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerIpListInput() {
    return this._ntpServerIpList;
  }

  // nxos_vni_bw_sites_count - computed: false, optional: true, required: false
  private _nxosVniBwSitesCount?: number; 
  public get nxosVniBwSitesCount() {
    return this.getNumberAttribute('nxos_vni_bw_sites_count');
  }
  public set nxosVniBwSitesCount(value: number) {
    this._nxosVniBwSitesCount = value;
  }
  public resetNxosVniBwSitesCount() {
    this._nxosVniBwSitesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosVniBwSitesCountInput() {
    return this._nxosVniBwSitesCount;
  }

  // nxos_vrf_bw_sites_count - computed: false, optional: true, required: false
  private _nxosVrfBwSitesCount?: number; 
  public get nxosVrfBwSitesCount() {
    return this.getNumberAttribute('nxos_vrf_bw_sites_count');
  }
  public set nxosVrfBwSitesCount(value: number) {
    this._nxosVrfBwSitesCount = value;
  }
  public resetNxosVrfBwSitesCount() {
    this._nxosVrfBwSitesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosVrfBwSitesCountInput() {
    return this._nxosVrfBwSitesCount;
  }

  // nxos_vrf_count - computed: false, optional: true, required: false
  private _nxosVrfCount?: number; 
  public get nxosVrfCount() {
    return this.getNumberAttribute('nxos_vrf_count');
  }
  public set nxosVrfCount(value: number) {
    this._nxosVrfCount = value;
  }
  public resetNxosVrfCount() {
    this._nxosVrfCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxosVrfCountInput() {
    return this._nxosVrfCount;
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

  // oper_status - computed: false, optional: true, required: false
  private _operStatus?: string; 
  public get operStatus() {
    return this.getStringAttribute('oper_status');
  }
  public set operStatus(value: string) {
    this._operStatus = value;
  }
  public resetOperStatus() {
    this._operStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus;
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

  // replication_mode - computed: false, optional: true, required: false
  private _replicationMode?: string; 
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }
  public set replicationMode(value: string) {
    this._replicationMode = value;
  }
  public resetReplicationMode() {
    this._replicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationModeInput() {
    return this._replicationMode;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightNiatelemetryNiaInventoryFabricResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // rp_mode - computed: false, optional: true, required: false
  private _rpMode?: string; 
  public get rpMode() {
    return this.getStringAttribute('rp_mode');
  }
  public set rpMode(value: string) {
    this._rpMode = value;
  }
  public resetRpMode() {
    this._rpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpModeInput() {
    return this._rpMode;
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

  // software_image - computed: false, optional: true, required: false
  private _softwareImage?: string; 
  public get softwareImage() {
    return this.getStringAttribute('software_image');
  }
  public set softwareImage(value: string) {
    this._softwareImage = value;
  }
  public resetSoftwareImage() {
    this._softwareImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareImageInput() {
    return this._softwareImage;
  }

  // spine_count - computed: false, optional: true, required: false
  private _spineCount?: number; 
  public get spineCount() {
    return this.getNumberAttribute('spine_count');
  }
  public set spineCount(value: number) {
    this._spineCount = value;
  }
  public resetSpineCount() {
    this._spineCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spineCountInput() {
    return this._spineCount;
  }

  // syslog_server_ip_list - computed: false, optional: true, required: false
  private _syslogServerIpList?: string; 
  public get syslogServerIpList() {
    return this.getStringAttribute('syslog_server_ip_list');
  }
  public set syslogServerIpList(value: string) {
    this._syslogServerIpList = value;
  }
  public resetSyslogServerIpList() {
    this._syslogServerIpList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerIpListInput() {
    return this._syslogServerIpList;
  }

  // syslog_sev - computed: false, optional: true, required: false
  private _syslogSev?: string; 
  public get syslogSev() {
    return this.getStringAttribute('syslog_sev');
  }
  public set syslogSev(value: string) {
    this._syslogSev = value;
  }
  public resetSyslogSev() {
    this._syslogSev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogSevInput() {
    return this._syslogSev;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // vlan_vni_mappings - computed: false, optional: true, required: false
  private _vlanVniMappings?: string; 
  public get vlanVniMappings() {
    return this.getStringAttribute('vlan_vni_mappings');
  }
  public set vlanVniMappings(value: string) {
    this._vlanVniMappings = value;
  }
  public resetVlanVniMappings() {
    this._vlanVniMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanVniMappingsInput() {
    return this._vlanVniMappings;
  }

  // vni_ip_count - computed: false, optional: true, required: false
  private _vniIpCount?: number; 
  public get vniIpCount() {
    return this.getNumberAttribute('vni_ip_count');
  }
  public set vniIpCount(value: number) {
    this._vniIpCount = value;
  }
  public resetVniIpCount() {
    this._vniIpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniIpCountInput() {
    return this._vniIpCount;
  }

  // vrf_deployment_count - computed: false, optional: true, required: false
  private _vrfDeploymentCount?: number; 
  public get vrfDeploymentCount() {
    return this.getNumberAttribute('vrf_deployment_count');
  }
  public set vrfDeploymentCount(value: number) {
    this._vrfDeploymentCount = value;
  }
  public resetVrfDeploymentCount() {
    this._vrfDeploymentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDeploymentCountInput() {
    return this._vrfDeploymentCount;
  }

  // xsite_network_count - computed: false, optional: true, required: false
  private _xsiteNetworkCount?: number; 
  public get xsiteNetworkCount() {
    return this.getNumberAttribute('xsite_network_count');
  }
  public set xsiteNetworkCount(value: number) {
    this._xsiteNetworkCount = value;
  }
  public resetXsiteNetworkCount() {
    this._xsiteNetworkCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsiteNetworkCountInput() {
    return this._xsiteNetworkCount;
  }

  // xsite_vrf_count - computed: false, optional: true, required: false
  private _xsiteVrfCount?: number; 
  public get xsiteVrfCount() {
    return this.getNumberAttribute('xsite_vrf_count');
  }
  public set xsiteVrfCount(value: number) {
    this._xsiteVrfCount = value;
  }
  public resetXsiteVrfCount() {
    this._xsiteVrfCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsiteVrfCountInput() {
    return this._xsiteVrfCount;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightNiatelemetryNiaInventoryFabricAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightNiatelemetryNiaInventoryFabricAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // logical_links - computed: false, optional: true, required: false
  private _logicalLinks = new DataIntersightNiatelemetryNiaInventoryFabricLogicalLinksList(this, "logical_links", false);
  public get logicalLinks() {
    return this._logicalLinks;
  }
  public putLogicalLinks(value: DataIntersightNiatelemetryNiaInventoryFabricLogicalLinks[] | cdktf.IResolvable) {
    this._logicalLinks.internalValue = value;
  }
  public resetLogicalLinks() {
    this._logicalLinks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalLinksInput() {
    return this._logicalLinks.internalValue;
  }

  // network_deployment_status - computed: false, optional: true, required: false
  private _networkDeploymentStatus = new DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusList(this, "network_deployment_status", false);
  public get networkDeploymentStatus() {
    return this._networkDeploymentStatus;
  }
  public putNetworkDeploymentStatus(value: DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatus[] | cdktf.IResolvable) {
    this._networkDeploymentStatus.internalValue = value;
  }
  public resetNetworkDeploymentStatus() {
    this._networkDeploymentStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeploymentStatusInput() {
    return this._networkDeploymentStatus.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightNiatelemetryNiaInventoryFabricParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightNiatelemetryNiaInventoryFabricParent) {
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
  private _permissionResources = new DataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightNiatelemetryNiaInventoryFabricPermissionResources[] | cdktf.IResolvable) {
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
  private _registeredDevice = new DataIntersightNiatelemetryNiaInventoryFabricRegisteredDeviceOutputReference(this, "registered_device");
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: DataIntersightNiatelemetryNiaInventoryFabricRegisteredDevice) {
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
  private _tags = new DataIntersightNiatelemetryNiaInventoryFabricTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightNiatelemetryNiaInventoryFabricTags[] | cdktf.IResolvable) {
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
  private _versionContext = new DataIntersightNiatelemetryNiaInventoryFabricVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightNiatelemetryNiaInventoryFabricVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // vpc_details - computed: false, optional: true, required: false
  private _vpcDetails = new DataIntersightNiatelemetryNiaInventoryFabricVpcDetailsList(this, "vpc_details", false);
  public get vpcDetails() {
    return this._vpcDetails;
  }
  public putVpcDetails(value: DataIntersightNiatelemetryNiaInventoryFabricVpcDetails[] | cdktf.IResolvable) {
    this._vpcDetails.internalValue = value;
  }
  public resetVpcDetails() {
    this._vpcDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcDetailsInput() {
    return this._vpcDetails.internalValue;
  }

  // vrf_deployment_status - computed: false, optional: true, required: false
  private _vrfDeploymentStatus = new DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusList(this, "vrf_deployment_status", false);
  public get vrfDeploymentStatus() {
    return this._vrfDeploymentStatus;
  }
  public putVrfDeploymentStatus(value: DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatus[] | cdktf.IResolvable) {
    this._vrfDeploymentStatus.internalValue = value;
  }
  public resetVrfDeploymentStatus() {
    this._vrfDeploymentStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDeploymentStatusInput() {
    return this._vrfDeploymentStatus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      anycast_gw_mac: cdktf.stringToTerraform(this._anycastGwMac),
      bgp_established_interface_count: cdktf.numberToTerraform(this._bgpEstablishedInterfaceCount),
      bgw_count: cdktf.numberToTerraform(this._bgwCount),
      bgw_interface_up_count: cdktf.numberToTerraform(this._bgwInterfaceUpCount),
      border_gateway_spine_count: cdktf.numberToTerraform(this._borderGatewaySpineCount),
      border_leaf_count: cdktf.numberToTerraform(this._borderLeafCount),
      class_id: cdktf.stringToTerraform(this._classId),
      cloudsec_autoconfig: cdktf.booleanToTerraform(this._cloudsecAutoconfig),
      create_time: cdktf.stringToTerraform(this._createTime),
      dci_subnet_range: cdktf.stringToTerraform(this._dciSubnetRange),
      dci_subnet_target_mask: cdktf.stringToTerraform(this._dciSubnetTargetMask),
      dcnmtracker_enabled: cdktf.booleanToTerraform(this._dcnmtrackerEnabled),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      ebgp_evpn_link_up_count: cdktf.numberToTerraform(this._ebgpEvpnLinkUpCount),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      fabric_parent: cdktf.stringToTerraform(this._fabricParent),
      fabric_technology: cdktf.stringToTerraform(this._fabricTechnology),
      fabric_type: cdktf.stringToTerraform(this._fabricType),
      feature_ptp: cdktf.stringToTerraform(this._featurePtp),
      id: cdktf.stringToTerraform(this._id),
      is_bgw_present: cdktf.booleanToTerraform(this._isBgwPresent),
      is_enable_nxapi_http: cdktf.booleanToTerraform(this._isEnableNxapiHttp),
      is_enable_real_time_backup: cdktf.booleanToTerraform(this._isEnableRealTimeBackup),
      is_ngoam_enabled: cdktf.booleanToTerraform(this._isNgoamEnabled),
      is_scheduled_back_up_enabled: cdktf.booleanToTerraform(this._isScheduledBackUpEnabled),
      is_trm_enabled: cdktf.booleanToTerraform(this._isTrmEnabled),
      leaf_count: cdktf.numberToTerraform(this._leafCount),
      link_state_routing: cdktf.stringToTerraform(this._linkStateRouting),
      link_type: cdktf.stringToTerraform(this._linkType),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      network_deployment_count: cdktf.numberToTerraform(this._networkDeploymentCount),
      ntp_server_ip_list: cdktf.stringToTerraform(this._ntpServerIpList),
      nxos_vni_bw_sites_count: cdktf.numberToTerraform(this._nxosVniBwSitesCount),
      nxos_vrf_bw_sites_count: cdktf.numberToTerraform(this._nxosVrfBwSitesCount),
      nxos_vrf_count: cdktf.numberToTerraform(this._nxosVrfCount),
      object_type: cdktf.stringToTerraform(this._objectType),
      oper_status: cdktf.stringToTerraform(this._operStatus),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      record_type: cdktf.stringToTerraform(this._recordType),
      record_version: cdktf.stringToTerraform(this._recordVersion),
      replication_mode: cdktf.stringToTerraform(this._replicationMode),
      rp_mode: cdktf.stringToTerraform(this._rpMode),
      serial: cdktf.stringToTerraform(this._serial),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      site_name: cdktf.stringToTerraform(this._siteName),
      software_image: cdktf.stringToTerraform(this._softwareImage),
      spine_count: cdktf.numberToTerraform(this._spineCount),
      syslog_server_ip_list: cdktf.stringToTerraform(this._syslogServerIpList),
      syslog_sev: cdktf.stringToTerraform(this._syslogSev),
      template_name: cdktf.stringToTerraform(this._templateName),
      vlan_vni_mappings: cdktf.stringToTerraform(this._vlanVniMappings),
      vni_ip_count: cdktf.numberToTerraform(this._vniIpCount),
      vrf_deployment_count: cdktf.numberToTerraform(this._vrfDeploymentCount),
      xsite_network_count: cdktf.numberToTerraform(this._xsiteNetworkCount),
      xsite_vrf_count: cdktf.numberToTerraform(this._xsiteVrfCount),
      ancestors: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryFabricAncestorsToTerraform, true)(this._ancestors.internalValue),
      logical_links: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryFabricLogicalLinksToTerraform, true)(this._logicalLinks.internalValue),
      network_deployment_status: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusToTerraform, true)(this._networkDeploymentStatus.internalValue),
      parent: dataIntersightNiatelemetryNiaInventoryFabricParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      registered_device: dataIntersightNiatelemetryNiaInventoryFabricRegisteredDeviceToTerraform(this._registeredDevice.internalValue),
      tags: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryFabricTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightNiatelemetryNiaInventoryFabricVersionContextToTerraform(this._versionContext.internalValue),
      vpc_details: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryFabricVpcDetailsToTerraform, true)(this._vpcDetails.internalValue),
      vrf_deployment_status: cdktf.listMapper(dataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusToTerraform, true)(this._vrfDeploymentStatus.internalValue),
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
      anycast_gw_mac: {
        value: cdktf.stringToHclTerraform(this._anycastGwMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_established_interface_count: {
        value: cdktf.numberToHclTerraform(this._bgpEstablishedInterfaceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgw_count: {
        value: cdktf.numberToHclTerraform(this._bgwCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgw_interface_up_count: {
        value: cdktf.numberToHclTerraform(this._bgwInterfaceUpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      border_gateway_spine_count: {
        value: cdktf.numberToHclTerraform(this._borderGatewaySpineCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      border_leaf_count: {
        value: cdktf.numberToHclTerraform(this._borderLeafCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudsec_autoconfig: {
        value: cdktf.booleanToHclTerraform(this._cloudsecAutoconfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_subnet_range: {
        value: cdktf.stringToHclTerraform(this._dciSubnetRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dci_subnet_target_mask: {
        value: cdktf.stringToHclTerraform(this._dciSubnetTargetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dcnmtracker_enabled: {
        value: cdktf.booleanToHclTerraform(this._dcnmtrackerEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebgp_evpn_link_up_count: {
        value: cdktf.numberToHclTerraform(this._ebgpEvpnLinkUpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
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
      fabric_parent: {
        value: cdktf.stringToHclTerraform(this._fabricParent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_technology: {
        value: cdktf.stringToHclTerraform(this._fabricTechnology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_type: {
        value: cdktf.stringToHclTerraform(this._fabricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_ptp: {
        value: cdktf.stringToHclTerraform(this._featurePtp),
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
      is_bgw_present: {
        value: cdktf.booleanToHclTerraform(this._isBgwPresent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enable_nxapi_http: {
        value: cdktf.booleanToHclTerraform(this._isEnableNxapiHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enable_real_time_backup: {
        value: cdktf.booleanToHclTerraform(this._isEnableRealTimeBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ngoam_enabled: {
        value: cdktf.booleanToHclTerraform(this._isNgoamEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_scheduled_back_up_enabled: {
        value: cdktf.booleanToHclTerraform(this._isScheduledBackUpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_trm_enabled: {
        value: cdktf.booleanToHclTerraform(this._isTrmEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      leaf_count: {
        value: cdktf.numberToHclTerraform(this._leafCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_state_routing: {
        value: cdktf.stringToHclTerraform(this._linkStateRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_type: {
        value: cdktf.stringToHclTerraform(this._linkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      network_deployment_count: {
        value: cdktf.numberToHclTerraform(this._networkDeploymentCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntp_server_ip_list: {
        value: cdktf.stringToHclTerraform(this._ntpServerIpList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nxos_vni_bw_sites_count: {
        value: cdktf.numberToHclTerraform(this._nxosVniBwSitesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxos_vrf_bw_sites_count: {
        value: cdktf.numberToHclTerraform(this._nxosVrfBwSitesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nxos_vrf_count: {
        value: cdktf.numberToHclTerraform(this._nxosVrfCount),
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
      oper_status: {
        value: cdktf.stringToHclTerraform(this._operStatus),
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
      replication_mode: {
        value: cdktf.stringToHclTerraform(this._replicationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_mode: {
        value: cdktf.stringToHclTerraform(this._rpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      software_image: {
        value: cdktf.stringToHclTerraform(this._softwareImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spine_count: {
        value: cdktf.numberToHclTerraform(this._spineCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syslog_server_ip_list: {
        value: cdktf.stringToHclTerraform(this._syslogServerIpList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_sev: {
        value: cdktf.stringToHclTerraform(this._syslogSev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_vni_mappings: {
        value: cdktf.stringToHclTerraform(this._vlanVniMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni_ip_count: {
        value: cdktf.numberToHclTerraform(this._vniIpCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_deployment_count: {
        value: cdktf.numberToHclTerraform(this._vrfDeploymentCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xsite_network_count: {
        value: cdktf.numberToHclTerraform(this._xsiteNetworkCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      xsite_vrf_count: {
        value: cdktf.numberToHclTerraform(this._xsiteVrfCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryFabricAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricAncestorsList",
      },
      logical_links: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryFabricLogicalLinksToHclTerraform, true)(this._logicalLinks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricLogicalLinksList",
      },
      network_deployment_status: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusToHclTerraform, true)(this._networkDeploymentStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricNetworkDeploymentStatusList",
      },
      parent: {
        value: dataIntersightNiatelemetryNiaInventoryFabricParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricPermissionResourcesList",
      },
      registered_device: {
        value: dataIntersightNiatelemetryNiaInventoryFabricRegisteredDeviceToHclTerraform(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricRegisteredDeviceList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryFabricTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricTagsList",
      },
      version_context: {
        value: dataIntersightNiatelemetryNiaInventoryFabricVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricVersionContextList",
      },
      vpc_details: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryFabricVpcDetailsToHclTerraform, true)(this._vpcDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricVpcDetailsList",
      },
      vrf_deployment_status: {
        value: cdktf.listMapperHcl(dataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusToHclTerraform, true)(this._vrfDeploymentStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightNiatelemetryNiaInventoryFabricVrfDeploymentStatusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
