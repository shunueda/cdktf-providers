// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#adom_admin SystemAdminProfile#adom_admin}
  */
  readonly adomAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#adom_lock SystemAdminProfile#adom_lock}
  */
  readonly adomLock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#adom_switch SystemAdminProfile#adom_switch}
  */
  readonly adomSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#allow_to_install SystemAdminProfile#allow_to_install}
  */
  readonly allowToInstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#change_password SystemAdminProfile#change_password}
  */
  readonly changePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#datamask SystemAdminProfile#datamask}
  */
  readonly datamask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#datamask_custom_priority SystemAdminProfile#datamask_custom_priority}
  */
  readonly datamaskCustomPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#datamask_fields SystemAdminProfile#datamask_fields}
  */
  readonly datamaskFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#datamask_key SystemAdminProfile#datamask_key}
  */
  readonly datamaskKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#datamask_unmasked_time SystemAdminProfile#datamask_unmasked_time}
  */
  readonly datamaskUnmaskedTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#description SystemAdminProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#device_ap SystemAdminProfile#device_ap}
  */
  readonly deviceAp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#device_forticlient SystemAdminProfile#device_forticlient}
  */
  readonly deviceForticlient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#device_fortiextender SystemAdminProfile#device_fortiextender}
  */
  readonly deviceFortiextender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#device_fortiswitch SystemAdminProfile#device_fortiswitch}
  */
  readonly deviceFortiswitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#device_manager SystemAdminProfile#device_manager}
  */
  readonly deviceManager?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#device_op SystemAdminProfile#device_op}
  */
  readonly deviceOp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#device_policy_package_lock SystemAdminProfile#device_policy_package_lock}
  */
  readonly devicePolicyPackageLock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#device_wan_link_load_balance SystemAdminProfile#device_wan_link_load_balance}
  */
  readonly deviceWanLinkLoadBalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#dynamic_sort_subtable SystemAdminProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#event_management SystemAdminProfile#event_management}
  */
  readonly eventManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#execute_playbook SystemAdminProfile#execute_playbook}
  */
  readonly executePlaybook?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#extension_access SystemAdminProfile#extension_access}
  */
  readonly extensionAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#fabric_viewer SystemAdminProfile#fabric_viewer}
  */
  readonly fabricViewer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#fgt_gui_proxy SystemAdminProfile#fgt_gui_proxy}
  */
  readonly fgtGuiProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#fortirecorder_setting SystemAdminProfile#fortirecorder_setting}
  */
  readonly fortirecorderSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#id SystemAdminProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ips_baseline_ovrd SystemAdminProfile#ips_baseline_ovrd}
  */
  readonly ipsBaselineOvrd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ips_lock SystemAdminProfile#ips_lock}
  */
  readonly ipsLock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost1 SystemAdminProfile#ipv6_trusthost1}
  */
  readonly ipv6Trusthost1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost10 SystemAdminProfile#ipv6_trusthost10}
  */
  readonly ipv6Trusthost10?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost2 SystemAdminProfile#ipv6_trusthost2}
  */
  readonly ipv6Trusthost2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost3 SystemAdminProfile#ipv6_trusthost3}
  */
  readonly ipv6Trusthost3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost4 SystemAdminProfile#ipv6_trusthost4}
  */
  readonly ipv6Trusthost4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost5 SystemAdminProfile#ipv6_trusthost5}
  */
  readonly ipv6Trusthost5?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost6 SystemAdminProfile#ipv6_trusthost6}
  */
  readonly ipv6Trusthost6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost7 SystemAdminProfile#ipv6_trusthost7}
  */
  readonly ipv6Trusthost7?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost8 SystemAdminProfile#ipv6_trusthost8}
  */
  readonly ipv6Trusthost8?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#ipv6_trusthost9 SystemAdminProfile#ipv6_trusthost9}
  */
  readonly ipv6Trusthost9?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#log_viewer SystemAdminProfile#log_viewer}
  */
  readonly logViewer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#profileid SystemAdminProfile#profileid}
  */
  readonly profileid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#realtime_monitor SystemAdminProfile#realtime_monitor}
  */
  readonly realtimeMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#report_viewer SystemAdminProfile#report_viewer}
  */
  readonly reportViewer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#rpc_permit SystemAdminProfile#rpc_permit}
  */
  readonly rpcPermit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#run_report SystemAdminProfile#run_report}
  */
  readonly runReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#scope SystemAdminProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#script_access SystemAdminProfile#script_access}
  */
  readonly scriptAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#script_run SystemAdminProfile#script_run}
  */
  readonly scriptRun?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#super_user_profile SystemAdminProfile#super_user_profile}
  */
  readonly superUserProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#system_setting SystemAdminProfile#system_setting}
  */
  readonly systemSetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#triage_events SystemAdminProfile#triage_events}
  */
  readonly triageEvents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost1 SystemAdminProfile#trusthost1}
  */
  readonly trusthost1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost10 SystemAdminProfile#trusthost10}
  */
  readonly trusthost10?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost2 SystemAdminProfile#trusthost2}
  */
  readonly trusthost2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost3 SystemAdminProfile#trusthost3}
  */
  readonly trusthost3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost4 SystemAdminProfile#trusthost4}
  */
  readonly trusthost4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost5 SystemAdminProfile#trusthost5}
  */
  readonly trusthost5?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost6 SystemAdminProfile#trusthost6}
  */
  readonly trusthost6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost7 SystemAdminProfile#trusthost7}
  */
  readonly trusthost7?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost8 SystemAdminProfile#trusthost8}
  */
  readonly trusthost8?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#trusthost9 SystemAdminProfile#trusthost9}
  */
  readonly trusthost9?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#update_incidents SystemAdminProfile#update_incidents}
  */
  readonly updateIncidents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#write_passwd_access SystemAdminProfile#write_passwd_access}
  */
  readonly writePasswdAccess?: string;
  /**
  * datamask_custom_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#datamask_custom_fields SystemAdminProfile#datamask_custom_fields}
  */
  readonly datamaskCustomFields?: SystemAdminProfileDatamaskCustomFields[] | cdktf.IResolvable;
  /**
  * write_passwd_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#write_passwd_profiles SystemAdminProfile#write_passwd_profiles}
  */
  readonly writePasswdProfiles?: SystemAdminProfileWritePasswdProfiles[] | cdktf.IResolvable;
  /**
  * write_passwd_user_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#write_passwd_user_list SystemAdminProfile#write_passwd_user_list}
  */
  readonly writePasswdUserList?: SystemAdminProfileWritePasswdUserListStruct[] | cdktf.IResolvable;
}
export interface SystemAdminProfileDatamaskCustomFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#field_category SystemAdminProfile#field_category}
  */
  readonly fieldCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#field_name SystemAdminProfile#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#field_status SystemAdminProfile#field_status}
  */
  readonly fieldStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#field_type SystemAdminProfile#field_type}
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

  // field_category - computed: false, optional: true, required: false
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#profileid SystemAdminProfile#profileid}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#userid SystemAdminProfile#userid}
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile fortianalyzer_system_admin_profile}
*/
export class SystemAdminProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_admin_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminProfile to import
  * @param importFromId The id of the existing SystemAdminProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_admin_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/system_admin_profile fortianalyzer_system_admin_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAdminProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_admin_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
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
    this._adomSwitch = config.adomSwitch;
    this._allowToInstall = config.allowToInstall;
    this._changePassword = config.changePassword;
    this._datamask = config.datamask;
    this._datamaskCustomPriority = config.datamaskCustomPriority;
    this._datamaskFields = config.datamaskFields;
    this._datamaskKey = config.datamaskKey;
    this._datamaskUnmaskedTime = config.datamaskUnmaskedTime;
    this._description = config.description;
    this._deviceAp = config.deviceAp;
    this._deviceForticlient = config.deviceForticlient;
    this._deviceFortiextender = config.deviceFortiextender;
    this._deviceFortiswitch = config.deviceFortiswitch;
    this._deviceManager = config.deviceManager;
    this._deviceOp = config.deviceOp;
    this._devicePolicyPackageLock = config.devicePolicyPackageLock;
    this._deviceWanLinkLoadBalance = config.deviceWanLinkLoadBalance;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eventManagement = config.eventManagement;
    this._executePlaybook = config.executePlaybook;
    this._extensionAccess = config.extensionAccess;
    this._fabricViewer = config.fabricViewer;
    this._fgtGuiProxy = config.fgtGuiProxy;
    this._fortirecorderSetting = config.fortirecorderSetting;
    this._id = config.id;
    this._ipsBaselineOvrd = config.ipsBaselineOvrd;
    this._ipsLock = config.ipsLock;
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
    this._profileid = config.profileid;
    this._realtimeMonitor = config.realtimeMonitor;
    this._reportViewer = config.reportViewer;
    this._rpcPermit = config.rpcPermit;
    this._runReport = config.runReport;
    this._scope = config.scope;
    this._scriptAccess = config.scriptAccess;
    this._scriptRun = config.scriptRun;
    this._superUserProfile = config.superUserProfile;
    this._systemSetting = config.systemSetting;
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
    this._updateIncidents = config.updateIncidents;
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

  // datamask_fields - computed: false, optional: true, required: false
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

  // datamask_key - computed: false, optional: true, required: false
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

  // execute_playbook - computed: true, optional: true, required: false
  private _executePlaybook?: string; 
  public get executePlaybook() {
    return this.getStringAttribute('execute_playbook');
  }
  public set executePlaybook(value: string) {
    this._executePlaybook = value;
  }
  public resetExecutePlaybook() {
    this._executePlaybook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executePlaybookInput() {
    return this._executePlaybook;
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

  // fortirecorder_setting - computed: true, optional: true, required: false
  private _fortirecorderSetting?: string; 
  public get fortirecorderSetting() {
    return this.getStringAttribute('fortirecorder_setting');
  }
  public set fortirecorderSetting(value: string) {
    this._fortirecorderSetting = value;
  }
  public resetFortirecorderSetting() {
    this._fortirecorderSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortirecorderSettingInput() {
    return this._fortirecorderSetting;
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

  // ipv6_trusthost1 - computed: true, optional: true, required: false
  private _ipv6Trusthost1?: string[]; 
  public get ipv6Trusthost1() {
    return this.getListAttribute('ipv6_trusthost1');
  }
  public set ipv6Trusthost1(value: string[]) {
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
  private _ipv6Trusthost10?: string[]; 
  public get ipv6Trusthost10() {
    return this.getListAttribute('ipv6_trusthost10');
  }
  public set ipv6Trusthost10(value: string[]) {
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
  private _ipv6Trusthost2?: string[]; 
  public get ipv6Trusthost2() {
    return this.getListAttribute('ipv6_trusthost2');
  }
  public set ipv6Trusthost2(value: string[]) {
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
  private _ipv6Trusthost3?: string[]; 
  public get ipv6Trusthost3() {
    return this.getListAttribute('ipv6_trusthost3');
  }
  public set ipv6Trusthost3(value: string[]) {
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
  private _ipv6Trusthost4?: string[]; 
  public get ipv6Trusthost4() {
    return this.getListAttribute('ipv6_trusthost4');
  }
  public set ipv6Trusthost4(value: string[]) {
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
  private _ipv6Trusthost5?: string[]; 
  public get ipv6Trusthost5() {
    return this.getListAttribute('ipv6_trusthost5');
  }
  public set ipv6Trusthost5(value: string[]) {
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
  private _ipv6Trusthost6?: string[]; 
  public get ipv6Trusthost6() {
    return this.getListAttribute('ipv6_trusthost6');
  }
  public set ipv6Trusthost6(value: string[]) {
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
  private _ipv6Trusthost7?: string[]; 
  public get ipv6Trusthost7() {
    return this.getListAttribute('ipv6_trusthost7');
  }
  public set ipv6Trusthost7(value: string[]) {
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
  private _ipv6Trusthost8?: string[]; 
  public get ipv6Trusthost8() {
    return this.getListAttribute('ipv6_trusthost8');
  }
  public set ipv6Trusthost8(value: string[]) {
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
  private _ipv6Trusthost9?: string[]; 
  public get ipv6Trusthost9() {
    return this.getListAttribute('ipv6_trusthost9');
  }
  public set ipv6Trusthost9(value: string[]) {
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

  // script_run - computed: true, optional: true, required: false
  private _scriptRun?: string; 
  public get scriptRun() {
    return this.getStringAttribute('script_run');
  }
  public set scriptRun(value: string) {
    this._scriptRun = value;
  }
  public resetScriptRun() {
    this._scriptRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptRunInput() {
    return this._scriptRun;
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
  private _trusthost1?: string[]; 
  public get trusthost1() {
    return this.getListAttribute('trusthost1');
  }
  public set trusthost1(value: string[]) {
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
  private _trusthost10?: string[]; 
  public get trusthost10() {
    return this.getListAttribute('trusthost10');
  }
  public set trusthost10(value: string[]) {
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
  private _trusthost2?: string[]; 
  public get trusthost2() {
    return this.getListAttribute('trusthost2');
  }
  public set trusthost2(value: string[]) {
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
  private _trusthost3?: string[]; 
  public get trusthost3() {
    return this.getListAttribute('trusthost3');
  }
  public set trusthost3(value: string[]) {
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
  private _trusthost4?: string[]; 
  public get trusthost4() {
    return this.getListAttribute('trusthost4');
  }
  public set trusthost4(value: string[]) {
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
  private _trusthost5?: string[]; 
  public get trusthost5() {
    return this.getListAttribute('trusthost5');
  }
  public set trusthost5(value: string[]) {
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
  private _trusthost6?: string[]; 
  public get trusthost6() {
    return this.getListAttribute('trusthost6');
  }
  public set trusthost6(value: string[]) {
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
  private _trusthost7?: string[]; 
  public get trusthost7() {
    return this.getListAttribute('trusthost7');
  }
  public set trusthost7(value: string[]) {
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
  private _trusthost8?: string[]; 
  public get trusthost8() {
    return this.getListAttribute('trusthost8');
  }
  public set trusthost8(value: string[]) {
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
  private _trusthost9?: string[]; 
  public get trusthost9() {
    return this.getListAttribute('trusthost9');
  }
  public set trusthost9(value: string[]) {
    this._trusthost9 = value;
  }
  public resetTrusthost9() {
    this._trusthost9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost9Input() {
    return this._trusthost9;
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
      adom_switch: cdktf.stringToTerraform(this._adomSwitch),
      allow_to_install: cdktf.stringToTerraform(this._allowToInstall),
      change_password: cdktf.stringToTerraform(this._changePassword),
      datamask: cdktf.stringToTerraform(this._datamask),
      datamask_custom_priority: cdktf.stringToTerraform(this._datamaskCustomPriority),
      datamask_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datamaskFields),
      datamask_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datamaskKey),
      datamask_unmasked_time: cdktf.numberToTerraform(this._datamaskUnmaskedTime),
      description: cdktf.stringToTerraform(this._description),
      device_ap: cdktf.stringToTerraform(this._deviceAp),
      device_forticlient: cdktf.stringToTerraform(this._deviceForticlient),
      device_fortiextender: cdktf.stringToTerraform(this._deviceFortiextender),
      device_fortiswitch: cdktf.stringToTerraform(this._deviceFortiswitch),
      device_manager: cdktf.stringToTerraform(this._deviceManager),
      device_op: cdktf.stringToTerraform(this._deviceOp),
      device_policy_package_lock: cdktf.stringToTerraform(this._devicePolicyPackageLock),
      device_wan_link_load_balance: cdktf.stringToTerraform(this._deviceWanLinkLoadBalance),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      event_management: cdktf.stringToTerraform(this._eventManagement),
      execute_playbook: cdktf.stringToTerraform(this._executePlaybook),
      extension_access: cdktf.stringToTerraform(this._extensionAccess),
      fabric_viewer: cdktf.stringToTerraform(this._fabricViewer),
      fgt_gui_proxy: cdktf.stringToTerraform(this._fgtGuiProxy),
      fortirecorder_setting: cdktf.stringToTerraform(this._fortirecorderSetting),
      id: cdktf.stringToTerraform(this._id),
      ips_baseline_ovrd: cdktf.stringToTerraform(this._ipsBaselineOvrd),
      ips_lock: cdktf.stringToTerraform(this._ipsLock),
      ipv6_trusthost1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost1),
      ipv6_trusthost10: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost10),
      ipv6_trusthost2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost2),
      ipv6_trusthost3: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost3),
      ipv6_trusthost4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost4),
      ipv6_trusthost5: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost5),
      ipv6_trusthost6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost6),
      ipv6_trusthost7: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost7),
      ipv6_trusthost8: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost8),
      ipv6_trusthost9: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Trusthost9),
      log_viewer: cdktf.stringToTerraform(this._logViewer),
      profileid: cdktf.stringToTerraform(this._profileid),
      realtime_monitor: cdktf.stringToTerraform(this._realtimeMonitor),
      report_viewer: cdktf.stringToTerraform(this._reportViewer),
      rpc_permit: cdktf.stringToTerraform(this._rpcPermit),
      run_report: cdktf.stringToTerraform(this._runReport),
      scope: cdktf.stringToTerraform(this._scope),
      script_access: cdktf.stringToTerraform(this._scriptAccess),
      script_run: cdktf.stringToTerraform(this._scriptRun),
      super_user_profile: cdktf.stringToTerraform(this._superUserProfile),
      system_setting: cdktf.stringToTerraform(this._systemSetting),
      triage_events: cdktf.stringToTerraform(this._triageEvents),
      trusthost1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost1),
      trusthost10: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost10),
      trusthost2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost2),
      trusthost3: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost3),
      trusthost4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost4),
      trusthost5: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost5),
      trusthost6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost6),
      trusthost7: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost7),
      trusthost8: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost8),
      trusthost9: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trusthost9),
      update_incidents: cdktf.stringToTerraform(this._updateIncidents),
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
      change_password: {
        value: cdktf.stringToHclTerraform(this._changePassword),
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
      execute_playbook: {
        value: cdktf.stringToHclTerraform(this._executePlaybook),
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
      fgt_gui_proxy: {
        value: cdktf.stringToHclTerraform(this._fgtGuiProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortirecorder_setting: {
        value: cdktf.stringToHclTerraform(this._fortirecorderSetting),
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
      ips_baseline_ovrd: {
        value: cdktf.stringToHclTerraform(this._ipsBaselineOvrd),
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
      ipv6_trusthost1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost1),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost10: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost10),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost2),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost3: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost3),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost4),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost5: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost5),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost6),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost7: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost7),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost8: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost8),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6_trusthost9: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Trusthost9),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      log_viewer: {
        value: cdktf.stringToHclTerraform(this._logViewer),
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
      script_run: {
        value: cdktf.stringToHclTerraform(this._scriptRun),
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
      triage_events: {
        value: cdktf.stringToHclTerraform(this._triageEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost1),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost10: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost10),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost2),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost3: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost3),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost4),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost5: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost5),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost6),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost7: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost7),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost8: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost8),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      trusthost9: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trusthost9),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      update_incidents: {
        value: cdktf.stringToHclTerraform(this._updateIncidents),
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
