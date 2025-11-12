// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#admin_host SystemGlobal#admin_host}
  */
  readonly adminHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#admin_lockout_duration SystemGlobal#admin_lockout_duration}
  */
  readonly adminLockoutDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#admin_lockout_method SystemGlobal#admin_lockout_method}
  */
  readonly adminLockoutMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#admin_lockout_threshold SystemGlobal#admin_lockout_threshold}
  */
  readonly adminLockoutThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#admin_ssh_grace_time SystemGlobal#admin_ssh_grace_time}
  */
  readonly adminSshGraceTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#adom_mode SystemGlobal#adom_mode}
  */
  readonly adomMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#adom_rev_auto_delete SystemGlobal#adom_rev_auto_delete}
  */
  readonly adomRevAutoDelete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#adom_rev_max_backup_revisions SystemGlobal#adom_rev_max_backup_revisions}
  */
  readonly adomRevMaxBackupRevisions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#adom_rev_max_days SystemGlobal#adom_rev_max_days}
  */
  readonly adomRevMaxDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#adom_rev_max_revisions SystemGlobal#adom_rev_max_revisions}
  */
  readonly adomRevMaxRevisions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#adom_select SystemGlobal#adom_select}
  */
  readonly adomSelect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#adom_status SystemGlobal#adom_status}
  */
  readonly adomStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#apache_mode SystemGlobal#apache_mode}
  */
  readonly apacheMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#apache_wsgi_processes SystemGlobal#apache_wsgi_processes}
  */
  readonly apacheWsgiProcesses?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#api_ip_binding SystemGlobal#api_ip_binding}
  */
  readonly apiIpBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#clone_name_option SystemGlobal#clone_name_option}
  */
  readonly cloneNameOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#clt_cert_req SystemGlobal#clt_cert_req}
  */
  readonly cltCertReq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#console_output SystemGlobal#console_output}
  */
  readonly consoleOutput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#contentpack_fgt_install SystemGlobal#contentpack_fgt_install}
  */
  readonly contentpackFgtInstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#country_flag SystemGlobal#country_flag}
  */
  readonly countryFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#create_revision SystemGlobal#create_revision}
  */
  readonly createRevision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#daylightsavetime SystemGlobal#daylightsavetime}
  */
  readonly daylightsavetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#detect_unregistered_log_device SystemGlobal#detect_unregistered_log_device}
  */
  readonly detectUnregisteredLogDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#device_view_mode SystemGlobal#device_view_mode}
  */
  readonly deviceViewMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#dh_params SystemGlobal#dh_params}
  */
  readonly dhParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#disable_module SystemGlobal#disable_module}
  */
  readonly disableModule?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#dynamic_sort_subtable SystemGlobal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#enc_algorithm SystemGlobal#enc_algorithm}
  */
  readonly encAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fabric_storage_pool_quota SystemGlobal#fabric_storage_pool_quota}
  */
  readonly fabricStoragePoolQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fabric_storage_pool_size SystemGlobal#fabric_storage_pool_size}
  */
  readonly fabricStoragePoolSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#faz_status SystemGlobal#faz_status}
  */
  readonly fazStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fcp_cfg_service SystemGlobal#fcp_cfg_service}
  */
  readonly fcpCfgService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fgfm_allow_vm SystemGlobal#fgfm_allow_vm}
  */
  readonly fgfmAllowVm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fgfm_ca_cert SystemGlobal#fgfm_ca_cert}
  */
  readonly fgfmCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fgfm_cert_exclusive SystemGlobal#fgfm_cert_exclusive}
  */
  readonly fgfmCertExclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fgfm_deny_unknown SystemGlobal#fgfm_deny_unknown}
  */
  readonly fgfmDenyUnknown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fgfm_local_cert SystemGlobal#fgfm_local_cert}
  */
  readonly fgfmLocalCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fgfm_peercert_withoutsn SystemGlobal#fgfm_peercert_withoutsn}
  */
  readonly fgfmPeercertWithoutsn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fgfm_ssl_protocol SystemGlobal#fgfm_ssl_protocol}
  */
  readonly fgfmSslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#fortiservice_port SystemGlobal#fortiservice_port}
  */
  readonly fortiservicePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#global_ssl_protocol SystemGlobal#global_ssl_protocol}
  */
  readonly globalSslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#gui_curl_timeout SystemGlobal#gui_curl_timeout}
  */
  readonly guiCurlTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#gui_polling_interval SystemGlobal#gui_polling_interval}
  */
  readonly guiPollingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ha_member_auto_grouping SystemGlobal#ha_member_auto_grouping}
  */
  readonly haMemberAutoGrouping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#hostname SystemGlobal#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#httpd_ssl_protocol SystemGlobal#httpd_ssl_protocol}
  */
  readonly httpdSslProtocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#id SystemGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#import_ignore_addr_cmt SystemGlobal#import_ignore_addr_cmt}
  */
  readonly importIgnoreAddrCmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#jsonapi_log SystemGlobal#jsonapi_log}
  */
  readonly jsonapiLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#language SystemGlobal#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#latitude SystemGlobal#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ldap_cache_timeout SystemGlobal#ldap_cache_timeout}
  */
  readonly ldapCacheTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ldapconntimeout SystemGlobal#ldapconntimeout}
  */
  readonly ldapconntimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#lock_preempt SystemGlobal#lock_preempt}
  */
  readonly lockPreempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#log_checksum SystemGlobal#log_checksum}
  */
  readonly logChecksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#log_checksum_upload SystemGlobal#log_checksum_upload}
  */
  readonly logChecksumUpload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#log_forward_cache_size SystemGlobal#log_forward_cache_size}
  */
  readonly logForwardCacheSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#longitude SystemGlobal#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#management_ip SystemGlobal#management_ip}
  */
  readonly managementIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#management_port SystemGlobal#management_port}
  */
  readonly managementPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#mapclient_ssl_protocol SystemGlobal#mapclient_ssl_protocol}
  */
  readonly mapclientSslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#max_log_forward SystemGlobal#max_log_forward}
  */
  readonly maxLogForward?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#max_running_reports SystemGlobal#max_running_reports}
  */
  readonly maxRunningReports?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#multiple_steps_upgrade_in_autolink SystemGlobal#multiple_steps_upgrade_in_autolink}
  */
  readonly multipleStepsUpgradeInAutolink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#no_copy_permission_check SystemGlobal#no_copy_permission_check}
  */
  readonly noCopyPermissionCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#no_vip_value_check SystemGlobal#no_vip_value_check}
  */
  readonly noVipValueCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#normalized_intf_zone_only SystemGlobal#normalized_intf_zone_only}
  */
  readonly normalizedIntfZoneOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#object_revision_db_max SystemGlobal#object_revision_db_max}
  */
  readonly objectRevisionDbMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#object_revision_mandatory_note SystemGlobal#object_revision_mandatory_note}
  */
  readonly objectRevisionMandatoryNote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#object_revision_object_max SystemGlobal#object_revision_object_max}
  */
  readonly objectRevisionObjectMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#object_revision_status SystemGlobal#object_revision_status}
  */
  readonly objectRevisionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#oftp_ssl_protocol SystemGlobal#oftp_ssl_protocol}
  */
  readonly oftpSslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#partial_install SystemGlobal#partial_install}
  */
  readonly partialInstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#partial_install_force SystemGlobal#partial_install_force}
  */
  readonly partialInstallForce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#partial_install_rev SystemGlobal#partial_install_rev}
  */
  readonly partialInstallRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#per_policy_lock SystemGlobal#per_policy_lock}
  */
  readonly perPolicyLock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#perform_improve_by_ha SystemGlobal#perform_improve_by_ha}
  */
  readonly performImproveByHa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#policy_object_icon SystemGlobal#policy_object_icon}
  */
  readonly policyObjectIcon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#policy_object_in_dual_pane SystemGlobal#policy_object_in_dual_pane}
  */
  readonly policyObjectInDualPane?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#pre_login_banner SystemGlobal#pre_login_banner}
  */
  readonly preLoginBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#pre_login_banner_message SystemGlobal#pre_login_banner_message}
  */
  readonly preLoginBannerMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#private_data_encryption SystemGlobal#private_data_encryption}
  */
  readonly privateDataEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#remoteauthtimeout SystemGlobal#remoteauthtimeout}
  */
  readonly remoteauthtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#save_last_hit_in_adomdb SystemGlobal#save_last_hit_in_adomdb}
  */
  readonly saveLastHitInAdomdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#search_all_adoms SystemGlobal#search_all_adoms}
  */
  readonly searchAllAdoms?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ssh_enc_algo SystemGlobal#ssh_enc_algo}
  */
  readonly sshEncAlgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ssh_hostkey_algo SystemGlobal#ssh_hostkey_algo}
  */
  readonly sshHostkeyAlgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ssh_kex_algo SystemGlobal#ssh_kex_algo}
  */
  readonly sshKexAlgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ssh_mac_algo SystemGlobal#ssh_mac_algo}
  */
  readonly sshMacAlgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ssh_strong_crypto SystemGlobal#ssh_strong_crypto}
  */
  readonly sshStrongCrypto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ssl_low_encryption SystemGlobal#ssl_low_encryption}
  */
  readonly sslLowEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ssl_protocol SystemGlobal#ssl_protocol}
  */
  readonly sslProtocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ssl_static_key_ciphers SystemGlobal#ssl_static_key_ciphers}
  */
  readonly sslStaticKeyCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#table_entry_blink SystemGlobal#table_entry_blink}
  */
  readonly tableEntryBlink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#task_list_size SystemGlobal#task_list_size}
  */
  readonly taskListSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#tftp SystemGlobal#tftp}
  */
  readonly tftp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#timezone SystemGlobal#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#tunnel_mtu SystemGlobal#tunnel_mtu}
  */
  readonly tunnelMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#usg SystemGlobal#usg}
  */
  readonly usg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#vdom_mirror SystemGlobal#vdom_mirror}
  */
  readonly vdomMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#webservice_proto SystemGlobal#webservice_proto}
  */
  readonly webserviceProto?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#workflow_max_sessions SystemGlobal#workflow_max_sessions}
  */
  readonly workflowMaxSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#workspace_mode SystemGlobal#workspace_mode}
  */
  readonly workspaceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#workspace_unlock_after_install SystemGlobal#workspace_unlock_after_install}
  */
  readonly workspaceUnlockAfterInstall?: string;
  /**
  * mc_policy_disabled_adoms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#mc_policy_disabled_adoms SystemGlobal#mc_policy_disabled_adoms}
  */
  readonly mcPolicyDisabledAdoms?: SystemGlobalMcPolicyDisabledAdoms[] | cdktf.IResolvable;
  /**
  * ssl_cipher_suites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#ssl_cipher_suites SystemGlobal#ssl_cipher_suites}
  */
  readonly sslCipherSuites?: SystemGlobalSslCipherSuites[] | cdktf.IResolvable;
}
export interface SystemGlobalMcPolicyDisabledAdoms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#adom_name SystemGlobal#adom_name}
  */
  readonly adomName?: string;
}

