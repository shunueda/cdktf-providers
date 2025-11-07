// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow Non Secure Communication With lia
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#allow_non_secure_communication_with_lia Cluster#allow_non_secure_communication_with_lia}
  */
  readonly allowNonSecureCommunicationWithLia?: boolean | cdktf.IResolvable;
  /**
  * Allow Non Secure Communication With MDM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#allow_non_secure_communication_with_mdm Cluster#allow_non_secure_communication_with_mdm}
  */
  readonly allowNonSecureCommunicationWithMdm?: boolean | cdktf.IResolvable;
  /**
  * Cluster Installation Details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#cluster Cluster#cluster}
  */
  readonly cluster: ClusterCluster[] | cdktf.IResolvable;
  /**
  * Disable Non Mgmt Components Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#disable_non_mgmt_components_auth Cluster#disable_non_mgmt_components_auth}
  */
  readonly disableNonMgmtComponentsAuth?: boolean | cdktf.IResolvable;
  /**
  * ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lia Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#lia_password Cluster#lia_password}
  */
  readonly liaPassword: string;
  /**
  * MDM Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#mdm_password Cluster#mdm_password}
  */
  readonly mdmPassword: string;
  /**
  * Storage Pool Details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#storage_pools Cluster#storage_pools}
  */
  readonly storagePools?: ClusterStoragePools[] | cdktf.IResolvable;
}
export interface ClusterCluster {
  /**
  * Fault Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#fault_set Cluster#fault_set}
  */
  readonly faultSet?: string;
  /**
  * Use this field to assign a single IP address for all the MDM IP, MDM Mgmt IP, and SDS All IP. This option is useful when separate networks for data and management are not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#ips Cluster#ips}
  */
  readonly ips?: string;
  /**
  * Is Mdm Or Tb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#is_mdm_or_tb Cluster#is_mdm_or_tb}
  */
  readonly isMdmOrTb: string;
  /**
  * Is RFCache. The acceptable values are `Yes` and `No`. Default value is `No`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#is_rfcache Cluster#is_rfcache}
  */
  readonly isRfcache?: string;
  /**
  * Is Sdc. The acceptable values are `Yes` and `No`. Default value is `No`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#is_sdc Cluster#is_sdc}
  */
  readonly isSdc?: string;
  /**
  * Is SDR. The acceptable values are `Yes` and `No`. Default value is `No`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#is_sdr Cluster#is_sdr}
  */
  readonly isSdr?: string;
  /**
  * Is Sds. The acceptable values are `Yes` and `No`. Default value is `No`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#is_sds Cluster#is_sds}
  */
  readonly isSds?: string;
  /**
  * Is Sdt. The acceptable values are `Yes` and `No`. Default value is `No`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#is_sdt Cluster#is_sdt}
  */
  readonly isSdt?: string;
  /**
  * MDM IP addresses used to communicate with other PowerFlex components in the storage network. This is required for all MDMs, Tiebreakers and Standbys.Leave this field blank for hosts that are not part of the MDM cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#mdm_ips Cluster#mdm_ips}
  */
  readonly mdmIps?: string;
  /**
  * This IP address is for the management-only network. The management ip is not required for Tiebreaker MDM, Standby Tiebreaker MDM and any host that is not an MDM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#mdm_mgmt_ip Cluster#mdm_mgmt_ip}
  */
  readonly mdmMgmtIp?: string;
  /**
  * MDMName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#mdm_name Cluster#mdm_name}
  */
  readonly mdmName?: string;
  /**
  * Operating System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#operating_system Cluster#operating_system}
  */
  readonly operatingSystem: string;
  /**
  * Password used to log in to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#password Cluster#password}
  */
  readonly password?: string;
  /**
  * Performance Profile For MDM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#perf_profile_for_mdm Cluster#perf_profile_for_mdm}
  */
  readonly perfProfileForMdm?: string;
  /**
  * Performance Profile For SDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#perf_profile_for_sdc Cluster#perf_profile_for_sdc}
  */
  readonly perfProfileForSdc?: string;
  /**
  * Performance Profile For SDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#perf_profile_for_sdr Cluster#perf_profile_for_sdr}
  */
  readonly perfProfileForSdr?: string;
  /**
  * Performance Profile For SDS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#perf_profile_for_sds Cluster#perf_profile_for_sds}
  */
  readonly perfProfileForSds?: string;
  /**
  * Protection Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#protection_domain Cluster#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * List of SSD devices to provide RFcache acceleration for Medium Granularity data layout Storage Pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#rf_cache_ssd_device_list Cluster#rf_cache_ssd_device_list}
  */
  readonly rfCacheSsdDeviceList?: string;
  /**
  * SDC Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sdc_name Cluster#sdc_name}
  */
  readonly sdcName?: string;
  /**
  * SDR IP addresses to be used for communication among all nodes (including all three roles)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sdr_all_ips Cluster#sdr_all_ips}
  */
  readonly sdrAllIps?: string;
  /**
  * The IP addresses through which the SDC communicates with the SDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sdr_application_ips Cluster#sdr_application_ips}
  */
  readonly sdrApplicationIps?: string;
  /**
  * The IP addresses through which the SDR communicates with peer systems SDRs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sdr_external_ips Cluster#sdr_external_ips}
  */
  readonly sdrExternalIps?: string;
  /**
  * SDR Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sdr_name Cluster#sdr_name}
  */
  readonly sdrName?: string;
  /**
  * SDR Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sdr_port Cluster#sdr_port}
  */
  readonly sdrPort?: string;
  /**
  * The IP addresses through which the SDR communicates with the MDM for server side control communications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sdr_storage_ips Cluster#sdr_storage_ips}
  */
  readonly sdrStorageIps?: string;
  /**
  * SDS IP addresses to be used for communication among all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sds_all_ips Cluster#sds_all_ips}
  */
  readonly sdsAllIps?: string;
  /**
  * SDS Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sds_name Cluster#sds_name}
  */
  readonly sdsName?: string;
  /**
  * Storage devices to be added to an SDS. For more than one device, use a comma separated list, with no spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sds_storage_device_list Cluster#sds_storage_device_list}
  */
  readonly sdsStorageDeviceList?: string;
  /**
  * Sets names for devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sds_storage_device_names Cluster#sds_storage_device_names}
  */
  readonly sdsStorageDeviceNames?: string;
  /**
  * SDS IP addresses to be used for communication among SDS and SDC nodes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sds_to_sdc_only_ips Cluster#sds_to_sdc_only_ips}
  */
  readonly sdsToSdcOnlyIps?: string;
  /**
  * SDS IP addresses to be used for communication among SDS nodes. When the replication feature is used, these addresses are also used for SDS-SDR communication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sds_to_sds_only_ips Cluster#sds_to_sds_only_ips}
  */
  readonly sdsToSdsOnlyIps?: string;
  /**
  * SDT IP addresses used for both hosts communication and MDM communication (including both roles).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sdt_all_ips Cluster#sdt_all_ips}
  */
  readonly sdtAllIps?: string;
  /**
  * SDT Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#sdt_name Cluster#sdt_name}
  */
  readonly sdtName?: string;
  /**
  * Sets Storage Pool names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#storage_pool_list Cluster#storage_pool_list}
  */
  readonly storagePoolList?: string;
  /**
  * The value can be either `root` or any non-root user name with appropriate permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#username Cluster#username}
  */
  readonly username?: string;
  /**
  * The NIC to which the virtual IP addresses are mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#virtual_ip_nics Cluster#virtual_ip_nics}
  */
  readonly virtualIpNics?: string;
  /**
  * Virtual IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#virtual_ips Cluster#virtual_ips}
  */
  readonly virtualIps?: string;
}

