// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightHciNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#account_moid DataIntersightHciNode#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The rackable unit model of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#block_model DataIntersightHciNode#block_model}
  */
  readonly blockModel?: string;
  /**
  * The rackable unit serial number of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#block_serial DataIntersightHciNode#block_serial}
  */
  readonly blockSerial?: string;
  /**
  * The boot time in microseconds of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#boot_time_usecs DataIntersightHciNode#boot_time_usecs}
  */
  readonly bootTimeUsecs?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The unique identifier of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#cluster_ext_id DataIntersightHciNode#cluster_ext_id}
  */
  readonly clusterExtId?: string;
  /**
  * The name of the cluster this node belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#cluster_name DataIntersightHciNode#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The identifier number of the controller VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#controller_vm_id DataIntersightHciNode#controller_vm_id}
  */
  readonly controllerVmId?: number;
  /**
  * The maintenance mode status of the controller VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#controller_vm_maintanence_mode DataIntersightHciNode#controller_vm_maintanence_mode}
  */
  readonly controllerVmMaintanenceMode?: boolean | cdktf.IResolvable;
  /**
  * The NAT port of the controller VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#controller_vm_nat_port DataIntersightHciNode#controller_vm_nat_port}
  */
  readonly controllerVmNatPort?: number;
  /**
  * The Rackable unit UUID of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#controller_vm_server_uuid DataIntersightHciNode#controller_vm_server_uuid}
  */
  readonly controllerVmServerUuid?: string;
  /**
  * The CPU capacity in Hz of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#cpu_capacity_hz DataIntersightHciNode#cpu_capacity_hz}
  */
  readonly cpuCapacityHz?: number;
  /**
  * The CPU frequency in Hz on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#cpu_frequency_hz DataIntersightHciNode#cpu_frequency_hz}
  */
  readonly cpuFrequencyHz?: number;
  /**
  * The CPU model of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#cpu_model DataIntersightHciNode#cpu_model}
  */
  readonly cpuModel?: string;
  /**
  * The CPU usage in Hz of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#cpu_usage_hz DataIntersightHciNode#cpu_usage_hz}
  */
  readonly cpuUsageHz?: number;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#create_time DataIntersightHciNode#create_time}
  */
  readonly createTime?: string;
  /**
  * The default VHD container UUID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#default_vhd_container_uuid DataIntersightHciNode#default_vhd_container_uuid}
  */
  readonly defaultVhdContainerUuid?: string;
  /**
  * The default VHD location of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#default_vhd_location DataIntersightHciNode#default_vhd_location}
  */
  readonly defaultVhdLocation?: string;
  /**
  * The default VM container UUID of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#default_vm_container_uuid DataIntersightHciNode#default_vm_container_uuid}
  */
  readonly defaultVmContainerUuid?: string;
  /**
  * The default VM location of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#default_vm_location DataIntersightHciNode#default_vm_location}
  */
  readonly defaultVmLocation?: string;
  /**
  * The number of disks on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#disk_count DataIntersightHciNode#disk_count}
  */
  readonly diskCount?: number;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#domain_group_moid DataIntersightHciNode#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * The failover cluster FQDN of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#failover_cluster_fqdn DataIntersightHciNode#failover_cluster_fqdn}
  */
  readonly failoverClusterFqdn?: string;
  /**
  * The failover cluster node status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#failover_cluster_node_status DataIntersightHciNode#failover_cluster_node_status}
  */
  readonly failoverClusterNodeStatus?: string;
  /**
  * The number of GPUs on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#gpu_count DataIntersightHciNode#gpu_count}
  */
  readonly gpuCount?: number;
  /**
  * The GPU driver version of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#gpu_driver_version DataIntersightHciNode#gpu_driver_version}
  */
  readonly gpuDriverVersion?: string;
  /**
  * Certificate signing request status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#has_csr DataIntersightHciNode#has_csr}
  */
  readonly hasCsr?: boolean | cdktf.IResolvable;
  /**
  * The name of the host the node is running on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#host_name DataIntersightHciNode#host_name}
  */
  readonly hostName?: string;
  /**
  * The type of the host, e.g. HYPER_CONVERGED, COMPUTE_ONLY, STORAGE_ONLY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#host_type DataIntersightHciNode#host_type}
  */
  readonly hostType?: string;
  /**
  * The connection state of the hypervisor, e.g. CONNECTED, DISCONNECTED, NOT_AVAILABLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#hypervisor_acropolis_connection_state DataIntersightHciNode#hypervisor_acropolis_connection_state}
  */
  readonly hypervisorAcropolisConnectionState?: string;
  /**
  * The number of VMs managed on this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#hypervisor_number_of_vms DataIntersightHciNode#hypervisor_number_of_vms}
  */
  readonly hypervisorNumberOfVms?: number;
  /**
  * The hypervisor state e.g. ACROPOLIS_NORMAL, ENTERING_MAINTENANCE_MODE,
  * ENTERED_MAINTENANCE_MODE, RESERVED_FOR_HA_FAILOVER, ENTERING_MAINTENANCE_MODE_FROM_HA_FAILOVER,
  * RESERVING_FOR_HA_FAILOVER, HA_FAILOVER_SOURCE, HA_FAILOVER_TARGET, HA_HEALING_SOURCE,
  * HA_HEALING_TARGET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#hypervisor_state DataIntersightHciNode#hypervisor_state}
  */
  readonly hypervisorState?: string;
  /**
  * The hypervisor type, e.g. AHV, ESX, HYPERV, XEN, NATIVEHOST etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#hypervisor_type DataIntersightHciNode#hypervisor_type}
  */
  readonly hypervisorType?: string;
  /**
  * The user name of the hypervisor on this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#hypervisor_user_name DataIntersightHciNode#hypervisor_user_name}
  */
  readonly hypervisorUserName?: string;
  /**
  * The version of the hypervisor on this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#hypervisor_version DataIntersightHciNode#hypervisor_version}
  */
  readonly hypervisorVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#id DataIntersightHciNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IPMI user name of the controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipmi_username DataIntersightHciNode#ipmi_username}
  */
  readonly ipmiUsername?: string;
  /**
  * The degraded status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#is_degraded DataIntersightHciNode#is_degraded}
  */
  readonly isDegraded?: boolean | cdktf.IResolvable;
  /**
  * The hardware virtualization status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#is_hardware_virtualized DataIntersightHciNode#is_hardware_virtualized}
  */
  readonly isHardwareVirtualized?: boolean | cdktf.IResolvable;
  /**
  * The secure boot status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#is_secure_booted DataIntersightHciNode#is_secure_booted}
  */
  readonly isSecureBooted?: boolean | cdktf.IResolvable;
  /**
  * The maintenance state of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#maintenance_state DataIntersightHciNode#maintenance_state}
  */
  readonly maintenanceState?: string;
  /**
  * The memory capacity in bytes of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#memory_capacity_bytes DataIntersightHciNode#memory_capacity_bytes}
  */
  readonly memoryCapacityBytes?: number;
  /**
  * The memory size in bytes of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#memory_size_bytes DataIntersightHciNode#memory_size_bytes}
  */
  readonly memorySizeBytes?: number;
  /**
  * The memory usage in bytes of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#memory_usage_bytes DataIntersightHciNode#memory_usage_bytes}
  */
  readonly memoryUsageBytes?: number;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#mod_time DataIntersightHciNode#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The unique identifier of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#node_ext_id DataIntersightHciNode#node_ext_id}
  */
  readonly nodeExtId?: string;
  /**
  * The serial number of this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#node_serial DataIntersightHciNode#node_serial}
  */
  readonly nodeSerial?: string;
  /**
  * The status of the node such as NORMAL, TO_BE_REMOVED, OK_TO_BE_REMOVED,
  * NEW_NODE, TO_BE_PREPROTECTED, PREPROTECTED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#node_status DataIntersightHciNode#node_status}
  */
  readonly nodeStatus?: string;
  /**
  * The number of CPU cores on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#number_of_cpu_cores DataIntersightHciNode#number_of_cpu_cores}
  */
  readonly numberOfCpuCores?: number;
  /**
  * The number of sockets on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#number_of_cpu_sockets DataIntersightHciNode#number_of_cpu_sockets}
  */
  readonly numberOfCpuSockets?: number;
  /**
  * The number of threads on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#number_of_cpu_threads DataIntersightHciNode#number_of_cpu_threads}
  */
  readonly numberOfCpuThreads?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#owners DataIntersightHciNode#owners}
  */
  readonly owners?: string[];
  /**
  * The reboot pending status of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#reboot_pending DataIntersightHciNode#reboot_pending}
  */
  readonly rebootPending?: boolean | cdktf.IResolvable;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#shared_scope DataIntersightHciNode#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * The storage capacity in bytes of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#storage_capacity_bytes DataIntersightHciNode#storage_capacity_bytes}
  */
  readonly storageCapacityBytes?: number;
  /**
  * The storage usage in bytes of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#storage_usage_bytes DataIntersightHciNode#storage_usage_bytes}
  */
  readonly storageUsageBytes?: number;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ancestors DataIntersightHciNode#ancestors}
  */
  readonly ancestors?: DataIntersightHciNodeAncestors[] | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#cluster DataIntersightHciNode#cluster}
  */
  readonly cluster?: DataIntersightHciNodeCluster;
  /**
  * controller_vm_backplane_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#controller_vm_backplane_address DataIntersightHciNode#controller_vm_backplane_address}
  */
  readonly controllerVmBackplaneAddress?: DataIntersightHciNodeControllerVmBackplaneAddress;
  /**
  * controller_vm_external_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#controller_vm_external_address DataIntersightHciNode#controller_vm_external_address}
  */
  readonly controllerVmExternalAddress?: DataIntersightHciNodeControllerVmExternalAddress;
  /**
  * controller_vm_nat_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#controller_vm_nat_ip DataIntersightHciNode#controller_vm_nat_ip}
  */
  readonly controllerVmNatIp?: DataIntersightHciNodeControllerVmNatIp;
  /**
  * controller_vm_rdma_backplane_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#controller_vm_rdma_backplane_address DataIntersightHciNode#controller_vm_rdma_backplane_address}
  */
  readonly controllerVmRdmaBackplaneAddress?: DataIntersightHciNodeControllerVmRdmaBackplaneAddress;
  /**
  * disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#disks DataIntersightHciNode#disks}
  */
  readonly disks?: DataIntersightHciNodeDisks[] | cdktf.IResolvable;
  /**
  * gpus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#gpus DataIntersightHciNode#gpus}
  */
  readonly gpus?: DataIntersightHciNodeGpus[] | cdktf.IResolvable;
  /**
  * hypervisor_external_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#hypervisor_external_address DataIntersightHciNode#hypervisor_external_address}
  */
  readonly hypervisorExternalAddress?: DataIntersightHciNodeHypervisorExternalAddress;
  /**
  * ipmi_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipmi_ip DataIntersightHciNode#ipmi_ip}
  */
  readonly ipmiIp?: DataIntersightHciNodeIpmiIp;
  /**
  * key_management_device_to_cert_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#key_management_device_to_cert_status DataIntersightHciNode#key_management_device_to_cert_status}
  */
  readonly keyManagementDeviceToCertStatus?: DataIntersightHciNodeKeyManagementDeviceToCertStatus[] | cdktf.IResolvable;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#parent DataIntersightHciNode#parent}
  */
  readonly parent?: DataIntersightHciNodeParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#permission_resources DataIntersightHciNode#permission_resources}
  */
  readonly permissionResources?: DataIntersightHciNodePermissionResources[] | cdktf.IResolvable;
  /**
  * physical_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#physical_server DataIntersightHciNode#physical_server}
  */
  readonly physicalServer?: DataIntersightHciNodePhysicalServer;
  /**
  * registered_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#registered_device DataIntersightHciNode#registered_device}
  */
  readonly registeredDevice?: DataIntersightHciNodeRegisteredDevice;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#tags DataIntersightHciNode#tags}
  */
  readonly tags?: DataIntersightHciNodeTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#version_context DataIntersightHciNode#version_context}
  */
  readonly versionContext?: DataIntersightHciNodeVersionContext;
  /**
  * vms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#vms DataIntersightHciNode#vms}
  */
  readonly vms?: DataIntersightHciNodeVms[] | cdktf.IResolvable;
}
export interface DataIntersightHciNodeResultsAncestors {
}

