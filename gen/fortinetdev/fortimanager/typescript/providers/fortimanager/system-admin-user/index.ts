// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#adom_access SystemAdminUser#adom_access}
  */
  readonly adomAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#avatar SystemAdminUser#avatar}
  */
  readonly avatar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ca SystemAdminUser#ca}
  */
  readonly ca?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#change_password SystemAdminUser#change_password}
  */
  readonly changePassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#cors_allow_origin SystemAdminUser#cors_allow_origin}
  */
  readonly corsAllowOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#description SystemAdminUser#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#dev_group SystemAdminUser#dev_group}
  */
  readonly devGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#dynamic_sort_subtable SystemAdminUser#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#email_address SystemAdminUser#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ext_auth_accprofile_override SystemAdminUser#ext_auth_accprofile_override}
  */
  readonly extAuthAccprofileOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ext_auth_adom_override SystemAdminUser#ext_auth_adom_override}
  */
  readonly extAuthAdomOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ext_auth_group_match SystemAdminUser#ext_auth_group_match}
  */
  readonly extAuthGroupMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#fingerprint SystemAdminUser#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#first_name SystemAdminUser#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#force_password_change SystemAdminUser#force_password_change}
  */
  readonly forcePasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#fortiai SystemAdminUser#fortiai}
  */
  readonly fortiai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#group SystemAdminUser#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#hidden SystemAdminUser#hidden}
  */
  readonly hidden?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#id SystemAdminUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost1 SystemAdminUser#ipv6_trusthost1}
  */
  readonly ipv6Trusthost1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost10 SystemAdminUser#ipv6_trusthost10}
  */
  readonly ipv6Trusthost10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost2 SystemAdminUser#ipv6_trusthost2}
  */
  readonly ipv6Trusthost2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost3 SystemAdminUser#ipv6_trusthost3}
  */
  readonly ipv6Trusthost3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost4 SystemAdminUser#ipv6_trusthost4}
  */
  readonly ipv6Trusthost4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost5 SystemAdminUser#ipv6_trusthost5}
  */
  readonly ipv6Trusthost5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost6 SystemAdminUser#ipv6_trusthost6}
  */
  readonly ipv6Trusthost6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost7 SystemAdminUser#ipv6_trusthost7}
  */
  readonly ipv6Trusthost7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost8 SystemAdminUser#ipv6_trusthost8}
  */
  readonly ipv6Trusthost8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ipv6_trusthost9 SystemAdminUser#ipv6_trusthost9}
  */
  readonly ipv6Trusthost9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#last_name SystemAdminUser#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ldap_server SystemAdminUser#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#login_max SystemAdminUser#login_max}
  */
  readonly loginMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#mobile_number SystemAdminUser#mobile_number}
  */
  readonly mobileNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#old_password SystemAdminUser#old_password}
  */
  readonly oldPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#pager_number SystemAdminUser#pager_number}
  */
  readonly pagerNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#password SystemAdminUser#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#password_expire SystemAdminUser#password_expire}
  */
  readonly passwordExpire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#phone_number SystemAdminUser#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#profileid SystemAdminUser#profileid}
  */
  readonly profileid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#radius_server SystemAdminUser#radius_server}
  */
  readonly radiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#rpc_permit SystemAdminUser#rpc_permit}
  */
  readonly rpcPermit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ssh_public_key1 SystemAdminUser#ssh_public_key1}
  */
  readonly sshPublicKey1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ssh_public_key2 SystemAdminUser#ssh_public_key2}
  */
  readonly sshPublicKey2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ssh_public_key3 SystemAdminUser#ssh_public_key3}
  */
  readonly sshPublicKey3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#subject SystemAdminUser#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#tacacs_plus_server SystemAdminUser#tacacs_plus_server}
  */
  readonly tacacsPlusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#th6_from_profile SystemAdminUser#th6_from_profile}
  */
  readonly th6FromProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#th_from_profile SystemAdminUser#th_from_profile}
  */
  readonly thFromProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost1 SystemAdminUser#trusthost1}
  */
  readonly trusthost1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost10 SystemAdminUser#trusthost10}
  */
  readonly trusthost10?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost2 SystemAdminUser#trusthost2}
  */
  readonly trusthost2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost3 SystemAdminUser#trusthost3}
  */
  readonly trusthost3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost4 SystemAdminUser#trusthost4}
  */
  readonly trusthost4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost5 SystemAdminUser#trusthost5}
  */
  readonly trusthost5?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost6 SystemAdminUser#trusthost6}
  */
  readonly trusthost6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost7 SystemAdminUser#trusthost7}
  */
  readonly trusthost7?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost8 SystemAdminUser#trusthost8}
  */
  readonly trusthost8?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#trusthost9 SystemAdminUser#trusthost9}
  */
  readonly trusthost9?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#two_factor_auth SystemAdminUser#two_factor_auth}
  */
  readonly twoFactorAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#use_global_theme SystemAdminUser#use_global_theme}
  */
  readonly useGlobalTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#user_theme SystemAdminUser#user_theme}
  */
  readonly userTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#user_type SystemAdminUser#user_type}
  */
  readonly userType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#userid SystemAdminUser#userid}
  */
  readonly userid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#wildcard SystemAdminUser#wildcard}
  */
  readonly wildcard?: string;
  /**
  * adom_exclude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#adom_exclude SystemAdminUser#adom_exclude}
  */
  readonly adomExclude?: SystemAdminUserAdomExclude[] | cdktf.IResolvable;
  /**
  * app_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#app_filter SystemAdminUser#app_filter}
  */
  readonly appFilter?: SystemAdminUserAppFilter[] | cdktf.IResolvable;
  /**
  * dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#dashboard SystemAdminUser#dashboard}
  */
  readonly dashboard?: SystemAdminUserDashboard[] | cdktf.IResolvable;
  /**
  * dashboard_tabs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#dashboard_tabs SystemAdminUser#dashboard_tabs}
  */
  readonly dashboardTabs?: SystemAdminUserDashboardTabs[] | cdktf.IResolvable;
  /**
  * fmgadom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#fmgadom SystemAdminUser#fmgadom}
  */
  readonly fmgadom?: SystemAdminUserFmgadom[] | cdktf.IResolvable;
  /**
  * ips_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ips_filter SystemAdminUser#ips_filter}
  */
  readonly ipsFilter?: SystemAdminUserIpsFilter[] | cdktf.IResolvable;
  /**
  * meta_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#meta_data SystemAdminUser#meta_data}
  */
  readonly metaData?: SystemAdminUserMetaData[] | cdktf.IResolvable;
  /**
  * policy_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#policy_block SystemAdminUser#policy_block}
  */
  readonly policyBlock?: SystemAdminUserPolicyBlock[] | cdktf.IResolvable;
  /**
  * policy_package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#policy_package SystemAdminUser#policy_package}
  */
  readonly policyPackage?: SystemAdminUserPolicyPackage[] | cdktf.IResolvable;
  /**
  * web_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#web_filter SystemAdminUser#web_filter}
  */
  readonly webFilter?: SystemAdminUserWebFilter[] | cdktf.IResolvable;
}
export interface SystemAdminUserAdomExclude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#adom_name SystemAdminUser#adom_name}
  */
  readonly adomName?: string;
}

