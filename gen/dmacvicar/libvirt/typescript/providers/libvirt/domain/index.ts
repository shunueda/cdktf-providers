// generated from terraform resource schema

import { DomainBlockIoTune, 
domainBlockIoTuneToTerraform, 
domainBlockIoTuneToHclTerraform, 
DomainBlockIoTuneOutputReference, 
DomainClock, 
domainClockToTerraform, 
domainClockToHclTerraform, 
DomainClockOutputReference, 
DomainCpu, 
domainCpuToTerraform, 
domainCpuToHclTerraform, 
DomainCpuOutputReference, 
DomainCpuTune, 
domainCpuTuneToTerraform, 
domainCpuTuneToHclTerraform, 
DomainCpuTuneOutputReference, 
DomainCreate, 
domainCreateToTerraform, 
domainCreateToHclTerraform, 
DomainCreateOutputReference, 
DomainDefaultIoThread, 
domainDefaultIoThreadToTerraform, 
domainDefaultIoThreadToHclTerraform, 
DomainDefaultIoThreadOutputReference, 
DomainDestroy, 
domainDestroyToTerraform, 
domainDestroyToHclTerraform, 
DomainDestroyOutputReference, 
DomainDevices, 
domainDevicesToTerraform, 
domainDevicesToHclTerraform, 
DomainDevicesOutputReference, 
DomainFeatures, 
domainFeaturesToTerraform, 
domainFeaturesToHclTerraform, 
DomainFeaturesOutputReference, 
DomainIdMap, 
domainIdMapToTerraform, 
domainIdMapToHclTerraform, 
DomainIdMapOutputReference, 
DomainIoThreadIDs, 
domainIoThreadIDsToTerraform, 
domainIoThreadIDsToHclTerraform, 
DomainIoThreadIDsOutputReference, 
DomainKeyWrap, 
domainKeyWrapToTerraform, 
domainKeyWrapToHclTerraform, 
DomainKeyWrapOutputReference, 
DomainLaunchSecurity, 
domainLaunchSecurityToTerraform, 
domainLaunchSecurityToHclTerraform, 
DomainLaunchSecurityOutputReference, 
DomainMemoryBacking, 
domainMemoryBackingToTerraform, 
domainMemoryBackingToHclTerraform, 
DomainMemoryBackingOutputReference, 
DomainMemoryTune, 
domainMemoryTuneToTerraform, 
domainMemoryTuneToHclTerraform, 
DomainMemoryTuneOutputReference, 
DomainMetadata, 
domainMetadataToTerraform, 
domainMetadataToHclTerraform, 
DomainMetadataOutputReference, 
DomainNumaTune, 
domainNumaTuneToTerraform, 
domainNumaTuneToHclTerraform, 
DomainNumaTuneOutputReference, 
DomainOs, 
domainOsToTerraform, 
domainOsToHclTerraform, 
DomainOsOutputReference, 
DomainPerf, 
domainPerfToTerraform, 
domainPerfToHclTerraform, 
DomainPerfOutputReference, 
DomainPm, 
domainPmToTerraform, 
domainPmToHclTerraform, 
DomainPmOutputReference, 
DomainResource, 
domainResourceToTerraform, 
domainResourceToHclTerraform, 
DomainResourceOutputReference, 
DomainSecLabel, 
domainSecLabelToTerraform, 
domainSecLabelToHclTerraform, 
DomainSecLabelList, 
DomainSysInfo, 
domainSysInfoToTerraform, 
domainSysInfoToHclTerraform, 
DomainSysInfoList, 
DomainThrottleGroups, 
domainThrottleGroupsToTerraform, 
domainThrottleGroupsToHclTerraform, 
DomainThrottleGroupsOutputReference, 
DomainVcpus, 
domainVcpusToTerraform, 
domainVcpusToHclTerraform, 
DomainVcpusOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the domain should be started automatically when the host boots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#autostart Domain#autostart}
  */
  readonly autostart?: boolean | cdktf.IResolvable;
  /**
  * Configures block I/O cgroup tuning for the whole domain, such as global I/O weight or per-device throttling limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#block_io_tune Domain#block_io_tune}
  */
  readonly blockIoTune?: DomainBlockIoTune;
  /**
  * Specifies the host-side bootloader program to invoke instead of firmware/BIOS when starting the guest (e.g. `pygrub` for Xen or `bhyveload` for bhyve); the value is user-provided and driver-specific.
  * 
  * See: <https://libvirt.org/formatdomain.html#host-bootloader>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#bootloader Domain#bootloader}
  */
  readonly bootloader?: string;
  /**
  * Provides additional command-line arguments passed to the host bootloader defined by `bootloader`; the value is a free-form string interpreted by the bootloader.
  * 
  * See: <https://libvirt.org/formatdomain.html#host-bootloader>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#bootloader_args Domain#bootloader_args}
  */
  readonly bootloaderArgs?: string;
  /**
  * Configures the guest’s clock source and base time behavior, including offset, starting point, and timers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#clock Domain#clock}
  */
  readonly clock?: DomainClock;
  /**
  * Configures the virtual CPU model, features, cache, topology, and related behavior presented to the guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#cpu Domain#cpu}
  */
  readonly cpu?: DomainCpu;
  /**
  * Configures CPU scheduling and tuning parameters for the domain, including vCPU pinning, quotas, cache tuning, and IOThread scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#cpu_tune Domain#cpu_tune}
  */
  readonly cpuTune?: DomainCpuTune;
  /**
  * Start behavior flags passed to libvirt when running is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#create Domain#create}
  */
  readonly create?: DomainCreate;
  /**
  * Sets the amount of guest memory that is actually allocated at boot (in the specified unit), which may be less than the maximum `memory` to allow for memory hotplug.
  * 
  * See: <https://libvirt.org/formatdomain.html#memory-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#current_memory Domain#current_memory}
  */
  readonly currentMemory?: number;
  /**
  * Sets the unit of measurement for the domain's currentMemory value (for example KiB or MiB); if omitted, libvirt uses its default unit (usually KiB).
  * 
  * See: <https://libvirt.org/formatdomain.html#memory-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#current_memory_unit Domain#current_memory_unit}
  */
  readonly currentMemoryUnit?: string;
  /**
  * Configures the default IOThread settings for the domain, including optional thread pool sizing for IOThreads created implicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#default_io_thread Domain#default_io_thread}
  */
  readonly defaultIoThread?: DomainDefaultIoThread;
  /**
  * Sets a free‑form human‑readable description for the domain; content is user‑provided text without strict constraints.
  * 
  * See: <https://libvirt.org/formatdomain.html#general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#description Domain#description}
  */
  readonly description?: string;
  /**
  * Destroy behavior when Terraform removes the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#destroy Domain#destroy}
  */
  readonly destroy?: DomainDestroy;
  /**
  * Groups all device definitions attached to the domain, including disks, interfaces, audio, video, and other hardware devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#devices Domain#devices}
  */
  readonly devices?: DomainDevices;
  /**
  * Enables and configures hypervisor and CPU‑related features for the domain, such as ACPI, AIA, and other optional capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#features Domain#features}
  */
  readonly features?: DomainFeatures;
  /**
  * Sets the VM generation ID (genid) exposed to the guest, used by some operating systems to detect cloning; value must be a user-provided 128‑bit identifier in UUID-like hexadecimal format.
  * 
  * See: <https://libvirt.org/formatdomain.html#general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#gen_id Domain#gen_id}
  */
  readonly genId?: string;
  /**
  * Sets the hardware UUID reported to the guest firmware/OS, typically reflected in SMBIOS; value is user-provided and should be a standard UUID string.
  * 
  * See: <https://libvirt.org/formatdomain.html#general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#hwuuid Domain#hwuuid}
  */
  readonly hwuuid?: string;
  /**
  * Configures user and group ID mapping between host and guest for container-style virtualization; presence of this block enables explicit uid/gid mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#id_map Domain#id_map}
  */
  readonly idMap?: DomainIdMap;
  /**
  * Configures the set of IOThread IDs available to the domain, allowing explicit control over which IOThreads exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#io_thread_i_ds Domain#io_thread_i_ds}
  */
  readonly ioThreadIDs?: DomainIoThreadIDs;
  /**
  * Sets the total number of IOThreads allocated for the domain, improving block I/O scalability; the value is user‑provided (positive integer).
  * 
  * See: <https://libvirt.org/formatdomain.html#iothreads-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#io_threads Domain#io_threads}
  */
  readonly ioThreads?: number;
  /**
  * Configures whether the guest is allowed to perform s390 key-wrapping cryptographic operations and which ciphers are permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#key_wrap Domain#key_wrap}
  */
  readonly keyWrap?: DomainKeyWrap;
  /**
  * Configures hardware-backed launch or confidential-computing security for the domain (such as s390-pv, AMD SEV, or SEV-SNP), with sub-blocks selecting the specific technology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#launch_security Domain#launch_security}
  */
  readonly launchSecurity?: DomainLaunchSecurity;
  /**
  * Sets the maximum hot-pluggable memory capacity for the guest (maxMemory value), in units given by domain.maximum_memory_unit; must be greater than or equal to the initial memory size.
  * 
  * See: <https://libvirt.org/formatdomain.html#memory-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#maximum_memory Domain#maximum_memory}
  */
  readonly maximumMemory?: number;
  /**
  * Sets the number of memory slots available for hot-plugging guest memory devices, corresponding to the slots attribute of maxMemory; value is a user-provided positive integer.
  * 
  * See: <https://libvirt.org/formatdomain.html#memory-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#maximum_memory_slots Domain#maximum_memory_slots}
  */
  readonly maximumMemorySlots?: number;
  /**
  * Sets the unit for the maximum hot-pluggable memory value (for example, "KiB", "MiB", or "GiB"), corresponding to the unit attribute of maxMemory; value is user-provided but must be a libvirt-supported memory unit.
  * 
  * See: <https://libvirt.org/formatdomain.html#memory-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#maximum_memory_unit Domain#maximum_memory_unit}
  */
  readonly maximumMemoryUnit?: string;
  /**
  * Sets the maximum memory allocation for the guest at boot time; the value is user-provided and interpreted in libvirt memory units (typically KiB unless a unit is specified elsewhere).
  * 
  * See: <https://libvirt.org/formatdomain.html#memory-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#memory Domain#memory}
  */
  readonly memory?: number;
  /**
  * Configures how the guest’s RAM is backed by host memory, including huge pages, locking, sharing, access policy, allocation policy, and discard behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#memory_backing Domain#memory_backing}
  */
  readonly memoryBacking?: DomainMemoryBacking;
  /**
  * Controls whether guest memory is included in the core dump when the domain crashes, by setting the memory attribute (dumpCore) on the domain element; valid values are user-provided according to libvirt’s dumpCore policy (e.g. enabling or disabling memory dumping).
  * 
  * See: <https://libvirt.org/formatdomain.html#memory-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#memory_dump_core Domain#memory_dump_core}
  */
  readonly memoryDumpCore?: string;
  /**
  * Configures memory tuning parameters for the guest, including soft, hard, and swap limits and minimum guarantees.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#memory_tune Domain#memory_tune}
  */
  readonly memoryTune?: DomainMemoryTune;
  /**
  * Sets the unit for the domain’s main memory value, typically as a memory size unit such as KiB, MiB, or GiB; the string is user-provided and must match libvirt’s accepted memory units.
  * 
  * See: <https://libvirt.org/formatdomain.html#memory-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#memory_unit Domain#memory_unit}
  */
  readonly memoryUnit?: string;
  /**
  * Configures an arbitrary metadata block associated with the domain, typically used to store application- or tool-specific XML or other structured data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#metadata Domain#metadata}
  */
  readonly metadata?: DomainMetadata;
  /**
  * Sets the domain’s short name, which must be unique on the host and consist only of alphanumeric characters.
  * 
  * See: <https://libvirt.org/formatdomain.html#general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * Configures NUMA policy for the domain process and its memory, controlling how guest CPUs and memory are placed on host NUMA nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#numa_tune Domain#numa_tune}
  */
  readonly numaTune?: DomainNumaTune;
  /**
  * Sets the action libvirt takes when the guest crashes; valid values include "destroy", "restart", "preserve", "coredump-destroy", "coredump-restart", "rename-restart", "ignore", or "pause". Example: "coredump-restart" keeps a crash dump and then restarts the domain.
  * 
  * See: <https://libvirt.org/formatdomain.html#events-configuration>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#on_crash Domain#on_crash}
  */
  readonly onCrash?: string;
  /**
  * Sets the action libvirt takes when the guest issues a poweroff/shutdown; valid values include "destroy", "restart", "preserve", or "rename-restart". If unset, the hypervisor default is used.
  * 
  * See: <https://libvirt.org/formatdomain.html#events-configuration>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#on_poweroff Domain#on_poweroff}
  */
  readonly onPoweroff?: string;
  /**
  * Sets the action libvirt takes when the guest reboots; valid values include "destroy", "restart", "preserve", "rename-restart", "ignore", or "pause". If unset, the hypervisor default is used.
  * 
  * See: <https://libvirt.org/formatdomain.html#events-configuration>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#on_reboot Domain#on_reboot}
  */
  readonly onReboot?: string;
  /**
  * Groups configuration of how the guest operating system is booted, including firmware, BIOS, boot devices, kernel parameters, and related options. All sub-attributes are optional and user-provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#os Domain#os}
  */
  readonly os?: DomainOs;
  /**
  * Enables configuration of performance monitoring events exposed to the guest and collected by the hypervisor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#perf Domain#perf}
  */
  readonly perf?: DomainPerf;
  /**
  * Configures power management behavior advertised to the guest, such as support for suspend-to-RAM and suspend-to-disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#pm Domain#pm}
  */
  readonly pm?: DomainPm;
  /**
  * Groups resource-partitioning settings that associate the domain with hypervisor-specific resource partitions or classes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#resource Domain#resource}
  */
  readonly resource?: DomainResource;
  /**
  * Whether the domain should be started after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#running Domain#running}
  */
  readonly running?: boolean | cdktf.IResolvable;
  /**
  * Configures one security label configuration for the domain, controlling how a security driver (such as SELinux or DAC) labels and isolates the domain and its resources.
  * 
  * See: <https://libvirt.org/formatdomain.html#security-label>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#sec_label Domain#sec_label}
  */
  readonly secLabel?: DomainSecLabel[] | cdktf.IResolvable;
  /**
  * Configures system information presented to the guest (such as SMBIOS and fw_cfg data), allowing customization of what hardware/firmware details the guest sees.
  * 
  * See: <https://libvirt.org/formatdomain.html#smbios-system-information>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#sys_info Domain#sys_info}
  */
  readonly sysInfo?: DomainSysInfo[] | cdktf.IResolvable;
  /**
  * Enables configuration of one or more named disk I/O throttle groups that can be referenced by disk `throttlefilters` to apply shared I/O rate limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#throttle_groups Domain#throttle_groups}
  */
  readonly throttleGroups?: DomainThrottleGroups;
  /**
  * Sets a human‑readable title for the domain, which is user‑provided free text and may be used by management tools but has no functional effect on the guest.
  * 
  * See: <https://libvirt.org/formatdomain.html#general-metadata>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#title Domain#title}
  */
  readonly title?: string;
  /**
  * Sets the hypervisor type used to run the domain (for example "kvm", "qemu", or "xen"); this is required and must be a valid libvirt domain driver name for the host.
  * 
  * See: <https://libvirt.org/formatdomain.html#element-and-attribute-overview>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#type Domain#type}
  */
  readonly type: string;
  /**
  * Sets the maximum number of virtual CPUs configured for the guest, as a positive integer within the hypervisor’s supported range (for example 1–255).
  * 
  * See: <https://libvirt.org/formatdomain.html#cpu-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#vcpu Domain#vcpu}
  */
  readonly vcpu?: number;
  /**
  * Sets the optional CPU affinity for all vCPUs using a cpuset expression (for example "0-3,8"), corresponding to the vcpu element’s cpuset attribute.
  * 
  * See: <https://libvirt.org/formatdomain.html#cpu-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#vcpu_cpuset Domain#vcpu_cpuset}
  */
  readonly vcpuCpuset?: string;
  /**
  * Sets the number of vCPUs that are initially online at boot via the vcpu element’s current attribute, as a positive integer not exceeding domain.vcpu.
  * 
  * See: <https://libvirt.org/formatdomain.html#cpu-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#vcpu_current Domain#vcpu_current}
  */
  readonly vcpuCurrent?: number;
  /**
  * Sets the vCPU placement policy via the vcpu element’s placement attribute, typically "static" or "auto", controlling whether libvirt chooses NUMA/CPU placement automatically.
  * 
  * See: <https://libvirt.org/formatdomain.html#cpu-allocation>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#vcpu_placement Domain#vcpu_placement}
  */
  readonly vcpuPlacement?: string;
  /**
  * Enables per‑vCPU configuration; when present, it contains one or more vcpu entries that can individually control online state and pinning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#vcpus Domain#vcpus}
  */
  readonly vcpus?: DomainVcpus;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain libvirt_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "libvirt_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "libvirt_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dmacvicar/libvirt/0.9.1/docs/resources/domain libvirt_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'libvirt_domain',
      terraformGeneratorMetadata: {
        providerName: 'libvirt',
        providerVersion: '0.9.1',
        providerVersionConstraint: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autostart = config.autostart;
    this._blockIoTune.internalValue = config.blockIoTune;
    this._bootloader = config.bootloader;
    this._bootloaderArgs = config.bootloaderArgs;
    this._clock.internalValue = config.clock;
    this._cpu.internalValue = config.cpu;
    this._cpuTune.internalValue = config.cpuTune;
    this._create.internalValue = config.create;
    this._currentMemory = config.currentMemory;
    this._currentMemoryUnit = config.currentMemoryUnit;
    this._defaultIoThread.internalValue = config.defaultIoThread;
    this._description = config.description;
    this._destroy.internalValue = config.destroy;
    this._devices.internalValue = config.devices;
    this._features.internalValue = config.features;
    this._genId = config.genId;
    this._hwuuid = config.hwuuid;
    this._idMap.internalValue = config.idMap;
    this._ioThreadIDs.internalValue = config.ioThreadIDs;
    this._ioThreads = config.ioThreads;
    this._keyWrap.internalValue = config.keyWrap;
    this._launchSecurity.internalValue = config.launchSecurity;
    this._maximumMemory = config.maximumMemory;
    this._maximumMemorySlots = config.maximumMemorySlots;
    this._maximumMemoryUnit = config.maximumMemoryUnit;
    this._memory = config.memory;
    this._memoryBacking.internalValue = config.memoryBacking;
    this._memoryDumpCore = config.memoryDumpCore;
    this._memoryTune.internalValue = config.memoryTune;
    this._memoryUnit = config.memoryUnit;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._numaTune.internalValue = config.numaTune;
    this._onCrash = config.onCrash;
    this._onPoweroff = config.onPoweroff;
    this._onReboot = config.onReboot;
    this._os.internalValue = config.os;
    this._perf.internalValue = config.perf;
    this._pm.internalValue = config.pm;
    this._resource.internalValue = config.resource;
    this._running = config.running;
    this._secLabel.internalValue = config.secLabel;
    this._sysInfo.internalValue = config.sysInfo;
    this._throttleGroups.internalValue = config.throttleGroups;
    this._title = config.title;
    this._type = config.type;
    this._vcpu = config.vcpu;
    this._vcpuCpuset = config.vcpuCpuset;
    this._vcpuCurrent = config.vcpuCurrent;
    this._vcpuPlacement = config.vcpuPlacement;
    this._vcpus.internalValue = config.vcpus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autostart - computed: false, optional: true, required: false
  private _autostart?: boolean | cdktf.IResolvable; 
  public get autostart() {
    return this.getBooleanAttribute('autostart');
  }
  public set autostart(value: boolean | cdktf.IResolvable) {
    this._autostart = value;
  }
  public resetAutostart() {
    this._autostart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autostartInput() {
    return this._autostart;
  }

  // block_io_tune - computed: false, optional: true, required: false
  private _blockIoTune = new DomainBlockIoTuneOutputReference(this, "block_io_tune");
  public get blockIoTune() {
    return this._blockIoTune;
  }
  public putBlockIoTune(value: DomainBlockIoTune) {
    this._blockIoTune.internalValue = value;
  }
  public resetBlockIoTune() {
    this._blockIoTune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIoTuneInput() {
    return this._blockIoTune.internalValue;
  }

  // bootloader - computed: false, optional: true, required: false
  private _bootloader?: string; 
  public get bootloader() {
    return this.getStringAttribute('bootloader');
  }
  public set bootloader(value: string) {
    this._bootloader = value;
  }
  public resetBootloader() {
    this._bootloader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootloaderInput() {
    return this._bootloader;
  }

  // bootloader_args - computed: false, optional: true, required: false
  private _bootloaderArgs?: string; 
  public get bootloaderArgs() {
    return this.getStringAttribute('bootloader_args');
  }
  public set bootloaderArgs(value: string) {
    this._bootloaderArgs = value;
  }
  public resetBootloaderArgs() {
    this._bootloaderArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootloaderArgsInput() {
    return this._bootloaderArgs;
  }

  // clock - computed: false, optional: true, required: false
  private _clock = new DomainClockOutputReference(this, "clock");
  public get clock() {
    return this._clock;
  }
  public putClock(value: DomainClock) {
    this._clock.internalValue = value;
  }
  public resetClock() {
    this._clock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockInput() {
    return this._clock.internalValue;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DomainCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DomainCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // cpu_tune - computed: false, optional: true, required: false
  private _cpuTune = new DomainCpuTuneOutputReference(this, "cpu_tune");
  public get cpuTune() {
    return this._cpuTune;
  }
  public putCpuTune(value: DomainCpuTune) {
    this._cpuTune.internalValue = value;
  }
  public resetCpuTune() {
    this._cpuTune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTuneInput() {
    return this._cpuTune.internalValue;
  }

  // create - computed: false, optional: true, required: false
  private _create = new DomainCreateOutputReference(this, "create");
  public get create() {
    return this._create;
  }
  public putCreate(value: DomainCreate) {
    this._create.internalValue = value;
  }
  public resetCreate() {
    this._create.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }

  // current_memory - computed: false, optional: true, required: false
  private _currentMemory?: number; 
  public get currentMemory() {
    return this.getNumberAttribute('current_memory');
  }
  public set currentMemory(value: number) {
    this._currentMemory = value;
  }
  public resetCurrentMemory() {
    this._currentMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentMemoryInput() {
    return this._currentMemory;
  }

  // current_memory_unit - computed: false, optional: true, required: false
  private _currentMemoryUnit?: string; 
  public get currentMemoryUnit() {
    return this.getStringAttribute('current_memory_unit');
  }
  public set currentMemoryUnit(value: string) {
    this._currentMemoryUnit = value;
  }
  public resetCurrentMemoryUnit() {
    this._currentMemoryUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentMemoryUnitInput() {
    return this._currentMemoryUnit;
  }

  // default_io_thread - computed: false, optional: true, required: false
  private _defaultIoThread = new DomainDefaultIoThreadOutputReference(this, "default_io_thread");
  public get defaultIoThread() {
    return this._defaultIoThread;
  }
  public putDefaultIoThread(value: DomainDefaultIoThread) {
    this._defaultIoThread.internalValue = value;
  }
  public resetDefaultIoThread() {
    this._defaultIoThread.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIoThreadInput() {
    return this._defaultIoThread.internalValue;
  }

  // description - computed: false, optional: true, required: false
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

  // destroy - computed: false, optional: true, required: false
  private _destroy = new DomainDestroyOutputReference(this, "destroy");
  public get destroy() {
    return this._destroy;
  }
  public putDestroy(value: DomainDestroy) {
    this._destroy.internalValue = value;
  }
  public resetDestroy() {
    this._destroy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyInput() {
    return this._destroy.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new DomainDevicesOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DomainDevices) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new DomainFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: DomainFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // gen_id - computed: false, optional: true, required: false
  private _genId?: string; 
  public get genId() {
    return this.getStringAttribute('gen_id');
  }
  public set genId(value: string) {
    this._genId = value;
  }
  public resetGenId() {
    this._genId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genIdInput() {
    return this._genId;
  }

  // hwuuid - computed: false, optional: true, required: false
  private _hwuuid?: string; 
  public get hwuuid() {
    return this.getStringAttribute('hwuuid');
  }
  public set hwuuid(value: string) {
    this._hwuuid = value;
  }
  public resetHwuuid() {
    this._hwuuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwuuidInput() {
    return this._hwuuid;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // id_map - computed: false, optional: true, required: false
  private _idMap = new DomainIdMapOutputReference(this, "id_map");
  public get idMap() {
    return this._idMap;
  }
  public putIdMap(value: DomainIdMap) {
    this._idMap.internalValue = value;
  }
  public resetIdMap() {
    this._idMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idMapInput() {
    return this._idMap.internalValue;
  }

  // io_thread_i_ds - computed: false, optional: true, required: false
  private _ioThreadIDs = new DomainIoThreadIDsOutputReference(this, "io_thread_i_ds");
  public get ioThreadIDs() {
    return this._ioThreadIDs;
  }
  public putIoThreadIDs(value: DomainIoThreadIDs) {
    this._ioThreadIDs.internalValue = value;
  }
  public resetIoThreadIDs() {
    this._ioThreadIDs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioThreadIDsInput() {
    return this._ioThreadIDs.internalValue;
  }

  // io_threads - computed: false, optional: true, required: false
  private _ioThreads?: number; 
  public get ioThreads() {
    return this.getNumberAttribute('io_threads');
  }
  public set ioThreads(value: number) {
    this._ioThreads = value;
  }
  public resetIoThreads() {
    this._ioThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioThreadsInput() {
    return this._ioThreads;
  }

  // key_wrap - computed: false, optional: true, required: false
  private _keyWrap = new DomainKeyWrapOutputReference(this, "key_wrap");
  public get keyWrap() {
    return this._keyWrap;
  }
  public putKeyWrap(value: DomainKeyWrap) {
    this._keyWrap.internalValue = value;
  }
  public resetKeyWrap() {
    this._keyWrap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyWrapInput() {
    return this._keyWrap.internalValue;
  }

  // launch_security - computed: false, optional: true, required: false
  private _launchSecurity = new DomainLaunchSecurityOutputReference(this, "launch_security");
  public get launchSecurity() {
    return this._launchSecurity;
  }
  public putLaunchSecurity(value: DomainLaunchSecurity) {
    this._launchSecurity.internalValue = value;
  }
  public resetLaunchSecurity() {
    this._launchSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchSecurityInput() {
    return this._launchSecurity.internalValue;
  }

  // maximum_memory - computed: false, optional: true, required: false
  private _maximumMemory?: number; 
  public get maximumMemory() {
    return this.getNumberAttribute('maximum_memory');
  }
  public set maximumMemory(value: number) {
    this._maximumMemory = value;
  }
  public resetMaximumMemory() {
    this._maximumMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMemoryInput() {
    return this._maximumMemory;
  }

  // maximum_memory_slots - computed: false, optional: true, required: false
  private _maximumMemorySlots?: number; 
  public get maximumMemorySlots() {
    return this.getNumberAttribute('maximum_memory_slots');
  }
  public set maximumMemorySlots(value: number) {
    this._maximumMemorySlots = value;
  }
  public resetMaximumMemorySlots() {
    this._maximumMemorySlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMemorySlotsInput() {
    return this._maximumMemorySlots;
  }

  // maximum_memory_unit - computed: false, optional: true, required: false
  private _maximumMemoryUnit?: string; 
  public get maximumMemoryUnit() {
    return this.getStringAttribute('maximum_memory_unit');
  }
  public set maximumMemoryUnit(value: string) {
    this._maximumMemoryUnit = value;
  }
  public resetMaximumMemoryUnit() {
    this._maximumMemoryUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMemoryUnitInput() {
    return this._maximumMemoryUnit;
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

  // memory_backing - computed: false, optional: true, required: false
  private _memoryBacking = new DomainMemoryBackingOutputReference(this, "memory_backing");
  public get memoryBacking() {
    return this._memoryBacking;
  }
  public putMemoryBacking(value: DomainMemoryBacking) {
    this._memoryBacking.internalValue = value;
  }
  public resetMemoryBacking() {
    this._memoryBacking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryBackingInput() {
    return this._memoryBacking.internalValue;
  }

  // memory_dump_core - computed: false, optional: true, required: false
  private _memoryDumpCore?: string; 
  public get memoryDumpCore() {
    return this.getStringAttribute('memory_dump_core');
  }
  public set memoryDumpCore(value: string) {
    this._memoryDumpCore = value;
  }
  public resetMemoryDumpCore() {
    this._memoryDumpCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryDumpCoreInput() {
    return this._memoryDumpCore;
  }

  // memory_tune - computed: false, optional: true, required: false
  private _memoryTune = new DomainMemoryTuneOutputReference(this, "memory_tune");
  public get memoryTune() {
    return this._memoryTune;
  }
  public putMemoryTune(value: DomainMemoryTune) {
    this._memoryTune.internalValue = value;
  }
  public resetMemoryTune() {
    this._memoryTune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryTuneInput() {
    return this._memoryTune.internalValue;
  }

  // memory_unit - computed: false, optional: true, required: false
  private _memoryUnit?: string; 
  public get memoryUnit() {
    return this.getStringAttribute('memory_unit');
  }
  public set memoryUnit(value: string) {
    this._memoryUnit = value;
  }
  public resetMemoryUnit() {
    this._memoryUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUnitInput() {
    return this._memoryUnit;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DomainMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DomainMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // numa_tune - computed: false, optional: true, required: false
  private _numaTune = new DomainNumaTuneOutputReference(this, "numa_tune");
  public get numaTune() {
    return this._numaTune;
  }
  public putNumaTune(value: DomainNumaTune) {
    this._numaTune.internalValue = value;
  }
  public resetNumaTune() {
    this._numaTune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaTuneInput() {
    return this._numaTune.internalValue;
  }

  // on_crash - computed: false, optional: true, required: false
  private _onCrash?: string; 
  public get onCrash() {
    return this.getStringAttribute('on_crash');
  }
  public set onCrash(value: string) {
    this._onCrash = value;
  }
  public resetOnCrash() {
    this._onCrash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onCrashInput() {
    return this._onCrash;
  }

  // on_poweroff - computed: false, optional: true, required: false
  private _onPoweroff?: string; 
  public get onPoweroff() {
    return this.getStringAttribute('on_poweroff');
  }
  public set onPoweroff(value: string) {
    this._onPoweroff = value;
  }
  public resetOnPoweroff() {
    this._onPoweroff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPoweroffInput() {
    return this._onPoweroff;
  }

  // on_reboot - computed: false, optional: true, required: false
  private _onReboot?: string; 
  public get onReboot() {
    return this.getStringAttribute('on_reboot');
  }
  public set onReboot(value: string) {
    this._onReboot = value;
  }
  public resetOnReboot() {
    this._onReboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRebootInput() {
    return this._onReboot;
  }

  // os - computed: false, optional: true, required: false
  private _os = new DomainOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: DomainOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // perf - computed: false, optional: true, required: false
  private _perf = new DomainPerfOutputReference(this, "perf");
  public get perf() {
    return this._perf;
  }
  public putPerf(value: DomainPerf) {
    this._perf.internalValue = value;
  }
  public resetPerf() {
    this._perf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfInput() {
    return this._perf.internalValue;
  }

  // pm - computed: false, optional: true, required: false
  private _pm = new DomainPmOutputReference(this, "pm");
  public get pm() {
    return this._pm;
  }
  public putPm(value: DomainPm) {
    this._pm.internalValue = value;
  }
  public resetPm() {
    this._pm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmInput() {
    return this._pm.internalValue;
  }

  // resource - computed: false, optional: true, required: false
  private _resource = new DomainResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DomainResource) {
    this._resource.internalValue = value;
  }
  public resetResource() {
    this._resource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // running - computed: false, optional: true, required: false
  private _running?: boolean | cdktf.IResolvable; 
  public get running() {
    return this.getBooleanAttribute('running');
  }
  public set running(value: boolean | cdktf.IResolvable) {
    this._running = value;
  }
  public resetRunning() {
    this._running = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInput() {
    return this._running;
  }

  // sec_label - computed: false, optional: true, required: false
  private _secLabel = new DomainSecLabelList(this, "sec_label", false);
  public get secLabel() {
    return this._secLabel;
  }
  public putSecLabel(value: DomainSecLabel[] | cdktf.IResolvable) {
    this._secLabel.internalValue = value;
  }
  public resetSecLabel() {
    this._secLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secLabelInput() {
    return this._secLabel.internalValue;
  }

  // sys_info - computed: false, optional: true, required: false
  private _sysInfo = new DomainSysInfoList(this, "sys_info", false);
  public get sysInfo() {
    return this._sysInfo;
  }
  public putSysInfo(value: DomainSysInfo[] | cdktf.IResolvable) {
    this._sysInfo.internalValue = value;
  }
  public resetSysInfo() {
    this._sysInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysInfoInput() {
    return this._sysInfo.internalValue;
  }

  // throttle_groups - computed: false, optional: true, required: false
  private _throttleGroups = new DomainThrottleGroupsOutputReference(this, "throttle_groups");
  public get throttleGroups() {
    return this._throttleGroups;
  }
  public putThrottleGroups(value: DomainThrottleGroups) {
    this._throttleGroups.internalValue = value;
  }
  public resetThrottleGroups() {
    this._throttleGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleGroupsInput() {
    return this._throttleGroups.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vcpu - computed: false, optional: true, required: false
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }

  // vcpu_cpuset - computed: false, optional: true, required: false
  private _vcpuCpuset?: string; 
  public get vcpuCpuset() {
    return this.getStringAttribute('vcpu_cpuset');
  }
  public set vcpuCpuset(value: string) {
    this._vcpuCpuset = value;
  }
  public resetVcpuCpuset() {
    this._vcpuCpuset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuCpusetInput() {
    return this._vcpuCpuset;
  }

  // vcpu_current - computed: false, optional: true, required: false
  private _vcpuCurrent?: number; 
  public get vcpuCurrent() {
    return this.getNumberAttribute('vcpu_current');
  }
  public set vcpuCurrent(value: number) {
    this._vcpuCurrent = value;
  }
  public resetVcpuCurrent() {
    this._vcpuCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuCurrentInput() {
    return this._vcpuCurrent;
  }

  // vcpu_placement - computed: false, optional: true, required: false
  private _vcpuPlacement?: string; 
  public get vcpuPlacement() {
    return this.getStringAttribute('vcpu_placement');
  }
  public set vcpuPlacement(value: string) {
    this._vcpuPlacement = value;
  }
  public resetVcpuPlacement() {
    this._vcpuPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuPlacementInput() {
    return this._vcpuPlacement;
  }

  // vcpus - computed: false, optional: true, required: false
  private _vcpus = new DomainVcpusOutputReference(this, "vcpus");
  public get vcpus() {
    return this._vcpus;
  }
  public putVcpus(value: DomainVcpus) {
    this._vcpus.internalValue = value;
  }
  public resetVcpus() {
    this._vcpus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autostart: cdktf.booleanToTerraform(this._autostart),
      block_io_tune: domainBlockIoTuneToTerraform(this._blockIoTune.internalValue),
      bootloader: cdktf.stringToTerraform(this._bootloader),
      bootloader_args: cdktf.stringToTerraform(this._bootloaderArgs),
      clock: domainClockToTerraform(this._clock.internalValue),
      cpu: domainCpuToTerraform(this._cpu.internalValue),
      cpu_tune: domainCpuTuneToTerraform(this._cpuTune.internalValue),
      create: domainCreateToTerraform(this._create.internalValue),
      current_memory: cdktf.numberToTerraform(this._currentMemory),
      current_memory_unit: cdktf.stringToTerraform(this._currentMemoryUnit),
      default_io_thread: domainDefaultIoThreadToTerraform(this._defaultIoThread.internalValue),
      description: cdktf.stringToTerraform(this._description),
      destroy: domainDestroyToTerraform(this._destroy.internalValue),
      devices: domainDevicesToTerraform(this._devices.internalValue),
      features: domainFeaturesToTerraform(this._features.internalValue),
      gen_id: cdktf.stringToTerraform(this._genId),
      hwuuid: cdktf.stringToTerraform(this._hwuuid),
      id_map: domainIdMapToTerraform(this._idMap.internalValue),
      io_thread_i_ds: domainIoThreadIDsToTerraform(this._ioThreadIDs.internalValue),
      io_threads: cdktf.numberToTerraform(this._ioThreads),
      key_wrap: domainKeyWrapToTerraform(this._keyWrap.internalValue),
      launch_security: domainLaunchSecurityToTerraform(this._launchSecurity.internalValue),
      maximum_memory: cdktf.numberToTerraform(this._maximumMemory),
      maximum_memory_slots: cdktf.numberToTerraform(this._maximumMemorySlots),
      maximum_memory_unit: cdktf.stringToTerraform(this._maximumMemoryUnit),
      memory: cdktf.numberToTerraform(this._memory),
      memory_backing: domainMemoryBackingToTerraform(this._memoryBacking.internalValue),
      memory_dump_core: cdktf.stringToTerraform(this._memoryDumpCore),
      memory_tune: domainMemoryTuneToTerraform(this._memoryTune.internalValue),
      memory_unit: cdktf.stringToTerraform(this._memoryUnit),
      metadata: domainMetadataToTerraform(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      numa_tune: domainNumaTuneToTerraform(this._numaTune.internalValue),
      on_crash: cdktf.stringToTerraform(this._onCrash),
      on_poweroff: cdktf.stringToTerraform(this._onPoweroff),
      on_reboot: cdktf.stringToTerraform(this._onReboot),
      os: domainOsToTerraform(this._os.internalValue),
      perf: domainPerfToTerraform(this._perf.internalValue),
      pm: domainPmToTerraform(this._pm.internalValue),
      resource: domainResourceToTerraform(this._resource.internalValue),
      running: cdktf.booleanToTerraform(this._running),
      sec_label: cdktf.listMapper(domainSecLabelToTerraform, false)(this._secLabel.internalValue),
      sys_info: cdktf.listMapper(domainSysInfoToTerraform, false)(this._sysInfo.internalValue),
      throttle_groups: domainThrottleGroupsToTerraform(this._throttleGroups.internalValue),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      vcpu: cdktf.numberToTerraform(this._vcpu),
      vcpu_cpuset: cdktf.stringToTerraform(this._vcpuCpuset),
      vcpu_current: cdktf.numberToTerraform(this._vcpuCurrent),
      vcpu_placement: cdktf.stringToTerraform(this._vcpuPlacement),
      vcpus: domainVcpusToTerraform(this._vcpus.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autostart: {
        value: cdktf.booleanToHclTerraform(this._autostart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_io_tune: {
        value: domainBlockIoTuneToHclTerraform(this._blockIoTune.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainBlockIoTune",
      },
      bootloader: {
        value: cdktf.stringToHclTerraform(this._bootloader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootloader_args: {
        value: cdktf.stringToHclTerraform(this._bootloaderArgs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clock: {
        value: domainClockToHclTerraform(this._clock.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainClock",
      },
      cpu: {
        value: domainCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainCpu",
      },
      cpu_tune: {
        value: domainCpuTuneToHclTerraform(this._cpuTune.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainCpuTune",
      },
      create: {
        value: domainCreateToHclTerraform(this._create.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainCreate",
      },
      current_memory: {
        value: cdktf.numberToHclTerraform(this._currentMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      current_memory_unit: {
        value: cdktf.stringToHclTerraform(this._currentMemoryUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_io_thread: {
        value: domainDefaultIoThreadToHclTerraform(this._defaultIoThread.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainDefaultIoThread",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destroy: {
        value: domainDestroyToHclTerraform(this._destroy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainDestroy",
      },
      devices: {
        value: domainDevicesToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainDevices",
      },
      features: {
        value: domainFeaturesToHclTerraform(this._features.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainFeatures",
      },
      gen_id: {
        value: cdktf.stringToHclTerraform(this._genId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hwuuid: {
        value: cdktf.stringToHclTerraform(this._hwuuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_map: {
        value: domainIdMapToHclTerraform(this._idMap.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainIdMap",
      },
      io_thread_i_ds: {
        value: domainIoThreadIDsToHclTerraform(this._ioThreadIDs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainIoThreadIDs",
      },
      io_threads: {
        value: cdktf.numberToHclTerraform(this._ioThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_wrap: {
        value: domainKeyWrapToHclTerraform(this._keyWrap.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainKeyWrap",
      },
      launch_security: {
        value: domainLaunchSecurityToHclTerraform(this._launchSecurity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainLaunchSecurity",
      },
      maximum_memory: {
        value: cdktf.numberToHclTerraform(this._maximumMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_memory_slots: {
        value: cdktf.numberToHclTerraform(this._maximumMemorySlots),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_memory_unit: {
        value: cdktf.stringToHclTerraform(this._maximumMemoryUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_backing: {
        value: domainMemoryBackingToHclTerraform(this._memoryBacking.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainMemoryBacking",
      },
      memory_dump_core: {
        value: cdktf.stringToHclTerraform(this._memoryDumpCore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_tune: {
        value: domainMemoryTuneToHclTerraform(this._memoryTune.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainMemoryTune",
      },
      memory_unit: {
        value: cdktf.stringToHclTerraform(this._memoryUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: domainMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainMetadata",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      numa_tune: {
        value: domainNumaTuneToHclTerraform(this._numaTune.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainNumaTune",
      },
      on_crash: {
        value: cdktf.stringToHclTerraform(this._onCrash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_poweroff: {
        value: cdktf.stringToHclTerraform(this._onPoweroff),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_reboot: {
        value: cdktf.stringToHclTerraform(this._onReboot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: domainOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainOs",
      },
      perf: {
        value: domainPerfToHclTerraform(this._perf.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainPerf",
      },
      pm: {
        value: domainPmToHclTerraform(this._pm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainPm",
      },
      resource: {
        value: domainResourceToHclTerraform(this._resource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainResource",
      },
      running: {
        value: cdktf.booleanToHclTerraform(this._running),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sec_label: {
        value: cdktf.listMapperHcl(domainSecLabelToHclTerraform, false)(this._secLabel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainSecLabelList",
      },
      sys_info: {
        value: cdktf.listMapperHcl(domainSysInfoToHclTerraform, false)(this._sysInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DomainSysInfoList",
      },
      throttle_groups: {
        value: domainThrottleGroupsToHclTerraform(this._throttleGroups.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainThrottleGroups",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcpu: {
        value: cdktf.numberToHclTerraform(this._vcpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcpu_cpuset: {
        value: cdktf.stringToHclTerraform(this._vcpuCpuset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcpu_current: {
        value: cdktf.numberToHclTerraform(this._vcpuCurrent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcpu_placement: {
        value: cdktf.stringToHclTerraform(this._vcpuPlacement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcpus: {
        value: domainVcpusToHclTerraform(this._vcpus.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DomainVcpus",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
