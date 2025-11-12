// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminConfig extends cdktf.TerraformMetaArguments {
  /**
  * Free form text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#additional_info Admin#additional_info}
  */
  readonly additionalInfo?: string;
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#description Admin#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#email Admin#email}
  */
  readonly email?: string;
  /**
  * Additional restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#filters Admin#filters}
  */
  readonly filters?: AdminFilters;
  /**
  * Groups automatically selected for new users created by this admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#groups Admin#groups}
  */
  readonly groups?: AdminGroups[] | cdktf.IResolvable;
  /**
  * Plain text password or hash format supported by SFTPGo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#password Admin#password}
  */
  readonly password: string;
  /**
  * Granted permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#permissions Admin#permissions}
  */
  readonly permissions: string[];
  /**
  * Admin preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#preferences Admin#preferences}
  */
  readonly preferences?: AdminPreferences;
  /**
  * Role name. If set the admin can only administer users with the same role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#role Admin#role}
  */
  readonly role?: string;
  /**
  * 1 enabled, 0 disabled (login is not allowed).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#status Admin#status}
  */
  readonly status: number;
  /**
  * Unique username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#username Admin#username}
  */
  readonly username: string;
}
export interface AdminFilters {
  /**
  * If set, API Key authentication is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#allow_api_key_auth Admin#allow_api_key_auth}
  */
  readonly allowApiKeyAuth?: boolean | cdktf.IResolvable;
  /**
  * Only connections from these IP/Mask are allowed. IP/Mask must be in CIDR notation as defined in RFC 4632 and RFC 4291 for example "192.0.2.0/24" or "2001:db8::/32"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#allow_list Admin#allow_list}
  */
  readonly allowList?: string[];
  /**
  * If set, password authentication is disabled. The administrator can authenticate using an API key or OpenID Connect, if either is enabled. Available in the Enterprise edition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#disable_password_auth Admin#disable_password_auth}
  */
  readonly disablePasswordAuth?: boolean | cdktf.IResolvable;
  /**
  * If set, two factor authentication is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#require_password_change Admin#require_password_change}
  */
  readonly requirePasswordChange?: boolean | cdktf.IResolvable;
  /**
  * If set, API Key authentication is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#require_two_factor Admin#require_two_factor}
  */
  readonly requireTwoFactor?: boolean | cdktf.IResolvable;
}

export function adminFiltersToTerraform(struct?: AdminFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_api_key_auth: cdktf.booleanToTerraform(struct!.allowApiKeyAuth),
    allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowList),
    disable_password_auth: cdktf.booleanToTerraform(struct!.disablePasswordAuth),
    require_password_change: cdktf.booleanToTerraform(struct!.requirePasswordChange),
    require_two_factor: cdktf.booleanToTerraform(struct!.requireTwoFactor),
  }
}


