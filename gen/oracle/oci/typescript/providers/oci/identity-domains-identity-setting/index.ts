// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsIdentitySettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#attribute_sets IdentityDomainsIdentitySetting#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#attributes IdentityDomainsIdentitySetting#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#authorization IdentityDomainsIdentitySetting#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#emit_locked_message_when_user_is_locked IdentityDomainsIdentitySetting#emit_locked_message_when_user_is_locked}
  */
  readonly emitLockedMessageWhenUserIsLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#external_id IdentityDomainsIdentitySetting#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#idcs_endpoint IdentityDomainsIdentitySetting#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#identity_setting_id IdentityDomainsIdentitySetting#identity_setting_id}
  */
  readonly identitySettingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#ocid IdentityDomainsIdentitySetting#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#primary_email_required IdentityDomainsIdentitySetting#primary_email_required}
  */
  readonly primaryEmailRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#resource_type_schema_version IdentityDomainsIdentitySetting#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#return_inactive_over_locked_message IdentityDomainsIdentitySetting#return_inactive_over_locked_message}
  */
  readonly returnInactiveOverLockedMessage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#schemas IdentityDomainsIdentitySetting#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#user_allowed_to_set_recovery_email IdentityDomainsIdentitySetting#user_allowed_to_set_recovery_email}
  */
  readonly userAllowedToSetRecoveryEmail?: boolean | cdktf.IResolvable;
  /**
  * my_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#my_profile IdentityDomainsIdentitySetting#my_profile}
  */
  readonly myProfile?: IdentityDomainsIdentitySettingMyProfile;
  /**
  * posix_gid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#posix_gid IdentityDomainsIdentitySetting#posix_gid}
  */
  readonly posixGid?: IdentityDomainsIdentitySettingPosixGid;
  /**
  * posix_uid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#posix_uid IdentityDomainsIdentitySetting#posix_uid}
  */
  readonly posixUid?: IdentityDomainsIdentitySettingPosixUid;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#tags IdentityDomainsIdentitySetting#tags}
  */
  readonly tags?: IdentityDomainsIdentitySettingTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#timeouts IdentityDomainsIdentitySetting#timeouts}
  */
  readonly timeouts?: IdentityDomainsIdentitySettingTimeouts;
  /**
  * tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#tokens IdentityDomainsIdentitySetting#tokens}
  */
  readonly tokens?: IdentityDomainsIdentitySettingTokens[] | cdktf.IResolvable;
}
export interface IdentityDomainsIdentitySettingIdcsCreatedBy {
}

