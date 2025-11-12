// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirectoryServicesV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#directory_type DirectoryServicesV2#directory_type}
  */
  readonly directoryType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#domain_name DirectoryServicesV2#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#ext_id DirectoryServicesV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#group_search_type DirectoryServicesV2#group_search_type}
  */
  readonly groupSearchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#id DirectoryServicesV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#name DirectoryServicesV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#secondary_urls DirectoryServicesV2#secondary_urls}
  */
  readonly secondaryUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#url DirectoryServicesV2#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#white_listed_groups DirectoryServicesV2#white_listed_groups}
  */
  readonly whiteListedGroups?: string[];
  /**
  * open_ldap_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#open_ldap_configuration DirectoryServicesV2#open_ldap_configuration}
  */
  readonly openLdapConfiguration?: DirectoryServicesV2OpenLdapConfiguration[] | cdktf.IResolvable;
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#service_account DirectoryServicesV2#service_account}
  */
  readonly serviceAccount: DirectoryServicesV2ServiceAccount[] | cdktf.IResolvable;
}
export interface DirectoryServicesV2OpenLdapConfigurationUserConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#user_object_class DirectoryServicesV2#user_object_class}
  */
  readonly userObjectClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#user_search_base DirectoryServicesV2#user_search_base}
  */
  readonly userSearchBase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#username_attribute DirectoryServicesV2#username_attribute}
  */
  readonly usernameAttribute: string;
}

export function directoryServicesV2OpenLdapConfigurationUserConfigurationToTerraform(struct?: DirectoryServicesV2OpenLdapConfigurationUserConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_object_class: cdktf.stringToTerraform(struct!.userObjectClass),
    user_search_base: cdktf.stringToTerraform(struct!.userSearchBase),
    username_attribute: cdktf.stringToTerraform(struct!.usernameAttribute),
  }
}


