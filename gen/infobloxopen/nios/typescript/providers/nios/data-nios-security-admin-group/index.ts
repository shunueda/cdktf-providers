// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosSecurityAdminGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#extattrfilters DataNiosSecurityAdminGroup#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#filters DataNiosSecurityAdminGroup#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#max_results DataNiosSecurityAdminGroup#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#paging DataNiosSecurityAdminGroup#paging}
  */
  readonly paging?: number;
}
export interface DataNiosSecurityAdminGroupResultAdminSetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#et_bfd DataNiosSecurityAdminGroup#et_bfd}
  */
  readonly etBfd?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_admin_group_acl DataNiosSecurityAdminGroup#set_admin_group_acl}
  */
  readonly setAdminGroupAcl?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_analytics_database_dump DataNiosSecurityAdminGroup#set_analytics_database_dump}
  */
  readonly setAnalyticsDatabaseDump?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_analytics_parameter DataNiosSecurityAdminGroup#set_analytics_parameter}
  */
  readonly setAnalyticsParameter?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_bfd DataNiosSecurityAdminGroup#set_bfd}
  */
  readonly setBfd?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_bgp DataNiosSecurityAdminGroup#set_bgp}
  */
  readonly setBgp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_clean_mscache DataNiosSecurityAdminGroup#set_clean_mscache}
  */
  readonly setCleanMscache?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_collect_old_logs DataNiosSecurityAdminGroup#set_collect_old_logs}
  */
  readonly setCollectOldLogs?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_core_files_quota DataNiosSecurityAdminGroup#set_core_files_quota}
  */
  readonly setCoreFilesQuota?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_debug DataNiosSecurityAdminGroup#set_debug}
  */
  readonly setDebug?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_debug_analytics DataNiosSecurityAdminGroup#set_debug_analytics}
  */
  readonly setDebugAnalytics?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_delete_tasks_interval DataNiosSecurityAdminGroup#set_delete_tasks_interval}
  */
  readonly setDeleteTasksInterval?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_disable_gui_one_click_support DataNiosSecurityAdminGroup#set_disable_gui_one_click_support}
  */
  readonly setDisableGuiOneClickSupport?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_enable_doh_key_logging DataNiosSecurityAdminGroup#set_enable_doh_key_logging}
  */
  readonly setEnableDohKeyLogging?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_enable_dot_key_logging DataNiosSecurityAdminGroup#set_enable_dot_key_logging}
  */
  readonly setEnableDotKeyLogging?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_expertmode DataNiosSecurityAdminGroup#set_expertmode}
  */
  readonly setExpertmode?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_hardware_type DataNiosSecurityAdminGroup#set_hardware_type}
  */
  readonly setHardwareType?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_hotfix DataNiosSecurityAdminGroup#set_hotfix}
  */
  readonly setHotfix?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_hsm_group DataNiosSecurityAdminGroup#set_hsm_group}
  */
  readonly setHsmGroup?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_hw_ident DataNiosSecurityAdminGroup#set_hw_ident}
  */
  readonly setHwIdent?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ibtrap DataNiosSecurityAdminGroup#set_ibtrap}
  */
  readonly setIbtrap?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_lines DataNiosSecurityAdminGroup#set_lines}
  */
  readonly setLines?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_maintenancemode DataNiosSecurityAdminGroup#set_maintenancemode}
  */
  readonly setMaintenancemode?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_mgm DataNiosSecurityAdminGroup#set_mgm}
  */
  readonly setMgm?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ms_max_connection DataNiosSecurityAdminGroup#set_ms_max_connection}
  */
  readonly setMsMaxConnection?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_nosafemode DataNiosSecurityAdminGroup#set_nosafemode}
  */
  readonly setNosafemode?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ntp_stratum DataNiosSecurityAdminGroup#set_ntp_stratum}
  */
  readonly setNtpStratum?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ocsp DataNiosSecurityAdminGroup#set_ocsp}
  */
  readonly setOcsp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_pc_domain DataNiosSecurityAdminGroup#set_pc_domain}
  */
  readonly setPcDomain?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_purge_restart_objects DataNiosSecurityAdminGroup#set_purge_restart_objects}
  */
  readonly setPurgeRestartObjects?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_report_frequency DataNiosSecurityAdminGroup#set_report_frequency}
  */
  readonly setReportFrequency?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_reporting_user_capabilities DataNiosSecurityAdminGroup#set_reporting_user_capabilities}
  */
  readonly setReportingUserCapabilities?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_rpz_recursive_only DataNiosSecurityAdminGroup#set_rpz_recursive_only}
  */
  readonly setRpzRecursiveOnly?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_safemode DataNiosSecurityAdminGroup#set_safemode}
  */
  readonly setSafemode?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_scheduled DataNiosSecurityAdminGroup#set_scheduled}
  */
  readonly setScheduled?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_snmptrap DataNiosSecurityAdminGroup#set_snmptrap}
  */
  readonly setSnmptrap?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_sysname DataNiosSecurityAdminGroup#set_sysname}
  */
  readonly setSysname?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_term DataNiosSecurityAdminGroup#set_term}
  */
  readonly setTerm?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_thresholdtrap DataNiosSecurityAdminGroup#set_thresholdtrap}
  */
  readonly setThresholdtrap?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_transfer_reporting_data DataNiosSecurityAdminGroup#set_transfer_reporting_data}
  */
  readonly setTransferReportingData?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_transfer_supportbundle DataNiosSecurityAdminGroup#set_transfer_supportbundle}
  */
  readonly setTransferSupportbundle?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_wred DataNiosSecurityAdminGroup#set_wred}
  */
  readonly setWred?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultAdminSetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultAdminSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    et_bfd: cdktf.booleanToTerraform(struct!.etBfd),
    set_admin_group_acl: cdktf.booleanToTerraform(struct!.setAdminGroupAcl),
    set_analytics_database_dump: cdktf.booleanToTerraform(struct!.setAnalyticsDatabaseDump),
    set_analytics_parameter: cdktf.booleanToTerraform(struct!.setAnalyticsParameter),
    set_bfd: cdktf.booleanToTerraform(struct!.setBfd),
    set_bgp: cdktf.booleanToTerraform(struct!.setBgp),
    set_clean_mscache: cdktf.booleanToTerraform(struct!.setCleanMscache),
    set_collect_old_logs: cdktf.booleanToTerraform(struct!.setCollectOldLogs),
    set_core_files_quota: cdktf.booleanToTerraform(struct!.setCoreFilesQuota),
    set_debug: cdktf.booleanToTerraform(struct!.setDebug),
    set_debug_analytics: cdktf.booleanToTerraform(struct!.setDebugAnalytics),
    set_delete_tasks_interval: cdktf.booleanToTerraform(struct!.setDeleteTasksInterval),
    set_disable_gui_one_click_support: cdktf.booleanToTerraform(struct!.setDisableGuiOneClickSupport),
    set_enable_doh_key_logging: cdktf.booleanToTerraform(struct!.setEnableDohKeyLogging),
    set_enable_dot_key_logging: cdktf.booleanToTerraform(struct!.setEnableDotKeyLogging),
    set_expertmode: cdktf.booleanToTerraform(struct!.setExpertmode),
    set_hardware_type: cdktf.booleanToTerraform(struct!.setHardwareType),
    set_hotfix: cdktf.booleanToTerraform(struct!.setHotfix),
    set_hsm_group: cdktf.booleanToTerraform(struct!.setHsmGroup),
    set_hw_ident: cdktf.booleanToTerraform(struct!.setHwIdent),
    set_ibtrap: cdktf.booleanToTerraform(struct!.setIbtrap),
    set_lines: cdktf.booleanToTerraform(struct!.setLines),
    set_maintenancemode: cdktf.booleanToTerraform(struct!.setMaintenancemode),
    set_mgm: cdktf.booleanToTerraform(struct!.setMgm),
    set_ms_max_connection: cdktf.booleanToTerraform(struct!.setMsMaxConnection),
    set_nosafemode: cdktf.booleanToTerraform(struct!.setNosafemode),
    set_ntp_stratum: cdktf.booleanToTerraform(struct!.setNtpStratum),
    set_ocsp: cdktf.booleanToTerraform(struct!.setOcsp),
    set_pc_domain: cdktf.booleanToTerraform(struct!.setPcDomain),
    set_purge_restart_objects: cdktf.booleanToTerraform(struct!.setPurgeRestartObjects),
    set_report_frequency: cdktf.booleanToTerraform(struct!.setReportFrequency),
    set_reporting_user_capabilities: cdktf.booleanToTerraform(struct!.setReportingUserCapabilities),
    set_rpz_recursive_only: cdktf.booleanToTerraform(struct!.setRpzRecursiveOnly),
    set_safemode: cdktf.booleanToTerraform(struct!.setSafemode),
    set_scheduled: cdktf.booleanToTerraform(struct!.setScheduled),
    set_snmptrap: cdktf.booleanToTerraform(struct!.setSnmptrap),
    set_sysname: cdktf.booleanToTerraform(struct!.setSysname),
    set_term: cdktf.booleanToTerraform(struct!.setTerm),
    set_thresholdtrap: cdktf.booleanToTerraform(struct!.setThresholdtrap),
    set_transfer_reporting_data: cdktf.booleanToTerraform(struct!.setTransferReportingData),
    set_transfer_supportbundle: cdktf.booleanToTerraform(struct!.setTransferSupportbundle),
    set_wred: cdktf.booleanToTerraform(struct!.setWred),
  }
}


export function dataNiosSecurityAdminGroupResultAdminSetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultAdminSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    et_bfd: {
      value: cdktf.booleanToHclTerraform(struct!.etBfd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_admin_group_acl: {
      value: cdktf.booleanToHclTerraform(struct!.setAdminGroupAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_analytics_database_dump: {
      value: cdktf.booleanToHclTerraform(struct!.setAnalyticsDatabaseDump),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_analytics_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.setAnalyticsParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_bfd: {
      value: cdktf.booleanToHclTerraform(struct!.setBfd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_bgp: {
      value: cdktf.booleanToHclTerraform(struct!.setBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_clean_mscache: {
      value: cdktf.booleanToHclTerraform(struct!.setCleanMscache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_collect_old_logs: {
      value: cdktf.booleanToHclTerraform(struct!.setCollectOldLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_core_files_quota: {
      value: cdktf.booleanToHclTerraform(struct!.setCoreFilesQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_debug: {
      value: cdktf.booleanToHclTerraform(struct!.setDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_debug_analytics: {
      value: cdktf.booleanToHclTerraform(struct!.setDebugAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_delete_tasks_interval: {
      value: cdktf.booleanToHclTerraform(struct!.setDeleteTasksInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_disable_gui_one_click_support: {
      value: cdktf.booleanToHclTerraform(struct!.setDisableGuiOneClickSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_enable_doh_key_logging: {
      value: cdktf.booleanToHclTerraform(struct!.setEnableDohKeyLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_enable_dot_key_logging: {
      value: cdktf.booleanToHclTerraform(struct!.setEnableDotKeyLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_expertmode: {
      value: cdktf.booleanToHclTerraform(struct!.setExpertmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_hardware_type: {
      value: cdktf.booleanToHclTerraform(struct!.setHardwareType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_hotfix: {
      value: cdktf.booleanToHclTerraform(struct!.setHotfix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_hsm_group: {
      value: cdktf.booleanToHclTerraform(struct!.setHsmGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_hw_ident: {
      value: cdktf.booleanToHclTerraform(struct!.setHwIdent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ibtrap: {
      value: cdktf.booleanToHclTerraform(struct!.setIbtrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_lines: {
      value: cdktf.booleanToHclTerraform(struct!.setLines),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_maintenancemode: {
      value: cdktf.booleanToHclTerraform(struct!.setMaintenancemode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_mgm: {
      value: cdktf.booleanToHclTerraform(struct!.setMgm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ms_max_connection: {
      value: cdktf.booleanToHclTerraform(struct!.setMsMaxConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_nosafemode: {
      value: cdktf.booleanToHclTerraform(struct!.setNosafemode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ntp_stratum: {
      value: cdktf.booleanToHclTerraform(struct!.setNtpStratum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ocsp: {
      value: cdktf.booleanToHclTerraform(struct!.setOcsp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_pc_domain: {
      value: cdktf.booleanToHclTerraform(struct!.setPcDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_purge_restart_objects: {
      value: cdktf.booleanToHclTerraform(struct!.setPurgeRestartObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_report_frequency: {
      value: cdktf.booleanToHclTerraform(struct!.setReportFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_reporting_user_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.setReportingUserCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_rpz_recursive_only: {
      value: cdktf.booleanToHclTerraform(struct!.setRpzRecursiveOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_safemode: {
      value: cdktf.booleanToHclTerraform(struct!.setSafemode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_scheduled: {
      value: cdktf.booleanToHclTerraform(struct!.setScheduled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_snmptrap: {
      value: cdktf.booleanToHclTerraform(struct!.setSnmptrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_sysname: {
      value: cdktf.booleanToHclTerraform(struct!.setSysname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_term: {
      value: cdktf.booleanToHclTerraform(struct!.setTerm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_thresholdtrap: {
      value: cdktf.booleanToHclTerraform(struct!.setThresholdtrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_transfer_reporting_data: {
      value: cdktf.booleanToHclTerraform(struct!.setTransferReportingData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_transfer_supportbundle: {
      value: cdktf.booleanToHclTerraform(struct!.setTransferSupportbundle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_wred: {
      value: cdktf.booleanToHclTerraform(struct!.setWred),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultAdminSetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultAdminSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etBfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.etBfd = this._etBfd;
    }
    if (this._setAdminGroupAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAdminGroupAcl = this._setAdminGroupAcl;
    }
    if (this._setAnalyticsDatabaseDump !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAnalyticsDatabaseDump = this._setAnalyticsDatabaseDump;
    }
    if (this._setAnalyticsParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAnalyticsParameter = this._setAnalyticsParameter;
    }
    if (this._setBfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.setBfd = this._setBfd;
    }
    if (this._setBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.setBgp = this._setBgp;
    }
    if (this._setCleanMscache !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCleanMscache = this._setCleanMscache;
    }
    if (this._setCollectOldLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCollectOldLogs = this._setCollectOldLogs;
    }
    if (this._setCoreFilesQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCoreFilesQuota = this._setCoreFilesQuota;
    }
    if (this._setDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDebug = this._setDebug;
    }
    if (this._setDebugAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDebugAnalytics = this._setDebugAnalytics;
    }
    if (this._setDeleteTasksInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDeleteTasksInterval = this._setDeleteTasksInterval;
    }
    if (this._setDisableGuiOneClickSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDisableGuiOneClickSupport = this._setDisableGuiOneClickSupport;
    }
    if (this._setEnableDohKeyLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.setEnableDohKeyLogging = this._setEnableDohKeyLogging;
    }
    if (this._setEnableDotKeyLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.setEnableDotKeyLogging = this._setEnableDotKeyLogging;
    }
    if (this._setExpertmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExpertmode = this._setExpertmode;
    }
    if (this._setHardwareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHardwareType = this._setHardwareType;
    }
    if (this._setHotfix !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHotfix = this._setHotfix;
    }
    if (this._setHsmGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHsmGroup = this._setHsmGroup;
    }
    if (this._setHwIdent !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHwIdent = this._setHwIdent;
    }
    if (this._setIbtrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIbtrap = this._setIbtrap;
    }
    if (this._setLines !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLines = this._setLines;
    }
    if (this._setMaintenancemode !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMaintenancemode = this._setMaintenancemode;
    }
    if (this._setMgm !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMgm = this._setMgm;
    }
    if (this._setMsMaxConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMsMaxConnection = this._setMsMaxConnection;
    }
    if (this._setNosafemode !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNosafemode = this._setNosafemode;
    }
    if (this._setNtpStratum !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNtpStratum = this._setNtpStratum;
    }
    if (this._setOcsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.setOcsp = this._setOcsp;
    }
    if (this._setPcDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPcDomain = this._setPcDomain;
    }
    if (this._setPurgeRestartObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPurgeRestartObjects = this._setPurgeRestartObjects;
    }
    if (this._setReportFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.setReportFrequency = this._setReportFrequency;
    }
    if (this._setReportingUserCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.setReportingUserCapabilities = this._setReportingUserCapabilities;
    }
    if (this._setRpzRecursiveOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRpzRecursiveOnly = this._setRpzRecursiveOnly;
    }
    if (this._setSafemode !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSafemode = this._setSafemode;
    }
    if (this._setScheduled !== undefined) {
      hasAnyValues = true;
      internalValueResult.setScheduled = this._setScheduled;
    }
    if (this._setSnmptrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSnmptrap = this._setSnmptrap;
    }
    if (this._setSysname !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSysname = this._setSysname;
    }
    if (this._setTerm !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTerm = this._setTerm;
    }
    if (this._setThresholdtrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.setThresholdtrap = this._setThresholdtrap;
    }
    if (this._setTransferReportingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTransferReportingData = this._setTransferReportingData;
    }
    if (this._setTransferSupportbundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTransferSupportbundle = this._setTransferSupportbundle;
    }
    if (this._setWred !== undefined) {
      hasAnyValues = true;
      internalValueResult.setWred = this._setWred;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultAdminSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._etBfd = undefined;
      this._setAdminGroupAcl = undefined;
      this._setAnalyticsDatabaseDump = undefined;
      this._setAnalyticsParameter = undefined;
      this._setBfd = undefined;
      this._setBgp = undefined;
      this._setCleanMscache = undefined;
      this._setCollectOldLogs = undefined;
      this._setCoreFilesQuota = undefined;
      this._setDebug = undefined;
      this._setDebugAnalytics = undefined;
      this._setDeleteTasksInterval = undefined;
      this._setDisableGuiOneClickSupport = undefined;
      this._setEnableDohKeyLogging = undefined;
      this._setEnableDotKeyLogging = undefined;
      this._setExpertmode = undefined;
      this._setHardwareType = undefined;
      this._setHotfix = undefined;
      this._setHsmGroup = undefined;
      this._setHwIdent = undefined;
      this._setIbtrap = undefined;
      this._setLines = undefined;
      this._setMaintenancemode = undefined;
      this._setMgm = undefined;
      this._setMsMaxConnection = undefined;
      this._setNosafemode = undefined;
      this._setNtpStratum = undefined;
      this._setOcsp = undefined;
      this._setPcDomain = undefined;
      this._setPurgeRestartObjects = undefined;
      this._setReportFrequency = undefined;
      this._setReportingUserCapabilities = undefined;
      this._setRpzRecursiveOnly = undefined;
      this._setSafemode = undefined;
      this._setScheduled = undefined;
      this._setSnmptrap = undefined;
      this._setSysname = undefined;
      this._setTerm = undefined;
      this._setThresholdtrap = undefined;
      this._setTransferReportingData = undefined;
      this._setTransferSupportbundle = undefined;
      this._setWred = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._etBfd = value.etBfd;
      this._setAdminGroupAcl = value.setAdminGroupAcl;
      this._setAnalyticsDatabaseDump = value.setAnalyticsDatabaseDump;
      this._setAnalyticsParameter = value.setAnalyticsParameter;
      this._setBfd = value.setBfd;
      this._setBgp = value.setBgp;
      this._setCleanMscache = value.setCleanMscache;
      this._setCollectOldLogs = value.setCollectOldLogs;
      this._setCoreFilesQuota = value.setCoreFilesQuota;
      this._setDebug = value.setDebug;
      this._setDebugAnalytics = value.setDebugAnalytics;
      this._setDeleteTasksInterval = value.setDeleteTasksInterval;
      this._setDisableGuiOneClickSupport = value.setDisableGuiOneClickSupport;
      this._setEnableDohKeyLogging = value.setEnableDohKeyLogging;
      this._setEnableDotKeyLogging = value.setEnableDotKeyLogging;
      this._setExpertmode = value.setExpertmode;
      this._setHardwareType = value.setHardwareType;
      this._setHotfix = value.setHotfix;
      this._setHsmGroup = value.setHsmGroup;
      this._setHwIdent = value.setHwIdent;
      this._setIbtrap = value.setIbtrap;
      this._setLines = value.setLines;
      this._setMaintenancemode = value.setMaintenancemode;
      this._setMgm = value.setMgm;
      this._setMsMaxConnection = value.setMsMaxConnection;
      this._setNosafemode = value.setNosafemode;
      this._setNtpStratum = value.setNtpStratum;
      this._setOcsp = value.setOcsp;
      this._setPcDomain = value.setPcDomain;
      this._setPurgeRestartObjects = value.setPurgeRestartObjects;
      this._setReportFrequency = value.setReportFrequency;
      this._setReportingUserCapabilities = value.setReportingUserCapabilities;
      this._setRpzRecursiveOnly = value.setRpzRecursiveOnly;
      this._setSafemode = value.setSafemode;
      this._setScheduled = value.setScheduled;
      this._setSnmptrap = value.setSnmptrap;
      this._setSysname = value.setSysname;
      this._setTerm = value.setTerm;
      this._setThresholdtrap = value.setThresholdtrap;
      this._setTransferReportingData = value.setTransferReportingData;
      this._setTransferSupportbundle = value.setTransferSupportbundle;
      this._setWred = value.setWred;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // et_bfd - computed: true, optional: true, required: false
  private _etBfd?: boolean | cdktf.IResolvable; 
  public get etBfd() {
    return this.getBooleanAttribute('et_bfd');
  }
  public set etBfd(value: boolean | cdktf.IResolvable) {
    this._etBfd = value;
  }
  public resetEtBfd() {
    this._etBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etBfdInput() {
    return this._etBfd;
  }

  // set_admin_group_acl - computed: true, optional: true, required: false
  private _setAdminGroupAcl?: boolean | cdktf.IResolvable; 
  public get setAdminGroupAcl() {
    return this.getBooleanAttribute('set_admin_group_acl');
  }
  public set setAdminGroupAcl(value: boolean | cdktf.IResolvable) {
    this._setAdminGroupAcl = value;
  }
  public resetSetAdminGroupAcl() {
    this._setAdminGroupAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAdminGroupAclInput() {
    return this._setAdminGroupAcl;
  }

  // set_analytics_database_dump - computed: true, optional: true, required: false
  private _setAnalyticsDatabaseDump?: boolean | cdktf.IResolvable; 
  public get setAnalyticsDatabaseDump() {
    return this.getBooleanAttribute('set_analytics_database_dump');
  }
  public set setAnalyticsDatabaseDump(value: boolean | cdktf.IResolvable) {
    this._setAnalyticsDatabaseDump = value;
  }
  public resetSetAnalyticsDatabaseDump() {
    this._setAnalyticsDatabaseDump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAnalyticsDatabaseDumpInput() {
    return this._setAnalyticsDatabaseDump;
  }

  // set_analytics_parameter - computed: true, optional: true, required: false
  private _setAnalyticsParameter?: boolean | cdktf.IResolvable; 
  public get setAnalyticsParameter() {
    return this.getBooleanAttribute('set_analytics_parameter');
  }
  public set setAnalyticsParameter(value: boolean | cdktf.IResolvable) {
    this._setAnalyticsParameter = value;
  }
  public resetSetAnalyticsParameter() {
    this._setAnalyticsParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAnalyticsParameterInput() {
    return this._setAnalyticsParameter;
  }

  // set_bfd - computed: true, optional: true, required: false
  private _setBfd?: boolean | cdktf.IResolvable; 
  public get setBfd() {
    return this.getBooleanAttribute('set_bfd');
  }
  public set setBfd(value: boolean | cdktf.IResolvable) {
    this._setBfd = value;
  }
  public resetSetBfd() {
    this._setBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setBfdInput() {
    return this._setBfd;
  }

  // set_bgp - computed: true, optional: true, required: false
  private _setBgp?: boolean | cdktf.IResolvable; 
  public get setBgp() {
    return this.getBooleanAttribute('set_bgp');
  }
  public set setBgp(value: boolean | cdktf.IResolvable) {
    this._setBgp = value;
  }
  public resetSetBgp() {
    this._setBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setBgpInput() {
    return this._setBgp;
  }

  // set_clean_mscache - computed: true, optional: true, required: false
  private _setCleanMscache?: boolean | cdktf.IResolvable; 
  public get setCleanMscache() {
    return this.getBooleanAttribute('set_clean_mscache');
  }
  public set setCleanMscache(value: boolean | cdktf.IResolvable) {
    this._setCleanMscache = value;
  }
  public resetSetCleanMscache() {
    this._setCleanMscache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCleanMscacheInput() {
    return this._setCleanMscache;
  }

  // set_collect_old_logs - computed: true, optional: true, required: false
  private _setCollectOldLogs?: boolean | cdktf.IResolvable; 
  public get setCollectOldLogs() {
    return this.getBooleanAttribute('set_collect_old_logs');
  }
  public set setCollectOldLogs(value: boolean | cdktf.IResolvable) {
    this._setCollectOldLogs = value;
  }
  public resetSetCollectOldLogs() {
    this._setCollectOldLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCollectOldLogsInput() {
    return this._setCollectOldLogs;
  }

  // set_core_files_quota - computed: true, optional: true, required: false
  private _setCoreFilesQuota?: boolean | cdktf.IResolvable; 
  public get setCoreFilesQuota() {
    return this.getBooleanAttribute('set_core_files_quota');
  }
  public set setCoreFilesQuota(value: boolean | cdktf.IResolvable) {
    this._setCoreFilesQuota = value;
  }
  public resetSetCoreFilesQuota() {
    this._setCoreFilesQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCoreFilesQuotaInput() {
    return this._setCoreFilesQuota;
  }

  // set_debug - computed: true, optional: true, required: false
  private _setDebug?: boolean | cdktf.IResolvable; 
  public get setDebug() {
    return this.getBooleanAttribute('set_debug');
  }
  public set setDebug(value: boolean | cdktf.IResolvable) {
    this._setDebug = value;
  }
  public resetSetDebug() {
    this._setDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDebugInput() {
    return this._setDebug;
  }

  // set_debug_analytics - computed: true, optional: true, required: false
  private _setDebugAnalytics?: boolean | cdktf.IResolvable; 
  public get setDebugAnalytics() {
    return this.getBooleanAttribute('set_debug_analytics');
  }
  public set setDebugAnalytics(value: boolean | cdktf.IResolvable) {
    this._setDebugAnalytics = value;
  }
  public resetSetDebugAnalytics() {
    this._setDebugAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDebugAnalyticsInput() {
    return this._setDebugAnalytics;
  }

  // set_delete_tasks_interval - computed: true, optional: true, required: false
  private _setDeleteTasksInterval?: boolean | cdktf.IResolvable; 
  public get setDeleteTasksInterval() {
    return this.getBooleanAttribute('set_delete_tasks_interval');
  }
  public set setDeleteTasksInterval(value: boolean | cdktf.IResolvable) {
    this._setDeleteTasksInterval = value;
  }
  public resetSetDeleteTasksInterval() {
    this._setDeleteTasksInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDeleteTasksIntervalInput() {
    return this._setDeleteTasksInterval;
  }

  // set_disable_gui_one_click_support - computed: true, optional: true, required: false
  private _setDisableGuiOneClickSupport?: boolean | cdktf.IResolvable; 
  public get setDisableGuiOneClickSupport() {
    return this.getBooleanAttribute('set_disable_gui_one_click_support');
  }
  public set setDisableGuiOneClickSupport(value: boolean | cdktf.IResolvable) {
    this._setDisableGuiOneClickSupport = value;
  }
  public resetSetDisableGuiOneClickSupport() {
    this._setDisableGuiOneClickSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDisableGuiOneClickSupportInput() {
    return this._setDisableGuiOneClickSupport;
  }

  // set_enable_doh_key_logging - computed: true, optional: true, required: false
  private _setEnableDohKeyLogging?: boolean | cdktf.IResolvable; 
  public get setEnableDohKeyLogging() {
    return this.getBooleanAttribute('set_enable_doh_key_logging');
  }
  public set setEnableDohKeyLogging(value: boolean | cdktf.IResolvable) {
    this._setEnableDohKeyLogging = value;
  }
  public resetSetEnableDohKeyLogging() {
    this._setEnableDohKeyLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setEnableDohKeyLoggingInput() {
    return this._setEnableDohKeyLogging;
  }

  // set_enable_dot_key_logging - computed: true, optional: true, required: false
  private _setEnableDotKeyLogging?: boolean | cdktf.IResolvable; 
  public get setEnableDotKeyLogging() {
    return this.getBooleanAttribute('set_enable_dot_key_logging');
  }
  public set setEnableDotKeyLogging(value: boolean | cdktf.IResolvable) {
    this._setEnableDotKeyLogging = value;
  }
  public resetSetEnableDotKeyLogging() {
    this._setEnableDotKeyLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setEnableDotKeyLoggingInput() {
    return this._setEnableDotKeyLogging;
  }

  // set_expertmode - computed: true, optional: true, required: false
  private _setExpertmode?: boolean | cdktf.IResolvable; 
  public get setExpertmode() {
    return this.getBooleanAttribute('set_expertmode');
  }
  public set setExpertmode(value: boolean | cdktf.IResolvable) {
    this._setExpertmode = value;
  }
  public resetSetExpertmode() {
    this._setExpertmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExpertmodeInput() {
    return this._setExpertmode;
  }

  // set_hardware_type - computed: true, optional: true, required: false
  private _setHardwareType?: boolean | cdktf.IResolvable; 
  public get setHardwareType() {
    return this.getBooleanAttribute('set_hardware_type');
  }
  public set setHardwareType(value: boolean | cdktf.IResolvable) {
    this._setHardwareType = value;
  }
  public resetSetHardwareType() {
    this._setHardwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHardwareTypeInput() {
    return this._setHardwareType;
  }

  // set_hotfix - computed: true, optional: true, required: false
  private _setHotfix?: boolean | cdktf.IResolvable; 
  public get setHotfix() {
    return this.getBooleanAttribute('set_hotfix');
  }
  public set setHotfix(value: boolean | cdktf.IResolvable) {
    this._setHotfix = value;
  }
  public resetSetHotfix() {
    this._setHotfix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHotfixInput() {
    return this._setHotfix;
  }

  // set_hsm_group - computed: true, optional: true, required: false
  private _setHsmGroup?: boolean | cdktf.IResolvable; 
  public get setHsmGroup() {
    return this.getBooleanAttribute('set_hsm_group');
  }
  public set setHsmGroup(value: boolean | cdktf.IResolvable) {
    this._setHsmGroup = value;
  }
  public resetSetHsmGroup() {
    this._setHsmGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHsmGroupInput() {
    return this._setHsmGroup;
  }

  // set_hw_ident - computed: true, optional: true, required: false
  private _setHwIdent?: boolean | cdktf.IResolvable; 
  public get setHwIdent() {
    return this.getBooleanAttribute('set_hw_ident');
  }
  public set setHwIdent(value: boolean | cdktf.IResolvable) {
    this._setHwIdent = value;
  }
  public resetSetHwIdent() {
    this._setHwIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHwIdentInput() {
    return this._setHwIdent;
  }

  // set_ibtrap - computed: true, optional: true, required: false
  private _setIbtrap?: boolean | cdktf.IResolvable; 
  public get setIbtrap() {
    return this.getBooleanAttribute('set_ibtrap');
  }
  public set setIbtrap(value: boolean | cdktf.IResolvable) {
    this._setIbtrap = value;
  }
  public resetSetIbtrap() {
    this._setIbtrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIbtrapInput() {
    return this._setIbtrap;
  }

  // set_lines - computed: true, optional: true, required: false
  private _setLines?: boolean | cdktf.IResolvable; 
  public get setLines() {
    return this.getBooleanAttribute('set_lines');
  }
  public set setLines(value: boolean | cdktf.IResolvable) {
    this._setLines = value;
  }
  public resetSetLines() {
    this._setLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLinesInput() {
    return this._setLines;
  }

  // set_maintenancemode - computed: true, optional: true, required: false
  private _setMaintenancemode?: boolean | cdktf.IResolvable; 
  public get setMaintenancemode() {
    return this.getBooleanAttribute('set_maintenancemode');
  }
  public set setMaintenancemode(value: boolean | cdktf.IResolvable) {
    this._setMaintenancemode = value;
  }
  public resetSetMaintenancemode() {
    this._setMaintenancemode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMaintenancemodeInput() {
    return this._setMaintenancemode;
  }

  // set_mgm - computed: true, optional: true, required: false
  private _setMgm?: boolean | cdktf.IResolvable; 
  public get setMgm() {
    return this.getBooleanAttribute('set_mgm');
  }
  public set setMgm(value: boolean | cdktf.IResolvable) {
    this._setMgm = value;
  }
  public resetSetMgm() {
    this._setMgm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMgmInput() {
    return this._setMgm;
  }

  // set_ms_max_connection - computed: true, optional: true, required: false
  private _setMsMaxConnection?: boolean | cdktf.IResolvable; 
  public get setMsMaxConnection() {
    return this.getBooleanAttribute('set_ms_max_connection');
  }
  public set setMsMaxConnection(value: boolean | cdktf.IResolvable) {
    this._setMsMaxConnection = value;
  }
  public resetSetMsMaxConnection() {
    this._setMsMaxConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMsMaxConnectionInput() {
    return this._setMsMaxConnection;
  }

  // set_nosafemode - computed: true, optional: true, required: false
  private _setNosafemode?: boolean | cdktf.IResolvable; 
  public get setNosafemode() {
    return this.getBooleanAttribute('set_nosafemode');
  }
  public set setNosafemode(value: boolean | cdktf.IResolvable) {
    this._setNosafemode = value;
  }
  public resetSetNosafemode() {
    this._setNosafemode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNosafemodeInput() {
    return this._setNosafemode;
  }

  // set_ntp_stratum - computed: true, optional: true, required: false
  private _setNtpStratum?: boolean | cdktf.IResolvable; 
  public get setNtpStratum() {
    return this.getBooleanAttribute('set_ntp_stratum');
  }
  public set setNtpStratum(value: boolean | cdktf.IResolvable) {
    this._setNtpStratum = value;
  }
  public resetSetNtpStratum() {
    this._setNtpStratum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNtpStratumInput() {
    return this._setNtpStratum;
  }

  // set_ocsp - computed: true, optional: true, required: false
  private _setOcsp?: boolean | cdktf.IResolvable; 
  public get setOcsp() {
    return this.getBooleanAttribute('set_ocsp');
  }
  public set setOcsp(value: boolean | cdktf.IResolvable) {
    this._setOcsp = value;
  }
  public resetSetOcsp() {
    this._setOcsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOcspInput() {
    return this._setOcsp;
  }

  // set_pc_domain - computed: true, optional: true, required: false
  private _setPcDomain?: boolean | cdktf.IResolvable; 
  public get setPcDomain() {
    return this.getBooleanAttribute('set_pc_domain');
  }
  public set setPcDomain(value: boolean | cdktf.IResolvable) {
    this._setPcDomain = value;
  }
  public resetSetPcDomain() {
    this._setPcDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPcDomainInput() {
    return this._setPcDomain;
  }

  // set_purge_restart_objects - computed: true, optional: true, required: false
  private _setPurgeRestartObjects?: boolean | cdktf.IResolvable; 
  public get setPurgeRestartObjects() {
    return this.getBooleanAttribute('set_purge_restart_objects');
  }
  public set setPurgeRestartObjects(value: boolean | cdktf.IResolvable) {
    this._setPurgeRestartObjects = value;
  }
  public resetSetPurgeRestartObjects() {
    this._setPurgeRestartObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPurgeRestartObjectsInput() {
    return this._setPurgeRestartObjects;
  }

  // set_report_frequency - computed: true, optional: true, required: false
  private _setReportFrequency?: boolean | cdktf.IResolvable; 
  public get setReportFrequency() {
    return this.getBooleanAttribute('set_report_frequency');
  }
  public set setReportFrequency(value: boolean | cdktf.IResolvable) {
    this._setReportFrequency = value;
  }
  public resetSetReportFrequency() {
    this._setReportFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setReportFrequencyInput() {
    return this._setReportFrequency;
  }

  // set_reporting_user_capabilities - computed: true, optional: true, required: false
  private _setReportingUserCapabilities?: boolean | cdktf.IResolvable; 
  public get setReportingUserCapabilities() {
    return this.getBooleanAttribute('set_reporting_user_capabilities');
  }
  public set setReportingUserCapabilities(value: boolean | cdktf.IResolvable) {
    this._setReportingUserCapabilities = value;
  }
  public resetSetReportingUserCapabilities() {
    this._setReportingUserCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setReportingUserCapabilitiesInput() {
    return this._setReportingUserCapabilities;
  }

  // set_rpz_recursive_only - computed: true, optional: true, required: false
  private _setRpzRecursiveOnly?: boolean | cdktf.IResolvable; 
  public get setRpzRecursiveOnly() {
    return this.getBooleanAttribute('set_rpz_recursive_only');
  }
  public set setRpzRecursiveOnly(value: boolean | cdktf.IResolvable) {
    this._setRpzRecursiveOnly = value;
  }
  public resetSetRpzRecursiveOnly() {
    this._setRpzRecursiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRpzRecursiveOnlyInput() {
    return this._setRpzRecursiveOnly;
  }

  // set_safemode - computed: true, optional: true, required: false
  private _setSafemode?: boolean | cdktf.IResolvable; 
  public get setSafemode() {
    return this.getBooleanAttribute('set_safemode');
  }
  public set setSafemode(value: boolean | cdktf.IResolvable) {
    this._setSafemode = value;
  }
  public resetSetSafemode() {
    this._setSafemode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSafemodeInput() {
    return this._setSafemode;
  }

  // set_scheduled - computed: true, optional: true, required: false
  private _setScheduled?: boolean | cdktf.IResolvable; 
  public get setScheduled() {
    return this.getBooleanAttribute('set_scheduled');
  }
  public set setScheduled(value: boolean | cdktf.IResolvable) {
    this._setScheduled = value;
  }
  public resetSetScheduled() {
    this._setScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setScheduledInput() {
    return this._setScheduled;
  }

  // set_snmptrap - computed: true, optional: true, required: false
  private _setSnmptrap?: boolean | cdktf.IResolvable; 
  public get setSnmptrap() {
    return this.getBooleanAttribute('set_snmptrap');
  }
  public set setSnmptrap(value: boolean | cdktf.IResolvable) {
    this._setSnmptrap = value;
  }
  public resetSetSnmptrap() {
    this._setSnmptrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSnmptrapInput() {
    return this._setSnmptrap;
  }

  // set_sysname - computed: true, optional: true, required: false
  private _setSysname?: boolean | cdktf.IResolvable; 
  public get setSysname() {
    return this.getBooleanAttribute('set_sysname');
  }
  public set setSysname(value: boolean | cdktf.IResolvable) {
    this._setSysname = value;
  }
  public resetSetSysname() {
    this._setSysname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSysnameInput() {
    return this._setSysname;
  }

  // set_term - computed: true, optional: true, required: false
  private _setTerm?: boolean | cdktf.IResolvable; 
  public get setTerm() {
    return this.getBooleanAttribute('set_term');
  }
  public set setTerm(value: boolean | cdktf.IResolvable) {
    this._setTerm = value;
  }
  public resetSetTerm() {
    this._setTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTermInput() {
    return this._setTerm;
  }

  // set_thresholdtrap - computed: true, optional: true, required: false
  private _setThresholdtrap?: boolean | cdktf.IResolvable; 
  public get setThresholdtrap() {
    return this.getBooleanAttribute('set_thresholdtrap');
  }
  public set setThresholdtrap(value: boolean | cdktf.IResolvable) {
    this._setThresholdtrap = value;
  }
  public resetSetThresholdtrap() {
    this._setThresholdtrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setThresholdtrapInput() {
    return this._setThresholdtrap;
  }

  // set_transfer_reporting_data - computed: true, optional: true, required: false
  private _setTransferReportingData?: boolean | cdktf.IResolvable; 
  public get setTransferReportingData() {
    return this.getBooleanAttribute('set_transfer_reporting_data');
  }
  public set setTransferReportingData(value: boolean | cdktf.IResolvable) {
    this._setTransferReportingData = value;
  }
  public resetSetTransferReportingData() {
    this._setTransferReportingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTransferReportingDataInput() {
    return this._setTransferReportingData;
  }

  // set_transfer_supportbundle - computed: true, optional: true, required: false
  private _setTransferSupportbundle?: boolean | cdktf.IResolvable; 
  public get setTransferSupportbundle() {
    return this.getBooleanAttribute('set_transfer_supportbundle');
  }
  public set setTransferSupportbundle(value: boolean | cdktf.IResolvable) {
    this._setTransferSupportbundle = value;
  }
  public resetSetTransferSupportbundle() {
    this._setTransferSupportbundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTransferSupportbundleInput() {
    return this._setTransferSupportbundle;
  }

  // set_wred - computed: true, optional: true, required: false
  private _setWred?: boolean | cdktf.IResolvable; 
  public get setWred() {
    return this.getBooleanAttribute('set_wred');
  }
  public set setWred(value: boolean | cdktf.IResolvable) {
    this._setWred = value;
  }
  public resetSetWred() {
    this._setWred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setWredInput() {
    return this._setWred;
  }
}
export interface DataNiosSecurityAdminGroupResultAdminShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_admin_group_acl DataNiosSecurityAdminGroup#show_admin_group_acl}
  */
  readonly showAdminGroupAcl?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_analytics_database_dumps DataNiosSecurityAdminGroup#show_analytics_database_dumps}
  */
  readonly showAnalyticsDatabaseDumps?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_analytics_parameter DataNiosSecurityAdminGroup#show_analytics_parameter}
  */
  readonly showAnalyticsParameter?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_arp DataNiosSecurityAdminGroup#show_arp}
  */
  readonly showArp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_bfd DataNiosSecurityAdminGroup#show_bfd}
  */
  readonly showBfd?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_bgp DataNiosSecurityAdminGroup#show_bgp}
  */
  readonly showBgp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_capacity DataNiosSecurityAdminGroup#show_capacity}
  */
  readonly showCapacity?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_clusterd_info DataNiosSecurityAdminGroup#show_clusterd_info}
  */
  readonly showClusterdInfo?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_config DataNiosSecurityAdminGroup#show_config}
  */
  readonly showConfig?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_cores DataNiosSecurityAdminGroup#show_cores}
  */
  readonly showCores?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_coresummary DataNiosSecurityAdminGroup#show_coresummary}
  */
  readonly showCoresummary?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_cpu DataNiosSecurityAdminGroup#show_cpu}
  */
  readonly showCpu?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_csp_threat_db DataNiosSecurityAdminGroup#show_csp_threat_db}
  */
  readonly showCspThreatDb?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_date DataNiosSecurityAdminGroup#show_date}
  */
  readonly showDate?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_debug DataNiosSecurityAdminGroup#show_debug}
  */
  readonly showDebug?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_debug_analytics DataNiosSecurityAdminGroup#show_debug_analytics}
  */
  readonly showDebugAnalytics?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_delete_tasks_interval DataNiosSecurityAdminGroup#show_delete_tasks_interval}
  */
  readonly showDeleteTasksInterval?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_disk DataNiosSecurityAdminGroup#show_disk}
  */
  readonly showDisk?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_hardware_status DataNiosSecurityAdminGroup#show_hardware_status}
  */
  readonly showHardwareStatus?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_hardware_type DataNiosSecurityAdminGroup#show_hardware_type}
  */
  readonly showHardwareType?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_hsm_group DataNiosSecurityAdminGroup#show_hsm_group}
  */
  readonly showHsmGroup?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_hsm_info DataNiosSecurityAdminGroup#show_hsm_info}
  */
  readonly showHsmInfo?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_hw_ident DataNiosSecurityAdminGroup#show_hw_ident}
  */
  readonly showHwIdent?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_hwid DataNiosSecurityAdminGroup#show_hwid}
  */
  readonly showHwid?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ibtrap DataNiosSecurityAdminGroup#show_ibtrap}
  */
  readonly showIbtrap?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_log DataNiosSecurityAdminGroup#show_log}
  */
  readonly showLog?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_logfiles DataNiosSecurityAdminGroup#show_logfiles}
  */
  readonly showLogfiles?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_memory DataNiosSecurityAdminGroup#show_memory}
  */
  readonly showMemory?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ntp DataNiosSecurityAdminGroup#show_ntp}
  */
  readonly showNtp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ntp_stratum DataNiosSecurityAdminGroup#show_ntp_stratum}
  */
  readonly showNtpStratum?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_pc_domain DataNiosSecurityAdminGroup#show_pc_domain}
  */
  readonly showPcDomain?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_pmap DataNiosSecurityAdminGroup#show_pmap}
  */
  readonly showPmap?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_process DataNiosSecurityAdminGroup#show_process}
  */
  readonly showProcess?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_pstack DataNiosSecurityAdminGroup#show_pstack}
  */
  readonly showPstack?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_report_frequency DataNiosSecurityAdminGroup#show_report_frequency}
  */
  readonly showReportFrequency?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_reporting_user_capabilities DataNiosSecurityAdminGroup#show_reporting_user_capabilities}
  */
  readonly showReportingUserCapabilities?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_rpz_recursive_only DataNiosSecurityAdminGroup#show_rpz_recursive_only}
  */
  readonly showRpzRecursiveOnly?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_safenet_support_info DataNiosSecurityAdminGroup#show_safenet_support_info}
  */
  readonly showSafenetSupportInfo?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_scheduled DataNiosSecurityAdminGroup#show_scheduled}
  */
  readonly showScheduled?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_snmp DataNiosSecurityAdminGroup#show_snmp}
  */
  readonly showSnmp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_status DataNiosSecurityAdminGroup#show_status}
  */
  readonly showStatus?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_tech_support DataNiosSecurityAdminGroup#show_tech_support}
  */
  readonly showTechSupport?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_temperature DataNiosSecurityAdminGroup#show_temperature}
  */
  readonly showTemperature?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_thresholdtrap DataNiosSecurityAdminGroup#show_thresholdtrap}
  */
  readonly showThresholdtrap?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_upgrade_history DataNiosSecurityAdminGroup#show_upgrade_history}
  */
  readonly showUpgradeHistory?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_uptime DataNiosSecurityAdminGroup#show_uptime}
  */
  readonly showUptime?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_version DataNiosSecurityAdminGroup#show_version}
  */
  readonly showVersion?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_wred_stats DataNiosSecurityAdminGroup#show_wred_stats}
  */
  readonly showWredStats?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_wred_status DataNiosSecurityAdminGroup#show_wred_status}
  */
  readonly showWredStatus?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultAdminShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultAdminShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_admin_group_acl: cdktf.booleanToTerraform(struct!.showAdminGroupAcl),
    show_analytics_database_dumps: cdktf.booleanToTerraform(struct!.showAnalyticsDatabaseDumps),
    show_analytics_parameter: cdktf.booleanToTerraform(struct!.showAnalyticsParameter),
    show_arp: cdktf.booleanToTerraform(struct!.showArp),
    show_bfd: cdktf.booleanToTerraform(struct!.showBfd),
    show_bgp: cdktf.booleanToTerraform(struct!.showBgp),
    show_capacity: cdktf.booleanToTerraform(struct!.showCapacity),
    show_clusterd_info: cdktf.booleanToTerraform(struct!.showClusterdInfo),
    show_config: cdktf.booleanToTerraform(struct!.showConfig),
    show_cores: cdktf.booleanToTerraform(struct!.showCores),
    show_coresummary: cdktf.booleanToTerraform(struct!.showCoresummary),
    show_cpu: cdktf.booleanToTerraform(struct!.showCpu),
    show_csp_threat_db: cdktf.booleanToTerraform(struct!.showCspThreatDb),
    show_date: cdktf.booleanToTerraform(struct!.showDate),
    show_debug: cdktf.booleanToTerraform(struct!.showDebug),
    show_debug_analytics: cdktf.booleanToTerraform(struct!.showDebugAnalytics),
    show_delete_tasks_interval: cdktf.booleanToTerraform(struct!.showDeleteTasksInterval),
    show_disk: cdktf.booleanToTerraform(struct!.showDisk),
    show_hardware_status: cdktf.booleanToTerraform(struct!.showHardwareStatus),
    show_hardware_type: cdktf.booleanToTerraform(struct!.showHardwareType),
    show_hsm_group: cdktf.booleanToTerraform(struct!.showHsmGroup),
    show_hsm_info: cdktf.booleanToTerraform(struct!.showHsmInfo),
    show_hw_ident: cdktf.booleanToTerraform(struct!.showHwIdent),
    show_hwid: cdktf.booleanToTerraform(struct!.showHwid),
    show_ibtrap: cdktf.booleanToTerraform(struct!.showIbtrap),
    show_log: cdktf.booleanToTerraform(struct!.showLog),
    show_logfiles: cdktf.booleanToTerraform(struct!.showLogfiles),
    show_memory: cdktf.booleanToTerraform(struct!.showMemory),
    show_ntp: cdktf.booleanToTerraform(struct!.showNtp),
    show_ntp_stratum: cdktf.booleanToTerraform(struct!.showNtpStratum),
    show_pc_domain: cdktf.booleanToTerraform(struct!.showPcDomain),
    show_pmap: cdktf.booleanToTerraform(struct!.showPmap),
    show_process: cdktf.booleanToTerraform(struct!.showProcess),
    show_pstack: cdktf.booleanToTerraform(struct!.showPstack),
    show_report_frequency: cdktf.booleanToTerraform(struct!.showReportFrequency),
    show_reporting_user_capabilities: cdktf.booleanToTerraform(struct!.showReportingUserCapabilities),
    show_rpz_recursive_only: cdktf.booleanToTerraform(struct!.showRpzRecursiveOnly),
    show_safenet_support_info: cdktf.booleanToTerraform(struct!.showSafenetSupportInfo),
    show_scheduled: cdktf.booleanToTerraform(struct!.showScheduled),
    show_snmp: cdktf.booleanToTerraform(struct!.showSnmp),
    show_status: cdktf.booleanToTerraform(struct!.showStatus),
    show_tech_support: cdktf.booleanToTerraform(struct!.showTechSupport),
    show_temperature: cdktf.booleanToTerraform(struct!.showTemperature),
    show_thresholdtrap: cdktf.booleanToTerraform(struct!.showThresholdtrap),
    show_upgrade_history: cdktf.booleanToTerraform(struct!.showUpgradeHistory),
    show_uptime: cdktf.booleanToTerraform(struct!.showUptime),
    show_version: cdktf.booleanToTerraform(struct!.showVersion),
    show_wred_stats: cdktf.booleanToTerraform(struct!.showWredStats),
    show_wred_status: cdktf.booleanToTerraform(struct!.showWredStatus),
  }
}


export function dataNiosSecurityAdminGroupResultAdminShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultAdminShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_admin_group_acl: {
      value: cdktf.booleanToHclTerraform(struct!.showAdminGroupAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_analytics_database_dumps: {
      value: cdktf.booleanToHclTerraform(struct!.showAnalyticsDatabaseDumps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_analytics_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.showAnalyticsParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_arp: {
      value: cdktf.booleanToHclTerraform(struct!.showArp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_bfd: {
      value: cdktf.booleanToHclTerraform(struct!.showBfd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_bgp: {
      value: cdktf.booleanToHclTerraform(struct!.showBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_capacity: {
      value: cdktf.booleanToHclTerraform(struct!.showCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_clusterd_info: {
      value: cdktf.booleanToHclTerraform(struct!.showClusterdInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_config: {
      value: cdktf.booleanToHclTerraform(struct!.showConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_cores: {
      value: cdktf.booleanToHclTerraform(struct!.showCores),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_coresummary: {
      value: cdktf.booleanToHclTerraform(struct!.showCoresummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_cpu: {
      value: cdktf.booleanToHclTerraform(struct!.showCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_csp_threat_db: {
      value: cdktf.booleanToHclTerraform(struct!.showCspThreatDb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_date: {
      value: cdktf.booleanToHclTerraform(struct!.showDate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_debug: {
      value: cdktf.booleanToHclTerraform(struct!.showDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_debug_analytics: {
      value: cdktf.booleanToHclTerraform(struct!.showDebugAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_delete_tasks_interval: {
      value: cdktf.booleanToHclTerraform(struct!.showDeleteTasksInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_disk: {
      value: cdktf.booleanToHclTerraform(struct!.showDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_hardware_status: {
      value: cdktf.booleanToHclTerraform(struct!.showHardwareStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_hardware_type: {
      value: cdktf.booleanToHclTerraform(struct!.showHardwareType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_hsm_group: {
      value: cdktf.booleanToHclTerraform(struct!.showHsmGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_hsm_info: {
      value: cdktf.booleanToHclTerraform(struct!.showHsmInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_hw_ident: {
      value: cdktf.booleanToHclTerraform(struct!.showHwIdent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_hwid: {
      value: cdktf.booleanToHclTerraform(struct!.showHwid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ibtrap: {
      value: cdktf.booleanToHclTerraform(struct!.showIbtrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_log: {
      value: cdktf.booleanToHclTerraform(struct!.showLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_logfiles: {
      value: cdktf.booleanToHclTerraform(struct!.showLogfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_memory: {
      value: cdktf.booleanToHclTerraform(struct!.showMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ntp: {
      value: cdktf.booleanToHclTerraform(struct!.showNtp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ntp_stratum: {
      value: cdktf.booleanToHclTerraform(struct!.showNtpStratum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_pc_domain: {
      value: cdktf.booleanToHclTerraform(struct!.showPcDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_pmap: {
      value: cdktf.booleanToHclTerraform(struct!.showPmap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_process: {
      value: cdktf.booleanToHclTerraform(struct!.showProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_pstack: {
      value: cdktf.booleanToHclTerraform(struct!.showPstack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_report_frequency: {
      value: cdktf.booleanToHclTerraform(struct!.showReportFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_reporting_user_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.showReportingUserCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_rpz_recursive_only: {
      value: cdktf.booleanToHclTerraform(struct!.showRpzRecursiveOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_safenet_support_info: {
      value: cdktf.booleanToHclTerraform(struct!.showSafenetSupportInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_scheduled: {
      value: cdktf.booleanToHclTerraform(struct!.showScheduled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_snmp: {
      value: cdktf.booleanToHclTerraform(struct!.showSnmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_status: {
      value: cdktf.booleanToHclTerraform(struct!.showStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_tech_support: {
      value: cdktf.booleanToHclTerraform(struct!.showTechSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_temperature: {
      value: cdktf.booleanToHclTerraform(struct!.showTemperature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_thresholdtrap: {
      value: cdktf.booleanToHclTerraform(struct!.showThresholdtrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_upgrade_history: {
      value: cdktf.booleanToHclTerraform(struct!.showUpgradeHistory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_uptime: {
      value: cdktf.booleanToHclTerraform(struct!.showUptime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_version: {
      value: cdktf.booleanToHclTerraform(struct!.showVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_wred_stats: {
      value: cdktf.booleanToHclTerraform(struct!.showWredStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_wred_status: {
      value: cdktf.booleanToHclTerraform(struct!.showWredStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultAdminShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultAdminShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showAdminGroupAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAdminGroupAcl = this._showAdminGroupAcl;
    }
    if (this._showAnalyticsDatabaseDumps !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAnalyticsDatabaseDumps = this._showAnalyticsDatabaseDumps;
    }
    if (this._showAnalyticsParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAnalyticsParameter = this._showAnalyticsParameter;
    }
    if (this._showArp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showArp = this._showArp;
    }
    if (this._showBfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.showBfd = this._showBfd;
    }
    if (this._showBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showBgp = this._showBgp;
    }
    if (this._showCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCapacity = this._showCapacity;
    }
    if (this._showClusterdInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.showClusterdInfo = this._showClusterdInfo;
    }
    if (this._showConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.showConfig = this._showConfig;
    }
    if (this._showCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCores = this._showCores;
    }
    if (this._showCoresummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCoresummary = this._showCoresummary;
    }
    if (this._showCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCpu = this._showCpu;
    }
    if (this._showCspThreatDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCspThreatDb = this._showCspThreatDb;
    }
    if (this._showDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDate = this._showDate;
    }
    if (this._showDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDebug = this._showDebug;
    }
    if (this._showDebugAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDebugAnalytics = this._showDebugAnalytics;
    }
    if (this._showDeleteTasksInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDeleteTasksInterval = this._showDeleteTasksInterval;
    }
    if (this._showDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDisk = this._showDisk;
    }
    if (this._showHardwareStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.showHardwareStatus = this._showHardwareStatus;
    }
    if (this._showHardwareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.showHardwareType = this._showHardwareType;
    }
    if (this._showHsmGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.showHsmGroup = this._showHsmGroup;
    }
    if (this._showHsmInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.showHsmInfo = this._showHsmInfo;
    }
    if (this._showHwIdent !== undefined) {
      hasAnyValues = true;
      internalValueResult.showHwIdent = this._showHwIdent;
    }
    if (this._showHwid !== undefined) {
      hasAnyValues = true;
      internalValueResult.showHwid = this._showHwid;
    }
    if (this._showIbtrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIbtrap = this._showIbtrap;
    }
    if (this._showLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLog = this._showLog;
    }
    if (this._showLogfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLogfiles = this._showLogfiles;
    }
    if (this._showMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMemory = this._showMemory;
    }
    if (this._showNtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNtp = this._showNtp;
    }
    if (this._showNtpStratum !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNtpStratum = this._showNtpStratum;
    }
    if (this._showPcDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPcDomain = this._showPcDomain;
    }
    if (this._showPmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPmap = this._showPmap;
    }
    if (this._showProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.showProcess = this._showProcess;
    }
    if (this._showPstack !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPstack = this._showPstack;
    }
    if (this._showReportFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.showReportFrequency = this._showReportFrequency;
    }
    if (this._showReportingUserCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.showReportingUserCapabilities = this._showReportingUserCapabilities;
    }
    if (this._showRpzRecursiveOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.showRpzRecursiveOnly = this._showRpzRecursiveOnly;
    }
    if (this._showSafenetSupportInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSafenetSupportInfo = this._showSafenetSupportInfo;
    }
    if (this._showScheduled !== undefined) {
      hasAnyValues = true;
      internalValueResult.showScheduled = this._showScheduled;
    }
    if (this._showSnmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSnmp = this._showSnmp;
    }
    if (this._showStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.showStatus = this._showStatus;
    }
    if (this._showTechSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTechSupport = this._showTechSupport;
    }
    if (this._showTemperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTemperature = this._showTemperature;
    }
    if (this._showThresholdtrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.showThresholdtrap = this._showThresholdtrap;
    }
    if (this._showUpgradeHistory !== undefined) {
      hasAnyValues = true;
      internalValueResult.showUpgradeHistory = this._showUpgradeHistory;
    }
    if (this._showUptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.showUptime = this._showUptime;
    }
    if (this._showVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.showVersion = this._showVersion;
    }
    if (this._showWredStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.showWredStats = this._showWredStats;
    }
    if (this._showWredStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.showWredStatus = this._showWredStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultAdminShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showAdminGroupAcl = undefined;
      this._showAnalyticsDatabaseDumps = undefined;
      this._showAnalyticsParameter = undefined;
      this._showArp = undefined;
      this._showBfd = undefined;
      this._showBgp = undefined;
      this._showCapacity = undefined;
      this._showClusterdInfo = undefined;
      this._showConfig = undefined;
      this._showCores = undefined;
      this._showCoresummary = undefined;
      this._showCpu = undefined;
      this._showCspThreatDb = undefined;
      this._showDate = undefined;
      this._showDebug = undefined;
      this._showDebugAnalytics = undefined;
      this._showDeleteTasksInterval = undefined;
      this._showDisk = undefined;
      this._showHardwareStatus = undefined;
      this._showHardwareType = undefined;
      this._showHsmGroup = undefined;
      this._showHsmInfo = undefined;
      this._showHwIdent = undefined;
      this._showHwid = undefined;
      this._showIbtrap = undefined;
      this._showLog = undefined;
      this._showLogfiles = undefined;
      this._showMemory = undefined;
      this._showNtp = undefined;
      this._showNtpStratum = undefined;
      this._showPcDomain = undefined;
      this._showPmap = undefined;
      this._showProcess = undefined;
      this._showPstack = undefined;
      this._showReportFrequency = undefined;
      this._showReportingUserCapabilities = undefined;
      this._showRpzRecursiveOnly = undefined;
      this._showSafenetSupportInfo = undefined;
      this._showScheduled = undefined;
      this._showSnmp = undefined;
      this._showStatus = undefined;
      this._showTechSupport = undefined;
      this._showTemperature = undefined;
      this._showThresholdtrap = undefined;
      this._showUpgradeHistory = undefined;
      this._showUptime = undefined;
      this._showVersion = undefined;
      this._showWredStats = undefined;
      this._showWredStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showAdminGroupAcl = value.showAdminGroupAcl;
      this._showAnalyticsDatabaseDumps = value.showAnalyticsDatabaseDumps;
      this._showAnalyticsParameter = value.showAnalyticsParameter;
      this._showArp = value.showArp;
      this._showBfd = value.showBfd;
      this._showBgp = value.showBgp;
      this._showCapacity = value.showCapacity;
      this._showClusterdInfo = value.showClusterdInfo;
      this._showConfig = value.showConfig;
      this._showCores = value.showCores;
      this._showCoresummary = value.showCoresummary;
      this._showCpu = value.showCpu;
      this._showCspThreatDb = value.showCspThreatDb;
      this._showDate = value.showDate;
      this._showDebug = value.showDebug;
      this._showDebugAnalytics = value.showDebugAnalytics;
      this._showDeleteTasksInterval = value.showDeleteTasksInterval;
      this._showDisk = value.showDisk;
      this._showHardwareStatus = value.showHardwareStatus;
      this._showHardwareType = value.showHardwareType;
      this._showHsmGroup = value.showHsmGroup;
      this._showHsmInfo = value.showHsmInfo;
      this._showHwIdent = value.showHwIdent;
      this._showHwid = value.showHwid;
      this._showIbtrap = value.showIbtrap;
      this._showLog = value.showLog;
      this._showLogfiles = value.showLogfiles;
      this._showMemory = value.showMemory;
      this._showNtp = value.showNtp;
      this._showNtpStratum = value.showNtpStratum;
      this._showPcDomain = value.showPcDomain;
      this._showPmap = value.showPmap;
      this._showProcess = value.showProcess;
      this._showPstack = value.showPstack;
      this._showReportFrequency = value.showReportFrequency;
      this._showReportingUserCapabilities = value.showReportingUserCapabilities;
      this._showRpzRecursiveOnly = value.showRpzRecursiveOnly;
      this._showSafenetSupportInfo = value.showSafenetSupportInfo;
      this._showScheduled = value.showScheduled;
      this._showSnmp = value.showSnmp;
      this._showStatus = value.showStatus;
      this._showTechSupport = value.showTechSupport;
      this._showTemperature = value.showTemperature;
      this._showThresholdtrap = value.showThresholdtrap;
      this._showUpgradeHistory = value.showUpgradeHistory;
      this._showUptime = value.showUptime;
      this._showVersion = value.showVersion;
      this._showWredStats = value.showWredStats;
      this._showWredStatus = value.showWredStatus;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_admin_group_acl - computed: true, optional: true, required: false
  private _showAdminGroupAcl?: boolean | cdktf.IResolvable; 
  public get showAdminGroupAcl() {
    return this.getBooleanAttribute('show_admin_group_acl');
  }
  public set showAdminGroupAcl(value: boolean | cdktf.IResolvable) {
    this._showAdminGroupAcl = value;
  }
  public resetShowAdminGroupAcl() {
    this._showAdminGroupAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAdminGroupAclInput() {
    return this._showAdminGroupAcl;
  }

  // show_analytics_database_dumps - computed: true, optional: true, required: false
  private _showAnalyticsDatabaseDumps?: boolean | cdktf.IResolvable; 
  public get showAnalyticsDatabaseDumps() {
    return this.getBooleanAttribute('show_analytics_database_dumps');
  }
  public set showAnalyticsDatabaseDumps(value: boolean | cdktf.IResolvable) {
    this._showAnalyticsDatabaseDumps = value;
  }
  public resetShowAnalyticsDatabaseDumps() {
    this._showAnalyticsDatabaseDumps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAnalyticsDatabaseDumpsInput() {
    return this._showAnalyticsDatabaseDumps;
  }

  // show_analytics_parameter - computed: true, optional: true, required: false
  private _showAnalyticsParameter?: boolean | cdktf.IResolvable; 
  public get showAnalyticsParameter() {
    return this.getBooleanAttribute('show_analytics_parameter');
  }
  public set showAnalyticsParameter(value: boolean | cdktf.IResolvable) {
    this._showAnalyticsParameter = value;
  }
  public resetShowAnalyticsParameter() {
    this._showAnalyticsParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAnalyticsParameterInput() {
    return this._showAnalyticsParameter;
  }

  // show_arp - computed: true, optional: true, required: false
  private _showArp?: boolean | cdktf.IResolvable; 
  public get showArp() {
    return this.getBooleanAttribute('show_arp');
  }
  public set showArp(value: boolean | cdktf.IResolvable) {
    this._showArp = value;
  }
  public resetShowArp() {
    this._showArp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showArpInput() {
    return this._showArp;
  }

  // show_bfd - computed: true, optional: true, required: false
  private _showBfd?: boolean | cdktf.IResolvable; 
  public get showBfd() {
    return this.getBooleanAttribute('show_bfd');
  }
  public set showBfd(value: boolean | cdktf.IResolvable) {
    this._showBfd = value;
  }
  public resetShowBfd() {
    this._showBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showBfdInput() {
    return this._showBfd;
  }

  // show_bgp - computed: true, optional: true, required: false
  private _showBgp?: boolean | cdktf.IResolvable; 
  public get showBgp() {
    return this.getBooleanAttribute('show_bgp');
  }
  public set showBgp(value: boolean | cdktf.IResolvable) {
    this._showBgp = value;
  }
  public resetShowBgp() {
    this._showBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showBgpInput() {
    return this._showBgp;
  }

  // show_capacity - computed: true, optional: true, required: false
  private _showCapacity?: boolean | cdktf.IResolvable; 
  public get showCapacity() {
    return this.getBooleanAttribute('show_capacity');
  }
  public set showCapacity(value: boolean | cdktf.IResolvable) {
    this._showCapacity = value;
  }
  public resetShowCapacity() {
    this._showCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCapacityInput() {
    return this._showCapacity;
  }

  // show_clusterd_info - computed: true, optional: true, required: false
  private _showClusterdInfo?: boolean | cdktf.IResolvable; 
  public get showClusterdInfo() {
    return this.getBooleanAttribute('show_clusterd_info');
  }
  public set showClusterdInfo(value: boolean | cdktf.IResolvable) {
    this._showClusterdInfo = value;
  }
  public resetShowClusterdInfo() {
    this._showClusterdInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showClusterdInfoInput() {
    return this._showClusterdInfo;
  }

  // show_config - computed: true, optional: true, required: false
  private _showConfig?: boolean | cdktf.IResolvable; 
  public get showConfig() {
    return this.getBooleanAttribute('show_config');
  }
  public set showConfig(value: boolean | cdktf.IResolvable) {
    this._showConfig = value;
  }
  public resetShowConfig() {
    this._showConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showConfigInput() {
    return this._showConfig;
  }

  // show_cores - computed: true, optional: true, required: false
  private _showCores?: boolean | cdktf.IResolvable; 
  public get showCores() {
    return this.getBooleanAttribute('show_cores');
  }
  public set showCores(value: boolean | cdktf.IResolvable) {
    this._showCores = value;
  }
  public resetShowCores() {
    this._showCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCoresInput() {
    return this._showCores;
  }

  // show_coresummary - computed: true, optional: true, required: false
  private _showCoresummary?: boolean | cdktf.IResolvable; 
  public get showCoresummary() {
    return this.getBooleanAttribute('show_coresummary');
  }
  public set showCoresummary(value: boolean | cdktf.IResolvable) {
    this._showCoresummary = value;
  }
  public resetShowCoresummary() {
    this._showCoresummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCoresummaryInput() {
    return this._showCoresummary;
  }

  // show_cpu - computed: true, optional: true, required: false
  private _showCpu?: boolean | cdktf.IResolvable; 
  public get showCpu() {
    return this.getBooleanAttribute('show_cpu');
  }
  public set showCpu(value: boolean | cdktf.IResolvable) {
    this._showCpu = value;
  }
  public resetShowCpu() {
    this._showCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCpuInput() {
    return this._showCpu;
  }

  // show_csp_threat_db - computed: true, optional: true, required: false
  private _showCspThreatDb?: boolean | cdktf.IResolvable; 
  public get showCspThreatDb() {
    return this.getBooleanAttribute('show_csp_threat_db');
  }
  public set showCspThreatDb(value: boolean | cdktf.IResolvable) {
    this._showCspThreatDb = value;
  }
  public resetShowCspThreatDb() {
    this._showCspThreatDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCspThreatDbInput() {
    return this._showCspThreatDb;
  }

  // show_date - computed: true, optional: true, required: false
  private _showDate?: boolean | cdktf.IResolvable; 
  public get showDate() {
    return this.getBooleanAttribute('show_date');
  }
  public set showDate(value: boolean | cdktf.IResolvable) {
    this._showDate = value;
  }
  public resetShowDate() {
    this._showDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDateInput() {
    return this._showDate;
  }

  // show_debug - computed: true, optional: true, required: false
  private _showDebug?: boolean | cdktf.IResolvable; 
  public get showDebug() {
    return this.getBooleanAttribute('show_debug');
  }
  public set showDebug(value: boolean | cdktf.IResolvable) {
    this._showDebug = value;
  }
  public resetShowDebug() {
    this._showDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDebugInput() {
    return this._showDebug;
  }

  // show_debug_analytics - computed: true, optional: true, required: false
  private _showDebugAnalytics?: boolean | cdktf.IResolvable; 
  public get showDebugAnalytics() {
    return this.getBooleanAttribute('show_debug_analytics');
  }
  public set showDebugAnalytics(value: boolean | cdktf.IResolvable) {
    this._showDebugAnalytics = value;
  }
  public resetShowDebugAnalytics() {
    this._showDebugAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDebugAnalyticsInput() {
    return this._showDebugAnalytics;
  }

  // show_delete_tasks_interval - computed: true, optional: true, required: false
  private _showDeleteTasksInterval?: boolean | cdktf.IResolvable; 
  public get showDeleteTasksInterval() {
    return this.getBooleanAttribute('show_delete_tasks_interval');
  }
  public set showDeleteTasksInterval(value: boolean | cdktf.IResolvable) {
    this._showDeleteTasksInterval = value;
  }
  public resetShowDeleteTasksInterval() {
    this._showDeleteTasksInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDeleteTasksIntervalInput() {
    return this._showDeleteTasksInterval;
  }

  // show_disk - computed: true, optional: true, required: false
  private _showDisk?: boolean | cdktf.IResolvable; 
  public get showDisk() {
    return this.getBooleanAttribute('show_disk');
  }
  public set showDisk(value: boolean | cdktf.IResolvable) {
    this._showDisk = value;
  }
  public resetShowDisk() {
    this._showDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDiskInput() {
    return this._showDisk;
  }

  // show_hardware_status - computed: true, optional: true, required: false
  private _showHardwareStatus?: boolean | cdktf.IResolvable; 
  public get showHardwareStatus() {
    return this.getBooleanAttribute('show_hardware_status');
  }
  public set showHardwareStatus(value: boolean | cdktf.IResolvable) {
    this._showHardwareStatus = value;
  }
  public resetShowHardwareStatus() {
    this._showHardwareStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHardwareStatusInput() {
    return this._showHardwareStatus;
  }

  // show_hardware_type - computed: true, optional: true, required: false
  private _showHardwareType?: boolean | cdktf.IResolvable; 
  public get showHardwareType() {
    return this.getBooleanAttribute('show_hardware_type');
  }
  public set showHardwareType(value: boolean | cdktf.IResolvable) {
    this._showHardwareType = value;
  }
  public resetShowHardwareType() {
    this._showHardwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHardwareTypeInput() {
    return this._showHardwareType;
  }

  // show_hsm_group - computed: true, optional: true, required: false
  private _showHsmGroup?: boolean | cdktf.IResolvable; 
  public get showHsmGroup() {
    return this.getBooleanAttribute('show_hsm_group');
  }
  public set showHsmGroup(value: boolean | cdktf.IResolvable) {
    this._showHsmGroup = value;
  }
  public resetShowHsmGroup() {
    this._showHsmGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHsmGroupInput() {
    return this._showHsmGroup;
  }

  // show_hsm_info - computed: true, optional: true, required: false
  private _showHsmInfo?: boolean | cdktf.IResolvable; 
  public get showHsmInfo() {
    return this.getBooleanAttribute('show_hsm_info');
  }
  public set showHsmInfo(value: boolean | cdktf.IResolvable) {
    this._showHsmInfo = value;
  }
  public resetShowHsmInfo() {
    this._showHsmInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHsmInfoInput() {
    return this._showHsmInfo;
  }

  // show_hw_ident - computed: true, optional: true, required: false
  private _showHwIdent?: boolean | cdktf.IResolvable; 
  public get showHwIdent() {
    return this.getBooleanAttribute('show_hw_ident');
  }
  public set showHwIdent(value: boolean | cdktf.IResolvable) {
    this._showHwIdent = value;
  }
  public resetShowHwIdent() {
    this._showHwIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHwIdentInput() {
    return this._showHwIdent;
  }

  // show_hwid - computed: true, optional: true, required: false
  private _showHwid?: boolean | cdktf.IResolvable; 
  public get showHwid() {
    return this.getBooleanAttribute('show_hwid');
  }
  public set showHwid(value: boolean | cdktf.IResolvable) {
    this._showHwid = value;
  }
  public resetShowHwid() {
    this._showHwid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHwidInput() {
    return this._showHwid;
  }

  // show_ibtrap - computed: true, optional: true, required: false
  private _showIbtrap?: boolean | cdktf.IResolvable; 
  public get showIbtrap() {
    return this.getBooleanAttribute('show_ibtrap');
  }
  public set showIbtrap(value: boolean | cdktf.IResolvable) {
    this._showIbtrap = value;
  }
  public resetShowIbtrap() {
    this._showIbtrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIbtrapInput() {
    return this._showIbtrap;
  }

  // show_log - computed: true, optional: true, required: false
  private _showLog?: boolean | cdktf.IResolvable; 
  public get showLog() {
    return this.getBooleanAttribute('show_log');
  }
  public set showLog(value: boolean | cdktf.IResolvable) {
    this._showLog = value;
  }
  public resetShowLog() {
    this._showLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLogInput() {
    return this._showLog;
  }

  // show_logfiles - computed: true, optional: true, required: false
  private _showLogfiles?: boolean | cdktf.IResolvable; 
  public get showLogfiles() {
    return this.getBooleanAttribute('show_logfiles');
  }
  public set showLogfiles(value: boolean | cdktf.IResolvable) {
    this._showLogfiles = value;
  }
  public resetShowLogfiles() {
    this._showLogfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLogfilesInput() {
    return this._showLogfiles;
  }

  // show_memory - computed: true, optional: true, required: false
  private _showMemory?: boolean | cdktf.IResolvable; 
  public get showMemory() {
    return this.getBooleanAttribute('show_memory');
  }
  public set showMemory(value: boolean | cdktf.IResolvable) {
    this._showMemory = value;
  }
  public resetShowMemory() {
    this._showMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMemoryInput() {
    return this._showMemory;
  }

  // show_ntp - computed: true, optional: true, required: false
  private _showNtp?: boolean | cdktf.IResolvable; 
  public get showNtp() {
    return this.getBooleanAttribute('show_ntp');
  }
  public set showNtp(value: boolean | cdktf.IResolvable) {
    this._showNtp = value;
  }
  public resetShowNtp() {
    this._showNtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNtpInput() {
    return this._showNtp;
  }

  // show_ntp_stratum - computed: true, optional: true, required: false
  private _showNtpStratum?: boolean | cdktf.IResolvable; 
  public get showNtpStratum() {
    return this.getBooleanAttribute('show_ntp_stratum');
  }
  public set showNtpStratum(value: boolean | cdktf.IResolvable) {
    this._showNtpStratum = value;
  }
  public resetShowNtpStratum() {
    this._showNtpStratum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNtpStratumInput() {
    return this._showNtpStratum;
  }

  // show_pc_domain - computed: true, optional: true, required: false
  private _showPcDomain?: boolean | cdktf.IResolvable; 
  public get showPcDomain() {
    return this.getBooleanAttribute('show_pc_domain');
  }
  public set showPcDomain(value: boolean | cdktf.IResolvable) {
    this._showPcDomain = value;
  }
  public resetShowPcDomain() {
    this._showPcDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPcDomainInput() {
    return this._showPcDomain;
  }

  // show_pmap - computed: true, optional: true, required: false
  private _showPmap?: boolean | cdktf.IResolvable; 
  public get showPmap() {
    return this.getBooleanAttribute('show_pmap');
  }
  public set showPmap(value: boolean | cdktf.IResolvable) {
    this._showPmap = value;
  }
  public resetShowPmap() {
    this._showPmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPmapInput() {
    return this._showPmap;
  }

  // show_process - computed: true, optional: true, required: false
  private _showProcess?: boolean | cdktf.IResolvable; 
  public get showProcess() {
    return this.getBooleanAttribute('show_process');
  }
  public set showProcess(value: boolean | cdktf.IResolvable) {
    this._showProcess = value;
  }
  public resetShowProcess() {
    this._showProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showProcessInput() {
    return this._showProcess;
  }

  // show_pstack - computed: true, optional: true, required: false
  private _showPstack?: boolean | cdktf.IResolvable; 
  public get showPstack() {
    return this.getBooleanAttribute('show_pstack');
  }
  public set showPstack(value: boolean | cdktf.IResolvable) {
    this._showPstack = value;
  }
  public resetShowPstack() {
    this._showPstack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPstackInput() {
    return this._showPstack;
  }

  // show_report_frequency - computed: true, optional: true, required: false
  private _showReportFrequency?: boolean | cdktf.IResolvable; 
  public get showReportFrequency() {
    return this.getBooleanAttribute('show_report_frequency');
  }
  public set showReportFrequency(value: boolean | cdktf.IResolvable) {
    this._showReportFrequency = value;
  }
  public resetShowReportFrequency() {
    this._showReportFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showReportFrequencyInput() {
    return this._showReportFrequency;
  }

  // show_reporting_user_capabilities - computed: true, optional: true, required: false
  private _showReportingUserCapabilities?: boolean | cdktf.IResolvable; 
  public get showReportingUserCapabilities() {
    return this.getBooleanAttribute('show_reporting_user_capabilities');
  }
  public set showReportingUserCapabilities(value: boolean | cdktf.IResolvable) {
    this._showReportingUserCapabilities = value;
  }
  public resetShowReportingUserCapabilities() {
    this._showReportingUserCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showReportingUserCapabilitiesInput() {
    return this._showReportingUserCapabilities;
  }

  // show_rpz_recursive_only - computed: true, optional: true, required: false
  private _showRpzRecursiveOnly?: boolean | cdktf.IResolvable; 
  public get showRpzRecursiveOnly() {
    return this.getBooleanAttribute('show_rpz_recursive_only');
  }
  public set showRpzRecursiveOnly(value: boolean | cdktf.IResolvable) {
    this._showRpzRecursiveOnly = value;
  }
  public resetShowRpzRecursiveOnly() {
    this._showRpzRecursiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRpzRecursiveOnlyInput() {
    return this._showRpzRecursiveOnly;
  }

  // show_safenet_support_info - computed: true, optional: true, required: false
  private _showSafenetSupportInfo?: boolean | cdktf.IResolvable; 
  public get showSafenetSupportInfo() {
    return this.getBooleanAttribute('show_safenet_support_info');
  }
  public set showSafenetSupportInfo(value: boolean | cdktf.IResolvable) {
    this._showSafenetSupportInfo = value;
  }
  public resetShowSafenetSupportInfo() {
    this._showSafenetSupportInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSafenetSupportInfoInput() {
    return this._showSafenetSupportInfo;
  }

  // show_scheduled - computed: true, optional: true, required: false
  private _showScheduled?: boolean | cdktf.IResolvable; 
  public get showScheduled() {
    return this.getBooleanAttribute('show_scheduled');
  }
  public set showScheduled(value: boolean | cdktf.IResolvable) {
    this._showScheduled = value;
  }
  public resetShowScheduled() {
    this._showScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showScheduledInput() {
    return this._showScheduled;
  }

  // show_snmp - computed: true, optional: true, required: false
  private _showSnmp?: boolean | cdktf.IResolvable; 
  public get showSnmp() {
    return this.getBooleanAttribute('show_snmp');
  }
  public set showSnmp(value: boolean | cdktf.IResolvable) {
    this._showSnmp = value;
  }
  public resetShowSnmp() {
    this._showSnmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSnmpInput() {
    return this._showSnmp;
  }

  // show_status - computed: true, optional: true, required: false
  private _showStatus?: boolean | cdktf.IResolvable; 
  public get showStatus() {
    return this.getBooleanAttribute('show_status');
  }
  public set showStatus(value: boolean | cdktf.IResolvable) {
    this._showStatus = value;
  }
  public resetShowStatus() {
    this._showStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showStatusInput() {
    return this._showStatus;
  }

  // show_tech_support - computed: true, optional: true, required: false
  private _showTechSupport?: boolean | cdktf.IResolvable; 
  public get showTechSupport() {
    return this.getBooleanAttribute('show_tech_support');
  }
  public set showTechSupport(value: boolean | cdktf.IResolvable) {
    this._showTechSupport = value;
  }
  public resetShowTechSupport() {
    this._showTechSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTechSupportInput() {
    return this._showTechSupport;
  }

  // show_temperature - computed: true, optional: true, required: false
  private _showTemperature?: boolean | cdktf.IResolvable; 
  public get showTemperature() {
    return this.getBooleanAttribute('show_temperature');
  }
  public set showTemperature(value: boolean | cdktf.IResolvable) {
    this._showTemperature = value;
  }
  public resetShowTemperature() {
    this._showTemperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTemperatureInput() {
    return this._showTemperature;
  }

  // show_thresholdtrap - computed: true, optional: true, required: false
  private _showThresholdtrap?: boolean | cdktf.IResolvable; 
  public get showThresholdtrap() {
    return this.getBooleanAttribute('show_thresholdtrap');
  }
  public set showThresholdtrap(value: boolean | cdktf.IResolvable) {
    this._showThresholdtrap = value;
  }
  public resetShowThresholdtrap() {
    this._showThresholdtrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showThresholdtrapInput() {
    return this._showThresholdtrap;
  }

  // show_upgrade_history - computed: true, optional: true, required: false
  private _showUpgradeHistory?: boolean | cdktf.IResolvable; 
  public get showUpgradeHistory() {
    return this.getBooleanAttribute('show_upgrade_history');
  }
  public set showUpgradeHistory(value: boolean | cdktf.IResolvable) {
    this._showUpgradeHistory = value;
  }
  public resetShowUpgradeHistory() {
    this._showUpgradeHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUpgradeHistoryInput() {
    return this._showUpgradeHistory;
  }

  // show_uptime - computed: true, optional: true, required: false
  private _showUptime?: boolean | cdktf.IResolvable; 
  public get showUptime() {
    return this.getBooleanAttribute('show_uptime');
  }
  public set showUptime(value: boolean | cdktf.IResolvable) {
    this._showUptime = value;
  }
  public resetShowUptime() {
    this._showUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUptimeInput() {
    return this._showUptime;
  }

  // show_version - computed: true, optional: true, required: false
  private _showVersion?: boolean | cdktf.IResolvable; 
  public get showVersion() {
    return this.getBooleanAttribute('show_version');
  }
  public set showVersion(value: boolean | cdktf.IResolvable) {
    this._showVersion = value;
  }
  public resetShowVersion() {
    this._showVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showVersionInput() {
    return this._showVersion;
  }

  // show_wred_stats - computed: true, optional: true, required: false
  private _showWredStats?: boolean | cdktf.IResolvable; 
  public get showWredStats() {
    return this.getBooleanAttribute('show_wred_stats');
  }
  public set showWredStats(value: boolean | cdktf.IResolvable) {
    this._showWredStats = value;
  }
  public resetShowWredStats() {
    this._showWredStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showWredStatsInput() {
    return this._showWredStats;
  }

  // show_wred_status - computed: true, optional: true, required: false
  private _showWredStatus?: boolean | cdktf.IResolvable; 
  public get showWredStatus() {
    return this.getBooleanAttribute('show_wred_status');
  }
  public set showWredStatus(value: boolean | cdktf.IResolvable) {
    this._showWredStatus = value;
  }
  public resetShowWredStatus() {
    this._showWredStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showWredStatusInput() {
    return this._showWredStatus;
  }
}
export interface DataNiosSecurityAdminGroupResultAdminToplevelCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#iostat DataNiosSecurityAdminGroup#iostat}
  */
  readonly iostat?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#netstat DataNiosSecurityAdminGroup#netstat}
  */
  readonly netstat?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#ps DataNiosSecurityAdminGroup#ps}
  */
  readonly ps?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#resilver DataNiosSecurityAdminGroup#resilver}
  */
  readonly resilver?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#restart_product DataNiosSecurityAdminGroup#restart_product}
  */
  readonly restartProduct?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#rndc DataNiosSecurityAdminGroup#rndc}
  */
  readonly rndc?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#saml_restart DataNiosSecurityAdminGroup#saml_restart}
  */
  readonly samlRestart?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#sar DataNiosSecurityAdminGroup#sar}
  */
  readonly sar?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#scrape DataNiosSecurityAdminGroup#scrape}
  */
  readonly scrape?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#synctime DataNiosSecurityAdminGroup#synctime}
  */
  readonly synctime?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#tcpdump DataNiosSecurityAdminGroup#tcpdump}
  */
  readonly tcpdump?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#vmstat DataNiosSecurityAdminGroup#vmstat}
  */
  readonly vmstat?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultAdminToplevelCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultAdminToplevelCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iostat: cdktf.booleanToTerraform(struct!.iostat),
    netstat: cdktf.booleanToTerraform(struct!.netstat),
    ps: cdktf.booleanToTerraform(struct!.ps),
    resilver: cdktf.booleanToTerraform(struct!.resilver),
    restart_product: cdktf.booleanToTerraform(struct!.restartProduct),
    rndc: cdktf.booleanToTerraform(struct!.rndc),
    saml_restart: cdktf.booleanToTerraform(struct!.samlRestart),
    sar: cdktf.booleanToTerraform(struct!.sar),
    scrape: cdktf.booleanToTerraform(struct!.scrape),
    synctime: cdktf.booleanToTerraform(struct!.synctime),
    tcpdump: cdktf.booleanToTerraform(struct!.tcpdump),
    vmstat: cdktf.booleanToTerraform(struct!.vmstat),
  }
}


export function dataNiosSecurityAdminGroupResultAdminToplevelCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultAdminToplevelCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iostat: {
      value: cdktf.booleanToHclTerraform(struct!.iostat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netstat: {
      value: cdktf.booleanToHclTerraform(struct!.netstat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ps: {
      value: cdktf.booleanToHclTerraform(struct!.ps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resilver: {
      value: cdktf.booleanToHclTerraform(struct!.resilver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restart_product: {
      value: cdktf.booleanToHclTerraform(struct!.restartProduct),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rndc: {
      value: cdktf.booleanToHclTerraform(struct!.rndc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    saml_restart: {
      value: cdktf.booleanToHclTerraform(struct!.samlRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sar: {
      value: cdktf.booleanToHclTerraform(struct!.sar),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scrape: {
      value: cdktf.booleanToHclTerraform(struct!.scrape),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    synctime: {
      value: cdktf.booleanToHclTerraform(struct!.synctime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tcpdump: {
      value: cdktf.booleanToHclTerraform(struct!.tcpdump),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vmstat: {
      value: cdktf.booleanToHclTerraform(struct!.vmstat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultAdminToplevelCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultAdminToplevelCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iostat !== undefined) {
      hasAnyValues = true;
      internalValueResult.iostat = this._iostat;
    }
    if (this._netstat !== undefined) {
      hasAnyValues = true;
      internalValueResult.netstat = this._netstat;
    }
    if (this._ps !== undefined) {
      hasAnyValues = true;
      internalValueResult.ps = this._ps;
    }
    if (this._resilver !== undefined) {
      hasAnyValues = true;
      internalValueResult.resilver = this._resilver;
    }
    if (this._restartProduct !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartProduct = this._restartProduct;
    }
    if (this._rndc !== undefined) {
      hasAnyValues = true;
      internalValueResult.rndc = this._rndc;
    }
    if (this._samlRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlRestart = this._samlRestart;
    }
    if (this._sar !== undefined) {
      hasAnyValues = true;
      internalValueResult.sar = this._sar;
    }
    if (this._scrape !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrape = this._scrape;
    }
    if (this._synctime !== undefined) {
      hasAnyValues = true;
      internalValueResult.synctime = this._synctime;
    }
    if (this._tcpdump !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpdump = this._tcpdump;
    }
    if (this._vmstat !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmstat = this._vmstat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultAdminToplevelCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iostat = undefined;
      this._netstat = undefined;
      this._ps = undefined;
      this._resilver = undefined;
      this._restartProduct = undefined;
      this._rndc = undefined;
      this._samlRestart = undefined;
      this._sar = undefined;
      this._scrape = undefined;
      this._synctime = undefined;
      this._tcpdump = undefined;
      this._vmstat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iostat = value.iostat;
      this._netstat = value.netstat;
      this._ps = value.ps;
      this._resilver = value.resilver;
      this._restartProduct = value.restartProduct;
      this._rndc = value.rndc;
      this._samlRestart = value.samlRestart;
      this._sar = value.sar;
      this._scrape = value.scrape;
      this._synctime = value.synctime;
      this._tcpdump = value.tcpdump;
      this._vmstat = value.vmstat;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // iostat - computed: true, optional: true, required: false
  private _iostat?: boolean | cdktf.IResolvable; 
  public get iostat() {
    return this.getBooleanAttribute('iostat');
  }
  public set iostat(value: boolean | cdktf.IResolvable) {
    this._iostat = value;
  }
  public resetIostat() {
    this._iostat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iostatInput() {
    return this._iostat;
  }

  // netstat - computed: true, optional: true, required: false
  private _netstat?: boolean | cdktf.IResolvable; 
  public get netstat() {
    return this.getBooleanAttribute('netstat');
  }
  public set netstat(value: boolean | cdktf.IResolvable) {
    this._netstat = value;
  }
  public resetNetstat() {
    this._netstat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netstatInput() {
    return this._netstat;
  }

  // ps - computed: true, optional: true, required: false
  private _ps?: boolean | cdktf.IResolvable; 
  public get ps() {
    return this.getBooleanAttribute('ps');
  }
  public set ps(value: boolean | cdktf.IResolvable) {
    this._ps = value;
  }
  public resetPs() {
    this._ps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psInput() {
    return this._ps;
  }

  // resilver - computed: true, optional: true, required: false
  private _resilver?: boolean | cdktf.IResolvable; 
  public get resilver() {
    return this.getBooleanAttribute('resilver');
  }
  public set resilver(value: boolean | cdktf.IResolvable) {
    this._resilver = value;
  }
  public resetResilver() {
    this._resilver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resilverInput() {
    return this._resilver;
  }

  // restart_product - computed: true, optional: true, required: false
  private _restartProduct?: boolean | cdktf.IResolvable; 
  public get restartProduct() {
    return this.getBooleanAttribute('restart_product');
  }
  public set restartProduct(value: boolean | cdktf.IResolvable) {
    this._restartProduct = value;
  }
  public resetRestartProduct() {
    this._restartProduct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartProductInput() {
    return this._restartProduct;
  }

  // rndc - computed: true, optional: true, required: false
  private _rndc?: boolean | cdktf.IResolvable; 
  public get rndc() {
    return this.getBooleanAttribute('rndc');
  }
  public set rndc(value: boolean | cdktf.IResolvable) {
    this._rndc = value;
  }
  public resetRndc() {
    this._rndc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rndcInput() {
    return this._rndc;
  }

  // saml_restart - computed: true, optional: true, required: false
  private _samlRestart?: boolean | cdktf.IResolvable; 
  public get samlRestart() {
    return this.getBooleanAttribute('saml_restart');
  }
  public set samlRestart(value: boolean | cdktf.IResolvable) {
    this._samlRestart = value;
  }
  public resetSamlRestart() {
    this._samlRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlRestartInput() {
    return this._samlRestart;
  }

  // sar - computed: true, optional: true, required: false
  private _sar?: boolean | cdktf.IResolvable; 
  public get sar() {
    return this.getBooleanAttribute('sar');
  }
  public set sar(value: boolean | cdktf.IResolvable) {
    this._sar = value;
  }
  public resetSar() {
    this._sar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sarInput() {
    return this._sar;
  }

  // scrape - computed: true, optional: true, required: false
  private _scrape?: boolean | cdktf.IResolvable; 
  public get scrape() {
    return this.getBooleanAttribute('scrape');
  }
  public set scrape(value: boolean | cdktf.IResolvable) {
    this._scrape = value;
  }
  public resetScrape() {
    this._scrape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeInput() {
    return this._scrape;
  }

  // synctime - computed: true, optional: true, required: false
  private _synctime?: boolean | cdktf.IResolvable; 
  public get synctime() {
    return this.getBooleanAttribute('synctime');
  }
  public set synctime(value: boolean | cdktf.IResolvable) {
    this._synctime = value;
  }
  public resetSynctime() {
    this._synctime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synctimeInput() {
    return this._synctime;
  }

  // tcpdump - computed: true, optional: true, required: false
  private _tcpdump?: boolean | cdktf.IResolvable; 
  public get tcpdump() {
    return this.getBooleanAttribute('tcpdump');
  }
  public set tcpdump(value: boolean | cdktf.IResolvable) {
    this._tcpdump = value;
  }
  public resetTcpdump() {
    this._tcpdump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpdumpInput() {
    return this._tcpdump;
  }

  // vmstat - computed: true, optional: true, required: false
  private _vmstat?: boolean | cdktf.IResolvable; 
  public get vmstat() {
    return this.getBooleanAttribute('vmstat');
  }
  public set vmstat(value: boolean | cdktf.IResolvable) {
    this._vmstat = value;
  }
  public resetVmstat() {
    this._vmstat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmstatInput() {
    return this._vmstat;
  }
}
export interface DataNiosSecurityAdminGroupResultCloudSetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_cloud_services_portal DataNiosSecurityAdminGroup#set_cloud_services_portal}
  */
  readonly setCloudServicesPortal?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_cloud_services_portal_forcerefresh DataNiosSecurityAdminGroup#set_cloud_services_portal_forcerefresh}
  */
  readonly setCloudServicesPortalForcerefresh?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultCloudSetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultCloudSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_cloud_services_portal: cdktf.booleanToTerraform(struct!.setCloudServicesPortal),
    set_cloud_services_portal_forcerefresh: cdktf.booleanToTerraform(struct!.setCloudServicesPortalForcerefresh),
  }
}


export function dataNiosSecurityAdminGroupResultCloudSetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultCloudSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_cloud_services_portal: {
      value: cdktf.booleanToHclTerraform(struct!.setCloudServicesPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_cloud_services_portal_forcerefresh: {
      value: cdktf.booleanToHclTerraform(struct!.setCloudServicesPortalForcerefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultCloudSetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultCloudSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setCloudServicesPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCloudServicesPortal = this._setCloudServicesPortal;
    }
    if (this._setCloudServicesPortalForcerefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCloudServicesPortalForcerefresh = this._setCloudServicesPortalForcerefresh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultCloudSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setCloudServicesPortal = undefined;
      this._setCloudServicesPortalForcerefresh = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setCloudServicesPortal = value.setCloudServicesPortal;
      this._setCloudServicesPortalForcerefresh = value.setCloudServicesPortalForcerefresh;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // set_cloud_services_portal - computed: true, optional: true, required: false
  private _setCloudServicesPortal?: boolean | cdktf.IResolvable; 
  public get setCloudServicesPortal() {
    return this.getBooleanAttribute('set_cloud_services_portal');
  }
  public set setCloudServicesPortal(value: boolean | cdktf.IResolvable) {
    this._setCloudServicesPortal = value;
  }
  public resetSetCloudServicesPortal() {
    this._setCloudServicesPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCloudServicesPortalInput() {
    return this._setCloudServicesPortal;
  }

  // set_cloud_services_portal_forcerefresh - computed: true, optional: true, required: false
  private _setCloudServicesPortalForcerefresh?: boolean | cdktf.IResolvable; 
  public get setCloudServicesPortalForcerefresh() {
    return this.getBooleanAttribute('set_cloud_services_portal_forcerefresh');
  }
  public set setCloudServicesPortalForcerefresh(value: boolean | cdktf.IResolvable) {
    this._setCloudServicesPortalForcerefresh = value;
  }
  public resetSetCloudServicesPortalForcerefresh() {
    this._setCloudServicesPortalForcerefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCloudServicesPortalForcerefreshInput() {
    return this._setCloudServicesPortalForcerefresh;
  }
}
export interface DataNiosSecurityAdminGroupResultCloudShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_cloud_services_portal DataNiosSecurityAdminGroup#show_cloud_services_portal}
  */
  readonly showCloudServicesPortal?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultCloudShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultCloudShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_cloud_services_portal: cdktf.booleanToTerraform(struct!.showCloudServicesPortal),
  }
}


export function dataNiosSecurityAdminGroupResultCloudShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultCloudShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_cloud_services_portal: {
      value: cdktf.booleanToHclTerraform(struct!.showCloudServicesPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultCloudShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultCloudShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showCloudServicesPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCloudServicesPortal = this._showCloudServicesPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultCloudShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showCloudServicesPortal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showCloudServicesPortal = value.showCloudServicesPortal;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_cloud_services_portal - computed: true, optional: true, required: false
  private _showCloudServicesPortal?: boolean | cdktf.IResolvable; 
  public get showCloudServicesPortal() {
    return this.getBooleanAttribute('show_cloud_services_portal');
  }
  public set showCloudServicesPortal(value: boolean | cdktf.IResolvable) {
    this._showCloudServicesPortal = value;
  }
  public resetShowCloudServicesPortal() {
    this._showCloudServicesPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCloudServicesPortalInput() {
    return this._showCloudServicesPortal;
  }
}
export interface DataNiosSecurityAdminGroupResultDatabaseSetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_circ_txn_trace DataNiosSecurityAdminGroup#set_circ_txn_trace}
  */
  readonly setCircTxnTrace?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_database_transfer DataNiosSecurityAdminGroup#set_database_transfer}
  */
  readonly setDatabaseTransfer?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_db_rollover DataNiosSecurityAdminGroup#set_db_rollover}
  */
  readonly setDbRollover?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_db_snapshot DataNiosSecurityAdminGroup#set_db_snapshot}
  */
  readonly setDbSnapshot?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_dbsize DataNiosSecurityAdminGroup#set_dbsize}
  */
  readonly setDbsize?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_debug_tools DataNiosSecurityAdminGroup#set_debug_tools}
  */
  readonly setDebugTools?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_named_max_journal_size DataNiosSecurityAdminGroup#set_named_max_journal_size}
  */
  readonly setNamedMaxJournalSize?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_txn_trace DataNiosSecurityAdminGroup#set_txn_trace}
  */
  readonly setTxnTrace?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultDatabaseSetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultDatabaseSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_circ_txn_trace: cdktf.booleanToTerraform(struct!.setCircTxnTrace),
    set_database_transfer: cdktf.booleanToTerraform(struct!.setDatabaseTransfer),
    set_db_rollover: cdktf.booleanToTerraform(struct!.setDbRollover),
    set_db_snapshot: cdktf.booleanToTerraform(struct!.setDbSnapshot),
    set_dbsize: cdktf.booleanToTerraform(struct!.setDbsize),
    set_debug_tools: cdktf.booleanToTerraform(struct!.setDebugTools),
    set_named_max_journal_size: cdktf.booleanToTerraform(struct!.setNamedMaxJournalSize),
    set_txn_trace: cdktf.booleanToTerraform(struct!.setTxnTrace),
  }
}


export function dataNiosSecurityAdminGroupResultDatabaseSetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultDatabaseSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_circ_txn_trace: {
      value: cdktf.booleanToHclTerraform(struct!.setCircTxnTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_database_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.setDatabaseTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_db_rollover: {
      value: cdktf.booleanToHclTerraform(struct!.setDbRollover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_db_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.setDbSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_dbsize: {
      value: cdktf.booleanToHclTerraform(struct!.setDbsize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_debug_tools: {
      value: cdktf.booleanToHclTerraform(struct!.setDebugTools),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_named_max_journal_size: {
      value: cdktf.booleanToHclTerraform(struct!.setNamedMaxJournalSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_txn_trace: {
      value: cdktf.booleanToHclTerraform(struct!.setTxnTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultDatabaseSetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultDatabaseSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setCircTxnTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCircTxnTrace = this._setCircTxnTrace;
    }
    if (this._setDatabaseTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDatabaseTransfer = this._setDatabaseTransfer;
    }
    if (this._setDbRollover !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDbRollover = this._setDbRollover;
    }
    if (this._setDbSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDbSnapshot = this._setDbSnapshot;
    }
    if (this._setDbsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDbsize = this._setDbsize;
    }
    if (this._setDebugTools !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDebugTools = this._setDebugTools;
    }
    if (this._setNamedMaxJournalSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNamedMaxJournalSize = this._setNamedMaxJournalSize;
    }
    if (this._setTxnTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTxnTrace = this._setTxnTrace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultDatabaseSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setCircTxnTrace = undefined;
      this._setDatabaseTransfer = undefined;
      this._setDbRollover = undefined;
      this._setDbSnapshot = undefined;
      this._setDbsize = undefined;
      this._setDebugTools = undefined;
      this._setNamedMaxJournalSize = undefined;
      this._setTxnTrace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setCircTxnTrace = value.setCircTxnTrace;
      this._setDatabaseTransfer = value.setDatabaseTransfer;
      this._setDbRollover = value.setDbRollover;
      this._setDbSnapshot = value.setDbSnapshot;
      this._setDbsize = value.setDbsize;
      this._setDebugTools = value.setDebugTools;
      this._setNamedMaxJournalSize = value.setNamedMaxJournalSize;
      this._setTxnTrace = value.setTxnTrace;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // set_circ_txn_trace - computed: true, optional: true, required: false
  private _setCircTxnTrace?: boolean | cdktf.IResolvable; 
  public get setCircTxnTrace() {
    return this.getBooleanAttribute('set_circ_txn_trace');
  }
  public set setCircTxnTrace(value: boolean | cdktf.IResolvable) {
    this._setCircTxnTrace = value;
  }
  public resetSetCircTxnTrace() {
    this._setCircTxnTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCircTxnTraceInput() {
    return this._setCircTxnTrace;
  }

  // set_database_transfer - computed: true, optional: true, required: false
  private _setDatabaseTransfer?: boolean | cdktf.IResolvable; 
  public get setDatabaseTransfer() {
    return this.getBooleanAttribute('set_database_transfer');
  }
  public set setDatabaseTransfer(value: boolean | cdktf.IResolvable) {
    this._setDatabaseTransfer = value;
  }
  public resetSetDatabaseTransfer() {
    this._setDatabaseTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDatabaseTransferInput() {
    return this._setDatabaseTransfer;
  }

  // set_db_rollover - computed: true, optional: true, required: false
  private _setDbRollover?: boolean | cdktf.IResolvable; 
  public get setDbRollover() {
    return this.getBooleanAttribute('set_db_rollover');
  }
  public set setDbRollover(value: boolean | cdktf.IResolvable) {
    this._setDbRollover = value;
  }
  public resetSetDbRollover() {
    this._setDbRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDbRolloverInput() {
    return this._setDbRollover;
  }

  // set_db_snapshot - computed: true, optional: true, required: false
  private _setDbSnapshot?: boolean | cdktf.IResolvable; 
  public get setDbSnapshot() {
    return this.getBooleanAttribute('set_db_snapshot');
  }
  public set setDbSnapshot(value: boolean | cdktf.IResolvable) {
    this._setDbSnapshot = value;
  }
  public resetSetDbSnapshot() {
    this._setDbSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDbSnapshotInput() {
    return this._setDbSnapshot;
  }

  // set_dbsize - computed: true, optional: true, required: false
  private _setDbsize?: boolean | cdktf.IResolvable; 
  public get setDbsize() {
    return this.getBooleanAttribute('set_dbsize');
  }
  public set setDbsize(value: boolean | cdktf.IResolvable) {
    this._setDbsize = value;
  }
  public resetSetDbsize() {
    this._setDbsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDbsizeInput() {
    return this._setDbsize;
  }

  // set_debug_tools - computed: true, optional: true, required: false
  private _setDebugTools?: boolean | cdktf.IResolvable; 
  public get setDebugTools() {
    return this.getBooleanAttribute('set_debug_tools');
  }
  public set setDebugTools(value: boolean | cdktf.IResolvable) {
    this._setDebugTools = value;
  }
  public resetSetDebugTools() {
    this._setDebugTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDebugToolsInput() {
    return this._setDebugTools;
  }

  // set_named_max_journal_size - computed: true, optional: true, required: false
  private _setNamedMaxJournalSize?: boolean | cdktf.IResolvable; 
  public get setNamedMaxJournalSize() {
    return this.getBooleanAttribute('set_named_max_journal_size');
  }
  public set setNamedMaxJournalSize(value: boolean | cdktf.IResolvable) {
    this._setNamedMaxJournalSize = value;
  }
  public resetSetNamedMaxJournalSize() {
    this._setNamedMaxJournalSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNamedMaxJournalSizeInput() {
    return this._setNamedMaxJournalSize;
  }

  // set_txn_trace - computed: true, optional: true, required: false
  private _setTxnTrace?: boolean | cdktf.IResolvable; 
  public get setTxnTrace() {
    return this.getBooleanAttribute('set_txn_trace');
  }
  public set setTxnTrace(value: boolean | cdktf.IResolvable) {
    this._setTxnTrace = value;
  }
  public resetSetTxnTrace() {
    this._setTxnTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTxnTraceInput() {
    return this._setTxnTrace;
  }
}
export interface DataNiosSecurityAdminGroupResultDatabaseShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_backup DataNiosSecurityAdminGroup#show_backup}
  */
  readonly showBackup?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_database_transfer_status DataNiosSecurityAdminGroup#show_database_transfer_status}
  */
  readonly showDatabaseTransferStatus?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_db_ph DataNiosSecurityAdminGroup#show_db_ph}
  */
  readonly showDbPh?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dbsize DataNiosSecurityAdminGroup#show_dbsize}
  */
  readonly showDbsize?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ibdbstat DataNiosSecurityAdminGroup#show_ibdbstat}
  */
  readonly showIbdbstat?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_named_max_journal_size DataNiosSecurityAdminGroup#show_named_max_journal_size}
  */
  readonly showNamedMaxJournalSize?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_txn_trace DataNiosSecurityAdminGroup#show_txn_trace}
  */
  readonly showTxnTrace?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultDatabaseShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultDatabaseShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_backup: cdktf.booleanToTerraform(struct!.showBackup),
    show_database_transfer_status: cdktf.booleanToTerraform(struct!.showDatabaseTransferStatus),
    show_db_ph: cdktf.booleanToTerraform(struct!.showDbPh),
    show_dbsize: cdktf.booleanToTerraform(struct!.showDbsize),
    show_ibdbstat: cdktf.booleanToTerraform(struct!.showIbdbstat),
    show_named_max_journal_size: cdktf.booleanToTerraform(struct!.showNamedMaxJournalSize),
    show_txn_trace: cdktf.booleanToTerraform(struct!.showTxnTrace),
  }
}


export function dataNiosSecurityAdminGroupResultDatabaseShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultDatabaseShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_backup: {
      value: cdktf.booleanToHclTerraform(struct!.showBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_database_transfer_status: {
      value: cdktf.booleanToHclTerraform(struct!.showDatabaseTransferStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_db_ph: {
      value: cdktf.booleanToHclTerraform(struct!.showDbPh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dbsize: {
      value: cdktf.booleanToHclTerraform(struct!.showDbsize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ibdbstat: {
      value: cdktf.booleanToHclTerraform(struct!.showIbdbstat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_named_max_journal_size: {
      value: cdktf.booleanToHclTerraform(struct!.showNamedMaxJournalSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_txn_trace: {
      value: cdktf.booleanToHclTerraform(struct!.showTxnTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultDatabaseShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultDatabaseShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.showBackup = this._showBackup;
    }
    if (this._showDatabaseTransferStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDatabaseTransferStatus = this._showDatabaseTransferStatus;
    }
    if (this._showDbPh !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDbPh = this._showDbPh;
    }
    if (this._showDbsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDbsize = this._showDbsize;
    }
    if (this._showIbdbstat !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIbdbstat = this._showIbdbstat;
    }
    if (this._showNamedMaxJournalSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNamedMaxJournalSize = this._showNamedMaxJournalSize;
    }
    if (this._showTxnTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTxnTrace = this._showTxnTrace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultDatabaseShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showBackup = undefined;
      this._showDatabaseTransferStatus = undefined;
      this._showDbPh = undefined;
      this._showDbsize = undefined;
      this._showIbdbstat = undefined;
      this._showNamedMaxJournalSize = undefined;
      this._showTxnTrace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showBackup = value.showBackup;
      this._showDatabaseTransferStatus = value.showDatabaseTransferStatus;
      this._showDbPh = value.showDbPh;
      this._showDbsize = value.showDbsize;
      this._showIbdbstat = value.showIbdbstat;
      this._showNamedMaxJournalSize = value.showNamedMaxJournalSize;
      this._showTxnTrace = value.showTxnTrace;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_backup - computed: true, optional: true, required: false
  private _showBackup?: boolean | cdktf.IResolvable; 
  public get showBackup() {
    return this.getBooleanAttribute('show_backup');
  }
  public set showBackup(value: boolean | cdktf.IResolvable) {
    this._showBackup = value;
  }
  public resetShowBackup() {
    this._showBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showBackupInput() {
    return this._showBackup;
  }

  // show_database_transfer_status - computed: true, optional: true, required: false
  private _showDatabaseTransferStatus?: boolean | cdktf.IResolvable; 
  public get showDatabaseTransferStatus() {
    return this.getBooleanAttribute('show_database_transfer_status');
  }
  public set showDatabaseTransferStatus(value: boolean | cdktf.IResolvable) {
    this._showDatabaseTransferStatus = value;
  }
  public resetShowDatabaseTransferStatus() {
    this._showDatabaseTransferStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDatabaseTransferStatusInput() {
    return this._showDatabaseTransferStatus;
  }

  // show_db_ph - computed: true, optional: true, required: false
  private _showDbPh?: boolean | cdktf.IResolvable; 
  public get showDbPh() {
    return this.getBooleanAttribute('show_db_ph');
  }
  public set showDbPh(value: boolean | cdktf.IResolvable) {
    this._showDbPh = value;
  }
  public resetShowDbPh() {
    this._showDbPh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDbPhInput() {
    return this._showDbPh;
  }

  // show_dbsize - computed: true, optional: true, required: false
  private _showDbsize?: boolean | cdktf.IResolvable; 
  public get showDbsize() {
    return this.getBooleanAttribute('show_dbsize');
  }
  public set showDbsize(value: boolean | cdktf.IResolvable) {
    this._showDbsize = value;
  }
  public resetShowDbsize() {
    this._showDbsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDbsizeInput() {
    return this._showDbsize;
  }

  // show_ibdbstat - computed: true, optional: true, required: false
  private _showIbdbstat?: boolean | cdktf.IResolvable; 
  public get showIbdbstat() {
    return this.getBooleanAttribute('show_ibdbstat');
  }
  public set showIbdbstat(value: boolean | cdktf.IResolvable) {
    this._showIbdbstat = value;
  }
  public resetShowIbdbstat() {
    this._showIbdbstat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIbdbstatInput() {
    return this._showIbdbstat;
  }

  // show_named_max_journal_size - computed: true, optional: true, required: false
  private _showNamedMaxJournalSize?: boolean | cdktf.IResolvable; 
  public get showNamedMaxJournalSize() {
    return this.getBooleanAttribute('show_named_max_journal_size');
  }
  public set showNamedMaxJournalSize(value: boolean | cdktf.IResolvable) {
    this._showNamedMaxJournalSize = value;
  }
  public resetShowNamedMaxJournalSize() {
    this._showNamedMaxJournalSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNamedMaxJournalSizeInput() {
    return this._showNamedMaxJournalSize;
  }

  // show_txn_trace - computed: true, optional: true, required: false
  private _showTxnTrace?: boolean | cdktf.IResolvable; 
  public get showTxnTrace() {
    return this.getBooleanAttribute('show_txn_trace');
  }
  public set showTxnTrace(value: boolean | cdktf.IResolvable) {
    this._showTxnTrace = value;
  }
  public resetShowTxnTrace() {
    this._showTxnTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTxnTraceInput() {
    return this._showTxnTrace;
  }
}
export interface DataNiosSecurityAdminGroupResultDhcpSetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_dhcpd_recv_sock_buf_size DataNiosSecurityAdminGroup#set_dhcpd_recv_sock_buf_size}
  */
  readonly setDhcpdRecvSockBufSize?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_log_txn_id DataNiosSecurityAdminGroup#set_log_txn_id}
  */
  readonly setLogTxnId?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_overload_bootp DataNiosSecurityAdminGroup#set_overload_bootp}
  */
  readonly setOverloadBootp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_regenerate_dhcp_updater_keys DataNiosSecurityAdminGroup#set_regenerate_dhcp_updater_keys}
  */
  readonly setRegenerateDhcpUpdaterKeys?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultDhcpSetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultDhcpSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_dhcpd_recv_sock_buf_size: cdktf.booleanToTerraform(struct!.setDhcpdRecvSockBufSize),
    set_log_txn_id: cdktf.booleanToTerraform(struct!.setLogTxnId),
    set_overload_bootp: cdktf.booleanToTerraform(struct!.setOverloadBootp),
    set_regenerate_dhcp_updater_keys: cdktf.booleanToTerraform(struct!.setRegenerateDhcpUpdaterKeys),
  }
}


export function dataNiosSecurityAdminGroupResultDhcpSetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultDhcpSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_dhcpd_recv_sock_buf_size: {
      value: cdktf.booleanToHclTerraform(struct!.setDhcpdRecvSockBufSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_log_txn_id: {
      value: cdktf.booleanToHclTerraform(struct!.setLogTxnId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_overload_bootp: {
      value: cdktf.booleanToHclTerraform(struct!.setOverloadBootp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_regenerate_dhcp_updater_keys: {
      value: cdktf.booleanToHclTerraform(struct!.setRegenerateDhcpUpdaterKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultDhcpSetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultDhcpSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setDhcpdRecvSockBufSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDhcpdRecvSockBufSize = this._setDhcpdRecvSockBufSize;
    }
    if (this._setLogTxnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLogTxnId = this._setLogTxnId;
    }
    if (this._setOverloadBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.setOverloadBootp = this._setOverloadBootp;
    }
    if (this._setRegenerateDhcpUpdaterKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRegenerateDhcpUpdaterKeys = this._setRegenerateDhcpUpdaterKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultDhcpSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setDhcpdRecvSockBufSize = undefined;
      this._setLogTxnId = undefined;
      this._setOverloadBootp = undefined;
      this._setRegenerateDhcpUpdaterKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setDhcpdRecvSockBufSize = value.setDhcpdRecvSockBufSize;
      this._setLogTxnId = value.setLogTxnId;
      this._setOverloadBootp = value.setOverloadBootp;
      this._setRegenerateDhcpUpdaterKeys = value.setRegenerateDhcpUpdaterKeys;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // set_dhcpd_recv_sock_buf_size - computed: true, optional: true, required: false
  private _setDhcpdRecvSockBufSize?: boolean | cdktf.IResolvable; 
  public get setDhcpdRecvSockBufSize() {
    return this.getBooleanAttribute('set_dhcpd_recv_sock_buf_size');
  }
  public set setDhcpdRecvSockBufSize(value: boolean | cdktf.IResolvable) {
    this._setDhcpdRecvSockBufSize = value;
  }
  public resetSetDhcpdRecvSockBufSize() {
    this._setDhcpdRecvSockBufSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDhcpdRecvSockBufSizeInput() {
    return this._setDhcpdRecvSockBufSize;
  }

  // set_log_txn_id - computed: true, optional: true, required: false
  private _setLogTxnId?: boolean | cdktf.IResolvable; 
  public get setLogTxnId() {
    return this.getBooleanAttribute('set_log_txn_id');
  }
  public set setLogTxnId(value: boolean | cdktf.IResolvable) {
    this._setLogTxnId = value;
  }
  public resetSetLogTxnId() {
    this._setLogTxnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLogTxnIdInput() {
    return this._setLogTxnId;
  }

  // set_overload_bootp - computed: true, optional: true, required: false
  private _setOverloadBootp?: boolean | cdktf.IResolvable; 
  public get setOverloadBootp() {
    return this.getBooleanAttribute('set_overload_bootp');
  }
  public set setOverloadBootp(value: boolean | cdktf.IResolvable) {
    this._setOverloadBootp = value;
  }
  public resetSetOverloadBootp() {
    this._setOverloadBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverloadBootpInput() {
    return this._setOverloadBootp;
  }

  // set_regenerate_dhcp_updater_keys - computed: true, optional: true, required: false
  private _setRegenerateDhcpUpdaterKeys?: boolean | cdktf.IResolvable; 
  public get setRegenerateDhcpUpdaterKeys() {
    return this.getBooleanAttribute('set_regenerate_dhcp_updater_keys');
  }
  public set setRegenerateDhcpUpdaterKeys(value: boolean | cdktf.IResolvable) {
    this._setRegenerateDhcpUpdaterKeys = value;
  }
  public resetSetRegenerateDhcpUpdaterKeys() {
    this._setRegenerateDhcpUpdaterKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRegenerateDhcpUpdaterKeysInput() {
    return this._setRegenerateDhcpUpdaterKeys;
  }
}
export interface DataNiosSecurityAdminGroupResultDhcpShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dhcp_gss_tsig DataNiosSecurityAdminGroup#show_dhcp_gss_tsig}
  */
  readonly showDhcpGssTsig?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dhcpd_recv_sock_buf_size DataNiosSecurityAdminGroup#show_dhcpd_recv_sock_buf_size}
  */
  readonly showDhcpdRecvSockBufSize?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dhcpv6_gss_tsig DataNiosSecurityAdminGroup#show_dhcpv6_gss_tsig}
  */
  readonly showDhcpv6GssTsig?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_log_txn_id DataNiosSecurityAdminGroup#show_log_txn_id}
  */
  readonly showLogTxnId?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_overload_bootp DataNiosSecurityAdminGroup#show_overload_bootp}
  */
  readonly showOverloadBootp?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultDhcpShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultDhcpShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_dhcp_gss_tsig: cdktf.booleanToTerraform(struct!.showDhcpGssTsig),
    show_dhcpd_recv_sock_buf_size: cdktf.booleanToTerraform(struct!.showDhcpdRecvSockBufSize),
    show_dhcpv6_gss_tsig: cdktf.booleanToTerraform(struct!.showDhcpv6GssTsig),
    show_log_txn_id: cdktf.booleanToTerraform(struct!.showLogTxnId),
    show_overload_bootp: cdktf.booleanToTerraform(struct!.showOverloadBootp),
  }
}


export function dataNiosSecurityAdminGroupResultDhcpShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultDhcpShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_dhcp_gss_tsig: {
      value: cdktf.booleanToHclTerraform(struct!.showDhcpGssTsig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dhcpd_recv_sock_buf_size: {
      value: cdktf.booleanToHclTerraform(struct!.showDhcpdRecvSockBufSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dhcpv6_gss_tsig: {
      value: cdktf.booleanToHclTerraform(struct!.showDhcpv6GssTsig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_log_txn_id: {
      value: cdktf.booleanToHclTerraform(struct!.showLogTxnId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_overload_bootp: {
      value: cdktf.booleanToHclTerraform(struct!.showOverloadBootp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultDhcpShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultDhcpShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showDhcpGssTsig !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDhcpGssTsig = this._showDhcpGssTsig;
    }
    if (this._showDhcpdRecvSockBufSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDhcpdRecvSockBufSize = this._showDhcpdRecvSockBufSize;
    }
    if (this._showDhcpv6GssTsig !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDhcpv6GssTsig = this._showDhcpv6GssTsig;
    }
    if (this._showLogTxnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLogTxnId = this._showLogTxnId;
    }
    if (this._showOverloadBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showOverloadBootp = this._showOverloadBootp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultDhcpShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showDhcpGssTsig = undefined;
      this._showDhcpdRecvSockBufSize = undefined;
      this._showDhcpv6GssTsig = undefined;
      this._showLogTxnId = undefined;
      this._showOverloadBootp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showDhcpGssTsig = value.showDhcpGssTsig;
      this._showDhcpdRecvSockBufSize = value.showDhcpdRecvSockBufSize;
      this._showDhcpv6GssTsig = value.showDhcpv6GssTsig;
      this._showLogTxnId = value.showLogTxnId;
      this._showOverloadBootp = value.showOverloadBootp;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_dhcp_gss_tsig - computed: true, optional: true, required: false
  private _showDhcpGssTsig?: boolean | cdktf.IResolvable; 
  public get showDhcpGssTsig() {
    return this.getBooleanAttribute('show_dhcp_gss_tsig');
  }
  public set showDhcpGssTsig(value: boolean | cdktf.IResolvable) {
    this._showDhcpGssTsig = value;
  }
  public resetShowDhcpGssTsig() {
    this._showDhcpGssTsig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDhcpGssTsigInput() {
    return this._showDhcpGssTsig;
  }

  // show_dhcpd_recv_sock_buf_size - computed: true, optional: true, required: false
  private _showDhcpdRecvSockBufSize?: boolean | cdktf.IResolvable; 
  public get showDhcpdRecvSockBufSize() {
    return this.getBooleanAttribute('show_dhcpd_recv_sock_buf_size');
  }
  public set showDhcpdRecvSockBufSize(value: boolean | cdktf.IResolvable) {
    this._showDhcpdRecvSockBufSize = value;
  }
  public resetShowDhcpdRecvSockBufSize() {
    this._showDhcpdRecvSockBufSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDhcpdRecvSockBufSizeInput() {
    return this._showDhcpdRecvSockBufSize;
  }

  // show_dhcpv6_gss_tsig - computed: true, optional: true, required: false
  private _showDhcpv6GssTsig?: boolean | cdktf.IResolvable; 
  public get showDhcpv6GssTsig() {
    return this.getBooleanAttribute('show_dhcpv6_gss_tsig');
  }
  public set showDhcpv6GssTsig(value: boolean | cdktf.IResolvable) {
    this._showDhcpv6GssTsig = value;
  }
  public resetShowDhcpv6GssTsig() {
    this._showDhcpv6GssTsig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDhcpv6GssTsigInput() {
    return this._showDhcpv6GssTsig;
  }

  // show_log_txn_id - computed: true, optional: true, required: false
  private _showLogTxnId?: boolean | cdktf.IResolvable; 
  public get showLogTxnId() {
    return this.getBooleanAttribute('show_log_txn_id');
  }
  public set showLogTxnId(value: boolean | cdktf.IResolvable) {
    this._showLogTxnId = value;
  }
  public resetShowLogTxnId() {
    this._showLogTxnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLogTxnIdInput() {
    return this._showLogTxnId;
  }

  // show_overload_bootp - computed: true, optional: true, required: false
  private _showOverloadBootp?: boolean | cdktf.IResolvable; 
  public get showOverloadBootp() {
    return this.getBooleanAttribute('show_overload_bootp');
  }
  public set showOverloadBootp(value: boolean | cdktf.IResolvable) {
    this._showOverloadBootp = value;
  }
  public resetShowOverloadBootp() {
    this._showOverloadBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOverloadBootpInput() {
    return this._showOverloadBootp;
  }
}
export interface DataNiosSecurityAdminGroupResultDnsSetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_allow_query_domain DataNiosSecurityAdminGroup#set_allow_query_domain}
  */
  readonly setAllowQueryDomain?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_dns DataNiosSecurityAdminGroup#set_dns}
  */
  readonly setDns?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_dns_accel DataNiosSecurityAdminGroup#set_dns_accel}
  */
  readonly setDnsAccel?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_dns_accel_debug DataNiosSecurityAdminGroup#set_dns_accel_debug}
  */
  readonly setDnsAccelDebug?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_dns_auto_gen DataNiosSecurityAdminGroup#set_dns_auto_gen}
  */
  readonly setDnsAutoGen?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_dns_rrl DataNiosSecurityAdminGroup#set_dns_rrl}
  */
  readonly setDnsRrl?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_enable_dnstap DataNiosSecurityAdminGroup#set_enable_dnstap}
  */
  readonly setEnableDnstap?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_enable_match_recursive_only DataNiosSecurityAdminGroup#set_enable_match_recursive_only}
  */
  readonly setEnableMatchRecursiveOnly?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_extra_dns_name_validations DataNiosSecurityAdminGroup#set_extra_dns_name_validations}
  */
  readonly setExtraDnsNameValidations?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_log_guest_lookups DataNiosSecurityAdminGroup#set_log_guest_lookups}
  */
  readonly setLogGuestLookups?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_max_recursion_depth DataNiosSecurityAdminGroup#set_max_recursion_depth}
  */
  readonly setMaxRecursionDepth?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_max_recursion_queries DataNiosSecurityAdminGroup#set_max_recursion_queries}
  */
  readonly setMaxRecursionQueries?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_monitor DataNiosSecurityAdminGroup#set_monitor}
  */
  readonly setMonitor?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ms_dns_reports_sync_interval DataNiosSecurityAdminGroup#set_ms_dns_reports_sync_interval}
  */
  readonly setMsDnsReportsSyncInterval?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ms_sticky_ip DataNiosSecurityAdminGroup#set_ms_sticky_ip}
  */
  readonly setMsStickyIp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_restart_anycast_with_dns_restart DataNiosSecurityAdminGroup#set_restart_anycast_with_dns_restart}
  */
  readonly setRestartAnycastWithDnsRestart?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_rpz_add_soa DataNiosSecurityAdminGroup#set_rpz_add_soa}
  */
  readonly setRpzAddSoa?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultDnsSetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultDnsSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_allow_query_domain: cdktf.booleanToTerraform(struct!.setAllowQueryDomain),
    set_dns: cdktf.booleanToTerraform(struct!.setDns),
    set_dns_accel: cdktf.booleanToTerraform(struct!.setDnsAccel),
    set_dns_accel_debug: cdktf.booleanToTerraform(struct!.setDnsAccelDebug),
    set_dns_auto_gen: cdktf.booleanToTerraform(struct!.setDnsAutoGen),
    set_dns_rrl: cdktf.booleanToTerraform(struct!.setDnsRrl),
    set_enable_dnstap: cdktf.booleanToTerraform(struct!.setEnableDnstap),
    set_enable_match_recursive_only: cdktf.booleanToTerraform(struct!.setEnableMatchRecursiveOnly),
    set_extra_dns_name_validations: cdktf.booleanToTerraform(struct!.setExtraDnsNameValidations),
    set_log_guest_lookups: cdktf.booleanToTerraform(struct!.setLogGuestLookups),
    set_max_recursion_depth: cdktf.booleanToTerraform(struct!.setMaxRecursionDepth),
    set_max_recursion_queries: cdktf.booleanToTerraform(struct!.setMaxRecursionQueries),
    set_monitor: cdktf.booleanToTerraform(struct!.setMonitor),
    set_ms_dns_reports_sync_interval: cdktf.booleanToTerraform(struct!.setMsDnsReportsSyncInterval),
    set_ms_sticky_ip: cdktf.booleanToTerraform(struct!.setMsStickyIp),
    set_restart_anycast_with_dns_restart: cdktf.booleanToTerraform(struct!.setRestartAnycastWithDnsRestart),
    set_rpz_add_soa: cdktf.booleanToTerraform(struct!.setRpzAddSoa),
  }
}


export function dataNiosSecurityAdminGroupResultDnsSetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultDnsSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_allow_query_domain: {
      value: cdktf.booleanToHclTerraform(struct!.setAllowQueryDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_dns: {
      value: cdktf.booleanToHclTerraform(struct!.setDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_dns_accel: {
      value: cdktf.booleanToHclTerraform(struct!.setDnsAccel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_dns_accel_debug: {
      value: cdktf.booleanToHclTerraform(struct!.setDnsAccelDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_dns_auto_gen: {
      value: cdktf.booleanToHclTerraform(struct!.setDnsAutoGen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_dns_rrl: {
      value: cdktf.booleanToHclTerraform(struct!.setDnsRrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_enable_dnstap: {
      value: cdktf.booleanToHclTerraform(struct!.setEnableDnstap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_enable_match_recursive_only: {
      value: cdktf.booleanToHclTerraform(struct!.setEnableMatchRecursiveOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_extra_dns_name_validations: {
      value: cdktf.booleanToHclTerraform(struct!.setExtraDnsNameValidations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_log_guest_lookups: {
      value: cdktf.booleanToHclTerraform(struct!.setLogGuestLookups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_max_recursion_depth: {
      value: cdktf.booleanToHclTerraform(struct!.setMaxRecursionDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_max_recursion_queries: {
      value: cdktf.booleanToHclTerraform(struct!.setMaxRecursionQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.setMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ms_dns_reports_sync_interval: {
      value: cdktf.booleanToHclTerraform(struct!.setMsDnsReportsSyncInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ms_sticky_ip: {
      value: cdktf.booleanToHclTerraform(struct!.setMsStickyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_restart_anycast_with_dns_restart: {
      value: cdktf.booleanToHclTerraform(struct!.setRestartAnycastWithDnsRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_rpz_add_soa: {
      value: cdktf.booleanToHclTerraform(struct!.setRpzAddSoa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultDnsSetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultDnsSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setAllowQueryDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAllowQueryDomain = this._setAllowQueryDomain;
    }
    if (this._setDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDns = this._setDns;
    }
    if (this._setDnsAccel !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDnsAccel = this._setDnsAccel;
    }
    if (this._setDnsAccelDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDnsAccelDebug = this._setDnsAccelDebug;
    }
    if (this._setDnsAutoGen !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDnsAutoGen = this._setDnsAutoGen;
    }
    if (this._setDnsRrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDnsRrl = this._setDnsRrl;
    }
    if (this._setEnableDnstap !== undefined) {
      hasAnyValues = true;
      internalValueResult.setEnableDnstap = this._setEnableDnstap;
    }
    if (this._setEnableMatchRecursiveOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.setEnableMatchRecursiveOnly = this._setEnableMatchRecursiveOnly;
    }
    if (this._setExtraDnsNameValidations !== undefined) {
      hasAnyValues = true;
      internalValueResult.setExtraDnsNameValidations = this._setExtraDnsNameValidations;
    }
    if (this._setLogGuestLookups !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLogGuestLookups = this._setLogGuestLookups;
    }
    if (this._setMaxRecursionDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMaxRecursionDepth = this._setMaxRecursionDepth;
    }
    if (this._setMaxRecursionQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMaxRecursionQueries = this._setMaxRecursionQueries;
    }
    if (this._setMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMonitor = this._setMonitor;
    }
    if (this._setMsDnsReportsSyncInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMsDnsReportsSyncInterval = this._setMsDnsReportsSyncInterval;
    }
    if (this._setMsStickyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMsStickyIp = this._setMsStickyIp;
    }
    if (this._setRestartAnycastWithDnsRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRestartAnycastWithDnsRestart = this._setRestartAnycastWithDnsRestart;
    }
    if (this._setRpzAddSoa !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRpzAddSoa = this._setRpzAddSoa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultDnsSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setAllowQueryDomain = undefined;
      this._setDns = undefined;
      this._setDnsAccel = undefined;
      this._setDnsAccelDebug = undefined;
      this._setDnsAutoGen = undefined;
      this._setDnsRrl = undefined;
      this._setEnableDnstap = undefined;
      this._setEnableMatchRecursiveOnly = undefined;
      this._setExtraDnsNameValidations = undefined;
      this._setLogGuestLookups = undefined;
      this._setMaxRecursionDepth = undefined;
      this._setMaxRecursionQueries = undefined;
      this._setMonitor = undefined;
      this._setMsDnsReportsSyncInterval = undefined;
      this._setMsStickyIp = undefined;
      this._setRestartAnycastWithDnsRestart = undefined;
      this._setRpzAddSoa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setAllowQueryDomain = value.setAllowQueryDomain;
      this._setDns = value.setDns;
      this._setDnsAccel = value.setDnsAccel;
      this._setDnsAccelDebug = value.setDnsAccelDebug;
      this._setDnsAutoGen = value.setDnsAutoGen;
      this._setDnsRrl = value.setDnsRrl;
      this._setEnableDnstap = value.setEnableDnstap;
      this._setEnableMatchRecursiveOnly = value.setEnableMatchRecursiveOnly;
      this._setExtraDnsNameValidations = value.setExtraDnsNameValidations;
      this._setLogGuestLookups = value.setLogGuestLookups;
      this._setMaxRecursionDepth = value.setMaxRecursionDepth;
      this._setMaxRecursionQueries = value.setMaxRecursionQueries;
      this._setMonitor = value.setMonitor;
      this._setMsDnsReportsSyncInterval = value.setMsDnsReportsSyncInterval;
      this._setMsStickyIp = value.setMsStickyIp;
      this._setRestartAnycastWithDnsRestart = value.setRestartAnycastWithDnsRestart;
      this._setRpzAddSoa = value.setRpzAddSoa;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // set_allow_query_domain - computed: true, optional: true, required: false
  private _setAllowQueryDomain?: boolean | cdktf.IResolvable; 
  public get setAllowQueryDomain() {
    return this.getBooleanAttribute('set_allow_query_domain');
  }
  public set setAllowQueryDomain(value: boolean | cdktf.IResolvable) {
    this._setAllowQueryDomain = value;
  }
  public resetSetAllowQueryDomain() {
    this._setAllowQueryDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAllowQueryDomainInput() {
    return this._setAllowQueryDomain;
  }

  // set_dns - computed: true, optional: true, required: false
  private _setDns?: boolean | cdktf.IResolvable; 
  public get setDns() {
    return this.getBooleanAttribute('set_dns');
  }
  public set setDns(value: boolean | cdktf.IResolvable) {
    this._setDns = value;
  }
  public resetSetDns() {
    this._setDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDnsInput() {
    return this._setDns;
  }

  // set_dns_accel - computed: true, optional: true, required: false
  private _setDnsAccel?: boolean | cdktf.IResolvable; 
  public get setDnsAccel() {
    return this.getBooleanAttribute('set_dns_accel');
  }
  public set setDnsAccel(value: boolean | cdktf.IResolvable) {
    this._setDnsAccel = value;
  }
  public resetSetDnsAccel() {
    this._setDnsAccel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDnsAccelInput() {
    return this._setDnsAccel;
  }

  // set_dns_accel_debug - computed: true, optional: true, required: false
  private _setDnsAccelDebug?: boolean | cdktf.IResolvable; 
  public get setDnsAccelDebug() {
    return this.getBooleanAttribute('set_dns_accel_debug');
  }
  public set setDnsAccelDebug(value: boolean | cdktf.IResolvable) {
    this._setDnsAccelDebug = value;
  }
  public resetSetDnsAccelDebug() {
    this._setDnsAccelDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDnsAccelDebugInput() {
    return this._setDnsAccelDebug;
  }

  // set_dns_auto_gen - computed: true, optional: true, required: false
  private _setDnsAutoGen?: boolean | cdktf.IResolvable; 
  public get setDnsAutoGen() {
    return this.getBooleanAttribute('set_dns_auto_gen');
  }
  public set setDnsAutoGen(value: boolean | cdktf.IResolvable) {
    this._setDnsAutoGen = value;
  }
  public resetSetDnsAutoGen() {
    this._setDnsAutoGen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDnsAutoGenInput() {
    return this._setDnsAutoGen;
  }

  // set_dns_rrl - computed: true, optional: true, required: false
  private _setDnsRrl?: boolean | cdktf.IResolvable; 
  public get setDnsRrl() {
    return this.getBooleanAttribute('set_dns_rrl');
  }
  public set setDnsRrl(value: boolean | cdktf.IResolvable) {
    this._setDnsRrl = value;
  }
  public resetSetDnsRrl() {
    this._setDnsRrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDnsRrlInput() {
    return this._setDnsRrl;
  }

  // set_enable_dnstap - computed: true, optional: true, required: false
  private _setEnableDnstap?: boolean | cdktf.IResolvable; 
  public get setEnableDnstap() {
    return this.getBooleanAttribute('set_enable_dnstap');
  }
  public set setEnableDnstap(value: boolean | cdktf.IResolvable) {
    this._setEnableDnstap = value;
  }
  public resetSetEnableDnstap() {
    this._setEnableDnstap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setEnableDnstapInput() {
    return this._setEnableDnstap;
  }

  // set_enable_match_recursive_only - computed: true, optional: true, required: false
  private _setEnableMatchRecursiveOnly?: boolean | cdktf.IResolvable; 
  public get setEnableMatchRecursiveOnly() {
    return this.getBooleanAttribute('set_enable_match_recursive_only');
  }
  public set setEnableMatchRecursiveOnly(value: boolean | cdktf.IResolvable) {
    this._setEnableMatchRecursiveOnly = value;
  }
  public resetSetEnableMatchRecursiveOnly() {
    this._setEnableMatchRecursiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setEnableMatchRecursiveOnlyInput() {
    return this._setEnableMatchRecursiveOnly;
  }

  // set_extra_dns_name_validations - computed: true, optional: true, required: false
  private _setExtraDnsNameValidations?: boolean | cdktf.IResolvable; 
  public get setExtraDnsNameValidations() {
    return this.getBooleanAttribute('set_extra_dns_name_validations');
  }
  public set setExtraDnsNameValidations(value: boolean | cdktf.IResolvable) {
    this._setExtraDnsNameValidations = value;
  }
  public resetSetExtraDnsNameValidations() {
    this._setExtraDnsNameValidations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setExtraDnsNameValidationsInput() {
    return this._setExtraDnsNameValidations;
  }

  // set_log_guest_lookups - computed: true, optional: true, required: false
  private _setLogGuestLookups?: boolean | cdktf.IResolvable; 
  public get setLogGuestLookups() {
    return this.getBooleanAttribute('set_log_guest_lookups');
  }
  public set setLogGuestLookups(value: boolean | cdktf.IResolvable) {
    this._setLogGuestLookups = value;
  }
  public resetSetLogGuestLookups() {
    this._setLogGuestLookups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLogGuestLookupsInput() {
    return this._setLogGuestLookups;
  }

  // set_max_recursion_depth - computed: true, optional: true, required: false
  private _setMaxRecursionDepth?: boolean | cdktf.IResolvable; 
  public get setMaxRecursionDepth() {
    return this.getBooleanAttribute('set_max_recursion_depth');
  }
  public set setMaxRecursionDepth(value: boolean | cdktf.IResolvable) {
    this._setMaxRecursionDepth = value;
  }
  public resetSetMaxRecursionDepth() {
    this._setMaxRecursionDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMaxRecursionDepthInput() {
    return this._setMaxRecursionDepth;
  }

  // set_max_recursion_queries - computed: true, optional: true, required: false
  private _setMaxRecursionQueries?: boolean | cdktf.IResolvable; 
  public get setMaxRecursionQueries() {
    return this.getBooleanAttribute('set_max_recursion_queries');
  }
  public set setMaxRecursionQueries(value: boolean | cdktf.IResolvable) {
    this._setMaxRecursionQueries = value;
  }
  public resetSetMaxRecursionQueries() {
    this._setMaxRecursionQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMaxRecursionQueriesInput() {
    return this._setMaxRecursionQueries;
  }

  // set_monitor - computed: true, optional: true, required: false
  private _setMonitor?: boolean | cdktf.IResolvable; 
  public get setMonitor() {
    return this.getBooleanAttribute('set_monitor');
  }
  public set setMonitor(value: boolean | cdktf.IResolvable) {
    this._setMonitor = value;
  }
  public resetSetMonitor() {
    this._setMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMonitorInput() {
    return this._setMonitor;
  }

  // set_ms_dns_reports_sync_interval - computed: true, optional: true, required: false
  private _setMsDnsReportsSyncInterval?: boolean | cdktf.IResolvable; 
  public get setMsDnsReportsSyncInterval() {
    return this.getBooleanAttribute('set_ms_dns_reports_sync_interval');
  }
  public set setMsDnsReportsSyncInterval(value: boolean | cdktf.IResolvable) {
    this._setMsDnsReportsSyncInterval = value;
  }
  public resetSetMsDnsReportsSyncInterval() {
    this._setMsDnsReportsSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMsDnsReportsSyncIntervalInput() {
    return this._setMsDnsReportsSyncInterval;
  }

  // set_ms_sticky_ip - computed: true, optional: true, required: false
  private _setMsStickyIp?: boolean | cdktf.IResolvable; 
  public get setMsStickyIp() {
    return this.getBooleanAttribute('set_ms_sticky_ip');
  }
  public set setMsStickyIp(value: boolean | cdktf.IResolvable) {
    this._setMsStickyIp = value;
  }
  public resetSetMsStickyIp() {
    this._setMsStickyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMsStickyIpInput() {
    return this._setMsStickyIp;
  }

  // set_restart_anycast_with_dns_restart - computed: true, optional: true, required: false
  private _setRestartAnycastWithDnsRestart?: boolean | cdktf.IResolvable; 
  public get setRestartAnycastWithDnsRestart() {
    return this.getBooleanAttribute('set_restart_anycast_with_dns_restart');
  }
  public set setRestartAnycastWithDnsRestart(value: boolean | cdktf.IResolvable) {
    this._setRestartAnycastWithDnsRestart = value;
  }
  public resetSetRestartAnycastWithDnsRestart() {
    this._setRestartAnycastWithDnsRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRestartAnycastWithDnsRestartInput() {
    return this._setRestartAnycastWithDnsRestart;
  }

  // set_rpz_add_soa - computed: true, optional: true, required: false
  private _setRpzAddSoa?: boolean | cdktf.IResolvable; 
  public get setRpzAddSoa() {
    return this.getBooleanAttribute('set_rpz_add_soa');
  }
  public set setRpzAddSoa(value: boolean | cdktf.IResolvable) {
    this._setRpzAddSoa = value;
  }
  public resetSetRpzAddSoa() {
    this._setRpzAddSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRpzAddSoaInput() {
    return this._setRpzAddSoa;
  }
}
export interface DataNiosSecurityAdminGroupResultDnsShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_allow_query_domain DataNiosSecurityAdminGroup#show_allow_query_domain}
  */
  readonly showAllowQueryDomain?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_allow_query_domain_views DataNiosSecurityAdminGroup#show_allow_query_domain_views}
  */
  readonly showAllowQueryDomainViews?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dns DataNiosSecurityAdminGroup#show_dns}
  */
  readonly showDns?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dns_accel DataNiosSecurityAdminGroup#show_dns_accel}
  */
  readonly showDnsAccel?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dns_accel_debug DataNiosSecurityAdminGroup#show_dns_accel_debug}
  */
  readonly showDnsAccelDebug?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dns_gss_tsig DataNiosSecurityAdminGroup#show_dns_gss_tsig}
  */
  readonly showDnsGssTsig?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dns_over_tls_config DataNiosSecurityAdminGroup#show_dns_over_tls_config}
  */
  readonly showDnsOverTlsConfig?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dns_over_tls_stats DataNiosSecurityAdminGroup#show_dns_over_tls_stats}
  */
  readonly showDnsOverTlsStats?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dns_over_tls_status DataNiosSecurityAdminGroup#show_dns_over_tls_status}
  */
  readonly showDnsOverTlsStatus?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dns_rrl DataNiosSecurityAdminGroup#show_dns_rrl}
  */
  readonly showDnsRrl?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dnstap_stats DataNiosSecurityAdminGroup#show_dnstap_stats}
  */
  readonly showDnstapStats?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dnstap_status DataNiosSecurityAdminGroup#show_dnstap_status}
  */
  readonly showDnstapStatus?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_doh_config DataNiosSecurityAdminGroup#show_doh_config}
  */
  readonly showDohConfig?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_doh_stats DataNiosSecurityAdminGroup#show_doh_stats}
  */
  readonly showDohStats?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_doh_status DataNiosSecurityAdminGroup#show_doh_status}
  */
  readonly showDohStatus?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dtc_ea DataNiosSecurityAdminGroup#show_dtc_ea}
  */
  readonly showDtcEa?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dtc_geoip DataNiosSecurityAdminGroup#show_dtc_geoip}
  */
  readonly showDtcGeoip?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_enable_match_recursive_only DataNiosSecurityAdminGroup#show_enable_match_recursive_only}
  */
  readonly showEnableMatchRecursiveOnly?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_extra_dns_name_validations DataNiosSecurityAdminGroup#show_extra_dns_name_validations}
  */
  readonly showExtraDnsNameValidations?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_log_guest_lookups DataNiosSecurityAdminGroup#show_log_guest_lookups}
  */
  readonly showLogGuestLookups?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_max_recursion_depth DataNiosSecurityAdminGroup#show_max_recursion_depth}
  */
  readonly showMaxRecursionDepth?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_max_recursion_queries DataNiosSecurityAdminGroup#show_max_recursion_queries}
  */
  readonly showMaxRecursionQueries?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_monitor DataNiosSecurityAdminGroup#show_monitor}
  */
  readonly showMonitor?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ms_sticky_ip DataNiosSecurityAdminGroup#show_ms_sticky_ip}
  */
  readonly showMsStickyIp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_query_capture DataNiosSecurityAdminGroup#show_query_capture}
  */
  readonly showQueryCapture?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_restart_anycast_with_dns_restart DataNiosSecurityAdminGroup#show_restart_anycast_with_dns_restart}
  */
  readonly showRestartAnycastWithDnsRestart?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_rpz_add_soa DataNiosSecurityAdminGroup#show_rpz_add_soa}
  */
  readonly showRpzAddSoa?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultDnsShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultDnsShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_allow_query_domain: cdktf.booleanToTerraform(struct!.showAllowQueryDomain),
    show_allow_query_domain_views: cdktf.booleanToTerraform(struct!.showAllowQueryDomainViews),
    show_dns: cdktf.booleanToTerraform(struct!.showDns),
    show_dns_accel: cdktf.booleanToTerraform(struct!.showDnsAccel),
    show_dns_accel_debug: cdktf.booleanToTerraform(struct!.showDnsAccelDebug),
    show_dns_gss_tsig: cdktf.booleanToTerraform(struct!.showDnsGssTsig),
    show_dns_over_tls_config: cdktf.booleanToTerraform(struct!.showDnsOverTlsConfig),
    show_dns_over_tls_stats: cdktf.booleanToTerraform(struct!.showDnsOverTlsStats),
    show_dns_over_tls_status: cdktf.booleanToTerraform(struct!.showDnsOverTlsStatus),
    show_dns_rrl: cdktf.booleanToTerraform(struct!.showDnsRrl),
    show_dnstap_stats: cdktf.booleanToTerraform(struct!.showDnstapStats),
    show_dnstap_status: cdktf.booleanToTerraform(struct!.showDnstapStatus),
    show_doh_config: cdktf.booleanToTerraform(struct!.showDohConfig),
    show_doh_stats: cdktf.booleanToTerraform(struct!.showDohStats),
    show_doh_status: cdktf.booleanToTerraform(struct!.showDohStatus),
    show_dtc_ea: cdktf.booleanToTerraform(struct!.showDtcEa),
    show_dtc_geoip: cdktf.booleanToTerraform(struct!.showDtcGeoip),
    show_enable_match_recursive_only: cdktf.booleanToTerraform(struct!.showEnableMatchRecursiveOnly),
    show_extra_dns_name_validations: cdktf.booleanToTerraform(struct!.showExtraDnsNameValidations),
    show_log_guest_lookups: cdktf.booleanToTerraform(struct!.showLogGuestLookups),
    show_max_recursion_depth: cdktf.booleanToTerraform(struct!.showMaxRecursionDepth),
    show_max_recursion_queries: cdktf.booleanToTerraform(struct!.showMaxRecursionQueries),
    show_monitor: cdktf.booleanToTerraform(struct!.showMonitor),
    show_ms_sticky_ip: cdktf.booleanToTerraform(struct!.showMsStickyIp),
    show_query_capture: cdktf.booleanToTerraform(struct!.showQueryCapture),
    show_restart_anycast_with_dns_restart: cdktf.booleanToTerraform(struct!.showRestartAnycastWithDnsRestart),
    show_rpz_add_soa: cdktf.booleanToTerraform(struct!.showRpzAddSoa),
  }
}


export function dataNiosSecurityAdminGroupResultDnsShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultDnsShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_allow_query_domain: {
      value: cdktf.booleanToHclTerraform(struct!.showAllowQueryDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_allow_query_domain_views: {
      value: cdktf.booleanToHclTerraform(struct!.showAllowQueryDomainViews),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dns: {
      value: cdktf.booleanToHclTerraform(struct!.showDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dns_accel: {
      value: cdktf.booleanToHclTerraform(struct!.showDnsAccel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dns_accel_debug: {
      value: cdktf.booleanToHclTerraform(struct!.showDnsAccelDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dns_gss_tsig: {
      value: cdktf.booleanToHclTerraform(struct!.showDnsGssTsig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dns_over_tls_config: {
      value: cdktf.booleanToHclTerraform(struct!.showDnsOverTlsConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dns_over_tls_stats: {
      value: cdktf.booleanToHclTerraform(struct!.showDnsOverTlsStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dns_over_tls_status: {
      value: cdktf.booleanToHclTerraform(struct!.showDnsOverTlsStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dns_rrl: {
      value: cdktf.booleanToHclTerraform(struct!.showDnsRrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dnstap_stats: {
      value: cdktf.booleanToHclTerraform(struct!.showDnstapStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dnstap_status: {
      value: cdktf.booleanToHclTerraform(struct!.showDnstapStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_doh_config: {
      value: cdktf.booleanToHclTerraform(struct!.showDohConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_doh_stats: {
      value: cdktf.booleanToHclTerraform(struct!.showDohStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_doh_status: {
      value: cdktf.booleanToHclTerraform(struct!.showDohStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dtc_ea: {
      value: cdktf.booleanToHclTerraform(struct!.showDtcEa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_dtc_geoip: {
      value: cdktf.booleanToHclTerraform(struct!.showDtcGeoip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_enable_match_recursive_only: {
      value: cdktf.booleanToHclTerraform(struct!.showEnableMatchRecursiveOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_extra_dns_name_validations: {
      value: cdktf.booleanToHclTerraform(struct!.showExtraDnsNameValidations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_log_guest_lookups: {
      value: cdktf.booleanToHclTerraform(struct!.showLogGuestLookups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_max_recursion_depth: {
      value: cdktf.booleanToHclTerraform(struct!.showMaxRecursionDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_max_recursion_queries: {
      value: cdktf.booleanToHclTerraform(struct!.showMaxRecursionQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.showMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ms_sticky_ip: {
      value: cdktf.booleanToHclTerraform(struct!.showMsStickyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_query_capture: {
      value: cdktf.booleanToHclTerraform(struct!.showQueryCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_restart_anycast_with_dns_restart: {
      value: cdktf.booleanToHclTerraform(struct!.showRestartAnycastWithDnsRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_rpz_add_soa: {
      value: cdktf.booleanToHclTerraform(struct!.showRpzAddSoa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultDnsShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultDnsShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showAllowQueryDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAllowQueryDomain = this._showAllowQueryDomain;
    }
    if (this._showAllowQueryDomainViews !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAllowQueryDomainViews = this._showAllowQueryDomainViews;
    }
    if (this._showDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDns = this._showDns;
    }
    if (this._showDnsAccel !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDnsAccel = this._showDnsAccel;
    }
    if (this._showDnsAccelDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDnsAccelDebug = this._showDnsAccelDebug;
    }
    if (this._showDnsGssTsig !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDnsGssTsig = this._showDnsGssTsig;
    }
    if (this._showDnsOverTlsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDnsOverTlsConfig = this._showDnsOverTlsConfig;
    }
    if (this._showDnsOverTlsStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDnsOverTlsStats = this._showDnsOverTlsStats;
    }
    if (this._showDnsOverTlsStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDnsOverTlsStatus = this._showDnsOverTlsStatus;
    }
    if (this._showDnsRrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDnsRrl = this._showDnsRrl;
    }
    if (this._showDnstapStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDnstapStats = this._showDnstapStats;
    }
    if (this._showDnstapStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDnstapStatus = this._showDnstapStatus;
    }
    if (this._showDohConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDohConfig = this._showDohConfig;
    }
    if (this._showDohStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDohStats = this._showDohStats;
    }
    if (this._showDohStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDohStatus = this._showDohStatus;
    }
    if (this._showDtcEa !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDtcEa = this._showDtcEa;
    }
    if (this._showDtcGeoip !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDtcGeoip = this._showDtcGeoip;
    }
    if (this._showEnableMatchRecursiveOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.showEnableMatchRecursiveOnly = this._showEnableMatchRecursiveOnly;
    }
    if (this._showExtraDnsNameValidations !== undefined) {
      hasAnyValues = true;
      internalValueResult.showExtraDnsNameValidations = this._showExtraDnsNameValidations;
    }
    if (this._showLogGuestLookups !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLogGuestLookups = this._showLogGuestLookups;
    }
    if (this._showMaxRecursionDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMaxRecursionDepth = this._showMaxRecursionDepth;
    }
    if (this._showMaxRecursionQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMaxRecursionQueries = this._showMaxRecursionQueries;
    }
    if (this._showMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMonitor = this._showMonitor;
    }
    if (this._showMsStickyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMsStickyIp = this._showMsStickyIp;
    }
    if (this._showQueryCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.showQueryCapture = this._showQueryCapture;
    }
    if (this._showRestartAnycastWithDnsRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.showRestartAnycastWithDnsRestart = this._showRestartAnycastWithDnsRestart;
    }
    if (this._showRpzAddSoa !== undefined) {
      hasAnyValues = true;
      internalValueResult.showRpzAddSoa = this._showRpzAddSoa;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultDnsShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showAllowQueryDomain = undefined;
      this._showAllowQueryDomainViews = undefined;
      this._showDns = undefined;
      this._showDnsAccel = undefined;
      this._showDnsAccelDebug = undefined;
      this._showDnsGssTsig = undefined;
      this._showDnsOverTlsConfig = undefined;
      this._showDnsOverTlsStats = undefined;
      this._showDnsOverTlsStatus = undefined;
      this._showDnsRrl = undefined;
      this._showDnstapStats = undefined;
      this._showDnstapStatus = undefined;
      this._showDohConfig = undefined;
      this._showDohStats = undefined;
      this._showDohStatus = undefined;
      this._showDtcEa = undefined;
      this._showDtcGeoip = undefined;
      this._showEnableMatchRecursiveOnly = undefined;
      this._showExtraDnsNameValidations = undefined;
      this._showLogGuestLookups = undefined;
      this._showMaxRecursionDepth = undefined;
      this._showMaxRecursionQueries = undefined;
      this._showMonitor = undefined;
      this._showMsStickyIp = undefined;
      this._showQueryCapture = undefined;
      this._showRestartAnycastWithDnsRestart = undefined;
      this._showRpzAddSoa = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showAllowQueryDomain = value.showAllowQueryDomain;
      this._showAllowQueryDomainViews = value.showAllowQueryDomainViews;
      this._showDns = value.showDns;
      this._showDnsAccel = value.showDnsAccel;
      this._showDnsAccelDebug = value.showDnsAccelDebug;
      this._showDnsGssTsig = value.showDnsGssTsig;
      this._showDnsOverTlsConfig = value.showDnsOverTlsConfig;
      this._showDnsOverTlsStats = value.showDnsOverTlsStats;
      this._showDnsOverTlsStatus = value.showDnsOverTlsStatus;
      this._showDnsRrl = value.showDnsRrl;
      this._showDnstapStats = value.showDnstapStats;
      this._showDnstapStatus = value.showDnstapStatus;
      this._showDohConfig = value.showDohConfig;
      this._showDohStats = value.showDohStats;
      this._showDohStatus = value.showDohStatus;
      this._showDtcEa = value.showDtcEa;
      this._showDtcGeoip = value.showDtcGeoip;
      this._showEnableMatchRecursiveOnly = value.showEnableMatchRecursiveOnly;
      this._showExtraDnsNameValidations = value.showExtraDnsNameValidations;
      this._showLogGuestLookups = value.showLogGuestLookups;
      this._showMaxRecursionDepth = value.showMaxRecursionDepth;
      this._showMaxRecursionQueries = value.showMaxRecursionQueries;
      this._showMonitor = value.showMonitor;
      this._showMsStickyIp = value.showMsStickyIp;
      this._showQueryCapture = value.showQueryCapture;
      this._showRestartAnycastWithDnsRestart = value.showRestartAnycastWithDnsRestart;
      this._showRpzAddSoa = value.showRpzAddSoa;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_allow_query_domain - computed: true, optional: true, required: false
  private _showAllowQueryDomain?: boolean | cdktf.IResolvable; 
  public get showAllowQueryDomain() {
    return this.getBooleanAttribute('show_allow_query_domain');
  }
  public set showAllowQueryDomain(value: boolean | cdktf.IResolvable) {
    this._showAllowQueryDomain = value;
  }
  public resetShowAllowQueryDomain() {
    this._showAllowQueryDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAllowQueryDomainInput() {
    return this._showAllowQueryDomain;
  }

  // show_allow_query_domain_views - computed: true, optional: true, required: false
  private _showAllowQueryDomainViews?: boolean | cdktf.IResolvable; 
  public get showAllowQueryDomainViews() {
    return this.getBooleanAttribute('show_allow_query_domain_views');
  }
  public set showAllowQueryDomainViews(value: boolean | cdktf.IResolvable) {
    this._showAllowQueryDomainViews = value;
  }
  public resetShowAllowQueryDomainViews() {
    this._showAllowQueryDomainViews = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAllowQueryDomainViewsInput() {
    return this._showAllowQueryDomainViews;
  }

  // show_dns - computed: true, optional: true, required: false
  private _showDns?: boolean | cdktf.IResolvable; 
  public get showDns() {
    return this.getBooleanAttribute('show_dns');
  }
  public set showDns(value: boolean | cdktf.IResolvable) {
    this._showDns = value;
  }
  public resetShowDns() {
    this._showDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnsInput() {
    return this._showDns;
  }

  // show_dns_accel - computed: true, optional: true, required: false
  private _showDnsAccel?: boolean | cdktf.IResolvable; 
  public get showDnsAccel() {
    return this.getBooleanAttribute('show_dns_accel');
  }
  public set showDnsAccel(value: boolean | cdktf.IResolvable) {
    this._showDnsAccel = value;
  }
  public resetShowDnsAccel() {
    this._showDnsAccel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnsAccelInput() {
    return this._showDnsAccel;
  }

  // show_dns_accel_debug - computed: true, optional: true, required: false
  private _showDnsAccelDebug?: boolean | cdktf.IResolvable; 
  public get showDnsAccelDebug() {
    return this.getBooleanAttribute('show_dns_accel_debug');
  }
  public set showDnsAccelDebug(value: boolean | cdktf.IResolvable) {
    this._showDnsAccelDebug = value;
  }
  public resetShowDnsAccelDebug() {
    this._showDnsAccelDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnsAccelDebugInput() {
    return this._showDnsAccelDebug;
  }

  // show_dns_gss_tsig - computed: true, optional: true, required: false
  private _showDnsGssTsig?: boolean | cdktf.IResolvable; 
  public get showDnsGssTsig() {
    return this.getBooleanAttribute('show_dns_gss_tsig');
  }
  public set showDnsGssTsig(value: boolean | cdktf.IResolvable) {
    this._showDnsGssTsig = value;
  }
  public resetShowDnsGssTsig() {
    this._showDnsGssTsig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnsGssTsigInput() {
    return this._showDnsGssTsig;
  }

  // show_dns_over_tls_config - computed: true, optional: true, required: false
  private _showDnsOverTlsConfig?: boolean | cdktf.IResolvable; 
  public get showDnsOverTlsConfig() {
    return this.getBooleanAttribute('show_dns_over_tls_config');
  }
  public set showDnsOverTlsConfig(value: boolean | cdktf.IResolvable) {
    this._showDnsOverTlsConfig = value;
  }
  public resetShowDnsOverTlsConfig() {
    this._showDnsOverTlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnsOverTlsConfigInput() {
    return this._showDnsOverTlsConfig;
  }

  // show_dns_over_tls_stats - computed: true, optional: true, required: false
  private _showDnsOverTlsStats?: boolean | cdktf.IResolvable; 
  public get showDnsOverTlsStats() {
    return this.getBooleanAttribute('show_dns_over_tls_stats');
  }
  public set showDnsOverTlsStats(value: boolean | cdktf.IResolvable) {
    this._showDnsOverTlsStats = value;
  }
  public resetShowDnsOverTlsStats() {
    this._showDnsOverTlsStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnsOverTlsStatsInput() {
    return this._showDnsOverTlsStats;
  }

  // show_dns_over_tls_status - computed: true, optional: true, required: false
  private _showDnsOverTlsStatus?: boolean | cdktf.IResolvable; 
  public get showDnsOverTlsStatus() {
    return this.getBooleanAttribute('show_dns_over_tls_status');
  }
  public set showDnsOverTlsStatus(value: boolean | cdktf.IResolvable) {
    this._showDnsOverTlsStatus = value;
  }
  public resetShowDnsOverTlsStatus() {
    this._showDnsOverTlsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnsOverTlsStatusInput() {
    return this._showDnsOverTlsStatus;
  }

  // show_dns_rrl - computed: true, optional: true, required: false
  private _showDnsRrl?: boolean | cdktf.IResolvable; 
  public get showDnsRrl() {
    return this.getBooleanAttribute('show_dns_rrl');
  }
  public set showDnsRrl(value: boolean | cdktf.IResolvable) {
    this._showDnsRrl = value;
  }
  public resetShowDnsRrl() {
    this._showDnsRrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnsRrlInput() {
    return this._showDnsRrl;
  }

  // show_dnstap_stats - computed: true, optional: true, required: false
  private _showDnstapStats?: boolean | cdktf.IResolvable; 
  public get showDnstapStats() {
    return this.getBooleanAttribute('show_dnstap_stats');
  }
  public set showDnstapStats(value: boolean | cdktf.IResolvable) {
    this._showDnstapStats = value;
  }
  public resetShowDnstapStats() {
    this._showDnstapStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnstapStatsInput() {
    return this._showDnstapStats;
  }

  // show_dnstap_status - computed: true, optional: true, required: false
  private _showDnstapStatus?: boolean | cdktf.IResolvable; 
  public get showDnstapStatus() {
    return this.getBooleanAttribute('show_dnstap_status');
  }
  public set showDnstapStatus(value: boolean | cdktf.IResolvable) {
    this._showDnstapStatus = value;
  }
  public resetShowDnstapStatus() {
    this._showDnstapStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDnstapStatusInput() {
    return this._showDnstapStatus;
  }

  // show_doh_config - computed: true, optional: true, required: false
  private _showDohConfig?: boolean | cdktf.IResolvable; 
  public get showDohConfig() {
    return this.getBooleanAttribute('show_doh_config');
  }
  public set showDohConfig(value: boolean | cdktf.IResolvable) {
    this._showDohConfig = value;
  }
  public resetShowDohConfig() {
    this._showDohConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDohConfigInput() {
    return this._showDohConfig;
  }

  // show_doh_stats - computed: true, optional: true, required: false
  private _showDohStats?: boolean | cdktf.IResolvable; 
  public get showDohStats() {
    return this.getBooleanAttribute('show_doh_stats');
  }
  public set showDohStats(value: boolean | cdktf.IResolvable) {
    this._showDohStats = value;
  }
  public resetShowDohStats() {
    this._showDohStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDohStatsInput() {
    return this._showDohStats;
  }

  // show_doh_status - computed: true, optional: true, required: false
  private _showDohStatus?: boolean | cdktf.IResolvable; 
  public get showDohStatus() {
    return this.getBooleanAttribute('show_doh_status');
  }
  public set showDohStatus(value: boolean | cdktf.IResolvable) {
    this._showDohStatus = value;
  }
  public resetShowDohStatus() {
    this._showDohStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDohStatusInput() {
    return this._showDohStatus;
  }

  // show_dtc_ea - computed: true, optional: true, required: false
  private _showDtcEa?: boolean | cdktf.IResolvable; 
  public get showDtcEa() {
    return this.getBooleanAttribute('show_dtc_ea');
  }
  public set showDtcEa(value: boolean | cdktf.IResolvable) {
    this._showDtcEa = value;
  }
  public resetShowDtcEa() {
    this._showDtcEa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDtcEaInput() {
    return this._showDtcEa;
  }

  // show_dtc_geoip - computed: true, optional: true, required: false
  private _showDtcGeoip?: boolean | cdktf.IResolvable; 
  public get showDtcGeoip() {
    return this.getBooleanAttribute('show_dtc_geoip');
  }
  public set showDtcGeoip(value: boolean | cdktf.IResolvable) {
    this._showDtcGeoip = value;
  }
  public resetShowDtcGeoip() {
    this._showDtcGeoip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDtcGeoipInput() {
    return this._showDtcGeoip;
  }

  // show_enable_match_recursive_only - computed: true, optional: true, required: false
  private _showEnableMatchRecursiveOnly?: boolean | cdktf.IResolvable; 
  public get showEnableMatchRecursiveOnly() {
    return this.getBooleanAttribute('show_enable_match_recursive_only');
  }
  public set showEnableMatchRecursiveOnly(value: boolean | cdktf.IResolvable) {
    this._showEnableMatchRecursiveOnly = value;
  }
  public resetShowEnableMatchRecursiveOnly() {
    this._showEnableMatchRecursiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showEnableMatchRecursiveOnlyInput() {
    return this._showEnableMatchRecursiveOnly;
  }

  // show_extra_dns_name_validations - computed: true, optional: true, required: false
  private _showExtraDnsNameValidations?: boolean | cdktf.IResolvable; 
  public get showExtraDnsNameValidations() {
    return this.getBooleanAttribute('show_extra_dns_name_validations');
  }
  public set showExtraDnsNameValidations(value: boolean | cdktf.IResolvable) {
    this._showExtraDnsNameValidations = value;
  }
  public resetShowExtraDnsNameValidations() {
    this._showExtraDnsNameValidations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showExtraDnsNameValidationsInput() {
    return this._showExtraDnsNameValidations;
  }

  // show_log_guest_lookups - computed: true, optional: true, required: false
  private _showLogGuestLookups?: boolean | cdktf.IResolvable; 
  public get showLogGuestLookups() {
    return this.getBooleanAttribute('show_log_guest_lookups');
  }
  public set showLogGuestLookups(value: boolean | cdktf.IResolvable) {
    this._showLogGuestLookups = value;
  }
  public resetShowLogGuestLookups() {
    this._showLogGuestLookups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLogGuestLookupsInput() {
    return this._showLogGuestLookups;
  }

  // show_max_recursion_depth - computed: true, optional: true, required: false
  private _showMaxRecursionDepth?: boolean | cdktf.IResolvable; 
  public get showMaxRecursionDepth() {
    return this.getBooleanAttribute('show_max_recursion_depth');
  }
  public set showMaxRecursionDepth(value: boolean | cdktf.IResolvable) {
    this._showMaxRecursionDepth = value;
  }
  public resetShowMaxRecursionDepth() {
    this._showMaxRecursionDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMaxRecursionDepthInput() {
    return this._showMaxRecursionDepth;
  }

  // show_max_recursion_queries - computed: true, optional: true, required: false
  private _showMaxRecursionQueries?: boolean | cdktf.IResolvable; 
  public get showMaxRecursionQueries() {
    return this.getBooleanAttribute('show_max_recursion_queries');
  }
  public set showMaxRecursionQueries(value: boolean | cdktf.IResolvable) {
    this._showMaxRecursionQueries = value;
  }
  public resetShowMaxRecursionQueries() {
    this._showMaxRecursionQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMaxRecursionQueriesInput() {
    return this._showMaxRecursionQueries;
  }

  // show_monitor - computed: true, optional: true, required: false
  private _showMonitor?: boolean | cdktf.IResolvable; 
  public get showMonitor() {
    return this.getBooleanAttribute('show_monitor');
  }
  public set showMonitor(value: boolean | cdktf.IResolvable) {
    this._showMonitor = value;
  }
  public resetShowMonitor() {
    this._showMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMonitorInput() {
    return this._showMonitor;
  }

  // show_ms_sticky_ip - computed: true, optional: true, required: false
  private _showMsStickyIp?: boolean | cdktf.IResolvable; 
  public get showMsStickyIp() {
    return this.getBooleanAttribute('show_ms_sticky_ip');
  }
  public set showMsStickyIp(value: boolean | cdktf.IResolvable) {
    this._showMsStickyIp = value;
  }
  public resetShowMsStickyIp() {
    this._showMsStickyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMsStickyIpInput() {
    return this._showMsStickyIp;
  }

  // show_query_capture - computed: true, optional: true, required: false
  private _showQueryCapture?: boolean | cdktf.IResolvable; 
  public get showQueryCapture() {
    return this.getBooleanAttribute('show_query_capture');
  }
  public set showQueryCapture(value: boolean | cdktf.IResolvable) {
    this._showQueryCapture = value;
  }
  public resetShowQueryCapture() {
    this._showQueryCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showQueryCaptureInput() {
    return this._showQueryCapture;
  }

  // show_restart_anycast_with_dns_restart - computed: true, optional: true, required: false
  private _showRestartAnycastWithDnsRestart?: boolean | cdktf.IResolvable; 
  public get showRestartAnycastWithDnsRestart() {
    return this.getBooleanAttribute('show_restart_anycast_with_dns_restart');
  }
  public set showRestartAnycastWithDnsRestart(value: boolean | cdktf.IResolvable) {
    this._showRestartAnycastWithDnsRestart = value;
  }
  public resetShowRestartAnycastWithDnsRestart() {
    this._showRestartAnycastWithDnsRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRestartAnycastWithDnsRestartInput() {
    return this._showRestartAnycastWithDnsRestart;
  }

  // show_rpz_add_soa - computed: true, optional: true, required: false
  private _showRpzAddSoa?: boolean | cdktf.IResolvable; 
  public get showRpzAddSoa() {
    return this.getBooleanAttribute('show_rpz_add_soa');
  }
  public set showRpzAddSoa(value: boolean | cdktf.IResolvable) {
    this._showRpzAddSoa = value;
  }
  public resetShowRpzAddSoa() {
    this._showRpzAddSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRpzAddSoaInput() {
    return this._showRpzAddSoa;
  }
}
export interface DataNiosSecurityAdminGroupResultDnsToplevelCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#ddns_add DataNiosSecurityAdminGroup#ddns_add}
  */
  readonly ddnsAdd?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#ddns_delete DataNiosSecurityAdminGroup#ddns_delete}
  */
  readonly ddnsDelete?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#delete DataNiosSecurityAdminGroup#delete}
  */
  readonly delete?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#dns_a_record_delete DataNiosSecurityAdminGroup#dns_a_record_delete}
  */
  readonly dnsARecordDelete?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultDnsToplevelCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultDnsToplevelCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddns_add: cdktf.booleanToTerraform(struct!.ddnsAdd),
    ddns_delete: cdktf.booleanToTerraform(struct!.ddnsDelete),
    delete: cdktf.booleanToTerraform(struct!.delete),
    dns_a_record_delete: cdktf.booleanToTerraform(struct!.dnsARecordDelete),
  }
}


export function dataNiosSecurityAdminGroupResultDnsToplevelCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultDnsToplevelCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddns_add: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsAdd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_delete: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete: {
      value: cdktf.booleanToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_a_record_delete: {
      value: cdktf.booleanToHclTerraform(struct!.dnsARecordDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultDnsToplevelCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultDnsToplevelCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddnsAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsAdd = this._ddnsAdd;
    }
    if (this._ddnsDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsDelete = this._ddnsDelete;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._dnsARecordDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsARecordDelete = this._dnsARecordDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultDnsToplevelCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ddnsAdd = undefined;
      this._ddnsDelete = undefined;
      this._delete = undefined;
      this._dnsARecordDelete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ddnsAdd = value.ddnsAdd;
      this._ddnsDelete = value.ddnsDelete;
      this._delete = value.delete;
      this._dnsARecordDelete = value.dnsARecordDelete;
    }
  }

  // ddns_add - computed: true, optional: true, required: false
  private _ddnsAdd?: boolean | cdktf.IResolvable; 
  public get ddnsAdd() {
    return this.getBooleanAttribute('ddns_add');
  }
  public set ddnsAdd(value: boolean | cdktf.IResolvable) {
    this._ddnsAdd = value;
  }
  public resetDdnsAdd() {
    this._ddnsAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsAddInput() {
    return this._ddnsAdd;
  }

  // ddns_delete - computed: true, optional: true, required: false
  private _ddnsDelete?: boolean | cdktf.IResolvable; 
  public get ddnsDelete() {
    return this.getBooleanAttribute('ddns_delete');
  }
  public set ddnsDelete(value: boolean | cdktf.IResolvable) {
    this._ddnsDelete = value;
  }
  public resetDdnsDelete() {
    this._ddnsDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDeleteInput() {
    return this._ddnsDelete;
  }

  // delete - computed: true, optional: true, required: false
  private _delete?: boolean | cdktf.IResolvable; 
  public get delete() {
    return this.getBooleanAttribute('delete');
  }
  public set delete(value: boolean | cdktf.IResolvable) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // dns_a_record_delete - computed: true, optional: true, required: false
  private _dnsARecordDelete?: boolean | cdktf.IResolvable; 
  public get dnsARecordDelete() {
    return this.getBooleanAttribute('dns_a_record_delete');
  }
  public set dnsARecordDelete(value: boolean | cdktf.IResolvable) {
    this._dnsARecordDelete = value;
  }
  public resetDnsARecordDelete() {
    this._dnsARecordDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsARecordDeleteInput() {
    return this._dnsARecordDelete;
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }
}
export interface DataNiosSecurityAdminGroupResultDockerSetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_docker_bridge DataNiosSecurityAdminGroup#set_docker_bridge}
  */
  readonly setDockerBridge?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultDockerSetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultDockerSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_docker_bridge: cdktf.booleanToTerraform(struct!.setDockerBridge),
  }
}


export function dataNiosSecurityAdminGroupResultDockerSetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultDockerSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_docker_bridge: {
      value: cdktf.booleanToHclTerraform(struct!.setDockerBridge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultDockerSetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultDockerSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setDockerBridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDockerBridge = this._setDockerBridge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultDockerSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setDockerBridge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setDockerBridge = value.setDockerBridge;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // set_docker_bridge - computed: true, optional: true, required: false
  private _setDockerBridge?: boolean | cdktf.IResolvable; 
  public get setDockerBridge() {
    return this.getBooleanAttribute('set_docker_bridge');
  }
  public set setDockerBridge(value: boolean | cdktf.IResolvable) {
    this._setDockerBridge = value;
  }
  public resetSetDockerBridge() {
    this._setDockerBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDockerBridgeInput() {
    return this._setDockerBridge;
  }
}
export interface DataNiosSecurityAdminGroupResultDockerShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_docker_bridge DataNiosSecurityAdminGroup#show_docker_bridge}
  */
  readonly showDockerBridge?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultDockerShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultDockerShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_docker_bridge: cdktf.booleanToTerraform(struct!.showDockerBridge),
  }
}


export function dataNiosSecurityAdminGroupResultDockerShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultDockerShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_docker_bridge: {
      value: cdktf.booleanToHclTerraform(struct!.showDockerBridge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultDockerShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultDockerShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showDockerBridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDockerBridge = this._showDockerBridge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultDockerShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showDockerBridge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showDockerBridge = value.showDockerBridge;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_docker_bridge - computed: true, optional: true, required: false
  private _showDockerBridge?: boolean | cdktf.IResolvable; 
  public get showDockerBridge() {
    return this.getBooleanAttribute('show_docker_bridge');
  }
  public set showDockerBridge(value: boolean | cdktf.IResolvable) {
    this._showDockerBridge = value;
  }
  public resetShowDockerBridge() {
    this._showDockerBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDockerBridgeInput() {
    return this._showDockerBridge;
  }
}
export interface DataNiosSecurityAdminGroupResultGridSetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_default_revert_window DataNiosSecurityAdminGroup#set_default_revert_window}
  */
  readonly setDefaultRevertWindow?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_dscp DataNiosSecurityAdminGroup#set_dscp}
  */
  readonly setDscp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_membership DataNiosSecurityAdminGroup#set_membership}
  */
  readonly setMembership?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_nogrid DataNiosSecurityAdminGroup#set_nogrid}
  */
  readonly setNogrid?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_nomastergrid DataNiosSecurityAdminGroup#set_nomastergrid}
  */
  readonly setNomastergrid?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_promote_master DataNiosSecurityAdminGroup#set_promote_master}
  */
  readonly setPromoteMaster?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_revert_grid DataNiosSecurityAdminGroup#set_revert_grid}
  */
  readonly setRevertGrid?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_test_promote_master DataNiosSecurityAdminGroup#set_test_promote_master}
  */
  readonly setTestPromoteMaster?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_token DataNiosSecurityAdminGroup#set_token}
  */
  readonly setToken?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultGridSetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultGridSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_default_revert_window: cdktf.booleanToTerraform(struct!.setDefaultRevertWindow),
    set_dscp: cdktf.booleanToTerraform(struct!.setDscp),
    set_membership: cdktf.booleanToTerraform(struct!.setMembership),
    set_nogrid: cdktf.booleanToTerraform(struct!.setNogrid),
    set_nomastergrid: cdktf.booleanToTerraform(struct!.setNomastergrid),
    set_promote_master: cdktf.booleanToTerraform(struct!.setPromoteMaster),
    set_revert_grid: cdktf.booleanToTerraform(struct!.setRevertGrid),
    set_test_promote_master: cdktf.booleanToTerraform(struct!.setTestPromoteMaster),
    set_token: cdktf.booleanToTerraform(struct!.setToken),
  }
}


export function dataNiosSecurityAdminGroupResultGridSetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultGridSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_default_revert_window: {
      value: cdktf.booleanToHclTerraform(struct!.setDefaultRevertWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_dscp: {
      value: cdktf.booleanToHclTerraform(struct!.setDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_membership: {
      value: cdktf.booleanToHclTerraform(struct!.setMembership),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_nogrid: {
      value: cdktf.booleanToHclTerraform(struct!.setNogrid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_nomastergrid: {
      value: cdktf.booleanToHclTerraform(struct!.setNomastergrid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_promote_master: {
      value: cdktf.booleanToHclTerraform(struct!.setPromoteMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_revert_grid: {
      value: cdktf.booleanToHclTerraform(struct!.setRevertGrid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_test_promote_master: {
      value: cdktf.booleanToHclTerraform(struct!.setTestPromoteMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_token: {
      value: cdktf.booleanToHclTerraform(struct!.setToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultGridSetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultGridSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setDefaultRevertWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDefaultRevertWindow = this._setDefaultRevertWindow;
    }
    if (this._setDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDscp = this._setDscp;
    }
    if (this._setMembership !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMembership = this._setMembership;
    }
    if (this._setNogrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNogrid = this._setNogrid;
    }
    if (this._setNomastergrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNomastergrid = this._setNomastergrid;
    }
    if (this._setPromoteMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPromoteMaster = this._setPromoteMaster;
    }
    if (this._setRevertGrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRevertGrid = this._setRevertGrid;
    }
    if (this._setTestPromoteMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTestPromoteMaster = this._setTestPromoteMaster;
    }
    if (this._setToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.setToken = this._setToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultGridSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setDefaultRevertWindow = undefined;
      this._setDscp = undefined;
      this._setMembership = undefined;
      this._setNogrid = undefined;
      this._setNomastergrid = undefined;
      this._setPromoteMaster = undefined;
      this._setRevertGrid = undefined;
      this._setTestPromoteMaster = undefined;
      this._setToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setDefaultRevertWindow = value.setDefaultRevertWindow;
      this._setDscp = value.setDscp;
      this._setMembership = value.setMembership;
      this._setNogrid = value.setNogrid;
      this._setNomastergrid = value.setNomastergrid;
      this._setPromoteMaster = value.setPromoteMaster;
      this._setRevertGrid = value.setRevertGrid;
      this._setTestPromoteMaster = value.setTestPromoteMaster;
      this._setToken = value.setToken;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // set_default_revert_window - computed: true, optional: true, required: false
  private _setDefaultRevertWindow?: boolean | cdktf.IResolvable; 
  public get setDefaultRevertWindow() {
    return this.getBooleanAttribute('set_default_revert_window');
  }
  public set setDefaultRevertWindow(value: boolean | cdktf.IResolvable) {
    this._setDefaultRevertWindow = value;
  }
  public resetSetDefaultRevertWindow() {
    this._setDefaultRevertWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDefaultRevertWindowInput() {
    return this._setDefaultRevertWindow;
  }

  // set_dscp - computed: true, optional: true, required: false
  private _setDscp?: boolean | cdktf.IResolvable; 
  public get setDscp() {
    return this.getBooleanAttribute('set_dscp');
  }
  public set setDscp(value: boolean | cdktf.IResolvable) {
    this._setDscp = value;
  }
  public resetSetDscp() {
    this._setDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDscpInput() {
    return this._setDscp;
  }

  // set_membership - computed: true, optional: true, required: false
  private _setMembership?: boolean | cdktf.IResolvable; 
  public get setMembership() {
    return this.getBooleanAttribute('set_membership');
  }
  public set setMembership(value: boolean | cdktf.IResolvable) {
    this._setMembership = value;
  }
  public resetSetMembership() {
    this._setMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMembershipInput() {
    return this._setMembership;
  }

  // set_nogrid - computed: true, optional: true, required: false
  private _setNogrid?: boolean | cdktf.IResolvable; 
  public get setNogrid() {
    return this.getBooleanAttribute('set_nogrid');
  }
  public set setNogrid(value: boolean | cdktf.IResolvable) {
    this._setNogrid = value;
  }
  public resetSetNogrid() {
    this._setNogrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNogridInput() {
    return this._setNogrid;
  }

  // set_nomastergrid - computed: true, optional: true, required: false
  private _setNomastergrid?: boolean | cdktf.IResolvable; 
  public get setNomastergrid() {
    return this.getBooleanAttribute('set_nomastergrid');
  }
  public set setNomastergrid(value: boolean | cdktf.IResolvable) {
    this._setNomastergrid = value;
  }
  public resetSetNomastergrid() {
    this._setNomastergrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNomastergridInput() {
    return this._setNomastergrid;
  }

  // set_promote_master - computed: true, optional: true, required: false
  private _setPromoteMaster?: boolean | cdktf.IResolvable; 
  public get setPromoteMaster() {
    return this.getBooleanAttribute('set_promote_master');
  }
  public set setPromoteMaster(value: boolean | cdktf.IResolvable) {
    this._setPromoteMaster = value;
  }
  public resetSetPromoteMaster() {
    this._setPromoteMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPromoteMasterInput() {
    return this._setPromoteMaster;
  }

  // set_revert_grid - computed: true, optional: true, required: false
  private _setRevertGrid?: boolean | cdktf.IResolvable; 
  public get setRevertGrid() {
    return this.getBooleanAttribute('set_revert_grid');
  }
  public set setRevertGrid(value: boolean | cdktf.IResolvable) {
    this._setRevertGrid = value;
  }
  public resetSetRevertGrid() {
    this._setRevertGrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRevertGridInput() {
    return this._setRevertGrid;
  }

  // set_test_promote_master - computed: true, optional: true, required: false
  private _setTestPromoteMaster?: boolean | cdktf.IResolvable; 
  public get setTestPromoteMaster() {
    return this.getBooleanAttribute('set_test_promote_master');
  }
  public set setTestPromoteMaster(value: boolean | cdktf.IResolvable) {
    this._setTestPromoteMaster = value;
  }
  public resetSetTestPromoteMaster() {
    this._setTestPromoteMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTestPromoteMasterInput() {
    return this._setTestPromoteMaster;
  }

  // set_token - computed: true, optional: true, required: false
  private _setToken?: boolean | cdktf.IResolvable; 
  public get setToken() {
    return this.getBooleanAttribute('set_token');
  }
  public set setToken(value: boolean | cdktf.IResolvable) {
    this._setToken = value;
  }
  public resetSetToken() {
    this._setToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTokenInput() {
    return this._setToken;
  }
}
export interface DataNiosSecurityAdminGroupResultGridShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_dscp DataNiosSecurityAdminGroup#show_dscp}
  */
  readonly showDscp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_test_promote_master DataNiosSecurityAdminGroup#show_test_promote_master}
  */
  readonly showTestPromoteMaster?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_token DataNiosSecurityAdminGroup#show_token}
  */
  readonly showToken?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultGridShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultGridShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_dscp: cdktf.booleanToTerraform(struct!.showDscp),
    show_test_promote_master: cdktf.booleanToTerraform(struct!.showTestPromoteMaster),
    show_token: cdktf.booleanToTerraform(struct!.showToken),
  }
}


export function dataNiosSecurityAdminGroupResultGridShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultGridShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_dscp: {
      value: cdktf.booleanToHclTerraform(struct!.showDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_test_promote_master: {
      value: cdktf.booleanToHclTerraform(struct!.showTestPromoteMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_token: {
      value: cdktf.booleanToHclTerraform(struct!.showToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultGridShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultGridShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDscp = this._showDscp;
    }
    if (this._showTestPromoteMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTestPromoteMaster = this._showTestPromoteMaster;
    }
    if (this._showToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.showToken = this._showToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultGridShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showDscp = undefined;
      this._showTestPromoteMaster = undefined;
      this._showToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showDscp = value.showDscp;
      this._showTestPromoteMaster = value.showTestPromoteMaster;
      this._showToken = value.showToken;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_dscp - computed: true, optional: true, required: false
  private _showDscp?: boolean | cdktf.IResolvable; 
  public get showDscp() {
    return this.getBooleanAttribute('show_dscp');
  }
  public set showDscp(value: boolean | cdktf.IResolvable) {
    this._showDscp = value;
  }
  public resetShowDscp() {
    this._showDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDscpInput() {
    return this._showDscp;
  }

  // show_test_promote_master - computed: true, optional: true, required: false
  private _showTestPromoteMaster?: boolean | cdktf.IResolvable; 
  public get showTestPromoteMaster() {
    return this.getBooleanAttribute('show_test_promote_master');
  }
  public set showTestPromoteMaster(value: boolean | cdktf.IResolvable) {
    this._showTestPromoteMaster = value;
  }
  public resetShowTestPromoteMaster() {
    this._showTestPromoteMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTestPromoteMasterInput() {
    return this._showTestPromoteMaster;
  }

  // show_token - computed: true, optional: true, required: false
  private _showToken?: boolean | cdktf.IResolvable; 
  public get showToken() {
    return this.getBooleanAttribute('show_token');
  }
  public set showToken(value: boolean | cdktf.IResolvable) {
    this._showToken = value;
  }
  public resetShowToken() {
    this._showToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTokenInput() {
    return this._showToken;
  }
}
export interface DataNiosSecurityAdminGroupResultInactivityLockoutSetting {
  /**
  * Enable/disable the account inactivity lockout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#account_inactivity_lockout_enable DataNiosSecurityAdminGroup#account_inactivity_lockout_enable}
  */
  readonly accountInactivityLockoutEnable?: boolean | cdktf.IResolvable;
  /**
  * Number of days after which account gets locked out if user does not login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#inactive_days DataNiosSecurityAdminGroup#inactive_days}
  */
  readonly inactiveDays?: number;
  /**
  * Enable/disable reactivating user account by logging in from remote console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#reactivate_via_remote_console_enable DataNiosSecurityAdminGroup#reactivate_via_remote_console_enable}
  */
  readonly reactivateViaRemoteConsoleEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable reactivating user account by logging in from serial console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#reactivate_via_serial_console_enable DataNiosSecurityAdminGroup#reactivate_via_serial_console_enable}
  */
  readonly reactivateViaSerialConsoleEnable?: boolean | cdktf.IResolvable;
  /**
  * The number of days before the account lockout date when the appliance sends a reminder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#reminder_days DataNiosSecurityAdminGroup#reminder_days}
  */
  readonly reminderDays?: number;
}

export function dataNiosSecurityAdminGroupResultInactivityLockoutSettingToTerraform(struct?: DataNiosSecurityAdminGroupResultInactivityLockoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_inactivity_lockout_enable: cdktf.booleanToTerraform(struct!.accountInactivityLockoutEnable),
    inactive_days: cdktf.numberToTerraform(struct!.inactiveDays),
    reactivate_via_remote_console_enable: cdktf.booleanToTerraform(struct!.reactivateViaRemoteConsoleEnable),
    reactivate_via_serial_console_enable: cdktf.booleanToTerraform(struct!.reactivateViaSerialConsoleEnable),
    reminder_days: cdktf.numberToTerraform(struct!.reminderDays),
  }
}


export function dataNiosSecurityAdminGroupResultInactivityLockoutSettingToHclTerraform(struct?: DataNiosSecurityAdminGroupResultInactivityLockoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_inactivity_lockout_enable: {
      value: cdktf.booleanToHclTerraform(struct!.accountInactivityLockoutEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inactive_days: {
      value: cdktf.numberToHclTerraform(struct!.inactiveDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reactivate_via_remote_console_enable: {
      value: cdktf.booleanToHclTerraform(struct!.reactivateViaRemoteConsoleEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reactivate_via_serial_console_enable: {
      value: cdktf.booleanToHclTerraform(struct!.reactivateViaSerialConsoleEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reminder_days: {
      value: cdktf.numberToHclTerraform(struct!.reminderDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultInactivityLockoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultInactivityLockoutSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountInactivityLockoutEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountInactivityLockoutEnable = this._accountInactivityLockoutEnable;
    }
    if (this._inactiveDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactiveDays = this._inactiveDays;
    }
    if (this._reactivateViaRemoteConsoleEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactivateViaRemoteConsoleEnable = this._reactivateViaRemoteConsoleEnable;
    }
    if (this._reactivateViaSerialConsoleEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.reactivateViaSerialConsoleEnable = this._reactivateViaSerialConsoleEnable;
    }
    if (this._reminderDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.reminderDays = this._reminderDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultInactivityLockoutSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountInactivityLockoutEnable = undefined;
      this._inactiveDays = undefined;
      this._reactivateViaRemoteConsoleEnable = undefined;
      this._reactivateViaSerialConsoleEnable = undefined;
      this._reminderDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountInactivityLockoutEnable = value.accountInactivityLockoutEnable;
      this._inactiveDays = value.inactiveDays;
      this._reactivateViaRemoteConsoleEnable = value.reactivateViaRemoteConsoleEnable;
      this._reactivateViaSerialConsoleEnable = value.reactivateViaSerialConsoleEnable;
      this._reminderDays = value.reminderDays;
    }
  }

  // account_inactivity_lockout_enable - computed: true, optional: true, required: false
  private _accountInactivityLockoutEnable?: boolean | cdktf.IResolvable; 
  public get accountInactivityLockoutEnable() {
    return this.getBooleanAttribute('account_inactivity_lockout_enable');
  }
  public set accountInactivityLockoutEnable(value: boolean | cdktf.IResolvable) {
    this._accountInactivityLockoutEnable = value;
  }
  public resetAccountInactivityLockoutEnable() {
    this._accountInactivityLockoutEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInactivityLockoutEnableInput() {
    return this._accountInactivityLockoutEnable;
  }

  // inactive_days - computed: true, optional: true, required: false
  private _inactiveDays?: number; 
  public get inactiveDays() {
    return this.getNumberAttribute('inactive_days');
  }
  public set inactiveDays(value: number) {
    this._inactiveDays = value;
  }
  public resetInactiveDays() {
    this._inactiveDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveDaysInput() {
    return this._inactiveDays;
  }

  // reactivate_via_remote_console_enable - computed: true, optional: true, required: false
  private _reactivateViaRemoteConsoleEnable?: boolean | cdktf.IResolvable; 
  public get reactivateViaRemoteConsoleEnable() {
    return this.getBooleanAttribute('reactivate_via_remote_console_enable');
  }
  public set reactivateViaRemoteConsoleEnable(value: boolean | cdktf.IResolvable) {
    this._reactivateViaRemoteConsoleEnable = value;
  }
  public resetReactivateViaRemoteConsoleEnable() {
    this._reactivateViaRemoteConsoleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reactivateViaRemoteConsoleEnableInput() {
    return this._reactivateViaRemoteConsoleEnable;
  }

  // reactivate_via_serial_console_enable - computed: true, optional: true, required: false
  private _reactivateViaSerialConsoleEnable?: boolean | cdktf.IResolvable; 
  public get reactivateViaSerialConsoleEnable() {
    return this.getBooleanAttribute('reactivate_via_serial_console_enable');
  }
  public set reactivateViaSerialConsoleEnable(value: boolean | cdktf.IResolvable) {
    this._reactivateViaSerialConsoleEnable = value;
  }
  public resetReactivateViaSerialConsoleEnable() {
    this._reactivateViaSerialConsoleEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reactivateViaSerialConsoleEnableInput() {
    return this._reactivateViaSerialConsoleEnable;
  }

  // reminder_days - computed: true, optional: true, required: false
  private _reminderDays?: number; 
  public get reminderDays() {
    return this.getNumberAttribute('reminder_days');
  }
  public set reminderDays(value: number) {
    this._reminderDays = value;
  }
  public resetReminderDays() {
    this._reminderDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderDaysInput() {
    return this._reminderDays;
  }
}
export interface DataNiosSecurityAdminGroupResultLicensingSetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_license DataNiosSecurityAdminGroup#set_license}
  */
  readonly setLicense?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_reporting_reset_license DataNiosSecurityAdminGroup#set_reporting_reset_license}
  */
  readonly setReportingResetLicense?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_temp_license DataNiosSecurityAdminGroup#set_temp_license}
  */
  readonly setTempLicense?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultLicensingSetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultLicensingSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_license: cdktf.booleanToTerraform(struct!.setLicense),
    set_reporting_reset_license: cdktf.booleanToTerraform(struct!.setReportingResetLicense),
    set_temp_license: cdktf.booleanToTerraform(struct!.setTempLicense),
  }
}


export function dataNiosSecurityAdminGroupResultLicensingSetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultLicensingSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_license: {
      value: cdktf.booleanToHclTerraform(struct!.setLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_reporting_reset_license: {
      value: cdktf.booleanToHclTerraform(struct!.setReportingResetLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_temp_license: {
      value: cdktf.booleanToHclTerraform(struct!.setTempLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultLicensingSetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultLicensingSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLicense = this._setLicense;
    }
    if (this._setReportingResetLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.setReportingResetLicense = this._setReportingResetLicense;
    }
    if (this._setTempLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTempLicense = this._setTempLicense;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultLicensingSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setLicense = undefined;
      this._setReportingResetLicense = undefined;
      this._setTempLicense = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setLicense = value.setLicense;
      this._setReportingResetLicense = value.setReportingResetLicense;
      this._setTempLicense = value.setTempLicense;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // set_license - computed: true, optional: true, required: false
  private _setLicense?: boolean | cdktf.IResolvable; 
  public get setLicense() {
    return this.getBooleanAttribute('set_license');
  }
  public set setLicense(value: boolean | cdktf.IResolvable) {
    this._setLicense = value;
  }
  public resetSetLicense() {
    this._setLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLicenseInput() {
    return this._setLicense;
  }

  // set_reporting_reset_license - computed: true, optional: true, required: false
  private _setReportingResetLicense?: boolean | cdktf.IResolvable; 
  public get setReportingResetLicense() {
    return this.getBooleanAttribute('set_reporting_reset_license');
  }
  public set setReportingResetLicense(value: boolean | cdktf.IResolvable) {
    this._setReportingResetLicense = value;
  }
  public resetSetReportingResetLicense() {
    this._setReportingResetLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setReportingResetLicenseInput() {
    return this._setReportingResetLicense;
  }

  // set_temp_license - computed: true, optional: true, required: false
  private _setTempLicense?: boolean | cdktf.IResolvable; 
  public get setTempLicense() {
    return this.getBooleanAttribute('set_temp_license');
  }
  public set setTempLicense(value: boolean | cdktf.IResolvable) {
    this._setTempLicense = value;
  }
  public resetSetTempLicense() {
    this._setTempLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTempLicenseInput() {
    return this._setTempLicense;
  }
}
export interface DataNiosSecurityAdminGroupResultLicensingShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_license DataNiosSecurityAdminGroup#show_license}
  */
  readonly showLicense?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_license_pool_container DataNiosSecurityAdminGroup#show_license_pool_container}
  */
  readonly showLicensePoolContainer?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_license_uid DataNiosSecurityAdminGroup#show_license_uid}
  */
  readonly showLicenseUid?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultLicensingShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultLicensingShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_license: cdktf.booleanToTerraform(struct!.showLicense),
    show_license_pool_container: cdktf.booleanToTerraform(struct!.showLicensePoolContainer),
    show_license_uid: cdktf.booleanToTerraform(struct!.showLicenseUid),
  }
}


export function dataNiosSecurityAdminGroupResultLicensingShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultLicensingShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_license: {
      value: cdktf.booleanToHclTerraform(struct!.showLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_license_pool_container: {
      value: cdktf.booleanToHclTerraform(struct!.showLicensePoolContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_license_uid: {
      value: cdktf.booleanToHclTerraform(struct!.showLicenseUid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultLicensingShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultLicensingShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLicense = this._showLicense;
    }
    if (this._showLicensePoolContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLicensePoolContainer = this._showLicensePoolContainer;
    }
    if (this._showLicenseUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLicenseUid = this._showLicenseUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultLicensingShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showLicense = undefined;
      this._showLicensePoolContainer = undefined;
      this._showLicenseUid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showLicense = value.showLicense;
      this._showLicensePoolContainer = value.showLicensePoolContainer;
      this._showLicenseUid = value.showLicenseUid;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_license - computed: true, optional: true, required: false
  private _showLicense?: boolean | cdktf.IResolvable; 
  public get showLicense() {
    return this.getBooleanAttribute('show_license');
  }
  public set showLicense(value: boolean | cdktf.IResolvable) {
    this._showLicense = value;
  }
  public resetShowLicense() {
    this._showLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLicenseInput() {
    return this._showLicense;
  }

  // show_license_pool_container - computed: true, optional: true, required: false
  private _showLicensePoolContainer?: boolean | cdktf.IResolvable; 
  public get showLicensePoolContainer() {
    return this.getBooleanAttribute('show_license_pool_container');
  }
  public set showLicensePoolContainer(value: boolean | cdktf.IResolvable) {
    this._showLicensePoolContainer = value;
  }
  public resetShowLicensePoolContainer() {
    this._showLicensePoolContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLicensePoolContainerInput() {
    return this._showLicensePoolContainer;
  }

  // show_license_uid - computed: true, optional: true, required: false
  private _showLicenseUid?: boolean | cdktf.IResolvable; 
  public get showLicenseUid() {
    return this.getBooleanAttribute('show_license_uid');
  }
  public set showLicenseUid(value: boolean | cdktf.IResolvable) {
    this._showLicenseUid = value;
  }
  public resetShowLicenseUid() {
    this._showLicenseUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLicenseUidInput() {
    return this._showLicenseUid;
  }
}
export interface DataNiosSecurityAdminGroupResultLockoutSetting {
  /**
  * Enable/disable sequential failed login attempts lockout for local users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#enable_sequential_failed_login_attempts_lockout DataNiosSecurityAdminGroup#enable_sequential_failed_login_attempts_lockout}
  */
  readonly enableSequentialFailedLoginAttemptsLockout?: boolean | cdktf.IResolvable;
  /**
  * Time period the account remains locked after sequential failed login attempt lockout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#failed_lockout_duration DataNiosSecurityAdminGroup#failed_lockout_duration}
  */
  readonly failedLockoutDuration?: number;
  /**
  * Never unlock option is also provided and if set then user account is locked forever and only super user can unlock this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#never_unlock_user DataNiosSecurityAdminGroup#never_unlock_user}
  */
  readonly neverUnlockUser?: boolean | cdktf.IResolvable;
  /**
  * The number of failed login attempts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#sequential_attempts DataNiosSecurityAdminGroup#sequential_attempts}
  */
  readonly sequentialAttempts?: number;
}

export function dataNiosSecurityAdminGroupResultLockoutSettingToTerraform(struct?: DataNiosSecurityAdminGroupResultLockoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_sequential_failed_login_attempts_lockout: cdktf.booleanToTerraform(struct!.enableSequentialFailedLoginAttemptsLockout),
    failed_lockout_duration: cdktf.numberToTerraform(struct!.failedLockoutDuration),
    never_unlock_user: cdktf.booleanToTerraform(struct!.neverUnlockUser),
    sequential_attempts: cdktf.numberToTerraform(struct!.sequentialAttempts),
  }
}


export function dataNiosSecurityAdminGroupResultLockoutSettingToHclTerraform(struct?: DataNiosSecurityAdminGroupResultLockoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_sequential_failed_login_attempts_lockout: {
      value: cdktf.booleanToHclTerraform(struct!.enableSequentialFailedLoginAttemptsLockout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failed_lockout_duration: {
      value: cdktf.numberToHclTerraform(struct!.failedLockoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    never_unlock_user: {
      value: cdktf.booleanToHclTerraform(struct!.neverUnlockUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sequential_attempts: {
      value: cdktf.numberToHclTerraform(struct!.sequentialAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultLockoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultLockoutSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSequentialFailedLoginAttemptsLockout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSequentialFailedLoginAttemptsLockout = this._enableSequentialFailedLoginAttemptsLockout;
    }
    if (this._failedLockoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedLockoutDuration = this._failedLockoutDuration;
    }
    if (this._neverUnlockUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.neverUnlockUser = this._neverUnlockUser;
    }
    if (this._sequentialAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequentialAttempts = this._sequentialAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultLockoutSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSequentialFailedLoginAttemptsLockout = undefined;
      this._failedLockoutDuration = undefined;
      this._neverUnlockUser = undefined;
      this._sequentialAttempts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSequentialFailedLoginAttemptsLockout = value.enableSequentialFailedLoginAttemptsLockout;
      this._failedLockoutDuration = value.failedLockoutDuration;
      this._neverUnlockUser = value.neverUnlockUser;
      this._sequentialAttempts = value.sequentialAttempts;
    }
  }

  // enable_sequential_failed_login_attempts_lockout - computed: true, optional: true, required: false
  private _enableSequentialFailedLoginAttemptsLockout?: boolean | cdktf.IResolvable; 
  public get enableSequentialFailedLoginAttemptsLockout() {
    return this.getBooleanAttribute('enable_sequential_failed_login_attempts_lockout');
  }
  public set enableSequentialFailedLoginAttemptsLockout(value: boolean | cdktf.IResolvable) {
    this._enableSequentialFailedLoginAttemptsLockout = value;
  }
  public resetEnableSequentialFailedLoginAttemptsLockout() {
    this._enableSequentialFailedLoginAttemptsLockout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSequentialFailedLoginAttemptsLockoutInput() {
    return this._enableSequentialFailedLoginAttemptsLockout;
  }

  // failed_lockout_duration - computed: true, optional: true, required: false
  private _failedLockoutDuration?: number; 
  public get failedLockoutDuration() {
    return this.getNumberAttribute('failed_lockout_duration');
  }
  public set failedLockoutDuration(value: number) {
    this._failedLockoutDuration = value;
  }
  public resetFailedLockoutDuration() {
    this._failedLockoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedLockoutDurationInput() {
    return this._failedLockoutDuration;
  }

  // never_unlock_user - computed: true, optional: true, required: false
  private _neverUnlockUser?: boolean | cdktf.IResolvable; 
  public get neverUnlockUser() {
    return this.getBooleanAttribute('never_unlock_user');
  }
  public set neverUnlockUser(value: boolean | cdktf.IResolvable) {
    this._neverUnlockUser = value;
  }
  public resetNeverUnlockUser() {
    this._neverUnlockUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neverUnlockUserInput() {
    return this._neverUnlockUser;
  }

  // sequential_attempts - computed: true, optional: true, required: false
  private _sequentialAttempts?: number; 
  public get sequentialAttempts() {
    return this.getNumberAttribute('sequential_attempts');
  }
  public set sequentialAttempts(value: number) {
    this._sequentialAttempts = value;
  }
  public resetSequentialAttempts() {
    this._sequentialAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequentialAttemptsInput() {
    return this._sequentialAttempts;
  }
}
export interface DataNiosSecurityAdminGroupResultMachineControlToplevelCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#reboot DataNiosSecurityAdminGroup#reboot}
  */
  readonly reboot?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#reset DataNiosSecurityAdminGroup#reset}
  */
  readonly reset?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#restart DataNiosSecurityAdminGroup#restart}
  */
  readonly restart?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#shutdown DataNiosSecurityAdminGroup#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultMachineControlToplevelCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultMachineControlToplevelCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reboot: cdktf.booleanToTerraform(struct!.reboot),
    reset: cdktf.booleanToTerraform(struct!.reset),
    restart: cdktf.booleanToTerraform(struct!.restart),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
  }
}


export function dataNiosSecurityAdminGroupResultMachineControlToplevelCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultMachineControlToplevelCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reboot: {
      value: cdktf.booleanToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset: {
      value: cdktf.booleanToHclTerraform(struct!.reset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restart: {
      value: cdktf.booleanToHclTerraform(struct!.restart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultMachineControlToplevelCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultMachineControlToplevelCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    if (this._reset !== undefined) {
      hasAnyValues = true;
      internalValueResult.reset = this._reset;
    }
    if (this._restart !== undefined) {
      hasAnyValues = true;
      internalValueResult.restart = this._restart;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultMachineControlToplevelCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reboot = undefined;
      this._reset = undefined;
      this._restart = undefined;
      this._shutdown = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reboot = value.reboot;
      this._reset = value.reset;
      this._restart = value.restart;
      this._shutdown = value.shutdown;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // reboot - computed: true, optional: true, required: false
  private _reboot?: boolean | cdktf.IResolvable; 
  public get reboot() {
    return this.getBooleanAttribute('reboot');
  }
  public set reboot(value: boolean | cdktf.IResolvable) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // reset - computed: true, optional: true, required: false
  private _reset?: boolean | cdktf.IResolvable; 
  public get reset() {
    return this.getBooleanAttribute('reset');
  }
  public set reset(value: boolean | cdktf.IResolvable) {
    this._reset = value;
  }
  public resetReset() {
    this._reset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetInput() {
    return this._reset;
  }

  // restart - computed: true, optional: true, required: false
  private _restart?: boolean | cdktf.IResolvable; 
  public get restart() {
    return this.getBooleanAttribute('restart');
  }
  public set restart(value: boolean | cdktf.IResolvable) {
    this._restart = value;
  }
  public resetRestart() {
    this._restart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart;
  }

  // shutdown - computed: true, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }
}
export interface DataNiosSecurityAdminGroupResultNetworkingSetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_connection_limit DataNiosSecurityAdminGroup#set_connection_limit}
  */
  readonly setConnectionLimit?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_default_route DataNiosSecurityAdminGroup#set_default_route}
  */
  readonly setDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_interface DataNiosSecurityAdminGroup#set_interface}
  */
  readonly setInterface?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ip_rate_limit DataNiosSecurityAdminGroup#set_ip_rate_limit}
  */
  readonly setIpRateLimit?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ipv6_disable_on_dad DataNiosSecurityAdminGroup#set_ipv6_disable_on_dad}
  */
  readonly setIpv6DisableOnDad?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ipv6_neighbor DataNiosSecurityAdminGroup#set_ipv6_neighbor}
  */
  readonly setIpv6Neighbor?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ipv6_ospf DataNiosSecurityAdminGroup#set_ipv6_ospf}
  */
  readonly setIpv6Ospf?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ipv6_status DataNiosSecurityAdminGroup#set_ipv6_status}
  */
  readonly setIpv6Status?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_lom DataNiosSecurityAdminGroup#set_lom}
  */
  readonly setLom?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_mld_version_1 DataNiosSecurityAdminGroup#set_mld_version_1}
  */
  readonly setMldVersion1?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_named_recv_sock_buf_size DataNiosSecurityAdminGroup#set_named_recv_sock_buf_size}
  */
  readonly setNamedRecvSockBufSize?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_named_tcp_clients_limit DataNiosSecurityAdminGroup#set_named_tcp_clients_limit}
  */
  readonly setNamedTcpClientsLimit?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_network DataNiosSecurityAdminGroup#set_network}
  */
  readonly setNetwork?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_ospf DataNiosSecurityAdminGroup#set_ospf}
  */
  readonly setOspf?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_prompt DataNiosSecurityAdminGroup#set_prompt}
  */
  readonly setPrompt?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_remote_console DataNiosSecurityAdminGroup#set_remote_console}
  */
  readonly setRemoteConsole?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_static_route DataNiosSecurityAdminGroup#set_static_route}
  */
  readonly setStaticRoute?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_tcp_timestamps DataNiosSecurityAdminGroup#set_tcp_timestamps}
  */
  readonly setTcpTimestamps?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_traffic_capture DataNiosSecurityAdminGroup#set_traffic_capture}
  */
  readonly setTrafficCapture?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_wins_forwarding DataNiosSecurityAdminGroup#set_wins_forwarding}
  */
  readonly setWinsForwarding?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultNetworkingSetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultNetworkingSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_connection_limit: cdktf.booleanToTerraform(struct!.setConnectionLimit),
    set_default_route: cdktf.booleanToTerraform(struct!.setDefaultRoute),
    set_interface: cdktf.booleanToTerraform(struct!.setInterface),
    set_ip_rate_limit: cdktf.booleanToTerraform(struct!.setIpRateLimit),
    set_ipv6_disable_on_dad: cdktf.booleanToTerraform(struct!.setIpv6DisableOnDad),
    set_ipv6_neighbor: cdktf.booleanToTerraform(struct!.setIpv6Neighbor),
    set_ipv6_ospf: cdktf.booleanToTerraform(struct!.setIpv6Ospf),
    set_ipv6_status: cdktf.booleanToTerraform(struct!.setIpv6Status),
    set_lom: cdktf.booleanToTerraform(struct!.setLom),
    set_mld_version_1: cdktf.booleanToTerraform(struct!.setMldVersion1),
    set_named_recv_sock_buf_size: cdktf.booleanToTerraform(struct!.setNamedRecvSockBufSize),
    set_named_tcp_clients_limit: cdktf.booleanToTerraform(struct!.setNamedTcpClientsLimit),
    set_network: cdktf.booleanToTerraform(struct!.setNetwork),
    set_ospf: cdktf.booleanToTerraform(struct!.setOspf),
    set_prompt: cdktf.booleanToTerraform(struct!.setPrompt),
    set_remote_console: cdktf.booleanToTerraform(struct!.setRemoteConsole),
    set_static_route: cdktf.booleanToTerraform(struct!.setStaticRoute),
    set_tcp_timestamps: cdktf.booleanToTerraform(struct!.setTcpTimestamps),
    set_traffic_capture: cdktf.booleanToTerraform(struct!.setTrafficCapture),
    set_wins_forwarding: cdktf.booleanToTerraform(struct!.setWinsForwarding),
  }
}


export function dataNiosSecurityAdminGroupResultNetworkingSetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultNetworkingSetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_connection_limit: {
      value: cdktf.booleanToHclTerraform(struct!.setConnectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.setDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_interface: {
      value: cdktf.booleanToHclTerraform(struct!.setInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ip_rate_limit: {
      value: cdktf.booleanToHclTerraform(struct!.setIpRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ipv6_disable_on_dad: {
      value: cdktf.booleanToHclTerraform(struct!.setIpv6DisableOnDad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ipv6_neighbor: {
      value: cdktf.booleanToHclTerraform(struct!.setIpv6Neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ipv6_ospf: {
      value: cdktf.booleanToHclTerraform(struct!.setIpv6Ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ipv6_status: {
      value: cdktf.booleanToHclTerraform(struct!.setIpv6Status),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_lom: {
      value: cdktf.booleanToHclTerraform(struct!.setLom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_mld_version_1: {
      value: cdktf.booleanToHclTerraform(struct!.setMldVersion1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_named_recv_sock_buf_size: {
      value: cdktf.booleanToHclTerraform(struct!.setNamedRecvSockBufSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_named_tcp_clients_limit: {
      value: cdktf.booleanToHclTerraform(struct!.setNamedTcpClientsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_network: {
      value: cdktf.booleanToHclTerraform(struct!.setNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_ospf: {
      value: cdktf.booleanToHclTerraform(struct!.setOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_prompt: {
      value: cdktf.booleanToHclTerraform(struct!.setPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_remote_console: {
      value: cdktf.booleanToHclTerraform(struct!.setRemoteConsole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_static_route: {
      value: cdktf.booleanToHclTerraform(struct!.setStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_tcp_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.setTcpTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_traffic_capture: {
      value: cdktf.booleanToHclTerraform(struct!.setTrafficCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_wins_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.setWinsForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultNetworkingSetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultNetworkingSetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setConnectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.setConnectionLimit = this._setConnectionLimit;
    }
    if (this._setDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDefaultRoute = this._setDefaultRoute;
    }
    if (this._setInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.setInterface = this._setInterface;
    }
    if (this._setIpRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpRateLimit = this._setIpRateLimit;
    }
    if (this._setIpv6DisableOnDad !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpv6DisableOnDad = this._setIpv6DisableOnDad;
    }
    if (this._setIpv6Neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpv6Neighbor = this._setIpv6Neighbor;
    }
    if (this._setIpv6Ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpv6Ospf = this._setIpv6Ospf;
    }
    if (this._setIpv6Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.setIpv6Status = this._setIpv6Status;
    }
    if (this._setLom !== undefined) {
      hasAnyValues = true;
      internalValueResult.setLom = this._setLom;
    }
    if (this._setMldVersion1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.setMldVersion1 = this._setMldVersion1;
    }
    if (this._setNamedRecvSockBufSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNamedRecvSockBufSize = this._setNamedRecvSockBufSize;
    }
    if (this._setNamedTcpClientsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNamedTcpClientsLimit = this._setNamedTcpClientsLimit;
    }
    if (this._setNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.setNetwork = this._setNetwork;
    }
    if (this._setOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.setOspf = this._setOspf;
    }
    if (this._setPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPrompt = this._setPrompt;
    }
    if (this._setRemoteConsole !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRemoteConsole = this._setRemoteConsole;
    }
    if (this._setStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.setStaticRoute = this._setStaticRoute;
    }
    if (this._setTcpTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTcpTimestamps = this._setTcpTimestamps;
    }
    if (this._setTrafficCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.setTrafficCapture = this._setTrafficCapture;
    }
    if (this._setWinsForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.setWinsForwarding = this._setWinsForwarding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultNetworkingSetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setConnectionLimit = undefined;
      this._setDefaultRoute = undefined;
      this._setInterface = undefined;
      this._setIpRateLimit = undefined;
      this._setIpv6DisableOnDad = undefined;
      this._setIpv6Neighbor = undefined;
      this._setIpv6Ospf = undefined;
      this._setIpv6Status = undefined;
      this._setLom = undefined;
      this._setMldVersion1 = undefined;
      this._setNamedRecvSockBufSize = undefined;
      this._setNamedTcpClientsLimit = undefined;
      this._setNetwork = undefined;
      this._setOspf = undefined;
      this._setPrompt = undefined;
      this._setRemoteConsole = undefined;
      this._setStaticRoute = undefined;
      this._setTcpTimestamps = undefined;
      this._setTrafficCapture = undefined;
      this._setWinsForwarding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setConnectionLimit = value.setConnectionLimit;
      this._setDefaultRoute = value.setDefaultRoute;
      this._setInterface = value.setInterface;
      this._setIpRateLimit = value.setIpRateLimit;
      this._setIpv6DisableOnDad = value.setIpv6DisableOnDad;
      this._setIpv6Neighbor = value.setIpv6Neighbor;
      this._setIpv6Ospf = value.setIpv6Ospf;
      this._setIpv6Status = value.setIpv6Status;
      this._setLom = value.setLom;
      this._setMldVersion1 = value.setMldVersion1;
      this._setNamedRecvSockBufSize = value.setNamedRecvSockBufSize;
      this._setNamedTcpClientsLimit = value.setNamedTcpClientsLimit;
      this._setNetwork = value.setNetwork;
      this._setOspf = value.setOspf;
      this._setPrompt = value.setPrompt;
      this._setRemoteConsole = value.setRemoteConsole;
      this._setStaticRoute = value.setStaticRoute;
      this._setTcpTimestamps = value.setTcpTimestamps;
      this._setTrafficCapture = value.setTrafficCapture;
      this._setWinsForwarding = value.setWinsForwarding;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // set_connection_limit - computed: true, optional: true, required: false
  private _setConnectionLimit?: boolean | cdktf.IResolvable; 
  public get setConnectionLimit() {
    return this.getBooleanAttribute('set_connection_limit');
  }
  public set setConnectionLimit(value: boolean | cdktf.IResolvable) {
    this._setConnectionLimit = value;
  }
  public resetSetConnectionLimit() {
    this._setConnectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setConnectionLimitInput() {
    return this._setConnectionLimit;
  }

  // set_default_route - computed: true, optional: true, required: false
  private _setDefaultRoute?: boolean | cdktf.IResolvable; 
  public get setDefaultRoute() {
    return this.getBooleanAttribute('set_default_route');
  }
  public set setDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._setDefaultRoute = value;
  }
  public resetSetDefaultRoute() {
    this._setDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDefaultRouteInput() {
    return this._setDefaultRoute;
  }

  // set_interface - computed: true, optional: true, required: false
  private _setInterface?: boolean | cdktf.IResolvable; 
  public get setInterface() {
    return this.getBooleanAttribute('set_interface');
  }
  public set setInterface(value: boolean | cdktf.IResolvable) {
    this._setInterface = value;
  }
  public resetSetInterface() {
    this._setInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInterfaceInput() {
    return this._setInterface;
  }

  // set_ip_rate_limit - computed: true, optional: true, required: false
  private _setIpRateLimit?: boolean | cdktf.IResolvable; 
  public get setIpRateLimit() {
    return this.getBooleanAttribute('set_ip_rate_limit');
  }
  public set setIpRateLimit(value: boolean | cdktf.IResolvable) {
    this._setIpRateLimit = value;
  }
  public resetSetIpRateLimit() {
    this._setIpRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpRateLimitInput() {
    return this._setIpRateLimit;
  }

  // set_ipv6_disable_on_dad - computed: true, optional: true, required: false
  private _setIpv6DisableOnDad?: boolean | cdktf.IResolvable; 
  public get setIpv6DisableOnDad() {
    return this.getBooleanAttribute('set_ipv6_disable_on_dad');
  }
  public set setIpv6DisableOnDad(value: boolean | cdktf.IResolvable) {
    this._setIpv6DisableOnDad = value;
  }
  public resetSetIpv6DisableOnDad() {
    this._setIpv6DisableOnDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpv6DisableOnDadInput() {
    return this._setIpv6DisableOnDad;
  }

  // set_ipv6_neighbor - computed: true, optional: true, required: false
  private _setIpv6Neighbor?: boolean | cdktf.IResolvable; 
  public get setIpv6Neighbor() {
    return this.getBooleanAttribute('set_ipv6_neighbor');
  }
  public set setIpv6Neighbor(value: boolean | cdktf.IResolvable) {
    this._setIpv6Neighbor = value;
  }
  public resetSetIpv6Neighbor() {
    this._setIpv6Neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpv6NeighborInput() {
    return this._setIpv6Neighbor;
  }

  // set_ipv6_ospf - computed: true, optional: true, required: false
  private _setIpv6Ospf?: boolean | cdktf.IResolvable; 
  public get setIpv6Ospf() {
    return this.getBooleanAttribute('set_ipv6_ospf');
  }
  public set setIpv6Ospf(value: boolean | cdktf.IResolvable) {
    this._setIpv6Ospf = value;
  }
  public resetSetIpv6Ospf() {
    this._setIpv6Ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpv6OspfInput() {
    return this._setIpv6Ospf;
  }

  // set_ipv6_status - computed: true, optional: true, required: false
  private _setIpv6Status?: boolean | cdktf.IResolvable; 
  public get setIpv6Status() {
    return this.getBooleanAttribute('set_ipv6_status');
  }
  public set setIpv6Status(value: boolean | cdktf.IResolvable) {
    this._setIpv6Status = value;
  }
  public resetSetIpv6Status() {
    this._setIpv6Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIpv6StatusInput() {
    return this._setIpv6Status;
  }

  // set_lom - computed: true, optional: true, required: false
  private _setLom?: boolean | cdktf.IResolvable; 
  public get setLom() {
    return this.getBooleanAttribute('set_lom');
  }
  public set setLom(value: boolean | cdktf.IResolvable) {
    this._setLom = value;
  }
  public resetSetLom() {
    this._setLom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setLomInput() {
    return this._setLom;
  }

  // set_mld_version_1 - computed: true, optional: true, required: false
  private _setMldVersion1?: boolean | cdktf.IResolvable; 
  public get setMldVersion1() {
    return this.getBooleanAttribute('set_mld_version_1');
  }
  public set setMldVersion1(value: boolean | cdktf.IResolvable) {
    this._setMldVersion1 = value;
  }
  public resetSetMldVersion1() {
    this._setMldVersion1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setMldVersion1Input() {
    return this._setMldVersion1;
  }

  // set_named_recv_sock_buf_size - computed: true, optional: true, required: false
  private _setNamedRecvSockBufSize?: boolean | cdktf.IResolvable; 
  public get setNamedRecvSockBufSize() {
    return this.getBooleanAttribute('set_named_recv_sock_buf_size');
  }
  public set setNamedRecvSockBufSize(value: boolean | cdktf.IResolvable) {
    this._setNamedRecvSockBufSize = value;
  }
  public resetSetNamedRecvSockBufSize() {
    this._setNamedRecvSockBufSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNamedRecvSockBufSizeInput() {
    return this._setNamedRecvSockBufSize;
  }

  // set_named_tcp_clients_limit - computed: true, optional: true, required: false
  private _setNamedTcpClientsLimit?: boolean | cdktf.IResolvable; 
  public get setNamedTcpClientsLimit() {
    return this.getBooleanAttribute('set_named_tcp_clients_limit');
  }
  public set setNamedTcpClientsLimit(value: boolean | cdktf.IResolvable) {
    this._setNamedTcpClientsLimit = value;
  }
  public resetSetNamedTcpClientsLimit() {
    this._setNamedTcpClientsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNamedTcpClientsLimitInput() {
    return this._setNamedTcpClientsLimit;
  }

  // set_network - computed: true, optional: true, required: false
  private _setNetwork?: boolean | cdktf.IResolvable; 
  public get setNetwork() {
    return this.getBooleanAttribute('set_network');
  }
  public set setNetwork(value: boolean | cdktf.IResolvable) {
    this._setNetwork = value;
  }
  public resetSetNetwork() {
    this._setNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNetworkInput() {
    return this._setNetwork;
  }

  // set_ospf - computed: true, optional: true, required: false
  private _setOspf?: boolean | cdktf.IResolvable; 
  public get setOspf() {
    return this.getBooleanAttribute('set_ospf');
  }
  public set setOspf(value: boolean | cdktf.IResolvable) {
    this._setOspf = value;
  }
  public resetSetOspf() {
    this._setOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOspfInput() {
    return this._setOspf;
  }

  // set_prompt - computed: true, optional: true, required: false
  private _setPrompt?: boolean | cdktf.IResolvable; 
  public get setPrompt() {
    return this.getBooleanAttribute('set_prompt');
  }
  public set setPrompt(value: boolean | cdktf.IResolvable) {
    this._setPrompt = value;
  }
  public resetSetPrompt() {
    this._setPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPromptInput() {
    return this._setPrompt;
  }

  // set_remote_console - computed: true, optional: true, required: false
  private _setRemoteConsole?: boolean | cdktf.IResolvable; 
  public get setRemoteConsole() {
    return this.getBooleanAttribute('set_remote_console');
  }
  public set setRemoteConsole(value: boolean | cdktf.IResolvable) {
    this._setRemoteConsole = value;
  }
  public resetSetRemoteConsole() {
    this._setRemoteConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRemoteConsoleInput() {
    return this._setRemoteConsole;
  }

  // set_static_route - computed: true, optional: true, required: false
  private _setStaticRoute?: boolean | cdktf.IResolvable; 
  public get setStaticRoute() {
    return this.getBooleanAttribute('set_static_route');
  }
  public set setStaticRoute(value: boolean | cdktf.IResolvable) {
    this._setStaticRoute = value;
  }
  public resetSetStaticRoute() {
    this._setStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setStaticRouteInput() {
    return this._setStaticRoute;
  }

  // set_tcp_timestamps - computed: true, optional: true, required: false
  private _setTcpTimestamps?: boolean | cdktf.IResolvable; 
  public get setTcpTimestamps() {
    return this.getBooleanAttribute('set_tcp_timestamps');
  }
  public set setTcpTimestamps(value: boolean | cdktf.IResolvable) {
    this._setTcpTimestamps = value;
  }
  public resetSetTcpTimestamps() {
    this._setTcpTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTcpTimestampsInput() {
    return this._setTcpTimestamps;
  }

  // set_traffic_capture - computed: true, optional: true, required: false
  private _setTrafficCapture?: boolean | cdktf.IResolvable; 
  public get setTrafficCapture() {
    return this.getBooleanAttribute('set_traffic_capture');
  }
  public set setTrafficCapture(value: boolean | cdktf.IResolvable) {
    this._setTrafficCapture = value;
  }
  public resetSetTrafficCapture() {
    this._setTrafficCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setTrafficCaptureInput() {
    return this._setTrafficCapture;
  }

  // set_wins_forwarding - computed: true, optional: true, required: false
  private _setWinsForwarding?: boolean | cdktf.IResolvable; 
  public get setWinsForwarding() {
    return this.getBooleanAttribute('set_wins_forwarding');
  }
  public set setWinsForwarding(value: boolean | cdktf.IResolvable) {
    this._setWinsForwarding = value;
  }
  public resetSetWinsForwarding() {
    this._setWinsForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setWinsForwardingInput() {
    return this._setWinsForwarding;
  }
}
export interface DataNiosSecurityAdminGroupResultNetworkingShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_connection_limit DataNiosSecurityAdminGroup#show_connection_limit}
  */
  readonly showConnectionLimit?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_connections DataNiosSecurityAdminGroup#show_connections}
  */
  readonly showConnections?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_default_route DataNiosSecurityAdminGroup#show_default_route}
  */
  readonly showDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_interface DataNiosSecurityAdminGroup#show_interface}
  */
  readonly showInterface?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_interface_stats DataNiosSecurityAdminGroup#show_interface_stats}
  */
  readonly showInterfaceStats?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ip_rate_limit DataNiosSecurityAdminGroup#show_ip_rate_limit}
  */
  readonly showIpRateLimit?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_iproute DataNiosSecurityAdminGroup#show_iproute}
  */
  readonly showIproute?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_iprule DataNiosSecurityAdminGroup#show_iprule}
  */
  readonly showIprule?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_iptables DataNiosSecurityAdminGroup#show_iptables}
  */
  readonly showIptables?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ipv6_bgp DataNiosSecurityAdminGroup#show_ipv6_bgp}
  */
  readonly showIpv6Bgp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ipv6_disable_on_dad DataNiosSecurityAdminGroup#show_ipv6_disable_on_dad}
  */
  readonly showIpv6DisableOnDad?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ipv6_neighbor DataNiosSecurityAdminGroup#show_ipv6_neighbor}
  */
  readonly showIpv6Neighbor?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ipv6_ospf DataNiosSecurityAdminGroup#show_ipv6_ospf}
  */
  readonly showIpv6Ospf?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_lom DataNiosSecurityAdminGroup#show_lom}
  */
  readonly showLom?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_mld_version DataNiosSecurityAdminGroup#show_mld_version}
  */
  readonly showMldVersion?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_mtu_size DataNiosSecurityAdminGroup#show_mtu_size}
  */
  readonly showMtuSize?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_named_recv_sock_buf_size DataNiosSecurityAdminGroup#show_named_recv_sock_buf_size}
  */
  readonly showNamedRecvSockBufSize?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_named_tcp_clients_limit DataNiosSecurityAdminGroup#show_named_tcp_clients_limit}
  */
  readonly showNamedTcpClientsLimit?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_network DataNiosSecurityAdminGroup#show_network}
  */
  readonly showNetwork?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_network_connectivity DataNiosSecurityAdminGroup#show_network_connectivity}
  */
  readonly showNetworkConnectivity?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_ospf DataNiosSecurityAdminGroup#show_ospf}
  */
  readonly showOspf?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_remote_console DataNiosSecurityAdminGroup#show_remote_console}
  */
  readonly showRemoteConsole?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_routes DataNiosSecurityAdminGroup#show_routes}
  */
  readonly showRoutes?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_static_routes DataNiosSecurityAdminGroup#show_static_routes}
  */
  readonly showStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_tcp_timestamps DataNiosSecurityAdminGroup#show_tcp_timestamps}
  */
  readonly showTcpTimestamps?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_traffic_capture_status DataNiosSecurityAdminGroup#show_traffic_capture_status}
  */
  readonly showTrafficCaptureStatus?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_trafficfiles DataNiosSecurityAdminGroup#show_trafficfiles}
  */
  readonly showTrafficfiles?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_wins_forwarding DataNiosSecurityAdminGroup#show_wins_forwarding}
  */
  readonly showWinsForwarding?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultNetworkingShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultNetworkingShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_connection_limit: cdktf.booleanToTerraform(struct!.showConnectionLimit),
    show_connections: cdktf.booleanToTerraform(struct!.showConnections),
    show_default_route: cdktf.booleanToTerraform(struct!.showDefaultRoute),
    show_interface: cdktf.booleanToTerraform(struct!.showInterface),
    show_interface_stats: cdktf.booleanToTerraform(struct!.showInterfaceStats),
    show_ip_rate_limit: cdktf.booleanToTerraform(struct!.showIpRateLimit),
    show_iproute: cdktf.booleanToTerraform(struct!.showIproute),
    show_iprule: cdktf.booleanToTerraform(struct!.showIprule),
    show_iptables: cdktf.booleanToTerraform(struct!.showIptables),
    show_ipv6_bgp: cdktf.booleanToTerraform(struct!.showIpv6Bgp),
    show_ipv6_disable_on_dad: cdktf.booleanToTerraform(struct!.showIpv6DisableOnDad),
    show_ipv6_neighbor: cdktf.booleanToTerraform(struct!.showIpv6Neighbor),
    show_ipv6_ospf: cdktf.booleanToTerraform(struct!.showIpv6Ospf),
    show_lom: cdktf.booleanToTerraform(struct!.showLom),
    show_mld_version: cdktf.booleanToTerraform(struct!.showMldVersion),
    show_mtu_size: cdktf.booleanToTerraform(struct!.showMtuSize),
    show_named_recv_sock_buf_size: cdktf.booleanToTerraform(struct!.showNamedRecvSockBufSize),
    show_named_tcp_clients_limit: cdktf.booleanToTerraform(struct!.showNamedTcpClientsLimit),
    show_network: cdktf.booleanToTerraform(struct!.showNetwork),
    show_network_connectivity: cdktf.booleanToTerraform(struct!.showNetworkConnectivity),
    show_ospf: cdktf.booleanToTerraform(struct!.showOspf),
    show_remote_console: cdktf.booleanToTerraform(struct!.showRemoteConsole),
    show_routes: cdktf.booleanToTerraform(struct!.showRoutes),
    show_static_routes: cdktf.booleanToTerraform(struct!.showStaticRoutes),
    show_tcp_timestamps: cdktf.booleanToTerraform(struct!.showTcpTimestamps),
    show_traffic_capture_status: cdktf.booleanToTerraform(struct!.showTrafficCaptureStatus),
    show_trafficfiles: cdktf.booleanToTerraform(struct!.showTrafficfiles),
    show_wins_forwarding: cdktf.booleanToTerraform(struct!.showWinsForwarding),
  }
}


export function dataNiosSecurityAdminGroupResultNetworkingShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultNetworkingShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_connection_limit: {
      value: cdktf.booleanToHclTerraform(struct!.showConnectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_connections: {
      value: cdktf.booleanToHclTerraform(struct!.showConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.showDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_interface: {
      value: cdktf.booleanToHclTerraform(struct!.showInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_interface_stats: {
      value: cdktf.booleanToHclTerraform(struct!.showInterfaceStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ip_rate_limit: {
      value: cdktf.booleanToHclTerraform(struct!.showIpRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_iproute: {
      value: cdktf.booleanToHclTerraform(struct!.showIproute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_iprule: {
      value: cdktf.booleanToHclTerraform(struct!.showIprule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_iptables: {
      value: cdktf.booleanToHclTerraform(struct!.showIptables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ipv6_bgp: {
      value: cdktf.booleanToHclTerraform(struct!.showIpv6Bgp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ipv6_disable_on_dad: {
      value: cdktf.booleanToHclTerraform(struct!.showIpv6DisableOnDad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ipv6_neighbor: {
      value: cdktf.booleanToHclTerraform(struct!.showIpv6Neighbor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ipv6_ospf: {
      value: cdktf.booleanToHclTerraform(struct!.showIpv6Ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_lom: {
      value: cdktf.booleanToHclTerraform(struct!.showLom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_mld_version: {
      value: cdktf.booleanToHclTerraform(struct!.showMldVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_mtu_size: {
      value: cdktf.booleanToHclTerraform(struct!.showMtuSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_named_recv_sock_buf_size: {
      value: cdktf.booleanToHclTerraform(struct!.showNamedRecvSockBufSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_named_tcp_clients_limit: {
      value: cdktf.booleanToHclTerraform(struct!.showNamedTcpClientsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_network: {
      value: cdktf.booleanToHclTerraform(struct!.showNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_network_connectivity: {
      value: cdktf.booleanToHclTerraform(struct!.showNetworkConnectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_ospf: {
      value: cdktf.booleanToHclTerraform(struct!.showOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_remote_console: {
      value: cdktf.booleanToHclTerraform(struct!.showRemoteConsole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_routes: {
      value: cdktf.booleanToHclTerraform(struct!.showRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.showStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_tcp_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.showTcpTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_traffic_capture_status: {
      value: cdktf.booleanToHclTerraform(struct!.showTrafficCaptureStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_trafficfiles: {
      value: cdktf.booleanToHclTerraform(struct!.showTrafficfiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_wins_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.showWinsForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultNetworkingShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultNetworkingShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showConnectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.showConnectionLimit = this._showConnectionLimit;
    }
    if (this._showConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.showConnections = this._showConnections;
    }
    if (this._showDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDefaultRoute = this._showDefaultRoute;
    }
    if (this._showInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.showInterface = this._showInterface;
    }
    if (this._showInterfaceStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.showInterfaceStats = this._showInterfaceStats;
    }
    if (this._showIpRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIpRateLimit = this._showIpRateLimit;
    }
    if (this._showIproute !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIproute = this._showIproute;
    }
    if (this._showIprule !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIprule = this._showIprule;
    }
    if (this._showIptables !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIptables = this._showIptables;
    }
    if (this._showIpv6Bgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIpv6Bgp = this._showIpv6Bgp;
    }
    if (this._showIpv6DisableOnDad !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIpv6DisableOnDad = this._showIpv6DisableOnDad;
    }
    if (this._showIpv6Neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIpv6Neighbor = this._showIpv6Neighbor;
    }
    if (this._showIpv6Ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.showIpv6Ospf = this._showIpv6Ospf;
    }
    if (this._showLom !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLom = this._showLom;
    }
    if (this._showMldVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMldVersion = this._showMldVersion;
    }
    if (this._showMtuSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMtuSize = this._showMtuSize;
    }
    if (this._showNamedRecvSockBufSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNamedRecvSockBufSize = this._showNamedRecvSockBufSize;
    }
    if (this._showNamedTcpClientsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNamedTcpClientsLimit = this._showNamedTcpClientsLimit;
    }
    if (this._showNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNetwork = this._showNetwork;
    }
    if (this._showNetworkConnectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.showNetworkConnectivity = this._showNetworkConnectivity;
    }
    if (this._showOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.showOspf = this._showOspf;
    }
    if (this._showRemoteConsole !== undefined) {
      hasAnyValues = true;
      internalValueResult.showRemoteConsole = this._showRemoteConsole;
    }
    if (this._showRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.showRoutes = this._showRoutes;
    }
    if (this._showStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.showStaticRoutes = this._showStaticRoutes;
    }
    if (this._showTcpTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTcpTimestamps = this._showTcpTimestamps;
    }
    if (this._showTrafficCaptureStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTrafficCaptureStatus = this._showTrafficCaptureStatus;
    }
    if (this._showTrafficfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.showTrafficfiles = this._showTrafficfiles;
    }
    if (this._showWinsForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.showWinsForwarding = this._showWinsForwarding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultNetworkingShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showConnectionLimit = undefined;
      this._showConnections = undefined;
      this._showDefaultRoute = undefined;
      this._showInterface = undefined;
      this._showInterfaceStats = undefined;
      this._showIpRateLimit = undefined;
      this._showIproute = undefined;
      this._showIprule = undefined;
      this._showIptables = undefined;
      this._showIpv6Bgp = undefined;
      this._showIpv6DisableOnDad = undefined;
      this._showIpv6Neighbor = undefined;
      this._showIpv6Ospf = undefined;
      this._showLom = undefined;
      this._showMldVersion = undefined;
      this._showMtuSize = undefined;
      this._showNamedRecvSockBufSize = undefined;
      this._showNamedTcpClientsLimit = undefined;
      this._showNetwork = undefined;
      this._showNetworkConnectivity = undefined;
      this._showOspf = undefined;
      this._showRemoteConsole = undefined;
      this._showRoutes = undefined;
      this._showStaticRoutes = undefined;
      this._showTcpTimestamps = undefined;
      this._showTrafficCaptureStatus = undefined;
      this._showTrafficfiles = undefined;
      this._showWinsForwarding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showConnectionLimit = value.showConnectionLimit;
      this._showConnections = value.showConnections;
      this._showDefaultRoute = value.showDefaultRoute;
      this._showInterface = value.showInterface;
      this._showInterfaceStats = value.showInterfaceStats;
      this._showIpRateLimit = value.showIpRateLimit;
      this._showIproute = value.showIproute;
      this._showIprule = value.showIprule;
      this._showIptables = value.showIptables;
      this._showIpv6Bgp = value.showIpv6Bgp;
      this._showIpv6DisableOnDad = value.showIpv6DisableOnDad;
      this._showIpv6Neighbor = value.showIpv6Neighbor;
      this._showIpv6Ospf = value.showIpv6Ospf;
      this._showLom = value.showLom;
      this._showMldVersion = value.showMldVersion;
      this._showMtuSize = value.showMtuSize;
      this._showNamedRecvSockBufSize = value.showNamedRecvSockBufSize;
      this._showNamedTcpClientsLimit = value.showNamedTcpClientsLimit;
      this._showNetwork = value.showNetwork;
      this._showNetworkConnectivity = value.showNetworkConnectivity;
      this._showOspf = value.showOspf;
      this._showRemoteConsole = value.showRemoteConsole;
      this._showRoutes = value.showRoutes;
      this._showStaticRoutes = value.showStaticRoutes;
      this._showTcpTimestamps = value.showTcpTimestamps;
      this._showTrafficCaptureStatus = value.showTrafficCaptureStatus;
      this._showTrafficfiles = value.showTrafficfiles;
      this._showWinsForwarding = value.showWinsForwarding;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_connection_limit - computed: true, optional: true, required: false
  private _showConnectionLimit?: boolean | cdktf.IResolvable; 
  public get showConnectionLimit() {
    return this.getBooleanAttribute('show_connection_limit');
  }
  public set showConnectionLimit(value: boolean | cdktf.IResolvable) {
    this._showConnectionLimit = value;
  }
  public resetShowConnectionLimit() {
    this._showConnectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showConnectionLimitInput() {
    return this._showConnectionLimit;
  }

  // show_connections - computed: true, optional: true, required: false
  private _showConnections?: boolean | cdktf.IResolvable; 
  public get showConnections() {
    return this.getBooleanAttribute('show_connections');
  }
  public set showConnections(value: boolean | cdktf.IResolvable) {
    this._showConnections = value;
  }
  public resetShowConnections() {
    this._showConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showConnectionsInput() {
    return this._showConnections;
  }

  // show_default_route - computed: true, optional: true, required: false
  private _showDefaultRoute?: boolean | cdktf.IResolvable; 
  public get showDefaultRoute() {
    return this.getBooleanAttribute('show_default_route');
  }
  public set showDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._showDefaultRoute = value;
  }
  public resetShowDefaultRoute() {
    this._showDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDefaultRouteInput() {
    return this._showDefaultRoute;
  }

  // show_interface - computed: true, optional: true, required: false
  private _showInterface?: boolean | cdktf.IResolvable; 
  public get showInterface() {
    return this.getBooleanAttribute('show_interface');
  }
  public set showInterface(value: boolean | cdktf.IResolvable) {
    this._showInterface = value;
  }
  public resetShowInterface() {
    this._showInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInterfaceInput() {
    return this._showInterface;
  }

  // show_interface_stats - computed: true, optional: true, required: false
  private _showInterfaceStats?: boolean | cdktf.IResolvable; 
  public get showInterfaceStats() {
    return this.getBooleanAttribute('show_interface_stats');
  }
  public set showInterfaceStats(value: boolean | cdktf.IResolvable) {
    this._showInterfaceStats = value;
  }
  public resetShowInterfaceStats() {
    this._showInterfaceStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInterfaceStatsInput() {
    return this._showInterfaceStats;
  }

  // show_ip_rate_limit - computed: true, optional: true, required: false
  private _showIpRateLimit?: boolean | cdktf.IResolvable; 
  public get showIpRateLimit() {
    return this.getBooleanAttribute('show_ip_rate_limit');
  }
  public set showIpRateLimit(value: boolean | cdktf.IResolvable) {
    this._showIpRateLimit = value;
  }
  public resetShowIpRateLimit() {
    this._showIpRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIpRateLimitInput() {
    return this._showIpRateLimit;
  }

  // show_iproute - computed: true, optional: true, required: false
  private _showIproute?: boolean | cdktf.IResolvable; 
  public get showIproute() {
    return this.getBooleanAttribute('show_iproute');
  }
  public set showIproute(value: boolean | cdktf.IResolvable) {
    this._showIproute = value;
  }
  public resetShowIproute() {
    this._showIproute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIprouteInput() {
    return this._showIproute;
  }

  // show_iprule - computed: true, optional: true, required: false
  private _showIprule?: boolean | cdktf.IResolvable; 
  public get showIprule() {
    return this.getBooleanAttribute('show_iprule');
  }
  public set showIprule(value: boolean | cdktf.IResolvable) {
    this._showIprule = value;
  }
  public resetShowIprule() {
    this._showIprule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIpruleInput() {
    return this._showIprule;
  }

  // show_iptables - computed: true, optional: true, required: false
  private _showIptables?: boolean | cdktf.IResolvable; 
  public get showIptables() {
    return this.getBooleanAttribute('show_iptables');
  }
  public set showIptables(value: boolean | cdktf.IResolvable) {
    this._showIptables = value;
  }
  public resetShowIptables() {
    this._showIptables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIptablesInput() {
    return this._showIptables;
  }

  // show_ipv6_bgp - computed: true, optional: true, required: false
  private _showIpv6Bgp?: boolean | cdktf.IResolvable; 
  public get showIpv6Bgp() {
    return this.getBooleanAttribute('show_ipv6_bgp');
  }
  public set showIpv6Bgp(value: boolean | cdktf.IResolvable) {
    this._showIpv6Bgp = value;
  }
  public resetShowIpv6Bgp() {
    this._showIpv6Bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIpv6BgpInput() {
    return this._showIpv6Bgp;
  }

  // show_ipv6_disable_on_dad - computed: true, optional: true, required: false
  private _showIpv6DisableOnDad?: boolean | cdktf.IResolvable; 
  public get showIpv6DisableOnDad() {
    return this.getBooleanAttribute('show_ipv6_disable_on_dad');
  }
  public set showIpv6DisableOnDad(value: boolean | cdktf.IResolvable) {
    this._showIpv6DisableOnDad = value;
  }
  public resetShowIpv6DisableOnDad() {
    this._showIpv6DisableOnDad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIpv6DisableOnDadInput() {
    return this._showIpv6DisableOnDad;
  }

  // show_ipv6_neighbor - computed: true, optional: true, required: false
  private _showIpv6Neighbor?: boolean | cdktf.IResolvable; 
  public get showIpv6Neighbor() {
    return this.getBooleanAttribute('show_ipv6_neighbor');
  }
  public set showIpv6Neighbor(value: boolean | cdktf.IResolvable) {
    this._showIpv6Neighbor = value;
  }
  public resetShowIpv6Neighbor() {
    this._showIpv6Neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIpv6NeighborInput() {
    return this._showIpv6Neighbor;
  }

  // show_ipv6_ospf - computed: true, optional: true, required: false
  private _showIpv6Ospf?: boolean | cdktf.IResolvable; 
  public get showIpv6Ospf() {
    return this.getBooleanAttribute('show_ipv6_ospf');
  }
  public set showIpv6Ospf(value: boolean | cdktf.IResolvable) {
    this._showIpv6Ospf = value;
  }
  public resetShowIpv6Ospf() {
    this._showIpv6Ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIpv6OspfInput() {
    return this._showIpv6Ospf;
  }

  // show_lom - computed: true, optional: true, required: false
  private _showLom?: boolean | cdktf.IResolvable; 
  public get showLom() {
    return this.getBooleanAttribute('show_lom');
  }
  public set showLom(value: boolean | cdktf.IResolvable) {
    this._showLom = value;
  }
  public resetShowLom() {
    this._showLom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLomInput() {
    return this._showLom;
  }

  // show_mld_version - computed: true, optional: true, required: false
  private _showMldVersion?: boolean | cdktf.IResolvable; 
  public get showMldVersion() {
    return this.getBooleanAttribute('show_mld_version');
  }
  public set showMldVersion(value: boolean | cdktf.IResolvable) {
    this._showMldVersion = value;
  }
  public resetShowMldVersion() {
    this._showMldVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMldVersionInput() {
    return this._showMldVersion;
  }

  // show_mtu_size - computed: true, optional: true, required: false
  private _showMtuSize?: boolean | cdktf.IResolvable; 
  public get showMtuSize() {
    return this.getBooleanAttribute('show_mtu_size');
  }
  public set showMtuSize(value: boolean | cdktf.IResolvable) {
    this._showMtuSize = value;
  }
  public resetShowMtuSize() {
    this._showMtuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMtuSizeInput() {
    return this._showMtuSize;
  }

  // show_named_recv_sock_buf_size - computed: true, optional: true, required: false
  private _showNamedRecvSockBufSize?: boolean | cdktf.IResolvable; 
  public get showNamedRecvSockBufSize() {
    return this.getBooleanAttribute('show_named_recv_sock_buf_size');
  }
  public set showNamedRecvSockBufSize(value: boolean | cdktf.IResolvable) {
    this._showNamedRecvSockBufSize = value;
  }
  public resetShowNamedRecvSockBufSize() {
    this._showNamedRecvSockBufSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNamedRecvSockBufSizeInput() {
    return this._showNamedRecvSockBufSize;
  }

  // show_named_tcp_clients_limit - computed: true, optional: true, required: false
  private _showNamedTcpClientsLimit?: boolean | cdktf.IResolvable; 
  public get showNamedTcpClientsLimit() {
    return this.getBooleanAttribute('show_named_tcp_clients_limit');
  }
  public set showNamedTcpClientsLimit(value: boolean | cdktf.IResolvable) {
    this._showNamedTcpClientsLimit = value;
  }
  public resetShowNamedTcpClientsLimit() {
    this._showNamedTcpClientsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNamedTcpClientsLimitInput() {
    return this._showNamedTcpClientsLimit;
  }

  // show_network - computed: true, optional: true, required: false
  private _showNetwork?: boolean | cdktf.IResolvable; 
  public get showNetwork() {
    return this.getBooleanAttribute('show_network');
  }
  public set showNetwork(value: boolean | cdktf.IResolvable) {
    this._showNetwork = value;
  }
  public resetShowNetwork() {
    this._showNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNetworkInput() {
    return this._showNetwork;
  }

  // show_network_connectivity - computed: true, optional: true, required: false
  private _showNetworkConnectivity?: boolean | cdktf.IResolvable; 
  public get showNetworkConnectivity() {
    return this.getBooleanAttribute('show_network_connectivity');
  }
  public set showNetworkConnectivity(value: boolean | cdktf.IResolvable) {
    this._showNetworkConnectivity = value;
  }
  public resetShowNetworkConnectivity() {
    this._showNetworkConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showNetworkConnectivityInput() {
    return this._showNetworkConnectivity;
  }

  // show_ospf - computed: true, optional: true, required: false
  private _showOspf?: boolean | cdktf.IResolvable; 
  public get showOspf() {
    return this.getBooleanAttribute('show_ospf');
  }
  public set showOspf(value: boolean | cdktf.IResolvable) {
    this._showOspf = value;
  }
  public resetShowOspf() {
    this._showOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOspfInput() {
    return this._showOspf;
  }

  // show_remote_console - computed: true, optional: true, required: false
  private _showRemoteConsole?: boolean | cdktf.IResolvable; 
  public get showRemoteConsole() {
    return this.getBooleanAttribute('show_remote_console');
  }
  public set showRemoteConsole(value: boolean | cdktf.IResolvable) {
    this._showRemoteConsole = value;
  }
  public resetShowRemoteConsole() {
    this._showRemoteConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRemoteConsoleInput() {
    return this._showRemoteConsole;
  }

  // show_routes - computed: true, optional: true, required: false
  private _showRoutes?: boolean | cdktf.IResolvable; 
  public get showRoutes() {
    return this.getBooleanAttribute('show_routes');
  }
  public set showRoutes(value: boolean | cdktf.IResolvable) {
    this._showRoutes = value;
  }
  public resetShowRoutes() {
    this._showRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRoutesInput() {
    return this._showRoutes;
  }

  // show_static_routes - computed: true, optional: true, required: false
  private _showStaticRoutes?: boolean | cdktf.IResolvable; 
  public get showStaticRoutes() {
    return this.getBooleanAttribute('show_static_routes');
  }
  public set showStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._showStaticRoutes = value;
  }
  public resetShowStaticRoutes() {
    this._showStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showStaticRoutesInput() {
    return this._showStaticRoutes;
  }

  // show_tcp_timestamps - computed: true, optional: true, required: false
  private _showTcpTimestamps?: boolean | cdktf.IResolvable; 
  public get showTcpTimestamps() {
    return this.getBooleanAttribute('show_tcp_timestamps');
  }
  public set showTcpTimestamps(value: boolean | cdktf.IResolvable) {
    this._showTcpTimestamps = value;
  }
  public resetShowTcpTimestamps() {
    this._showTcpTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTcpTimestampsInput() {
    return this._showTcpTimestamps;
  }

  // show_traffic_capture_status - computed: true, optional: true, required: false
  private _showTrafficCaptureStatus?: boolean | cdktf.IResolvable; 
  public get showTrafficCaptureStatus() {
    return this.getBooleanAttribute('show_traffic_capture_status');
  }
  public set showTrafficCaptureStatus(value: boolean | cdktf.IResolvable) {
    this._showTrafficCaptureStatus = value;
  }
  public resetShowTrafficCaptureStatus() {
    this._showTrafficCaptureStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTrafficCaptureStatusInput() {
    return this._showTrafficCaptureStatus;
  }

  // show_trafficfiles - computed: true, optional: true, required: false
  private _showTrafficfiles?: boolean | cdktf.IResolvable; 
  public get showTrafficfiles() {
    return this.getBooleanAttribute('show_trafficfiles');
  }
  public set showTrafficfiles(value: boolean | cdktf.IResolvable) {
    this._showTrafficfiles = value;
  }
  public resetShowTrafficfiles() {
    this._showTrafficfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showTrafficfilesInput() {
    return this._showTrafficfiles;
  }

  // show_wins_forwarding - computed: true, optional: true, required: false
  private _showWinsForwarding?: boolean | cdktf.IResolvable; 
  public get showWinsForwarding() {
    return this.getBooleanAttribute('show_wins_forwarding');
  }
  public set showWinsForwarding(value: boolean | cdktf.IResolvable) {
    this._showWinsForwarding = value;
  }
  public resetShowWinsForwarding() {
    this._showWinsForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showWinsForwardingInput() {
    return this._showWinsForwarding;
  }
}
export interface DataNiosSecurityAdminGroupResultPasswordSetting {
  /**
  * The days that password must expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#expire_days DataNiosSecurityAdminGroup#expire_days}
  */
  readonly expireDays?: number;
  /**
  * Whether password expiry enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#expire_enable DataNiosSecurityAdminGroup#expire_enable}
  */
  readonly expireEnable?: boolean | cdktf.IResolvable;
  /**
  * Days to show up reminder prior to expiration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#reminder_days DataNiosSecurityAdminGroup#reminder_days}
  */
  readonly reminderDays?: number;
}

export function dataNiosSecurityAdminGroupResultPasswordSettingToTerraform(struct?: DataNiosSecurityAdminGroupResultPasswordSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire_days: cdktf.numberToTerraform(struct!.expireDays),
    expire_enable: cdktf.booleanToTerraform(struct!.expireEnable),
    reminder_days: cdktf.numberToTerraform(struct!.reminderDays),
  }
}


export function dataNiosSecurityAdminGroupResultPasswordSettingToHclTerraform(struct?: DataNiosSecurityAdminGroupResultPasswordSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire_days: {
      value: cdktf.numberToHclTerraform(struct!.expireDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expire_enable: {
      value: cdktf.booleanToHclTerraform(struct!.expireEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reminder_days: {
      value: cdktf.numberToHclTerraform(struct!.reminderDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultPasswordSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultPasswordSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expireDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireDays = this._expireDays;
    }
    if (this._expireEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireEnable = this._expireEnable;
    }
    if (this._reminderDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.reminderDays = this._reminderDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultPasswordSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expireDays = undefined;
      this._expireEnable = undefined;
      this._reminderDays = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expireDays = value.expireDays;
      this._expireEnable = value.expireEnable;
      this._reminderDays = value.reminderDays;
    }
  }

  // expire_days - computed: true, optional: true, required: false
  private _expireDays?: number; 
  public get expireDays() {
    return this.getNumberAttribute('expire_days');
  }
  public set expireDays(value: number) {
    this._expireDays = value;
  }
  public resetExpireDays() {
    this._expireDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDaysInput() {
    return this._expireDays;
  }

  // expire_enable - computed: true, optional: true, required: false
  private _expireEnable?: boolean | cdktf.IResolvable; 
  public get expireEnable() {
    return this.getBooleanAttribute('expire_enable');
  }
  public set expireEnable(value: boolean | cdktf.IResolvable) {
    this._expireEnable = value;
  }
  public resetExpireEnable() {
    this._expireEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireEnableInput() {
    return this._expireEnable;
  }

  // reminder_days - computed: true, optional: true, required: false
  private _reminderDays?: number; 
  public get reminderDays() {
    return this.getNumberAttribute('reminder_days');
  }
  public set reminderDays(value: number) {
    this._reminderDays = value;
  }
  public resetReminderDays() {
    this._reminderDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderDaysInput() {
    return this._reminderDays;
  }
}
export interface DataNiosSecurityAdminGroupResultSamlSetting {
  /**
  * Whether or not auto create user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#auto_create_user DataNiosSecurityAdminGroup#auto_create_user}
  */
  readonly autoCreateUser?: boolean | cdktf.IResolvable;
  /**
  * Whether or not persist auto created user after logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#persist_auto_created_user DataNiosSecurityAdminGroup#persist_auto_created_user}
  */
  readonly persistAutoCreatedUser?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultSamlSettingToTerraform(struct?: DataNiosSecurityAdminGroupResultSamlSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_user: cdktf.booleanToTerraform(struct!.autoCreateUser),
    persist_auto_created_user: cdktf.booleanToTerraform(struct!.persistAutoCreatedUser),
  }
}


export function dataNiosSecurityAdminGroupResultSamlSettingToHclTerraform(struct?: DataNiosSecurityAdminGroupResultSamlSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_user: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    persist_auto_created_user: {
      value: cdktf.booleanToHclTerraform(struct!.persistAutoCreatedUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultSamlSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultSamlSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateUser = this._autoCreateUser;
    }
    if (this._persistAutoCreatedUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistAutoCreatedUser = this._persistAutoCreatedUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultSamlSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoCreateUser = undefined;
      this._persistAutoCreatedUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoCreateUser = value.autoCreateUser;
      this._persistAutoCreatedUser = value.persistAutoCreatedUser;
    }
  }

  // auto_create_user - computed: true, optional: true, required: false
  private _autoCreateUser?: boolean | cdktf.IResolvable; 
  public get autoCreateUser() {
    return this.getBooleanAttribute('auto_create_user');
  }
  public set autoCreateUser(value: boolean | cdktf.IResolvable) {
    this._autoCreateUser = value;
  }
  public resetAutoCreateUser() {
    this._autoCreateUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateUserInput() {
    return this._autoCreateUser;
  }

  // persist_auto_created_user - computed: true, optional: true, required: false
  private _persistAutoCreatedUser?: boolean | cdktf.IResolvable; 
  public get persistAutoCreatedUser() {
    return this.getBooleanAttribute('persist_auto_created_user');
  }
  public set persistAutoCreatedUser(value: boolean | cdktf.IResolvable) {
    this._persistAutoCreatedUser = value;
  }
  public resetPersistAutoCreatedUser() {
    this._persistAutoCreatedUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistAutoCreatedUserInput() {
    return this._persistAutoCreatedUser;
  }
}
export interface DataNiosSecurityAdminGroupResultSecuritySetCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_adp DataNiosSecurityAdminGroup#set_adp}
  */
  readonly setAdp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_adp_debug DataNiosSecurityAdminGroup#set_adp_debug}
  */
  readonly setAdpDebug?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_apache_https_cert DataNiosSecurityAdminGroup#set_apache_https_cert}
  */
  readonly setApacheHttpsCert?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_cc_mode DataNiosSecurityAdminGroup#set_cc_mode}
  */
  readonly setCcMode?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_certificate_auth_admins DataNiosSecurityAdminGroup#set_certificate_auth_admins}
  */
  readonly setCertificateAuthAdmins?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_certificate_auth_services DataNiosSecurityAdminGroup#set_certificate_auth_services}
  */
  readonly setCertificateAuthServices?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_check_auth_ns DataNiosSecurityAdminGroup#set_check_auth_ns}
  */
  readonly setCheckAuthNs?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_check_ssl_certificate DataNiosSecurityAdminGroup#set_check_ssl_certificate}
  */
  readonly setCheckSslCertificate?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_disable_https_cert_regeneration DataNiosSecurityAdminGroup#set_disable_https_cert_regeneration}
  */
  readonly setDisableHttpsCertRegeneration?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_fips_mode DataNiosSecurityAdminGroup#set_fips_mode}
  */
  readonly setFipsMode?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_reporting_cert DataNiosSecurityAdminGroup#set_reporting_cert}
  */
  readonly setReportingCert?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_security DataNiosSecurityAdminGroup#set_security}
  */
  readonly setSecurity?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_session_timeout DataNiosSecurityAdminGroup#set_session_timeout}
  */
  readonly setSessionTimeout?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_subscriber_secure_data DataNiosSecurityAdminGroup#set_subscriber_secure_data}
  */
  readonly setSubscriberSecureData?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_support_access DataNiosSecurityAdminGroup#set_support_access}
  */
  readonly setSupportAccess?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_support_install DataNiosSecurityAdminGroup#set_support_install}
  */
  readonly setSupportInstall?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_support_timeout DataNiosSecurityAdminGroup#set_support_timeout}
  */
  readonly setSupportTimeout?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#set_update_rabbitmq_password DataNiosSecurityAdminGroup#set_update_rabbitmq_password}
  */
  readonly setUpdateRabbitmqPassword?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultSecuritySetCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultSecuritySetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_adp: cdktf.booleanToTerraform(struct!.setAdp),
    set_adp_debug: cdktf.booleanToTerraform(struct!.setAdpDebug),
    set_apache_https_cert: cdktf.booleanToTerraform(struct!.setApacheHttpsCert),
    set_cc_mode: cdktf.booleanToTerraform(struct!.setCcMode),
    set_certificate_auth_admins: cdktf.booleanToTerraform(struct!.setCertificateAuthAdmins),
    set_certificate_auth_services: cdktf.booleanToTerraform(struct!.setCertificateAuthServices),
    set_check_auth_ns: cdktf.booleanToTerraform(struct!.setCheckAuthNs),
    set_check_ssl_certificate: cdktf.booleanToTerraform(struct!.setCheckSslCertificate),
    set_disable_https_cert_regeneration: cdktf.booleanToTerraform(struct!.setDisableHttpsCertRegeneration),
    set_fips_mode: cdktf.booleanToTerraform(struct!.setFipsMode),
    set_reporting_cert: cdktf.booleanToTerraform(struct!.setReportingCert),
    set_security: cdktf.booleanToTerraform(struct!.setSecurity),
    set_session_timeout: cdktf.booleanToTerraform(struct!.setSessionTimeout),
    set_subscriber_secure_data: cdktf.booleanToTerraform(struct!.setSubscriberSecureData),
    set_support_access: cdktf.booleanToTerraform(struct!.setSupportAccess),
    set_support_install: cdktf.booleanToTerraform(struct!.setSupportInstall),
    set_support_timeout: cdktf.booleanToTerraform(struct!.setSupportTimeout),
    set_update_rabbitmq_password: cdktf.booleanToTerraform(struct!.setUpdateRabbitmqPassword),
  }
}


export function dataNiosSecurityAdminGroupResultSecuritySetCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultSecuritySetCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_adp: {
      value: cdktf.booleanToHclTerraform(struct!.setAdp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_adp_debug: {
      value: cdktf.booleanToHclTerraform(struct!.setAdpDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_apache_https_cert: {
      value: cdktf.booleanToHclTerraform(struct!.setApacheHttpsCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_cc_mode: {
      value: cdktf.booleanToHclTerraform(struct!.setCcMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_certificate_auth_admins: {
      value: cdktf.booleanToHclTerraform(struct!.setCertificateAuthAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_certificate_auth_services: {
      value: cdktf.booleanToHclTerraform(struct!.setCertificateAuthServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_check_auth_ns: {
      value: cdktf.booleanToHclTerraform(struct!.setCheckAuthNs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_check_ssl_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.setCheckSslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_disable_https_cert_regeneration: {
      value: cdktf.booleanToHclTerraform(struct!.setDisableHttpsCertRegeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_fips_mode: {
      value: cdktf.booleanToHclTerraform(struct!.setFipsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_reporting_cert: {
      value: cdktf.booleanToHclTerraform(struct!.setReportingCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_security: {
      value: cdktf.booleanToHclTerraform(struct!.setSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_session_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.setSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_subscriber_secure_data: {
      value: cdktf.booleanToHclTerraform(struct!.setSubscriberSecureData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_support_access: {
      value: cdktf.booleanToHclTerraform(struct!.setSupportAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_support_install: {
      value: cdktf.booleanToHclTerraform(struct!.setSupportInstall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_support_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.setSupportTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_update_rabbitmq_password: {
      value: cdktf.booleanToHclTerraform(struct!.setUpdateRabbitmqPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultSecuritySetCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultSecuritySetCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setAdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAdp = this._setAdp;
    }
    if (this._setAdpDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAdpDebug = this._setAdpDebug;
    }
    if (this._setApacheHttpsCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.setApacheHttpsCert = this._setApacheHttpsCert;
    }
    if (this._setCcMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCcMode = this._setCcMode;
    }
    if (this._setCertificateAuthAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCertificateAuthAdmins = this._setCertificateAuthAdmins;
    }
    if (this._setCertificateAuthServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCertificateAuthServices = this._setCertificateAuthServices;
    }
    if (this._setCheckAuthNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCheckAuthNs = this._setCheckAuthNs;
    }
    if (this._setCheckSslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.setCheckSslCertificate = this._setCheckSslCertificate;
    }
    if (this._setDisableHttpsCertRegeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.setDisableHttpsCertRegeneration = this._setDisableHttpsCertRegeneration;
    }
    if (this._setFipsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.setFipsMode = this._setFipsMode;
    }
    if (this._setReportingCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.setReportingCert = this._setReportingCert;
    }
    if (this._setSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSecurity = this._setSecurity;
    }
    if (this._setSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSessionTimeout = this._setSessionTimeout;
    }
    if (this._setSubscriberSecureData !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSubscriberSecureData = this._setSubscriberSecureData;
    }
    if (this._setSupportAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSupportAccess = this._setSupportAccess;
    }
    if (this._setSupportInstall !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSupportInstall = this._setSupportInstall;
    }
    if (this._setSupportTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSupportTimeout = this._setSupportTimeout;
    }
    if (this._setUpdateRabbitmqPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.setUpdateRabbitmqPassword = this._setUpdateRabbitmqPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultSecuritySetCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._setAdp = undefined;
      this._setAdpDebug = undefined;
      this._setApacheHttpsCert = undefined;
      this._setCcMode = undefined;
      this._setCertificateAuthAdmins = undefined;
      this._setCertificateAuthServices = undefined;
      this._setCheckAuthNs = undefined;
      this._setCheckSslCertificate = undefined;
      this._setDisableHttpsCertRegeneration = undefined;
      this._setFipsMode = undefined;
      this._setReportingCert = undefined;
      this._setSecurity = undefined;
      this._setSessionTimeout = undefined;
      this._setSubscriberSecureData = undefined;
      this._setSupportAccess = undefined;
      this._setSupportInstall = undefined;
      this._setSupportTimeout = undefined;
      this._setUpdateRabbitmqPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._setAdp = value.setAdp;
      this._setAdpDebug = value.setAdpDebug;
      this._setApacheHttpsCert = value.setApacheHttpsCert;
      this._setCcMode = value.setCcMode;
      this._setCertificateAuthAdmins = value.setCertificateAuthAdmins;
      this._setCertificateAuthServices = value.setCertificateAuthServices;
      this._setCheckAuthNs = value.setCheckAuthNs;
      this._setCheckSslCertificate = value.setCheckSslCertificate;
      this._setDisableHttpsCertRegeneration = value.setDisableHttpsCertRegeneration;
      this._setFipsMode = value.setFipsMode;
      this._setReportingCert = value.setReportingCert;
      this._setSecurity = value.setSecurity;
      this._setSessionTimeout = value.setSessionTimeout;
      this._setSubscriberSecureData = value.setSubscriberSecureData;
      this._setSupportAccess = value.setSupportAccess;
      this._setSupportInstall = value.setSupportInstall;
      this._setSupportTimeout = value.setSupportTimeout;
      this._setUpdateRabbitmqPassword = value.setUpdateRabbitmqPassword;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // set_adp - computed: true, optional: true, required: false
  private _setAdp?: boolean | cdktf.IResolvable; 
  public get setAdp() {
    return this.getBooleanAttribute('set_adp');
  }
  public set setAdp(value: boolean | cdktf.IResolvable) {
    this._setAdp = value;
  }
  public resetSetAdp() {
    this._setAdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAdpInput() {
    return this._setAdp;
  }

  // set_adp_debug - computed: true, optional: true, required: false
  private _setAdpDebug?: boolean | cdktf.IResolvable; 
  public get setAdpDebug() {
    return this.getBooleanAttribute('set_adp_debug');
  }
  public set setAdpDebug(value: boolean | cdktf.IResolvable) {
    this._setAdpDebug = value;
  }
  public resetSetAdpDebug() {
    this._setAdpDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAdpDebugInput() {
    return this._setAdpDebug;
  }

  // set_apache_https_cert - computed: true, optional: true, required: false
  private _setApacheHttpsCert?: boolean | cdktf.IResolvable; 
  public get setApacheHttpsCert() {
    return this.getBooleanAttribute('set_apache_https_cert');
  }
  public set setApacheHttpsCert(value: boolean | cdktf.IResolvable) {
    this._setApacheHttpsCert = value;
  }
  public resetSetApacheHttpsCert() {
    this._setApacheHttpsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setApacheHttpsCertInput() {
    return this._setApacheHttpsCert;
  }

  // set_cc_mode - computed: true, optional: true, required: false
  private _setCcMode?: boolean | cdktf.IResolvable; 
  public get setCcMode() {
    return this.getBooleanAttribute('set_cc_mode');
  }
  public set setCcMode(value: boolean | cdktf.IResolvable) {
    this._setCcMode = value;
  }
  public resetSetCcMode() {
    this._setCcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCcModeInput() {
    return this._setCcMode;
  }

  // set_certificate_auth_admins - computed: true, optional: true, required: false
  private _setCertificateAuthAdmins?: boolean | cdktf.IResolvable; 
  public get setCertificateAuthAdmins() {
    return this.getBooleanAttribute('set_certificate_auth_admins');
  }
  public set setCertificateAuthAdmins(value: boolean | cdktf.IResolvable) {
    this._setCertificateAuthAdmins = value;
  }
  public resetSetCertificateAuthAdmins() {
    this._setCertificateAuthAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCertificateAuthAdminsInput() {
    return this._setCertificateAuthAdmins;
  }

  // set_certificate_auth_services - computed: true, optional: true, required: false
  private _setCertificateAuthServices?: boolean | cdktf.IResolvable; 
  public get setCertificateAuthServices() {
    return this.getBooleanAttribute('set_certificate_auth_services');
  }
  public set setCertificateAuthServices(value: boolean | cdktf.IResolvable) {
    this._setCertificateAuthServices = value;
  }
  public resetSetCertificateAuthServices() {
    this._setCertificateAuthServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCertificateAuthServicesInput() {
    return this._setCertificateAuthServices;
  }

  // set_check_auth_ns - computed: true, optional: true, required: false
  private _setCheckAuthNs?: boolean | cdktf.IResolvable; 
  public get setCheckAuthNs() {
    return this.getBooleanAttribute('set_check_auth_ns');
  }
  public set setCheckAuthNs(value: boolean | cdktf.IResolvable) {
    this._setCheckAuthNs = value;
  }
  public resetSetCheckAuthNs() {
    this._setCheckAuthNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCheckAuthNsInput() {
    return this._setCheckAuthNs;
  }

  // set_check_ssl_certificate - computed: true, optional: true, required: false
  private _setCheckSslCertificate?: boolean | cdktf.IResolvable; 
  public get setCheckSslCertificate() {
    return this.getBooleanAttribute('set_check_ssl_certificate');
  }
  public set setCheckSslCertificate(value: boolean | cdktf.IResolvable) {
    this._setCheckSslCertificate = value;
  }
  public resetSetCheckSslCertificate() {
    this._setCheckSslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCheckSslCertificateInput() {
    return this._setCheckSslCertificate;
  }

  // set_disable_https_cert_regeneration - computed: true, optional: true, required: false
  private _setDisableHttpsCertRegeneration?: boolean | cdktf.IResolvable; 
  public get setDisableHttpsCertRegeneration() {
    return this.getBooleanAttribute('set_disable_https_cert_regeneration');
  }
  public set setDisableHttpsCertRegeneration(value: boolean | cdktf.IResolvable) {
    this._setDisableHttpsCertRegeneration = value;
  }
  public resetSetDisableHttpsCertRegeneration() {
    this._setDisableHttpsCertRegeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setDisableHttpsCertRegenerationInput() {
    return this._setDisableHttpsCertRegeneration;
  }

  // set_fips_mode - computed: true, optional: true, required: false
  private _setFipsMode?: boolean | cdktf.IResolvable; 
  public get setFipsMode() {
    return this.getBooleanAttribute('set_fips_mode');
  }
  public set setFipsMode(value: boolean | cdktf.IResolvable) {
    this._setFipsMode = value;
  }
  public resetSetFipsMode() {
    this._setFipsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setFipsModeInput() {
    return this._setFipsMode;
  }

  // set_reporting_cert - computed: true, optional: true, required: false
  private _setReportingCert?: boolean | cdktf.IResolvable; 
  public get setReportingCert() {
    return this.getBooleanAttribute('set_reporting_cert');
  }
  public set setReportingCert(value: boolean | cdktf.IResolvable) {
    this._setReportingCert = value;
  }
  public resetSetReportingCert() {
    this._setReportingCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setReportingCertInput() {
    return this._setReportingCert;
  }

  // set_security - computed: true, optional: true, required: false
  private _setSecurity?: boolean | cdktf.IResolvable; 
  public get setSecurity() {
    return this.getBooleanAttribute('set_security');
  }
  public set setSecurity(value: boolean | cdktf.IResolvable) {
    this._setSecurity = value;
  }
  public resetSetSecurity() {
    this._setSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSecurityInput() {
    return this._setSecurity;
  }

  // set_session_timeout - computed: true, optional: true, required: false
  private _setSessionTimeout?: boolean | cdktf.IResolvable; 
  public get setSessionTimeout() {
    return this.getBooleanAttribute('set_session_timeout');
  }
  public set setSessionTimeout(value: boolean | cdktf.IResolvable) {
    this._setSessionTimeout = value;
  }
  public resetSetSessionTimeout() {
    this._setSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSessionTimeoutInput() {
    return this._setSessionTimeout;
  }

  // set_subscriber_secure_data - computed: true, optional: true, required: false
  private _setSubscriberSecureData?: boolean | cdktf.IResolvable; 
  public get setSubscriberSecureData() {
    return this.getBooleanAttribute('set_subscriber_secure_data');
  }
  public set setSubscriberSecureData(value: boolean | cdktf.IResolvable) {
    this._setSubscriberSecureData = value;
  }
  public resetSetSubscriberSecureData() {
    this._setSubscriberSecureData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSubscriberSecureDataInput() {
    return this._setSubscriberSecureData;
  }

  // set_support_access - computed: true, optional: true, required: false
  private _setSupportAccess?: boolean | cdktf.IResolvable; 
  public get setSupportAccess() {
    return this.getBooleanAttribute('set_support_access');
  }
  public set setSupportAccess(value: boolean | cdktf.IResolvable) {
    this._setSupportAccess = value;
  }
  public resetSetSupportAccess() {
    this._setSupportAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSupportAccessInput() {
    return this._setSupportAccess;
  }

  // set_support_install - computed: true, optional: true, required: false
  private _setSupportInstall?: boolean | cdktf.IResolvable; 
  public get setSupportInstall() {
    return this.getBooleanAttribute('set_support_install');
  }
  public set setSupportInstall(value: boolean | cdktf.IResolvable) {
    this._setSupportInstall = value;
  }
  public resetSetSupportInstall() {
    this._setSupportInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSupportInstallInput() {
    return this._setSupportInstall;
  }

  // set_support_timeout - computed: true, optional: true, required: false
  private _setSupportTimeout?: boolean | cdktf.IResolvable; 
  public get setSupportTimeout() {
    return this.getBooleanAttribute('set_support_timeout');
  }
  public set setSupportTimeout(value: boolean | cdktf.IResolvable) {
    this._setSupportTimeout = value;
  }
  public resetSetSupportTimeout() {
    this._setSupportTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSupportTimeoutInput() {
    return this._setSupportTimeout;
  }

  // set_update_rabbitmq_password - computed: true, optional: true, required: false
  private _setUpdateRabbitmqPassword?: boolean | cdktf.IResolvable; 
  public get setUpdateRabbitmqPassword() {
    return this.getBooleanAttribute('set_update_rabbitmq_password');
  }
  public set setUpdateRabbitmqPassword(value: boolean | cdktf.IResolvable) {
    this._setUpdateRabbitmqPassword = value;
  }
  public resetSetUpdateRabbitmqPassword() {
    this._setUpdateRabbitmqPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setUpdateRabbitmqPasswordInput() {
    return this._setUpdateRabbitmqPassword;
  }
}
export interface DataNiosSecurityAdminGroupResultSecurityShowCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_adp DataNiosSecurityAdminGroup#show_adp}
  */
  readonly showAdp?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_adp_debug DataNiosSecurityAdminGroup#show_adp_debug}
  */
  readonly showAdpDebug?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_cc_mode DataNiosSecurityAdminGroup#show_cc_mode}
  */
  readonly showCcMode?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_certificate_auth_admins DataNiosSecurityAdminGroup#show_certificate_auth_admins}
  */
  readonly showCertificateAuthAdmins?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_certificate_auth_services DataNiosSecurityAdminGroup#show_certificate_auth_services}
  */
  readonly showCertificateAuthServices?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_check_auth_ns DataNiosSecurityAdminGroup#show_check_auth_ns}
  */
  readonly showCheckAuthNs?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_check_ssl_certificate DataNiosSecurityAdminGroup#show_check_ssl_certificate}
  */
  readonly showCheckSslCertificate?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_fips_mode DataNiosSecurityAdminGroup#show_fips_mode}
  */
  readonly showFipsMode?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_security DataNiosSecurityAdminGroup#show_security}
  */
  readonly showSecurity?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_session_timeout DataNiosSecurityAdminGroup#show_session_timeout}
  */
  readonly showSessionTimeout?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_subscriber_secure_data DataNiosSecurityAdminGroup#show_subscriber_secure_data}
  */
  readonly showSubscriberSecureData?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_support_access DataNiosSecurityAdminGroup#show_support_access}
  */
  readonly showSupportAccess?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_support_timeout DataNiosSecurityAdminGroup#show_support_timeout}
  */
  readonly showSupportTimeout?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#show_vpn_cert_dates DataNiosSecurityAdminGroup#show_vpn_cert_dates}
  */
  readonly showVpnCertDates?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultSecurityShowCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultSecurityShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    show_adp: cdktf.booleanToTerraform(struct!.showAdp),
    show_adp_debug: cdktf.booleanToTerraform(struct!.showAdpDebug),
    show_cc_mode: cdktf.booleanToTerraform(struct!.showCcMode),
    show_certificate_auth_admins: cdktf.booleanToTerraform(struct!.showCertificateAuthAdmins),
    show_certificate_auth_services: cdktf.booleanToTerraform(struct!.showCertificateAuthServices),
    show_check_auth_ns: cdktf.booleanToTerraform(struct!.showCheckAuthNs),
    show_check_ssl_certificate: cdktf.booleanToTerraform(struct!.showCheckSslCertificate),
    show_fips_mode: cdktf.booleanToTerraform(struct!.showFipsMode),
    show_security: cdktf.booleanToTerraform(struct!.showSecurity),
    show_session_timeout: cdktf.booleanToTerraform(struct!.showSessionTimeout),
    show_subscriber_secure_data: cdktf.booleanToTerraform(struct!.showSubscriberSecureData),
    show_support_access: cdktf.booleanToTerraform(struct!.showSupportAccess),
    show_support_timeout: cdktf.booleanToTerraform(struct!.showSupportTimeout),
    show_vpn_cert_dates: cdktf.booleanToTerraform(struct!.showVpnCertDates),
  }
}


export function dataNiosSecurityAdminGroupResultSecurityShowCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultSecurityShowCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    show_adp: {
      value: cdktf.booleanToHclTerraform(struct!.showAdp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_adp_debug: {
      value: cdktf.booleanToHclTerraform(struct!.showAdpDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_cc_mode: {
      value: cdktf.booleanToHclTerraform(struct!.showCcMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_certificate_auth_admins: {
      value: cdktf.booleanToHclTerraform(struct!.showCertificateAuthAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_certificate_auth_services: {
      value: cdktf.booleanToHclTerraform(struct!.showCertificateAuthServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_check_auth_ns: {
      value: cdktf.booleanToHclTerraform(struct!.showCheckAuthNs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_check_ssl_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.showCheckSslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_fips_mode: {
      value: cdktf.booleanToHclTerraform(struct!.showFipsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_security: {
      value: cdktf.booleanToHclTerraform(struct!.showSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_session_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.showSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_subscriber_secure_data: {
      value: cdktf.booleanToHclTerraform(struct!.showSubscriberSecureData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_support_access: {
      value: cdktf.booleanToHclTerraform(struct!.showSupportAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_support_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.showSupportTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_vpn_cert_dates: {
      value: cdktf.booleanToHclTerraform(struct!.showVpnCertDates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultSecurityShowCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultSecurityShowCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._showAdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAdp = this._showAdp;
    }
    if (this._showAdpDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAdpDebug = this._showAdpDebug;
    }
    if (this._showCcMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCcMode = this._showCcMode;
    }
    if (this._showCertificateAuthAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCertificateAuthAdmins = this._showCertificateAuthAdmins;
    }
    if (this._showCertificateAuthServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCertificateAuthServices = this._showCertificateAuthServices;
    }
    if (this._showCheckAuthNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCheckAuthNs = this._showCheckAuthNs;
    }
    if (this._showCheckSslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.showCheckSslCertificate = this._showCheckSslCertificate;
    }
    if (this._showFipsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.showFipsMode = this._showFipsMode;
    }
    if (this._showSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSecurity = this._showSecurity;
    }
    if (this._showSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSessionTimeout = this._showSessionTimeout;
    }
    if (this._showSubscriberSecureData !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSubscriberSecureData = this._showSubscriberSecureData;
    }
    if (this._showSupportAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSupportAccess = this._showSupportAccess;
    }
    if (this._showSupportTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSupportTimeout = this._showSupportTimeout;
    }
    if (this._showVpnCertDates !== undefined) {
      hasAnyValues = true;
      internalValueResult.showVpnCertDates = this._showVpnCertDates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultSecurityShowCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._showAdp = undefined;
      this._showAdpDebug = undefined;
      this._showCcMode = undefined;
      this._showCertificateAuthAdmins = undefined;
      this._showCertificateAuthServices = undefined;
      this._showCheckAuthNs = undefined;
      this._showCheckSslCertificate = undefined;
      this._showFipsMode = undefined;
      this._showSecurity = undefined;
      this._showSessionTimeout = undefined;
      this._showSubscriberSecureData = undefined;
      this._showSupportAccess = undefined;
      this._showSupportTimeout = undefined;
      this._showVpnCertDates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._showAdp = value.showAdp;
      this._showAdpDebug = value.showAdpDebug;
      this._showCcMode = value.showCcMode;
      this._showCertificateAuthAdmins = value.showCertificateAuthAdmins;
      this._showCertificateAuthServices = value.showCertificateAuthServices;
      this._showCheckAuthNs = value.showCheckAuthNs;
      this._showCheckSslCertificate = value.showCheckSslCertificate;
      this._showFipsMode = value.showFipsMode;
      this._showSecurity = value.showSecurity;
      this._showSessionTimeout = value.showSessionTimeout;
      this._showSubscriberSecureData = value.showSubscriberSecureData;
      this._showSupportAccess = value.showSupportAccess;
      this._showSupportTimeout = value.showSupportTimeout;
      this._showVpnCertDates = value.showVpnCertDates;
    }
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // show_adp - computed: true, optional: true, required: false
  private _showAdp?: boolean | cdktf.IResolvable; 
  public get showAdp() {
    return this.getBooleanAttribute('show_adp');
  }
  public set showAdp(value: boolean | cdktf.IResolvable) {
    this._showAdp = value;
  }
  public resetShowAdp() {
    this._showAdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAdpInput() {
    return this._showAdp;
  }

  // show_adp_debug - computed: true, optional: true, required: false
  private _showAdpDebug?: boolean | cdktf.IResolvable; 
  public get showAdpDebug() {
    return this.getBooleanAttribute('show_adp_debug');
  }
  public set showAdpDebug(value: boolean | cdktf.IResolvable) {
    this._showAdpDebug = value;
  }
  public resetShowAdpDebug() {
    this._showAdpDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAdpDebugInput() {
    return this._showAdpDebug;
  }

  // show_cc_mode - computed: true, optional: true, required: false
  private _showCcMode?: boolean | cdktf.IResolvable; 
  public get showCcMode() {
    return this.getBooleanAttribute('show_cc_mode');
  }
  public set showCcMode(value: boolean | cdktf.IResolvable) {
    this._showCcMode = value;
  }
  public resetShowCcMode() {
    this._showCcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCcModeInput() {
    return this._showCcMode;
  }

  // show_certificate_auth_admins - computed: true, optional: true, required: false
  private _showCertificateAuthAdmins?: boolean | cdktf.IResolvable; 
  public get showCertificateAuthAdmins() {
    return this.getBooleanAttribute('show_certificate_auth_admins');
  }
  public set showCertificateAuthAdmins(value: boolean | cdktf.IResolvable) {
    this._showCertificateAuthAdmins = value;
  }
  public resetShowCertificateAuthAdmins() {
    this._showCertificateAuthAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCertificateAuthAdminsInput() {
    return this._showCertificateAuthAdmins;
  }

  // show_certificate_auth_services - computed: true, optional: true, required: false
  private _showCertificateAuthServices?: boolean | cdktf.IResolvable; 
  public get showCertificateAuthServices() {
    return this.getBooleanAttribute('show_certificate_auth_services');
  }
  public set showCertificateAuthServices(value: boolean | cdktf.IResolvable) {
    this._showCertificateAuthServices = value;
  }
  public resetShowCertificateAuthServices() {
    this._showCertificateAuthServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCertificateAuthServicesInput() {
    return this._showCertificateAuthServices;
  }

  // show_check_auth_ns - computed: true, optional: true, required: false
  private _showCheckAuthNs?: boolean | cdktf.IResolvable; 
  public get showCheckAuthNs() {
    return this.getBooleanAttribute('show_check_auth_ns');
  }
  public set showCheckAuthNs(value: boolean | cdktf.IResolvable) {
    this._showCheckAuthNs = value;
  }
  public resetShowCheckAuthNs() {
    this._showCheckAuthNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCheckAuthNsInput() {
    return this._showCheckAuthNs;
  }

  // show_check_ssl_certificate - computed: true, optional: true, required: false
  private _showCheckSslCertificate?: boolean | cdktf.IResolvable; 
  public get showCheckSslCertificate() {
    return this.getBooleanAttribute('show_check_ssl_certificate');
  }
  public set showCheckSslCertificate(value: boolean | cdktf.IResolvable) {
    this._showCheckSslCertificate = value;
  }
  public resetShowCheckSslCertificate() {
    this._showCheckSslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showCheckSslCertificateInput() {
    return this._showCheckSslCertificate;
  }

  // show_fips_mode - computed: true, optional: true, required: false
  private _showFipsMode?: boolean | cdktf.IResolvable; 
  public get showFipsMode() {
    return this.getBooleanAttribute('show_fips_mode');
  }
  public set showFipsMode(value: boolean | cdktf.IResolvable) {
    this._showFipsMode = value;
  }
  public resetShowFipsMode() {
    this._showFipsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showFipsModeInput() {
    return this._showFipsMode;
  }

  // show_security - computed: true, optional: true, required: false
  private _showSecurity?: boolean | cdktf.IResolvable; 
  public get showSecurity() {
    return this.getBooleanAttribute('show_security');
  }
  public set showSecurity(value: boolean | cdktf.IResolvable) {
    this._showSecurity = value;
  }
  public resetShowSecurity() {
    this._showSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSecurityInput() {
    return this._showSecurity;
  }

  // show_session_timeout - computed: true, optional: true, required: false
  private _showSessionTimeout?: boolean | cdktf.IResolvable; 
  public get showSessionTimeout() {
    return this.getBooleanAttribute('show_session_timeout');
  }
  public set showSessionTimeout(value: boolean | cdktf.IResolvable) {
    this._showSessionTimeout = value;
  }
  public resetShowSessionTimeout() {
    this._showSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSessionTimeoutInput() {
    return this._showSessionTimeout;
  }

  // show_subscriber_secure_data - computed: true, optional: true, required: false
  private _showSubscriberSecureData?: boolean | cdktf.IResolvable; 
  public get showSubscriberSecureData() {
    return this.getBooleanAttribute('show_subscriber_secure_data');
  }
  public set showSubscriberSecureData(value: boolean | cdktf.IResolvable) {
    this._showSubscriberSecureData = value;
  }
  public resetShowSubscriberSecureData() {
    this._showSubscriberSecureData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSubscriberSecureDataInput() {
    return this._showSubscriberSecureData;
  }

  // show_support_access - computed: true, optional: true, required: false
  private _showSupportAccess?: boolean | cdktf.IResolvable; 
  public get showSupportAccess() {
    return this.getBooleanAttribute('show_support_access');
  }
  public set showSupportAccess(value: boolean | cdktf.IResolvable) {
    this._showSupportAccess = value;
  }
  public resetShowSupportAccess() {
    this._showSupportAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSupportAccessInput() {
    return this._showSupportAccess;
  }

  // show_support_timeout - computed: true, optional: true, required: false
  private _showSupportTimeout?: boolean | cdktf.IResolvable; 
  public get showSupportTimeout() {
    return this.getBooleanAttribute('show_support_timeout');
  }
  public set showSupportTimeout(value: boolean | cdktf.IResolvable) {
    this._showSupportTimeout = value;
  }
  public resetShowSupportTimeout() {
    this._showSupportTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSupportTimeoutInput() {
    return this._showSupportTimeout;
  }

  // show_vpn_cert_dates - computed: true, optional: true, required: false
  private _showVpnCertDates?: boolean | cdktf.IResolvable; 
  public get showVpnCertDates() {
    return this.getBooleanAttribute('show_vpn_cert_dates');
  }
  public set showVpnCertDates(value: boolean | cdktf.IResolvable) {
    this._showVpnCertDates = value;
  }
  public resetShowVpnCertDates() {
    this._showVpnCertDates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showVpnCertDatesInput() {
    return this._showVpnCertDates;
  }
}
export interface DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommands {
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#console DataNiosSecurityAdminGroup#console}
  */
  readonly console?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#dig DataNiosSecurityAdminGroup#dig}
  */
  readonly dig?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#ping DataNiosSecurityAdminGroup#ping}
  */
  readonly ping?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#ping6 DataNiosSecurityAdminGroup#ping6}
  */
  readonly ping6?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#rotate DataNiosSecurityAdminGroup#rotate}
  */
  readonly rotate?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#snmpget DataNiosSecurityAdminGroup#snmpget}
  */
  readonly snmpget?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#snmpwalk DataNiosSecurityAdminGroup#snmpwalk}
  */
  readonly snmpwalk?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#strace DataNiosSecurityAdminGroup#strace}
  */
  readonly strace?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#tracepath DataNiosSecurityAdminGroup#tracepath}
  */
  readonly tracepath?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#traceroute DataNiosSecurityAdminGroup#traceroute}
  */
  readonly traceroute?: boolean | cdktf.IResolvable;
  /**
  * If True then CLI user has permission to run the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#traffic_capture DataNiosSecurityAdminGroup#traffic_capture}
  */
  readonly trafficCapture?: boolean | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultTroubleShootingToplevelCommandsToTerraform(struct?: DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    console: cdktf.booleanToTerraform(struct!.console),
    dig: cdktf.booleanToTerraform(struct!.dig),
    ping: cdktf.booleanToTerraform(struct!.ping),
    ping6: cdktf.booleanToTerraform(struct!.ping6),
    rotate: cdktf.booleanToTerraform(struct!.rotate),
    snmpget: cdktf.booleanToTerraform(struct!.snmpget),
    snmpwalk: cdktf.booleanToTerraform(struct!.snmpwalk),
    strace: cdktf.booleanToTerraform(struct!.strace),
    tracepath: cdktf.booleanToTerraform(struct!.tracepath),
    traceroute: cdktf.booleanToTerraform(struct!.traceroute),
    traffic_capture: cdktf.booleanToTerraform(struct!.trafficCapture),
  }
}


export function dataNiosSecurityAdminGroupResultTroubleShootingToplevelCommandsToHclTerraform(struct?: DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    console: {
      value: cdktf.booleanToHclTerraform(struct!.console),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dig: {
      value: cdktf.booleanToHclTerraform(struct!.dig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ping: {
      value: cdktf.booleanToHclTerraform(struct!.ping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ping6: {
      value: cdktf.booleanToHclTerraform(struct!.ping6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rotate: {
      value: cdktf.booleanToHclTerraform(struct!.rotate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snmpget: {
      value: cdktf.booleanToHclTerraform(struct!.snmpget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snmpwalk: {
      value: cdktf.booleanToHclTerraform(struct!.snmpwalk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strace: {
      value: cdktf.booleanToHclTerraform(struct!.strace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracepath: {
      value: cdktf.booleanToHclTerraform(struct!.tracepath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traceroute: {
      value: cdktf.booleanToHclTerraform(struct!.traceroute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traffic_capture: {
      value: cdktf.booleanToHclTerraform(struct!.trafficCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._console !== undefined) {
      hasAnyValues = true;
      internalValueResult.console = this._console;
    }
    if (this._dig !== undefined) {
      hasAnyValues = true;
      internalValueResult.dig = this._dig;
    }
    if (this._ping !== undefined) {
      hasAnyValues = true;
      internalValueResult.ping = this._ping;
    }
    if (this._ping6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ping6 = this._ping6;
    }
    if (this._rotate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotate = this._rotate;
    }
    if (this._snmpget !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpget = this._snmpget;
    }
    if (this._snmpwalk !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpwalk = this._snmpwalk;
    }
    if (this._strace !== undefined) {
      hasAnyValues = true;
      internalValueResult.strace = this._strace;
    }
    if (this._tracepath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracepath = this._tracepath;
    }
    if (this._traceroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.traceroute = this._traceroute;
    }
    if (this._trafficCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficCapture = this._trafficCapture;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._console = undefined;
      this._dig = undefined;
      this._ping = undefined;
      this._ping6 = undefined;
      this._rotate = undefined;
      this._snmpget = undefined;
      this._snmpwalk = undefined;
      this._strace = undefined;
      this._tracepath = undefined;
      this._traceroute = undefined;
      this._trafficCapture = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._console = value.console;
      this._dig = value.dig;
      this._ping = value.ping;
      this._ping6 = value.ping6;
      this._rotate = value.rotate;
      this._snmpget = value.snmpget;
      this._snmpwalk = value.snmpwalk;
      this._strace = value.strace;
      this._tracepath = value.tracepath;
      this._traceroute = value.traceroute;
      this._trafficCapture = value.trafficCapture;
    }
  }

  // console - computed: true, optional: true, required: false
  private _console?: boolean | cdktf.IResolvable; 
  public get console() {
    return this.getBooleanAttribute('console');
  }
  public set console(value: boolean | cdktf.IResolvable) {
    this._console = value;
  }
  public resetConsole() {
    this._console = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console;
  }

  // dig - computed: true, optional: true, required: false
  private _dig?: boolean | cdktf.IResolvable; 
  public get dig() {
    return this.getBooleanAttribute('dig');
  }
  public set dig(value: boolean | cdktf.IResolvable) {
    this._dig = value;
  }
  public resetDig() {
    this._dig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digInput() {
    return this._dig;
  }

  // disable_all - computed: true, optional: false, required: false
  public get disableAll() {
    return this.getBooleanAttribute('disable_all');
  }

  // enable_all - computed: true, optional: false, required: false
  public get enableAll() {
    return this.getBooleanAttribute('enable_all');
  }

  // ping - computed: true, optional: true, required: false
  private _ping?: boolean | cdktf.IResolvable; 
  public get ping() {
    return this.getBooleanAttribute('ping');
  }
  public set ping(value: boolean | cdktf.IResolvable) {
    this._ping = value;
  }
  public resetPing() {
    this._ping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingInput() {
    return this._ping;
  }

  // ping6 - computed: true, optional: true, required: false
  private _ping6?: boolean | cdktf.IResolvable; 
  public get ping6() {
    return this.getBooleanAttribute('ping6');
  }
  public set ping6(value: boolean | cdktf.IResolvable) {
    this._ping6 = value;
  }
  public resetPing6() {
    this._ping6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ping6Input() {
    return this._ping6;
  }

  // rotate - computed: true, optional: true, required: false
  private _rotate?: boolean | cdktf.IResolvable; 
  public get rotate() {
    return this.getBooleanAttribute('rotate');
  }
  public set rotate(value: boolean | cdktf.IResolvable) {
    this._rotate = value;
  }
  public resetRotate() {
    this._rotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateInput() {
    return this._rotate;
  }

  // snmpget - computed: true, optional: true, required: false
  private _snmpget?: boolean | cdktf.IResolvable; 
  public get snmpget() {
    return this.getBooleanAttribute('snmpget');
  }
  public set snmpget(value: boolean | cdktf.IResolvable) {
    this._snmpget = value;
  }
  public resetSnmpget() {
    this._snmpget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpgetInput() {
    return this._snmpget;
  }

  // snmpwalk - computed: true, optional: true, required: false
  private _snmpwalk?: boolean | cdktf.IResolvable; 
  public get snmpwalk() {
    return this.getBooleanAttribute('snmpwalk');
  }
  public set snmpwalk(value: boolean | cdktf.IResolvable) {
    this._snmpwalk = value;
  }
  public resetSnmpwalk() {
    this._snmpwalk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpwalkInput() {
    return this._snmpwalk;
  }

  // strace - computed: true, optional: true, required: false
  private _strace?: boolean | cdktf.IResolvable; 
  public get strace() {
    return this.getBooleanAttribute('strace');
  }
  public set strace(value: boolean | cdktf.IResolvable) {
    this._strace = value;
  }
  public resetStrace() {
    this._strace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get straceInput() {
    return this._strace;
  }

  // tracepath - computed: true, optional: true, required: false
  private _tracepath?: boolean | cdktf.IResolvable; 
  public get tracepath() {
    return this.getBooleanAttribute('tracepath');
  }
  public set tracepath(value: boolean | cdktf.IResolvable) {
    this._tracepath = value;
  }
  public resetTracepath() {
    this._tracepath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracepathInput() {
    return this._tracepath;
  }

  // traceroute - computed: true, optional: true, required: false
  private _traceroute?: boolean | cdktf.IResolvable; 
  public get traceroute() {
    return this.getBooleanAttribute('traceroute');
  }
  public set traceroute(value: boolean | cdktf.IResolvable) {
    this._traceroute = value;
  }
  public resetTraceroute() {
    this._traceroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracerouteInput() {
    return this._traceroute;
  }

  // traffic_capture - computed: true, optional: true, required: false
  private _trafficCapture?: boolean | cdktf.IResolvable; 
  public get trafficCapture() {
    return this.getBooleanAttribute('traffic_capture');
  }
  public set trafficCapture(value: boolean | cdktf.IResolvable) {
    this._trafficCapture = value;
  }
  public resetTrafficCapture() {
    this._trafficCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficCaptureInput() {
    return this._trafficCapture;
  }
}
export interface DataNiosSecurityAdminGroupResultUserAccess {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#address DataNiosSecurityAdminGroup#address}
  */
  readonly address?: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#permission DataNiosSecurityAdminGroup#permission}
  */
  readonly permission?: string;
  /**
  * The reference of the ACL object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#ref DataNiosSecurityAdminGroup#ref}
  */
  readonly ref?: string;
}

export function dataNiosSecurityAdminGroupResultUserAccessToTerraform(struct?: DataNiosSecurityAdminGroupResultUserAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
    ref: cdktf.stringToTerraform(struct!.ref),
  }
}


export function dataNiosSecurityAdminGroupResultUserAccessToHclTerraform(struct?: DataNiosSecurityAdminGroupResultUserAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultUserAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosSecurityAdminGroupResultUserAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResultUserAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
      this._ref = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._permission = value.permission;
      this._ref = value.ref;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // permission - computed: true, optional: true, required: false
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

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }
}

export class DataNiosSecurityAdminGroupResultUserAccessList extends cdktf.ComplexList {
  public internalValue? : DataNiosSecurityAdminGroupResultUserAccess[] | cdktf.IResolvable

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
  public get(index: number): DataNiosSecurityAdminGroupResultUserAccessOutputReference {
    return new DataNiosSecurityAdminGroupResultUserAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosSecurityAdminGroupResult {
  /**
  * Access methods specify whether an admin group can use the GUI and the API to access the appliance or to send Taxii messages to the appliance. Note that API includes both the Perl API and RESTful API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#access_method DataNiosSecurityAdminGroup#access_method}
  */
  readonly accessMethod?: string[];
  /**
  * Admin set commands for the admin command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#admin_set_commands DataNiosSecurityAdminGroup#admin_set_commands}
  */
  readonly adminSetCommands?: DataNiosSecurityAdminGroupResultAdminSetCommands;
  /**
  * Admin show commands for the admin command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#admin_show_commands DataNiosSecurityAdminGroup#admin_show_commands}
  */
  readonly adminShowCommands?: DataNiosSecurityAdminGroupResultAdminShowCommands;
  /**
  * Admin toplevel commands for the admin command group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#admin_toplevel_commands DataNiosSecurityAdminGroup#admin_toplevel_commands}
  */
  readonly adminToplevelCommands?: DataNiosSecurityAdminGroupResultAdminToplevelCommands;
  /**
  * Cloud set commands for the cloud command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#cloud_set_commands DataNiosSecurityAdminGroup#cloud_set_commands}
  */
  readonly cloudSetCommands?: DataNiosSecurityAdminGroupResultCloudSetCommands;
  /**
  * Cloud show commands for admin group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#cloud_show_commands DataNiosSecurityAdminGroup#cloud_show_commands}
  */
  readonly cloudShowCommands?: DataNiosSecurityAdminGroupResultCloudShowCommands;
  /**
  * Comment for the Admin Group; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#comment DataNiosSecurityAdminGroup#comment}
  */
  readonly comment?: string;
  /**
  * Database show commands for admin group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#database_set_commands DataNiosSecurityAdminGroup#database_set_commands}
  */
  readonly databaseSetCommands?: DataNiosSecurityAdminGroupResultDatabaseSetCommands;
  /**
  * Database show commands for the database command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#database_show_commands DataNiosSecurityAdminGroup#database_show_commands}
  */
  readonly databaseShowCommands?: DataNiosSecurityAdminGroupResultDatabaseShowCommands;
  /**
  * Dhcp set commands for the dhcp command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#dhcp_set_commands DataNiosSecurityAdminGroup#dhcp_set_commands}
  */
  readonly dhcpSetCommands?: DataNiosSecurityAdminGroupResultDhcpSetCommands;
  /**
  * Dhcp show commands for the dhcp command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#dhcp_show_commands DataNiosSecurityAdminGroup#dhcp_show_commands}
  */
  readonly dhcpShowCommands?: DataNiosSecurityAdminGroupResultDhcpShowCommands;
  /**
  * Determines whether the Admin Group is disabled or not. When this is set to False, the Admin Group is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#disable DataNiosSecurityAdminGroup#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Disable concurrent login feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#disable_concurrent_login DataNiosSecurityAdminGroup#disable_concurrent_login}
  */
  readonly disableConcurrentLogin?: boolean | cdktf.IResolvable;
  /**
  * Dns set commands for the dns command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#dns_set_commands DataNiosSecurityAdminGroup#dns_set_commands}
  */
  readonly dnsSetCommands?: DataNiosSecurityAdminGroupResultDnsSetCommands;
  /**
  * Dns show commands for the dns command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#dns_show_commands DataNiosSecurityAdminGroup#dns_show_commands}
  */
  readonly dnsShowCommands?: DataNiosSecurityAdminGroupResultDnsShowCommands;
  /**
  * Dns toplevel commands for the dns command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#dns_toplevel_commands DataNiosSecurityAdminGroup#dns_toplevel_commands}
  */
  readonly dnsToplevelCommands?: DataNiosSecurityAdminGroupResultDnsToplevelCommands;
  /**
  * Docker set commands for the docker command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#docker_set_commands DataNiosSecurityAdminGroup#docker_set_commands}
  */
  readonly dockerSetCommands?: DataNiosSecurityAdminGroupResultDockerSetCommands;
  /**
  * Docker show commands for the docker command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#docker_show_commands DataNiosSecurityAdminGroup#docker_show_commands}
  */
  readonly dockerShowCommands?: DataNiosSecurityAdminGroupResultDockerShowCommands;
  /**
  * The e-mail addresses for the Admin Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#email_addresses DataNiosSecurityAdminGroup#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#extattrs DataNiosSecurityAdminGroup#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * Grid set commands for the grid command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#grid_set_commands DataNiosSecurityAdminGroup#grid_set_commands}
  */
  readonly gridSetCommands?: DataNiosSecurityAdminGroupResultGridSetCommands;
  /**
  * Grid show commands for the grid command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#grid_show_commands DataNiosSecurityAdminGroup#grid_show_commands}
  */
  readonly gridShowCommands?: DataNiosSecurityAdminGroupResultGridShowCommands;
  /**
  * The Admin group inactivity lockout settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#inactivity_lockout_setting DataNiosSecurityAdminGroup#inactivity_lockout_setting}
  */
  readonly inactivityLockoutSetting?: DataNiosSecurityAdminGroupResultInactivityLockoutSetting;
  /**
  * Set commands for the licensing command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#licensing_set_commands DataNiosSecurityAdminGroup#licensing_set_commands}
  */
  readonly licensingSetCommands?: DataNiosSecurityAdminGroupResultLicensingSetCommands;
  /**
  * Show commands for the licensing command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#licensing_show_commands DataNiosSecurityAdminGroup#licensing_show_commands}
  */
  readonly licensingShowCommands?: DataNiosSecurityAdminGroupResultLicensingShowCommands;
  /**
  * This struct specifies security policy settings in admin group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#lockout_setting DataNiosSecurityAdminGroup#lockout_setting}
  */
  readonly lockoutSetting?: DataNiosSecurityAdminGroupResultLockoutSetting;
  /**
  * Machine control toplevel commands for the machine control command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#machine_control_toplevel_commands DataNiosSecurityAdminGroup#machine_control_toplevel_commands}
  */
  readonly machineControlToplevelCommands?: DataNiosSecurityAdminGroupResultMachineControlToplevelCommands;
  /**
  * The name of the Admin Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#name DataNiosSecurityAdminGroup#name}
  */
  readonly name: string;
  /**
  * Set commands for the networking command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#networking_set_commands DataNiosSecurityAdminGroup#networking_set_commands}
  */
  readonly networkingSetCommands?: DataNiosSecurityAdminGroupResultNetworkingSetCommands;
  /**
  * Show commands for the networking command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#networking_show_commands DataNiosSecurityAdminGroup#networking_show_commands}
  */
  readonly networkingShowCommands?: DataNiosSecurityAdminGroupResultNetworkingShowCommands;
  /**
  * The Admin Group password settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#password_setting DataNiosSecurityAdminGroup#password_setting}
  */
  readonly passwordSetting?: DataNiosSecurityAdminGroupResultPasswordSetting;
  /**
  * The names of roles this Admin Group applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#roles DataNiosSecurityAdminGroup#roles}
  */
  readonly roles?: string[];
  /**
  * The Admin Group SAML settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#saml_setting DataNiosSecurityAdminGroup#saml_setting}
  */
  readonly samlSetting?: DataNiosSecurityAdminGroupResultSamlSetting;
  /**
  * Set commands for the security command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#security_set_commands DataNiosSecurityAdminGroup#security_set_commands}
  */
  readonly securitySetCommands?: DataNiosSecurityAdminGroupResultSecuritySetCommands;
  /**
  * Show commands for the security command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#security_show_commands DataNiosSecurityAdminGroup#security_show_commands}
  */
  readonly securityShowCommands?: DataNiosSecurityAdminGroupResultSecurityShowCommands;
  /**
  * Determines whether this Admin Group is a superuser group. A superuser group can perform all operations on the appliance, and can view and configure all types of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#superuser DataNiosSecurityAdminGroup#superuser}
  */
  readonly superuser?: boolean | cdktf.IResolvable;
  /**
  * Toplevel commands for the troubleshooting command group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#trouble_shooting_toplevel_commands DataNiosSecurityAdminGroup#trouble_shooting_toplevel_commands}
  */
  readonly troubleShootingToplevelCommands?: DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommands;
  /**
  * This is the use flag for account inactivity lockout settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#use_account_inactivity_lockout_enable DataNiosSecurityAdminGroup#use_account_inactivity_lockout_enable}
  */
  readonly useAccountInactivityLockoutEnable?: boolean | cdktf.IResolvable;
  /**
  * Whether to override grid concurrent login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#use_disable_concurrent_login DataNiosSecurityAdminGroup#use_disable_concurrent_login}
  */
  readonly useDisableConcurrentLogin?: boolean | cdktf.IResolvable;
  /**
  * Whether to override grid sequential lockout setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#use_lockout_setting DataNiosSecurityAdminGroup#use_lockout_setting}
  */
  readonly useLockoutSetting?: boolean | cdktf.IResolvable;
  /**
  * Whether grid password expiry setting should be override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#use_password_setting DataNiosSecurityAdminGroup#use_password_setting}
  */
  readonly usePasswordSetting?: boolean | cdktf.IResolvable;
  /**
  * The access control items for this Admin Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#user_access DataNiosSecurityAdminGroup#user_access}
  */
  readonly userAccess?: DataNiosSecurityAdminGroupResultUserAccess[] | cdktf.IResolvable;
}

export function dataNiosSecurityAdminGroupResultToTerraform(struct?: DataNiosSecurityAdminGroupResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_method: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessMethod),
    admin_set_commands: dataNiosSecurityAdminGroupResultAdminSetCommandsToTerraform(struct!.adminSetCommands),
    admin_show_commands: dataNiosSecurityAdminGroupResultAdminShowCommandsToTerraform(struct!.adminShowCommands),
    admin_toplevel_commands: dataNiosSecurityAdminGroupResultAdminToplevelCommandsToTerraform(struct!.adminToplevelCommands),
    cloud_set_commands: dataNiosSecurityAdminGroupResultCloudSetCommandsToTerraform(struct!.cloudSetCommands),
    cloud_show_commands: dataNiosSecurityAdminGroupResultCloudShowCommandsToTerraform(struct!.cloudShowCommands),
    comment: cdktf.stringToTerraform(struct!.comment),
    database_set_commands: dataNiosSecurityAdminGroupResultDatabaseSetCommandsToTerraform(struct!.databaseSetCommands),
    database_show_commands: dataNiosSecurityAdminGroupResultDatabaseShowCommandsToTerraform(struct!.databaseShowCommands),
    dhcp_set_commands: dataNiosSecurityAdminGroupResultDhcpSetCommandsToTerraform(struct!.dhcpSetCommands),
    dhcp_show_commands: dataNiosSecurityAdminGroupResultDhcpShowCommandsToTerraform(struct!.dhcpShowCommands),
    disable: cdktf.booleanToTerraform(struct!.disable),
    disable_concurrent_login: cdktf.booleanToTerraform(struct!.disableConcurrentLogin),
    dns_set_commands: dataNiosSecurityAdminGroupResultDnsSetCommandsToTerraform(struct!.dnsSetCommands),
    dns_show_commands: dataNiosSecurityAdminGroupResultDnsShowCommandsToTerraform(struct!.dnsShowCommands),
    dns_toplevel_commands: dataNiosSecurityAdminGroupResultDnsToplevelCommandsToTerraform(struct!.dnsToplevelCommands),
    docker_set_commands: dataNiosSecurityAdminGroupResultDockerSetCommandsToTerraform(struct!.dockerSetCommands),
    docker_show_commands: dataNiosSecurityAdminGroupResultDockerShowCommandsToTerraform(struct!.dockerShowCommands),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailAddresses),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    grid_set_commands: dataNiosSecurityAdminGroupResultGridSetCommandsToTerraform(struct!.gridSetCommands),
    grid_show_commands: dataNiosSecurityAdminGroupResultGridShowCommandsToTerraform(struct!.gridShowCommands),
    inactivity_lockout_setting: dataNiosSecurityAdminGroupResultInactivityLockoutSettingToTerraform(struct!.inactivityLockoutSetting),
    licensing_set_commands: dataNiosSecurityAdminGroupResultLicensingSetCommandsToTerraform(struct!.licensingSetCommands),
    licensing_show_commands: dataNiosSecurityAdminGroupResultLicensingShowCommandsToTerraform(struct!.licensingShowCommands),
    lockout_setting: dataNiosSecurityAdminGroupResultLockoutSettingToTerraform(struct!.lockoutSetting),
    machine_control_toplevel_commands: dataNiosSecurityAdminGroupResultMachineControlToplevelCommandsToTerraform(struct!.machineControlToplevelCommands),
    name: cdktf.stringToTerraform(struct!.name),
    networking_set_commands: dataNiosSecurityAdminGroupResultNetworkingSetCommandsToTerraform(struct!.networkingSetCommands),
    networking_show_commands: dataNiosSecurityAdminGroupResultNetworkingShowCommandsToTerraform(struct!.networkingShowCommands),
    password_setting: dataNiosSecurityAdminGroupResultPasswordSettingToTerraform(struct!.passwordSetting),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    saml_setting: dataNiosSecurityAdminGroupResultSamlSettingToTerraform(struct!.samlSetting),
    security_set_commands: dataNiosSecurityAdminGroupResultSecuritySetCommandsToTerraform(struct!.securitySetCommands),
    security_show_commands: dataNiosSecurityAdminGroupResultSecurityShowCommandsToTerraform(struct!.securityShowCommands),
    superuser: cdktf.booleanToTerraform(struct!.superuser),
    trouble_shooting_toplevel_commands: dataNiosSecurityAdminGroupResultTroubleShootingToplevelCommandsToTerraform(struct!.troubleShootingToplevelCommands),
    use_account_inactivity_lockout_enable: cdktf.booleanToTerraform(struct!.useAccountInactivityLockoutEnable),
    use_disable_concurrent_login: cdktf.booleanToTerraform(struct!.useDisableConcurrentLogin),
    use_lockout_setting: cdktf.booleanToTerraform(struct!.useLockoutSetting),
    use_password_setting: cdktf.booleanToTerraform(struct!.usePasswordSetting),
    user_access: cdktf.listMapper(dataNiosSecurityAdminGroupResultUserAccessToTerraform, false)(struct!.userAccess),
  }
}


export function dataNiosSecurityAdminGroupResultToHclTerraform(struct?: DataNiosSecurityAdminGroupResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_method: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessMethod),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    admin_set_commands: {
      value: dataNiosSecurityAdminGroupResultAdminSetCommandsToHclTerraform(struct!.adminSetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultAdminSetCommands",
    },
    admin_show_commands: {
      value: dataNiosSecurityAdminGroupResultAdminShowCommandsToHclTerraform(struct!.adminShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultAdminShowCommands",
    },
    admin_toplevel_commands: {
      value: dataNiosSecurityAdminGroupResultAdminToplevelCommandsToHclTerraform(struct!.adminToplevelCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultAdminToplevelCommands",
    },
    cloud_set_commands: {
      value: dataNiosSecurityAdminGroupResultCloudSetCommandsToHclTerraform(struct!.cloudSetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultCloudSetCommands",
    },
    cloud_show_commands: {
      value: dataNiosSecurityAdminGroupResultCloudShowCommandsToHclTerraform(struct!.cloudShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultCloudShowCommands",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_set_commands: {
      value: dataNiosSecurityAdminGroupResultDatabaseSetCommandsToHclTerraform(struct!.databaseSetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultDatabaseSetCommands",
    },
    database_show_commands: {
      value: dataNiosSecurityAdminGroupResultDatabaseShowCommandsToHclTerraform(struct!.databaseShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultDatabaseShowCommands",
    },
    dhcp_set_commands: {
      value: dataNiosSecurityAdminGroupResultDhcpSetCommandsToHclTerraform(struct!.dhcpSetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultDhcpSetCommands",
    },
    dhcp_show_commands: {
      value: dataNiosSecurityAdminGroupResultDhcpShowCommandsToHclTerraform(struct!.dhcpShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultDhcpShowCommands",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_concurrent_login: {
      value: cdktf.booleanToHclTerraform(struct!.disableConcurrentLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_set_commands: {
      value: dataNiosSecurityAdminGroupResultDnsSetCommandsToHclTerraform(struct!.dnsSetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultDnsSetCommands",
    },
    dns_show_commands: {
      value: dataNiosSecurityAdminGroupResultDnsShowCommandsToHclTerraform(struct!.dnsShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultDnsShowCommands",
    },
    dns_toplevel_commands: {
      value: dataNiosSecurityAdminGroupResultDnsToplevelCommandsToHclTerraform(struct!.dnsToplevelCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultDnsToplevelCommands",
    },
    docker_set_commands: {
      value: dataNiosSecurityAdminGroupResultDockerSetCommandsToHclTerraform(struct!.dockerSetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultDockerSetCommands",
    },
    docker_show_commands: {
      value: dataNiosSecurityAdminGroupResultDockerShowCommandsToHclTerraform(struct!.dockerShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultDockerShowCommands",
    },
    email_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    grid_set_commands: {
      value: dataNiosSecurityAdminGroupResultGridSetCommandsToHclTerraform(struct!.gridSetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultGridSetCommands",
    },
    grid_show_commands: {
      value: dataNiosSecurityAdminGroupResultGridShowCommandsToHclTerraform(struct!.gridShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultGridShowCommands",
    },
    inactivity_lockout_setting: {
      value: dataNiosSecurityAdminGroupResultInactivityLockoutSettingToHclTerraform(struct!.inactivityLockoutSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultInactivityLockoutSetting",
    },
    licensing_set_commands: {
      value: dataNiosSecurityAdminGroupResultLicensingSetCommandsToHclTerraform(struct!.licensingSetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultLicensingSetCommands",
    },
    licensing_show_commands: {
      value: dataNiosSecurityAdminGroupResultLicensingShowCommandsToHclTerraform(struct!.licensingShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultLicensingShowCommands",
    },
    lockout_setting: {
      value: dataNiosSecurityAdminGroupResultLockoutSettingToHclTerraform(struct!.lockoutSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultLockoutSetting",
    },
    machine_control_toplevel_commands: {
      value: dataNiosSecurityAdminGroupResultMachineControlToplevelCommandsToHclTerraform(struct!.machineControlToplevelCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultMachineControlToplevelCommands",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networking_set_commands: {
      value: dataNiosSecurityAdminGroupResultNetworkingSetCommandsToHclTerraform(struct!.networkingSetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultNetworkingSetCommands",
    },
    networking_show_commands: {
      value: dataNiosSecurityAdminGroupResultNetworkingShowCommandsToHclTerraform(struct!.networkingShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultNetworkingShowCommands",
    },
    password_setting: {
      value: dataNiosSecurityAdminGroupResultPasswordSettingToHclTerraform(struct!.passwordSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultPasswordSetting",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    saml_setting: {
      value: dataNiosSecurityAdminGroupResultSamlSettingToHclTerraform(struct!.samlSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultSamlSetting",
    },
    security_set_commands: {
      value: dataNiosSecurityAdminGroupResultSecuritySetCommandsToHclTerraform(struct!.securitySetCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultSecuritySetCommands",
    },
    security_show_commands: {
      value: dataNiosSecurityAdminGroupResultSecurityShowCommandsToHclTerraform(struct!.securityShowCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultSecurityShowCommands",
    },
    superuser: {
      value: cdktf.booleanToHclTerraform(struct!.superuser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trouble_shooting_toplevel_commands: {
      value: dataNiosSecurityAdminGroupResultTroubleShootingToplevelCommandsToHclTerraform(struct!.troubleShootingToplevelCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommands",
    },
    use_account_inactivity_lockout_enable: {
      value: cdktf.booleanToHclTerraform(struct!.useAccountInactivityLockoutEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_disable_concurrent_login: {
      value: cdktf.booleanToHclTerraform(struct!.useDisableConcurrentLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_lockout_setting: {
      value: cdktf.booleanToHclTerraform(struct!.useLockoutSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_password_setting: {
      value: cdktf.booleanToHclTerraform(struct!.usePasswordSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_access: {
      value: cdktf.listMapperHcl(dataNiosSecurityAdminGroupResultUserAccessToHclTerraform, false)(struct!.userAccess),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosSecurityAdminGroupResultUserAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosSecurityAdminGroupResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosSecurityAdminGroupResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMethod = this._accessMethod;
    }
    if (this._adminSetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminSetCommands = this._adminSetCommands?.internalValue;
    }
    if (this._adminShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminShowCommands = this._adminShowCommands?.internalValue;
    }
    if (this._adminToplevelCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminToplevelCommands = this._adminToplevelCommands?.internalValue;
    }
    if (this._cloudSetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSetCommands = this._cloudSetCommands?.internalValue;
    }
    if (this._cloudShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudShowCommands = this._cloudShowCommands?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._databaseSetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSetCommands = this._databaseSetCommands?.internalValue;
    }
    if (this._databaseShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseShowCommands = this._databaseShowCommands?.internalValue;
    }
    if (this._dhcpSetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSetCommands = this._dhcpSetCommands?.internalValue;
    }
    if (this._dhcpShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpShowCommands = this._dhcpShowCommands?.internalValue;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._disableConcurrentLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConcurrentLogin = this._disableConcurrentLogin;
    }
    if (this._dnsSetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSetCommands = this._dnsSetCommands?.internalValue;
    }
    if (this._dnsShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsShowCommands = this._dnsShowCommands?.internalValue;
    }
    if (this._dnsToplevelCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsToplevelCommands = this._dnsToplevelCommands?.internalValue;
    }
    if (this._dockerSetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerSetCommands = this._dockerSetCommands?.internalValue;
    }
    if (this._dockerShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerShowCommands = this._dockerShowCommands?.internalValue;
    }
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._gridSetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridSetCommands = this._gridSetCommands?.internalValue;
    }
    if (this._gridShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridShowCommands = this._gridShowCommands?.internalValue;
    }
    if (this._inactivityLockoutSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityLockoutSetting = this._inactivityLockoutSetting?.internalValue;
    }
    if (this._licensingSetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licensingSetCommands = this._licensingSetCommands?.internalValue;
    }
    if (this._licensingShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.licensingShowCommands = this._licensingShowCommands?.internalValue;
    }
    if (this._lockoutSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockoutSetting = this._lockoutSetting?.internalValue;
    }
    if (this._machineControlToplevelCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineControlToplevelCommands = this._machineControlToplevelCommands?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkingSetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkingSetCommands = this._networkingSetCommands?.internalValue;
    }
    if (this._networkingShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkingShowCommands = this._networkingShowCommands?.internalValue;
    }
    if (this._passwordSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSetting = this._passwordSetting?.internalValue;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._samlSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlSetting = this._samlSetting?.internalValue;
    }
    if (this._securitySetCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securitySetCommands = this._securitySetCommands?.internalValue;
    }
    if (this._securityShowCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityShowCommands = this._securityShowCommands?.internalValue;
    }
    if (this._superuser !== undefined) {
      hasAnyValues = true;
      internalValueResult.superuser = this._superuser;
    }
    if (this._troubleShootingToplevelCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.troubleShootingToplevelCommands = this._troubleShootingToplevelCommands?.internalValue;
    }
    if (this._useAccountInactivityLockoutEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAccountInactivityLockoutEnable = this._useAccountInactivityLockoutEnable;
    }
    if (this._useDisableConcurrentLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDisableConcurrentLogin = this._useDisableConcurrentLogin;
    }
    if (this._useLockoutSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLockoutSetting = this._useLockoutSetting;
    }
    if (this._usePasswordSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePasswordSetting = this._usePasswordSetting;
    }
    if (this._userAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccess = this._userAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosSecurityAdminGroupResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessMethod = undefined;
      this._adminSetCommands.internalValue = undefined;
      this._adminShowCommands.internalValue = undefined;
      this._adminToplevelCommands.internalValue = undefined;
      this._cloudSetCommands.internalValue = undefined;
      this._cloudShowCommands.internalValue = undefined;
      this._comment = undefined;
      this._databaseSetCommands.internalValue = undefined;
      this._databaseShowCommands.internalValue = undefined;
      this._dhcpSetCommands.internalValue = undefined;
      this._dhcpShowCommands.internalValue = undefined;
      this._disable = undefined;
      this._disableConcurrentLogin = undefined;
      this._dnsSetCommands.internalValue = undefined;
      this._dnsShowCommands.internalValue = undefined;
      this._dnsToplevelCommands.internalValue = undefined;
      this._dockerSetCommands.internalValue = undefined;
      this._dockerShowCommands.internalValue = undefined;
      this._emailAddresses = undefined;
      this._extattrs = undefined;
      this._gridSetCommands.internalValue = undefined;
      this._gridShowCommands.internalValue = undefined;
      this._inactivityLockoutSetting.internalValue = undefined;
      this._licensingSetCommands.internalValue = undefined;
      this._licensingShowCommands.internalValue = undefined;
      this._lockoutSetting.internalValue = undefined;
      this._machineControlToplevelCommands.internalValue = undefined;
      this._name = undefined;
      this._networkingSetCommands.internalValue = undefined;
      this._networkingShowCommands.internalValue = undefined;
      this._passwordSetting.internalValue = undefined;
      this._roles = undefined;
      this._samlSetting.internalValue = undefined;
      this._securitySetCommands.internalValue = undefined;
      this._securityShowCommands.internalValue = undefined;
      this._superuser = undefined;
      this._troubleShootingToplevelCommands.internalValue = undefined;
      this._useAccountInactivityLockoutEnable = undefined;
      this._useDisableConcurrentLogin = undefined;
      this._useLockoutSetting = undefined;
      this._usePasswordSetting = undefined;
      this._userAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessMethod = value.accessMethod;
      this._adminSetCommands.internalValue = value.adminSetCommands;
      this._adminShowCommands.internalValue = value.adminShowCommands;
      this._adminToplevelCommands.internalValue = value.adminToplevelCommands;
      this._cloudSetCommands.internalValue = value.cloudSetCommands;
      this._cloudShowCommands.internalValue = value.cloudShowCommands;
      this._comment = value.comment;
      this._databaseSetCommands.internalValue = value.databaseSetCommands;
      this._databaseShowCommands.internalValue = value.databaseShowCommands;
      this._dhcpSetCommands.internalValue = value.dhcpSetCommands;
      this._dhcpShowCommands.internalValue = value.dhcpShowCommands;
      this._disable = value.disable;
      this._disableConcurrentLogin = value.disableConcurrentLogin;
      this._dnsSetCommands.internalValue = value.dnsSetCommands;
      this._dnsShowCommands.internalValue = value.dnsShowCommands;
      this._dnsToplevelCommands.internalValue = value.dnsToplevelCommands;
      this._dockerSetCommands.internalValue = value.dockerSetCommands;
      this._dockerShowCommands.internalValue = value.dockerShowCommands;
      this._emailAddresses = value.emailAddresses;
      this._extattrs = value.extattrs;
      this._gridSetCommands.internalValue = value.gridSetCommands;
      this._gridShowCommands.internalValue = value.gridShowCommands;
      this._inactivityLockoutSetting.internalValue = value.inactivityLockoutSetting;
      this._licensingSetCommands.internalValue = value.licensingSetCommands;
      this._licensingShowCommands.internalValue = value.licensingShowCommands;
      this._lockoutSetting.internalValue = value.lockoutSetting;
      this._machineControlToplevelCommands.internalValue = value.machineControlToplevelCommands;
      this._name = value.name;
      this._networkingSetCommands.internalValue = value.networkingSetCommands;
      this._networkingShowCommands.internalValue = value.networkingShowCommands;
      this._passwordSetting.internalValue = value.passwordSetting;
      this._roles = value.roles;
      this._samlSetting.internalValue = value.samlSetting;
      this._securitySetCommands.internalValue = value.securitySetCommands;
      this._securityShowCommands.internalValue = value.securityShowCommands;
      this._superuser = value.superuser;
      this._troubleShootingToplevelCommands.internalValue = value.troubleShootingToplevelCommands;
      this._useAccountInactivityLockoutEnable = value.useAccountInactivityLockoutEnable;
      this._useDisableConcurrentLogin = value.useDisableConcurrentLogin;
      this._useLockoutSetting = value.useLockoutSetting;
      this._usePasswordSetting = value.usePasswordSetting;
      this._userAccess.internalValue = value.userAccess;
    }
  }

  // access_method - computed: true, optional: true, required: false
  private _accessMethod?: string[]; 
  public get accessMethod() {
    return this.getListAttribute('access_method');
  }
  public set accessMethod(value: string[]) {
    this._accessMethod = value;
  }
  public resetAccessMethod() {
    this._accessMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMethodInput() {
    return this._accessMethod;
  }

  // admin_set_commands - computed: true, optional: true, required: false
  private _adminSetCommands = new DataNiosSecurityAdminGroupResultAdminSetCommandsOutputReference(this, "admin_set_commands");
  public get adminSetCommands() {
    return this._adminSetCommands;
  }
  public putAdminSetCommands(value: DataNiosSecurityAdminGroupResultAdminSetCommands) {
    this._adminSetCommands.internalValue = value;
  }
  public resetAdminSetCommands() {
    this._adminSetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSetCommandsInput() {
    return this._adminSetCommands.internalValue;
  }

  // admin_show_commands - computed: true, optional: true, required: false
  private _adminShowCommands = new DataNiosSecurityAdminGroupResultAdminShowCommandsOutputReference(this, "admin_show_commands");
  public get adminShowCommands() {
    return this._adminShowCommands;
  }
  public putAdminShowCommands(value: DataNiosSecurityAdminGroupResultAdminShowCommands) {
    this._adminShowCommands.internalValue = value;
  }
  public resetAdminShowCommands() {
    this._adminShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminShowCommandsInput() {
    return this._adminShowCommands.internalValue;
  }

  // admin_toplevel_commands - computed: true, optional: true, required: false
  private _adminToplevelCommands = new DataNiosSecurityAdminGroupResultAdminToplevelCommandsOutputReference(this, "admin_toplevel_commands");
  public get adminToplevelCommands() {
    return this._adminToplevelCommands;
  }
  public putAdminToplevelCommands(value: DataNiosSecurityAdminGroupResultAdminToplevelCommands) {
    this._adminToplevelCommands.internalValue = value;
  }
  public resetAdminToplevelCommands() {
    this._adminToplevelCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminToplevelCommandsInput() {
    return this._adminToplevelCommands.internalValue;
  }

  // cloud_set_commands - computed: true, optional: true, required: false
  private _cloudSetCommands = new DataNiosSecurityAdminGroupResultCloudSetCommandsOutputReference(this, "cloud_set_commands");
  public get cloudSetCommands() {
    return this._cloudSetCommands;
  }
  public putCloudSetCommands(value: DataNiosSecurityAdminGroupResultCloudSetCommands) {
    this._cloudSetCommands.internalValue = value;
  }
  public resetCloudSetCommands() {
    this._cloudSetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSetCommandsInput() {
    return this._cloudSetCommands.internalValue;
  }

  // cloud_show_commands - computed: true, optional: true, required: false
  private _cloudShowCommands = new DataNiosSecurityAdminGroupResultCloudShowCommandsOutputReference(this, "cloud_show_commands");
  public get cloudShowCommands() {
    return this._cloudShowCommands;
  }
  public putCloudShowCommands(value: DataNiosSecurityAdminGroupResultCloudShowCommands) {
    this._cloudShowCommands.internalValue = value;
  }
  public resetCloudShowCommands() {
    this._cloudShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudShowCommandsInput() {
    return this._cloudShowCommands.internalValue;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // database_set_commands - computed: true, optional: true, required: false
  private _databaseSetCommands = new DataNiosSecurityAdminGroupResultDatabaseSetCommandsOutputReference(this, "database_set_commands");
  public get databaseSetCommands() {
    return this._databaseSetCommands;
  }
  public putDatabaseSetCommands(value: DataNiosSecurityAdminGroupResultDatabaseSetCommands) {
    this._databaseSetCommands.internalValue = value;
  }
  public resetDatabaseSetCommands() {
    this._databaseSetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSetCommandsInput() {
    return this._databaseSetCommands.internalValue;
  }

  // database_show_commands - computed: true, optional: true, required: false
  private _databaseShowCommands = new DataNiosSecurityAdminGroupResultDatabaseShowCommandsOutputReference(this, "database_show_commands");
  public get databaseShowCommands() {
    return this._databaseShowCommands;
  }
  public putDatabaseShowCommands(value: DataNiosSecurityAdminGroupResultDatabaseShowCommands) {
    this._databaseShowCommands.internalValue = value;
  }
  public resetDatabaseShowCommands() {
    this._databaseShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseShowCommandsInput() {
    return this._databaseShowCommands.internalValue;
  }

  // dhcp_set_commands - computed: true, optional: true, required: false
  private _dhcpSetCommands = new DataNiosSecurityAdminGroupResultDhcpSetCommandsOutputReference(this, "dhcp_set_commands");
  public get dhcpSetCommands() {
    return this._dhcpSetCommands;
  }
  public putDhcpSetCommands(value: DataNiosSecurityAdminGroupResultDhcpSetCommands) {
    this._dhcpSetCommands.internalValue = value;
  }
  public resetDhcpSetCommands() {
    this._dhcpSetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSetCommandsInput() {
    return this._dhcpSetCommands.internalValue;
  }

  // dhcp_show_commands - computed: true, optional: true, required: false
  private _dhcpShowCommands = new DataNiosSecurityAdminGroupResultDhcpShowCommandsOutputReference(this, "dhcp_show_commands");
  public get dhcpShowCommands() {
    return this._dhcpShowCommands;
  }
  public putDhcpShowCommands(value: DataNiosSecurityAdminGroupResultDhcpShowCommands) {
    this._dhcpShowCommands.internalValue = value;
  }
  public resetDhcpShowCommands() {
    this._dhcpShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpShowCommandsInput() {
    return this._dhcpShowCommands.internalValue;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disable_concurrent_login - computed: true, optional: true, required: false
  private _disableConcurrentLogin?: boolean | cdktf.IResolvable; 
  public get disableConcurrentLogin() {
    return this.getBooleanAttribute('disable_concurrent_login');
  }
  public set disableConcurrentLogin(value: boolean | cdktf.IResolvable) {
    this._disableConcurrentLogin = value;
  }
  public resetDisableConcurrentLogin() {
    this._disableConcurrentLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConcurrentLoginInput() {
    return this._disableConcurrentLogin;
  }

  // dns_set_commands - computed: true, optional: true, required: false
  private _dnsSetCommands = new DataNiosSecurityAdminGroupResultDnsSetCommandsOutputReference(this, "dns_set_commands");
  public get dnsSetCommands() {
    return this._dnsSetCommands;
  }
  public putDnsSetCommands(value: DataNiosSecurityAdminGroupResultDnsSetCommands) {
    this._dnsSetCommands.internalValue = value;
  }
  public resetDnsSetCommands() {
    this._dnsSetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSetCommandsInput() {
    return this._dnsSetCommands.internalValue;
  }

  // dns_show_commands - computed: true, optional: true, required: false
  private _dnsShowCommands = new DataNiosSecurityAdminGroupResultDnsShowCommandsOutputReference(this, "dns_show_commands");
  public get dnsShowCommands() {
    return this._dnsShowCommands;
  }
  public putDnsShowCommands(value: DataNiosSecurityAdminGroupResultDnsShowCommands) {
    this._dnsShowCommands.internalValue = value;
  }
  public resetDnsShowCommands() {
    this._dnsShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsShowCommandsInput() {
    return this._dnsShowCommands.internalValue;
  }

  // dns_toplevel_commands - computed: true, optional: true, required: false
  private _dnsToplevelCommands = new DataNiosSecurityAdminGroupResultDnsToplevelCommandsOutputReference(this, "dns_toplevel_commands");
  public get dnsToplevelCommands() {
    return this._dnsToplevelCommands;
  }
  public putDnsToplevelCommands(value: DataNiosSecurityAdminGroupResultDnsToplevelCommands) {
    this._dnsToplevelCommands.internalValue = value;
  }
  public resetDnsToplevelCommands() {
    this._dnsToplevelCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsToplevelCommandsInput() {
    return this._dnsToplevelCommands.internalValue;
  }

  // docker_set_commands - computed: true, optional: true, required: false
  private _dockerSetCommands = new DataNiosSecurityAdminGroupResultDockerSetCommandsOutputReference(this, "docker_set_commands");
  public get dockerSetCommands() {
    return this._dockerSetCommands;
  }
  public putDockerSetCommands(value: DataNiosSecurityAdminGroupResultDockerSetCommands) {
    this._dockerSetCommands.internalValue = value;
  }
  public resetDockerSetCommands() {
    this._dockerSetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerSetCommandsInput() {
    return this._dockerSetCommands.internalValue;
  }

  // docker_show_commands - computed: true, optional: true, required: false
  private _dockerShowCommands = new DataNiosSecurityAdminGroupResultDockerShowCommandsOutputReference(this, "docker_show_commands");
  public get dockerShowCommands() {
    return this._dockerShowCommands;
  }
  public putDockerShowCommands(value: DataNiosSecurityAdminGroupResultDockerShowCommands) {
    this._dockerShowCommands.internalValue = value;
  }
  public resetDockerShowCommands() {
    this._dockerShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerShowCommandsInput() {
    return this._dockerShowCommands.internalValue;
  }

  // email_addresses - computed: true, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // enable_restricted_user_access - computed: true, optional: false, required: false
  public get enableRestrictedUserAccess() {
    return this.getBooleanAttribute('enable_restricted_user_access');
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // grid_set_commands - computed: true, optional: true, required: false
  private _gridSetCommands = new DataNiosSecurityAdminGroupResultGridSetCommandsOutputReference(this, "grid_set_commands");
  public get gridSetCommands() {
    return this._gridSetCommands;
  }
  public putGridSetCommands(value: DataNiosSecurityAdminGroupResultGridSetCommands) {
    this._gridSetCommands.internalValue = value;
  }
  public resetGridSetCommands() {
    this._gridSetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridSetCommandsInput() {
    return this._gridSetCommands.internalValue;
  }

  // grid_show_commands - computed: true, optional: true, required: false
  private _gridShowCommands = new DataNiosSecurityAdminGroupResultGridShowCommandsOutputReference(this, "grid_show_commands");
  public get gridShowCommands() {
    return this._gridShowCommands;
  }
  public putGridShowCommands(value: DataNiosSecurityAdminGroupResultGridShowCommands) {
    this._gridShowCommands.internalValue = value;
  }
  public resetGridShowCommands() {
    this._gridShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridShowCommandsInput() {
    return this._gridShowCommands.internalValue;
  }

  // inactivity_lockout_setting - computed: true, optional: true, required: false
  private _inactivityLockoutSetting = new DataNiosSecurityAdminGroupResultInactivityLockoutSettingOutputReference(this, "inactivity_lockout_setting");
  public get inactivityLockoutSetting() {
    return this._inactivityLockoutSetting;
  }
  public putInactivityLockoutSetting(value: DataNiosSecurityAdminGroupResultInactivityLockoutSetting) {
    this._inactivityLockoutSetting.internalValue = value;
  }
  public resetInactivityLockoutSetting() {
    this._inactivityLockoutSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityLockoutSettingInput() {
    return this._inactivityLockoutSetting.internalValue;
  }

  // licensing_set_commands - computed: true, optional: true, required: false
  private _licensingSetCommands = new DataNiosSecurityAdminGroupResultLicensingSetCommandsOutputReference(this, "licensing_set_commands");
  public get licensingSetCommands() {
    return this._licensingSetCommands;
  }
  public putLicensingSetCommands(value: DataNiosSecurityAdminGroupResultLicensingSetCommands) {
    this._licensingSetCommands.internalValue = value;
  }
  public resetLicensingSetCommands() {
    this._licensingSetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensingSetCommandsInput() {
    return this._licensingSetCommands.internalValue;
  }

  // licensing_show_commands - computed: true, optional: true, required: false
  private _licensingShowCommands = new DataNiosSecurityAdminGroupResultLicensingShowCommandsOutputReference(this, "licensing_show_commands");
  public get licensingShowCommands() {
    return this._licensingShowCommands;
  }
  public putLicensingShowCommands(value: DataNiosSecurityAdminGroupResultLicensingShowCommands) {
    this._licensingShowCommands.internalValue = value;
  }
  public resetLicensingShowCommands() {
    this._licensingShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensingShowCommandsInput() {
    return this._licensingShowCommands.internalValue;
  }

  // lockout_setting - computed: true, optional: true, required: false
  private _lockoutSetting = new DataNiosSecurityAdminGroupResultLockoutSettingOutputReference(this, "lockout_setting");
  public get lockoutSetting() {
    return this._lockoutSetting;
  }
  public putLockoutSetting(value: DataNiosSecurityAdminGroupResultLockoutSetting) {
    this._lockoutSetting.internalValue = value;
  }
  public resetLockoutSetting() {
    this._lockoutSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutSettingInput() {
    return this._lockoutSetting.internalValue;
  }

  // machine_control_toplevel_commands - computed: true, optional: true, required: false
  private _machineControlToplevelCommands = new DataNiosSecurityAdminGroupResultMachineControlToplevelCommandsOutputReference(this, "machine_control_toplevel_commands");
  public get machineControlToplevelCommands() {
    return this._machineControlToplevelCommands;
  }
  public putMachineControlToplevelCommands(value: DataNiosSecurityAdminGroupResultMachineControlToplevelCommands) {
    this._machineControlToplevelCommands.internalValue = value;
  }
  public resetMachineControlToplevelCommands() {
    this._machineControlToplevelCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineControlToplevelCommandsInput() {
    return this._machineControlToplevelCommands.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

  // networking_set_commands - computed: true, optional: true, required: false
  private _networkingSetCommands = new DataNiosSecurityAdminGroupResultNetworkingSetCommandsOutputReference(this, "networking_set_commands");
  public get networkingSetCommands() {
    return this._networkingSetCommands;
  }
  public putNetworkingSetCommands(value: DataNiosSecurityAdminGroupResultNetworkingSetCommands) {
    this._networkingSetCommands.internalValue = value;
  }
  public resetNetworkingSetCommands() {
    this._networkingSetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingSetCommandsInput() {
    return this._networkingSetCommands.internalValue;
  }

  // networking_show_commands - computed: true, optional: true, required: false
  private _networkingShowCommands = new DataNiosSecurityAdminGroupResultNetworkingShowCommandsOutputReference(this, "networking_show_commands");
  public get networkingShowCommands() {
    return this._networkingShowCommands;
  }
  public putNetworkingShowCommands(value: DataNiosSecurityAdminGroupResultNetworkingShowCommands) {
    this._networkingShowCommands.internalValue = value;
  }
  public resetNetworkingShowCommands() {
    this._networkingShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingShowCommandsInput() {
    return this._networkingShowCommands.internalValue;
  }

  // password_setting - computed: true, optional: true, required: false
  private _passwordSetting = new DataNiosSecurityAdminGroupResultPasswordSettingOutputReference(this, "password_setting");
  public get passwordSetting() {
    return this._passwordSetting;
  }
  public putPasswordSetting(value: DataNiosSecurityAdminGroupResultPasswordSetting) {
    this._passwordSetting.internalValue = value;
  }
  public resetPasswordSetting() {
    this._passwordSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSettingInput() {
    return this._passwordSetting.internalValue;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // saml_setting - computed: true, optional: true, required: false
  private _samlSetting = new DataNiosSecurityAdminGroupResultSamlSettingOutputReference(this, "saml_setting");
  public get samlSetting() {
    return this._samlSetting;
  }
  public putSamlSetting(value: DataNiosSecurityAdminGroupResultSamlSetting) {
    this._samlSetting.internalValue = value;
  }
  public resetSamlSetting() {
    this._samlSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSettingInput() {
    return this._samlSetting.internalValue;
  }

  // security_set_commands - computed: true, optional: true, required: false
  private _securitySetCommands = new DataNiosSecurityAdminGroupResultSecuritySetCommandsOutputReference(this, "security_set_commands");
  public get securitySetCommands() {
    return this._securitySetCommands;
  }
  public putSecuritySetCommands(value: DataNiosSecurityAdminGroupResultSecuritySetCommands) {
    this._securitySetCommands.internalValue = value;
  }
  public resetSecuritySetCommands() {
    this._securitySetCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySetCommandsInput() {
    return this._securitySetCommands.internalValue;
  }

  // security_show_commands - computed: true, optional: true, required: false
  private _securityShowCommands = new DataNiosSecurityAdminGroupResultSecurityShowCommandsOutputReference(this, "security_show_commands");
  public get securityShowCommands() {
    return this._securityShowCommands;
  }
  public putSecurityShowCommands(value: DataNiosSecurityAdminGroupResultSecurityShowCommands) {
    this._securityShowCommands.internalValue = value;
  }
  public resetSecurityShowCommands() {
    this._securityShowCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityShowCommandsInput() {
    return this._securityShowCommands.internalValue;
  }

  // superuser - computed: true, optional: true, required: false
  private _superuser?: boolean | cdktf.IResolvable; 
  public get superuser() {
    return this.getBooleanAttribute('superuser');
  }
  public set superuser(value: boolean | cdktf.IResolvable) {
    this._superuser = value;
  }
  public resetSuperuser() {
    this._superuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superuserInput() {
    return this._superuser;
  }

  // trouble_shooting_toplevel_commands - computed: true, optional: true, required: false
  private _troubleShootingToplevelCommands = new DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommandsOutputReference(this, "trouble_shooting_toplevel_commands");
  public get troubleShootingToplevelCommands() {
    return this._troubleShootingToplevelCommands;
  }
  public putTroubleShootingToplevelCommands(value: DataNiosSecurityAdminGroupResultTroubleShootingToplevelCommands) {
    this._troubleShootingToplevelCommands.internalValue = value;
  }
  public resetTroubleShootingToplevelCommands() {
    this._troubleShootingToplevelCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get troubleShootingToplevelCommandsInput() {
    return this._troubleShootingToplevelCommands.internalValue;
  }

  // use_account_inactivity_lockout_enable - computed: true, optional: true, required: false
  private _useAccountInactivityLockoutEnable?: boolean | cdktf.IResolvable; 
  public get useAccountInactivityLockoutEnable() {
    return this.getBooleanAttribute('use_account_inactivity_lockout_enable');
  }
  public set useAccountInactivityLockoutEnable(value: boolean | cdktf.IResolvable) {
    this._useAccountInactivityLockoutEnable = value;
  }
  public resetUseAccountInactivityLockoutEnable() {
    this._useAccountInactivityLockoutEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAccountInactivityLockoutEnableInput() {
    return this._useAccountInactivityLockoutEnable;
  }

  // use_disable_concurrent_login - computed: true, optional: true, required: false
  private _useDisableConcurrentLogin?: boolean | cdktf.IResolvable; 
  public get useDisableConcurrentLogin() {
    return this.getBooleanAttribute('use_disable_concurrent_login');
  }
  public set useDisableConcurrentLogin(value: boolean | cdktf.IResolvable) {
    this._useDisableConcurrentLogin = value;
  }
  public resetUseDisableConcurrentLogin() {
    this._useDisableConcurrentLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDisableConcurrentLoginInput() {
    return this._useDisableConcurrentLogin;
  }

  // use_lockout_setting - computed: true, optional: true, required: false
  private _useLockoutSetting?: boolean | cdktf.IResolvable; 
  public get useLockoutSetting() {
    return this.getBooleanAttribute('use_lockout_setting');
  }
  public set useLockoutSetting(value: boolean | cdktf.IResolvable) {
    this._useLockoutSetting = value;
  }
  public resetUseLockoutSetting() {
    this._useLockoutSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLockoutSettingInput() {
    return this._useLockoutSetting;
  }

  // use_password_setting - computed: true, optional: true, required: false
  private _usePasswordSetting?: boolean | cdktf.IResolvable; 
  public get usePasswordSetting() {
    return this.getBooleanAttribute('use_password_setting');
  }
  public set usePasswordSetting(value: boolean | cdktf.IResolvable) {
    this._usePasswordSetting = value;
  }
  public resetUsePasswordSetting() {
    this._usePasswordSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePasswordSettingInput() {
    return this._usePasswordSetting;
  }

  // user_access - computed: true, optional: true, required: false
  private _userAccess = new DataNiosSecurityAdminGroupResultUserAccessList(this, "user_access", false);
  public get userAccess() {
    return this._userAccess;
  }
  public putUserAccess(value: DataNiosSecurityAdminGroupResultUserAccess[] | cdktf.IResolvable) {
    this._userAccess.internalValue = value;
  }
  public resetUserAccess() {
    this._userAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessInput() {
    return this._userAccess.internalValue;
  }
}

export class DataNiosSecurityAdminGroupResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosSecurityAdminGroupResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosSecurityAdminGroupResultOutputReference {
    return new DataNiosSecurityAdminGroupResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group nios_security_admin_group}
*/
export class DataNiosSecurityAdminGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_security_admin_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosSecurityAdminGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosSecurityAdminGroup to import
  * @param importFromId The id of the existing DataNiosSecurityAdminGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosSecurityAdminGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_security_admin_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/security_admin_group nios_security_admin_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosSecurityAdminGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosSecurityAdminGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_security_admin_group',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosSecurityAdminGroupResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
