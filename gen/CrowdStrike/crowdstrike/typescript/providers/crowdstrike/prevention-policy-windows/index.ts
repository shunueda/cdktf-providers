// https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PreventionPolicyWindowsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable the setting. Allows the sensor to get more data from a user-mode component it loads into all eligible processes, which augments online machine learning and turns on additional detections. Recommend testing with critical applications before full deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#additional_user_mode_data PreventionPolicyWindows#additional_user_mode_data}
  */
  readonly additionalUserModeData?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Perform advanced remediation for IOA detections to kill processes, quarantine files, remove scheduled tasks, and clear and delete ASEP registry values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#advanced_remediation PreventionPolicyWindows#advanced_remediation}
  */
  readonly advancedRemediation?: boolean | cdktf.IResolvable;
  /**
  * Use cloud-based machine learning informed by global analysis of executables to detect and prevent adware and potentially unwanted programs (PUP) for your online hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#adware_and_pup PreventionPolicyWindows#adware_and_pup}
  */
  readonly adwareAndPup?: PreventionPolicyWindowsAdwareAndPup;
  /**
  * Whether to enable the setting. Creation of a process, such as a command prompt, from an exploited browser or browser flash plugin was blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#application_exploitation_activity PreventionPolicyWindows#application_exploitation_activity}
  */
  readonly applicationExploitationActivity?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Deletion of backups often indicative of ransomware activity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#backup_deletion PreventionPolicyWindows#backup_deletion}
  */
  readonly backupDeletion?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides visibility into BIOS. Detects suspicious and unexpected images. Recommend testing to monitor system startup performance before full deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#bios_deep_visibility PreventionPolicyWindows#bios_deep_visibility}
  */
  readonly biosDeepVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block BCD registry operations that CrowdStrike analysts classify as suspicious. Focuses on dynamic IOAs, such as security config changes. The associated process may be killed. Requires suspicious_registry_operations to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#boot_configuration_database_protection PreventionPolicyWindows#boot_configuration_database_protection}
  */
  readonly bootConfigurationDatabaseProtection?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Execution of a command shell was blocked and is indicative of the system hosting a Chopper web page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#chopper_webshell PreventionPolicyWindows#chopper_webshell}
  */
  readonly chopperWebshell?: boolean | cdktf.IResolvable;
  /**
  * Use cloud-based machine learning informed by global analysis of executables to detect and prevent known malware for your online hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#cloud_anti_malware PreventionPolicyWindows#cloud_anti_malware}
  */
  readonly cloudAntiMalware?: PreventionPolicyWindowsCloudAntiMalware;
  /**
  * Identifies potentially malicious macros in Microsoft Office files and, if prevention is enabled, either quarantines the file or removes the malicious macros before releasing the file back to the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#cloud_anti_malware_microsoft_office_files PreventionPolicyWindows#cloud_anti_malware_microsoft_office_files}
  */
  readonly cloudAntiMalwareMicrosoftOfficeFiles?: PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFiles;
  /**
  * For online hosts running on-demand scans initiated by end users, use cloud-based machine learning informed by global analysis of executables to detect and prevent known malware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#cloud_anti_malware_user_initiated PreventionPolicyWindows#cloud_anti_malware_user_initiated}
  */
  readonly cloudAntiMalwareUserInitiated?: PreventionPolicyWindowsCloudAntiMalwareUserInitiated;
  /**
  * Whether to enable the setting. Kill processes that unexpectedly injected code into another process. Requires additional_user_mode_data to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#code_injection PreventionPolicyWindows#code_injection}
  */
  readonly codeInjection?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Kill suspicious processes determined to be stealing logins and passwords. Requires additional_user_mode_data to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#credential_dumping PreventionPolicyWindows#credential_dumping}
  */
  readonly credentialDumping?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. A process associated with Cryptowall was blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#cryptowall PreventionPolicyWindows#cryptowall}
  */
  readonly cryptowall?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block processes matching hashes that you add to IOC Management with the action set to "Block" or "Block, hide detection".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#custom_blocking PreventionPolicyWindows#custom_blocking}
  */
  readonly customBlocking?: boolean | cdktf.IResolvable;
  /**
  * Description of the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#description PreventionPolicyWindows#description}
  */
  readonly description?: string;
  /**
  * Whether to enable the setting. Use machine learning to analyze suspicious files when they're written to disk. To adjust detection sensitivity, change Anti-malware Detection levels in Sensor Machine Learning and Cloud Machine Learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#detect_on_write PreventionPolicyWindows#detect_on_write}
  */
  readonly detectOnWrite?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. A suspicious file written by a browser attempted to execute and was blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#drive_by_download PreventionPolicyWindows#drive_by_download}
  */
  readonly driveByDownload?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block the loading of kernel drivers that CrowdStrike analysts have identified as malicious. Available on Windows 10 and Windows Server 2016 and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#driver_load_prevention PreventionPolicyWindows#driver_load_prevention}
  */
  readonly driverLoadPrevention?: boolean | cdktf.IResolvable;
  /**
  * Enable the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#enabled PreventionPolicyWindows#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides visibility into malicious System Management Automation engine usage by any application. Requires interpreter_only to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#engine_full_visibility PreventionPolicyWindows#engine_full_visibility}
  */
  readonly engineFullVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. For hosts running Windows Server, increases sensor visibility of loaded DLLs. Improves detection coverage and telemetry, but may cause a small performance impact. Recommend testing with critical applications before full deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#enhanced_dll_load_visibility PreventionPolicyWindows#enhanced_dll_load_visibility}
  */
  readonly enhancedDllLoadVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. For hosts running Windows 10 1809 and Server 2019 and later, provides additional visibility into common exploitation techniques used to weaken or circumvent application security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#enhanced_exploitation_visibility PreventionPolicyWindows#enhanced_exploitation_visibility}
  */
  readonly enhancedExploitationVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Expand ML file size coverage. Existing ML level settings apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#enhanced_ml_for_larger_files PreventionPolicyWindows#enhanced_ml_for_larger_files}
  */
  readonly enhancedMlForLargerFiles?: boolean | cdktf.IResolvable;
  /**
  * Allows the sensor to get more data from a user-mode component it loads into all eligible processes, which augments online machine learning and turns on additional detections. Recommend testing with critical applications before full deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#extended_user_mode_data PreventionPolicyWindows#extended_user_mode_data}
  */
  readonly extendedUserModeData?: PreventionPolicyWindowsExtendedUserModeData;
  /**
  * Whether to enable the setting. A process that created a file with a known ransomware extension was terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#file_encryption PreventionPolicyWindows#file_encryption}
  */
  readonly fileEncryption?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. A process associated with a high volume of file system operations typical of ransomware behavior was terminated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#file_system_access PreventionPolicyWindows#file_system_access}
  */
  readonly fileSystemAccess?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. File System Containment will be enabled, this will allow prevention capabilities to automatically contain file system activity.  When disabled each user under active containment will be released and the File System Containment will enter a disabled mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#file_system_containment PreventionPolicyWindows#file_system_containment}
  */
  readonly fileSystemContainment?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. An Address Space Layout Randomization (ASLR) bypass attempt was detected and blocked. This may have been part of an attempted exploit. Requires additional_user_mode_data to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#force_aslr PreventionPolicyWindows#force_aslr}
  */
  readonly forceAslr?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. A process that had Force Data Execution Prevention (Force DEP) applied tried to execute non-executable memory and was blocked. Requires additional_user_mode_data to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#force_dep PreventionPolicyWindows#force_dep}
  */
  readonly forceDep?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides additional visibility into application exploits by using CPU hardware features that detect suspicious control flows. Available only for hosts running Windows 10 (RS4) or Windows Server 2016 Version 1803 or later and Skylake or later CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#hardware_enhanced_exploit_detection PreventionPolicyWindows#hardware_enhanced_exploit_detection}
  */
  readonly hardwareEnhancedExploitDetection?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. A heap spray attempt was detected and blocked. This may have been part of an attempted exploit. Requires additional_user_mode_data to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#heap_spray_preallocation PreventionPolicyWindows#heap_spray_preallocation}
  */
  readonly heapSprayPreallocation?: boolean | cdktf.IResolvable;
  /**
  * Host Group ids to attach to the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#host_groups PreventionPolicyWindows#host_groups}
  */
  readonly hostGroups: string[];
  /**
  * Whether to enable the setting. Allows the sensor to monitor unencrypted HTTP traffic and certain encrypted HTTPS traffic on the sensor for malicious patterns and generate detection events on non-Server systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#http_detections PreventionPolicyWindows#http_detections}
  */
  readonly httpDetections?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block processes that CrowdStrike Intelligence analysts classify as malicious. These are focused on static hash-based IOCs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#intelligence_sourced_threats PreventionPolicyWindows#intelligence_sourced_threats}
  */
  readonly intelligenceSourcedThreats?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides visibility into malicious PowerShell interpreter usage. For hosts running Windows 10, Script-Based Execution Monitoring may be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#interpreter_only PreventionPolicyWindows#interpreter_only}
  */
  readonly interpreterOnly?: boolean | cdktf.IResolvable;
  /**
  * IOA Rule Group to attach to the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#ioa_rule_groups PreventionPolicyWindows#ioa_rule_groups}
  */
  readonly ioaRuleGroups: string[];
  /**
  * Whether to enable the setting. JavaScript executing from a command line via rundll32.exe was prevented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#javascript_via_rundll32 PreventionPolicyWindows#javascript_via_rundll32}
  */
  readonly javascriptViaRundll32?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. A process determined to be associated with Locky was blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#locky PreventionPolicyWindows#locky}
  */
  readonly locky?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides visibility into in-memory attacks by scanning for suspicious artifacts on hosts with the following: an integrated GPU and supporting OS libraries, Windows 10 v1607 (RS1) or later, and a Skylake or newer Intel CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#memory_scanning PreventionPolicyWindows#memory_scanning}
  */
  readonly memoryScanning?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allows memory scanning to use the CPU or virtual CPU when an integrated GPU is not available. All Intel processors supported, requires Windows 8.1/2012 R2 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#memory_scanning_scan_with_cpu PreventionPolicyWindows#memory_scanning_scan_with_cpu}
  */
  readonly memoryScanningScanWithCpu?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Identifies potentially malicious macros in Microsoft Office files and, if prevention is enabled, either quarantines the file or removes the malicious macros before releasing the file back to the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#microsoft_office_file_suspicious_macro_removal PreventionPolicyWindows#microsoft_office_file_suspicious_macro_removal}
  */
  readonly microsoftOfficeFileSuspiciousMacroRemoval?: boolean | cdktf.IResolvable;
  /**
  * Name of the prevention policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#name PreventionPolicyWindows#name}
  */
  readonly name: string;
  /**
  * Whether to enable the setting. Show a pop-up notification to the end user when the Falcon sensor blocks, kills, or quarantines. These messages also show up in the Windows Event Viewer under Applications and Service Logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#notify_end_users PreventionPolicyWindows#notify_end_users}
  */
  readonly notifyEndUsers?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Allocating memory to the NULL (0) memory page was detected and blocked. This may have been part of an attempted exploit. Requires additional_user_mode_data to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#null_page_allocation PreventionPolicyWindows#null_page_allocation}
  */
  readonly nullPageAllocation?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides improved visibility into various script files being written to disk in addition to clouding a portion of their content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#on_write_script_file_visibility PreventionPolicyWindows#on_write_script_file_visibility}
  */
  readonly onWriteScriptFileVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block processes that CrowdStrike analysts classify as suspicious. These are focused on dynamic IOAs, such as malware, exploits and other threats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#prevent_suspicious_processes PreventionPolicyWindows#prevent_suspicious_processes}
  */
  readonly preventSuspiciousProcesses?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Quarantine executable files after they’re prevented by NGAV. When this is enabled, we recommend setting anti-malware prevention levels to Moderate or higher and not using other antivirus solutions. CrowdStrike Falcon registers with Windows Security Center, disabling Windows Defender.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#quarantine_and_security_center_registration PreventionPolicyWindows#quarantine_and_security_center_registration}
  */
  readonly quarantineAndSecurityCenterRegistration?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Quarantine executable files after they’re prevented by NGAV.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#quarantine_on_removable_media PreventionPolicyWindows#quarantine_on_removable_media}
  */
  readonly quarantineOnRemovableMedia?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Use machine learning to quarantine suspicious files when they're written to disk. To adjust quarantine sensitivity, change Anti-malware Prevention levels in Sensor Machine Learning and Cloud Machine Learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#quarantine_on_write PreventionPolicyWindows#quarantine_on_write}
  */
  readonly quarantineOnWrite?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Remove certain information from HTTP Detection events, including URL, raw HTTP header and POST bodies if they were present. This does not affect the generation of HTTP Detections, only additional details that would be included and may include personal information (depending on the malware in question). When disabled, the information is used to improve the response to detection events. Has no effect unless HTTP Detections is also enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#redact_http_detection_details PreventionPolicyWindows#redact_http_detection_details}
  */
  readonly redactHttpDetectionDetails?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. For hosts running Windows 10 and Servers 2016 and later, provides visibility into suspicious scripts and VBA macros in Office documents. Requires Quarantine & Security Center Registration toggle to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#script_based_execution_monitoring PreventionPolicyWindows#script_based_execution_monitoring}
  */
  readonly scriptBasedExecutionMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Overwriting a Structured Exception Handler (SEH) was detected and may have been blocked. This may have been part of an attempted exploit. Requires additional_user_mode_data to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#seh_overwrite_protection PreventionPolicyWindows#seh_overwrite_protection}
  */
  readonly sehOverwriteProtection?: boolean | cdktf.IResolvable;
  /**
  * For offline and online hosts, use sensor-based machine learning to identify and analyze unknown executables as they run to detect and prevent malware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#sensor_anti_malware PreventionPolicyWindows#sensor_anti_malware}
  */
  readonly sensorAntiMalware?: PreventionPolicyWindowsSensorAntiMalware;
  /**
  * For offline and online hosts running on-demand scans initiated by end users, use sensor-based machine learning to identify and analyze unknown executables to detect and prevent malware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#sensor_anti_malware_user_initiated PreventionPolicyWindows#sensor_anti_malware_user_initiated}
  */
  readonly sensorAntiMalwareUserInitiated?: PreventionPolicyWindowsSensorAntiMalwareUserInitiated;
  /**
  * Whether to enable the setting. Blocks attempts to tamper with the sensor. If disabled, the sensor still creates detections for tampering attempts but doesn’t block them. Disabling not recommended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#sensor_tampering_protection PreventionPolicyWindows#sensor_tampering_protection}
  */
  readonly sensorTamperingProtection?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block registry operations that CrowdStrike analysts classify as suspicious. Focuses on dynamic IOAs, such as ASEPs and security config changes. The associated process may be killed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#suspicious_registry_operations PreventionPolicyWindows#suspicious_registry_operations}
  */
  readonly suspiciousRegistryOperations?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Block execution of scripts and commands that CrowdStrike analysts classify as suspicious. Requires Interpreter-Only and/or Script-Based Execution Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#suspicious_scripts_and_commands PreventionPolicyWindows#suspicious_scripts_and_commands}
  */
  readonly suspiciousScriptsAndCommands?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Upload all unknown detection-related executables for advanced analysis in the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#upload_unknown_detection_related_executables PreventionPolicyWindows#upload_unknown_detection_related_executables}
  */
  readonly uploadUnknownDetectionRelatedExecutables?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Upload all unknown executables for advanced analysis in the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#upload_unknown_executables PreventionPolicyWindows#upload_unknown_executables}
  */
  readonly uploadUnknownExecutables?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Start an on-demand scan when an end user inserts a USB device. To adjust detection sensitivity, change Anti-malware Detection levels in On-Demand Scans Machine Learning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#usb_insertion_triggered_scan PreventionPolicyWindows#usb_insertion_triggered_scan}
  */
  readonly usbInsertionTriggeredScan?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Create an alert when a suspicious process deletes volume shadow copies. Recommended: Use audit mode with a test group to try allowlisting trusted software before turning on Protect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#volume_shadow_copy_audit PreventionPolicyWindows#volume_shadow_copy_audit}
  */
  readonly volumeShadowCopyAudit?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Prevent suspicious processes from deleting volume shadow copies. Requires volume_shadow_copy_audit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#volume_shadow_copy_protect PreventionPolicyWindows#volume_shadow_copy_protect}
  */
  readonly volumeShadowCopyProtect?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Quarantine and block the loading of newly written kernel drivers that CrowdStrike analysts have identified as vulnerable. Available on Windows 10 and Windows 2016 and later. Requires driver_load_prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#vulnerable_driver_protection PreventionPolicyWindows#vulnerable_driver_protection}
  */
  readonly vulnerableDriverProtection?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. A command line process associated with Windows logon bypass was prevented from executing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#windows_logon_bypass_sticky_keys PreventionPolicyWindows#windows_logon_bypass_sticky_keys}
  */
  readonly windowsLogonBypassStickyKeys?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the setting. Provides visibility into WSL2 distributions by enabling a Falcon sensor plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#wsl2_visibility PreventionPolicyWindows#wsl2_visibility}
  */
  readonly wsl2Visibility?: boolean | cdktf.IResolvable;
}
export interface PreventionPolicyWindowsAdwareAndPup {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#detection PreventionPolicyWindows#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#prevention PreventionPolicyWindows#prevention}
  */
  readonly prevention: string;
}