export function directoryServicesV2OpenLdapConfigurationUserConfigurationToHclTerraform(struct?: DirectoryServicesV2OpenLdapConfigurationUserConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_object_class: {
      value: cdktf.stringToHclTerraform(struct!.userObjectClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_search_base: {
      value: cdktf.stringToHclTerraform(struct!.userSearchBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_attribute: {
      value: cdktf.stringToHclTerraform(struct!.usernameAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServicesV2OpenLdapConfigurationUserConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectoryServicesV2OpenLdapConfigurationUserConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userObjectClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.userObjectClass = this._userObjectClass;
    }
    if (this._userSearchBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSearchBase = this._userSearchBase;
    }
    if (this._usernameAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameAttribute = this._usernameAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServicesV2OpenLdapConfigurationUserConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userObjectClass = undefined;
      this._userSearchBase = undefined;
      this._usernameAttribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userObjectClass = value.userObjectClass;
      this._userSearchBase = value.userSearchBase;
      this._usernameAttribute = value.usernameAttribute;
    }
  }

  // user_object_class - computed: false, optional: false, required: true
  private _userObjectClass?: string; 
  public get userObjectClass() {
    return this.getStringAttribute('user_object_class');
  }
  public set userObjectClass(value: string) {
    this._userObjectClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userObjectClassInput() {
    return this._userObjectClass;
  }

  // user_search_base - computed: false, optional: false, required: true
  private _userSearchBase?: string; 
  public get userSearchBase() {
    return this.getStringAttribute('user_search_base');
  }
  public set userSearchBase(value: string) {
    this._userSearchBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSearchBaseInput() {
    return this._userSearchBase;
  }

  // username_attribute - computed: false, optional: false, required: true
  private _usernameAttribute?: string; 
  public get usernameAttribute() {
    return this.getStringAttribute('username_attribute');
  }
  public set usernameAttribute(value: string) {
    this._usernameAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttributeInput() {
    return this._usernameAttribute;
  }
}

export class DirectoryServicesV2OpenLdapConfigurationUserConfigurationList extends cdktf.ComplexList {
  public internalValue? : DirectoryServicesV2OpenLdapConfigurationUserConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DirectoryServicesV2OpenLdapConfigurationUserConfigurationOutputReference {
    return new DirectoryServicesV2OpenLdapConfigurationUserConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectoryServicesV2OpenLdapConfigurationUserGroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#group_member_attribute DirectoryServicesV2#group_member_attribute}
  */
  readonly groupMemberAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#group_member_attribute_value DirectoryServicesV2#group_member_attribute_value}
  */
  readonly groupMemberAttributeValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#group_object_class DirectoryServicesV2#group_object_class}
  */
  readonly groupObjectClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#group_search_base DirectoryServicesV2#group_search_base}
  */
  readonly groupSearchBase: string;
}

export function directoryServicesV2OpenLdapConfigurationUserGroupConfigurationToTerraform(struct?: DirectoryServicesV2OpenLdapConfigurationUserGroupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_member_attribute: cdktf.stringToTerraform(struct!.groupMemberAttribute),
    group_member_attribute_value: cdktf.stringToTerraform(struct!.groupMemberAttributeValue),
    group_object_class: cdktf.stringToTerraform(struct!.groupObjectClass),
    group_search_base: cdktf.stringToTerraform(struct!.groupSearchBase),
  }
}


export function directoryServicesV2OpenLdapConfigurationUserGroupConfigurationToHclTerraform(struct?: DirectoryServicesV2OpenLdapConfigurationUserGroupConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_member_attribute: {
      value: cdktf.stringToHclTerraform(struct!.groupMemberAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_member_attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.groupMemberAttributeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_object_class: {
      value: cdktf.stringToHclTerraform(struct!.groupObjectClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_search_base: {
      value: cdktf.stringToHclTerraform(struct!.groupSearchBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServicesV2OpenLdapConfigurationUserGroupConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectoryServicesV2OpenLdapConfigurationUserGroupConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupMemberAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMemberAttribute = this._groupMemberAttribute;
    }
    if (this._groupMemberAttributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMemberAttributeValue = this._groupMemberAttributeValue;
    }
    if (this._groupObjectClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupObjectClass = this._groupObjectClass;
    }
    if (this._groupSearchBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSearchBase = this._groupSearchBase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServicesV2OpenLdapConfigurationUserGroupConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupMemberAttribute = undefined;
      this._groupMemberAttributeValue = undefined;
      this._groupObjectClass = undefined;
      this._groupSearchBase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupMemberAttribute = value.groupMemberAttribute;
      this._groupMemberAttributeValue = value.groupMemberAttributeValue;
      this._groupObjectClass = value.groupObjectClass;
      this._groupSearchBase = value.groupSearchBase;
    }
  }

  // group_member_attribute - computed: false, optional: false, required: true
  private _groupMemberAttribute?: string; 
  public get groupMemberAttribute() {
    return this.getStringAttribute('group_member_attribute');
  }
  public set groupMemberAttribute(value: string) {
    this._groupMemberAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberAttributeInput() {
    return this._groupMemberAttribute;
  }

  // group_member_attribute_value - computed: false, optional: false, required: true
  private _groupMemberAttributeValue?: string; 
  public get groupMemberAttributeValue() {
    return this.getStringAttribute('group_member_attribute_value');
  }
  public set groupMemberAttributeValue(value: string) {
    this._groupMemberAttributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberAttributeValueInput() {
    return this._groupMemberAttributeValue;
  }

  // group_object_class - computed: false, optional: false, required: true
  private _groupObjectClass?: string; 
  public get groupObjectClass() {
    return this.getStringAttribute('group_object_class');
  }
  public set groupObjectClass(value: string) {
    this._groupObjectClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectClassInput() {
    return this._groupObjectClass;
  }

  // group_search_base - computed: false, optional: false, required: true
  private _groupSearchBase?: string; 
  public get groupSearchBase() {
    return this.getStringAttribute('group_search_base');
  }
  public set groupSearchBase(value: string) {
    this._groupSearchBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchBaseInput() {
    return this._groupSearchBase;
  }
}

export class DirectoryServicesV2OpenLdapConfigurationUserGroupConfigurationList extends cdktf.ComplexList {
  public internalValue? : DirectoryServicesV2OpenLdapConfigurationUserGroupConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DirectoryServicesV2OpenLdapConfigurationUserGroupConfigurationOutputReference {
    return new DirectoryServicesV2OpenLdapConfigurationUserGroupConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectoryServicesV2OpenLdapConfiguration {
  /**
  * user_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#user_configuration DirectoryServicesV2#user_configuration}
  */
  readonly userConfiguration: DirectoryServicesV2OpenLdapConfigurationUserConfiguration[] | cdktf.IResolvable;
  /**
  * user_group_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#user_group_configuration DirectoryServicesV2#user_group_configuration}
  */
  readonly userGroupConfiguration: DirectoryServicesV2OpenLdapConfigurationUserGroupConfiguration[] | cdktf.IResolvable;
}

export function directoryServicesV2OpenLdapConfigurationToTerraform(struct?: DirectoryServicesV2OpenLdapConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_configuration: cdktf.listMapper(directoryServicesV2OpenLdapConfigurationUserConfigurationToTerraform, true)(struct!.userConfiguration),
    user_group_configuration: cdktf.listMapper(directoryServicesV2OpenLdapConfigurationUserGroupConfigurationToTerraform, true)(struct!.userGroupConfiguration),
  }
}


export function directoryServicesV2OpenLdapConfigurationToHclTerraform(struct?: DirectoryServicesV2OpenLdapConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_configuration: {
      value: cdktf.listMapperHcl(directoryServicesV2OpenLdapConfigurationUserConfigurationToHclTerraform, true)(struct!.userConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DirectoryServicesV2OpenLdapConfigurationUserConfigurationList",
    },
    user_group_configuration: {
      value: cdktf.listMapperHcl(directoryServicesV2OpenLdapConfigurationUserGroupConfigurationToHclTerraform, true)(struct!.userGroupConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "DirectoryServicesV2OpenLdapConfigurationUserGroupConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServicesV2OpenLdapConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectoryServicesV2OpenLdapConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userConfiguration = this._userConfiguration?.internalValue;
    }
    if (this._userGroupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupConfiguration = this._userGroupConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServicesV2OpenLdapConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userConfiguration.internalValue = undefined;
      this._userGroupConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userConfiguration.internalValue = value.userConfiguration;
      this._userGroupConfiguration.internalValue = value.userGroupConfiguration;
    }
  }

  // user_configuration - computed: false, optional: false, required: true
  private _userConfiguration = new DirectoryServicesV2OpenLdapConfigurationUserConfigurationList(this, "user_configuration", false);
  public get userConfiguration() {
    return this._userConfiguration;
  }
  public putUserConfiguration(value: DirectoryServicesV2OpenLdapConfigurationUserConfiguration[] | cdktf.IResolvable) {
    this._userConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userConfigurationInput() {
    return this._userConfiguration.internalValue;
  }

  // user_group_configuration - computed: false, optional: false, required: true
  private _userGroupConfiguration = new DirectoryServicesV2OpenLdapConfigurationUserGroupConfigurationList(this, "user_group_configuration", false);
  public get userGroupConfiguration() {
    return this._userGroupConfiguration;
  }
  public putUserGroupConfiguration(value: DirectoryServicesV2OpenLdapConfigurationUserGroupConfiguration[] | cdktf.IResolvable) {
    this._userGroupConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupConfigurationInput() {
    return this._userGroupConfiguration.internalValue;
  }
}

export class DirectoryServicesV2OpenLdapConfigurationList extends cdktf.ComplexList {
  public internalValue? : DirectoryServicesV2OpenLdapConfiguration[] | cdktf.IResolvable

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
  public get(index: number): DirectoryServicesV2OpenLdapConfigurationOutputReference {
    return new DirectoryServicesV2OpenLdapConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirectoryServicesV2ServiceAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#password DirectoryServicesV2#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#username DirectoryServicesV2#username}
  */
  readonly username: string;
}

export function directoryServicesV2ServiceAccountToTerraform(struct?: DirectoryServicesV2ServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function directoryServicesV2ServiceAccountToHclTerraform(struct?: DirectoryServicesV2ServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirectoryServicesV2ServiceAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirectoryServicesV2ServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirectoryServicesV2ServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
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
}

export class DirectoryServicesV2ServiceAccountList extends cdktf.ComplexList {
  public internalValue? : DirectoryServicesV2ServiceAccount[] | cdktf.IResolvable

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
  public get(index: number): DirectoryServicesV2ServiceAccountOutputReference {
    return new DirectoryServicesV2ServiceAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2 nutanix_directory_services_v2}
*/
export class DirectoryServicesV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_directory_services_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DirectoryServicesV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DirectoryServicesV2 to import
  * @param importFromId The id of the existing DirectoryServicesV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DirectoryServicesV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_directory_services_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/directory_services_v2 nutanix_directory_services_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirectoryServicesV2Config
  */
  public constructor(scope: Construct, id: string, config: DirectoryServicesV2Config) {
    super(scope, id, {
      terraformResourceType: 'nutanix_directory_services_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directoryType = config.directoryType;
    this._domainName = config.domainName;
    this._extId = config.extId;
    this._groupSearchType = config.groupSearchType;
    this._id = config.id;
    this._name = config.name;
    this._secondaryUrls = config.secondaryUrls;
    this._url = config.url;
    this._whiteListedGroups = config.whiteListedGroups;
    this._openLdapConfiguration.internalValue = config.openLdapConfiguration;
    this._serviceAccount.internalValue = config.serviceAccount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // directory_type - computed: false, optional: false, required: true
  private _directoryType?: string; 
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }
  public set directoryType(value: string) {
    this._directoryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryTypeInput() {
    return this._directoryType;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // group_search_type - computed: true, optional: true, required: false
  private _groupSearchType?: string; 
  public get groupSearchType() {
    return this.getStringAttribute('group_search_type');
  }
  public set groupSearchType(value: string) {
    this._groupSearchType = value;
  }
  public resetGroupSearchType() {
    this._groupSearchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchTypeInput() {
    return this._groupSearchType;
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

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // secondary_urls - computed: true, optional: true, required: false
  private _secondaryUrls?: string[]; 
  public get secondaryUrls() {
    return this.getListAttribute('secondary_urls');
  }
  public set secondaryUrls(value: string[]) {
    this._secondaryUrls = value;
  }
  public resetSecondaryUrls() {
    this._secondaryUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryUrlsInput() {
    return this._secondaryUrls;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // white_listed_groups - computed: true, optional: true, required: false
  private _whiteListedGroups?: string[]; 
  public get whiteListedGroups() {
    return this.getListAttribute('white_listed_groups');
  }
  public set whiteListedGroups(value: string[]) {
    this._whiteListedGroups = value;
  }
  public resetWhiteListedGroups() {
    this._whiteListedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedGroupsInput() {
    return this._whiteListedGroups;
  }

  // open_ldap_configuration - computed: false, optional: true, required: false
  private _openLdapConfiguration = new DirectoryServicesV2OpenLdapConfigurationList(this, "open_ldap_configuration", false);
  public get openLdapConfiguration() {
    return this._openLdapConfiguration;
  }
  public putOpenLdapConfiguration(value: DirectoryServicesV2OpenLdapConfiguration[] | cdktf.IResolvable) {
    this._openLdapConfiguration.internalValue = value;
  }
  public resetOpenLdapConfiguration() {
    this._openLdapConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openLdapConfigurationInput() {
    return this._openLdapConfiguration.internalValue;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount = new DirectoryServicesV2ServiceAccountList(this, "service_account", false);
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: DirectoryServicesV2ServiceAccount[] | cdktf.IResolvable) {
    this._serviceAccount.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_type: cdktf.stringToTerraform(this._directoryType),
      domain_name: cdktf.stringToTerraform(this._domainName),
      ext_id: cdktf.stringToTerraform(this._extId),
      group_search_type: cdktf.stringToTerraform(this._groupSearchType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      secondary_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryUrls),
      url: cdktf.stringToTerraform(this._url),
      white_listed_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._whiteListedGroups),
      open_ldap_configuration: cdktf.listMapper(directoryServicesV2OpenLdapConfigurationToTerraform, true)(this._openLdapConfiguration.internalValue),
      service_account: cdktf.listMapper(directoryServicesV2ServiceAccountToTerraform, true)(this._serviceAccount.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_type: {
        value: cdktf.stringToHclTerraform(this._directoryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_id: {
        value: cdktf.stringToHclTerraform(this._extId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_type: {
        value: cdktf.stringToHclTerraform(this._groupSearchType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      white_listed_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._whiteListedGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      open_ldap_configuration: {
        value: cdktf.listMapperHcl(directoryServicesV2OpenLdapConfigurationToHclTerraform, true)(this._openLdapConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DirectoryServicesV2OpenLdapConfigurationList",
      },
      service_account: {
        value: cdktf.listMapperHcl(directoryServicesV2ServiceAccountToHclTerraform, true)(this._serviceAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DirectoryServicesV2ServiceAccountList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
