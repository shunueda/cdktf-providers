// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#accprofile SystemAdmin#accprofile}
  */
  readonly accprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#accprofile_override SystemAdmin#accprofile_override}
  */
  readonly accprofileOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#allow_remove_admin_session SystemAdmin#allow_remove_admin_session}
  */
  readonly allowRemoveAdminSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#comments SystemAdmin#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#dynamic_sort_subtable SystemAdmin#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#email_to SystemAdmin#email_to}
  */
  readonly emailTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#force_password_change SystemAdmin#force_password_change}
  */
  readonly forcePasswordChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#fortitoken SystemAdmin#fortitoken}
  */
  readonly fortitoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#get_all_tables SystemAdmin#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#guest_auth SystemAdmin#guest_auth}
  */
  readonly guestAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#guest_lang SystemAdmin#guest_lang}
  */
  readonly guestLang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#hidden SystemAdmin#hidden}
  */
  readonly hidden?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#history0 SystemAdmin#history0}
  */
  readonly history0?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#history1 SystemAdmin#history1}
  */
  readonly history1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#id SystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost1 SystemAdmin#ip6_trusthost1}
  */
  readonly ip6Trusthost1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost10 SystemAdmin#ip6_trusthost10}
  */
  readonly ip6Trusthost10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost2 SystemAdmin#ip6_trusthost2}
  */
  readonly ip6Trusthost2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost3 SystemAdmin#ip6_trusthost3}
  */
  readonly ip6Trusthost3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost4 SystemAdmin#ip6_trusthost4}
  */
  readonly ip6Trusthost4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost5 SystemAdmin#ip6_trusthost5}
  */
  readonly ip6Trusthost5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost6 SystemAdmin#ip6_trusthost6}
  */
  readonly ip6Trusthost6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost7 SystemAdmin#ip6_trusthost7}
  */
  readonly ip6Trusthost7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost8 SystemAdmin#ip6_trusthost8}
  */
  readonly ip6Trusthost8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ip6_trusthost9 SystemAdmin#ip6_trusthost9}
  */
  readonly ip6Trusthost9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#name SystemAdmin#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#password SystemAdmin#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#password_expire SystemAdmin#password_expire}
  */
  readonly passwordExpire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#peer_auth SystemAdmin#peer_auth}
  */
  readonly peerAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#peer_group SystemAdmin#peer_group}
  */
  readonly peerGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#radius_vdom_override SystemAdmin#radius_vdom_override}
  */
  readonly radiusVdomOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#remote_auth SystemAdmin#remote_auth}
  */
  readonly remoteAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#remote_group SystemAdmin#remote_group}
  */
  readonly remoteGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#schedule SystemAdmin#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#sms_custom_server SystemAdmin#sms_custom_server}
  */
  readonly smsCustomServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#sms_phone SystemAdmin#sms_phone}
  */
  readonly smsPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#sms_server SystemAdmin#sms_server}
  */
  readonly smsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ssh_certificate SystemAdmin#ssh_certificate}
  */
  readonly sshCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ssh_public_key1 SystemAdmin#ssh_public_key1}
  */
  readonly sshPublicKey1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ssh_public_key2 SystemAdmin#ssh_public_key2}
  */
  readonly sshPublicKey2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#ssh_public_key3 SystemAdmin#ssh_public_key3}
  */
  readonly sshPublicKey3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost1 SystemAdmin#trusthost1}
  */
  readonly trusthost1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost10 SystemAdmin#trusthost10}
  */
  readonly trusthost10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost2 SystemAdmin#trusthost2}
  */
  readonly trusthost2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost3 SystemAdmin#trusthost3}
  */
  readonly trusthost3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost4 SystemAdmin#trusthost4}
  */
  readonly trusthost4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost5 SystemAdmin#trusthost5}
  */
  readonly trusthost5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost6 SystemAdmin#trusthost6}
  */
  readonly trusthost6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost7 SystemAdmin#trusthost7}
  */
  readonly trusthost7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost8 SystemAdmin#trusthost8}
  */
  readonly trusthost8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#trusthost9 SystemAdmin#trusthost9}
  */
  readonly trusthost9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#two_factor SystemAdmin#two_factor}
  */
  readonly twoFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#two_factor_authentication SystemAdmin#two_factor_authentication}
  */
  readonly twoFactorAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#two_factor_notification SystemAdmin#two_factor_notification}
  */
  readonly twoFactorNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#vdom_override SystemAdmin#vdom_override}
  */
  readonly vdomOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#vdomparam SystemAdmin#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#wildcard SystemAdmin#wildcard}
  */
  readonly wildcard?: string;
  /**
  * guest_usergroups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#guest_usergroups SystemAdmin#guest_usergroups}
  */
  readonly guestUsergroups?: SystemAdminGuestUsergroups[] | cdktf.IResolvable;
  /**
  * gui_dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#gui_dashboard SystemAdmin#gui_dashboard}
  */
  readonly guiDashboard?: SystemAdminGuiDashboard[] | cdktf.IResolvable;
  /**
  * gui_global_menu_favorites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#gui_global_menu_favorites SystemAdmin#gui_global_menu_favorites}
  */
  readonly guiGlobalMenuFavorites?: SystemAdminGuiGlobalMenuFavorites[] | cdktf.IResolvable;
  /**
  * gui_new_feature_acknowledge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#gui_new_feature_acknowledge SystemAdmin#gui_new_feature_acknowledge}
  */
  readonly guiNewFeatureAcknowledge?: SystemAdminGuiNewFeatureAcknowledge[] | cdktf.IResolvable;
  /**
  * gui_vdom_menu_favorites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#gui_vdom_menu_favorites SystemAdmin#gui_vdom_menu_favorites}
  */
  readonly guiVdomMenuFavorites?: SystemAdminGuiVdomMenuFavorites[] | cdktf.IResolvable;
  /**
  * login_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#login_time SystemAdmin#login_time}
  */
  readonly loginTime?: SystemAdminLoginTime[] | cdktf.IResolvable;
  /**
  * vdom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#vdom SystemAdmin#vdom}
  */
  readonly vdom?: SystemAdminVdom[] | cdktf.IResolvable;
}
export interface SystemAdminGuestUsergroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#name SystemAdmin#name}
  */
  readonly name?: string;
}

