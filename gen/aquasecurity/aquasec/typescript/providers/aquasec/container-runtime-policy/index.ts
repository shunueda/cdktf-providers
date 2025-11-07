// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRuntimePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates the application scope of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#application_scopes ContainerRuntimePolicy#application_scopes}
  */
  readonly applicationScopes?: string[];
  /**
  * If true, all network activity will be audited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_all_network_activity ContainerRuntimePolicy#audit_all_network_activity}
  */
  readonly auditAllNetworkActivity?: boolean | cdktf.IResolvable;
  /**
  * If true, all process activity will be audited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_all_processes_activity ContainerRuntimePolicy#audit_all_processes_activity}
  */
  readonly auditAllProcessesActivity?: boolean | cdktf.IResolvable;
  /**
  * Detects brute force login attempts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_brute_force_login ContainerRuntimePolicy#audit_brute_force_login}
  */
  readonly auditBruteForceLogin?: boolean | cdktf.IResolvable;
  /**
  * If true, full command arguments will be audited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_full_command_arguments ContainerRuntimePolicy#audit_full_command_arguments}
  */
  readonly auditFullCommandArguments?: boolean | cdktf.IResolvable;
  /**
  * Username of the account that created the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#author ContainerRuntimePolicy#author}
  */
  readonly author?: string;
  /**
  * If true, prevent containers from running with access to host network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_access_host_network ContainerRuntimePolicy#block_access_host_network}
  */
  readonly blockAccessHostNetwork?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent containers from running with adding capabilities with `--cap-add` privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_adding_capabilities ContainerRuntimePolicy#block_adding_capabilities}
  */
  readonly blockAddingCapabilities?: boolean | cdktf.IResolvable;
  /**
  * If true, exec into a container is prevented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_container_exec ContainerRuntimePolicy#block_container_exec}
  */
  readonly blockContainerExec?: boolean | cdktf.IResolvable;
  /**
  * Detect and prevent communication to DNS/IP addresses known to be used for Cryptocurrency Mining
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_cryptocurrency_mining ContainerRuntimePolicy#block_cryptocurrency_mining}
  */
  readonly blockCryptocurrencyMining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_disallowed_images ContainerRuntimePolicy#block_disallowed_images}
  */
  readonly blockDisallowedImages?: boolean | cdktf.IResolvable;
  /**
  * Detect and prevent running in-memory execution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_fileless_exec ContainerRuntimePolicy#block_fileless_exec}
  */
  readonly blockFilelessExec?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent containers from running with the capability to bind in port lower than 1024.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_low_port_binding ContainerRuntimePolicy#block_low_port_binding}
  */
  readonly blockLowPortBinding?: boolean | cdktf.IResolvable;
  /**
  * If true, running containers in non-compliant pods is prevented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_non_compliant_workloads ContainerRuntimePolicy#block_non_compliant_workloads}
  */
  readonly blockNonCompliantWorkloads?: boolean | cdktf.IResolvable;
  /**
  * If true, running non-kubernetes containers is prevented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_non_k8s_containers ContainerRuntimePolicy#block_non_k8s_containers}
  */
  readonly blockNonK8SContainers?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent containers from running with privileged container capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_privileged_containers ContainerRuntimePolicy#block_privileged_containers}
  */
  readonly blockPrivilegedContainers?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent containers from running with root user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_root_user ContainerRuntimePolicy#block_root_user}
  */
  readonly blockRootUser?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent containers from running with the privilege to use the IPC namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_use_ipc_namespace ContainerRuntimePolicy#block_use_ipc_namespace}
  */
  readonly blockUseIpcNamespace?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent containers from running with the privilege to use the PID namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_use_pid_namespace ContainerRuntimePolicy#block_use_pid_namespace}
  */
  readonly blockUsePidNamespace?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent containers from running with the privilege to use the user namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_use_user_namespace ContainerRuntimePolicy#block_use_user_namespace}
  */
  readonly blockUseUserNamespace?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent containers from running with the privilege to use the UTS namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_use_uts_namespace ContainerRuntimePolicy#block_use_uts_namespace}
  */
  readonly blockUseUtsNamespace?: boolean | cdktf.IResolvable;
  /**
  * If true, prevents containers from using specific Unix capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#blocked_capabilities ContainerRuntimePolicy#blocked_capabilities}
  */
  readonly blockedCapabilities?: string[];
  /**
  * List of files that are prevented from being read, modified and executed in the containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#blocked_files ContainerRuntimePolicy#blocked_files}
  */
  readonly blockedFiles?: string[];
  /**
  * List of blocked inbound ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#blocked_inbound_ports ContainerRuntimePolicy#blocked_inbound_ports}
  */
  readonly blockedInboundPorts?: string[];
  /**
  * List of blocked outbound ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#blocked_outbound_ports ContainerRuntimePolicy#blocked_outbound_ports}
  */
  readonly blockedOutboundPorts?: string[];
  /**
  * Prevent containers from reading, writing, or executing all files in the list of packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#blocked_packages ContainerRuntimePolicy#blocked_packages}
  */
  readonly blockedPackages?: string[];
  /**
  * List of volumes that are prevented from being mounted in the containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#blocked_volumes ContainerRuntimePolicy#blocked_volumes}
  */
  readonly blockedVolumes?: string[];
  /**
  * List of processes that will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#container_exec_allowed_processes ContainerRuntimePolicy#container_exec_allowed_processes}
  */
  readonly containerExecAllowedProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#created ContainerRuntimePolicy#created}
  */
  readonly created?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#cve ContainerRuntimePolicy#cve}
  */
  readonly cve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#default_security_profile ContainerRuntimePolicy#default_security_profile}
  */
  readonly defaultSecurityProfile?: string;
  /**
  * The description of the container runtime policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#description ContainerRuntimePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#digest ContainerRuntimePolicy#digest}
  */
  readonly digest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enable_crypto_mining_dns ContainerRuntimePolicy#enable_crypto_mining_dns}
  */
  readonly enableCryptoMiningDns?: boolean | cdktf.IResolvable;
  /**
  * If true, fork bombs are prevented in the containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enable_fork_guard ContainerRuntimePolicy#enable_fork_guard}
  */
  readonly enableForkGuard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enable_ip_reputation ContainerRuntimePolicy#enable_ip_reputation}
  */
  readonly enableIpReputation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enable_port_scan_protection ContainerRuntimePolicy#enable_port_scan_protection}
  */
  readonly enablePortScanProtection?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the runtime policy is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates that policy should effect container execution (not just for audit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enforce ContainerRuntimePolicy#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Indicates the number of days after which the runtime policy will be changed to enforce mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enforce_after_days ContainerRuntimePolicy#enforce_after_days}
  */
  readonly enforceAfterDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enforce_scheduler_added_on ContainerRuntimePolicy#enforce_scheduler_added_on}
  */
  readonly enforceSchedulerAddedOn?: number;
  /**
  * List of excluded application scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exclude_application_scopes ContainerRuntimePolicy#exclude_application_scopes}
  */
  readonly excludeApplicationScopes?: string[];
  /**
  * Process limit for the fork guard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#fork_guard_process_limit ContainerRuntimePolicy#fork_guard_process_limit}
  */
  readonly forkGuardProcessLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#id ContainerRuntimePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#image_name ContainerRuntimePolicy#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#is_audit_checked ContainerRuntimePolicy#is_audit_checked}
  */
  readonly isAuditChecked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#is_auto_generated ContainerRuntimePolicy#is_auto_generated}
  */
  readonly isAutoGenerated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#is_ootb_policy ContainerRuntimePolicy#is_ootb_policy}
  */
  readonly isOotbPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#lastupdate ContainerRuntimePolicy#lastupdate}
  */
  readonly lastupdate?: number;
  /**
  * If true, system time changes will be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitor_system_time_changes ContainerRuntimePolicy#monitor_system_time_changes}
  */
  readonly monitorSystemTimeChanges?: boolean | cdktf.IResolvable;
  /**
  * Name of the container runtime policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#name ContainerRuntimePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#no_new_privileges ContainerRuntimePolicy#no_new_privileges}
  */
  readonly noNewPrivileges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#only_registered_images ContainerRuntimePolicy#only_registered_images}
  */
  readonly onlyRegisteredImages?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#permission ContainerRuntimePolicy#permission}
  */
  readonly permission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#registry ContainerRuntimePolicy#registry}
  */
  readonly registry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#repo_name ContainerRuntimePolicy#repo_name}
  */
  readonly repoName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#resource_name ContainerRuntimePolicy#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#resource_type ContainerRuntimePolicy#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#runtime_mode ContainerRuntimePolicy#runtime_mode}
  */
  readonly runtimeMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#runtime_type ContainerRuntimePolicy#runtime_type}
  */
  readonly runtimeType?: string;
  /**
  * Logical expression of how to compute the dependency of the scope variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#scope_expression ContainerRuntimePolicy#scope_expression}
  */
  readonly scopeExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#type ContainerRuntimePolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#updated ContainerRuntimePolicy#updated}
  */
  readonly updated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#version ContainerRuntimePolicy#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#vpatch_version ContainerRuntimePolicy#vpatch_version}
  */
  readonly vpatchVersion?: string;
  /**
  * allowed_executables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#allowed_executables ContainerRuntimePolicy#allowed_executables}
  */
  readonly allowedExecutables?: ContainerRuntimePolicyAllowedExecutables[] | cdktf.IResolvable;
  /**
  * allowed_registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#allowed_registries ContainerRuntimePolicy#allowed_registries}
  */
  readonly allowedRegistries?: ContainerRuntimePolicyAllowedRegistries[] | cdktf.IResolvable;
  /**
  * auditing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#auditing ContainerRuntimePolicy#auditing}
  */
  readonly auditing?: ContainerRuntimePolicyAuditing;
  /**
  * blacklisted_os_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#blacklisted_os_users ContainerRuntimePolicy#blacklisted_os_users}
  */
  readonly blacklistedOsUsers?: ContainerRuntimePolicyBlacklistedOsUsers;
  /**
  * bypass_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#bypass_scope ContainerRuntimePolicy#bypass_scope}
  */
  readonly bypassScope?: ContainerRuntimePolicyBypassScope[] | cdktf.IResolvable;
  /**
  * container_exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#container_exec ContainerRuntimePolicy#container_exec}
  */
  readonly containerExec?: ContainerRuntimePolicyContainerExec;
  /**
  * drift_prevention block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#drift_prevention ContainerRuntimePolicy#drift_prevention}
  */
  readonly driftPrevention?: ContainerRuntimePolicyDriftPrevention[] | cdktf.IResolvable;
  /**
  * executable_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#executable_blacklist ContainerRuntimePolicy#executable_blacklist}
  */
  readonly executableBlacklist?: ContainerRuntimePolicyExecutableBlacklistStruct[] | cdktf.IResolvable;
  /**
  * failed_kubernetes_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#failed_kubernetes_checks ContainerRuntimePolicy#failed_kubernetes_checks}
  */
  readonly failedKubernetesChecks?: ContainerRuntimePolicyFailedKubernetesChecks;
  /**
  * file_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#file_block ContainerRuntimePolicy#file_block}
  */
  readonly fileBlock?: ContainerRuntimePolicyFileBlock;
  /**
  * file_integrity_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#file_integrity_monitoring ContainerRuntimePolicy#file_integrity_monitoring}
  */
  readonly fileIntegrityMonitoring?: ContainerRuntimePolicyFileIntegrityMonitoring[] | cdktf.IResolvable;
  /**
  * limit_container_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#limit_container_privileges ContainerRuntimePolicy#limit_container_privileges}
  */
  readonly limitContainerPrivileges?: ContainerRuntimePolicyLimitContainerPrivileges[] | cdktf.IResolvable;
  /**
  * linux_capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#linux_capabilities ContainerRuntimePolicy#linux_capabilities}
  */
  readonly linuxCapabilities?: ContainerRuntimePolicyLinuxCapabilities;
  /**
  * malware_scan_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#malware_scan_options ContainerRuntimePolicy#malware_scan_options}
  */
  readonly malwareScanOptions?: ContainerRuntimePolicyMalwareScanOptions;
  /**
  * package_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#package_block ContainerRuntimePolicy#package_block}
  */
  readonly packageBlock?: ContainerRuntimePolicyPackageBlock;
  /**
  * port_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#port_block ContainerRuntimePolicy#port_block}
  */
  readonly portBlock?: ContainerRuntimePolicyPortBlock;
  /**
  * readonly_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#readonly_files ContainerRuntimePolicy#readonly_files}
  */
  readonly readonlyFiles?: ContainerRuntimePolicyReadonlyFiles;
  /**
  * readonly_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#readonly_registry ContainerRuntimePolicy#readonly_registry}
  */
  readonly readonlyRegistry?: ContainerRuntimePolicyReadonlyRegistry;
  /**
  * registry_access_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#registry_access_monitoring ContainerRuntimePolicy#registry_access_monitoring}
  */
  readonly registryAccessMonitoring?: ContainerRuntimePolicyRegistryAccessMonitoring;
  /**
  * restricted_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#restricted_volumes ContainerRuntimePolicy#restricted_volumes}
  */
  readonly restrictedVolumes?: ContainerRuntimePolicyRestrictedVolumes[] | cdktf.IResolvable;
  /**
  * reverse_shell block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#reverse_shell ContainerRuntimePolicy#reverse_shell}
  */
  readonly reverseShell?: ContainerRuntimePolicyReverseShell;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#scope ContainerRuntimePolicy#scope}
  */
  readonly scope?: ContainerRuntimePolicyScope[] | cdktf.IResolvable;
  /**
  * scope_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#scope_variables ContainerRuntimePolicy#scope_variables}
  */
  readonly scopeVariables?: ContainerRuntimePolicyScopeVariablesA[] | cdktf.IResolvable;
  /**
  * system_integrity_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#system_integrity_protection ContainerRuntimePolicy#system_integrity_protection}
  */
  readonly systemIntegrityProtection?: ContainerRuntimePolicySystemIntegrityProtection;
  /**
  * tripwire block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#tripwire ContainerRuntimePolicy#tripwire}
  */
  readonly tripwire?: ContainerRuntimePolicyTripwire;
  /**
  * whitelisted_os_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#whitelisted_os_users ContainerRuntimePolicy#whitelisted_os_users}
  */
  readonly whitelistedOsUsers?: ContainerRuntimePolicyWhitelistedOsUsers;
}
export interface ContainerRuntimePolicyAllowedExecutables {
  /**
  * List of allowed executables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#allow_executables ContainerRuntimePolicy#allow_executables}
  */
  readonly allowExecutables?: string[];
  /**
  * List of allowed root executables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#allow_root_executables ContainerRuntimePolicy#allow_root_executables}
  */
  readonly allowRootExecutables?: string[];
  /**
  * Whether allowed executables configuration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to treat executables separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#separate_executables ContainerRuntimePolicy#separate_executables}
  */
  readonly separateExecutables?: boolean | cdktf.IResolvable;
}

export function containerRuntimePolicyAllowedExecutablesToTerraform(struct?: ContainerRuntimePolicyAllowedExecutables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_executables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowExecutables),
    allow_root_executables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowRootExecutables),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    separate_executables: cdktf.booleanToTerraform(struct!.separateExecutables),
  }
}