export function dataIntersightHciNodeResultsAncestorsToTerraform(struct?: DataIntersightHciNodeResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsAncestorsToHclTerraform(struct?: DataIntersightHciNodeResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsAncestors | undefined) {
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

export class DataIntersightHciNodeResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsAncestorsOutputReference {
    return new DataIntersightHciNodeResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsCluster {
}

export function dataIntersightHciNodeResultsClusterToTerraform(struct?: DataIntersightHciNodeResultsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsClusterToHclTerraform(struct?: DataIntersightHciNodeResultsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsCluster | undefined) {
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

export class DataIntersightHciNodeResultsClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsClusterOutputReference {
    return new DataIntersightHciNodeResultsClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsControllerVmBackplaneAddress {
}

export function dataIntersightHciNodeResultsControllerVmBackplaneAddressToTerraform(struct?: DataIntersightHciNodeResultsControllerVmBackplaneAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsControllerVmBackplaneAddressToHclTerraform(struct?: DataIntersightHciNodeResultsControllerVmBackplaneAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsControllerVmBackplaneAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsControllerVmBackplaneAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsControllerVmBackplaneAddress | undefined) {
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_prefix_length - computed: true, optional: false, required: false
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_prefix_length - computed: true, optional: false, required: false
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHciNodeResultsControllerVmBackplaneAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsControllerVmBackplaneAddressOutputReference {
    return new DataIntersightHciNodeResultsControllerVmBackplaneAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsControllerVmExternalAddress {
}

export function dataIntersightHciNodeResultsControllerVmExternalAddressToTerraform(struct?: DataIntersightHciNodeResultsControllerVmExternalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsControllerVmExternalAddressToHclTerraform(struct?: DataIntersightHciNodeResultsControllerVmExternalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsControllerVmExternalAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsControllerVmExternalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsControllerVmExternalAddress | undefined) {
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_prefix_length - computed: true, optional: false, required: false
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_prefix_length - computed: true, optional: false, required: false
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHciNodeResultsControllerVmExternalAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsControllerVmExternalAddressOutputReference {
    return new DataIntersightHciNodeResultsControllerVmExternalAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsControllerVmNatIp {
}

export function dataIntersightHciNodeResultsControllerVmNatIpToTerraform(struct?: DataIntersightHciNodeResultsControllerVmNatIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsControllerVmNatIpToHclTerraform(struct?: DataIntersightHciNodeResultsControllerVmNatIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsControllerVmNatIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsControllerVmNatIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsControllerVmNatIp | undefined) {
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_prefix_length - computed: true, optional: false, required: false
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_prefix_length - computed: true, optional: false, required: false
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHciNodeResultsControllerVmNatIpList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsControllerVmNatIpOutputReference {
    return new DataIntersightHciNodeResultsControllerVmNatIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddress {
}

export function dataIntersightHciNodeResultsControllerVmRdmaBackplaneAddressToTerraform(struct?: DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsControllerVmRdmaBackplaneAddressToHclTerraform(struct?: DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddress | undefined) {
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_prefix_length - computed: true, optional: false, required: false
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_prefix_length - computed: true, optional: false, required: false
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddressOutputReference {
    return new DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsDisks {
}

export function dataIntersightHciNodeResultsDisksToTerraform(struct?: DataIntersightHciNodeResultsDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsDisksToHclTerraform(struct?: DataIntersightHciNodeResultsDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsDisks | undefined) {
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

export class DataIntersightHciNodeResultsDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsDisksOutputReference {
    return new DataIntersightHciNodeResultsDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsGpus {
}

export function dataIntersightHciNodeResultsGpusToTerraform(struct?: DataIntersightHciNodeResultsGpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsGpusToHclTerraform(struct?: DataIntersightHciNodeResultsGpus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsGpus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsGpus | undefined) {
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

export class DataIntersightHciNodeResultsGpusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsGpusOutputReference {
    return new DataIntersightHciNodeResultsGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsHypervisorExternalAddress {
}

export function dataIntersightHciNodeResultsHypervisorExternalAddressToTerraform(struct?: DataIntersightHciNodeResultsHypervisorExternalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsHypervisorExternalAddressToHclTerraform(struct?: DataIntersightHciNodeResultsHypervisorExternalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsHypervisorExternalAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsHypervisorExternalAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsHypervisorExternalAddress | undefined) {
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_prefix_length - computed: true, optional: false, required: false
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_prefix_length - computed: true, optional: false, required: false
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHciNodeResultsHypervisorExternalAddressList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsHypervisorExternalAddressOutputReference {
    return new DataIntersightHciNodeResultsHypervisorExternalAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsIpmiIp {
}

export function dataIntersightHciNodeResultsIpmiIpToTerraform(struct?: DataIntersightHciNodeResultsIpmiIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsIpmiIpToHclTerraform(struct?: DataIntersightHciNodeResultsIpmiIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsIpmiIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsIpmiIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsIpmiIp | undefined) {
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv4_prefix_length - computed: true, optional: false, required: false
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // ipv6_prefix_length - computed: true, optional: false, required: false
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHciNodeResultsIpmiIpList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsIpmiIpOutputReference {
    return new DataIntersightHciNodeResultsIpmiIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsKeyManagementDeviceToCertStatus {
}

export function dataIntersightHciNodeResultsKeyManagementDeviceToCertStatusToTerraform(struct?: DataIntersightHciNodeResultsKeyManagementDeviceToCertStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsKeyManagementDeviceToCertStatusToHclTerraform(struct?: DataIntersightHciNodeResultsKeyManagementDeviceToCertStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsKeyManagementDeviceToCertStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsKeyManagementDeviceToCertStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsKeyManagementDeviceToCertStatus | undefined) {
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

  // key_management_server_name - computed: true, optional: false, required: false
  public get keyManagementServerName() {
    return this.getStringAttribute('key_management_server_name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }
}

export class DataIntersightHciNodeResultsKeyManagementDeviceToCertStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsKeyManagementDeviceToCertStatusOutputReference {
    return new DataIntersightHciNodeResultsKeyManagementDeviceToCertStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsParent {
}

export function dataIntersightHciNodeResultsParentToTerraform(struct?: DataIntersightHciNodeResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsParentToHclTerraform(struct?: DataIntersightHciNodeResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsParent | undefined) {
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

export class DataIntersightHciNodeResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsParentOutputReference {
    return new DataIntersightHciNodeResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsPermissionResources {
}

export function dataIntersightHciNodeResultsPermissionResourcesToTerraform(struct?: DataIntersightHciNodeResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsPermissionResourcesToHclTerraform(struct?: DataIntersightHciNodeResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsPermissionResources | undefined) {
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

export class DataIntersightHciNodeResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsPermissionResourcesOutputReference {
    return new DataIntersightHciNodeResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsPhysicalServer {
}

export function dataIntersightHciNodeResultsPhysicalServerToTerraform(struct?: DataIntersightHciNodeResultsPhysicalServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsPhysicalServerToHclTerraform(struct?: DataIntersightHciNodeResultsPhysicalServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsPhysicalServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsPhysicalServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsPhysicalServer | undefined) {
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

export class DataIntersightHciNodeResultsPhysicalServerList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsPhysicalServerOutputReference {
    return new DataIntersightHciNodeResultsPhysicalServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsRegisteredDevice {
}

export function dataIntersightHciNodeResultsRegisteredDeviceToTerraform(struct?: DataIntersightHciNodeResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsRegisteredDeviceToHclTerraform(struct?: DataIntersightHciNodeResultsRegisteredDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsRegisteredDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsRegisteredDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsRegisteredDevice | undefined) {
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

export class DataIntersightHciNodeResultsRegisteredDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsRegisteredDeviceOutputReference {
    return new DataIntersightHciNodeResultsRegisteredDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsTagsAncestorDefinitions {
}

export function dataIntersightHciNodeResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHciNodeResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHciNodeResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsTagsAncestorDefinitions | undefined) {
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

export class DataIntersightHciNodeResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHciNodeResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsTagsDefinition {
}

export function dataIntersightHciNodeResultsTagsDefinitionToTerraform(struct?: DataIntersightHciNodeResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsTagsDefinitionToHclTerraform(struct?: DataIntersightHciNodeResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsTagsDefinition | undefined) {
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

export class DataIntersightHciNodeResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsTagsDefinitionOutputReference {
    return new DataIntersightHciNodeResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsTags {
}

export function dataIntersightHciNodeResultsTagsToTerraform(struct?: DataIntersightHciNodeResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsTagsToHclTerraform(struct?: DataIntersightHciNodeResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsTags | undefined) {
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
  private _ancestorDefinitions = new DataIntersightHciNodeResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightHciNodeResultsTagsDefinitionList(this, "definition", false);
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

export class DataIntersightHciNodeResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsTagsOutputReference {
    return new DataIntersightHciNodeResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsVersionContextInterestedMos {
}

export function dataIntersightHciNodeResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightHciNodeResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHciNodeResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsVersionContextInterestedMos | undefined) {
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

export class DataIntersightHciNodeResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightHciNodeResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsVersionContextRefMo {
}

export function dataIntersightHciNodeResultsVersionContextRefMoToTerraform(struct?: DataIntersightHciNodeResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightHciNodeResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsVersionContextRefMo | undefined) {
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

export class DataIntersightHciNodeResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsVersionContextRefMoOutputReference {
    return new DataIntersightHciNodeResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsVersionContext {
}

export function dataIntersightHciNodeResultsVersionContextToTerraform(struct?: DataIntersightHciNodeResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsVersionContextToHclTerraform(struct?: DataIntersightHciNodeResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightHciNodeResultsVersionContextInterestedMosList(this, "interested_mos", false);
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
  private _refMo = new DataIntersightHciNodeResultsVersionContextRefMoList(this, "ref_mo", false);
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

export class DataIntersightHciNodeResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsVersionContextOutputReference {
    return new DataIntersightHciNodeResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResultsVms {
}

export function dataIntersightHciNodeResultsVmsToTerraform(struct?: DataIntersightHciNodeResultsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsVmsToHclTerraform(struct?: DataIntersightHciNodeResultsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsVmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResultsVms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResultsVms | undefined) {
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

export class DataIntersightHciNodeResultsVmsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsVmsOutputReference {
    return new DataIntersightHciNodeResultsVmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeResults {
}

export function dataIntersightHciNodeResultsToTerraform(struct?: DataIntersightHciNodeResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHciNodeResultsToHclTerraform(struct?: DataIntersightHciNodeResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHciNodeResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeResults | undefined) {
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
  private _ancestors = new DataIntersightHciNodeResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // block_model - computed: true, optional: false, required: false
  public get blockModel() {
    return this.getStringAttribute('block_model');
  }

  // block_serial - computed: true, optional: false, required: false
  public get blockSerial() {
    return this.getStringAttribute('block_serial');
  }

  // boot_time_usecs - computed: true, optional: false, required: false
  public get bootTimeUsecs() {
    return this.getNumberAttribute('boot_time_usecs');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataIntersightHciNodeResultsClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }

  // cluster_ext_id - computed: true, optional: false, required: false
  public get clusterExtId() {
    return this.getStringAttribute('cluster_ext_id');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // controller_vm_backplane_address - computed: true, optional: false, required: false
  private _controllerVmBackplaneAddress = new DataIntersightHciNodeResultsControllerVmBackplaneAddressList(this, "controller_vm_backplane_address", false);
  public get controllerVmBackplaneAddress() {
    return this._controllerVmBackplaneAddress;
  }

  // controller_vm_external_address - computed: true, optional: false, required: false
  private _controllerVmExternalAddress = new DataIntersightHciNodeResultsControllerVmExternalAddressList(this, "controller_vm_external_address", false);
  public get controllerVmExternalAddress() {
    return this._controllerVmExternalAddress;
  }

  // controller_vm_id - computed: true, optional: false, required: false
  public get controllerVmId() {
    return this.getNumberAttribute('controller_vm_id');
  }

  // controller_vm_maintanence_mode - computed: true, optional: false, required: false
  public get controllerVmMaintanenceMode() {
    return this.getBooleanAttribute('controller_vm_maintanence_mode');
  }

  // controller_vm_nat_ip - computed: true, optional: false, required: false
  private _controllerVmNatIp = new DataIntersightHciNodeResultsControllerVmNatIpList(this, "controller_vm_nat_ip", false);
  public get controllerVmNatIp() {
    return this._controllerVmNatIp;
  }

  // controller_vm_nat_port - computed: true, optional: false, required: false
  public get controllerVmNatPort() {
    return this.getNumberAttribute('controller_vm_nat_port');
  }

  // controller_vm_rdma_backplane_address - computed: true, optional: false, required: false
  private _controllerVmRdmaBackplaneAddress = new DataIntersightHciNodeResultsControllerVmRdmaBackplaneAddressList(this, "controller_vm_rdma_backplane_address", false);
  public get controllerVmRdmaBackplaneAddress() {
    return this._controllerVmRdmaBackplaneAddress;
  }

  // controller_vm_server_uuid - computed: true, optional: false, required: false
  public get controllerVmServerUuid() {
    return this.getStringAttribute('controller_vm_server_uuid');
  }

  // cpu_capacity_hz - computed: true, optional: false, required: false
  public get cpuCapacityHz() {
    return this.getNumberAttribute('cpu_capacity_hz');
  }

  // cpu_frequency_hz - computed: true, optional: false, required: false
  public get cpuFrequencyHz() {
    return this.getNumberAttribute('cpu_frequency_hz');
  }

  // cpu_model - computed: true, optional: false, required: false
  public get cpuModel() {
    return this.getStringAttribute('cpu_model');
  }

  // cpu_usage_hz - computed: true, optional: false, required: false
  public get cpuUsageHz() {
    return this.getNumberAttribute('cpu_usage_hz');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_vhd_container_uuid - computed: true, optional: false, required: false
  public get defaultVhdContainerUuid() {
    return this.getStringAttribute('default_vhd_container_uuid');
  }

  // default_vhd_location - computed: true, optional: false, required: false
  public get defaultVhdLocation() {
    return this.getStringAttribute('default_vhd_location');
  }

  // default_vm_container_uuid - computed: true, optional: false, required: false
  public get defaultVmContainerUuid() {
    return this.getStringAttribute('default_vm_container_uuid');
  }

  // default_vm_location - computed: true, optional: false, required: false
  public get defaultVmLocation() {
    return this.getStringAttribute('default_vm_location');
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }

  // disks - computed: true, optional: false, required: false
  private _disks = new DataIntersightHciNodeResultsDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // failover_cluster_fqdn - computed: true, optional: false, required: false
  public get failoverClusterFqdn() {
    return this.getStringAttribute('failover_cluster_fqdn');
  }

  // failover_cluster_node_status - computed: true, optional: false, required: false
  public get failoverClusterNodeStatus() {
    return this.getStringAttribute('failover_cluster_node_status');
  }

  // gpu_count - computed: true, optional: false, required: false
  public get gpuCount() {
    return this.getNumberAttribute('gpu_count');
  }

  // gpu_driver_version - computed: true, optional: false, required: false
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }

  // gpus - computed: true, optional: false, required: false
  private _gpus = new DataIntersightHciNodeResultsGpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }

  // has_csr - computed: true, optional: false, required: false
  public get hasCsr() {
    return this.getBooleanAttribute('has_csr');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // hypervisor_acropolis_connection_state - computed: true, optional: false, required: false
  public get hypervisorAcropolisConnectionState() {
    return this.getStringAttribute('hypervisor_acropolis_connection_state');
  }

  // hypervisor_external_address - computed: true, optional: false, required: false
  private _hypervisorExternalAddress = new DataIntersightHciNodeResultsHypervisorExternalAddressList(this, "hypervisor_external_address", false);
  public get hypervisorExternalAddress() {
    return this._hypervisorExternalAddress;
  }

  // hypervisor_number_of_vms - computed: true, optional: false, required: false
  public get hypervisorNumberOfVms() {
    return this.getNumberAttribute('hypervisor_number_of_vms');
  }

  // hypervisor_state - computed: true, optional: false, required: false
  public get hypervisorState() {
    return this.getStringAttribute('hypervisor_state');
  }

  // hypervisor_type - computed: true, optional: false, required: false
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }

  // hypervisor_user_name - computed: true, optional: false, required: false
  public get hypervisorUserName() {
    return this.getStringAttribute('hypervisor_user_name');
  }

  // hypervisor_version - computed: true, optional: false, required: false
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }

  // ipmi_ip - computed: true, optional: false, required: false
  private _ipmiIp = new DataIntersightHciNodeResultsIpmiIpList(this, "ipmi_ip", false);
  public get ipmiIp() {
    return this._ipmiIp;
  }

  // ipmi_username - computed: true, optional: false, required: false
  public get ipmiUsername() {
    return this.getStringAttribute('ipmi_username');
  }

  // is_degraded - computed: true, optional: false, required: false
  public get isDegraded() {
    return this.getBooleanAttribute('is_degraded');
  }

  // is_hardware_virtualized - computed: true, optional: false, required: false
  public get isHardwareVirtualized() {
    return this.getBooleanAttribute('is_hardware_virtualized');
  }

  // is_secure_booted - computed: true, optional: false, required: false
  public get isSecureBooted() {
    return this.getBooleanAttribute('is_secure_booted');
  }

  // key_management_device_to_cert_status - computed: true, optional: false, required: false
  private _keyManagementDeviceToCertStatus = new DataIntersightHciNodeResultsKeyManagementDeviceToCertStatusList(this, "key_management_device_to_cert_status", false);
  public get keyManagementDeviceToCertStatus() {
    return this._keyManagementDeviceToCertStatus;
  }

  // maintenance_state - computed: true, optional: false, required: false
  public get maintenanceState() {
    return this.getStringAttribute('maintenance_state');
  }

  // memory_capacity_bytes - computed: true, optional: false, required: false
  public get memoryCapacityBytes() {
    return this.getNumberAttribute('memory_capacity_bytes');
  }

  // memory_size_bytes - computed: true, optional: false, required: false
  public get memorySizeBytes() {
    return this.getNumberAttribute('memory_size_bytes');
  }

  // memory_usage_bytes - computed: true, optional: false, required: false
  public get memoryUsageBytes() {
    return this.getNumberAttribute('memory_usage_bytes');
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // node_ext_id - computed: true, optional: false, required: false
  public get nodeExtId() {
    return this.getStringAttribute('node_ext_id');
  }

  // node_serial - computed: true, optional: false, required: false
  public get nodeSerial() {
    return this.getStringAttribute('node_serial');
  }

  // node_status - computed: true, optional: false, required: false
  public get nodeStatus() {
    return this.getStringAttribute('node_status');
  }

  // number_of_cpu_cores - computed: true, optional: false, required: false
  public get numberOfCpuCores() {
    return this.getNumberAttribute('number_of_cpu_cores');
  }

  // number_of_cpu_sockets - computed: true, optional: false, required: false
  public get numberOfCpuSockets() {
    return this.getNumberAttribute('number_of_cpu_sockets');
  }

  // number_of_cpu_threads - computed: true, optional: false, required: false
  public get numberOfCpuThreads() {
    return this.getNumberAttribute('number_of_cpu_threads');
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
  private _parent = new DataIntersightHciNodeResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightHciNodeResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // physical_server - computed: true, optional: false, required: false
  private _physicalServer = new DataIntersightHciNodeResultsPhysicalServerList(this, "physical_server", false);
  public get physicalServer() {
    return this._physicalServer;
  }

  // reboot_pending - computed: true, optional: false, required: false
  public get rebootPending() {
    return this.getBooleanAttribute('reboot_pending');
  }

  // registered_device - computed: true, optional: false, required: false
  private _registeredDevice = new DataIntersightHciNodeResultsRegisteredDeviceList(this, "registered_device", false);
  public get registeredDevice() {
    return this._registeredDevice;
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // storage_capacity_bytes - computed: true, optional: false, required: false
  public get storageCapacityBytes() {
    return this.getNumberAttribute('storage_capacity_bytes');
  }

  // storage_usage_bytes - computed: true, optional: false, required: false
  public get storageUsageBytes() {
    return this.getNumberAttribute('storage_usage_bytes');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightHciNodeResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightHciNodeResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }

  // vms - computed: true, optional: false, required: false
  private _vms = new DataIntersightHciNodeResultsVmsList(this, "vms", false);
  public get vms() {
    return this._vms;
  }
}

export class DataIntersightHciNodeResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHciNodeResultsOutputReference {
    return new DataIntersightHciNodeResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeAncestorsToTerraform(struct?: DataIntersightHciNodeAncestors | cdktf.IResolvable): any {
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


export function dataIntersightHciNodeAncestorsToHclTerraform(struct?: DataIntersightHciNodeAncestors | cdktf.IResolvable): any {
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

export class DataIntersightHciNodeAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHciNodeAncestors | cdktf.IResolvable | undefined) {
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

export class DataIntersightHciNodeAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHciNodeAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHciNodeAncestorsOutputReference {
    return new DataIntersightHciNodeAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeClusterToTerraform(struct?: DataIntersightHciNodeClusterOutputReference | DataIntersightHciNodeCluster): any {
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


export function dataIntersightHciNodeClusterToHclTerraform(struct?: DataIntersightHciNodeClusterOutputReference | DataIntersightHciNodeCluster): any {
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

export class DataIntersightHciNodeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeCluster | undefined {
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

  public set internalValue(value: DataIntersightHciNodeCluster | undefined) {
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
export interface DataIntersightHciNodeControllerVmBackplaneAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * An IPv4 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_address DataIntersightHciNode#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The prefix length of the IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_prefix_length DataIntersightHciNode#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: number;
  /**
  * An IPv6 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_address DataIntersightHciNode#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The prefix length of the IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_prefix_length DataIntersightHciNode#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHciNodeControllerVmBackplaneAddressToTerraform(struct?: DataIntersightHciNodeControllerVmBackplaneAddressOutputReference | DataIntersightHciNodeControllerVmBackplaneAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_prefix_length: cdktf.numberToTerraform(struct!.ipv4PrefixLength),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_prefix_length: cdktf.numberToTerraform(struct!.ipv6PrefixLength),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHciNodeControllerVmBackplaneAddressToHclTerraform(struct?: DataIntersightHciNodeControllerVmBackplaneAddressOutputReference | DataIntersightHciNodeControllerVmBackplaneAddress): any {
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
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv4PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixLength),
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

export class DataIntersightHciNodeControllerVmBackplaneAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeControllerVmBackplaneAddress | undefined {
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
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixLength = this._ipv4PrefixLength;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixLength = this._ipv6PrefixLength;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeControllerVmBackplaneAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._ipv4Address = undefined;
      this._ipv4PrefixLength = undefined;
      this._ipv6Address = undefined;
      this._ipv6PrefixLength = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._ipv4Address = value.ipv4Address;
      this._ipv4PrefixLength = value.ipv4PrefixLength;
      this._ipv6Address = value.ipv6Address;
      this._ipv6PrefixLength = value.ipv6PrefixLength;
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

  // ipv4_address - computed: false, optional: true, required: false
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

  // ipv4_prefix_length - computed: false, optional: true, required: false
  private _ipv4PrefixLength?: number; 
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: number) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv6_address - computed: false, optional: true, required: false
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

  // ipv6_prefix_length - computed: false, optional: true, required: false
  private _ipv6PrefixLength?: number; 
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: number) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
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
export interface DataIntersightHciNodeControllerVmExternalAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * An IPv4 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_address DataIntersightHciNode#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The prefix length of the IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_prefix_length DataIntersightHciNode#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: number;
  /**
  * An IPv6 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_address DataIntersightHciNode#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The prefix length of the IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_prefix_length DataIntersightHciNode#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHciNodeControllerVmExternalAddressToTerraform(struct?: DataIntersightHciNodeControllerVmExternalAddressOutputReference | DataIntersightHciNodeControllerVmExternalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_prefix_length: cdktf.numberToTerraform(struct!.ipv4PrefixLength),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_prefix_length: cdktf.numberToTerraform(struct!.ipv6PrefixLength),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHciNodeControllerVmExternalAddressToHclTerraform(struct?: DataIntersightHciNodeControllerVmExternalAddressOutputReference | DataIntersightHciNodeControllerVmExternalAddress): any {
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
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv4PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixLength),
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

export class DataIntersightHciNodeControllerVmExternalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeControllerVmExternalAddress | undefined {
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
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixLength = this._ipv4PrefixLength;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixLength = this._ipv6PrefixLength;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeControllerVmExternalAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._ipv4Address = undefined;
      this._ipv4PrefixLength = undefined;
      this._ipv6Address = undefined;
      this._ipv6PrefixLength = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._ipv4Address = value.ipv4Address;
      this._ipv4PrefixLength = value.ipv4PrefixLength;
      this._ipv6Address = value.ipv6Address;
      this._ipv6PrefixLength = value.ipv6PrefixLength;
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

  // ipv4_address - computed: false, optional: true, required: false
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

  // ipv4_prefix_length - computed: false, optional: true, required: false
  private _ipv4PrefixLength?: number; 
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: number) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv6_address - computed: false, optional: true, required: false
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

  // ipv6_prefix_length - computed: false, optional: true, required: false
  private _ipv6PrefixLength?: number; 
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: number) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
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
export interface DataIntersightHciNodeControllerVmNatIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * An IPv4 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_address DataIntersightHciNode#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The prefix length of the IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_prefix_length DataIntersightHciNode#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: number;
  /**
  * An IPv6 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_address DataIntersightHciNode#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The prefix length of the IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_prefix_length DataIntersightHciNode#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHciNodeControllerVmNatIpToTerraform(struct?: DataIntersightHciNodeControllerVmNatIpOutputReference | DataIntersightHciNodeControllerVmNatIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_prefix_length: cdktf.numberToTerraform(struct!.ipv4PrefixLength),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_prefix_length: cdktf.numberToTerraform(struct!.ipv6PrefixLength),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHciNodeControllerVmNatIpToHclTerraform(struct?: DataIntersightHciNodeControllerVmNatIpOutputReference | DataIntersightHciNodeControllerVmNatIp): any {
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
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv4PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixLength),
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

export class DataIntersightHciNodeControllerVmNatIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeControllerVmNatIp | undefined {
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
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixLength = this._ipv4PrefixLength;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixLength = this._ipv6PrefixLength;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeControllerVmNatIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._ipv4Address = undefined;
      this._ipv4PrefixLength = undefined;
      this._ipv6Address = undefined;
      this._ipv6PrefixLength = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._ipv4Address = value.ipv4Address;
      this._ipv4PrefixLength = value.ipv4PrefixLength;
      this._ipv6Address = value.ipv6Address;
      this._ipv6PrefixLength = value.ipv6PrefixLength;
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

  // ipv4_address - computed: false, optional: true, required: false
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

  // ipv4_prefix_length - computed: false, optional: true, required: false
  private _ipv4PrefixLength?: number; 
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: number) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv6_address - computed: false, optional: true, required: false
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

  // ipv6_prefix_length - computed: false, optional: true, required: false
  private _ipv6PrefixLength?: number; 
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: number) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
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
export interface DataIntersightHciNodeControllerVmRdmaBackplaneAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * An IPv4 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_address DataIntersightHciNode#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The prefix length of the IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_prefix_length DataIntersightHciNode#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: number;
  /**
  * An IPv6 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_address DataIntersightHciNode#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The prefix length of the IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_prefix_length DataIntersightHciNode#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHciNodeControllerVmRdmaBackplaneAddressToTerraform(struct?: DataIntersightHciNodeControllerVmRdmaBackplaneAddressOutputReference | DataIntersightHciNodeControllerVmRdmaBackplaneAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_prefix_length: cdktf.numberToTerraform(struct!.ipv4PrefixLength),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_prefix_length: cdktf.numberToTerraform(struct!.ipv6PrefixLength),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHciNodeControllerVmRdmaBackplaneAddressToHclTerraform(struct?: DataIntersightHciNodeControllerVmRdmaBackplaneAddressOutputReference | DataIntersightHciNodeControllerVmRdmaBackplaneAddress): any {
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
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv4PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixLength),
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

export class DataIntersightHciNodeControllerVmRdmaBackplaneAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeControllerVmRdmaBackplaneAddress | undefined {
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
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixLength = this._ipv4PrefixLength;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixLength = this._ipv6PrefixLength;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeControllerVmRdmaBackplaneAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._ipv4Address = undefined;
      this._ipv4PrefixLength = undefined;
      this._ipv6Address = undefined;
      this._ipv6PrefixLength = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._ipv4Address = value.ipv4Address;
      this._ipv4PrefixLength = value.ipv4PrefixLength;
      this._ipv6Address = value.ipv6Address;
      this._ipv6PrefixLength = value.ipv6PrefixLength;
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

  // ipv4_address - computed: false, optional: true, required: false
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

  // ipv4_prefix_length - computed: false, optional: true, required: false
  private _ipv4PrefixLength?: number; 
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: number) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv6_address - computed: false, optional: true, required: false
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

  // ipv6_prefix_length - computed: false, optional: true, required: false
  private _ipv6PrefixLength?: number; 
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: number) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
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
export interface DataIntersightHciNodeDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeDisksToTerraform(struct?: DataIntersightHciNodeDisks | cdktf.IResolvable): any {
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


export function dataIntersightHciNodeDisksToHclTerraform(struct?: DataIntersightHciNodeDisks | cdktf.IResolvable): any {
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

export class DataIntersightHciNodeDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeDisks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHciNodeDisks | cdktf.IResolvable | undefined) {
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

export class DataIntersightHciNodeDisksList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHciNodeDisks[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHciNodeDisksOutputReference {
    return new DataIntersightHciNodeDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeGpus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeGpusToTerraform(struct?: DataIntersightHciNodeGpus | cdktf.IResolvable): any {
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


export function dataIntersightHciNodeGpusToHclTerraform(struct?: DataIntersightHciNodeGpus | cdktf.IResolvable): any {
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

export class DataIntersightHciNodeGpusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeGpus | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHciNodeGpus | cdktf.IResolvable | undefined) {
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

export class DataIntersightHciNodeGpusList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHciNodeGpus[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHciNodeGpusOutputReference {
    return new DataIntersightHciNodeGpusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeHypervisorExternalAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * An IPv4 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_address DataIntersightHciNode#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The prefix length of the IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_prefix_length DataIntersightHciNode#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: number;
  /**
  * An IPv6 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_address DataIntersightHciNode#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The prefix length of the IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_prefix_length DataIntersightHciNode#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHciNodeHypervisorExternalAddressToTerraform(struct?: DataIntersightHciNodeHypervisorExternalAddressOutputReference | DataIntersightHciNodeHypervisorExternalAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_prefix_length: cdktf.numberToTerraform(struct!.ipv4PrefixLength),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_prefix_length: cdktf.numberToTerraform(struct!.ipv6PrefixLength),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHciNodeHypervisorExternalAddressToHclTerraform(struct?: DataIntersightHciNodeHypervisorExternalAddressOutputReference | DataIntersightHciNodeHypervisorExternalAddress): any {
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
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv4PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixLength),
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

export class DataIntersightHciNodeHypervisorExternalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeHypervisorExternalAddress | undefined {
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
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixLength = this._ipv4PrefixLength;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixLength = this._ipv6PrefixLength;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeHypervisorExternalAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._ipv4Address = undefined;
      this._ipv4PrefixLength = undefined;
      this._ipv6Address = undefined;
      this._ipv6PrefixLength = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._ipv4Address = value.ipv4Address;
      this._ipv4PrefixLength = value.ipv4PrefixLength;
      this._ipv6Address = value.ipv6Address;
      this._ipv6PrefixLength = value.ipv6PrefixLength;
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

  // ipv4_address - computed: false, optional: true, required: false
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

  // ipv4_prefix_length - computed: false, optional: true, required: false
  private _ipv4PrefixLength?: number; 
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: number) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv6_address - computed: false, optional: true, required: false
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

  // ipv6_prefix_length - computed: false, optional: true, required: false
  private _ipv6PrefixLength?: number; 
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: number) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
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
export interface DataIntersightHciNodeIpmiIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * An IPv4 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_address DataIntersightHciNode#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * The prefix length of the IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv4_prefix_length DataIntersightHciNode#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: number;
  /**
  * An IPv6 address in this IpAddress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_address DataIntersightHciNode#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * The prefix length of the IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ipv6_prefix_length DataIntersightHciNode#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightHciNodeIpmiIpToTerraform(struct?: DataIntersightHciNodeIpmiIpOutputReference | DataIntersightHciNodeIpmiIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_prefix_length: cdktf.numberToTerraform(struct!.ipv4PrefixLength),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_prefix_length: cdktf.numberToTerraform(struct!.ipv6PrefixLength),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightHciNodeIpmiIpToHclTerraform(struct?: DataIntersightHciNodeIpmiIpOutputReference | DataIntersightHciNodeIpmiIp): any {
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
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv4PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixLength),
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

export class DataIntersightHciNodeIpmiIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeIpmiIp | undefined {
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
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixLength = this._ipv4PrefixLength;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixLength = this._ipv6PrefixLength;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHciNodeIpmiIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._ipv4Address = undefined;
      this._ipv4PrefixLength = undefined;
      this._ipv6Address = undefined;
      this._ipv6PrefixLength = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._ipv4Address = value.ipv4Address;
      this._ipv4PrefixLength = value.ipv4PrefixLength;
      this._ipv6Address = value.ipv6Address;
      this._ipv6PrefixLength = value.ipv6PrefixLength;
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

  // ipv4_address - computed: false, optional: true, required: false
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

  // ipv4_prefix_length - computed: false, optional: true, required: false
  private _ipv4PrefixLength?: number; 
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: number) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv6_address - computed: false, optional: true, required: false
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

  // ipv6_prefix_length - computed: false, optional: true, required: false
  private _ipv6PrefixLength?: number; 
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: number) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
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
export interface DataIntersightHciNodeKeyManagementDeviceToCertStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The name of the key management server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#key_management_server_name DataIntersightHciNode#key_management_server_name}
  */
  readonly keyManagementServerName?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
  */
  readonly objectType?: string;
  /**
  * The status of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#status DataIntersightHciNode#status}
  */
  readonly status?: boolean | cdktf.IResolvable;
}

export function dataIntersightHciNodeKeyManagementDeviceToCertStatusToTerraform(struct?: DataIntersightHciNodeKeyManagementDeviceToCertStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    key_management_server_name: cdktf.stringToTerraform(struct!.keyManagementServerName),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    status: cdktf.booleanToTerraform(struct!.status),
  }
}


export function dataIntersightHciNodeKeyManagementDeviceToCertStatusToHclTerraform(struct?: DataIntersightHciNodeKeyManagementDeviceToCertStatus | cdktf.IResolvable): any {
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
    key_management_server_name: {
      value: cdktf.stringToHclTerraform(struct!.keyManagementServerName),
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
      value: cdktf.booleanToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHciNodeKeyManagementDeviceToCertStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeKeyManagementDeviceToCertStatus | cdktf.IResolvable | undefined {
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
    if (this._keyManagementServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyManagementServerName = this._keyManagementServerName;
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

  public set internalValue(value: DataIntersightHciNodeKeyManagementDeviceToCertStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._keyManagementServerName = undefined;
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
      this._keyManagementServerName = value.keyManagementServerName;
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

  // key_management_server_name - computed: false, optional: true, required: false
  private _keyManagementServerName?: string; 
  public get keyManagementServerName() {
    return this.getStringAttribute('key_management_server_name');
  }
  public set keyManagementServerName(value: string) {
    this._keyManagementServerName = value;
  }
  public resetKeyManagementServerName() {
    this._keyManagementServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagementServerNameInput() {
    return this._keyManagementServerName;
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
  private _status?: boolean | cdktf.IResolvable; 
  public get status() {
    return this.getBooleanAttribute('status');
  }
  public set status(value: boolean | cdktf.IResolvable) {
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

export class DataIntersightHciNodeKeyManagementDeviceToCertStatusList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHciNodeKeyManagementDeviceToCertStatus[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHciNodeKeyManagementDeviceToCertStatusOutputReference {
    return new DataIntersightHciNodeKeyManagementDeviceToCertStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeParentToTerraform(struct?: DataIntersightHciNodeParentOutputReference | DataIntersightHciNodeParent): any {
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


export function dataIntersightHciNodeParentToHclTerraform(struct?: DataIntersightHciNodeParentOutputReference | DataIntersightHciNodeParent): any {
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

export class DataIntersightHciNodeParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeParent | undefined {
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

  public set internalValue(value: DataIntersightHciNodeParent | undefined) {
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
export interface DataIntersightHciNodePermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodePermissionResourcesToTerraform(struct?: DataIntersightHciNodePermissionResources | cdktf.IResolvable): any {
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


export function dataIntersightHciNodePermissionResourcesToHclTerraform(struct?: DataIntersightHciNodePermissionResources | cdktf.IResolvable): any {
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

export class DataIntersightHciNodePermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodePermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHciNodePermissionResources | cdktf.IResolvable | undefined) {
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

export class DataIntersightHciNodePermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHciNodePermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHciNodePermissionResourcesOutputReference {
    return new DataIntersightHciNodePermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodePhysicalServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodePhysicalServerToTerraform(struct?: DataIntersightHciNodePhysicalServerOutputReference | DataIntersightHciNodePhysicalServer): any {
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


export function dataIntersightHciNodePhysicalServerToHclTerraform(struct?: DataIntersightHciNodePhysicalServerOutputReference | DataIntersightHciNodePhysicalServer): any {
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

export class DataIntersightHciNodePhysicalServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodePhysicalServer | undefined {
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

  public set internalValue(value: DataIntersightHciNodePhysicalServer | undefined) {
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
export interface DataIntersightHciNodeRegisteredDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeRegisteredDeviceToTerraform(struct?: DataIntersightHciNodeRegisteredDeviceOutputReference | DataIntersightHciNodeRegisteredDevice): any {
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


export function dataIntersightHciNodeRegisteredDeviceToHclTerraform(struct?: DataIntersightHciNodeRegisteredDeviceOutputReference | DataIntersightHciNodeRegisteredDevice): any {
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

export class DataIntersightHciNodeRegisteredDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeRegisteredDevice | undefined {
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

  public set internalValue(value: DataIntersightHciNodeRegisteredDevice | undefined) {
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
export interface DataIntersightHciNodeTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHciNodeTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function dataIntersightHciNodeTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHciNodeTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class DataIntersightHciNodeTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHciNodeTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

export class DataIntersightHciNodeTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHciNodeTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHciNodeTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHciNodeTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeTagsDefinitionToTerraform(struct?: DataIntersightHciNodeTagsDefinitionOutputReference | DataIntersightHciNodeTagsDefinition): any {
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


export function dataIntersightHciNodeTagsDefinitionToHclTerraform(struct?: DataIntersightHciNodeTagsDefinitionOutputReference | DataIntersightHciNodeTagsDefinition): any {
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

export class DataIntersightHciNodeTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeTagsDefinition | undefined {
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

  public set internalValue(value: DataIntersightHciNodeTagsDefinition | undefined) {
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
export interface DataIntersightHciNodeTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#key DataIntersightHciNode#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#propagated DataIntersightHciNode#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the tag is user-defined or owned by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#sys_tag DataIntersightHciNode#sys_tag}
  */
  readonly sysTag?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#type DataIntersightHciNode#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#value DataIntersightHciNode#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ancestor_definitions DataIntersightHciNode#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightHciNodeTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#definition DataIntersightHciNode#definition}
  */
  readonly definition?: DataIntersightHciNodeTagsDefinition;
}

export function dataIntersightHciNodeTagsToTerraform(struct?: DataIntersightHciNodeTags | cdktf.IResolvable): any {
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
    ancestor_definitions: cdktf.listMapper(dataIntersightHciNodeTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightHciNodeTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightHciNodeTagsToHclTerraform(struct?: DataIntersightHciNodeTags | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataIntersightHciNodeTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHciNodeTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightHciNodeTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHciNodeTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHciNodeTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHciNodeTags | cdktf.IResolvable | undefined) {
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
  private _ancestorDefinitions = new DataIntersightHciNodeTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightHciNodeTagsAncestorDefinitions[] | cdktf.IResolvable) {
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
  private _definition = new DataIntersightHciNodeTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightHciNodeTagsDefinition) {
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

export class DataIntersightHciNodeTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHciNodeTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHciNodeTagsOutputReference {
    return new DataIntersightHciNodeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeVersionContextInterestedMosToTerraform(struct?: DataIntersightHciNodeVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function dataIntersightHciNodeVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHciNodeVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class DataIntersightHciNodeVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHciNodeVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

export class DataIntersightHciNodeVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHciNodeVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHciNodeVersionContextInterestedMosOutputReference {
    return new DataIntersightHciNodeVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHciNodeVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeVersionContextRefMoToTerraform(struct?: DataIntersightHciNodeVersionContextRefMoOutputReference | DataIntersightHciNodeVersionContextRefMo): any {
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


export function dataIntersightHciNodeVersionContextRefMoToHclTerraform(struct?: DataIntersightHciNodeVersionContextRefMoOutputReference | DataIntersightHciNodeVersionContextRefMo): any {
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

export class DataIntersightHciNodeVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeVersionContextRefMo | undefined {
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

  public set internalValue(value: DataIntersightHciNodeVersionContextRefMo | undefined) {
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
export interface DataIntersightHciNodeVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#marked_for_deletion DataIntersightHciNode#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#nr_version DataIntersightHciNode#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#timestamp DataIntersightHciNode#timestamp}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#version_type DataIntersightHciNode#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#interested_mos DataIntersightHciNode#interested_mos}
  */
  readonly interestedMos?: DataIntersightHciNodeVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#ref_mo DataIntersightHciNode#ref_mo}
  */
  readonly refMo?: DataIntersightHciNodeVersionContextRefMo;
}

export function dataIntersightHciNodeVersionContextToTerraform(struct?: DataIntersightHciNodeVersionContextOutputReference | DataIntersightHciNodeVersionContext): any {
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
    interested_mos: cdktf.listMapper(dataIntersightHciNodeVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightHciNodeVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightHciNodeVersionContextToHclTerraform(struct?: DataIntersightHciNodeVersionContextOutputReference | DataIntersightHciNodeVersionContext): any {
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
      value: cdktf.listMapperHcl(dataIntersightHciNodeVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHciNodeVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightHciNodeVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHciNodeVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHciNodeVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHciNodeVersionContext | undefined {
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

  public set internalValue(value: DataIntersightHciNodeVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightHciNodeVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightHciNodeVersionContextInterestedMos[] | cdktf.IResolvable) {
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
  private _refMo = new DataIntersightHciNodeVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightHciNodeVersionContextRefMo) {
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
export interface DataIntersightHciNodeVms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#additional_properties DataIntersightHciNode#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#class_id DataIntersightHciNode#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#moid DataIntersightHciNode#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#object_type DataIntersightHciNode#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#selector DataIntersightHciNode#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHciNodeVmsToTerraform(struct?: DataIntersightHciNodeVms | cdktf.IResolvable): any {
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


export function dataIntersightHciNodeVmsToHclTerraform(struct?: DataIntersightHciNodeVms | cdktf.IResolvable): any {
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

export class DataIntersightHciNodeVmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHciNodeVms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightHciNodeVms | cdktf.IResolvable | undefined) {
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

export class DataIntersightHciNodeVmsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHciNodeVms[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHciNodeVmsOutputReference {
    return new DataIntersightHciNodeVmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node intersight_hci_node}
*/
export class DataIntersightHciNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_hci_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightHciNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightHciNode to import
  * @param importFromId The id of the existing DataIntersightHciNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightHciNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_hci_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/data-sources/hci_node intersight_hci_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightHciNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightHciNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_hci_node',
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
    this._blockModel = config.blockModel;
    this._blockSerial = config.blockSerial;
    this._bootTimeUsecs = config.bootTimeUsecs;
    this._classId = config.classId;
    this._clusterExtId = config.clusterExtId;
    this._clusterName = config.clusterName;
    this._controllerVmId = config.controllerVmId;
    this._controllerVmMaintanenceMode = config.controllerVmMaintanenceMode;
    this._controllerVmNatPort = config.controllerVmNatPort;
    this._controllerVmServerUuid = config.controllerVmServerUuid;
    this._cpuCapacityHz = config.cpuCapacityHz;
    this._cpuFrequencyHz = config.cpuFrequencyHz;
    this._cpuModel = config.cpuModel;
    this._cpuUsageHz = config.cpuUsageHz;
    this._createTime = config.createTime;
    this._defaultVhdContainerUuid = config.defaultVhdContainerUuid;
    this._defaultVhdLocation = config.defaultVhdLocation;
    this._defaultVmContainerUuid = config.defaultVmContainerUuid;
    this._defaultVmLocation = config.defaultVmLocation;
    this._diskCount = config.diskCount;
    this._domainGroupMoid = config.domainGroupMoid;
    this._failoverClusterFqdn = config.failoverClusterFqdn;
    this._failoverClusterNodeStatus = config.failoverClusterNodeStatus;
    this._gpuCount = config.gpuCount;
    this._gpuDriverVersion = config.gpuDriverVersion;
    this._hasCsr = config.hasCsr;
    this._hostName = config.hostName;
    this._hostType = config.hostType;
    this._hypervisorAcropolisConnectionState = config.hypervisorAcropolisConnectionState;
    this._hypervisorNumberOfVms = config.hypervisorNumberOfVms;
    this._hypervisorState = config.hypervisorState;
    this._hypervisorType = config.hypervisorType;
    this._hypervisorUserName = config.hypervisorUserName;
    this._hypervisorVersion = config.hypervisorVersion;
    this._id = config.id;
    this._ipmiUsername = config.ipmiUsername;
    this._isDegraded = config.isDegraded;
    this._isHardwareVirtualized = config.isHardwareVirtualized;
    this._isSecureBooted = config.isSecureBooted;
    this._maintenanceState = config.maintenanceState;
    this._memoryCapacityBytes = config.memoryCapacityBytes;
    this._memorySizeBytes = config.memorySizeBytes;
    this._memoryUsageBytes = config.memoryUsageBytes;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._nodeExtId = config.nodeExtId;
    this._nodeSerial = config.nodeSerial;
    this._nodeStatus = config.nodeStatus;
    this._numberOfCpuCores = config.numberOfCpuCores;
    this._numberOfCpuSockets = config.numberOfCpuSockets;
    this._numberOfCpuThreads = config.numberOfCpuThreads;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._rebootPending = config.rebootPending;
    this._sharedScope = config.sharedScope;
    this._storageCapacityBytes = config.storageCapacityBytes;
    this._storageUsageBytes = config.storageUsageBytes;
    this._ancestors.internalValue = config.ancestors;
    this._cluster.internalValue = config.cluster;
    this._controllerVmBackplaneAddress.internalValue = config.controllerVmBackplaneAddress;
    this._controllerVmExternalAddress.internalValue = config.controllerVmExternalAddress;
    this._controllerVmNatIp.internalValue = config.controllerVmNatIp;
    this._controllerVmRdmaBackplaneAddress.internalValue = config.controllerVmRdmaBackplaneAddress;
    this._disks.internalValue = config.disks;
    this._gpus.internalValue = config.gpus;
    this._hypervisorExternalAddress.internalValue = config.hypervisorExternalAddress;
    this._ipmiIp.internalValue = config.ipmiIp;
    this._keyManagementDeviceToCertStatus.internalValue = config.keyManagementDeviceToCertStatus;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._physicalServer.internalValue = config.physicalServer;
    this._registeredDevice.internalValue = config.registeredDevice;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
    this._vms.internalValue = config.vms;
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

  // block_model - computed: false, optional: true, required: false
  private _blockModel?: string; 
  public get blockModel() {
    return this.getStringAttribute('block_model');
  }
  public set blockModel(value: string) {
    this._blockModel = value;
  }
  public resetBlockModel() {
    this._blockModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockModelInput() {
    return this._blockModel;
  }

  // block_serial - computed: false, optional: true, required: false
  private _blockSerial?: string; 
  public get blockSerial() {
    return this.getStringAttribute('block_serial');
  }
  public set blockSerial(value: string) {
    this._blockSerial = value;
  }
  public resetBlockSerial() {
    this._blockSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSerialInput() {
    return this._blockSerial;
  }

  // boot_time_usecs - computed: false, optional: true, required: false
  private _bootTimeUsecs?: number; 
  public get bootTimeUsecs() {
    return this.getNumberAttribute('boot_time_usecs');
  }
  public set bootTimeUsecs(value: number) {
    this._bootTimeUsecs = value;
  }
  public resetBootTimeUsecs() {
    this._bootTimeUsecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootTimeUsecsInput() {
    return this._bootTimeUsecs;
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

  // cluster_ext_id - computed: false, optional: true, required: false
  private _clusterExtId?: string; 
  public get clusterExtId() {
    return this.getStringAttribute('cluster_ext_id');
  }
  public set clusterExtId(value: string) {
    this._clusterExtId = value;
  }
  public resetClusterExtId() {
    this._clusterExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterExtIdInput() {
    return this._clusterExtId;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // controller_vm_id - computed: false, optional: true, required: false
  private _controllerVmId?: number; 
  public get controllerVmId() {
    return this.getNumberAttribute('controller_vm_id');
  }
  public set controllerVmId(value: number) {
    this._controllerVmId = value;
  }
  public resetControllerVmId() {
    this._controllerVmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVmIdInput() {
    return this._controllerVmId;
  }

  // controller_vm_maintanence_mode - computed: false, optional: true, required: false
  private _controllerVmMaintanenceMode?: boolean | cdktf.IResolvable; 
  public get controllerVmMaintanenceMode() {
    return this.getBooleanAttribute('controller_vm_maintanence_mode');
  }
  public set controllerVmMaintanenceMode(value: boolean | cdktf.IResolvable) {
    this._controllerVmMaintanenceMode = value;
  }
  public resetControllerVmMaintanenceMode() {
    this._controllerVmMaintanenceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVmMaintanenceModeInput() {
    return this._controllerVmMaintanenceMode;
  }

  // controller_vm_nat_port - computed: false, optional: true, required: false
  private _controllerVmNatPort?: number; 
  public get controllerVmNatPort() {
    return this.getNumberAttribute('controller_vm_nat_port');
  }
  public set controllerVmNatPort(value: number) {
    this._controllerVmNatPort = value;
  }
  public resetControllerVmNatPort() {
    this._controllerVmNatPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVmNatPortInput() {
    return this._controllerVmNatPort;
  }

  // controller_vm_server_uuid - computed: false, optional: true, required: false
  private _controllerVmServerUuid?: string; 
  public get controllerVmServerUuid() {
    return this.getStringAttribute('controller_vm_server_uuid');
  }
  public set controllerVmServerUuid(value: string) {
    this._controllerVmServerUuid = value;
  }
  public resetControllerVmServerUuid() {
    this._controllerVmServerUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVmServerUuidInput() {
    return this._controllerVmServerUuid;
  }

  // cpu_capacity_hz - computed: false, optional: true, required: false
  private _cpuCapacityHz?: number; 
  public get cpuCapacityHz() {
    return this.getNumberAttribute('cpu_capacity_hz');
  }
  public set cpuCapacityHz(value: number) {
    this._cpuCapacityHz = value;
  }
  public resetCpuCapacityHz() {
    this._cpuCapacityHz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCapacityHzInput() {
    return this._cpuCapacityHz;
  }

  // cpu_frequency_hz - computed: false, optional: true, required: false
  private _cpuFrequencyHz?: number; 
  public get cpuFrequencyHz() {
    return this.getNumberAttribute('cpu_frequency_hz');
  }
  public set cpuFrequencyHz(value: number) {
    this._cpuFrequencyHz = value;
  }
  public resetCpuFrequencyHz() {
    this._cpuFrequencyHz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuFrequencyHzInput() {
    return this._cpuFrequencyHz;
  }

  // cpu_model - computed: false, optional: true, required: false
  private _cpuModel?: string; 
  public get cpuModel() {
    return this.getStringAttribute('cpu_model');
  }
  public set cpuModel(value: string) {
    this._cpuModel = value;
  }
  public resetCpuModel() {
    this._cpuModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuModelInput() {
    return this._cpuModel;
  }

  // cpu_usage_hz - computed: false, optional: true, required: false
  private _cpuUsageHz?: number; 
  public get cpuUsageHz() {
    return this.getNumberAttribute('cpu_usage_hz');
  }
  public set cpuUsageHz(value: number) {
    this._cpuUsageHz = value;
  }
  public resetCpuUsageHz() {
    this._cpuUsageHz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUsageHzInput() {
    return this._cpuUsageHz;
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

  // default_vhd_container_uuid - computed: false, optional: true, required: false
  private _defaultVhdContainerUuid?: string; 
  public get defaultVhdContainerUuid() {
    return this.getStringAttribute('default_vhd_container_uuid');
  }
  public set defaultVhdContainerUuid(value: string) {
    this._defaultVhdContainerUuid = value;
  }
  public resetDefaultVhdContainerUuid() {
    this._defaultVhdContainerUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVhdContainerUuidInput() {
    return this._defaultVhdContainerUuid;
  }

  // default_vhd_location - computed: false, optional: true, required: false
  private _defaultVhdLocation?: string; 
  public get defaultVhdLocation() {
    return this.getStringAttribute('default_vhd_location');
  }
  public set defaultVhdLocation(value: string) {
    this._defaultVhdLocation = value;
  }
  public resetDefaultVhdLocation() {
    this._defaultVhdLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVhdLocationInput() {
    return this._defaultVhdLocation;
  }

  // default_vm_container_uuid - computed: false, optional: true, required: false
  private _defaultVmContainerUuid?: string; 
  public get defaultVmContainerUuid() {
    return this.getStringAttribute('default_vm_container_uuid');
  }
  public set defaultVmContainerUuid(value: string) {
    this._defaultVmContainerUuid = value;
  }
  public resetDefaultVmContainerUuid() {
    this._defaultVmContainerUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVmContainerUuidInput() {
    return this._defaultVmContainerUuid;
  }

  // default_vm_location - computed: false, optional: true, required: false
  private _defaultVmLocation?: string; 
  public get defaultVmLocation() {
    return this.getStringAttribute('default_vm_location');
  }
  public set defaultVmLocation(value: string) {
    this._defaultVmLocation = value;
  }
  public resetDefaultVmLocation() {
    this._defaultVmLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVmLocationInput() {
    return this._defaultVmLocation;
  }

  // disk_count - computed: false, optional: true, required: false
  private _diskCount?: number; 
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }
  public set diskCount(value: number) {
    this._diskCount = value;
  }
  public resetDiskCount() {
    this._diskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCountInput() {
    return this._diskCount;
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

  // failover_cluster_fqdn - computed: false, optional: true, required: false
  private _failoverClusterFqdn?: string; 
  public get failoverClusterFqdn() {
    return this.getStringAttribute('failover_cluster_fqdn');
  }
  public set failoverClusterFqdn(value: string) {
    this._failoverClusterFqdn = value;
  }
  public resetFailoverClusterFqdn() {
    this._failoverClusterFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverClusterFqdnInput() {
    return this._failoverClusterFqdn;
  }

  // failover_cluster_node_status - computed: false, optional: true, required: false
  private _failoverClusterNodeStatus?: string; 
  public get failoverClusterNodeStatus() {
    return this.getStringAttribute('failover_cluster_node_status');
  }
  public set failoverClusterNodeStatus(value: string) {
    this._failoverClusterNodeStatus = value;
  }
  public resetFailoverClusterNodeStatus() {
    this._failoverClusterNodeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverClusterNodeStatusInput() {
    return this._failoverClusterNodeStatus;
  }

  // gpu_count - computed: false, optional: true, required: false
  private _gpuCount?: number; 
  public get gpuCount() {
    return this.getNumberAttribute('gpu_count');
  }
  public set gpuCount(value: number) {
    this._gpuCount = value;
  }
  public resetGpuCount() {
    this._gpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuCountInput() {
    return this._gpuCount;
  }

  // gpu_driver_version - computed: false, optional: true, required: false
  private _gpuDriverVersion?: string; 
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
  public set gpuDriverVersion(value: string) {
    this._gpuDriverVersion = value;
  }
  public resetGpuDriverVersion() {
    this._gpuDriverVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverVersionInput() {
    return this._gpuDriverVersion;
  }

  // has_csr - computed: false, optional: true, required: false
  private _hasCsr?: boolean | cdktf.IResolvable; 
  public get hasCsr() {
    return this.getBooleanAttribute('has_csr');
  }
  public set hasCsr(value: boolean | cdktf.IResolvable) {
    this._hasCsr = value;
  }
  public resetHasCsr() {
    this._hasCsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasCsrInput() {
    return this._hasCsr;
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // host_type - computed: false, optional: true, required: false
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  public resetHostType() {
    this._hostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
  }

  // hypervisor_acropolis_connection_state - computed: false, optional: true, required: false
  private _hypervisorAcropolisConnectionState?: string; 
  public get hypervisorAcropolisConnectionState() {
    return this.getStringAttribute('hypervisor_acropolis_connection_state');
  }
  public set hypervisorAcropolisConnectionState(value: string) {
    this._hypervisorAcropolisConnectionState = value;
  }
  public resetHypervisorAcropolisConnectionState() {
    this._hypervisorAcropolisConnectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorAcropolisConnectionStateInput() {
    return this._hypervisorAcropolisConnectionState;
  }

  // hypervisor_number_of_vms - computed: false, optional: true, required: false
  private _hypervisorNumberOfVms?: number; 
  public get hypervisorNumberOfVms() {
    return this.getNumberAttribute('hypervisor_number_of_vms');
  }
  public set hypervisorNumberOfVms(value: number) {
    this._hypervisorNumberOfVms = value;
  }
  public resetHypervisorNumberOfVms() {
    this._hypervisorNumberOfVms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorNumberOfVmsInput() {
    return this._hypervisorNumberOfVms;
  }

  // hypervisor_state - computed: false, optional: true, required: false
  private _hypervisorState?: string; 
  public get hypervisorState() {
    return this.getStringAttribute('hypervisor_state');
  }
  public set hypervisorState(value: string) {
    this._hypervisorState = value;
  }
  public resetHypervisorState() {
    this._hypervisorState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorStateInput() {
    return this._hypervisorState;
  }

  // hypervisor_type - computed: false, optional: true, required: false
  private _hypervisorType?: string; 
  public get hypervisorType() {
    return this.getStringAttribute('hypervisor_type');
  }
  public set hypervisorType(value: string) {
    this._hypervisorType = value;
  }
  public resetHypervisorType() {
    this._hypervisorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeInput() {
    return this._hypervisorType;
  }

  // hypervisor_user_name - computed: false, optional: true, required: false
  private _hypervisorUserName?: string; 
  public get hypervisorUserName() {
    return this.getStringAttribute('hypervisor_user_name');
  }
  public set hypervisorUserName(value: string) {
    this._hypervisorUserName = value;
  }
  public resetHypervisorUserName() {
    this._hypervisorUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorUserNameInput() {
    return this._hypervisorUserName;
  }

  // hypervisor_version - computed: false, optional: true, required: false
  private _hypervisorVersion?: string; 
  public get hypervisorVersion() {
    return this.getStringAttribute('hypervisor_version');
  }
  public set hypervisorVersion(value: string) {
    this._hypervisorVersion = value;
  }
  public resetHypervisorVersion() {
    this._hypervisorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorVersionInput() {
    return this._hypervisorVersion;
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

  // ipmi_username - computed: false, optional: true, required: false
  private _ipmiUsername?: string; 
  public get ipmiUsername() {
    return this.getStringAttribute('ipmi_username');
  }
  public set ipmiUsername(value: string) {
    this._ipmiUsername = value;
  }
  public resetIpmiUsername() {
    this._ipmiUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiUsernameInput() {
    return this._ipmiUsername;
  }

  // is_degraded - computed: false, optional: true, required: false
  private _isDegraded?: boolean | cdktf.IResolvable; 
  public get isDegraded() {
    return this.getBooleanAttribute('is_degraded');
  }
  public set isDegraded(value: boolean | cdktf.IResolvable) {
    this._isDegraded = value;
  }
  public resetIsDegraded() {
    this._isDegraded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDegradedInput() {
    return this._isDegraded;
  }

  // is_hardware_virtualized - computed: false, optional: true, required: false
  private _isHardwareVirtualized?: boolean | cdktf.IResolvable; 
  public get isHardwareVirtualized() {
    return this.getBooleanAttribute('is_hardware_virtualized');
  }
  public set isHardwareVirtualized(value: boolean | cdktf.IResolvable) {
    this._isHardwareVirtualized = value;
  }
  public resetIsHardwareVirtualized() {
    this._isHardwareVirtualized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHardwareVirtualizedInput() {
    return this._isHardwareVirtualized;
  }

  // is_secure_booted - computed: false, optional: true, required: false
  private _isSecureBooted?: boolean | cdktf.IResolvable; 
  public get isSecureBooted() {
    return this.getBooleanAttribute('is_secure_booted');
  }
  public set isSecureBooted(value: boolean | cdktf.IResolvable) {
    this._isSecureBooted = value;
  }
  public resetIsSecureBooted() {
    this._isSecureBooted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureBootedInput() {
    return this._isSecureBooted;
  }

  // maintenance_state - computed: false, optional: true, required: false
  private _maintenanceState?: string; 
  public get maintenanceState() {
    return this.getStringAttribute('maintenance_state');
  }
  public set maintenanceState(value: string) {
    this._maintenanceState = value;
  }
  public resetMaintenanceState() {
    this._maintenanceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStateInput() {
    return this._maintenanceState;
  }

  // memory_capacity_bytes - computed: false, optional: true, required: false
  private _memoryCapacityBytes?: number; 
  public get memoryCapacityBytes() {
    return this.getNumberAttribute('memory_capacity_bytes');
  }
  public set memoryCapacityBytes(value: number) {
    this._memoryCapacityBytes = value;
  }
  public resetMemoryCapacityBytes() {
    this._memoryCapacityBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryCapacityBytesInput() {
    return this._memoryCapacityBytes;
  }

  // memory_size_bytes - computed: false, optional: true, required: false
  private _memorySizeBytes?: number; 
  public get memorySizeBytes() {
    return this.getNumberAttribute('memory_size_bytes');
  }
  public set memorySizeBytes(value: number) {
    this._memorySizeBytes = value;
  }
  public resetMemorySizeBytes() {
    this._memorySizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeBytesInput() {
    return this._memorySizeBytes;
  }

  // memory_usage_bytes - computed: false, optional: true, required: false
  private _memoryUsageBytes?: number; 
  public get memoryUsageBytes() {
    return this.getNumberAttribute('memory_usage_bytes');
  }
  public set memoryUsageBytes(value: number) {
    this._memoryUsageBytes = value;
  }
  public resetMemoryUsageBytes() {
    this._memoryUsageBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageBytesInput() {
    return this._memoryUsageBytes;
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

  // node_ext_id - computed: false, optional: true, required: false
  private _nodeExtId?: string; 
  public get nodeExtId() {
    return this.getStringAttribute('node_ext_id');
  }
  public set nodeExtId(value: string) {
    this._nodeExtId = value;
  }
  public resetNodeExtId() {
    this._nodeExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExtIdInput() {
    return this._nodeExtId;
  }

  // node_serial - computed: false, optional: true, required: false
  private _nodeSerial?: string; 
  public get nodeSerial() {
    return this.getStringAttribute('node_serial');
  }
  public set nodeSerial(value: string) {
    this._nodeSerial = value;
  }
  public resetNodeSerial() {
    this._nodeSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSerialInput() {
    return this._nodeSerial;
  }

  // node_status - computed: false, optional: true, required: false
  private _nodeStatus?: string; 
  public get nodeStatus() {
    return this.getStringAttribute('node_status');
  }
  public set nodeStatus(value: string) {
    this._nodeStatus = value;
  }
  public resetNodeStatus() {
    this._nodeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStatusInput() {
    return this._nodeStatus;
  }

  // number_of_cpu_cores - computed: false, optional: true, required: false
  private _numberOfCpuCores?: number; 
  public get numberOfCpuCores() {
    return this.getNumberAttribute('number_of_cpu_cores');
  }
  public set numberOfCpuCores(value: number) {
    this._numberOfCpuCores = value;
  }
  public resetNumberOfCpuCores() {
    this._numberOfCpuCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpuCoresInput() {
    return this._numberOfCpuCores;
  }

  // number_of_cpu_sockets - computed: false, optional: true, required: false
  private _numberOfCpuSockets?: number; 
  public get numberOfCpuSockets() {
    return this.getNumberAttribute('number_of_cpu_sockets');
  }
  public set numberOfCpuSockets(value: number) {
    this._numberOfCpuSockets = value;
  }
  public resetNumberOfCpuSockets() {
    this._numberOfCpuSockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpuSocketsInput() {
    return this._numberOfCpuSockets;
  }

  // number_of_cpu_threads - computed: false, optional: true, required: false
  private _numberOfCpuThreads?: number; 
  public get numberOfCpuThreads() {
    return this.getNumberAttribute('number_of_cpu_threads');
  }
  public set numberOfCpuThreads(value: number) {
    this._numberOfCpuThreads = value;
  }
  public resetNumberOfCpuThreads() {
    this._numberOfCpuThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpuThreadsInput() {
    return this._numberOfCpuThreads;
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

  // reboot_pending - computed: false, optional: true, required: false
  private _rebootPending?: boolean | cdktf.IResolvable; 
  public get rebootPending() {
    return this.getBooleanAttribute('reboot_pending');
  }
  public set rebootPending(value: boolean | cdktf.IResolvable) {
    this._rebootPending = value;
  }
  public resetRebootPending() {
    this._rebootPending = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootPendingInput() {
    return this._rebootPending;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightHciNodeResultsList(this, "results", false);
  public get results() {
    return this._results;
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

  // storage_capacity_bytes - computed: false, optional: true, required: false
  private _storageCapacityBytes?: number; 
  public get storageCapacityBytes() {
    return this.getNumberAttribute('storage_capacity_bytes');
  }
  public set storageCapacityBytes(value: number) {
    this._storageCapacityBytes = value;
  }
  public resetStorageCapacityBytes() {
    this._storageCapacityBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityBytesInput() {
    return this._storageCapacityBytes;
  }

  // storage_usage_bytes - computed: false, optional: true, required: false
  private _storageUsageBytes?: number; 
  public get storageUsageBytes() {
    return this.getNumberAttribute('storage_usage_bytes');
  }
  public set storageUsageBytes(value: number) {
    this._storageUsageBytes = value;
  }
  public resetStorageUsageBytes() {
    this._storageUsageBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUsageBytesInput() {
    return this._storageUsageBytes;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightHciNodeAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightHciNodeAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new DataIntersightHciNodeClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataIntersightHciNodeCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // controller_vm_backplane_address - computed: false, optional: true, required: false
  private _controllerVmBackplaneAddress = new DataIntersightHciNodeControllerVmBackplaneAddressOutputReference(this, "controller_vm_backplane_address");
  public get controllerVmBackplaneAddress() {
    return this._controllerVmBackplaneAddress;
  }
  public putControllerVmBackplaneAddress(value: DataIntersightHciNodeControllerVmBackplaneAddress) {
    this._controllerVmBackplaneAddress.internalValue = value;
  }
  public resetControllerVmBackplaneAddress() {
    this._controllerVmBackplaneAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVmBackplaneAddressInput() {
    return this._controllerVmBackplaneAddress.internalValue;
  }

  // controller_vm_external_address - computed: false, optional: true, required: false
  private _controllerVmExternalAddress = new DataIntersightHciNodeControllerVmExternalAddressOutputReference(this, "controller_vm_external_address");
  public get controllerVmExternalAddress() {
    return this._controllerVmExternalAddress;
  }
  public putControllerVmExternalAddress(value: DataIntersightHciNodeControllerVmExternalAddress) {
    this._controllerVmExternalAddress.internalValue = value;
  }
  public resetControllerVmExternalAddress() {
    this._controllerVmExternalAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVmExternalAddressInput() {
    return this._controllerVmExternalAddress.internalValue;
  }

  // controller_vm_nat_ip - computed: false, optional: true, required: false
  private _controllerVmNatIp = new DataIntersightHciNodeControllerVmNatIpOutputReference(this, "controller_vm_nat_ip");
  public get controllerVmNatIp() {
    return this._controllerVmNatIp;
  }
  public putControllerVmNatIp(value: DataIntersightHciNodeControllerVmNatIp) {
    this._controllerVmNatIp.internalValue = value;
  }
  public resetControllerVmNatIp() {
    this._controllerVmNatIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVmNatIpInput() {
    return this._controllerVmNatIp.internalValue;
  }

  // controller_vm_rdma_backplane_address - computed: false, optional: true, required: false
  private _controllerVmRdmaBackplaneAddress = new DataIntersightHciNodeControllerVmRdmaBackplaneAddressOutputReference(this, "controller_vm_rdma_backplane_address");
  public get controllerVmRdmaBackplaneAddress() {
    return this._controllerVmRdmaBackplaneAddress;
  }
  public putControllerVmRdmaBackplaneAddress(value: DataIntersightHciNodeControllerVmRdmaBackplaneAddress) {
    this._controllerVmRdmaBackplaneAddress.internalValue = value;
  }
  public resetControllerVmRdmaBackplaneAddress() {
    this._controllerVmRdmaBackplaneAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVmRdmaBackplaneAddressInput() {
    return this._controllerVmRdmaBackplaneAddress.internalValue;
  }

  // disks - computed: false, optional: true, required: false
  private _disks = new DataIntersightHciNodeDisksList(this, "disks", false);
  public get disks() {
    return this._disks;
  }
  public putDisks(value: DataIntersightHciNodeDisks[] | cdktf.IResolvable) {
    this._disks.internalValue = value;
  }
  public resetDisks() {
    this._disks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks.internalValue;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus = new DataIntersightHciNodeGpusList(this, "gpus", false);
  public get gpus() {
    return this._gpus;
  }
  public putGpus(value: DataIntersightHciNodeGpus[] | cdktf.IResolvable) {
    this._gpus.internalValue = value;
  }
  public resetGpus() {
    this._gpus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus.internalValue;
  }

  // hypervisor_external_address - computed: false, optional: true, required: false
  private _hypervisorExternalAddress = new DataIntersightHciNodeHypervisorExternalAddressOutputReference(this, "hypervisor_external_address");
  public get hypervisorExternalAddress() {
    return this._hypervisorExternalAddress;
  }
  public putHypervisorExternalAddress(value: DataIntersightHciNodeHypervisorExternalAddress) {
    this._hypervisorExternalAddress.internalValue = value;
  }
  public resetHypervisorExternalAddress() {
    this._hypervisorExternalAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorExternalAddressInput() {
    return this._hypervisorExternalAddress.internalValue;
  }

  // ipmi_ip - computed: false, optional: true, required: false
  private _ipmiIp = new DataIntersightHciNodeIpmiIpOutputReference(this, "ipmi_ip");
  public get ipmiIp() {
    return this._ipmiIp;
  }
  public putIpmiIp(value: DataIntersightHciNodeIpmiIp) {
    this._ipmiIp.internalValue = value;
  }
  public resetIpmiIp() {
    this._ipmiIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmiIpInput() {
    return this._ipmiIp.internalValue;
  }

  // key_management_device_to_cert_status - computed: false, optional: true, required: false
  private _keyManagementDeviceToCertStatus = new DataIntersightHciNodeKeyManagementDeviceToCertStatusList(this, "key_management_device_to_cert_status", false);
  public get keyManagementDeviceToCertStatus() {
    return this._keyManagementDeviceToCertStatus;
  }
  public putKeyManagementDeviceToCertStatus(value: DataIntersightHciNodeKeyManagementDeviceToCertStatus[] | cdktf.IResolvable) {
    this._keyManagementDeviceToCertStatus.internalValue = value;
  }
  public resetKeyManagementDeviceToCertStatus() {
    this._keyManagementDeviceToCertStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagementDeviceToCertStatusInput() {
    return this._keyManagementDeviceToCertStatus.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightHciNodeParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightHciNodeParent) {
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
  private _permissionResources = new DataIntersightHciNodePermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightHciNodePermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // physical_server - computed: false, optional: true, required: false
  private _physicalServer = new DataIntersightHciNodePhysicalServerOutputReference(this, "physical_server");
  public get physicalServer() {
    return this._physicalServer;
  }
  public putPhysicalServer(value: DataIntersightHciNodePhysicalServer) {
    this._physicalServer.internalValue = value;
  }
  public resetPhysicalServer() {
    this._physicalServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalServerInput() {
    return this._physicalServer.internalValue;
  }

  // registered_device - computed: false, optional: true, required: false
  private _registeredDevice = new DataIntersightHciNodeRegisteredDeviceOutputReference(this, "registered_device");
  public get registeredDevice() {
    return this._registeredDevice;
  }
  public putRegisteredDevice(value: DataIntersightHciNodeRegisteredDevice) {
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
  private _tags = new DataIntersightHciNodeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightHciNodeTags[] | cdktf.IResolvable) {
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
  private _versionContext = new DataIntersightHciNodeVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightHciNodeVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // vms - computed: false, optional: true, required: false
  private _vms = new DataIntersightHciNodeVmsList(this, "vms", false);
  public get vms() {
    return this._vms;
  }
  public putVms(value: DataIntersightHciNodeVms[] | cdktf.IResolvable) {
    this._vms.internalValue = value;
  }
  public resetVms() {
    this._vms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmsInput() {
    return this._vms.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      block_model: cdktf.stringToTerraform(this._blockModel),
      block_serial: cdktf.stringToTerraform(this._blockSerial),
      boot_time_usecs: cdktf.numberToTerraform(this._bootTimeUsecs),
      class_id: cdktf.stringToTerraform(this._classId),
      cluster_ext_id: cdktf.stringToTerraform(this._clusterExtId),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      controller_vm_id: cdktf.numberToTerraform(this._controllerVmId),
      controller_vm_maintanence_mode: cdktf.booleanToTerraform(this._controllerVmMaintanenceMode),
      controller_vm_nat_port: cdktf.numberToTerraform(this._controllerVmNatPort),
      controller_vm_server_uuid: cdktf.stringToTerraform(this._controllerVmServerUuid),
      cpu_capacity_hz: cdktf.numberToTerraform(this._cpuCapacityHz),
      cpu_frequency_hz: cdktf.numberToTerraform(this._cpuFrequencyHz),
      cpu_model: cdktf.stringToTerraform(this._cpuModel),
      cpu_usage_hz: cdktf.numberToTerraform(this._cpuUsageHz),
      create_time: cdktf.stringToTerraform(this._createTime),
      default_vhd_container_uuid: cdktf.stringToTerraform(this._defaultVhdContainerUuid),
      default_vhd_location: cdktf.stringToTerraform(this._defaultVhdLocation),
      default_vm_container_uuid: cdktf.stringToTerraform(this._defaultVmContainerUuid),
      default_vm_location: cdktf.stringToTerraform(this._defaultVmLocation),
      disk_count: cdktf.numberToTerraform(this._diskCount),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      failover_cluster_fqdn: cdktf.stringToTerraform(this._failoverClusterFqdn),
      failover_cluster_node_status: cdktf.stringToTerraform(this._failoverClusterNodeStatus),
      gpu_count: cdktf.numberToTerraform(this._gpuCount),
      gpu_driver_version: cdktf.stringToTerraform(this._gpuDriverVersion),
      has_csr: cdktf.booleanToTerraform(this._hasCsr),
      host_name: cdktf.stringToTerraform(this._hostName),
      host_type: cdktf.stringToTerraform(this._hostType),
      hypervisor_acropolis_connection_state: cdktf.stringToTerraform(this._hypervisorAcropolisConnectionState),
      hypervisor_number_of_vms: cdktf.numberToTerraform(this._hypervisorNumberOfVms),
      hypervisor_state: cdktf.stringToTerraform(this._hypervisorState),
      hypervisor_type: cdktf.stringToTerraform(this._hypervisorType),
      hypervisor_user_name: cdktf.stringToTerraform(this._hypervisorUserName),
      hypervisor_version: cdktf.stringToTerraform(this._hypervisorVersion),
      id: cdktf.stringToTerraform(this._id),
      ipmi_username: cdktf.stringToTerraform(this._ipmiUsername),
      is_degraded: cdktf.booleanToTerraform(this._isDegraded),
      is_hardware_virtualized: cdktf.booleanToTerraform(this._isHardwareVirtualized),
      is_secure_booted: cdktf.booleanToTerraform(this._isSecureBooted),
      maintenance_state: cdktf.stringToTerraform(this._maintenanceState),
      memory_capacity_bytes: cdktf.numberToTerraform(this._memoryCapacityBytes),
      memory_size_bytes: cdktf.numberToTerraform(this._memorySizeBytes),
      memory_usage_bytes: cdktf.numberToTerraform(this._memoryUsageBytes),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      node_ext_id: cdktf.stringToTerraform(this._nodeExtId),
      node_serial: cdktf.stringToTerraform(this._nodeSerial),
      node_status: cdktf.stringToTerraform(this._nodeStatus),
      number_of_cpu_cores: cdktf.numberToTerraform(this._numberOfCpuCores),
      number_of_cpu_sockets: cdktf.numberToTerraform(this._numberOfCpuSockets),
      number_of_cpu_threads: cdktf.numberToTerraform(this._numberOfCpuThreads),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      reboot_pending: cdktf.booleanToTerraform(this._rebootPending),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      storage_capacity_bytes: cdktf.numberToTerraform(this._storageCapacityBytes),
      storage_usage_bytes: cdktf.numberToTerraform(this._storageUsageBytes),
      ancestors: cdktf.listMapper(dataIntersightHciNodeAncestorsToTerraform, true)(this._ancestors.internalValue),
      cluster: dataIntersightHciNodeClusterToTerraform(this._cluster.internalValue),
      controller_vm_backplane_address: dataIntersightHciNodeControllerVmBackplaneAddressToTerraform(this._controllerVmBackplaneAddress.internalValue),
      controller_vm_external_address: dataIntersightHciNodeControllerVmExternalAddressToTerraform(this._controllerVmExternalAddress.internalValue),
      controller_vm_nat_ip: dataIntersightHciNodeControllerVmNatIpToTerraform(this._controllerVmNatIp.internalValue),
      controller_vm_rdma_backplane_address: dataIntersightHciNodeControllerVmRdmaBackplaneAddressToTerraform(this._controllerVmRdmaBackplaneAddress.internalValue),
      disks: cdktf.listMapper(dataIntersightHciNodeDisksToTerraform, true)(this._disks.internalValue),
      gpus: cdktf.listMapper(dataIntersightHciNodeGpusToTerraform, true)(this._gpus.internalValue),
      hypervisor_external_address: dataIntersightHciNodeHypervisorExternalAddressToTerraform(this._hypervisorExternalAddress.internalValue),
      ipmi_ip: dataIntersightHciNodeIpmiIpToTerraform(this._ipmiIp.internalValue),
      key_management_device_to_cert_status: cdktf.listMapper(dataIntersightHciNodeKeyManagementDeviceToCertStatusToTerraform, true)(this._keyManagementDeviceToCertStatus.internalValue),
      parent: dataIntersightHciNodeParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightHciNodePermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      physical_server: dataIntersightHciNodePhysicalServerToTerraform(this._physicalServer.internalValue),
      registered_device: dataIntersightHciNodeRegisteredDeviceToTerraform(this._registeredDevice.internalValue),
      tags: cdktf.listMapper(dataIntersightHciNodeTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightHciNodeVersionContextToTerraform(this._versionContext.internalValue),
      vms: cdktf.listMapper(dataIntersightHciNodeVmsToTerraform, true)(this._vms.internalValue),
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
      block_model: {
        value: cdktf.stringToHclTerraform(this._blockModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_serial: {
        value: cdktf.stringToHclTerraform(this._blockSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_time_usecs: {
        value: cdktf.numberToHclTerraform(this._bootTimeUsecs),
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
      cluster_ext_id: {
        value: cdktf.stringToHclTerraform(this._clusterExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_vm_id: {
        value: cdktf.numberToHclTerraform(this._controllerVmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      controller_vm_maintanence_mode: {
        value: cdktf.booleanToHclTerraform(this._controllerVmMaintanenceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      controller_vm_nat_port: {
        value: cdktf.numberToHclTerraform(this._controllerVmNatPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      controller_vm_server_uuid: {
        value: cdktf.stringToHclTerraform(this._controllerVmServerUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_capacity_hz: {
        value: cdktf.numberToHclTerraform(this._cpuCapacityHz),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_frequency_hz: {
        value: cdktf.numberToHclTerraform(this._cpuFrequencyHz),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_model: {
        value: cdktf.stringToHclTerraform(this._cpuModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_usage_hz: {
        value: cdktf.numberToHclTerraform(this._cpuUsageHz),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vhd_container_uuid: {
        value: cdktf.stringToHclTerraform(this._defaultVhdContainerUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vhd_location: {
        value: cdktf.stringToHclTerraform(this._defaultVhdLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vm_container_uuid: {
        value: cdktf.stringToHclTerraform(this._defaultVmContainerUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vm_location: {
        value: cdktf.stringToHclTerraform(this._defaultVmLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_count: {
        value: cdktf.numberToHclTerraform(this._diskCount),
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
      failover_cluster_fqdn: {
        value: cdktf.stringToHclTerraform(this._failoverClusterFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_cluster_node_status: {
        value: cdktf.stringToHclTerraform(this._failoverClusterNodeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gpu_count: {
        value: cdktf.numberToHclTerraform(this._gpuCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gpu_driver_version: {
        value: cdktf.stringToHclTerraform(this._gpuDriverVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_csr: {
        value: cdktf.booleanToHclTerraform(this._hasCsr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_type: {
        value: cdktf.stringToHclTerraform(this._hostType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_acropolis_connection_state: {
        value: cdktf.stringToHclTerraform(this._hypervisorAcropolisConnectionState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_number_of_vms: {
        value: cdktf.numberToHclTerraform(this._hypervisorNumberOfVms),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hypervisor_state: {
        value: cdktf.stringToHclTerraform(this._hypervisorState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_type: {
        value: cdktf.stringToHclTerraform(this._hypervisorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_user_name: {
        value: cdktf.stringToHclTerraform(this._hypervisorUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_version: {
        value: cdktf.stringToHclTerraform(this._hypervisorVersion),
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
      ipmi_username: {
        value: cdktf.stringToHclTerraform(this._ipmiUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_degraded: {
        value: cdktf.booleanToHclTerraform(this._isDegraded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_hardware_virtualized: {
        value: cdktf.booleanToHclTerraform(this._isHardwareVirtualized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_secure_booted: {
        value: cdktf.booleanToHclTerraform(this._isSecureBooted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintenance_state: {
        value: cdktf.stringToHclTerraform(this._maintenanceState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_capacity_bytes: {
        value: cdktf.numberToHclTerraform(this._memoryCapacityBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_size_bytes: {
        value: cdktf.numberToHclTerraform(this._memorySizeBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_usage_bytes: {
        value: cdktf.numberToHclTerraform(this._memoryUsageBytes),
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
      node_ext_id: {
        value: cdktf.stringToHclTerraform(this._nodeExtId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_serial: {
        value: cdktf.stringToHclTerraform(this._nodeSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_status: {
        value: cdktf.stringToHclTerraform(this._nodeStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_cpu_cores: {
        value: cdktf.numberToHclTerraform(this._numberOfCpuCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_cpu_sockets: {
        value: cdktf.numberToHclTerraform(this._numberOfCpuSockets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_cpu_threads: {
        value: cdktf.numberToHclTerraform(this._numberOfCpuThreads),
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
      reboot_pending: {
        value: cdktf.booleanToHclTerraform(this._rebootPending),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_capacity_bytes: {
        value: cdktf.numberToHclTerraform(this._storageCapacityBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_usage_bytes: {
        value: cdktf.numberToHclTerraform(this._storageUsageBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightHciNodeAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeAncestorsList",
      },
      cluster: {
        value: dataIntersightHciNodeClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeClusterList",
      },
      controller_vm_backplane_address: {
        value: dataIntersightHciNodeControllerVmBackplaneAddressToHclTerraform(this._controllerVmBackplaneAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeControllerVmBackplaneAddressList",
      },
      controller_vm_external_address: {
        value: dataIntersightHciNodeControllerVmExternalAddressToHclTerraform(this._controllerVmExternalAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeControllerVmExternalAddressList",
      },
      controller_vm_nat_ip: {
        value: dataIntersightHciNodeControllerVmNatIpToHclTerraform(this._controllerVmNatIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeControllerVmNatIpList",
      },
      controller_vm_rdma_backplane_address: {
        value: dataIntersightHciNodeControllerVmRdmaBackplaneAddressToHclTerraform(this._controllerVmRdmaBackplaneAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeControllerVmRdmaBackplaneAddressList",
      },
      disks: {
        value: cdktf.listMapperHcl(dataIntersightHciNodeDisksToHclTerraform, true)(this._disks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeDisksList",
      },
      gpus: {
        value: cdktf.listMapperHcl(dataIntersightHciNodeGpusToHclTerraform, true)(this._gpus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeGpusList",
      },
      hypervisor_external_address: {
        value: dataIntersightHciNodeHypervisorExternalAddressToHclTerraform(this._hypervisorExternalAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeHypervisorExternalAddressList",
      },
      ipmi_ip: {
        value: dataIntersightHciNodeIpmiIpToHclTerraform(this._ipmiIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeIpmiIpList",
      },
      key_management_device_to_cert_status: {
        value: cdktf.listMapperHcl(dataIntersightHciNodeKeyManagementDeviceToCertStatusToHclTerraform, true)(this._keyManagementDeviceToCertStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeKeyManagementDeviceToCertStatusList",
      },
      parent: {
        value: dataIntersightHciNodeParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightHciNodePermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodePermissionResourcesList",
      },
      physical_server: {
        value: dataIntersightHciNodePhysicalServerToHclTerraform(this._physicalServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodePhysicalServerList",
      },
      registered_device: {
        value: dataIntersightHciNodeRegisteredDeviceToHclTerraform(this._registeredDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeRegisteredDeviceList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightHciNodeTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeTagsList",
      },
      version_context: {
        value: dataIntersightHciNodeVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeVersionContextList",
      },
      vms: {
        value: cdktf.listMapperHcl(dataIntersightHciNodeVmsToHclTerraform, true)(this._vms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHciNodeVmsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