export function systemGlobalMcPolicyDisabledAdomsToTerraform(struct?: SystemGlobalMcPolicyDisabledAdoms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adom_name: cdktf.stringToTerraform(struct!.adomName),
  }
}


export function systemGlobalMcPolicyDisabledAdomsToHclTerraform(struct?: SystemGlobalMcPolicyDisabledAdoms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adom_name: {
      value: cdktf.stringToHclTerraform(struct!.adomName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGlobalMcPolicyDisabledAdomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGlobalMcPolicyDisabledAdoms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adomName !== undefined) {
      hasAnyValues = true;
      internalValueResult.adomName = this._adomName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGlobalMcPolicyDisabledAdoms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adomName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adomName = value.adomName;
    }
  }

  // adom_name - computed: false, optional: true, required: false
  private _adomName?: string; 
  public get adomName() {
    return this.getStringAttribute('adom_name');
  }
  public set adomName(value: string) {
    this._adomName = value;
  }
  public resetAdomName() {
    this._adomName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomNameInput() {
    return this._adomName;
  }
}

export class SystemGlobalMcPolicyDisabledAdomsList extends cdktf.ComplexList {
  public internalValue? : SystemGlobalMcPolicyDisabledAdoms[] | cdktf.IResolvable

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
  public get(index: number): SystemGlobalMcPolicyDisabledAdomsOutputReference {
    return new SystemGlobalMcPolicyDisabledAdomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGlobalSslCipherSuites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#cipher SystemGlobal#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#priority SystemGlobal#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#version SystemGlobal#version}
  */
  readonly version?: string;
}

export function systemGlobalSslCipherSuitesToTerraform(struct?: SystemGlobalSslCipherSuites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: cdktf.stringToTerraform(struct!.cipher),
    priority: cdktf.numberToTerraform(struct!.priority),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function systemGlobalSslCipherSuitesToHclTerraform(struct?: SystemGlobalSslCipherSuites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher: {
      value: cdktf.stringToHclTerraform(struct!.cipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGlobalSslCipherSuitesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGlobalSslCipherSuites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGlobalSslCipherSuites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipher = undefined;
      this._priority = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipher = value.cipher;
      this._priority = value.priority;
      this._version = value.version;
    }
  }

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // version - computed: true, optional: true, required: false
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
}

export class SystemGlobalSslCipherSuitesList extends cdktf.ComplexList {
  public internalValue? : SystemGlobalSslCipherSuites[] | cdktf.IResolvable

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
  public get(index: number): SystemGlobalSslCipherSuitesOutputReference {
    return new SystemGlobalSslCipherSuitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global fortimanager_system_global}
*/
export class SystemGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGlobal to import
  * @param importFromId The id of the existing SystemGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_global fortimanager_system_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_global',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminHost = config.adminHost;
    this._adminLockoutDuration = config.adminLockoutDuration;
    this._adminLockoutMethod = config.adminLockoutMethod;
    this._adminLockoutThreshold = config.adminLockoutThreshold;
    this._adminSshGraceTime = config.adminSshGraceTime;
    this._adomMode = config.adomMode;
    this._adomRevAutoDelete = config.adomRevAutoDelete;
    this._adomRevMaxBackupRevisions = config.adomRevMaxBackupRevisions;
    this._adomRevMaxDays = config.adomRevMaxDays;
    this._adomRevMaxRevisions = config.adomRevMaxRevisions;
    this._adomSelect = config.adomSelect;
    this._adomStatus = config.adomStatus;
    this._apacheMode = config.apacheMode;
    this._apacheWsgiProcesses = config.apacheWsgiProcesses;
    this._apiIpBinding = config.apiIpBinding;
    this._cloneNameOption = config.cloneNameOption;
    this._cltCertReq = config.cltCertReq;
    this._consoleOutput = config.consoleOutput;
    this._contentpackFgtInstall = config.contentpackFgtInstall;
    this._countryFlag = config.countryFlag;
    this._createRevision = config.createRevision;
    this._daylightsavetime = config.daylightsavetime;
    this._detectUnregisteredLogDevice = config.detectUnregisteredLogDevice;
    this._deviceViewMode = config.deviceViewMode;
    this._dhParams = config.dhParams;
    this._disableModule = config.disableModule;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._encAlgorithm = config.encAlgorithm;
    this._fabricStoragePoolQuota = config.fabricStoragePoolQuota;
    this._fabricStoragePoolSize = config.fabricStoragePoolSize;
    this._fazStatus = config.fazStatus;
    this._fcpCfgService = config.fcpCfgService;
    this._fgfmAllowVm = config.fgfmAllowVm;
    this._fgfmCaCert = config.fgfmCaCert;
    this._fgfmCertExclusive = config.fgfmCertExclusive;
    this._fgfmDenyUnknown = config.fgfmDenyUnknown;
    this._fgfmLocalCert = config.fgfmLocalCert;
    this._fgfmPeercertWithoutsn = config.fgfmPeercertWithoutsn;
    this._fgfmSslProtocol = config.fgfmSslProtocol;
    this._fortiservicePort = config.fortiservicePort;
    this._globalSslProtocol = config.globalSslProtocol;
    this._guiCurlTimeout = config.guiCurlTimeout;
    this._guiPollingInterval = config.guiPollingInterval;
    this._haMemberAutoGrouping = config.haMemberAutoGrouping;
    this._hostname = config.hostname;
    this._httpdSslProtocol = config.httpdSslProtocol;
    this._id = config.id;
    this._importIgnoreAddrCmt = config.importIgnoreAddrCmt;
    this._jsonapiLog = config.jsonapiLog;
    this._language = config.language;
    this._latitude = config.latitude;
    this._ldapCacheTimeout = config.ldapCacheTimeout;
    this._ldapconntimeout = config.ldapconntimeout;
    this._lockPreempt = config.lockPreempt;
    this._logChecksum = config.logChecksum;
    this._logChecksumUpload = config.logChecksumUpload;
    this._logForwardCacheSize = config.logForwardCacheSize;
    this._longitude = config.longitude;
    this._managementIp = config.managementIp;
    this._managementPort = config.managementPort;
    this._mapclientSslProtocol = config.mapclientSslProtocol;
    this._maxLogForward = config.maxLogForward;
    this._maxRunningReports = config.maxRunningReports;
    this._multipleStepsUpgradeInAutolink = config.multipleStepsUpgradeInAutolink;
    this._noCopyPermissionCheck = config.noCopyPermissionCheck;
    this._noVipValueCheck = config.noVipValueCheck;
    this._normalizedIntfZoneOnly = config.normalizedIntfZoneOnly;
    this._objectRevisionDbMax = config.objectRevisionDbMax;
    this._objectRevisionMandatoryNote = config.objectRevisionMandatoryNote;
    this._objectRevisionObjectMax = config.objectRevisionObjectMax;
    this._objectRevisionStatus = config.objectRevisionStatus;
    this._oftpSslProtocol = config.oftpSslProtocol;
    this._partialInstall = config.partialInstall;
    this._partialInstallForce = config.partialInstallForce;
    this._partialInstallRev = config.partialInstallRev;
    this._perPolicyLock = config.perPolicyLock;
    this._performImproveByHa = config.performImproveByHa;
    this._policyObjectIcon = config.policyObjectIcon;
    this._policyObjectInDualPane = config.policyObjectInDualPane;
    this._preLoginBanner = config.preLoginBanner;
    this._preLoginBannerMessage = config.preLoginBannerMessage;
    this._privateDataEncryption = config.privateDataEncryption;
    this._remoteauthtimeout = config.remoteauthtimeout;
    this._saveLastHitInAdomdb = config.saveLastHitInAdomdb;
    this._searchAllAdoms = config.searchAllAdoms;
    this._sshEncAlgo = config.sshEncAlgo;
    this._sshHostkeyAlgo = config.sshHostkeyAlgo;
    this._sshKexAlgo = config.sshKexAlgo;
    this._sshMacAlgo = config.sshMacAlgo;
    this._sshStrongCrypto = config.sshStrongCrypto;
    this._sslLowEncryption = config.sslLowEncryption;
    this._sslProtocol = config.sslProtocol;
    this._sslStaticKeyCiphers = config.sslStaticKeyCiphers;
    this._tableEntryBlink = config.tableEntryBlink;
    this._taskListSize = config.taskListSize;
    this._tftp = config.tftp;
    this._timezone = config.timezone;
    this._tunnelMtu = config.tunnelMtu;
    this._usg = config.usg;
    this._vdomMirror = config.vdomMirror;
    this._webserviceProto = config.webserviceProto;
    this._workflowMaxSessions = config.workflowMaxSessions;
    this._workspaceMode = config.workspaceMode;
    this._workspaceUnlockAfterInstall = config.workspaceUnlockAfterInstall;
    this._mcPolicyDisabledAdoms.internalValue = config.mcPolicyDisabledAdoms;
    this._sslCipherSuites.internalValue = config.sslCipherSuites;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_host - computed: false, optional: true, required: false
  private _adminHost?: string; 
  public get adminHost() {
    return this.getStringAttribute('admin_host');
  }
  public set adminHost(value: string) {
    this._adminHost = value;
  }
  public resetAdminHost() {
    this._adminHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminHostInput() {
    return this._adminHost;
  }

  // admin_lockout_duration - computed: true, optional: true, required: false
  private _adminLockoutDuration?: number; 
  public get adminLockoutDuration() {
    return this.getNumberAttribute('admin_lockout_duration');
  }
  public set adminLockoutDuration(value: number) {
    this._adminLockoutDuration = value;
  }
  public resetAdminLockoutDuration() {
    this._adminLockoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLockoutDurationInput() {
    return this._adminLockoutDuration;
  }

  // admin_lockout_method - computed: true, optional: true, required: false
  private _adminLockoutMethod?: string; 
  public get adminLockoutMethod() {
    return this.getStringAttribute('admin_lockout_method');
  }
  public set adminLockoutMethod(value: string) {
    this._adminLockoutMethod = value;
  }
  public resetAdminLockoutMethod() {
    this._adminLockoutMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLockoutMethodInput() {
    return this._adminLockoutMethod;
  }

  // admin_lockout_threshold - computed: true, optional: true, required: false
  private _adminLockoutThreshold?: number; 
  public get adminLockoutThreshold() {
    return this.getNumberAttribute('admin_lockout_threshold');
  }
  public set adminLockoutThreshold(value: number) {
    this._adminLockoutThreshold = value;
  }
  public resetAdminLockoutThreshold() {
    this._adminLockoutThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLockoutThresholdInput() {
    return this._adminLockoutThreshold;
  }

  // admin_ssh_grace_time - computed: true, optional: true, required: false
  private _adminSshGraceTime?: number; 
  public get adminSshGraceTime() {
    return this.getNumberAttribute('admin_ssh_grace_time');
  }
  public set adminSshGraceTime(value: number) {
    this._adminSshGraceTime = value;
  }
  public resetAdminSshGraceTime() {
    this._adminSshGraceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminSshGraceTimeInput() {
    return this._adminSshGraceTime;
  }

  // adom_mode - computed: true, optional: true, required: false
  private _adomMode?: string; 
  public get adomMode() {
    return this.getStringAttribute('adom_mode');
  }
  public set adomMode(value: string) {
    this._adomMode = value;
  }
  public resetAdomMode() {
    this._adomMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomModeInput() {
    return this._adomMode;
  }

  // adom_rev_auto_delete - computed: true, optional: true, required: false
  private _adomRevAutoDelete?: string; 
  public get adomRevAutoDelete() {
    return this.getStringAttribute('adom_rev_auto_delete');
  }
  public set adomRevAutoDelete(value: string) {
    this._adomRevAutoDelete = value;
  }
  public resetAdomRevAutoDelete() {
    this._adomRevAutoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomRevAutoDeleteInput() {
    return this._adomRevAutoDelete;
  }

  // adom_rev_max_backup_revisions - computed: true, optional: true, required: false
  private _adomRevMaxBackupRevisions?: number; 
  public get adomRevMaxBackupRevisions() {
    return this.getNumberAttribute('adom_rev_max_backup_revisions');
  }
  public set adomRevMaxBackupRevisions(value: number) {
    this._adomRevMaxBackupRevisions = value;
  }
  public resetAdomRevMaxBackupRevisions() {
    this._adomRevMaxBackupRevisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomRevMaxBackupRevisionsInput() {
    return this._adomRevMaxBackupRevisions;
  }

  // adom_rev_max_days - computed: true, optional: true, required: false
  private _adomRevMaxDays?: number; 
  public get adomRevMaxDays() {
    return this.getNumberAttribute('adom_rev_max_days');
  }
  public set adomRevMaxDays(value: number) {
    this._adomRevMaxDays = value;
  }
  public resetAdomRevMaxDays() {
    this._adomRevMaxDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomRevMaxDaysInput() {
    return this._adomRevMaxDays;
  }

  // adom_rev_max_revisions - computed: true, optional: true, required: false
  private _adomRevMaxRevisions?: number; 
  public get adomRevMaxRevisions() {
    return this.getNumberAttribute('adom_rev_max_revisions');
  }
  public set adomRevMaxRevisions(value: number) {
    this._adomRevMaxRevisions = value;
  }
  public resetAdomRevMaxRevisions() {
    this._adomRevMaxRevisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomRevMaxRevisionsInput() {
    return this._adomRevMaxRevisions;
  }

  // adom_select - computed: true, optional: true, required: false
  private _adomSelect?: string; 
  public get adomSelect() {
    return this.getStringAttribute('adom_select');
  }
  public set adomSelect(value: string) {
    this._adomSelect = value;
  }
  public resetAdomSelect() {
    this._adomSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomSelectInput() {
    return this._adomSelect;
  }

  // adom_status - computed: true, optional: true, required: false
  private _adomStatus?: string; 
  public get adomStatus() {
    return this.getStringAttribute('adom_status');
  }
  public set adomStatus(value: string) {
    this._adomStatus = value;
  }
  public resetAdomStatus() {
    this._adomStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomStatusInput() {
    return this._adomStatus;
  }

  // apache_mode - computed: true, optional: true, required: false
  private _apacheMode?: string; 
  public get apacheMode() {
    return this.getStringAttribute('apache_mode');
  }
  public set apacheMode(value: string) {
    this._apacheMode = value;
  }
  public resetApacheMode() {
    this._apacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apacheModeInput() {
    return this._apacheMode;
  }

  // apache_wsgi_processes - computed: true, optional: true, required: false
  private _apacheWsgiProcesses?: number; 
  public get apacheWsgiProcesses() {
    return this.getNumberAttribute('apache_wsgi_processes');
  }
  public set apacheWsgiProcesses(value: number) {
    this._apacheWsgiProcesses = value;
  }
  public resetApacheWsgiProcesses() {
    this._apacheWsgiProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apacheWsgiProcessesInput() {
    return this._apacheWsgiProcesses;
  }

  // api_ip_binding - computed: true, optional: true, required: false
  private _apiIpBinding?: string; 
  public get apiIpBinding() {
    return this.getStringAttribute('api_ip_binding');
  }
  public set apiIpBinding(value: string) {
    this._apiIpBinding = value;
  }
  public resetApiIpBinding() {
    this._apiIpBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIpBindingInput() {
    return this._apiIpBinding;
  }

  // clone_name_option - computed: true, optional: true, required: false
  private _cloneNameOption?: string; 
  public get cloneNameOption() {
    return this.getStringAttribute('clone_name_option');
  }
  public set cloneNameOption(value: string) {
    this._cloneNameOption = value;
  }
  public resetCloneNameOption() {
    this._cloneNameOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneNameOptionInput() {
    return this._cloneNameOption;
  }

  // clt_cert_req - computed: true, optional: true, required: false
  private _cltCertReq?: string; 
  public get cltCertReq() {
    return this.getStringAttribute('clt_cert_req');
  }
  public set cltCertReq(value: string) {
    this._cltCertReq = value;
  }
  public resetCltCertReq() {
    this._cltCertReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cltCertReqInput() {
    return this._cltCertReq;
  }

  // console_output - computed: true, optional: true, required: false
  private _consoleOutput?: string; 
  public get consoleOutput() {
    return this.getStringAttribute('console_output');
  }
  public set consoleOutput(value: string) {
    this._consoleOutput = value;
  }
  public resetConsoleOutput() {
    this._consoleOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleOutputInput() {
    return this._consoleOutput;
  }

  // contentpack_fgt_install - computed: true, optional: true, required: false
  private _contentpackFgtInstall?: string; 
  public get contentpackFgtInstall() {
    return this.getStringAttribute('contentpack_fgt_install');
  }
  public set contentpackFgtInstall(value: string) {
    this._contentpackFgtInstall = value;
  }
  public resetContentpackFgtInstall() {
    this._contentpackFgtInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentpackFgtInstallInput() {
    return this._contentpackFgtInstall;
  }

  // country_flag - computed: true, optional: true, required: false
  private _countryFlag?: string; 
  public get countryFlag() {
    return this.getStringAttribute('country_flag');
  }
  public set countryFlag(value: string) {
    this._countryFlag = value;
  }
  public resetCountryFlag() {
    this._countryFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryFlagInput() {
    return this._countryFlag;
  }

  // create_revision - computed: true, optional: true, required: false
  private _createRevision?: string; 
  public get createRevision() {
    return this.getStringAttribute('create_revision');
  }
  public set createRevision(value: string) {
    this._createRevision = value;
  }
  public resetCreateRevision() {
    this._createRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createRevisionInput() {
    return this._createRevision;
  }

  // daylightsavetime - computed: true, optional: true, required: false
  private _daylightsavetime?: string; 
  public get daylightsavetime() {
    return this.getStringAttribute('daylightsavetime');
  }
  public set daylightsavetime(value: string) {
    this._daylightsavetime = value;
  }
  public resetDaylightsavetime() {
    this._daylightsavetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daylightsavetimeInput() {
    return this._daylightsavetime;
  }

  // detect_unregistered_log_device - computed: true, optional: true, required: false
  private _detectUnregisteredLogDevice?: string; 
  public get detectUnregisteredLogDevice() {
    return this.getStringAttribute('detect_unregistered_log_device');
  }
  public set detectUnregisteredLogDevice(value: string) {
    this._detectUnregisteredLogDevice = value;
  }
  public resetDetectUnregisteredLogDevice() {
    this._detectUnregisteredLogDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectUnregisteredLogDeviceInput() {
    return this._detectUnregisteredLogDevice;
  }

  // device_view_mode - computed: true, optional: true, required: false
  private _deviceViewMode?: string; 
  public get deviceViewMode() {
    return this.getStringAttribute('device_view_mode');
  }
  public set deviceViewMode(value: string) {
    this._deviceViewMode = value;
  }
  public resetDeviceViewMode() {
    this._deviceViewMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceViewModeInput() {
    return this._deviceViewMode;
  }

  // dh_params - computed: true, optional: true, required: false
  private _dhParams?: string; 
  public get dhParams() {
    return this.getStringAttribute('dh_params');
  }
  public set dhParams(value: string) {
    this._dhParams = value;
  }
  public resetDhParams() {
    this._dhParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhParamsInput() {
    return this._dhParams;
  }

  // disable_module - computed: true, optional: true, required: false
  private _disableModule?: string[]; 
  public get disableModule() {
    return cdktf.Fn.tolist(this.getListAttribute('disable_module'));
  }
  public set disableModule(value: string[]) {
    this._disableModule = value;
  }
  public resetDisableModule() {
    this._disableModule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableModuleInput() {
    return this._disableModule;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // enc_algorithm - computed: true, optional: true, required: false
  private _encAlgorithm?: string; 
  public get encAlgorithm() {
    return this.getStringAttribute('enc_algorithm');
  }
  public set encAlgorithm(value: string) {
    this._encAlgorithm = value;
  }
  public resetEncAlgorithm() {
    this._encAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encAlgorithmInput() {
    return this._encAlgorithm;
  }

  // fabric_storage_pool_quota - computed: true, optional: true, required: false
  private _fabricStoragePoolQuota?: number; 
  public get fabricStoragePoolQuota() {
    return this.getNumberAttribute('fabric_storage_pool_quota');
  }
  public set fabricStoragePoolQuota(value: number) {
    this._fabricStoragePoolQuota = value;
  }
  public resetFabricStoragePoolQuota() {
    this._fabricStoragePoolQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricStoragePoolQuotaInput() {
    return this._fabricStoragePoolQuota;
  }

  // fabric_storage_pool_size - computed: true, optional: true, required: false
  private _fabricStoragePoolSize?: number; 
  public get fabricStoragePoolSize() {
    return this.getNumberAttribute('fabric_storage_pool_size');
  }
  public set fabricStoragePoolSize(value: number) {
    this._fabricStoragePoolSize = value;
  }
  public resetFabricStoragePoolSize() {
    this._fabricStoragePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricStoragePoolSizeInput() {
    return this._fabricStoragePoolSize;
  }

  // faz_status - computed: true, optional: true, required: false
  private _fazStatus?: string; 
  public get fazStatus() {
    return this.getStringAttribute('faz_status');
  }
  public set fazStatus(value: string) {
    this._fazStatus = value;
  }
  public resetFazStatus() {
    this._fazStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazStatusInput() {
    return this._fazStatus;
  }

  // fcp_cfg_service - computed: true, optional: true, required: false
  private _fcpCfgService?: string; 
  public get fcpCfgService() {
    return this.getStringAttribute('fcp_cfg_service');
  }
  public set fcpCfgService(value: string) {
    this._fcpCfgService = value;
  }
  public resetFcpCfgService() {
    this._fcpCfgService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcpCfgServiceInput() {
    return this._fcpCfgService;
  }

  // fgfm_allow_vm - computed: true, optional: true, required: false
  private _fgfmAllowVm?: string; 
  public get fgfmAllowVm() {
    return this.getStringAttribute('fgfm_allow_vm');
  }
  public set fgfmAllowVm(value: string) {
    this._fgfmAllowVm = value;
  }
  public resetFgfmAllowVm() {
    this._fgfmAllowVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmAllowVmInput() {
    return this._fgfmAllowVm;
  }

  // fgfm_ca_cert - computed: false, optional: true, required: false
  private _fgfmCaCert?: string; 
  public get fgfmCaCert() {
    return this.getStringAttribute('fgfm_ca_cert');
  }
  public set fgfmCaCert(value: string) {
    this._fgfmCaCert = value;
  }
  public resetFgfmCaCert() {
    this._fgfmCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmCaCertInput() {
    return this._fgfmCaCert;
  }

  // fgfm_cert_exclusive - computed: true, optional: true, required: false
  private _fgfmCertExclusive?: string; 
  public get fgfmCertExclusive() {
    return this.getStringAttribute('fgfm_cert_exclusive');
  }
  public set fgfmCertExclusive(value: string) {
    this._fgfmCertExclusive = value;
  }
  public resetFgfmCertExclusive() {
    this._fgfmCertExclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmCertExclusiveInput() {
    return this._fgfmCertExclusive;
  }

  // fgfm_deny_unknown - computed: true, optional: true, required: false
  private _fgfmDenyUnknown?: string; 
  public get fgfmDenyUnknown() {
    return this.getStringAttribute('fgfm_deny_unknown');
  }
  public set fgfmDenyUnknown(value: string) {
    this._fgfmDenyUnknown = value;
  }
  public resetFgfmDenyUnknown() {
    this._fgfmDenyUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmDenyUnknownInput() {
    return this._fgfmDenyUnknown;
  }

  // fgfm_local_cert - computed: false, optional: true, required: false
  private _fgfmLocalCert?: string; 
  public get fgfmLocalCert() {
    return this.getStringAttribute('fgfm_local_cert');
  }
  public set fgfmLocalCert(value: string) {
    this._fgfmLocalCert = value;
  }
  public resetFgfmLocalCert() {
    this._fgfmLocalCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmLocalCertInput() {
    return this._fgfmLocalCert;
  }

  // fgfm_peercert_withoutsn - computed: true, optional: true, required: false
  private _fgfmPeercertWithoutsn?: string; 
  public get fgfmPeercertWithoutsn() {
    return this.getStringAttribute('fgfm_peercert_withoutsn');
  }
  public set fgfmPeercertWithoutsn(value: string) {
    this._fgfmPeercertWithoutsn = value;
  }
  public resetFgfmPeercertWithoutsn() {
    this._fgfmPeercertWithoutsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmPeercertWithoutsnInput() {
    return this._fgfmPeercertWithoutsn;
  }

  // fgfm_ssl_protocol - computed: true, optional: true, required: false
  private _fgfmSslProtocol?: string; 
  public get fgfmSslProtocol() {
    return this.getStringAttribute('fgfm_ssl_protocol');
  }
  public set fgfmSslProtocol(value: string) {
    this._fgfmSslProtocol = value;
  }
  public resetFgfmSslProtocol() {
    this._fgfmSslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgfmSslProtocolInput() {
    return this._fgfmSslProtocol;
  }

  // fortiservice_port - computed: true, optional: true, required: false
  private _fortiservicePort?: number; 
  public get fortiservicePort() {
    return this.getNumberAttribute('fortiservice_port');
  }
  public set fortiservicePort(value: number) {
    this._fortiservicePort = value;
  }
  public resetFortiservicePort() {
    this._fortiservicePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiservicePortInput() {
    return this._fortiservicePort;
  }

  // global_ssl_protocol - computed: true, optional: true, required: false
  private _globalSslProtocol?: string; 
  public get globalSslProtocol() {
    return this.getStringAttribute('global_ssl_protocol');
  }
  public set globalSslProtocol(value: string) {
    this._globalSslProtocol = value;
  }
  public resetGlobalSslProtocol() {
    this._globalSslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSslProtocolInput() {
    return this._globalSslProtocol;
  }

  // gui_curl_timeout - computed: true, optional: true, required: false
  private _guiCurlTimeout?: number; 
  public get guiCurlTimeout() {
    return this.getNumberAttribute('gui_curl_timeout');
  }
  public set guiCurlTimeout(value: number) {
    this._guiCurlTimeout = value;
  }
  public resetGuiCurlTimeout() {
    this._guiCurlTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiCurlTimeoutInput() {
    return this._guiCurlTimeout;
  }

  // gui_polling_interval - computed: true, optional: true, required: false
  private _guiPollingInterval?: number; 
  public get guiPollingInterval() {
    return this.getNumberAttribute('gui_polling_interval');
  }
  public set guiPollingInterval(value: number) {
    this._guiPollingInterval = value;
  }
  public resetGuiPollingInterval() {
    this._guiPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiPollingIntervalInput() {
    return this._guiPollingInterval;
  }

  // ha_member_auto_grouping - computed: true, optional: true, required: false
  private _haMemberAutoGrouping?: string; 
  public get haMemberAutoGrouping() {
    return this.getStringAttribute('ha_member_auto_grouping');
  }
  public set haMemberAutoGrouping(value: string) {
    this._haMemberAutoGrouping = value;
  }
  public resetHaMemberAutoGrouping() {
    this._haMemberAutoGrouping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haMemberAutoGroupingInput() {
    return this._haMemberAutoGrouping;
  }

  // hostname - computed: true, optional: true, required: false
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

  // httpd_ssl_protocol - computed: true, optional: true, required: false
  private _httpdSslProtocol?: string[]; 
  public get httpdSslProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('httpd_ssl_protocol'));
  }
  public set httpdSslProtocol(value: string[]) {
    this._httpdSslProtocol = value;
  }
  public resetHttpdSslProtocol() {
    this._httpdSslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpdSslProtocolInput() {
    return this._httpdSslProtocol;
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

  // import_ignore_addr_cmt - computed: true, optional: true, required: false
  private _importIgnoreAddrCmt?: string; 
  public get importIgnoreAddrCmt() {
    return this.getStringAttribute('import_ignore_addr_cmt');
  }
  public set importIgnoreAddrCmt(value: string) {
    this._importIgnoreAddrCmt = value;
  }
  public resetImportIgnoreAddrCmt() {
    this._importIgnoreAddrCmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importIgnoreAddrCmtInput() {
    return this._importIgnoreAddrCmt;
  }

  // jsonapi_log - computed: true, optional: true, required: false
  private _jsonapiLog?: string; 
  public get jsonapiLog() {
    return this.getStringAttribute('jsonapi_log');
  }
  public set jsonapiLog(value: string) {
    this._jsonapiLog = value;
  }
  public resetJsonapiLog() {
    this._jsonapiLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonapiLogInput() {
    return this._jsonapiLog;
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // ldap_cache_timeout - computed: true, optional: true, required: false
  private _ldapCacheTimeout?: number; 
  public get ldapCacheTimeout() {
    return this.getNumberAttribute('ldap_cache_timeout');
  }
  public set ldapCacheTimeout(value: number) {
    this._ldapCacheTimeout = value;
  }
  public resetLdapCacheTimeout() {
    this._ldapCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapCacheTimeoutInput() {
    return this._ldapCacheTimeout;
  }

  // ldapconntimeout - computed: true, optional: true, required: false
  private _ldapconntimeout?: number; 
  public get ldapconntimeout() {
    return this.getNumberAttribute('ldapconntimeout');
  }
  public set ldapconntimeout(value: number) {
    this._ldapconntimeout = value;
  }
  public resetLdapconntimeout() {
    this._ldapconntimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapconntimeoutInput() {
    return this._ldapconntimeout;
  }

  // lock_preempt - computed: true, optional: true, required: false
  private _lockPreempt?: string; 
  public get lockPreempt() {
    return this.getStringAttribute('lock_preempt');
  }
  public set lockPreempt(value: string) {
    this._lockPreempt = value;
  }
  public resetLockPreempt() {
    this._lockPreempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockPreemptInput() {
    return this._lockPreempt;
  }

  // log_checksum - computed: true, optional: true, required: false
  private _logChecksum?: string; 
  public get logChecksum() {
    return this.getStringAttribute('log_checksum');
  }
  public set logChecksum(value: string) {
    this._logChecksum = value;
  }
  public resetLogChecksum() {
    this._logChecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logChecksumInput() {
    return this._logChecksum;
  }

  // log_checksum_upload - computed: true, optional: true, required: false
  private _logChecksumUpload?: string; 
  public get logChecksumUpload() {
    return this.getStringAttribute('log_checksum_upload');
  }
  public set logChecksumUpload(value: string) {
    this._logChecksumUpload = value;
  }
  public resetLogChecksumUpload() {
    this._logChecksumUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logChecksumUploadInput() {
    return this._logChecksumUpload;
  }

  // log_forward_cache_size - computed: true, optional: true, required: false
  private _logForwardCacheSize?: number; 
  public get logForwardCacheSize() {
    return this.getNumberAttribute('log_forward_cache_size');
  }
  public set logForwardCacheSize(value: number) {
    this._logForwardCacheSize = value;
  }
  public resetLogForwardCacheSize() {
    this._logForwardCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logForwardCacheSizeInput() {
    return this._logForwardCacheSize;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // management_ip - computed: false, optional: true, required: false
  private _managementIp?: string; 
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }
  public set managementIp(value: string) {
    this._managementIp = value;
  }
  public resetManagementIp() {
    this._managementIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpInput() {
    return this._managementIp;
  }

  // management_port - computed: true, optional: true, required: false
  private _managementPort?: number; 
  public get managementPort() {
    return this.getNumberAttribute('management_port');
  }
  public set managementPort(value: number) {
    this._managementPort = value;
  }
  public resetManagementPort() {
    this._managementPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPortInput() {
    return this._managementPort;
  }

  // mapclient_ssl_protocol - computed: true, optional: true, required: false
  private _mapclientSslProtocol?: string; 
  public get mapclientSslProtocol() {
    return this.getStringAttribute('mapclient_ssl_protocol');
  }
  public set mapclientSslProtocol(value: string) {
    this._mapclientSslProtocol = value;
  }
  public resetMapclientSslProtocol() {
    this._mapclientSslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapclientSslProtocolInput() {
    return this._mapclientSslProtocol;
  }

  // max_log_forward - computed: true, optional: true, required: false
  private _maxLogForward?: number; 
  public get maxLogForward() {
    return this.getNumberAttribute('max_log_forward');
  }
  public set maxLogForward(value: number) {
    this._maxLogForward = value;
  }
  public resetMaxLogForward() {
    this._maxLogForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogForwardInput() {
    return this._maxLogForward;
  }

  // max_running_reports - computed: true, optional: true, required: false
  private _maxRunningReports?: number; 
  public get maxRunningReports() {
    return this.getNumberAttribute('max_running_reports');
  }
  public set maxRunningReports(value: number) {
    this._maxRunningReports = value;
  }
  public resetMaxRunningReports() {
    this._maxRunningReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunningReportsInput() {
    return this._maxRunningReports;
  }

  // multiple_steps_upgrade_in_autolink - computed: true, optional: true, required: false
  private _multipleStepsUpgradeInAutolink?: string; 
  public get multipleStepsUpgradeInAutolink() {
    return this.getStringAttribute('multiple_steps_upgrade_in_autolink');
  }
  public set multipleStepsUpgradeInAutolink(value: string) {
    this._multipleStepsUpgradeInAutolink = value;
  }
  public resetMultipleStepsUpgradeInAutolink() {
    this._multipleStepsUpgradeInAutolink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleStepsUpgradeInAutolinkInput() {
    return this._multipleStepsUpgradeInAutolink;
  }

  // no_copy_permission_check - computed: true, optional: true, required: false
  private _noCopyPermissionCheck?: string; 
  public get noCopyPermissionCheck() {
    return this.getStringAttribute('no_copy_permission_check');
  }
  public set noCopyPermissionCheck(value: string) {
    this._noCopyPermissionCheck = value;
  }
  public resetNoCopyPermissionCheck() {
    this._noCopyPermissionCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCopyPermissionCheckInput() {
    return this._noCopyPermissionCheck;
  }

  // no_vip_value_check - computed: true, optional: true, required: false
  private _noVipValueCheck?: string; 
  public get noVipValueCheck() {
    return this.getStringAttribute('no_vip_value_check');
  }
  public set noVipValueCheck(value: string) {
    this._noVipValueCheck = value;
  }
  public resetNoVipValueCheck() {
    this._noVipValueCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noVipValueCheckInput() {
    return this._noVipValueCheck;
  }

  // normalized_intf_zone_only - computed: true, optional: true, required: false
  private _normalizedIntfZoneOnly?: string; 
  public get normalizedIntfZoneOnly() {
    return this.getStringAttribute('normalized_intf_zone_only');
  }
  public set normalizedIntfZoneOnly(value: string) {
    this._normalizedIntfZoneOnly = value;
  }
  public resetNormalizedIntfZoneOnly() {
    this._normalizedIntfZoneOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizedIntfZoneOnlyInput() {
    return this._normalizedIntfZoneOnly;
  }

  // object_revision_db_max - computed: true, optional: true, required: false
  private _objectRevisionDbMax?: number; 
  public get objectRevisionDbMax() {
    return this.getNumberAttribute('object_revision_db_max');
  }
  public set objectRevisionDbMax(value: number) {
    this._objectRevisionDbMax = value;
  }
  public resetObjectRevisionDbMax() {
    this._objectRevisionDbMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectRevisionDbMaxInput() {
    return this._objectRevisionDbMax;
  }

  // object_revision_mandatory_note - computed: true, optional: true, required: false
  private _objectRevisionMandatoryNote?: string; 
  public get objectRevisionMandatoryNote() {
    return this.getStringAttribute('object_revision_mandatory_note');
  }
  public set objectRevisionMandatoryNote(value: string) {
    this._objectRevisionMandatoryNote = value;
  }
  public resetObjectRevisionMandatoryNote() {
    this._objectRevisionMandatoryNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectRevisionMandatoryNoteInput() {
    return this._objectRevisionMandatoryNote;
  }

  // object_revision_object_max - computed: true, optional: true, required: false
  private _objectRevisionObjectMax?: number; 
  public get objectRevisionObjectMax() {
    return this.getNumberAttribute('object_revision_object_max');
  }
  public set objectRevisionObjectMax(value: number) {
    this._objectRevisionObjectMax = value;
  }
  public resetObjectRevisionObjectMax() {
    this._objectRevisionObjectMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectRevisionObjectMaxInput() {
    return this._objectRevisionObjectMax;
  }

  // object_revision_status - computed: true, optional: true, required: false
  private _objectRevisionStatus?: string; 
  public get objectRevisionStatus() {
    return this.getStringAttribute('object_revision_status');
  }
  public set objectRevisionStatus(value: string) {
    this._objectRevisionStatus = value;
  }
  public resetObjectRevisionStatus() {
    this._objectRevisionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectRevisionStatusInput() {
    return this._objectRevisionStatus;
  }

  // oftp_ssl_protocol - computed: true, optional: true, required: false
  private _oftpSslProtocol?: string; 
  public get oftpSslProtocol() {
    return this.getStringAttribute('oftp_ssl_protocol');
  }
  public set oftpSslProtocol(value: string) {
    this._oftpSslProtocol = value;
  }
  public resetOftpSslProtocol() {
    this._oftpSslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oftpSslProtocolInput() {
    return this._oftpSslProtocol;
  }

  // partial_install - computed: true, optional: true, required: false
  private _partialInstall?: string; 
  public get partialInstall() {
    return this.getStringAttribute('partial_install');
  }
  public set partialInstall(value: string) {
    this._partialInstall = value;
  }
  public resetPartialInstall() {
    this._partialInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialInstallInput() {
    return this._partialInstall;
  }

  // partial_install_force - computed: true, optional: true, required: false
  private _partialInstallForce?: string; 
  public get partialInstallForce() {
    return this.getStringAttribute('partial_install_force');
  }
  public set partialInstallForce(value: string) {
    this._partialInstallForce = value;
  }
  public resetPartialInstallForce() {
    this._partialInstallForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialInstallForceInput() {
    return this._partialInstallForce;
  }

  // partial_install_rev - computed: true, optional: true, required: false
  private _partialInstallRev?: string; 
  public get partialInstallRev() {
    return this.getStringAttribute('partial_install_rev');
  }
  public set partialInstallRev(value: string) {
    this._partialInstallRev = value;
  }
  public resetPartialInstallRev() {
    this._partialInstallRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialInstallRevInput() {
    return this._partialInstallRev;
  }

  // per_policy_lock - computed: true, optional: true, required: false
  private _perPolicyLock?: string; 
  public get perPolicyLock() {
    return this.getStringAttribute('per_policy_lock');
  }
  public set perPolicyLock(value: string) {
    this._perPolicyLock = value;
  }
  public resetPerPolicyLock() {
    this._perPolicyLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPolicyLockInput() {
    return this._perPolicyLock;
  }

  // perform_improve_by_ha - computed: true, optional: true, required: false
  private _performImproveByHa?: string; 
  public get performImproveByHa() {
    return this.getStringAttribute('perform_improve_by_ha');
  }
  public set performImproveByHa(value: string) {
    this._performImproveByHa = value;
  }
  public resetPerformImproveByHa() {
    this._performImproveByHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performImproveByHaInput() {
    return this._performImproveByHa;
  }

  // policy_object_icon - computed: true, optional: true, required: false
  private _policyObjectIcon?: string; 
  public get policyObjectIcon() {
    return this.getStringAttribute('policy_object_icon');
  }
  public set policyObjectIcon(value: string) {
    this._policyObjectIcon = value;
  }
  public resetPolicyObjectIcon() {
    this._policyObjectIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyObjectIconInput() {
    return this._policyObjectIcon;
  }

  // policy_object_in_dual_pane - computed: true, optional: true, required: false
  private _policyObjectInDualPane?: string; 
  public get policyObjectInDualPane() {
    return this.getStringAttribute('policy_object_in_dual_pane');
  }
  public set policyObjectInDualPane(value: string) {
    this._policyObjectInDualPane = value;
  }
  public resetPolicyObjectInDualPane() {
    this._policyObjectInDualPane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyObjectInDualPaneInput() {
    return this._policyObjectInDualPane;
  }

  // pre_login_banner - computed: true, optional: true, required: false
  private _preLoginBanner?: string; 
  public get preLoginBanner() {
    return this.getStringAttribute('pre_login_banner');
  }
  public set preLoginBanner(value: string) {
    this._preLoginBanner = value;
  }
  public resetPreLoginBanner() {
    this._preLoginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLoginBannerInput() {
    return this._preLoginBanner;
  }

  // pre_login_banner_message - computed: false, optional: true, required: false
  private _preLoginBannerMessage?: string; 
  public get preLoginBannerMessage() {
    return this.getStringAttribute('pre_login_banner_message');
  }
  public set preLoginBannerMessage(value: string) {
    this._preLoginBannerMessage = value;
  }
  public resetPreLoginBannerMessage() {
    this._preLoginBannerMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLoginBannerMessageInput() {
    return this._preLoginBannerMessage;
  }

  // private_data_encryption - computed: true, optional: true, required: false
  private _privateDataEncryption?: string; 
  public get privateDataEncryption() {
    return this.getStringAttribute('private_data_encryption');
  }
  public set privateDataEncryption(value: string) {
    this._privateDataEncryption = value;
  }
  public resetPrivateDataEncryption() {
    this._privateDataEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDataEncryptionInput() {
    return this._privateDataEncryption;
  }

  // remoteauthtimeout - computed: true, optional: true, required: false
  private _remoteauthtimeout?: number; 
  public get remoteauthtimeout() {
    return this.getNumberAttribute('remoteauthtimeout');
  }
  public set remoteauthtimeout(value: number) {
    this._remoteauthtimeout = value;
  }
  public resetRemoteauthtimeout() {
    this._remoteauthtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteauthtimeoutInput() {
    return this._remoteauthtimeout;
  }

  // save_last_hit_in_adomdb - computed: true, optional: true, required: false
  private _saveLastHitInAdomdb?: string; 
  public get saveLastHitInAdomdb() {
    return this.getStringAttribute('save_last_hit_in_adomdb');
  }
  public set saveLastHitInAdomdb(value: string) {
    this._saveLastHitInAdomdb = value;
  }
  public resetSaveLastHitInAdomdb() {
    this._saveLastHitInAdomdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveLastHitInAdomdbInput() {
    return this._saveLastHitInAdomdb;
  }

  // search_all_adoms - computed: true, optional: true, required: false
  private _searchAllAdoms?: string; 
  public get searchAllAdoms() {
    return this.getStringAttribute('search_all_adoms');
  }
  public set searchAllAdoms(value: string) {
    this._searchAllAdoms = value;
  }
  public resetSearchAllAdoms() {
    this._searchAllAdoms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAllAdomsInput() {
    return this._searchAllAdoms;
  }

  // ssh_enc_algo - computed: true, optional: true, required: false
  private _sshEncAlgo?: string[]; 
  public get sshEncAlgo() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_enc_algo'));
  }
  public set sshEncAlgo(value: string[]) {
    this._sshEncAlgo = value;
  }
  public resetSshEncAlgo() {
    this._sshEncAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshEncAlgoInput() {
    return this._sshEncAlgo;
  }

  // ssh_hostkey_algo - computed: true, optional: true, required: false
  private _sshHostkeyAlgo?: string[]; 
  public get sshHostkeyAlgo() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_hostkey_algo'));
  }
  public set sshHostkeyAlgo(value: string[]) {
    this._sshHostkeyAlgo = value;
  }
  public resetSshHostkeyAlgo() {
    this._sshHostkeyAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostkeyAlgoInput() {
    return this._sshHostkeyAlgo;
  }

  // ssh_kex_algo - computed: true, optional: true, required: false
  private _sshKexAlgo?: string[]; 
  public get sshKexAlgo() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_kex_algo'));
  }
  public set sshKexAlgo(value: string[]) {
    this._sshKexAlgo = value;
  }
  public resetSshKexAlgo() {
    this._sshKexAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKexAlgoInput() {
    return this._sshKexAlgo;
  }

  // ssh_mac_algo - computed: true, optional: true, required: false
  private _sshMacAlgo?: string[]; 
  public get sshMacAlgo() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_mac_algo'));
  }
  public set sshMacAlgo(value: string[]) {
    this._sshMacAlgo = value;
  }
  public resetSshMacAlgo() {
    this._sshMacAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshMacAlgoInput() {
    return this._sshMacAlgo;
  }

  // ssh_strong_crypto - computed: true, optional: true, required: false
  private _sshStrongCrypto?: string; 
  public get sshStrongCrypto() {
    return this.getStringAttribute('ssh_strong_crypto');
  }
  public set sshStrongCrypto(value: string) {
    this._sshStrongCrypto = value;
  }
  public resetSshStrongCrypto() {
    this._sshStrongCrypto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshStrongCryptoInput() {
    return this._sshStrongCrypto;
  }

  // ssl_low_encryption - computed: true, optional: true, required: false
  private _sslLowEncryption?: string; 
  public get sslLowEncryption() {
    return this.getStringAttribute('ssl_low_encryption');
  }
  public set sslLowEncryption(value: string) {
    this._sslLowEncryption = value;
  }
  public resetSslLowEncryption() {
    this._sslLowEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslLowEncryptionInput() {
    return this._sslLowEncryption;
  }

  // ssl_protocol - computed: true, optional: true, required: false
  private _sslProtocol?: string[]; 
  public get sslProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_protocol'));
  }
  public set sslProtocol(value: string[]) {
    this._sslProtocol = value;
  }
  public resetSslProtocol() {
    this._sslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol;
  }

  // ssl_static_key_ciphers - computed: true, optional: true, required: false
  private _sslStaticKeyCiphers?: string; 
  public get sslStaticKeyCiphers() {
    return this.getStringAttribute('ssl_static_key_ciphers');
  }
  public set sslStaticKeyCiphers(value: string) {
    this._sslStaticKeyCiphers = value;
  }
  public resetSslStaticKeyCiphers() {
    this._sslStaticKeyCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslStaticKeyCiphersInput() {
    return this._sslStaticKeyCiphers;
  }

  // table_entry_blink - computed: true, optional: true, required: false
  private _tableEntryBlink?: string; 
  public get tableEntryBlink() {
    return this.getStringAttribute('table_entry_blink');
  }
  public set tableEntryBlink(value: string) {
    this._tableEntryBlink = value;
  }
  public resetTableEntryBlink() {
    this._tableEntryBlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEntryBlinkInput() {
    return this._tableEntryBlink;
  }

  // task_list_size - computed: true, optional: true, required: false
  private _taskListSize?: number; 
  public get taskListSize() {
    return this.getNumberAttribute('task_list_size');
  }
  public set taskListSize(value: number) {
    this._taskListSize = value;
  }
  public resetTaskListSize() {
    this._taskListSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskListSizeInput() {
    return this._taskListSize;
  }

  // tftp - computed: true, optional: true, required: false
  private _tftp?: string; 
  public get tftp() {
    return this.getStringAttribute('tftp');
  }
  public set tftp(value: string) {
    this._tftp = value;
  }
  public resetTftp() {
    this._tftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpInput() {
    return this._tftp;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // tunnel_mtu - computed: true, optional: true, required: false
  private _tunnelMtu?: number; 
  public get tunnelMtu() {
    return this.getNumberAttribute('tunnel_mtu');
  }
  public set tunnelMtu(value: number) {
    this._tunnelMtu = value;
  }
  public resetTunnelMtu() {
    this._tunnelMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMtuInput() {
    return this._tunnelMtu;
  }

  // usg - computed: true, optional: true, required: false
  private _usg?: string; 
  public get usg() {
    return this.getStringAttribute('usg');
  }
  public set usg(value: string) {
    this._usg = value;
  }
  public resetUsg() {
    this._usg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usgInput() {
    return this._usg;
  }

  // vdom_mirror - computed: true, optional: true, required: false
  private _vdomMirror?: string; 
  public get vdomMirror() {
    return this.getStringAttribute('vdom_mirror');
  }
  public set vdomMirror(value: string) {
    this._vdomMirror = value;
  }
  public resetVdomMirror() {
    this._vdomMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomMirrorInput() {
    return this._vdomMirror;
  }

  // webservice_proto - computed: true, optional: true, required: false
  private _webserviceProto?: string[]; 
  public get webserviceProto() {
    return cdktf.Fn.tolist(this.getListAttribute('webservice_proto'));
  }
  public set webserviceProto(value: string[]) {
    this._webserviceProto = value;
  }
  public resetWebserviceProto() {
    this._webserviceProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webserviceProtoInput() {
    return this._webserviceProto;
  }

  // workflow_max_sessions - computed: true, optional: true, required: false
  private _workflowMaxSessions?: number; 
  public get workflowMaxSessions() {
    return this.getNumberAttribute('workflow_max_sessions');
  }
  public set workflowMaxSessions(value: number) {
    this._workflowMaxSessions = value;
  }
  public resetWorkflowMaxSessions() {
    this._workflowMaxSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowMaxSessionsInput() {
    return this._workflowMaxSessions;
  }

  // workspace_mode - computed: true, optional: true, required: false
  private _workspaceMode?: string; 
  public get workspaceMode() {
    return this.getStringAttribute('workspace_mode');
  }
  public set workspaceMode(value: string) {
    this._workspaceMode = value;
  }
  public resetWorkspaceMode() {
    this._workspaceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceModeInput() {
    return this._workspaceMode;
  }

  // workspace_unlock_after_install - computed: true, optional: true, required: false
  private _workspaceUnlockAfterInstall?: string; 
  public get workspaceUnlockAfterInstall() {
    return this.getStringAttribute('workspace_unlock_after_install');
  }
  public set workspaceUnlockAfterInstall(value: string) {
    this._workspaceUnlockAfterInstall = value;
  }
  public resetWorkspaceUnlockAfterInstall() {
    this._workspaceUnlockAfterInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceUnlockAfterInstallInput() {
    return this._workspaceUnlockAfterInstall;
  }

  // mc_policy_disabled_adoms - computed: false, optional: true, required: false
  private _mcPolicyDisabledAdoms = new SystemGlobalMcPolicyDisabledAdomsList(this, "mc_policy_disabled_adoms", false);
  public get mcPolicyDisabledAdoms() {
    return this._mcPolicyDisabledAdoms;
  }
  public putMcPolicyDisabledAdoms(value: SystemGlobalMcPolicyDisabledAdoms[] | cdktf.IResolvable) {
    this._mcPolicyDisabledAdoms.internalValue = value;
  }
  public resetMcPolicyDisabledAdoms() {
    this._mcPolicyDisabledAdoms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcPolicyDisabledAdomsInput() {
    return this._mcPolicyDisabledAdoms.internalValue;
  }

  // ssl_cipher_suites - computed: false, optional: true, required: false
  private _sslCipherSuites = new SystemGlobalSslCipherSuitesList(this, "ssl_cipher_suites", false);
  public get sslCipherSuites() {
    return this._sslCipherSuites;
  }
  public putSslCipherSuites(value: SystemGlobalSslCipherSuites[] | cdktf.IResolvable) {
    this._sslCipherSuites.internalValue = value;
  }
  public resetSslCipherSuites() {
    this._sslCipherSuites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherSuitesInput() {
    return this._sslCipherSuites.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_host: cdktf.stringToTerraform(this._adminHost),
      admin_lockout_duration: cdktf.numberToTerraform(this._adminLockoutDuration),
      admin_lockout_method: cdktf.stringToTerraform(this._adminLockoutMethod),
      admin_lockout_threshold: cdktf.numberToTerraform(this._adminLockoutThreshold),
      admin_ssh_grace_time: cdktf.numberToTerraform(this._adminSshGraceTime),
      adom_mode: cdktf.stringToTerraform(this._adomMode),
      adom_rev_auto_delete: cdktf.stringToTerraform(this._adomRevAutoDelete),
      adom_rev_max_backup_revisions: cdktf.numberToTerraform(this._adomRevMaxBackupRevisions),
      adom_rev_max_days: cdktf.numberToTerraform(this._adomRevMaxDays),
      adom_rev_max_revisions: cdktf.numberToTerraform(this._adomRevMaxRevisions),
      adom_select: cdktf.stringToTerraform(this._adomSelect),
      adom_status: cdktf.stringToTerraform(this._adomStatus),
      apache_mode: cdktf.stringToTerraform(this._apacheMode),
      apache_wsgi_processes: cdktf.numberToTerraform(this._apacheWsgiProcesses),
      api_ip_binding: cdktf.stringToTerraform(this._apiIpBinding),
      clone_name_option: cdktf.stringToTerraform(this._cloneNameOption),
      clt_cert_req: cdktf.stringToTerraform(this._cltCertReq),
      console_output: cdktf.stringToTerraform(this._consoleOutput),
      contentpack_fgt_install: cdktf.stringToTerraform(this._contentpackFgtInstall),
      country_flag: cdktf.stringToTerraform(this._countryFlag),
      create_revision: cdktf.stringToTerraform(this._createRevision),
      daylightsavetime: cdktf.stringToTerraform(this._daylightsavetime),
      detect_unregistered_log_device: cdktf.stringToTerraform(this._detectUnregisteredLogDevice),
      device_view_mode: cdktf.stringToTerraform(this._deviceViewMode),
      dh_params: cdktf.stringToTerraform(this._dhParams),
      disable_module: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disableModule),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      enc_algorithm: cdktf.stringToTerraform(this._encAlgorithm),
      fabric_storage_pool_quota: cdktf.numberToTerraform(this._fabricStoragePoolQuota),
      fabric_storage_pool_size: cdktf.numberToTerraform(this._fabricStoragePoolSize),
      faz_status: cdktf.stringToTerraform(this._fazStatus),
      fcp_cfg_service: cdktf.stringToTerraform(this._fcpCfgService),
      fgfm_allow_vm: cdktf.stringToTerraform(this._fgfmAllowVm),
      fgfm_ca_cert: cdktf.stringToTerraform(this._fgfmCaCert),
      fgfm_cert_exclusive: cdktf.stringToTerraform(this._fgfmCertExclusive),
      fgfm_deny_unknown: cdktf.stringToTerraform(this._fgfmDenyUnknown),
      fgfm_local_cert: cdktf.stringToTerraform(this._fgfmLocalCert),
      fgfm_peercert_withoutsn: cdktf.stringToTerraform(this._fgfmPeercertWithoutsn),
      fgfm_ssl_protocol: cdktf.stringToTerraform(this._fgfmSslProtocol),
      fortiservice_port: cdktf.numberToTerraform(this._fortiservicePort),
      global_ssl_protocol: cdktf.stringToTerraform(this._globalSslProtocol),
      gui_curl_timeout: cdktf.numberToTerraform(this._guiCurlTimeout),
      gui_polling_interval: cdktf.numberToTerraform(this._guiPollingInterval),
      ha_member_auto_grouping: cdktf.stringToTerraform(this._haMemberAutoGrouping),
      hostname: cdktf.stringToTerraform(this._hostname),
      httpd_ssl_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpdSslProtocol),
      id: cdktf.stringToTerraform(this._id),
      import_ignore_addr_cmt: cdktf.stringToTerraform(this._importIgnoreAddrCmt),
      jsonapi_log: cdktf.stringToTerraform(this._jsonapiLog),
      language: cdktf.stringToTerraform(this._language),
      latitude: cdktf.stringToTerraform(this._latitude),
      ldap_cache_timeout: cdktf.numberToTerraform(this._ldapCacheTimeout),
      ldapconntimeout: cdktf.numberToTerraform(this._ldapconntimeout),
      lock_preempt: cdktf.stringToTerraform(this._lockPreempt),
      log_checksum: cdktf.stringToTerraform(this._logChecksum),
      log_checksum_upload: cdktf.stringToTerraform(this._logChecksumUpload),
      log_forward_cache_size: cdktf.numberToTerraform(this._logForwardCacheSize),
      longitude: cdktf.stringToTerraform(this._longitude),
      management_ip: cdktf.stringToTerraform(this._managementIp),
      management_port: cdktf.numberToTerraform(this._managementPort),
      mapclient_ssl_protocol: cdktf.stringToTerraform(this._mapclientSslProtocol),
      max_log_forward: cdktf.numberToTerraform(this._maxLogForward),
      max_running_reports: cdktf.numberToTerraform(this._maxRunningReports),
      multiple_steps_upgrade_in_autolink: cdktf.stringToTerraform(this._multipleStepsUpgradeInAutolink),
      no_copy_permission_check: cdktf.stringToTerraform(this._noCopyPermissionCheck),
      no_vip_value_check: cdktf.stringToTerraform(this._noVipValueCheck),
      normalized_intf_zone_only: cdktf.stringToTerraform(this._normalizedIntfZoneOnly),
      object_revision_db_max: cdktf.numberToTerraform(this._objectRevisionDbMax),
      object_revision_mandatory_note: cdktf.stringToTerraform(this._objectRevisionMandatoryNote),
      object_revision_object_max: cdktf.numberToTerraform(this._objectRevisionObjectMax),
      object_revision_status: cdktf.stringToTerraform(this._objectRevisionStatus),
      oftp_ssl_protocol: cdktf.stringToTerraform(this._oftpSslProtocol),
      partial_install: cdktf.stringToTerraform(this._partialInstall),
      partial_install_force: cdktf.stringToTerraform(this._partialInstallForce),
      partial_install_rev: cdktf.stringToTerraform(this._partialInstallRev),
      per_policy_lock: cdktf.stringToTerraform(this._perPolicyLock),
      perform_improve_by_ha: cdktf.stringToTerraform(this._performImproveByHa),
      policy_object_icon: cdktf.stringToTerraform(this._policyObjectIcon),
      policy_object_in_dual_pane: cdktf.stringToTerraform(this._policyObjectInDualPane),
      pre_login_banner: cdktf.stringToTerraform(this._preLoginBanner),
      pre_login_banner_message: cdktf.stringToTerraform(this._preLoginBannerMessage),
      private_data_encryption: cdktf.stringToTerraform(this._privateDataEncryption),
      remoteauthtimeout: cdktf.numberToTerraform(this._remoteauthtimeout),
      save_last_hit_in_adomdb: cdktf.stringToTerraform(this._saveLastHitInAdomdb),
      search_all_adoms: cdktf.stringToTerraform(this._searchAllAdoms),
      ssh_enc_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshEncAlgo),
      ssh_hostkey_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshHostkeyAlgo),
      ssh_kex_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKexAlgo),
      ssh_mac_algo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshMacAlgo),
      ssh_strong_crypto: cdktf.stringToTerraform(this._sshStrongCrypto),
      ssl_low_encryption: cdktf.stringToTerraform(this._sslLowEncryption),
      ssl_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslProtocol),
      ssl_static_key_ciphers: cdktf.stringToTerraform(this._sslStaticKeyCiphers),
      table_entry_blink: cdktf.stringToTerraform(this._tableEntryBlink),
      task_list_size: cdktf.numberToTerraform(this._taskListSize),
      tftp: cdktf.stringToTerraform(this._tftp),
      timezone: cdktf.stringToTerraform(this._timezone),
      tunnel_mtu: cdktf.numberToTerraform(this._tunnelMtu),
      usg: cdktf.stringToTerraform(this._usg),
      vdom_mirror: cdktf.stringToTerraform(this._vdomMirror),
      webservice_proto: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webserviceProto),
      workflow_max_sessions: cdktf.numberToTerraform(this._workflowMaxSessions),
      workspace_mode: cdktf.stringToTerraform(this._workspaceMode),
      workspace_unlock_after_install: cdktf.stringToTerraform(this._workspaceUnlockAfterInstall),
      mc_policy_disabled_adoms: cdktf.listMapper(systemGlobalMcPolicyDisabledAdomsToTerraform, true)(this._mcPolicyDisabledAdoms.internalValue),
      ssl_cipher_suites: cdktf.listMapper(systemGlobalSslCipherSuitesToTerraform, true)(this._sslCipherSuites.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_host: {
        value: cdktf.stringToHclTerraform(this._adminHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_lockout_duration: {
        value: cdktf.numberToHclTerraform(this._adminLockoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_lockout_method: {
        value: cdktf.stringToHclTerraform(this._adminLockoutMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_lockout_threshold: {
        value: cdktf.numberToHclTerraform(this._adminLockoutThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_ssh_grace_time: {
        value: cdktf.numberToHclTerraform(this._adminSshGraceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adom_mode: {
        value: cdktf.stringToHclTerraform(this._adomMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_rev_auto_delete: {
        value: cdktf.stringToHclTerraform(this._adomRevAutoDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_rev_max_backup_revisions: {
        value: cdktf.numberToHclTerraform(this._adomRevMaxBackupRevisions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adom_rev_max_days: {
        value: cdktf.numberToHclTerraform(this._adomRevMaxDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adom_rev_max_revisions: {
        value: cdktf.numberToHclTerraform(this._adomRevMaxRevisions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      adom_select: {
        value: cdktf.stringToHclTerraform(this._adomSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_status: {
        value: cdktf.stringToHclTerraform(this._adomStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apache_mode: {
        value: cdktf.stringToHclTerraform(this._apacheMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apache_wsgi_processes: {
        value: cdktf.numberToHclTerraform(this._apacheWsgiProcesses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_ip_binding: {
        value: cdktf.stringToHclTerraform(this._apiIpBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clone_name_option: {
        value: cdktf.stringToHclTerraform(this._cloneNameOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clt_cert_req: {
        value: cdktf.stringToHclTerraform(this._cltCertReq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_output: {
        value: cdktf.stringToHclTerraform(this._consoleOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contentpack_fgt_install: {
        value: cdktf.stringToHclTerraform(this._contentpackFgtInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_flag: {
        value: cdktf.stringToHclTerraform(this._countryFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_revision: {
        value: cdktf.stringToHclTerraform(this._createRevision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daylightsavetime: {
        value: cdktf.stringToHclTerraform(this._daylightsavetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detect_unregistered_log_device: {
        value: cdktf.stringToHclTerraform(this._detectUnregisteredLogDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_view_mode: {
        value: cdktf.stringToHclTerraform(this._deviceViewMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_params: {
        value: cdktf.stringToHclTerraform(this._dhParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_module: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disableModule),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enc_algorithm: {
        value: cdktf.stringToHclTerraform(this._encAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_storage_pool_quota: {
        value: cdktf.numberToHclTerraform(this._fabricStoragePoolQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_storage_pool_size: {
        value: cdktf.numberToHclTerraform(this._fabricStoragePoolSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      faz_status: {
        value: cdktf.stringToHclTerraform(this._fazStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fcp_cfg_service: {
        value: cdktf.stringToHclTerraform(this._fcpCfgService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgfm_allow_vm: {
        value: cdktf.stringToHclTerraform(this._fgfmAllowVm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgfm_ca_cert: {
        value: cdktf.stringToHclTerraform(this._fgfmCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgfm_cert_exclusive: {
        value: cdktf.stringToHclTerraform(this._fgfmCertExclusive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgfm_deny_unknown: {
        value: cdktf.stringToHclTerraform(this._fgfmDenyUnknown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgfm_local_cert: {
        value: cdktf.stringToHclTerraform(this._fgfmLocalCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgfm_peercert_withoutsn: {
        value: cdktf.stringToHclTerraform(this._fgfmPeercertWithoutsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgfm_ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._fgfmSslProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiservice_port: {
        value: cdktf.numberToHclTerraform(this._fortiservicePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      global_ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._globalSslProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_curl_timeout: {
        value: cdktf.numberToHclTerraform(this._guiCurlTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gui_polling_interval: {
        value: cdktf.numberToHclTerraform(this._guiPollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_member_auto_grouping: {
        value: cdktf.stringToHclTerraform(this._haMemberAutoGrouping),
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
      httpd_ssl_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpdSslProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_ignore_addr_cmt: {
        value: cdktf.stringToHclTerraform(this._importIgnoreAddrCmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jsonapi_log: {
        value: cdktf.stringToHclTerraform(this._jsonapiLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latitude: {
        value: cdktf.stringToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._ldapCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldapconntimeout: {
        value: cdktf.numberToHclTerraform(this._ldapconntimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lock_preempt: {
        value: cdktf.stringToHclTerraform(this._lockPreempt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_checksum: {
        value: cdktf.stringToHclTerraform(this._logChecksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_checksum_upload: {
        value: cdktf.stringToHclTerraform(this._logChecksumUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_forward_cache_size: {
        value: cdktf.numberToHclTerraform(this._logForwardCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      longitude: {
        value: cdktf.stringToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_ip: {
        value: cdktf.stringToHclTerraform(this._managementIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_port: {
        value: cdktf.numberToHclTerraform(this._managementPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mapclient_ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._mapclientSslProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_log_forward: {
        value: cdktf.numberToHclTerraform(this._maxLogForward),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_running_reports: {
        value: cdktf.numberToHclTerraform(this._maxRunningReports),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multiple_steps_upgrade_in_autolink: {
        value: cdktf.stringToHclTerraform(this._multipleStepsUpgradeInAutolink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_copy_permission_check: {
        value: cdktf.stringToHclTerraform(this._noCopyPermissionCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_vip_value_check: {
        value: cdktf.stringToHclTerraform(this._noVipValueCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      normalized_intf_zone_only: {
        value: cdktf.stringToHclTerraform(this._normalizedIntfZoneOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_revision_db_max: {
        value: cdktf.numberToHclTerraform(this._objectRevisionDbMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_revision_mandatory_note: {
        value: cdktf.stringToHclTerraform(this._objectRevisionMandatoryNote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_revision_object_max: {
        value: cdktf.numberToHclTerraform(this._objectRevisionObjectMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_revision_status: {
        value: cdktf.stringToHclTerraform(this._objectRevisionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oftp_ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._oftpSslProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_install: {
        value: cdktf.stringToHclTerraform(this._partialInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_install_force: {
        value: cdktf.stringToHclTerraform(this._partialInstallForce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partial_install_rev: {
        value: cdktf.stringToHclTerraform(this._partialInstallRev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_policy_lock: {
        value: cdktf.stringToHclTerraform(this._perPolicyLock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perform_improve_by_ha: {
        value: cdktf.stringToHclTerraform(this._performImproveByHa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_object_icon: {
        value: cdktf.stringToHclTerraform(this._policyObjectIcon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_object_in_dual_pane: {
        value: cdktf.stringToHclTerraform(this._policyObjectInDualPane),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_login_banner: {
        value: cdktf.stringToHclTerraform(this._preLoginBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_login_banner_message: {
        value: cdktf.stringToHclTerraform(this._preLoginBannerMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_data_encryption: {
        value: cdktf.stringToHclTerraform(this._privateDataEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remoteauthtimeout: {
        value: cdktf.numberToHclTerraform(this._remoteauthtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      save_last_hit_in_adomdb: {
        value: cdktf.stringToHclTerraform(this._saveLastHitInAdomdb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_all_adoms: {
        value: cdktf.stringToHclTerraform(this._searchAllAdoms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_enc_algo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshEncAlgo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_hostkey_algo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshHostkeyAlgo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_kex_algo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKexAlgo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_mac_algo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshMacAlgo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_strong_crypto: {
        value: cdktf.stringToHclTerraform(this._sshStrongCrypto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_low_encryption: {
        value: cdktf.stringToHclTerraform(this._sslLowEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_protocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslProtocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_static_key_ciphers: {
        value: cdktf.stringToHclTerraform(this._sslStaticKeyCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_entry_blink: {
        value: cdktf.stringToHclTerraform(this._tableEntryBlink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_list_size: {
        value: cdktf.numberToHclTerraform(this._taskListSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tftp: {
        value: cdktf.stringToHclTerraform(this._tftp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_mtu: {
        value: cdktf.numberToHclTerraform(this._tunnelMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usg: {
        value: cdktf.stringToHclTerraform(this._usg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom_mirror: {
        value: cdktf.stringToHclTerraform(this._vdomMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webservice_proto: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webserviceProto),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      workflow_max_sessions: {
        value: cdktf.numberToHclTerraform(this._workflowMaxSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace_mode: {
        value: cdktf.stringToHclTerraform(this._workspaceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_unlock_after_install: {
        value: cdktf.stringToHclTerraform(this._workspaceUnlockAfterInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mc_policy_disabled_adoms: {
        value: cdktf.listMapperHcl(systemGlobalMcPolicyDisabledAdomsToHclTerraform, true)(this._mcPolicyDisabledAdoms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemGlobalMcPolicyDisabledAdomsList",
      },
      ssl_cipher_suites: {
        value: cdktf.listMapperHcl(systemGlobalSslCipherSuitesToHclTerraform, true)(this._sslCipherSuites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemGlobalSslCipherSuitesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