export function systemAdminUserAdomExcludeToTerraform(struct?: SystemAdminUserAdomExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adom_name: cdktf.stringToTerraform(struct!.adomName),
  }
}


export function systemAdminUserAdomExcludeToHclTerraform(struct?: SystemAdminUserAdomExclude | cdktf.IResolvable): any {
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

export class SystemAdminUserAdomExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserAdomExclude | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemAdminUserAdomExclude | cdktf.IResolvable | undefined) {
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

export class SystemAdminUserAdomExcludeList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserAdomExclude[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserAdomExcludeOutputReference {
    return new SystemAdminUserAdomExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminUserAppFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#app_filter_name SystemAdminUser#app_filter_name}
  */
  readonly appFilterName?: string;
}

export function systemAdminUserAppFilterToTerraform(struct?: SystemAdminUserAppFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_filter_name: cdktf.stringToTerraform(struct!.appFilterName),
  }
}


export function systemAdminUserAppFilterToHclTerraform(struct?: SystemAdminUserAppFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.appFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminUserAppFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserAppFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFilterName = this._appFilterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminUserAppFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appFilterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appFilterName = value.appFilterName;
    }
  }

  // app_filter_name - computed: false, optional: true, required: false
  private _appFilterName?: string; 
  public get appFilterName() {
    return this.getStringAttribute('app_filter_name');
  }
  public set appFilterName(value: string) {
    this._appFilterName = value;
  }
  public resetAppFilterName() {
    this._appFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFilterNameInput() {
    return this._appFilterName;
  }
}

export class SystemAdminUserAppFilterList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserAppFilter[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserAppFilterOutputReference {
    return new SystemAdminUserAppFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminUserDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#column SystemAdminUser#column}
  */
  readonly column?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#diskio_content_type SystemAdminUser#diskio_content_type}
  */
  readonly diskioContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#diskio_period SystemAdminUser#diskio_period}
  */
  readonly diskioPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#log_rate_period SystemAdminUser#log_rate_period}
  */
  readonly logRatePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#log_rate_topn SystemAdminUser#log_rate_topn}
  */
  readonly logRateTopn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#log_rate_type SystemAdminUser#log_rate_type}
  */
  readonly logRateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#moduleid SystemAdminUser#moduleid}
  */
  readonly moduleid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#name SystemAdminUser#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#num_entries SystemAdminUser#num_entries}
  */
  readonly numEntries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#refresh_interval SystemAdminUser#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#res_cpu_display SystemAdminUser#res_cpu_display}
  */
  readonly resCpuDisplay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#res_period SystemAdminUser#res_period}
  */
  readonly resPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#res_view_type SystemAdminUser#res_view_type}
  */
  readonly resViewType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#status SystemAdminUser#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#tabid SystemAdminUser#tabid}
  */
  readonly tabid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#time_period SystemAdminUser#time_period}
  */
  readonly timePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#widget_type SystemAdminUser#widget_type}
  */
  readonly widgetType?: string;
}

export function systemAdminUserDashboardToTerraform(struct?: SystemAdminUserDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.numberToTerraform(struct!.column),
    diskio_content_type: cdktf.stringToTerraform(struct!.diskioContentType),
    diskio_period: cdktf.stringToTerraform(struct!.diskioPeriod),
    log_rate_period: cdktf.stringToTerraform(struct!.logRatePeriod),
    log_rate_topn: cdktf.stringToTerraform(struct!.logRateTopn),
    log_rate_type: cdktf.stringToTerraform(struct!.logRateType),
    moduleid: cdktf.numberToTerraform(struct!.moduleid),
    name: cdktf.stringToTerraform(struct!.name),
    num_entries: cdktf.numberToTerraform(struct!.numEntries),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
    res_cpu_display: cdktf.stringToTerraform(struct!.resCpuDisplay),
    res_period: cdktf.stringToTerraform(struct!.resPeriod),
    res_view_type: cdktf.stringToTerraform(struct!.resViewType),
    status: cdktf.stringToTerraform(struct!.status),
    tabid: cdktf.numberToTerraform(struct!.tabid),
    time_period: cdktf.stringToTerraform(struct!.timePeriod),
    widget_type: cdktf.stringToTerraform(struct!.widgetType),
  }
}