export function clusterClusterToTerraform(struct?: ClusterCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fault_set: cdktf.stringToTerraform(struct!.faultSet),
    ips: cdktf.stringToTerraform(struct!.ips),
    is_mdm_or_tb: cdktf.stringToTerraform(struct!.isMdmOrTb),
    is_rfcache: cdktf.stringToTerraform(struct!.isRfcache),
    is_sdc: cdktf.stringToTerraform(struct!.isSdc),
    is_sdr: cdktf.stringToTerraform(struct!.isSdr),
    is_sds: cdktf.stringToTerraform(struct!.isSds),
    is_sdt: cdktf.stringToTerraform(struct!.isSdt),
    mdm_ips: cdktf.stringToTerraform(struct!.mdmIps),
    mdm_mgmt_ip: cdktf.stringToTerraform(struct!.mdmMgmtIp),
    mdm_name: cdktf.stringToTerraform(struct!.mdmName),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    password: cdktf.stringToTerraform(struct!.password),
    perf_profile_for_mdm: cdktf.stringToTerraform(struct!.perfProfileForMdm),
    perf_profile_for_sdc: cdktf.stringToTerraform(struct!.perfProfileForSdc),
    perf_profile_for_sdr: cdktf.stringToTerraform(struct!.perfProfileForSdr),
    perf_profile_for_sds: cdktf.stringToTerraform(struct!.perfProfileForSds),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    rf_cache_ssd_device_list: cdktf.stringToTerraform(struct!.rfCacheSsdDeviceList),
    sdc_name: cdktf.stringToTerraform(struct!.sdcName),
    sdr_all_ips: cdktf.stringToTerraform(struct!.sdrAllIps),
    sdr_application_ips: cdktf.stringToTerraform(struct!.sdrApplicationIps),
    sdr_external_ips: cdktf.stringToTerraform(struct!.sdrExternalIps),
    sdr_name: cdktf.stringToTerraform(struct!.sdrName),
    sdr_port: cdktf.stringToTerraform(struct!.sdrPort),
    sdr_storage_ips: cdktf.stringToTerraform(struct!.sdrStorageIps),
    sds_all_ips: cdktf.stringToTerraform(struct!.sdsAllIps),
    sds_name: cdktf.stringToTerraform(struct!.sdsName),
    sds_storage_device_list: cdktf.stringToTerraform(struct!.sdsStorageDeviceList),
    sds_storage_device_names: cdktf.stringToTerraform(struct!.sdsStorageDeviceNames),
    sds_to_sdc_only_ips: cdktf.stringToTerraform(struct!.sdsToSdcOnlyIps),
    sds_to_sds_only_ips: cdktf.stringToTerraform(struct!.sdsToSdsOnlyIps),
    sdt_all_ips: cdktf.stringToTerraform(struct!.sdtAllIps),
    sdt_name: cdktf.stringToTerraform(struct!.sdtName),
    storage_pool_list: cdktf.stringToTerraform(struct!.storagePoolList),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_ip_nics: cdktf.stringToTerraform(struct!.virtualIpNics),
    virtual_ips: cdktf.stringToTerraform(struct!.virtualIps),
  }
}


