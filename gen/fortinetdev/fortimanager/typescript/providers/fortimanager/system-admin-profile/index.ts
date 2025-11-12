// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#adom_admin SystemAdminProfile#adom_admin}
  */
  readonly adomAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#adom_lock SystemAdminProfile#adom_lock}
  */
  readonly adomLock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#adom_policy_packages SystemAdminProfile#adom_policy_packages}
  */
  readonly adomPolicyPackages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#adom_switch SystemAdminProfile#adom_switch}
  */
  readonly adomSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#allow_to_install SystemAdminProfile#allow_to_install}
  */
  readonly allowToInstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#app_filter SystemAdminProfile#app_filter}
  */
  readonly appFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#assignment SystemAdminProfile#assignment}
  */
  readonly assignment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#change_password SystemAdminProfile#change_password}
  */
  readonly changePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#config_retrieve SystemAdminProfile#config_retrieve}
  */
  readonly configRetrieve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#config_revert SystemAdminProfile#config_revert}
  */
  readonly configRevert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#consistency_check SystemAdminProfile#consistency_check}
  */
  readonly consistencyCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#datamask SystemAdminProfile#datamask}
  */
  readonly datamask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#datamask_custom_priority SystemAdminProfile#datamask_custom_priority}
  */
  readonly datamaskCustomPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#datamask_fields SystemAdminProfile#datamask_fields}
  */
  readonly datamaskFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#datamask_key SystemAdminProfile#datamask_key}
  */
  readonly datamaskKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#datamask_unmasked_time SystemAdminProfile#datamask_unmasked_time}
  */
  readonly datamaskUnmaskedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#deploy_management SystemAdminProfile#deploy_management}
  */
  readonly deployManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#description SystemAdminProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_ap SystemAdminProfile#device_ap}
  */
  readonly deviceAp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_config SystemAdminProfile#device_config}
  */
  readonly deviceConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_forticlient SystemAdminProfile#device_forticlient}
  */
  readonly deviceForticlient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_fortiextender SystemAdminProfile#device_fortiextender}
  */
  readonly deviceFortiextender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_fortiswitch SystemAdminProfile#device_fortiswitch}
  */
  readonly deviceFortiswitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_manager SystemAdminProfile#device_manager}
  */
  readonly deviceManager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_op SystemAdminProfile#device_op}
  */
  readonly deviceOp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_policy_package_lock SystemAdminProfile#device_policy_package_lock}
  */
  readonly devicePolicyPackageLock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_profile SystemAdminProfile#device_profile}
  */
  readonly deviceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_revision_deletion SystemAdminProfile#device_revision_deletion}
  */
  readonly deviceRevisionDeletion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#device_wan_link_load_balance SystemAdminProfile#device_wan_link_load_balance}
  */
  readonly deviceWanLinkLoadBalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#dynamic_sort_subtable SystemAdminProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#event_management SystemAdminProfile#event_management}
  */
  readonly eventManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#extension_access SystemAdminProfile#extension_access}
  */
  readonly extensionAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#fabric_viewer SystemAdminProfile#fabric_viewer}
  */
  readonly fabricViewer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#fgd_center SystemAdminProfile#fgd_center}
  */
  readonly fgdCenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#fgd_center_advanced SystemAdminProfile#fgd_center_advanced}
  */
  readonly fgdCenterAdvanced?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#fgd_center_fmw_mgmt SystemAdminProfile#fgd_center_fmw_mgmt}
  */
  readonly fgdCenterFmwMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#fgd_center_licensing SystemAdminProfile#fgd_center_licensing}
  */
  readonly fgdCenterLicensing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#fgt_gui_proxy SystemAdminProfile#fgt_gui_proxy}
  */
  readonly fgtGuiProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#global_policy_packages SystemAdminProfile#global_policy_packages}
  */
  readonly globalPolicyPackages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#id SystemAdminProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#import_policy_packages SystemAdminProfile#import_policy_packages}
  */
  readonly importPolicyPackages?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#intf_mapping SystemAdminProfile#intf_mapping}
  */
  readonly intfMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ips_baseline_cfg SystemAdminProfile#ips_baseline_cfg}
  */
  readonly ipsBaselineCfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ips_baseline_ovrd SystemAdminProfile#ips_baseline_ovrd}
  */
  readonly ipsBaselineOvrd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ips_filter SystemAdminProfile#ips_filter}
  */
  readonly ipsFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ips_lock SystemAdminProfile#ips_lock}
  */
  readonly ipsLock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ips_objects SystemAdminProfile#ips_objects}
  */
  readonly ipsObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost1 SystemAdminProfile#ipv6_trusthost1}
  */
  readonly ipv6Trusthost1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost10 SystemAdminProfile#ipv6_trusthost10}
  */
  readonly ipv6Trusthost10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost2 SystemAdminProfile#ipv6_trusthost2}
  */
  readonly ipv6Trusthost2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost3 SystemAdminProfile#ipv6_trusthost3}
  */
  readonly ipv6Trusthost3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost4 SystemAdminProfile#ipv6_trusthost4}
  */
  readonly ipv6Trusthost4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost5 SystemAdminProfile#ipv6_trusthost5}
  */
  readonly ipv6Trusthost5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost6 SystemAdminProfile#ipv6_trusthost6}
  */
  readonly ipv6Trusthost6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost7 SystemAdminProfile#ipv6_trusthost7}
  */
  readonly ipv6Trusthost7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost8 SystemAdminProfile#ipv6_trusthost8}
  */
  readonly ipv6Trusthost8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#ipv6_trusthost9 SystemAdminProfile#ipv6_trusthost9}
  */
  readonly ipv6Trusthost9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#log_viewer SystemAdminProfile#log_viewer}
  */
  readonly logViewer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#policy_ips_attrs SystemAdminProfile#policy_ips_attrs}
  */
  readonly policyIpsAttrs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#policy_objects SystemAdminProfile#policy_objects}
  */
  readonly policyObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#profileid SystemAdminProfile#profileid}
  */
  readonly profileid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#read_passwd SystemAdminProfile#read_passwd}
  */
  readonly readPasswd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#realtime_monitor SystemAdminProfile#realtime_monitor}
  */
  readonly realtimeMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#report_viewer SystemAdminProfile#report_viewer}
  */
  readonly reportViewer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#rpc_permit SystemAdminProfile#rpc_permit}
  */
  readonly rpcPermit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#run_report SystemAdminProfile#run_report}
  */
  readonly runReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#scope SystemAdminProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#script_access SystemAdminProfile#script_access}
  */
  readonly scriptAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#set_install_targets SystemAdminProfile#set_install_targets}
  */
  readonly setInstallTargets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#super_user_profile SystemAdminProfile#super_user_profile}
  */
  readonly superUserProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#system_setting SystemAdminProfile#system_setting}
  */
  readonly systemSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#term_access SystemAdminProfile#term_access}
  */
  readonly termAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#triage_events SystemAdminProfile#triage_events}
  */
  readonly triageEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost1 SystemAdminProfile#trusthost1}
  */
  readonly trusthost1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost10 SystemAdminProfile#trusthost10}
  */
  readonly trusthost10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost2 SystemAdminProfile#trusthost2}
  */
  readonly trusthost2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost3 SystemAdminProfile#trusthost3}
  */
  readonly trusthost3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost4 SystemAdminProfile#trusthost4}
  */
  readonly trusthost4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost5 SystemAdminProfile#trusthost5}
  */
  readonly trusthost5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost6 SystemAdminProfile#trusthost6}
  */
  readonly trusthost6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost7 SystemAdminProfile#trusthost7}
  */
  readonly trusthost7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost8 SystemAdminProfile#trusthost8}
  */
  readonly trusthost8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#trusthost9 SystemAdminProfile#trusthost9}
  */
  readonly trusthost9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#type SystemAdminProfile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#update_incidents SystemAdminProfile#update_incidents}
  */
  readonly updateIncidents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#vpn_manager SystemAdminProfile#vpn_manager}
  */
  readonly vpnManager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#web_filter SystemAdminProfile#web_filter}
  */
  readonly webFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#write_passwd_access SystemAdminProfile#write_passwd_access}
  */
  readonly writePasswdAccess?: string;
  /**
  * datamask_custom_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#datamask_custom_fields SystemAdminProfile#datamask_custom_fields}
  */
  readonly datamaskCustomFields?: SystemAdminProfileDatamaskCustomFields[] | cdktf.IResolvable;
  /**
  * write_passwd_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#write_passwd_profiles SystemAdminProfile#write_passwd_profiles}
  */
  readonly writePasswdProfiles?: SystemAdminProfileWritePasswdProfiles[] | cdktf.IResolvable;
  /**
  * write_passwd_user_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#write_passwd_user_list SystemAdminProfile#write_passwd_user_list}
  */
  readonly writePasswdUserList?: SystemAdminProfileWritePasswdUserListStruct[] | cdktf.IResolvable;
}
export interface SystemAdminProfileDatamaskCustomFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#field_category SystemAdminProfile#field_category}
  */
  readonly fieldCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#field_name SystemAdminProfile#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#field_status SystemAdminProfile#field_status}
  */
  readonly fieldStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#field_type SystemAdminProfile#field_type}
  */
  readonly fieldType?: string;
}

