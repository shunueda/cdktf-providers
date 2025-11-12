// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account name. This account will be used to launch Aviatrix gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#account_name Gateway#account_name}
  */
  readonly accountName: string;
  /**
  * A list of destination CIDR ranges that will also go through the VPN tunnel when Split Tunnel Mode is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#additional_cidrs Gateway#additional_cidrs}
  */
  readonly additionalCidrs?: string;
  /**
  * A list of CIDR ranges separated by comma to configure when 'designated_gateway' feature is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#additional_cidrs_designated_gateway Gateway#additional_cidrs_designated_gateway}
  */
  readonly additionalCidrsDesignatedGateway?: string;
  /**
  * When value is false, reuse an idle address in Elastic IP pool for this gateway. Otherwise, allocate a new Elastic IP and use it for this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#allocate_new_eip Gateway#allocate_new_eip}
  */
  readonly allocateNewEip?: boolean | cdktf.IResolvable;
  /**
  * Availability domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#availability_domain Gateway#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * The name of the public IP address and its resource group in Azure to assign to this Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#azure_eip_name_resource_group Gateway#azure_eip_name_resource_group}
  */
  readonly azureEipNameResourceGroup?: string;
  /**
  * Type of cloud service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#cloud_type Gateway#cloud_type}
  */
  readonly cloudType: number;
  /**
  * Customer managed key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#customer_managed_keys Gateway#customer_managed_keys}
  */
  readonly customerManagedKeys?: string;
  /**
  * If set true, the spot instance will be deleted on eviction. Otherwise, the instance will be deallocated on eviction. Only supports Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#delete_spot Gateway#delete_spot}
  */
  readonly deleteSpot?: boolean | cdktf.IResolvable;
  /**
  * API hostname for DUO auth mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#duo_api_hostname Gateway#duo_api_hostname}
  */
  readonly duoApiHostname?: string;
  /**
  * Integration key for DUO auth mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#duo_integration_key Gateway#duo_integration_key}
  */
  readonly duoIntegrationKey?: string;
  /**
  * Push mode for DUO auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#duo_push_mode Gateway#duo_push_mode}
  */
  readonly duoPushMode?: string;
  /**
  * Secret key for DUO auth mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#duo_secret_key Gateway#duo_secret_key}
  */
  readonly duoSecretKey?: string;
  /**
  * Required when allocate_new_eip is false. It uses specified EIP for this gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#eip Gateway#eip}
  */
  readonly eip?: string;
  /**
  * A name for the ELB that is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#elb_name Gateway#elb_name}
  */
  readonly elbName?: string;
  /**
  * Enable 'designated_gateway' feature for Gateway. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_designated_gateway Gateway#enable_designated_gateway}
  */
  readonly enableDesignatedGateway?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable ELB or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_elb Gateway#enable_elb}
  */
  readonly enableElb?: boolean | cdktf.IResolvable;
  /**
  * Enable encrypt gateway EBS volume. Only supported for AWS provider. Valid values: true, false. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_encrypt_volume Gateway#enable_encrypt_volume}
  */
  readonly enableEncryptVolume?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to disable GRO/GSO or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_gro_gso Gateway#enable_gro_gso}
  */
  readonly enableGroGso?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo frame support for Gateway. Valid values: true or false. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_jumbo_frame Gateway#enable_jumbo_frame}
  */
  readonly enableJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable LDAP or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_ldap Gateway#enable_ldap}
  */
  readonly enableLdap?: boolean | cdktf.IResolvable;
  /**
  * Enable monitor gateway subnets. Valid values: true, false. Default value: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_monitor_gateway_subnets Gateway#enable_monitor_gateway_subnets}
  */
  readonly enableMonitorGatewaySubnets?: boolean | cdktf.IResolvable;
  /**
  * Create a [Public Subnet Filtering gateway](https://docs.aviatrix.com/HowTos/public_subnet_filtering_faq.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_public_subnet_filtering Gateway#enable_public_subnet_filtering}
  */
  readonly enablePublicSubnetFiltering?: boolean | cdktf.IResolvable;
  /**
  * Enable spot instance. NOT supported for production deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_spot_instance Gateway#enable_spot_instance}
  */
  readonly enableSpotInstance?: boolean | cdktf.IResolvable;
  /**
  * Enable vpc_dns_server for Gateway. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_vpc_dns_server Gateway#enable_vpc_dns_server}
  */
  readonly enableVpcDnsServer?: boolean | cdktf.IResolvable;
  /**
  * This field indicates whether to enable VPN NAT or not. Only supported for VPN gateway. Valid values: true, false. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#enable_vpn_nat Gateway#enable_vpn_nat}
  */
  readonly enableVpnNat?: boolean | cdktf.IResolvable;
  /**
  * Fault domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#fault_domain Gateway#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * FQDN gateway lan interface cidr.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#fqdn_lan_cidr Gateway#fqdn_lan_cidr}
  */
  readonly fqdnLanCidr?: string;
  /**
  * LAN VPC ID. Only used for GCP FQDN Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#fqdn_lan_vpc_id Gateway#fqdn_lan_vpc_id}
  */
  readonly fqdnLanVpcId?: string;
  /**
  * Aviatrix gateway unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#gw_name Gateway#gw_name}
  */
  readonly gwName: string;
  /**
  * Size of Gateway Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#gw_size Gateway#gw_size}
  */
  readonly gwSize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#id Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Typed value when modifying idle_timeout. If it's -1, this feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#idle_timeout Gateway#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * image_version can be used to set the desired image version of the gateway. If set, we will attempt to update the gateway to the specified version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#image_version Gateway#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Enable Insane Mode for Gateway. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#insane_mode Gateway#insane_mode}
  */
  readonly insaneMode?: boolean | cdktf.IResolvable;
  /**
  * AZ of subnet being created for Insane Mode Gateway. Required if insane_mode is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#insane_mode_az Gateway#insane_mode_az}
  */
  readonly insaneModeAz?: string;
  /**
  * LDAP base DN. Required: Yes if enable_ldap is 'yes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#ldap_base_dn Gateway#ldap_base_dn}
  */
  readonly ldapBaseDn?: string;
  /**
  * LDAP bind DN. Required: Yes if enable_ldap is 'yes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#ldap_bind_dn Gateway#ldap_bind_dn}
  */
  readonly ldapBindDn?: string;
  /**
  * LDAP password. Required: Yes if enable_ldap is 'yes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#ldap_password Gateway#ldap_password}
  */
  readonly ldapPassword?: string;
  /**
  * LDAP server address. Required: Yes if enable_ldap is 'yes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#ldap_server Gateway#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * LDAP user attribute. Required: Yes if enable_ldap is 'yes'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#ldap_username_attribute Gateway#ldap_username_attribute}
  */
  readonly ldapUsernameAttribute?: string;
  /**
  * Maximum connection of VPN access. Valid for VPN gateway only. If not set, '100' will be default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#max_vpn_conn Gateway#max_vpn_conn}
  */
  readonly maxVpnConn?: string;
  /**
  * A set of monitored instance ids. Only valid when 'enable_monitor_gateway_subnets' = true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#monitor_exclude_list Gateway#monitor_exclude_list}
  */
  readonly monitorExcludeList?: string[];
  /**
  * A list of DNS servers used to resolve domain names by a connected VPN user when Split Tunnel Mode is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#name_servers Gateway#name_servers}
  */
  readonly nameServers?: string;
  /**
  * Token for Okta auth mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#okta_token Gateway#okta_token}
  */
  readonly oktaToken?: string;
  /**
  * URL for Okta auth mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#okta_url Gateway#okta_url}
  */
  readonly oktaUrl?: string;
  /**
  * Username suffix for Okta auth mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#okta_username_suffix Gateway#okta_username_suffix}
  */
  readonly oktaUsernameSuffix?: string;
  /**
  * Two step authentication mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#otp_mode Gateway#otp_mode}
  */
  readonly otpMode?: string;
  /**
  * Peering HA availability domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_availability_domain Gateway#peering_ha_availability_domain}
  */
  readonly peeringHaAvailabilityDomain?: string;
  /**
  * The name of the public IP address and its resource group in Azure to assign to the Peering HA Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_azure_eip_name_resource_group Gateway#peering_ha_azure_eip_name_resource_group}
  */
  readonly peeringHaAzureEipNameResourceGroup?: string;
  /**
  * Public IP address that you want assigned to the HA peering instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_eip Gateway#peering_ha_eip}
  */
  readonly peeringHaEip?: string;
  /**
  * Peering HA fault domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_fault_domain Gateway#peering_ha_fault_domain}
  */
  readonly peeringHaFaultDomain?: string;
  /**
  * Peering HA Gateway Size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_gw_size Gateway#peering_ha_gw_size}
  */
  readonly peeringHaGwSize?: string;
  /**
  * peering_ha_image_version can be used to set the desired image version of the HA gateway. If set, we will attempt to update the gateway to the specified version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_image_version Gateway#peering_ha_image_version}
  */
  readonly peeringHaImageVersion?: string;
  /**
  * AZ of subnet being created for Insane Mode Peering HA Gateway. Required if insane_mode is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_insane_mode_az Gateway#peering_ha_insane_mode_az}
  */
  readonly peeringHaInsaneModeAz?: string;
  /**
  * peering_ha_software_version can be used to set the desired software version of the HA gateway. If set, we will attempt to update the gateway to the specified version. If left blank, the gateway software version will continue to be managed through the aviatrix_controller_config resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_software_version Gateway#peering_ha_software_version}
  */
  readonly peeringHaSoftwareVersion?: string;
  /**
  * Public Subnet Information while creating Peering HA Gateway, only subnet is accepted. Required to create peering ha gateway if cloud_type = 1 or 8 (AWS or Azure). Optional if cloud_type = 4 (GCP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_subnet Gateway#peering_ha_subnet}
  */
  readonly peeringHaSubnet?: string;
  /**
  * Zone information for creating Peering HA Gateway. Required to create peering ha gateway if cloud_type = 4 (GCP). Optional for cloud_type = 8 (Azure).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#peering_ha_zone Gateway#peering_ha_zone}
  */
  readonly peeringHaZone?: string;
  /**
  * Whether to enforce Guard Duty IP blocking. Required when `enable_public_subnet_filtering` attribute is true. Valid values: true or false. Default value: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#public_subnet_filtering_guard_duty_enforced Gateway#public_subnet_filtering_guard_duty_enforced}
  */
  readonly publicSubnetFilteringGuardDutyEnforced?: boolean | cdktf.IResolvable;
  /**
  * Route tables whose associated public subnets are protected for the HA PSF gateway. Required when enable_public_subnet_filtering and peering_ha_subnet are set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#public_subnet_filtering_ha_route_tables Gateway#public_subnet_filtering_ha_route_tables}
  */
  readonly publicSubnetFilteringHaRouteTables?: string[];
  /**
  * Route tables whose associated public subnets are protected. Required when `enable_public_subnet_filtering` attribute is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#public_subnet_filtering_route_tables Gateway#public_subnet_filtering_route_tables}
  */
  readonly publicSubnetFilteringRouteTables?: string[];
  /**
  * Typed value when modifying renegotiation_interval. If it's -1, this feature is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#renegotiation_interval Gateway#renegotiation_interval}
  */
  readonly renegotiationInterval?: number;
  /**
  * Gateway ethernet interface RX queue size. Supported for AWS related clouds only. Applies on HA as well if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#rx_queue_size Gateway#rx_queue_size}
  */
  readonly rxQueueSize?: string;
  /**
  * This field indicates whether to enable SAML or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#saml_enabled Gateway#saml_enabled}
  */
  readonly samlEnabled?: boolean | cdktf.IResolvable;
  /**
  * A list of domain names that will use the NameServer when a specific name is not in the destination when Split Tunnel Mode is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#search_domains Gateway#search_domains}
  */
  readonly searchDomains?: string;
  /**
  * Set to true if this feature is desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#single_az_ha Gateway#single_az_ha}
  */
  readonly singleAzHa?: boolean | cdktf.IResolvable;
  /**
  * Enable Source NAT for this container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#single_ip_snat Gateway#single_ip_snat}
  */
  readonly singleIpSnat?: boolean | cdktf.IResolvable;
  /**
  * software_version can be used to set the desired software version of the gateway. If set, we will attempt to update the gateway to the specified version. If left blank, the gateway software version will continue to be managed through the aviatrix_controller_config resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#software_version Gateway#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Specify split tunnel mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#split_tunnel Gateway#split_tunnel}
  */
  readonly splitTunnel?: boolean | cdktf.IResolvable;
  /**
  * Price for spot instance. NOT supported for production deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#spot_price Gateway#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * A VPC Network address range selected from one of the available network ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#subnet Gateway#subnet}
  */
  readonly subnet: string;
  /**
  * A map of tags to assign to the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#tags Gateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The IPSec tunnel down detection time for the Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#tunnel_detection_time Gateway#tunnel_detection_time}
  */
  readonly tunnelDetectionTime?: number;
  /**
  * ID of legacy VPC/Vnet to be connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#vpc_id Gateway#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Region where this gateway will be launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#vpc_reg Gateway#vpc_reg}
  */
  readonly vpcReg: string;
  /**
  * Enable user access through VPN to this container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#vpn_access Gateway#vpn_access}
  */
  readonly vpnAccess?: boolean | cdktf.IResolvable;
  /**
  * VPN CIDR block for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#vpn_cidr Gateway#vpn_cidr}
  */
  readonly vpnCidr?: string;
  /**
  * Elb protocol for VPN gateway with elb enabled. Only supports AWS provider. Valid values: 'TCP', 'UDP'. If not specified, 'TCP'' will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#vpn_protocol Gateway#vpn_protocol}
  */
  readonly vpnProtocol?: string;
  /**
  * Availability Zone. Only available for Azure (8), Azure GOV (32), Azure CHINA (2048) and Public Subnet Filtering gateway. Must be in the form 'az-n', for example, 'az-2'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#zone Gateway#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway aviatrix_gateway}
*/
export class Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gateway to import
  * @param importFromId The id of the existing Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/gateway aviatrix_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_gateway',
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
    this._additionalCidrs = config.additionalCidrs;
    this._additionalCidrsDesignatedGateway = config.additionalCidrsDesignatedGateway;
    this._allocateNewEip = config.allocateNewEip;
    this._availabilityDomain = config.availabilityDomain;
    this._azureEipNameResourceGroup = config.azureEipNameResourceGroup;
    this._cloudType = config.cloudType;
    this._customerManagedKeys = config.customerManagedKeys;
    this._deleteSpot = config.deleteSpot;
    this._duoApiHostname = config.duoApiHostname;
    this._duoIntegrationKey = config.duoIntegrationKey;
    this._duoPushMode = config.duoPushMode;
    this._duoSecretKey = config.duoSecretKey;
    this._eip = config.eip;
    this._elbName = config.elbName;
    this._enableDesignatedGateway = config.enableDesignatedGateway;
    this._enableElb = config.enableElb;
    this._enableEncryptVolume = config.enableEncryptVolume;
    this._enableGroGso = config.enableGroGso;
    this._enableJumboFrame = config.enableJumboFrame;
    this._enableLdap = config.enableLdap;
    this._enableMonitorGatewaySubnets = config.enableMonitorGatewaySubnets;
    this._enablePublicSubnetFiltering = config.enablePublicSubnetFiltering;
    this._enableSpotInstance = config.enableSpotInstance;
    this._enableVpcDnsServer = config.enableVpcDnsServer;
    this._enableVpnNat = config.enableVpnNat;
    this._faultDomain = config.faultDomain;
    this._fqdnLanCidr = config.fqdnLanCidr;
    this._fqdnLanVpcId = config.fqdnLanVpcId;
    this._gwName = config.gwName;
    this._gwSize = config.gwSize;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._imageVersion = config.imageVersion;
    this._insaneMode = config.insaneMode;
    this._insaneModeAz = config.insaneModeAz;
    this._ldapBaseDn = config.ldapBaseDn;
    this._ldapBindDn = config.ldapBindDn;
    this._ldapPassword = config.ldapPassword;
    this._ldapServer = config.ldapServer;
    this._ldapUsernameAttribute = config.ldapUsernameAttribute;
    this._maxVpnConn = config.maxVpnConn;
    this._monitorExcludeList = config.monitorExcludeList;
    this._nameServers = config.nameServers;
    this._oktaToken = config.oktaToken;
    this._oktaUrl = config.oktaUrl;
    this._oktaUsernameSuffix = config.oktaUsernameSuffix;
    this._otpMode = config.otpMode;
    this._peeringHaAvailabilityDomain = config.peeringHaAvailabilityDomain;
    this._peeringHaAzureEipNameResourceGroup = config.peeringHaAzureEipNameResourceGroup;
    this._peeringHaEip = config.peeringHaEip;
    this._peeringHaFaultDomain = config.peeringHaFaultDomain;
    this._peeringHaGwSize = config.peeringHaGwSize;
    this._peeringHaImageVersion = config.peeringHaImageVersion;
    this._peeringHaInsaneModeAz = config.peeringHaInsaneModeAz;
    this._peeringHaSoftwareVersion = config.peeringHaSoftwareVersion;
    this._peeringHaSubnet = config.peeringHaSubnet;
    this._peeringHaZone = config.peeringHaZone;
    this._publicSubnetFilteringGuardDutyEnforced = config.publicSubnetFilteringGuardDutyEnforced;
    this._publicSubnetFilteringHaRouteTables = config.publicSubnetFilteringHaRouteTables;
    this._publicSubnetFilteringRouteTables = config.publicSubnetFilteringRouteTables;
    this._renegotiationInterval = config.renegotiationInterval;
    this._rxQueueSize = config.rxQueueSize;
    this._samlEnabled = config.samlEnabled;
    this._searchDomains = config.searchDomains;
    this._singleAzHa = config.singleAzHa;
    this._singleIpSnat = config.singleIpSnat;
    this._softwareVersion = config.softwareVersion;
    this._splitTunnel = config.splitTunnel;
    this._spotPrice = config.spotPrice;
    this._subnet = config.subnet;
    this._tags = config.tags;
    this._tunnelDetectionTime = config.tunnelDetectionTime;
    this._vpcId = config.vpcId;
    this._vpcReg = config.vpcReg;
    this._vpnAccess = config.vpnAccess;
    this._vpnCidr = config.vpnCidr;
    this._vpnProtocol = config.vpnProtocol;
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

  // additional_cidrs - computed: false, optional: true, required: false
  private _additionalCidrs?: string; 
  public get additionalCidrs() {
    return this.getStringAttribute('additional_cidrs');
  }
  public set additionalCidrs(value: string) {
    this._additionalCidrs = value;
  }
  public resetAdditionalCidrs() {
    this._additionalCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCidrsInput() {
    return this._additionalCidrs;
  }

  // additional_cidrs_designated_gateway - computed: false, optional: true, required: false
  private _additionalCidrsDesignatedGateway?: string; 
  public get additionalCidrsDesignatedGateway() {
    return this.getStringAttribute('additional_cidrs_designated_gateway');
  }
  public set additionalCidrsDesignatedGateway(value: string) {
    this._additionalCidrsDesignatedGateway = value;
  }
  public resetAdditionalCidrsDesignatedGateway() {
    this._additionalCidrsDesignatedGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCidrsDesignatedGatewayInput() {
    return this._additionalCidrsDesignatedGateway;
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

  // duo_api_hostname - computed: false, optional: true, required: false
  private _duoApiHostname?: string; 
  public get duoApiHostname() {
    return this.getStringAttribute('duo_api_hostname');
  }
  public set duoApiHostname(value: string) {
    this._duoApiHostname = value;
  }
  public resetDuoApiHostname() {
    this._duoApiHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoApiHostnameInput() {
    return this._duoApiHostname;
  }

  // duo_integration_key - computed: false, optional: true, required: false
  private _duoIntegrationKey?: string; 
  public get duoIntegrationKey() {
    return this.getStringAttribute('duo_integration_key');
  }
  public set duoIntegrationKey(value: string) {
    this._duoIntegrationKey = value;
  }
  public resetDuoIntegrationKey() {
    this._duoIntegrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoIntegrationKeyInput() {
    return this._duoIntegrationKey;
  }

  // duo_push_mode - computed: false, optional: true, required: false
  private _duoPushMode?: string; 
  public get duoPushMode() {
    return this.getStringAttribute('duo_push_mode');
  }
  public set duoPushMode(value: string) {
    this._duoPushMode = value;
  }
  public resetDuoPushMode() {
    this._duoPushMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoPushModeInput() {
    return this._duoPushMode;
  }

  // duo_secret_key - computed: false, optional: true, required: false
  private _duoSecretKey?: string; 
  public get duoSecretKey() {
    return this.getStringAttribute('duo_secret_key');
  }
  public set duoSecretKey(value: string) {
    this._duoSecretKey = value;
  }
  public resetDuoSecretKey() {
    this._duoSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoSecretKeyInput() {
    return this._duoSecretKey;
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

  // elb_dns_name - computed: true, optional: false, required: false
  public get elbDnsName() {
    return this.getStringAttribute('elb_dns_name');
  }

  // elb_name - computed: true, optional: true, required: false
  private _elbName?: string; 
  public get elbName() {
    return this.getStringAttribute('elb_name');
  }
  public set elbName(value: string) {
    this._elbName = value;
  }
  public resetElbName() {
    this._elbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbNameInput() {
    return this._elbName;
  }

  // enable_designated_gateway - computed: false, optional: true, required: false
  private _enableDesignatedGateway?: boolean | cdktf.IResolvable; 
  public get enableDesignatedGateway() {
    return this.getBooleanAttribute('enable_designated_gateway');
  }
  public set enableDesignatedGateway(value: boolean | cdktf.IResolvable) {
    this._enableDesignatedGateway = value;
  }
  public resetEnableDesignatedGateway() {
    this._enableDesignatedGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDesignatedGatewayInput() {
    return this._enableDesignatedGateway;
  }

  // enable_elb - computed: false, optional: true, required: false
  private _enableElb?: boolean | cdktf.IResolvable; 
  public get enableElb() {
    return this.getBooleanAttribute('enable_elb');
  }
  public set enableElb(value: boolean | cdktf.IResolvable) {
    this._enableElb = value;
  }
  public resetEnableElb() {
    this._enableElb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableElbInput() {
    return this._enableElb;
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

  // enable_ldap - computed: false, optional: true, required: false
  private _enableLdap?: boolean | cdktf.IResolvable; 
  public get enableLdap() {
    return this.getBooleanAttribute('enable_ldap');
  }
  public set enableLdap(value: boolean | cdktf.IResolvable) {
    this._enableLdap = value;
  }
  public resetEnableLdap() {
    this._enableLdap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLdapInput() {
    return this._enableLdap;
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

  // enable_public_subnet_filtering - computed: false, optional: true, required: false
  private _enablePublicSubnetFiltering?: boolean | cdktf.IResolvable; 
  public get enablePublicSubnetFiltering() {
    return this.getBooleanAttribute('enable_public_subnet_filtering');
  }
  public set enablePublicSubnetFiltering(value: boolean | cdktf.IResolvable) {
    this._enablePublicSubnetFiltering = value;
  }
  public resetEnablePublicSubnetFiltering() {
    this._enablePublicSubnetFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicSubnetFilteringInput() {
    return this._enablePublicSubnetFiltering;
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

  // enable_vpn_nat - computed: false, optional: true, required: false
  private _enableVpnNat?: boolean | cdktf.IResolvable; 
  public get enableVpnNat() {
    return this.getBooleanAttribute('enable_vpn_nat');
  }
  public set enableVpnNat(value: boolean | cdktf.IResolvable) {
    this._enableVpnNat = value;
  }
  public resetEnableVpnNat() {
    this._enableVpnNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVpnNatInput() {
    return this._enableVpnNat;
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

  // fqdn_lan_cidr - computed: false, optional: true, required: false
  private _fqdnLanCidr?: string; 
  public get fqdnLanCidr() {
    return this.getStringAttribute('fqdn_lan_cidr');
  }
  public set fqdnLanCidr(value: string) {
    this._fqdnLanCidr = value;
  }
  public resetFqdnLanCidr() {
    this._fqdnLanCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLanCidrInput() {
    return this._fqdnLanCidr;
  }

  // fqdn_lan_interface - computed: true, optional: false, required: false
  public get fqdnLanInterface() {
    return this.getStringAttribute('fqdn_lan_interface');
  }

  // fqdn_lan_vpc_id - computed: false, optional: true, required: false
  private _fqdnLanVpcId?: string; 
  public get fqdnLanVpcId() {
    return this.getStringAttribute('fqdn_lan_vpc_id');
  }
  public set fqdnLanVpcId(value: string) {
    this._fqdnLanVpcId = value;
  }
  public resetFqdnLanVpcId() {
    this._fqdnLanVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnLanVpcIdInput() {
    return this._fqdnLanVpcId;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
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

  // ldap_base_dn - computed: false, optional: true, required: false
  private _ldapBaseDn?: string; 
  public get ldapBaseDn() {
    return this.getStringAttribute('ldap_base_dn');
  }
  public set ldapBaseDn(value: string) {
    this._ldapBaseDn = value;
  }
  public resetLdapBaseDn() {
    this._ldapBaseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBaseDnInput() {
    return this._ldapBaseDn;
  }

  // ldap_bind_dn - computed: false, optional: true, required: false
  private _ldapBindDn?: string; 
  public get ldapBindDn() {
    return this.getStringAttribute('ldap_bind_dn');
  }
  public set ldapBindDn(value: string) {
    this._ldapBindDn = value;
  }
  public resetLdapBindDn() {
    this._ldapBindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBindDnInput() {
    return this._ldapBindDn;
  }

  // ldap_password - computed: false, optional: true, required: false
  private _ldapPassword?: string; 
  public get ldapPassword() {
    return this.getStringAttribute('ldap_password');
  }
  public set ldapPassword(value: string) {
    this._ldapPassword = value;
  }
  public resetLdapPassword() {
    this._ldapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPasswordInput() {
    return this._ldapPassword;
  }

  // ldap_server - computed: false, optional: true, required: false
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  public resetLdapServer() {
    this._ldapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
  }

  // ldap_username_attribute - computed: false, optional: true, required: false
  private _ldapUsernameAttribute?: string; 
  public get ldapUsernameAttribute() {
    return this.getStringAttribute('ldap_username_attribute');
  }
  public set ldapUsernameAttribute(value: string) {
    this._ldapUsernameAttribute = value;
  }
  public resetLdapUsernameAttribute() {
    this._ldapUsernameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUsernameAttributeInput() {
    return this._ldapUsernameAttribute;
  }

  // max_vpn_conn - computed: true, optional: true, required: false
  private _maxVpnConn?: string; 
  public get maxVpnConn() {
    return this.getStringAttribute('max_vpn_conn');
  }
  public set maxVpnConn(value: string) {
    this._maxVpnConn = value;
  }
  public resetMaxVpnConn() {
    this._maxVpnConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVpnConnInput() {
    return this._maxVpnConn;
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

  // name_servers - computed: false, optional: true, required: false
  private _nameServers?: string; 
  public get nameServers() {
    return this.getStringAttribute('name_servers');
  }
  public set nameServers(value: string) {
    this._nameServers = value;
  }
  public resetNameServers() {
    this._nameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // okta_token - computed: false, optional: true, required: false
  private _oktaToken?: string; 
  public get oktaToken() {
    return this.getStringAttribute('okta_token');
  }
  public set oktaToken(value: string) {
    this._oktaToken = value;
  }
  public resetOktaToken() {
    this._oktaToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaTokenInput() {
    return this._oktaToken;
  }

  // okta_url - computed: false, optional: true, required: false
  private _oktaUrl?: string; 
  public get oktaUrl() {
    return this.getStringAttribute('okta_url');
  }
  public set oktaUrl(value: string) {
    this._oktaUrl = value;
  }
  public resetOktaUrl() {
    this._oktaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaUrlInput() {
    return this._oktaUrl;
  }

  // okta_username_suffix - computed: false, optional: true, required: false
  private _oktaUsernameSuffix?: string; 
  public get oktaUsernameSuffix() {
    return this.getStringAttribute('okta_username_suffix');
  }
  public set oktaUsernameSuffix(value: string) {
    this._oktaUsernameSuffix = value;
  }
  public resetOktaUsernameSuffix() {
    this._oktaUsernameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaUsernameSuffixInput() {
    return this._oktaUsernameSuffix;
  }

  // otp_mode - computed: false, optional: true, required: false
  private _otpMode?: string; 
  public get otpMode() {
    return this.getStringAttribute('otp_mode');
  }
  public set otpMode(value: string) {
    this._otpMode = value;
  }
  public resetOtpMode() {
    this._otpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpModeInput() {
    return this._otpMode;
  }

  // peering_ha_availability_domain - computed: true, optional: true, required: false
  private _peeringHaAvailabilityDomain?: string; 
  public get peeringHaAvailabilityDomain() {
    return this.getStringAttribute('peering_ha_availability_domain');
  }
  public set peeringHaAvailabilityDomain(value: string) {
    this._peeringHaAvailabilityDomain = value;
  }
  public resetPeeringHaAvailabilityDomain() {
    this._peeringHaAvailabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaAvailabilityDomainInput() {
    return this._peeringHaAvailabilityDomain;
  }

  // peering_ha_azure_eip_name_resource_group - computed: true, optional: true, required: false
  private _peeringHaAzureEipNameResourceGroup?: string; 
  public get peeringHaAzureEipNameResourceGroup() {
    return this.getStringAttribute('peering_ha_azure_eip_name_resource_group');
  }
  public set peeringHaAzureEipNameResourceGroup(value: string) {
    this._peeringHaAzureEipNameResourceGroup = value;
  }
  public resetPeeringHaAzureEipNameResourceGroup() {
    this._peeringHaAzureEipNameResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaAzureEipNameResourceGroupInput() {
    return this._peeringHaAzureEipNameResourceGroup;
  }

  // peering_ha_cloud_instance_id - computed: true, optional: false, required: false
  public get peeringHaCloudInstanceId() {
    return this.getStringAttribute('peering_ha_cloud_instance_id');
  }

  // peering_ha_eip - computed: true, optional: true, required: false
  private _peeringHaEip?: string; 
  public get peeringHaEip() {
    return this.getStringAttribute('peering_ha_eip');
  }
  public set peeringHaEip(value: string) {
    this._peeringHaEip = value;
  }
  public resetPeeringHaEip() {
    this._peeringHaEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaEipInput() {
    return this._peeringHaEip;
  }

  // peering_ha_fault_domain - computed: true, optional: true, required: false
  private _peeringHaFaultDomain?: string; 
  public get peeringHaFaultDomain() {
    return this.getStringAttribute('peering_ha_fault_domain');
  }
  public set peeringHaFaultDomain(value: string) {
    this._peeringHaFaultDomain = value;
  }
  public resetPeeringHaFaultDomain() {
    this._peeringHaFaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaFaultDomainInput() {
    return this._peeringHaFaultDomain;
  }

  // peering_ha_gw_name - computed: true, optional: false, required: false
  public get peeringHaGwName() {
    return this.getStringAttribute('peering_ha_gw_name');
  }

  // peering_ha_gw_size - computed: false, optional: true, required: false
  private _peeringHaGwSize?: string; 
  public get peeringHaGwSize() {
    return this.getStringAttribute('peering_ha_gw_size');
  }
  public set peeringHaGwSize(value: string) {
    this._peeringHaGwSize = value;
  }
  public resetPeeringHaGwSize() {
    this._peeringHaGwSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaGwSizeInput() {
    return this._peeringHaGwSize;
  }

  // peering_ha_image_version - computed: true, optional: true, required: false
  private _peeringHaImageVersion?: string; 
  public get peeringHaImageVersion() {
    return this.getStringAttribute('peering_ha_image_version');
  }
  public set peeringHaImageVersion(value: string) {
    this._peeringHaImageVersion = value;
  }
  public resetPeeringHaImageVersion() {
    this._peeringHaImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaImageVersionInput() {
    return this._peeringHaImageVersion;
  }

  // peering_ha_insane_mode_az - computed: false, optional: true, required: false
  private _peeringHaInsaneModeAz?: string; 
  public get peeringHaInsaneModeAz() {
    return this.getStringAttribute('peering_ha_insane_mode_az');
  }
  public set peeringHaInsaneModeAz(value: string) {
    this._peeringHaInsaneModeAz = value;
  }
  public resetPeeringHaInsaneModeAz() {
    this._peeringHaInsaneModeAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaInsaneModeAzInput() {
    return this._peeringHaInsaneModeAz;
  }

  // peering_ha_private_ip - computed: true, optional: false, required: false
  public get peeringHaPrivateIp() {
    return this.getStringAttribute('peering_ha_private_ip');
  }

  // peering_ha_security_group_id - computed: true, optional: false, required: false
  public get peeringHaSecurityGroupId() {
    return this.getStringAttribute('peering_ha_security_group_id');
  }

  // peering_ha_software_version - computed: true, optional: true, required: false
  private _peeringHaSoftwareVersion?: string; 
  public get peeringHaSoftwareVersion() {
    return this.getStringAttribute('peering_ha_software_version');
  }
  public set peeringHaSoftwareVersion(value: string) {
    this._peeringHaSoftwareVersion = value;
  }
  public resetPeeringHaSoftwareVersion() {
    this._peeringHaSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaSoftwareVersionInput() {
    return this._peeringHaSoftwareVersion;
  }

  // peering_ha_subnet - computed: false, optional: true, required: false
  private _peeringHaSubnet?: string; 
  public get peeringHaSubnet() {
    return this.getStringAttribute('peering_ha_subnet');
  }
  public set peeringHaSubnet(value: string) {
    this._peeringHaSubnet = value;
  }
  public resetPeeringHaSubnet() {
    this._peeringHaSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaSubnetInput() {
    return this._peeringHaSubnet;
  }

  // peering_ha_zone - computed: false, optional: true, required: false
  private _peeringHaZone?: string; 
  public get peeringHaZone() {
    return this.getStringAttribute('peering_ha_zone');
  }
  public set peeringHaZone(value: string) {
    this._peeringHaZone = value;
  }
  public resetPeeringHaZone() {
    this._peeringHaZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringHaZoneInput() {
    return this._peeringHaZone;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_dns_server - computed: true, optional: false, required: false
  public get publicDnsServer() {
    return this.getStringAttribute('public_dns_server');
  }

  // public_subnet_filtering_guard_duty_enforced - computed: false, optional: true, required: false
  private _publicSubnetFilteringGuardDutyEnforced?: boolean | cdktf.IResolvable; 
  public get publicSubnetFilteringGuardDutyEnforced() {
    return this.getBooleanAttribute('public_subnet_filtering_guard_duty_enforced');
  }
  public set publicSubnetFilteringGuardDutyEnforced(value: boolean | cdktf.IResolvable) {
    this._publicSubnetFilteringGuardDutyEnforced = value;
  }
  public resetPublicSubnetFilteringGuardDutyEnforced() {
    this._publicSubnetFilteringGuardDutyEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetFilteringGuardDutyEnforcedInput() {
    return this._publicSubnetFilteringGuardDutyEnforced;
  }

  // public_subnet_filtering_ha_route_tables - computed: false, optional: true, required: false
  private _publicSubnetFilteringHaRouteTables?: string[]; 
  public get publicSubnetFilteringHaRouteTables() {
    return cdktf.Fn.tolist(this.getListAttribute('public_subnet_filtering_ha_route_tables'));
  }
  public set publicSubnetFilteringHaRouteTables(value: string[]) {
    this._publicSubnetFilteringHaRouteTables = value;
  }
  public resetPublicSubnetFilteringHaRouteTables() {
    this._publicSubnetFilteringHaRouteTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetFilteringHaRouteTablesInput() {
    return this._publicSubnetFilteringHaRouteTables;
  }

  // public_subnet_filtering_route_tables - computed: false, optional: true, required: false
  private _publicSubnetFilteringRouteTables?: string[]; 
  public get publicSubnetFilteringRouteTables() {
    return cdktf.Fn.tolist(this.getListAttribute('public_subnet_filtering_route_tables'));
  }
  public set publicSubnetFilteringRouteTables(value: string[]) {
    this._publicSubnetFilteringRouteTables = value;
  }
  public resetPublicSubnetFilteringRouteTables() {
    this._publicSubnetFilteringRouteTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSubnetFilteringRouteTablesInput() {
    return this._publicSubnetFilteringRouteTables;
  }

  // renegotiation_interval - computed: false, optional: true, required: false
  private _renegotiationInterval?: number; 
  public get renegotiationInterval() {
    return this.getNumberAttribute('renegotiation_interval');
  }
  public set renegotiationInterval(value: number) {
    this._renegotiationInterval = value;
  }
  public resetRenegotiationInterval() {
    this._renegotiationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiationIntervalInput() {
    return this._renegotiationInterval;
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

  // saml_enabled - computed: false, optional: true, required: false
  private _samlEnabled?: boolean | cdktf.IResolvable; 
  public get samlEnabled() {
    return this.getBooleanAttribute('saml_enabled');
  }
  public set samlEnabled(value: boolean | cdktf.IResolvable) {
    this._samlEnabled = value;
  }
  public resetSamlEnabled() {
    this._samlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlEnabledInput() {
    return this._samlEnabled;
  }

  // search_domains - computed: false, optional: true, required: false
  private _searchDomains?: string; 
  public get searchDomains() {
    return this.getStringAttribute('search_domains');
  }
  public set searchDomains(value: string) {
    this._searchDomains = value;
  }
  public resetSearchDomains() {
    this._searchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainsInput() {
    return this._searchDomains;
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

  // split_tunnel - computed: false, optional: true, required: false
  private _splitTunnel?: boolean | cdktf.IResolvable; 
  public get splitTunnel() {
    return this.getBooleanAttribute('split_tunnel');
  }
  public set splitTunnel(value: boolean | cdktf.IResolvable) {
    this._splitTunnel = value;
  }
  public resetSplitTunnel() {
    this._splitTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitTunnelInput() {
    return this._splitTunnel;
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

  // vpn_access - computed: false, optional: true, required: false
  private _vpnAccess?: boolean | cdktf.IResolvable; 
  public get vpnAccess() {
    return this.getBooleanAttribute('vpn_access');
  }
  public set vpnAccess(value: boolean | cdktf.IResolvable) {
    this._vpnAccess = value;
  }
  public resetVpnAccess() {
    this._vpnAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnAccessInput() {
    return this._vpnAccess;
  }

  // vpn_cidr - computed: false, optional: true, required: false
  private _vpnCidr?: string; 
  public get vpnCidr() {
    return this.getStringAttribute('vpn_cidr');
  }
  public set vpnCidr(value: string) {
    this._vpnCidr = value;
  }
  public resetVpnCidr() {
    this._vpnCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnCidrInput() {
    return this._vpnCidr;
  }

  // vpn_protocol - computed: true, optional: true, required: false
  private _vpnProtocol?: string; 
  public get vpnProtocol() {
    return this.getStringAttribute('vpn_protocol');
  }
  public set vpnProtocol(value: string) {
    this._vpnProtocol = value;
  }
  public resetVpnProtocol() {
    this._vpnProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnProtocolInput() {
    return this._vpnProtocol;
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
      additional_cidrs: cdktf.stringToTerraform(this._additionalCidrs),
      additional_cidrs_designated_gateway: cdktf.stringToTerraform(this._additionalCidrsDesignatedGateway),
      allocate_new_eip: cdktf.booleanToTerraform(this._allocateNewEip),
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      azure_eip_name_resource_group: cdktf.stringToTerraform(this._azureEipNameResourceGroup),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      customer_managed_keys: cdktf.stringToTerraform(this._customerManagedKeys),
      delete_spot: cdktf.booleanToTerraform(this._deleteSpot),
      duo_api_hostname: cdktf.stringToTerraform(this._duoApiHostname),
      duo_integration_key: cdktf.stringToTerraform(this._duoIntegrationKey),
      duo_push_mode: cdktf.stringToTerraform(this._duoPushMode),
      duo_secret_key: cdktf.stringToTerraform(this._duoSecretKey),
      eip: cdktf.stringToTerraform(this._eip),
      elb_name: cdktf.stringToTerraform(this._elbName),
      enable_designated_gateway: cdktf.booleanToTerraform(this._enableDesignatedGateway),
      enable_elb: cdktf.booleanToTerraform(this._enableElb),
      enable_encrypt_volume: cdktf.booleanToTerraform(this._enableEncryptVolume),
      enable_gro_gso: cdktf.booleanToTerraform(this._enableGroGso),
      enable_jumbo_frame: cdktf.booleanToTerraform(this._enableJumboFrame),
      enable_ldap: cdktf.booleanToTerraform(this._enableLdap),
      enable_monitor_gateway_subnets: cdktf.booleanToTerraform(this._enableMonitorGatewaySubnets),
      enable_public_subnet_filtering: cdktf.booleanToTerraform(this._enablePublicSubnetFiltering),
      enable_spot_instance: cdktf.booleanToTerraform(this._enableSpotInstance),
      enable_vpc_dns_server: cdktf.booleanToTerraform(this._enableVpcDnsServer),
      enable_vpn_nat: cdktf.booleanToTerraform(this._enableVpnNat),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      fqdn_lan_cidr: cdktf.stringToTerraform(this._fqdnLanCidr),
      fqdn_lan_vpc_id: cdktf.stringToTerraform(this._fqdnLanVpcId),
      gw_name: cdktf.stringToTerraform(this._gwName),
      gw_size: cdktf.stringToTerraform(this._gwSize),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      image_version: cdktf.stringToTerraform(this._imageVersion),
      insane_mode: cdktf.booleanToTerraform(this._insaneMode),
      insane_mode_az: cdktf.stringToTerraform(this._insaneModeAz),
      ldap_base_dn: cdktf.stringToTerraform(this._ldapBaseDn),
      ldap_bind_dn: cdktf.stringToTerraform(this._ldapBindDn),
      ldap_password: cdktf.stringToTerraform(this._ldapPassword),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      ldap_username_attribute: cdktf.stringToTerraform(this._ldapUsernameAttribute),
      max_vpn_conn: cdktf.stringToTerraform(this._maxVpnConn),
      monitor_exclude_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitorExcludeList),
      name_servers: cdktf.stringToTerraform(this._nameServers),
      okta_token: cdktf.stringToTerraform(this._oktaToken),
      okta_url: cdktf.stringToTerraform(this._oktaUrl),
      okta_username_suffix: cdktf.stringToTerraform(this._oktaUsernameSuffix),
      otp_mode: cdktf.stringToTerraform(this._otpMode),
      peering_ha_availability_domain: cdktf.stringToTerraform(this._peeringHaAvailabilityDomain),
      peering_ha_azure_eip_name_resource_group: cdktf.stringToTerraform(this._peeringHaAzureEipNameResourceGroup),
      peering_ha_eip: cdktf.stringToTerraform(this._peeringHaEip),
      peering_ha_fault_domain: cdktf.stringToTerraform(this._peeringHaFaultDomain),
      peering_ha_gw_size: cdktf.stringToTerraform(this._peeringHaGwSize),
      peering_ha_image_version: cdktf.stringToTerraform(this._peeringHaImageVersion),
      peering_ha_insane_mode_az: cdktf.stringToTerraform(this._peeringHaInsaneModeAz),
      peering_ha_software_version: cdktf.stringToTerraform(this._peeringHaSoftwareVersion),
      peering_ha_subnet: cdktf.stringToTerraform(this._peeringHaSubnet),
      peering_ha_zone: cdktf.stringToTerraform(this._peeringHaZone),
      public_subnet_filtering_guard_duty_enforced: cdktf.booleanToTerraform(this._publicSubnetFilteringGuardDutyEnforced),
      public_subnet_filtering_ha_route_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicSubnetFilteringHaRouteTables),
      public_subnet_filtering_route_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicSubnetFilteringRouteTables),
      renegotiation_interval: cdktf.numberToTerraform(this._renegotiationInterval),
      rx_queue_size: cdktf.stringToTerraform(this._rxQueueSize),
      saml_enabled: cdktf.booleanToTerraform(this._samlEnabled),
      search_domains: cdktf.stringToTerraform(this._searchDomains),
      single_az_ha: cdktf.booleanToTerraform(this._singleAzHa),
      single_ip_snat: cdktf.booleanToTerraform(this._singleIpSnat),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      split_tunnel: cdktf.booleanToTerraform(this._splitTunnel),
      spot_price: cdktf.stringToTerraform(this._spotPrice),
      subnet: cdktf.stringToTerraform(this._subnet),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tunnel_detection_time: cdktf.numberToTerraform(this._tunnelDetectionTime),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_reg: cdktf.stringToTerraform(this._vpcReg),
      vpn_access: cdktf.booleanToTerraform(this._vpnAccess),
      vpn_cidr: cdktf.stringToTerraform(this._vpnCidr),
      vpn_protocol: cdktf.stringToTerraform(this._vpnProtocol),
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
      additional_cidrs: {
        value: cdktf.stringToHclTerraform(this._additionalCidrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_cidrs_designated_gateway: {
        value: cdktf.stringToHclTerraform(this._additionalCidrsDesignatedGateway),
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
      delete_spot: {
        value: cdktf.booleanToHclTerraform(this._deleteSpot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      duo_api_hostname: {
        value: cdktf.stringToHclTerraform(this._duoApiHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duo_integration_key: {
        value: cdktf.stringToHclTerraform(this._duoIntegrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duo_push_mode: {
        value: cdktf.stringToHclTerraform(this._duoPushMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duo_secret_key: {
        value: cdktf.stringToHclTerraform(this._duoSecretKey),
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
      elb_name: {
        value: cdktf.stringToHclTerraform(this._elbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_designated_gateway: {
        value: cdktf.booleanToHclTerraform(this._enableDesignatedGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_elb: {
        value: cdktf.booleanToHclTerraform(this._enableElb),
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
      enable_gro_gso: {
        value: cdktf.booleanToHclTerraform(this._enableGroGso),
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
      enable_ldap: {
        value: cdktf.booleanToHclTerraform(this._enableLdap),
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
      enable_public_subnet_filtering: {
        value: cdktf.booleanToHclTerraform(this._enablePublicSubnetFiltering),
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
      enable_vpn_nat: {
        value: cdktf.booleanToHclTerraform(this._enableVpnNat),
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
      fqdn_lan_cidr: {
        value: cdktf.stringToHclTerraform(this._fqdnLanCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn_lan_vpc_id: {
        value: cdktf.stringToHclTerraform(this._fqdnLanVpcId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      ldap_base_dn: {
        value: cdktf.stringToHclTerraform(this._ldapBaseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_bind_dn: {
        value: cdktf.stringToHclTerraform(this._ldapBindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_password: {
        value: cdktf.stringToHclTerraform(this._ldapPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_username_attribute: {
        value: cdktf.stringToHclTerraform(this._ldapUsernameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_vpn_conn: {
        value: cdktf.stringToHclTerraform(this._maxVpnConn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_exclude_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitorExcludeList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name_servers: {
        value: cdktf.stringToHclTerraform(this._nameServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_token: {
        value: cdktf.stringToHclTerraform(this._oktaToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_url: {
        value: cdktf.stringToHclTerraform(this._oktaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_username_suffix: {
        value: cdktf.stringToHclTerraform(this._oktaUsernameSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      otp_mode: {
        value: cdktf.stringToHclTerraform(this._otpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_availability_domain: {
        value: cdktf.stringToHclTerraform(this._peeringHaAvailabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_azure_eip_name_resource_group: {
        value: cdktf.stringToHclTerraform(this._peeringHaAzureEipNameResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_eip: {
        value: cdktf.stringToHclTerraform(this._peeringHaEip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_fault_domain: {
        value: cdktf.stringToHclTerraform(this._peeringHaFaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_gw_size: {
        value: cdktf.stringToHclTerraform(this._peeringHaGwSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_image_version: {
        value: cdktf.stringToHclTerraform(this._peeringHaImageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_insane_mode_az: {
        value: cdktf.stringToHclTerraform(this._peeringHaInsaneModeAz),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_software_version: {
        value: cdktf.stringToHclTerraform(this._peeringHaSoftwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_subnet: {
        value: cdktf.stringToHclTerraform(this._peeringHaSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_ha_zone: {
        value: cdktf.stringToHclTerraform(this._peeringHaZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_subnet_filtering_guard_duty_enforced: {
        value: cdktf.booleanToHclTerraform(this._publicSubnetFilteringGuardDutyEnforced),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_subnet_filtering_ha_route_tables: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicSubnetFilteringHaRouteTables),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      public_subnet_filtering_route_tables: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicSubnetFilteringRouteTables),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      renegotiation_interval: {
        value: cdktf.numberToHclTerraform(this._renegotiationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rx_queue_size: {
        value: cdktf.stringToHclTerraform(this._rxQueueSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_enabled: {
        value: cdktf.booleanToHclTerraform(this._samlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      search_domains: {
        value: cdktf.stringToHclTerraform(this._searchDomains),
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
      split_tunnel: {
        value: cdktf.booleanToHclTerraform(this._splitTunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      vpn_access: {
        value: cdktf.booleanToHclTerraform(this._vpnAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_cidr: {
        value: cdktf.stringToHclTerraform(this._vpnCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_protocol: {
        value: cdktf.stringToHclTerraform(this._vpnProtocol),
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