export function preventionPolicyWindowsAdwareAndPupToTerraform(struct?: PreventionPolicyWindowsAdwareAndPup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function preventionPolicyWindowsAdwareAndPupToHclTerraform(struct?: PreventionPolicyWindowsAdwareAndPup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevention: {
      value: cdktf.stringToHclTerraform(struct!.prevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreventionPolicyWindowsAdwareAndPupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PreventionPolicyWindowsAdwareAndPup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    if (this._prevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevention = this._prevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreventionPolicyWindowsAdwareAndPup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detection = undefined;
      this._prevention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detection = value.detection;
      this._prevention = value.prevention;
    }
  }

  // detection - computed: true, optional: false, required: true
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }

  // prevention - computed: true, optional: false, required: true
  private _prevention?: string; 
  public get prevention() {
    return this.getStringAttribute('prevention');
  }
  public set prevention(value: string) {
    this._prevention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preventionInput() {
    return this._prevention;
  }
}
export interface PreventionPolicyWindowsCloudAntiMalware {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#detection PreventionPolicyWindows#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#prevention PreventionPolicyWindows#prevention}
  */
  readonly prevention: string;
}

export function preventionPolicyWindowsCloudAntiMalwareToTerraform(struct?: PreventionPolicyWindowsCloudAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function preventionPolicyWindowsCloudAntiMalwareToHclTerraform(struct?: PreventionPolicyWindowsCloudAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevention: {
      value: cdktf.stringToHclTerraform(struct!.prevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreventionPolicyWindowsCloudAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PreventionPolicyWindowsCloudAntiMalware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    if (this._prevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevention = this._prevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreventionPolicyWindowsCloudAntiMalware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detection = undefined;
      this._prevention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detection = value.detection;
      this._prevention = value.prevention;
    }
  }

  // detection - computed: true, optional: false, required: true
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }

  // prevention - computed: true, optional: false, required: true
  private _prevention?: string; 
  public get prevention() {
    return this.getStringAttribute('prevention');
  }
  public set prevention(value: string) {
    this._prevention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preventionInput() {
    return this._prevention;
  }
}
export interface PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFiles {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#detection PreventionPolicyWindows#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#prevention PreventionPolicyWindows#prevention}
  */
  readonly prevention: string;
}

export function preventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFilesToTerraform(struct?: PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function preventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFilesToHclTerraform(struct?: PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevention: {
      value: cdktf.stringToHclTerraform(struct!.prevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    if (this._prevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevention = this._prevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detection = undefined;
      this._prevention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detection = value.detection;
      this._prevention = value.prevention;
    }
  }

  // detection - computed: true, optional: false, required: true
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }

  // prevention - computed: true, optional: false, required: true
  private _prevention?: string; 
  public get prevention() {
    return this.getStringAttribute('prevention');
  }
  public set prevention(value: string) {
    this._prevention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preventionInput() {
    return this._prevention;
  }
}
export interface PreventionPolicyWindowsCloudAntiMalwareUserInitiated {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#detection PreventionPolicyWindows#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#prevention PreventionPolicyWindows#prevention}
  */
  readonly prevention: string;
}

export function preventionPolicyWindowsCloudAntiMalwareUserInitiatedToTerraform(struct?: PreventionPolicyWindowsCloudAntiMalwareUserInitiated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function preventionPolicyWindowsCloudAntiMalwareUserInitiatedToHclTerraform(struct?: PreventionPolicyWindowsCloudAntiMalwareUserInitiated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevention: {
      value: cdktf.stringToHclTerraform(struct!.prevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreventionPolicyWindowsCloudAntiMalwareUserInitiatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PreventionPolicyWindowsCloudAntiMalwareUserInitiated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    if (this._prevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevention = this._prevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreventionPolicyWindowsCloudAntiMalwareUserInitiated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detection = undefined;
      this._prevention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detection = value.detection;
      this._prevention = value.prevention;
    }
  }

  // detection - computed: true, optional: false, required: true
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }

  // prevention - computed: true, optional: false, required: true
  private _prevention?: string; 
  public get prevention() {
    return this.getStringAttribute('prevention');
  }
  public set prevention(value: string) {
    this._prevention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preventionInput() {
    return this._prevention;
  }
}
export interface PreventionPolicyWindowsExtendedUserModeData {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#detection PreventionPolicyWindows#detection}
  */
  readonly detection: string;
}

export function preventionPolicyWindowsExtendedUserModeDataToTerraform(struct?: PreventionPolicyWindowsExtendedUserModeData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
  }
}


export function preventionPolicyWindowsExtendedUserModeDataToHclTerraform(struct?: PreventionPolicyWindowsExtendedUserModeData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreventionPolicyWindowsExtendedUserModeDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PreventionPolicyWindowsExtendedUserModeData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreventionPolicyWindowsExtendedUserModeData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detection = value.detection;
    }
  }

  // detection - computed: true, optional: false, required: true
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }
}
export interface PreventionPolicyWindowsSensorAntiMalware {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#detection PreventionPolicyWindows#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#prevention PreventionPolicyWindows#prevention}
  */
  readonly prevention: string;
}

export function preventionPolicyWindowsSensorAntiMalwareToTerraform(struct?: PreventionPolicyWindowsSensorAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function preventionPolicyWindowsSensorAntiMalwareToHclTerraform(struct?: PreventionPolicyWindowsSensorAntiMalware | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevention: {
      value: cdktf.stringToHclTerraform(struct!.prevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreventionPolicyWindowsSensorAntiMalwareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PreventionPolicyWindowsSensorAntiMalware | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    if (this._prevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevention = this._prevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreventionPolicyWindowsSensorAntiMalware | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detection = undefined;
      this._prevention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detection = value.detection;
      this._prevention = value.prevention;
    }
  }

  // detection - computed: true, optional: false, required: true
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }

  // prevention - computed: true, optional: false, required: true
  private _prevention?: string; 
  public get prevention() {
    return this.getStringAttribute('prevention');
  }
  public set prevention(value: string) {
    this._prevention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preventionInput() {
    return this._prevention;
  }
}
export interface PreventionPolicyWindowsSensorAntiMalwareUserInitiated {
  /**
  * Machine learning level for detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#detection PreventionPolicyWindows#detection}
  */
  readonly detection: string;
  /**
  * Machine learning level for prevention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#prevention PreventionPolicyWindows#prevention}
  */
  readonly prevention: string;
}

export function preventionPolicyWindowsSensorAntiMalwareUserInitiatedToTerraform(struct?: PreventionPolicyWindowsSensorAntiMalwareUserInitiated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection: cdktf.stringToTerraform(struct!.detection),
    prevention: cdktf.stringToTerraform(struct!.prevention),
  }
}


export function preventionPolicyWindowsSensorAntiMalwareUserInitiatedToHclTerraform(struct?: PreventionPolicyWindowsSensorAntiMalwareUserInitiated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection: {
      value: cdktf.stringToHclTerraform(struct!.detection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevention: {
      value: cdktf.stringToHclTerraform(struct!.prevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PreventionPolicyWindowsSensorAntiMalwareUserInitiatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PreventionPolicyWindowsSensorAntiMalwareUserInitiated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detection !== undefined) {
      hasAnyValues = true;
      internalValueResult.detection = this._detection;
    }
    if (this._prevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevention = this._prevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PreventionPolicyWindowsSensorAntiMalwareUserInitiated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detection = undefined;
      this._prevention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detection = value.detection;
      this._prevention = value.prevention;
    }
  }

  // detection - computed: true, optional: false, required: true
  private _detection?: string; 
  public get detection() {
    return this.getStringAttribute('detection');
  }
  public set detection(value: string) {
    this._detection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionInput() {
    return this._detection;
  }

  // prevention - computed: true, optional: false, required: true
  private _prevention?: string; 
  public get prevention() {
    return this.getStringAttribute('prevention');
  }
  public set prevention(value: string) {
    this._prevention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preventionInput() {
    return this._prevention;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows crowdstrike_prevention_policy_windows}
*/
export class PreventionPolicyWindows extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crowdstrike_prevention_policy_windows";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PreventionPolicyWindows resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PreventionPolicyWindows to import
  * @param importFromId The id of the existing PreventionPolicyWindows that should be imported. Refer to the {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PreventionPolicyWindows to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crowdstrike_prevention_policy_windows", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crowdstrike/crowdstrike/0.0.43/docs/resources/prevention_policy_windows crowdstrike_prevention_policy_windows} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PreventionPolicyWindowsConfig
  */
  public constructor(scope: Construct, id: string, config: PreventionPolicyWindowsConfig) {
    super(scope, id, {
      terraformResourceType: 'crowdstrike_prevention_policy_windows',
      terraformGeneratorMetadata: {
        providerName: 'crowdstrike',
        providerVersion: '0.0.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalUserModeData = config.additionalUserModeData;
    this._advancedRemediation = config.advancedRemediation;
    this._adwareAndPup.internalValue = config.adwareAndPup;
    this._applicationExploitationActivity = config.applicationExploitationActivity;
    this._backupDeletion = config.backupDeletion;
    this._biosDeepVisibility = config.biosDeepVisibility;
    this._bootConfigurationDatabaseProtection = config.bootConfigurationDatabaseProtection;
    this._chopperWebshell = config.chopperWebshell;
    this._cloudAntiMalware.internalValue = config.cloudAntiMalware;
    this._cloudAntiMalwareMicrosoftOfficeFiles.internalValue = config.cloudAntiMalwareMicrosoftOfficeFiles;
    this._cloudAntiMalwareUserInitiated.internalValue = config.cloudAntiMalwareUserInitiated;
    this._codeInjection = config.codeInjection;
    this._credentialDumping = config.credentialDumping;
    this._cryptowall = config.cryptowall;
    this._customBlocking = config.customBlocking;
    this._description = config.description;
    this._detectOnWrite = config.detectOnWrite;
    this._driveByDownload = config.driveByDownload;
    this._driverLoadPrevention = config.driverLoadPrevention;
    this._enabled = config.enabled;
    this._engineFullVisibility = config.engineFullVisibility;
    this._enhancedDllLoadVisibility = config.enhancedDllLoadVisibility;
    this._enhancedExploitationVisibility = config.enhancedExploitationVisibility;
    this._enhancedMlForLargerFiles = config.enhancedMlForLargerFiles;
    this._extendedUserModeData.internalValue = config.extendedUserModeData;
    this._fileEncryption = config.fileEncryption;
    this._fileSystemAccess = config.fileSystemAccess;
    this._fileSystemContainment = config.fileSystemContainment;
    this._forceAslr = config.forceAslr;
    this._forceDep = config.forceDep;
    this._hardwareEnhancedExploitDetection = config.hardwareEnhancedExploitDetection;
    this._heapSprayPreallocation = config.heapSprayPreallocation;
    this._hostGroups = config.hostGroups;
    this._httpDetections = config.httpDetections;
    this._intelligenceSourcedThreats = config.intelligenceSourcedThreats;
    this._interpreterOnly = config.interpreterOnly;
    this._ioaRuleGroups = config.ioaRuleGroups;
    this._javascriptViaRundll32 = config.javascriptViaRundll32;
    this._locky = config.locky;
    this._memoryScanning = config.memoryScanning;
    this._memoryScanningScanWithCpu = config.memoryScanningScanWithCpu;
    this._microsoftOfficeFileSuspiciousMacroRemoval = config.microsoftOfficeFileSuspiciousMacroRemoval;
    this._name = config.name;
    this._notifyEndUsers = config.notifyEndUsers;
    this._nullPageAllocation = config.nullPageAllocation;
    this._onWriteScriptFileVisibility = config.onWriteScriptFileVisibility;
    this._preventSuspiciousProcesses = config.preventSuspiciousProcesses;
    this._quarantineAndSecurityCenterRegistration = config.quarantineAndSecurityCenterRegistration;
    this._quarantineOnRemovableMedia = config.quarantineOnRemovableMedia;
    this._quarantineOnWrite = config.quarantineOnWrite;
    this._redactHttpDetectionDetails = config.redactHttpDetectionDetails;
    this._scriptBasedExecutionMonitoring = config.scriptBasedExecutionMonitoring;
    this._sehOverwriteProtection = config.sehOverwriteProtection;
    this._sensorAntiMalware.internalValue = config.sensorAntiMalware;
    this._sensorAntiMalwareUserInitiated.internalValue = config.sensorAntiMalwareUserInitiated;
    this._sensorTamperingProtection = config.sensorTamperingProtection;
    this._suspiciousRegistryOperations = config.suspiciousRegistryOperations;
    this._suspiciousScriptsAndCommands = config.suspiciousScriptsAndCommands;
    this._uploadUnknownDetectionRelatedExecutables = config.uploadUnknownDetectionRelatedExecutables;
    this._uploadUnknownExecutables = config.uploadUnknownExecutables;
    this._usbInsertionTriggeredScan = config.usbInsertionTriggeredScan;
    this._volumeShadowCopyAudit = config.volumeShadowCopyAudit;
    this._volumeShadowCopyProtect = config.volumeShadowCopyProtect;
    this._vulnerableDriverProtection = config.vulnerableDriverProtection;
    this._windowsLogonBypassStickyKeys = config.windowsLogonBypassStickyKeys;
    this._wsl2Visibility = config.wsl2Visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_user_mode_data - computed: true, optional: true, required: false
  private _additionalUserModeData?: boolean | cdktf.IResolvable; 
  public get additionalUserModeData() {
    return this.getBooleanAttribute('additional_user_mode_data');
  }
  public set additionalUserModeData(value: boolean | cdktf.IResolvable) {
    this._additionalUserModeData = value;
  }
  public resetAdditionalUserModeData() {
    this._additionalUserModeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalUserModeDataInput() {
    return this._additionalUserModeData;
  }

  // advanced_remediation - computed: true, optional: true, required: false
  private _advancedRemediation?: boolean | cdktf.IResolvable; 
  public get advancedRemediation() {
    return this.getBooleanAttribute('advanced_remediation');
  }
  public set advancedRemediation(value: boolean | cdktf.IResolvable) {
    this._advancedRemediation = value;
  }
  public resetAdvancedRemediation() {
    this._advancedRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedRemediationInput() {
    return this._advancedRemediation;
  }

  // adware_and_pup - computed: true, optional: true, required: false
  private _adwareAndPup = new PreventionPolicyWindowsAdwareAndPupOutputReference(this, "adware_and_pup");
  public get adwareAndPup() {
    return this._adwareAndPup;
  }
  public putAdwareAndPup(value: PreventionPolicyWindowsAdwareAndPup) {
    this._adwareAndPup.internalValue = value;
  }
  public resetAdwareAndPup() {
    this._adwareAndPup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adwareAndPupInput() {
    return this._adwareAndPup.internalValue;
  }

  // application_exploitation_activity - computed: true, optional: true, required: false
  private _applicationExploitationActivity?: boolean | cdktf.IResolvable; 
  public get applicationExploitationActivity() {
    return this.getBooleanAttribute('application_exploitation_activity');
  }
  public set applicationExploitationActivity(value: boolean | cdktf.IResolvable) {
    this._applicationExploitationActivity = value;
  }
  public resetApplicationExploitationActivity() {
    this._applicationExploitationActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationExploitationActivityInput() {
    return this._applicationExploitationActivity;
  }

  // backup_deletion - computed: true, optional: true, required: false
  private _backupDeletion?: boolean | cdktf.IResolvable; 
  public get backupDeletion() {
    return this.getBooleanAttribute('backup_deletion');
  }
  public set backupDeletion(value: boolean | cdktf.IResolvable) {
    this._backupDeletion = value;
  }
  public resetBackupDeletion() {
    this._backupDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDeletionInput() {
    return this._backupDeletion;
  }

  // bios_deep_visibility - computed: true, optional: true, required: false
  private _biosDeepVisibility?: boolean | cdktf.IResolvable; 
  public get biosDeepVisibility() {
    return this.getBooleanAttribute('bios_deep_visibility');
  }
  public set biosDeepVisibility(value: boolean | cdktf.IResolvable) {
    this._biosDeepVisibility = value;
  }
  public resetBiosDeepVisibility() {
    this._biosDeepVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biosDeepVisibilityInput() {
    return this._biosDeepVisibility;
  }

  // boot_configuration_database_protection - computed: true, optional: true, required: false
  private _bootConfigurationDatabaseProtection?: boolean | cdktf.IResolvable; 
  public get bootConfigurationDatabaseProtection() {
    return this.getBooleanAttribute('boot_configuration_database_protection');
  }
  public set bootConfigurationDatabaseProtection(value: boolean | cdktf.IResolvable) {
    this._bootConfigurationDatabaseProtection = value;
  }
  public resetBootConfigurationDatabaseProtection() {
    this._bootConfigurationDatabaseProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootConfigurationDatabaseProtectionInput() {
    return this._bootConfigurationDatabaseProtection;
  }

  // chopper_webshell - computed: true, optional: true, required: false
  private _chopperWebshell?: boolean | cdktf.IResolvable; 
  public get chopperWebshell() {
    return this.getBooleanAttribute('chopper_webshell');
  }
  public set chopperWebshell(value: boolean | cdktf.IResolvable) {
    this._chopperWebshell = value;
  }
  public resetChopperWebshell() {
    this._chopperWebshell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chopperWebshellInput() {
    return this._chopperWebshell;
  }

  // cloud_anti_malware - computed: true, optional: true, required: false
  private _cloudAntiMalware = new PreventionPolicyWindowsCloudAntiMalwareOutputReference(this, "cloud_anti_malware");
  public get cloudAntiMalware() {
    return this._cloudAntiMalware;
  }
  public putCloudAntiMalware(value: PreventionPolicyWindowsCloudAntiMalware) {
    this._cloudAntiMalware.internalValue = value;
  }
  public resetCloudAntiMalware() {
    this._cloudAntiMalware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAntiMalwareInput() {
    return this._cloudAntiMalware.internalValue;
  }

  // cloud_anti_malware_microsoft_office_files - computed: true, optional: true, required: false
  private _cloudAntiMalwareMicrosoftOfficeFiles = new PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFilesOutputReference(this, "cloud_anti_malware_microsoft_office_files");
  public get cloudAntiMalwareMicrosoftOfficeFiles() {
    return this._cloudAntiMalwareMicrosoftOfficeFiles;
  }
  public putCloudAntiMalwareMicrosoftOfficeFiles(value: PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFiles) {
    this._cloudAntiMalwareMicrosoftOfficeFiles.internalValue = value;
  }
  public resetCloudAntiMalwareMicrosoftOfficeFiles() {
    this._cloudAntiMalwareMicrosoftOfficeFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAntiMalwareMicrosoftOfficeFilesInput() {
    return this._cloudAntiMalwareMicrosoftOfficeFiles.internalValue;
  }

  // cloud_anti_malware_user_initiated - computed: true, optional: true, required: false
  private _cloudAntiMalwareUserInitiated = new PreventionPolicyWindowsCloudAntiMalwareUserInitiatedOutputReference(this, "cloud_anti_malware_user_initiated");
  public get cloudAntiMalwareUserInitiated() {
    return this._cloudAntiMalwareUserInitiated;
  }
  public putCloudAntiMalwareUserInitiated(value: PreventionPolicyWindowsCloudAntiMalwareUserInitiated) {
    this._cloudAntiMalwareUserInitiated.internalValue = value;
  }
  public resetCloudAntiMalwareUserInitiated() {
    this._cloudAntiMalwareUserInitiated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAntiMalwareUserInitiatedInput() {
    return this._cloudAntiMalwareUserInitiated.internalValue;
  }

  // code_injection - computed: true, optional: true, required: false
  private _codeInjection?: boolean | cdktf.IResolvable; 
  public get codeInjection() {
    return this.getBooleanAttribute('code_injection');
  }
  public set codeInjection(value: boolean | cdktf.IResolvable) {
    this._codeInjection = value;
  }
  public resetCodeInjection() {
    this._codeInjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInjectionInput() {
    return this._codeInjection;
  }

  // credential_dumping - computed: true, optional: true, required: false
  private _credentialDumping?: boolean | cdktf.IResolvable; 
  public get credentialDumping() {
    return this.getBooleanAttribute('credential_dumping');
  }
  public set credentialDumping(value: boolean | cdktf.IResolvable) {
    this._credentialDumping = value;
  }
  public resetCredentialDumping() {
    this._credentialDumping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialDumpingInput() {
    return this._credentialDumping;
  }

  // cryptowall - computed: true, optional: true, required: false
  private _cryptowall?: boolean | cdktf.IResolvable; 
  public get cryptowall() {
    return this.getBooleanAttribute('cryptowall');
  }
  public set cryptowall(value: boolean | cdktf.IResolvable) {
    this._cryptowall = value;
  }
  public resetCryptowall() {
    this._cryptowall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptowallInput() {
    return this._cryptowall;
  }

  // custom_blocking - computed: true, optional: true, required: false
  private _customBlocking?: boolean | cdktf.IResolvable; 
  public get customBlocking() {
    return this.getBooleanAttribute('custom_blocking');
  }
  public set customBlocking(value: boolean | cdktf.IResolvable) {
    this._customBlocking = value;
  }
  public resetCustomBlocking() {
    this._customBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockingInput() {
    return this._customBlocking;
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

  // detect_on_write - computed: true, optional: true, required: false
  private _detectOnWrite?: boolean | cdktf.IResolvable; 
  public get detectOnWrite() {
    return this.getBooleanAttribute('detect_on_write');
  }
  public set detectOnWrite(value: boolean | cdktf.IResolvable) {
    this._detectOnWrite = value;
  }
  public resetDetectOnWrite() {
    this._detectOnWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectOnWriteInput() {
    return this._detectOnWrite;
  }

  // drive_by_download - computed: true, optional: true, required: false
  private _driveByDownload?: boolean | cdktf.IResolvable; 
  public get driveByDownload() {
    return this.getBooleanAttribute('drive_by_download');
  }
  public set driveByDownload(value: boolean | cdktf.IResolvable) {
    this._driveByDownload = value;
  }
  public resetDriveByDownload() {
    this._driveByDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driveByDownloadInput() {
    return this._driveByDownload;
  }

  // driver_load_prevention - computed: true, optional: true, required: false
  private _driverLoadPrevention?: boolean | cdktf.IResolvable; 
  public get driverLoadPrevention() {
    return this.getBooleanAttribute('driver_load_prevention');
  }
  public set driverLoadPrevention(value: boolean | cdktf.IResolvable) {
    this._driverLoadPrevention = value;
  }
  public resetDriverLoadPrevention() {
    this._driverLoadPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverLoadPreventionInput() {
    return this._driverLoadPrevention;
  }

  // enabled - computed: true, optional: true, required: false
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

  // engine_full_visibility - computed: true, optional: true, required: false
  private _engineFullVisibility?: boolean | cdktf.IResolvable; 
  public get engineFullVisibility() {
    return this.getBooleanAttribute('engine_full_visibility');
  }
  public set engineFullVisibility(value: boolean | cdktf.IResolvable) {
    this._engineFullVisibility = value;
  }
  public resetEngineFullVisibility() {
    this._engineFullVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineFullVisibilityInput() {
    return this._engineFullVisibility;
  }

  // enhanced_dll_load_visibility - computed: true, optional: true, required: false
  private _enhancedDllLoadVisibility?: boolean | cdktf.IResolvable; 
  public get enhancedDllLoadVisibility() {
    return this.getBooleanAttribute('enhanced_dll_load_visibility');
  }
  public set enhancedDllLoadVisibility(value: boolean | cdktf.IResolvable) {
    this._enhancedDllLoadVisibility = value;
  }
  public resetEnhancedDllLoadVisibility() {
    this._enhancedDllLoadVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedDllLoadVisibilityInput() {
    return this._enhancedDllLoadVisibility;
  }

  // enhanced_exploitation_visibility - computed: true, optional: true, required: false
  private _enhancedExploitationVisibility?: boolean | cdktf.IResolvable; 
  public get enhancedExploitationVisibility() {
    return this.getBooleanAttribute('enhanced_exploitation_visibility');
  }
  public set enhancedExploitationVisibility(value: boolean | cdktf.IResolvable) {
    this._enhancedExploitationVisibility = value;
  }
  public resetEnhancedExploitationVisibility() {
    this._enhancedExploitationVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedExploitationVisibilityInput() {
    return this._enhancedExploitationVisibility;
  }

  // enhanced_ml_for_larger_files - computed: true, optional: true, required: false
  private _enhancedMlForLargerFiles?: boolean | cdktf.IResolvable; 
  public get enhancedMlForLargerFiles() {
    return this.getBooleanAttribute('enhanced_ml_for_larger_files');
  }
  public set enhancedMlForLargerFiles(value: boolean | cdktf.IResolvable) {
    this._enhancedMlForLargerFiles = value;
  }
  public resetEnhancedMlForLargerFiles() {
    this._enhancedMlForLargerFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMlForLargerFilesInput() {
    return this._enhancedMlForLargerFiles;
  }

  // extended_user_mode_data - computed: true, optional: true, required: false
  private _extendedUserModeData = new PreventionPolicyWindowsExtendedUserModeDataOutputReference(this, "extended_user_mode_data");
  public get extendedUserModeData() {
    return this._extendedUserModeData;
  }
  public putExtendedUserModeData(value: PreventionPolicyWindowsExtendedUserModeData) {
    this._extendedUserModeData.internalValue = value;
  }
  public resetExtendedUserModeData() {
    this._extendedUserModeData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedUserModeDataInput() {
    return this._extendedUserModeData.internalValue;
  }

  // file_encryption - computed: true, optional: true, required: false
  private _fileEncryption?: boolean | cdktf.IResolvable; 
  public get fileEncryption() {
    return this.getBooleanAttribute('file_encryption');
  }
  public set fileEncryption(value: boolean | cdktf.IResolvable) {
    this._fileEncryption = value;
  }
  public resetFileEncryption() {
    this._fileEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileEncryptionInput() {
    return this._fileEncryption;
  }

  // file_system_access - computed: true, optional: true, required: false
  private _fileSystemAccess?: boolean | cdktf.IResolvable; 
  public get fileSystemAccess() {
    return this.getBooleanAttribute('file_system_access');
  }
  public set fileSystemAccess(value: boolean | cdktf.IResolvable) {
    this._fileSystemAccess = value;
  }
  public resetFileSystemAccess() {
    this._fileSystemAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAccessInput() {
    return this._fileSystemAccess;
  }

  // file_system_containment - computed: true, optional: true, required: false
  private _fileSystemContainment?: boolean | cdktf.IResolvable; 
  public get fileSystemContainment() {
    return this.getBooleanAttribute('file_system_containment');
  }
  public set fileSystemContainment(value: boolean | cdktf.IResolvable) {
    this._fileSystemContainment = value;
  }
  public resetFileSystemContainment() {
    this._fileSystemContainment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemContainmentInput() {
    return this._fileSystemContainment;
  }

  // force_aslr - computed: true, optional: true, required: false
  private _forceAslr?: boolean | cdktf.IResolvable; 
  public get forceAslr() {
    return this.getBooleanAttribute('force_aslr');
  }
  public set forceAslr(value: boolean | cdktf.IResolvable) {
    this._forceAslr = value;
  }
  public resetForceAslr() {
    this._forceAslr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAslrInput() {
    return this._forceAslr;
  }

  // force_dep - computed: true, optional: true, required: false
  private _forceDep?: boolean | cdktf.IResolvable; 
  public get forceDep() {
    return this.getBooleanAttribute('force_dep');
  }
  public set forceDep(value: boolean | cdktf.IResolvable) {
    this._forceDep = value;
  }
  public resetForceDep() {
    this._forceDep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDepInput() {
    return this._forceDep;
  }

  // hardware_enhanced_exploit_detection - computed: true, optional: true, required: false
  private _hardwareEnhancedExploitDetection?: boolean | cdktf.IResolvable; 
  public get hardwareEnhancedExploitDetection() {
    return this.getBooleanAttribute('hardware_enhanced_exploit_detection');
  }
  public set hardwareEnhancedExploitDetection(value: boolean | cdktf.IResolvable) {
    this._hardwareEnhancedExploitDetection = value;
  }
  public resetHardwareEnhancedExploitDetection() {
    this._hardwareEnhancedExploitDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareEnhancedExploitDetectionInput() {
    return this._hardwareEnhancedExploitDetection;
  }

  // heap_spray_preallocation - computed: true, optional: true, required: false
  private _heapSprayPreallocation?: boolean | cdktf.IResolvable; 
  public get heapSprayPreallocation() {
    return this.getBooleanAttribute('heap_spray_preallocation');
  }
  public set heapSprayPreallocation(value: boolean | cdktf.IResolvable) {
    this._heapSprayPreallocation = value;
  }
  public resetHeapSprayPreallocation() {
    this._heapSprayPreallocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapSprayPreallocationInput() {
    return this._heapSprayPreallocation;
  }

  // host_groups - computed: false, optional: false, required: true
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('host_groups'));
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // http_detections - computed: true, optional: true, required: false
  private _httpDetections?: boolean | cdktf.IResolvable; 
  public get httpDetections() {
    return this.getBooleanAttribute('http_detections');
  }
  public set httpDetections(value: boolean | cdktf.IResolvable) {
    this._httpDetections = value;
  }
  public resetHttpDetections() {
    this._httpDetections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDetectionsInput() {
    return this._httpDetections;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intelligence_sourced_threats - computed: true, optional: true, required: false
  private _intelligenceSourcedThreats?: boolean | cdktf.IResolvable; 
  public get intelligenceSourcedThreats() {
    return this.getBooleanAttribute('intelligence_sourced_threats');
  }
  public set intelligenceSourcedThreats(value: boolean | cdktf.IResolvable) {
    this._intelligenceSourcedThreats = value;
  }
  public resetIntelligenceSourcedThreats() {
    this._intelligenceSourcedThreats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligenceSourcedThreatsInput() {
    return this._intelligenceSourcedThreats;
  }

  // interpreter_only - computed: true, optional: true, required: false
  private _interpreterOnly?: boolean | cdktf.IResolvable; 
  public get interpreterOnly() {
    return this.getBooleanAttribute('interpreter_only');
  }
  public set interpreterOnly(value: boolean | cdktf.IResolvable) {
    this._interpreterOnly = value;
  }
  public resetInterpreterOnly() {
    this._interpreterOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterOnlyInput() {
    return this._interpreterOnly;
  }

  // ioa_rule_groups - computed: false, optional: false, required: true
  private _ioaRuleGroups?: string[]; 
  public get ioaRuleGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('ioa_rule_groups'));
  }
  public set ioaRuleGroups(value: string[]) {
    this._ioaRuleGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ioaRuleGroupsInput() {
    return this._ioaRuleGroups;
  }

  // javascript_via_rundll32 - computed: true, optional: true, required: false
  private _javascriptViaRundll32?: boolean | cdktf.IResolvable; 
  public get javascriptViaRundll32() {
    return this.getBooleanAttribute('javascript_via_rundll32');
  }
  public set javascriptViaRundll32(value: boolean | cdktf.IResolvable) {
    this._javascriptViaRundll32 = value;
  }
  public resetJavascriptViaRundll32() {
    this._javascriptViaRundll32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptViaRundll32Input() {
    return this._javascriptViaRundll32;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // locky - computed: true, optional: true, required: false
  private _locky?: boolean | cdktf.IResolvable; 
  public get locky() {
    return this.getBooleanAttribute('locky');
  }
  public set locky(value: boolean | cdktf.IResolvable) {
    this._locky = value;
  }
  public resetLocky() {
    this._locky = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockyInput() {
    return this._locky;
  }

  // memory_scanning - computed: true, optional: true, required: false
  private _memoryScanning?: boolean | cdktf.IResolvable; 
  public get memoryScanning() {
    return this.getBooleanAttribute('memory_scanning');
  }
  public set memoryScanning(value: boolean | cdktf.IResolvable) {
    this._memoryScanning = value;
  }
  public resetMemoryScanning() {
    this._memoryScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryScanningInput() {
    return this._memoryScanning;
  }

  // memory_scanning_scan_with_cpu - computed: true, optional: true, required: false
  private _memoryScanningScanWithCpu?: boolean | cdktf.IResolvable; 
  public get memoryScanningScanWithCpu() {
    return this.getBooleanAttribute('memory_scanning_scan_with_cpu');
  }
  public set memoryScanningScanWithCpu(value: boolean | cdktf.IResolvable) {
    this._memoryScanningScanWithCpu = value;
  }
  public resetMemoryScanningScanWithCpu() {
    this._memoryScanningScanWithCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryScanningScanWithCpuInput() {
    return this._memoryScanningScanWithCpu;
  }

  // microsoft_office_file_suspicious_macro_removal - computed: true, optional: true, required: false
  private _microsoftOfficeFileSuspiciousMacroRemoval?: boolean | cdktf.IResolvable; 
  public get microsoftOfficeFileSuspiciousMacroRemoval() {
    return this.getBooleanAttribute('microsoft_office_file_suspicious_macro_removal');
  }
  public set microsoftOfficeFileSuspiciousMacroRemoval(value: boolean | cdktf.IResolvable) {
    this._microsoftOfficeFileSuspiciousMacroRemoval = value;
  }
  public resetMicrosoftOfficeFileSuspiciousMacroRemoval() {
    this._microsoftOfficeFileSuspiciousMacroRemoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftOfficeFileSuspiciousMacroRemovalInput() {
    return this._microsoftOfficeFileSuspiciousMacroRemoval;
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

  // notify_end_users - computed: true, optional: true, required: false
  private _notifyEndUsers?: boolean | cdktf.IResolvable; 
  public get notifyEndUsers() {
    return this.getBooleanAttribute('notify_end_users');
  }
  public set notifyEndUsers(value: boolean | cdktf.IResolvable) {
    this._notifyEndUsers = value;
  }
  public resetNotifyEndUsers() {
    this._notifyEndUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEndUsersInput() {
    return this._notifyEndUsers;
  }

  // null_page_allocation - computed: true, optional: true, required: false
  private _nullPageAllocation?: boolean | cdktf.IResolvable; 
  public get nullPageAllocation() {
    return this.getBooleanAttribute('null_page_allocation');
  }
  public set nullPageAllocation(value: boolean | cdktf.IResolvable) {
    this._nullPageAllocation = value;
  }
  public resetNullPageAllocation() {
    this._nullPageAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullPageAllocationInput() {
    return this._nullPageAllocation;
  }

  // on_write_script_file_visibility - computed: true, optional: true, required: false
  private _onWriteScriptFileVisibility?: boolean | cdktf.IResolvable; 
  public get onWriteScriptFileVisibility() {
    return this.getBooleanAttribute('on_write_script_file_visibility');
  }
  public set onWriteScriptFileVisibility(value: boolean | cdktf.IResolvable) {
    this._onWriteScriptFileVisibility = value;
  }
  public resetOnWriteScriptFileVisibility() {
    this._onWriteScriptFileVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onWriteScriptFileVisibilityInput() {
    return this._onWriteScriptFileVisibility;
  }

  // prevent_suspicious_processes - computed: true, optional: true, required: false
  private _preventSuspiciousProcesses?: boolean | cdktf.IResolvable; 
  public get preventSuspiciousProcesses() {
    return this.getBooleanAttribute('prevent_suspicious_processes');
  }
  public set preventSuspiciousProcesses(value: boolean | cdktf.IResolvable) {
    this._preventSuspiciousProcesses = value;
  }
  public resetPreventSuspiciousProcesses() {
    this._preventSuspiciousProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventSuspiciousProcessesInput() {
    return this._preventSuspiciousProcesses;
  }

  // quarantine_and_security_center_registration - computed: true, optional: true, required: false
  private _quarantineAndSecurityCenterRegistration?: boolean | cdktf.IResolvable; 
  public get quarantineAndSecurityCenterRegistration() {
    return this.getBooleanAttribute('quarantine_and_security_center_registration');
  }
  public set quarantineAndSecurityCenterRegistration(value: boolean | cdktf.IResolvable) {
    this._quarantineAndSecurityCenterRegistration = value;
  }
  public resetQuarantineAndSecurityCenterRegistration() {
    this._quarantineAndSecurityCenterRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineAndSecurityCenterRegistrationInput() {
    return this._quarantineAndSecurityCenterRegistration;
  }

  // quarantine_on_removable_media - computed: true, optional: true, required: false
  private _quarantineOnRemovableMedia?: boolean | cdktf.IResolvable; 
  public get quarantineOnRemovableMedia() {
    return this.getBooleanAttribute('quarantine_on_removable_media');
  }
  public set quarantineOnRemovableMedia(value: boolean | cdktf.IResolvable) {
    this._quarantineOnRemovableMedia = value;
  }
  public resetQuarantineOnRemovableMedia() {
    this._quarantineOnRemovableMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineOnRemovableMediaInput() {
    return this._quarantineOnRemovableMedia;
  }

  // quarantine_on_write - computed: true, optional: true, required: false
  private _quarantineOnWrite?: boolean | cdktf.IResolvable; 
  public get quarantineOnWrite() {
    return this.getBooleanAttribute('quarantine_on_write');
  }
  public set quarantineOnWrite(value: boolean | cdktf.IResolvable) {
    this._quarantineOnWrite = value;
  }
  public resetQuarantineOnWrite() {
    this._quarantineOnWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineOnWriteInput() {
    return this._quarantineOnWrite;
  }

  // redact_http_detection_details - computed: true, optional: true, required: false
  private _redactHttpDetectionDetails?: boolean | cdktf.IResolvable; 
  public get redactHttpDetectionDetails() {
    return this.getBooleanAttribute('redact_http_detection_details');
  }
  public set redactHttpDetectionDetails(value: boolean | cdktf.IResolvable) {
    this._redactHttpDetectionDetails = value;
  }
  public resetRedactHttpDetectionDetails() {
    this._redactHttpDetectionDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactHttpDetectionDetailsInput() {
    return this._redactHttpDetectionDetails;
  }

  // script_based_execution_monitoring - computed: true, optional: true, required: false
  private _scriptBasedExecutionMonitoring?: boolean | cdktf.IResolvable; 
  public get scriptBasedExecutionMonitoring() {
    return this.getBooleanAttribute('script_based_execution_monitoring');
  }
  public set scriptBasedExecutionMonitoring(value: boolean | cdktf.IResolvable) {
    this._scriptBasedExecutionMonitoring = value;
  }
  public resetScriptBasedExecutionMonitoring() {
    this._scriptBasedExecutionMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptBasedExecutionMonitoringInput() {
    return this._scriptBasedExecutionMonitoring;
  }

  // seh_overwrite_protection - computed: true, optional: true, required: false
  private _sehOverwriteProtection?: boolean | cdktf.IResolvable; 
  public get sehOverwriteProtection() {
    return this.getBooleanAttribute('seh_overwrite_protection');
  }
  public set sehOverwriteProtection(value: boolean | cdktf.IResolvable) {
    this._sehOverwriteProtection = value;
  }
  public resetSehOverwriteProtection() {
    this._sehOverwriteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sehOverwriteProtectionInput() {
    return this._sehOverwriteProtection;
  }

  // sensor_anti_malware - computed: true, optional: true, required: false
  private _sensorAntiMalware = new PreventionPolicyWindowsSensorAntiMalwareOutputReference(this, "sensor_anti_malware");
  public get sensorAntiMalware() {
    return this._sensorAntiMalware;
  }
  public putSensorAntiMalware(value: PreventionPolicyWindowsSensorAntiMalware) {
    this._sensorAntiMalware.internalValue = value;
  }
  public resetSensorAntiMalware() {
    this._sensorAntiMalware.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorAntiMalwareInput() {
    return this._sensorAntiMalware.internalValue;
  }

  // sensor_anti_malware_user_initiated - computed: true, optional: true, required: false
  private _sensorAntiMalwareUserInitiated = new PreventionPolicyWindowsSensorAntiMalwareUserInitiatedOutputReference(this, "sensor_anti_malware_user_initiated");
  public get sensorAntiMalwareUserInitiated() {
    return this._sensorAntiMalwareUserInitiated;
  }
  public putSensorAntiMalwareUserInitiated(value: PreventionPolicyWindowsSensorAntiMalwareUserInitiated) {
    this._sensorAntiMalwareUserInitiated.internalValue = value;
  }
  public resetSensorAntiMalwareUserInitiated() {
    this._sensorAntiMalwareUserInitiated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorAntiMalwareUserInitiatedInput() {
    return this._sensorAntiMalwareUserInitiated.internalValue;
  }

  // sensor_tampering_protection - computed: true, optional: true, required: false
  private _sensorTamperingProtection?: boolean | cdktf.IResolvable; 
  public get sensorTamperingProtection() {
    return this.getBooleanAttribute('sensor_tampering_protection');
  }
  public set sensorTamperingProtection(value: boolean | cdktf.IResolvable) {
    this._sensorTamperingProtection = value;
  }
  public resetSensorTamperingProtection() {
    this._sensorTamperingProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorTamperingProtectionInput() {
    return this._sensorTamperingProtection;
  }

  // suspicious_registry_operations - computed: true, optional: true, required: false
  private _suspiciousRegistryOperations?: boolean | cdktf.IResolvable; 
  public get suspiciousRegistryOperations() {
    return this.getBooleanAttribute('suspicious_registry_operations');
  }
  public set suspiciousRegistryOperations(value: boolean | cdktf.IResolvable) {
    this._suspiciousRegistryOperations = value;
  }
  public resetSuspiciousRegistryOperations() {
    this._suspiciousRegistryOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousRegistryOperationsInput() {
    return this._suspiciousRegistryOperations;
  }

  // suspicious_scripts_and_commands - computed: true, optional: true, required: false
  private _suspiciousScriptsAndCommands?: boolean | cdktf.IResolvable; 
  public get suspiciousScriptsAndCommands() {
    return this.getBooleanAttribute('suspicious_scripts_and_commands');
  }
  public set suspiciousScriptsAndCommands(value: boolean | cdktf.IResolvable) {
    this._suspiciousScriptsAndCommands = value;
  }
  public resetSuspiciousScriptsAndCommands() {
    this._suspiciousScriptsAndCommands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspiciousScriptsAndCommandsInput() {
    return this._suspiciousScriptsAndCommands;
  }

  // upload_unknown_detection_related_executables - computed: true, optional: true, required: false
  private _uploadUnknownDetectionRelatedExecutables?: boolean | cdktf.IResolvable; 
  public get uploadUnknownDetectionRelatedExecutables() {
    return this.getBooleanAttribute('upload_unknown_detection_related_executables');
  }
  public set uploadUnknownDetectionRelatedExecutables(value: boolean | cdktf.IResolvable) {
    this._uploadUnknownDetectionRelatedExecutables = value;
  }
  public resetUploadUnknownDetectionRelatedExecutables() {
    this._uploadUnknownDetectionRelatedExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadUnknownDetectionRelatedExecutablesInput() {
    return this._uploadUnknownDetectionRelatedExecutables;
  }

  // upload_unknown_executables - computed: true, optional: true, required: false
  private _uploadUnknownExecutables?: boolean | cdktf.IResolvable; 
  public get uploadUnknownExecutables() {
    return this.getBooleanAttribute('upload_unknown_executables');
  }
  public set uploadUnknownExecutables(value: boolean | cdktf.IResolvable) {
    this._uploadUnknownExecutables = value;
  }
  public resetUploadUnknownExecutables() {
    this._uploadUnknownExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadUnknownExecutablesInput() {
    return this._uploadUnknownExecutables;
  }

  // usb_insertion_triggered_scan - computed: true, optional: true, required: false
  private _usbInsertionTriggeredScan?: boolean | cdktf.IResolvable; 
  public get usbInsertionTriggeredScan() {
    return this.getBooleanAttribute('usb_insertion_triggered_scan');
  }
  public set usbInsertionTriggeredScan(value: boolean | cdktf.IResolvable) {
    this._usbInsertionTriggeredScan = value;
  }
  public resetUsbInsertionTriggeredScan() {
    this._usbInsertionTriggeredScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbInsertionTriggeredScanInput() {
    return this._usbInsertionTriggeredScan;
  }

  // volume_shadow_copy_audit - computed: true, optional: true, required: false
  private _volumeShadowCopyAudit?: boolean | cdktf.IResolvable; 
  public get volumeShadowCopyAudit() {
    return this.getBooleanAttribute('volume_shadow_copy_audit');
  }
  public set volumeShadowCopyAudit(value: boolean | cdktf.IResolvable) {
    this._volumeShadowCopyAudit = value;
  }
  public resetVolumeShadowCopyAudit() {
    this._volumeShadowCopyAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeShadowCopyAuditInput() {
    return this._volumeShadowCopyAudit;
  }

  // volume_shadow_copy_protect - computed: true, optional: true, required: false
  private _volumeShadowCopyProtect?: boolean | cdktf.IResolvable; 
  public get volumeShadowCopyProtect() {
    return this.getBooleanAttribute('volume_shadow_copy_protect');
  }
  public set volumeShadowCopyProtect(value: boolean | cdktf.IResolvable) {
    this._volumeShadowCopyProtect = value;
  }
  public resetVolumeShadowCopyProtect() {
    this._volumeShadowCopyProtect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeShadowCopyProtectInput() {
    return this._volumeShadowCopyProtect;
  }

  // vulnerable_driver_protection - computed: true, optional: true, required: false
  private _vulnerableDriverProtection?: boolean | cdktf.IResolvable; 
  public get vulnerableDriverProtection() {
    return this.getBooleanAttribute('vulnerable_driver_protection');
  }
  public set vulnerableDriverProtection(value: boolean | cdktf.IResolvable) {
    this._vulnerableDriverProtection = value;
  }
  public resetVulnerableDriverProtection() {
    this._vulnerableDriverProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerableDriverProtectionInput() {
    return this._vulnerableDriverProtection;
  }

  // windows_logon_bypass_sticky_keys - computed: true, optional: true, required: false
  private _windowsLogonBypassStickyKeys?: boolean | cdktf.IResolvable; 
  public get windowsLogonBypassStickyKeys() {
    return this.getBooleanAttribute('windows_logon_bypass_sticky_keys');
  }
  public set windowsLogonBypassStickyKeys(value: boolean | cdktf.IResolvable) {
    this._windowsLogonBypassStickyKeys = value;
  }
  public resetWindowsLogonBypassStickyKeys() {
    this._windowsLogonBypassStickyKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsLogonBypassStickyKeysInput() {
    return this._windowsLogonBypassStickyKeys;
  }

  // wsl2_visibility - computed: true, optional: true, required: false
  private _wsl2Visibility?: boolean | cdktf.IResolvable; 
  public get wsl2Visibility() {
    return this.getBooleanAttribute('wsl2_visibility');
  }
  public set wsl2Visibility(value: boolean | cdktf.IResolvable) {
    this._wsl2Visibility = value;
  }
  public resetWsl2Visibility() {
    this._wsl2Visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsl2VisibilityInput() {
    return this._wsl2Visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_user_mode_data: cdktf.booleanToTerraform(this._additionalUserModeData),
      advanced_remediation: cdktf.booleanToTerraform(this._advancedRemediation),
      adware_and_pup: preventionPolicyWindowsAdwareAndPupToTerraform(this._adwareAndPup.internalValue),
      application_exploitation_activity: cdktf.booleanToTerraform(this._applicationExploitationActivity),
      backup_deletion: cdktf.booleanToTerraform(this._backupDeletion),
      bios_deep_visibility: cdktf.booleanToTerraform(this._biosDeepVisibility),
      boot_configuration_database_protection: cdktf.booleanToTerraform(this._bootConfigurationDatabaseProtection),
      chopper_webshell: cdktf.booleanToTerraform(this._chopperWebshell),
      cloud_anti_malware: preventionPolicyWindowsCloudAntiMalwareToTerraform(this._cloudAntiMalware.internalValue),
      cloud_anti_malware_microsoft_office_files: preventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFilesToTerraform(this._cloudAntiMalwareMicrosoftOfficeFiles.internalValue),
      cloud_anti_malware_user_initiated: preventionPolicyWindowsCloudAntiMalwareUserInitiatedToTerraform(this._cloudAntiMalwareUserInitiated.internalValue),
      code_injection: cdktf.booleanToTerraform(this._codeInjection),
      credential_dumping: cdktf.booleanToTerraform(this._credentialDumping),
      cryptowall: cdktf.booleanToTerraform(this._cryptowall),
      custom_blocking: cdktf.booleanToTerraform(this._customBlocking),
      description: cdktf.stringToTerraform(this._description),
      detect_on_write: cdktf.booleanToTerraform(this._detectOnWrite),
      drive_by_download: cdktf.booleanToTerraform(this._driveByDownload),
      driver_load_prevention: cdktf.booleanToTerraform(this._driverLoadPrevention),
      enabled: cdktf.booleanToTerraform(this._enabled),
      engine_full_visibility: cdktf.booleanToTerraform(this._engineFullVisibility),
      enhanced_dll_load_visibility: cdktf.booleanToTerraform(this._enhancedDllLoadVisibility),
      enhanced_exploitation_visibility: cdktf.booleanToTerraform(this._enhancedExploitationVisibility),
      enhanced_ml_for_larger_files: cdktf.booleanToTerraform(this._enhancedMlForLargerFiles),
      extended_user_mode_data: preventionPolicyWindowsExtendedUserModeDataToTerraform(this._extendedUserModeData.internalValue),
      file_encryption: cdktf.booleanToTerraform(this._fileEncryption),
      file_system_access: cdktf.booleanToTerraform(this._fileSystemAccess),
      file_system_containment: cdktf.booleanToTerraform(this._fileSystemContainment),
      force_aslr: cdktf.booleanToTerraform(this._forceAslr),
      force_dep: cdktf.booleanToTerraform(this._forceDep),
      hardware_enhanced_exploit_detection: cdktf.booleanToTerraform(this._hardwareEnhancedExploitDetection),
      heap_spray_preallocation: cdktf.booleanToTerraform(this._heapSprayPreallocation),
      host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostGroups),
      http_detections: cdktf.booleanToTerraform(this._httpDetections),
      intelligence_sourced_threats: cdktf.booleanToTerraform(this._intelligenceSourcedThreats),
      interpreter_only: cdktf.booleanToTerraform(this._interpreterOnly),
      ioa_rule_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ioaRuleGroups),
      javascript_via_rundll32: cdktf.booleanToTerraform(this._javascriptViaRundll32),
      locky: cdktf.booleanToTerraform(this._locky),
      memory_scanning: cdktf.booleanToTerraform(this._memoryScanning),
      memory_scanning_scan_with_cpu: cdktf.booleanToTerraform(this._memoryScanningScanWithCpu),
      microsoft_office_file_suspicious_macro_removal: cdktf.booleanToTerraform(this._microsoftOfficeFileSuspiciousMacroRemoval),
      name: cdktf.stringToTerraform(this._name),
      notify_end_users: cdktf.booleanToTerraform(this._notifyEndUsers),
      null_page_allocation: cdktf.booleanToTerraform(this._nullPageAllocation),
      on_write_script_file_visibility: cdktf.booleanToTerraform(this._onWriteScriptFileVisibility),
      prevent_suspicious_processes: cdktf.booleanToTerraform(this._preventSuspiciousProcesses),
      quarantine_and_security_center_registration: cdktf.booleanToTerraform(this._quarantineAndSecurityCenterRegistration),
      quarantine_on_removable_media: cdktf.booleanToTerraform(this._quarantineOnRemovableMedia),
      quarantine_on_write: cdktf.booleanToTerraform(this._quarantineOnWrite),
      redact_http_detection_details: cdktf.booleanToTerraform(this._redactHttpDetectionDetails),
      script_based_execution_monitoring: cdktf.booleanToTerraform(this._scriptBasedExecutionMonitoring),
      seh_overwrite_protection: cdktf.booleanToTerraform(this._sehOverwriteProtection),
      sensor_anti_malware: preventionPolicyWindowsSensorAntiMalwareToTerraform(this._sensorAntiMalware.internalValue),
      sensor_anti_malware_user_initiated: preventionPolicyWindowsSensorAntiMalwareUserInitiatedToTerraform(this._sensorAntiMalwareUserInitiated.internalValue),
      sensor_tampering_protection: cdktf.booleanToTerraform(this._sensorTamperingProtection),
      suspicious_registry_operations: cdktf.booleanToTerraform(this._suspiciousRegistryOperations),
      suspicious_scripts_and_commands: cdktf.booleanToTerraform(this._suspiciousScriptsAndCommands),
      upload_unknown_detection_related_executables: cdktf.booleanToTerraform(this._uploadUnknownDetectionRelatedExecutables),
      upload_unknown_executables: cdktf.booleanToTerraform(this._uploadUnknownExecutables),
      usb_insertion_triggered_scan: cdktf.booleanToTerraform(this._usbInsertionTriggeredScan),
      volume_shadow_copy_audit: cdktf.booleanToTerraform(this._volumeShadowCopyAudit),
      volume_shadow_copy_protect: cdktf.booleanToTerraform(this._volumeShadowCopyProtect),
      vulnerable_driver_protection: cdktf.booleanToTerraform(this._vulnerableDriverProtection),
      windows_logon_bypass_sticky_keys: cdktf.booleanToTerraform(this._windowsLogonBypassStickyKeys),
      wsl2_visibility: cdktf.booleanToTerraform(this._wsl2Visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_user_mode_data: {
        value: cdktf.booleanToHclTerraform(this._additionalUserModeData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advanced_remediation: {
        value: cdktf.booleanToHclTerraform(this._advancedRemediation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      adware_and_pup: {
        value: preventionPolicyWindowsAdwareAndPupToHclTerraform(this._adwareAndPup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PreventionPolicyWindowsAdwareAndPup",
      },
      application_exploitation_activity: {
        value: cdktf.booleanToHclTerraform(this._applicationExploitationActivity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_deletion: {
        value: cdktf.booleanToHclTerraform(this._backupDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bios_deep_visibility: {
        value: cdktf.booleanToHclTerraform(this._biosDeepVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      boot_configuration_database_protection: {
        value: cdktf.booleanToHclTerraform(this._bootConfigurationDatabaseProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      chopper_webshell: {
        value: cdktf.booleanToHclTerraform(this._chopperWebshell),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_anti_malware: {
        value: preventionPolicyWindowsCloudAntiMalwareToHclTerraform(this._cloudAntiMalware.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PreventionPolicyWindowsCloudAntiMalware",
      },
      cloud_anti_malware_microsoft_office_files: {
        value: preventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFilesToHclTerraform(this._cloudAntiMalwareMicrosoftOfficeFiles.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PreventionPolicyWindowsCloudAntiMalwareMicrosoftOfficeFiles",
      },
      cloud_anti_malware_user_initiated: {
        value: preventionPolicyWindowsCloudAntiMalwareUserInitiatedToHclTerraform(this._cloudAntiMalwareUserInitiated.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PreventionPolicyWindowsCloudAntiMalwareUserInitiated",
      },
      code_injection: {
        value: cdktf.booleanToHclTerraform(this._codeInjection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      credential_dumping: {
        value: cdktf.booleanToHclTerraform(this._credentialDumping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cryptowall: {
        value: cdktf.booleanToHclTerraform(this._cryptowall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_blocking: {
        value: cdktf.booleanToHclTerraform(this._customBlocking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detect_on_write: {
        value: cdktf.booleanToHclTerraform(this._detectOnWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      drive_by_download: {
        value: cdktf.booleanToHclTerraform(this._driveByDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      driver_load_prevention: {
        value: cdktf.booleanToHclTerraform(this._driverLoadPrevention),
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
      engine_full_visibility: {
        value: cdktf.booleanToHclTerraform(this._engineFullVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhanced_dll_load_visibility: {
        value: cdktf.booleanToHclTerraform(this._enhancedDllLoadVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhanced_exploitation_visibility: {
        value: cdktf.booleanToHclTerraform(this._enhancedExploitationVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enhanced_ml_for_larger_files: {
        value: cdktf.booleanToHclTerraform(this._enhancedMlForLargerFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extended_user_mode_data: {
        value: preventionPolicyWindowsExtendedUserModeDataToHclTerraform(this._extendedUserModeData.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PreventionPolicyWindowsExtendedUserModeData",
      },
      file_encryption: {
        value: cdktf.booleanToHclTerraform(this._fileEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_system_access: {
        value: cdktf.booleanToHclTerraform(this._fileSystemAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      file_system_containment: {
        value: cdktf.booleanToHclTerraform(this._fileSystemContainment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_aslr: {
        value: cdktf.booleanToHclTerraform(this._forceAslr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_dep: {
        value: cdktf.booleanToHclTerraform(this._forceDep),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hardware_enhanced_exploit_detection: {
        value: cdktf.booleanToHclTerraform(this._hardwareEnhancedExploitDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      heap_spray_preallocation: {
        value: cdktf.booleanToHclTerraform(this._heapSprayPreallocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_detections: {
        value: cdktf.booleanToHclTerraform(this._httpDetections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      intelligence_sourced_threats: {
        value: cdktf.booleanToHclTerraform(this._intelligenceSourcedThreats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interpreter_only: {
        value: cdktf.booleanToHclTerraform(this._interpreterOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ioa_rule_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ioaRuleGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      javascript_via_rundll32: {
        value: cdktf.booleanToHclTerraform(this._javascriptViaRundll32),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      locky: {
        value: cdktf.booleanToHclTerraform(this._locky),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_scanning: {
        value: cdktf.booleanToHclTerraform(this._memoryScanning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_scanning_scan_with_cpu: {
        value: cdktf.booleanToHclTerraform(this._memoryScanningScanWithCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microsoft_office_file_suspicious_macro_removal: {
        value: cdktf.booleanToHclTerraform(this._microsoftOfficeFileSuspiciousMacroRemoval),
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
      notify_end_users: {
        value: cdktf.booleanToHclTerraform(this._notifyEndUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      null_page_allocation: {
        value: cdktf.booleanToHclTerraform(this._nullPageAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      on_write_script_file_visibility: {
        value: cdktf.booleanToHclTerraform(this._onWriteScriptFileVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_suspicious_processes: {
        value: cdktf.booleanToHclTerraform(this._preventSuspiciousProcesses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quarantine_and_security_center_registration: {
        value: cdktf.booleanToHclTerraform(this._quarantineAndSecurityCenterRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quarantine_on_removable_media: {
        value: cdktf.booleanToHclTerraform(this._quarantineOnRemovableMedia),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quarantine_on_write: {
        value: cdktf.booleanToHclTerraform(this._quarantineOnWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redact_http_detection_details: {
        value: cdktf.booleanToHclTerraform(this._redactHttpDetectionDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      script_based_execution_monitoring: {
        value: cdktf.booleanToHclTerraform(this._scriptBasedExecutionMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      seh_overwrite_protection: {
        value: cdktf.booleanToHclTerraform(this._sehOverwriteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sensor_anti_malware: {
        value: preventionPolicyWindowsSensorAntiMalwareToHclTerraform(this._sensorAntiMalware.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PreventionPolicyWindowsSensorAntiMalware",
      },
      sensor_anti_malware_user_initiated: {
        value: preventionPolicyWindowsSensorAntiMalwareUserInitiatedToHclTerraform(this._sensorAntiMalwareUserInitiated.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PreventionPolicyWindowsSensorAntiMalwareUserInitiated",
      },
      sensor_tampering_protection: {
        value: cdktf.booleanToHclTerraform(this._sensorTamperingProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suspicious_registry_operations: {
        value: cdktf.booleanToHclTerraform(this._suspiciousRegistryOperations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suspicious_scripts_and_commands: {
        value: cdktf.booleanToHclTerraform(this._suspiciousScriptsAndCommands),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upload_unknown_detection_related_executables: {
        value: cdktf.booleanToHclTerraform(this._uploadUnknownDetectionRelatedExecutables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upload_unknown_executables: {
        value: cdktf.booleanToHclTerraform(this._uploadUnknownExecutables),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      usb_insertion_triggered_scan: {
        value: cdktf.booleanToHclTerraform(this._usbInsertionTriggeredScan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volume_shadow_copy_audit: {
        value: cdktf.booleanToHclTerraform(this._volumeShadowCopyAudit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volume_shadow_copy_protect: {
        value: cdktf.booleanToHclTerraform(this._volumeShadowCopyProtect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vulnerable_driver_protection: {
        value: cdktf.booleanToHclTerraform(this._vulnerableDriverProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      windows_logon_bypass_sticky_keys: {
        value: cdktf.booleanToHclTerraform(this._windowsLogonBypassStickyKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wsl2_visibility: {
        value: cdktf.booleanToHclTerraform(this._wsl2Visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
