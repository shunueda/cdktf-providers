// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlbservicesconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#id Albservicesconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#mode Albservicesconfig#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#name Albservicesconfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#polling_interval Albservicesconfig#polling_interval}
  */
  readonly pollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#portal_url Albservicesconfig#portal_url}
  */
  readonly portalUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#tenant_ref Albservicesconfig#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#use_split_proxy Albservicesconfig#use_split_proxy}
  */
  readonly useSplitProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#use_tls Albservicesconfig#use_tls}
  */
  readonly useTls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#uuid Albservicesconfig#uuid}
  */
  readonly uuid?: string;
  /**
  * app_signature_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#app_signature_config Albservicesconfig#app_signature_config}
  */
  readonly appSignatureConfig: AlbservicesconfigAppSignatureConfig[] | cdktf.IResolvable;
  /**
  * asset_contact block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#asset_contact Albservicesconfig#asset_contact}
  */
  readonly assetContact?: AlbservicesconfigAssetContact[] | cdktf.IResolvable;
  /**
  * case_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#case_config Albservicesconfig#case_config}
  */
  readonly caseConfig: AlbservicesconfigCaseConfig[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#configpb_attributes Albservicesconfig#configpb_attributes}
  */
  readonly configpbAttributes?: AlbservicesconfigConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * feature_opt_in_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#feature_opt_in_status Albservicesconfig#feature_opt_in_status}
  */
  readonly featureOptInStatus: AlbservicesconfigFeatureOptInStatus[] | cdktf.IResolvable;
  /**
  * inventory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#inventory_config Albservicesconfig#inventory_config}
  */
  readonly inventoryConfig: AlbservicesconfigInventoryConfig[] | cdktf.IResolvable;
  /**
  * ip_reputation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#ip_reputation_config Albservicesconfig#ip_reputation_config}
  */
  readonly ipReputationConfig: AlbservicesconfigIpReputationConfig[] | cdktf.IResolvable;
  /**
  * saas_licensing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#saas_licensing_config Albservicesconfig#saas_licensing_config}
  */
  readonly saasLicensingConfig: AlbservicesconfigSaasLicensingConfig[] | cdktf.IResolvable;
  /**
  * session_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#session_config Albservicesconfig#session_config}
  */
  readonly sessionConfig?: AlbservicesconfigSessionConfig[] | cdktf.IResolvable;
  /**
  * split_proxy_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#split_proxy_configuration Albservicesconfig#split_proxy_configuration}
  */
  readonly splitProxyConfiguration?: AlbservicesconfigSplitProxyConfiguration[] | cdktf.IResolvable;
  /**
  * tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#tenant_config Albservicesconfig#tenant_config}
  */
  readonly tenantConfig?: AlbservicesconfigTenantConfig[] | cdktf.IResolvable;
  /**
  * user_agent_db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#user_agent_db_config Albservicesconfig#user_agent_db_config}
  */
  readonly userAgentDbConfig: AlbservicesconfigUserAgentDbConfig[] | cdktf.IResolvable;
  /**
  * waf_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#waf_config Albservicesconfig#waf_config}
  */
  readonly wafConfig: AlbservicesconfigWafConfig[] | cdktf.IResolvable;
}
export interface AlbservicesconfigAppSignatureConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#app_signature_sync_interval Albservicesconfig#app_signature_sync_interval}
  */
  readonly appSignatureSyncInterval?: string;
}

export function albservicesconfigAppSignatureConfigToTerraform(struct?: AlbservicesconfigAppSignatureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_signature_sync_interval: cdktf.stringToTerraform(struct!.appSignatureSyncInterval),
  }
}


export function albservicesconfigAppSignatureConfigToHclTerraform(struct?: AlbservicesconfigAppSignatureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_signature_sync_interval: {
      value: cdktf.stringToHclTerraform(struct!.appSignatureSyncInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigAppSignatureConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigAppSignatureConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appSignatureSyncInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSignatureSyncInterval = this._appSignatureSyncInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigAppSignatureConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appSignatureSyncInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appSignatureSyncInterval = value.appSignatureSyncInterval;
    }
  }

  // app_signature_sync_interval - computed: false, optional: true, required: false
  private _appSignatureSyncInterval?: string; 
  public get appSignatureSyncInterval() {
    return this.getStringAttribute('app_signature_sync_interval');
  }
  public set appSignatureSyncInterval(value: string) {
    this._appSignatureSyncInterval = value;
  }
  public resetAppSignatureSyncInterval() {
    this._appSignatureSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSignatureSyncIntervalInput() {
    return this._appSignatureSyncInterval;
  }
}

export class AlbservicesconfigAppSignatureConfigList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigAppSignatureConfig[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigAppSignatureConfigOutputReference {
    return new AlbservicesconfigAppSignatureConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigAssetContactManagedAccountsUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#email Albservicesconfig#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#name Albservicesconfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#phone Albservicesconfig#phone}
  */
  readonly phone: string;
}

export function albservicesconfigAssetContactManagedAccountsUsersToTerraform(struct?: AlbservicesconfigAssetContactManagedAccountsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
    phone: cdktf.stringToTerraform(struct!.phone),
  }
}


export function albservicesconfigAssetContactManagedAccountsUsersToHclTerraform(struct?: AlbservicesconfigAssetContactManagedAccountsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigAssetContactManagedAccountsUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigAssetContactManagedAccountsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigAssetContactManagedAccountsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._name = undefined;
      this._phone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._name = value.name;
      this._phone = value.phone;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // phone - computed: false, optional: false, required: true
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }
}

export class AlbservicesconfigAssetContactManagedAccountsUsersList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigAssetContactManagedAccountsUsers[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigAssetContactManagedAccountsUsersOutputReference {
    return new AlbservicesconfigAssetContactManagedAccountsUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigAssetContactManagedAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#id Albservicesconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#name Albservicesconfig#name}
  */
  readonly name?: string;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#users Albservicesconfig#users}
  */
  readonly users?: AlbservicesconfigAssetContactManagedAccountsUsers[] | cdktf.IResolvable;
}

export function albservicesconfigAssetContactManagedAccountsToTerraform(struct?: AlbservicesconfigAssetContactManagedAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    users: cdktf.listMapper(albservicesconfigAssetContactManagedAccountsUsersToTerraform, true)(struct!.users),
  }
}


export function albservicesconfigAssetContactManagedAccountsToHclTerraform(struct?: AlbservicesconfigAssetContactManagedAccounts | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.listMapperHcl(albservicesconfigAssetContactManagedAccountsUsersToHclTerraform, true)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "AlbservicesconfigAssetContactManagedAccountsUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigAssetContactManagedAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigAssetContactManagedAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigAssetContactManagedAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._users.internalValue = value.users;
    }
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

  // users - computed: false, optional: true, required: false
  private _users = new AlbservicesconfigAssetContactManagedAccountsUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: AlbservicesconfigAssetContactManagedAccountsUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

