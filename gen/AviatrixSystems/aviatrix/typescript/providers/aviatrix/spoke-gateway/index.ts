// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpokeGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * This parameter represents the name of a Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#account_name SpokeGateway#account_name}
  */
  readonly accountName: string;
  /**
  * If false, reuse an idle address in Elastic IP pool for this gateway. Otherwise, allocate a new Elastic IP and use it for this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#allocate_new_eip SpokeGateway#allocate_new_eip}
  */
  readonly allocateNewEip?: boolean | cdktf.IResolvable;
  /**
  * Approved learned CIDRs for BGP Spoke Gateway. Available as of provider version R2.21+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#approved_learned_cidrs SpokeGateway#approved_learned_cidrs}
  */
  readonly approvedLearnedCidrs?: string[];
  /**
  * Availability domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#availability_domain SpokeGateway#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * The name of the public IP address and its resource group in Azure to assign to this Spoke Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#azure_eip_name_resource_group SpokeGateway#azure_eip_name_resource_group}
  */
  readonly azureEipNameResourceGroup?: string;
  /**
  * BGP communities gateway accept configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#bgp_accept_communities SpokeGateway#bgp_accept_communities}
  */
  readonly bgpAcceptCommunities?: boolean | cdktf.IResolvable;
  /**
  * Enable Equal Cost Multi Path (ECMP) routing for the next hop for BGP Spoke Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#bgp_ecmp SpokeGateway#bgp_ecmp}
  */
  readonly bgpEcmp?: boolean | cdktf.IResolvable;
  /**
  * BGP Hold Time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 12 and 360.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#bgp_hold_time SpokeGateway#bgp_hold_time}
  */
  readonly bgpHoldTime?: number;
  /**
  * Number of interfaces that will be created for BGP over LAN enabled Azure spoke. Only valid for 8 (Azure), 32 (AzureGov) or AzureChina (2048). Default value: 1. Available as of provider version R3.0.2+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#bgp_lan_interfaces_count SpokeGateway#bgp_lan_interfaces_count}
  */
  readonly bgpLanInterfacesCount?: number;
  /**
  * BGP neighbor status polling time. Unit is in seconds. Valid values are between 1 and 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#bgp_neighbor_status_polling_time SpokeGateway#bgp_neighbor_status_polling_time}
  */
  readonly bgpNeighborStatusPollingTime?: number;
  /**
  * BGP route polling time for BGP Spoke Gateway. Unit is in seconds. Valid values are between 10 and 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#bgp_polling_time SpokeGateway#bgp_polling_time}
  */
  readonly bgpPollingTime?: number;
  /**
  * BGP communities gateway send configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#bgp_send_communities SpokeGateway#bgp_send_communities}
  */
  readonly bgpSendCommunities?: boolean | cdktf.IResolvable;
  /**
  * Type of cloud service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#cloud_type SpokeGateway#cloud_type}
  */
  readonly cloudType: number;
  /**
  * Customer managed key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#customer_managed_keys SpokeGateway#customer_managed_keys}
  */
  readonly customerManagedKeys?: string;
  /**
  * A list of comma separated CIDRs to be customized for the spoke VPC routes. When configured, it will replace all learned routes in VPC routing tables, including RFC1918 and non-RFC1918 CIDRs. It applies to this spoke gateway only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#customized_spoke_vpc_routes SpokeGateway#customized_spoke_vpc_routes}
  */
  readonly customizedSpokeVpcRoutes?: string;
  /**
  * If set true, the spot instance will be deleted on eviction. Otherwise, the instance will be deallocated on eviction. Only supports Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#delete_spot SpokeGateway#delete_spot}
  */
  readonly deleteSpot?: boolean | cdktf.IResolvable;
  /**
  * Disables route propagation on BGP Spoke to attached Transit Gateway. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#disable_route_propagation SpokeGateway#disable_route_propagation}
  */
  readonly disableRoutePropagation?: boolean | cdktf.IResolvable;
  /**
  * Required when allocate_new_eip is false. It uses specified EIP for this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#eip SpokeGateway#eip}
  */
  readonly eip?: string;
  /**
  * Enables Active-Standby Mode, available only with HA enabled for BGP Spoke Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_active_standby SpokeGateway#enable_active_standby}
  */
  readonly enableActiveStandby?: boolean | cdktf.IResolvable;
  /**
  * Enables Preemptive Mode for Active-Standby, available only with Active-Standby enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_active_standby_preemptive SpokeGateway#enable_active_standby_preemptive}
  */
  readonly enableActiveStandbyPreemptive?: boolean | cdktf.IResolvable;
  /**
  * Automatically advertise remote CIDR to Aviatrix Transit Gateway when route based Site2Cloud Tunnel is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_auto_advertise_s2c_cidrs SpokeGateway#enable_auto_advertise_s2c_cidrs}
  */
  readonly enableAutoAdvertiseS2CCidrs?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_bgp SpokeGateway#enable_bgp}
  */
  readonly enableBgp?: boolean | cdktf.IResolvable;
  /**
  * Pre-allocate a network interface(eth4) for "BGP over LAN" functionality. Only valid for 8 (Azure), 32 (AzureGov) or AzureChina (2048). Valid values: true or false. Default value: false. Available as of provider version R3.0.2+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_bgp_over_lan SpokeGateway#enable_bgp_over_lan}
  */
  readonly enableBgpOverLan?: boolean | cdktf.IResolvable;
  /**
  * Enable encrypt gateway EBS volume. Only supported for AWS provider. Valid values: true, false. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_encrypt_volume SpokeGateway#enable_encrypt_volume}
  */
  readonly enableEncryptVolume?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable global VPC. Only supported for GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_global_vpc SpokeGateway#enable_global_vpc}
  */
  readonly enableGlobalVpc?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to disable GRO/GSO or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_gro_gso SpokeGateway#enable_gro_gso}
  */
  readonly enableGroGso?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 for the gateway. Only supported for AWS (1), Azure (8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_ipv6 SpokeGateway#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo frame support for spoke gateway. Valid values: true or false. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_jumbo_frame SpokeGateway#enable_jumbo_frame}
  */
  readonly enableJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable/disable learned CIDR approval for BGP Spoke Gateway. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_learned_cidrs_approval SpokeGateway#enable_learned_cidrs_approval}
  */
  readonly enableLearnedCidrsApproval?: boolean | cdktf.IResolvable;
  /**
  * Enable [monitor gateway subnets](https://docs.aviatrix.com/HowTos/gateway.html#monitor-gateway-subnet). Only valid for cloud_type = 1 (AWS) or 256 (AWSGov). Valid values: true, false. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_monitor_gateway_subnets SpokeGateway#enable_monitor_gateway_subnets}
  */
  readonly enableMonitorGatewaySubnets?: boolean | cdktf.IResolvable;
  /**
  * Enable preserve as_path when advertising manual summary cidrs on BGP spoke gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_preserve_as_path SpokeGateway#enable_preserve_as_path}
  */
  readonly enablePreserveAsPath?: boolean | cdktf.IResolvable;
  /**
  * Enable private OOB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_private_oob SpokeGateway#enable_private_oob}
  */
  readonly enablePrivateOob?: boolean | cdktf.IResolvable;
  /**
  * Config Private VPC Default Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_private_vpc_default_route SpokeGateway#enable_private_vpc_default_route}
  */
  readonly enablePrivateVpcDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Skip Public Route Table Update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_skip_public_route_table_update SpokeGateway#enable_skip_public_route_table_update}
  */
  readonly enableSkipPublicRouteTableUpdate?: boolean | cdktf.IResolvable;
  /**
  * Enable spot instance. NOT supported for production deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_spot_instance SpokeGateway#enable_spot_instance}
  */
  readonly enableSpotInstance?: boolean | cdktf.IResolvable;
  /**
  * Enable vpc_dns_server for Gateway. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#enable_vpc_dns_server SpokeGateway#enable_vpc_dns_server}
  */
  readonly enableVpcDnsServer?: boolean | cdktf.IResolvable;
  /**
  * Fault domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#fault_domain SpokeGateway#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * A list of comma separated CIDRs to be filtered from the spoke VPC route table. When configured, filtering CIDR(s) or it’s subnet will be deleted from VPC routing tables as well as from spoke gateway’s routing table. It applies to this spoke gateway only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#filtered_spoke_vpc_routes SpokeGateway#filtered_spoke_vpc_routes}
  */
  readonly filteredSpokeVpcRoutes?: string;
  /**
  * Name of the gateway which is going to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#gw_name SpokeGateway#gw_name}
  */
  readonly gwName: string;
  /**
  * Size of the gateway instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#gw_size SpokeGateway#gw_size}
  */
  readonly gwSize: string;
  /**
  * HA availability domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_availability_domain SpokeGateway#ha_availability_domain}
  */
  readonly haAvailabilityDomain?: string;
  /**
  * The name of the public IP address and its resource group in Azure to assign to the HA Spoke Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_azure_eip_name_resource_group SpokeGateway#ha_azure_eip_name_resource_group}
  */
  readonly haAzureEipNameResourceGroup?: string;
  /**
  * Public IP address that you want assigned to the HA Spoke Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_eip SpokeGateway#ha_eip}
  */
  readonly haEip?: string;
  /**
  * HA fault domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_fault_domain SpokeGateway#ha_fault_domain}
  */
  readonly haFaultDomain?: string;
  /**
  * HA Gateway Size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_gw_size SpokeGateway#ha_gw_size}
  */
  readonly haGwSize?: string;
  /**
  * ha_image_version can be used to set the desired image version of the HA gateway. If set, we will attempt to update the gateway to the specified version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_image_version SpokeGateway#ha_image_version}
  */
  readonly haImageVersion?: string;
  /**
  * AZ of subnet being created for Insane Mode Spoke HA Gateway. Required for AWS if insane_mode is true and ha_subnet is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_insane_mode_az SpokeGateway#ha_insane_mode_az}
  */
  readonly haInsaneModeAz?: string;
  /**
  * OOB HA availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_oob_availability_zone SpokeGateway#ha_oob_availability_zone}
  */
  readonly haOobAvailabilityZone?: string;
  /**
  * OOB HA management subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_oob_management_subnet SpokeGateway#ha_oob_management_subnet}
  */
  readonly haOobManagementSubnet?: string;
  /**
  *  Private Mode HA subnet availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_private_mode_subnet_zone SpokeGateway#ha_private_mode_subnet_zone}
  */
  readonly haPrivateModeSubnetZone?: string;
  /**
  * ha_software_version can be used to set the desired software version of the HA gateway. If set, we will attempt to update the gateway to the specified version. If left blank, the gateway software version will continue to be managed through the aviatrix_controller_config resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_software_version SpokeGateway#ha_software_version}
  */
  readonly haSoftwareVersion?: string;
  /**
  * HA Subnet. Required if enabling HA for AWS/AWSGov/AWSChina/Azure/AzureChina/OCI/Alibaba Cloud. Optional if enabling HA for GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_subnet SpokeGateway#ha_subnet}
  */
  readonly haSubnet?: string;
  /**
  * IPv6 CIDR for the HA subnet. Only used if enable_ipv6 flag is set. Currently only supported on Azure and AWS Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_subnet_ipv6_cidr SpokeGateway#ha_subnet_ipv6_cidr}
  */
  readonly haSubnetIpv6Cidr?: string;
  /**
  * HA Zone. Required if enabling HA for GCP. Optional for Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#ha_zone SpokeGateway#ha_zone}
  */
  readonly haZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#id SpokeGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * image_version can be used to set the desired image version of the gateway. If set, we will attempt to update the gateway to the specified version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#image_version SpokeGateway#image_version}
  */
  readonly imageVersion?: string;
  /**
  * A list of comma separated CIDRs to be advertised to on-prem as 'Included CIDR List'. When configured, it will replace all advertised routes from this VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#included_advertised_spoke_routes SpokeGateway#included_advertised_spoke_routes}
  */
  readonly includedAdvertisedSpokeRoutes?: string;
  /**
  * Enable Insane Mode for Spoke Gateway. Valid values: true, false. Supported for AWS/AWSGov, GCP, Azure and OCI. If insane mode is enabled, gateway size has to at least be c5 size for AWS and Standard_D3_v2 size for Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#insane_mode SpokeGateway#insane_mode}
  */
  readonly insaneMode?: boolean | cdktf.IResolvable;
  /**
  * AZ of subnet being created for Insane Mode Spoke Gateway. Required if insane_mode is enabled for AWS cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#insane_mode_az SpokeGateway#insane_mode_az}
  */
  readonly insaneModeAz?: string;
  /**
  * Enable insertion gateway mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#insertion_gateway SpokeGateway#insertion_gateway}
  */
  readonly insertionGateway?: boolean | cdktf.IResolvable;
  /**
  * AZ of subnet being created for Insertion Gateway. Required if insertion_gateway is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#insertion_gateway_az SpokeGateway#insertion_gateway_az}
  */
  readonly insertionGatewayAz?: string;
  /**
  * Set the learned CIDRs approval mode for BGP Spoke Gateway. Only valid when 'enable_learned_cidrs_approval' is set to true. Currently, only 'gateway' is supported: learned CIDR approval applies to ALL connections. Default value: 'gateway'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#learned_cidrs_approval_mode SpokeGateway#learned_cidrs_approval_mode}
  */
  readonly learnedCidrsApprovalMode?: string;
  /**
  * Changes the Aviatrix BGP Spoke Gateway ASN number before you setup Aviatrix BGP Spoke Gateway connection configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#local_as_number SpokeGateway#local_as_number}
  */
  readonly localAsNumber?: string;
  /**
  * This parameter is a switch used to determine whether or not to manage spoke ha gateway using the aviatrix_spoke_gateway resource. If this is set to false, managing spoke ha gateway must be done using the aviatrix_spoke_ha_gateway resource. Valid values: true, false. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#manage_ha_gateway SpokeGateway#manage_ha_gateway}
  */
  readonly manageHaGateway?: boolean | cdktf.IResolvable;
  /**
  * A set of monitored instance ids. Only valid when 'enable_monitor_gateway_subnets' = true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#monitor_exclude_list SpokeGateway#monitor_exclude_list}
  */
  readonly monitorExcludeList?: string[];
  /**
  * OOB subnet availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#oob_availability_zone SpokeGateway#oob_availability_zone}
  */
  readonly oobAvailabilityZone?: string;
  /**
  * OOB management subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#oob_management_subnet SpokeGateway#oob_management_subnet}
  */
  readonly oobManagementSubnet?: string;
  /**
  * List of AS numbers to populate BGP AP_PATH field when it advertises to VGW or peer devices. Only valid for BGP Spoke Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#prepend_as_path SpokeGateway#prepend_as_path}
  */
  readonly prependAsPath?: string[];
  /**
  * Private Mode controller load balancer vpc_id.  Required when private mode is enabled for the Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#private_mode_lb_vpc_id SpokeGateway#private_mode_lb_vpc_id}
  */
  readonly privateModeLbVpcId?: string;
  /**
  * Subnet availability zone. Required when Private Mode is enabled on the Controller and cloud_type is AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#private_mode_subnet_zone SpokeGateway#private_mode_subnet_zone}
  */
  readonly privateModeSubnetZone?: string;
  /**
  * Gateway ethernet interface RX queue size. Supported for AWS related clouds only. Applies on HA as well if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#rx_queue_size SpokeGateway#rx_queue_size}
  */
  readonly rxQueueSize?: string;
  /**
  * Set to 'enabled' if this feature is desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#single_az_ha SpokeGateway#single_az_ha}
  */
  readonly singleAzHa?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable Source NAT feature in 'single_ip' mode on the gateway or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#single_ip_snat SpokeGateway#single_ip_snat}
  */
  readonly singleIpSnat?: boolean | cdktf.IResolvable;
  /**
  * software_version can be used to set the desired software version of the gateway. If set, we will attempt to update the gateway to the specified version. If left blank, the gateway software version will continue to be managed through the aviatrix_controller_config resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#software_version SpokeGateway#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Intended CIDR list to be advertised to external BGP router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#spoke_bgp_manual_advertise_cidrs SpokeGateway#spoke_bgp_manual_advertise_cidrs}
  */
  readonly spokeBgpManualAdvertiseCidrs?: string[];
  /**
  * Price for spot instance. NOT supported for production deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#spot_price SpokeGateway#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Public Subnet Info.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#subnet SpokeGateway#subnet}
  */
  readonly subnet: string;
  /**
  * IPv6 CIDR for the subnet. Only used if enable_ipv6 flag is set. Currently only supported on Azure and AWS Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#subnet_ipv6_cidr SpokeGateway#subnet_ipv6_cidr}
  */
  readonly subnetIpv6Cidr?: string;
  /**
  * A map of tags to assign to the spoke gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#tags SpokeGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The IPSec tunnel down detection time for the Spoke Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#tunnel_detection_time SpokeGateway#tunnel_detection_time}
  */
  readonly tunnelDetectionTime?: number;
  /**
  * Encryption ciphers for gateway peering tunnels. Config options are default (AES-126-GCM-96) or strong (AES-256-GCM-96).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#tunnel_encryption_cipher SpokeGateway#tunnel_encryption_cipher}
  */
  readonly tunnelEncryptionCipher?: string;
  /**
  * Perfect Forward Secrecy (PFS) for gateway peering tunnels. Config Options are enable/disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#tunnel_forward_secrecy SpokeGateway#tunnel_forward_secrecy}
  */
  readonly tunnelForwardSecrecy?: string;
  /**
  * VPC-ID/VNet-Name of cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#vpc_id SpokeGateway#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Region of cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#vpc_reg SpokeGateway#vpc_reg}
  */
  readonly vpcReg: string;
  /**
  * Availability Zone. Only available for Azure (8), Azure GOV (32) and Azure CHINA (2048). Must be in the form 'az-n', for example, 'az-2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#zone SpokeGateway#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway aviatrix_spoke_gateway}
*/
export class SpokeGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_spoke_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpokeGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpokeGateway to import
  * @param importFromId The id of the existing SpokeGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpokeGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_spoke_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/spoke_gateway aviatrix_spoke_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpokeGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: SpokeGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_spoke_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
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
    this._bgpNeighborStatusPollingTime = config.bgpNeighborStatusPollingTime;
    this._bgpPollingTime = config.bgpPollingTime;
    this._bgpSendCommunities = config.bgpSendCommunities;
    this._cloudType = config.cloudType;
    this._customerManagedKeys = config.customerManagedKeys;
    this._customizedSpokeVpcRoutes = config.customizedSpokeVpcRoutes;
    this._deleteSpot = config.deleteSpot;
    this._disableRoutePropagation = config.disableRoutePropagation;
    this._eip = config.eip;
    this._enableActiveStandby = config.enableActiveStandby;
    this._enableActiveStandbyPreemptive = config.enableActiveStandbyPreemptive;
    this._enableAutoAdvertiseS2CCidrs = config.enableAutoAdvertiseS2CCidrs;
    this._enableBgp = config.enableBgp;
    this._enableBgpOverLan = config.enableBgpOverLan;
    this._enableEncryptVolume = config.enableEncryptVolume;
    this._enableGlobalVpc = config.enableGlobalVpc;
    this._enableGroGso = config.enableGroGso;
    this._enableIpv6 = config.enableIpv6;
    this._enableJumboFrame = config.enableJumboFrame;
    this._enableLearnedCidrsApproval = config.enableLearnedCidrsApproval;
    this._enableMonitorGatewaySubnets = config.enableMonitorGatewaySubnets;
    this._enablePreserveAsPath = config.enablePreserveAsPath;
    this._enablePrivateOob = config.enablePrivateOob;
    this._enablePrivateVpcDefaultRoute = config.enablePrivateVpcDefaultRoute;
    this._enableSkipPublicRouteTableUpdate = config.enableSkipPublicRouteTableUpdate;
    this._enableSpotInstance = config.enableSpotInstance;
    this._enableVpcDnsServer = config.enableVpcDnsServer;
    this._faultDomain = config.faultDomain;
    this._filteredSpokeVpcRoutes = config.filteredSpokeVpcRoutes;
    this._gwName = config.gwName;
    this._gwSize = config.gwSize;
    this._haAvailabilityDomain = config.haAvailabilityDomain;
    this._haAzureEipNameResourceGroup = config.haAzureEipNameResourceGroup;
    this._haEip = config.haEip;
    this._haFaultDomain = config.haFaultDomain;
    this._haGwSize = config.haGwSize;
    this._haImageVersion = config.haImageVersion;
    this._haInsaneModeAz = config.haInsaneModeAz;
    this._haOobAvailabilityZone = config.haOobAvailabilityZone;
    this._haOobManagementSubnet = config.haOobManagementSubnet;
    this._haPrivateModeSubnetZone = config.haPrivateModeSubnetZone;
    this._haSoftwareVersion = config.haSoftwareVersion;
    this._haSubnet = config.haSubnet;
    this._haSubnetIpv6Cidr = config.haSubnetIpv6Cidr;
    this._haZone = config.haZone;
    this._id = config.id;
    this._imageVersion = config.imageVersion;
    this._includedAdvertisedSpokeRoutes = config.includedAdvertisedSpokeRoutes;
    this._insaneMode = config.insaneMode;
    this._insaneModeAz = config.insaneModeAz;
    this._insertionGateway = config.insertionGateway;
    this._insertionGatewayAz = config.insertionGatewayAz;
    this._learnedCidrsApprovalMode = config.learnedCidrsApprovalMode;
    this._localAsNumber = config.localAsNumber;
    this._manageHaGateway = config.manageHaGateway;
    this._monitorExcludeList = config.monitorExcludeList;
    this._oobAvailabilityZone = config.oobAvailabilityZone;
    this._oobManagementSubnet = config.oobManagementSubnet;
    this._prependAsPath = config.prependAsPath;
    this._privateModeLbVpcId = config.privateModeLbVpcId;
    this._privateModeSubnetZone = config.privateModeSubnetZone;
    this._rxQueueSize = config.rxQueueSize;
    this._singleAzHa = config.singleAzHa;
    this._singleIpSnat = config.singleIpSnat;
    this._softwareVersion = config.softwareVersion;
    this._spokeBgpManualAdvertiseCidrs = config.spokeBgpManualAdvertiseCidrs;
    this._spotPrice = config.spotPrice;
    this._subnet = config.subnet;
    this._subnetIpv6Cidr = config.subnetIpv6Cidr;
    this._tags = config.tags;
    this._tunnelDetectionTime = config.tunnelDetectionTime;
    this._tunnelEncryptionCipher = config.tunnelEncryptionCipher;
    this._tunnelForwardSecrecy = config.tunnelForwardSecrecy;
    this._vpcId = config.vpcId;
    this._vpcReg = config.vpcReg;
    this._zone = config.zone;
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

  // disable_route_propagation - computed: false, optional: true, required: false
  private _disableRoutePropagation?: boolean | cdktf.IResolvable; 
  public get disableRoutePropagation() {
    return this.getBooleanAttribute('disable_route_propagation');
  }
  public set disableRoutePropagation(value: boolean | cdktf.IResolvable) {
    this._disableRoutePropagation = value;
  }
  public resetDisableRoutePropagation() {
    this._disableRoutePropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRoutePropagationInput() {
    return this._disableRoutePropagation;
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

  // enable_auto_advertise_s2c_cidrs - computed: false, optional: true, required: false
  private _enableAutoAdvertiseS2CCidrs?: boolean | cdktf.IResolvable; 
  public get enableAutoAdvertiseS2CCidrs() {
    return this.getBooleanAttribute('enable_auto_advertise_s2c_cidrs');
  }
  public set enableAutoAdvertiseS2CCidrs(value: boolean | cdktf.IResolvable) {
    this._enableAutoAdvertiseS2CCidrs = value;
  }
  public resetEnableAutoAdvertiseS2CCidrs() {
    this._enableAutoAdvertiseS2CCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoAdvertiseS2CCidrsInput() {
    return this._enableAutoAdvertiseS2CCidrs;
  }

  // enable_bgp - computed: false, optional: true, required: false
  private _enableBgp?: boolean | cdktf.IResolvable; 
  public get enableBgp() {
    return this.getBooleanAttribute('enable_bgp');
  }
  public set enableBgp(value: boolean | cdktf.IResolvable) {
    this._enableBgp = value;
  }
  public resetEnableBgp() {
    this._enableBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpInput() {
    return this._enableBgp;
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

  // enable_global_vpc - computed: false, optional: true, required: false
  private _enableGlobalVpc?: boolean | cdktf.IResolvable; 
  public get enableGlobalVpc() {
    return this.getBooleanAttribute('enable_global_vpc');
  }
  public set enableGlobalVpc(value: boolean | cdktf.IResolvable) {
    this._enableGlobalVpc = value;
  }
  public resetEnableGlobalVpc() {
    this._enableGlobalVpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGlobalVpcInput() {
    return this._enableGlobalVpc;
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

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // enable_jumbo_frame - computed: false, optional: true, required: false
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

  // enable_private_vpc_default_route - computed: false, optional: true, required: false
  private _enablePrivateVpcDefaultRoute?: boolean | cdktf.IResolvable; 
  public get enablePrivateVpcDefaultRoute() {
    return this.getBooleanAttribute('enable_private_vpc_default_route');
  }
  public set enablePrivateVpcDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._enablePrivateVpcDefaultRoute = value;
  }
  public resetEnablePrivateVpcDefaultRoute() {
    this._enablePrivateVpcDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateVpcDefaultRouteInput() {
    return this._enablePrivateVpcDefaultRoute;
  }

  // enable_skip_public_route_table_update - computed: false, optional: true, required: false
  private _enableSkipPublicRouteTableUpdate?: boolean | cdktf.IResolvable; 
  public get enableSkipPublicRouteTableUpdate() {
    return this.getBooleanAttribute('enable_skip_public_route_table_update');
  }
  public set enableSkipPublicRouteTableUpdate(value: boolean | cdktf.IResolvable) {
    this._enableSkipPublicRouteTableUpdate = value;
  }
  public resetEnableSkipPublicRouteTableUpdate() {
    this._enableSkipPublicRouteTableUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSkipPublicRouteTableUpdateInput() {
    return this._enableSkipPublicRouteTableUpdate;
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

  // ha_subnet_ipv6_cidr - computed: true, optional: true, required: false
  private _haSubnetIpv6Cidr?: string; 
  public get haSubnetIpv6Cidr() {
    return this.getStringAttribute('ha_subnet_ipv6_cidr');
  }
  public set haSubnetIpv6Cidr(value: string) {
    this._haSubnetIpv6Cidr = value;
  }
  public resetHaSubnetIpv6Cidr() {
    this._haSubnetIpv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSubnetIpv6CidrInput() {
    return this._haSubnetIpv6Cidr;
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

  // included_advertised_spoke_routes - computed: false, optional: true, required: false
  private _includedAdvertisedSpokeRoutes?: string; 
  public get includedAdvertisedSpokeRoutes() {
    return this.getStringAttribute('included_advertised_spoke_routes');
  }
  public set includedAdvertisedSpokeRoutes(value: string) {
    this._includedAdvertisedSpokeRoutes = value;
  }
  public resetIncludedAdvertisedSpokeRoutes() {
    this._includedAdvertisedSpokeRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedAdvertisedSpokeRoutesInput() {
    return this._includedAdvertisedSpokeRoutes;
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

  // insertion_gateway - computed: false, optional: true, required: false
  private _insertionGateway?: boolean | cdktf.IResolvable; 
  public get insertionGateway() {
    return this.getBooleanAttribute('insertion_gateway');
  }
  public set insertionGateway(value: boolean | cdktf.IResolvable) {
    this._insertionGateway = value;
  }
  public resetInsertionGateway() {
    this._insertionGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertionGatewayInput() {
    return this._insertionGateway;
  }

  // insertion_gateway_az - computed: false, optional: true, required: false
  private _insertionGatewayAz?: string; 
  public get insertionGatewayAz() {
    return this.getStringAttribute('insertion_gateway_az');
  }
  public set insertionGatewayAz(value: string) {
    this._insertionGatewayAz = value;
  }
  public resetInsertionGatewayAz() {
    this._insertionGatewayAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertionGatewayAzInput() {
    return this._insertionGatewayAz;
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

  // manage_ha_gateway - computed: false, optional: true, required: false
  private _manageHaGateway?: boolean | cdktf.IResolvable; 
  public get manageHaGateway() {
    return this.getBooleanAttribute('manage_ha_gateway');
  }
  public set manageHaGateway(value: boolean | cdktf.IResolvable) {
    this._manageHaGateway = value;
  }
  public resetManageHaGateway() {
    this._manageHaGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageHaGatewayInput() {
    return this._manageHaGateway;
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

  // spoke_bgp_manual_advertise_cidrs - computed: false, optional: true, required: false
  private _spokeBgpManualAdvertiseCidrs?: string[]; 
  public get spokeBgpManualAdvertiseCidrs() {
    return this.getListAttribute('spoke_bgp_manual_advertise_cidrs');
  }
  public set spokeBgpManualAdvertiseCidrs(value: string[]) {
    this._spokeBgpManualAdvertiseCidrs = value;
  }
  public resetSpokeBgpManualAdvertiseCidrs() {
    this._spokeBgpManualAdvertiseCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeBgpManualAdvertiseCidrsInput() {
    return this._spokeBgpManualAdvertiseCidrs;
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

  // subnet_ipv6_cidr - computed: true, optional: true, required: false
  private _subnetIpv6Cidr?: string; 
  public get subnetIpv6Cidr() {
    return this.getStringAttribute('subnet_ipv6_cidr');
  }
  public set subnetIpv6Cidr(value: string) {
    this._subnetIpv6Cidr = value;
  }
  public resetSubnetIpv6Cidr() {
    this._subnetIpv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6CidrInput() {
    return this._subnetIpv6Cidr;
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

  // tunnel_encryption_cipher - computed: false, optional: true, required: false
  private _tunnelEncryptionCipher?: string; 
  public get tunnelEncryptionCipher() {
    return this.getStringAttribute('tunnel_encryption_cipher');
  }
  public set tunnelEncryptionCipher(value: string) {
    this._tunnelEncryptionCipher = value;
  }
  public resetTunnelEncryptionCipher() {
    this._tunnelEncryptionCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEncryptionCipherInput() {
    return this._tunnelEncryptionCipher;
  }

  // tunnel_forward_secrecy - computed: false, optional: true, required: false
  private _tunnelForwardSecrecy?: string; 
  public get tunnelForwardSecrecy() {
    return this.getStringAttribute('tunnel_forward_secrecy');
  }
  public set tunnelForwardSecrecy(value: string) {
    this._tunnelForwardSecrecy = value;
  }
  public resetTunnelForwardSecrecy() {
    this._tunnelForwardSecrecy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelForwardSecrecyInput() {
    return this._tunnelForwardSecrecy;
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

  // vpc_reg - computed: false, optional: false, required: true
  private _vpcReg?: string; 
  public get vpcReg() {
    return this.getStringAttribute('vpc_reg');
  }
  public set vpcReg(value: string) {
    this._vpcReg = value;
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
      bgp_neighbor_status_polling_time: cdktf.numberToTerraform(this._bgpNeighborStatusPollingTime),
      bgp_polling_time: cdktf.numberToTerraform(this._bgpPollingTime),
      bgp_send_communities: cdktf.booleanToTerraform(this._bgpSendCommunities),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      customer_managed_keys: cdktf.stringToTerraform(this._customerManagedKeys),
      customized_spoke_vpc_routes: cdktf.stringToTerraform(this._customizedSpokeVpcRoutes),
      delete_spot: cdktf.booleanToTerraform(this._deleteSpot),
      disable_route_propagation: cdktf.booleanToTerraform(this._disableRoutePropagation),
      eip: cdktf.stringToTerraform(this._eip),
      enable_active_standby: cdktf.booleanToTerraform(this._enableActiveStandby),
      enable_active_standby_preemptive: cdktf.booleanToTerraform(this._enableActiveStandbyPreemptive),
      enable_auto_advertise_s2c_cidrs: cdktf.booleanToTerraform(this._enableAutoAdvertiseS2CCidrs),
      enable_bgp: cdktf.booleanToTerraform(this._enableBgp),
      enable_bgp_over_lan: cdktf.booleanToTerraform(this._enableBgpOverLan),
      enable_encrypt_volume: cdktf.booleanToTerraform(this._enableEncryptVolume),
      enable_global_vpc: cdktf.booleanToTerraform(this._enableGlobalVpc),
      enable_gro_gso: cdktf.booleanToTerraform(this._enableGroGso),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      enable_jumbo_frame: cdktf.booleanToTerraform(this._enableJumboFrame),
      enable_learned_cidrs_approval: cdktf.booleanToTerraform(this._enableLearnedCidrsApproval),
      enable_monitor_gateway_subnets: cdktf.booleanToTerraform(this._enableMonitorGatewaySubnets),
      enable_preserve_as_path: cdktf.booleanToTerraform(this._enablePreserveAsPath),
      enable_private_oob: cdktf.booleanToTerraform(this._enablePrivateOob),
      enable_private_vpc_default_route: cdktf.booleanToTerraform(this._enablePrivateVpcDefaultRoute),
      enable_skip_public_route_table_update: cdktf.booleanToTerraform(this._enableSkipPublicRouteTableUpdate),
      enable_spot_instance: cdktf.booleanToTerraform(this._enableSpotInstance),
      enable_vpc_dns_server: cdktf.booleanToTerraform(this._enableVpcDnsServer),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      filtered_spoke_vpc_routes: cdktf.stringToTerraform(this._filteredSpokeVpcRoutes),
      gw_name: cdktf.stringToTerraform(this._gwName),
      gw_size: cdktf.stringToTerraform(this._gwSize),
      ha_availability_domain: cdktf.stringToTerraform(this._haAvailabilityDomain),
      ha_azure_eip_name_resource_group: cdktf.stringToTerraform(this._haAzureEipNameResourceGroup),
      ha_eip: cdktf.stringToTerraform(this._haEip),
      ha_fault_domain: cdktf.stringToTerraform(this._haFaultDomain),
      ha_gw_size: cdktf.stringToTerraform(this._haGwSize),
      ha_image_version: cdktf.stringToTerraform(this._haImageVersion),
      ha_insane_mode_az: cdktf.stringToTerraform(this._haInsaneModeAz),
      ha_oob_availability_zone: cdktf.stringToTerraform(this._haOobAvailabilityZone),
      ha_oob_management_subnet: cdktf.stringToTerraform(this._haOobManagementSubnet),
      ha_private_mode_subnet_zone: cdktf.stringToTerraform(this._haPrivateModeSubnetZone),
      ha_software_version: cdktf.stringToTerraform(this._haSoftwareVersion),
      ha_subnet: cdktf.stringToTerraform(this._haSubnet),
      ha_subnet_ipv6_cidr: cdktf.stringToTerraform(this._haSubnetIpv6Cidr),
      ha_zone: cdktf.stringToTerraform(this._haZone),
      id: cdktf.stringToTerraform(this._id),
      image_version: cdktf.stringToTerraform(this._imageVersion),
      included_advertised_spoke_routes: cdktf.stringToTerraform(this._includedAdvertisedSpokeRoutes),
      insane_mode: cdktf.booleanToTerraform(this._insaneMode),
      insane_mode_az: cdktf.stringToTerraform(this._insaneModeAz),
      insertion_gateway: cdktf.booleanToTerraform(this._insertionGateway),
      insertion_gateway_az: cdktf.stringToTerraform(this._insertionGatewayAz),
      learned_cidrs_approval_mode: cdktf.stringToTerraform(this._learnedCidrsApprovalMode),
      local_as_number: cdktf.stringToTerraform(this._localAsNumber),
      manage_ha_gateway: cdktf.booleanToTerraform(this._manageHaGateway),
      monitor_exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorExcludeList),
      oob_availability_zone: cdktf.stringToTerraform(this._oobAvailabilityZone),
      oob_management_subnet: cdktf.stringToTerraform(this._oobManagementSubnet),
      prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prependAsPath),
      private_mode_lb_vpc_id: cdktf.stringToTerraform(this._privateModeLbVpcId),
      private_mode_subnet_zone: cdktf.stringToTerraform(this._privateModeSubnetZone),
      rx_queue_size: cdktf.stringToTerraform(this._rxQueueSize),
      single_az_ha: cdktf.booleanToTerraform(this._singleAzHa),
      single_ip_snat: cdktf.booleanToTerraform(this._singleIpSnat),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      spoke_bgp_manual_advertise_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spokeBgpManualAdvertiseCidrs),
      spot_price: cdktf.stringToTerraform(this._spotPrice),
      subnet: cdktf.stringToTerraform(this._subnet),
      subnet_ipv6_cidr: cdktf.stringToTerraform(this._subnetIpv6Cidr),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tunnel_detection_time: cdktf.numberToTerraform(this._tunnelDetectionTime),
      tunnel_encryption_cipher: cdktf.stringToTerraform(this._tunnelEncryptionCipher),
      tunnel_forward_secrecy: cdktf.stringToTerraform(this._tunnelForwardSecrecy),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_reg: cdktf.stringToTerraform(this._vpcReg),
      zone: cdktf.stringToTerraform(this._zone),
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
      delete_spot: {
        value: cdktf.booleanToHclTerraform(this._deleteSpot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_route_propagation: {
        value: cdktf.booleanToHclTerraform(this._disableRoutePropagation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      enable_auto_advertise_s2c_cidrs: {
        value: cdktf.booleanToHclTerraform(this._enableAutoAdvertiseS2CCidrs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_bgp: {
        value: cdktf.booleanToHclTerraform(this._enableBgp),
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
      enable_encrypt_volume: {
        value: cdktf.booleanToHclTerraform(this._enableEncryptVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_global_vpc: {
        value: cdktf.booleanToHclTerraform(this._enableGlobalVpc),
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
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
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
      enable_private_vpc_default_route: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateVpcDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_skip_public_route_table_update: {
        value: cdktf.booleanToHclTerraform(this._enableSkipPublicRouteTableUpdate),
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
      enable_vpc_dns_server: {
        value: cdktf.booleanToHclTerraform(this._enableVpcDnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      ha_subnet_ipv6_cidr: {
        value: cdktf.stringToHclTerraform(this._haSubnetIpv6Cidr),
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
      included_advertised_spoke_routes: {
        value: cdktf.stringToHclTerraform(this._includedAdvertisedSpokeRoutes),
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
      insertion_gateway: {
        value: cdktf.booleanToHclTerraform(this._insertionGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insertion_gateway_az: {
        value: cdktf.stringToHclTerraform(this._insertionGatewayAz),
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
      manage_ha_gateway: {
        value: cdktf.booleanToHclTerraform(this._manageHaGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      spoke_bgp_manual_advertise_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spokeBgpManualAdvertiseCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      subnet_ipv6_cidr: {
        value: cdktf.stringToHclTerraform(this._subnetIpv6Cidr),
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
      tunnel_encryption_cipher: {
        value: cdktf.stringToHclTerraform(this._tunnelEncryptionCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_forward_secrecy: {
        value: cdktf.stringToHclTerraform(this._tunnelForwardSecrecy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