export function containerRuntimePolicyAllowedExecutablesToHclTerraform(struct?: ContainerRuntimePolicyAllowedExecutables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_executables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowExecutables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_root_executables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowRootExecutables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    separate_executables: {
      value: cdktf.booleanToHclTerraform(struct!.separateExecutables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyAllowedExecutablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyAllowedExecutables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowExecutables !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExecutables = this._allowExecutables;
    }
    if (this._allowRootExecutables !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRootExecutables = this._allowRootExecutables;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._separateExecutables !== undefined) {
      hasAnyValues = true;
      internalValueResult.separateExecutables = this._separateExecutables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyAllowedExecutables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowExecutables = undefined;
      this._allowRootExecutables = undefined;
      this._enabled = undefined;
      this._separateExecutables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowExecutables = value.allowExecutables;
      this._allowRootExecutables = value.allowRootExecutables;
      this._enabled = value.enabled;
      this._separateExecutables = value.separateExecutables;
    }
  }

  // allow_executables - computed: false, optional: true, required: false
  private _allowExecutables?: string[]; 
  public get allowExecutables() {
    return this.getListAttribute('allow_executables');
  }
  public set allowExecutables(value: string[]) {
    this._allowExecutables = value;
  }
  public resetAllowExecutables() {
    this._allowExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExecutablesInput() {
    return this._allowExecutables;
  }

  // allow_root_executables - computed: false, optional: true, required: false
  private _allowRootExecutables?: string[]; 
  public get allowRootExecutables() {
    return this.getListAttribute('allow_root_executables');
  }
  public set allowRootExecutables(value: string[]) {
    this._allowRootExecutables = value;
  }
  public resetAllowRootExecutables() {
    this._allowRootExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRootExecutablesInput() {
    return this._allowRootExecutables;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // separate_executables - computed: false, optional: true, required: false
  private _separateExecutables?: boolean | cdktf.IResolvable; 
  public get separateExecutables() {
    return this.getBooleanAttribute('separate_executables');
  }
  public set separateExecutables(value: boolean | cdktf.IResolvable) {
    this._separateExecutables = value;
  }
  public resetSeparateExecutables() {
    this._separateExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separateExecutablesInput() {
    return this._separateExecutables;
  }
}

export class ContainerRuntimePolicyAllowedExecutablesList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyAllowedExecutables[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyAllowedExecutablesOutputReference {
    return new ContainerRuntimePolicyAllowedExecutablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyAllowedRegistries {
  /**
  * List of allowed registries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#allowed_registries ContainerRuntimePolicy#allowed_registries}
  */
  readonly allowedRegistries?: string[];
  /**
  * Whether allowed registries are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function containerRuntimePolicyAllowedRegistriesToTerraform(struct?: ContainerRuntimePolicyAllowedRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRegistries),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerRuntimePolicyAllowedRegistriesToHclTerraform(struct?: ContainerRuntimePolicyAllowedRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_registries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRegistries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyAllowedRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyAllowedRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRegistries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegistries = this._allowedRegistries;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyAllowedRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRegistries = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRegistries = value.allowedRegistries;
      this._enabled = value.enabled;
    }
  }

  // allowed_registries - computed: false, optional: true, required: false
  private _allowedRegistries?: string[]; 
  public get allowedRegistries() {
    return this.getListAttribute('allowed_registries');
  }
  public set allowedRegistries(value: string[]) {
    this._allowedRegistries = value;
  }
  public resetAllowedRegistries() {
    this._allowedRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegistriesInput() {
    return this._allowedRegistries;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class ContainerRuntimePolicyAllowedRegistriesList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyAllowedRegistries[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyAllowedRegistriesOutputReference {
    return new ContainerRuntimePolicyAllowedRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyAuditing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_all_network ContainerRuntimePolicy#audit_all_network}
  */
  readonly auditAllNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_all_processes ContainerRuntimePolicy#audit_all_processes}
  */
  readonly auditAllProcesses?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_failed_login ContainerRuntimePolicy#audit_failed_login}
  */
  readonly auditFailedLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_os_user_activity ContainerRuntimePolicy#audit_os_user_activity}
  */
  readonly auditOsUserActivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_process_cmdline ContainerRuntimePolicy#audit_process_cmdline}
  */
  readonly auditProcessCmdline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_success_login ContainerRuntimePolicy#audit_success_login}
  */
  readonly auditSuccessLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_user_account_management ContainerRuntimePolicy#audit_user_account_management}
  */
  readonly auditUserAccountManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function containerRuntimePolicyAuditingToTerraform(struct?: ContainerRuntimePolicyAuditingOutputReference | ContainerRuntimePolicyAuditing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_all_network: cdktf.booleanToTerraform(struct!.auditAllNetwork),
    audit_all_processes: cdktf.booleanToTerraform(struct!.auditAllProcesses),
    audit_failed_login: cdktf.booleanToTerraform(struct!.auditFailedLogin),
    audit_os_user_activity: cdktf.booleanToTerraform(struct!.auditOsUserActivity),
    audit_process_cmdline: cdktf.booleanToTerraform(struct!.auditProcessCmdline),
    audit_success_login: cdktf.booleanToTerraform(struct!.auditSuccessLogin),
    audit_user_account_management: cdktf.booleanToTerraform(struct!.auditUserAccountManagement),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerRuntimePolicyAuditingToHclTerraform(struct?: ContainerRuntimePolicyAuditingOutputReference | ContainerRuntimePolicyAuditing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_all_network: {
      value: cdktf.booleanToHclTerraform(struct!.auditAllNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_all_processes: {
      value: cdktf.booleanToHclTerraform(struct!.auditAllProcesses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_failed_login: {
      value: cdktf.booleanToHclTerraform(struct!.auditFailedLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_os_user_activity: {
      value: cdktf.booleanToHclTerraform(struct!.auditOsUserActivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_process_cmdline: {
      value: cdktf.booleanToHclTerraform(struct!.auditProcessCmdline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_success_login: {
      value: cdktf.booleanToHclTerraform(struct!.auditSuccessLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_user_account_management: {
      value: cdktf.booleanToHclTerraform(struct!.auditUserAccountManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyAuditingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyAuditing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditAllNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditAllNetwork = this._auditAllNetwork;
    }
    if (this._auditAllProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditAllProcesses = this._auditAllProcesses;
    }
    if (this._auditFailedLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditFailedLogin = this._auditFailedLogin;
    }
    if (this._auditOsUserActivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditOsUserActivity = this._auditOsUserActivity;
    }
    if (this._auditProcessCmdline !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditProcessCmdline = this._auditProcessCmdline;
    }
    if (this._auditSuccessLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditSuccessLogin = this._auditSuccessLogin;
    }
    if (this._auditUserAccountManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditUserAccountManagement = this._auditUserAccountManagement;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyAuditing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditAllNetwork = undefined;
      this._auditAllProcesses = undefined;
      this._auditFailedLogin = undefined;
      this._auditOsUserActivity = undefined;
      this._auditProcessCmdline = undefined;
      this._auditSuccessLogin = undefined;
      this._auditUserAccountManagement = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditAllNetwork = value.auditAllNetwork;
      this._auditAllProcesses = value.auditAllProcesses;
      this._auditFailedLogin = value.auditFailedLogin;
      this._auditOsUserActivity = value.auditOsUserActivity;
      this._auditProcessCmdline = value.auditProcessCmdline;
      this._auditSuccessLogin = value.auditSuccessLogin;
      this._auditUserAccountManagement = value.auditUserAccountManagement;
      this._enabled = value.enabled;
    }
  }

  // audit_all_network - computed: false, optional: true, required: false
  private _auditAllNetwork?: boolean | cdktf.IResolvable; 
  public get auditAllNetwork() {
    return this.getBooleanAttribute('audit_all_network');
  }
  public set auditAllNetwork(value: boolean | cdktf.IResolvable) {
    this._auditAllNetwork = value;
  }
  public resetAuditAllNetwork() {
    this._auditAllNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAllNetworkInput() {
    return this._auditAllNetwork;
  }

  // audit_all_processes - computed: false, optional: true, required: false
  private _auditAllProcesses?: boolean | cdktf.IResolvable; 
  public get auditAllProcesses() {
    return this.getBooleanAttribute('audit_all_processes');
  }
  public set auditAllProcesses(value: boolean | cdktf.IResolvable) {
    this._auditAllProcesses = value;
  }
  public resetAuditAllProcesses() {
    this._auditAllProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAllProcessesInput() {
    return this._auditAllProcesses;
  }

  // audit_failed_login - computed: false, optional: true, required: false
  private _auditFailedLogin?: boolean | cdktf.IResolvable; 
  public get auditFailedLogin() {
    return this.getBooleanAttribute('audit_failed_login');
  }
  public set auditFailedLogin(value: boolean | cdktf.IResolvable) {
    this._auditFailedLogin = value;
  }
  public resetAuditFailedLogin() {
    this._auditFailedLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFailedLoginInput() {
    return this._auditFailedLogin;
  }

  // audit_os_user_activity - computed: false, optional: true, required: false
  private _auditOsUserActivity?: boolean | cdktf.IResolvable; 
  public get auditOsUserActivity() {
    return this.getBooleanAttribute('audit_os_user_activity');
  }
  public set auditOsUserActivity(value: boolean | cdktf.IResolvable) {
    this._auditOsUserActivity = value;
  }
  public resetAuditOsUserActivity() {
    this._auditOsUserActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditOsUserActivityInput() {
    return this._auditOsUserActivity;
  }

  // audit_process_cmdline - computed: false, optional: true, required: false
  private _auditProcessCmdline?: boolean | cdktf.IResolvable; 
  public get auditProcessCmdline() {
    return this.getBooleanAttribute('audit_process_cmdline');
  }
  public set auditProcessCmdline(value: boolean | cdktf.IResolvable) {
    this._auditProcessCmdline = value;
  }
  public resetAuditProcessCmdline() {
    this._auditProcessCmdline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditProcessCmdlineInput() {
    return this._auditProcessCmdline;
  }

  // audit_success_login - computed: false, optional: true, required: false
  private _auditSuccessLogin?: boolean | cdktf.IResolvable; 
  public get auditSuccessLogin() {
    return this.getBooleanAttribute('audit_success_login');
  }
  public set auditSuccessLogin(value: boolean | cdktf.IResolvable) {
    this._auditSuccessLogin = value;
  }
  public resetAuditSuccessLogin() {
    this._auditSuccessLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditSuccessLoginInput() {
    return this._auditSuccessLogin;
  }

  // audit_user_account_management - computed: false, optional: true, required: false
  private _auditUserAccountManagement?: boolean | cdktf.IResolvable; 
  public get auditUserAccountManagement() {
    return this.getBooleanAttribute('audit_user_account_management');
  }
  public set auditUserAccountManagement(value: boolean | cdktf.IResolvable) {
    this._auditUserAccountManagement = value;
  }
  public resetAuditUserAccountManagement() {
    this._auditUserAccountManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditUserAccountManagementInput() {
    return this._auditUserAccountManagement;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerRuntimePolicyBlacklistedOsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#group_black_list ContainerRuntimePolicy#group_black_list}
  */
  readonly groupBlackList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#user_black_list ContainerRuntimePolicy#user_black_list}
  */
  readonly userBlackList?: string[];
}

export function containerRuntimePolicyBlacklistedOsUsersToTerraform(struct?: ContainerRuntimePolicyBlacklistedOsUsersOutputReference | ContainerRuntimePolicyBlacklistedOsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_black_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBlackList),
    user_black_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userBlackList),
  }
}


export function containerRuntimePolicyBlacklistedOsUsersToHclTerraform(struct?: ContainerRuntimePolicyBlacklistedOsUsersOutputReference | ContainerRuntimePolicyBlacklistedOsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_black_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBlackList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_black_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userBlackList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyBlacklistedOsUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyBlacklistedOsUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBlackList = this._groupBlackList;
    }
    if (this._userBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBlackList = this._userBlackList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyBlacklistedOsUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._groupBlackList = undefined;
      this._userBlackList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._groupBlackList = value.groupBlackList;
      this._userBlackList = value.userBlackList;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_black_list - computed: false, optional: true, required: false
  private _groupBlackList?: string[]; 
  public get groupBlackList() {
    return this.getListAttribute('group_black_list');
  }
  public set groupBlackList(value: string[]) {
    this._groupBlackList = value;
  }
  public resetGroupBlackList() {
    this._groupBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBlackListInput() {
    return this._groupBlackList;
  }

  // user_black_list - computed: false, optional: true, required: false
  private _userBlackList?: string[]; 
  public get userBlackList() {
    return this.getListAttribute('user_black_list');
  }
  public set userBlackList(value: string[]) {
    this._userBlackList = value;
  }
  public resetUserBlackList() {
    this._userBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBlackListInput() {
    return this._userBlackList;
  }
}
export interface ContainerRuntimePolicyBypassScopeScopeVariables {
  /**
  * Variable attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#attribute ContainerRuntimePolicy#attribute}
  */
  readonly attribute?: string;
  /**
  * Variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#value ContainerRuntimePolicy#value}
  */
  readonly value?: string;
}

export function containerRuntimePolicyBypassScopeScopeVariablesToTerraform(struct?: ContainerRuntimePolicyBypassScopeScopeVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerRuntimePolicyBypassScopeScopeVariablesToHclTerraform(struct?: ContainerRuntimePolicyBypassScopeScopeVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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

export class ContainerRuntimePolicyBypassScopeScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyBypassScopeScopeVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyBypassScopeScopeVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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
}

export class ContainerRuntimePolicyBypassScopeScopeVariablesList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyBypassScopeScopeVariables[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyBypassScopeScopeVariablesOutputReference {
    return new ContainerRuntimePolicyBypassScopeScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyBypassScopeScope {
  /**
  * Scope expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#expression ContainerRuntimePolicy#expression}
  */
  readonly expression?: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#variables ContainerRuntimePolicy#variables}
  */
  readonly variables?: ContainerRuntimePolicyBypassScopeScopeVariables[] | cdktf.IResolvable;
}

export function containerRuntimePolicyBypassScopeScopeToTerraform(struct?: ContainerRuntimePolicyBypassScopeScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(containerRuntimePolicyBypassScopeScopeVariablesToTerraform, true)(struct!.variables),
  }
}


export function containerRuntimePolicyBypassScopeScopeToHclTerraform(struct?: ContainerRuntimePolicyBypassScopeScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.listMapperHcl(containerRuntimePolicyBypassScopeScopeVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyBypassScopeScopeVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyBypassScopeScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyBypassScopeScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyBypassScopeScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._variables.internalValue = value.variables;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new ContainerRuntimePolicyBypassScopeScopeVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ContainerRuntimePolicyBypassScopeScopeVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class ContainerRuntimePolicyBypassScopeScopeList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyBypassScopeScope[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyBypassScopeScopeOutputReference {
    return new ContainerRuntimePolicyBypassScopeScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyBypassScope {
  /**
  * Whether bypassing the scope is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#scope ContainerRuntimePolicy#scope}
  */
  readonly scope?: ContainerRuntimePolicyBypassScopeScope[] | cdktf.IResolvable;
}

export function containerRuntimePolicyBypassScopeToTerraform(struct?: ContainerRuntimePolicyBypassScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    scope: cdktf.listMapper(containerRuntimePolicyBypassScopeScopeToTerraform, true)(struct!.scope),
  }
}


export function containerRuntimePolicyBypassScopeToHclTerraform(struct?: ContainerRuntimePolicyBypassScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.listMapperHcl(containerRuntimePolicyBypassScopeScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyBypassScopeScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyBypassScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyBypassScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyBypassScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._scope.internalValue = value.scope;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new ContainerRuntimePolicyBypassScopeScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ContainerRuntimePolicyBypassScopeScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class ContainerRuntimePolicyBypassScopeList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyBypassScope[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyBypassScopeOutputReference {
    return new ContainerRuntimePolicyBypassScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyContainerExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_container_exec ContainerRuntimePolicy#block_container_exec}
  */
  readonly blockContainerExec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#container_exec_proc_white_list ContainerRuntimePolicy#container_exec_proc_white_list}
  */
  readonly containerExecProcWhiteList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#reverse_shell_ip_white_list ContainerRuntimePolicy#reverse_shell_ip_white_list}
  */
  readonly reverseShellIpWhiteList?: string[];
}

export function containerRuntimePolicyContainerExecToTerraform(struct?: ContainerRuntimePolicyContainerExecOutputReference | ContainerRuntimePolicyContainerExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_container_exec: cdktf.booleanToTerraform(struct!.blockContainerExec),
    container_exec_proc_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerExecProcWhiteList),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    reverse_shell_ip_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reverseShellIpWhiteList),
  }
}


export function containerRuntimePolicyContainerExecToHclTerraform(struct?: ContainerRuntimePolicyContainerExecOutputReference | ContainerRuntimePolicyContainerExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_container_exec: {
      value: cdktf.booleanToHclTerraform(struct!.blockContainerExec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_exec_proc_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerExecProcWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reverse_shell_ip_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reverseShellIpWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyContainerExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyContainerExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockContainerExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockContainerExec = this._blockContainerExec;
    }
    if (this._containerExecProcWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerExecProcWhiteList = this._containerExecProcWhiteList;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._reverseShellIpWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseShellIpWhiteList = this._reverseShellIpWhiteList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyContainerExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockContainerExec = undefined;
      this._containerExecProcWhiteList = undefined;
      this._enabled = undefined;
      this._reverseShellIpWhiteList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockContainerExec = value.blockContainerExec;
      this._containerExecProcWhiteList = value.containerExecProcWhiteList;
      this._enabled = value.enabled;
      this._reverseShellIpWhiteList = value.reverseShellIpWhiteList;
    }
  }

  // block_container_exec - computed: false, optional: true, required: false
  private _blockContainerExec?: boolean | cdktf.IResolvable; 
  public get blockContainerExec() {
    return this.getBooleanAttribute('block_container_exec');
  }
  public set blockContainerExec(value: boolean | cdktf.IResolvable) {
    this._blockContainerExec = value;
  }
  public resetBlockContainerExec() {
    this._blockContainerExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockContainerExecInput() {
    return this._blockContainerExec;
  }

  // container_exec_proc_white_list - computed: false, optional: true, required: false
  private _containerExecProcWhiteList?: string[]; 
  public get containerExecProcWhiteList() {
    return this.getListAttribute('container_exec_proc_white_list');
  }
  public set containerExecProcWhiteList(value: string[]) {
    this._containerExecProcWhiteList = value;
  }
  public resetContainerExecProcWhiteList() {
    this._containerExecProcWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerExecProcWhiteListInput() {
    return this._containerExecProcWhiteList;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // reverse_shell_ip_white_list - computed: false, optional: true, required: false
  private _reverseShellIpWhiteList?: string[]; 
  public get reverseShellIpWhiteList() {
    return this.getListAttribute('reverse_shell_ip_white_list');
  }
  public set reverseShellIpWhiteList(value: string[]) {
    this._reverseShellIpWhiteList = value;
  }
  public resetReverseShellIpWhiteList() {
    this._reverseShellIpWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseShellIpWhiteListInput() {
    return this._reverseShellIpWhiteList;
  }
}
export interface ContainerRuntimePolicyDriftPrevention {
  /**
  * Whether drift prevention is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to lockdown execution drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exec_lockdown ContainerRuntimePolicy#exec_lockdown}
  */
  readonly execLockdown?: boolean | cdktf.IResolvable;
  /**
  * List of items in the execution lockdown white list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exec_lockdown_white_list ContainerRuntimePolicy#exec_lockdown_white_list}
  */
  readonly execLockdownWhiteList?: string[];
  /**
  * Whether to lockdown image drift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#image_lockdown ContainerRuntimePolicy#image_lockdown}
  */
  readonly imageLockdown?: boolean | cdktf.IResolvable;
}

export function containerRuntimePolicyDriftPreventionToTerraform(struct?: ContainerRuntimePolicyDriftPrevention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exec_lockdown: cdktf.booleanToTerraform(struct!.execLockdown),
    exec_lockdown_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.execLockdownWhiteList),
    image_lockdown: cdktf.booleanToTerraform(struct!.imageLockdown),
  }
}


export function containerRuntimePolicyDriftPreventionToHclTerraform(struct?: ContainerRuntimePolicyDriftPrevention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exec_lockdown: {
      value: cdktf.booleanToHclTerraform(struct!.execLockdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exec_lockdown_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.execLockdownWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_lockdown: {
      value: cdktf.booleanToHclTerraform(struct!.imageLockdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyDriftPreventionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyDriftPrevention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._execLockdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.execLockdown = this._execLockdown;
    }
    if (this._execLockdownWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.execLockdownWhiteList = this._execLockdownWhiteList;
    }
    if (this._imageLockdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageLockdown = this._imageLockdown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyDriftPrevention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._execLockdown = undefined;
      this._execLockdownWhiteList = undefined;
      this._imageLockdown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._execLockdown = value.execLockdown;
      this._execLockdownWhiteList = value.execLockdownWhiteList;
      this._imageLockdown = value.imageLockdown;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exec_lockdown - computed: false, optional: true, required: false
  private _execLockdown?: boolean | cdktf.IResolvable; 
  public get execLockdown() {
    return this.getBooleanAttribute('exec_lockdown');
  }
  public set execLockdown(value: boolean | cdktf.IResolvable) {
    this._execLockdown = value;
  }
  public resetExecLockdown() {
    this._execLockdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execLockdownInput() {
    return this._execLockdown;
  }

  // exec_lockdown_white_list - computed: false, optional: true, required: false
  private _execLockdownWhiteList?: string[]; 
  public get execLockdownWhiteList() {
    return this.getListAttribute('exec_lockdown_white_list');
  }
  public set execLockdownWhiteList(value: string[]) {
    this._execLockdownWhiteList = value;
  }
  public resetExecLockdownWhiteList() {
    this._execLockdownWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execLockdownWhiteListInput() {
    return this._execLockdownWhiteList;
  }

  // image_lockdown - computed: false, optional: true, required: false
  private _imageLockdown?: boolean | cdktf.IResolvable; 
  public get imageLockdown() {
    return this.getBooleanAttribute('image_lockdown');
  }
  public set imageLockdown(value: boolean | cdktf.IResolvable) {
    this._imageLockdown = value;
  }
  public resetImageLockdown() {
    this._imageLockdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLockdownInput() {
    return this._imageLockdown;
  }
}

export class ContainerRuntimePolicyDriftPreventionList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyDriftPrevention[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyDriftPreventionOutputReference {
    return new ContainerRuntimePolicyDriftPreventionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyExecutableBlacklistStruct {
  /**
  * Whether the executable blacklist is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of blacklisted executables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#executables ContainerRuntimePolicy#executables}
  */
  readonly executables?: string[];
}

export function containerRuntimePolicyExecutableBlacklistStructToTerraform(struct?: ContainerRuntimePolicyExecutableBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    executables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.executables),
  }
}


export function containerRuntimePolicyExecutableBlacklistStructToHclTerraform(struct?: ContainerRuntimePolicyExecutableBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    executables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.executables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyExecutableBlacklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyExecutableBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._executables !== undefined) {
      hasAnyValues = true;
      internalValueResult.executables = this._executables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyExecutableBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._executables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._executables = value.executables;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // executables - computed: false, optional: true, required: false
  private _executables?: string[]; 
  public get executables() {
    return this.getListAttribute('executables');
  }
  public set executables(value: string[]) {
    this._executables = value;
  }
  public resetExecutables() {
    this._executables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executablesInput() {
    return this._executables;
  }
}

export class ContainerRuntimePolicyExecutableBlacklistStructList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyExecutableBlacklistStruct[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyExecutableBlacklistStructOutputReference {
    return new ContainerRuntimePolicyExecutableBlacklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyFailedKubernetesChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#failed_checks ContainerRuntimePolicy#failed_checks}
  */
  readonly failedChecks?: string[];
}

export function containerRuntimePolicyFailedKubernetesChecksToTerraform(struct?: ContainerRuntimePolicyFailedKubernetesChecksOutputReference | ContainerRuntimePolicyFailedKubernetesChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    failed_checks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failedChecks),
  }
}


export function containerRuntimePolicyFailedKubernetesChecksToHclTerraform(struct?: ContainerRuntimePolicyFailedKubernetesChecksOutputReference | ContainerRuntimePolicyFailedKubernetesChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failed_checks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failedChecks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyFailedKubernetesChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyFailedKubernetesChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._failedChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedChecks = this._failedChecks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyFailedKubernetesChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._failedChecks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._failedChecks = value.failedChecks;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // failed_checks - computed: false, optional: true, required: false
  private _failedChecks?: string[]; 
  public get failedChecks() {
    return this.getListAttribute('failed_checks');
  }
  public set failedChecks(value: string[]) {
    this._failedChecks = value;
  }
  public resetFailedChecks() {
    this._failedChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedChecksInput() {
    return this._failedChecks;
  }
}
export interface ContainerRuntimePolicyFileBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_files_processes ContainerRuntimePolicy#block_files_processes}
  */
  readonly blockFilesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_files_users ContainerRuntimePolicy#block_files_users}
  */
  readonly blockFilesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_block_files ContainerRuntimePolicy#exceptional_block_files}
  */
  readonly exceptionalBlockFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_block_files_processes ContainerRuntimePolicy#exceptional_block_files_processes}
  */
  readonly exceptionalBlockFilesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_block_files_users ContainerRuntimePolicy#exceptional_block_files_users}
  */
  readonly exceptionalBlockFilesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#filename_block_list ContainerRuntimePolicy#filename_block_list}
  */
  readonly filenameBlockList?: string[];
}

export function containerRuntimePolicyFileBlockToTerraform(struct?: ContainerRuntimePolicyFileBlockOutputReference | ContainerRuntimePolicyFileBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockFilesProcesses),
    block_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockFilesUsers),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_block_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockFiles),
    exceptional_block_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockFilesProcesses),
    exceptional_block_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockFilesUsers),
    filename_block_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filenameBlockList),
  }
}


export function containerRuntimePolicyFileBlockToHclTerraform(struct?: ContainerRuntimePolicyFileBlockOutputReference | ContainerRuntimePolicyFileBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceptional_block_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_block_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_block_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filename_block_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filenameBlockList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyFileBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyFileBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockFilesProcesses = this._blockFilesProcesses;
    }
    if (this._blockFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockFilesUsers = this._blockFilesUsers;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalBlockFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockFiles = this._exceptionalBlockFiles;
    }
    if (this._exceptionalBlockFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockFilesProcesses = this._exceptionalBlockFilesProcesses;
    }
    if (this._exceptionalBlockFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockFilesUsers = this._exceptionalBlockFilesUsers;
    }
    if (this._filenameBlockList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameBlockList = this._filenameBlockList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyFileBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockFilesProcesses = undefined;
      this._blockFilesUsers = undefined;
      this._enabled = undefined;
      this._exceptionalBlockFiles = undefined;
      this._exceptionalBlockFilesProcesses = undefined;
      this._exceptionalBlockFilesUsers = undefined;
      this._filenameBlockList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockFilesProcesses = value.blockFilesProcesses;
      this._blockFilesUsers = value.blockFilesUsers;
      this._enabled = value.enabled;
      this._exceptionalBlockFiles = value.exceptionalBlockFiles;
      this._exceptionalBlockFilesProcesses = value.exceptionalBlockFilesProcesses;
      this._exceptionalBlockFilesUsers = value.exceptionalBlockFilesUsers;
      this._filenameBlockList = value.filenameBlockList;
    }
  }

  // block_files_processes - computed: false, optional: true, required: false
  private _blockFilesProcesses?: string[]; 
  public get blockFilesProcesses() {
    return this.getListAttribute('block_files_processes');
  }
  public set blockFilesProcesses(value: string[]) {
    this._blockFilesProcesses = value;
  }
  public resetBlockFilesProcesses() {
    this._blockFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockFilesProcessesInput() {
    return this._blockFilesProcesses;
  }

  // block_files_users - computed: false, optional: true, required: false
  private _blockFilesUsers?: string[]; 
  public get blockFilesUsers() {
    return this.getListAttribute('block_files_users');
  }
  public set blockFilesUsers(value: string[]) {
    this._blockFilesUsers = value;
  }
  public resetBlockFilesUsers() {
    this._blockFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockFilesUsersInput() {
    return this._blockFilesUsers;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exceptional_block_files - computed: false, optional: true, required: false
  private _exceptionalBlockFiles?: string[]; 
  public get exceptionalBlockFiles() {
    return this.getListAttribute('exceptional_block_files');
  }
  public set exceptionalBlockFiles(value: string[]) {
    this._exceptionalBlockFiles = value;
  }
  public resetExceptionalBlockFiles() {
    this._exceptionalBlockFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockFilesInput() {
    return this._exceptionalBlockFiles;
  }

  // exceptional_block_files_processes - computed: false, optional: true, required: false
  private _exceptionalBlockFilesProcesses?: string[]; 
  public get exceptionalBlockFilesProcesses() {
    return this.getListAttribute('exceptional_block_files_processes');
  }
  public set exceptionalBlockFilesProcesses(value: string[]) {
    this._exceptionalBlockFilesProcesses = value;
  }
  public resetExceptionalBlockFilesProcesses() {
    this._exceptionalBlockFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockFilesProcessesInput() {
    return this._exceptionalBlockFilesProcesses;
  }

  // exceptional_block_files_users - computed: false, optional: true, required: false
  private _exceptionalBlockFilesUsers?: string[]; 
  public get exceptionalBlockFilesUsers() {
    return this.getListAttribute('exceptional_block_files_users');
  }
  public set exceptionalBlockFilesUsers(value: string[]) {
    this._exceptionalBlockFilesUsers = value;
  }
  public resetExceptionalBlockFilesUsers() {
    this._exceptionalBlockFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockFilesUsersInput() {
    return this._exceptionalBlockFilesUsers;
  }

  // filename_block_list - computed: false, optional: true, required: false
  private _filenameBlockList?: string[]; 
  public get filenameBlockList() {
    return this.getListAttribute('filename_block_list');
  }
  public set filenameBlockList(value: string[]) {
    this._filenameBlockList = value;
  }
  public resetFilenameBlockList() {
    this._filenameBlockList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameBlockListInput() {
    return this._filenameBlockList;
  }
}
export interface ContainerRuntimePolicyFileIntegrityMonitoring {
  /**
  * If true, file integrity monitoring is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of paths to be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_monitored_files ContainerRuntimePolicy#exceptional_monitored_files}
  */
  readonly exceptionalMonitoredFiles?: string[];
  /**
  * List of processes to be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_monitored_files_processes ContainerRuntimePolicy#exceptional_monitored_files_processes}
  */
  readonly exceptionalMonitoredFilesProcesses?: string[];
  /**
  * List of users to be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_monitored_files_users ContainerRuntimePolicy#exceptional_monitored_files_users}
  */
  readonly exceptionalMonitoredFilesUsers?: string[];
  /**
  * List of paths to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_files ContainerRuntimePolicy#monitored_files}
  */
  readonly monitoredFiles?: string[];
  /**
  * Whether to monitor file attribute operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_files_attributes ContainerRuntimePolicy#monitored_files_attributes}
  */
  readonly monitoredFilesAttributes?: boolean | cdktf.IResolvable;
  /**
  * Whether to monitor file create operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_files_create ContainerRuntimePolicy#monitored_files_create}
  */
  readonly monitoredFilesCreate?: boolean | cdktf.IResolvable;
  /**
  * Whether to monitor file delete operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_files_delete ContainerRuntimePolicy#monitored_files_delete}
  */
  readonly monitoredFilesDelete?: boolean | cdktf.IResolvable;
  /**
  * Whether to monitor file modify operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_files_modify ContainerRuntimePolicy#monitored_files_modify}
  */
  readonly monitoredFilesModify?: boolean | cdktf.IResolvable;
  /**
  * List of processes associated with monitored files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_files_processes ContainerRuntimePolicy#monitored_files_processes}
  */
  readonly monitoredFilesProcesses?: string[];
  /**
  * Whether to monitor file read operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_files_read ContainerRuntimePolicy#monitored_files_read}
  */
  readonly monitoredFilesRead?: boolean | cdktf.IResolvable;
  /**
  * List of users associated with monitored files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_files_users ContainerRuntimePolicy#monitored_files_users}
  */
  readonly monitoredFilesUsers?: string[];
}

export function containerRuntimePolicyFileIntegrityMonitoringToTerraform(struct?: ContainerRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_monitored_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalMonitoredFiles),
    exceptional_monitored_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalMonitoredFilesProcesses),
    exceptional_monitored_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalMonitoredFilesUsers),
    monitored_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoredFiles),
    monitored_files_attributes: cdktf.booleanToTerraform(struct!.monitoredFilesAttributes),
    monitored_files_create: cdktf.booleanToTerraform(struct!.monitoredFilesCreate),
    monitored_files_delete: cdktf.booleanToTerraform(struct!.monitoredFilesDelete),
    monitored_files_modify: cdktf.booleanToTerraform(struct!.monitoredFilesModify),
    monitored_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoredFilesProcesses),
    monitored_files_read: cdktf.booleanToTerraform(struct!.monitoredFilesRead),
    monitored_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoredFilesUsers),
  }
}


export function containerRuntimePolicyFileIntegrityMonitoringToHclTerraform(struct?: ContainerRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceptional_monitored_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalMonitoredFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_monitored_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalMonitoredFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_monitored_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalMonitoredFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitored_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoredFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitored_files_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_create: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_delete: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_modify: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesModify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoredFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitored_files_read: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesRead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoredFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyFileIntegrityMonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalMonitoredFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalMonitoredFiles = this._exceptionalMonitoredFiles;
    }
    if (this._exceptionalMonitoredFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalMonitoredFilesProcesses = this._exceptionalMonitoredFilesProcesses;
    }
    if (this._exceptionalMonitoredFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalMonitoredFilesUsers = this._exceptionalMonitoredFilesUsers;
    }
    if (this._monitoredFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFiles = this._monitoredFiles;
    }
    if (this._monitoredFilesAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesAttributes = this._monitoredFilesAttributes;
    }
    if (this._monitoredFilesCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesCreate = this._monitoredFilesCreate;
    }
    if (this._monitoredFilesDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesDelete = this._monitoredFilesDelete;
    }
    if (this._monitoredFilesModify !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesModify = this._monitoredFilesModify;
    }
    if (this._monitoredFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesProcesses = this._monitoredFilesProcesses;
    }
    if (this._monitoredFilesRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesRead = this._monitoredFilesRead;
    }
    if (this._monitoredFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesUsers = this._monitoredFilesUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._exceptionalMonitoredFiles = undefined;
      this._exceptionalMonitoredFilesProcesses = undefined;
      this._exceptionalMonitoredFilesUsers = undefined;
      this._monitoredFiles = undefined;
      this._monitoredFilesAttributes = undefined;
      this._monitoredFilesCreate = undefined;
      this._monitoredFilesDelete = undefined;
      this._monitoredFilesModify = undefined;
      this._monitoredFilesProcesses = undefined;
      this._monitoredFilesRead = undefined;
      this._monitoredFilesUsers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._exceptionalMonitoredFiles = value.exceptionalMonitoredFiles;
      this._exceptionalMonitoredFilesProcesses = value.exceptionalMonitoredFilesProcesses;
      this._exceptionalMonitoredFilesUsers = value.exceptionalMonitoredFilesUsers;
      this._monitoredFiles = value.monitoredFiles;
      this._monitoredFilesAttributes = value.monitoredFilesAttributes;
      this._monitoredFilesCreate = value.monitoredFilesCreate;
      this._monitoredFilesDelete = value.monitoredFilesDelete;
      this._monitoredFilesModify = value.monitoredFilesModify;
      this._monitoredFilesProcesses = value.monitoredFilesProcesses;
      this._monitoredFilesRead = value.monitoredFilesRead;
      this._monitoredFilesUsers = value.monitoredFilesUsers;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exceptional_monitored_files - computed: false, optional: true, required: false
  private _exceptionalMonitoredFiles?: string[]; 
  public get exceptionalMonitoredFiles() {
    return this.getListAttribute('exceptional_monitored_files');
  }
  public set exceptionalMonitoredFiles(value: string[]) {
    this._exceptionalMonitoredFiles = value;
  }
  public resetExceptionalMonitoredFiles() {
    this._exceptionalMonitoredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredFilesInput() {
    return this._exceptionalMonitoredFiles;
  }

  // exceptional_monitored_files_processes - computed: false, optional: true, required: false
  private _exceptionalMonitoredFilesProcesses?: string[]; 
  public get exceptionalMonitoredFilesProcesses() {
    return this.getListAttribute('exceptional_monitored_files_processes');
  }
  public set exceptionalMonitoredFilesProcesses(value: string[]) {
    this._exceptionalMonitoredFilesProcesses = value;
  }
  public resetExceptionalMonitoredFilesProcesses() {
    this._exceptionalMonitoredFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredFilesProcessesInput() {
    return this._exceptionalMonitoredFilesProcesses;
  }

  // exceptional_monitored_files_users - computed: false, optional: true, required: false
  private _exceptionalMonitoredFilesUsers?: string[]; 
  public get exceptionalMonitoredFilesUsers() {
    return this.getListAttribute('exceptional_monitored_files_users');
  }
  public set exceptionalMonitoredFilesUsers(value: string[]) {
    this._exceptionalMonitoredFilesUsers = value;
  }
  public resetExceptionalMonitoredFilesUsers() {
    this._exceptionalMonitoredFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredFilesUsersInput() {
    return this._exceptionalMonitoredFilesUsers;
  }

  // monitored_files - computed: false, optional: true, required: false
  private _monitoredFiles?: string[]; 
  public get monitoredFiles() {
    return this.getListAttribute('monitored_files');
  }
  public set monitoredFiles(value: string[]) {
    this._monitoredFiles = value;
  }
  public resetMonitoredFiles() {
    this._monitoredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesInput() {
    return this._monitoredFiles;
  }

  // monitored_files_attributes - computed: false, optional: true, required: false
  private _monitoredFilesAttributes?: boolean | cdktf.IResolvable; 
  public get monitoredFilesAttributes() {
    return this.getBooleanAttribute('monitored_files_attributes');
  }
  public set monitoredFilesAttributes(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesAttributes = value;
  }
  public resetMonitoredFilesAttributes() {
    this._monitoredFilesAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesAttributesInput() {
    return this._monitoredFilesAttributes;
  }

  // monitored_files_create - computed: false, optional: true, required: false
  private _monitoredFilesCreate?: boolean | cdktf.IResolvable; 
  public get monitoredFilesCreate() {
    return this.getBooleanAttribute('monitored_files_create');
  }
  public set monitoredFilesCreate(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesCreate = value;
  }
  public resetMonitoredFilesCreate() {
    this._monitoredFilesCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesCreateInput() {
    return this._monitoredFilesCreate;
  }

  // monitored_files_delete - computed: false, optional: true, required: false
  private _monitoredFilesDelete?: boolean | cdktf.IResolvable; 
  public get monitoredFilesDelete() {
    return this.getBooleanAttribute('monitored_files_delete');
  }
  public set monitoredFilesDelete(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesDelete = value;
  }
  public resetMonitoredFilesDelete() {
    this._monitoredFilesDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesDeleteInput() {
    return this._monitoredFilesDelete;
  }

  // monitored_files_modify - computed: false, optional: true, required: false
  private _monitoredFilesModify?: boolean | cdktf.IResolvable; 
  public get monitoredFilesModify() {
    return this.getBooleanAttribute('monitored_files_modify');
  }
  public set monitoredFilesModify(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesModify = value;
  }
  public resetMonitoredFilesModify() {
    this._monitoredFilesModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesModifyInput() {
    return this._monitoredFilesModify;
  }

  // monitored_files_processes - computed: false, optional: true, required: false
  private _monitoredFilesProcesses?: string[]; 
  public get monitoredFilesProcesses() {
    return this.getListAttribute('monitored_files_processes');
  }
  public set monitoredFilesProcesses(value: string[]) {
    this._monitoredFilesProcesses = value;
  }
  public resetMonitoredFilesProcesses() {
    this._monitoredFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesProcessesInput() {
    return this._monitoredFilesProcesses;
  }

  // monitored_files_read - computed: false, optional: true, required: false
  private _monitoredFilesRead?: boolean | cdktf.IResolvable; 
  public get monitoredFilesRead() {
    return this.getBooleanAttribute('monitored_files_read');
  }
  public set monitoredFilesRead(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesRead = value;
  }
  public resetMonitoredFilesRead() {
    this._monitoredFilesRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesReadInput() {
    return this._monitoredFilesRead;
  }

  // monitored_files_users - computed: false, optional: true, required: false
  private _monitoredFilesUsers?: string[]; 
  public get monitoredFilesUsers() {
    return this.getListAttribute('monitored_files_users');
  }
  public set monitoredFilesUsers(value: string[]) {
    this._monitoredFilesUsers = value;
  }
  public resetMonitoredFilesUsers() {
    this._monitoredFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesUsersInput() {
    return this._monitoredFilesUsers;
  }
}

export class ContainerRuntimePolicyFileIntegrityMonitoringList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyFileIntegrityMonitoring[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyFileIntegrityMonitoringOutputReference {
    return new ContainerRuntimePolicyFileIntegrityMonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyLimitContainerPrivileges {
  /**
  * Whether to block adding capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_add_capabilities ContainerRuntimePolicy#block_add_capabilities}
  */
  readonly blockAddCapabilities?: boolean | cdktf.IResolvable;
  /**
  * Whether container privilege limitations are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit IPC-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#ipcmode ContainerRuntimePolicy#ipcmode}
  */
  readonly ipcmode?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit network-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#netmode ContainerRuntimePolicy#netmode}
  */
  readonly netmode?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit process-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#pidmode ContainerRuntimePolicy#pidmode}
  */
  readonly pidmode?: boolean | cdktf.IResolvable;
  /**
  * Whether to prevent low port binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#prevent_low_port_binding ContainerRuntimePolicy#prevent_low_port_binding}
  */
  readonly preventLowPortBinding?: boolean | cdktf.IResolvable;
  /**
  * Whether to prevent the use of the root user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#prevent_root_user ContainerRuntimePolicy#prevent_root_user}
  */
  readonly preventRootUser?: boolean | cdktf.IResolvable;
  /**
  * Whether the container is run in privileged mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#privileged ContainerRuntimePolicy#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Whether to use the host user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#use_host_user ContainerRuntimePolicy#use_host_user}
  */
  readonly useHostUser?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit user-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#usermode ContainerRuntimePolicy#usermode}
  */
  readonly usermode?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit UTS-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#utsmode ContainerRuntimePolicy#utsmode}
  */
  readonly utsmode?: boolean | cdktf.IResolvable;
}

export function containerRuntimePolicyLimitContainerPrivilegesToTerraform(struct?: ContainerRuntimePolicyLimitContainerPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_add_capabilities: cdktf.booleanToTerraform(struct!.blockAddCapabilities),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ipcmode: cdktf.booleanToTerraform(struct!.ipcmode),
    netmode: cdktf.booleanToTerraform(struct!.netmode),
    pidmode: cdktf.booleanToTerraform(struct!.pidmode),
    prevent_low_port_binding: cdktf.booleanToTerraform(struct!.preventLowPortBinding),
    prevent_root_user: cdktf.booleanToTerraform(struct!.preventRootUser),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    use_host_user: cdktf.booleanToTerraform(struct!.useHostUser),
    usermode: cdktf.booleanToTerraform(struct!.usermode),
    utsmode: cdktf.booleanToTerraform(struct!.utsmode),
  }
}


export function containerRuntimePolicyLimitContainerPrivilegesToHclTerraform(struct?: ContainerRuntimePolicyLimitContainerPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_add_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.blockAddCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipcmode: {
      value: cdktf.booleanToHclTerraform(struct!.ipcmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netmode: {
      value: cdktf.booleanToHclTerraform(struct!.netmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pidmode: {
      value: cdktf.booleanToHclTerraform(struct!.pidmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prevent_low_port_binding: {
      value: cdktf.booleanToHclTerraform(struct!.preventLowPortBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prevent_root_user: {
      value: cdktf.booleanToHclTerraform(struct!.preventRootUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_host_user: {
      value: cdktf.booleanToHclTerraform(struct!.useHostUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usermode: {
      value: cdktf.booleanToHclTerraform(struct!.usermode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    utsmode: {
      value: cdktf.booleanToHclTerraform(struct!.utsmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyLimitContainerPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyLimitContainerPrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockAddCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAddCapabilities = this._blockAddCapabilities;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipcmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipcmode = this._ipcmode;
    }
    if (this._netmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmode = this._netmode;
    }
    if (this._pidmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidmode = this._pidmode;
    }
    if (this._preventLowPortBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventLowPortBinding = this._preventLowPortBinding;
    }
    if (this._preventRootUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventRootUser = this._preventRootUser;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._useHostUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostUser = this._useHostUser;
    }
    if (this._usermode !== undefined) {
      hasAnyValues = true;
      internalValueResult.usermode = this._usermode;
    }
    if (this._utsmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.utsmode = this._utsmode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyLimitContainerPrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockAddCapabilities = undefined;
      this._enabled = undefined;
      this._ipcmode = undefined;
      this._netmode = undefined;
      this._pidmode = undefined;
      this._preventLowPortBinding = undefined;
      this._preventRootUser = undefined;
      this._privileged = undefined;
      this._useHostUser = undefined;
      this._usermode = undefined;
      this._utsmode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockAddCapabilities = value.blockAddCapabilities;
      this._enabled = value.enabled;
      this._ipcmode = value.ipcmode;
      this._netmode = value.netmode;
      this._pidmode = value.pidmode;
      this._preventLowPortBinding = value.preventLowPortBinding;
      this._preventRootUser = value.preventRootUser;
      this._privileged = value.privileged;
      this._useHostUser = value.useHostUser;
      this._usermode = value.usermode;
      this._utsmode = value.utsmode;
    }
  }

  // block_add_capabilities - computed: false, optional: true, required: false
  private _blockAddCapabilities?: boolean | cdktf.IResolvable; 
  public get blockAddCapabilities() {
    return this.getBooleanAttribute('block_add_capabilities');
  }
  public set blockAddCapabilities(value: boolean | cdktf.IResolvable) {
    this._blockAddCapabilities = value;
  }
  public resetBlockAddCapabilities() {
    this._blockAddCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAddCapabilitiesInput() {
    return this._blockAddCapabilities;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ipcmode - computed: false, optional: true, required: false
  private _ipcmode?: boolean | cdktf.IResolvable; 
  public get ipcmode() {
    return this.getBooleanAttribute('ipcmode');
  }
  public set ipcmode(value: boolean | cdktf.IResolvable) {
    this._ipcmode = value;
  }
  public resetIpcmode() {
    this._ipcmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcmodeInput() {
    return this._ipcmode;
  }

  // netmode - computed: false, optional: true, required: false
  private _netmode?: boolean | cdktf.IResolvable; 
  public get netmode() {
    return this.getBooleanAttribute('netmode');
  }
  public set netmode(value: boolean | cdktf.IResolvable) {
    this._netmode = value;
  }
  public resetNetmode() {
    this._netmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmodeInput() {
    return this._netmode;
  }

  // pidmode - computed: false, optional: true, required: false
  private _pidmode?: boolean | cdktf.IResolvable; 
  public get pidmode() {
    return this.getBooleanAttribute('pidmode');
  }
  public set pidmode(value: boolean | cdktf.IResolvable) {
    this._pidmode = value;
  }
  public resetPidmode() {
    this._pidmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidmodeInput() {
    return this._pidmode;
  }

  // prevent_low_port_binding - computed: false, optional: true, required: false
  private _preventLowPortBinding?: boolean | cdktf.IResolvable; 
  public get preventLowPortBinding() {
    return this.getBooleanAttribute('prevent_low_port_binding');
  }
  public set preventLowPortBinding(value: boolean | cdktf.IResolvable) {
    this._preventLowPortBinding = value;
  }
  public resetPreventLowPortBinding() {
    this._preventLowPortBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventLowPortBindingInput() {
    return this._preventLowPortBinding;
  }

  // prevent_root_user - computed: false, optional: true, required: false
  private _preventRootUser?: boolean | cdktf.IResolvable; 
  public get preventRootUser() {
    return this.getBooleanAttribute('prevent_root_user');
  }
  public set preventRootUser(value: boolean | cdktf.IResolvable) {
    this._preventRootUser = value;
  }
  public resetPreventRootUser() {
    this._preventRootUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventRootUserInput() {
    return this._preventRootUser;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // use_host_user - computed: false, optional: true, required: false
  private _useHostUser?: boolean | cdktf.IResolvable; 
  public get useHostUser() {
    return this.getBooleanAttribute('use_host_user');
  }
  public set useHostUser(value: boolean | cdktf.IResolvable) {
    this._useHostUser = value;
  }
  public resetUseHostUser() {
    this._useHostUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostUserInput() {
    return this._useHostUser;
  }

  // usermode - computed: false, optional: true, required: false
  private _usermode?: boolean | cdktf.IResolvable; 
  public get usermode() {
    return this.getBooleanAttribute('usermode');
  }
  public set usermode(value: boolean | cdktf.IResolvable) {
    this._usermode = value;
  }
  public resetUsermode() {
    this._usermode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usermodeInput() {
    return this._usermode;
  }

  // utsmode - computed: false, optional: true, required: false
  private _utsmode?: boolean | cdktf.IResolvable; 
  public get utsmode() {
    return this.getBooleanAttribute('utsmode');
  }
  public set utsmode(value: boolean | cdktf.IResolvable) {
    this._utsmode = value;
  }
  public resetUtsmode() {
    this._utsmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utsmodeInput() {
    return this._utsmode;
  }
}

export class ContainerRuntimePolicyLimitContainerPrivilegesList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyLimitContainerPrivileges[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyLimitContainerPrivilegesOutputReference {
    return new ContainerRuntimePolicyLimitContainerPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyLinuxCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#remove_linux_capabilities ContainerRuntimePolicy#remove_linux_capabilities}
  */
  readonly removeLinuxCapabilities?: string[];
}

export function containerRuntimePolicyLinuxCapabilitiesToTerraform(struct?: ContainerRuntimePolicyLinuxCapabilitiesOutputReference | ContainerRuntimePolicyLinuxCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    remove_linux_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeLinuxCapabilities),
  }
}


export function containerRuntimePolicyLinuxCapabilitiesToHclTerraform(struct?: ContainerRuntimePolicyLinuxCapabilitiesOutputReference | ContainerRuntimePolicyLinuxCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_linux_capabilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeLinuxCapabilities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyLinuxCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyLinuxCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._removeLinuxCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeLinuxCapabilities = this._removeLinuxCapabilities;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyLinuxCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._removeLinuxCapabilities = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._removeLinuxCapabilities = value.removeLinuxCapabilities;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // remove_linux_capabilities - computed: false, optional: true, required: false
  private _removeLinuxCapabilities?: string[]; 
  public get removeLinuxCapabilities() {
    return this.getListAttribute('remove_linux_capabilities');
  }
  public set removeLinuxCapabilities(value: string[]) {
    this._removeLinuxCapabilities = value;
  }
  public resetRemoveLinuxCapabilities() {
    this._removeLinuxCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeLinuxCapabilitiesInput() {
    return this._removeLinuxCapabilities;
  }
}
export interface ContainerRuntimePolicyMalwareScanOptions {
  /**
  * Set Action, Defaults to 'Alert' when empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#action ContainerRuntimePolicy#action}
  */
  readonly action?: string;
  /**
  * Defines if enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of registry paths to be excluded from being protected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exclude_directories ContainerRuntimePolicy#exclude_directories}
  */
  readonly excludeDirectories?: string[];
  /**
  * List of registry processes to be excluded from being protected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exclude_processes ContainerRuntimePolicy#exclude_processes}
  */
  readonly excludeProcesses?: string[];
  /**
  * Whether to enable file forensic collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#file_forensic_collection ContainerRuntimePolicy#file_forensic_collection}
  */
  readonly fileForensicCollection?: boolean | cdktf.IResolvable;
  /**
  * List of registry paths to be excluded from being protected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#include_directories ContainerRuntimePolicy#include_directories}
  */
  readonly includeDirectories?: string[];
}

export function containerRuntimePolicyMalwareScanOptionsToTerraform(struct?: ContainerRuntimePolicyMalwareScanOptionsOutputReference | ContainerRuntimePolicyMalwareScanOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_directories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeDirectories),
    exclude_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeProcesses),
    file_forensic_collection: cdktf.booleanToTerraform(struct!.fileForensicCollection),
    include_directories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeDirectories),
  }
}


export function containerRuntimePolicyMalwareScanOptionsToHclTerraform(struct?: ContainerRuntimePolicyMalwareScanOptionsOutputReference | ContainerRuntimePolicyMalwareScanOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_directories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeDirectories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_forensic_collection: {
      value: cdktf.booleanToHclTerraform(struct!.fileForensicCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_directories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeDirectories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyMalwareScanOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyMalwareScanOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludeDirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeDirectories = this._excludeDirectories;
    }
    if (this._excludeProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeProcesses = this._excludeProcesses;
    }
    if (this._fileForensicCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileForensicCollection = this._fileForensicCollection;
    }
    if (this._includeDirectories !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDirectories = this._includeDirectories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyMalwareScanOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._enabled = undefined;
      this._excludeDirectories = undefined;
      this._excludeProcesses = undefined;
      this._fileForensicCollection = undefined;
      this._includeDirectories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._enabled = value.enabled;
      this._excludeDirectories = value.excludeDirectories;
      this._excludeProcesses = value.excludeProcesses;
      this._fileForensicCollection = value.fileForensicCollection;
      this._includeDirectories = value.includeDirectories;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_directories - computed: false, optional: true, required: false
  private _excludeDirectories?: string[]; 
  public get excludeDirectories() {
    return this.getListAttribute('exclude_directories');
  }
  public set excludeDirectories(value: string[]) {
    this._excludeDirectories = value;
  }
  public resetExcludeDirectories() {
    this._excludeDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeDirectoriesInput() {
    return this._excludeDirectories;
  }

  // exclude_processes - computed: false, optional: true, required: false
  private _excludeProcesses?: string[]; 
  public get excludeProcesses() {
    return this.getListAttribute('exclude_processes');
  }
  public set excludeProcesses(value: string[]) {
    this._excludeProcesses = value;
  }
  public resetExcludeProcesses() {
    this._excludeProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeProcessesInput() {
    return this._excludeProcesses;
  }

  // file_forensic_collection - computed: false, optional: true, required: false
  private _fileForensicCollection?: boolean | cdktf.IResolvable; 
  public get fileForensicCollection() {
    return this.getBooleanAttribute('file_forensic_collection');
  }
  public set fileForensicCollection(value: boolean | cdktf.IResolvable) {
    this._fileForensicCollection = value;
  }
  public resetFileForensicCollection() {
    this._fileForensicCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileForensicCollectionInput() {
    return this._fileForensicCollection;
  }

  // include_directories - computed: true, optional: true, required: false
  private _includeDirectories?: string[]; 
  public get includeDirectories() {
    return this.getListAttribute('include_directories');
  }
  public set includeDirectories(value: string[]) {
    this._includeDirectories = value;
  }
  public resetIncludeDirectories() {
    this._includeDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDirectoriesInput() {
    return this._includeDirectories;
  }
}
export interface ContainerRuntimePolicyPackageBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_packages_processes ContainerRuntimePolicy#block_packages_processes}
  */
  readonly blockPackagesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_packages_users ContainerRuntimePolicy#block_packages_users}
  */
  readonly blockPackagesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_block_packages_files ContainerRuntimePolicy#exceptional_block_packages_files}
  */
  readonly exceptionalBlockPackagesFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_block_packages_processes ContainerRuntimePolicy#exceptional_block_packages_processes}
  */
  readonly exceptionalBlockPackagesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_block_packages_users ContainerRuntimePolicy#exceptional_block_packages_users}
  */
  readonly exceptionalBlockPackagesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#packages_black_list ContainerRuntimePolicy#packages_black_list}
  */
  readonly packagesBlackList?: string[];
}

export function containerRuntimePolicyPackageBlockToTerraform(struct?: ContainerRuntimePolicyPackageBlockOutputReference | ContainerRuntimePolicyPackageBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_packages_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockPackagesProcesses),
    block_packages_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockPackagesUsers),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_block_packages_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockPackagesFiles),
    exceptional_block_packages_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockPackagesProcesses),
    exceptional_block_packages_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockPackagesUsers),
    packages_black_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packagesBlackList),
  }
}


export function containerRuntimePolicyPackageBlockToHclTerraform(struct?: ContainerRuntimePolicyPackageBlockOutputReference | ContainerRuntimePolicyPackageBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_packages_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockPackagesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_packages_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockPackagesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceptional_block_packages_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockPackagesFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_block_packages_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockPackagesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_block_packages_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockPackagesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packages_black_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packagesBlackList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyPackageBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyPackageBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockPackagesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPackagesProcesses = this._blockPackagesProcesses;
    }
    if (this._blockPackagesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPackagesUsers = this._blockPackagesUsers;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalBlockPackagesFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockPackagesFiles = this._exceptionalBlockPackagesFiles;
    }
    if (this._exceptionalBlockPackagesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockPackagesProcesses = this._exceptionalBlockPackagesProcesses;
    }
    if (this._exceptionalBlockPackagesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockPackagesUsers = this._exceptionalBlockPackagesUsers;
    }
    if (this._packagesBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.packagesBlackList = this._packagesBlackList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyPackageBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockPackagesProcesses = undefined;
      this._blockPackagesUsers = undefined;
      this._enabled = undefined;
      this._exceptionalBlockPackagesFiles = undefined;
      this._exceptionalBlockPackagesProcesses = undefined;
      this._exceptionalBlockPackagesUsers = undefined;
      this._packagesBlackList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockPackagesProcesses = value.blockPackagesProcesses;
      this._blockPackagesUsers = value.blockPackagesUsers;
      this._enabled = value.enabled;
      this._exceptionalBlockPackagesFiles = value.exceptionalBlockPackagesFiles;
      this._exceptionalBlockPackagesProcesses = value.exceptionalBlockPackagesProcesses;
      this._exceptionalBlockPackagesUsers = value.exceptionalBlockPackagesUsers;
      this._packagesBlackList = value.packagesBlackList;
    }
  }

  // block_packages_processes - computed: false, optional: true, required: false
  private _blockPackagesProcesses?: string[]; 
  public get blockPackagesProcesses() {
    return this.getListAttribute('block_packages_processes');
  }
  public set blockPackagesProcesses(value: string[]) {
    this._blockPackagesProcesses = value;
  }
  public resetBlockPackagesProcesses() {
    this._blockPackagesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPackagesProcessesInput() {
    return this._blockPackagesProcesses;
  }

  // block_packages_users - computed: false, optional: true, required: false
  private _blockPackagesUsers?: string[]; 
  public get blockPackagesUsers() {
    return this.getListAttribute('block_packages_users');
  }
  public set blockPackagesUsers(value: string[]) {
    this._blockPackagesUsers = value;
  }
  public resetBlockPackagesUsers() {
    this._blockPackagesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPackagesUsersInput() {
    return this._blockPackagesUsers;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exceptional_block_packages_files - computed: false, optional: true, required: false
  private _exceptionalBlockPackagesFiles?: string[]; 
  public get exceptionalBlockPackagesFiles() {
    return this.getListAttribute('exceptional_block_packages_files');
  }
  public set exceptionalBlockPackagesFiles(value: string[]) {
    this._exceptionalBlockPackagesFiles = value;
  }
  public resetExceptionalBlockPackagesFiles() {
    this._exceptionalBlockPackagesFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockPackagesFilesInput() {
    return this._exceptionalBlockPackagesFiles;
  }

  // exceptional_block_packages_processes - computed: false, optional: true, required: false
  private _exceptionalBlockPackagesProcesses?: string[]; 
  public get exceptionalBlockPackagesProcesses() {
    return this.getListAttribute('exceptional_block_packages_processes');
  }
  public set exceptionalBlockPackagesProcesses(value: string[]) {
    this._exceptionalBlockPackagesProcesses = value;
  }
  public resetExceptionalBlockPackagesProcesses() {
    this._exceptionalBlockPackagesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockPackagesProcessesInput() {
    return this._exceptionalBlockPackagesProcesses;
  }

  // exceptional_block_packages_users - computed: false, optional: true, required: false
  private _exceptionalBlockPackagesUsers?: string[]; 
  public get exceptionalBlockPackagesUsers() {
    return this.getListAttribute('exceptional_block_packages_users');
  }
  public set exceptionalBlockPackagesUsers(value: string[]) {
    this._exceptionalBlockPackagesUsers = value;
  }
  public resetExceptionalBlockPackagesUsers() {
    this._exceptionalBlockPackagesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockPackagesUsersInput() {
    return this._exceptionalBlockPackagesUsers;
  }

  // packages_black_list - computed: false, optional: true, required: false
  private _packagesBlackList?: string[]; 
  public get packagesBlackList() {
    return this.getListAttribute('packages_black_list');
  }
  public set packagesBlackList(value: string[]) {
    this._packagesBlackList = value;
  }
  public resetPackagesBlackList() {
    this._packagesBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesBlackListInput() {
    return this._packagesBlackList;
  }
}
export interface ContainerRuntimePolicyPortBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_inbound_ports ContainerRuntimePolicy#block_inbound_ports}
  */
  readonly blockInboundPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_outbound_ports ContainerRuntimePolicy#block_outbound_ports}
  */
  readonly blockOutboundPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function containerRuntimePolicyPortBlockToTerraform(struct?: ContainerRuntimePolicyPortBlockOutputReference | ContainerRuntimePolicyPortBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_inbound_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockInboundPorts),
    block_outbound_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockOutboundPorts),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerRuntimePolicyPortBlockToHclTerraform(struct?: ContainerRuntimePolicyPortBlockOutputReference | ContainerRuntimePolicyPortBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_inbound_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockInboundPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_outbound_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockOutboundPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyPortBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyPortBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockInboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockInboundPorts = this._blockInboundPorts;
    }
    if (this._blockOutboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockOutboundPorts = this._blockOutboundPorts;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyPortBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockInboundPorts = undefined;
      this._blockOutboundPorts = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockInboundPorts = value.blockInboundPorts;
      this._blockOutboundPorts = value.blockOutboundPorts;
      this._enabled = value.enabled;
    }
  }

  // block_inbound_ports - computed: false, optional: true, required: false
  private _blockInboundPorts?: string[]; 
  public get blockInboundPorts() {
    return this.getListAttribute('block_inbound_ports');
  }
  public set blockInboundPorts(value: string[]) {
    this._blockInboundPorts = value;
  }
  public resetBlockInboundPorts() {
    this._blockInboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInboundPortsInput() {
    return this._blockInboundPorts;
  }

  // block_outbound_ports - computed: false, optional: true, required: false
  private _blockOutboundPorts?: string[]; 
  public get blockOutboundPorts() {
    return this.getListAttribute('block_outbound_ports');
  }
  public set blockOutboundPorts(value: string[]) {
    this._blockOutboundPorts = value;
  }
  public resetBlockOutboundPorts() {
    this._blockOutboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOutboundPortsInput() {
    return this._blockOutboundPorts;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerRuntimePolicyReadonlyFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_readonly_files ContainerRuntimePolicy#exceptional_readonly_files}
  */
  readonly exceptionalReadonlyFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_readonly_files_processes ContainerRuntimePolicy#exceptional_readonly_files_processes}
  */
  readonly exceptionalReadonlyFilesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_readonly_files_users ContainerRuntimePolicy#exceptional_readonly_files_users}
  */
  readonly exceptionalReadonlyFilesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#readonly_files ContainerRuntimePolicy#readonly_files}
  */
  readonly readonlyFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#readonly_files_processes ContainerRuntimePolicy#readonly_files_processes}
  */
  readonly readonlyFilesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#readonly_files_users ContainerRuntimePolicy#readonly_files_users}
  */
  readonly readonlyFilesUsers?: string[];
}

export function containerRuntimePolicyReadonlyFilesToTerraform(struct?: ContainerRuntimePolicyReadonlyFilesOutputReference | ContainerRuntimePolicyReadonlyFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_readonly_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalReadonlyFiles),
    exceptional_readonly_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalReadonlyFilesProcesses),
    exceptional_readonly_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalReadonlyFilesUsers),
    readonly_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlyFiles),
    readonly_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlyFilesProcesses),
    readonly_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlyFilesUsers),
  }
}


export function containerRuntimePolicyReadonlyFilesToHclTerraform(struct?: ContainerRuntimePolicyReadonlyFilesOutputReference | ContainerRuntimePolicyReadonlyFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceptional_readonly_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalReadonlyFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_readonly_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalReadonlyFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_readonly_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalReadonlyFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlyFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlyFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlyFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyReadonlyFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyReadonlyFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalReadonlyFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalReadonlyFiles = this._exceptionalReadonlyFiles;
    }
    if (this._exceptionalReadonlyFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalReadonlyFilesProcesses = this._exceptionalReadonlyFilesProcesses;
    }
    if (this._exceptionalReadonlyFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalReadonlyFilesUsers = this._exceptionalReadonlyFilesUsers;
    }
    if (this._readonlyFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyFiles = this._readonlyFiles;
    }
    if (this._readonlyFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyFilesProcesses = this._readonlyFilesProcesses;
    }
    if (this._readonlyFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyFilesUsers = this._readonlyFilesUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyReadonlyFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._exceptionalReadonlyFiles = undefined;
      this._exceptionalReadonlyFilesProcesses = undefined;
      this._exceptionalReadonlyFilesUsers = undefined;
      this._readonlyFiles = undefined;
      this._readonlyFilesProcesses = undefined;
      this._readonlyFilesUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._exceptionalReadonlyFiles = value.exceptionalReadonlyFiles;
      this._exceptionalReadonlyFilesProcesses = value.exceptionalReadonlyFilesProcesses;
      this._exceptionalReadonlyFilesUsers = value.exceptionalReadonlyFilesUsers;
      this._readonlyFiles = value.readonlyFiles;
      this._readonlyFilesProcesses = value.readonlyFilesProcesses;
      this._readonlyFilesUsers = value.readonlyFilesUsers;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exceptional_readonly_files - computed: false, optional: true, required: false
  private _exceptionalReadonlyFiles?: string[]; 
  public get exceptionalReadonlyFiles() {
    return this.getListAttribute('exceptional_readonly_files');
  }
  public set exceptionalReadonlyFiles(value: string[]) {
    this._exceptionalReadonlyFiles = value;
  }
  public resetExceptionalReadonlyFiles() {
    this._exceptionalReadonlyFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalReadonlyFilesInput() {
    return this._exceptionalReadonlyFiles;
  }

  // exceptional_readonly_files_processes - computed: false, optional: true, required: false
  private _exceptionalReadonlyFilesProcesses?: string[]; 
  public get exceptionalReadonlyFilesProcesses() {
    return this.getListAttribute('exceptional_readonly_files_processes');
  }
  public set exceptionalReadonlyFilesProcesses(value: string[]) {
    this._exceptionalReadonlyFilesProcesses = value;
  }
  public resetExceptionalReadonlyFilesProcesses() {
    this._exceptionalReadonlyFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalReadonlyFilesProcessesInput() {
    return this._exceptionalReadonlyFilesProcesses;
  }

  // exceptional_readonly_files_users - computed: false, optional: true, required: false
  private _exceptionalReadonlyFilesUsers?: string[]; 
  public get exceptionalReadonlyFilesUsers() {
    return this.getListAttribute('exceptional_readonly_files_users');
  }
  public set exceptionalReadonlyFilesUsers(value: string[]) {
    this._exceptionalReadonlyFilesUsers = value;
  }
  public resetExceptionalReadonlyFilesUsers() {
    this._exceptionalReadonlyFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalReadonlyFilesUsersInput() {
    return this._exceptionalReadonlyFilesUsers;
  }

  // readonly_files - computed: false, optional: true, required: false
  private _readonlyFiles?: string[]; 
  public get readonlyFiles() {
    return this.getListAttribute('readonly_files');
  }
  public set readonlyFiles(value: string[]) {
    this._readonlyFiles = value;
  }
  public resetReadonlyFiles() {
    this._readonlyFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyFilesInput() {
    return this._readonlyFiles;
  }

  // readonly_files_processes - computed: false, optional: true, required: false
  private _readonlyFilesProcesses?: string[]; 
  public get readonlyFilesProcesses() {
    return this.getListAttribute('readonly_files_processes');
  }
  public set readonlyFilesProcesses(value: string[]) {
    this._readonlyFilesProcesses = value;
  }
  public resetReadonlyFilesProcesses() {
    this._readonlyFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyFilesProcessesInput() {
    return this._readonlyFilesProcesses;
  }

  // readonly_files_users - computed: false, optional: true, required: false
  private _readonlyFilesUsers?: string[]; 
  public get readonlyFilesUsers() {
    return this.getListAttribute('readonly_files_users');
  }
  public set readonlyFilesUsers(value: string[]) {
    this._readonlyFilesUsers = value;
  }
  public resetReadonlyFilesUsers() {
    this._readonlyFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyFilesUsersInput() {
    return this._readonlyFilesUsers;
  }
}
export interface ContainerRuntimePolicyReadonlyRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_readonly_registry_paths ContainerRuntimePolicy#exceptional_readonly_registry_paths}
  */
  readonly exceptionalReadonlyRegistryPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_readonly_registry_processes ContainerRuntimePolicy#exceptional_readonly_registry_processes}
  */
  readonly exceptionalReadonlyRegistryProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_readonly_registry_users ContainerRuntimePolicy#exceptional_readonly_registry_users}
  */
  readonly exceptionalReadonlyRegistryUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#readonly_registry_paths ContainerRuntimePolicy#readonly_registry_paths}
  */
  readonly readonlyRegistryPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#readonly_registry_processes ContainerRuntimePolicy#readonly_registry_processes}
  */
  readonly readonlyRegistryProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#readonly_registry_users ContainerRuntimePolicy#readonly_registry_users}
  */
  readonly readonlyRegistryUsers?: string[];
}

export function containerRuntimePolicyReadonlyRegistryToTerraform(struct?: ContainerRuntimePolicyReadonlyRegistryOutputReference | ContainerRuntimePolicyReadonlyRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_readonly_registry_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalReadonlyRegistryPaths),
    exceptional_readonly_registry_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalReadonlyRegistryProcesses),
    exceptional_readonly_registry_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalReadonlyRegistryUsers),
    readonly_registry_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlyRegistryPaths),
    readonly_registry_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlyRegistryProcesses),
    readonly_registry_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlyRegistryUsers),
  }
}


export function containerRuntimePolicyReadonlyRegistryToHclTerraform(struct?: ContainerRuntimePolicyReadonlyRegistryOutputReference | ContainerRuntimePolicyReadonlyRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceptional_readonly_registry_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalReadonlyRegistryPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_readonly_registry_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalReadonlyRegistryProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_readonly_registry_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalReadonlyRegistryUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_registry_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlyRegistryPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_registry_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlyRegistryProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_registry_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlyRegistryUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyReadonlyRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyReadonlyRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalReadonlyRegistryPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalReadonlyRegistryPaths = this._exceptionalReadonlyRegistryPaths;
    }
    if (this._exceptionalReadonlyRegistryProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalReadonlyRegistryProcesses = this._exceptionalReadonlyRegistryProcesses;
    }
    if (this._exceptionalReadonlyRegistryUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalReadonlyRegistryUsers = this._exceptionalReadonlyRegistryUsers;
    }
    if (this._readonlyRegistryPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyRegistryPaths = this._readonlyRegistryPaths;
    }
    if (this._readonlyRegistryProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyRegistryProcesses = this._readonlyRegistryProcesses;
    }
    if (this._readonlyRegistryUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyRegistryUsers = this._readonlyRegistryUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyReadonlyRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._exceptionalReadonlyRegistryPaths = undefined;
      this._exceptionalReadonlyRegistryProcesses = undefined;
      this._exceptionalReadonlyRegistryUsers = undefined;
      this._readonlyRegistryPaths = undefined;
      this._readonlyRegistryProcesses = undefined;
      this._readonlyRegistryUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._exceptionalReadonlyRegistryPaths = value.exceptionalReadonlyRegistryPaths;
      this._exceptionalReadonlyRegistryProcesses = value.exceptionalReadonlyRegistryProcesses;
      this._exceptionalReadonlyRegistryUsers = value.exceptionalReadonlyRegistryUsers;
      this._readonlyRegistryPaths = value.readonlyRegistryPaths;
      this._readonlyRegistryProcesses = value.readonlyRegistryProcesses;
      this._readonlyRegistryUsers = value.readonlyRegistryUsers;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exceptional_readonly_registry_paths - computed: false, optional: true, required: false
  private _exceptionalReadonlyRegistryPaths?: string[]; 
  public get exceptionalReadonlyRegistryPaths() {
    return this.getListAttribute('exceptional_readonly_registry_paths');
  }
  public set exceptionalReadonlyRegistryPaths(value: string[]) {
    this._exceptionalReadonlyRegistryPaths = value;
  }
  public resetExceptionalReadonlyRegistryPaths() {
    this._exceptionalReadonlyRegistryPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalReadonlyRegistryPathsInput() {
    return this._exceptionalReadonlyRegistryPaths;
  }

  // exceptional_readonly_registry_processes - computed: false, optional: true, required: false
  private _exceptionalReadonlyRegistryProcesses?: string[]; 
  public get exceptionalReadonlyRegistryProcesses() {
    return this.getListAttribute('exceptional_readonly_registry_processes');
  }
  public set exceptionalReadonlyRegistryProcesses(value: string[]) {
    this._exceptionalReadonlyRegistryProcesses = value;
  }
  public resetExceptionalReadonlyRegistryProcesses() {
    this._exceptionalReadonlyRegistryProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalReadonlyRegistryProcessesInput() {
    return this._exceptionalReadonlyRegistryProcesses;
  }

  // exceptional_readonly_registry_users - computed: false, optional: true, required: false
  private _exceptionalReadonlyRegistryUsers?: string[]; 
  public get exceptionalReadonlyRegistryUsers() {
    return this.getListAttribute('exceptional_readonly_registry_users');
  }
  public set exceptionalReadonlyRegistryUsers(value: string[]) {
    this._exceptionalReadonlyRegistryUsers = value;
  }
  public resetExceptionalReadonlyRegistryUsers() {
    this._exceptionalReadonlyRegistryUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalReadonlyRegistryUsersInput() {
    return this._exceptionalReadonlyRegistryUsers;
  }

  // readonly_registry_paths - computed: false, optional: true, required: false
  private _readonlyRegistryPaths?: string[]; 
  public get readonlyRegistryPaths() {
    return this.getListAttribute('readonly_registry_paths');
  }
  public set readonlyRegistryPaths(value: string[]) {
    this._readonlyRegistryPaths = value;
  }
  public resetReadonlyRegistryPaths() {
    this._readonlyRegistryPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyRegistryPathsInput() {
    return this._readonlyRegistryPaths;
  }

  // readonly_registry_processes - computed: false, optional: true, required: false
  private _readonlyRegistryProcesses?: string[]; 
  public get readonlyRegistryProcesses() {
    return this.getListAttribute('readonly_registry_processes');
  }
  public set readonlyRegistryProcesses(value: string[]) {
    this._readonlyRegistryProcesses = value;
  }
  public resetReadonlyRegistryProcesses() {
    this._readonlyRegistryProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyRegistryProcessesInput() {
    return this._readonlyRegistryProcesses;
  }

  // readonly_registry_users - computed: false, optional: true, required: false
  private _readonlyRegistryUsers?: string[]; 
  public get readonlyRegistryUsers() {
    return this.getListAttribute('readonly_registry_users');
  }
  public set readonlyRegistryUsers(value: string[]) {
    this._readonlyRegistryUsers = value;
  }
  public resetReadonlyRegistryUsers() {
    this._readonlyRegistryUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyRegistryUsersInput() {
    return this._readonlyRegistryUsers;
  }
}
export interface ContainerRuntimePolicyRegistryAccessMonitoring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_monitored_registry_paths ContainerRuntimePolicy#exceptional_monitored_registry_paths}
  */
  readonly exceptionalMonitoredRegistryPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_monitored_registry_processes ContainerRuntimePolicy#exceptional_monitored_registry_processes}
  */
  readonly exceptionalMonitoredRegistryProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#exceptional_monitored_registry_users ContainerRuntimePolicy#exceptional_monitored_registry_users}
  */
  readonly exceptionalMonitoredRegistryUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_registry_attributes ContainerRuntimePolicy#monitored_registry_attributes}
  */
  readonly monitoredRegistryAttributes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_registry_create ContainerRuntimePolicy#monitored_registry_create}
  */
  readonly monitoredRegistryCreate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_registry_delete ContainerRuntimePolicy#monitored_registry_delete}
  */
  readonly monitoredRegistryDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_registry_modify ContainerRuntimePolicy#monitored_registry_modify}
  */
  readonly monitoredRegistryModify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_registry_paths ContainerRuntimePolicy#monitored_registry_paths}
  */
  readonly monitoredRegistryPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_registry_processes ContainerRuntimePolicy#monitored_registry_processes}
  */
  readonly monitoredRegistryProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_registry_read ContainerRuntimePolicy#monitored_registry_read}
  */
  readonly monitoredRegistryRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitored_registry_users ContainerRuntimePolicy#monitored_registry_users}
  */
  readonly monitoredRegistryUsers?: string[];
}

export function containerRuntimePolicyRegistryAccessMonitoringToTerraform(struct?: ContainerRuntimePolicyRegistryAccessMonitoringOutputReference | ContainerRuntimePolicyRegistryAccessMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_monitored_registry_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalMonitoredRegistryPaths),
    exceptional_monitored_registry_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalMonitoredRegistryProcesses),
    exceptional_monitored_registry_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalMonitoredRegistryUsers),
    monitored_registry_attributes: cdktf.booleanToTerraform(struct!.monitoredRegistryAttributes),
    monitored_registry_create: cdktf.booleanToTerraform(struct!.monitoredRegistryCreate),
    monitored_registry_delete: cdktf.booleanToTerraform(struct!.monitoredRegistryDelete),
    monitored_registry_modify: cdktf.booleanToTerraform(struct!.monitoredRegistryModify),
    monitored_registry_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoredRegistryPaths),
    monitored_registry_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoredRegistryProcesses),
    monitored_registry_read: cdktf.booleanToTerraform(struct!.monitoredRegistryRead),
    monitored_registry_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoredRegistryUsers),
  }
}


export function containerRuntimePolicyRegistryAccessMonitoringToHclTerraform(struct?: ContainerRuntimePolicyRegistryAccessMonitoringOutputReference | ContainerRuntimePolicyRegistryAccessMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceptional_monitored_registry_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalMonitoredRegistryPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_monitored_registry_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalMonitoredRegistryProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_monitored_registry_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalMonitoredRegistryUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitored_registry_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredRegistryAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_registry_create: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredRegistryCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_registry_delete: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredRegistryDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_registry_modify: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredRegistryModify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_registry_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoredRegistryPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitored_registry_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoredRegistryProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitored_registry_read: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredRegistryRead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_registry_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoredRegistryUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRegistryAccessMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyRegistryAccessMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalMonitoredRegistryPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalMonitoredRegistryPaths = this._exceptionalMonitoredRegistryPaths;
    }
    if (this._exceptionalMonitoredRegistryProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalMonitoredRegistryProcesses = this._exceptionalMonitoredRegistryProcesses;
    }
    if (this._exceptionalMonitoredRegistryUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalMonitoredRegistryUsers = this._exceptionalMonitoredRegistryUsers;
    }
    if (this._monitoredRegistryAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredRegistryAttributes = this._monitoredRegistryAttributes;
    }
    if (this._monitoredRegistryCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredRegistryCreate = this._monitoredRegistryCreate;
    }
    if (this._monitoredRegistryDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredRegistryDelete = this._monitoredRegistryDelete;
    }
    if (this._monitoredRegistryModify !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredRegistryModify = this._monitoredRegistryModify;
    }
    if (this._monitoredRegistryPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredRegistryPaths = this._monitoredRegistryPaths;
    }
    if (this._monitoredRegistryProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredRegistryProcesses = this._monitoredRegistryProcesses;
    }
    if (this._monitoredRegistryRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredRegistryRead = this._monitoredRegistryRead;
    }
    if (this._monitoredRegistryUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredRegistryUsers = this._monitoredRegistryUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRegistryAccessMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._exceptionalMonitoredRegistryPaths = undefined;
      this._exceptionalMonitoredRegistryProcesses = undefined;
      this._exceptionalMonitoredRegistryUsers = undefined;
      this._monitoredRegistryAttributes = undefined;
      this._monitoredRegistryCreate = undefined;
      this._monitoredRegistryDelete = undefined;
      this._monitoredRegistryModify = undefined;
      this._monitoredRegistryPaths = undefined;
      this._monitoredRegistryProcesses = undefined;
      this._monitoredRegistryRead = undefined;
      this._monitoredRegistryUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._exceptionalMonitoredRegistryPaths = value.exceptionalMonitoredRegistryPaths;
      this._exceptionalMonitoredRegistryProcesses = value.exceptionalMonitoredRegistryProcesses;
      this._exceptionalMonitoredRegistryUsers = value.exceptionalMonitoredRegistryUsers;
      this._monitoredRegistryAttributes = value.monitoredRegistryAttributes;
      this._monitoredRegistryCreate = value.monitoredRegistryCreate;
      this._monitoredRegistryDelete = value.monitoredRegistryDelete;
      this._monitoredRegistryModify = value.monitoredRegistryModify;
      this._monitoredRegistryPaths = value.monitoredRegistryPaths;
      this._monitoredRegistryProcesses = value.monitoredRegistryProcesses;
      this._monitoredRegistryRead = value.monitoredRegistryRead;
      this._monitoredRegistryUsers = value.monitoredRegistryUsers;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exceptional_monitored_registry_paths - computed: false, optional: true, required: false
  private _exceptionalMonitoredRegistryPaths?: string[]; 
  public get exceptionalMonitoredRegistryPaths() {
    return this.getListAttribute('exceptional_monitored_registry_paths');
  }
  public set exceptionalMonitoredRegistryPaths(value: string[]) {
    this._exceptionalMonitoredRegistryPaths = value;
  }
  public resetExceptionalMonitoredRegistryPaths() {
    this._exceptionalMonitoredRegistryPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredRegistryPathsInput() {
    return this._exceptionalMonitoredRegistryPaths;
  }

  // exceptional_monitored_registry_processes - computed: false, optional: true, required: false
  private _exceptionalMonitoredRegistryProcesses?: string[]; 
  public get exceptionalMonitoredRegistryProcesses() {
    return this.getListAttribute('exceptional_monitored_registry_processes');
  }
  public set exceptionalMonitoredRegistryProcesses(value: string[]) {
    this._exceptionalMonitoredRegistryProcesses = value;
  }
  public resetExceptionalMonitoredRegistryProcesses() {
    this._exceptionalMonitoredRegistryProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredRegistryProcessesInput() {
    return this._exceptionalMonitoredRegistryProcesses;
  }

  // exceptional_monitored_registry_users - computed: false, optional: true, required: false
  private _exceptionalMonitoredRegistryUsers?: string[]; 
  public get exceptionalMonitoredRegistryUsers() {
    return this.getListAttribute('exceptional_monitored_registry_users');
  }
  public set exceptionalMonitoredRegistryUsers(value: string[]) {
    this._exceptionalMonitoredRegistryUsers = value;
  }
  public resetExceptionalMonitoredRegistryUsers() {
    this._exceptionalMonitoredRegistryUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredRegistryUsersInput() {
    return this._exceptionalMonitoredRegistryUsers;
  }

  // monitored_registry_attributes - computed: false, optional: true, required: false
  private _monitoredRegistryAttributes?: boolean | cdktf.IResolvable; 
  public get monitoredRegistryAttributes() {
    return this.getBooleanAttribute('monitored_registry_attributes');
  }
  public set monitoredRegistryAttributes(value: boolean | cdktf.IResolvable) {
    this._monitoredRegistryAttributes = value;
  }
  public resetMonitoredRegistryAttributes() {
    this._monitoredRegistryAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRegistryAttributesInput() {
    return this._monitoredRegistryAttributes;
  }

  // monitored_registry_create - computed: false, optional: true, required: false
  private _monitoredRegistryCreate?: boolean | cdktf.IResolvable; 
  public get monitoredRegistryCreate() {
    return this.getBooleanAttribute('monitored_registry_create');
  }
  public set monitoredRegistryCreate(value: boolean | cdktf.IResolvable) {
    this._monitoredRegistryCreate = value;
  }
  public resetMonitoredRegistryCreate() {
    this._monitoredRegistryCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRegistryCreateInput() {
    return this._monitoredRegistryCreate;
  }

  // monitored_registry_delete - computed: false, optional: true, required: false
  private _monitoredRegistryDelete?: boolean | cdktf.IResolvable; 
  public get monitoredRegistryDelete() {
    return this.getBooleanAttribute('monitored_registry_delete');
  }
  public set monitoredRegistryDelete(value: boolean | cdktf.IResolvable) {
    this._monitoredRegistryDelete = value;
  }
  public resetMonitoredRegistryDelete() {
    this._monitoredRegistryDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRegistryDeleteInput() {
    return this._monitoredRegistryDelete;
  }

  // monitored_registry_modify - computed: false, optional: true, required: false
  private _monitoredRegistryModify?: boolean | cdktf.IResolvable; 
  public get monitoredRegistryModify() {
    return this.getBooleanAttribute('monitored_registry_modify');
  }
  public set monitoredRegistryModify(value: boolean | cdktf.IResolvable) {
    this._monitoredRegistryModify = value;
  }
  public resetMonitoredRegistryModify() {
    this._monitoredRegistryModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRegistryModifyInput() {
    return this._monitoredRegistryModify;
  }

  // monitored_registry_paths - computed: false, optional: true, required: false
  private _monitoredRegistryPaths?: string[]; 
  public get monitoredRegistryPaths() {
    return this.getListAttribute('monitored_registry_paths');
  }
  public set monitoredRegistryPaths(value: string[]) {
    this._monitoredRegistryPaths = value;
  }
  public resetMonitoredRegistryPaths() {
    this._monitoredRegistryPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRegistryPathsInput() {
    return this._monitoredRegistryPaths;
  }

  // monitored_registry_processes - computed: false, optional: true, required: false
  private _monitoredRegistryProcesses?: string[]; 
  public get monitoredRegistryProcesses() {
    return this.getListAttribute('monitored_registry_processes');
  }
  public set monitoredRegistryProcesses(value: string[]) {
    this._monitoredRegistryProcesses = value;
  }
  public resetMonitoredRegistryProcesses() {
    this._monitoredRegistryProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRegistryProcessesInput() {
    return this._monitoredRegistryProcesses;
  }

  // monitored_registry_read - computed: false, optional: true, required: false
  private _monitoredRegistryRead?: boolean | cdktf.IResolvable; 
  public get monitoredRegistryRead() {
    return this.getBooleanAttribute('monitored_registry_read');
  }
  public set monitoredRegistryRead(value: boolean | cdktf.IResolvable) {
    this._monitoredRegistryRead = value;
  }
  public resetMonitoredRegistryRead() {
    this._monitoredRegistryRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRegistryReadInput() {
    return this._monitoredRegistryRead;
  }

  // monitored_registry_users - computed: false, optional: true, required: false
  private _monitoredRegistryUsers?: string[]; 
  public get monitoredRegistryUsers() {
    return this.getListAttribute('monitored_registry_users');
  }
  public set monitoredRegistryUsers(value: string[]) {
    this._monitoredRegistryUsers = value;
  }
  public resetMonitoredRegistryUsers() {
    this._monitoredRegistryUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRegistryUsersInput() {
    return this._monitoredRegistryUsers;
  }
}
export interface ContainerRuntimePolicyRestrictedVolumes {
  /**
  * Whether restricted volumes are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of restricted volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#volumes ContainerRuntimePolicy#volumes}
  */
  readonly volumes?: string[];
}

export function containerRuntimePolicyRestrictedVolumesToTerraform(struct?: ContainerRuntimePolicyRestrictedVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
  }
}


export function containerRuntimePolicyRestrictedVolumesToHclTerraform(struct?: ContainerRuntimePolicyRestrictedVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyRestrictedVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyRestrictedVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyRestrictedVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._volumes = value.volumes;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}

export class ContainerRuntimePolicyRestrictedVolumesList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyRestrictedVolumes[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyRestrictedVolumesOutputReference {
    return new ContainerRuntimePolicyRestrictedVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyReverseShell {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#block_reverse_shell ContainerRuntimePolicy#block_reverse_shell}
  */
  readonly blockReverseShell?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#reverse_shell_ip_white_list ContainerRuntimePolicy#reverse_shell_ip_white_list}
  */
  readonly reverseShellIpWhiteList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#reverse_shell_proc_white_list ContainerRuntimePolicy#reverse_shell_proc_white_list}
  */
  readonly reverseShellProcWhiteList?: string[];
}

export function containerRuntimePolicyReverseShellToTerraform(struct?: ContainerRuntimePolicyReverseShellOutputReference | ContainerRuntimePolicyReverseShell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_reverse_shell: cdktf.booleanToTerraform(struct!.blockReverseShell),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    reverse_shell_ip_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reverseShellIpWhiteList),
    reverse_shell_proc_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reverseShellProcWhiteList),
  }
}


export function containerRuntimePolicyReverseShellToHclTerraform(struct?: ContainerRuntimePolicyReverseShellOutputReference | ContainerRuntimePolicyReverseShell): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_reverse_shell: {
      value: cdktf.booleanToHclTerraform(struct!.blockReverseShell),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reverse_shell_ip_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reverseShellIpWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reverse_shell_proc_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reverseShellProcWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyReverseShellOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyReverseShell | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockReverseShell !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockReverseShell = this._blockReverseShell;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._reverseShellIpWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseShellIpWhiteList = this._reverseShellIpWhiteList;
    }
    if (this._reverseShellProcWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseShellProcWhiteList = this._reverseShellProcWhiteList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyReverseShell | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockReverseShell = undefined;
      this._enabled = undefined;
      this._reverseShellIpWhiteList = undefined;
      this._reverseShellProcWhiteList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockReverseShell = value.blockReverseShell;
      this._enabled = value.enabled;
      this._reverseShellIpWhiteList = value.reverseShellIpWhiteList;
      this._reverseShellProcWhiteList = value.reverseShellProcWhiteList;
    }
  }

  // block_reverse_shell - computed: false, optional: true, required: false
  private _blockReverseShell?: boolean | cdktf.IResolvable; 
  public get blockReverseShell() {
    return this.getBooleanAttribute('block_reverse_shell');
  }
  public set blockReverseShell(value: boolean | cdktf.IResolvable) {
    this._blockReverseShell = value;
  }
  public resetBlockReverseShell() {
    this._blockReverseShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockReverseShellInput() {
    return this._blockReverseShell;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // reverse_shell_ip_white_list - computed: false, optional: true, required: false
  private _reverseShellIpWhiteList?: string[]; 
  public get reverseShellIpWhiteList() {
    return this.getListAttribute('reverse_shell_ip_white_list');
  }
  public set reverseShellIpWhiteList(value: string[]) {
    this._reverseShellIpWhiteList = value;
  }
  public resetReverseShellIpWhiteList() {
    this._reverseShellIpWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseShellIpWhiteListInput() {
    return this._reverseShellIpWhiteList;
  }

  // reverse_shell_proc_white_list - computed: false, optional: true, required: false
  private _reverseShellProcWhiteList?: string[]; 
  public get reverseShellProcWhiteList() {
    return this.getListAttribute('reverse_shell_proc_white_list');
  }
  public set reverseShellProcWhiteList(value: string[]) {
    this._reverseShellProcWhiteList = value;
  }
  public resetReverseShellProcWhiteList() {
    this._reverseShellProcWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseShellProcWhiteListInput() {
    return this._reverseShellProcWhiteList;
  }
}
export interface ContainerRuntimePolicyScopeVariables {
  /**
  * Variable attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#attribute ContainerRuntimePolicy#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#name ContainerRuntimePolicy#name}
  */
  readonly name?: string;
  /**
  * Variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#value ContainerRuntimePolicy#value}
  */
  readonly value: string;
}

export function containerRuntimePolicyScopeVariablesToTerraform(struct?: ContainerRuntimePolicyScopeVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerRuntimePolicyScopeVariablesToHclTerraform(struct?: ContainerRuntimePolicyScopeVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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

export class ContainerRuntimePolicyScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyScopeVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyScopeVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerRuntimePolicyScopeVariablesList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyScopeVariables[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyScopeVariablesOutputReference {
    return new ContainerRuntimePolicyScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyScope {
  /**
  * Scope expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#expression ContainerRuntimePolicy#expression}
  */
  readonly expression: string;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#variables ContainerRuntimePolicy#variables}
  */
  readonly variables: ContainerRuntimePolicyScopeVariables[] | cdktf.IResolvable;
}

export function containerRuntimePolicyScopeToTerraform(struct?: ContainerRuntimePolicyScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    variables: cdktf.listMapper(containerRuntimePolicyScopeVariablesToTerraform, true)(struct!.variables),
  }
}


export function containerRuntimePolicyScopeToHclTerraform(struct?: ContainerRuntimePolicyScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variables: {
      value: cdktf.listMapperHcl(containerRuntimePolicyScopeVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerRuntimePolicyScopeVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._variables.internalValue = value.variables;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // variables - computed: false, optional: false, required: true
  private _variables = new ContainerRuntimePolicyScopeVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ContainerRuntimePolicyScopeVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class ContainerRuntimePolicyScopeList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyScope[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyScopeOutputReference {
    return new ContainerRuntimePolicyScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicyScopeVariablesA {
  /**
  * Class of supported scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#attribute ContainerRuntimePolicy#attribute}
  */
  readonly attribute: string;
  /**
  * Name assigned to the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#name ContainerRuntimePolicy#name}
  */
  readonly name?: string;
  /**
  * Value assigned to the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#value ContainerRuntimePolicy#value}
  */
  readonly value: string;
}

export function containerRuntimePolicyScopeVariablesAToTerraform(struct?: ContainerRuntimePolicyScopeVariablesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerRuntimePolicyScopeVariablesAToHclTerraform(struct?: ContainerRuntimePolicyScopeVariablesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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

export class ContainerRuntimePolicyScopeVariablesAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerRuntimePolicyScopeVariablesA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyScopeVariablesA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerRuntimePolicyScopeVariablesAList extends cdktf.ComplexList {
  public internalValue? : ContainerRuntimePolicyScopeVariablesA[] | cdktf.IResolvable

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
  public get(index: number): ContainerRuntimePolicyScopeVariablesAOutputReference {
    return new ContainerRuntimePolicyScopeVariablesAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerRuntimePolicySystemIntegrityProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#audit_systemtime_change ContainerRuntimePolicy#audit_systemtime_change}
  */
  readonly auditSystemtimeChange?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#monitor_audit_log_integrity ContainerRuntimePolicy#monitor_audit_log_integrity}
  */
  readonly monitorAuditLogIntegrity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#windows_services_monitoring ContainerRuntimePolicy#windows_services_monitoring}
  */
  readonly windowsServicesMonitoring?: boolean | cdktf.IResolvable;
}

export function containerRuntimePolicySystemIntegrityProtectionToTerraform(struct?: ContainerRuntimePolicySystemIntegrityProtectionOutputReference | ContainerRuntimePolicySystemIntegrityProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_systemtime_change: cdktf.booleanToTerraform(struct!.auditSystemtimeChange),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    monitor_audit_log_integrity: cdktf.booleanToTerraform(struct!.monitorAuditLogIntegrity),
    windows_services_monitoring: cdktf.booleanToTerraform(struct!.windowsServicesMonitoring),
  }
}


export function containerRuntimePolicySystemIntegrityProtectionToHclTerraform(struct?: ContainerRuntimePolicySystemIntegrityProtectionOutputReference | ContainerRuntimePolicySystemIntegrityProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_systemtime_change: {
      value: cdktf.booleanToHclTerraform(struct!.auditSystemtimeChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitor_audit_log_integrity: {
      value: cdktf.booleanToHclTerraform(struct!.monitorAuditLogIntegrity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    windows_services_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.windowsServicesMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicySystemIntegrityProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicySystemIntegrityProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditSystemtimeChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditSystemtimeChange = this._auditSystemtimeChange;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._monitorAuditLogIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorAuditLogIntegrity = this._monitorAuditLogIntegrity;
    }
    if (this._windowsServicesMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsServicesMonitoring = this._windowsServicesMonitoring;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicySystemIntegrityProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditSystemtimeChange = undefined;
      this._enabled = undefined;
      this._monitorAuditLogIntegrity = undefined;
      this._windowsServicesMonitoring = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditSystemtimeChange = value.auditSystemtimeChange;
      this._enabled = value.enabled;
      this._monitorAuditLogIntegrity = value.monitorAuditLogIntegrity;
      this._windowsServicesMonitoring = value.windowsServicesMonitoring;
    }
  }

  // audit_systemtime_change - computed: false, optional: true, required: false
  private _auditSystemtimeChange?: boolean | cdktf.IResolvable; 
  public get auditSystemtimeChange() {
    return this.getBooleanAttribute('audit_systemtime_change');
  }
  public set auditSystemtimeChange(value: boolean | cdktf.IResolvable) {
    this._auditSystemtimeChange = value;
  }
  public resetAuditSystemtimeChange() {
    this._auditSystemtimeChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditSystemtimeChangeInput() {
    return this._auditSystemtimeChange;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // monitor_audit_log_integrity - computed: false, optional: true, required: false
  private _monitorAuditLogIntegrity?: boolean | cdktf.IResolvable; 
  public get monitorAuditLogIntegrity() {
    return this.getBooleanAttribute('monitor_audit_log_integrity');
  }
  public set monitorAuditLogIntegrity(value: boolean | cdktf.IResolvable) {
    this._monitorAuditLogIntegrity = value;
  }
  public resetMonitorAuditLogIntegrity() {
    this._monitorAuditLogIntegrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAuditLogIntegrityInput() {
    return this._monitorAuditLogIntegrity;
  }

  // windows_services_monitoring - computed: false, optional: true, required: false
  private _windowsServicesMonitoring?: boolean | cdktf.IResolvable; 
  public get windowsServicesMonitoring() {
    return this.getBooleanAttribute('windows_services_monitoring');
  }
  public set windowsServicesMonitoring(value: boolean | cdktf.IResolvable) {
    this._windowsServicesMonitoring = value;
  }
  public resetWindowsServicesMonitoring() {
    this._windowsServicesMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsServicesMonitoringInput() {
    return this._windowsServicesMonitoring;
  }
}
export interface ContainerRuntimePolicyTripwire {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#apply_on ContainerRuntimePolicy#apply_on}
  */
  readonly applyOn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#serverless_app ContainerRuntimePolicy#serverless_app}
  */
  readonly serverlessApp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#user_id ContainerRuntimePolicy#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#user_password ContainerRuntimePolicy#user_password}
  */
  readonly userPassword?: string;
}

export function containerRuntimePolicyTripwireToTerraform(struct?: ContainerRuntimePolicyTripwireOutputReference | ContainerRuntimePolicyTripwire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applyOn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    serverless_app: cdktf.stringToTerraform(struct!.serverlessApp),
    user_id: cdktf.stringToTerraform(struct!.userId),
    user_password: cdktf.stringToTerraform(struct!.userPassword),
  }
}


export function containerRuntimePolicyTripwireToHclTerraform(struct?: ContainerRuntimePolicyTripwireOutputReference | ContainerRuntimePolicyTripwire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applyOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    serverless_app: {
      value: cdktf.stringToHclTerraform(struct!.serverlessApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_password: {
      value: cdktf.stringToHclTerraform(struct!.userPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyTripwireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyTripwire | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyOn = this._applyOn;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._serverlessApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessApp = this._serverlessApp;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._userPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyTripwire | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyOn = undefined;
      this._enabled = undefined;
      this._serverlessApp = undefined;
      this._userId = undefined;
      this._userPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyOn = value.applyOn;
      this._enabled = value.enabled;
      this._serverlessApp = value.serverlessApp;
      this._userId = value.userId;
      this._userPassword = value.userPassword;
    }
  }

  // apply_on - computed: false, optional: true, required: false
  private _applyOn?: string[]; 
  public get applyOn() {
    return this.getListAttribute('apply_on');
  }
  public set applyOn(value: string[]) {
    this._applyOn = value;
  }
  public resetApplyOn() {
    this._applyOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnInput() {
    return this._applyOn;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // serverless_app - computed: false, optional: true, required: false
  private _serverlessApp?: string; 
  public get serverlessApp() {
    return this.getStringAttribute('serverless_app');
  }
  public set serverlessApp(value: string) {
    this._serverlessApp = value;
  }
  public resetServerlessApp() {
    this._serverlessApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessAppInput() {
    return this._serverlessApp;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_password - computed: false, optional: true, required: false
  private _userPassword?: string; 
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
  public set userPassword(value: string) {
    this._userPassword = value;
  }
  public resetUserPassword() {
    this._userPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword;
  }
}
export interface ContainerRuntimePolicyWhitelistedOsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#enabled ContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#group_white_list ContainerRuntimePolicy#group_white_list}
  */
  readonly groupWhiteList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#user_white_list ContainerRuntimePolicy#user_white_list}
  */
  readonly userWhiteList?: string[];
}

export function containerRuntimePolicyWhitelistedOsUsersToTerraform(struct?: ContainerRuntimePolicyWhitelistedOsUsersOutputReference | ContainerRuntimePolicyWhitelistedOsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupWhiteList),
    user_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userWhiteList),
  }
}


export function containerRuntimePolicyWhitelistedOsUsersToHclTerraform(struct?: ContainerRuntimePolicyWhitelistedOsUsersOutputReference | ContainerRuntimePolicyWhitelistedOsUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerRuntimePolicyWhitelistedOsUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerRuntimePolicyWhitelistedOsUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupWhiteList = this._groupWhiteList;
    }
    if (this._userWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.userWhiteList = this._userWhiteList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerRuntimePolicyWhitelistedOsUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._groupWhiteList = undefined;
      this._userWhiteList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._groupWhiteList = value.groupWhiteList;
      this._userWhiteList = value.userWhiteList;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_white_list - computed: false, optional: true, required: false
  private _groupWhiteList?: string[]; 
  public get groupWhiteList() {
    return this.getListAttribute('group_white_list');
  }
  public set groupWhiteList(value: string[]) {
    this._groupWhiteList = value;
  }
  public resetGroupWhiteList() {
    this._groupWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupWhiteListInput() {
    return this._groupWhiteList;
  }

  // user_white_list - computed: false, optional: true, required: false
  private _userWhiteList?: string[]; 
  public get userWhiteList() {
    return this.getListAttribute('user_white_list');
  }
  public set userWhiteList(value: string[]) {
    this._userWhiteList = value;
  }
  public resetUserWhiteList() {
    this._userWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userWhiteListInput() {
    return this._userWhiteList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy aquasec_container_runtime_policy}
*/
export class ContainerRuntimePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_container_runtime_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerRuntimePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerRuntimePolicy to import
  * @param importFromId The id of the existing ContainerRuntimePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerRuntimePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_container_runtime_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/container_runtime_policy aquasec_container_runtime_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerRuntimePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerRuntimePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_container_runtime_policy',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationScopes = config.applicationScopes;
    this._auditAllNetworkActivity = config.auditAllNetworkActivity;
    this._auditAllProcessesActivity = config.auditAllProcessesActivity;
    this._auditBruteForceLogin = config.auditBruteForceLogin;
    this._auditFullCommandArguments = config.auditFullCommandArguments;
    this._author = config.author;
    this._blockAccessHostNetwork = config.blockAccessHostNetwork;
    this._blockAddingCapabilities = config.blockAddingCapabilities;
    this._blockContainerExec = config.blockContainerExec;
    this._blockCryptocurrencyMining = config.blockCryptocurrencyMining;
    this._blockDisallowedImages = config.blockDisallowedImages;
    this._blockFilelessExec = config.blockFilelessExec;
    this._blockLowPortBinding = config.blockLowPortBinding;
    this._blockNonCompliantWorkloads = config.blockNonCompliantWorkloads;
    this._blockNonK8SContainers = config.blockNonK8SContainers;
    this._blockPrivilegedContainers = config.blockPrivilegedContainers;
    this._blockRootUser = config.blockRootUser;
    this._blockUseIpcNamespace = config.blockUseIpcNamespace;
    this._blockUsePidNamespace = config.blockUsePidNamespace;
    this._blockUseUserNamespace = config.blockUseUserNamespace;
    this._blockUseUtsNamespace = config.blockUseUtsNamespace;
    this._blockedCapabilities = config.blockedCapabilities;
    this._blockedFiles = config.blockedFiles;
    this._blockedInboundPorts = config.blockedInboundPorts;
    this._blockedOutboundPorts = config.blockedOutboundPorts;
    this._blockedPackages = config.blockedPackages;
    this._blockedVolumes = config.blockedVolumes;
    this._containerExecAllowedProcesses = config.containerExecAllowedProcesses;
    this._created = config.created;
    this._cve = config.cve;
    this._defaultSecurityProfile = config.defaultSecurityProfile;
    this._description = config.description;
    this._digest = config.digest;
    this._enableCryptoMiningDns = config.enableCryptoMiningDns;
    this._enableForkGuard = config.enableForkGuard;
    this._enableIpReputation = config.enableIpReputation;
    this._enablePortScanProtection = config.enablePortScanProtection;
    this._enabled = config.enabled;
    this._enforce = config.enforce;
    this._enforceAfterDays = config.enforceAfterDays;
    this._enforceSchedulerAddedOn = config.enforceSchedulerAddedOn;
    this._excludeApplicationScopes = config.excludeApplicationScopes;
    this._forkGuardProcessLimit = config.forkGuardProcessLimit;
    this._id = config.id;
    this._imageName = config.imageName;
    this._isAuditChecked = config.isAuditChecked;
    this._isAutoGenerated = config.isAutoGenerated;
    this._isOotbPolicy = config.isOotbPolicy;
    this._lastupdate = config.lastupdate;
    this._monitorSystemTimeChanges = config.monitorSystemTimeChanges;
    this._name = config.name;
    this._noNewPrivileges = config.noNewPrivileges;
    this._onlyRegisteredImages = config.onlyRegisteredImages;
    this._permission = config.permission;
    this._registry = config.registry;
    this._repoName = config.repoName;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._runtimeMode = config.runtimeMode;
    this._runtimeType = config.runtimeType;
    this._scopeExpression = config.scopeExpression;
    this._type = config.type;
    this._updated = config.updated;
    this._version = config.version;
    this._vpatchVersion = config.vpatchVersion;
    this._allowedExecutables.internalValue = config.allowedExecutables;
    this._allowedRegistries.internalValue = config.allowedRegistries;
    this._auditing.internalValue = config.auditing;
    this._blacklistedOsUsers.internalValue = config.blacklistedOsUsers;
    this._bypassScope.internalValue = config.bypassScope;
    this._containerExec.internalValue = config.containerExec;
    this._driftPrevention.internalValue = config.driftPrevention;
    this._executableBlacklist.internalValue = config.executableBlacklist;
    this._failedKubernetesChecks.internalValue = config.failedKubernetesChecks;
    this._fileBlock.internalValue = config.fileBlock;
    this._fileIntegrityMonitoring.internalValue = config.fileIntegrityMonitoring;
    this._limitContainerPrivileges.internalValue = config.limitContainerPrivileges;
    this._linuxCapabilities.internalValue = config.linuxCapabilities;
    this._malwareScanOptions.internalValue = config.malwareScanOptions;
    this._packageBlock.internalValue = config.packageBlock;
    this._portBlock.internalValue = config.portBlock;
    this._readonlyFiles.internalValue = config.readonlyFiles;
    this._readonlyRegistry.internalValue = config.readonlyRegistry;
    this._registryAccessMonitoring.internalValue = config.registryAccessMonitoring;
    this._restrictedVolumes.internalValue = config.restrictedVolumes;
    this._reverseShell.internalValue = config.reverseShell;
    this._scope.internalValue = config.scope;
    this._scopeVariables.internalValue = config.scopeVariables;
    this._systemIntegrityProtection.internalValue = config.systemIntegrityProtection;
    this._tripwire.internalValue = config.tripwire;
    this._whitelistedOsUsers.internalValue = config.whitelistedOsUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_scopes - computed: true, optional: true, required: false
  private _applicationScopes?: string[]; 
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }
  public set applicationScopes(value: string[]) {
    this._applicationScopes = value;
  }
  public resetApplicationScopes() {
    this._applicationScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationScopesInput() {
    return this._applicationScopes;
  }

  // audit_all_network_activity - computed: false, optional: true, required: false
  private _auditAllNetworkActivity?: boolean | cdktf.IResolvable; 
  public get auditAllNetworkActivity() {
    return this.getBooleanAttribute('audit_all_network_activity');
  }
  public set auditAllNetworkActivity(value: boolean | cdktf.IResolvable) {
    this._auditAllNetworkActivity = value;
  }
  public resetAuditAllNetworkActivity() {
    this._auditAllNetworkActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAllNetworkActivityInput() {
    return this._auditAllNetworkActivity;
  }

  // audit_all_processes_activity - computed: false, optional: true, required: false
  private _auditAllProcessesActivity?: boolean | cdktf.IResolvable; 
  public get auditAllProcessesActivity() {
    return this.getBooleanAttribute('audit_all_processes_activity');
  }
  public set auditAllProcessesActivity(value: boolean | cdktf.IResolvable) {
    this._auditAllProcessesActivity = value;
  }
  public resetAuditAllProcessesActivity() {
    this._auditAllProcessesActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAllProcessesActivityInput() {
    return this._auditAllProcessesActivity;
  }

  // audit_brute_force_login - computed: false, optional: true, required: false
  private _auditBruteForceLogin?: boolean | cdktf.IResolvable; 
  public get auditBruteForceLogin() {
    return this.getBooleanAttribute('audit_brute_force_login');
  }
  public set auditBruteForceLogin(value: boolean | cdktf.IResolvable) {
    this._auditBruteForceLogin = value;
  }
  public resetAuditBruteForceLogin() {
    this._auditBruteForceLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditBruteForceLoginInput() {
    return this._auditBruteForceLogin;
  }

  // audit_full_command_arguments - computed: false, optional: true, required: false
  private _auditFullCommandArguments?: boolean | cdktf.IResolvable; 
  public get auditFullCommandArguments() {
    return this.getBooleanAttribute('audit_full_command_arguments');
  }
  public set auditFullCommandArguments(value: boolean | cdktf.IResolvable) {
    this._auditFullCommandArguments = value;
  }
  public resetAuditFullCommandArguments() {
    this._auditFullCommandArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFullCommandArgumentsInput() {
    return this._auditFullCommandArguments;
  }

  // author - computed: true, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // block_access_host_network - computed: false, optional: true, required: false
  private _blockAccessHostNetwork?: boolean | cdktf.IResolvable; 
  public get blockAccessHostNetwork() {
    return this.getBooleanAttribute('block_access_host_network');
  }
  public set blockAccessHostNetwork(value: boolean | cdktf.IResolvable) {
    this._blockAccessHostNetwork = value;
  }
  public resetBlockAccessHostNetwork() {
    this._blockAccessHostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAccessHostNetworkInput() {
    return this._blockAccessHostNetwork;
  }

  // block_adding_capabilities - computed: false, optional: true, required: false
  private _blockAddingCapabilities?: boolean | cdktf.IResolvable; 
  public get blockAddingCapabilities() {
    return this.getBooleanAttribute('block_adding_capabilities');
  }
  public set blockAddingCapabilities(value: boolean | cdktf.IResolvable) {
    this._blockAddingCapabilities = value;
  }
  public resetBlockAddingCapabilities() {
    this._blockAddingCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAddingCapabilitiesInput() {
    return this._blockAddingCapabilities;
  }

  // block_container_exec - computed: false, optional: true, required: false
  private _blockContainerExec?: boolean | cdktf.IResolvable; 
  public get blockContainerExec() {
    return this.getBooleanAttribute('block_container_exec');
  }
  public set blockContainerExec(value: boolean | cdktf.IResolvable) {
    this._blockContainerExec = value;
  }
  public resetBlockContainerExec() {
    this._blockContainerExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockContainerExecInput() {
    return this._blockContainerExec;
  }

  // block_cryptocurrency_mining - computed: false, optional: true, required: false
  private _blockCryptocurrencyMining?: boolean | cdktf.IResolvable; 
  public get blockCryptocurrencyMining() {
    return this.getBooleanAttribute('block_cryptocurrency_mining');
  }
  public set blockCryptocurrencyMining(value: boolean | cdktf.IResolvable) {
    this._blockCryptocurrencyMining = value;
  }
  public resetBlockCryptocurrencyMining() {
    this._blockCryptocurrencyMining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockCryptocurrencyMiningInput() {
    return this._blockCryptocurrencyMining;
  }

  // block_disallowed_images - computed: false, optional: true, required: false
  private _blockDisallowedImages?: boolean | cdktf.IResolvable; 
  public get blockDisallowedImages() {
    return this.getBooleanAttribute('block_disallowed_images');
  }
  public set blockDisallowedImages(value: boolean | cdktf.IResolvable) {
    this._blockDisallowedImages = value;
  }
  public resetBlockDisallowedImages() {
    this._blockDisallowedImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDisallowedImagesInput() {
    return this._blockDisallowedImages;
  }

  // block_fileless_exec - computed: false, optional: true, required: false
  private _blockFilelessExec?: boolean | cdktf.IResolvable; 
  public get blockFilelessExec() {
    return this.getBooleanAttribute('block_fileless_exec');
  }
  public set blockFilelessExec(value: boolean | cdktf.IResolvable) {
    this._blockFilelessExec = value;
  }
  public resetBlockFilelessExec() {
    this._blockFilelessExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockFilelessExecInput() {
    return this._blockFilelessExec;
  }

  // block_low_port_binding - computed: false, optional: true, required: false
  private _blockLowPortBinding?: boolean | cdktf.IResolvable; 
  public get blockLowPortBinding() {
    return this.getBooleanAttribute('block_low_port_binding');
  }
  public set blockLowPortBinding(value: boolean | cdktf.IResolvable) {
    this._blockLowPortBinding = value;
  }
  public resetBlockLowPortBinding() {
    this._blockLowPortBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockLowPortBindingInput() {
    return this._blockLowPortBinding;
  }

  // block_non_compliant_workloads - computed: false, optional: true, required: false
  private _blockNonCompliantWorkloads?: boolean | cdktf.IResolvable; 
  public get blockNonCompliantWorkloads() {
    return this.getBooleanAttribute('block_non_compliant_workloads');
  }
  public set blockNonCompliantWorkloads(value: boolean | cdktf.IResolvable) {
    this._blockNonCompliantWorkloads = value;
  }
  public resetBlockNonCompliantWorkloads() {
    this._blockNonCompliantWorkloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonCompliantWorkloadsInput() {
    return this._blockNonCompliantWorkloads;
  }

  // block_non_k8s_containers - computed: false, optional: true, required: false
  private _blockNonK8SContainers?: boolean | cdktf.IResolvable; 
  public get blockNonK8SContainers() {
    return this.getBooleanAttribute('block_non_k8s_containers');
  }
  public set blockNonK8SContainers(value: boolean | cdktf.IResolvable) {
    this._blockNonK8SContainers = value;
  }
  public resetBlockNonK8SContainers() {
    this._blockNonK8SContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonK8SContainersInput() {
    return this._blockNonK8SContainers;
  }

  // block_privileged_containers - computed: false, optional: true, required: false
  private _blockPrivilegedContainers?: boolean | cdktf.IResolvable; 
  public get blockPrivilegedContainers() {
    return this.getBooleanAttribute('block_privileged_containers');
  }
  public set blockPrivilegedContainers(value: boolean | cdktf.IResolvable) {
    this._blockPrivilegedContainers = value;
  }
  public resetBlockPrivilegedContainers() {
    this._blockPrivilegedContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPrivilegedContainersInput() {
    return this._blockPrivilegedContainers;
  }

  // block_root_user - computed: false, optional: true, required: false
  private _blockRootUser?: boolean | cdktf.IResolvable; 
  public get blockRootUser() {
    return this.getBooleanAttribute('block_root_user');
  }
  public set blockRootUser(value: boolean | cdktf.IResolvable) {
    this._blockRootUser = value;
  }
  public resetBlockRootUser() {
    this._blockRootUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockRootUserInput() {
    return this._blockRootUser;
  }

  // block_use_ipc_namespace - computed: false, optional: true, required: false
  private _blockUseIpcNamespace?: boolean | cdktf.IResolvable; 
  public get blockUseIpcNamespace() {
    return this.getBooleanAttribute('block_use_ipc_namespace');
  }
  public set blockUseIpcNamespace(value: boolean | cdktf.IResolvable) {
    this._blockUseIpcNamespace = value;
  }
  public resetBlockUseIpcNamespace() {
    this._blockUseIpcNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUseIpcNamespaceInput() {
    return this._blockUseIpcNamespace;
  }

  // block_use_pid_namespace - computed: false, optional: true, required: false
  private _blockUsePidNamespace?: boolean | cdktf.IResolvable; 
  public get blockUsePidNamespace() {
    return this.getBooleanAttribute('block_use_pid_namespace');
  }
  public set blockUsePidNamespace(value: boolean | cdktf.IResolvable) {
    this._blockUsePidNamespace = value;
  }
  public resetBlockUsePidNamespace() {
    this._blockUsePidNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUsePidNamespaceInput() {
    return this._blockUsePidNamespace;
  }

  // block_use_user_namespace - computed: false, optional: true, required: false
  private _blockUseUserNamespace?: boolean | cdktf.IResolvable; 
  public get blockUseUserNamespace() {
    return this.getBooleanAttribute('block_use_user_namespace');
  }
  public set blockUseUserNamespace(value: boolean | cdktf.IResolvable) {
    this._blockUseUserNamespace = value;
  }
  public resetBlockUseUserNamespace() {
    this._blockUseUserNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUseUserNamespaceInput() {
    return this._blockUseUserNamespace;
  }

  // block_use_uts_namespace - computed: false, optional: true, required: false
  private _blockUseUtsNamespace?: boolean | cdktf.IResolvable; 
  public get blockUseUtsNamespace() {
    return this.getBooleanAttribute('block_use_uts_namespace');
  }
  public set blockUseUtsNamespace(value: boolean | cdktf.IResolvable) {
    this._blockUseUtsNamespace = value;
  }
  public resetBlockUseUtsNamespace() {
    this._blockUseUtsNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockUseUtsNamespaceInput() {
    return this._blockUseUtsNamespace;
  }

  // blocked_capabilities - computed: false, optional: true, required: false
  private _blockedCapabilities?: string[]; 
  public get blockedCapabilities() {
    return this.getListAttribute('blocked_capabilities');
  }
  public set blockedCapabilities(value: string[]) {
    this._blockedCapabilities = value;
  }
  public resetBlockedCapabilities() {
    this._blockedCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedCapabilitiesInput() {
    return this._blockedCapabilities;
  }

  // blocked_files - computed: false, optional: true, required: false
  private _blockedFiles?: string[]; 
  public get blockedFiles() {
    return this.getListAttribute('blocked_files');
  }
  public set blockedFiles(value: string[]) {
    this._blockedFiles = value;
  }
  public resetBlockedFiles() {
    this._blockedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedFilesInput() {
    return this._blockedFiles;
  }

  // blocked_inbound_ports - computed: false, optional: true, required: false
  private _blockedInboundPorts?: string[]; 
  public get blockedInboundPorts() {
    return this.getListAttribute('blocked_inbound_ports');
  }
  public set blockedInboundPorts(value: string[]) {
    this._blockedInboundPorts = value;
  }
  public resetBlockedInboundPorts() {
    this._blockedInboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInboundPortsInput() {
    return this._blockedInboundPorts;
  }

  // blocked_outbound_ports - computed: false, optional: true, required: false
  private _blockedOutboundPorts?: string[]; 
  public get blockedOutboundPorts() {
    return this.getListAttribute('blocked_outbound_ports');
  }
  public set blockedOutboundPorts(value: string[]) {
    this._blockedOutboundPorts = value;
  }
  public resetBlockedOutboundPorts() {
    this._blockedOutboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedOutboundPortsInput() {
    return this._blockedOutboundPorts;
  }

  // blocked_packages - computed: false, optional: true, required: false
  private _blockedPackages?: string[]; 
  public get blockedPackages() {
    return this.getListAttribute('blocked_packages');
  }
  public set blockedPackages(value: string[]) {
    this._blockedPackages = value;
  }
  public resetBlockedPackages() {
    this._blockedPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedPackagesInput() {
    return this._blockedPackages;
  }

  // blocked_volumes - computed: false, optional: true, required: false
  private _blockedVolumes?: string[]; 
  public get blockedVolumes() {
    return this.getListAttribute('blocked_volumes');
  }
  public set blockedVolumes(value: string[]) {
    this._blockedVolumes = value;
  }
  public resetBlockedVolumes() {
    this._blockedVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedVolumesInput() {
    return this._blockedVolumes;
  }

  // container_exec_allowed_processes - computed: false, optional: true, required: false
  private _containerExecAllowedProcesses?: string[]; 
  public get containerExecAllowedProcesses() {
    return this.getListAttribute('container_exec_allowed_processes');
  }
  public set containerExecAllowedProcesses(value: string[]) {
    this._containerExecAllowedProcesses = value;
  }
  public resetContainerExecAllowedProcesses() {
    this._containerExecAllowedProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerExecAllowedProcessesInput() {
    return this._containerExecAllowedProcesses;
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // cve - computed: false, optional: true, required: false
  private _cve?: string; 
  public get cve() {
    return this.getStringAttribute('cve');
  }
  public set cve(value: string) {
    this._cve = value;
  }
  public resetCve() {
    this._cve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cveInput() {
    return this._cve;
  }

  // default_security_profile - computed: false, optional: true, required: false
  private _defaultSecurityProfile?: string; 
  public get defaultSecurityProfile() {
    return this.getStringAttribute('default_security_profile');
  }
  public set defaultSecurityProfile(value: string) {
    this._defaultSecurityProfile = value;
  }
  public resetDefaultSecurityProfile() {
    this._defaultSecurityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityProfileInput() {
    return this._defaultSecurityProfile;
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

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // enable_crypto_mining_dns - computed: false, optional: true, required: false
  private _enableCryptoMiningDns?: boolean | cdktf.IResolvable; 
  public get enableCryptoMiningDns() {
    return this.getBooleanAttribute('enable_crypto_mining_dns');
  }
  public set enableCryptoMiningDns(value: boolean | cdktf.IResolvable) {
    this._enableCryptoMiningDns = value;
  }
  public resetEnableCryptoMiningDns() {
    this._enableCryptoMiningDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCryptoMiningDnsInput() {
    return this._enableCryptoMiningDns;
  }

  // enable_fork_guard - computed: false, optional: true, required: false
  private _enableForkGuard?: boolean | cdktf.IResolvable; 
  public get enableForkGuard() {
    return this.getBooleanAttribute('enable_fork_guard');
  }
  public set enableForkGuard(value: boolean | cdktf.IResolvable) {
    this._enableForkGuard = value;
  }
  public resetEnableForkGuard() {
    this._enableForkGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForkGuardInput() {
    return this._enableForkGuard;
  }

  // enable_ip_reputation - computed: false, optional: true, required: false
  private _enableIpReputation?: boolean | cdktf.IResolvable; 
  public get enableIpReputation() {
    return this.getBooleanAttribute('enable_ip_reputation');
  }
  public set enableIpReputation(value: boolean | cdktf.IResolvable) {
    this._enableIpReputation = value;
  }
  public resetEnableIpReputation() {
    this._enableIpReputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpReputationInput() {
    return this._enableIpReputation;
  }

  // enable_port_scan_protection - computed: false, optional: true, required: false
  private _enablePortScanProtection?: boolean | cdktf.IResolvable; 
  public get enablePortScanProtection() {
    return this.getBooleanAttribute('enable_port_scan_protection');
  }
  public set enablePortScanProtection(value: boolean | cdktf.IResolvable) {
    this._enablePortScanProtection = value;
  }
  public resetEnablePortScanProtection() {
    this._enablePortScanProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePortScanProtectionInput() {
    return this._enablePortScanProtection;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // enforce_after_days - computed: false, optional: true, required: false
  private _enforceAfterDays?: number; 
  public get enforceAfterDays() {
    return this.getNumberAttribute('enforce_after_days');
  }
  public set enforceAfterDays(value: number) {
    this._enforceAfterDays = value;
  }
  public resetEnforceAfterDays() {
    this._enforceAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceAfterDaysInput() {
    return this._enforceAfterDays;
  }

  // enforce_scheduler_added_on - computed: true, optional: true, required: false
  private _enforceSchedulerAddedOn?: number; 
  public get enforceSchedulerAddedOn() {
    return this.getNumberAttribute('enforce_scheduler_added_on');
  }
  public set enforceSchedulerAddedOn(value: number) {
    this._enforceSchedulerAddedOn = value;
  }
  public resetEnforceSchedulerAddedOn() {
    this._enforceSchedulerAddedOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSchedulerAddedOnInput() {
    return this._enforceSchedulerAddedOn;
  }

  // exclude_application_scopes - computed: false, optional: true, required: false
  private _excludeApplicationScopes?: string[]; 
  public get excludeApplicationScopes() {
    return this.getListAttribute('exclude_application_scopes');
  }
  public set excludeApplicationScopes(value: string[]) {
    this._excludeApplicationScopes = value;
  }
  public resetExcludeApplicationScopes() {
    this._excludeApplicationScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeApplicationScopesInput() {
    return this._excludeApplicationScopes;
  }

  // fork_guard_process_limit - computed: false, optional: true, required: false
  private _forkGuardProcessLimit?: number; 
  public get forkGuardProcessLimit() {
    return this.getNumberAttribute('fork_guard_process_limit');
  }
  public set forkGuardProcessLimit(value: number) {
    this._forkGuardProcessLimit = value;
  }
  public resetForkGuardProcessLimit() {
    this._forkGuardProcessLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forkGuardProcessLimitInput() {
    return this._forkGuardProcessLimit;
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

  // is_audit_checked - computed: false, optional: true, required: false
  private _isAuditChecked?: boolean | cdktf.IResolvable; 
  public get isAuditChecked() {
    return this.getBooleanAttribute('is_audit_checked');
  }
  public set isAuditChecked(value: boolean | cdktf.IResolvable) {
    this._isAuditChecked = value;
  }
  public resetIsAuditChecked() {
    this._isAuditChecked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuditCheckedInput() {
    return this._isAuditChecked;
  }

  // is_auto_generated - computed: false, optional: true, required: false
  private _isAutoGenerated?: boolean | cdktf.IResolvable; 
  public get isAutoGenerated() {
    return this.getBooleanAttribute('is_auto_generated');
  }
  public set isAutoGenerated(value: boolean | cdktf.IResolvable) {
    this._isAutoGenerated = value;
  }
  public resetIsAutoGenerated() {
    this._isAutoGenerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoGeneratedInput() {
    return this._isAutoGenerated;
  }

  // is_ootb_policy - computed: false, optional: true, required: false
  private _isOotbPolicy?: boolean | cdktf.IResolvable; 
  public get isOotbPolicy() {
    return this.getBooleanAttribute('is_ootb_policy');
  }
  public set isOotbPolicy(value: boolean | cdktf.IResolvable) {
    this._isOotbPolicy = value;
  }
  public resetIsOotbPolicy() {
    this._isOotbPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOotbPolicyInput() {
    return this._isOotbPolicy;
  }

  // lastupdate - computed: true, optional: true, required: false
  private _lastupdate?: number; 
  public get lastupdate() {
    return this.getNumberAttribute('lastupdate');
  }
  public set lastupdate(value: number) {
    this._lastupdate = value;
  }
  public resetLastupdate() {
    this._lastupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastupdateInput() {
    return this._lastupdate;
  }

  // monitor_system_time_changes - computed: false, optional: true, required: false
  private _monitorSystemTimeChanges?: boolean | cdktf.IResolvable; 
  public get monitorSystemTimeChanges() {
    return this.getBooleanAttribute('monitor_system_time_changes');
  }
  public set monitorSystemTimeChanges(value: boolean | cdktf.IResolvable) {
    this._monitorSystemTimeChanges = value;
  }
  public resetMonitorSystemTimeChanges() {
    this._monitorSystemTimeChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorSystemTimeChangesInput() {
    return this._monitorSystemTimeChanges;
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

  // no_new_privileges - computed: false, optional: true, required: false
  private _noNewPrivileges?: boolean | cdktf.IResolvable; 
  public get noNewPrivileges() {
    return this.getBooleanAttribute('no_new_privileges');
  }
  public set noNewPrivileges(value: boolean | cdktf.IResolvable) {
    this._noNewPrivileges = value;
  }
  public resetNoNewPrivileges() {
    this._noNewPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNewPrivilegesInput() {
    return this._noNewPrivileges;
  }

  // only_registered_images - computed: false, optional: true, required: false
  private _onlyRegisteredImages?: boolean | cdktf.IResolvable; 
  public get onlyRegisteredImages() {
    return this.getBooleanAttribute('only_registered_images');
  }
  public set onlyRegisteredImages(value: boolean | cdktf.IResolvable) {
    this._onlyRegisteredImages = value;
  }
  public resetOnlyRegisteredImages() {
    this._onlyRegisteredImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyRegisteredImagesInput() {
    return this._onlyRegisteredImages;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // runtime_mode - computed: false, optional: true, required: false
  private _runtimeMode?: number; 
  public get runtimeMode() {
    return this.getNumberAttribute('runtime_mode');
  }
  public set runtimeMode(value: number) {
    this._runtimeMode = value;
  }
  public resetRuntimeMode() {
    this._runtimeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeModeInput() {
    return this._runtimeMode;
  }

  // runtime_type - computed: false, optional: true, required: false
  private _runtimeType?: string; 
  public get runtimeType() {
    return this.getStringAttribute('runtime_type');
  }
  public set runtimeType(value: string) {
    this._runtimeType = value;
  }
  public resetRuntimeType() {
    this._runtimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeTypeInput() {
    return this._runtimeType;
  }

  // scope_expression - computed: true, optional: true, required: false
  private _scopeExpression?: string; 
  public get scopeExpression() {
    return this.getStringAttribute('scope_expression');
  }
  public set scopeExpression(value: string) {
    this._scopeExpression = value;
  }
  public resetScopeExpression() {
    this._scopeExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeExpressionInput() {
    return this._scopeExpression;
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

  // updated - computed: true, optional: true, required: false
  private _updated?: string; 
  public get updated() {
    return this.getStringAttribute('updated');
  }
  public set updated(value: string) {
    this._updated = value;
  }
  public resetUpdated() {
    this._updated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedInput() {
    return this._updated;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vpatch_version - computed: false, optional: true, required: false
  private _vpatchVersion?: string; 
  public get vpatchVersion() {
    return this.getStringAttribute('vpatch_version');
  }
  public set vpatchVersion(value: string) {
    this._vpatchVersion = value;
  }
  public resetVpatchVersion() {
    this._vpatchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpatchVersionInput() {
    return this._vpatchVersion;
  }

  // allowed_executables - computed: false, optional: true, required: false
  private _allowedExecutables = new ContainerRuntimePolicyAllowedExecutablesList(this, "allowed_executables", false);
  public get allowedExecutables() {
    return this._allowedExecutables;
  }
  public putAllowedExecutables(value: ContainerRuntimePolicyAllowedExecutables[] | cdktf.IResolvable) {
    this._allowedExecutables.internalValue = value;
  }
  public resetAllowedExecutables() {
    this._allowedExecutables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExecutablesInput() {
    return this._allowedExecutables.internalValue;
  }

  // allowed_registries - computed: false, optional: true, required: false
  private _allowedRegistries = new ContainerRuntimePolicyAllowedRegistriesList(this, "allowed_registries", false);
  public get allowedRegistries() {
    return this._allowedRegistries;
  }
  public putAllowedRegistries(value: ContainerRuntimePolicyAllowedRegistries[] | cdktf.IResolvable) {
    this._allowedRegistries.internalValue = value;
  }
  public resetAllowedRegistries() {
    this._allowedRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegistriesInput() {
    return this._allowedRegistries.internalValue;
  }

  // auditing - computed: false, optional: true, required: false
  private _auditing = new ContainerRuntimePolicyAuditingOutputReference(this, "auditing");
  public get auditing() {
    return this._auditing;
  }
  public putAuditing(value: ContainerRuntimePolicyAuditing) {
    this._auditing.internalValue = value;
  }
  public resetAuditing() {
    this._auditing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditingInput() {
    return this._auditing.internalValue;
  }

  // blacklisted_os_users - computed: false, optional: true, required: false
  private _blacklistedOsUsers = new ContainerRuntimePolicyBlacklistedOsUsersOutputReference(this, "blacklisted_os_users");
  public get blacklistedOsUsers() {
    return this._blacklistedOsUsers;
  }
  public putBlacklistedOsUsers(value: ContainerRuntimePolicyBlacklistedOsUsers) {
    this._blacklistedOsUsers.internalValue = value;
  }
  public resetBlacklistedOsUsers() {
    this._blacklistedOsUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistedOsUsersInput() {
    return this._blacklistedOsUsers.internalValue;
  }

  // bypass_scope - computed: false, optional: true, required: false
  private _bypassScope = new ContainerRuntimePolicyBypassScopeList(this, "bypass_scope", false);
  public get bypassScope() {
    return this._bypassScope;
  }
  public putBypassScope(value: ContainerRuntimePolicyBypassScope[] | cdktf.IResolvable) {
    this._bypassScope.internalValue = value;
  }
  public resetBypassScope() {
    this._bypassScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassScopeInput() {
    return this._bypassScope.internalValue;
  }

  // container_exec - computed: false, optional: true, required: false
  private _containerExec = new ContainerRuntimePolicyContainerExecOutputReference(this, "container_exec");
  public get containerExec() {
    return this._containerExec;
  }
  public putContainerExec(value: ContainerRuntimePolicyContainerExec) {
    this._containerExec.internalValue = value;
  }
  public resetContainerExec() {
    this._containerExec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerExecInput() {
    return this._containerExec.internalValue;
  }

  // drift_prevention - computed: false, optional: true, required: false
  private _driftPrevention = new ContainerRuntimePolicyDriftPreventionList(this, "drift_prevention", false);
  public get driftPrevention() {
    return this._driftPrevention;
  }
  public putDriftPrevention(value: ContainerRuntimePolicyDriftPrevention[] | cdktf.IResolvable) {
    this._driftPrevention.internalValue = value;
  }
  public resetDriftPrevention() {
    this._driftPrevention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driftPreventionInput() {
    return this._driftPrevention.internalValue;
  }

  // executable_blacklist - computed: false, optional: true, required: false
  private _executableBlacklist = new ContainerRuntimePolicyExecutableBlacklistStructList(this, "executable_blacklist", false);
  public get executableBlacklist() {
    return this._executableBlacklist;
  }
  public putExecutableBlacklist(value: ContainerRuntimePolicyExecutableBlacklistStruct[] | cdktf.IResolvable) {
    this._executableBlacklist.internalValue = value;
  }
  public resetExecutableBlacklist() {
    this._executableBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executableBlacklistInput() {
    return this._executableBlacklist.internalValue;
  }

  // failed_kubernetes_checks - computed: false, optional: true, required: false
  private _failedKubernetesChecks = new ContainerRuntimePolicyFailedKubernetesChecksOutputReference(this, "failed_kubernetes_checks");
  public get failedKubernetesChecks() {
    return this._failedKubernetesChecks;
  }
  public putFailedKubernetesChecks(value: ContainerRuntimePolicyFailedKubernetesChecks) {
    this._failedKubernetesChecks.internalValue = value;
  }
  public resetFailedKubernetesChecks() {
    this._failedKubernetesChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedKubernetesChecksInput() {
    return this._failedKubernetesChecks.internalValue;
  }

  // file_block - computed: false, optional: true, required: false
  private _fileBlock = new ContainerRuntimePolicyFileBlockOutputReference(this, "file_block");
  public get fileBlock() {
    return this._fileBlock;
  }
  public putFileBlock(value: ContainerRuntimePolicyFileBlock) {
    this._fileBlock.internalValue = value;
  }
  public resetFileBlock() {
    this._fileBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockInput() {
    return this._fileBlock.internalValue;
  }

  // file_integrity_monitoring - computed: false, optional: true, required: false
  private _fileIntegrityMonitoring = new ContainerRuntimePolicyFileIntegrityMonitoringList(this, "file_integrity_monitoring", false);
  public get fileIntegrityMonitoring() {
    return this._fileIntegrityMonitoring;
  }
  public putFileIntegrityMonitoring(value: ContainerRuntimePolicyFileIntegrityMonitoring[] | cdktf.IResolvable) {
    this._fileIntegrityMonitoring.internalValue = value;
  }
  public resetFileIntegrityMonitoring() {
    this._fileIntegrityMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIntegrityMonitoringInput() {
    return this._fileIntegrityMonitoring.internalValue;
  }

  // limit_container_privileges - computed: false, optional: true, required: false
  private _limitContainerPrivileges = new ContainerRuntimePolicyLimitContainerPrivilegesList(this, "limit_container_privileges", false);
  public get limitContainerPrivileges() {
    return this._limitContainerPrivileges;
  }
  public putLimitContainerPrivileges(value: ContainerRuntimePolicyLimitContainerPrivileges[] | cdktf.IResolvable) {
    this._limitContainerPrivileges.internalValue = value;
  }
  public resetLimitContainerPrivileges() {
    this._limitContainerPrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitContainerPrivilegesInput() {
    return this._limitContainerPrivileges.internalValue;
  }

  // linux_capabilities - computed: false, optional: true, required: false
  private _linuxCapabilities = new ContainerRuntimePolicyLinuxCapabilitiesOutputReference(this, "linux_capabilities");
  public get linuxCapabilities() {
    return this._linuxCapabilities;
  }
  public putLinuxCapabilities(value: ContainerRuntimePolicyLinuxCapabilities) {
    this._linuxCapabilities.internalValue = value;
  }
  public resetLinuxCapabilities() {
    this._linuxCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxCapabilitiesInput() {
    return this._linuxCapabilities.internalValue;
  }

  // malware_scan_options - computed: false, optional: true, required: false
  private _malwareScanOptions = new ContainerRuntimePolicyMalwareScanOptionsOutputReference(this, "malware_scan_options");
  public get malwareScanOptions() {
    return this._malwareScanOptions;
  }
  public putMalwareScanOptions(value: ContainerRuntimePolicyMalwareScanOptions) {
    this._malwareScanOptions.internalValue = value;
  }
  public resetMalwareScanOptions() {
    this._malwareScanOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareScanOptionsInput() {
    return this._malwareScanOptions.internalValue;
  }

  // package_block - computed: false, optional: true, required: false
  private _packageBlock = new ContainerRuntimePolicyPackageBlockOutputReference(this, "package_block");
  public get packageBlock() {
    return this._packageBlock;
  }
  public putPackageBlock(value: ContainerRuntimePolicyPackageBlock) {
    this._packageBlock.internalValue = value;
  }
  public resetPackageBlock() {
    this._packageBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageBlockInput() {
    return this._packageBlock.internalValue;
  }

  // port_block - computed: false, optional: true, required: false
  private _portBlock = new ContainerRuntimePolicyPortBlockOutputReference(this, "port_block");
  public get portBlock() {
    return this._portBlock;
  }
  public putPortBlock(value: ContainerRuntimePolicyPortBlock) {
    this._portBlock.internalValue = value;
  }
  public resetPortBlock() {
    this._portBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBlockInput() {
    return this._portBlock.internalValue;
  }

  // readonly_files - computed: false, optional: true, required: false
  private _readonlyFiles = new ContainerRuntimePolicyReadonlyFilesOutputReference(this, "readonly_files");
  public get readonlyFiles() {
    return this._readonlyFiles;
  }
  public putReadonlyFiles(value: ContainerRuntimePolicyReadonlyFiles) {
    this._readonlyFiles.internalValue = value;
  }
  public resetReadonlyFiles() {
    this._readonlyFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyFilesInput() {
    return this._readonlyFiles.internalValue;
  }

  // readonly_registry - computed: false, optional: true, required: false
  private _readonlyRegistry = new ContainerRuntimePolicyReadonlyRegistryOutputReference(this, "readonly_registry");
  public get readonlyRegistry() {
    return this._readonlyRegistry;
  }
  public putReadonlyRegistry(value: ContainerRuntimePolicyReadonlyRegistry) {
    this._readonlyRegistry.internalValue = value;
  }
  public resetReadonlyRegistry() {
    this._readonlyRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyRegistryInput() {
    return this._readonlyRegistry.internalValue;
  }

  // registry_access_monitoring - computed: false, optional: true, required: false
  private _registryAccessMonitoring = new ContainerRuntimePolicyRegistryAccessMonitoringOutputReference(this, "registry_access_monitoring");
  public get registryAccessMonitoring() {
    return this._registryAccessMonitoring;
  }
  public putRegistryAccessMonitoring(value: ContainerRuntimePolicyRegistryAccessMonitoring) {
    this._registryAccessMonitoring.internalValue = value;
  }
  public resetRegistryAccessMonitoring() {
    this._registryAccessMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryAccessMonitoringInput() {
    return this._registryAccessMonitoring.internalValue;
  }

  // restricted_volumes - computed: false, optional: true, required: false
  private _restrictedVolumes = new ContainerRuntimePolicyRestrictedVolumesList(this, "restricted_volumes", false);
  public get restrictedVolumes() {
    return this._restrictedVolumes;
  }
  public putRestrictedVolumes(value: ContainerRuntimePolicyRestrictedVolumes[] | cdktf.IResolvable) {
    this._restrictedVolumes.internalValue = value;
  }
  public resetRestrictedVolumes() {
    this._restrictedVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedVolumesInput() {
    return this._restrictedVolumes.internalValue;
  }

  // reverse_shell - computed: false, optional: true, required: false
  private _reverseShell = new ContainerRuntimePolicyReverseShellOutputReference(this, "reverse_shell");
  public get reverseShell() {
    return this._reverseShell;
  }
  public putReverseShell(value: ContainerRuntimePolicyReverseShell) {
    this._reverseShell.internalValue = value;
  }
  public resetReverseShell() {
    this._reverseShell.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseShellInput() {
    return this._reverseShell.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new ContainerRuntimePolicyScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ContainerRuntimePolicyScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // scope_variables - computed: false, optional: true, required: false
  private _scopeVariables = new ContainerRuntimePolicyScopeVariablesAList(this, "scope_variables", false);
  public get scopeVariables() {
    return this._scopeVariables;
  }
  public putScopeVariables(value: ContainerRuntimePolicyScopeVariablesA[] | cdktf.IResolvable) {
    this._scopeVariables.internalValue = value;
  }
  public resetScopeVariables() {
    this._scopeVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeVariablesInput() {
    return this._scopeVariables.internalValue;
  }

  // system_integrity_protection - computed: false, optional: true, required: false
  private _systemIntegrityProtection = new ContainerRuntimePolicySystemIntegrityProtectionOutputReference(this, "system_integrity_protection");
  public get systemIntegrityProtection() {
    return this._systemIntegrityProtection;
  }
  public putSystemIntegrityProtection(value: ContainerRuntimePolicySystemIntegrityProtection) {
    this._systemIntegrityProtection.internalValue = value;
  }
  public resetSystemIntegrityProtection() {
    this._systemIntegrityProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIntegrityProtectionInput() {
    return this._systemIntegrityProtection.internalValue;
  }

  // tripwire - computed: false, optional: true, required: false
  private _tripwire = new ContainerRuntimePolicyTripwireOutputReference(this, "tripwire");
  public get tripwire() {
    return this._tripwire;
  }
  public putTripwire(value: ContainerRuntimePolicyTripwire) {
    this._tripwire.internalValue = value;
  }
  public resetTripwire() {
    this._tripwire.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tripwireInput() {
    return this._tripwire.internalValue;
  }

  // whitelisted_os_users - computed: false, optional: true, required: false
  private _whitelistedOsUsers = new ContainerRuntimePolicyWhitelistedOsUsersOutputReference(this, "whitelisted_os_users");
  public get whitelistedOsUsers() {
    return this._whitelistedOsUsers;
  }
  public putWhitelistedOsUsers(value: ContainerRuntimePolicyWhitelistedOsUsers) {
    this._whitelistedOsUsers.internalValue = value;
  }
  public resetWhitelistedOsUsers() {
    this._whitelistedOsUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistedOsUsersInput() {
    return this._whitelistedOsUsers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationScopes),
      audit_all_network_activity: cdktf.booleanToTerraform(this._auditAllNetworkActivity),
      audit_all_processes_activity: cdktf.booleanToTerraform(this._auditAllProcessesActivity),
      audit_brute_force_login: cdktf.booleanToTerraform(this._auditBruteForceLogin),
      audit_full_command_arguments: cdktf.booleanToTerraform(this._auditFullCommandArguments),
      author: cdktf.stringToTerraform(this._author),
      block_access_host_network: cdktf.booleanToTerraform(this._blockAccessHostNetwork),
      block_adding_capabilities: cdktf.booleanToTerraform(this._blockAddingCapabilities),
      block_container_exec: cdktf.booleanToTerraform(this._blockContainerExec),
      block_cryptocurrency_mining: cdktf.booleanToTerraform(this._blockCryptocurrencyMining),
      block_disallowed_images: cdktf.booleanToTerraform(this._blockDisallowedImages),
      block_fileless_exec: cdktf.booleanToTerraform(this._blockFilelessExec),
      block_low_port_binding: cdktf.booleanToTerraform(this._blockLowPortBinding),
      block_non_compliant_workloads: cdktf.booleanToTerraform(this._blockNonCompliantWorkloads),
      block_non_k8s_containers: cdktf.booleanToTerraform(this._blockNonK8SContainers),
      block_privileged_containers: cdktf.booleanToTerraform(this._blockPrivilegedContainers),
      block_root_user: cdktf.booleanToTerraform(this._blockRootUser),
      block_use_ipc_namespace: cdktf.booleanToTerraform(this._blockUseIpcNamespace),
      block_use_pid_namespace: cdktf.booleanToTerraform(this._blockUsePidNamespace),
      block_use_user_namespace: cdktf.booleanToTerraform(this._blockUseUserNamespace),
      block_use_uts_namespace: cdktf.booleanToTerraform(this._blockUseUtsNamespace),
      blocked_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedCapabilities),
      blocked_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedFiles),
      blocked_inbound_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedInboundPorts),
      blocked_outbound_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedOutboundPorts),
      blocked_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedPackages),
      blocked_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockedVolumes),
      container_exec_allowed_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._containerExecAllowedProcesses),
      created: cdktf.stringToTerraform(this._created),
      cve: cdktf.stringToTerraform(this._cve),
      default_security_profile: cdktf.stringToTerraform(this._defaultSecurityProfile),
      description: cdktf.stringToTerraform(this._description),
      digest: cdktf.stringToTerraform(this._digest),
      enable_crypto_mining_dns: cdktf.booleanToTerraform(this._enableCryptoMiningDns),
      enable_fork_guard: cdktf.booleanToTerraform(this._enableForkGuard),
      enable_ip_reputation: cdktf.booleanToTerraform(this._enableIpReputation),
      enable_port_scan_protection: cdktf.booleanToTerraform(this._enablePortScanProtection),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enforce: cdktf.booleanToTerraform(this._enforce),
      enforce_after_days: cdktf.numberToTerraform(this._enforceAfterDays),
      enforce_scheduler_added_on: cdktf.numberToTerraform(this._enforceSchedulerAddedOn),
      exclude_application_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeApplicationScopes),
      fork_guard_process_limit: cdktf.numberToTerraform(this._forkGuardProcessLimit),
      id: cdktf.stringToTerraform(this._id),
      image_name: cdktf.stringToTerraform(this._imageName),
      is_audit_checked: cdktf.booleanToTerraform(this._isAuditChecked),
      is_auto_generated: cdktf.booleanToTerraform(this._isAutoGenerated),
      is_ootb_policy: cdktf.booleanToTerraform(this._isOotbPolicy),
      lastupdate: cdktf.numberToTerraform(this._lastupdate),
      monitor_system_time_changes: cdktf.booleanToTerraform(this._monitorSystemTimeChanges),
      name: cdktf.stringToTerraform(this._name),
      no_new_privileges: cdktf.booleanToTerraform(this._noNewPrivileges),
      only_registered_images: cdktf.booleanToTerraform(this._onlyRegisteredImages),
      permission: cdktf.stringToTerraform(this._permission),
      registry: cdktf.stringToTerraform(this._registry),
      repo_name: cdktf.stringToTerraform(this._repoName),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      runtime_mode: cdktf.numberToTerraform(this._runtimeMode),
      runtime_type: cdktf.stringToTerraform(this._runtimeType),
      scope_expression: cdktf.stringToTerraform(this._scopeExpression),
      type: cdktf.stringToTerraform(this._type),
      updated: cdktf.stringToTerraform(this._updated),
      version: cdktf.stringToTerraform(this._version),
      vpatch_version: cdktf.stringToTerraform(this._vpatchVersion),
      allowed_executables: cdktf.listMapper(containerRuntimePolicyAllowedExecutablesToTerraform, true)(this._allowedExecutables.internalValue),
      allowed_registries: cdktf.listMapper(containerRuntimePolicyAllowedRegistriesToTerraform, true)(this._allowedRegistries.internalValue),
      auditing: containerRuntimePolicyAuditingToTerraform(this._auditing.internalValue),
      blacklisted_os_users: containerRuntimePolicyBlacklistedOsUsersToTerraform(this._blacklistedOsUsers.internalValue),
      bypass_scope: cdktf.listMapper(containerRuntimePolicyBypassScopeToTerraform, true)(this._bypassScope.internalValue),
      container_exec: containerRuntimePolicyContainerExecToTerraform(this._containerExec.internalValue),
      drift_prevention: cdktf.listMapper(containerRuntimePolicyDriftPreventionToTerraform, true)(this._driftPrevention.internalValue),
      executable_blacklist: cdktf.listMapper(containerRuntimePolicyExecutableBlacklistStructToTerraform, true)(this._executableBlacklist.internalValue),
      failed_kubernetes_checks: containerRuntimePolicyFailedKubernetesChecksToTerraform(this._failedKubernetesChecks.internalValue),
      file_block: containerRuntimePolicyFileBlockToTerraform(this._fileBlock.internalValue),
      file_integrity_monitoring: cdktf.listMapper(containerRuntimePolicyFileIntegrityMonitoringToTerraform, true)(this._fileIntegrityMonitoring.internalValue),
      limit_container_privileges: cdktf.listMapper(containerRuntimePolicyLimitContainerPrivilegesToTerraform, true)(this._limitContainerPrivileges.internalValue),
      linux_capabilities: containerRuntimePolicyLinuxCapabilitiesToTerraform(this._linuxCapabilities.internalValue),
      malware_scan_options: containerRuntimePolicyMalwareScanOptionsToTerraform(this._malwareScanOptions.internalValue),
      package_block: containerRuntimePolicyPackageBlockToTerraform(this._packageBlock.internalValue),
      port_block: containerRuntimePolicyPortBlockToTerraform(this._portBlock.internalValue),
      readonly_files: containerRuntimePolicyReadonlyFilesToTerraform(this._readonlyFiles.internalValue),
      readonly_registry: containerRuntimePolicyReadonlyRegistryToTerraform(this._readonlyRegistry.internalValue),
      registry_access_monitoring: containerRuntimePolicyRegistryAccessMonitoringToTerraform(this._registryAccessMonitoring.internalValue),
      restricted_volumes: cdktf.listMapper(containerRuntimePolicyRestrictedVolumesToTerraform, true)(this._restrictedVolumes.internalValue),
      reverse_shell: containerRuntimePolicyReverseShellToTerraform(this._reverseShell.internalValue),
      scope: cdktf.listMapper(containerRuntimePolicyScopeToTerraform, true)(this._scope.internalValue),
      scope_variables: cdktf.listMapper(containerRuntimePolicyScopeVariablesAToTerraform, true)(this._scopeVariables.internalValue),
      system_integrity_protection: containerRuntimePolicySystemIntegrityProtectionToTerraform(this._systemIntegrityProtection.internalValue),
      tripwire: containerRuntimePolicyTripwireToTerraform(this._tripwire.internalValue),
      whitelisted_os_users: containerRuntimePolicyWhitelistedOsUsersToTerraform(this._whitelistedOsUsers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      audit_all_network_activity: {
        value: cdktf.booleanToHclTerraform(this._auditAllNetworkActivity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_all_processes_activity: {
        value: cdktf.booleanToHclTerraform(this._auditAllProcessesActivity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_brute_force_login: {
        value: cdktf.booleanToHclTerraform(this._auditBruteForceLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_full_command_arguments: {
        value: cdktf.booleanToHclTerraform(this._auditFullCommandArguments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      author: {
        value: cdktf.stringToHclTerraform(this._author),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_access_host_network: {
        value: cdktf.booleanToHclTerraform(this._blockAccessHostNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_adding_capabilities: {
        value: cdktf.booleanToHclTerraform(this._blockAddingCapabilities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_container_exec: {
        value: cdktf.booleanToHclTerraform(this._blockContainerExec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_cryptocurrency_mining: {
        value: cdktf.booleanToHclTerraform(this._blockCryptocurrencyMining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_disallowed_images: {
        value: cdktf.booleanToHclTerraform(this._blockDisallowedImages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_fileless_exec: {
        value: cdktf.booleanToHclTerraform(this._blockFilelessExec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_low_port_binding: {
        value: cdktf.booleanToHclTerraform(this._blockLowPortBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_non_compliant_workloads: {
        value: cdktf.booleanToHclTerraform(this._blockNonCompliantWorkloads),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_non_k8s_containers: {
        value: cdktf.booleanToHclTerraform(this._blockNonK8SContainers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_privileged_containers: {
        value: cdktf.booleanToHclTerraform(this._blockPrivilegedContainers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_root_user: {
        value: cdktf.booleanToHclTerraform(this._blockRootUser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_use_ipc_namespace: {
        value: cdktf.booleanToHclTerraform(this._blockUseIpcNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_use_pid_namespace: {
        value: cdktf.booleanToHclTerraform(this._blockUsePidNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_use_user_namespace: {
        value: cdktf.booleanToHclTerraform(this._blockUseUserNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_use_uts_namespace: {
        value: cdktf.booleanToHclTerraform(this._blockUseUtsNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blocked_capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedCapabilities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_inbound_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedInboundPorts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_outbound_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedOutboundPorts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_packages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedPackages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_volumes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockedVolumes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      container_exec_allowed_processes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._containerExecAllowedProcesses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      created: {
        value: cdktf.stringToHclTerraform(this._created),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cve: {
        value: cdktf.stringToHclTerraform(this._cve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_security_profile: {
        value: cdktf.stringToHclTerraform(this._defaultSecurityProfile),
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
      digest: {
        value: cdktf.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_crypto_mining_dns: {
        value: cdktf.booleanToHclTerraform(this._enableCryptoMiningDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_fork_guard: {
        value: cdktf.booleanToHclTerraform(this._enableForkGuard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ip_reputation: {
        value: cdktf.booleanToHclTerraform(this._enableIpReputation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_port_scan_protection: {
        value: cdktf.booleanToHclTerraform(this._enablePortScanProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce: {
        value: cdktf.booleanToHclTerraform(this._enforce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_after_days: {
        value: cdktf.numberToHclTerraform(this._enforceAfterDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enforce_scheduler_added_on: {
        value: cdktf.numberToHclTerraform(this._enforceSchedulerAddedOn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclude_application_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeApplicationScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fork_guard_process_limit: {
        value: cdktf.numberToHclTerraform(this._forkGuardProcessLimit),
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
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_audit_checked: {
        value: cdktf.booleanToHclTerraform(this._isAuditChecked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_auto_generated: {
        value: cdktf.booleanToHclTerraform(this._isAutoGenerated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ootb_policy: {
        value: cdktf.booleanToHclTerraform(this._isOotbPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lastupdate: {
        value: cdktf.numberToHclTerraform(this._lastupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_system_time_changes: {
        value: cdktf.booleanToHclTerraform(this._monitorSystemTimeChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_new_privileges: {
        value: cdktf.booleanToHclTerraform(this._noNewPrivileges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      only_registered_images: {
        value: cdktf.booleanToHclTerraform(this._onlyRegisteredImages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permission: {
        value: cdktf.stringToHclTerraform(this._permission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry: {
        value: cdktf.stringToHclTerraform(this._registry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_name: {
        value: cdktf.stringToHclTerraform(this._repoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_mode: {
        value: cdktf.numberToHclTerraform(this._runtimeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      runtime_type: {
        value: cdktf.stringToHclTerraform(this._runtimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_expression: {
        value: cdktf.stringToHclTerraform(this._scopeExpression),
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
      updated: {
        value: cdktf.stringToHclTerraform(this._updated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpatch_version: {
        value: cdktf.stringToHclTerraform(this._vpatchVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_executables: {
        value: cdktf.listMapperHcl(containerRuntimePolicyAllowedExecutablesToHclTerraform, true)(this._allowedExecutables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyAllowedExecutablesList",
      },
      allowed_registries: {
        value: cdktf.listMapperHcl(containerRuntimePolicyAllowedRegistriesToHclTerraform, true)(this._allowedRegistries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyAllowedRegistriesList",
      },
      auditing: {
        value: containerRuntimePolicyAuditingToHclTerraform(this._auditing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyAuditingList",
      },
      blacklisted_os_users: {
        value: containerRuntimePolicyBlacklistedOsUsersToHclTerraform(this._blacklistedOsUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyBlacklistedOsUsersList",
      },
      bypass_scope: {
        value: cdktf.listMapperHcl(containerRuntimePolicyBypassScopeToHclTerraform, true)(this._bypassScope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyBypassScopeList",
      },
      container_exec: {
        value: containerRuntimePolicyContainerExecToHclTerraform(this._containerExec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyContainerExecList",
      },
      drift_prevention: {
        value: cdktf.listMapperHcl(containerRuntimePolicyDriftPreventionToHclTerraform, true)(this._driftPrevention.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyDriftPreventionList",
      },
      executable_blacklist: {
        value: cdktf.listMapperHcl(containerRuntimePolicyExecutableBlacklistStructToHclTerraform, true)(this._executableBlacklist.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyExecutableBlacklistStructList",
      },
      failed_kubernetes_checks: {
        value: containerRuntimePolicyFailedKubernetesChecksToHclTerraform(this._failedKubernetesChecks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyFailedKubernetesChecksList",
      },
      file_block: {
        value: containerRuntimePolicyFileBlockToHclTerraform(this._fileBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyFileBlockList",
      },
      file_integrity_monitoring: {
        value: cdktf.listMapperHcl(containerRuntimePolicyFileIntegrityMonitoringToHclTerraform, true)(this._fileIntegrityMonitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyFileIntegrityMonitoringList",
      },
      limit_container_privileges: {
        value: cdktf.listMapperHcl(containerRuntimePolicyLimitContainerPrivilegesToHclTerraform, true)(this._limitContainerPrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyLimitContainerPrivilegesList",
      },
      linux_capabilities: {
        value: containerRuntimePolicyLinuxCapabilitiesToHclTerraform(this._linuxCapabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyLinuxCapabilitiesList",
      },
      malware_scan_options: {
        value: containerRuntimePolicyMalwareScanOptionsToHclTerraform(this._malwareScanOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyMalwareScanOptionsList",
      },
      package_block: {
        value: containerRuntimePolicyPackageBlockToHclTerraform(this._packageBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyPackageBlockList",
      },
      port_block: {
        value: containerRuntimePolicyPortBlockToHclTerraform(this._portBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyPortBlockList",
      },
      readonly_files: {
        value: containerRuntimePolicyReadonlyFilesToHclTerraform(this._readonlyFiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyReadonlyFilesList",
      },
      readonly_registry: {
        value: containerRuntimePolicyReadonlyRegistryToHclTerraform(this._readonlyRegistry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyReadonlyRegistryList",
      },
      registry_access_monitoring: {
        value: containerRuntimePolicyRegistryAccessMonitoringToHclTerraform(this._registryAccessMonitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyRegistryAccessMonitoringList",
      },
      restricted_volumes: {
        value: cdktf.listMapperHcl(containerRuntimePolicyRestrictedVolumesToHclTerraform, true)(this._restrictedVolumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyRestrictedVolumesList",
      },
      reverse_shell: {
        value: containerRuntimePolicyReverseShellToHclTerraform(this._reverseShell.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyReverseShellList",
      },
      scope: {
        value: cdktf.listMapperHcl(containerRuntimePolicyScopeToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyScopeList",
      },
      scope_variables: {
        value: cdktf.listMapperHcl(containerRuntimePolicyScopeVariablesAToHclTerraform, true)(this._scopeVariables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyScopeVariablesAList",
      },
      system_integrity_protection: {
        value: containerRuntimePolicySystemIntegrityProtectionToHclTerraform(this._systemIntegrityProtection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicySystemIntegrityProtectionList",
      },
      tripwire: {
        value: containerRuntimePolicyTripwireToHclTerraform(this._tripwire.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyTripwireList",
      },
      whitelisted_os_users: {
        value: containerRuntimePolicyWhitelistedOsUsersToHclTerraform(this._whitelistedOsUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerRuntimePolicyWhitelistedOsUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