export class AlbservicesconfigAssetContactManagedAccountsList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigAssetContactManagedAccounts[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigAssetContactManagedAccountsOutputReference {
    return new AlbservicesconfigAssetContactManagedAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigAssetContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#account_id Albservicesconfig#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#account_name Albservicesconfig#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#email Albservicesconfig#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#name Albservicesconfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#phone Albservicesconfig#phone}
  */
  readonly phone?: string;
  /**
  * managed_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#managed_accounts Albservicesconfig#managed_accounts}
  */
  readonly managedAccounts?: AlbservicesconfigAssetContactManagedAccounts[] | cdktf.IResolvable;
}

export function albservicesconfigAssetContactToTerraform(struct?: AlbservicesconfigAssetContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
    phone: cdktf.stringToTerraform(struct!.phone),
    managed_accounts: cdktf.listMapper(albservicesconfigAssetContactManagedAccountsToTerraform, true)(struct!.managedAccounts),
  }
}


export function albservicesconfigAssetContactToHclTerraform(struct?: AlbservicesconfigAssetContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_accounts: {
      value: cdktf.listMapperHcl(albservicesconfigAssetContactManagedAccountsToHclTerraform, true)(struct!.managedAccounts),
      isBlock: true,
      type: "list",
      storageClassType: "AlbservicesconfigAssetContactManagedAccountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigAssetContactOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigAssetContact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._managedAccounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedAccounts = this._managedAccounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigAssetContact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._accountName = undefined;
      this._email = undefined;
      this._name = undefined;
      this._phone = undefined;
      this._managedAccounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._accountName = value.accountName;
      this._email = value.email;
      this._name = value.name;
      this._phone = value.phone;
      this._managedAccounts.internalValue = value.managedAccounts;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_name - computed: true, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // phone - computed: true, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // managed_accounts - computed: false, optional: true, required: false
  private _managedAccounts = new AlbservicesconfigAssetContactManagedAccountsList(this, "managed_accounts", false);
  public get managedAccounts() {
    return this._managedAccounts;
  }
  public putManagedAccounts(value: AlbservicesconfigAssetContactManagedAccounts[] | cdktf.IResolvable) {
    this._managedAccounts.internalValue = value;
  }
  public resetManagedAccounts() {
    this._managedAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAccountsInput() {
    return this._managedAccounts.internalValue;
  }
}

export class AlbservicesconfigAssetContactList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigAssetContact[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigAssetContactOutputReference {
    return new AlbservicesconfigAssetContactOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigCaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#additional_emails Albservicesconfig#additional_emails}
  */
  readonly additionalEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_auto_case_creation_on_controller_failure Albservicesconfig#enable_auto_case_creation_on_controller_failure}
  */
  readonly enableAutoCaseCreationOnControllerFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_auto_case_creation_on_se_failure Albservicesconfig#enable_auto_case_creation_on_se_failure}
  */
  readonly enableAutoCaseCreationOnSeFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_cleanup_of_attached_files Albservicesconfig#enable_cleanup_of_attached_files}
  */
  readonly enableCleanupOfAttachedFiles?: string;
}

export function albservicesconfigCaseConfigToTerraform(struct?: AlbservicesconfigCaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalEmails),
    enable_auto_case_creation_on_controller_failure: cdktf.stringToTerraform(struct!.enableAutoCaseCreationOnControllerFailure),
    enable_auto_case_creation_on_se_failure: cdktf.stringToTerraform(struct!.enableAutoCaseCreationOnSeFailure),
    enable_cleanup_of_attached_files: cdktf.stringToTerraform(struct!.enableCleanupOfAttachedFiles),
  }
}


export function albservicesconfigCaseConfigToHclTerraform(struct?: AlbservicesconfigCaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalEmails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_auto_case_creation_on_controller_failure: {
      value: cdktf.stringToHclTerraform(struct!.enableAutoCaseCreationOnControllerFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_auto_case_creation_on_se_failure: {
      value: cdktf.stringToHclTerraform(struct!.enableAutoCaseCreationOnSeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_cleanup_of_attached_files: {
      value: cdktf.stringToHclTerraform(struct!.enableCleanupOfAttachedFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigCaseConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigCaseConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEmails = this._additionalEmails;
    }
    if (this._enableAutoCaseCreationOnControllerFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoCaseCreationOnControllerFailure = this._enableAutoCaseCreationOnControllerFailure;
    }
    if (this._enableAutoCaseCreationOnSeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoCaseCreationOnSeFailure = this._enableAutoCaseCreationOnSeFailure;
    }
    if (this._enableCleanupOfAttachedFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCleanupOfAttachedFiles = this._enableCleanupOfAttachedFiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigCaseConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalEmails = undefined;
      this._enableAutoCaseCreationOnControllerFailure = undefined;
      this._enableAutoCaseCreationOnSeFailure = undefined;
      this._enableCleanupOfAttachedFiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalEmails = value.additionalEmails;
      this._enableAutoCaseCreationOnControllerFailure = value.enableAutoCaseCreationOnControllerFailure;
      this._enableAutoCaseCreationOnSeFailure = value.enableAutoCaseCreationOnSeFailure;
      this._enableCleanupOfAttachedFiles = value.enableCleanupOfAttachedFiles;
    }
  }

  // additional_emails - computed: false, optional: true, required: false
  private _additionalEmails?: string[]; 
  public get additionalEmails() {
    return this.getListAttribute('additional_emails');
  }
  public set additionalEmails(value: string[]) {
    this._additionalEmails = value;
  }
  public resetAdditionalEmails() {
    this._additionalEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEmailsInput() {
    return this._additionalEmails;
  }

  // enable_auto_case_creation_on_controller_failure - computed: false, optional: true, required: false
  private _enableAutoCaseCreationOnControllerFailure?: string; 
  public get enableAutoCaseCreationOnControllerFailure() {
    return this.getStringAttribute('enable_auto_case_creation_on_controller_failure');
  }
  public set enableAutoCaseCreationOnControllerFailure(value: string) {
    this._enableAutoCaseCreationOnControllerFailure = value;
  }
  public resetEnableAutoCaseCreationOnControllerFailure() {
    this._enableAutoCaseCreationOnControllerFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoCaseCreationOnControllerFailureInput() {
    return this._enableAutoCaseCreationOnControllerFailure;
  }

  // enable_auto_case_creation_on_se_failure - computed: false, optional: true, required: false
  private _enableAutoCaseCreationOnSeFailure?: string; 
  public get enableAutoCaseCreationOnSeFailure() {
    return this.getStringAttribute('enable_auto_case_creation_on_se_failure');
  }
  public set enableAutoCaseCreationOnSeFailure(value: string) {
    this._enableAutoCaseCreationOnSeFailure = value;
  }
  public resetEnableAutoCaseCreationOnSeFailure() {
    this._enableAutoCaseCreationOnSeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoCaseCreationOnSeFailureInput() {
    return this._enableAutoCaseCreationOnSeFailure;
  }

  // enable_cleanup_of_attached_files - computed: false, optional: true, required: false
  private _enableCleanupOfAttachedFiles?: string; 
  public get enableCleanupOfAttachedFiles() {
    return this.getStringAttribute('enable_cleanup_of_attached_files');
  }
  public set enableCleanupOfAttachedFiles(value: string) {
    this._enableCleanupOfAttachedFiles = value;
  }
  public resetEnableCleanupOfAttachedFiles() {
    this._enableCleanupOfAttachedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCleanupOfAttachedFilesInput() {
    return this._enableCleanupOfAttachedFiles;
  }
}

export class AlbservicesconfigCaseConfigList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigCaseConfig[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigCaseConfigOutputReference {
    return new AlbservicesconfigCaseConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#version Albservicesconfig#version}
  */
  readonly version?: string;
}

export function albservicesconfigConfigpbAttributesToTerraform(struct?: AlbservicesconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function albservicesconfigConfigpbAttributesToHclTerraform(struct?: AlbservicesconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlbservicesconfigConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
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

export class AlbservicesconfigConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigConfigpbAttributesOutputReference {
    return new AlbservicesconfigConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigFeatureOptInStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_appsignature_sync Albservicesconfig#enable_appsignature_sync}
  */
  readonly enableAppsignatureSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_ip_reputation Albservicesconfig#enable_ip_reputation}
  */
  readonly enableIpReputation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_pulse_case_management Albservicesconfig#enable_pulse_case_management}
  */
  readonly enablePulseCaseManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_pulse_inventory Albservicesconfig#enable_pulse_inventory}
  */
  readonly enablePulseInventory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_pulse_waf_management Albservicesconfig#enable_pulse_waf_management}
  */
  readonly enablePulseWafManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_user_agent_db_sync Albservicesconfig#enable_user_agent_db_sync}
  */
  readonly enableUserAgentDbSync?: string;
}

export function albservicesconfigFeatureOptInStatusToTerraform(struct?: AlbservicesconfigFeatureOptInStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_appsignature_sync: cdktf.stringToTerraform(struct!.enableAppsignatureSync),
    enable_ip_reputation: cdktf.stringToTerraform(struct!.enableIpReputation),
    enable_pulse_case_management: cdktf.stringToTerraform(struct!.enablePulseCaseManagement),
    enable_pulse_inventory: cdktf.stringToTerraform(struct!.enablePulseInventory),
    enable_pulse_waf_management: cdktf.stringToTerraform(struct!.enablePulseWafManagement),
    enable_user_agent_db_sync: cdktf.stringToTerraform(struct!.enableUserAgentDbSync),
  }
}


export function albservicesconfigFeatureOptInStatusToHclTerraform(struct?: AlbservicesconfigFeatureOptInStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_appsignature_sync: {
      value: cdktf.stringToHclTerraform(struct!.enableAppsignatureSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ip_reputation: {
      value: cdktf.stringToHclTerraform(struct!.enableIpReputation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pulse_case_management: {
      value: cdktf.stringToHclTerraform(struct!.enablePulseCaseManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pulse_inventory: {
      value: cdktf.stringToHclTerraform(struct!.enablePulseInventory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pulse_waf_management: {
      value: cdktf.stringToHclTerraform(struct!.enablePulseWafManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_user_agent_db_sync: {
      value: cdktf.stringToHclTerraform(struct!.enableUserAgentDbSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigFeatureOptInStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigFeatureOptInStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAppsignatureSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAppsignatureSync = this._enableAppsignatureSync;
    }
    if (this._enableIpReputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpReputation = this._enableIpReputation;
    }
    if (this._enablePulseCaseManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePulseCaseManagement = this._enablePulseCaseManagement;
    }
    if (this._enablePulseInventory !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePulseInventory = this._enablePulseInventory;
    }
    if (this._enablePulseWafManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePulseWafManagement = this._enablePulseWafManagement;
    }
    if (this._enableUserAgentDbSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUserAgentDbSync = this._enableUserAgentDbSync;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigFeatureOptInStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAppsignatureSync = undefined;
      this._enableIpReputation = undefined;
      this._enablePulseCaseManagement = undefined;
      this._enablePulseInventory = undefined;
      this._enablePulseWafManagement = undefined;
      this._enableUserAgentDbSync = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAppsignatureSync = value.enableAppsignatureSync;
      this._enableIpReputation = value.enableIpReputation;
      this._enablePulseCaseManagement = value.enablePulseCaseManagement;
      this._enablePulseInventory = value.enablePulseInventory;
      this._enablePulseWafManagement = value.enablePulseWafManagement;
      this._enableUserAgentDbSync = value.enableUserAgentDbSync;
    }
  }

  // enable_appsignature_sync - computed: false, optional: true, required: false
  private _enableAppsignatureSync?: string; 
  public get enableAppsignatureSync() {
    return this.getStringAttribute('enable_appsignature_sync');
  }
  public set enableAppsignatureSync(value: string) {
    this._enableAppsignatureSync = value;
  }
  public resetEnableAppsignatureSync() {
    this._enableAppsignatureSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAppsignatureSyncInput() {
    return this._enableAppsignatureSync;
  }

  // enable_ip_reputation - computed: false, optional: true, required: false
  private _enableIpReputation?: string; 
  public get enableIpReputation() {
    return this.getStringAttribute('enable_ip_reputation');
  }
  public set enableIpReputation(value: string) {
    this._enableIpReputation = value;
  }
  public resetEnableIpReputation() {
    this._enableIpReputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpReputationInput() {
    return this._enableIpReputation;
  }

  // enable_pulse_case_management - computed: false, optional: true, required: false
  private _enablePulseCaseManagement?: string; 
  public get enablePulseCaseManagement() {
    return this.getStringAttribute('enable_pulse_case_management');
  }
  public set enablePulseCaseManagement(value: string) {
    this._enablePulseCaseManagement = value;
  }
  public resetEnablePulseCaseManagement() {
    this._enablePulseCaseManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePulseCaseManagementInput() {
    return this._enablePulseCaseManagement;
  }

  // enable_pulse_inventory - computed: false, optional: true, required: false
  private _enablePulseInventory?: string; 
  public get enablePulseInventory() {
    return this.getStringAttribute('enable_pulse_inventory');
  }
  public set enablePulseInventory(value: string) {
    this._enablePulseInventory = value;
  }
  public resetEnablePulseInventory() {
    this._enablePulseInventory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePulseInventoryInput() {
    return this._enablePulseInventory;
  }

  // enable_pulse_waf_management - computed: false, optional: true, required: false
  private _enablePulseWafManagement?: string; 
  public get enablePulseWafManagement() {
    return this.getStringAttribute('enable_pulse_waf_management');
  }
  public set enablePulseWafManagement(value: string) {
    this._enablePulseWafManagement = value;
  }
  public resetEnablePulseWafManagement() {
    this._enablePulseWafManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePulseWafManagementInput() {
    return this._enablePulseWafManagement;
  }

  // enable_user_agent_db_sync - computed: false, optional: true, required: false
  private _enableUserAgentDbSync?: string; 
  public get enableUserAgentDbSync() {
    return this.getStringAttribute('enable_user_agent_db_sync');
  }
  public set enableUserAgentDbSync(value: string) {
    this._enableUserAgentDbSync = value;
  }
  public resetEnableUserAgentDbSync() {
    this._enableUserAgentDbSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUserAgentDbSyncInput() {
    return this._enableUserAgentDbSync;
  }
}

export class AlbservicesconfigFeatureOptInStatusList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigFeatureOptInStatus[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigFeatureOptInStatusOutputReference {
    return new AlbservicesconfigFeatureOptInStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigInventoryConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_search_info Albservicesconfig#enable_search_info}
  */
  readonly enableSearchInfo?: string;
}

export function albservicesconfigInventoryConfigToTerraform(struct?: AlbservicesconfigInventoryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_search_info: cdktf.stringToTerraform(struct!.enableSearchInfo),
  }
}


export function albservicesconfigInventoryConfigToHclTerraform(struct?: AlbservicesconfigInventoryConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_search_info: {
      value: cdktf.stringToHclTerraform(struct!.enableSearchInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigInventoryConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigInventoryConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSearchInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSearchInfo = this._enableSearchInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigInventoryConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSearchInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSearchInfo = value.enableSearchInfo;
    }
  }

  // enable_search_info - computed: false, optional: true, required: false
  private _enableSearchInfo?: string; 
  public get enableSearchInfo() {
    return this.getStringAttribute('enable_search_info');
  }
  public set enableSearchInfo(value: string) {
    this._enableSearchInfo = value;
  }
  public resetEnableSearchInfo() {
    this._enableSearchInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchInfoInput() {
    return this._enableSearchInfo;
  }
}

export class AlbservicesconfigInventoryConfigList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigInventoryConfig[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigInventoryConfigOutputReference {
    return new AlbservicesconfigInventoryConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigIpReputationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_ipv4_reputation Albservicesconfig#enable_ipv4_reputation}
  */
  readonly enableIpv4Reputation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_ipv6_reputation Albservicesconfig#enable_ipv6_reputation}
  */
  readonly enableIpv6Reputation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#ip_reputation_file_object_expiry_duration Albservicesconfig#ip_reputation_file_object_expiry_duration}
  */
  readonly ipReputationFileObjectExpiryDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#ip_reputation_sync_interval Albservicesconfig#ip_reputation_sync_interval}
  */
  readonly ipReputationSyncInterval?: string;
}

export function albservicesconfigIpReputationConfigToTerraform(struct?: AlbservicesconfigIpReputationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ipv4_reputation: cdktf.stringToTerraform(struct!.enableIpv4Reputation),
    enable_ipv6_reputation: cdktf.stringToTerraform(struct!.enableIpv6Reputation),
    ip_reputation_file_object_expiry_duration: cdktf.stringToTerraform(struct!.ipReputationFileObjectExpiryDuration),
    ip_reputation_sync_interval: cdktf.stringToTerraform(struct!.ipReputationSyncInterval),
  }
}


export function albservicesconfigIpReputationConfigToHclTerraform(struct?: AlbservicesconfigIpReputationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_ipv4_reputation: {
      value: cdktf.stringToHclTerraform(struct!.enableIpv4Reputation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ipv6_reputation: {
      value: cdktf.stringToHclTerraform(struct!.enableIpv6Reputation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_reputation_file_object_expiry_duration: {
      value: cdktf.stringToHclTerraform(struct!.ipReputationFileObjectExpiryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_reputation_sync_interval: {
      value: cdktf.stringToHclTerraform(struct!.ipReputationSyncInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigIpReputationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigIpReputationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIpv4Reputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv4Reputation = this._enableIpv4Reputation;
    }
    if (this._enableIpv6Reputation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv6Reputation = this._enableIpv6Reputation;
    }
    if (this._ipReputationFileObjectExpiryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationFileObjectExpiryDuration = this._ipReputationFileObjectExpiryDuration;
    }
    if (this._ipReputationSyncInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationSyncInterval = this._ipReputationSyncInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigIpReputationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableIpv4Reputation = undefined;
      this._enableIpv6Reputation = undefined;
      this._ipReputationFileObjectExpiryDuration = undefined;
      this._ipReputationSyncInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableIpv4Reputation = value.enableIpv4Reputation;
      this._enableIpv6Reputation = value.enableIpv6Reputation;
      this._ipReputationFileObjectExpiryDuration = value.ipReputationFileObjectExpiryDuration;
      this._ipReputationSyncInterval = value.ipReputationSyncInterval;
    }
  }

  // enable_ipv4_reputation - computed: true, optional: true, required: false
  private _enableIpv4Reputation?: string; 
  public get enableIpv4Reputation() {
    return this.getStringAttribute('enable_ipv4_reputation');
  }
  public set enableIpv4Reputation(value: string) {
    this._enableIpv4Reputation = value;
  }
  public resetEnableIpv4Reputation() {
    this._enableIpv4Reputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv4ReputationInput() {
    return this._enableIpv4Reputation;
  }

  // enable_ipv6_reputation - computed: true, optional: true, required: false
  private _enableIpv6Reputation?: string; 
  public get enableIpv6Reputation() {
    return this.getStringAttribute('enable_ipv6_reputation');
  }
  public set enableIpv6Reputation(value: string) {
    this._enableIpv6Reputation = value;
  }
  public resetEnableIpv6Reputation() {
    this._enableIpv6Reputation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6ReputationInput() {
    return this._enableIpv6Reputation;
  }

  // ip_reputation_file_object_expiry_duration - computed: false, optional: true, required: false
  private _ipReputationFileObjectExpiryDuration?: string; 
  public get ipReputationFileObjectExpiryDuration() {
    return this.getStringAttribute('ip_reputation_file_object_expiry_duration');
  }
  public set ipReputationFileObjectExpiryDuration(value: string) {
    this._ipReputationFileObjectExpiryDuration = value;
  }
  public resetIpReputationFileObjectExpiryDuration() {
    this._ipReputationFileObjectExpiryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationFileObjectExpiryDurationInput() {
    return this._ipReputationFileObjectExpiryDuration;
  }

  // ip_reputation_sync_interval - computed: false, optional: true, required: false
  private _ipReputationSyncInterval?: string; 
  public get ipReputationSyncInterval() {
    return this.getStringAttribute('ip_reputation_sync_interval');
  }
  public set ipReputationSyncInterval(value: string) {
    this._ipReputationSyncInterval = value;
  }
  public resetIpReputationSyncInterval() {
    this._ipReputationSyncInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationSyncIntervalInput() {
    return this._ipReputationSyncInterval;
  }
}

export class AlbservicesconfigIpReputationConfigList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigIpReputationConfig[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigIpReputationConfigOutputReference {
    return new AlbservicesconfigIpReputationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigSaasLicensingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_notional_reserve Albservicesconfig#enable_notional_reserve}
  */
  readonly enableNotionalReserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#max_service_units Albservicesconfig#max_service_units}
  */
  readonly maxServiceUnits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#reserve_service_units Albservicesconfig#reserve_service_units}
  */
  readonly reserveServiceUnits?: string;
}

export function albservicesconfigSaasLicensingConfigToTerraform(struct?: AlbservicesconfigSaasLicensingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_notional_reserve: cdktf.stringToTerraform(struct!.enableNotionalReserve),
    max_service_units: cdktf.stringToTerraform(struct!.maxServiceUnits),
    reserve_service_units: cdktf.stringToTerraform(struct!.reserveServiceUnits),
  }
}


export function albservicesconfigSaasLicensingConfigToHclTerraform(struct?: AlbservicesconfigSaasLicensingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_notional_reserve: {
      value: cdktf.stringToHclTerraform(struct!.enableNotionalReserve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_service_units: {
      value: cdktf.stringToHclTerraform(struct!.maxServiceUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserve_service_units: {
      value: cdktf.stringToHclTerraform(struct!.reserveServiceUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigSaasLicensingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigSaasLicensingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNotionalReserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNotionalReserve = this._enableNotionalReserve;
    }
    if (this._maxServiceUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxServiceUnits = this._maxServiceUnits;
    }
    if (this._reserveServiceUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveServiceUnits = this._reserveServiceUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigSaasLicensingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableNotionalReserve = undefined;
      this._maxServiceUnits = undefined;
      this._reserveServiceUnits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableNotionalReserve = value.enableNotionalReserve;
      this._maxServiceUnits = value.maxServiceUnits;
      this._reserveServiceUnits = value.reserveServiceUnits;
    }
  }

  // enable_notional_reserve - computed: false, optional: true, required: false
  private _enableNotionalReserve?: string; 
  public get enableNotionalReserve() {
    return this.getStringAttribute('enable_notional_reserve');
  }
  public set enableNotionalReserve(value: string) {
    this._enableNotionalReserve = value;
  }
  public resetEnableNotionalReserve() {
    this._enableNotionalReserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNotionalReserveInput() {
    return this._enableNotionalReserve;
  }

  // max_service_units - computed: false, optional: true, required: false
  private _maxServiceUnits?: string; 
  public get maxServiceUnits() {
    return this.getStringAttribute('max_service_units');
  }
  public set maxServiceUnits(value: string) {
    this._maxServiceUnits = value;
  }
  public resetMaxServiceUnits() {
    this._maxServiceUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxServiceUnitsInput() {
    return this._maxServiceUnits;
  }

  // reserve_service_units - computed: false, optional: true, required: false
  private _reserveServiceUnits?: string; 
  public get reserveServiceUnits() {
    return this.getStringAttribute('reserve_service_units');
  }
  public set reserveServiceUnits(value: string) {
    this._reserveServiceUnits = value;
  }
  public resetReserveServiceUnits() {
    this._reserveServiceUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveServiceUnitsInput() {
    return this._reserveServiceUnits;
  }
}

export class AlbservicesconfigSaasLicensingConfigList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigSaasLicensingConfig[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigSaasLicensingConfigOutputReference {
    return new AlbservicesconfigSaasLicensingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigSessionConfigSessionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#name Albservicesconfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#value Albservicesconfig#value}
  */
  readonly value?: string;
}

export function albservicesconfigSessionConfigSessionHeadersToTerraform(struct?: AlbservicesconfigSessionConfigSessionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function albservicesconfigSessionConfigSessionHeadersToHclTerraform(struct?: AlbservicesconfigSessionConfigSessionHeaders | cdktf.IResolvable): any {
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

export class AlbservicesconfigSessionConfigSessionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigSessionConfigSessionHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigSessionConfigSessionHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
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

export class AlbservicesconfigSessionConfigSessionHeadersList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigSessionConfigSessionHeaders[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigSessionConfigSessionHeadersOutputReference {
    return new AlbservicesconfigSessionConfigSessionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigSessionConfig {
  /**
  * session_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#session_headers Albservicesconfig#session_headers}
  */
  readonly sessionHeaders?: AlbservicesconfigSessionConfigSessionHeaders[] | cdktf.IResolvable;
}

export function albservicesconfigSessionConfigToTerraform(struct?: AlbservicesconfigSessionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_headers: cdktf.listMapper(albservicesconfigSessionConfigSessionHeadersToTerraform, true)(struct!.sessionHeaders),
  }
}


export function albservicesconfigSessionConfigToHclTerraform(struct?: AlbservicesconfigSessionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_headers: {
      value: cdktf.listMapperHcl(albservicesconfigSessionConfigSessionHeadersToHclTerraform, true)(struct!.sessionHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "AlbservicesconfigSessionConfigSessionHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigSessionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigSessionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionHeaders = this._sessionHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigSessionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionHeaders.internalValue = value.sessionHeaders;
    }
  }

  // session_headers - computed: false, optional: true, required: false
  private _sessionHeaders = new AlbservicesconfigSessionConfigSessionHeadersList(this, "session_headers", false);
  public get sessionHeaders() {
    return this._sessionHeaders;
  }
  public putSessionHeaders(value: AlbservicesconfigSessionConfigSessionHeaders[] | cdktf.IResolvable) {
    this._sessionHeaders.internalValue = value;
  }
  public resetSessionHeaders() {
    this._sessionHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionHeadersInput() {
    return this._sessionHeaders.internalValue;
  }
}

export class AlbservicesconfigSessionConfigList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigSessionConfig[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigSessionConfigOutputReference {
    return new AlbservicesconfigSessionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigSplitProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#host Albservicesconfig#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#password Albservicesconfig#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#port Albservicesconfig#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#username Albservicesconfig#username}
  */
  readonly username?: string;
}

export function albservicesconfigSplitProxyConfigurationToTerraform(struct?: AlbservicesconfigSplitProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function albservicesconfigSplitProxyConfigurationToHclTerraform(struct?: AlbservicesconfigSplitProxyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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

export class AlbservicesconfigSplitProxyConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigSplitProxyConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigSplitProxyConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: true, optional: true, required: false
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class AlbservicesconfigSplitProxyConfigurationList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigSplitProxyConfiguration[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigSplitProxyConfigurationOutputReference {
    return new AlbservicesconfigSplitProxyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigTenantConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#heartbeat_interval Albservicesconfig#heartbeat_interval}
  */
  readonly heartbeatInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#license_escrow_interval Albservicesconfig#license_escrow_interval}
  */
  readonly licenseEscrowInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#license_expiry_interval Albservicesconfig#license_expiry_interval}
  */
  readonly licenseExpiryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#license_reconcile_interval Albservicesconfig#license_reconcile_interval}
  */
  readonly licenseReconcileInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#license_refresh_interval Albservicesconfig#license_refresh_interval}
  */
  readonly licenseRefreshInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#license_renewal_interval Albservicesconfig#license_renewal_interval}
  */
  readonly licenseRenewalInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#token_refresh_interval Albservicesconfig#token_refresh_interval}
  */
  readonly tokenRefreshInterval?: string;
}

export function albservicesconfigTenantConfigToTerraform(struct?: AlbservicesconfigTenantConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    heartbeat_interval: cdktf.stringToTerraform(struct!.heartbeatInterval),
    license_escrow_interval: cdktf.stringToTerraform(struct!.licenseEscrowInterval),
    license_expiry_interval: cdktf.stringToTerraform(struct!.licenseExpiryInterval),
    license_reconcile_interval: cdktf.stringToTerraform(struct!.licenseReconcileInterval),
    license_refresh_interval: cdktf.stringToTerraform(struct!.licenseRefreshInterval),
    license_renewal_interval: cdktf.stringToTerraform(struct!.licenseRenewalInterval),
    token_refresh_interval: cdktf.stringToTerraform(struct!.tokenRefreshInterval),
  }
}


export function albservicesconfigTenantConfigToHclTerraform(struct?: AlbservicesconfigTenantConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    heartbeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.heartbeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_escrow_interval: {
      value: cdktf.stringToHclTerraform(struct!.licenseEscrowInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_expiry_interval: {
      value: cdktf.stringToHclTerraform(struct!.licenseExpiryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_reconcile_interval: {
      value: cdktf.stringToHclTerraform(struct!.licenseReconcileInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.licenseRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_renewal_interval: {
      value: cdktf.stringToHclTerraform(struct!.licenseRenewalInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.tokenRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigTenantConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigTenantConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._heartbeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatInterval = this._heartbeatInterval;
    }
    if (this._licenseEscrowInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseEscrowInterval = this._licenseEscrowInterval;
    }
    if (this._licenseExpiryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseExpiryInterval = this._licenseExpiryInterval;
    }
    if (this._licenseReconcileInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseReconcileInterval = this._licenseReconcileInterval;
    }
    if (this._licenseRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseRefreshInterval = this._licenseRefreshInterval;
    }
    if (this._licenseRenewalInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseRenewalInterval = this._licenseRenewalInterval;
    }
    if (this._tokenRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRefreshInterval = this._tokenRefreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigTenantConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._heartbeatInterval = undefined;
      this._licenseEscrowInterval = undefined;
      this._licenseExpiryInterval = undefined;
      this._licenseReconcileInterval = undefined;
      this._licenseRefreshInterval = undefined;
      this._licenseRenewalInterval = undefined;
      this._tokenRefreshInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._heartbeatInterval = value.heartbeatInterval;
      this._licenseEscrowInterval = value.licenseEscrowInterval;
      this._licenseExpiryInterval = value.licenseExpiryInterval;
      this._licenseReconcileInterval = value.licenseReconcileInterval;
      this._licenseRefreshInterval = value.licenseRefreshInterval;
      this._licenseRenewalInterval = value.licenseRenewalInterval;
      this._tokenRefreshInterval = value.tokenRefreshInterval;
    }
  }

  // heartbeat_interval - computed: true, optional: true, required: false
  private _heartbeatInterval?: string; 
  public get heartbeatInterval() {
    return this.getStringAttribute('heartbeat_interval');
  }
  public set heartbeatInterval(value: string) {
    this._heartbeatInterval = value;
  }
  public resetHeartbeatInterval() {
    this._heartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatIntervalInput() {
    return this._heartbeatInterval;
  }

  // license_escrow_interval - computed: true, optional: true, required: false
  private _licenseEscrowInterval?: string; 
  public get licenseEscrowInterval() {
    return this.getStringAttribute('license_escrow_interval');
  }
  public set licenseEscrowInterval(value: string) {
    this._licenseEscrowInterval = value;
  }
  public resetLicenseEscrowInterval() {
    this._licenseEscrowInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseEscrowIntervalInput() {
    return this._licenseEscrowInterval;
  }

  // license_expiry_interval - computed: true, optional: true, required: false
  private _licenseExpiryInterval?: string; 
  public get licenseExpiryInterval() {
    return this.getStringAttribute('license_expiry_interval');
  }
  public set licenseExpiryInterval(value: string) {
    this._licenseExpiryInterval = value;
  }
  public resetLicenseExpiryInterval() {
    this._licenseExpiryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseExpiryIntervalInput() {
    return this._licenseExpiryInterval;
  }

  // license_reconcile_interval - computed: true, optional: true, required: false
  private _licenseReconcileInterval?: string; 
  public get licenseReconcileInterval() {
    return this.getStringAttribute('license_reconcile_interval');
  }
  public set licenseReconcileInterval(value: string) {
    this._licenseReconcileInterval = value;
  }
  public resetLicenseReconcileInterval() {
    this._licenseReconcileInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseReconcileIntervalInput() {
    return this._licenseReconcileInterval;
  }

  // license_refresh_interval - computed: true, optional: true, required: false
  private _licenseRefreshInterval?: string; 
  public get licenseRefreshInterval() {
    return this.getStringAttribute('license_refresh_interval');
  }
  public set licenseRefreshInterval(value: string) {
    this._licenseRefreshInterval = value;
  }
  public resetLicenseRefreshInterval() {
    this._licenseRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseRefreshIntervalInput() {
    return this._licenseRefreshInterval;
  }

  // license_renewal_interval - computed: true, optional: true, required: false
  private _licenseRenewalInterval?: string; 
  public get licenseRenewalInterval() {
    return this.getStringAttribute('license_renewal_interval');
  }
  public set licenseRenewalInterval(value: string) {
    this._licenseRenewalInterval = value;
  }
  public resetLicenseRenewalInterval() {
    this._licenseRenewalInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseRenewalIntervalInput() {
    return this._licenseRenewalInterval;
  }

  // token_refresh_interval - computed: true, optional: true, required: false
  private _tokenRefreshInterval?: string; 
  public get tokenRefreshInterval() {
    return this.getStringAttribute('token_refresh_interval');
  }
  public set tokenRefreshInterval(value: string) {
    this._tokenRefreshInterval = value;
  }
  public resetTokenRefreshInterval() {
    this._tokenRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefreshIntervalInput() {
    return this._tokenRefreshInterval;
  }
}

export class AlbservicesconfigTenantConfigList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigTenantConfig[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigTenantConfigOutputReference {
    return new AlbservicesconfigTenantConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigUserAgentDbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#allowed_batch_size Albservicesconfig#allowed_batch_size}
  */
  readonly allowedBatchSize?: string;
}

export function albservicesconfigUserAgentDbConfigToTerraform(struct?: AlbservicesconfigUserAgentDbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_batch_size: cdktf.stringToTerraform(struct!.allowedBatchSize),
  }
}


export function albservicesconfigUserAgentDbConfigToHclTerraform(struct?: AlbservicesconfigUserAgentDbConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_batch_size: {
      value: cdktf.stringToHclTerraform(struct!.allowedBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigUserAgentDbConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigUserAgentDbConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedBatchSize = this._allowedBatchSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigUserAgentDbConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedBatchSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedBatchSize = value.allowedBatchSize;
    }
  }

  // allowed_batch_size - computed: false, optional: true, required: false
  private _allowedBatchSize?: string; 
  public get allowedBatchSize() {
    return this.getStringAttribute('allowed_batch_size');
  }
  public set allowedBatchSize(value: string) {
    this._allowedBatchSize = value;
  }
  public resetAllowedBatchSize() {
    this._allowedBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedBatchSizeInput() {
    return this._allowedBatchSize;
  }
}

export class AlbservicesconfigUserAgentDbConfigList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigUserAgentDbConfig[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigUserAgentDbConfigOutputReference {
    return new AlbservicesconfigUserAgentDbConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlbservicesconfigWafConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_auto_download_waf_signatures Albservicesconfig#enable_auto_download_waf_signatures}
  */
  readonly enableAutoDownloadWafSignatures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#enable_waf_signatures_notifications Albservicesconfig#enable_waf_signatures_notifications}
  */
  readonly enableWafSignaturesNotifications?: string;
}

export function albservicesconfigWafConfigToTerraform(struct?: AlbservicesconfigWafConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_download_waf_signatures: cdktf.stringToTerraform(struct!.enableAutoDownloadWafSignatures),
    enable_waf_signatures_notifications: cdktf.stringToTerraform(struct!.enableWafSignaturesNotifications),
  }
}


export function albservicesconfigWafConfigToHclTerraform(struct?: AlbservicesconfigWafConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_download_waf_signatures: {
      value: cdktf.stringToHclTerraform(struct!.enableAutoDownloadWafSignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_waf_signatures_notifications: {
      value: cdktf.stringToHclTerraform(struct!.enableWafSignaturesNotifications),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlbservicesconfigWafConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlbservicesconfigWafConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoDownloadWafSignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoDownloadWafSignatures = this._enableAutoDownloadWafSignatures;
    }
    if (this._enableWafSignaturesNotifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWafSignaturesNotifications = this._enableWafSignaturesNotifications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlbservicesconfigWafConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutoDownloadWafSignatures = undefined;
      this._enableWafSignaturesNotifications = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutoDownloadWafSignatures = value.enableAutoDownloadWafSignatures;
      this._enableWafSignaturesNotifications = value.enableWafSignaturesNotifications;
    }
  }

  // enable_auto_download_waf_signatures - computed: false, optional: true, required: false
  private _enableAutoDownloadWafSignatures?: string; 
  public get enableAutoDownloadWafSignatures() {
    return this.getStringAttribute('enable_auto_download_waf_signatures');
  }
  public set enableAutoDownloadWafSignatures(value: string) {
    this._enableAutoDownloadWafSignatures = value;
  }
  public resetEnableAutoDownloadWafSignatures() {
    this._enableAutoDownloadWafSignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoDownloadWafSignaturesInput() {
    return this._enableAutoDownloadWafSignatures;
  }

  // enable_waf_signatures_notifications - computed: false, optional: true, required: false
  private _enableWafSignaturesNotifications?: string; 
  public get enableWafSignaturesNotifications() {
    return this.getStringAttribute('enable_waf_signatures_notifications');
  }
  public set enableWafSignaturesNotifications(value: string) {
    this._enableWafSignaturesNotifications = value;
  }
  public resetEnableWafSignaturesNotifications() {
    this._enableWafSignaturesNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWafSignaturesNotificationsInput() {
    return this._enableWafSignaturesNotifications;
  }
}

export class AlbservicesconfigWafConfigList extends cdktf.ComplexList {
  public internalValue? : AlbservicesconfigWafConfig[] | cdktf.IResolvable

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
  public get(index: number): AlbservicesconfigWafConfigOutputReference {
    return new AlbservicesconfigWafConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig avi_albservicesconfig}
*/
export class Albservicesconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_albservicesconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Albservicesconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Albservicesconfig to import
  * @param importFromId The id of the existing Albservicesconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Albservicesconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_albservicesconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/albservicesconfig avi_albservicesconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlbservicesconfigConfig
  */
  public constructor(scope: Construct, id: string, config: AlbservicesconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_albservicesconfig',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._pollingInterval = config.pollingInterval;
    this._portalUrl = config.portalUrl;
    this._tenantRef = config.tenantRef;
    this._useSplitProxy = config.useSplitProxy;
    this._useTls = config.useTls;
    this._uuid = config.uuid;
    this._appSignatureConfig.internalValue = config.appSignatureConfig;
    this._assetContact.internalValue = config.assetContact;
    this._caseConfig.internalValue = config.caseConfig;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._featureOptInStatus.internalValue = config.featureOptInStatus;
    this._inventoryConfig.internalValue = config.inventoryConfig;
    this._ipReputationConfig.internalValue = config.ipReputationConfig;
    this._saasLicensingConfig.internalValue = config.saasLicensingConfig;
    this._sessionConfig.internalValue = config.sessionConfig;
    this._splitProxyConfiguration.internalValue = config.splitProxyConfiguration;
    this._tenantConfig.internalValue = config.tenantConfig;
    this._userAgentDbConfig.internalValue = config.userAgentDbConfig;
    this._wafConfig.internalValue = config.wafConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // portal_url - computed: false, optional: false, required: true
  private _portalUrl?: string; 
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }
  public set portalUrl(value: string) {
    this._portalUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalUrlInput() {
    return this._portalUrl;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // use_split_proxy - computed: false, optional: true, required: false
  private _useSplitProxy?: string; 
  public get useSplitProxy() {
    return this.getStringAttribute('use_split_proxy');
  }
  public set useSplitProxy(value: string) {
    this._useSplitProxy = value;
  }
  public resetUseSplitProxy() {
    this._useSplitProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSplitProxyInput() {
    return this._useSplitProxy;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: string; 
  public get useTls() {
    return this.getStringAttribute('use_tls');
  }
  public set useTls(value: string) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // app_signature_config - computed: false, optional: false, required: true
  private _appSignatureConfig = new AlbservicesconfigAppSignatureConfigList(this, "app_signature_config", true);
  public get appSignatureConfig() {
    return this._appSignatureConfig;
  }
  public putAppSignatureConfig(value: AlbservicesconfigAppSignatureConfig[] | cdktf.IResolvable) {
    this._appSignatureConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSignatureConfigInput() {
    return this._appSignatureConfig.internalValue;
  }

  // asset_contact - computed: false, optional: true, required: false
  private _assetContact = new AlbservicesconfigAssetContactList(this, "asset_contact", true);
  public get assetContact() {
    return this._assetContact;
  }
  public putAssetContact(value: AlbservicesconfigAssetContact[] | cdktf.IResolvable) {
    this._assetContact.internalValue = value;
  }
  public resetAssetContact() {
    this._assetContact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetContactInput() {
    return this._assetContact.internalValue;
  }

  // case_config - computed: false, optional: false, required: true
  private _caseConfig = new AlbservicesconfigCaseConfigList(this, "case_config", true);
  public get caseConfig() {
    return this._caseConfig;
  }
  public putCaseConfig(value: AlbservicesconfigCaseConfig[] | cdktf.IResolvable) {
    this._caseConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseConfigInput() {
    return this._caseConfig.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new AlbservicesconfigConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: AlbservicesconfigConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // feature_opt_in_status - computed: false, optional: false, required: true
  private _featureOptInStatus = new AlbservicesconfigFeatureOptInStatusList(this, "feature_opt_in_status", true);
  public get featureOptInStatus() {
    return this._featureOptInStatus;
  }
  public putFeatureOptInStatus(value: AlbservicesconfigFeatureOptInStatus[] | cdktf.IResolvable) {
    this._featureOptInStatus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureOptInStatusInput() {
    return this._featureOptInStatus.internalValue;
  }

  // inventory_config - computed: false, optional: false, required: true
  private _inventoryConfig = new AlbservicesconfigInventoryConfigList(this, "inventory_config", true);
  public get inventoryConfig() {
    return this._inventoryConfig;
  }
  public putInventoryConfig(value: AlbservicesconfigInventoryConfig[] | cdktf.IResolvable) {
    this._inventoryConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryConfigInput() {
    return this._inventoryConfig.internalValue;
  }

  // ip_reputation_config - computed: false, optional: false, required: true
  private _ipReputationConfig = new AlbservicesconfigIpReputationConfigList(this, "ip_reputation_config", true);
  public get ipReputationConfig() {
    return this._ipReputationConfig;
  }
  public putIpReputationConfig(value: AlbservicesconfigIpReputationConfig[] | cdktf.IResolvable) {
    this._ipReputationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationConfigInput() {
    return this._ipReputationConfig.internalValue;
  }

  // saas_licensing_config - computed: false, optional: false, required: true
  private _saasLicensingConfig = new AlbservicesconfigSaasLicensingConfigList(this, "saas_licensing_config", true);
  public get saasLicensingConfig() {
    return this._saasLicensingConfig;
  }
  public putSaasLicensingConfig(value: AlbservicesconfigSaasLicensingConfig[] | cdktf.IResolvable) {
    this._saasLicensingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saasLicensingConfigInput() {
    return this._saasLicensingConfig.internalValue;
  }

  // session_config - computed: false, optional: true, required: false
  private _sessionConfig = new AlbservicesconfigSessionConfigList(this, "session_config", true);
  public get sessionConfig() {
    return this._sessionConfig;
  }
  public putSessionConfig(value: AlbservicesconfigSessionConfig[] | cdktf.IResolvable) {
    this._sessionConfig.internalValue = value;
  }
  public resetSessionConfig() {
    this._sessionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionConfigInput() {
    return this._sessionConfig.internalValue;
  }

  // split_proxy_configuration - computed: false, optional: true, required: false
  private _splitProxyConfiguration = new AlbservicesconfigSplitProxyConfigurationList(this, "split_proxy_configuration", true);
  public get splitProxyConfiguration() {
    return this._splitProxyConfiguration;
  }
  public putSplitProxyConfiguration(value: AlbservicesconfigSplitProxyConfiguration[] | cdktf.IResolvable) {
    this._splitProxyConfiguration.internalValue = value;
  }
  public resetSplitProxyConfiguration() {
    this._splitProxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitProxyConfigurationInput() {
    return this._splitProxyConfiguration.internalValue;
  }

  // tenant_config - computed: false, optional: true, required: false
  private _tenantConfig = new AlbservicesconfigTenantConfigList(this, "tenant_config", true);
  public get tenantConfig() {
    return this._tenantConfig;
  }
  public putTenantConfig(value: AlbservicesconfigTenantConfig[] | cdktf.IResolvable) {
    this._tenantConfig.internalValue = value;
  }
  public resetTenantConfig() {
    this._tenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantConfigInput() {
    return this._tenantConfig.internalValue;
  }

  // user_agent_db_config - computed: false, optional: false, required: true
  private _userAgentDbConfig = new AlbservicesconfigUserAgentDbConfigList(this, "user_agent_db_config", true);
  public get userAgentDbConfig() {
    return this._userAgentDbConfig;
  }
  public putUserAgentDbConfig(value: AlbservicesconfigUserAgentDbConfig[] | cdktf.IResolvable) {
    this._userAgentDbConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentDbConfigInput() {
    return this._userAgentDbConfig.internalValue;
  }

  // waf_config - computed: false, optional: false, required: true
  private _wafConfig = new AlbservicesconfigWafConfigList(this, "waf_config", true);
  public get wafConfig() {
    return this._wafConfig;
  }
  public putWafConfig(value: AlbservicesconfigWafConfig[] | cdktf.IResolvable) {
    this._wafConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafConfigInput() {
    return this._wafConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      polling_interval: cdktf.stringToTerraform(this._pollingInterval),
      portal_url: cdktf.stringToTerraform(this._portalUrl),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      use_split_proxy: cdktf.stringToTerraform(this._useSplitProxy),
      use_tls: cdktf.stringToTerraform(this._useTls),
      uuid: cdktf.stringToTerraform(this._uuid),
      app_signature_config: cdktf.listMapper(albservicesconfigAppSignatureConfigToTerraform, true)(this._appSignatureConfig.internalValue),
      asset_contact: cdktf.listMapper(albservicesconfigAssetContactToTerraform, true)(this._assetContact.internalValue),
      case_config: cdktf.listMapper(albservicesconfigCaseConfigToTerraform, true)(this._caseConfig.internalValue),
      configpb_attributes: cdktf.listMapper(albservicesconfigConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      feature_opt_in_status: cdktf.listMapper(albservicesconfigFeatureOptInStatusToTerraform, true)(this._featureOptInStatus.internalValue),
      inventory_config: cdktf.listMapper(albservicesconfigInventoryConfigToTerraform, true)(this._inventoryConfig.internalValue),
      ip_reputation_config: cdktf.listMapper(albservicesconfigIpReputationConfigToTerraform, true)(this._ipReputationConfig.internalValue),
      saas_licensing_config: cdktf.listMapper(albservicesconfigSaasLicensingConfigToTerraform, true)(this._saasLicensingConfig.internalValue),
      session_config: cdktf.listMapper(albservicesconfigSessionConfigToTerraform, true)(this._sessionConfig.internalValue),
      split_proxy_configuration: cdktf.listMapper(albservicesconfigSplitProxyConfigurationToTerraform, true)(this._splitProxyConfiguration.internalValue),
      tenant_config: cdktf.listMapper(albservicesconfigTenantConfigToTerraform, true)(this._tenantConfig.internalValue),
      user_agent_db_config: cdktf.listMapper(albservicesconfigUserAgentDbConfigToTerraform, true)(this._userAgentDbConfig.internalValue),
      waf_config: cdktf.listMapper(albservicesconfigWafConfigToTerraform, true)(this._wafConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      polling_interval: {
        value: cdktf.stringToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_url: {
        value: cdktf.stringToHclTerraform(this._portalUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_split_proxy: {
        value: cdktf.stringToHclTerraform(this._useSplitProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_tls: {
        value: cdktf.stringToHclTerraform(this._useTls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_signature_config: {
        value: cdktf.listMapperHcl(albservicesconfigAppSignatureConfigToHclTerraform, true)(this._appSignatureConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigAppSignatureConfigList",
      },
      asset_contact: {
        value: cdktf.listMapperHcl(albservicesconfigAssetContactToHclTerraform, true)(this._assetContact.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigAssetContactList",
      },
      case_config: {
        value: cdktf.listMapperHcl(albservicesconfigCaseConfigToHclTerraform, true)(this._caseConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigCaseConfigList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(albservicesconfigConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigConfigpbAttributesList",
      },
      feature_opt_in_status: {
        value: cdktf.listMapperHcl(albservicesconfigFeatureOptInStatusToHclTerraform, true)(this._featureOptInStatus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigFeatureOptInStatusList",
      },
      inventory_config: {
        value: cdktf.listMapperHcl(albservicesconfigInventoryConfigToHclTerraform, true)(this._inventoryConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigInventoryConfigList",
      },
      ip_reputation_config: {
        value: cdktf.listMapperHcl(albservicesconfigIpReputationConfigToHclTerraform, true)(this._ipReputationConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigIpReputationConfigList",
      },
      saas_licensing_config: {
        value: cdktf.listMapperHcl(albservicesconfigSaasLicensingConfigToHclTerraform, true)(this._saasLicensingConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigSaasLicensingConfigList",
      },
      session_config: {
        value: cdktf.listMapperHcl(albservicesconfigSessionConfigToHclTerraform, true)(this._sessionConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigSessionConfigList",
      },
      split_proxy_configuration: {
        value: cdktf.listMapperHcl(albservicesconfigSplitProxyConfigurationToHclTerraform, true)(this._splitProxyConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigSplitProxyConfigurationList",
      },
      tenant_config: {
        value: cdktf.listMapperHcl(albservicesconfigTenantConfigToHclTerraform, true)(this._tenantConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigTenantConfigList",
      },
      user_agent_db_config: {
        value: cdktf.listMapperHcl(albservicesconfigUserAgentDbConfigToHclTerraform, true)(this._userAgentDbConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigUserAgentDbConfigList",
      },
      waf_config: {
        value: cdktf.listMapperHcl(albservicesconfigWafConfigToHclTerraform, true)(this._wafConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlbservicesconfigWafConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