export function adminFiltersToHclTerraform(struct?: AdminFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_api_key_auth: {
      value: cdktf.booleanToHclTerraform(struct!.allowApiKeyAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_password_auth: {
      value: cdktf.booleanToHclTerraform(struct!.disablePasswordAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_password_change: {
      value: cdktf.booleanToHclTerraform(struct!.requirePasswordChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_two_factor: {
      value: cdktf.booleanToHclTerraform(struct!.requireTwoFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowApiKeyAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowApiKeyAuth = this._allowApiKeyAuth;
    }
    if (this._allowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowList = this._allowList;
    }
    if (this._disablePasswordAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePasswordAuth = this._disablePasswordAuth;
    }
    if (this._requirePasswordChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePasswordChange = this._requirePasswordChange;
    }
    if (this._requireTwoFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireTwoFactor = this._requireTwoFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowApiKeyAuth = undefined;
      this._allowList = undefined;
      this._disablePasswordAuth = undefined;
      this._requirePasswordChange = undefined;
      this._requireTwoFactor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowApiKeyAuth = value.allowApiKeyAuth;
      this._allowList = value.allowList;
      this._disablePasswordAuth = value.disablePasswordAuth;
      this._requirePasswordChange = value.requirePasswordChange;
      this._requireTwoFactor = value.requireTwoFactor;
    }
  }

  // allow_api_key_auth - computed: true, optional: true, required: false
  private _allowApiKeyAuth?: boolean | cdktf.IResolvable; 
  public get allowApiKeyAuth() {
    return this.getBooleanAttribute('allow_api_key_auth');
  }
  public set allowApiKeyAuth(value: boolean | cdktf.IResolvable) {
    this._allowApiKeyAuth = value;
  }
  public resetAllowApiKeyAuth() {
    this._allowApiKeyAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowApiKeyAuthInput() {
    return this._allowApiKeyAuth;
  }

  // allow_list - computed: true, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return this.getListAttribute('allow_list');
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // disable_password_auth - computed: true, optional: true, required: false
  private _disablePasswordAuth?: boolean | cdktf.IResolvable; 
  public get disablePasswordAuth() {
    return this.getBooleanAttribute('disable_password_auth');
  }
  public set disablePasswordAuth(value: boolean | cdktf.IResolvable) {
    this._disablePasswordAuth = value;
  }
  public resetDisablePasswordAuth() {
    this._disablePasswordAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePasswordAuthInput() {
    return this._disablePasswordAuth;
  }

  // require_password_change - computed: true, optional: true, required: false
  private _requirePasswordChange?: boolean | cdktf.IResolvable; 
  public get requirePasswordChange() {
    return this.getBooleanAttribute('require_password_change');
  }
  public set requirePasswordChange(value: boolean | cdktf.IResolvable) {
    this._requirePasswordChange = value;
  }
  public resetRequirePasswordChange() {
    this._requirePasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePasswordChangeInput() {
    return this._requirePasswordChange;
  }

  // require_two_factor - computed: true, optional: true, required: false
  private _requireTwoFactor?: boolean | cdktf.IResolvable; 
  public get requireTwoFactor() {
    return this.getBooleanAttribute('require_two_factor');
  }
  public set requireTwoFactor(value: boolean | cdktf.IResolvable) {
    this._requireTwoFactor = value;
  }
  public resetRequireTwoFactor() {
    this._requireTwoFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireTwoFactorInput() {
    return this._requireTwoFactor;
  }
}
export interface AdminGroupsOptions {
  /**
  * Add to users as the specified group type. 1 = Primary, 2 = Secondary, 3 = Membership only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#add_to_users_as Admin#add_to_users_as}
  */
  readonly addToUsersAs: number;
}

export function adminGroupsOptionsToTerraform(struct?: AdminGroupsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_to_users_as: cdktf.numberToTerraform(struct!.addToUsersAs),
  }
}


export function adminGroupsOptionsToHclTerraform(struct?: AdminGroupsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_to_users_as: {
      value: cdktf.numberToHclTerraform(struct!.addToUsersAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminGroupsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminGroupsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addToUsersAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addToUsersAs = this._addToUsersAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminGroupsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addToUsersAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addToUsersAs = value.addToUsersAs;
    }
  }

  // add_to_users_as - computed: false, optional: false, required: true
  private _addToUsersAs?: number; 
  public get addToUsersAs() {
    return this.getNumberAttribute('add_to_users_as');
  }
  public set addToUsersAs(value: number) {
    this._addToUsersAs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addToUsersAsInput() {
    return this._addToUsersAs;
  }
}
export interface AdminGroups {
  /**
  * Group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#name Admin#name}
  */
  readonly name: string;
  /**
  * Options for admin/group mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#options Admin#options}
  */
  readonly options: AdminGroupsOptions;
}

export function adminGroupsToTerraform(struct?: AdminGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    options: adminGroupsOptionsToTerraform(struct!.options),
  }
}


export function adminGroupsToHclTerraform(struct?: AdminGroups | cdktf.IResolvable): any {
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
    options: {
      value: adminGroupsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "AdminGroupsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdminGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._options.internalValue = value.options;
    }
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

  // options - computed: false, optional: false, required: true
  private _options = new AdminGroupsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: AdminGroupsOptions) {
    this._options.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class AdminGroupsList extends cdktf.ComplexList {
  public internalValue? : AdminGroups[] | cdktf.IResolvable

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
  public get(index: number): AdminGroupsOutputReference {
    return new AdminGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdminPreferences {
  /**
  * If set defines the default expiration for newly created users as number of days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#default_users_expiration Admin#default_users_expiration}
  */
  readonly defaultUsersExpiration?: number;
  /**
  * If set allow to hide some sections from the user page in the WebAdmin. 1 = groups, 2 = filesystem, 4 = virtual folders, 8 = profile, 16 = ACL, 32 = Disk and bandwidth quota limits, 64 = Advanced. Settings can be combined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#hide_user_page_sections Admin#hide_user_page_sections}
  */
  readonly hideUserPageSections?: number;
}

export function adminPreferencesToTerraform(struct?: AdminPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_users_expiration: cdktf.numberToTerraform(struct!.defaultUsersExpiration),
    hide_user_page_sections: cdktf.numberToTerraform(struct!.hideUserPageSections),
  }
}


export function adminPreferencesToHclTerraform(struct?: AdminPreferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_users_expiration: {
      value: cdktf.numberToHclTerraform(struct!.defaultUsersExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hide_user_page_sections: {
      value: cdktf.numberToHclTerraform(struct!.hideUserPageSections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdminPreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdminPreferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultUsersExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUsersExpiration = this._defaultUsersExpiration;
    }
    if (this._hideUserPageSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideUserPageSections = this._hideUserPageSections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdminPreferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultUsersExpiration = undefined;
      this._hideUserPageSections = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultUsersExpiration = value.defaultUsersExpiration;
      this._hideUserPageSections = value.hideUserPageSections;
    }
  }

  // default_users_expiration - computed: true, optional: true, required: false
  private _defaultUsersExpiration?: number; 
  public get defaultUsersExpiration() {
    return this.getNumberAttribute('default_users_expiration');
  }
  public set defaultUsersExpiration(value: number) {
    this._defaultUsersExpiration = value;
  }
  public resetDefaultUsersExpiration() {
    this._defaultUsersExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUsersExpirationInput() {
    return this._defaultUsersExpiration;
  }

  // hide_user_page_sections - computed: true, optional: true, required: false
  private _hideUserPageSections?: number; 
  public get hideUserPageSections() {
    return this.getNumberAttribute('hide_user_page_sections');
  }
  public set hideUserPageSections(value: number) {
    this._hideUserPageSections = value;
  }
  public resetHideUserPageSections() {
    this._hideUserPageSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideUserPageSectionsInput() {
    return this._hideUserPageSections;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin sftpgo_admin}
*/
export class Admin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_admin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Admin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Admin to import
  * @param importFromId The id of the existing Admin that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Admin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_admin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.19/docs/resources/admin sftpgo_admin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminConfig
  */
  public constructor(scope: Construct, id: string, config: AdminConfig) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_admin',
      terraformGeneratorMetadata: {
        providerName: 'sftpgo',
        providerVersion: '0.0.19',
        providerVersionConstraint: '0.0.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalInfo = config.additionalInfo;
    this._description = config.description;
    this._email = config.email;
    this._filters.internalValue = config.filters;
    this._groups.internalValue = config.groups;
    this._password = config.password;
    this._permissions = config.permissions;
    this._preferences.internalValue = config.preferences;
    this._role = config.role;
    this._status = config.status;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_info - computed: false, optional: true, required: false
  private _additionalInfo?: string; 
  public get additionalInfo() {
    return this.getStringAttribute('additional_info');
  }
  public set additionalInfo(value: string) {
    this._additionalInfo = value;
  }
  public resetAdditionalInfo() {
    this._additionalInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInfoInput() {
    return this._additionalInfo;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // filters - computed: true, optional: true, required: false
  private _filters = new AdminFiltersOutputReference(this, "filters");
  public get filters() {
    return this._filters;
  }
  public putFilters(value: AdminFilters) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new AdminGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: AdminGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getNumberAttribute('last_login');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // preferences - computed: true, optional: true, required: false
  private _preferences = new AdminPreferencesOutputReference(this, "preferences");
  public get preferences() {
    return this._preferences;
  }
  public putPreferences(value: AdminPreferences) {
    this._preferences.internalValue = value;
  }
  public resetPreferences() {
    this._preferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferencesInput() {
    return this._preferences.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_info: cdktf.stringToTerraform(this._additionalInfo),
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      filters: adminFiltersToTerraform(this._filters.internalValue),
      groups: cdktf.listMapper(adminGroupsToTerraform, false)(this._groups.internalValue),
      password: cdktf.stringToTerraform(this._password),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
      preferences: adminPreferencesToTerraform(this._preferences.internalValue),
      role: cdktf.stringToTerraform(this._role),
      status: cdktf.numberToTerraform(this._status),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_info: {
        value: cdktf.stringToHclTerraform(this._additionalInfo),
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
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: adminFiltersToHclTerraform(this._filters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdminFilters",
      },
      groups: {
        value: cdktf.listMapperHcl(adminGroupsToHclTerraform, false)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdminGroupsList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preferences: {
        value: adminPreferencesToHclTerraform(this._preferences.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdminPreferences",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