export function identityDomainsIdentitySettingIdcsCreatedByToTerraform(struct?: IdentityDomainsIdentitySettingIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsIdentitySettingIdcsCreatedByToHclTerraform(struct?: IdentityDomainsIdentitySettingIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsIdentitySettingIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentitySettingIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentitySettingIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsIdentitySettingIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsIdentitySettingIdcsCreatedByOutputReference {
    return new IdentityDomainsIdentitySettingIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentitySettingIdcsLastModifiedBy {
}

export function identityDomainsIdentitySettingIdcsLastModifiedByToTerraform(struct?: IdentityDomainsIdentitySettingIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsIdentitySettingIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsIdentitySettingIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentitySettingIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentitySettingIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsIdentitySettingIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference {
    return new IdentityDomainsIdentitySettingIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentitySettingMeta {
}

export function identityDomainsIdentitySettingMetaToTerraform(struct?: IdentityDomainsIdentitySettingMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsIdentitySettingMetaToHclTerraform(struct?: IdentityDomainsIdentitySettingMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsIdentitySettingMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentitySettingMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentitySettingMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class IdentityDomainsIdentitySettingMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsIdentitySettingMetaOutputReference {
    return new IdentityDomainsIdentitySettingMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentitySettingMyProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_change_their_password IdentityDomainsIdentitySetting#allow_end_users_to_change_their_password}
  */
  readonly allowEndUsersToChangeTheirPassword?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_link_their_support_account IdentityDomainsIdentitySetting#allow_end_users_to_link_their_support_account}
  */
  readonly allowEndUsersToLinkTheirSupportAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_manage_their_capabilities IdentityDomainsIdentitySetting#allow_end_users_to_manage_their_capabilities}
  */
  readonly allowEndUsersToManageTheirCapabilities?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#allow_end_users_to_update_their_security_settings IdentityDomainsIdentitySetting#allow_end_users_to_update_their_security_settings}
  */
  readonly allowEndUsersToUpdateTheirSecuritySettings?: boolean | cdktf.IResolvable;
}

export function identityDomainsIdentitySettingMyProfileToTerraform(struct?: IdentityDomainsIdentitySettingMyProfileOutputReference | IdentityDomainsIdentitySettingMyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_end_users_to_change_their_password: cdktf.booleanToTerraform(struct!.allowEndUsersToChangeTheirPassword),
    allow_end_users_to_link_their_support_account: cdktf.booleanToTerraform(struct!.allowEndUsersToLinkTheirSupportAccount),
    allow_end_users_to_manage_their_capabilities: cdktf.booleanToTerraform(struct!.allowEndUsersToManageTheirCapabilities),
    allow_end_users_to_update_their_security_settings: cdktf.booleanToTerraform(struct!.allowEndUsersToUpdateTheirSecuritySettings),
  }
}


export function identityDomainsIdentitySettingMyProfileToHclTerraform(struct?: IdentityDomainsIdentitySettingMyProfileOutputReference | IdentityDomainsIdentitySettingMyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_end_users_to_change_their_password: {
      value: cdktf.booleanToHclTerraform(struct!.allowEndUsersToChangeTheirPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_end_users_to_link_their_support_account: {
      value: cdktf.booleanToHclTerraform(struct!.allowEndUsersToLinkTheirSupportAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_end_users_to_manage_their_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.allowEndUsersToManageTheirCapabilities),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_end_users_to_update_their_security_settings: {
      value: cdktf.booleanToHclTerraform(struct!.allowEndUsersToUpdateTheirSecuritySettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentitySettingMyProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsIdentitySettingMyProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEndUsersToChangeTheirPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEndUsersToChangeTheirPassword = this._allowEndUsersToChangeTheirPassword;
    }
    if (this._allowEndUsersToLinkTheirSupportAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEndUsersToLinkTheirSupportAccount = this._allowEndUsersToLinkTheirSupportAccount;
    }
    if (this._allowEndUsersToManageTheirCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEndUsersToManageTheirCapabilities = this._allowEndUsersToManageTheirCapabilities;
    }
    if (this._allowEndUsersToUpdateTheirSecuritySettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEndUsersToUpdateTheirSecuritySettings = this._allowEndUsersToUpdateTheirSecuritySettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentitySettingMyProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEndUsersToChangeTheirPassword = undefined;
      this._allowEndUsersToLinkTheirSupportAccount = undefined;
      this._allowEndUsersToManageTheirCapabilities = undefined;
      this._allowEndUsersToUpdateTheirSecuritySettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEndUsersToChangeTheirPassword = value.allowEndUsersToChangeTheirPassword;
      this._allowEndUsersToLinkTheirSupportAccount = value.allowEndUsersToLinkTheirSupportAccount;
      this._allowEndUsersToManageTheirCapabilities = value.allowEndUsersToManageTheirCapabilities;
      this._allowEndUsersToUpdateTheirSecuritySettings = value.allowEndUsersToUpdateTheirSecuritySettings;
    }
  }

  // allow_end_users_to_change_their_password - computed: true, optional: true, required: false
  private _allowEndUsersToChangeTheirPassword?: boolean | cdktf.IResolvable; 
  public get allowEndUsersToChangeTheirPassword() {
    return this.getBooleanAttribute('allow_end_users_to_change_their_password');
  }
  public set allowEndUsersToChangeTheirPassword(value: boolean | cdktf.IResolvable) {
    this._allowEndUsersToChangeTheirPassword = value;
  }
  public resetAllowEndUsersToChangeTheirPassword() {
    this._allowEndUsersToChangeTheirPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEndUsersToChangeTheirPasswordInput() {
    return this._allowEndUsersToChangeTheirPassword;
  }

  // allow_end_users_to_link_their_support_account - computed: true, optional: true, required: false
  private _allowEndUsersToLinkTheirSupportAccount?: boolean | cdktf.IResolvable; 
  public get allowEndUsersToLinkTheirSupportAccount() {
    return this.getBooleanAttribute('allow_end_users_to_link_their_support_account');
  }
  public set allowEndUsersToLinkTheirSupportAccount(value: boolean | cdktf.IResolvable) {
    this._allowEndUsersToLinkTheirSupportAccount = value;
  }
  public resetAllowEndUsersToLinkTheirSupportAccount() {
    this._allowEndUsersToLinkTheirSupportAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEndUsersToLinkTheirSupportAccountInput() {
    return this._allowEndUsersToLinkTheirSupportAccount;
  }

  // allow_end_users_to_manage_their_capabilities - computed: true, optional: true, required: false
  private _allowEndUsersToManageTheirCapabilities?: boolean | cdktf.IResolvable; 
  public get allowEndUsersToManageTheirCapabilities() {
    return this.getBooleanAttribute('allow_end_users_to_manage_their_capabilities');
  }
  public set allowEndUsersToManageTheirCapabilities(value: boolean | cdktf.IResolvable) {
    this._allowEndUsersToManageTheirCapabilities = value;
  }
  public resetAllowEndUsersToManageTheirCapabilities() {
    this._allowEndUsersToManageTheirCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEndUsersToManageTheirCapabilitiesInput() {
    return this._allowEndUsersToManageTheirCapabilities;
  }

  // allow_end_users_to_update_their_security_settings - computed: true, optional: true, required: false
  private _allowEndUsersToUpdateTheirSecuritySettings?: boolean | cdktf.IResolvable; 
  public get allowEndUsersToUpdateTheirSecuritySettings() {
    return this.getBooleanAttribute('allow_end_users_to_update_their_security_settings');
  }
  public set allowEndUsersToUpdateTheirSecuritySettings(value: boolean | cdktf.IResolvable) {
    this._allowEndUsersToUpdateTheirSecuritySettings = value;
  }
  public resetAllowEndUsersToUpdateTheirSecuritySettings() {
    this._allowEndUsersToUpdateTheirSecuritySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEndUsersToUpdateTheirSecuritySettingsInput() {
    return this._allowEndUsersToUpdateTheirSecuritySettings;
  }
}
export interface IdentityDomainsIdentitySettingPosixGid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}
  */
  readonly manualAssignmentEndsAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}
  */
  readonly manualAssignmentStartsFrom?: number;
}

export function identityDomainsIdentitySettingPosixGidToTerraform(struct?: IdentityDomainsIdentitySettingPosixGidOutputReference | IdentityDomainsIdentitySettingPosixGid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual_assignment_ends_at: cdktf.numberToTerraform(struct!.manualAssignmentEndsAt),
    manual_assignment_starts_from: cdktf.numberToTerraform(struct!.manualAssignmentStartsFrom),
  }
}


export function identityDomainsIdentitySettingPosixGidToHclTerraform(struct?: IdentityDomainsIdentitySettingPosixGidOutputReference | IdentityDomainsIdentitySettingPosixGid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual_assignment_ends_at: {
      value: cdktf.numberToHclTerraform(struct!.manualAssignmentEndsAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manual_assignment_starts_from: {
      value: cdktf.numberToHclTerraform(struct!.manualAssignmentStartsFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentitySettingPosixGidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsIdentitySettingPosixGid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manualAssignmentEndsAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualAssignmentEndsAt = this._manualAssignmentEndsAt;
    }
    if (this._manualAssignmentStartsFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualAssignmentStartsFrom = this._manualAssignmentStartsFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentitySettingPosixGid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manualAssignmentEndsAt = undefined;
      this._manualAssignmentStartsFrom = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manualAssignmentEndsAt = value.manualAssignmentEndsAt;
      this._manualAssignmentStartsFrom = value.manualAssignmentStartsFrom;
    }
  }

  // manual_assignment_ends_at - computed: true, optional: true, required: false
  private _manualAssignmentEndsAt?: number; 
  public get manualAssignmentEndsAt() {
    return this.getNumberAttribute('manual_assignment_ends_at');
  }
  public set manualAssignmentEndsAt(value: number) {
    this._manualAssignmentEndsAt = value;
  }
  public resetManualAssignmentEndsAt() {
    this._manualAssignmentEndsAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualAssignmentEndsAtInput() {
    return this._manualAssignmentEndsAt;
  }

  // manual_assignment_starts_from - computed: true, optional: true, required: false
  private _manualAssignmentStartsFrom?: number; 
  public get manualAssignmentStartsFrom() {
    return this.getNumberAttribute('manual_assignment_starts_from');
  }
  public set manualAssignmentStartsFrom(value: number) {
    this._manualAssignmentStartsFrom = value;
  }
  public resetManualAssignmentStartsFrom() {
    this._manualAssignmentStartsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualAssignmentStartsFromInput() {
    return this._manualAssignmentStartsFrom;
  }
}
export interface IdentityDomainsIdentitySettingPosixUid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#manual_assignment_ends_at IdentityDomainsIdentitySetting#manual_assignment_ends_at}
  */
  readonly manualAssignmentEndsAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#manual_assignment_starts_from IdentityDomainsIdentitySetting#manual_assignment_starts_from}
  */
  readonly manualAssignmentStartsFrom?: number;
}

export function identityDomainsIdentitySettingPosixUidToTerraform(struct?: IdentityDomainsIdentitySettingPosixUidOutputReference | IdentityDomainsIdentitySettingPosixUid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual_assignment_ends_at: cdktf.numberToTerraform(struct!.manualAssignmentEndsAt),
    manual_assignment_starts_from: cdktf.numberToTerraform(struct!.manualAssignmentStartsFrom),
  }
}


export function identityDomainsIdentitySettingPosixUidToHclTerraform(struct?: IdentityDomainsIdentitySettingPosixUidOutputReference | IdentityDomainsIdentitySettingPosixUid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual_assignment_ends_at: {
      value: cdktf.numberToHclTerraform(struct!.manualAssignmentEndsAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manual_assignment_starts_from: {
      value: cdktf.numberToHclTerraform(struct!.manualAssignmentStartsFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentitySettingPosixUidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsIdentitySettingPosixUid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manualAssignmentEndsAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualAssignmentEndsAt = this._manualAssignmentEndsAt;
    }
    if (this._manualAssignmentStartsFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualAssignmentStartsFrom = this._manualAssignmentStartsFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentitySettingPosixUid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manualAssignmentEndsAt = undefined;
      this._manualAssignmentStartsFrom = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manualAssignmentEndsAt = value.manualAssignmentEndsAt;
      this._manualAssignmentStartsFrom = value.manualAssignmentStartsFrom;
    }
  }

  // manual_assignment_ends_at - computed: true, optional: true, required: false
  private _manualAssignmentEndsAt?: number; 
  public get manualAssignmentEndsAt() {
    return this.getNumberAttribute('manual_assignment_ends_at');
  }
  public set manualAssignmentEndsAt(value: number) {
    this._manualAssignmentEndsAt = value;
  }
  public resetManualAssignmentEndsAt() {
    this._manualAssignmentEndsAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualAssignmentEndsAtInput() {
    return this._manualAssignmentEndsAt;
  }

  // manual_assignment_starts_from - computed: true, optional: true, required: false
  private _manualAssignmentStartsFrom?: number; 
  public get manualAssignmentStartsFrom() {
    return this.getNumberAttribute('manual_assignment_starts_from');
  }
  public set manualAssignmentStartsFrom(value: number) {
    this._manualAssignmentStartsFrom = value;
  }
  public resetManualAssignmentStartsFrom() {
    this._manualAssignmentStartsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualAssignmentStartsFromInput() {
    return this._manualAssignmentStartsFrom;
  }
}
export interface IdentityDomainsIdentitySettingTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#key IdentityDomainsIdentitySetting#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#value IdentityDomainsIdentitySetting#value}
  */
  readonly value: string;
}

export function identityDomainsIdentitySettingTagsToTerraform(struct?: IdentityDomainsIdentitySettingTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsIdentitySettingTagsToHclTerraform(struct?: IdentityDomainsIdentitySettingTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsIdentitySettingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentitySettingTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: IdentityDomainsIdentitySettingTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class IdentityDomainsIdentitySettingTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsIdentitySettingTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsIdentitySettingTagsOutputReference {
    return new IdentityDomainsIdentitySettingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsIdentitySettingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#create IdentityDomainsIdentitySetting#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#delete IdentityDomainsIdentitySetting#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#update IdentityDomainsIdentitySetting#update}
  */
  readonly update?: string;
}

export function identityDomainsIdentitySettingTimeoutsToTerraform(struct?: IdentityDomainsIdentitySettingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function identityDomainsIdentitySettingTimeoutsToHclTerraform(struct?: IdentityDomainsIdentitySettingTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentitySettingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsIdentitySettingTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentitySettingTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface IdentityDomainsIdentitySettingTokens {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#expires_after IdentityDomainsIdentitySetting#expires_after}
  */
  readonly expiresAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#type IdentityDomainsIdentitySetting#type}
  */
  readonly type: string;
}

export function identityDomainsIdentitySettingTokensToTerraform(struct?: IdentityDomainsIdentitySettingTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expires_after: cdktf.numberToTerraform(struct!.expiresAfter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function identityDomainsIdentitySettingTokensToHclTerraform(struct?: IdentityDomainsIdentitySettingTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expires_after: {
      value: cdktf.numberToHclTerraform(struct!.expiresAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsIdentitySettingTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsIdentitySettingTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiresAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresAfter = this._expiresAfter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsIdentitySettingTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiresAfter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiresAfter = value.expiresAfter;
      this._type = value.type;
    }
  }

  // expires_after - computed: true, optional: true, required: false
  private _expiresAfter?: number; 
  public get expiresAfter() {
    return this.getNumberAttribute('expires_after');
  }
  public set expiresAfter(value: number) {
    this._expiresAfter = value;
  }
  public resetExpiresAfter() {
    this._expiresAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAfterInput() {
    return this._expiresAfter;
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
}

export class IdentityDomainsIdentitySettingTokensList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsIdentitySettingTokens[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsIdentitySettingTokensOutputReference {
    return new IdentityDomainsIdentitySettingTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting oci_identity_domains_identity_setting}
*/
export class IdentityDomainsIdentitySetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_identity_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsIdentitySetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsIdentitySetting to import
  * @param importFromId The id of the existing IdentityDomainsIdentitySetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsIdentitySetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_identity_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/identity_domains_identity_setting oci_identity_domains_identity_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsIdentitySettingConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsIdentitySettingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_identity_setting',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._authorization = config.authorization;
    this._emitLockedMessageWhenUserIsLocked = config.emitLockedMessageWhenUserIsLocked;
    this._externalId = config.externalId;
    this._idcsEndpoint = config.idcsEndpoint;
    this._identitySettingId = config.identitySettingId;
    this._ocid = config.ocid;
    this._primaryEmailRequired = config.primaryEmailRequired;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._returnInactiveOverLockedMessage = config.returnInactiveOverLockedMessage;
    this._schemas = config.schemas;
    this._userAllowedToSetRecoveryEmail = config.userAllowedToSetRecoveryEmail;
    this._myProfile.internalValue = config.myProfile;
    this._posixGid.internalValue = config.posixGid;
    this._posixUid.internalValue = config.posixUid;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
    this._tokens.internalValue = config.tokens;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // emit_locked_message_when_user_is_locked - computed: true, optional: true, required: false
  private _emitLockedMessageWhenUserIsLocked?: boolean | cdktf.IResolvable; 
  public get emitLockedMessageWhenUserIsLocked() {
    return this.getBooleanAttribute('emit_locked_message_when_user_is_locked');
  }
  public set emitLockedMessageWhenUserIsLocked(value: boolean | cdktf.IResolvable) {
    this._emitLockedMessageWhenUserIsLocked = value;
  }
  public resetEmitLockedMessageWhenUserIsLocked() {
    this._emitLockedMessageWhenUserIsLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitLockedMessageWhenUserIsLockedInput() {
    return this._emitLockedMessageWhenUserIsLocked;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsIdentitySettingIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new IdentityDomainsIdentitySettingIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // identity_setting_id - computed: false, optional: false, required: true
  private _identitySettingId?: string; 
  public get identitySettingId() {
    return this.getStringAttribute('identity_setting_id');
  }
  public set identitySettingId(value: string) {
    this._identitySettingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identitySettingIdInput() {
    return this._identitySettingId;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsIdentitySettingMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // ocid - computed: true, optional: true, required: false
  private _ocid?: string; 
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
  public set ocid(value: string) {
    this._ocid = value;
  }
  public resetOcid() {
    this._ocid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocidInput() {
    return this._ocid;
  }

  // primary_email_required - computed: true, optional: true, required: false
  private _primaryEmailRequired?: boolean | cdktf.IResolvable; 
  public get primaryEmailRequired() {
    return this.getBooleanAttribute('primary_email_required');
  }
  public set primaryEmailRequired(value: boolean | cdktf.IResolvable) {
    this._primaryEmailRequired = value;
  }
  public resetPrimaryEmailRequired() {
    this._primaryEmailRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEmailRequiredInput() {
    return this._primaryEmailRequired;
  }

  // remove_invalid_emails - computed: true, optional: false, required: false
  public get removeInvalidEmails() {
    return this.getBooleanAttribute('remove_invalid_emails');
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // return_inactive_over_locked_message - computed: true, optional: true, required: false
  private _returnInactiveOverLockedMessage?: boolean | cdktf.IResolvable; 
  public get returnInactiveOverLockedMessage() {
    return this.getBooleanAttribute('return_inactive_over_locked_message');
  }
  public set returnInactiveOverLockedMessage(value: boolean | cdktf.IResolvable) {
    this._returnInactiveOverLockedMessage = value;
  }
  public resetReturnInactiveOverLockedMessage() {
    this._returnInactiveOverLockedMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInactiveOverLockedMessageInput() {
    return this._returnInactiveOverLockedMessage;
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // user_allowed_to_set_recovery_email - computed: true, optional: true, required: false
  private _userAllowedToSetRecoveryEmail?: boolean | cdktf.IResolvable; 
  public get userAllowedToSetRecoveryEmail() {
    return this.getBooleanAttribute('user_allowed_to_set_recovery_email');
  }
  public set userAllowedToSetRecoveryEmail(value: boolean | cdktf.IResolvable) {
    this._userAllowedToSetRecoveryEmail = value;
  }
  public resetUserAllowedToSetRecoveryEmail() {
    this._userAllowedToSetRecoveryEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAllowedToSetRecoveryEmailInput() {
    return this._userAllowedToSetRecoveryEmail;
  }

  // my_profile - computed: false, optional: true, required: false
  private _myProfile = new IdentityDomainsIdentitySettingMyProfileOutputReference(this, "my_profile");
  public get myProfile() {
    return this._myProfile;
  }
  public putMyProfile(value: IdentityDomainsIdentitySettingMyProfile) {
    this._myProfile.internalValue = value;
  }
  public resetMyProfile() {
    this._myProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myProfileInput() {
    return this._myProfile.internalValue;
  }

  // posix_gid - computed: false, optional: true, required: false
  private _posixGid = new IdentityDomainsIdentitySettingPosixGidOutputReference(this, "posix_gid");
  public get posixGid() {
    return this._posixGid;
  }
  public putPosixGid(value: IdentityDomainsIdentitySettingPosixGid) {
    this._posixGid.internalValue = value;
  }
  public resetPosixGid() {
    this._posixGid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixGidInput() {
    return this._posixGid.internalValue;
  }

  // posix_uid - computed: false, optional: true, required: false
  private _posixUid = new IdentityDomainsIdentitySettingPosixUidOutputReference(this, "posix_uid");
  public get posixUid() {
    return this._posixUid;
  }
  public putPosixUid(value: IdentityDomainsIdentitySettingPosixUid) {
    this._posixUid.internalValue = value;
  }
  public resetPosixUid() {
    this._posixUid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUidInput() {
    return this._posixUid.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsIdentitySettingTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsIdentitySettingTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityDomainsIdentitySettingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsIdentitySettingTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tokens - computed: false, optional: true, required: false
  private _tokens = new IdentityDomainsIdentitySettingTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }
  public putTokens(value: IdentityDomainsIdentitySettingTokens[] | cdktf.IResolvable) {
    this._tokens.internalValue = value;
  }
  public resetTokens() {
    this._tokens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensInput() {
    return this._tokens.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      authorization: cdktf.stringToTerraform(this._authorization),
      emit_locked_message_when_user_is_locked: cdktf.booleanToTerraform(this._emitLockedMessageWhenUserIsLocked),
      external_id: cdktf.stringToTerraform(this._externalId),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      identity_setting_id: cdktf.stringToTerraform(this._identitySettingId),
      ocid: cdktf.stringToTerraform(this._ocid),
      primary_email_required: cdktf.booleanToTerraform(this._primaryEmailRequired),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      return_inactive_over_locked_message: cdktf.booleanToTerraform(this._returnInactiveOverLockedMessage),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      user_allowed_to_set_recovery_email: cdktf.booleanToTerraform(this._userAllowedToSetRecoveryEmail),
      my_profile: identityDomainsIdentitySettingMyProfileToTerraform(this._myProfile.internalValue),
      posix_gid: identityDomainsIdentitySettingPosixGidToTerraform(this._posixGid.internalValue),
      posix_uid: identityDomainsIdentitySettingPosixUidToTerraform(this._posixUid.internalValue),
      tags: cdktf.listMapper(identityDomainsIdentitySettingTagsToTerraform, true)(this._tags.internalValue),
      timeouts: identityDomainsIdentitySettingTimeoutsToTerraform(this._timeouts.internalValue),
      tokens: cdktf.listMapper(identityDomainsIdentitySettingTokensToTerraform, true)(this._tokens.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emit_locked_message_when_user_is_locked: {
        value: cdktf.booleanToHclTerraform(this._emitLockedMessageWhenUserIsLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_setting_id: {
        value: cdktf.stringToHclTerraform(this._identitySettingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_email_required: {
        value: cdktf.booleanToHclTerraform(this._primaryEmailRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      return_inactive_over_locked_message: {
        value: cdktf.booleanToHclTerraform(this._returnInactiveOverLockedMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_allowed_to_set_recovery_email: {
        value: cdktf.booleanToHclTerraform(this._userAllowedToSetRecoveryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      my_profile: {
        value: identityDomainsIdentitySettingMyProfileToHclTerraform(this._myProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentitySettingMyProfileList",
      },
      posix_gid: {
        value: identityDomainsIdentitySettingPosixGidToHclTerraform(this._posixGid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentitySettingPosixGidList",
      },
      posix_uid: {
        value: identityDomainsIdentitySettingPosixUidToHclTerraform(this._posixUid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentitySettingPosixUidList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsIdentitySettingTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentitySettingTagsList",
      },
      timeouts: {
        value: identityDomainsIdentitySettingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsIdentitySettingTimeouts",
      },
      tokens: {
        value: cdktf.listMapperHcl(identityDomainsIdentitySettingTokensToHclTerraform, true)(this._tokens.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsIdentitySettingTokensList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