export function clusterClusterToHclTerraform(struct?: ClusterCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fault_set: {
      value: cdktf.stringToHclTerraform(struct!.faultSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.stringToHclTerraform(struct!.ips),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_mdm_or_tb: {
      value: cdktf.stringToHclTerraform(struct!.isMdmOrTb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_rfcache: {
      value: cdktf.stringToHclTerraform(struct!.isRfcache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sdc: {
      value: cdktf.stringToHclTerraform(struct!.isSdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sdr: {
      value: cdktf.stringToHclTerraform(struct!.isSdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sds: {
      value: cdktf.stringToHclTerraform(struct!.isSds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_sdt: {
      value: cdktf.stringToHclTerraform(struct!.isSdt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdm_ips: {
      value: cdktf.stringToHclTerraform(struct!.mdmIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdm_mgmt_ip: {
      value: cdktf.stringToHclTerraform(struct!.mdmMgmtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdm_name: {
      value: cdktf.stringToHclTerraform(struct!.mdmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    perf_profile_for_mdm: {
      value: cdktf.stringToHclTerraform(struct!.perfProfileForMdm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    perf_profile_for_sdc: {
      value: cdktf.stringToHclTerraform(struct!.perfProfileForSdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    perf_profile_for_sdr: {
      value: cdktf.stringToHclTerraform(struct!.perfProfileForSdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    perf_profile_for_sds: {
      value: cdktf.stringToHclTerraform(struct!.perfProfileForSds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_domain: {
      value: cdktf.stringToHclTerraform(struct!.protectionDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rf_cache_ssd_device_list: {
      value: cdktf.stringToHclTerraform(struct!.rfCacheSsdDeviceList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdc_name: {
      value: cdktf.stringToHclTerraform(struct!.sdcName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdr_all_ips: {
      value: cdktf.stringToHclTerraform(struct!.sdrAllIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdr_application_ips: {
      value: cdktf.stringToHclTerraform(struct!.sdrApplicationIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdr_external_ips: {
      value: cdktf.stringToHclTerraform(struct!.sdrExternalIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdr_name: {
      value: cdktf.stringToHclTerraform(struct!.sdrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdr_port: {
      value: cdktf.stringToHclTerraform(struct!.sdrPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdr_storage_ips: {
      value: cdktf.stringToHclTerraform(struct!.sdrStorageIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sds_all_ips: {
      value: cdktf.stringToHclTerraform(struct!.sdsAllIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sds_name: {
      value: cdktf.stringToHclTerraform(struct!.sdsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sds_storage_device_list: {
      value: cdktf.stringToHclTerraform(struct!.sdsStorageDeviceList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sds_storage_device_names: {
      value: cdktf.stringToHclTerraform(struct!.sdsStorageDeviceNames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sds_to_sdc_only_ips: {
      value: cdktf.stringToHclTerraform(struct!.sdsToSdcOnlyIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sds_to_sds_only_ips: {
      value: cdktf.stringToHclTerraform(struct!.sdsToSdsOnlyIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdt_all_ips: {
      value: cdktf.stringToHclTerraform(struct!.sdtAllIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdt_name: {
      value: cdktf.stringToHclTerraform(struct!.sdtName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool_list: {
      value: cdktf.stringToHclTerraform(struct!.storagePoolList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_ip_nics: {
      value: cdktf.stringToHclTerraform(struct!.virtualIpNics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_ips: {
      value: cdktf.stringToHclTerraform(struct!.virtualIps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._faultSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultSet = this._faultSet;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._isMdmOrTb !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMdmOrTb = this._isMdmOrTb;
    }
    if (this._isRfcache !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRfcache = this._isRfcache;
    }
    if (this._isSdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSdc = this._isSdc;
    }
    if (this._isSdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSdr = this._isSdr;
    }
    if (this._isSds !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSds = this._isSds;
    }
    if (this._isSdt !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSdt = this._isSdt;
    }
    if (this._mdmIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdmIps = this._mdmIps;
    }
    if (this._mdmMgmtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdmMgmtIp = this._mdmMgmtIp;
    }
    if (this._mdmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdmName = this._mdmName;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._perfProfileForMdm !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfProfileForMdm = this._perfProfileForMdm;
    }
    if (this._perfProfileForSdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfProfileForSdc = this._perfProfileForSdc;
    }
    if (this._perfProfileForSdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfProfileForSdr = this._perfProfileForSdr;
    }
    if (this._perfProfileForSds !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfProfileForSds = this._perfProfileForSds;
    }
    if (this._protectionDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomain = this._protectionDomain;
    }
    if (this._rfCacheSsdDeviceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfCacheSsdDeviceList = this._rfCacheSsdDeviceList;
    }
    if (this._sdcName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdcName = this._sdcName;
    }
    if (this._sdrAllIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdrAllIps = this._sdrAllIps;
    }
    if (this._sdrApplicationIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdrApplicationIps = this._sdrApplicationIps;
    }
    if (this._sdrExternalIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdrExternalIps = this._sdrExternalIps;
    }
    if (this._sdrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdrName = this._sdrName;
    }
    if (this._sdrPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdrPort = this._sdrPort;
    }
    if (this._sdrStorageIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdrStorageIps = this._sdrStorageIps;
    }
    if (this._sdsAllIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdsAllIps = this._sdsAllIps;
    }
    if (this._sdsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdsName = this._sdsName;
    }
    if (this._sdsStorageDeviceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdsStorageDeviceList = this._sdsStorageDeviceList;
    }
    if (this._sdsStorageDeviceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdsStorageDeviceNames = this._sdsStorageDeviceNames;
    }
    if (this._sdsToSdcOnlyIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdsToSdcOnlyIps = this._sdsToSdcOnlyIps;
    }
    if (this._sdsToSdsOnlyIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdsToSdsOnlyIps = this._sdsToSdsOnlyIps;
    }
    if (this._sdtAllIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdtAllIps = this._sdtAllIps;
    }
    if (this._sdtName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdtName = this._sdtName;
    }
    if (this._storagePoolList !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePoolList = this._storagePoolList;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._virtualIpNics !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIpNics = this._virtualIpNics;
    }
    if (this._virtualIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIps = this._virtualIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._faultSet = undefined;
      this._ips = undefined;
      this._isMdmOrTb = undefined;
      this._isRfcache = undefined;
      this._isSdc = undefined;
      this._isSdr = undefined;
      this._isSds = undefined;
      this._isSdt = undefined;
      this._mdmIps = undefined;
      this._mdmMgmtIp = undefined;
      this._mdmName = undefined;
      this._operatingSystem = undefined;
      this._password = undefined;
      this._perfProfileForMdm = undefined;
      this._perfProfileForSdc = undefined;
      this._perfProfileForSdr = undefined;
      this._perfProfileForSds = undefined;
      this._protectionDomain = undefined;
      this._rfCacheSsdDeviceList = undefined;
      this._sdcName = undefined;
      this._sdrAllIps = undefined;
      this._sdrApplicationIps = undefined;
      this._sdrExternalIps = undefined;
      this._sdrName = undefined;
      this._sdrPort = undefined;
      this._sdrStorageIps = undefined;
      this._sdsAllIps = undefined;
      this._sdsName = undefined;
      this._sdsStorageDeviceList = undefined;
      this._sdsStorageDeviceNames = undefined;
      this._sdsToSdcOnlyIps = undefined;
      this._sdsToSdsOnlyIps = undefined;
      this._sdtAllIps = undefined;
      this._sdtName = undefined;
      this._storagePoolList = undefined;
      this._username = undefined;
      this._virtualIpNics = undefined;
      this._virtualIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._faultSet = value.faultSet;
      this._ips = value.ips;
      this._isMdmOrTb = value.isMdmOrTb;
      this._isRfcache = value.isRfcache;
      this._isSdc = value.isSdc;
      this._isSdr = value.isSdr;
      this._isSds = value.isSds;
      this._isSdt = value.isSdt;
      this._mdmIps = value.mdmIps;
      this._mdmMgmtIp = value.mdmMgmtIp;
      this._mdmName = value.mdmName;
      this._operatingSystem = value.operatingSystem;
      this._password = value.password;
      this._perfProfileForMdm = value.perfProfileForMdm;
      this._perfProfileForSdc = value.perfProfileForSdc;
      this._perfProfileForSdr = value.perfProfileForSdr;
      this._perfProfileForSds = value.perfProfileForSds;
      this._protectionDomain = value.protectionDomain;
      this._rfCacheSsdDeviceList = value.rfCacheSsdDeviceList;
      this._sdcName = value.sdcName;
      this._sdrAllIps = value.sdrAllIps;
      this._sdrApplicationIps = value.sdrApplicationIps;
      this._sdrExternalIps = value.sdrExternalIps;
      this._sdrName = value.sdrName;
      this._sdrPort = value.sdrPort;
      this._sdrStorageIps = value.sdrStorageIps;
      this._sdsAllIps = value.sdsAllIps;
      this._sdsName = value.sdsName;
      this._sdsStorageDeviceList = value.sdsStorageDeviceList;
      this._sdsStorageDeviceNames = value.sdsStorageDeviceNames;
      this._sdsToSdcOnlyIps = value.sdsToSdcOnlyIps;
      this._sdsToSdsOnlyIps = value.sdsToSdsOnlyIps;
      this._sdtAllIps = value.sdtAllIps;
      this._sdtName = value.sdtName;
      this._storagePoolList = value.storagePoolList;
      this._username = value.username;
      this._virtualIpNics = value.virtualIpNics;
      this._virtualIps = value.virtualIps;
    }
  }

  // fault_set - computed: false, optional: true, required: false
  private _faultSet?: string; 
  public get faultSet() {
    return this.getStringAttribute('fault_set');
  }
  public set faultSet(value: string) {
    this._faultSet = value;
  }
  public resetFaultSet() {
    this._faultSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultSetInput() {
    return this._faultSet;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string; 
  public get ips() {
    return this.getStringAttribute('ips');
  }
  public set ips(value: string) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // is_mdm_or_tb - computed: false, optional: false, required: true
  private _isMdmOrTb?: string; 
  public get isMdmOrTb() {
    return this.getStringAttribute('is_mdm_or_tb');
  }
  public set isMdmOrTb(value: string) {
    this._isMdmOrTb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isMdmOrTbInput() {
    return this._isMdmOrTb;
  }

  // is_rfcache - computed: true, optional: true, required: false
  private _isRfcache?: string; 
  public get isRfcache() {
    return this.getStringAttribute('is_rfcache');
  }
  public set isRfcache(value: string) {
    this._isRfcache = value;
  }
  public resetIsRfcache() {
    this._isRfcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRfcacheInput() {
    return this._isRfcache;
  }

  // is_sdc - computed: true, optional: true, required: false
  private _isSdc?: string; 
  public get isSdc() {
    return this.getStringAttribute('is_sdc');
  }
  public set isSdc(value: string) {
    this._isSdc = value;
  }
  public resetIsSdc() {
    this._isSdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSdcInput() {
    return this._isSdc;
  }

  // is_sdr - computed: true, optional: true, required: false
  private _isSdr?: string; 
  public get isSdr() {
    return this.getStringAttribute('is_sdr');
  }
  public set isSdr(value: string) {
    this._isSdr = value;
  }
  public resetIsSdr() {
    this._isSdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSdrInput() {
    return this._isSdr;
  }

  // is_sds - computed: true, optional: true, required: false
  private _isSds?: string; 
  public get isSds() {
    return this.getStringAttribute('is_sds');
  }
  public set isSds(value: string) {
    this._isSds = value;
  }
  public resetIsSds() {
    this._isSds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSdsInput() {
    return this._isSds;
  }

  // is_sdt - computed: true, optional: true, required: false
  private _isSdt?: string; 
  public get isSdt() {
    return this.getStringAttribute('is_sdt');
  }
  public set isSdt(value: string) {
    this._isSdt = value;
  }
  public resetIsSdt() {
    this._isSdt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSdtInput() {
    return this._isSdt;
  }

  // mdm_ips - computed: false, optional: true, required: false
  private _mdmIps?: string; 
  public get mdmIps() {
    return this.getStringAttribute('mdm_ips');
  }
  public set mdmIps(value: string) {
    this._mdmIps = value;
  }
  public resetMdmIps() {
    this._mdmIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmIpsInput() {
    return this._mdmIps;
  }

  // mdm_mgmt_ip - computed: false, optional: true, required: false
  private _mdmMgmtIp?: string; 
  public get mdmMgmtIp() {
    return this.getStringAttribute('mdm_mgmt_ip');
  }
  public set mdmMgmtIp(value: string) {
    this._mdmMgmtIp = value;
  }
  public resetMdmMgmtIp() {
    this._mdmMgmtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmMgmtIpInput() {
    return this._mdmMgmtIp;
  }

  // mdm_name - computed: false, optional: true, required: false
  private _mdmName?: string; 
  public get mdmName() {
    return this.getStringAttribute('mdm_name');
  }
  public set mdmName(value: string) {
    this._mdmName = value;
  }
  public resetMdmName() {
    this._mdmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmNameInput() {
    return this._mdmName;
  }

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
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

  // perf_profile_for_mdm - computed: false, optional: true, required: false
  private _perfProfileForMdm?: string; 
  public get perfProfileForMdm() {
    return this.getStringAttribute('perf_profile_for_mdm');
  }
  public set perfProfileForMdm(value: string) {
    this._perfProfileForMdm = value;
  }
  public resetPerfProfileForMdm() {
    this._perfProfileForMdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfProfileForMdmInput() {
    return this._perfProfileForMdm;
  }

  // perf_profile_for_sdc - computed: false, optional: true, required: false
  private _perfProfileForSdc?: string; 
  public get perfProfileForSdc() {
    return this.getStringAttribute('perf_profile_for_sdc');
  }
  public set perfProfileForSdc(value: string) {
    this._perfProfileForSdc = value;
  }
  public resetPerfProfileForSdc() {
    this._perfProfileForSdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfProfileForSdcInput() {
    return this._perfProfileForSdc;
  }

  // perf_profile_for_sdr - computed: false, optional: true, required: false
  private _perfProfileForSdr?: string; 
  public get perfProfileForSdr() {
    return this.getStringAttribute('perf_profile_for_sdr');
  }
  public set perfProfileForSdr(value: string) {
    this._perfProfileForSdr = value;
  }
  public resetPerfProfileForSdr() {
    this._perfProfileForSdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfProfileForSdrInput() {
    return this._perfProfileForSdr;
  }

  // perf_profile_for_sds - computed: false, optional: true, required: false
  private _perfProfileForSds?: string; 
  public get perfProfileForSds() {
    return this.getStringAttribute('perf_profile_for_sds');
  }
  public set perfProfileForSds(value: string) {
    this._perfProfileForSds = value;
  }
  public resetPerfProfileForSds() {
    this._perfProfileForSds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfProfileForSdsInput() {
    return this._perfProfileForSds;
  }

  // protection_domain - computed: false, optional: true, required: false
  private _protectionDomain?: string; 
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }
  public set protectionDomain(value: string) {
    this._protectionDomain = value;
  }
  public resetProtectionDomain() {
    this._protectionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainInput() {
    return this._protectionDomain;
  }

  // rf_cache_ssd_device_list - computed: false, optional: true, required: false
  private _rfCacheSsdDeviceList?: string; 
  public get rfCacheSsdDeviceList() {
    return this.getStringAttribute('rf_cache_ssd_device_list');
  }
  public set rfCacheSsdDeviceList(value: string) {
    this._rfCacheSsdDeviceList = value;
  }
  public resetRfCacheSsdDeviceList() {
    this._rfCacheSsdDeviceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCacheSsdDeviceListInput() {
    return this._rfCacheSsdDeviceList;
  }

  // sdc_name - computed: false, optional: true, required: false
  private _sdcName?: string; 
  public get sdcName() {
    return this.getStringAttribute('sdc_name');
  }
  public set sdcName(value: string) {
    this._sdcName = value;
  }
  public resetSdcName() {
    this._sdcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcNameInput() {
    return this._sdcName;
  }

  // sdr_all_ips - computed: false, optional: true, required: false
  private _sdrAllIps?: string; 
  public get sdrAllIps() {
    return this.getStringAttribute('sdr_all_ips');
  }
  public set sdrAllIps(value: string) {
    this._sdrAllIps = value;
  }
  public resetSdrAllIps() {
    this._sdrAllIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrAllIpsInput() {
    return this._sdrAllIps;
  }

  // sdr_application_ips - computed: false, optional: true, required: false
  private _sdrApplicationIps?: string; 
  public get sdrApplicationIps() {
    return this.getStringAttribute('sdr_application_ips');
  }
  public set sdrApplicationIps(value: string) {
    this._sdrApplicationIps = value;
  }
  public resetSdrApplicationIps() {
    this._sdrApplicationIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrApplicationIpsInput() {
    return this._sdrApplicationIps;
  }

  // sdr_external_ips - computed: false, optional: true, required: false
  private _sdrExternalIps?: string; 
  public get sdrExternalIps() {
    return this.getStringAttribute('sdr_external_ips');
  }
  public set sdrExternalIps(value: string) {
    this._sdrExternalIps = value;
  }
  public resetSdrExternalIps() {
    this._sdrExternalIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrExternalIpsInput() {
    return this._sdrExternalIps;
  }

  // sdr_name - computed: false, optional: true, required: false
  private _sdrName?: string; 
  public get sdrName() {
    return this.getStringAttribute('sdr_name');
  }
  public set sdrName(value: string) {
    this._sdrName = value;
  }
  public resetSdrName() {
    this._sdrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrNameInput() {
    return this._sdrName;
  }

  // sdr_port - computed: false, optional: true, required: false
  private _sdrPort?: string; 
  public get sdrPort() {
    return this.getStringAttribute('sdr_port');
  }
  public set sdrPort(value: string) {
    this._sdrPort = value;
  }
  public resetSdrPort() {
    this._sdrPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrPortInput() {
    return this._sdrPort;
  }

  // sdr_storage_ips - computed: false, optional: true, required: false
  private _sdrStorageIps?: string; 
  public get sdrStorageIps() {
    return this.getStringAttribute('sdr_storage_ips');
  }
  public set sdrStorageIps(value: string) {
    this._sdrStorageIps = value;
  }
  public resetSdrStorageIps() {
    this._sdrStorageIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdrStorageIpsInput() {
    return this._sdrStorageIps;
  }

  // sds_all_ips - computed: false, optional: true, required: false
  private _sdsAllIps?: string; 
  public get sdsAllIps() {
    return this.getStringAttribute('sds_all_ips');
  }
  public set sdsAllIps(value: string) {
    this._sdsAllIps = value;
  }
  public resetSdsAllIps() {
    this._sdsAllIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsAllIpsInput() {
    return this._sdsAllIps;
  }

  // sds_name - computed: false, optional: true, required: false
  private _sdsName?: string; 
  public get sdsName() {
    return this.getStringAttribute('sds_name');
  }
  public set sdsName(value: string) {
    this._sdsName = value;
  }
  public resetSdsName() {
    this._sdsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsNameInput() {
    return this._sdsName;
  }

  // sds_storage_device_list - computed: false, optional: true, required: false
  private _sdsStorageDeviceList?: string; 
  public get sdsStorageDeviceList() {
    return this.getStringAttribute('sds_storage_device_list');
  }
  public set sdsStorageDeviceList(value: string) {
    this._sdsStorageDeviceList = value;
  }
  public resetSdsStorageDeviceList() {
    this._sdsStorageDeviceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsStorageDeviceListInput() {
    return this._sdsStorageDeviceList;
  }

  // sds_storage_device_names - computed: false, optional: true, required: false
  private _sdsStorageDeviceNames?: string; 
  public get sdsStorageDeviceNames() {
    return this.getStringAttribute('sds_storage_device_names');
  }
  public set sdsStorageDeviceNames(value: string) {
    this._sdsStorageDeviceNames = value;
  }
  public resetSdsStorageDeviceNames() {
    this._sdsStorageDeviceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsStorageDeviceNamesInput() {
    return this._sdsStorageDeviceNames;
  }

  // sds_to_sdc_only_ips - computed: false, optional: true, required: false
  private _sdsToSdcOnlyIps?: string; 
  public get sdsToSdcOnlyIps() {
    return this.getStringAttribute('sds_to_sdc_only_ips');
  }
  public set sdsToSdcOnlyIps(value: string) {
    this._sdsToSdcOnlyIps = value;
  }
  public resetSdsToSdcOnlyIps() {
    this._sdsToSdcOnlyIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsToSdcOnlyIpsInput() {
    return this._sdsToSdcOnlyIps;
  }

  // sds_to_sds_only_ips - computed: false, optional: true, required: false
  private _sdsToSdsOnlyIps?: string; 
  public get sdsToSdsOnlyIps() {
    return this.getStringAttribute('sds_to_sds_only_ips');
  }
  public set sdsToSdsOnlyIps(value: string) {
    this._sdsToSdsOnlyIps = value;
  }
  public resetSdsToSdsOnlyIps() {
    this._sdsToSdsOnlyIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsToSdsOnlyIpsInput() {
    return this._sdsToSdsOnlyIps;
  }

  // sdt_all_ips - computed: false, optional: true, required: false
  private _sdtAllIps?: string; 
  public get sdtAllIps() {
    return this.getStringAttribute('sdt_all_ips');
  }
  public set sdtAllIps(value: string) {
    this._sdtAllIps = value;
  }
  public resetSdtAllIps() {
    this._sdtAllIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdtAllIpsInput() {
    return this._sdtAllIps;
  }

  // sdt_name - computed: false, optional: true, required: false
  private _sdtName?: string; 
  public get sdtName() {
    return this.getStringAttribute('sdt_name');
  }
  public set sdtName(value: string) {
    this._sdtName = value;
  }
  public resetSdtName() {
    this._sdtName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdtNameInput() {
    return this._sdtName;
  }

  // storage_pool_list - computed: false, optional: true, required: false
  private _storagePoolList?: string; 
  public get storagePoolList() {
    return this.getStringAttribute('storage_pool_list');
  }
  public set storagePoolList(value: string) {
    this._storagePoolList = value;
  }
  public resetStoragePoolList() {
    this._storagePoolList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolListInput() {
    return this._storagePoolList;
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

  // virtual_ip_nics - computed: false, optional: true, required: false
  private _virtualIpNics?: string; 
  public get virtualIpNics() {
    return this.getStringAttribute('virtual_ip_nics');
  }
  public set virtualIpNics(value: string) {
    this._virtualIpNics = value;
  }
  public resetVirtualIpNics() {
    this._virtualIpNics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpNicsInput() {
    return this._virtualIpNics;
  }

  // virtual_ips - computed: false, optional: true, required: false
  private _virtualIps?: string; 
  public get virtualIps() {
    return this.getStringAttribute('virtual_ips');
  }
  public set virtualIps(value: string) {
    this._virtualIps = value;
  }
  public resetVirtualIps() {
    this._virtualIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpsInput() {
    return this._virtualIps;
  }
}

export class ClusterClusterList extends cdktf.ComplexList {
  public internalValue? : ClusterCluster[] | cdktf.IResolvable

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
  public get(index: number): ClusterClusterOutputReference {
    return new ClusterClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterMdmListStruct {
}

export function clusterMdmListStructToTerraform(struct?: ClusterMdmListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterMdmListStructToHclTerraform(struct?: ClusterMdmListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterMdmListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMdmListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterMdmListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // mdm_ip - computed: true, optional: false, required: false
  public get mdmIp() {
    return this.getStringAttribute('mdm_ip');
  }

  // mgmt_ip - computed: true, optional: false, required: false
  public get mgmtIp() {
    return this.getStringAttribute('mgmt_ip');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // virtual_ip - computed: true, optional: false, required: false
  public get virtualIp() {
    return this.getStringAttribute('virtual_ip');
  }

  // virtual_ip_nic - computed: true, optional: false, required: false
  public get virtualIpNic() {
    return this.getStringAttribute('virtual_ip_nic');
  }
}

export class ClusterMdmListStructList extends cdktf.ComplexList {

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
  public get(index: number): ClusterMdmListStructOutputReference {
    return new ClusterMdmListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterProtectionDomainsStoragePoolListStruct {
}

export function clusterProtectionDomainsStoragePoolListStructToTerraform(struct?: ClusterProtectionDomainsStoragePoolListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterProtectionDomainsStoragePoolListStructToHclTerraform(struct?: ClusterProtectionDomainsStoragePoolListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterProtectionDomainsStoragePoolListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterProtectionDomainsStoragePoolListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterProtectionDomainsStoragePoolListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compression_method - computed: true, optional: false, required: false
  public get compressionMethod() {
    return this.getStringAttribute('compression_method');
  }

  // data_layout - computed: true, optional: false, required: false
  public get dataLayout() {
    return this.getStringAttribute('data_layout');
  }

  // external_acceleration - computed: true, optional: false, required: false
  public get externalAcceleration() {
    return this.getStringAttribute('external_acceleration');
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // replication_journal_capacity_percentage - computed: true, optional: false, required: false
  public get replicationJournalCapacityPercentage() {
    return this.getNumberAttribute('replication_journal_capacity_percentage');
  }

  // zero_padding - computed: true, optional: false, required: false
  public get zeroPadding() {
    return this.getStringAttribute('zero_padding');
  }
}

export class ClusterProtectionDomainsStoragePoolListStructList extends cdktf.ComplexList {

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
  public get(index: number): ClusterProtectionDomainsStoragePoolListStructOutputReference {
    return new ClusterProtectionDomainsStoragePoolListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterProtectionDomains {
}

export function clusterProtectionDomainsToTerraform(struct?: ClusterProtectionDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterProtectionDomainsToHclTerraform(struct?: ClusterProtectionDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterProtectionDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterProtectionDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterProtectionDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // storage_pool_list - computed: true, optional: false, required: false
  private _storagePoolList = new ClusterProtectionDomainsStoragePoolListStructList(this, "storage_pool_list", false);
  public get storagePoolList() {
    return this._storagePoolList;
  }
}

export class ClusterProtectionDomainsList extends cdktf.ComplexList {

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
  public get(index: number): ClusterProtectionDomainsOutputReference {
    return new ClusterProtectionDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSdcListStruct {
}

export function clusterSdcListStructToTerraform(struct?: ClusterSdcListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterSdcListStructToHclTerraform(struct?: ClusterSdcListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterSdcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSdcListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSdcListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ClusterSdcListStructList extends cdktf.ComplexList {

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
  public get(index: number): ClusterSdcListStructOutputReference {
    return new ClusterSdcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSdrListStruct {
}

export function clusterSdrListStructToTerraform(struct?: ClusterSdrListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterSdrListStructToHclTerraform(struct?: ClusterSdrListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterSdrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSdrListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSdrListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_ips - computed: true, optional: false, required: false
  public get allIps() {
    return this.getStringAttribute('all_ips');
  }

  // application_ips - computed: true, optional: false, required: false
  public get applicationIps() {
    return this.getStringAttribute('application_ips');
  }

  // external_ips - computed: true, optional: false, required: false
  public get externalIps() {
    return this.getStringAttribute('external_ips');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // storage_ips - computed: true, optional: false, required: false
  public get storageIps() {
    return this.getStringAttribute('storage_ips');
  }
}

export class ClusterSdrListStructList extends cdktf.ComplexList {

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
  public get(index: number): ClusterSdrListStructOutputReference {
    return new ClusterSdrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSdsListDevices {
}

export function clusterSdsListDevicesToTerraform(struct?: ClusterSdsListDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterSdsListDevicesToHclTerraform(struct?: ClusterSdsListDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterSdsListDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSdsListDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSdsListDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_capacity_in_kb - computed: true, optional: false, required: false
  public get maxCapacityInKb() {
    return this.getNumberAttribute('max_capacity_in_kb');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // storage_pool - computed: true, optional: false, required: false
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
}

export class ClusterSdsListDevicesList extends cdktf.ComplexList {

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
  public get(index: number): ClusterSdsListDevicesOutputReference {
    return new ClusterSdsListDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSdsListStruct {
}

export function clusterSdsListStructToTerraform(struct?: ClusterSdsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterSdsListStructToHclTerraform(struct?: ClusterSdsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterSdsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSdsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSdsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_ips - computed: true, optional: false, required: false
  public get allIps() {
    return this.getStringAttribute('all_ips');
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new ClusterSdsListDevicesList(this, "devices", true);
  public get devices() {
    return this._devices;
  }

  // fault_set - computed: true, optional: false, required: false
  public get faultSet() {
    return this.getStringAttribute('fault_set');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }

  // protection_domain_name - computed: true, optional: false, required: false
  public get protectionDomainName() {
    return this.getStringAttribute('protection_domain_name');
  }

  // sds_only_ips - computed: true, optional: false, required: false
  public get sdsOnlyIps() {
    return this.getStringAttribute('sds_only_ips');
  }

  // sds_sdc_ips - computed: true, optional: false, required: false
  public get sdsSdcIps() {
    return this.getStringAttribute('sds_sdc_ips');
  }
}

export class ClusterSdsListStructList extends cdktf.ComplexList {

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
  public get(index: number): ClusterSdsListStructOutputReference {
    return new ClusterSdsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterSdtListStruct {
}

export function clusterSdtListStructToTerraform(struct?: ClusterSdtListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterSdtListStructToHclTerraform(struct?: ClusterSdtListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterSdtListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterSdtListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterSdtListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_ips - computed: true, optional: false, required: false
  public get allIps() {
    return this.getStringAttribute('all_ips');
  }

  // discovery_port - computed: true, optional: false, required: false
  public get discoveryPort() {
    return this.getNumberAttribute('discovery_port');
  }

  // host_only_ips - computed: true, optional: false, required: false
  public get hostOnlyIps() {
    return this.getStringAttribute('host_only_ips');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nvme_port - computed: true, optional: false, required: false
  public get nvmePort() {
    return this.getNumberAttribute('nvme_port');
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }

  // protection_domain_name - computed: true, optional: false, required: false
  public get protectionDomainName() {
    return this.getStringAttribute('protection_domain_name');
  }

  // storage_only_ips - computed: true, optional: false, required: false
  public get storageOnlyIps() {
    return this.getStringAttribute('storage_only_ips');
  }

  // storage_port - computed: true, optional: false, required: false
  public get storagePort() {
    return this.getNumberAttribute('storage_port');
  }
}

export class ClusterSdtListStructList extends cdktf.ComplexList {

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
  public get(index: number): ClusterSdtListStructOutputReference {
    return new ClusterSdtListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterStoragePools {
  /**
  * Compression Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#compression_method Cluster#compression_method}
  */
  readonly compressionMethod?: string;
  /**
  * Data Layout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#data_layout Cluster#data_layout}
  */
  readonly dataLayout?: string;
  /**
  * External Acceleration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#external_acceleration Cluster#external_acceleration}
  */
  readonly externalAcceleration?: string;
  /**
  * Media Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#media_type Cluster#media_type}
  */
  readonly mediaType: string;
  /**
  * Protection Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#protection_domain Cluster#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * Replication Journal Capacity Percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#replication_journal_capacity_percentage Cluster#replication_journal_capacity_percentage}
  */
  readonly replicationJournalCapacityPercentage?: string;
  /**
  * Storage Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#storage_pool Cluster#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * Zero Padding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#zero_padding Cluster#zero_padding}
  */
  readonly zeroPadding?: string;
}

export function clusterStoragePoolsToTerraform(struct?: ClusterStoragePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_method: cdktf.stringToTerraform(struct!.compressionMethod),
    data_layout: cdktf.stringToTerraform(struct!.dataLayout),
    external_acceleration: cdktf.stringToTerraform(struct!.externalAcceleration),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    replication_journal_capacity_percentage: cdktf.stringToTerraform(struct!.replicationJournalCapacityPercentage),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    zero_padding: cdktf.stringToTerraform(struct!.zeroPadding),
  }
}


export function clusterStoragePoolsToHclTerraform(struct?: ClusterStoragePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_method: {
      value: cdktf.stringToHclTerraform(struct!.compressionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_layout: {
      value: cdktf.stringToHclTerraform(struct!.dataLayout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_acceleration: {
      value: cdktf.stringToHclTerraform(struct!.externalAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_domain: {
      value: cdktf.stringToHclTerraform(struct!.protectionDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_journal_capacity_percentage: {
      value: cdktf.stringToHclTerraform(struct!.replicationJournalCapacityPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zero_padding: {
      value: cdktf.stringToHclTerraform(struct!.zeroPadding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterStoragePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterStoragePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionMethod = this._compressionMethod;
    }
    if (this._dataLayout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLayout = this._dataLayout;
    }
    if (this._externalAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAcceleration = this._externalAcceleration;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._protectionDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomain = this._protectionDomain;
    }
    if (this._replicationJournalCapacityPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationJournalCapacityPercentage = this._replicationJournalCapacityPercentage;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._zeroPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroPadding = this._zeroPadding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterStoragePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionMethod = undefined;
      this._dataLayout = undefined;
      this._externalAcceleration = undefined;
      this._mediaType = undefined;
      this._protectionDomain = undefined;
      this._replicationJournalCapacityPercentage = undefined;
      this._storagePool = undefined;
      this._zeroPadding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionMethod = value.compressionMethod;
      this._dataLayout = value.dataLayout;
      this._externalAcceleration = value.externalAcceleration;
      this._mediaType = value.mediaType;
      this._protectionDomain = value.protectionDomain;
      this._replicationJournalCapacityPercentage = value.replicationJournalCapacityPercentage;
      this._storagePool = value.storagePool;
      this._zeroPadding = value.zeroPadding;
    }
  }

  // compression_method - computed: false, optional: true, required: false
  private _compressionMethod?: string; 
  public get compressionMethod() {
    return this.getStringAttribute('compression_method');
  }
  public set compressionMethod(value: string) {
    this._compressionMethod = value;
  }
  public resetCompressionMethod() {
    this._compressionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionMethodInput() {
    return this._compressionMethod;
  }

  // data_layout - computed: false, optional: true, required: false
  private _dataLayout?: string; 
  public get dataLayout() {
    return this.getStringAttribute('data_layout');
  }
  public set dataLayout(value: string) {
    this._dataLayout = value;
  }
  public resetDataLayout() {
    this._dataLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLayoutInput() {
    return this._dataLayout;
  }

  // external_acceleration - computed: false, optional: true, required: false
  private _externalAcceleration?: string; 
  public get externalAcceleration() {
    return this.getStringAttribute('external_acceleration');
  }
  public set externalAcceleration(value: string) {
    this._externalAcceleration = value;
  }
  public resetExternalAcceleration() {
    this._externalAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccelerationInput() {
    return this._externalAcceleration;
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // protection_domain - computed: false, optional: true, required: false
  private _protectionDomain?: string; 
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }
  public set protectionDomain(value: string) {
    this._protectionDomain = value;
  }
  public resetProtectionDomain() {
    this._protectionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainInput() {
    return this._protectionDomain;
  }

  // replication_journal_capacity_percentage - computed: false, optional: true, required: false
  private _replicationJournalCapacityPercentage?: string; 
  public get replicationJournalCapacityPercentage() {
    return this.getStringAttribute('replication_journal_capacity_percentage');
  }
  public set replicationJournalCapacityPercentage(value: string) {
    this._replicationJournalCapacityPercentage = value;
  }
  public resetReplicationJournalCapacityPercentage() {
    this._replicationJournalCapacityPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationJournalCapacityPercentageInput() {
    return this._replicationJournalCapacityPercentage;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // zero_padding - computed: false, optional: true, required: false
  private _zeroPadding?: string; 
  public get zeroPadding() {
    return this.getStringAttribute('zero_padding');
  }
  public set zeroPadding(value: string) {
    this._zeroPadding = value;
  }
  public resetZeroPadding() {
    this._zeroPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroPaddingInput() {
    return this._zeroPadding;
  }
}

export class ClusterStoragePoolsList extends cdktf.ComplexList {
  public internalValue? : ClusterStoragePools[] | cdktf.IResolvable

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
  public get(index: number): ClusterStoragePoolsOutputReference {
    return new ClusterStoragePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster powerflex_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/cluster powerflex_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_cluster',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowNonSecureCommunicationWithLia = config.allowNonSecureCommunicationWithLia;
    this._allowNonSecureCommunicationWithMdm = config.allowNonSecureCommunicationWithMdm;
    this._cluster.internalValue = config.cluster;
    this._disableNonMgmtComponentsAuth = config.disableNonMgmtComponentsAuth;
    this._id = config.id;
    this._liaPassword = config.liaPassword;
    this._mdmPassword = config.mdmPassword;
    this._storagePools.internalValue = config.storagePools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_non_secure_communication_with_lia - computed: false, optional: true, required: false
  private _allowNonSecureCommunicationWithLia?: boolean | cdktf.IResolvable; 
  public get allowNonSecureCommunicationWithLia() {
    return this.getBooleanAttribute('allow_non_secure_communication_with_lia');
  }
  public set allowNonSecureCommunicationWithLia(value: boolean | cdktf.IResolvable) {
    this._allowNonSecureCommunicationWithLia = value;
  }
  public resetAllowNonSecureCommunicationWithLia() {
    this._allowNonSecureCommunicationWithLia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonSecureCommunicationWithLiaInput() {
    return this._allowNonSecureCommunicationWithLia;
  }

  // allow_non_secure_communication_with_mdm - computed: false, optional: true, required: false
  private _allowNonSecureCommunicationWithMdm?: boolean | cdktf.IResolvable; 
  public get allowNonSecureCommunicationWithMdm() {
    return this.getBooleanAttribute('allow_non_secure_communication_with_mdm');
  }
  public set allowNonSecureCommunicationWithMdm(value: boolean | cdktf.IResolvable) {
    this._allowNonSecureCommunicationWithMdm = value;
  }
  public resetAllowNonSecureCommunicationWithMdm() {
    this._allowNonSecureCommunicationWithMdm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonSecureCommunicationWithMdmInput() {
    return this._allowNonSecureCommunicationWithMdm;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster = new ClusterClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ClusterCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // disable_non_mgmt_components_auth - computed: false, optional: true, required: false
  private _disableNonMgmtComponentsAuth?: boolean | cdktf.IResolvable; 
  public get disableNonMgmtComponentsAuth() {
    return this.getBooleanAttribute('disable_non_mgmt_components_auth');
  }
  public set disableNonMgmtComponentsAuth(value: boolean | cdktf.IResolvable) {
    this._disableNonMgmtComponentsAuth = value;
  }
  public resetDisableNonMgmtComponentsAuth() {
    this._disableNonMgmtComponentsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNonMgmtComponentsAuthInput() {
    return this._disableNonMgmtComponentsAuth;
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

  // lia_password - computed: false, optional: false, required: true
  private _liaPassword?: string; 
  public get liaPassword() {
    return this.getStringAttribute('lia_password');
  }
  public set liaPassword(value: string) {
    this._liaPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get liaPasswordInput() {
    return this._liaPassword;
  }

  // mdm_list - computed: true, optional: false, required: false
  private _mdmList = new ClusterMdmListStructList(this, "mdm_list", true);
  public get mdmList() {
    return this._mdmList;
  }

  // mdm_password - computed: false, optional: false, required: true
  private _mdmPassword?: string; 
  public get mdmPassword() {
    return this.getStringAttribute('mdm_password');
  }
  public set mdmPassword(value: string) {
    this._mdmPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmPasswordInput() {
    return this._mdmPassword;
  }

  // protection_domains - computed: true, optional: false, required: false
  private _protectionDomains = new ClusterProtectionDomainsList(this, "protection_domains", false);
  public get protectionDomains() {
    return this._protectionDomains;
  }

  // sdc_list - computed: true, optional: false, required: false
  private _sdcList = new ClusterSdcListStructList(this, "sdc_list", true);
  public get sdcList() {
    return this._sdcList;
  }

  // sdr_list - computed: true, optional: false, required: false
  private _sdrList = new ClusterSdrListStructList(this, "sdr_list", true);
  public get sdrList() {
    return this._sdrList;
  }

  // sds_list - computed: true, optional: false, required: false
  private _sdsList = new ClusterSdsListStructList(this, "sds_list", true);
  public get sdsList() {
    return this._sdsList;
  }

  // sdt_list - computed: true, optional: false, required: false
  private _sdtList = new ClusterSdtListStructList(this, "sdt_list", true);
  public get sdtList() {
    return this._sdtList;
  }

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools = new ClusterStoragePoolsList(this, "storage_pools", false);
  public get storagePools() {
    return this._storagePools;
  }
  public putStoragePools(value: ClusterStoragePools[] | cdktf.IResolvable) {
    this._storagePools.internalValue = value;
  }
  public resetStoragePools() {
    this._storagePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_non_secure_communication_with_lia: cdktf.booleanToTerraform(this._allowNonSecureCommunicationWithLia),
      allow_non_secure_communication_with_mdm: cdktf.booleanToTerraform(this._allowNonSecureCommunicationWithMdm),
      cluster: cdktf.listMapper(clusterClusterToTerraform, false)(this._cluster.internalValue),
      disable_non_mgmt_components_auth: cdktf.booleanToTerraform(this._disableNonMgmtComponentsAuth),
      id: cdktf.stringToTerraform(this._id),
      lia_password: cdktf.stringToTerraform(this._liaPassword),
      mdm_password: cdktf.stringToTerraform(this._mdmPassword),
      storage_pools: cdktf.listMapper(clusterStoragePoolsToTerraform, false)(this._storagePools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_non_secure_communication_with_lia: {
        value: cdktf.booleanToHclTerraform(this._allowNonSecureCommunicationWithLia),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_non_secure_communication_with_mdm: {
        value: cdktf.booleanToHclTerraform(this._allowNonSecureCommunicationWithMdm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster: {
        value: cdktf.listMapperHcl(clusterClusterToHclTerraform, false)(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterClusterList",
      },
      disable_non_mgmt_components_auth: {
        value: cdktf.booleanToHclTerraform(this._disableNonMgmtComponentsAuth),
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
      lia_password: {
        value: cdktf.stringToHclTerraform(this._liaPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdm_password: {
        value: cdktf.stringToHclTerraform(this._mdmPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_pools: {
        value: cdktf.listMapperHcl(clusterStoragePoolsToHclTerraform, false)(this._storagePools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterStoragePoolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