export function systemAdminGuestUsergroupsToTerraform(struct?: SystemAdminGuestUsergroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemAdminGuestUsergroupsToHclTerraform(struct?: SystemAdminGuestUsergroups | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminGuestUsergroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminGuestUsergroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminGuestUsergroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class SystemAdminGuestUsergroupsList extends cdktf.ComplexList {
  public internalValue? : SystemAdminGuestUsergroups[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminGuestUsergroupsOutputReference {
    return new SystemAdminGuestUsergroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminGuiDashboardWidgetFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#id SystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#key SystemAdmin#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#value SystemAdmin#value}
  */
  readonly value?: string;
}

export function systemAdminGuiDashboardWidgetFiltersToTerraform(struct?: SystemAdminGuiDashboardWidgetFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function systemAdminGuiDashboardWidgetFiltersToHclTerraform(struct?: SystemAdminGuiDashboardWidgetFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class SystemAdminGuiDashboardWidgetFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminGuiDashboardWidgetFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminGuiDashboardWidgetFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class SystemAdminGuiDashboardWidgetFiltersList extends cdktf.ComplexList {
  public internalValue? : SystemAdminGuiDashboardWidgetFilters[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminGuiDashboardWidgetFiltersOutputReference {
    return new SystemAdminGuiDashboardWidgetFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminGuiDashboardWidget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#fabric_device SystemAdmin#fabric_device}
  */
  readonly fabricDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#height SystemAdmin#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#id SystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#industry SystemAdmin#industry}
  */
  readonly industry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#interface SystemAdmin#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#region SystemAdmin#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#report_by SystemAdmin#report_by}
  */
  readonly reportBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#sort_by SystemAdmin#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#timeframe SystemAdmin#timeframe}
  */
  readonly timeframe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#title SystemAdmin#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#type SystemAdmin#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#visualization SystemAdmin#visualization}
  */
  readonly visualization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#width SystemAdmin#width}
  */
  readonly width?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#x_pos SystemAdmin#x_pos}
  */
  readonly xPos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#y_pos SystemAdmin#y_pos}
  */
  readonly yPos?: number;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#filters SystemAdmin#filters}
  */
  readonly filters?: SystemAdminGuiDashboardWidgetFilters[] | cdktf.IResolvable;
}

export function systemAdminGuiDashboardWidgetToTerraform(struct?: SystemAdminGuiDashboardWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fabric_device: cdktf.stringToTerraform(struct!.fabricDevice),
    height: cdktf.numberToTerraform(struct!.height),
    id: cdktf.numberToTerraform(struct!.id),
    industry: cdktf.stringToTerraform(struct!.industry),
    interface: cdktf.stringToTerraform(struct!.interface),
    region: cdktf.stringToTerraform(struct!.region),
    report_by: cdktf.stringToTerraform(struct!.reportBy),
    sort_by: cdktf.stringToTerraform(struct!.sortBy),
    timeframe: cdktf.stringToTerraform(struct!.timeframe),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    visualization: cdktf.stringToTerraform(struct!.visualization),
    width: cdktf.numberToTerraform(struct!.width),
    x_pos: cdktf.numberToTerraform(struct!.xPos),
    y_pos: cdktf.numberToTerraform(struct!.yPos),
    filters: cdktf.listMapper(systemAdminGuiDashboardWidgetFiltersToTerraform, true)(struct!.filters),
  }
}


export function systemAdminGuiDashboardWidgetToHclTerraform(struct?: SystemAdminGuiDashboardWidget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fabric_device: {
      value: cdktf.stringToHclTerraform(struct!.fabricDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    industry: {
      value: cdktf.stringToHclTerraform(struct!.industry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_by: {
      value: cdktf.stringToHclTerraform(struct!.reportBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort_by: {
      value: cdktf.stringToHclTerraform(struct!.sortBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeframe: {
      value: cdktf.stringToHclTerraform(struct!.timeframe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visualization: {
      value: cdktf.stringToHclTerraform(struct!.visualization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_pos: {
      value: cdktf.numberToHclTerraform(struct!.xPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_pos: {
      value: cdktf.numberToHclTerraform(struct!.yPos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filters: {
      value: cdktf.listMapperHcl(systemAdminGuiDashboardWidgetFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "SystemAdminGuiDashboardWidgetFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminGuiDashboardWidgetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminGuiDashboardWidget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fabricDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricDevice = this._fabricDevice;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._industry !== undefined) {
      hasAnyValues = true;
      internalValueResult.industry = this._industry;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._reportBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportBy = this._reportBy;
    }
    if (this._sortBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBy = this._sortBy;
    }
    if (this._timeframe !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeframe = this._timeframe;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._visualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualization = this._visualization;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._xPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.xPos = this._xPos;
    }
    if (this._yPos !== undefined) {
      hasAnyValues = true;
      internalValueResult.yPos = this._yPos;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminGuiDashboardWidget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fabricDevice = undefined;
      this._height = undefined;
      this._id = undefined;
      this._industry = undefined;
      this._interface = undefined;
      this._region = undefined;
      this._reportBy = undefined;
      this._sortBy = undefined;
      this._timeframe = undefined;
      this._title = undefined;
      this._type = undefined;
      this._visualization = undefined;
      this._width = undefined;
      this._xPos = undefined;
      this._yPos = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fabricDevice = value.fabricDevice;
      this._height = value.height;
      this._id = value.id;
      this._industry = value.industry;
      this._interface = value.interface;
      this._region = value.region;
      this._reportBy = value.reportBy;
      this._sortBy = value.sortBy;
      this._timeframe = value.timeframe;
      this._title = value.title;
      this._type = value.type;
      this._visualization = value.visualization;
      this._width = value.width;
      this._xPos = value.xPos;
      this._yPos = value.yPos;
      this._filters.internalValue = value.filters;
    }
  }

  // fabric_device - computed: false, optional: true, required: false
  private _fabricDevice?: string; 
  public get fabricDevice() {
    return this.getStringAttribute('fabric_device');
  }
  public set fabricDevice(value: string) {
    this._fabricDevice = value;
  }
  public resetFabricDevice() {
    this._fabricDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricDeviceInput() {
    return this._fabricDevice;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // industry - computed: false, optional: true, required: false
  private _industry?: string; 
  public get industry() {
    return this.getStringAttribute('industry');
  }
  public set industry(value: string) {
    this._industry = value;
  }
  public resetIndustry() {
    this._industry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryInput() {
    return this._industry;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // report_by - computed: false, optional: true, required: false
  private _reportBy?: string; 
  public get reportBy() {
    return this.getStringAttribute('report_by');
  }
  public set reportBy(value: string) {
    this._reportBy = value;
  }
  public resetReportBy() {
    this._reportBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportByInput() {
    return this._reportBy;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // timeframe - computed: false, optional: true, required: false
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  public resetTimeframe() {
    this._timeframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
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

  // visualization - computed: false, optional: true, required: false
  private _visualization?: string; 
  public get visualization() {
    return this.getStringAttribute('visualization');
  }
  public set visualization(value: string) {
    this._visualization = value;
  }
  public resetVisualization() {
    this._visualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationInput() {
    return this._visualization;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // x_pos - computed: false, optional: true, required: false
  private _xPos?: number; 
  public get xPos() {
    return this.getNumberAttribute('x_pos');
  }
  public set xPos(value: number) {
    this._xPos = value;
  }
  public resetXPos() {
    this._xPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xPosInput() {
    return this._xPos;
  }

  // y_pos - computed: false, optional: true, required: false
  private _yPos?: number; 
  public get yPos() {
    return this.getNumberAttribute('y_pos');
  }
  public set yPos(value: number) {
    this._yPos = value;
  }
  public resetYPos() {
    this._yPos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yPosInput() {
    return this._yPos;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new SystemAdminGuiDashboardWidgetFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: SystemAdminGuiDashboardWidgetFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class SystemAdminGuiDashboardWidgetList extends cdktf.ComplexList {
  public internalValue? : SystemAdminGuiDashboardWidget[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminGuiDashboardWidgetOutputReference {
    return new SystemAdminGuiDashboardWidgetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminGuiDashboard {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#columns SystemAdmin#columns}
  */
  readonly columns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#id SystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#layout_type SystemAdmin#layout_type}
  */
  readonly layoutType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#name SystemAdmin#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#scope SystemAdmin#scope}
  */
  readonly scope?: string;
  /**
  * widget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#widget SystemAdmin#widget}
  */
  readonly widget?: SystemAdminGuiDashboardWidget[] | cdktf.IResolvable;
}

export function systemAdminGuiDashboardToTerraform(struct?: SystemAdminGuiDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.numberToTerraform(struct!.columns),
    id: cdktf.numberToTerraform(struct!.id),
    layout_type: cdktf.stringToTerraform(struct!.layoutType),
    name: cdktf.stringToTerraform(struct!.name),
    scope: cdktf.stringToTerraform(struct!.scope),
    widget: cdktf.listMapper(systemAdminGuiDashboardWidgetToTerraform, true)(struct!.widget),
  }
}


export function systemAdminGuiDashboardToHclTerraform(struct?: SystemAdminGuiDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.numberToHclTerraform(struct!.columns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    layout_type: {
      value: cdktf.stringToHclTerraform(struct!.layoutType),
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
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget: {
      value: cdktf.listMapperHcl(systemAdminGuiDashboardWidgetToHclTerraform, true)(struct!.widget),
      isBlock: true,
      type: "list",
      storageClassType: "SystemAdminGuiDashboardWidgetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminGuiDashboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminGuiDashboard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._layoutType !== undefined) {
      hasAnyValues = true;
      internalValueResult.layoutType = this._layoutType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._widget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.widget = this._widget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminGuiDashboard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._id = undefined;
      this._layoutType = undefined;
      this._name = undefined;
      this._scope = undefined;
      this._widget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._id = value.id;
      this._layoutType = value.layoutType;
      this._name = value.name;
      this._scope = value.scope;
      this._widget.internalValue = value.widget;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: number; 
  public get columns() {
    return this.getNumberAttribute('columns');
  }
  public set columns(value: number) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // layout_type - computed: false, optional: true, required: false
  private _layoutType?: string; 
  public get layoutType() {
    return this.getStringAttribute('layout_type');
  }
  public set layoutType(value: string) {
    this._layoutType = value;
  }
  public resetLayoutType() {
    this._layoutType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutTypeInput() {
    return this._layoutType;
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

  // scope - computed: false, optional: true, required: false
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

  // widget - computed: false, optional: true, required: false
  private _widget = new SystemAdminGuiDashboardWidgetList(this, "widget", false);
  public get widget() {
    return this._widget;
  }
  public putWidget(value: SystemAdminGuiDashboardWidget[] | cdktf.IResolvable) {
    this._widget.internalValue = value;
  }
  public resetWidget() {
    this._widget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget.internalValue;
  }
}

export class SystemAdminGuiDashboardList extends cdktf.ComplexList {
  public internalValue? : SystemAdminGuiDashboard[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminGuiDashboardOutputReference {
    return new SystemAdminGuiDashboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminGuiGlobalMenuFavorites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#id SystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function systemAdminGuiGlobalMenuFavoritesToTerraform(struct?: SystemAdminGuiGlobalMenuFavorites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function systemAdminGuiGlobalMenuFavoritesToHclTerraform(struct?: SystemAdminGuiGlobalMenuFavorites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminGuiGlobalMenuFavoritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminGuiGlobalMenuFavorites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminGuiGlobalMenuFavorites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class SystemAdminGuiGlobalMenuFavoritesList extends cdktf.ComplexList {
  public internalValue? : SystemAdminGuiGlobalMenuFavorites[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminGuiGlobalMenuFavoritesOutputReference {
    return new SystemAdminGuiGlobalMenuFavoritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminGuiNewFeatureAcknowledge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#id SystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function systemAdminGuiNewFeatureAcknowledgeToTerraform(struct?: SystemAdminGuiNewFeatureAcknowledge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function systemAdminGuiNewFeatureAcknowledgeToHclTerraform(struct?: SystemAdminGuiNewFeatureAcknowledge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminGuiNewFeatureAcknowledgeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminGuiNewFeatureAcknowledge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminGuiNewFeatureAcknowledge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class SystemAdminGuiNewFeatureAcknowledgeList extends cdktf.ComplexList {
  public internalValue? : SystemAdminGuiNewFeatureAcknowledge[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminGuiNewFeatureAcknowledgeOutputReference {
    return new SystemAdminGuiNewFeatureAcknowledgeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminGuiVdomMenuFavorites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#id SystemAdmin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function systemAdminGuiVdomMenuFavoritesToTerraform(struct?: SystemAdminGuiVdomMenuFavorites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function systemAdminGuiVdomMenuFavoritesToHclTerraform(struct?: SystemAdminGuiVdomMenuFavorites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminGuiVdomMenuFavoritesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminGuiVdomMenuFavorites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminGuiVdomMenuFavorites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class SystemAdminGuiVdomMenuFavoritesList extends cdktf.ComplexList {
  public internalValue? : SystemAdminGuiVdomMenuFavorites[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminGuiVdomMenuFavoritesOutputReference {
    return new SystemAdminGuiVdomMenuFavoritesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminLoginTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#last_failed_login SystemAdmin#last_failed_login}
  */
  readonly lastFailedLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#last_login SystemAdmin#last_login}
  */
  readonly lastLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#usr_name SystemAdmin#usr_name}
  */
  readonly usrName?: string;
}

export function systemAdminLoginTimeToTerraform(struct?: SystemAdminLoginTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_failed_login: cdktf.stringToTerraform(struct!.lastFailedLogin),
    last_login: cdktf.stringToTerraform(struct!.lastLogin),
    usr_name: cdktf.stringToTerraform(struct!.usrName),
  }
}


export function systemAdminLoginTimeToHclTerraform(struct?: SystemAdminLoginTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_failed_login: {
      value: cdktf.stringToHclTerraform(struct!.lastFailedLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_login: {
      value: cdktf.stringToHclTerraform(struct!.lastLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usr_name: {
      value: cdktf.stringToHclTerraform(struct!.usrName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminLoginTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminLoginTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastFailedLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastFailedLogin = this._lastFailedLogin;
    }
    if (this._lastLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastLogin = this._lastLogin;
    }
    if (this._usrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usrName = this._usrName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminLoginTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastFailedLogin = undefined;
      this._lastLogin = undefined;
      this._usrName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastFailedLogin = value.lastFailedLogin;
      this._lastLogin = value.lastLogin;
      this._usrName = value.usrName;
    }
  }

  // last_failed_login - computed: false, optional: true, required: false
  private _lastFailedLogin?: string; 
  public get lastFailedLogin() {
    return this.getStringAttribute('last_failed_login');
  }
  public set lastFailedLogin(value: string) {
    this._lastFailedLogin = value;
  }
  public resetLastFailedLogin() {
    this._lastFailedLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastFailedLoginInput() {
    return this._lastFailedLogin;
  }

  // last_login - computed: false, optional: true, required: false
  private _lastLogin?: string; 
  public get lastLogin() {
    return this.getStringAttribute('last_login');
  }
  public set lastLogin(value: string) {
    this._lastLogin = value;
  }
  public resetLastLogin() {
    this._lastLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastLoginInput() {
    return this._lastLogin;
  }

  // usr_name - computed: false, optional: true, required: false
  private _usrName?: string; 
  public get usrName() {
    return this.getStringAttribute('usr_name');
  }
  public set usrName(value: string) {
    this._usrName = value;
  }
  public resetUsrName() {
    this._usrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usrNameInput() {
    return this._usrName;
  }
}

export class SystemAdminLoginTimeList extends cdktf.ComplexList {
  public internalValue? : SystemAdminLoginTime[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminLoginTimeOutputReference {
    return new SystemAdminLoginTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAdminVdom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#name SystemAdmin#name}
  */
  readonly name?: string;
}

export function systemAdminVdomToTerraform(struct?: SystemAdminVdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemAdminVdomToHclTerraform(struct?: SystemAdminVdom | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminVdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAdminVdom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminVdom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class SystemAdminVdomList extends cdktf.ComplexList {
  public internalValue? : SystemAdminVdom[] | cdktf.IResolvable

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
  public get(index: number): SystemAdminVdomOutputReference {
    return new SystemAdminVdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin fortios_system_admin}
*/
export class SystemAdmin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_admin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdmin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdmin to import
  * @param importFromId The id of the existing SystemAdmin that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdmin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_admin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin fortios_system_admin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAdminConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_admin',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accprofile = config.accprofile;
    this._accprofileOverride = config.accprofileOverride;
    this._allowRemoveAdminSession = config.allowRemoveAdminSession;
    this._comments = config.comments;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emailTo = config.emailTo;
    this._forcePasswordChange = config.forcePasswordChange;
    this._fortitoken = config.fortitoken;
    this._getAllTables = config.fetchAllTables;
    this._guestAuth = config.guestAuth;
    this._guestLang = config.guestLang;
    this._hidden = config.hidden;
    this._history0 = config.history0;
    this._history1 = config.history1;
    this._id = config.id;
    this._ip6Trusthost1 = config.ip6Trusthost1;
    this._ip6Trusthost10 = config.ip6Trusthost10;
    this._ip6Trusthost2 = config.ip6Trusthost2;
    this._ip6Trusthost3 = config.ip6Trusthost3;
    this._ip6Trusthost4 = config.ip6Trusthost4;
    this._ip6Trusthost5 = config.ip6Trusthost5;
    this._ip6Trusthost6 = config.ip6Trusthost6;
    this._ip6Trusthost7 = config.ip6Trusthost7;
    this._ip6Trusthost8 = config.ip6Trusthost8;
    this._ip6Trusthost9 = config.ip6Trusthost9;
    this._name = config.name;
    this._password = config.password;
    this._passwordExpire = config.passwordExpire;
    this._peerAuth = config.peerAuth;
    this._peerGroup = config.peerGroup;
    this._radiusVdomOverride = config.radiusVdomOverride;
    this._remoteAuth = config.remoteAuth;
    this._remoteGroup = config.remoteGroup;
    this._schedule = config.schedule;
    this._smsCustomServer = config.smsCustomServer;
    this._smsPhone = config.smsPhone;
    this._smsServer = config.smsServer;
    this._sshCertificate = config.sshCertificate;
    this._sshPublicKey1 = config.sshPublicKey1;
    this._sshPublicKey2 = config.sshPublicKey2;
    this._sshPublicKey3 = config.sshPublicKey3;
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
    this._twoFactor = config.twoFactor;
    this._twoFactorAuthentication = config.twoFactorAuthentication;
    this._twoFactorNotification = config.twoFactorNotification;
    this._vdomOverride = config.vdomOverride;
    this._vdomparam = config.vdomparam;
    this._wildcard = config.wildcard;
    this._guestUsergroups.internalValue = config.guestUsergroups;
    this._guiDashboard.internalValue = config.guiDashboard;
    this._guiGlobalMenuFavorites.internalValue = config.guiGlobalMenuFavorites;
    this._guiNewFeatureAcknowledge.internalValue = config.guiNewFeatureAcknowledge;
    this._guiVdomMenuFavorites.internalValue = config.guiVdomMenuFavorites;
    this._loginTime.internalValue = config.loginTime;
    this._vdom.internalValue = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: false, optional: true, required: false
  private _accprofile?: string; 
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }
  public set accprofile(value: string) {
    this._accprofile = value;
  }
  public resetAccprofile() {
    this._accprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
  }

  // accprofile_override - computed: true, optional: true, required: false
  private _accprofileOverride?: string; 
  public get accprofileOverride() {
    return this.getStringAttribute('accprofile_override');
  }
  public set accprofileOverride(value: string) {
    this._accprofileOverride = value;
  }
  public resetAccprofileOverride() {
    this._accprofileOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileOverrideInput() {
    return this._accprofileOverride;
  }

  // allow_remove_admin_session - computed: true, optional: true, required: false
  private _allowRemoveAdminSession?: string; 
  public get allowRemoveAdminSession() {
    return this.getStringAttribute('allow_remove_admin_session');
  }
  public set allowRemoveAdminSession(value: string) {
    this._allowRemoveAdminSession = value;
  }
  public resetAllowRemoveAdminSession() {
    this._allowRemoveAdminSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoveAdminSessionInput() {
    return this._allowRemoveAdminSession;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // email_to - computed: false, optional: true, required: false
  private _emailTo?: string; 
  public get emailTo() {
    return this.getStringAttribute('email_to');
  }
  public set emailTo(value: string) {
    this._emailTo = value;
  }
  public resetEmailTo() {
    this._emailTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailToInput() {
    return this._emailTo;
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

  // fortitoken - computed: false, optional: true, required: false
  private _fortitoken?: string; 
  public get fortitoken() {
    return this.getStringAttribute('fortitoken');
  }
  public set fortitoken(value: string) {
    this._fortitoken = value;
  }
  public resetFortitoken() {
    this._fortitoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortitokenInput() {
    return this._fortitoken;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // guest_auth - computed: true, optional: true, required: false
  private _guestAuth?: string; 
  public get guestAuth() {
    return this.getStringAttribute('guest_auth');
  }
  public set guestAuth(value: string) {
    this._guestAuth = value;
  }
  public resetGuestAuth() {
    this._guestAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAuthInput() {
    return this._guestAuth;
  }

  // guest_lang - computed: false, optional: true, required: false
  private _guestLang?: string; 
  public get guestLang() {
    return this.getStringAttribute('guest_lang');
  }
  public set guestLang(value: string) {
    this._guestLang = value;
  }
  public resetGuestLang() {
    this._guestLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestLangInput() {
    return this._guestLang;
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

  // history0 - computed: false, optional: true, required: false
  private _history0?: string; 
  public get history0() {
    return this.getStringAttribute('history0');
  }
  public set history0(value: string) {
    this._history0 = value;
  }
  public resetHistory0() {
    this._history0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get history0Input() {
    return this._history0;
  }

  // history1 - computed: false, optional: true, required: false
  private _history1?: string; 
  public get history1() {
    return this.getStringAttribute('history1');
  }
  public set history1(value: string) {
    this._history1 = value;
  }
  public resetHistory1() {
    this._history1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get history1Input() {
    return this._history1;
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

  // ip6_trusthost1 - computed: true, optional: true, required: false
  private _ip6Trusthost1?: string; 
  public get ip6Trusthost1() {
    return this.getStringAttribute('ip6_trusthost1');
  }
  public set ip6Trusthost1(value: string) {
    this._ip6Trusthost1 = value;
  }
  public resetIp6Trusthost1() {
    this._ip6Trusthost1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost1Input() {
    return this._ip6Trusthost1;
  }

  // ip6_trusthost10 - computed: true, optional: true, required: false
  private _ip6Trusthost10?: string; 
  public get ip6Trusthost10() {
    return this.getStringAttribute('ip6_trusthost10');
  }
  public set ip6Trusthost10(value: string) {
    this._ip6Trusthost10 = value;
  }
  public resetIp6Trusthost10() {
    this._ip6Trusthost10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost10Input() {
    return this._ip6Trusthost10;
  }

  // ip6_trusthost2 - computed: true, optional: true, required: false
  private _ip6Trusthost2?: string; 
  public get ip6Trusthost2() {
    return this.getStringAttribute('ip6_trusthost2');
  }
  public set ip6Trusthost2(value: string) {
    this._ip6Trusthost2 = value;
  }
  public resetIp6Trusthost2() {
    this._ip6Trusthost2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost2Input() {
    return this._ip6Trusthost2;
  }

  // ip6_trusthost3 - computed: true, optional: true, required: false
  private _ip6Trusthost3?: string; 
  public get ip6Trusthost3() {
    return this.getStringAttribute('ip6_trusthost3');
  }
  public set ip6Trusthost3(value: string) {
    this._ip6Trusthost3 = value;
  }
  public resetIp6Trusthost3() {
    this._ip6Trusthost3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost3Input() {
    return this._ip6Trusthost3;
  }

  // ip6_trusthost4 - computed: true, optional: true, required: false
  private _ip6Trusthost4?: string; 
  public get ip6Trusthost4() {
    return this.getStringAttribute('ip6_trusthost4');
  }
  public set ip6Trusthost4(value: string) {
    this._ip6Trusthost4 = value;
  }
  public resetIp6Trusthost4() {
    this._ip6Trusthost4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost4Input() {
    return this._ip6Trusthost4;
  }

  // ip6_trusthost5 - computed: true, optional: true, required: false
  private _ip6Trusthost5?: string; 
  public get ip6Trusthost5() {
    return this.getStringAttribute('ip6_trusthost5');
  }
  public set ip6Trusthost5(value: string) {
    this._ip6Trusthost5 = value;
  }
  public resetIp6Trusthost5() {
    this._ip6Trusthost5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost5Input() {
    return this._ip6Trusthost5;
  }

  // ip6_trusthost6 - computed: true, optional: true, required: false
  private _ip6Trusthost6?: string; 
  public get ip6Trusthost6() {
    return this.getStringAttribute('ip6_trusthost6');
  }
  public set ip6Trusthost6(value: string) {
    this._ip6Trusthost6 = value;
  }
  public resetIp6Trusthost6() {
    this._ip6Trusthost6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost6Input() {
    return this._ip6Trusthost6;
  }

  // ip6_trusthost7 - computed: true, optional: true, required: false
  private _ip6Trusthost7?: string; 
  public get ip6Trusthost7() {
    return this.getStringAttribute('ip6_trusthost7');
  }
  public set ip6Trusthost7(value: string) {
    this._ip6Trusthost7 = value;
  }
  public resetIp6Trusthost7() {
    this._ip6Trusthost7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost7Input() {
    return this._ip6Trusthost7;
  }

  // ip6_trusthost8 - computed: true, optional: true, required: false
  private _ip6Trusthost8?: string; 
  public get ip6Trusthost8() {
    return this.getStringAttribute('ip6_trusthost8');
  }
  public set ip6Trusthost8(value: string) {
    this._ip6Trusthost8 = value;
  }
  public resetIp6Trusthost8() {
    this._ip6Trusthost8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost8Input() {
    return this._ip6Trusthost8;
  }

  // ip6_trusthost9 - computed: true, optional: true, required: false
  private _ip6Trusthost9?: string; 
  public get ip6Trusthost9() {
    return this.getStringAttribute('ip6_trusthost9');
  }
  public set ip6Trusthost9(value: string) {
    this._ip6Trusthost9 = value;
  }
  public resetIp6Trusthost9() {
    this._ip6Trusthost9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Trusthost9Input() {
    return this._ip6Trusthost9;
  }

  // name - computed: true, optional: true, required: false
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

  // peer_auth - computed: true, optional: true, required: false
  private _peerAuth?: string; 
  public get peerAuth() {
    return this.getStringAttribute('peer_auth');
  }
  public set peerAuth(value: string) {
    this._peerAuth = value;
  }
  public resetPeerAuth() {
    this._peerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAuthInput() {
    return this._peerAuth;
  }

  // peer_group - computed: false, optional: true, required: false
  private _peerGroup?: string; 
  public get peerGroup() {
    return this.getStringAttribute('peer_group');
  }
  public set peerGroup(value: string) {
    this._peerGroup = value;
  }
  public resetPeerGroup() {
    this._peerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupInput() {
    return this._peerGroup;
  }

  // radius_vdom_override - computed: true, optional: true, required: false
  private _radiusVdomOverride?: string; 
  public get radiusVdomOverride() {
    return this.getStringAttribute('radius_vdom_override');
  }
  public set radiusVdomOverride(value: string) {
    this._radiusVdomOverride = value;
  }
  public resetRadiusVdomOverride() {
    this._radiusVdomOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusVdomOverrideInput() {
    return this._radiusVdomOverride;
  }

  // remote_auth - computed: true, optional: true, required: false
  private _remoteAuth?: string; 
  public get remoteAuth() {
    return this.getStringAttribute('remote_auth');
  }
  public set remoteAuth(value: string) {
    this._remoteAuth = value;
  }
  public resetRemoteAuth() {
    this._remoteAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthInput() {
    return this._remoteAuth;
  }

  // remote_group - computed: false, optional: true, required: false
  private _remoteGroup?: string; 
  public get remoteGroup() {
    return this.getStringAttribute('remote_group');
  }
  public set remoteGroup(value: string) {
    this._remoteGroup = value;
  }
  public resetRemoteGroup() {
    this._remoteGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGroupInput() {
    return this._remoteGroup;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // sms_custom_server - computed: false, optional: true, required: false
  private _smsCustomServer?: string; 
  public get smsCustomServer() {
    return this.getStringAttribute('sms_custom_server');
  }
  public set smsCustomServer(value: string) {
    this._smsCustomServer = value;
  }
  public resetSmsCustomServer() {
    this._smsCustomServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCustomServerInput() {
    return this._smsCustomServer;
  }

  // sms_phone - computed: false, optional: true, required: false
  private _smsPhone?: string; 
  public get smsPhone() {
    return this.getStringAttribute('sms_phone');
  }
  public set smsPhone(value: string) {
    this._smsPhone = value;
  }
  public resetSmsPhone() {
    this._smsPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsPhoneInput() {
    return this._smsPhone;
  }

  // sms_server - computed: true, optional: true, required: false
  private _smsServer?: string; 
  public get smsServer() {
    return this.getStringAttribute('sms_server');
  }
  public set smsServer(value: string) {
    this._smsServer = value;
  }
  public resetSmsServer() {
    this._smsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsServerInput() {
    return this._smsServer;
  }

  // ssh_certificate - computed: false, optional: true, required: false
  private _sshCertificate?: string; 
  public get sshCertificate() {
    return this.getStringAttribute('ssh_certificate');
  }
  public set sshCertificate(value: string) {
    this._sshCertificate = value;
  }
  public resetSshCertificate() {
    this._sshCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshCertificateInput() {
    return this._sshCertificate;
  }

  // ssh_public_key1 - computed: false, optional: true, required: false
  private _sshPublicKey1?: string; 
  public get sshPublicKey1() {
    return this.getStringAttribute('ssh_public_key1');
  }
  public set sshPublicKey1(value: string) {
    this._sshPublicKey1 = value;
  }
  public resetSshPublicKey1() {
    this._sshPublicKey1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKey1Input() {
    return this._sshPublicKey1;
  }

  // ssh_public_key2 - computed: false, optional: true, required: false
  private _sshPublicKey2?: string; 
  public get sshPublicKey2() {
    return this.getStringAttribute('ssh_public_key2');
  }
  public set sshPublicKey2(value: string) {
    this._sshPublicKey2 = value;
  }
  public resetSshPublicKey2() {
    this._sshPublicKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKey2Input() {
    return this._sshPublicKey2;
  }

  // ssh_public_key3 - computed: false, optional: true, required: false
  private _sshPublicKey3?: string; 
  public get sshPublicKey3() {
    return this.getStringAttribute('ssh_public_key3');
  }
  public set sshPublicKey3(value: string) {
    this._sshPublicKey3 = value;
  }
  public resetSshPublicKey3() {
    this._sshPublicKey3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKey3Input() {
    return this._sshPublicKey3;
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

  // two_factor - computed: true, optional: true, required: false
  private _twoFactor?: string; 
  public get twoFactor() {
    return this.getStringAttribute('two_factor');
  }
  public set twoFactor(value: string) {
    this._twoFactor = value;
  }
  public resetTwoFactor() {
    this._twoFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorInput() {
    return this._twoFactor;
  }

  // two_factor_authentication - computed: false, optional: true, required: false
  private _twoFactorAuthentication?: string; 
  public get twoFactorAuthentication() {
    return this.getStringAttribute('two_factor_authentication');
  }
  public set twoFactorAuthentication(value: string) {
    this._twoFactorAuthentication = value;
  }
  public resetTwoFactorAuthentication() {
    this._twoFactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorAuthenticationInput() {
    return this._twoFactorAuthentication;
  }

  // two_factor_notification - computed: false, optional: true, required: false
  private _twoFactorNotification?: string; 
  public get twoFactorNotification() {
    return this.getStringAttribute('two_factor_notification');
  }
  public set twoFactorNotification(value: string) {
    this._twoFactorNotification = value;
  }
  public resetTwoFactorNotification() {
    this._twoFactorNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorNotificationInput() {
    return this._twoFactorNotification;
  }

  // vdom_override - computed: true, optional: true, required: false
  private _vdomOverride?: string; 
  public get vdomOverride() {
    return this.getStringAttribute('vdom_override');
  }
  public set vdomOverride(value: string) {
    this._vdomOverride = value;
  }
  public resetVdomOverride() {
    this._vdomOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomOverrideInput() {
    return this._vdomOverride;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
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

  // guest_usergroups - computed: false, optional: true, required: false
  private _guestUsergroups = new SystemAdminGuestUsergroupsList(this, "guest_usergroups", true);
  public get guestUsergroups() {
    return this._guestUsergroups;
  }
  public putGuestUsergroups(value: SystemAdminGuestUsergroups[] | cdktf.IResolvable) {
    this._guestUsergroups.internalValue = value;
  }
  public resetGuestUsergroups() {
    this._guestUsergroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestUsergroupsInput() {
    return this._guestUsergroups.internalValue;
  }

  // gui_dashboard - computed: false, optional: true, required: false
  private _guiDashboard = new SystemAdminGuiDashboardList(this, "gui_dashboard", false);
  public get guiDashboard() {
    return this._guiDashboard;
  }
  public putGuiDashboard(value: SystemAdminGuiDashboard[] | cdktf.IResolvable) {
    this._guiDashboard.internalValue = value;
  }
  public resetGuiDashboard() {
    this._guiDashboard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiDashboardInput() {
    return this._guiDashboard.internalValue;
  }

  // gui_global_menu_favorites - computed: false, optional: true, required: false
  private _guiGlobalMenuFavorites = new SystemAdminGuiGlobalMenuFavoritesList(this, "gui_global_menu_favorites", false);
  public get guiGlobalMenuFavorites() {
    return this._guiGlobalMenuFavorites;
  }
  public putGuiGlobalMenuFavorites(value: SystemAdminGuiGlobalMenuFavorites[] | cdktf.IResolvable) {
    this._guiGlobalMenuFavorites.internalValue = value;
  }
  public resetGuiGlobalMenuFavorites() {
    this._guiGlobalMenuFavorites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiGlobalMenuFavoritesInput() {
    return this._guiGlobalMenuFavorites.internalValue;
  }

  // gui_new_feature_acknowledge - computed: false, optional: true, required: false
  private _guiNewFeatureAcknowledge = new SystemAdminGuiNewFeatureAcknowledgeList(this, "gui_new_feature_acknowledge", false);
  public get guiNewFeatureAcknowledge() {
    return this._guiNewFeatureAcknowledge;
  }
  public putGuiNewFeatureAcknowledge(value: SystemAdminGuiNewFeatureAcknowledge[] | cdktf.IResolvable) {
    this._guiNewFeatureAcknowledge.internalValue = value;
  }
  public resetGuiNewFeatureAcknowledge() {
    this._guiNewFeatureAcknowledge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiNewFeatureAcknowledgeInput() {
    return this._guiNewFeatureAcknowledge.internalValue;
  }

  // gui_vdom_menu_favorites - computed: false, optional: true, required: false
  private _guiVdomMenuFavorites = new SystemAdminGuiVdomMenuFavoritesList(this, "gui_vdom_menu_favorites", false);
  public get guiVdomMenuFavorites() {
    return this._guiVdomMenuFavorites;
  }
  public putGuiVdomMenuFavorites(value: SystemAdminGuiVdomMenuFavorites[] | cdktf.IResolvable) {
    this._guiVdomMenuFavorites.internalValue = value;
  }
  public resetGuiVdomMenuFavorites() {
    this._guiVdomMenuFavorites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiVdomMenuFavoritesInput() {
    return this._guiVdomMenuFavorites.internalValue;
  }

  // login_time - computed: false, optional: true, required: false
  private _loginTime = new SystemAdminLoginTimeList(this, "login_time", false);
  public get loginTime() {
    return this._loginTime;
  }
  public putLoginTime(value: SystemAdminLoginTime[] | cdktf.IResolvable) {
    this._loginTime.internalValue = value;
  }
  public resetLoginTime() {
    this._loginTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTimeInput() {
    return this._loginTime.internalValue;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom = new SystemAdminVdomList(this, "vdom", true);
  public get vdom() {
    return this._vdom;
  }
  public putVdom(value: SystemAdminVdom[] | cdktf.IResolvable) {
    this._vdom.internalValue = value;
  }
  public resetVdom() {
    this._vdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accprofile: cdktf.stringToTerraform(this._accprofile),
      accprofile_override: cdktf.stringToTerraform(this._accprofileOverride),
      allow_remove_admin_session: cdktf.stringToTerraform(this._allowRemoveAdminSession),
      comments: cdktf.stringToTerraform(this._comments),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      email_to: cdktf.stringToTerraform(this._emailTo),
      force_password_change: cdktf.stringToTerraform(this._forcePasswordChange),
      fortitoken: cdktf.stringToTerraform(this._fortitoken),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      guest_auth: cdktf.stringToTerraform(this._guestAuth),
      guest_lang: cdktf.stringToTerraform(this._guestLang),
      hidden: cdktf.numberToTerraform(this._hidden),
      history0: cdktf.stringToTerraform(this._history0),
      history1: cdktf.stringToTerraform(this._history1),
      id: cdktf.stringToTerraform(this._id),
      ip6_trusthost1: cdktf.stringToTerraform(this._ip6Trusthost1),
      ip6_trusthost10: cdktf.stringToTerraform(this._ip6Trusthost10),
      ip6_trusthost2: cdktf.stringToTerraform(this._ip6Trusthost2),
      ip6_trusthost3: cdktf.stringToTerraform(this._ip6Trusthost3),
      ip6_trusthost4: cdktf.stringToTerraform(this._ip6Trusthost4),
      ip6_trusthost5: cdktf.stringToTerraform(this._ip6Trusthost5),
      ip6_trusthost6: cdktf.stringToTerraform(this._ip6Trusthost6),
      ip6_trusthost7: cdktf.stringToTerraform(this._ip6Trusthost7),
      ip6_trusthost8: cdktf.stringToTerraform(this._ip6Trusthost8),
      ip6_trusthost9: cdktf.stringToTerraform(this._ip6Trusthost9),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_expire: cdktf.stringToTerraform(this._passwordExpire),
      peer_auth: cdktf.stringToTerraform(this._peerAuth),
      peer_group: cdktf.stringToTerraform(this._peerGroup),
      radius_vdom_override: cdktf.stringToTerraform(this._radiusVdomOverride),
      remote_auth: cdktf.stringToTerraform(this._remoteAuth),
      remote_group: cdktf.stringToTerraform(this._remoteGroup),
      schedule: cdktf.stringToTerraform(this._schedule),
      sms_custom_server: cdktf.stringToTerraform(this._smsCustomServer),
      sms_phone: cdktf.stringToTerraform(this._smsPhone),
      sms_server: cdktf.stringToTerraform(this._smsServer),
      ssh_certificate: cdktf.stringToTerraform(this._sshCertificate),
      ssh_public_key1: cdktf.stringToTerraform(this._sshPublicKey1),
      ssh_public_key2: cdktf.stringToTerraform(this._sshPublicKey2),
      ssh_public_key3: cdktf.stringToTerraform(this._sshPublicKey3),
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
      two_factor: cdktf.stringToTerraform(this._twoFactor),
      two_factor_authentication: cdktf.stringToTerraform(this._twoFactorAuthentication),
      two_factor_notification: cdktf.stringToTerraform(this._twoFactorNotification),
      vdom_override: cdktf.stringToTerraform(this._vdomOverride),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wildcard: cdktf.stringToTerraform(this._wildcard),
      guest_usergroups: cdktf.listMapper(systemAdminGuestUsergroupsToTerraform, true)(this._guestUsergroups.internalValue),
      gui_dashboard: cdktf.listMapper(systemAdminGuiDashboardToTerraform, true)(this._guiDashboard.internalValue),
      gui_global_menu_favorites: cdktf.listMapper(systemAdminGuiGlobalMenuFavoritesToTerraform, true)(this._guiGlobalMenuFavorites.internalValue),
      gui_new_feature_acknowledge: cdktf.listMapper(systemAdminGuiNewFeatureAcknowledgeToTerraform, true)(this._guiNewFeatureAcknowledge.internalValue),
      gui_vdom_menu_favorites: cdktf.listMapper(systemAdminGuiVdomMenuFavoritesToTerraform, true)(this._guiVdomMenuFavorites.internalValue),
      login_time: cdktf.listMapper(systemAdminLoginTimeToTerraform, true)(this._loginTime.internalValue),
      vdom: cdktf.listMapper(systemAdminVdomToTerraform, true)(this._vdom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accprofile: {
        value: cdktf.stringToHclTerraform(this._accprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accprofile_override: {
        value: cdktf.stringToHclTerraform(this._accprofileOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_remove_admin_session: {
        value: cdktf.stringToHclTerraform(this._allowRemoveAdminSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      email_to: {
        value: cdktf.stringToHclTerraform(this._emailTo),
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
      fortitoken: {
        value: cdktf.stringToHclTerraform(this._fortitoken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_auth: {
        value: cdktf.stringToHclTerraform(this._guestAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest_lang: {
        value: cdktf.stringToHclTerraform(this._guestLang),
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
      history0: {
        value: cdktf.stringToHclTerraform(this._history0),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      history1: {
        value: cdktf.stringToHclTerraform(this._history1),
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
      ip6_trusthost1: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost10: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost2: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost3: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost4: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost5: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost6: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost7: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost8: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_trusthost9: {
        value: cdktf.stringToHclTerraform(this._ip6Trusthost9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_expire: {
        value: cdktf.stringToHclTerraform(this._passwordExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_auth: {
        value: cdktf.stringToHclTerraform(this._peerAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_group: {
        value: cdktf.stringToHclTerraform(this._peerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_vdom_override: {
        value: cdktf.stringToHclTerraform(this._radiusVdomOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_auth: {
        value: cdktf.stringToHclTerraform(this._remoteAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_group: {
        value: cdktf.stringToHclTerraform(this._remoteGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_custom_server: {
        value: cdktf.stringToHclTerraform(this._smsCustomServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_phone: {
        value: cdktf.stringToHclTerraform(this._smsPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_server: {
        value: cdktf.stringToHclTerraform(this._smsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_certificate: {
        value: cdktf.stringToHclTerraform(this._sshCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key1: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key2: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key3: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey3),
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
      two_factor: {
        value: cdktf.stringToHclTerraform(this._twoFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_authentication: {
        value: cdktf.stringToHclTerraform(this._twoFactorAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_notification: {
        value: cdktf.stringToHclTerraform(this._twoFactorNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom_override: {
        value: cdktf.stringToHclTerraform(this._vdomOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
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
      guest_usergroups: {
        value: cdktf.listMapperHcl(systemAdminGuestUsergroupsToHclTerraform, true)(this._guestUsergroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemAdminGuestUsergroupsList",
      },
      gui_dashboard: {
        value: cdktf.listMapperHcl(systemAdminGuiDashboardToHclTerraform, true)(this._guiDashboard.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminGuiDashboardList",
      },
      gui_global_menu_favorites: {
        value: cdktf.listMapperHcl(systemAdminGuiGlobalMenuFavoritesToHclTerraform, true)(this._guiGlobalMenuFavorites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminGuiGlobalMenuFavoritesList",
      },
      gui_new_feature_acknowledge: {
        value: cdktf.listMapperHcl(systemAdminGuiNewFeatureAcknowledgeToHclTerraform, true)(this._guiNewFeatureAcknowledge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminGuiNewFeatureAcknowledgeList",
      },
      gui_vdom_menu_favorites: {
        value: cdktf.listMapperHcl(systemAdminGuiVdomMenuFavoritesToHclTerraform, true)(this._guiVdomMenuFavorites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminGuiVdomMenuFavoritesList",
      },
      login_time: {
        value: cdktf.listMapperHcl(systemAdminLoginTimeToHclTerraform, true)(this._loginTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminLoginTimeList",
      },
      vdom: {
        value: cdktf.listMapperHcl(systemAdminVdomToHclTerraform, true)(this._vdom.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemAdminVdomList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