export function systemAdminUserDashboardToHclTerraform(struct?: SystemAdminUserDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    diskio_content_type: {
      value: cdktf.stringToHclTerraform(struct!.diskioContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diskio_period: {
      value: cdktf.stringToHclTerraform(struct!.diskioPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_rate_period: {
      value: cdktf.stringToHclTerraform(struct!.logRatePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_rate_topn: {
      value: cdktf.stringToHclTerraform(struct!.logRateTopn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_rate_type: {
      value: cdktf.stringToHclTerraform(struct!.logRateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moduleid: {
      value: cdktf.numberToHclTerraform(struct!.moduleid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_entries: {
      value: cdktf.numberToHclTerraform(struct!.numEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    res_cpu_display: {
      value: cdktf.stringToHclTerraform(struct!.resCpuDisplay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    res_period: {
      value: cdktf.stringToHclTerraform(struct!.resPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    res_view_type: {
      value: cdktf.stringToHclTerraform(struct!.resViewType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tabid: {
      value: cdktf.numberToHclTerraform(struct!.tabid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_period: {
      value: cdktf.stringToHclTerraform(struct!.timePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_type: {
      value: cdktf.stringToHclTerraform(struct!.widgetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminUserDashboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserDashboard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._diskioContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskioContentType = this._diskioContentType;
    }
    if (this._diskioPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskioPeriod = this._diskioPeriod;
    }
    if (this._logRatePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRatePeriod = this._logRatePeriod;
    }
    if (this._logRateTopn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRateTopn = this._logRateTopn;
    }
    if (this._logRateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRateType = this._logRateType;
    }
    if (this._moduleid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleid = this._moduleid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numEntries = this._numEntries;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._resCpuDisplay !== undefined) {
      hasAnyValues = true;
      internalValueResult.resCpuDisplay = this._resCpuDisplay;
    }
    if (this._resPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.resPeriod = this._resPeriod;
    }
    if (this._resViewType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resViewType = this._resViewType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tabid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tabid = this._tabid;
    }
    if (this._timePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriod = this._timePeriod;
    }
    if (this._widgetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetType = this._widgetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminUserDashboard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._diskioContentType = undefined;
      this._diskioPeriod = undefined;
      this._logRatePeriod = undefined;
      this._logRateTopn = undefined;
      this._logRateType = undefined;
      this._moduleid = undefined;
      this._name = undefined;
      this._numEntries = undefined;
      this._refreshInterval = undefined;
      this._resCpuDisplay = undefined;
      this._resPeriod = undefined;
      this._resViewType = undefined;
      this._status = undefined;
      this._tabid = undefined;
      this._timePeriod = undefined;
      this._widgetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._diskioContentType = value.diskioContentType;
      this._diskioPeriod = value.diskioPeriod;
      this._logRatePeriod = value.logRatePeriod;
      this._logRateTopn = value.logRateTopn;
      this._logRateType = value.logRateType;
      this._moduleid = value.moduleid;
      this._name = value.name;
      this._numEntries = value.numEntries;
      this._refreshInterval = value.refreshInterval;
      this._resCpuDisplay = value.resCpuDisplay;
      this._resPeriod = value.resPeriod;
      this._resViewType = value.resViewType;
      this._status = value.status;
      this._tabid = value.tabid;
      this._timePeriod = value.timePeriod;
      this._widgetType = value.widgetType;
    }
  }

  // column - computed: false, optional: true, required: false
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // diskio_content_type - computed: true, optional: true, required: false
  private _diskioContentType?: string; 
  public get diskioContentType() {
    return this.getStringAttribute('diskio_content_type');
  }
  public set diskioContentType(value: string) {
    this._diskioContentType = value;
  }
  public resetDiskioContentType() {
    this._diskioContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskioContentTypeInput() {
    return this._diskioContentType;
  }

  // diskio_period - computed: true, optional: true, required: false
  private _diskioPeriod?: string; 
  public get diskioPeriod() {
    return this.getStringAttribute('diskio_period');
  }
  public set diskioPeriod(value: string) {
    this._diskioPeriod = value;
  }
  public resetDiskioPeriod() {
    this._diskioPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskioPeriodInput() {
    return this._diskioPeriod;
  }

  // log_rate_period - computed: false, optional: true, required: false
  private _logRatePeriod?: string; 
  public get logRatePeriod() {
    return this.getStringAttribute('log_rate_period');
  }
  public set logRatePeriod(value: string) {
    this._logRatePeriod = value;
  }
  public resetLogRatePeriod() {
    this._logRatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRatePeriodInput() {
    return this._logRatePeriod;
  }

  // log_rate_topn - computed: true, optional: true, required: false
  private _logRateTopn?: string; 
  public get logRateTopn() {
    return this.getStringAttribute('log_rate_topn');
  }
  public set logRateTopn(value: string) {
    this._logRateTopn = value;
  }
  public resetLogRateTopn() {
    this._logRateTopn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRateTopnInput() {
    return this._logRateTopn;
  }

  // log_rate_type - computed: true, optional: true, required: false
  private _logRateType?: string; 
  public get logRateType() {
    return this.getStringAttribute('log_rate_type');
  }
  public set logRateType(value: string) {
    this._logRateType = value;
  }
  public resetLogRateType() {
    this._logRateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRateTypeInput() {
    return this._logRateType;
  }

  // moduleid - computed: false, optional: true, required: false
  private _moduleid?: number; 
  public get moduleid() {
    return this.getNumberAttribute('moduleid');
  }
  public set moduleid(value: number) {
    this._moduleid = value;
  }
  public resetModuleid() {
    this._moduleid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleidInput() {
    return this._moduleid;
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

  // num_entries - computed: true, optional: true, required: false
  private _numEntries?: number; 
  public get numEntries() {
    return this.getNumberAttribute('num_entries');
  }
  public set numEntries(value: number) {
    this._numEntries = value;
  }
  public resetNumEntries() {
    this._numEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numEntriesInput() {
    return this._numEntries;
  }

  // refresh_interval - computed: true, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // res_cpu_display - computed: true, optional: true, required: false
  private _resCpuDisplay?: string; 
  public get resCpuDisplay() {
    return this.getStringAttribute('res_cpu_display');
  }
  public set resCpuDisplay(value: string) {
    this._resCpuDisplay = value;
  }
  public resetResCpuDisplay() {
    this._resCpuDisplay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resCpuDisplayInput() {
    return this._resCpuDisplay;
  }

  // res_period - computed: true, optional: true, required: false
  private _resPeriod?: string; 
  public get resPeriod() {
    return this.getStringAttribute('res_period');
  }
  public set resPeriod(value: string) {
    this._resPeriod = value;
  }
  public resetResPeriod() {
    this._resPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resPeriodInput() {
    return this._resPeriod;
  }

  // res_view_type - computed: true, optional: true, required: false
  private _resViewType?: string; 
  public get resViewType() {
    return this.getStringAttribute('res_view_type');
  }
  public set resViewType(value: string) {
    this._resViewType = value;
  }
  public resetResViewType() {
    this._resViewType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resViewTypeInput() {
    return this._resViewType;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tabid - computed: false, optional: true, required: false
  private _tabid?: number; 
  public get tabid() {
    return this.getNumberAttribute('tabid');
  }
  public set tabid(value: number) {
    this._tabid = value;
  }
  public resetTabid() {
    this._tabid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tabidInput() {
    return this._tabid;
  }

  // time_period - computed: true, optional: true, required: false
  private _timePeriod?: string; 
  public get timePeriod() {
    return this.getStringAttribute('time_period');
  }
  public set timePeriod(value: string) {
    this._timePeriod = value;
  }
  public resetTimePeriod() {
    this._timePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod;
  }

  // widget_type - computed: false, optional: true, required: false
  private _widgetType?: string; 
  public get widgetType() {
    return this.getStringAttribute('widget_type');
  }
  public set widgetType(value: string) {
    this._widgetType = value;
  }
  public resetWidgetType() {
    this._widgetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTypeInput() {
    return this._widgetType;
  }
}

export class SystemAdminUserDashboardList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserDashboard[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserDashboardOutputReference {
    return new SystemAdminUserDashboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminUserDashboardTabs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#name SystemAdminUser#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#tabid SystemAdminUser#tabid}
  */
  readonly tabid?: number;
}

export function systemAdminUserDashboardTabsToTerraform(struct?: SystemAdminUserDashboardTabs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tabid: cdktf.numberToTerraform(struct!.tabid),
  }
}


export function systemAdminUserDashboardTabsToHclTerraform(struct?: SystemAdminUserDashboardTabs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tabid: {
      value: cdktf.numberToHclTerraform(struct!.tabid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminUserDashboardTabsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserDashboardTabs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tabid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tabid = this._tabid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminUserDashboardTabs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tabid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tabid = value.tabid;
    }
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

  // tabid - computed: false, optional: true, required: false
  private _tabid?: number; 
  public get tabid() {
    return this.getNumberAttribute('tabid');
  }
  public set tabid(value: number) {
    this._tabid = value;
  }
  public resetTabid() {
    this._tabid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tabidInput() {
    return this._tabid;
  }
}

export class SystemAdminUserDashboardTabsList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserDashboardTabs[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserDashboardTabsOutputReference {
    return new SystemAdminUserDashboardTabsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminUserFmgadom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#adom_name SystemAdminUser#adom_name}
  */
  readonly adomName?: string;
}

export function systemAdminUserFmgadomToTerraform(struct?: SystemAdminUserFmgadom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adom_name: cdktf.stringToTerraform(struct!.adomName),
  }
}


export function systemAdminUserFmgadomToHclTerraform(struct?: SystemAdminUserFmgadom | cdktf.IResolvable): any {
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

export class SystemAdminUserFmgadomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserFmgadom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemAdminUserFmgadom | cdktf.IResolvable | undefined) {
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

export class SystemAdminUserFmgadomList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserFmgadom[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserFmgadomOutputReference {
    return new SystemAdminUserFmgadomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminUserIpsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#ips_filter_name SystemAdminUser#ips_filter_name}
  */
  readonly ipsFilterName?: string;
}

export function systemAdminUserIpsFilterToTerraform(struct?: SystemAdminUserIpsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ips_filter_name: cdktf.stringToTerraform(struct!.ipsFilterName),
  }
}


export function systemAdminUserIpsFilterToHclTerraform(struct?: SystemAdminUserIpsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ips_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.ipsFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminUserIpsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserIpsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipsFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsFilterName = this._ipsFilterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminUserIpsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipsFilterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipsFilterName = value.ipsFilterName;
    }
  }

  // ips_filter_name - computed: false, optional: true, required: false
  private _ipsFilterName?: string; 
  public get ipsFilterName() {
    return this.getStringAttribute('ips_filter_name');
  }
  public set ipsFilterName(value: string) {
    this._ipsFilterName = value;
  }
  public resetIpsFilterName() {
    this._ipsFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsFilterNameInput() {
    return this._ipsFilterName;
  }
}

export class SystemAdminUserIpsFilterList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserIpsFilter[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserIpsFilterOutputReference {
    return new SystemAdminUserIpsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminUserMetaData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#fieldlength SystemAdminUser#fieldlength}
  */
  readonly fieldlength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#fieldname SystemAdminUser#fieldname}
  */
  readonly fieldname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#fieldvalue SystemAdminUser#fieldvalue}
  */
  readonly fieldvalue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#importance SystemAdminUser#importance}
  */
  readonly importance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#status SystemAdminUser#status}
  */
  readonly status?: string;
}

export function systemAdminUserMetaDataToTerraform(struct?: SystemAdminUserMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fieldlength: cdktf.numberToTerraform(struct!.fieldlength),
    fieldname: cdktf.stringToTerraform(struct!.fieldname),
    fieldvalue: cdktf.stringToTerraform(struct!.fieldvalue),
    importance: cdktf.stringToTerraform(struct!.importance),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function systemAdminUserMetaDataToHclTerraform(struct?: SystemAdminUserMetaData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fieldlength: {
      value: cdktf.numberToHclTerraform(struct!.fieldlength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fieldname: {
      value: cdktf.stringToHclTerraform(struct!.fieldname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fieldvalue: {
      value: cdktf.stringToHclTerraform(struct!.fieldvalue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    importance: {
      value: cdktf.stringToHclTerraform(struct!.importance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminUserMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserMetaData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldlength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldlength = this._fieldlength;
    }
    if (this._fieldname !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldname = this._fieldname;
    }
    if (this._fieldvalue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldvalue = this._fieldvalue;
    }
    if (this._importance !== undefined) {
      hasAnyValues = true;
      internalValueResult.importance = this._importance;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminUserMetaData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldlength = undefined;
      this._fieldname = undefined;
      this._fieldvalue = undefined;
      this._importance = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldlength = value.fieldlength;
      this._fieldname = value.fieldname;
      this._fieldvalue = value.fieldvalue;
      this._importance = value.importance;
      this._status = value.status;
    }
  }

  // fieldlength - computed: false, optional: true, required: false
  private _fieldlength?: number; 
  public get fieldlength() {
    return this.getNumberAttribute('fieldlength');
  }
  public set fieldlength(value: number) {
    this._fieldlength = value;
  }
  public resetFieldlength() {
    this._fieldlength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldlengthInput() {
    return this._fieldlength;
  }

  // fieldname - computed: false, optional: true, required: false
  private _fieldname?: string; 
  public get fieldname() {
    return this.getStringAttribute('fieldname');
  }
  public set fieldname(value: string) {
    this._fieldname = value;
  }
  public resetFieldname() {
    this._fieldname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldnameInput() {
    return this._fieldname;
  }

  // fieldvalue - computed: false, optional: true, required: false
  private _fieldvalue?: string; 
  public get fieldvalue() {
    return this.getStringAttribute('fieldvalue');
  }
  public set fieldvalue(value: string) {
    this._fieldvalue = value;
  }
  public resetFieldvalue() {
    this._fieldvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldvalueInput() {
    return this._fieldvalue;
  }

  // importance - computed: true, optional: true, required: false
  private _importance?: string; 
  public get importance() {
    return this.getStringAttribute('importance');
  }
  public set importance(value: string) {
    this._importance = value;
  }
  public resetImportance() {
    this._importance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importanceInput() {
    return this._importance;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
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

export class SystemAdminUserMetaDataList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserMetaData[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserMetaDataOutputReference {
    return new SystemAdminUserMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminUserPolicyBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#policy_block_name SystemAdminUser#policy_block_name}
  */
  readonly policyBlockName?: string;
}

export function systemAdminUserPolicyBlockToTerraform(struct?: SystemAdminUserPolicyBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_block_name: cdktf.stringToTerraform(struct!.policyBlockName),
  }
}


export function systemAdminUserPolicyBlockToHclTerraform(struct?: SystemAdminUserPolicyBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_block_name: {
      value: cdktf.stringToHclTerraform(struct!.policyBlockName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminUserPolicyBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserPolicyBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyBlockName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyBlockName = this._policyBlockName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminUserPolicyBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyBlockName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyBlockName = value.policyBlockName;
    }
  }

  // policy_block_name - computed: false, optional: true, required: false
  private _policyBlockName?: string; 
  public get policyBlockName() {
    return this.getStringAttribute('policy_block_name');
  }
  public set policyBlockName(value: string) {
    this._policyBlockName = value;
  }
  public resetPolicyBlockName() {
    this._policyBlockName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBlockNameInput() {
    return this._policyBlockName;
  }
}

export class SystemAdminUserPolicyBlockList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserPolicyBlock[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserPolicyBlockOutputReference {
    return new SystemAdminUserPolicyBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminUserPolicyPackage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#policy_package_name SystemAdminUser#policy_package_name}
  */
  readonly policyPackageName?: string;
}

export function systemAdminUserPolicyPackageToTerraform(struct?: SystemAdminUserPolicyPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_package_name: cdktf.stringToTerraform(struct!.policyPackageName),
  }
}


export function systemAdminUserPolicyPackageToHclTerraform(struct?: SystemAdminUserPolicyPackage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_package_name: {
      value: cdktf.stringToHclTerraform(struct!.policyPackageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminUserPolicyPackageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserPolicyPackage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyPackageName = this._policyPackageName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminUserPolicyPackage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyPackageName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyPackageName = value.policyPackageName;
    }
  }

  // policy_package_name - computed: false, optional: true, required: false
  private _policyPackageName?: string; 
  public get policyPackageName() {
    return this.getStringAttribute('policy_package_name');
  }
  public set policyPackageName(value: string) {
    this._policyPackageName = value;
  }
  public resetPolicyPackageName() {
    this._policyPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPackageNameInput() {
    return this._policyPackageName;
  }
}

export class SystemAdminUserPolicyPackageList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserPolicyPackage[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserPolicyPackageOutputReference {
    return new SystemAdminUserPolicyPackageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminUserWebFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#web_filter_name SystemAdminUser#web_filter_name}
  */
  readonly webFilterName?: string;
}

export function systemAdminUserWebFilterToTerraform(struct?: SystemAdminUserWebFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    web_filter_name: cdktf.stringToTerraform(struct!.webFilterName),
  }
}


export function systemAdminUserWebFilterToHclTerraform(struct?: SystemAdminUserWebFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    web_filter_name: {
      value: cdktf.stringToHclTerraform(struct!.webFilterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminUserWebFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminUserWebFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webFilterName = this._webFilterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminUserWebFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._webFilterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._webFilterName = value.webFilterName;
    }
  }

  // web_filter_name - computed: false, optional: true, required: false
  private _webFilterName?: string; 
  public get webFilterName() {
    return this.getStringAttribute('web_filter_name');
  }
  public set webFilterName(value: string) {
    this._webFilterName = value;
  }
  public resetWebFilterName() {
    this._webFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterNameInput() {
    return this._webFilterName;
  }
}

export class SystemAdminUserWebFilterList extends cdktf.ComplexList {
  public internalValue? : SystemAdminUserWebFilter[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminUserWebFilterOutputReference {
    return new SystemAdminUserWebFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user fortimanager_system_admin_user}
*/
export class SystemAdminUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_admin_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminUser to import
  * @param importFromId The id of the existing SystemAdminUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_admin_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_admin_user fortimanager_system_admin_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAdminUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_admin_user',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adomAccess = config.adomAccess;
    this._avatar = config.avatar;
    this._ca = config.ca;
    this._changePassword = config.changePassword;
    this._corsAllowOrigin = config.corsAllowOrigin;
    this._description = config.description;
    this._devGroup = config.devGroup;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emailAddress = config.emailAddress;
    this._extAuthAccprofileOverride = config.extAuthAccprofileOverride;
    this._extAuthAdomOverride = config.extAuthAdomOverride;
    this._extAuthGroupMatch = config.extAuthGroupMatch;
    this._fingerprint = config.fingerprint;
    this._firstName = config.firstName;
    this._forcePasswordChange = config.forcePasswordChange;
    this._fortiai = config.fortiai;
    this._group = config.group;
    this._hidden = config.hidden;
    this._id = config.id;
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
    this._lastName = config.lastName;
    this._ldapServer = config.ldapServer;
    this._loginMax = config.loginMax;
    this._mobileNumber = config.mobileNumber;
    this._oldPassword = config.oldPassword;
    this._pagerNumber = config.pagerNumber;
    this._password = config.password;
    this._passwordExpire = config.passwordExpire;
    this._phoneNumber = config.phoneNumber;
    this._profileid = config.profileid;
    this._radiusServer = config.radiusServer;
    this._rpcPermit = config.rpcPermit;
    this._sshPublicKey1 = config.sshPublicKey1;
    this._sshPublicKey2 = config.sshPublicKey2;
    this._sshPublicKey3 = config.sshPublicKey3;
    this._subject = config.subject;
    this._tacacsPlusServer = config.tacacsPlusServer;
    this._th6FromProfile = config.th6FromProfile;
    this._thFromProfile = config.thFromProfile;
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
    this._twoFactorAuth = config.twoFactorAuth;
    this._useGlobalTheme = config.useGlobalTheme;
    this._userTheme = config.userTheme;
    this._userType = config.userType;
    this._userid = config.userid;
    this._wildcard = config.wildcard;
    this._adomExclude.internalValue = config.adomExclude;
    this._appFilter.internalValue = config.appFilter;
    this._dashboard.internalValue = config.dashboard;
    this._dashboardTabs.internalValue = config.dashboardTabs;
    this._fmgadom.internalValue = config.fmgadom;
    this._ipsFilter.internalValue = config.ipsFilter;
    this._metaData.internalValue = config.metaData;
    this._policyBlock.internalValue = config.policyBlock;
    this._policyPackage.internalValue = config.policyPackage;
    this._webFilter.internalValue = config.webFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom_access - computed: true, optional: true, required: false
  private _adomAccess?: string; 
  public get adomAccess() {
    return this.getStringAttribute('adom_access');
  }
  public set adomAccess(value: string) {
    this._adomAccess = value;
  }
  public resetAdomAccess() {
    this._adomAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomAccessInput() {
    return this._adomAccess;
  }

  // avatar - computed: false, optional: true, required: false
  private _avatar?: string; 
  public get avatar() {
    return this.getStringAttribute('avatar');
  }
  public set avatar(value: string) {
    this._avatar = value;
  }
  public resetAvatar() {
    this._avatar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarInput() {
    return this._avatar;
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
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

  // cors_allow_origin - computed: false, optional: true, required: false
  private _corsAllowOrigin?: string; 
  public get corsAllowOrigin() {
    return this.getStringAttribute('cors_allow_origin');
  }
  public set corsAllowOrigin(value: string) {
    this._corsAllowOrigin = value;
  }
  public resetCorsAllowOrigin() {
    this._corsAllowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsAllowOriginInput() {
    return this._corsAllowOrigin;
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

  // dev_group - computed: false, optional: true, required: false
  private _devGroup?: string; 
  public get devGroup() {
    return this.getStringAttribute('dev_group');
  }
  public set devGroup(value: string) {
    this._devGroup = value;
  }
  public resetDevGroup() {
    this._devGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devGroupInput() {
    return this._devGroup;
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

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // ext_auth_accprofile_override - computed: true, optional: true, required: false
  private _extAuthAccprofileOverride?: string; 
  public get extAuthAccprofileOverride() {
    return this.getStringAttribute('ext_auth_accprofile_override');
  }
  public set extAuthAccprofileOverride(value: string) {
    this._extAuthAccprofileOverride = value;
  }
  public resetExtAuthAccprofileOverride() {
    this._extAuthAccprofileOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAuthAccprofileOverrideInput() {
    return this._extAuthAccprofileOverride;
  }

  // ext_auth_adom_override - computed: true, optional: true, required: false
  private _extAuthAdomOverride?: string; 
  public get extAuthAdomOverride() {
    return this.getStringAttribute('ext_auth_adom_override');
  }
  public set extAuthAdomOverride(value: string) {
    this._extAuthAdomOverride = value;
  }
  public resetExtAuthAdomOverride() {
    this._extAuthAdomOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAuthAdomOverrideInput() {
    return this._extAuthAdomOverride;
  }

  // ext_auth_group_match - computed: false, optional: true, required: false
  private _extAuthGroupMatch?: string; 
  public get extAuthGroupMatch() {
    return this.getStringAttribute('ext_auth_group_match');
  }
  public set extAuthGroupMatch(value: string) {
    this._extAuthGroupMatch = value;
  }
  public resetExtAuthGroupMatch() {
    this._extAuthGroupMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAuthGroupMatchInput() {
    return this._extAuthGroupMatch;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // force_password_change - computed: true, optional: true, required: false
  private _forcePasswordChange?: string; 
  public get forcePasswordChange() {
    return this.getStringAttribute('force_password_change');
  }
  public set forcePasswordChange(value: string) {
    this._forcePasswordChange = value;
  }
  public resetForcePasswordChange() {
    this._forcePasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePasswordChangeInput() {
    return this._forcePasswordChange;
  }

  // fortiai - computed: true, optional: true, required: false
  private _fortiai?: string; 
  public get fortiai() {
    return this.getStringAttribute('fortiai');
  }
  public set fortiai(value: string) {
    this._fortiai = value;
  }
  public resetFortiai() {
    this._fortiai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiaiInput() {
    return this._fortiai;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: number; 
  public get hidden() {
    return this.getNumberAttribute('hidden');
  }
  public set hidden(value: number) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
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

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // ldap_server - computed: false, optional: true, required: false
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  public resetLdapServer() {
    this._ldapServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
  }

  // login_max - computed: true, optional: true, required: false
  private _loginMax?: number; 
  public get loginMax() {
    return this.getNumberAttribute('login_max');
  }
  public set loginMax(value: number) {
    this._loginMax = value;
  }
  public resetLoginMax() {
    this._loginMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMaxInput() {
    return this._loginMax;
  }

  // mobile_number - computed: false, optional: true, required: false
  private _mobileNumber?: string; 
  public get mobileNumber() {
    return this.getStringAttribute('mobile_number');
  }
  public set mobileNumber(value: string) {
    this._mobileNumber = value;
  }
  public resetMobileNumber() {
    this._mobileNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNumberInput() {
    return this._mobileNumber;
  }

  // old_password - computed: false, optional: true, required: false
  private _oldPassword?: string; 
  public get oldPassword() {
    return this.getStringAttribute('old_password');
  }
  public set oldPassword(value: string) {
    this._oldPassword = value;
  }
  public resetOldPassword() {
    this._oldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordInput() {
    return this._oldPassword;
  }

  // pager_number - computed: false, optional: true, required: false
  private _pagerNumber?: string; 
  public get pagerNumber() {
    return this.getStringAttribute('pager_number');
  }
  public set pagerNumber(value: string) {
    this._pagerNumber = value;
  }
  public resetPagerNumber() {
    this._pagerNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerNumberInput() {
    return this._pagerNumber;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_expire - computed: true, optional: true, required: false
  private _passwordExpire?: string; 
  public get passwordExpire() {
    return this.getStringAttribute('password_expire');
  }
  public set passwordExpire(value: string) {
    this._passwordExpire = value;
  }
  public resetPasswordExpire() {
    this._passwordExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpireInput() {
    return this._passwordExpire;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // profileid - computed: true, optional: true, required: false
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

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer?: string; 
  public get radiusServer() {
    return this.getStringAttribute('radius_server');
  }
  public set radiusServer(value: string) {
    this._radiusServer = value;
  }
  public resetRadiusServer() {
    this._radiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer;
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

  // ssh_public_key1 - computed: true, optional: true, required: false
  private _sshPublicKey1?: string[]; 
  public get sshPublicKey1() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_public_key1'));
  }
  public set sshPublicKey1(value: string[]) {
    this._sshPublicKey1 = value;
  }
  public resetSshPublicKey1() {
    this._sshPublicKey1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKey1Input() {
    return this._sshPublicKey1;
  }

  // ssh_public_key2 - computed: true, optional: true, required: false
  private _sshPublicKey2?: string[]; 
  public get sshPublicKey2() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_public_key2'));
  }
  public set sshPublicKey2(value: string[]) {
    this._sshPublicKey2 = value;
  }
  public resetSshPublicKey2() {
    this._sshPublicKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKey2Input() {
    return this._sshPublicKey2;
  }

  // ssh_public_key3 - computed: true, optional: true, required: false
  private _sshPublicKey3?: string[]; 
  public get sshPublicKey3() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_public_key3'));
  }
  public set sshPublicKey3(value: string[]) {
    this._sshPublicKey3 = value;
  }
  public resetSshPublicKey3() {
    this._sshPublicKey3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKey3Input() {
    return this._sshPublicKey3;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // tacacs_plus_server - computed: false, optional: true, required: false
  private _tacacsPlusServer?: string; 
  public get tacacsPlusServer() {
    return this.getStringAttribute('tacacs_plus_server');
  }
  public set tacacsPlusServer(value: string) {
    this._tacacsPlusServer = value;
  }
  public resetTacacsPlusServer() {
    this._tacacsPlusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsPlusServerInput() {
    return this._tacacsPlusServer;
  }

  // th6_from_profile - computed: false, optional: true, required: false
  private _th6FromProfile?: number; 
  public get th6FromProfile() {
    return this.getNumberAttribute('th6_from_profile');
  }
  public set th6FromProfile(value: number) {
    this._th6FromProfile = value;
  }
  public resetTh6FromProfile() {
    this._th6FromProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get th6FromProfileInput() {
    return this._th6FromProfile;
  }

  // th_from_profile - computed: false, optional: true, required: false
  private _thFromProfile?: number; 
  public get thFromProfile() {
    return this.getNumberAttribute('th_from_profile');
  }
  public set thFromProfile(value: number) {
    this._thFromProfile = value;
  }
  public resetThFromProfile() {
    this._thFromProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thFromProfileInput() {
    return this._thFromProfile;
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

  // two_factor_auth - computed: true, optional: true, required: false
  private _twoFactorAuth?: string; 
  public get twoFactorAuth() {
    return this.getStringAttribute('two_factor_auth');
  }
  public set twoFactorAuth(value: string) {
    this._twoFactorAuth = value;
  }
  public resetTwoFactorAuth() {
    this._twoFactorAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorAuthInput() {
    return this._twoFactorAuth;
  }

  // use_global_theme - computed: true, optional: true, required: false
  private _useGlobalTheme?: string; 
  public get useGlobalTheme() {
    return this.getStringAttribute('use_global_theme');
  }
  public set useGlobalTheme(value: string) {
    this._useGlobalTheme = value;
  }
  public resetUseGlobalTheme() {
    this._useGlobalTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGlobalThemeInput() {
    return this._useGlobalTheme;
  }

  // user_theme - computed: true, optional: true, required: false
  private _userTheme?: string; 
  public get userTheme() {
    return this.getStringAttribute('user_theme');
  }
  public set userTheme(value: string) {
    this._userTheme = value;
  }
  public resetUserTheme() {
    this._userTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userThemeInput() {
    return this._userTheme;
  }

  // user_type - computed: true, optional: true, required: false
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  public resetUserType() {
    this._userType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
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

  // wildcard - computed: true, optional: true, required: false
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }

  // adom_exclude - computed: false, optional: true, required: false
  private _adomExclude = new SystemAdminUserAdomExcludeList(this, "adom_exclude", false);
  public get adomExclude() {
    return this._adomExclude;
  }
  public putAdomExclude(value: SystemAdminUserAdomExclude[] | cdktf.IResolvable) {
    this._adomExclude.internalValue = value;
  }
  public resetAdomExclude() {
    this._adomExclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomExcludeInput() {
    return this._adomExclude.internalValue;
  }

  // app_filter - computed: false, optional: true, required: false
  private _appFilter = new SystemAdminUserAppFilterList(this, "app_filter", false);
  public get appFilter() {
    return this._appFilter;
  }
  public putAppFilter(value: SystemAdminUserAppFilter[] | cdktf.IResolvable) {
    this._appFilter.internalValue = value;
  }
  public resetAppFilter() {
    this._appFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFilterInput() {
    return this._appFilter.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard = new SystemAdminUserDashboardList(this, "dashboard", false);
  public get dashboard() {
    return this._dashboard;
  }
  public putDashboard(value: SystemAdminUserDashboard[] | cdktf.IResolvable) {
    this._dashboard.internalValue = value;
  }
  public resetDashboard() {
    this._dashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard.internalValue;
  }

  // dashboard_tabs - computed: false, optional: true, required: false
  private _dashboardTabs = new SystemAdminUserDashboardTabsList(this, "dashboard_tabs", false);
  public get dashboardTabs() {
    return this._dashboardTabs;
  }
  public putDashboardTabs(value: SystemAdminUserDashboardTabs[] | cdktf.IResolvable) {
    this._dashboardTabs.internalValue = value;
  }
  public resetDashboardTabs() {
    this._dashboardTabs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardTabsInput() {
    return this._dashboardTabs.internalValue;
  }

  // fmgadom - computed: false, optional: true, required: false
  private _fmgadom = new SystemAdminUserFmgadomList(this, "fmgadom", false);
  public get fmgadom() {
    return this._fmgadom;
  }
  public putFmgadom(value: SystemAdminUserFmgadom[] | cdktf.IResolvable) {
    this._fmgadom.internalValue = value;
  }
  public resetFmgadom() {
    this._fmgadom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgadomInput() {
    return this._fmgadom.internalValue;
  }

  // ips_filter - computed: false, optional: true, required: false
  private _ipsFilter = new SystemAdminUserIpsFilterList(this, "ips_filter", false);
  public get ipsFilter() {
    return this._ipsFilter;
  }
  public putIpsFilter(value: SystemAdminUserIpsFilter[] | cdktf.IResolvable) {
    this._ipsFilter.internalValue = value;
  }
  public resetIpsFilter() {
    this._ipsFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsFilterInput() {
    return this._ipsFilter.internalValue;
  }

  // meta_data - computed: false, optional: true, required: false
  private _metaData = new SystemAdminUserMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }
  public putMetaData(value: SystemAdminUserMetaData[] | cdktf.IResolvable) {
    this._metaData.internalValue = value;
  }
  public resetMetaData() {
    this._metaData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaDataInput() {
    return this._metaData.internalValue;
  }

  // policy_block - computed: false, optional: true, required: false
  private _policyBlock = new SystemAdminUserPolicyBlockList(this, "policy_block", false);
  public get policyBlock() {
    return this._policyBlock;
  }
  public putPolicyBlock(value: SystemAdminUserPolicyBlock[] | cdktf.IResolvable) {
    this._policyBlock.internalValue = value;
  }
  public resetPolicyBlock() {
    this._policyBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBlockInput() {
    return this._policyBlock.internalValue;
  }

  // policy_package - computed: false, optional: true, required: false
  private _policyPackage = new SystemAdminUserPolicyPackageList(this, "policy_package", false);
  public get policyPackage() {
    return this._policyPackage;
  }
  public putPolicyPackage(value: SystemAdminUserPolicyPackage[] | cdktf.IResolvable) {
    this._policyPackage.internalValue = value;
  }
  public resetPolicyPackage() {
    this._policyPackage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPackageInput() {
    return this._policyPackage.internalValue;
  }

  // web_filter - computed: false, optional: true, required: false
  private _webFilter = new SystemAdminUserWebFilterList(this, "web_filter", false);
  public get webFilter() {
    return this._webFilter;
  }
  public putWebFilter(value: SystemAdminUserWebFilter[] | cdktf.IResolvable) {
    this._webFilter.internalValue = value;
  }
  public resetWebFilter() {
    this._webFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterInput() {
    return this._webFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom_access: cdktf.stringToTerraform(this._adomAccess),
      avatar: cdktf.stringToTerraform(this._avatar),
      ca: cdktf.stringToTerraform(this._ca),
      change_password: cdktf.stringToTerraform(this._changePassword),
      cors_allow_origin: cdktf.stringToTerraform(this._corsAllowOrigin),
      description: cdktf.stringToTerraform(this._description),
      dev_group: cdktf.stringToTerraform(this._devGroup),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      ext_auth_accprofile_override: cdktf.stringToTerraform(this._extAuthAccprofileOverride),
      ext_auth_adom_override: cdktf.stringToTerraform(this._extAuthAdomOverride),
      ext_auth_group_match: cdktf.stringToTerraform(this._extAuthGroupMatch),
      fingerprint: cdktf.stringToTerraform(this._fingerprint),
      first_name: cdktf.stringToTerraform(this._firstName),
      force_password_change: cdktf.stringToTerraform(this._forcePasswordChange),
      fortiai: cdktf.stringToTerraform(this._fortiai),
      group: cdktf.stringToTerraform(this._group),
      hidden: cdktf.numberToTerraform(this._hidden),
      id: cdktf.stringToTerraform(this._id),
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
      last_name: cdktf.stringToTerraform(this._lastName),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      login_max: cdktf.numberToTerraform(this._loginMax),
      mobile_number: cdktf.stringToTerraform(this._mobileNumber),
      old_password: cdktf.stringToTerraform(this._oldPassword),
      pager_number: cdktf.stringToTerraform(this._pagerNumber),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      password_expire: cdktf.stringToTerraform(this._passwordExpire),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      profileid: cdktf.stringToTerraform(this._profileid),
      radius_server: cdktf.stringToTerraform(this._radiusServer),
      rpc_permit: cdktf.stringToTerraform(this._rpcPermit),
      ssh_public_key1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKey1),
      ssh_public_key2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKey2),
      ssh_public_key3: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKey3),
      subject: cdktf.stringToTerraform(this._subject),
      tacacs_plus_server: cdktf.stringToTerraform(this._tacacsPlusServer),
      th6_from_profile: cdktf.numberToTerraform(this._th6FromProfile),
      th_from_profile: cdktf.numberToTerraform(this._thFromProfile),
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
      two_factor_auth: cdktf.stringToTerraform(this._twoFactorAuth),
      use_global_theme: cdktf.stringToTerraform(this._useGlobalTheme),
      user_theme: cdktf.stringToTerraform(this._userTheme),
      user_type: cdktf.stringToTerraform(this._userType),
      userid: cdktf.stringToTerraform(this._userid),
      wildcard: cdktf.stringToTerraform(this._wildcard),
      adom_exclude: cdktf.listMapper(systemAdminUserAdomExcludeToTerraform, true)(this._adomExclude.internalValue),
      app_filter: cdktf.listMapper(systemAdminUserAppFilterToTerraform, true)(this._appFilter.internalValue),
      dashboard: cdktf.listMapper(systemAdminUserDashboardToTerraform, true)(this._dashboard.internalValue),
      dashboard_tabs: cdktf.listMapper(systemAdminUserDashboardTabsToTerraform, true)(this._dashboardTabs.internalValue),
      fmgadom: cdktf.listMapper(systemAdminUserFmgadomToTerraform, true)(this._fmgadom.internalValue),
      ips_filter: cdktf.listMapper(systemAdminUserIpsFilterToTerraform, true)(this._ipsFilter.internalValue),
      meta_data: cdktf.listMapper(systemAdminUserMetaDataToTerraform, true)(this._metaData.internalValue),
      policy_block: cdktf.listMapper(systemAdminUserPolicyBlockToTerraform, true)(this._policyBlock.internalValue),
      policy_package: cdktf.listMapper(systemAdminUserPolicyPackageToTerraform, true)(this._policyPackage.internalValue),
      web_filter: cdktf.listMapper(systemAdminUserWebFilterToTerraform, true)(this._webFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom_access: {
        value: cdktf.stringToHclTerraform(this._adomAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avatar: {
        value: cdktf.stringToHclTerraform(this._avatar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
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
      cors_allow_origin: {
        value: cdktf.stringToHclTerraform(this._corsAllowOrigin),
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
      dev_group: {
        value: cdktf.stringToHclTerraform(this._devGroup),
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
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_auth_accprofile_override: {
        value: cdktf.stringToHclTerraform(this._extAuthAccprofileOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_auth_adom_override: {
        value: cdktf.stringToHclTerraform(this._extAuthAdomOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_auth_group_match: {
        value: cdktf.stringToHclTerraform(this._extAuthGroupMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint: {
        value: cdktf.stringToHclTerraform(this._fingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_password_change: {
        value: cdktf.stringToHclTerraform(this._forcePasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiai: {
        value: cdktf.stringToHclTerraform(this._fortiai),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden: {
        value: cdktf.numberToHclTerraform(this._hidden),
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
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_max: {
        value: cdktf.numberToHclTerraform(this._loginMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mobile_number: {
        value: cdktf.stringToHclTerraform(this._mobileNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      old_password: {
        value: cdktf.stringToHclTerraform(this._oldPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pager_number: {
        value: cdktf.stringToHclTerraform(this._pagerNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password_expire: {
        value: cdktf.stringToHclTerraform(this._passwordExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
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
      radius_server: {
        value: cdktf.stringToHclTerraform(this._radiusServer),
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
      ssh_public_key1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKey1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_public_key2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKey2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_public_key3: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKey3),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacacs_plus_server: {
        value: cdktf.stringToHclTerraform(this._tacacsPlusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      th6_from_profile: {
        value: cdktf.numberToHclTerraform(this._th6FromProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      th_from_profile: {
        value: cdktf.numberToHclTerraform(this._thFromProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      two_factor_auth: {
        value: cdktf.stringToHclTerraform(this._twoFactorAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_global_theme: {
        value: cdktf.stringToHclTerraform(this._useGlobalTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_theme: {
        value: cdktf.stringToHclTerraform(this._userTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_type: {
        value: cdktf.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userid: {
        value: cdktf.stringToHclTerraform(this._userid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard: {
        value: cdktf.stringToHclTerraform(this._wildcard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_exclude: {
        value: cdktf.listMapperHcl(systemAdminUserAdomExcludeToHclTerraform, true)(this._adomExclude.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserAdomExcludeList",
      },
      app_filter: {
        value: cdktf.listMapperHcl(systemAdminUserAppFilterToHclTerraform, true)(this._appFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserAppFilterList",
      },
      dashboard: {
        value: cdktf.listMapperHcl(systemAdminUserDashboardToHclTerraform, true)(this._dashboard.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserDashboardList",
      },
      dashboard_tabs: {
        value: cdktf.listMapperHcl(systemAdminUserDashboardTabsToHclTerraform, true)(this._dashboardTabs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserDashboardTabsList",
      },
      fmgadom: {
        value: cdktf.listMapperHcl(systemAdminUserFmgadomToHclTerraform, true)(this._fmgadom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserFmgadomList",
      },
      ips_filter: {
        value: cdktf.listMapperHcl(systemAdminUserIpsFilterToHclTerraform, true)(this._ipsFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserIpsFilterList",
      },
      meta_data: {
        value: cdktf.listMapperHcl(systemAdminUserMetaDataToHclTerraform, true)(this._metaData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserMetaDataList",
      },
      policy_block: {
        value: cdktf.listMapperHcl(systemAdminUserPolicyBlockToHclTerraform, true)(this._policyBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserPolicyBlockList",
      },
      policy_package: {
        value: cdktf.listMapperHcl(systemAdminUserPolicyPackageToHclTerraform, true)(this._policyPackage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserPolicyPackageList",
      },
      web_filter: {
        value: cdktf.listMapperHcl(systemAdminUserWebFilterToHclTerraform, true)(this._webFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminUserWebFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