export function systemAdminProfileDatamaskCustomFieldsToTerraform(struct?: SystemAdminProfileDatamaskCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_category: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldCategory),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    field_status: cdktf.stringToTerraform(struct!.fieldStatus),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
  }
}


export function systemAdminProfileDatamaskCustomFieldsToHclTerraform(struct?: SystemAdminProfileDatamaskCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_category: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldCategory),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_status: {
      value: cdktf.stringToHclTerraform(struct!.fieldStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminProfileDatamaskCustomFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminProfileDatamaskCustomFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldCategory = this._fieldCategory;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._fieldStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldStatus = this._fieldStatus;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminProfileDatamaskCustomFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldCategory = undefined;
      this._fieldName = undefined;
      this._fieldStatus = undefined;
      this._fieldType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldCategory = value.fieldCategory;
      this._fieldName = value.fieldName;
      this._fieldStatus = value.fieldStatus;
      this._fieldType = value.fieldType;
    }
  }

  // field_category - computed: true, optional: true, required: false
  private _fieldCategory?: string[]; 
  public get fieldCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('field_category'));
  }
  public set fieldCategory(value: string[]) {
    this._fieldCategory = value;
  }
  public resetFieldCategory() {
    this._fieldCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldCategoryInput() {
    return this._fieldCategory;
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_status - computed: true, optional: true, required: false
  private _fieldStatus?: string; 
  public get fieldStatus() {
    return this.getStringAttribute('field_status');
  }
  public set fieldStatus(value: string) {
    this._fieldStatus = value;
  }
  public resetFieldStatus() {
    this._fieldStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldStatusInput() {
    return this._fieldStatus;
  }

  // field_type - computed: true, optional: true, required: false
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  public resetFieldType() {
    this._fieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }
}

export class SystemAdminProfileDatamaskCustomFieldsList extends cdktf.ComplexList {
  public internalValue? : SystemAdminProfileDatamaskCustomFields[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminProfileDatamaskCustomFieldsOutputReference {
    return new SystemAdminProfileDatamaskCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminProfileWritePasswdProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#profileid SystemAdminProfile#profileid}
  */
  readonly profileid?: string;
}

export function systemAdminProfileWritePasswdProfilesToTerraform(struct?: SystemAdminProfileWritePasswdProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profileid: cdktf.stringToTerraform(struct!.profileid),
  }
}


export function systemAdminProfileWritePasswdProfilesToHclTerraform(struct?: SystemAdminProfileWritePasswdProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profileid: {
      value: cdktf.stringToHclTerraform(struct!.profileid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminProfileWritePasswdProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminProfileWritePasswdProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileid !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileid = this._profileid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminProfileWritePasswdProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileid = value.profileid;
    }
  }

  // profileid - computed: false, optional: true, required: false
  private _profileid?: string; 
  public get profileid() {
    return this.getStringAttribute('profileid');
  }
  public set profileid(value: string) {
    this._profileid = value;
  }
  public resetProfileid() {
    this._profileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileidInput() {
    return this._profileid;
  }
}

export class SystemAdminProfileWritePasswdProfilesList extends cdktf.ComplexList {
  public internalValue? : SystemAdminProfileWritePasswdProfiles[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminProfileWritePasswdProfilesOutputReference {
    return new SystemAdminProfileWritePasswdProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminProfileWritePasswdUserListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#userid SystemAdminProfile#userid}
  */
  readonly userid?: string;
}

export function systemAdminProfileWritePasswdUserListStructToTerraform(struct?: SystemAdminProfileWritePasswdUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    userid: cdktf.stringToTerraform(struct!.userid),
  }
}


export function systemAdminProfileWritePasswdUserListStructToHclTerraform(struct?: SystemAdminProfileWritePasswdUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    userid: {
      value: cdktf.stringToHclTerraform(struct!.userid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminProfileWritePasswdUserListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminProfileWritePasswdUserListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userid !== undefined) {
      hasAnyValues = true;
      internalValueResult.userid = this._userid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminProfileWritePasswdUserListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userid = value.userid;
    }
  }

  // userid - computed: false, optional: true, required: false
  private _userid?: string; 
  public get userid() {
    return this.getStringAttribute('userid');
  }
  public set userid(value: string) {
    this._userid = value;
  }
  public resetUserid() {
    this._userid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useridInput() {
    return this._userid;
  }
}

export class SystemAdminProfileWritePasswdUserListStructList extends cdktf.ComplexList {
  public internalValue? : SystemAdminProfileWritePasswdUserListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminProfileWritePasswdUserListStructOutputReference {
    return new SystemAdminProfileWritePasswdUserListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile fortimanager_system_admin_profile}
*/
export class SystemAdminProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_admin_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminProfile to import
  * @param importFromId The id of the existing SystemAdminProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_admin_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_admin_profile fortimanager_system_admin_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAdminProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_admin_profile',
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
    this._adomAdmin = config.adomAdmin;
    this._adomLock = config.adomLock;
    this._adomPolicyPackages = config.adomPolicyPackages;
    this._adomSwitch = config.adomSwitch;
    this._allowToInstall = config.allowToInstall;
    this._appFilter = config.appFilter;
    this._assignment = config.assignment;
    this._changePassword = config.changePassword;
    this._configRetrieve = config.configRetrieve;
    this._configRevert = config.configRevert;
    this._consistencyCheck = config.consistencyCheck;
    this._datamask = config.datamask;
    this._datamaskCustomPriority = config.datamaskCustomPriority;
    this._datamaskFields = config.datamaskFields;
    this._datamaskKey = config.datamaskKey;
    this._datamaskUnmaskedTime = config.datamaskUnmaskedTime;
    this._deployManagement = config.deployManagement;
    this._description = config.description;
    this._deviceAp = config.deviceAp;
    this._deviceConfig = config.deviceConfig;
    this._deviceForticlient = config.deviceForticlient;
    this._deviceFortiextender = config.deviceFortiextender;
    this._deviceFortiswitch = config.deviceFortiswitch;
    this._deviceManager = config.deviceManager;
    this._deviceOp = config.deviceOp;
    this._devicePolicyPackageLock = config.devicePolicyPackageLock;
    this._deviceProfile = config.deviceProfile;
    this._deviceRevisionDeletion = config.deviceRevisionDeletion;
    this._deviceWanLinkLoadBalance = config.deviceWanLinkLoadBalance;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eventManagement = config.eventManagement;
    this._extensionAccess = config.extensionAccess;
    this._fabricViewer = config.fabricViewer;
    this._fgdCenter = config.fgdCenter;
    this._fgdCenterAdvanced = config.fgdCenterAdvanced;
    this._fgdCenterFmwMgmt = config.fgdCenterFmwMgmt;
    this._fgdCenterLicensing = config.fgdCenterLicensing;
    this._fgtGuiProxy = config.fgtGuiProxy;
    this._globalPolicyPackages = config.globalPolicyPackages;
    this._id = config.id;
    this._importPolicyPackages = config.importPolicyPackages;
    this._intfMapping = config.intfMapping;
    this._ipsBaselineCfg = config.ipsBaselineCfg;
    this._ipsBaselineOvrd = config.ipsBaselineOvrd;
    this._ipsFilter = config.ipsFilter;
    this._ipsLock = config.ipsLock;
    this._ipsObjects = config.ipsObjects;
    this._ipv6Trusthost1 = config.ipv6Trusthost1;
    this._ipv6Trusthost10 = config.ipv6Trusthost10;
    this._ipv6Trusthost2 = config.ipv6Trusthost2;
    this._ipv6Trusthost3 = config.ipv6Trusthost3;
    this._ipv6Trusthost4 = config.ipv6Trusthost4;
    this._ipv6Trusthost5 = config.ipv6Trusthost5;
    this._ipv6Trusthost6 = config.ipv6Trusthost6;
    this._ipv6Trusthost7 = config.ipv6Trusthost7;
    this._ipv6Trusthost8 = config.ipv6Trusthost8;
    this._ipv6Trusthost9 = config.ipv6Trusthost9;
    this._logViewer = config.logViewer;
    this._policyIpsAttrs = config.policyIpsAttrs;
    this._policyObjects = config.policyObjects;
    this._profileid = config.profileid;
    this._readPasswd = config.readPasswd;
    this._realtimeMonitor = config.realtimeMonitor;
    this._reportViewer = config.reportViewer;
    this._rpcPermit = config.rpcPermit;
    this._runReport = config.runReport;
    this._scope = config.scope;
    this._scriptAccess = config.scriptAccess;
    this._setInstallTargets = config.setInstallTargets;
    this._superUserProfile = config.superUserProfile;
    this._systemSetting = config.systemSetting;
    this._termAccess = config.termAccess;
    this._triageEvents = config.triageEvents;
    this._trusthost1 = config.trusthost1;
    this._trusthost10 = config.trusthost10;
    this._trusthost2 = config.trusthost2;
    this._trusthost3 = config.trusthost3;
    this._trusthost4 = config.trusthost4;
    this._trusthost5 = config.trusthost5;
    this._trusthost6 = config.trusthost6;
    this._trusthost7 = config.trusthost7;
    this._trusthost8 = config.trusthost8;
    this._trusthost9 = config.trusthost9;
    this._type = config.type;
    this._updateIncidents = config.updateIncidents;
    this._vpnManager = config.vpnManager;
    this._webFilter = config.webFilter;
    this._writePasswdAccess = config.writePasswdAccess;
    this._datamaskCustomFields.internalValue = config.datamaskCustomFields;
    this._writePasswdProfiles.internalValue = config.writePasswdProfiles;
    this._writePasswdUserList.internalValue = config.writePasswdUserList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom_admin - computed: true, optional: true, required: false
  private _adomAdmin?: string; 
  public get adomAdmin() {
    return this.getStringAttribute('adom_admin');
  }
  public set adomAdmin(value: string) {
    this._adomAdmin = value;
  }
  public resetAdomAdmin() {
    this._adomAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomAdminInput() {
    return this._adomAdmin;
  }

  // adom_lock - computed: true, optional: true, required: false
  private _adomLock?: string; 
  public get adomLock() {
    return this.getStringAttribute('adom_lock');
  }
  public set adomLock(value: string) {
    this._adomLock = value;
  }
  public resetAdomLock() {
    this._adomLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomLockInput() {
    return this._adomLock;
  }

  // adom_policy_packages - computed: true, optional: true, required: false
  private _adomPolicyPackages?: string; 
  public get adomPolicyPackages() {
    return this.getStringAttribute('adom_policy_packages');
  }
  public set adomPolicyPackages(value: string) {
    this._adomPolicyPackages = value;
  }
  public resetAdomPolicyPackages() {
    this._adomPolicyPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomPolicyPackagesInput() {
    return this._adomPolicyPackages;
  }

  // adom_switch - computed: true, optional: true, required: false
  private _adomSwitch?: string; 
  public get adomSwitch() {
    return this.getStringAttribute('adom_switch');
  }
  public set adomSwitch(value: string) {
    this._adomSwitch = value;
  }
  public resetAdomSwitch() {
    this._adomSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomSwitchInput() {
    return this._adomSwitch;
  }

  // allow_to_install - computed: true, optional: true, required: false
  private _allowToInstall?: string; 
  public get allowToInstall() {
    return this.getStringAttribute('allow_to_install');
  }
  public set allowToInstall(value: string) {
    this._allowToInstall = value;
  }
  public resetAllowToInstall() {
    this._allowToInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowToInstallInput() {
    return this._allowToInstall;
  }

  // app_filter - computed: true, optional: true, required: false
  private _appFilter?: string; 
  public get appFilter() {
    return this.getStringAttribute('app_filter');
  }
  public set appFilter(value: string) {
    this._appFilter = value;
  }
  public resetAppFilter() {
    this._appFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFilterInput() {
    return this._appFilter;
  }

  // assignment - computed: true, optional: true, required: false
  private _assignment?: string; 
  public get assignment() {
    return this.getStringAttribute('assignment');
  }
  public set assignment(value: string) {
    this._assignment = value;
  }
  public resetAssignment() {
    this._assignment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentInput() {
    return this._assignment;
  }

  // change_password - computed: true, optional: true, required: false
  private _changePassword?: string; 
  public get changePassword() {
    return this.getStringAttribute('change_password');
  }
  public set changePassword(value: string) {
    this._changePassword = value;
  }
  public resetChangePassword() {
    this._changePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordInput() {
    return this._changePassword;
  }

  // config_retrieve - computed: true, optional: true, required: false
  private _configRetrieve?: string; 
  public get configRetrieve() {
    return this.getStringAttribute('config_retrieve');
  }
  public set configRetrieve(value: string) {
    this._configRetrieve = value;
  }
  public resetConfigRetrieve() {
    this._configRetrieve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRetrieveInput() {
    return this._configRetrieve;
  }

  // config_revert - computed: true, optional: true, required: false
  private _configRevert?: string; 
  public get configRevert() {
    return this.getStringAttribute('config_revert');
  }
  public set configRevert(value: string) {
    this._configRevert = value;
  }
  public resetConfigRevert() {
    this._configRevert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRevertInput() {
    return this._configRevert;
  }

  // consistency_check - computed: true, optional: true, required: false
  private _consistencyCheck?: string; 
  public get consistencyCheck() {
    return this.getStringAttribute('consistency_check');
  }
  public set consistencyCheck(value: string) {
    this._consistencyCheck = value;
  }
  public resetConsistencyCheck() {
    this._consistencyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyCheckInput() {
    return this._consistencyCheck;
  }

  // datamask - computed: true, optional: true, required: false
  private _datamask?: string; 
  public get datamask() {
    return this.getStringAttribute('datamask');
  }
  public set datamask(value: string) {
    this._datamask = value;
  }
  public resetDatamask() {
    this._datamask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datamaskInput() {
    return this._datamask;
  }

  // datamask_custom_priority - computed: true, optional: true, required: false
  private _datamaskCustomPriority?: string; 
  public get datamaskCustomPriority() {
    return this.getStringAttribute('datamask_custom_priority');
  }
  public set datamaskCustomPriority(value: string) {
    this._datamaskCustomPriority = value;
  }
  public resetDatamaskCustomPriority() {
    this._datamaskCustomPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datamaskCustomPriorityInput() {
    return this._datamaskCustomPriority;
  }

  // datamask_fields - computed: true, optional: true, required: false
  private _datamaskFields?: string[]; 
  public get datamaskFields() {
    return cdktf.Fn.tolist(this.getListAttribute('datamask_fields'));
  }
  public set datamaskFields(value: string[]) {
    this._datamaskFields = value;
  }
  public resetDatamaskFields() {
    this._datamaskFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datamaskFieldsInput() {
    return this._datamaskFields;
  }

  // datamask_key - computed: true, optional: true, required: false
  private _datamaskKey?: string[]; 
  public get datamaskKey() {
    return cdktf.Fn.tolist(this.getListAttribute('datamask_key'));
  }
  public set datamaskKey(value: string[]) {
    this._datamaskKey = value;
  }
  public resetDatamaskKey() {
    this._datamaskKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datamaskKeyInput() {
    return this._datamaskKey;
  }

  // datamask_unmasked_time - computed: false, optional: true, required: false
  private _datamaskUnmaskedTime?: number; 
  public get datamaskUnmaskedTime() {
    return this.getNumberAttribute('datamask_unmasked_time');
  }
  public set datamaskUnmaskedTime(value: number) {
    this._datamaskUnmaskedTime = value;
  }
  public resetDatamaskUnmaskedTime() {
    this._datamaskUnmaskedTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datamaskUnmaskedTimeInput() {
    return this._datamaskUnmaskedTime;
  }

  // deploy_management - computed: true, optional: true, required: false
  private _deployManagement?: string; 
  public get deployManagement() {
    return this.getStringAttribute('deploy_management');
  }
  public set deployManagement(value: string) {
    this._deployManagement = value;
  }
  public resetDeployManagement() {
    this._deployManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployManagementInput() {
    return this._deployManagement;
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

  // device_ap - computed: true, optional: true, required: false
  private _deviceAp?: string; 
  public get deviceAp() {
    return this.getStringAttribute('device_ap');
  }
  public set deviceAp(value: string) {
    this._deviceAp = value;
  }
  public resetDeviceAp() {
    this._deviceAp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceApInput() {
    return this._deviceAp;
  }

  // device_config - computed: true, optional: true, required: false
  private _deviceConfig?: string; 
  public get deviceConfig() {
    return this.getStringAttribute('device_config');
  }
  public set deviceConfig(value: string) {
    this._deviceConfig = value;
  }
  public resetDeviceConfig() {
    this._deviceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceConfigInput() {
    return this._deviceConfig;
  }

  // device_forticlient - computed: true, optional: true, required: false
  private _deviceForticlient?: string; 
  public get deviceForticlient() {
    return this.getStringAttribute('device_forticlient');
  }
  public set deviceForticlient(value: string) {
    this._deviceForticlient = value;
  }
  public resetDeviceForticlient() {
    this._deviceForticlient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceForticlientInput() {
    return this._deviceForticlient;
  }

  // device_fortiextender - computed: true, optional: true, required: false
  private _deviceFortiextender?: string; 
  public get deviceFortiextender() {
    return this.getStringAttribute('device_fortiextender');
  }
  public set deviceFortiextender(value: string) {
    this._deviceFortiextender = value;
  }
  public resetDeviceFortiextender() {
    this._deviceFortiextender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFortiextenderInput() {
    return this._deviceFortiextender;
  }

  // device_fortiswitch - computed: true, optional: true, required: false
  private _deviceFortiswitch?: string; 
  public get deviceFortiswitch() {
    return this.getStringAttribute('device_fortiswitch');
  }
  public set deviceFortiswitch(value: string) {
    this._deviceFortiswitch = value;
  }
  public resetDeviceFortiswitch() {
    this._deviceFortiswitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFortiswitchInput() {
    return this._deviceFortiswitch;
  }

  // device_manager - computed: true, optional: true, required: false
  private _deviceManager?: string; 
  public get deviceManager() {
    return this.getStringAttribute('device_manager');
  }
  public set deviceManager(value: string) {
    this._deviceManager = value;
  }
  public resetDeviceManager() {
    this._deviceManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceManagerInput() {
    return this._deviceManager;
  }

  // device_op - computed: true, optional: true, required: false
  private _deviceOp?: string; 
  public get deviceOp() {
    return this.getStringAttribute('device_op');
  }
  public set deviceOp(value: string) {
    this._deviceOp = value;
  }
  public resetDeviceOp() {
    this._deviceOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOpInput() {
    return this._deviceOp;
  }

  // device_policy_package_lock - computed: true, optional: true, required: false
  private _devicePolicyPackageLock?: string; 
  public get devicePolicyPackageLock() {
    return this.getStringAttribute('device_policy_package_lock');
  }
  public set devicePolicyPackageLock(value: string) {
    this._devicePolicyPackageLock = value;
  }
  public resetDevicePolicyPackageLock() {
    this._devicePolicyPackageLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePolicyPackageLockInput() {
    return this._devicePolicyPackageLock;
  }

  // device_profile - computed: true, optional: true, required: false
  private _deviceProfile?: string; 
  public get deviceProfile() {
    return this.getStringAttribute('device_profile');
  }
  public set deviceProfile(value: string) {
    this._deviceProfile = value;
  }
  public resetDeviceProfile() {
    this._deviceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceProfileInput() {
    return this._deviceProfile;
  }

  // device_revision_deletion - computed: true, optional: true, required: false
  private _deviceRevisionDeletion?: string; 
  public get deviceRevisionDeletion() {
    return this.getStringAttribute('device_revision_deletion');
  }
  public set deviceRevisionDeletion(value: string) {
    this._deviceRevisionDeletion = value;
  }
  public resetDeviceRevisionDeletion() {
    this._deviceRevisionDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRevisionDeletionInput() {
    return this._deviceRevisionDeletion;
  }

  // device_wan_link_load_balance - computed: true, optional: true, required: false
  private _deviceWanLinkLoadBalance?: string; 
  public get deviceWanLinkLoadBalance() {
    return this.getStringAttribute('device_wan_link_load_balance');
  }
  public set deviceWanLinkLoadBalance(value: string) {
    this._deviceWanLinkLoadBalance = value;
  }
  public resetDeviceWanLinkLoadBalance() {
    this._deviceWanLinkLoadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceWanLinkLoadBalanceInput() {
    return this._deviceWanLinkLoadBalance;
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

  // event_management - computed: true, optional: true, required: false
  private _eventManagement?: string; 
  public get eventManagement() {
    return this.getStringAttribute('event_management');
  }
  public set eventManagement(value: string) {
    this._eventManagement = value;
  }
  public resetEventManagement() {
    this._eventManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventManagementInput() {
    return this._eventManagement;
  }

  // extension_access - computed: true, optional: true, required: false
  private _extensionAccess?: string; 
  public get extensionAccess() {
    return this.getStringAttribute('extension_access');
  }
  public set extensionAccess(value: string) {
    this._extensionAccess = value;
  }
  public resetExtensionAccess() {
    this._extensionAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionAccessInput() {
    return this._extensionAccess;
  }

  // fabric_viewer - computed: true, optional: true, required: false
  private _fabricViewer?: string; 
  public get fabricViewer() {
    return this.getStringAttribute('fabric_viewer');
  }
  public set fabricViewer(value: string) {
    this._fabricViewer = value;
  }
  public resetFabricViewer() {
    this._fabricViewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricViewerInput() {
    return this._fabricViewer;
  }

  // fgd_center - computed: true, optional: true, required: false
  private _fgdCenter?: string; 
  public get fgdCenter() {
    return this.getStringAttribute('fgd_center');
  }
  public set fgdCenter(value: string) {
    this._fgdCenter = value;
  }
  public resetFgdCenter() {
    this._fgdCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgdCenterInput() {
    return this._fgdCenter;
  }

  // fgd_center_advanced - computed: true, optional: true, required: false
  private _fgdCenterAdvanced?: string; 
  public get fgdCenterAdvanced() {
    return this.getStringAttribute('fgd_center_advanced');
  }
  public set fgdCenterAdvanced(value: string) {
    this._fgdCenterAdvanced = value;
  }
  public resetFgdCenterAdvanced() {
    this._fgdCenterAdvanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgdCenterAdvancedInput() {
    return this._fgdCenterAdvanced;
  }

  // fgd_center_fmw_mgmt - computed: true, optional: true, required: false
  private _fgdCenterFmwMgmt?: string; 
  public get fgdCenterFmwMgmt() {
    return this.getStringAttribute('fgd_center_fmw_mgmt');
  }
  public set fgdCenterFmwMgmt(value: string) {
    this._fgdCenterFmwMgmt = value;
  }
  public resetFgdCenterFmwMgmt() {
    this._fgdCenterFmwMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgdCenterFmwMgmtInput() {
    return this._fgdCenterFmwMgmt;
  }

  // fgd_center_licensing - computed: true, optional: true, required: false
  private _fgdCenterLicensing?: string; 
  public get fgdCenterLicensing() {
    return this.getStringAttribute('fgd_center_licensing');
  }
  public set fgdCenterLicensing(value: string) {
    this._fgdCenterLicensing = value;
  }
  public resetFgdCenterLicensing() {
    this._fgdCenterLicensing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgdCenterLicensingInput() {
    return this._fgdCenterLicensing;
  }

  // fgt_gui_proxy - computed: true, optional: true, required: false
  private _fgtGuiProxy?: string; 
  public get fgtGuiProxy() {
    return this.getStringAttribute('fgt_gui_proxy');
  }
  public set fgtGuiProxy(value: string) {
    this._fgtGuiProxy = value;
  }
  public resetFgtGuiProxy() {
    this._fgtGuiProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgtGuiProxyInput() {
    return this._fgtGuiProxy;
  }

  // global_policy_packages - computed: true, optional: true, required: false
  private _globalPolicyPackages?: string; 
  public get globalPolicyPackages() {
    return this.getStringAttribute('global_policy_packages');
  }
  public set globalPolicyPackages(value: string) {
    this._globalPolicyPackages = value;
  }
  public resetGlobalPolicyPackages() {
    this._globalPolicyPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPolicyPackagesInput() {
    return this._globalPolicyPackages;
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

  // import_policy_packages - computed: true, optional: true, required: false
  private _importPolicyPackages?: string; 
  public get importPolicyPackages() {
    return this.getStringAttribute('import_policy_packages');
  }
  public set importPolicyPackages(value: string) {
    this._importPolicyPackages = value;
  }
  public resetImportPolicyPackages() {
    this._importPolicyPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importPolicyPackagesInput() {
    return this._importPolicyPackages;
  }

  // intf_mapping - computed: true, optional: true, required: false
  private _intfMapping?: string; 
  public get intfMapping() {
    return this.getStringAttribute('intf_mapping');
  }
  public set intfMapping(value: string) {
    this._intfMapping = value;
  }
  public resetIntfMapping() {
    this._intfMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfMappingInput() {
    return this._intfMapping;
  }

  // ips_baseline_cfg - computed: true, optional: true, required: false
  private _ipsBaselineCfg?: string; 
  public get ipsBaselineCfg() {
    return this.getStringAttribute('ips_baseline_cfg');
  }
  public set ipsBaselineCfg(value: string) {
    this._ipsBaselineCfg = value;
  }
  public resetIpsBaselineCfg() {
    this._ipsBaselineCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsBaselineCfgInput() {
    return this._ipsBaselineCfg;
  }

  // ips_baseline_ovrd - computed: true, optional: true, required: false
  private _ipsBaselineOvrd?: string; 
  public get ipsBaselineOvrd() {
    return this.getStringAttribute('ips_baseline_ovrd');
  }
  public set ipsBaselineOvrd(value: string) {
    this._ipsBaselineOvrd = value;
  }
  public resetIpsBaselineOvrd() {
    this._ipsBaselineOvrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsBaselineOvrdInput() {
    return this._ipsBaselineOvrd;
  }

  // ips_filter - computed: true, optional: true, required: false
  private _ipsFilter?: string; 
  public get ipsFilter() {
    return this.getStringAttribute('ips_filter');
  }
  public set ipsFilter(value: string) {
    this._ipsFilter = value;
  }
  public resetIpsFilter() {
    this._ipsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsFilterInput() {
    return this._ipsFilter;
  }

  // ips_lock - computed: true, optional: true, required: false
  private _ipsLock?: string; 
  public get ipsLock() {
    return this.getStringAttribute('ips_lock');
  }
  public set ipsLock(value: string) {
    this._ipsLock = value;
  }
  public resetIpsLock() {
    this._ipsLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsLockInput() {
    return this._ipsLock;
  }

  // ips_objects - computed: true, optional: true, required: false
  private _ipsObjects?: string; 
  public get ipsObjects() {
    return this.getStringAttribute('ips_objects');
  }
  public set ipsObjects(value: string) {
    this._ipsObjects = value;
  }
  public resetIpsObjects() {
    this._ipsObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsObjectsInput() {
    return this._ipsObjects;
  }

  // ipv6_trusthost1 - computed: true, optional: true, required: false
  private _ipv6Trusthost1?: string; 
  public get ipv6Trusthost1() {
    return this.getStringAttribute('ipv6_trusthost1');
  }
  public set ipv6Trusthost1(value: string) {
    this._ipv6Trusthost1 = value;
  }
  public resetIpv6Trusthost1() {
    this._ipv6Trusthost1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost1Input() {
    return this._ipv6Trusthost1;
  }

  // ipv6_trusthost10 - computed: true, optional: true, required: false
  private _ipv6Trusthost10?: string; 
  public get ipv6Trusthost10() {
    return this.getStringAttribute('ipv6_trusthost10');
  }
  public set ipv6Trusthost10(value: string) {
    this._ipv6Trusthost10 = value;
  }
  public resetIpv6Trusthost10() {
    this._ipv6Trusthost10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost10Input() {
    return this._ipv6Trusthost10;
  }

  // ipv6_trusthost2 - computed: true, optional: true, required: false
  private _ipv6Trusthost2?: string; 
  public get ipv6Trusthost2() {
    return this.getStringAttribute('ipv6_trusthost2');
  }
  public set ipv6Trusthost2(value: string) {
    this._ipv6Trusthost2 = value;
  }
  public resetIpv6Trusthost2() {
    this._ipv6Trusthost2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost2Input() {
    return this._ipv6Trusthost2;
  }

  // ipv6_trusthost3 - computed: true, optional: true, required: false
  private _ipv6Trusthost3?: string; 
  public get ipv6Trusthost3() {
    return this.getStringAttribute('ipv6_trusthost3');
  }
  public set ipv6Trusthost3(value: string) {
    this._ipv6Trusthost3 = value;
  }
  public resetIpv6Trusthost3() {
    this._ipv6Trusthost3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost3Input() {
    return this._ipv6Trusthost3;
  }

  // ipv6_trusthost4 - computed: true, optional: true, required: false
  private _ipv6Trusthost4?: string; 
  public get ipv6Trusthost4() {
    return this.getStringAttribute('ipv6_trusthost4');
  }
  public set ipv6Trusthost4(value: string) {
    this._ipv6Trusthost4 = value;
  }
  public resetIpv6Trusthost4() {
    this._ipv6Trusthost4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost4Input() {
    return this._ipv6Trusthost4;
  }

  // ipv6_trusthost5 - computed: true, optional: true, required: false
  private _ipv6Trusthost5?: string; 
  public get ipv6Trusthost5() {
    return this.getStringAttribute('ipv6_trusthost5');
  }
  public set ipv6Trusthost5(value: string) {
    this._ipv6Trusthost5 = value;
  }
  public resetIpv6Trusthost5() {
    this._ipv6Trusthost5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost5Input() {
    return this._ipv6Trusthost5;
  }

  // ipv6_trusthost6 - computed: true, optional: true, required: false
  private _ipv6Trusthost6?: string; 
  public get ipv6Trusthost6() {
    return this.getStringAttribute('ipv6_trusthost6');
  }
  public set ipv6Trusthost6(value: string) {
    this._ipv6Trusthost6 = value;
  }
  public resetIpv6Trusthost6() {
    this._ipv6Trusthost6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost6Input() {
    return this._ipv6Trusthost6;
  }

  // ipv6_trusthost7 - computed: true, optional: true, required: false
  private _ipv6Trusthost7?: string; 
  public get ipv6Trusthost7() {
    return this.getStringAttribute('ipv6_trusthost7');
  }
  public set ipv6Trusthost7(value: string) {
    this._ipv6Trusthost7 = value;
  }
  public resetIpv6Trusthost7() {
    this._ipv6Trusthost7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost7Input() {
    return this._ipv6Trusthost7;
  }

  // ipv6_trusthost8 - computed: true, optional: true, required: false
  private _ipv6Trusthost8?: string; 
  public get ipv6Trusthost8() {
    return this.getStringAttribute('ipv6_trusthost8');
  }
  public set ipv6Trusthost8(value: string) {
    this._ipv6Trusthost8 = value;
  }
  public resetIpv6Trusthost8() {
    this._ipv6Trusthost8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost8Input() {
    return this._ipv6Trusthost8;
  }

  // ipv6_trusthost9 - computed: true, optional: true, required: false
  private _ipv6Trusthost9?: string; 
  public get ipv6Trusthost9() {
    return this.getStringAttribute('ipv6_trusthost9');
  }
  public set ipv6Trusthost9(value: string) {
    this._ipv6Trusthost9 = value;
  }
  public resetIpv6Trusthost9() {
    this._ipv6Trusthost9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Trusthost9Input() {
    return this._ipv6Trusthost9;
  }

  // log_viewer - computed: true, optional: true, required: false
  private _logViewer?: string; 
  public get logViewer() {
    return this.getStringAttribute('log_viewer');
  }
  public set logViewer(value: string) {
    this._logViewer = value;
  }
  public resetLogViewer() {
    this._logViewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logViewerInput() {
    return this._logViewer;
  }

  // policy_ips_attrs - computed: true, optional: true, required: false
  private _policyIpsAttrs?: string; 
  public get policyIpsAttrs() {
    return this.getStringAttribute('policy_ips_attrs');
  }
  public set policyIpsAttrs(value: string) {
    this._policyIpsAttrs = value;
  }
  public resetPolicyIpsAttrs() {
    this._policyIpsAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIpsAttrsInput() {
    return this._policyIpsAttrs;
  }

  // policy_objects - computed: true, optional: true, required: false
  private _policyObjects?: string; 
  public get policyObjects() {
    return this.getStringAttribute('policy_objects');
  }
  public set policyObjects(value: string) {
    this._policyObjects = value;
  }
  public resetPolicyObjects() {
    this._policyObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyObjectsInput() {
    return this._policyObjects;
  }

  // profileid - computed: false, optional: true, required: false
  private _profileid?: string; 
  public get profileid() {
    return this.getStringAttribute('profileid');
  }
  public set profileid(value: string) {
    this._profileid = value;
  }
  public resetProfileid() {
    this._profileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileidInput() {
    return this._profileid;
  }

  // read_passwd - computed: true, optional: true, required: false
  private _readPasswd?: string; 
  public get readPasswd() {
    return this.getStringAttribute('read_passwd');
  }
  public set readPasswd(value: string) {
    this._readPasswd = value;
  }
  public resetReadPasswd() {
    this._readPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPasswdInput() {
    return this._readPasswd;
  }

  // realtime_monitor - computed: true, optional: true, required: false
  private _realtimeMonitor?: string; 
  public get realtimeMonitor() {
    return this.getStringAttribute('realtime_monitor');
  }
  public set realtimeMonitor(value: string) {
    this._realtimeMonitor = value;
  }
  public resetRealtimeMonitor() {
    this._realtimeMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeMonitorInput() {
    return this._realtimeMonitor;
  }

  // report_viewer - computed: true, optional: true, required: false
  private _reportViewer?: string; 
  public get reportViewer() {
    return this.getStringAttribute('report_viewer');
  }
  public set reportViewer(value: string) {
    this._reportViewer = value;
  }
  public resetReportViewer() {
    this._reportViewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportViewerInput() {
    return this._reportViewer;
  }

  // rpc_permit - computed: true, optional: true, required: false
  private _rpcPermit?: string; 
  public get rpcPermit() {
    return this.getStringAttribute('rpc_permit');
  }
  public set rpcPermit(value: string) {
    this._rpcPermit = value;
  }
  public resetRpcPermit() {
    this._rpcPermit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcPermitInput() {
    return this._rpcPermit;
  }

  // run_report - computed: true, optional: true, required: false
  private _runReport?: string; 
  public get runReport() {
    return this.getStringAttribute('run_report');
  }
  public set runReport(value: string) {
    this._runReport = value;
  }
  public resetRunReport() {
    this._runReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runReportInput() {
    return this._runReport;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // script_access - computed: true, optional: true, required: false
  private _scriptAccess?: string; 
  public get scriptAccess() {
    return this.getStringAttribute('script_access');
  }
  public set scriptAccess(value: string) {
    this._scriptAccess = value;
  }
  public resetScriptAccess() {
    this._scriptAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptAccessInput() {
    return this._scriptAccess;
  }

  // set_install_targets - computed: true, optional: true, required: false
  private _setInstallTargets?: string; 
  public get setInstallTargets() {
    return this.getStringAttribute('set_install_targets');
  }
  public set setInstallTargets(value: string) {
    this._setInstallTargets = value;
  }
  public resetSetInstallTargets() {
    this._setInstallTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInstallTargetsInput() {
    return this._setInstallTargets;
  }

  // super_user_profile - computed: true, optional: true, required: false
  private _superUserProfile?: string; 
  public get superUserProfile() {
    return this.getStringAttribute('super_user_profile');
  }
  public set superUserProfile(value: string) {
    this._superUserProfile = value;
  }
  public resetSuperUserProfile() {
    this._superUserProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superUserProfileInput() {
    return this._superUserProfile;
  }

  // system_setting - computed: true, optional: true, required: false
  private _systemSetting?: string; 
  public get systemSetting() {
    return this.getStringAttribute('system_setting');
  }
  public set systemSetting(value: string) {
    this._systemSetting = value;
  }
  public resetSystemSetting() {
    this._systemSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemSettingInput() {
    return this._systemSetting;
  }

  // term_access - computed: true, optional: true, required: false
  private _termAccess?: string; 
  public get termAccess() {
    return this.getStringAttribute('term_access');
  }
  public set termAccess(value: string) {
    this._termAccess = value;
  }
  public resetTermAccess() {
    this._termAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termAccessInput() {
    return this._termAccess;
  }

  // triage_events - computed: true, optional: true, required: false
  private _triageEvents?: string; 
  public get triageEvents() {
    return this.getStringAttribute('triage_events');
  }
  public set triageEvents(value: string) {
    this._triageEvents = value;
  }
  public resetTriageEvents() {
    this._triageEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triageEventsInput() {
    return this._triageEvents;
  }

  // trusthost1 - computed: true, optional: true, required: false
  private _trusthost1?: string; 
  public get trusthost1() {
    return this.getStringAttribute('trusthost1');
  }
  public set trusthost1(value: string) {
    this._trusthost1 = value;
  }
  public resetTrusthost1() {
    this._trusthost1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost1Input() {
    return this._trusthost1;
  }

  // trusthost10 - computed: true, optional: true, required: false
  private _trusthost10?: string; 
  public get trusthost10() {
    return this.getStringAttribute('trusthost10');
  }
  public set trusthost10(value: string) {
    this._trusthost10 = value;
  }
  public resetTrusthost10() {
    this._trusthost10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost10Input() {
    return this._trusthost10;
  }

  // trusthost2 - computed: true, optional: true, required: false
  private _trusthost2?: string; 
  public get trusthost2() {
    return this.getStringAttribute('trusthost2');
  }
  public set trusthost2(value: string) {
    this._trusthost2 = value;
  }
  public resetTrusthost2() {
    this._trusthost2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost2Input() {
    return this._trusthost2;
  }

  // trusthost3 - computed: true, optional: true, required: false
  private _trusthost3?: string; 
  public get trusthost3() {
    return this.getStringAttribute('trusthost3');
  }
  public set trusthost3(value: string) {
    this._trusthost3 = value;
  }
  public resetTrusthost3() {
    this._trusthost3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost3Input() {
    return this._trusthost3;
  }

  // trusthost4 - computed: true, optional: true, required: false
  private _trusthost4?: string; 
  public get trusthost4() {
    return this.getStringAttribute('trusthost4');
  }
  public set trusthost4(value: string) {
    this._trusthost4 = value;
  }
  public resetTrusthost4() {
    this._trusthost4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost4Input() {
    return this._trusthost4;
  }

  // trusthost5 - computed: true, optional: true, required: false
  private _trusthost5?: string; 
  public get trusthost5() {
    return this.getStringAttribute('trusthost5');
  }
  public set trusthost5(value: string) {
    this._trusthost5 = value;
  }
  public resetTrusthost5() {
    this._trusthost5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost5Input() {
    return this._trusthost5;
  }

  // trusthost6 - computed: true, optional: true, required: false
  private _trusthost6?: string; 
  public get trusthost6() {
    return this.getStringAttribute('trusthost6');
  }
  public set trusthost6(value: string) {
    this._trusthost6 = value;
  }
  public resetTrusthost6() {
    this._trusthost6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost6Input() {
    return this._trusthost6;
  }

  // trusthost7 - computed: true, optional: true, required: false
  private _trusthost7?: string; 
  public get trusthost7() {
    return this.getStringAttribute('trusthost7');
  }
  public set trusthost7(value: string) {
    this._trusthost7 = value;
  }
  public resetTrusthost7() {
    this._trusthost7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost7Input() {
    return this._trusthost7;
  }

  // trusthost8 - computed: true, optional: true, required: false
  private _trusthost8?: string; 
  public get trusthost8() {
    return this.getStringAttribute('trusthost8');
  }
  public set trusthost8(value: string) {
    this._trusthost8 = value;
  }
  public resetTrusthost8() {
    this._trusthost8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost8Input() {
    return this._trusthost8;
  }

  // trusthost9 - computed: true, optional: true, required: false
  private _trusthost9?: string; 
  public get trusthost9() {
    return this.getStringAttribute('trusthost9');
  }
  public set trusthost9(value: string) {
    this._trusthost9 = value;
  }
  public resetTrusthost9() {
    this._trusthost9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost9Input() {
    return this._trusthost9;
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

  // update_incidents - computed: true, optional: true, required: false
  private _updateIncidents?: string; 
  public get updateIncidents() {
    return this.getStringAttribute('update_incidents');
  }
  public set updateIncidents(value: string) {
    this._updateIncidents = value;
  }
  public resetUpdateIncidents() {
    this._updateIncidents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIncidentsInput() {
    return this._updateIncidents;
  }

  // vpn_manager - computed: true, optional: true, required: false
  private _vpnManager?: string; 
  public get vpnManager() {
    return this.getStringAttribute('vpn_manager');
  }
  public set vpnManager(value: string) {
    this._vpnManager = value;
  }
  public resetVpnManager() {
    this._vpnManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnManagerInput() {
    return this._vpnManager;
  }

  // web_filter - computed: true, optional: true, required: false
  private _webFilter?: string; 
  public get webFilter() {
    return this.getStringAttribute('web_filter');
  }
  public set webFilter(value: string) {
    this._webFilter = value;
  }
  public resetWebFilter() {
    this._webFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterInput() {
    return this._webFilter;
  }

  // write_passwd_access - computed: true, optional: true, required: false
  private _writePasswdAccess?: string; 
  public get writePasswdAccess() {
    return this.getStringAttribute('write_passwd_access');
  }
  public set writePasswdAccess(value: string) {
    this._writePasswdAccess = value;
  }
  public resetWritePasswdAccess() {
    this._writePasswdAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writePasswdAccessInput() {
    return this._writePasswdAccess;
  }

  // datamask_custom_fields - computed: false, optional: true, required: false
  private _datamaskCustomFields = new SystemAdminProfileDatamaskCustomFieldsList(this, "datamask_custom_fields", false);
  public get datamaskCustomFields() {
    return this._datamaskCustomFields;
  }
  public putDatamaskCustomFields(value: SystemAdminProfileDatamaskCustomFields[] | cdktf.IResolvable) {
    this._datamaskCustomFields.internalValue = value;
  }
  public resetDatamaskCustomFields() {
    this._datamaskCustomFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datamaskCustomFieldsInput() {
    return this._datamaskCustomFields.internalValue;
  }

  // write_passwd_profiles - computed: false, optional: true, required: false
  private _writePasswdProfiles = new SystemAdminProfileWritePasswdProfilesList(this, "write_passwd_profiles", false);
  public get writePasswdProfiles() {
    return this._writePasswdProfiles;
  }
  public putWritePasswdProfiles(value: SystemAdminProfileWritePasswdProfiles[] | cdktf.IResolvable) {
    this._writePasswdProfiles.internalValue = value;
  }
  public resetWritePasswdProfiles() {
    this._writePasswdProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writePasswdProfilesInput() {
    return this._writePasswdProfiles.internalValue;
  }

  // write_passwd_user_list - computed: false, optional: true, required: false
  private _writePasswdUserList = new SystemAdminProfileWritePasswdUserListStructList(this, "write_passwd_user_list", false);
  public get writePasswdUserList() {
    return this._writePasswdUserList;
  }
  public putWritePasswdUserList(value: SystemAdminProfileWritePasswdUserListStruct[] | cdktf.IResolvable) {
    this._writePasswdUserList.internalValue = value;
  }
  public resetWritePasswdUserList() {
    this._writePasswdUserList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writePasswdUserListInput() {
    return this._writePasswdUserList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom_admin: cdktf.stringToTerraform(this._adomAdmin),
      adom_lock: cdktf.stringToTerraform(this._adomLock),
      adom_policy_packages: cdktf.stringToTerraform(this._adomPolicyPackages),
      adom_switch: cdktf.stringToTerraform(this._adomSwitch),
      allow_to_install: cdktf.stringToTerraform(this._allowToInstall),
      app_filter: cdktf.stringToTerraform(this._appFilter),
      assignment: cdktf.stringToTerraform(this._assignment),
      change_password: cdktf.stringToTerraform(this._changePassword),
      config_retrieve: cdktf.stringToTerraform(this._configRetrieve),
      config_revert: cdktf.stringToTerraform(this._configRevert),
      consistency_check: cdktf.stringToTerraform(this._consistencyCheck),
      datamask: cdktf.stringToTerraform(this._datamask),
      datamask_custom_priority: cdktf.stringToTerraform(this._datamaskCustomPriority),
      datamask_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datamaskFields),
      datamask_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datamaskKey),
      datamask_unmasked_time: cdktf.numberToTerraform(this._datamaskUnmaskedTime),
      deploy_management: cdktf.stringToTerraform(this._deployManagement),
      description: cdktf.stringToTerraform(this._description),
      device_ap: cdktf.stringToTerraform(this._deviceAp),
      device_config: cdktf.stringToTerraform(this._deviceConfig),
      device_forticlient: cdktf.stringToTerraform(this._deviceForticlient),
      device_fortiextender: cdktf.stringToTerraform(this._deviceFortiextender),
      device_fortiswitch: cdktf.stringToTerraform(this._deviceFortiswitch),
      device_manager: cdktf.stringToTerraform(this._deviceManager),
      device_op: cdktf.stringToTerraform(this._deviceOp),
      device_policy_package_lock: cdktf.stringToTerraform(this._devicePolicyPackageLock),
      device_profile: cdktf.stringToTerraform(this._deviceProfile),
      device_revision_deletion: cdktf.stringToTerraform(this._deviceRevisionDeletion),
      device_wan_link_load_balance: cdktf.stringToTerraform(this._deviceWanLinkLoadBalance),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      event_management: cdktf.stringToTerraform(this._eventManagement),
      extension_access: cdktf.stringToTerraform(this._extensionAccess),
      fabric_viewer: cdktf.stringToTerraform(this._fabricViewer),
      fgd_center: cdktf.stringToTerraform(this._fgdCenter),
      fgd_center_advanced: cdktf.stringToTerraform(this._fgdCenterAdvanced),
      fgd_center_fmw_mgmt: cdktf.stringToTerraform(this._fgdCenterFmwMgmt),
      fgd_center_licensing: cdktf.stringToTerraform(this._fgdCenterLicensing),
      fgt_gui_proxy: cdktf.stringToTerraform(this._fgtGuiProxy),
      global_policy_packages: cdktf.stringToTerraform(this._globalPolicyPackages),
      id: cdktf.stringToTerraform(this._id),
      import_policy_packages: cdktf.stringToTerraform(this._importPolicyPackages),
      intf_mapping: cdktf.stringToTerraform(this._intfMapping),
      ips_baseline_cfg: cdktf.stringToTerraform(this._ipsBaselineCfg),
      ips_baseline_ovrd: cdktf.stringToTerraform(this._ipsBaselineOvrd),
      ips_filter: cdktf.stringToTerraform(this._ipsFilter),
      ips_lock: cdktf.stringToTerraform(this._ipsLock),
      ips_objects: cdktf.stringToTerraform(this._ipsObjects),
      ipv6_trusthost1: cdktf.stringToTerraform(this._ipv6Trusthost1),
      ipv6_trusthost10: cdktf.stringToTerraform(this._ipv6Trusthost10),
      ipv6_trusthost2: cdktf.stringToTerraform(this._ipv6Trusthost2),
      ipv6_trusthost3: cdktf.stringToTerraform(this._ipv6Trusthost3),
      ipv6_trusthost4: cdktf.stringToTerraform(this._ipv6Trusthost4),
      ipv6_trusthost5: cdktf.stringToTerraform(this._ipv6Trusthost5),
      ipv6_trusthost6: cdktf.stringToTerraform(this._ipv6Trusthost6),
      ipv6_trusthost7: cdktf.stringToTerraform(this._ipv6Trusthost7),
      ipv6_trusthost8: cdktf.stringToTerraform(this._ipv6Trusthost8),
      ipv6_trusthost9: cdktf.stringToTerraform(this._ipv6Trusthost9),
      log_viewer: cdktf.stringToTerraform(this._logViewer),
      policy_ips_attrs: cdktf.stringToTerraform(this._policyIpsAttrs),
      policy_objects: cdktf.stringToTerraform(this._policyObjects),
      profileid: cdktf.stringToTerraform(this._profileid),
      read_passwd: cdktf.stringToTerraform(this._readPasswd),
      realtime_monitor: cdktf.stringToTerraform(this._realtimeMonitor),
      report_viewer: cdktf.stringToTerraform(this._reportViewer),
      rpc_permit: cdktf.stringToTerraform(this._rpcPermit),
      run_report: cdktf.stringToTerraform(this._runReport),
      scope: cdktf.stringToTerraform(this._scope),
      script_access: cdktf.stringToTerraform(this._scriptAccess),
      set_install_targets: cdktf.stringToTerraform(this._setInstallTargets),
      super_user_profile: cdktf.stringToTerraform(this._superUserProfile),
      system_setting: cdktf.stringToTerraform(this._systemSetting),
      term_access: cdktf.stringToTerraform(this._termAccess),
      triage_events: cdktf.stringToTerraform(this._triageEvents),
      trusthost1: cdktf.stringToTerraform(this._trusthost1),
      trusthost10: cdktf.stringToTerraform(this._trusthost10),
      trusthost2: cdktf.stringToTerraform(this._trusthost2),
      trusthost3: cdktf.stringToTerraform(this._trusthost3),
      trusthost4: cdktf.stringToTerraform(this._trusthost4),
      trusthost5: cdktf.stringToTerraform(this._trusthost5),
      trusthost6: cdktf.stringToTerraform(this._trusthost6),
      trusthost7: cdktf.stringToTerraform(this._trusthost7),
      trusthost8: cdktf.stringToTerraform(this._trusthost8),
      trusthost9: cdktf.stringToTerraform(this._trusthost9),
      type: cdktf.stringToTerraform(this._type),
      update_incidents: cdktf.stringToTerraform(this._updateIncidents),
      vpn_manager: cdktf.stringToTerraform(this._vpnManager),
      web_filter: cdktf.stringToTerraform(this._webFilter),
      write_passwd_access: cdktf.stringToTerraform(this._writePasswdAccess),
      datamask_custom_fields: cdktf.listMapper(systemAdminProfileDatamaskCustomFieldsToTerraform, true)(this._datamaskCustomFields.internalValue),
      write_passwd_profiles: cdktf.listMapper(systemAdminProfileWritePasswdProfilesToTerraform, true)(this._writePasswdProfiles.internalValue),
      write_passwd_user_list: cdktf.listMapper(systemAdminProfileWritePasswdUserListStructToTerraform, true)(this._writePasswdUserList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom_admin: {
        value: cdktf.stringToHclTerraform(this._adomAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_lock: {
        value: cdktf.stringToHclTerraform(this._adomLock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_policy_packages: {
        value: cdktf.stringToHclTerraform(this._adomPolicyPackages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_switch: {
        value: cdktf.stringToHclTerraform(this._adomSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_to_install: {
        value: cdktf.stringToHclTerraform(this._allowToInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_filter: {
        value: cdktf.stringToHclTerraform(this._appFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment: {
        value: cdktf.stringToHclTerraform(this._assignment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_password: {
        value: cdktf.stringToHclTerraform(this._changePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_retrieve: {
        value: cdktf.stringToHclTerraform(this._configRetrieve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_revert: {
        value: cdktf.stringToHclTerraform(this._configRevert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consistency_check: {
        value: cdktf.stringToHclTerraform(this._consistencyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datamask: {
        value: cdktf.stringToHclTerraform(this._datamask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datamask_custom_priority: {
        value: cdktf.stringToHclTerraform(this._datamaskCustomPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datamask_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._datamaskFields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      datamask_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._datamaskKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      datamask_unmasked_time: {
        value: cdktf.numberToHclTerraform(this._datamaskUnmaskedTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deploy_management: {
        value: cdktf.stringToHclTerraform(this._deployManagement),
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
      device_ap: {
        value: cdktf.stringToHclTerraform(this._deviceAp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_config: {
        value: cdktf.stringToHclTerraform(this._deviceConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_forticlient: {
        value: cdktf.stringToHclTerraform(this._deviceForticlient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_fortiextender: {
        value: cdktf.stringToHclTerraform(this._deviceFortiextender),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_fortiswitch: {
        value: cdktf.stringToHclTerraform(this._deviceFortiswitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_manager: {
        value: cdktf.stringToHclTerraform(this._deviceManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_op: {
        value: cdktf.stringToHclTerraform(this._deviceOp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_policy_package_lock: {
        value: cdktf.stringToHclTerraform(this._devicePolicyPackageLock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_profile: {
        value: cdktf.stringToHclTerraform(this._deviceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_revision_deletion: {
        value: cdktf.stringToHclTerraform(this._deviceRevisionDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_wan_link_load_balance: {
        value: cdktf.stringToHclTerraform(this._deviceWanLinkLoadBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_management: {
        value: cdktf.stringToHclTerraform(this._eventManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_access: {
        value: cdktf.stringToHclTerraform(this._extensionAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_viewer: {
        value: cdktf.stringToHclTerraform(this._fabricViewer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgd_center: {
        value: cdktf.stringToHclTerraform(this._fgdCenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgd_center_advanced: {
        value: cdktf.stringToHclTerraform(this._fgdCenterAdvanced),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgd_center_fmw_mgmt: {
        value: cdktf.stringToHclTerraform(this._fgdCenterFmwMgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgd_center_licensing: {
        value: cdktf.stringToHclTerraform(this._fgdCenterLicensing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fgt_gui_proxy: {
        value: cdktf.stringToHclTerraform(this._fgtGuiProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_policy_packages: {
        value: cdktf.stringToHclTerraform(this._globalPolicyPackages),
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
      import_policy_packages: {
        value: cdktf.stringToHclTerraform(this._importPolicyPackages),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intf_mapping: {
        value: cdktf.stringToHclTerraform(this._intfMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_baseline_cfg: {
        value: cdktf.stringToHclTerraform(this._ipsBaselineCfg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_baseline_ovrd: {
        value: cdktf.stringToHclTerraform(this._ipsBaselineOvrd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_filter: {
        value: cdktf.stringToHclTerraform(this._ipsFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_lock: {
        value: cdktf.stringToHclTerraform(this._ipsLock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_objects: {
        value: cdktf.stringToHclTerraform(this._ipsObjects),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost1: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost10: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost2: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost3: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost4: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost5: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost6: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost7: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost8: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_trusthost9: {
        value: cdktf.stringToHclTerraform(this._ipv6Trusthost9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_viewer: {
        value: cdktf.stringToHclTerraform(this._logViewer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_ips_attrs: {
        value: cdktf.stringToHclTerraform(this._policyIpsAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_objects: {
        value: cdktf.stringToHclTerraform(this._policyObjects),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profileid: {
        value: cdktf.stringToHclTerraform(this._profileid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_passwd: {
        value: cdktf.stringToHclTerraform(this._readPasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realtime_monitor: {
        value: cdktf.stringToHclTerraform(this._realtimeMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_viewer: {
        value: cdktf.stringToHclTerraform(this._reportViewer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rpc_permit: {
        value: cdktf.stringToHclTerraform(this._rpcPermit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_report: {
        value: cdktf.stringToHclTerraform(this._runReport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script_access: {
        value: cdktf.stringToHclTerraform(this._scriptAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_install_targets: {
        value: cdktf.stringToHclTerraform(this._setInstallTargets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      super_user_profile: {
        value: cdktf.stringToHclTerraform(this._superUserProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_setting: {
        value: cdktf.stringToHclTerraform(this._systemSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      term_access: {
        value: cdktf.stringToHclTerraform(this._termAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triage_events: {
        value: cdktf.stringToHclTerraform(this._triageEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost1: {
        value: cdktf.stringToHclTerraform(this._trusthost1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost10: {
        value: cdktf.stringToHclTerraform(this._trusthost10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost2: {
        value: cdktf.stringToHclTerraform(this._trusthost2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost3: {
        value: cdktf.stringToHclTerraform(this._trusthost3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost4: {
        value: cdktf.stringToHclTerraform(this._trusthost4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost5: {
        value: cdktf.stringToHclTerraform(this._trusthost5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost6: {
        value: cdktf.stringToHclTerraform(this._trusthost6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost7: {
        value: cdktf.stringToHclTerraform(this._trusthost7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost8: {
        value: cdktf.stringToHclTerraform(this._trusthost8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost9: {
        value: cdktf.stringToHclTerraform(this._trusthost9),
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
      update_incidents: {
        value: cdktf.stringToHclTerraform(this._updateIncidents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_manager: {
        value: cdktf.stringToHclTerraform(this._vpnManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter: {
        value: cdktf.stringToHclTerraform(this._webFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_passwd_access: {
        value: cdktf.stringToHclTerraform(this._writePasswdAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datamask_custom_fields: {
        value: cdktf.listMapperHcl(systemAdminProfileDatamaskCustomFieldsToHclTerraform, true)(this._datamaskCustomFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminProfileDatamaskCustomFieldsList",
      },
      write_passwd_profiles: {
        value: cdktf.listMapperHcl(systemAdminProfileWritePasswdProfilesToHclTerraform, true)(this._writePasswdProfiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminProfileWritePasswdProfilesList",
      },
      write_passwd_user_list: {
        value: cdktf.listMapperHcl(systemAdminProfileWritePasswdUserListStructToHclTerraform, true)(this._writePasswdUserList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminProfileWritePasswdUserListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
