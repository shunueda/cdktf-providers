// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * This parameter represents the name of a Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#account_name TransitGateway#account_name}
  */
  readonly accountName: string;
  /**
  * If false, reuse an idle address in Elastic IP pool for this gateway. Otherwise, allocate a new Elastic IP and use it for this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#allocate_new_eip TransitGateway#allocate_new_eip}
  */
  readonly allocateNewEip?: boolean | cdktf.IResolvable;
  /**
  * Approved learned CIDRs. Available as of provider version R2.21+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#approved_learned_cidrs TransitGateway#approved_learned_cidrs}
  */
  readonly approvedLearnedCidrs?: string[];
  /**
  * Availability domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#availability_domain TransitGateway#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * The name of the public IP address and its resource group in Azure to assign to this Transit Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#azure_eip_name_resource_group TransitGateway#azure_eip_name_resource_group}
  */
  readonly azureEipNameResourceGroup?: string;
  /**
  * BGP communities gateway accept configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#bgp_accept_communities TransitGateway#bgp_accept_communities}
  */
  readonly bgpAcceptCommunities?: boolean | cdktf.IResolvable;
  /**
  * Enable Equal Cost Multi Path (ECMP) routing for the next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#bgp_ecmp TransitGateway#bgp_ecmp}
  */
  readonly bgpEcmp?: boolean | cdktf.IResolvable;
  /**
  * BGP Hold Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#bgp_hold_time TransitGateway#bgp_hold_time}
  */
  readonly bgpHoldTime?: number;
  /**
  * Number of interfaces that will be created for BGP over LAN enabled Azure transit. Applies on HA Transit as well if enabled. Updatable as of provider version 3.0.3+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#bgp_lan_interfaces_count TransitGateway#bgp_lan_interfaces_count}
  */
  readonly bgpLanInterfacesCount?: number;
  /**
  * Intended CIDR list to be advertised to external bgp router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#bgp_manual_spoke_advertise_cidrs TransitGateway#bgp_manual_spoke_advertise_cidrs}
  */
  readonly bgpManualSpokeAdvertiseCidrs?: string;
  /**
  * BGP neighbor status polling time for BGP Transit Gateway. Unit is in seconds. Valid values are between 1 and 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#bgp_neighbor_status_polling_time TransitGateway#bgp_neighbor_status_polling_time}
  */
  readonly bgpNeighborStatusPollingTime?: number;
  /**
  * BGP route polling time. Unit is in seconds. Valid values are between 10 and 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#bgp_polling_time TransitGateway#bgp_polling_time}
  */
  readonly bgpPollingTime?: number;
  /**
  * BGP communities gateway send configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#bgp_send_communities TransitGateway#bgp_send_communities}
  */
  readonly bgpSendCommunities?: boolean | cdktf.IResolvable;
  /**
  * Type of cloud service provider, requires an integer value. Use 1 for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#cloud_type TransitGateway#cloud_type}
  */
  readonly cloudType: number;
  /**
  * Specify Connected Transit status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#connected_transit TransitGateway#connected_transit}
  */
  readonly connectedTransit?: boolean | cdktf.IResolvable;
  /**
  * Customer managed key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#customer_managed_keys TransitGateway#customer_managed_keys}
  */
  readonly customerManagedKeys?: string;
  /**
  * A list of comma separated CIDRs to be customized for the spoke VPC routes. When configured, it will replace all learned routes in VPC routing tables, including RFC1918 and non-RFC1918 CIDRs. It applies to all spoke gateways attached to this transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#customized_spoke_vpc_routes TransitGateway#customized_spoke_vpc_routes}
  */
  readonly customizedSpokeVpcRoutes?: string;
  /**
  * A list of CIDRs to be customized for the transit VPC routes. When configured, it will replace all learned routes in VPC routing tables, including RFC1918 and non-RFC1918 CIDRs.To be effective, `enable_advertise_transit_cidr` or firewall management access for a transit firenet gateway must be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#customized_transit_vpc_routes TransitGateway#customized_transit_vpc_routes}
  */
  readonly customizedTransitVpcRoutes?: string[];
  /**
  * If set true, the spot instance will be deleted on eviction. Otherwise, the instance will be deallocated on eviction. Only supports Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#delete_spot TransitGateway#delete_spot}
  */
  readonly deleteSpot?: boolean | cdktf.IResolvable;
  /**
  * Device ID for AEP EAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#device_id TransitGateway#device_id}
  */
  readonly deviceId?: string;
  /**
  * Required when allocate_new_eip is false. It uses specified EIP for this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#eip TransitGateway#eip}
  */
  readonly eip?: string;
  /**
  * Enables Active-Standby Mode, available only with HA enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_active_standby TransitGateway#enable_active_standby}
  */
  readonly enableActiveStandby?: boolean | cdktf.IResolvable;
  /**
  * Enables Preemptive Mode for Active-Standby, available only with Active-Standby enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_active_standby_preemptive TransitGateway#enable_active_standby_preemptive}
  */
  readonly enableActiveStandbyPreemptive?: boolean | cdktf.IResolvable;
  /**
  * Switch to Enable/Disable advertise transit VPC network CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_advertise_transit_cidr TransitGateway#enable_advertise_transit_cidr}
  */
  readonly enableAdvertiseTransitCidr?: boolean | cdktf.IResolvable;
  /**
  * Pre-allocate a network interface(eth4) for "BGP over LAN" functionality. Only valid for cloud_type = 4 (GCP) and 8 (Azure). Valid values: true or false. Default value: false. Available as of provider version R2.18+. Updatable as of provider version 3.0.3+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_bgp_over_lan TransitGateway#enable_bgp_over_lan}
  */
  readonly enableBgpOverLan?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable egress transit firenet interfaces or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_egress_transit_firenet TransitGateway#enable_egress_transit_firenet}
  */
  readonly enableEgressTransitFirenet?: boolean | cdktf.IResolvable;
  /**
  * Enable encrypt gateway EBS volume. Only supported for AWS and AWSGov providers. Valid values: true, false. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_encrypt_volume TransitGateway#enable_encrypt_volume}
  */
  readonly enableEncryptVolume?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable firenet interfaces or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_firenet TransitGateway#enable_firenet}
  */
  readonly enableFirenet?: boolean | cdktf.IResolvable;
  /**
  * Enable firenet interfaces with AWS Gateway Load Balancer. Only valid when `enable_firenet` or `enable_transit_firenet` are set to true and `cloud_type` = 1 (AWS). Currently AWS Gateway Load Balancer is only supported in AWS regions us-west-2 and us-east-1. Valid values: true or false. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_gateway_load_balancer TransitGateway#enable_gateway_load_balancer}
  */
  readonly enableGatewayLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to disable GRO/GSO or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_gro_gso TransitGateway#enable_gro_gso}
  */
  readonly enableGroGso?: boolean | cdktf.IResolvable;
  /**
  * Sign of readiness for TGW connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_hybrid_connection TransitGateway#enable_hybrid_connection}
  */
  readonly enableHybridConnection?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo frame support for transit gateway. Valid values: true or false. Default value: true for CSP transit gateways and false for edge transit gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_jumbo_frame TransitGateway#enable_jumbo_frame}
  */
  readonly enableJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable/disable encrypted transit approval for transit Gateway. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_learned_cidrs_approval TransitGateway#enable_learned_cidrs_approval}
  */
  readonly enableLearnedCidrsApproval?: boolean | cdktf.IResolvable;
  /**
  * Enable [monitor gateway subnets](https://docs.aviatrix.com/HowTos/gateway.html#monitor-gateway-subnet). Only valid for cloud_type = 1 (AWS) or 256 (AWSGov). Valid values: true, false. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_monitor_gateway_subnets TransitGateway#enable_monitor_gateway_subnets}
  */
  readonly enableMonitorGatewaySubnets?: boolean | cdktf.IResolvable;
  /**
  * Enable Multi-tier Transit mode on transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_multi_tier_transit TransitGateway#enable_multi_tier_transit}
  */
  readonly enableMultiTierTransit?: boolean | cdktf.IResolvable;
  /**
  * Enable preserve as_path when advertising manual summary cidrs on transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_preserve_as_path TransitGateway#enable_preserve_as_path}
  */
  readonly enablePreserveAsPath?: boolean | cdktf.IResolvable;
  /**
  * Enable private OOB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_private_oob TransitGateway#enable_private_oob}
  */
  readonly enablePrivateOob?: boolean | cdktf.IResolvable;
  /**
  * Enable S2C receive packet CPU re-balancing on transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_s2c_rx_balancing TransitGateway#enable_s2c_rx_balancing}
  */
  readonly enableS2CRxBalancing?: boolean | cdktf.IResolvable;
  /**
  * Enable segmentation to allow association of transit gateway to security domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_segmentation TransitGateway#enable_segmentation}
  */
  readonly enableSegmentation?: boolean | cdktf.IResolvable;
  /**
  * Enable spot instance. NOT supported for production deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_spot_instance TransitGateway#enable_spot_instance}
  */
  readonly enableSpotInstance?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable transit firenet interfaces or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_transit_firenet TransitGateway#enable_transit_firenet}
  */
  readonly enableTransitFirenet?: boolean | cdktf.IResolvable;
  /**
  * Enable summarize CIDR to TGW.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_transit_summarize_cidr_to_tgw TransitGateway#enable_transit_summarize_cidr_to_tgw}
  */
  readonly enableTransitSummarizeCidrToTgw?: boolean | cdktf.IResolvable;
  /**
  * Enable vpc_dns_server for Gateway. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#enable_vpc_dns_server TransitGateway#enable_vpc_dns_server}
  */
  readonly enableVpcDnsServer?: boolean | cdktf.IResolvable;
  /**
  * A list of comma separated CIDRs to be advertised to on-prem as 'Excluded CIDR List'. When configured, it inspects all the advertised CIDRs from its spoke gateways and remove those included in the 'Excluded CIDR List'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#excluded_advertised_spoke_routes TransitGateway#excluded_advertised_spoke_routes}
  */
  readonly excludedAdvertisedSpokeRoutes?: string;
  /**
  * Fault domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#fault_domain TransitGateway#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * A list of comma separated CIDRs to be filtered from the spoke VPC route table. When configured, filtering CIDR(s) or it’s subnet will be deleted from VPC routing tables as well as from spoke gateway’s routing table. It applies to all spoke gateways attached to this transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#filtered_spoke_vpc_routes TransitGateway#filtered_spoke_vpc_routes}
  */
  readonly filteredSpokeVpcRoutes?: string;
  /**
  * Name of the gateway which is going to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#gw_name TransitGateway#gw_name}
  */
  readonly gwName: string;
  /**
  * Size of the gateway instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#gw_size TransitGateway#gw_size}
  */
  readonly gwSize: string;
  /**
  * HA availability domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_availability_domain TransitGateway#ha_availability_domain}
  */
  readonly haAvailabilityDomain?: string;
  /**
  * The name of the public IP address and its resource group in Azure to assign to the HA Transit Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_azure_eip_name_resource_group TransitGateway#ha_azure_eip_name_resource_group}
  */
  readonly haAzureEipNameResourceGroup?: string;
  /**
  * Device ID for HA AEP EAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_device_id TransitGateway#ha_device_id}
  */
  readonly haDeviceId?: string;
  /**
  * Public IP address that you want assigned to the HA Transit Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_eip TransitGateway#ha_eip}
  */
  readonly haEip?: string;
  /**
  * HA fault domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_fault_domain TransitGateway#ha_fault_domain}
  */
  readonly haFaultDomain?: string;
  /**
  * HA Gateway Size. Mandatory if HA is enabled (ha_subnet is set).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_gw_size TransitGateway#ha_gw_size}
  */
  readonly haGwSize?: string;
  /**
  * ha_image_version can be used to set the desired image version of the HA gateway. If set, we will attempt to update the gateway to the specified version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_image_version TransitGateway#ha_image_version}
  */
  readonly haImageVersion?: string;
  /**
  * AZ of subnet being created for Insane Mode Transit HA Gateway. Required for AWS if insane_mode is enabled and ha_subnet is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_insane_mode_az TransitGateway#ha_insane_mode_az}
  */
  readonly haInsaneModeAz?: string;
  /**
  * Set of management egress gateway IP/prefix for HA EAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_management_egress_ip_prefix_list TransitGateway#ha_management_egress_ip_prefix_list}
  */
  readonly haManagementEgressIpPrefixList?: string[];
  /**
  * OOB HA availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_oob_availability_zone TransitGateway#ha_oob_availability_zone}
  */
  readonly haOobAvailabilityZone?: string;
  /**
  * OOB HA management subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_oob_management_subnet TransitGateway#ha_oob_management_subnet}
  */
  readonly haOobManagementSubnet?: string;
  /**
  *  Private Mode HA subnet availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_private_mode_subnet_zone TransitGateway#ha_private_mode_subnet_zone}
  */
  readonly haPrivateModeSubnetZone?: string;
  /**
  * ha_software_version can be used to set the desired software version of the HA gateway. If set, we will attempt to update the gateway to the specified version. If left blank, the gateway software version will continue to be managed through the aviatrix_controller_config resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_software_version TransitGateway#ha_software_version}
  */
  readonly haSoftwareVersion?: string;
  /**
  * HA Subnet. Required for enabling HA for AWS/AWSGov/AWSChina/Azure/OCI/Alibaba Cloud. Optional for enabling HA for GCP gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_subnet TransitGateway#ha_subnet}
  */
  readonly haSubnet?: string;
  /**
  * HA Zone. Required if enabling HA for GCP. Optional for Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_zone TransitGateway#ha_zone}
  */
  readonly haZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#id TransitGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * image_version can be used to set the desired image version of the gateway. If set, we will attempt to update the gateway to the specified version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#image_version TransitGateway#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Enable Insane Mode for Transit. Valid values: true, false. Supported for AWS/AWSGov, GCP, Azure and OCI. If insane mode is enabled, gateway size has to at least be c5 size for AWS and Standard_D3_v2 size for Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#insane_mode TransitGateway#insane_mode}
  */
  readonly insaneMode?: boolean | cdktf.IResolvable;
  /**
  * AZ of subnet being created for Insane Mode Transit Gateway. Required for AWS if insane_mode is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#insane_mode_az TransitGateway#insane_mode_az}
  */
  readonly insaneModeAz?: string;
  /**
  * LAN Private Subnet. Only used for GCP Transit FireNet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#lan_private_subnet TransitGateway#lan_private_subnet}
  */
  readonly lanPrivateSubnet?: string;
  /**
  * LAN VPC ID. Only used for GCP Transit FireNet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#lan_vpc_id TransitGateway#lan_vpc_id}
  */
  readonly lanVpcId?: string;
  /**
  * Set the learned CIDRs approval mode. Only valid when 'enable_learned_cidrs_approval' is set to true. If set to 'gateway', learned CIDR approval applies to ALL connections. If set to 'connection', learned CIDR approval is configured on a per connection basis. When configuring per connection, use the enable_learned_cidrs_approval attribute within the connection resource to toggle learned CIDR approval. Valid values: 'gateway' or 'connection'. Default value: 'gateway'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#learned_cidrs_approval_mode TransitGateway#learned_cidrs_approval_mode}
  */
  readonly learnedCidrsApprovalMode?: string;
  /**
  * Changes the Aviatrix Transit Gateway ASN number before you setup Aviatrix Transit Gateway connection configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#local_as_number TransitGateway#local_as_number}
  */
  readonly localAsNumber?: string;
  /**
  * Set of management egress gateway IP/prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#management_egress_ip_prefix_list TransitGateway#management_egress_ip_prefix_list}
  */
  readonly managementEgressIpPrefixList?: string[];
  /**
  * A set of monitored instance ids. Only valid when 'enable_monitor_gateway_subnets' = true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#monitor_exclude_list TransitGateway#monitor_exclude_list}
  */
  readonly monitorExcludeList?: string[];
  /**
  * OOB subnet availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#oob_availability_zone TransitGateway#oob_availability_zone}
  */
  readonly oobAvailabilityZone?: string;
  /**
  * OOB management subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#oob_management_subnet TransitGateway#oob_management_subnet}
  */
  readonly oobManagementSubnet?: string;
  /**
  * Peer backup logical interface name for the edge transit gateway (e.g., 'wan0', 'wan1').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#peer_backup_logical_ifname TransitGateway#peer_backup_logical_ifname}
  */
  readonly peerBackupLogicalIfname?: string[];
  /**
  * Connection type for the edge transit gateway (e.g., 'public', 'private').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#peer_connection_type TransitGateway#peer_connection_type}
  */
  readonly peerConnectionType?: string;
  /**
  * List of AS numbers to populate BGP AP_PATH field when it advertises to VGW or peer devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#prepend_as_path TransitGateway#prepend_as_path}
  */
  readonly prependAsPath?: string[];
  /**
  * Private Mode Controller load balancer VPC ID. Required when private mode is enabled for the Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#private_mode_lb_vpc_id TransitGateway#private_mode_lb_vpc_id}
  */
  readonly privateModeLbVpcId?: string;
  /**
  * Private Mode subnet availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#private_mode_subnet_zone TransitGateway#private_mode_subnet_zone}
  */
  readonly privateModeSubnetZone?: string;
  /**
  * Gateway ethernet interface RX queue size. Supported for AWS related clouds only. Applies on HA as well if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#rx_queue_size TransitGateway#rx_queue_size}
  */
  readonly rxQueueSize?: string;
  /**
  * Set to 'enabled' if this feature is desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#single_az_ha TransitGateway#single_az_ha}
  */
  readonly singleAzHa?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable Source NAT feature in 'single_ip' mode for this container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#single_ip_snat TransitGateway#single_ip_snat}
  */
  readonly singleIpSnat?: boolean | cdktf.IResolvable;
  /**
  * software_version can be used to set the desired software version of the gateway. If set, we will attempt to update the gateway to the specified version. If left blank, the gateway software version will continue to be managed through the aviatrix_controller_config resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#software_version TransitGateway#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Price for spot instance. NOT supported for production deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#spot_price TransitGateway#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Public Subnet Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#subnet TransitGateway#subnet}
  */
  readonly subnet?: string;
  /**
  * A map of tags to assign to the transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#tags TransitGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The IPSec tunnel down detection time for the transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#tunnel_detection_time TransitGateway#tunnel_detection_time}
  */
  readonly tunnelDetectionTime?: number;
  /**
  * VPC-ID/VNet-Name/Site-ID of cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#vpc_id TransitGateway#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Region of cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#vpc_reg TransitGateway#vpc_reg}
  */
  readonly vpcReg?: string;
  /**
  * Availability Zone. Only available for Azure (8), Azure GOV (32) and Azure CHINA (2048). Must be in the form 'az-n', for example, 'az-2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#zone TransitGateway#zone}
  */
  readonly zone?: string;
  /**
  * The location where the ZTP file will be stored locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ztp_file_download_path TransitGateway#ztp_file_download_path}
  */
  readonly ztpFileDownloadPath?: string;
  /**
  * ZTP file type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ztp_file_type TransitGateway#ztp_file_type}
  */
  readonly ztpFileType?: string;
  /**
  * bgp_lan_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#bgp_lan_interfaces TransitGateway#bgp_lan_interfaces}
  */
  readonly bgpLanInterfaces?: TransitGatewayBgpLanInterfaces[] | cdktf.IResolvable;
  /**
  * eip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#eip_map TransitGateway#eip_map}
  */
  readonly eipMap?: TransitGatewayEipMap[] | cdktf.IResolvable;
  /**
  * ha_bgp_lan_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_bgp_lan_interfaces TransitGateway#ha_bgp_lan_interfaces}
  */
  readonly haBgpLanInterfaces?: TransitGatewayHaBgpLanInterfaces[] | cdktf.IResolvable;
  /**
  * ha_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ha_interfaces TransitGateway#ha_interfaces}
  */
  readonly haInterfaces?: TransitGatewayHaInterfaces[] | cdktf.IResolvable;
  /**
  * interface_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#interface_mapping TransitGateway#interface_mapping}
  */
  readonly interfaceMapping?: TransitGatewayInterfaceMapping[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#interfaces TransitGateway#interfaces}
  */
  readonly interfaces?: TransitGatewayInterfaces[] | cdktf.IResolvable;
}
export interface TransitGatewayBgpLanInterfaces {
  /**
  * Subnet Info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#subnet TransitGateway#subnet}
  */
  readonly subnet: string;
  /**
  * VPC-ID of GCP cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#vpc_id TransitGateway#vpc_id}
  */
  readonly vpcId: string;
}

