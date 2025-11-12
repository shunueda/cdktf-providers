// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProvisionVpxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backplane Interface. Minimum length =  1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#backplane ProvisionVpx#backplane}
  */
  readonly backplane?: string;
  /**
  * Burst Priority of the VM Instance between 1 and 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#burst_priority ProvisionVpx#burst_priority}
  */
  readonly burstPriority?: number;
  /**
  * true if you want to allow shell/sftp/scp access to NetScaler Instance administrator. Minimum length =  1 Maximum length =  1024
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#cmd_policy ProvisionVpx#cmd_policy}
  */
  readonly cmdPolicy?: string;
  /**
  * Configuration Type. Values: 0: IPv4, 1: IPv6, 2: Both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#config_type ProvisionVpx#config_type}
  */
  readonly configType?: number;
  /**
  * `true` if the current changes made by user requires a reboot of the VM else `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#crypto_change_requires_reboot ProvisionVpx#crypto_change_requires_reboot}
  */
  readonly cryptoChangeRequiresReboot?: boolean | cdktf.IResolvable;
  /**
  * Custom ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#customid ProvisionVpx#customid}
  */
  readonly customid?: string;
  /**
  * Datacenter Id is system generated key for data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#datacenter_id ProvisionVpx#datacenter_id}
  */
  readonly datacenterId?: string;
  /**
  * Description of managed device. Minimum length =  1 Maximum length =  512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#description ProvisionVpx#description}
  */
  readonly description?: string;
  /**
  * Device Family. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#device_family ProvisionVpx#device_family}
  */
  readonly deviceFamily?: string;
  /**
  * Display Name for this managed device. For HA pair it will be A-B, and for Cluster it will be CLIP. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#display_name ProvisionVpx#display_name}
  */
  readonly displayName?: string;
  /**
  * Domain name of VM Device. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#domain_name ProvisionVpx#domain_name}
  */
  readonly domainName?: string;
  /**
  * Enterprise Bandwidth configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#ent_bw_available ProvisionVpx#ent_bw_available}
  */
  readonly entBwAvailable?: number;
  /**
  * Enterprise Bandwidth configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#ent_bw_config ProvisionVpx#ent_bw_config}
  */
  readonly entBwConfig?: number;
  /**
  * Enterprise Bandwidth Total.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#ent_bw_total ProvisionVpx#ent_bw_total}
  */
  readonly entBwTotal?: number;
  /**
  * FIPS Partition Name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#fips_partition_name ProvisionVpx#fips_partition_name}
  */
  readonly fipsPartitionName?: string;
  /**
  * Default Gateway of managed device. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#gateway ProvisionVpx#gateway}
  */
  readonly gateway?: string;
  /**
  * Gateway IPv6 Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#gateway_ipv6 ProvisionVpx#gateway_ipv6}
  */
  readonly gatewayIpv6?: string;
  /**
  * Host IPAddress where VM is provisioned. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#host_ip_address ProvisionVpx#host_ip_address}
  */
  readonly hostIpAddress?: string;
  /**
  * Assign hostname to managed device, if this is not provided, name will be set as host name . Minimum length =  1 Maximum length =  256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#hostname ProvisionVpx#hostname}
  */
  readonly hostname?: string;
  /**
  * ID of the NetScaler ADC Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#id ProvisionVpx#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network 0/1 on VM Instance, Select this option to assign 0/1 Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#if_0_1 ProvisionVpx#if_0_1}
  */
  readonly if01?: boolean | cdktf.IResolvable;
  /**
  * Network 0/2 on VM Instance, Select this option to assign 0/2 Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#if_0_2 ProvisionVpx#if_0_2}
  */
  readonly if02?: boolean | cdktf.IResolvable;
  /**
  * Set as true if VPX is managed by internal network (not required to be set for SDWAN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#if_internal_ip_enabled ProvisionVpx#if_internal_ip_enabled}
  */
  readonly ifInternalIpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Image Name, This parameter is used while provisioning VM Instance with XVA image, template_name is given priority if provided along with image_name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#image_name ProvisionVpx#image_name}
  */
  readonly imageName?: string;
  /**
  * Denotes state- primary,secondary,clip,clusternode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#instance_mode ProvisionVpx#instance_mode}
  */
  readonly instanceMode?: string;
  /**
  * Internal IP Address for this managed device. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#internal_ip_address ProvisionVpx#internal_ip_address}
  */
  readonly internalIpAddress?: string;
  /**
  * IP Address for this managed device. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#ip_address ProvisionVpx#ip_address}
  */
  readonly ipAddress: string;
  /**
  * IPv4 Address. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#ipv4_address ProvisionVpx#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv6 Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#ipv6_address ProvisionVpx#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Is Clip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#is_clip ProvisionVpx#is_clip}
  */
  readonly isClip?: boolean | cdktf.IResolvable;
  /**
  * Is Managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#is_managed ProvisionVpx#is_managed}
  */
  readonly isManaged?: boolean | cdktf.IResolvable;
  /**
  * `true` if number_of_acu/number_of_scu are used, `false` if number_of_ssl_cores is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#is_new_crypto ProvisionVpx#is_new_crypto}
  */
  readonly isNewCrypto?: boolean | cdktf.IResolvable;
  /**
  * Is CCO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#iscco ProvisionVpx#iscco}
  */
  readonly iscco?: boolean | cdktf.IResolvable;
  /**
  * L2mode status of VM Instance. Select this option to allow L2 mode on all the Data Interfaces on this NetScaler ADC Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#l2_enabled ProvisionVpx#l2_enabled}
  */
  readonly l2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Bond consisting of management ports on VM Instance. When Management Channel created for interfaces, this will be set to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#la_mgmt ProvisionVpx#la_mgmt}
  */
  readonly laMgmt?: boolean | cdktf.IResolvable;
  /**
  * Last Updated Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#last_updated_time ProvisionVpx#last_updated_time}
  */
  readonly lastUpdatedTime?: number;
  /**
  * Feature License for NetScaler ADC Instance, needs to be set while provisioning [Possible values: Standard, Enterprise, Platinum].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#license ProvisionVpx#license}
  */
  readonly license?: string;
  /**
  * Edition of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#license_edition ProvisionVpx#license_edition}
  */
  readonly licenseEdition?: string;
  /**
  * Grace for this NetScaler Instance..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#license_grace_time ProvisionVpx#license_grace_time}
  */
  readonly licenseGraceTime?: number;
  /**
  * Mastools version if the device is embedded agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#mastools_version ProvisionVpx#mastools_version}
  */
  readonly mastoolsVersion?: string;
  /**
  * Maximum burst throughput in Mbps of VM Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#max_burst_throughput ProvisionVpx#max_burst_throughput}
  */
  readonly maxBurstThroughput?: number;
  /**
  * Flag to check if metrics collection is enabled or disabled..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#metrics_collection ProvisionVpx#metrics_collection}
  */
  readonly metricsCollection?: boolean | cdktf.IResolvable;
  /**
  * Management IP Address for this Managed Device. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#mgmt_ip_address ProvisionVpx#mgmt_ip_address}
  */
  readonly mgmtIpAddress?: string;
  /**
  * Name of managed device. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#name ProvisionVpx#name}
  */
  readonly name?: string;
  /**
  * Netmask of managed device. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#netmask ProvisionVpx#netmask}
  */
  readonly netmask?: string;
  /**
  * Network Interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#network_interfaces ProvisionVpx#network_interfaces}
  */
  readonly networkInterfaces?: ProvisionVpxNetworkInterfaces[] | cdktf.IResolvable;
  /**
  * Next Hop IP address. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#nexthop ProvisionVpx#nexthop}
  */
  readonly nexthop?: string;
  /**
  * Next Hop IPv6 Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#nexthop_v6 ProvisionVpx#nexthop_v6}
  */
  readonly nexthopV6?: string;
  /**
  * Node identification of a device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#node_id ProvisionVpx#node_id}
  */
  readonly nodeId?: string;
  /**
  * NetScaler IP Address for this managed device. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#ns_ip_address ProvisionVpx#ns_ip_address}
  */
  readonly nsIpAddress?: string;
  /**
  * VLAN for Management Traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#nsvlan_id ProvisionVpx#nsvlan_id}
  */
  readonly nsvlanId?: number;
  /**
  * VLAN Interfaces. Minimum length =  1 Maximum length =  50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#nsvlan_interfaces ProvisionVpx#nsvlan_interfaces}
  */
  readonly nsvlanInterfaces?: string[];
  /**
  * When this option is selected, selected interfaces are added as tagged members of Management VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#nsvlan_tagged ProvisionVpx#nsvlan_tagged}
  */
  readonly nsvlanTagged?: boolean | cdktf.IResolvable;
  /**
  * Total number of PEs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#num_pes ProvisionVpx#num_pes}
  */
  readonly numPes?: number;
  /**
  * Assign number of asymmetric crypto units to VM Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#number_of_acu ProvisionVpx#number_of_acu}
  */
  readonly numberOfAcu?: number;
  /**
  * Number of cores that are assigned to VM Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#number_of_cores ProvisionVpx#number_of_cores}
  */
  readonly numberOfCores?: number;
  /**
  * Assign number of asymmetric crypto units to VM Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#number_of_scu ProvisionVpx#number_of_scu}
  */
  readonly numberOfScu?: number;
  /**
  * Number of SSL Cards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#number_of_ssl_cards ProvisionVpx#number_of_ssl_cards}
  */
  readonly numberOfSslCards?: number;
  /**
  * Assign number of ssl virtual functions to VM Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#number_of_ssl_cores ProvisionVpx#number_of_ssl_cores}
  */
  readonly numberOfSslCores?: number;
  /**
  * Number of SSL Cores Up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#number_of_ssl_cores_up ProvisionVpx#number_of_ssl_cores_up}
  */
  readonly numberOfSslCoresUp?: number;
  /**
  * Password for specified user on NetScaler Instance. Minimum length =  1 Maximum length =  127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#password ProvisionVpx#password}
  */
  readonly password?: string;
  /**
  * Platinum Bandwidth Available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#plt_bw_available ProvisionVpx#plt_bw_available}
  */
  readonly pltBwAvailable?: number;
  /**
  * Platinum Bandwidth configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#plt_bw_config ProvisionVpx#plt_bw_config}
  */
  readonly pltBwConfig?: number;
  /**
  * Total Platinum Bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#plt_bw_total ProvisionVpx#plt_bw_total}
  */
  readonly pltBwTotal?: number;
  /**
  * Signaling IP Address. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#plugin_ip_address ProvisionVpx#plugin_ip_address}
  */
  readonly pluginIpAddress?: string;
  /**
  * Signaling Netmask. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#plugin_netmask ProvisionVpx#plugin_netmask}
  */
  readonly pluginNetmask?: string;
  /**
  * Assign packets per seconds to NetScaler Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#pps ProvisionVpx#pps}
  */
  readonly pps?: number;
  /**
  * Device Profile Name that is attached with this managed device. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#profile_name ProvisionVpx#profile_name}
  */
  readonly profileName?: string;
  /**
  * Password specified by the user for this NetScaler Instance.. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#profile_password ProvisionVpx#profile_password}
  */
  readonly profilePassword?: string;
  /**
  * User Name specified by the user for this NetScaler Instance.. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#profile_username ProvisionVpx#profile_username}
  */
  readonly profileUsername?: string;
  /**
  * Reboot VMs on CPU change during resource allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#reboot_vm_on_cpu_change ProvisionVpx#reboot_vm_on_cpu_change}
  */
  readonly rebootVmOnCpuChange?: boolean | cdktf.IResolvable;
  /**
  * Should config be saved first in case instance is rebooted while modify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#save_config ProvisionVpx#save_config}
  */
  readonly saveConfig?: boolean | cdktf.IResolvable;
  /**
  * Node State. Minimum length =  1 Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#state ProvisionVpx#state}
  */
  readonly state?: string;
  /**
  * Standard Bandwidth Available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#std_bw_available ProvisionVpx#std_bw_available}
  */
  readonly stdBwAvailable?: number;
  /**
  * Standard Bandwidth running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#std_bw_config ProvisionVpx#std_bw_config}
  */
  readonly stdBwConfig?: number;
  /**
  * Standard Bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#std_bw_total ProvisionVpx#std_bw_total}
  */
  readonly stdBwTotal?: number;
  /**
  * Template Name, This parameter is used while provisioning VM Instance with template, template_name is given priority if provided along with image_name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#template_name ProvisionVpx#template_name}
  */
  readonly templateName?: string;
  /**
  * Assign throughput in Mbps to VM Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#throughput ProvisionVpx#throughput}
  */
  readonly throughput?: number;
  /**
  * Throughput Allocation Mode: 0-Fixed, 1-Burst-able.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#throughput_allocation_mode ProvisionVpx#throughput_allocation_mode}
  */
  readonly throughputAllocationMode?: number;
  /**
  * Throughput Limit in Mbps set for VM Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#throughput_limit ProvisionVpx#throughput_limit}
  */
  readonly throughputLimit?: number;
  /**
  * Type of device, (Xen | NS). Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#type ProvisionVpx#type}
  */
  readonly type?: string;
  /**
  * User Name (except nsroot) to be configured on NetScaler Instance. Minimum length =  1 Maximum length =  127
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#username ProvisionVpx#username}
  */
  readonly username?: string;
  /**
  * Number of vCPU allocated for the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vcpu_config ProvisionVpx#vcpu_config}
  */
  readonly vcpuConfig?: number;
  /**
  * VLAN id for the management interface 0/1. This VLAN ID is used to filter management traffic on 0/1 at hypervisor layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vlan_id_0_1 ProvisionVpx#vlan_id_0_1}
  */
  readonly vlanId01?: number;
  /**
  * VLAN id for the management interface 0/2. This VLAN ID is used to filter management traffic on 0/2 at hypervisor layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vlan_id_0_2 ProvisionVpx#vlan_id_0_2}
  */
  readonly vlanId02?: number;
  /**
  * VLAN Type, NetScaler or L2 VLAN. Select 0 for NetScaler VLAN or 1 for L2 VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vlan_type ProvisionVpx#vlan_type}
  */
  readonly vlanType?: number;
  /**
  * Total Memory of VM Instance in MB. 2048MB, 5120MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vm_memory_total ProvisionVpx#vm_memory_total}
  */
  readonly vmMemoryTotal?: number;
}
export interface ProvisionVpxNetworkInterfaces {
  /**
  * Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#gateway ProvisionVpx#gateway}
  */
  readonly gateway?: string;
  /**
  * Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#interface_name ProvisionVpx#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#ip_address ProvisionVpx#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * `true` if this interface is member of a channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#is_member_ifc ProvisionVpx#is_member_ifc}
  */
  readonly isMemberIfc?: boolean | cdktf.IResolvable;
  /**
  * `true` if this is the management interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#is_mgmt_ifc ProvisionVpx#is_mgmt_ifc}
  */
  readonly isMgmtIfc?: boolean | cdktf.IResolvable;
  /**
  * Is VLAN added on NetworkInterface of VM Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#is_vlan_applied ProvisionVpx#is_vlan_applied}
  */
  readonly isVlanApplied?: boolean | cdktf.IResolvable;
  /**
  * L2 mode status of Interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#l2_enabled ProvisionVpx#l2_enabled}
  */
  readonly l2Enabled?: boolean | cdktf.IResolvable;
  /**
  * MAC Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#mac_address ProvisionVpx#mac_address}
  */
  readonly macAddress?: string;
  /**
  * MAC Mode, The method according to which MAC Address is assigned to Interface. Possible values: [default, generated, custom] default: XenServer assigns a MAC Address. custom: SDX Administrator assigns a MAC address. generated: Generate a MAC address by using the base MAC address set at System Level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#mac_mode ProvisionVpx#mac_mode}
  */
  readonly macMode?: string;
  /**
  * Managed Device Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#managed_device_id ProvisionVpx#managed_device_id}
  */
  readonly managedDeviceId?: string;
  /**
  * Name Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#name_server ProvisionVpx#name_server}
  */
  readonly nameServer?: string;
  /**
  * Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#netmask ProvisionVpx#netmask}
  */
  readonly netmask?: string;
  /**
  * Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#network_interface_id ProvisionVpx#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * Parent Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#parent_id ProvisionVpx#parent_id}
  */
  readonly parentId?: string;
  /**
  * Parent Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#parent_name ProvisionVpx#parent_name}
  */
  readonly parentName?: string;
  /**
  * Port name of the interface on the host machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#port_name ProvisionVpx#port_name}
  */
  readonly portName: string;
  /**
  * Receive Untagged Packets on Interface/Channel. Allow Untagged Traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#receiveuntagged ProvisionVpx#receiveuntagged}
  */
  readonly receiveuntagged?: boolean | cdktf.IResolvable;
  /**
  * Sdx Formation Network Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#sdx_formation_network_id ProvisionVpx#sdx_formation_network_id}
  */
  readonly sdxFormationNetworkId?: string;
  /**
  * VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vlan ProvisionVpx#vlan}
  */
  readonly vlan?: number;
  /**
  * VLAN Whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vlan_whitelist ProvisionVpx#vlan_whitelist}
  */
  readonly vlanWhitelist?: string;
  /**
  * Allowed VLANs. Range of VLANs can be provided using hyphen '-' separater and separated VLANs can also be provided. (e.g., ["100-110","142","143","151-155"]). Providing in the suggested format is necessary as SDX internally try to convert in this form, so due to that, if the format provided is wrong it may cause error from terraform. To list individual VLANs if they are not in sequence or if the sequence is 2 or fewer (e.g., ["100","101","4000","4001"]). If the VLANs are in sequence of 3 or more, use the range format with hypen '-' seperated like (e.g., ["100-103","4000-4002"]). Also, maintain the order as well (Ascending order) (e.g., ["100-103","200","4000-4002"])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vlan_whitelist_array ProvisionVpx#vlan_whitelist_array}
  */
  readonly vlanWhitelistArray?: string[];
  /**
  * VRID List for Interface/Channel for IPV4 VMAC Generation. Range of VRIDs can be provided using hyphen '-' separater and multiple comma ',' separated VRIDs can also be provided, (e.g., "100-110,142,143,151-155").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vrid_list_ipv4 ProvisionVpx#vrid_list_ipv4}
  */
  readonly vridListIpv4?: string;
  /**
  * VRID List for Interface for IPV4 VMAC Generation. Range of VRIDs can be provided using hyphen '-' separater and separated VRIDs can also be provided, (e.g., ["100-110","142","143","151-155"]). Providing in the suggested format is necessary as SDX internally try to convert in this form, so due to that, if the format provided is wrong it may cause error from terraform. To list individual VRIDs if they are not in sequence or if the sequence is 2 or fewer (e.g., ["100","101","4000","4001"]). If the VRIDs are in sequence of 3 or more, use the range format with hypen '-' seperated like (e.g., ["100-103","4000-4002"]). Also, maintain the order as well (Ascending order) (e.g., ["100-103","200","4000-4002"])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vrid_list_ipv4_array ProvisionVpx#vrid_list_ipv4_array}
  */
  readonly vridListIpv4Array?: string[];
  /**
  * VRID List for Interface/Channel for IPV6 VMAC Generation. Range of VRIDs can be provided using hyphen '-' separater and multiple comma ',' separated VRIDs can also be provided, (e.g., "100-110,142,143,151-155").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vrid_list_ipv6 ProvisionVpx#vrid_list_ipv6}
  */
  readonly vridListIpv6?: string;
  /**
  * VRID List for Interface for IPV6 VMAC Generation. Range of VRIDs can be provided using hyphen '-' separater and separated VRIDs can also be provided, (e.g., ["100-110","142","143","151-155"]). Providing in the suggested format is necessary as SDX internally try to convert in this form, so due to that, if the format provided is wrong it may cause error from terraform. To list individual VRIDs if they are not in sequence or if the sequence is 2 or fewer (e.g., ["100","101","4000","4001"]). If the VRIDs are in sequence of 3 or more, use the range format with hypen '-' seperated like (e.g., ["100-103","4000-4002"]). Also, maintain the order as well (Ascending order) (e.g., ["100-103","200","4000-4002"])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#vrid_list_ipv6_array ProvisionVpx#vrid_list_ipv6_array}
  */
  readonly vridListIpv6Array?: string[];
}