export function transitGatewayBgpLanInterfacesToTerraform(struct?: TransitGatewayBgpLanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: cdktf.stringToTerraform(struct!.subnet),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function transitGatewayBgpLanInterfacesToHclTerraform(struct?: TransitGatewayBgpLanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitGatewayBgpLanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitGatewayBgpLanInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitGatewayBgpLanInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnet = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnet = value.subnet;
      this._vpcId = value.vpcId;
    }
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class TransitGatewayBgpLanInterfacesList extends cdktf.ComplexList {
  public internalValue? : TransitGatewayBgpLanInterfaces[] | cdktf.IResolvable

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
  public get(index: number): TransitGatewayBgpLanInterfacesOutputReference {
    return new TransitGatewayBgpLanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitGatewayEipMap {
  /**
  * Logical interface name e.g., wan0, mgmt0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#logical_ifname TransitGateway#logical_ifname}
  */
  readonly logicalIfname: string;
  /**
  * The private IP address associated with the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#private_ip TransitGateway#private_ip}
  */
  readonly privateIp: string;
  /**
  * The public IP address associated with the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#public_ip TransitGateway#public_ip}
  */
  readonly publicIp: string;
}

export function transitGatewayEipMapToTerraform(struct?: TransitGatewayEipMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_ifname: cdktf.stringToTerraform(struct!.logicalIfname),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
  }
}


export function transitGatewayEipMapToHclTerraform(struct?: TransitGatewayEipMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_ifname: {
      value: cdktf.stringToHclTerraform(struct!.logicalIfname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitGatewayEipMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitGatewayEipMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalIfname !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalIfname = this._logicalIfname;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitGatewayEipMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logicalIfname = undefined;
      this._privateIp = undefined;
      this._publicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logicalIfname = value.logicalIfname;
      this._privateIp = value.privateIp;
      this._publicIp = value.publicIp;
    }
  }

  // logical_ifname - computed: false, optional: false, required: true
  private _logicalIfname?: string; 
  public get logicalIfname() {
    return this.getStringAttribute('logical_ifname');
  }
  public set logicalIfname(value: string) {
    this._logicalIfname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalIfnameInput() {
    return this._logicalIfname;
  }

  // private_ip - computed: false, optional: false, required: true
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }
}

export class TransitGatewayEipMapList extends cdktf.ComplexList {
  public internalValue? : TransitGatewayEipMap[] | cdktf.IResolvable

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
  public get(index: number): TransitGatewayEipMapOutputReference {
    return new TransitGatewayEipMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitGatewayHaBgpLanInterfaces {
  /**
  * Subnet Info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#subnet TransitGateway#subnet}
  */
  readonly subnet: string;
  /**
  * VPC-ID of GCP cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#vpc_id TransitGateway#vpc_id}
  */
  readonly vpcId: string;
}

export function transitGatewayHaBgpLanInterfacesToTerraform(struct?: TransitGatewayHaBgpLanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: cdktf.stringToTerraform(struct!.subnet),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function transitGatewayHaBgpLanInterfacesToHclTerraform(struct?: TransitGatewayHaBgpLanInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitGatewayHaBgpLanInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitGatewayHaBgpLanInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitGatewayHaBgpLanInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnet = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnet = value.subnet;
      this._vpcId = value.vpcId;
    }
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class TransitGatewayHaBgpLanInterfacesList extends cdktf.ComplexList {
  public internalValue? : TransitGatewayHaBgpLanInterfaces[] | cdktf.IResolvable

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
  public get(index: number): TransitGatewayHaBgpLanInterfacesOutputReference {
    return new TransitGatewayHaBgpLanInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitGatewayHaInterfaces {
  /**
  * Whether DHCP is enabled on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#dhcp TransitGateway#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * The gateway IP address associated with this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#gateway_ip TransitGateway#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * The static IP address assigned to this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ip_address TransitGateway#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Logical interface name e.g., wan0, mgmt0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#logical_ifname TransitGateway#logical_ifname}
  */
  readonly logicalIfname: string;
  /**
  * The public IP address associated with this interface (if applicable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#public_ip TransitGateway#public_ip}
  */
  readonly publicIp?: string;
  /**
  * A list of secondary private CIDR blocks associated with this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#secondary_private_cidr_list TransitGateway#secondary_private_cidr_list}
  */
  readonly secondaryPrivateCidrList?: string[];
}

export function transitGatewayHaInterfacesToTerraform(struct?: TransitGatewayHaInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    logical_ifname: cdktf.stringToTerraform(struct!.logicalIfname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    secondary_private_cidr_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondaryPrivateCidrList),
  }
}


export function transitGatewayHaInterfacesToHclTerraform(struct?: TransitGatewayHaInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_ifname: {
      value: cdktf.stringToHclTerraform(struct!.logicalIfname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_private_cidr_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondaryPrivateCidrList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitGatewayHaInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitGatewayHaInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._logicalIfname !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalIfname = this._logicalIfname;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._secondaryPrivateCidrList !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPrivateCidrList = this._secondaryPrivateCidrList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitGatewayHaInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._gatewayIp = undefined;
      this._ipAddress = undefined;
      this._logicalIfname = undefined;
      this._publicIp = undefined;
      this._secondaryPrivateCidrList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._gatewayIp = value.gatewayIp;
      this._ipAddress = value.ipAddress;
      this._logicalIfname = value.logicalIfname;
      this._publicIp = value.publicIp;
      this._secondaryPrivateCidrList = value.secondaryPrivateCidrList;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
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

  // logical_ifname - computed: false, optional: false, required: true
  private _logicalIfname?: string; 
  public get logicalIfname() {
    return this.getStringAttribute('logical_ifname');
  }
  public set logicalIfname(value: string) {
    this._logicalIfname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalIfnameInput() {
    return this._logicalIfname;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // secondary_private_cidr_list - computed: false, optional: true, required: false
  private _secondaryPrivateCidrList?: string[]; 
  public get secondaryPrivateCidrList() {
    return this.getListAttribute('secondary_private_cidr_list');
  }
  public set secondaryPrivateCidrList(value: string[]) {
    this._secondaryPrivateCidrList = value;
  }
  public resetSecondaryPrivateCidrList() {
    this._secondaryPrivateCidrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateCidrListInput() {
    return this._secondaryPrivateCidrList;
  }
}

export class TransitGatewayHaInterfacesList extends cdktf.ComplexList {
  public internalValue? : TransitGatewayHaInterfaces[] | cdktf.IResolvable

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
  public get(index: number): TransitGatewayHaInterfacesOutputReference {
    return new TransitGatewayHaInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitGatewayInterfaceMapping {
  /**
  * Interface index (e.g., 0, 1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#index TransitGateway#index}
  */
  readonly index: number;
  /**
  * Interface name (e.g., 'eth0', 'eth1').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#name TransitGateway#name}
  */
  readonly name: string;
  /**
  * Interface type (e.g., 'WAN', 'MANAGEMENT').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#type TransitGateway#type}
  */
  readonly type: string;
}

export function transitGatewayInterfaceMappingToTerraform(struct?: TransitGatewayInterfaceMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function transitGatewayInterfaceMappingToHclTerraform(struct?: TransitGatewayInterfaceMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
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

export class TransitGatewayInterfaceMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitGatewayInterfaceMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitGatewayInterfaceMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

export class TransitGatewayInterfaceMappingList extends cdktf.ComplexList {
  public internalValue? : TransitGatewayInterfaceMapping[] | cdktf.IResolvable

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
  public get(index: number): TransitGatewayInterfaceMappingOutputReference {
    return new TransitGatewayInterfaceMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransitGatewayInterfaces {
  /**
  * Whether DHCP is enabled on this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#dhcp TransitGateway#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * The gateway IP address associated with this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#gateway_ip TransitGateway#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * The static IP address assigned to this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#ip_address TransitGateway#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Logical interface name e.g., wan0, mgmt0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#logical_ifname TransitGateway#logical_ifname}
  */
  readonly logicalIfname: string;
  /**
  * The public IP address associated with this interface (if applicable).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#public_ip TransitGateway#public_ip}
  */
  readonly publicIp?: string;
  /**
  * A list of secondary private CIDR blocks associated with this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#secondary_private_cidr_list TransitGateway#secondary_private_cidr_list}
  */
  readonly secondaryPrivateCidrList?: string[];
}

export function transitGatewayInterfacesToTerraform(struct?: TransitGatewayInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    gateway_ip: cdktf.stringToTerraform(struct!.gatewayIp),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    logical_ifname: cdktf.stringToTerraform(struct!.logicalIfname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    secondary_private_cidr_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondaryPrivateCidrList),
  }
}


export function transitGatewayInterfacesToHclTerraform(struct?: TransitGatewayInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_ifname: {
      value: cdktf.stringToHclTerraform(struct!.logicalIfname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_private_cidr_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondaryPrivateCidrList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitGatewayInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransitGatewayInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._gatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIp = this._gatewayIp;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._logicalIfname !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalIfname = this._logicalIfname;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._secondaryPrivateCidrList !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPrivateCidrList = this._secondaryPrivateCidrList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitGatewayInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp = undefined;
      this._gatewayIp = undefined;
      this._ipAddress = undefined;
      this._logicalIfname = undefined;
      this._publicIp = undefined;
      this._secondaryPrivateCidrList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp = value.dhcp;
      this._gatewayIp = value.gatewayIp;
      this._ipAddress = value.ipAddress;
      this._logicalIfname = value.logicalIfname;
      this._publicIp = value.publicIp;
      this._secondaryPrivateCidrList = value.secondaryPrivateCidrList;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
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

  // logical_ifname - computed: false, optional: false, required: true
  private _logicalIfname?: string; 
  public get logicalIfname() {
    return this.getStringAttribute('logical_ifname');
  }
  public set logicalIfname(value: string) {
    this._logicalIfname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalIfnameInput() {
    return this._logicalIfname;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // secondary_private_cidr_list - computed: false, optional: true, required: false
  private _secondaryPrivateCidrList?: string[]; 
  public get secondaryPrivateCidrList() {
    return this.getListAttribute('secondary_private_cidr_list');
  }
  public set secondaryPrivateCidrList(value: string[]) {
    this._secondaryPrivateCidrList = value;
  }
  public resetSecondaryPrivateCidrList() {
    this._secondaryPrivateCidrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateCidrListInput() {
    return this._secondaryPrivateCidrList;
  }
}

export class TransitGatewayInterfacesList extends cdktf.ComplexList {
  public internalValue? : TransitGatewayInterfaces[] | cdktf.IResolvable

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
  public get(index: number): TransitGatewayInterfacesOutputReference {
    return new TransitGatewayInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway aviatrix_transit_gateway}
*/
export class TransitGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_transit_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitGateway to import
  * @param importFromId The id of the existing TransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_transit_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway aviatrix_transit_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: TransitGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_transit_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._allocateNewEip = config.allocateNewEip;
    this._approvedLearnedCidrs = config.approvedLearnedCidrs;
    this._availabilityDomain = config.availabilityDomain;
    this._azureEipNameResourceGroup = config.azureEipNameResourceGroup;
    this._bgpAcceptCommunities = config.bgpAcceptCommunities;
    this._bgpEcmp = config.bgpEcmp;
    this._bgpHoldTime = config.bgpHoldTime;
    this._bgpLanInterfacesCount = config.bgpLanInterfacesCount;
    this._bgpManualSpokeAdvertiseCidrs = config.bgpManualSpokeAdvertiseCidrs;
    this._bgpNeighborStatusPollingTime = config.bgpNeighborStatusPollingTime;
    this._bgpPollingTime = config.bgpPollingTime;
    this._bgpSendCommunities = config.bgpSendCommunities;
    this._cloudType = config.cloudType;
    this._connectedTransit = config.connectedTransit;
    this._customerManagedKeys = config.customerManagedKeys;
    this._customizedSpokeVpcRoutes = config.customizedSpokeVpcRoutes;
    this._customizedTransitVpcRoutes = config.customizedTransitVpcRoutes;
    this._deleteSpot = config.deleteSpot;
    this._deviceId = config.deviceId;
    this._eip = config.eip;
    this._enableActiveStandby = config.enableActiveStandby;
    this._enableActiveStandbyPreemptive = config.enableActiveStandbyPreemptive;
    this._enableAdvertiseTransitCidr = config.enableAdvertiseTransitCidr;
    this._enableBgpOverLan = config.enableBgpOverLan;
    this._enableEgressTransitFirenet = config.enableEgressTransitFirenet;
    this._enableEncryptVolume = config.enableEncryptVolume;
    this._enableFirenet = config.enableFirenet;
    this._enableGatewayLoadBalancer = config.enableGatewayLoadBalancer;
    this._enableGroGso = config.enableGroGso;
    this._enableHybridConnection = config.enableHybridConnection;
    this._enableJumboFrame = config.enableJumboFrame;
    this._enableLearnedCidrsApproval = config.enableLearnedCidrsApproval;
    this._enableMonitorGatewaySubnets = config.enableMonitorGatewaySubnets;
    this._enableMultiTierTransit = config.enableMultiTierTransit;
    this._enablePreserveAsPath = config.enablePreserveAsPath;
    this._enablePrivateOob = config.enablePrivateOob;
    this._enableS2CRxBalancing = config.enableS2CRxBalancing;
    this._enableSegmentation = config.enableSegmentation;
    this._enableSpotInstance = config.enableSpotInstance;
    this._enableTransitFirenet = config.enableTransitFirenet;
    this._enableTransitSummarizeCidrToTgw = config.enableTransitSummarizeCidrToTgw;
    this._enableVpcDnsServer = config.enableVpcDnsServer;
    this._excludedAdvertisedSpokeRoutes = config.excludedAdvertisedSpokeRoutes;
    this._faultDomain = config.faultDomain;
    this._filteredSpokeVpcRoutes = config.filteredSpokeVpcRoutes;
    this._gwName = config.gwName;
    this._gwSize = config.gwSize;
    this._haAvailabilityDomain = config.haAvailabilityDomain;
    this._haAzureEipNameResourceGroup = config.haAzureEipNameResourceGroup;
    this._haDeviceId = config.haDeviceId;
    this._haEip = config.haEip;
    this._haFaultDomain = config.haFaultDomain;
    this._haGwSize = config.haGwSize;
    this._haImageVersion = config.haImageVersion;
    this._haInsaneModeAz = config.haInsaneModeAz;
    this._haManagementEgressIpPrefixList = config.haManagementEgressIpPrefixList;
    this._haOobAvailabilityZone = config.haOobAvailabilityZone;
    this._haOobManagementSubnet = config.haOobManagementSubnet;
    this._haPrivateModeSubnetZone = config.haPrivateModeSubnetZone;
    this._haSoftwareVersion = config.haSoftwareVersion;
    this._haSubnet = config.haSubnet;
    this._haZone = config.haZone;
    this._id = config.id;
    this._imageVersion = config.imageVersion;
    this._insaneMode = config.insaneMode;
    this._insaneModeAz = config.insaneModeAz;
    this._lanPrivateSubnet = config.lanPrivateSubnet;
    this._lanVpcId = config.lanVpcId;
    this._learnedCidrsApprovalMode = config.learnedCidrsApprovalMode;
    this._localAsNumber = config.localAsNumber;
    this._managementEgressIpPrefixList = config.managementEgressIpPrefixList;
    this._monitorExcludeList = config.monitorExcludeList;
    this._oobAvailabilityZone = config.oobAvailabilityZone;
    this._oobManagementSubnet = config.oobManagementSubnet;
    this._peerBackupLogicalIfname = config.peerBackupLogicalIfname;
    this._peerConnectionType = config.peerConnectionType;
    this._prependAsPath = config.prependAsPath;
    this._privateModeLbVpcId = config.privateModeLbVpcId;
    this._privateModeSubnetZone = config.privateModeSubnetZone;
    this._rxQueueSize = config.rxQueueSize;
    this._singleAzHa = config.singleAzHa;
    this._singleIpSnat = config.singleIpSnat;
    this._softwareVersion = config.softwareVersion;
    this._spotPrice = config.spotPrice;
    this._subnet = config.subnet;
    this._tags = config.tags;
    this._tunnelDetectionTime = config.tunnelDetectionTime;
    this._vpcId = config.vpcId;
    this._vpcReg = config.vpcReg;
    this._zone = config.zone;
    this._ztpFileDownloadPath = config.ztpFileDownloadPath;
    this._ztpFileType = config.ztpFileType;
    this._bgpLanInterfaces.internalValue = config.bgpLanInterfaces;
    this._eipMap.internalValue = config.eipMap;
    this._haBgpLanInterfaces.internalValue = config.haBgpLanInterfaces;
    this._haInterfaces.internalValue = config.haInterfaces;
    this._interfaceMapping.internalValue = config.interfaceMapping;
    this._interfaces.internalValue = config.interfaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // allocate_new_eip - computed: false, optional: true, required: false
  private _allocateNewEip?: boolean | cdktf.IResolvable; 
  public get allocateNewEip() {
    return this.getBooleanAttribute('allocate_new_eip');
  }
  public set allocateNewEip(value: boolean | cdktf.IResolvable) {
    this._allocateNewEip = value;
  }
  public resetAllocateNewEip() {
    this._allocateNewEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateNewEipInput() {
    return this._allocateNewEip;
  }

  // approved_learned_cidrs - computed: false, optional: true, required: false
  private _approvedLearnedCidrs?: string[]; 
  public get approvedLearnedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('approved_learned_cidrs'));
  }
  public set approvedLearnedCidrs(value: string[]) {
    this._approvedLearnedCidrs = value;
  }
  public resetApprovedLearnedCidrs() {
    this._approvedLearnedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedLearnedCidrsInput() {
    return this._approvedLearnedCidrs;
  }

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // azure_eip_name_resource_group - computed: true, optional: true, required: false
  private _azureEipNameResourceGroup?: string; 
  public get azureEipNameResourceGroup() {
    return this.getStringAttribute('azure_eip_name_resource_group');
  }
  public set azureEipNameResourceGroup(value: string) {
    this._azureEipNameResourceGroup = value;
  }
  public resetAzureEipNameResourceGroup() {
    this._azureEipNameResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEipNameResourceGroupInput() {
    return this._azureEipNameResourceGroup;
  }

  // bgp_accept_communities - computed: false, optional: true, required: false
  private _bgpAcceptCommunities?: boolean | cdktf.IResolvable; 
  public get bgpAcceptCommunities() {
    return this.getBooleanAttribute('bgp_accept_communities');
  }
  public set bgpAcceptCommunities(value: boolean | cdktf.IResolvable) {
    this._bgpAcceptCommunities = value;
  }
  public resetBgpAcceptCommunities() {
    this._bgpAcceptCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAcceptCommunitiesInput() {
    return this._bgpAcceptCommunities;
  }

  // bgp_ecmp - computed: false, optional: true, required: false
  private _bgpEcmp?: boolean | cdktf.IResolvable; 
  public get bgpEcmp() {
    return this.getBooleanAttribute('bgp_ecmp');
  }
  public set bgpEcmp(value: boolean | cdktf.IResolvable) {
    this._bgpEcmp = value;
  }
  public resetBgpEcmp() {
    this._bgpEcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpEcmpInput() {
    return this._bgpEcmp;
  }

  // bgp_hold_time - computed: false, optional: true, required: false
  private _bgpHoldTime?: number; 
  public get bgpHoldTime() {
    return this.getNumberAttribute('bgp_hold_time');
  }
  public set bgpHoldTime(value: number) {
    this._bgpHoldTime = value;
  }
  public resetBgpHoldTime() {
    this._bgpHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpHoldTimeInput() {
    return this._bgpHoldTime;
  }

  // bgp_lan_interfaces_count - computed: false, optional: true, required: false
  private _bgpLanInterfacesCount?: number; 
  public get bgpLanInterfacesCount() {
    return this.getNumberAttribute('bgp_lan_interfaces_count');
  }
  public set bgpLanInterfacesCount(value: number) {
    this._bgpLanInterfacesCount = value;
  }
  public resetBgpLanInterfacesCount() {
    this._bgpLanInterfacesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLanInterfacesCountInput() {
    return this._bgpLanInterfacesCount;
  }

  // bgp_lan_ip_list - computed: true, optional: false, required: false
  public get bgpLanIpList() {
    return this.getListAttribute('bgp_lan_ip_list');
  }

  // bgp_manual_spoke_advertise_cidrs - computed: false, optional: true, required: false
  private _bgpManualSpokeAdvertiseCidrs?: string; 
  public get bgpManualSpokeAdvertiseCidrs() {
    return this.getStringAttribute('bgp_manual_spoke_advertise_cidrs');
  }
  public set bgpManualSpokeAdvertiseCidrs(value: string) {
    this._bgpManualSpokeAdvertiseCidrs = value;
  }
  public resetBgpManualSpokeAdvertiseCidrs() {
    this._bgpManualSpokeAdvertiseCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpManualSpokeAdvertiseCidrsInput() {
    return this._bgpManualSpokeAdvertiseCidrs;
  }

  // bgp_neighbor_status_polling_time - computed: false, optional: true, required: false
  private _bgpNeighborStatusPollingTime?: number; 
  public get bgpNeighborStatusPollingTime() {
    return this.getNumberAttribute('bgp_neighbor_status_polling_time');
  }
  public set bgpNeighborStatusPollingTime(value: number) {
    this._bgpNeighborStatusPollingTime = value;
  }
  public resetBgpNeighborStatusPollingTime() {
    this._bgpNeighborStatusPollingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborStatusPollingTimeInput() {
    return this._bgpNeighborStatusPollingTime;
  }

  // bgp_polling_time - computed: false, optional: true, required: false
  private _bgpPollingTime?: number; 
  public get bgpPollingTime() {
    return this.getNumberAttribute('bgp_polling_time');
  }
  public set bgpPollingTime(value: number) {
    this._bgpPollingTime = value;
  }
  public resetBgpPollingTime() {
    this._bgpPollingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPollingTimeInput() {
    return this._bgpPollingTime;
  }

  // bgp_send_communities - computed: false, optional: true, required: false
  private _bgpSendCommunities?: boolean | cdktf.IResolvable; 
  public get bgpSendCommunities() {
    return this.getBooleanAttribute('bgp_send_communities');
  }
  public set bgpSendCommunities(value: boolean | cdktf.IResolvable) {
    this._bgpSendCommunities = value;
  }
  public resetBgpSendCommunities() {
    this._bgpSendCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSendCommunitiesInput() {
    return this._bgpSendCommunities;
  }

  // cloud_instance_id - computed: true, optional: false, required: false
  public get cloudInstanceId() {
    return this.getStringAttribute('cloud_instance_id');
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: number; 
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }
  public set cloudType(value: number) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // connected_transit - computed: false, optional: true, required: false
  private _connectedTransit?: boolean | cdktf.IResolvable; 
  public get connectedTransit() {
    return this.getBooleanAttribute('connected_transit');
  }
  public set connectedTransit(value: boolean | cdktf.IResolvable) {
    this._connectedTransit = value;
  }
  public resetConnectedTransit() {
    this._connectedTransit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedTransitInput() {
    return this._connectedTransit;
  }

  // customer_managed_keys - computed: false, optional: true, required: false
  private _customerManagedKeys?: string; 
  public get customerManagedKeys() {
    return this.getStringAttribute('customer_managed_keys');
  }
  public set customerManagedKeys(value: string) {
    this._customerManagedKeys = value;
  }
  public resetCustomerManagedKeys() {
    this._customerManagedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeysInput() {
    return this._customerManagedKeys;
  }

  // customized_spoke_vpc_routes - computed: false, optional: true, required: false
  private _customizedSpokeVpcRoutes?: string; 
  public get customizedSpokeVpcRoutes() {
    return this.getStringAttribute('customized_spoke_vpc_routes');
  }
  public set customizedSpokeVpcRoutes(value: string) {
    this._customizedSpokeVpcRoutes = value;
  }
  public resetCustomizedSpokeVpcRoutes() {
    this._customizedSpokeVpcRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedSpokeVpcRoutesInput() {
    return this._customizedSpokeVpcRoutes;
  }

  // customized_transit_vpc_routes - computed: false, optional: true, required: false
  private _customizedTransitVpcRoutes?: string[]; 
  public get customizedTransitVpcRoutes() {
    return cdktf.Fn.tolist(this.getListAttribute('customized_transit_vpc_routes'));
  }
  public set customizedTransitVpcRoutes(value: string[]) {
    this._customizedTransitVpcRoutes = value;
  }
  public resetCustomizedTransitVpcRoutes() {
    this._customizedTransitVpcRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedTransitVpcRoutesInput() {
    return this._customizedTransitVpcRoutes;
  }

  // delete_spot - computed: false, optional: true, required: false
  private _deleteSpot?: boolean | cdktf.IResolvable; 
  public get deleteSpot() {
    return this.getBooleanAttribute('delete_spot');
  }
  public set deleteSpot(value: boolean | cdktf.IResolvable) {
    this._deleteSpot = value;
  }
  public resetDeleteSpot() {
    this._deleteSpot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSpotInput() {
    return this._deleteSpot;
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

  // eip - computed: true, optional: true, required: false
  private _eip?: string; 
  public get eip() {
    return this.getStringAttribute('eip');
  }
  public set eip(value: string) {
    this._eip = value;
  }
  public resetEip() {
    this._eip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip;
  }

  // enable_active_standby - computed: false, optional: true, required: false
  private _enableActiveStandby?: boolean | cdktf.IResolvable; 
  public get enableActiveStandby() {
    return this.getBooleanAttribute('enable_active_standby');
  }
  public set enableActiveStandby(value: boolean | cdktf.IResolvable) {
    this._enableActiveStandby = value;
  }
  public resetEnableActiveStandby() {
    this._enableActiveStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableActiveStandbyInput() {
    return this._enableActiveStandby;
  }

  // enable_active_standby_preemptive - computed: false, optional: true, required: false
  private _enableActiveStandbyPreemptive?: boolean | cdktf.IResolvable; 
  public get enableActiveStandbyPreemptive() {
    return this.getBooleanAttribute('enable_active_standby_preemptive');
  }
  public set enableActiveStandbyPreemptive(value: boolean | cdktf.IResolvable) {
    this._enableActiveStandbyPreemptive = value;
  }
  public resetEnableActiveStandbyPreemptive() {
    this._enableActiveStandbyPreemptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableActiveStandbyPreemptiveInput() {
    return this._enableActiveStandbyPreemptive;
  }

  // enable_advertise_transit_cidr - computed: false, optional: true, required: false
  private _enableAdvertiseTransitCidr?: boolean | cdktf.IResolvable; 
  public get enableAdvertiseTransitCidr() {
    return this.getBooleanAttribute('enable_advertise_transit_cidr');
  }
  public set enableAdvertiseTransitCidr(value: boolean | cdktf.IResolvable) {
    this._enableAdvertiseTransitCidr = value;
  }
  public resetEnableAdvertiseTransitCidr() {
    this._enableAdvertiseTransitCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdvertiseTransitCidrInput() {
    return this._enableAdvertiseTransitCidr;
  }

  // enable_bgp_over_lan - computed: false, optional: true, required: false
  private _enableBgpOverLan?: boolean | cdktf.IResolvable; 
  public get enableBgpOverLan() {
    return this.getBooleanAttribute('enable_bgp_over_lan');
  }
  public set enableBgpOverLan(value: boolean | cdktf.IResolvable) {
    this._enableBgpOverLan = value;
  }
  public resetEnableBgpOverLan() {
    this._enableBgpOverLan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpOverLanInput() {
    return this._enableBgpOverLan;
  }

  // enable_egress_transit_firenet - computed: false, optional: true, required: false
  private _enableEgressTransitFirenet?: boolean | cdktf.IResolvable; 
  public get enableEgressTransitFirenet() {
    return this.getBooleanAttribute('enable_egress_transit_firenet');
  }
  public set enableEgressTransitFirenet(value: boolean | cdktf.IResolvable) {
    this._enableEgressTransitFirenet = value;
  }
  public resetEnableEgressTransitFirenet() {
    this._enableEgressTransitFirenet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEgressTransitFirenetInput() {
    return this._enableEgressTransitFirenet;
  }

  // enable_encrypt_volume - computed: false, optional: true, required: false
  private _enableEncryptVolume?: boolean | cdktf.IResolvable; 
  public get enableEncryptVolume() {
    return this.getBooleanAttribute('enable_encrypt_volume');
  }
  public set enableEncryptVolume(value: boolean | cdktf.IResolvable) {
    this._enableEncryptVolume = value;
  }
  public resetEnableEncryptVolume() {
    this._enableEncryptVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptVolumeInput() {
    return this._enableEncryptVolume;
  }

  // enable_firenet - computed: false, optional: true, required: false
  private _enableFirenet?: boolean | cdktf.IResolvable; 
  public get enableFirenet() {
    return this.getBooleanAttribute('enable_firenet');
  }
  public set enableFirenet(value: boolean | cdktf.IResolvable) {
    this._enableFirenet = value;
  }
  public resetEnableFirenet() {
    this._enableFirenet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFirenetInput() {
    return this._enableFirenet;
  }

  // enable_gateway_load_balancer - computed: false, optional: true, required: false
  private _enableGatewayLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableGatewayLoadBalancer() {
    return this.getBooleanAttribute('enable_gateway_load_balancer');
  }
  public set enableGatewayLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableGatewayLoadBalancer = value;
  }
  public resetEnableGatewayLoadBalancer() {
    this._enableGatewayLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGatewayLoadBalancerInput() {
    return this._enableGatewayLoadBalancer;
  }

  // enable_gro_gso - computed: false, optional: true, required: false
  private _enableGroGso?: boolean | cdktf.IResolvable; 
  public get enableGroGso() {
    return this.getBooleanAttribute('enable_gro_gso');
  }
  public set enableGroGso(value: boolean | cdktf.IResolvable) {
    this._enableGroGso = value;
  }
  public resetEnableGroGso() {
    this._enableGroGso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGroGsoInput() {
    return this._enableGroGso;
  }

  // enable_hybrid_connection - computed: false, optional: true, required: false
  private _enableHybridConnection?: boolean | cdktf.IResolvable; 
  public get enableHybridConnection() {
    return this.getBooleanAttribute('enable_hybrid_connection');
  }
  public set enableHybridConnection(value: boolean | cdktf.IResolvable) {
    this._enableHybridConnection = value;
  }
  public resetEnableHybridConnection() {
    this._enableHybridConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHybridConnectionInput() {
    return this._enableHybridConnection;
  }

  // enable_jumbo_frame - computed: true, optional: true, required: false
  private _enableJumboFrame?: boolean | cdktf.IResolvable; 
  public get enableJumboFrame() {
    return this.getBooleanAttribute('enable_jumbo_frame');
  }
  public set enableJumboFrame(value: boolean | cdktf.IResolvable) {
    this._enableJumboFrame = value;
  }
  public resetEnableJumboFrame() {
    this._enableJumboFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJumboFrameInput() {
    return this._enableJumboFrame;
  }

  // enable_learned_cidrs_approval - computed: false, optional: true, required: false
  private _enableLearnedCidrsApproval?: boolean | cdktf.IResolvable; 
  public get enableLearnedCidrsApproval() {
    return this.getBooleanAttribute('enable_learned_cidrs_approval');
  }
  public set enableLearnedCidrsApproval(value: boolean | cdktf.IResolvable) {
    this._enableLearnedCidrsApproval = value;
  }
  public resetEnableLearnedCidrsApproval() {
    this._enableLearnedCidrsApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnedCidrsApprovalInput() {
    return this._enableLearnedCidrsApproval;
  }

  // enable_monitor_gateway_subnets - computed: false, optional: true, required: false
  private _enableMonitorGatewaySubnets?: boolean | cdktf.IResolvable; 
  public get enableMonitorGatewaySubnets() {
    return this.getBooleanAttribute('enable_monitor_gateway_subnets');
  }
  public set enableMonitorGatewaySubnets(value: boolean | cdktf.IResolvable) {
    this._enableMonitorGatewaySubnets = value;
  }
  public resetEnableMonitorGatewaySubnets() {
    this._enableMonitorGatewaySubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitorGatewaySubnetsInput() {
    return this._enableMonitorGatewaySubnets;
  }

  // enable_multi_tier_transit - computed: false, optional: true, required: false
  private _enableMultiTierTransit?: boolean | cdktf.IResolvable; 
  public get enableMultiTierTransit() {
    return this.getBooleanAttribute('enable_multi_tier_transit');
  }
  public set enableMultiTierTransit(value: boolean | cdktf.IResolvable) {
    this._enableMultiTierTransit = value;
  }
  public resetEnableMultiTierTransit() {
    this._enableMultiTierTransit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiTierTransitInput() {
    return this._enableMultiTierTransit;
  }

  // enable_preserve_as_path - computed: false, optional: true, required: false
  private _enablePreserveAsPath?: boolean | cdktf.IResolvable; 
  public get enablePreserveAsPath() {
    return this.getBooleanAttribute('enable_preserve_as_path');
  }
  public set enablePreserveAsPath(value: boolean | cdktf.IResolvable) {
    this._enablePreserveAsPath = value;
  }
  public resetEnablePreserveAsPath() {
    this._enablePreserveAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreserveAsPathInput() {
    return this._enablePreserveAsPath;
  }

  // enable_private_oob - computed: false, optional: true, required: false
  private _enablePrivateOob?: boolean | cdktf.IResolvable; 
  public get enablePrivateOob() {
    return this.getBooleanAttribute('enable_private_oob');
  }
  public set enablePrivateOob(value: boolean | cdktf.IResolvable) {
    this._enablePrivateOob = value;
  }
  public resetEnablePrivateOob() {
    this._enablePrivateOob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateOobInput() {
    return this._enablePrivateOob;
  }

  // enable_s2c_rx_balancing - computed: false, optional: true, required: false
  private _enableS2CRxBalancing?: boolean | cdktf.IResolvable; 
  public get enableS2CRxBalancing() {
    return this.getBooleanAttribute('enable_s2c_rx_balancing');
  }
  public set enableS2CRxBalancing(value: boolean | cdktf.IResolvable) {
    this._enableS2CRxBalancing = value;
  }
  public resetEnableS2CRxBalancing() {
    this._enableS2CRxBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableS2CRxBalancingInput() {
    return this._enableS2CRxBalancing;
  }

  // enable_segmentation - computed: false, optional: true, required: false
  private _enableSegmentation?: boolean | cdktf.IResolvable; 
  public get enableSegmentation() {
    return this.getBooleanAttribute('enable_segmentation');
  }
  public set enableSegmentation(value: boolean | cdktf.IResolvable) {
    this._enableSegmentation = value;
  }
  public resetEnableSegmentation() {
    this._enableSegmentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSegmentationInput() {
    return this._enableSegmentation;
  }

  // enable_spot_instance - computed: false, optional: true, required: false
  private _enableSpotInstance?: boolean | cdktf.IResolvable; 
  public get enableSpotInstance() {
    return this.getBooleanAttribute('enable_spot_instance');
  }
  public set enableSpotInstance(value: boolean | cdktf.IResolvable) {
    this._enableSpotInstance = value;
  }
  public resetEnableSpotInstance() {
    this._enableSpotInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpotInstanceInput() {
    return this._enableSpotInstance;
  }

  // enable_transit_firenet - computed: false, optional: true, required: false
  private _enableTransitFirenet?: boolean | cdktf.IResolvable; 
  public get enableTransitFirenet() {
    return this.getBooleanAttribute('enable_transit_firenet');
  }
  public set enableTransitFirenet(value: boolean | cdktf.IResolvable) {
    this._enableTransitFirenet = value;
  }
  public resetEnableTransitFirenet() {
    this._enableTransitFirenet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTransitFirenetInput() {
    return this._enableTransitFirenet;
  }

  // enable_transit_summarize_cidr_to_tgw - computed: false, optional: true, required: false
  private _enableTransitSummarizeCidrToTgw?: boolean | cdktf.IResolvable; 
  public get enableTransitSummarizeCidrToTgw() {
    return this.getBooleanAttribute('enable_transit_summarize_cidr_to_tgw');
  }
  public set enableTransitSummarizeCidrToTgw(value: boolean | cdktf.IResolvable) {
    this._enableTransitSummarizeCidrToTgw = value;
  }
  public resetEnableTransitSummarizeCidrToTgw() {
    this._enableTransitSummarizeCidrToTgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTransitSummarizeCidrToTgwInput() {
    return this._enableTransitSummarizeCidrToTgw;
  }

  // enable_vpc_dns_server - computed: false, optional: true, required: false
  private _enableVpcDnsServer?: boolean | cdktf.IResolvable; 
  public get enableVpcDnsServer() {
    return this.getBooleanAttribute('enable_vpc_dns_server');
  }
  public set enableVpcDnsServer(value: boolean | cdktf.IResolvable) {
    this._enableVpcDnsServer = value;
  }
  public resetEnableVpcDnsServer() {
    this._enableVpcDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVpcDnsServerInput() {
    return this._enableVpcDnsServer;
  }

  // excluded_advertised_spoke_routes - computed: false, optional: true, required: false
  private _excludedAdvertisedSpokeRoutes?: string; 
  public get excludedAdvertisedSpokeRoutes() {
    return this.getStringAttribute('excluded_advertised_spoke_routes');
  }
  public set excludedAdvertisedSpokeRoutes(value: string) {
    this._excludedAdvertisedSpokeRoutes = value;
  }
  public resetExcludedAdvertisedSpokeRoutes() {
    this._excludedAdvertisedSpokeRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAdvertisedSpokeRoutesInput() {
    return this._excludedAdvertisedSpokeRoutes;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }

  // filtered_spoke_vpc_routes - computed: false, optional: true, required: false
  private _filteredSpokeVpcRoutes?: string; 
  public get filteredSpokeVpcRoutes() {
    return this.getStringAttribute('filtered_spoke_vpc_routes');
  }
  public set filteredSpokeVpcRoutes(value: string) {
    this._filteredSpokeVpcRoutes = value;
  }
  public resetFilteredSpokeVpcRoutes() {
    this._filteredSpokeVpcRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteredSpokeVpcRoutesInput() {
    return this._filteredSpokeVpcRoutes;
  }

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
  }

  // gw_size - computed: false, optional: false, required: true
  private _gwSize?: string; 
  public get gwSize() {
    return this.getStringAttribute('gw_size');
  }
  public set gwSize(value: string) {
    this._gwSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwSizeInput() {
    return this._gwSize;
  }

  // ha_availability_domain - computed: true, optional: true, required: false
  private _haAvailabilityDomain?: string; 
  public get haAvailabilityDomain() {
    return this.getStringAttribute('ha_availability_domain');
  }
  public set haAvailabilityDomain(value: string) {
    this._haAvailabilityDomain = value;
  }
  public resetHaAvailabilityDomain() {
    this._haAvailabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAvailabilityDomainInput() {
    return this._haAvailabilityDomain;
  }

  // ha_azure_eip_name_resource_group - computed: true, optional: true, required: false
  private _haAzureEipNameResourceGroup?: string; 
  public get haAzureEipNameResourceGroup() {
    return this.getStringAttribute('ha_azure_eip_name_resource_group');
  }
  public set haAzureEipNameResourceGroup(value: string) {
    this._haAzureEipNameResourceGroup = value;
  }
  public resetHaAzureEipNameResourceGroup() {
    this._haAzureEipNameResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haAzureEipNameResourceGroupInput() {
    return this._haAzureEipNameResourceGroup;
  }

  // ha_bgp_lan_ip_list - computed: true, optional: false, required: false
  public get haBgpLanIpList() {
    return this.getListAttribute('ha_bgp_lan_ip_list');
  }

  // ha_cloud_instance_id - computed: true, optional: false, required: false
  public get haCloudInstanceId() {
    return this.getStringAttribute('ha_cloud_instance_id');
  }

  // ha_device_id - computed: false, optional: true, required: false
  private _haDeviceId?: string; 
  public get haDeviceId() {
    return this.getStringAttribute('ha_device_id');
  }
  public set haDeviceId(value: string) {
    this._haDeviceId = value;
  }
  public resetHaDeviceId() {
    this._haDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDeviceIdInput() {
    return this._haDeviceId;
  }

  // ha_eip - computed: true, optional: true, required: false
  private _haEip?: string; 
  public get haEip() {
    return this.getStringAttribute('ha_eip');
  }
  public set haEip(value: string) {
    this._haEip = value;
  }
  public resetHaEip() {
    this._haEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEipInput() {
    return this._haEip;
  }

  // ha_fault_domain - computed: true, optional: true, required: false
  private _haFaultDomain?: string; 
  public get haFaultDomain() {
    return this.getStringAttribute('ha_fault_domain');
  }
  public set haFaultDomain(value: string) {
    this._haFaultDomain = value;
  }
  public resetHaFaultDomain() {
    this._haFaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haFaultDomainInput() {
    return this._haFaultDomain;
  }

  // ha_gw_name - computed: true, optional: false, required: false
  public get haGwName() {
    return this.getStringAttribute('ha_gw_name');
  }

  // ha_gw_size - computed: false, optional: true, required: false
  private _haGwSize?: string; 
  public get haGwSize() {
    return this.getStringAttribute('ha_gw_size');
  }
  public set haGwSize(value: string) {
    this._haGwSize = value;
  }
  public resetHaGwSize() {
    this._haGwSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haGwSizeInput() {
    return this._haGwSize;
  }

  // ha_image_version - computed: true, optional: true, required: false
  private _haImageVersion?: string; 
  public get haImageVersion() {
    return this.getStringAttribute('ha_image_version');
  }
  public set haImageVersion(value: string) {
    this._haImageVersion = value;
  }
  public resetHaImageVersion() {
    this._haImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haImageVersionInput() {
    return this._haImageVersion;
  }

  // ha_insane_mode_az - computed: false, optional: true, required: false
  private _haInsaneModeAz?: string; 
  public get haInsaneModeAz() {
    return this.getStringAttribute('ha_insane_mode_az');
  }
  public set haInsaneModeAz(value: string) {
    this._haInsaneModeAz = value;
  }
  public resetHaInsaneModeAz() {
    this._haInsaneModeAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInsaneModeAzInput() {
    return this._haInsaneModeAz;
  }

  // ha_lan_interface_cidr - computed: true, optional: false, required: false
  public get haLanInterfaceCidr() {
    return this.getStringAttribute('ha_lan_interface_cidr');
  }

  // ha_management_egress_ip_prefix_list - computed: false, optional: true, required: false
  private _haManagementEgressIpPrefixList?: string[]; 
  public get haManagementEgressIpPrefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('ha_management_egress_ip_prefix_list'));
  }
  public set haManagementEgressIpPrefixList(value: string[]) {
    this._haManagementEgressIpPrefixList = value;
  }
  public resetHaManagementEgressIpPrefixList() {
    this._haManagementEgressIpPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haManagementEgressIpPrefixListInput() {
    return this._haManagementEgressIpPrefixList;
  }

  // ha_oob_availability_zone - computed: false, optional: true, required: false
  private _haOobAvailabilityZone?: string; 
  public get haOobAvailabilityZone() {
    return this.getStringAttribute('ha_oob_availability_zone');
  }
  public set haOobAvailabilityZone(value: string) {
    this._haOobAvailabilityZone = value;
  }
  public resetHaOobAvailabilityZone() {
    this._haOobAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haOobAvailabilityZoneInput() {
    return this._haOobAvailabilityZone;
  }

  // ha_oob_management_subnet - computed: false, optional: true, required: false
  private _haOobManagementSubnet?: string; 
  public get haOobManagementSubnet() {
    return this.getStringAttribute('ha_oob_management_subnet');
  }
  public set haOobManagementSubnet(value: string) {
    this._haOobManagementSubnet = value;
  }
  public resetHaOobManagementSubnet() {
    this._haOobManagementSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haOobManagementSubnetInput() {
    return this._haOobManagementSubnet;
  }

  // ha_private_ip - computed: true, optional: false, required: false
  public get haPrivateIp() {
    return this.getStringAttribute('ha_private_ip');
  }

  // ha_private_mode_subnet_zone - computed: false, optional: true, required: false
  private _haPrivateModeSubnetZone?: string; 
  public get haPrivateModeSubnetZone() {
    return this.getStringAttribute('ha_private_mode_subnet_zone');
  }
  public set haPrivateModeSubnetZone(value: string) {
    this._haPrivateModeSubnetZone = value;
  }
  public resetHaPrivateModeSubnetZone() {
    this._haPrivateModeSubnetZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPrivateModeSubnetZoneInput() {
    return this._haPrivateModeSubnetZone;
  }

  // ha_public_ip - computed: true, optional: false, required: false
  public get haPublicIp() {
    return this.getStringAttribute('ha_public_ip');
  }

  // ha_security_group_id - computed: true, optional: false, required: false
  public get haSecurityGroupId() {
    return this.getStringAttribute('ha_security_group_id');
  }

  // ha_software_version - computed: true, optional: true, required: false
  private _haSoftwareVersion?: string; 
  public get haSoftwareVersion() {
    return this.getStringAttribute('ha_software_version');
  }
  public set haSoftwareVersion(value: string) {
    this._haSoftwareVersion = value;
  }
  public resetHaSoftwareVersion() {
    this._haSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSoftwareVersionInput() {
    return this._haSoftwareVersion;
  }

  // ha_subnet - computed: false, optional: true, required: false
  private _haSubnet?: string; 
  public get haSubnet() {
    return this.getStringAttribute('ha_subnet');
  }
  public set haSubnet(value: string) {
    this._haSubnet = value;
  }
  public resetHaSubnet() {
    this._haSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSubnetInput() {
    return this._haSubnet;
  }

  // ha_zone - computed: false, optional: true, required: false
  private _haZone?: string; 
  public get haZone() {
    return this.getStringAttribute('ha_zone');
  }
  public set haZone(value: string) {
    this._haZone = value;
  }
  public resetHaZone() {
    this._haZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haZoneInput() {
    return this._haZone;
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

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // insane_mode - computed: false, optional: true, required: false
  private _insaneMode?: boolean | cdktf.IResolvable; 
  public get insaneMode() {
    return this.getBooleanAttribute('insane_mode');
  }
  public set insaneMode(value: boolean | cdktf.IResolvable) {
    this._insaneMode = value;
  }
  public resetInsaneMode() {
    this._insaneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insaneModeInput() {
    return this._insaneMode;
  }

  // insane_mode_az - computed: false, optional: true, required: false
  private _insaneModeAz?: string; 
  public get insaneModeAz() {
    return this.getStringAttribute('insane_mode_az');
  }
  public set insaneModeAz(value: string) {
    this._insaneModeAz = value;
  }
  public resetInsaneModeAz() {
    this._insaneModeAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insaneModeAzInput() {
    return this._insaneModeAz;
  }

  // lan_interface_cidr - computed: true, optional: false, required: false
  public get lanInterfaceCidr() {
    return this.getStringAttribute('lan_interface_cidr');
  }

  // lan_private_subnet - computed: false, optional: true, required: false
  private _lanPrivateSubnet?: string; 
  public get lanPrivateSubnet() {
    return this.getStringAttribute('lan_private_subnet');
  }
  public set lanPrivateSubnet(value: string) {
    this._lanPrivateSubnet = value;
  }
  public resetLanPrivateSubnet() {
    this._lanPrivateSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanPrivateSubnetInput() {
    return this._lanPrivateSubnet;
  }

  // lan_vpc_id - computed: false, optional: true, required: false
  private _lanVpcId?: string; 
  public get lanVpcId() {
    return this.getStringAttribute('lan_vpc_id');
  }
  public set lanVpcId(value: string) {
    this._lanVpcId = value;
  }
  public resetLanVpcId() {
    this._lanVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanVpcIdInput() {
    return this._lanVpcId;
  }

  // learned_cidrs_approval_mode - computed: false, optional: true, required: false
  private _learnedCidrsApprovalMode?: string; 
  public get learnedCidrsApprovalMode() {
    return this.getStringAttribute('learned_cidrs_approval_mode');
  }
  public set learnedCidrsApprovalMode(value: string) {
    this._learnedCidrsApprovalMode = value;
  }
  public resetLearnedCidrsApprovalMode() {
    this._learnedCidrsApprovalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnedCidrsApprovalModeInput() {
    return this._learnedCidrsApprovalMode;
  }

  // local_as_number - computed: true, optional: true, required: false
  private _localAsNumber?: string; 
  public get localAsNumber() {
    return this.getStringAttribute('local_as_number');
  }
  public set localAsNumber(value: string) {
    this._localAsNumber = value;
  }
  public resetLocalAsNumber() {
    this._localAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNumberInput() {
    return this._localAsNumber;
  }

  // management_egress_ip_prefix_list - computed: false, optional: true, required: false
  private _managementEgressIpPrefixList?: string[]; 
  public get managementEgressIpPrefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('management_egress_ip_prefix_list'));
  }
  public set managementEgressIpPrefixList(value: string[]) {
    this._managementEgressIpPrefixList = value;
  }
  public resetManagementEgressIpPrefixList() {
    this._managementEgressIpPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEgressIpPrefixListInput() {
    return this._managementEgressIpPrefixList;
  }

  // monitor_exclude_list - computed: false, optional: true, required: false
  private _monitorExcludeList?: string[]; 
  public get monitorExcludeList() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor_exclude_list'));
  }
  public set monitorExcludeList(value: string[]) {
    this._monitorExcludeList = value;
  }
  public resetMonitorExcludeList() {
    this._monitorExcludeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorExcludeListInput() {
    return this._monitorExcludeList;
  }

  // oob_availability_zone - computed: false, optional: true, required: false
  private _oobAvailabilityZone?: string; 
  public get oobAvailabilityZone() {
    return this.getStringAttribute('oob_availability_zone');
  }
  public set oobAvailabilityZone(value: string) {
    this._oobAvailabilityZone = value;
  }
  public resetOobAvailabilityZone() {
    this._oobAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobAvailabilityZoneInput() {
    return this._oobAvailabilityZone;
  }

  // oob_management_subnet - computed: false, optional: true, required: false
  private _oobManagementSubnet?: string; 
  public get oobManagementSubnet() {
    return this.getStringAttribute('oob_management_subnet');
  }
  public set oobManagementSubnet(value: string) {
    this._oobManagementSubnet = value;
  }
  public resetOobManagementSubnet() {
    this._oobManagementSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oobManagementSubnetInput() {
    return this._oobManagementSubnet;
  }

  // peer_backup_logical_ifname - computed: false, optional: true, required: false
  private _peerBackupLogicalIfname?: string[]; 
  public get peerBackupLogicalIfname() {
    return this.getListAttribute('peer_backup_logical_ifname');
  }
  public set peerBackupLogicalIfname(value: string[]) {
    this._peerBackupLogicalIfname = value;
  }
  public resetPeerBackupLogicalIfname() {
    this._peerBackupLogicalIfname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerBackupLogicalIfnameInput() {
    return this._peerBackupLogicalIfname;
  }

  // peer_connection_type - computed: false, optional: true, required: false
  private _peerConnectionType?: string; 
  public get peerConnectionType() {
    return this.getStringAttribute('peer_connection_type');
  }
  public set peerConnectionType(value: string) {
    this._peerConnectionType = value;
  }
  public resetPeerConnectionType() {
    this._peerConnectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerConnectionTypeInput() {
    return this._peerConnectionType;
  }

  // prepend_as_path - computed: false, optional: true, required: false
  private _prependAsPath?: string[]; 
  public get prependAsPath() {
    return this.getListAttribute('prepend_as_path');
  }
  public set prependAsPath(value: string[]) {
    this._prependAsPath = value;
  }
  public resetPrependAsPath() {
    this._prependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAsPathInput() {
    return this._prependAsPath;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // private_mode_lb_vpc_id - computed: false, optional: true, required: false
  private _privateModeLbVpcId?: string; 
  public get privateModeLbVpcId() {
    return this.getStringAttribute('private_mode_lb_vpc_id');
  }
  public set privateModeLbVpcId(value: string) {
    this._privateModeLbVpcId = value;
  }
  public resetPrivateModeLbVpcId() {
    this._privateModeLbVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateModeLbVpcIdInput() {
    return this._privateModeLbVpcId;
  }

  // private_mode_subnet_zone - computed: false, optional: true, required: false
  private _privateModeSubnetZone?: string; 
  public get privateModeSubnetZone() {
    return this.getStringAttribute('private_mode_subnet_zone');
  }
  public set privateModeSubnetZone(value: string) {
    this._privateModeSubnetZone = value;
  }
  public resetPrivateModeSubnetZone() {
    this._privateModeSubnetZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateModeSubnetZoneInput() {
    return this._privateModeSubnetZone;
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // rx_queue_size - computed: false, optional: true, required: false
  private _rxQueueSize?: string; 
  public get rxQueueSize() {
    return this.getStringAttribute('rx_queue_size');
  }
  public set rxQueueSize(value: string) {
    this._rxQueueSize = value;
  }
  public resetRxQueueSize() {
    this._rxQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxQueueSizeInput() {
    return this._rxQueueSize;
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // single_az_ha - computed: false, optional: true, required: false
  private _singleAzHa?: boolean | cdktf.IResolvable; 
  public get singleAzHa() {
    return this.getBooleanAttribute('single_az_ha');
  }
  public set singleAzHa(value: boolean | cdktf.IResolvable) {
    this._singleAzHa = value;
  }
  public resetSingleAzHa() {
    this._singleAzHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleAzHaInput() {
    return this._singleAzHa;
  }

  // single_ip_snat - computed: false, optional: true, required: false
  private _singleIpSnat?: boolean | cdktf.IResolvable; 
  public get singleIpSnat() {
    return this.getBooleanAttribute('single_ip_snat');
  }
  public set singleIpSnat(value: boolean | cdktf.IResolvable) {
    this._singleIpSnat = value;
  }
  public resetSingleIpSnat() {
    this._singleIpSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleIpSnatInput() {
    return this._singleIpSnat;
  }

  // software_version - computed: true, optional: true, required: false
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  public resetSoftwareVersion() {
    this._softwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string; 
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }
  public set spotPrice(value: string) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tunnel_detection_time - computed: true, optional: true, required: false
  private _tunnelDetectionTime?: number; 
  public get tunnelDetectionTime() {
    return this.getNumberAttribute('tunnel_detection_time');
  }
  public set tunnelDetectionTime(value: number) {
    this._tunnelDetectionTime = value;
  }
  public resetTunnelDetectionTime() {
    this._tunnelDetectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDetectionTimeInput() {
    return this._tunnelDetectionTime;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_reg - computed: false, optional: true, required: false
  private _vpcReg?: string; 
  public get vpcReg() {
    return this.getStringAttribute('vpc_reg');
  }
  public set vpcReg(value: string) {
    this._vpcReg = value;
  }
  public resetVpcReg() {
    this._vpcReg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRegInput() {
    return this._vpcReg;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // ztp_file_download_path - computed: false, optional: true, required: false
  private _ztpFileDownloadPath?: string; 
  public get ztpFileDownloadPath() {
    return this.getStringAttribute('ztp_file_download_path');
  }
  public set ztpFileDownloadPath(value: string) {
    this._ztpFileDownloadPath = value;
  }
  public resetZtpFileDownloadPath() {
    this._ztpFileDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztpFileDownloadPathInput() {
    return this._ztpFileDownloadPath;
  }

  // ztp_file_type - computed: false, optional: true, required: false
  private _ztpFileType?: string; 
  public get ztpFileType() {
    return this.getStringAttribute('ztp_file_type');
  }
  public set ztpFileType(value: string) {
    this._ztpFileType = value;
  }
  public resetZtpFileType() {
    this._ztpFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztpFileTypeInput() {
    return this._ztpFileType;
  }

  // bgp_lan_interfaces - computed: false, optional: true, required: false
  private _bgpLanInterfaces = new TransitGatewayBgpLanInterfacesList(this, "bgp_lan_interfaces", false);
  public get bgpLanInterfaces() {
    return this._bgpLanInterfaces;
  }
  public putBgpLanInterfaces(value: TransitGatewayBgpLanInterfaces[] | cdktf.IResolvable) {
    this._bgpLanInterfaces.internalValue = value;
  }
  public resetBgpLanInterfaces() {
    this._bgpLanInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLanInterfacesInput() {
    return this._bgpLanInterfaces.internalValue;
  }

  // eip_map - computed: false, optional: true, required: false
  private _eipMap = new TransitGatewayEipMapList(this, "eip_map", false);
  public get eipMap() {
    return this._eipMap;
  }
  public putEipMap(value: TransitGatewayEipMap[] | cdktf.IResolvable) {
    this._eipMap.internalValue = value;
  }
  public resetEipMap() {
    this._eipMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipMapInput() {
    return this._eipMap.internalValue;
  }

  // ha_bgp_lan_interfaces - computed: false, optional: true, required: false
  private _haBgpLanInterfaces = new TransitGatewayHaBgpLanInterfacesList(this, "ha_bgp_lan_interfaces", false);
  public get haBgpLanInterfaces() {
    return this._haBgpLanInterfaces;
  }
  public putHaBgpLanInterfaces(value: TransitGatewayHaBgpLanInterfaces[] | cdktf.IResolvable) {
    this._haBgpLanInterfaces.internalValue = value;
  }
  public resetHaBgpLanInterfaces() {
    this._haBgpLanInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haBgpLanInterfacesInput() {
    return this._haBgpLanInterfaces.internalValue;
  }

  // ha_interfaces - computed: false, optional: true, required: false
  private _haInterfaces = new TransitGatewayHaInterfacesList(this, "ha_interfaces", false);
  public get haInterfaces() {
    return this._haInterfaces;
  }
  public putHaInterfaces(value: TransitGatewayHaInterfaces[] | cdktf.IResolvable) {
    this._haInterfaces.internalValue = value;
  }
  public resetHaInterfaces() {
    this._haInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInterfacesInput() {
    return this._haInterfaces.internalValue;
  }

  // interface_mapping - computed: false, optional: true, required: false
  private _interfaceMapping = new TransitGatewayInterfaceMappingList(this, "interface_mapping", false);
  public get interfaceMapping() {
    return this._interfaceMapping;
  }
  public putInterfaceMapping(value: TransitGatewayInterfaceMapping[] | cdktf.IResolvable) {
    this._interfaceMapping.internalValue = value;
  }
  public resetInterfaceMapping() {
    this._interfaceMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceMappingInput() {
    return this._interfaceMapping.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new TransitGatewayInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: TransitGatewayInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      allocate_new_eip: cdktf.booleanToTerraform(this._allocateNewEip),
      approved_learned_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvedLearnedCidrs),
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      azure_eip_name_resource_group: cdktf.stringToTerraform(this._azureEipNameResourceGroup),
      bgp_accept_communities: cdktf.booleanToTerraform(this._bgpAcceptCommunities),
      bgp_ecmp: cdktf.booleanToTerraform(this._bgpEcmp),
      bgp_hold_time: cdktf.numberToTerraform(this._bgpHoldTime),
      bgp_lan_interfaces_count: cdktf.numberToTerraform(this._bgpLanInterfacesCount),
      bgp_manual_spoke_advertise_cidrs: cdktf.stringToTerraform(this._bgpManualSpokeAdvertiseCidrs),
      bgp_neighbor_status_polling_time: cdktf.numberToTerraform(this._bgpNeighborStatusPollingTime),
      bgp_polling_time: cdktf.numberToTerraform(this._bgpPollingTime),
      bgp_send_communities: cdktf.booleanToTerraform(this._bgpSendCommunities),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      connected_transit: cdktf.booleanToTerraform(this._connectedTransit),
      customer_managed_keys: cdktf.stringToTerraform(this._customerManagedKeys),
      customized_spoke_vpc_routes: cdktf.stringToTerraform(this._customizedSpokeVpcRoutes),
      customized_transit_vpc_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customizedTransitVpcRoutes),
      delete_spot: cdktf.booleanToTerraform(this._deleteSpot),
      device_id: cdktf.stringToTerraform(this._deviceId),
      eip: cdktf.stringToTerraform(this._eip),
      enable_active_standby: cdktf.booleanToTerraform(this._enableActiveStandby),
      enable_active_standby_preemptive: cdktf.booleanToTerraform(this._enableActiveStandbyPreemptive),
      enable_advertise_transit_cidr: cdktf.booleanToTerraform(this._enableAdvertiseTransitCidr),
      enable_bgp_over_lan: cdktf.booleanToTerraform(this._enableBgpOverLan),
      enable_egress_transit_firenet: cdktf.booleanToTerraform(this._enableEgressTransitFirenet),
      enable_encrypt_volume: cdktf.booleanToTerraform(this._enableEncryptVolume),
      enable_firenet: cdktf.booleanToTerraform(this._enableFirenet),
      enable_gateway_load_balancer: cdktf.booleanToTerraform(this._enableGatewayLoadBalancer),
      enable_gro_gso: cdktf.booleanToTerraform(this._enableGroGso),
      enable_hybrid_connection: cdktf.booleanToTerraform(this._enableHybridConnection),
      enable_jumbo_frame: cdktf.booleanToTerraform(this._enableJumboFrame),
      enable_learned_cidrs_approval: cdktf.booleanToTerraform(this._enableLearnedCidrsApproval),
      enable_monitor_gateway_subnets: cdktf.booleanToTerraform(this._enableMonitorGatewaySubnets),
      enable_multi_tier_transit: cdktf.booleanToTerraform(this._enableMultiTierTransit),
      enable_preserve_as_path: cdktf.booleanToTerraform(this._enablePreserveAsPath),
      enable_private_oob: cdktf.booleanToTerraform(this._enablePrivateOob),
      enable_s2c_rx_balancing: cdktf.booleanToTerraform(this._enableS2CRxBalancing),
      enable_segmentation: cdktf.booleanToTerraform(this._enableSegmentation),
      enable_spot_instance: cdktf.booleanToTerraform(this._enableSpotInstance),
      enable_transit_firenet: cdktf.booleanToTerraform(this._enableTransitFirenet),
      enable_transit_summarize_cidr_to_tgw: cdktf.booleanToTerraform(this._enableTransitSummarizeCidrToTgw),
      enable_vpc_dns_server: cdktf.booleanToTerraform(this._enableVpcDnsServer),
      excluded_advertised_spoke_routes: cdktf.stringToTerraform(this._excludedAdvertisedSpokeRoutes),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      filtered_spoke_vpc_routes: cdktf.stringToTerraform(this._filteredSpokeVpcRoutes),
      gw_name: cdktf.stringToTerraform(this._gwName),
      gw_size: cdktf.stringToTerraform(this._gwSize),
      ha_availability_domain: cdktf.stringToTerraform(this._haAvailabilityDomain),
      ha_azure_eip_name_resource_group: cdktf.stringToTerraform(this._haAzureEipNameResourceGroup),
      ha_device_id: cdktf.stringToTerraform(this._haDeviceId),
      ha_eip: cdktf.stringToTerraform(this._haEip),
      ha_fault_domain: cdktf.stringToTerraform(this._haFaultDomain),
      ha_gw_size: cdktf.stringToTerraform(this._haGwSize),
      ha_image_version: cdktf.stringToTerraform(this._haImageVersion),
      ha_insane_mode_az: cdktf.stringToTerraform(this._haInsaneModeAz),
      ha_management_egress_ip_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._haManagementEgressIpPrefixList),
      ha_oob_availability_zone: cdktf.stringToTerraform(this._haOobAvailabilityZone),
      ha_oob_management_subnet: cdktf.stringToTerraform(this._haOobManagementSubnet),
      ha_private_mode_subnet_zone: cdktf.stringToTerraform(this._haPrivateModeSubnetZone),
      ha_software_version: cdktf.stringToTerraform(this._haSoftwareVersion),
      ha_subnet: cdktf.stringToTerraform(this._haSubnet),
      ha_zone: cdktf.stringToTerraform(this._haZone),
      id: cdktf.stringToTerraform(this._id),
      image_version: cdktf.stringToTerraform(this._imageVersion),
      insane_mode: cdktf.booleanToTerraform(this._insaneMode),
      insane_mode_az: cdktf.stringToTerraform(this._insaneModeAz),
      lan_private_subnet: cdktf.stringToTerraform(this._lanPrivateSubnet),
      lan_vpc_id: cdktf.stringToTerraform(this._lanVpcId),
      learned_cidrs_approval_mode: cdktf.stringToTerraform(this._learnedCidrsApprovalMode),
      local_as_number: cdktf.stringToTerraform(this._localAsNumber),
      management_egress_ip_prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementEgressIpPrefixList),
      monitor_exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorExcludeList),
      oob_availability_zone: cdktf.stringToTerraform(this._oobAvailabilityZone),
      oob_management_subnet: cdktf.stringToTerraform(this._oobManagementSubnet),
      peer_backup_logical_ifname: cdktf.listMapper(cdktf.stringToTerraform, false)(this._peerBackupLogicalIfname),
      peer_connection_type: cdktf.stringToTerraform(this._peerConnectionType),
      prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prependAsPath),
      private_mode_lb_vpc_id: cdktf.stringToTerraform(this._privateModeLbVpcId),
      private_mode_subnet_zone: cdktf.stringToTerraform(this._privateModeSubnetZone),
      rx_queue_size: cdktf.stringToTerraform(this._rxQueueSize),
      single_az_ha: cdktf.booleanToTerraform(this._singleAzHa),
      single_ip_snat: cdktf.booleanToTerraform(this._singleIpSnat),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      spot_price: cdktf.stringToTerraform(this._spotPrice),
      subnet: cdktf.stringToTerraform(this._subnet),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tunnel_detection_time: cdktf.numberToTerraform(this._tunnelDetectionTime),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_reg: cdktf.stringToTerraform(this._vpcReg),
      zone: cdktf.stringToTerraform(this._zone),
      ztp_file_download_path: cdktf.stringToTerraform(this._ztpFileDownloadPath),
      ztp_file_type: cdktf.stringToTerraform(this._ztpFileType),
      bgp_lan_interfaces: cdktf.listMapper(transitGatewayBgpLanInterfacesToTerraform, true)(this._bgpLanInterfaces.internalValue),
      eip_map: cdktf.listMapper(transitGatewayEipMapToTerraform, true)(this._eipMap.internalValue),
      ha_bgp_lan_interfaces: cdktf.listMapper(transitGatewayHaBgpLanInterfacesToTerraform, true)(this._haBgpLanInterfaces.internalValue),
      ha_interfaces: cdktf.listMapper(transitGatewayHaInterfacesToTerraform, true)(this._haInterfaces.internalValue),
      interface_mapping: cdktf.listMapper(transitGatewayInterfaceMappingToTerraform, true)(this._interfaceMapping.internalValue),
      interfaces: cdktf.listMapper(transitGatewayInterfacesToTerraform, true)(this._interfaces.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allocate_new_eip: {
        value: cdktf.booleanToHclTerraform(this._allocateNewEip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      approved_learned_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvedLearnedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_eip_name_resource_group: {
        value: cdktf.stringToHclTerraform(this._azureEipNameResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_accept_communities: {
        value: cdktf.booleanToHclTerraform(this._bgpAcceptCommunities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_ecmp: {
        value: cdktf.booleanToHclTerraform(this._bgpEcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_hold_time: {
        value: cdktf.numberToHclTerraform(this._bgpHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_lan_interfaces_count: {
        value: cdktf.numberToHclTerraform(this._bgpLanInterfacesCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_manual_spoke_advertise_cidrs: {
        value: cdktf.stringToHclTerraform(this._bgpManualSpokeAdvertiseCidrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_neighbor_status_polling_time: {
        value: cdktf.numberToHclTerraform(this._bgpNeighborStatusPollingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_polling_time: {
        value: cdktf.numberToHclTerraform(this._bgpPollingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_send_communities: {
        value: cdktf.booleanToHclTerraform(this._bgpSendCommunities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_type: {
        value: cdktf.numberToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connected_transit: {
        value: cdktf.booleanToHclTerraform(this._connectedTransit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      customer_managed_keys: {
        value: cdktf.stringToHclTerraform(this._customerManagedKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customized_spoke_vpc_routes: {
        value: cdktf.stringToHclTerraform(this._customizedSpokeVpcRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customized_transit_vpc_routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customizedTransitVpcRoutes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      delete_spot: {
        value: cdktf.booleanToHclTerraform(this._deleteSpot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eip: {
        value: cdktf.stringToHclTerraform(this._eip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_active_standby: {
        value: cdktf.booleanToHclTerraform(this._enableActiveStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_active_standby_preemptive: {
        value: cdktf.booleanToHclTerraform(this._enableActiveStandbyPreemptive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_advertise_transit_cidr: {
        value: cdktf.booleanToHclTerraform(this._enableAdvertiseTransitCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_bgp_over_lan: {
        value: cdktf.booleanToHclTerraform(this._enableBgpOverLan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_egress_transit_firenet: {
        value: cdktf.booleanToHclTerraform(this._enableEgressTransitFirenet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_encrypt_volume: {
        value: cdktf.booleanToHclTerraform(this._enableEncryptVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_firenet: {
        value: cdktf.booleanToHclTerraform(this._enableFirenet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_gateway_load_balancer: {
        value: cdktf.booleanToHclTerraform(this._enableGatewayLoadBalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_gro_gso: {
        value: cdktf.booleanToHclTerraform(this._enableGroGso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_hybrid_connection: {
        value: cdktf.booleanToHclTerraform(this._enableHybridConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_jumbo_frame: {
        value: cdktf.booleanToHclTerraform(this._enableJumboFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_learned_cidrs_approval: {
        value: cdktf.booleanToHclTerraform(this._enableLearnedCidrsApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_monitor_gateway_subnets: {
        value: cdktf.booleanToHclTerraform(this._enableMonitorGatewaySubnets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_multi_tier_transit: {
        value: cdktf.booleanToHclTerraform(this._enableMultiTierTransit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_preserve_as_path: {
        value: cdktf.booleanToHclTerraform(this._enablePreserveAsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_private_oob: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateOob),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_s2c_rx_balancing: {
        value: cdktf.booleanToHclTerraform(this._enableS2CRxBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_segmentation: {
        value: cdktf.booleanToHclTerraform(this._enableSegmentation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_spot_instance: {
        value: cdktf.booleanToHclTerraform(this._enableSpotInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_transit_firenet: {
        value: cdktf.booleanToHclTerraform(this._enableTransitFirenet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_transit_summarize_cidr_to_tgw: {
        value: cdktf.booleanToHclTerraform(this._enableTransitSummarizeCidrToTgw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_vpc_dns_server: {
        value: cdktf.booleanToHclTerraform(this._enableVpcDnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_advertised_spoke_routes: {
        value: cdktf.stringToHclTerraform(this._excludedAdvertisedSpokeRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_domain: {
        value: cdktf.stringToHclTerraform(this._faultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filtered_spoke_vpc_routes: {
        value: cdktf.stringToHclTerraform(this._filteredSpokeVpcRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_size: {
        value: cdktf.stringToHclTerraform(this._gwSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_availability_domain: {
        value: cdktf.stringToHclTerraform(this._haAvailabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_azure_eip_name_resource_group: {
        value: cdktf.stringToHclTerraform(this._haAzureEipNameResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_device_id: {
        value: cdktf.stringToHclTerraform(this._haDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_eip: {
        value: cdktf.stringToHclTerraform(this._haEip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_fault_domain: {
        value: cdktf.stringToHclTerraform(this._haFaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_gw_size: {
        value: cdktf.stringToHclTerraform(this._haGwSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_image_version: {
        value: cdktf.stringToHclTerraform(this._haImageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_insane_mode_az: {
        value: cdktf.stringToHclTerraform(this._haInsaneModeAz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_management_egress_ip_prefix_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._haManagementEgressIpPrefixList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ha_oob_availability_zone: {
        value: cdktf.stringToHclTerraform(this._haOobAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_oob_management_subnet: {
        value: cdktf.stringToHclTerraform(this._haOobManagementSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_private_mode_subnet_zone: {
        value: cdktf.stringToHclTerraform(this._haPrivateModeSubnetZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_software_version: {
        value: cdktf.stringToHclTerraform(this._haSoftwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_subnet: {
        value: cdktf.stringToHclTerraform(this._haSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_zone: {
        value: cdktf.stringToHclTerraform(this._haZone),
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
      image_version: {
        value: cdktf.stringToHclTerraform(this._imageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insane_mode: {
        value: cdktf.booleanToHclTerraform(this._insaneMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insane_mode_az: {
        value: cdktf.stringToHclTerraform(this._insaneModeAz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_private_subnet: {
        value: cdktf.stringToHclTerraform(this._lanPrivateSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_vpc_id: {
        value: cdktf.stringToHclTerraform(this._lanVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learned_cidrs_approval_mode: {
        value: cdktf.stringToHclTerraform(this._learnedCidrsApprovalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as_number: {
        value: cdktf.stringToHclTerraform(this._localAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_egress_ip_prefix_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementEgressIpPrefixList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      monitor_exclude_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorExcludeList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oob_availability_zone: {
        value: cdktf.stringToHclTerraform(this._oobAvailabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oob_management_subnet: {
        value: cdktf.stringToHclTerraform(this._oobManagementSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_backup_logical_ifname: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._peerBackupLogicalIfname),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      peer_connection_type: {
        value: cdktf.stringToHclTerraform(this._peerConnectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      private_mode_lb_vpc_id: {
        value: cdktf.stringToHclTerraform(this._privateModeLbVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_mode_subnet_zone: {
        value: cdktf.stringToHclTerraform(this._privateModeSubnetZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rx_queue_size: {
        value: cdktf.stringToHclTerraform(this._rxQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_az_ha: {
        value: cdktf.booleanToHclTerraform(this._singleAzHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      single_ip_snat: {
        value: cdktf.booleanToHclTerraform(this._singleIpSnat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_price: {
        value: cdktf.stringToHclTerraform(this._spotPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tunnel_detection_time: {
        value: cdktf.numberToHclTerraform(this._tunnelDetectionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_reg: {
        value: cdktf.stringToHclTerraform(this._vpcReg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztp_file_download_path: {
        value: cdktf.stringToHclTerraform(this._ztpFileDownloadPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ztp_file_type: {
        value: cdktf.stringToHclTerraform(this._ztpFileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_lan_interfaces: {
        value: cdktf.listMapperHcl(transitGatewayBgpLanInterfacesToHclTerraform, true)(this._bgpLanInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransitGatewayBgpLanInterfacesList",
      },
      eip_map: {
        value: cdktf.listMapperHcl(transitGatewayEipMapToHclTerraform, true)(this._eipMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransitGatewayEipMapList",
      },
      ha_bgp_lan_interfaces: {
        value: cdktf.listMapperHcl(transitGatewayHaBgpLanInterfacesToHclTerraform, true)(this._haBgpLanInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransitGatewayHaBgpLanInterfacesList",
      },
      ha_interfaces: {
        value: cdktf.listMapperHcl(transitGatewayHaInterfacesToHclTerraform, true)(this._haInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransitGatewayHaInterfacesList",
      },
      interface_mapping: {
        value: cdktf.listMapperHcl(transitGatewayInterfaceMappingToHclTerraform, true)(this._interfaceMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransitGatewayInterfaceMappingList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(transitGatewayInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransitGatewayInterfacesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