export function provisionVpxNetworkInterfacesToTerraform(struct?: ProvisionVpxNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    is_member_ifc: cdktf.booleanToTerraform(struct!.isMemberIfc),
    is_mgmt_ifc: cdktf.booleanToTerraform(struct!.isMgmtIfc),
    is_vlan_applied: cdktf.booleanToTerraform(struct!.isVlanApplied),
    l2_enabled: cdktf.booleanToTerraform(struct!.l2Enabled),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mac_mode: cdktf.stringToTerraform(struct!.macMode),
    managed_device_id: cdktf.stringToTerraform(struct!.managedDeviceId),
    name_server: cdktf.stringToTerraform(struct!.nameServer),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    parent_id: cdktf.stringToTerraform(struct!.parentId),
    parent_name: cdktf.stringToTerraform(struct!.parentName),
    port_name: cdktf.stringToTerraform(struct!.portName),
    receiveuntagged: cdktf.booleanToTerraform(struct!.receiveuntagged),
    sdx_formation_network_id: cdktf.stringToTerraform(struct!.sdxFormationNetworkId),
    vlan: cdktf.numberToTerraform(struct!.vlan),
    vlan_whitelist: cdktf.stringToTerraform(struct!.vlanWhitelist),
    vlan_whitelist_array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanWhitelistArray),
    vrid_list_ipv4: cdktf.stringToTerraform(struct!.vridListIpv4),
    vrid_list_ipv4_array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vridListIpv4Array),
    vrid_list_ipv6: cdktf.stringToTerraform(struct!.vridListIpv6),
    vrid_list_ipv6_array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vridListIpv6Array),
  }
}


export function provisionVpxNetworkInterfacesToHclTerraform(struct?: ProvisionVpxNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
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
    is_member_ifc: {
      value: cdktf.booleanToHclTerraform(struct!.isMemberIfc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_mgmt_ifc: {
      value: cdktf.booleanToHclTerraform(struct!.isMgmtIfc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_vlan_applied: {
      value: cdktf.booleanToHclTerraform(struct!.isVlanApplied),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    l2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.l2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_mode: {
      value: cdktf.stringToHclTerraform(struct!.macMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_device_id: {
      value: cdktf.stringToHclTerraform(struct!.managedDeviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_server: {
      value: cdktf.stringToHclTerraform(struct!.nameServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_id: {
      value: cdktf.stringToHclTerraform(struct!.parentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_name: {
      value: cdktf.stringToHclTerraform(struct!.parentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receiveuntagged: {
      value: cdktf.booleanToHclTerraform(struct!.receiveuntagged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sdx_formation_network_id: {
      value: cdktf.stringToHclTerraform(struct!.sdxFormationNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.numberToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_whitelist: {
      value: cdktf.stringToHclTerraform(struct!.vlanWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_whitelist_array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanWhitelistArray),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vrid_list_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.vridListIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid_list_ipv4_array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vridListIpv4Array),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vrid_list_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.vridListIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrid_list_ipv6_array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vridListIpv6Array),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProvisionVpxNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProvisionVpxNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._isMemberIfc !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMemberIfc = this._isMemberIfc;
    }
    if (this._isMgmtIfc !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMgmtIfc = this._isMgmtIfc;
    }
    if (this._isVlanApplied !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVlanApplied = this._isVlanApplied;
    }
    if (this._l2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2Enabled = this._l2Enabled;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._macMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.macMode = this._macMode;
    }
    if (this._managedDeviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDeviceId = this._managedDeviceId;
    }
    if (this._nameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServer = this._nameServer;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._parentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentId = this._parentId;
    }
    if (this._parentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentName = this._parentName;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._receiveuntagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveuntagged = this._receiveuntagged;
    }
    if (this._sdxFormationNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdxFormationNetworkId = this._sdxFormationNetworkId;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._vlanWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanWhitelist = this._vlanWhitelist;
    }
    if (this._vlanWhitelistArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanWhitelistArray = this._vlanWhitelistArray;
    }
    if (this._vridListIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridListIpv4 = this._vridListIpv4;
    }
    if (this._vridListIpv4Array !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridListIpv4Array = this._vridListIpv4Array;
    }
    if (this._vridListIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridListIpv6 = this._vridListIpv6;
    }
    if (this._vridListIpv6Array !== undefined) {
      hasAnyValues = true;
      internalValueResult.vridListIpv6Array = this._vridListIpv6Array;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProvisionVpxNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._interfaceName = undefined;
      this._ipAddress = undefined;
      this._isMemberIfc = undefined;
      this._isMgmtIfc = undefined;
      this._isVlanApplied = undefined;
      this._l2Enabled = undefined;
      this._macAddress = undefined;
      this._macMode = undefined;
      this._managedDeviceId = undefined;
      this._nameServer = undefined;
      this._netmask = undefined;
      this._networkInterfaceId = undefined;
      this._parentId = undefined;
      this._parentName = undefined;
      this._portName = undefined;
      this._receiveuntagged = undefined;
      this._sdxFormationNetworkId = undefined;
      this._vlan = undefined;
      this._vlanWhitelist = undefined;
      this._vlanWhitelistArray = undefined;
      this._vridListIpv4 = undefined;
      this._vridListIpv4Array = undefined;
      this._vridListIpv6 = undefined;
      this._vridListIpv6Array = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._interfaceName = value.interfaceName;
      this._ipAddress = value.ipAddress;
      this._isMemberIfc = value.isMemberIfc;
      this._isMgmtIfc = value.isMgmtIfc;
      this._isVlanApplied = value.isVlanApplied;
      this._l2Enabled = value.l2Enabled;
      this._macAddress = value.macAddress;
      this._macMode = value.macMode;
      this._managedDeviceId = value.managedDeviceId;
      this._nameServer = value.nameServer;
      this._netmask = value.netmask;
      this._networkInterfaceId = value.networkInterfaceId;
      this._parentId = value.parentId;
      this._parentName = value.parentName;
      this._portName = value.portName;
      this._receiveuntagged = value.receiveuntagged;
      this._sdxFormationNetworkId = value.sdxFormationNetworkId;
      this._vlan = value.vlan;
      this._vlanWhitelist = value.vlanWhitelist;
      this._vlanWhitelistArray = value.vlanWhitelistArray;
      this._vridListIpv4 = value.vridListIpv4;
      this._vridListIpv4Array = value.vridListIpv4Array;
      this._vridListIpv6 = value.vridListIpv6;
      this._vridListIpv6Array = value.vridListIpv6Array;
    }
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // interface_name - computed: true, optional: true, required: false
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

  // ip_address - computed: true, optional: true, required: false
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

  // is_member_ifc - computed: true, optional: true, required: false
  private _isMemberIfc?: boolean | cdktf.IResolvable; 
  public get isMemberIfc() {
    return this.getBooleanAttribute('is_member_ifc');
  }
  public set isMemberIfc(value: boolean | cdktf.IResolvable) {
    this._isMemberIfc = value;
  }
  public resetIsMemberIfc() {
    this._isMemberIfc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMemberIfcInput() {
    return this._isMemberIfc;
  }

  // is_mgmt_ifc - computed: true, optional: true, required: false
  private _isMgmtIfc?: boolean | cdktf.IResolvable; 
  public get isMgmtIfc() {
    return this.getBooleanAttribute('is_mgmt_ifc');
  }
  public set isMgmtIfc(value: boolean | cdktf.IResolvable) {
    this._isMgmtIfc = value;
  }
  public resetIsMgmtIfc() {
    this._isMgmtIfc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMgmtIfcInput() {
    return this._isMgmtIfc;
  }

  // is_vlan_applied - computed: true, optional: true, required: false
  private _isVlanApplied?: boolean | cdktf.IResolvable; 
  public get isVlanApplied() {
    return this.getBooleanAttribute('is_vlan_applied');
  }
  public set isVlanApplied(value: boolean | cdktf.IResolvable) {
    this._isVlanApplied = value;
  }
  public resetIsVlanApplied() {
    this._isVlanApplied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVlanAppliedInput() {
    return this._isVlanApplied;
  }

  // l2_enabled - computed: true, optional: true, required: false
  private _l2Enabled?: boolean | cdktf.IResolvable; 
  public get l2Enabled() {
    return this.getBooleanAttribute('l2_enabled');
  }
  public set l2Enabled(value: boolean | cdktf.IResolvable) {
    this._l2Enabled = value;
  }
  public resetL2Enabled() {
    this._l2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2EnabledInput() {
    return this._l2Enabled;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mac_mode - computed: true, optional: true, required: false
  private _macMode?: string; 
  public get macMode() {
    return this.getStringAttribute('mac_mode');
  }
  public set macMode(value: string) {
    this._macMode = value;
  }
  public resetMacMode() {
    this._macMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macModeInput() {
    return this._macMode;
  }

  // managed_device_id - computed: true, optional: true, required: false
  private _managedDeviceId?: string; 
  public get managedDeviceId() {
    return this.getStringAttribute('managed_device_id');
  }
  public set managedDeviceId(value: string) {
    this._managedDeviceId = value;
  }
  public resetManagedDeviceId() {
    this._managedDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDeviceIdInput() {
    return this._managedDeviceId;
  }

  // name_server - computed: true, optional: true, required: false
  private _nameServer?: string; 
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }
  public set nameServer(value: string) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // parent_name - computed: true, optional: true, required: false
  private _parentName?: string; 
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }
  public set parentName(value: string) {
    this._parentName = value;
  }
  public resetParentName() {
    this._parentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentNameInput() {
    return this._parentName;
  }

  // port_name - computed: true, optional: false, required: true
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // receiveuntagged - computed: true, optional: true, required: false
  private _receiveuntagged?: boolean | cdktf.IResolvable; 
  public get receiveuntagged() {
    return this.getBooleanAttribute('receiveuntagged');
  }
  public set receiveuntagged(value: boolean | cdktf.IResolvable) {
    this._receiveuntagged = value;
  }
  public resetReceiveuntagged() {
    this._receiveuntagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveuntaggedInput() {
    return this._receiveuntagged;
  }

  // sdx_formation_network_id - computed: true, optional: true, required: false
  private _sdxFormationNetworkId?: string; 
  public get sdxFormationNetworkId() {
    return this.getStringAttribute('sdx_formation_network_id');
  }
  public set sdxFormationNetworkId(value: string) {
    this._sdxFormationNetworkId = value;
  }
  public resetSdxFormationNetworkId() {
    this._sdxFormationNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdxFormationNetworkIdInput() {
    return this._sdxFormationNetworkId;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vlan_whitelist - computed: true, optional: true, required: false
  private _vlanWhitelist?: string; 
  public get vlanWhitelist() {
    return this.getStringAttribute('vlan_whitelist');
  }
  public set vlanWhitelist(value: string) {
    this._vlanWhitelist = value;
  }
  public resetVlanWhitelist() {
    this._vlanWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanWhitelistInput() {
    return this._vlanWhitelist;
  }

  // vlan_whitelist_array - computed: true, optional: true, required: false
  private _vlanWhitelistArray?: string[]; 
  public get vlanWhitelistArray() {
    return this.getListAttribute('vlan_whitelist_array');
  }
  public set vlanWhitelistArray(value: string[]) {
    this._vlanWhitelistArray = value;
  }
  public resetVlanWhitelistArray() {
    this._vlanWhitelistArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanWhitelistArrayInput() {
    return this._vlanWhitelistArray;
  }

  // vrid_list_ipv4 - computed: true, optional: true, required: false
  private _vridListIpv4?: string; 
  public get vridListIpv4() {
    return this.getStringAttribute('vrid_list_ipv4');
  }
  public set vridListIpv4(value: string) {
    this._vridListIpv4 = value;
  }
  public resetVridListIpv4() {
    this._vridListIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridListIpv4Input() {
    return this._vridListIpv4;
  }

  // vrid_list_ipv4_array - computed: true, optional: true, required: false
  private _vridListIpv4Array?: string[]; 
  public get vridListIpv4Array() {
    return this.getListAttribute('vrid_list_ipv4_array');
  }
  public set vridListIpv4Array(value: string[]) {
    this._vridListIpv4Array = value;
  }
  public resetVridListIpv4Array() {
    this._vridListIpv4Array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridListIpv4ArrayInput() {
    return this._vridListIpv4Array;
  }

  // vrid_list_ipv6 - computed: true, optional: true, required: false
  private _vridListIpv6?: string; 
  public get vridListIpv6() {
    return this.getStringAttribute('vrid_list_ipv6');
  }
  public set vridListIpv6(value: string) {
    this._vridListIpv6 = value;
  }
  public resetVridListIpv6() {
    this._vridListIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridListIpv6Input() {
    return this._vridListIpv6;
  }

  // vrid_list_ipv6_array - computed: true, optional: true, required: false
  private _vridListIpv6Array?: string[]; 
  public get vridListIpv6Array() {
    return this.getListAttribute('vrid_list_ipv6_array');
  }
  public set vridListIpv6Array(value: string[]) {
    this._vridListIpv6Array = value;
  }
  public resetVridListIpv6Array() {
    this._vridListIpv6Array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridListIpv6ArrayInput() {
    return this._vridListIpv6Array;
  }
}

export class ProvisionVpxNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : ProvisionVpxNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ProvisionVpxNetworkInterfacesOutputReference {
    return new ProvisionVpxNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx netscalersdx_provision_vpx}
*/
export class ProvisionVpx extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_provision_vpx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProvisionVpx resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProvisionVpx to import
  * @param importFromId The id of the existing ProvisionVpx that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProvisionVpx to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_provision_vpx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/provision_vpx netscalersdx_provision_vpx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProvisionVpxConfig
  */
  public constructor(scope: Construct, id: string, config: ProvisionVpxConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_provision_vpx',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backplane = config.backplane;
    this._burstPriority = config.burstPriority;
    this._cmdPolicy = config.cmdPolicy;
    this._configType = config.configType;
    this._cryptoChangeRequiresReboot = config.cryptoChangeRequiresReboot;
    this._customid = config.customid;
    this._datacenterId = config.datacenterId;
    this._description = config.description;
    this._deviceFamily = config.deviceFamily;
    this._displayName = config.displayName;
    this._domainName = config.domainName;
    this._entBwAvailable = config.entBwAvailable;
    this._entBwConfig = config.entBwConfig;
    this._entBwTotal = config.entBwTotal;
    this._fipsPartitionName = config.fipsPartitionName;
    this._gateway = config.gateway;
    this._gatewayIpv6 = config.gatewayIpv6;
    this._hostIpAddress = config.hostIpAddress;
    this._hostname = config.hostname;
    this._id = config.id;
    this._if01 = config.if01;
    this._if02 = config.if02;
    this._ifInternalIpEnabled = config.ifInternalIpEnabled;
    this._imageName = config.imageName;
    this._instanceMode = config.instanceMode;
    this._internalIpAddress = config.internalIpAddress;
    this._ipAddress = config.ipAddress;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._isClip = config.isClip;
    this._isManaged = config.isManaged;
    this._isNewCrypto = config.isNewCrypto;
    this._iscco = config.iscco;
    this._l2Enabled = config.l2Enabled;
    this._laMgmt = config.laMgmt;
    this._lastUpdatedTime = config.lastUpdatedTime;
    this._license = config.license;
    this._licenseEdition = config.licenseEdition;
    this._licenseGraceTime = config.licenseGraceTime;
    this._mastoolsVersion = config.mastoolsVersion;
    this._maxBurstThroughput = config.maxBurstThroughput;
    this._metricsCollection = config.metricsCollection;
    this._mgmtIpAddress = config.mgmtIpAddress;
    this._name = config.name;
    this._netmask = config.netmask;
    this._networkInterfaces.internalValue = config.networkInterfaces;
    this._nexthop = config.nexthop;
    this._nexthopV6 = config.nexthopV6;
    this._nodeId = config.nodeId;
    this._nsIpAddress = config.nsIpAddress;
    this._nsvlanId = config.nsvlanId;
    this._nsvlanInterfaces = config.nsvlanInterfaces;
    this._nsvlanTagged = config.nsvlanTagged;
    this._numPes = config.numPes;
    this._numberOfAcu = config.numberOfAcu;
    this._numberOfCores = config.numberOfCores;
    this._numberOfScu = config.numberOfScu;
    this._numberOfSslCards = config.numberOfSslCards;
    this._numberOfSslCores = config.numberOfSslCores;
    this._numberOfSslCoresUp = config.numberOfSslCoresUp;
    this._password = config.password;
    this._pltBwAvailable = config.pltBwAvailable;
    this._pltBwConfig = config.pltBwConfig;
    this._pltBwTotal = config.pltBwTotal;
    this._pluginIpAddress = config.pluginIpAddress;
    this._pluginNetmask = config.pluginNetmask;
    this._pps = config.pps;
    this._profileName = config.profileName;
    this._profilePassword = config.profilePassword;
    this._profileUsername = config.profileUsername;
    this._rebootVmOnCpuChange = config.rebootVmOnCpuChange;
    this._saveConfig = config.saveConfig;
    this._state = config.state;
    this._stdBwAvailable = config.stdBwAvailable;
    this._stdBwConfig = config.stdBwConfig;
    this._stdBwTotal = config.stdBwTotal;
    this._templateName = config.templateName;
    this._throughput = config.throughput;
    this._throughputAllocationMode = config.throughputAllocationMode;
    this._throughputLimit = config.throughputLimit;
    this._type = config.type;
    this._username = config.username;
    this._vcpuConfig = config.vcpuConfig;
    this._vlanId01 = config.vlanId01;
    this._vlanId02 = config.vlanId02;
    this._vlanType = config.vlanType;
    this._vmMemoryTotal = config.vmMemoryTotal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backplane - computed: true, optional: true, required: false
  private _backplane?: string; 
  public get backplane() {
    return this.getStringAttribute('backplane');
  }
  public set backplane(value: string) {
    this._backplane = value;
  }
  public resetBackplane() {
    this._backplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backplaneInput() {
    return this._backplane;
  }

  // burst_priority - computed: true, optional: true, required: false
  private _burstPriority?: number; 
  public get burstPriority() {
    return this.getNumberAttribute('burst_priority');
  }
  public set burstPriority(value: number) {
    this._burstPriority = value;
  }
  public resetBurstPriority() {
    this._burstPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstPriorityInput() {
    return this._burstPriority;
  }

  // cmd_policy - computed: true, optional: true, required: false
  private _cmdPolicy?: string; 
  public get cmdPolicy() {
    return this.getStringAttribute('cmd_policy');
  }
  public set cmdPolicy(value: string) {
    this._cmdPolicy = value;
  }
  public resetCmdPolicy() {
    this._cmdPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdPolicyInput() {
    return this._cmdPolicy;
  }

  // config_type - computed: true, optional: true, required: false
  private _configType?: number; 
  public get configType() {
    return this.getNumberAttribute('config_type');
  }
  public set configType(value: number) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // crypto_change_requires_reboot - computed: true, optional: true, required: false
  private _cryptoChangeRequiresReboot?: boolean | cdktf.IResolvable; 
  public get cryptoChangeRequiresReboot() {
    return this.getBooleanAttribute('crypto_change_requires_reboot');
  }
  public set cryptoChangeRequiresReboot(value: boolean | cdktf.IResolvable) {
    this._cryptoChangeRequiresReboot = value;
  }
  public resetCryptoChangeRequiresReboot() {
    this._cryptoChangeRequiresReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoChangeRequiresRebootInput() {
    return this._cryptoChangeRequiresReboot;
  }

  // customid - computed: true, optional: true, required: false
  private _customid?: string; 
  public get customid() {
    return this.getStringAttribute('customid');
  }
  public set customid(value: string) {
    this._customid = value;
  }
  public resetCustomid() {
    this._customid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customidInput() {
    return this._customid;
  }

  // datacenter_id - computed: true, optional: true, required: false
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  public resetDatacenterId() {
    this._datacenterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // description - computed: true, optional: true, required: false
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

  // device_family - computed: true, optional: true, required: false
  private _deviceFamily?: string; 
  public get deviceFamily() {
    return this.getStringAttribute('device_family');
  }
  public set deviceFamily(value: string) {
    this._deviceFamily = value;
  }
  public resetDeviceFamily() {
    this._deviceFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFamilyInput() {
    return this._deviceFamily;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // ent_bw_available - computed: true, optional: true, required: false
  private _entBwAvailable?: number; 
  public get entBwAvailable() {
    return this.getNumberAttribute('ent_bw_available');
  }
  public set entBwAvailable(value: number) {
    this._entBwAvailable = value;
  }
  public resetEntBwAvailable() {
    this._entBwAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entBwAvailableInput() {
    return this._entBwAvailable;
  }

  // ent_bw_config - computed: true, optional: true, required: false
  private _entBwConfig?: number; 
  public get entBwConfig() {
    return this.getNumberAttribute('ent_bw_config');
  }
  public set entBwConfig(value: number) {
    this._entBwConfig = value;
  }
  public resetEntBwConfig() {
    this._entBwConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entBwConfigInput() {
    return this._entBwConfig;
  }

  // ent_bw_total - computed: true, optional: true, required: false
  private _entBwTotal?: number; 
  public get entBwTotal() {
    return this.getNumberAttribute('ent_bw_total');
  }
  public set entBwTotal(value: number) {
    this._entBwTotal = value;
  }
  public resetEntBwTotal() {
    this._entBwTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entBwTotalInput() {
    return this._entBwTotal;
  }

  // fips_partition_name - computed: true, optional: true, required: false
  private _fipsPartitionName?: string; 
  public get fipsPartitionName() {
    return this.getStringAttribute('fips_partition_name');
  }
  public set fipsPartitionName(value: string) {
    this._fipsPartitionName = value;
  }
  public resetFipsPartitionName() {
    this._fipsPartitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsPartitionNameInput() {
    return this._fipsPartitionName;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway_ipv6 - computed: true, optional: true, required: false
  private _gatewayIpv6?: string; 
  public get gatewayIpv6() {
    return this.getStringAttribute('gateway_ipv6');
  }
  public set gatewayIpv6(value: string) {
    this._gatewayIpv6 = value;
  }
  public resetGatewayIpv6() {
    this._gatewayIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpv6Input() {
    return this._gatewayIpv6;
  }

  // host_ip_address - computed: true, optional: true, required: false
  private _hostIpAddress?: string; 
  public get hostIpAddress() {
    return this.getStringAttribute('host_ip_address');
  }
  public set hostIpAddress(value: string) {
    this._hostIpAddress = value;
  }
  public resetHostIpAddress() {
    this._hostIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpAddressInput() {
    return this._hostIpAddress;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // if_0_1 - computed: true, optional: true, required: false
  private _if01?: boolean | cdktf.IResolvable; 
  public get if01() {
    return this.getBooleanAttribute('if_0_1');
  }
  public set if01(value: boolean | cdktf.IResolvable) {
    this._if01 = value;
  }
  public resetIf01() {
    this._if01 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get if01Input() {
    return this._if01;
  }

  // if_0_2 - computed: true, optional: true, required: false
  private _if02?: boolean | cdktf.IResolvable; 
  public get if02() {
    return this.getBooleanAttribute('if_0_2');
  }
  public set if02(value: boolean | cdktf.IResolvable) {
    this._if02 = value;
  }
  public resetIf02() {
    this._if02 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get if02Input() {
    return this._if02;
  }

  // if_internal_ip_enabled - computed: true, optional: true, required: false
  private _ifInternalIpEnabled?: boolean | cdktf.IResolvable; 
  public get ifInternalIpEnabled() {
    return this.getBooleanAttribute('if_internal_ip_enabled');
  }
  public set ifInternalIpEnabled(value: boolean | cdktf.IResolvable) {
    this._ifInternalIpEnabled = value;
  }
  public resetIfInternalIpEnabled() {
    this._ifInternalIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInternalIpEnabledInput() {
    return this._ifInternalIpEnabled;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // instance_mode - computed: true, optional: true, required: false
  private _instanceMode?: string; 
  public get instanceMode() {
    return this.getStringAttribute('instance_mode');
  }
  public set instanceMode(value: string) {
    this._instanceMode = value;
  }
  public resetInstanceMode() {
    this._instanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceModeInput() {
    return this._instanceMode;
  }

  // internal_ip_address - computed: true, optional: true, required: false
  private _internalIpAddress?: string; 
  public get internalIpAddress() {
    return this.getStringAttribute('internal_ip_address');
  }
  public set internalIpAddress(value: string) {
    this._internalIpAddress = value;
  }
  public resetInternalIpAddress() {
    this._internalIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpAddressInput() {
    return this._internalIpAddress;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv4_address - computed: true, optional: true, required: false
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

  // ipv6_address - computed: true, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // is_clip - computed: true, optional: true, required: false
  private _isClip?: boolean | cdktf.IResolvable; 
  public get isClip() {
    return this.getBooleanAttribute('is_clip');
  }
  public set isClip(value: boolean | cdktf.IResolvable) {
    this._isClip = value;
  }
  public resetIsClip() {
    this._isClip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isClipInput() {
    return this._isClip;
  }

  // is_managed - computed: true, optional: true, required: false
  private _isManaged?: boolean | cdktf.IResolvable; 
  public get isManaged() {
    return this.getBooleanAttribute('is_managed');
  }
  public set isManaged(value: boolean | cdktf.IResolvable) {
    this._isManaged = value;
  }
  public resetIsManaged() {
    this._isManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagedInput() {
    return this._isManaged;
  }

  // is_new_crypto - computed: true, optional: true, required: false
  private _isNewCrypto?: boolean | cdktf.IResolvable; 
  public get isNewCrypto() {
    return this.getBooleanAttribute('is_new_crypto');
  }
  public set isNewCrypto(value: boolean | cdktf.IResolvable) {
    this._isNewCrypto = value;
  }
  public resetIsNewCrypto() {
    this._isNewCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNewCryptoInput() {
    return this._isNewCrypto;
  }

  // iscco - computed: true, optional: true, required: false
  private _iscco?: boolean | cdktf.IResolvable; 
  public get iscco() {
    return this.getBooleanAttribute('iscco');
  }
  public set iscco(value: boolean | cdktf.IResolvable) {
    this._iscco = value;
  }
  public resetIscco() {
    this._iscco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isccoInput() {
    return this._iscco;
  }

  // l2_enabled - computed: true, optional: true, required: false
  private _l2Enabled?: boolean | cdktf.IResolvable; 
  public get l2Enabled() {
    return this.getBooleanAttribute('l2_enabled');
  }
  public set l2Enabled(value: boolean | cdktf.IResolvable) {
    this._l2Enabled = value;
  }
  public resetL2Enabled() {
    this._l2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2EnabledInput() {
    return this._l2Enabled;
  }

  // la_mgmt - computed: true, optional: true, required: false
  private _laMgmt?: boolean | cdktf.IResolvable; 
  public get laMgmt() {
    return this.getBooleanAttribute('la_mgmt');
  }
  public set laMgmt(value: boolean | cdktf.IResolvable) {
    this._laMgmt = value;
  }
  public resetLaMgmt() {
    this._laMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get laMgmtInput() {
    return this._laMgmt;
  }

  // last_updated_time - computed: true, optional: true, required: false
  private _lastUpdatedTime?: number; 
  public get lastUpdatedTime() {
    return this.getNumberAttribute('last_updated_time');
  }
  public set lastUpdatedTime(value: number) {
    this._lastUpdatedTime = value;
  }
  public resetLastUpdatedTime() {
    this._lastUpdatedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedTimeInput() {
    return this._lastUpdatedTime;
  }

  // license - computed: true, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
  }

  // license_edition - computed: true, optional: true, required: false
  private _licenseEdition?: string; 
  public get licenseEdition() {
    return this.getStringAttribute('license_edition');
  }
  public set licenseEdition(value: string) {
    this._licenseEdition = value;
  }
  public resetLicenseEdition() {
    this._licenseEdition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseEditionInput() {
    return this._licenseEdition;
  }

  // license_grace_time - computed: true, optional: true, required: false
  private _licenseGraceTime?: number; 
  public get licenseGraceTime() {
    return this.getNumberAttribute('license_grace_time');
  }
  public set licenseGraceTime(value: number) {
    this._licenseGraceTime = value;
  }
  public resetLicenseGraceTime() {
    this._licenseGraceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseGraceTimeInput() {
    return this._licenseGraceTime;
  }

  // mastools_version - computed: true, optional: true, required: false
  private _mastoolsVersion?: string; 
  public get mastoolsVersion() {
    return this.getStringAttribute('mastools_version');
  }
  public set mastoolsVersion(value: string) {
    this._mastoolsVersion = value;
  }
  public resetMastoolsVersion() {
    this._mastoolsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mastoolsVersionInput() {
    return this._mastoolsVersion;
  }

  // max_burst_throughput - computed: true, optional: true, required: false
  private _maxBurstThroughput?: number; 
  public get maxBurstThroughput() {
    return this.getNumberAttribute('max_burst_throughput');
  }
  public set maxBurstThroughput(value: number) {
    this._maxBurstThroughput = value;
  }
  public resetMaxBurstThroughput() {
    this._maxBurstThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBurstThroughputInput() {
    return this._maxBurstThroughput;
  }

  // metrics_collection - computed: true, optional: true, required: false
  private _metricsCollection?: boolean | cdktf.IResolvable; 
  public get metricsCollection() {
    return this.getBooleanAttribute('metrics_collection');
  }
  public set metricsCollection(value: boolean | cdktf.IResolvable) {
    this._metricsCollection = value;
  }
  public resetMetricsCollection() {
    this._metricsCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsCollectionInput() {
    return this._metricsCollection;
  }

  // mgmt_ip_address - computed: false, optional: true, required: false
  private _mgmtIpAddress?: string; 
  public get mgmtIpAddress() {
    return this.getStringAttribute('mgmt_ip_address');
  }
  public set mgmtIpAddress(value: string) {
    this._mgmtIpAddress = value;
  }
  public resetMgmtIpAddress() {
    this._mgmtIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpAddressInput() {
    return this._mgmtIpAddress;
  }

  // name - computed: true, optional: true, required: false
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

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // network_interfaces - computed: true, optional: true, required: false
  private _networkInterfaces = new ProvisionVpxNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: ProvisionVpxNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }

  // nexthop - computed: true, optional: true, required: false
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  public resetNexthop() {
    this._nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // nexthop_v6 - computed: true, optional: true, required: false
  private _nexthopV6?: string; 
  public get nexthopV6() {
    return this.getStringAttribute('nexthop_v6');
  }
  public set nexthopV6(value: string) {
    this._nexthopV6 = value;
  }
  public resetNexthopV6() {
    this._nexthopV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopV6Input() {
    return this._nexthopV6;
  }

  // node_id - computed: true, optional: true, required: false
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

  // ns_ip_address - computed: false, optional: true, required: false
  private _nsIpAddress?: string; 
  public get nsIpAddress() {
    return this.getStringAttribute('ns_ip_address');
  }
  public set nsIpAddress(value: string) {
    this._nsIpAddress = value;
  }
  public resetNsIpAddress() {
    this._nsIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIpAddressInput() {
    return this._nsIpAddress;
  }

  // nsvlan_id - computed: true, optional: true, required: false
  private _nsvlanId?: number; 
  public get nsvlanId() {
    return this.getNumberAttribute('nsvlan_id');
  }
  public set nsvlanId(value: number) {
    this._nsvlanId = value;
  }
  public resetNsvlanId() {
    this._nsvlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsvlanIdInput() {
    return this._nsvlanId;
  }

  // nsvlan_interfaces - computed: true, optional: true, required: false
  private _nsvlanInterfaces?: string[]; 
  public get nsvlanInterfaces() {
    return this.getListAttribute('nsvlan_interfaces');
  }
  public set nsvlanInterfaces(value: string[]) {
    this._nsvlanInterfaces = value;
  }
  public resetNsvlanInterfaces() {
    this._nsvlanInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsvlanInterfacesInput() {
    return this._nsvlanInterfaces;
  }

  // nsvlan_tagged - computed: true, optional: true, required: false
  private _nsvlanTagged?: boolean | cdktf.IResolvable; 
  public get nsvlanTagged() {
    return this.getBooleanAttribute('nsvlan_tagged');
  }
  public set nsvlanTagged(value: boolean | cdktf.IResolvable) {
    this._nsvlanTagged = value;
  }
  public resetNsvlanTagged() {
    this._nsvlanTagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsvlanTaggedInput() {
    return this._nsvlanTagged;
  }

  // num_pes - computed: true, optional: true, required: false
  private _numPes?: number; 
  public get numPes() {
    return this.getNumberAttribute('num_pes');
  }
  public set numPes(value: number) {
    this._numPes = value;
  }
  public resetNumPes() {
    this._numPes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPesInput() {
    return this._numPes;
  }

  // number_of_acu - computed: true, optional: true, required: false
  private _numberOfAcu?: number; 
  public get numberOfAcu() {
    return this.getNumberAttribute('number_of_acu');
  }
  public set numberOfAcu(value: number) {
    this._numberOfAcu = value;
  }
  public resetNumberOfAcu() {
    this._numberOfAcu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAcuInput() {
    return this._numberOfAcu;
  }

  // number_of_cores - computed: true, optional: true, required: false
  private _numberOfCores?: number; 
  public get numberOfCores() {
    return this.getNumberAttribute('number_of_cores');
  }
  public set numberOfCores(value: number) {
    this._numberOfCores = value;
  }
  public resetNumberOfCores() {
    this._numberOfCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCoresInput() {
    return this._numberOfCores;
  }

  // number_of_scu - computed: true, optional: true, required: false
  private _numberOfScu?: number; 
  public get numberOfScu() {
    return this.getNumberAttribute('number_of_scu');
  }
  public set numberOfScu(value: number) {
    this._numberOfScu = value;
  }
  public resetNumberOfScu() {
    this._numberOfScu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfScuInput() {
    return this._numberOfScu;
  }

  // number_of_ssl_cards - computed: true, optional: true, required: false
  private _numberOfSslCards?: number; 
  public get numberOfSslCards() {
    return this.getNumberAttribute('number_of_ssl_cards');
  }
  public set numberOfSslCards(value: number) {
    this._numberOfSslCards = value;
  }
  public resetNumberOfSslCards() {
    this._numberOfSslCards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfSslCardsInput() {
    return this._numberOfSslCards;
  }

  // number_of_ssl_cores - computed: true, optional: true, required: false
  private _numberOfSslCores?: number; 
  public get numberOfSslCores() {
    return this.getNumberAttribute('number_of_ssl_cores');
  }
  public set numberOfSslCores(value: number) {
    this._numberOfSslCores = value;
  }
  public resetNumberOfSslCores() {
    this._numberOfSslCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfSslCoresInput() {
    return this._numberOfSslCores;
  }

  // number_of_ssl_cores_up - computed: true, optional: true, required: false
  private _numberOfSslCoresUp?: number; 
  public get numberOfSslCoresUp() {
    return this.getNumberAttribute('number_of_ssl_cores_up');
  }
  public set numberOfSslCoresUp(value: number) {
    this._numberOfSslCoresUp = value;
  }
  public resetNumberOfSslCoresUp() {
    this._numberOfSslCoresUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfSslCoresUpInput() {
    return this._numberOfSslCoresUp;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plt_bw_available - computed: true, optional: true, required: false
  private _pltBwAvailable?: number; 
  public get pltBwAvailable() {
    return this.getNumberAttribute('plt_bw_available');
  }
  public set pltBwAvailable(value: number) {
    this._pltBwAvailable = value;
  }
  public resetPltBwAvailable() {
    this._pltBwAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pltBwAvailableInput() {
    return this._pltBwAvailable;
  }

  // plt_bw_config - computed: true, optional: true, required: false
  private _pltBwConfig?: number; 
  public get pltBwConfig() {
    return this.getNumberAttribute('plt_bw_config');
  }
  public set pltBwConfig(value: number) {
    this._pltBwConfig = value;
  }
  public resetPltBwConfig() {
    this._pltBwConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pltBwConfigInput() {
    return this._pltBwConfig;
  }

  // plt_bw_total - computed: true, optional: true, required: false
  private _pltBwTotal?: number; 
  public get pltBwTotal() {
    return this.getNumberAttribute('plt_bw_total');
  }
  public set pltBwTotal(value: number) {
    this._pltBwTotal = value;
  }
  public resetPltBwTotal() {
    this._pltBwTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pltBwTotalInput() {
    return this._pltBwTotal;
  }

  // plugin_ip_address - computed: true, optional: true, required: false
  private _pluginIpAddress?: string; 
  public get pluginIpAddress() {
    return this.getStringAttribute('plugin_ip_address');
  }
  public set pluginIpAddress(value: string) {
    this._pluginIpAddress = value;
  }
  public resetPluginIpAddress() {
    this._pluginIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIpAddressInput() {
    return this._pluginIpAddress;
  }

  // plugin_netmask - computed: true, optional: true, required: false
  private _pluginNetmask?: string; 
  public get pluginNetmask() {
    return this.getStringAttribute('plugin_netmask');
  }
  public set pluginNetmask(value: string) {
    this._pluginNetmask = value;
  }
  public resetPluginNetmask() {
    this._pluginNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNetmaskInput() {
    return this._pluginNetmask;
  }

  // pps - computed: true, optional: true, required: false
  private _pps?: number; 
  public get pps() {
    return this.getNumberAttribute('pps');
  }
  public set pps(value: number) {
    this._pps = value;
  }
  public resetPps() {
    this._pps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppsInput() {
    return this._pps;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // profile_password - computed: false, optional: true, required: false
  private _profilePassword?: string; 
  public get profilePassword() {
    return this.getStringAttribute('profile_password');
  }
  public set profilePassword(value: string) {
    this._profilePassword = value;
  }
  public resetProfilePassword() {
    this._profilePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePasswordInput() {
    return this._profilePassword;
  }

  // profile_username - computed: true, optional: true, required: false
  private _profileUsername?: string; 
  public get profileUsername() {
    return this.getStringAttribute('profile_username');
  }
  public set profileUsername(value: string) {
    this._profileUsername = value;
  }
  public resetProfileUsername() {
    this._profileUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUsernameInput() {
    return this._profileUsername;
  }

  // reboot_vm_on_cpu_change - computed: true, optional: true, required: false
  private _rebootVmOnCpuChange?: boolean | cdktf.IResolvable; 
  public get rebootVmOnCpuChange() {
    return this.getBooleanAttribute('reboot_vm_on_cpu_change');
  }
  public set rebootVmOnCpuChange(value: boolean | cdktf.IResolvable) {
    this._rebootVmOnCpuChange = value;
  }
  public resetRebootVmOnCpuChange() {
    this._rebootVmOnCpuChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootVmOnCpuChangeInput() {
    return this._rebootVmOnCpuChange;
  }

  // save_config - computed: true, optional: true, required: false
  private _saveConfig?: boolean | cdktf.IResolvable; 
  public get saveConfig() {
    return this.getBooleanAttribute('save_config');
  }
  public set saveConfig(value: boolean | cdktf.IResolvable) {
    this._saveConfig = value;
  }
  public resetSaveConfig() {
    this._saveConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveConfigInput() {
    return this._saveConfig;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // std_bw_available - computed: true, optional: true, required: false
  private _stdBwAvailable?: number; 
  public get stdBwAvailable() {
    return this.getNumberAttribute('std_bw_available');
  }
  public set stdBwAvailable(value: number) {
    this._stdBwAvailable = value;
  }
  public resetStdBwAvailable() {
    this._stdBwAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdBwAvailableInput() {
    return this._stdBwAvailable;
  }

  // std_bw_config - computed: true, optional: true, required: false
  private _stdBwConfig?: number; 
  public get stdBwConfig() {
    return this.getNumberAttribute('std_bw_config');
  }
  public set stdBwConfig(value: number) {
    this._stdBwConfig = value;
  }
  public resetStdBwConfig() {
    this._stdBwConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdBwConfigInput() {
    return this._stdBwConfig;
  }

  // std_bw_total - computed: true, optional: true, required: false
  private _stdBwTotal?: number; 
  public get stdBwTotal() {
    return this.getNumberAttribute('std_bw_total');
  }
  public set stdBwTotal(value: number) {
    this._stdBwTotal = value;
  }
  public resetStdBwTotal() {
    this._stdBwTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdBwTotalInput() {
    return this._stdBwTotal;
  }

  // template_name - computed: true, optional: true, required: false
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

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // throughput_allocation_mode - computed: true, optional: true, required: false
  private _throughputAllocationMode?: number; 
  public get throughputAllocationMode() {
    return this.getNumberAttribute('throughput_allocation_mode');
  }
  public set throughputAllocationMode(value: number) {
    this._throughputAllocationMode = value;
  }
  public resetThroughputAllocationMode() {
    this._throughputAllocationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputAllocationModeInput() {
    return this._throughputAllocationMode;
  }

  // throughput_limit - computed: true, optional: true, required: false
  private _throughputLimit?: number; 
  public get throughputLimit() {
    return this.getNumberAttribute('throughput_limit');
  }
  public set throughputLimit(value: number) {
    this._throughputLimit = value;
  }
  public resetThroughputLimit() {
    this._throughputLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputLimitInput() {
    return this._throughputLimit;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vcpu_config - computed: true, optional: true, required: false
  private _vcpuConfig?: number; 
  public get vcpuConfig() {
    return this.getNumberAttribute('vcpu_config');
  }
  public set vcpuConfig(value: number) {
    this._vcpuConfig = value;
  }
  public resetVcpuConfig() {
    this._vcpuConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuConfigInput() {
    return this._vcpuConfig;
  }

  // vlan_id_0_1 - computed: true, optional: true, required: false
  private _vlanId01?: number; 
  public get vlanId01() {
    return this.getNumberAttribute('vlan_id_0_1');
  }
  public set vlanId01(value: number) {
    this._vlanId01 = value;
  }
  public resetVlanId01() {
    this._vlanId01 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanId01Input() {
    return this._vlanId01;
  }

  // vlan_id_0_2 - computed: true, optional: true, required: false
  private _vlanId02?: number; 
  public get vlanId02() {
    return this.getNumberAttribute('vlan_id_0_2');
  }
  public set vlanId02(value: number) {
    this._vlanId02 = value;
  }
  public resetVlanId02() {
    this._vlanId02 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanId02Input() {
    return this._vlanId02;
  }

  // vlan_type - computed: true, optional: true, required: false
  private _vlanType?: number; 
  public get vlanType() {
    return this.getNumberAttribute('vlan_type');
  }
  public set vlanType(value: number) {
    this._vlanType = value;
  }
  public resetVlanType() {
    this._vlanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTypeInput() {
    return this._vlanType;
  }

  // vm_memory_total - computed: true, optional: true, required: false
  private _vmMemoryTotal?: number; 
  public get vmMemoryTotal() {
    return this.getNumberAttribute('vm_memory_total');
  }
  public set vmMemoryTotal(value: number) {
    this._vmMemoryTotal = value;
  }
  public resetVmMemoryTotal() {
    this._vmMemoryTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmMemoryTotalInput() {
    return this._vmMemoryTotal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backplane: cdktf.stringToTerraform(this._backplane),
      burst_priority: cdktf.numberToTerraform(this._burstPriority),
      cmd_policy: cdktf.stringToTerraform(this._cmdPolicy),
      config_type: cdktf.numberToTerraform(this._configType),
      crypto_change_requires_reboot: cdktf.booleanToTerraform(this._cryptoChangeRequiresReboot),
      customid: cdktf.stringToTerraform(this._customid),
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      description: cdktf.stringToTerraform(this._description),
      device_family: cdktf.stringToTerraform(this._deviceFamily),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain_name: cdktf.stringToTerraform(this._domainName),
      ent_bw_available: cdktf.numberToTerraform(this._entBwAvailable),
      ent_bw_config: cdktf.numberToTerraform(this._entBwConfig),
      ent_bw_total: cdktf.numberToTerraform(this._entBwTotal),
      fips_partition_name: cdktf.stringToTerraform(this._fipsPartitionName),
      gateway: cdktf.stringToTerraform(this._gateway),
      gateway_ipv6: cdktf.stringToTerraform(this._gatewayIpv6),
      host_ip_address: cdktf.stringToTerraform(this._hostIpAddress),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      if_0_1: cdktf.booleanToTerraform(this._if01),
      if_0_2: cdktf.booleanToTerraform(this._if02),
      if_internal_ip_enabled: cdktf.booleanToTerraform(this._ifInternalIpEnabled),
      image_name: cdktf.stringToTerraform(this._imageName),
      instance_mode: cdktf.stringToTerraform(this._instanceMode),
      internal_ip_address: cdktf.stringToTerraform(this._internalIpAddress),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      is_clip: cdktf.booleanToTerraform(this._isClip),
      is_managed: cdktf.booleanToTerraform(this._isManaged),
      is_new_crypto: cdktf.booleanToTerraform(this._isNewCrypto),
      iscco: cdktf.booleanToTerraform(this._iscco),
      l2_enabled: cdktf.booleanToTerraform(this._l2Enabled),
      la_mgmt: cdktf.booleanToTerraform(this._laMgmt),
      last_updated_time: cdktf.numberToTerraform(this._lastUpdatedTime),
      license: cdktf.stringToTerraform(this._license),
      license_edition: cdktf.stringToTerraform(this._licenseEdition),
      license_grace_time: cdktf.numberToTerraform(this._licenseGraceTime),
      mastools_version: cdktf.stringToTerraform(this._mastoolsVersion),
      max_burst_throughput: cdktf.numberToTerraform(this._maxBurstThroughput),
      metrics_collection: cdktf.booleanToTerraform(this._metricsCollection),
      mgmt_ip_address: cdktf.stringToTerraform(this._mgmtIpAddress),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.stringToTerraform(this._netmask),
      network_interfaces: cdktf.listMapper(provisionVpxNetworkInterfacesToTerraform, false)(this._networkInterfaces.internalValue),
      nexthop: cdktf.stringToTerraform(this._nexthop),
      nexthop_v6: cdktf.stringToTerraform(this._nexthopV6),
      node_id: cdktf.stringToTerraform(this._nodeId),
      ns_ip_address: cdktf.stringToTerraform(this._nsIpAddress),
      nsvlan_id: cdktf.numberToTerraform(this._nsvlanId),
      nsvlan_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsvlanInterfaces),
      nsvlan_tagged: cdktf.booleanToTerraform(this._nsvlanTagged),
      num_pes: cdktf.numberToTerraform(this._numPes),
      number_of_acu: cdktf.numberToTerraform(this._numberOfAcu),
      number_of_cores: cdktf.numberToTerraform(this._numberOfCores),
      number_of_scu: cdktf.numberToTerraform(this._numberOfScu),
      number_of_ssl_cards: cdktf.numberToTerraform(this._numberOfSslCards),
      number_of_ssl_cores: cdktf.numberToTerraform(this._numberOfSslCores),
      number_of_ssl_cores_up: cdktf.numberToTerraform(this._numberOfSslCoresUp),
      password: cdktf.stringToTerraform(this._password),
      plt_bw_available: cdktf.numberToTerraform(this._pltBwAvailable),
      plt_bw_config: cdktf.numberToTerraform(this._pltBwConfig),
      plt_bw_total: cdktf.numberToTerraform(this._pltBwTotal),
      plugin_ip_address: cdktf.stringToTerraform(this._pluginIpAddress),
      plugin_netmask: cdktf.stringToTerraform(this._pluginNetmask),
      pps: cdktf.numberToTerraform(this._pps),
      profile_name: cdktf.stringToTerraform(this._profileName),
      profile_password: cdktf.stringToTerraform(this._profilePassword),
      profile_username: cdktf.stringToTerraform(this._profileUsername),
      reboot_vm_on_cpu_change: cdktf.booleanToTerraform(this._rebootVmOnCpuChange),
      save_config: cdktf.booleanToTerraform(this._saveConfig),
      state: cdktf.stringToTerraform(this._state),
      std_bw_available: cdktf.numberToTerraform(this._stdBwAvailable),
      std_bw_config: cdktf.numberToTerraform(this._stdBwConfig),
      std_bw_total: cdktf.numberToTerraform(this._stdBwTotal),
      template_name: cdktf.stringToTerraform(this._templateName),
      throughput: cdktf.numberToTerraform(this._throughput),
      throughput_allocation_mode: cdktf.numberToTerraform(this._throughputAllocationMode),
      throughput_limit: cdktf.numberToTerraform(this._throughputLimit),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      vcpu_config: cdktf.numberToTerraform(this._vcpuConfig),
      vlan_id_0_1: cdktf.numberToTerraform(this._vlanId01),
      vlan_id_0_2: cdktf.numberToTerraform(this._vlanId02),
      vlan_type: cdktf.numberToTerraform(this._vlanType),
      vm_memory_total: cdktf.numberToTerraform(this._vmMemoryTotal),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backplane: {
        value: cdktf.stringToHclTerraform(this._backplane),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst_priority: {
        value: cdktf.numberToHclTerraform(this._burstPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cmd_policy: {
        value: cdktf.stringToHclTerraform(this._cmdPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_type: {
        value: cdktf.numberToHclTerraform(this._configType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      crypto_change_requires_reboot: {
        value: cdktf.booleanToHclTerraform(this._cryptoChangeRequiresReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      customid: {
        value: cdktf.stringToHclTerraform(this._customid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
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
      device_family: {
        value: cdktf.stringToHclTerraform(this._deviceFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ent_bw_available: {
        value: cdktf.numberToHclTerraform(this._entBwAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ent_bw_config: {
        value: cdktf.numberToHclTerraform(this._entBwConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ent_bw_total: {
        value: cdktf.numberToHclTerraform(this._entBwTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fips_partition_name: {
        value: cdktf.stringToHclTerraform(this._fipsPartitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_ipv6: {
        value: cdktf.stringToHclTerraform(this._gatewayIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ip_address: {
        value: cdktf.stringToHclTerraform(this._hostIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      if_0_1: {
        value: cdktf.booleanToHclTerraform(this._if01),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      if_0_2: {
        value: cdktf.booleanToHclTerraform(this._if02),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      if_internal_ip_enabled: {
        value: cdktf.booleanToHclTerraform(this._ifInternalIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_mode: {
        value: cdktf.stringToHclTerraform(this._instanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_ip_address: {
        value: cdktf.stringToHclTerraform(this._internalIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_clip: {
        value: cdktf.booleanToHclTerraform(this._isClip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_managed: {
        value: cdktf.booleanToHclTerraform(this._isManaged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_new_crypto: {
        value: cdktf.booleanToHclTerraform(this._isNewCrypto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iscco: {
        value: cdktf.booleanToHclTerraform(this._iscco),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l2_enabled: {
        value: cdktf.booleanToHclTerraform(this._l2Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      la_mgmt: {
        value: cdktf.booleanToHclTerraform(this._laMgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_updated_time: {
        value: cdktf.numberToHclTerraform(this._lastUpdatedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      license: {
        value: cdktf.stringToHclTerraform(this._license),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_edition: {
        value: cdktf.stringToHclTerraform(this._licenseEdition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_grace_time: {
        value: cdktf.numberToHclTerraform(this._licenseGraceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mastools_version: {
        value: cdktf.stringToHclTerraform(this._mastoolsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_burst_throughput: {
        value: cdktf.numberToHclTerraform(this._maxBurstThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metrics_collection: {
        value: cdktf.booleanToHclTerraform(this._metricsCollection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mgmt_ip_address: {
        value: cdktf.stringToHclTerraform(this._mgmtIpAddress),
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
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_interfaces: {
        value: cdktf.listMapperHcl(provisionVpxNetworkInterfacesToHclTerraform, false)(this._networkInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProvisionVpxNetworkInterfacesList",
      },
      nexthop: {
        value: cdktf.stringToHclTerraform(this._nexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_v6: {
        value: cdktf.stringToHclTerraform(this._nexthopV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ns_ip_address: {
        value: cdktf.stringToHclTerraform(this._nsIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsvlan_id: {
        value: cdktf.numberToHclTerraform(this._nsvlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsvlan_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsvlanInterfaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nsvlan_tagged: {
        value: cdktf.booleanToHclTerraform(this._nsvlanTagged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      num_pes: {
        value: cdktf.numberToHclTerraform(this._numPes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_acu: {
        value: cdktf.numberToHclTerraform(this._numberOfAcu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_cores: {
        value: cdktf.numberToHclTerraform(this._numberOfCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_scu: {
        value: cdktf.numberToHclTerraform(this._numberOfScu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_ssl_cards: {
        value: cdktf.numberToHclTerraform(this._numberOfSslCards),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_ssl_cores: {
        value: cdktf.numberToHclTerraform(this._numberOfSslCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_ssl_cores_up: {
        value: cdktf.numberToHclTerraform(this._numberOfSslCoresUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plt_bw_available: {
        value: cdktf.numberToHclTerraform(this._pltBwAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plt_bw_config: {
        value: cdktf.numberToHclTerraform(this._pltBwConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plt_bw_total: {
        value: cdktf.numberToHclTerraform(this._pltBwTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plugin_ip_address: {
        value: cdktf.stringToHclTerraform(this._pluginIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_netmask: {
        value: cdktf.stringToHclTerraform(this._pluginNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pps: {
        value: cdktf.numberToHclTerraform(this._pps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_password: {
        value: cdktf.stringToHclTerraform(this._profilePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_username: {
        value: cdktf.stringToHclTerraform(this._profileUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reboot_vm_on_cpu_change: {
        value: cdktf.booleanToHclTerraform(this._rebootVmOnCpuChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      save_config: {
        value: cdktf.booleanToHclTerraform(this._saveConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      std_bw_available: {
        value: cdktf.numberToHclTerraform(this._stdBwAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      std_bw_config: {
        value: cdktf.numberToHclTerraform(this._stdBwConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      std_bw_total: {
        value: cdktf.numberToHclTerraform(this._stdBwTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      throughput: {
        value: cdktf.numberToHclTerraform(this._throughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throughput_allocation_mode: {
        value: cdktf.numberToHclTerraform(this._throughputAllocationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      throughput_limit: {
        value: cdktf.numberToHclTerraform(this._throughputLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcpu_config: {
        value: cdktf.numberToHclTerraform(this._vcpuConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id_0_1: {
        value: cdktf.numberToHclTerraform(this._vlanId01),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id_0_2: {
        value: cdktf.numberToHclTerraform(this._vlanId02),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_type: {
        value: cdktf.numberToHclTerraform(this._vlanType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vm_memory_total: {
        value: cdktf.numberToHclTerraform(this._vmMemoryTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
