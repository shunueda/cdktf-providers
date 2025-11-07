// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#create User#create}
  */
  readonly create?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#cross_account_access User#cross_account_access}
  */
  readonly crossAccountAccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#first_name User#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#is_owner User#is_owner}
  */
  readonly isOwner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#is_sso_enabled User#is_sso_enabled}
  */
  readonly isSsoEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#last_name User#last_name}
  */
  readonly lastName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#permit_alert_actions User#permit_alert_actions}
  */
  readonly permitAlertActions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#permit_notifications User#permit_notifications}
  */
  readonly permitNotifications?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#permit_on_boarding User#permit_on_boarding}
  */
  readonly permitOnBoarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#permit_policies User#permit_policies}
  */
  readonly permitPolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#permit_rulesets User#permit_rulesets}
  */
  readonly permitRulesets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#role_ids User#role_ids}
  */
  readonly roleIds?: number[];
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#access User#access}
  */
  readonly access?: UserAccess[] | cdktf.IResolvable;
  /**
  * manage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#manage User#manage}
  */
  readonly manage?: UserManage[] | cdktf.IResolvable;
  /**
  * view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#view User#view}
  */
  readonly view?: UserView[] | cdktf.IResolvable;
}
export interface UserIamSafeCloudAccountsIamEntitiesLastLeaseTime {
}

export function userIamSafeCloudAccountsIamEntitiesLastLeaseTimeToTerraform(struct?: UserIamSafeCloudAccountsIamEntitiesLastLeaseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userIamSafeCloudAccountsIamEntitiesLastLeaseTimeToHclTerraform(struct?: UserIamSafeCloudAccountsIamEntitiesLastLeaseTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserIamSafeCloudAccountsIamEntitiesLastLeaseTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserIamSafeCloudAccountsIamEntitiesLastLeaseTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserIamSafeCloudAccountsIamEntitiesLastLeaseTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iam_entity - computed: true, optional: false, required: false
  public get iamEntity() {
    return this.getStringAttribute('iam_entity');
  }

  // last_lease_time - computed: true, optional: false, required: false
  public get lastLeaseTime() {
    return this.getStringAttribute('last_lease_time');
  }
}

export class UserIamSafeCloudAccountsIamEntitiesLastLeaseTimeList extends cdktf.ComplexList {

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
  public get(index: number): UserIamSafeCloudAccountsIamEntitiesLastLeaseTimeOutputReference {
    return new UserIamSafeCloudAccountsIamEntitiesLastLeaseTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserIamSafeCloudAccounts {
}

export function userIamSafeCloudAccountsToTerraform(struct?: UserIamSafeCloudAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userIamSafeCloudAccountsToHclTerraform(struct?: UserIamSafeCloudAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserIamSafeCloudAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserIamSafeCloudAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserIamSafeCloudAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_account_id - computed: true, optional: false, required: false
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }

  // cloud_account_state - computed: true, optional: false, required: false
  public get cloudAccountState() {
    return this.getStringAttribute('cloud_account_state');
  }

  // external_account_number - computed: true, optional: false, required: false
  public get externalAccountNumber() {
    return this.getStringAttribute('external_account_number');
  }

  // iam_entities - computed: true, optional: false, required: false
  public get iamEntities() {
    return this.getListAttribute('iam_entities');
  }

  // iam_entities_last_lease_time - computed: true, optional: false, required: false
  private _iamEntitiesLastLeaseTime = new UserIamSafeCloudAccountsIamEntitiesLastLeaseTimeList(this, "iam_entities_last_lease_time", false);
  public get iamEntitiesLastLeaseTime() {
    return this._iamEntitiesLastLeaseTime;
  }

  // iam_entity - computed: true, optional: false, required: false
  public get iamEntity() {
    return this.getStringAttribute('iam_entity');
  }

  // last_lease_time - computed: true, optional: false, required: false
  public get lastLeaseTime() {
    return this.getStringAttribute('last_lease_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getBooleanAttribute('state');
  }
}

export class UserIamSafeCloudAccountsList extends cdktf.ComplexList {

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
  public get(index: number): UserIamSafeCloudAccountsOutputReference {
    return new UserIamSafeCloudAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserIamSafe {
}

export function userIamSafeToTerraform(struct?: UserIamSafe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userIamSafeToHclTerraform(struct?: UserIamSafe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserIamSafeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserIamSafe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserIamSafe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_accounts - computed: true, optional: false, required: false
  private _cloudAccounts = new UserIamSafeCloudAccountsList(this, "cloud_accounts", false);
  public get cloudAccounts() {
    return this._cloudAccounts;
  }
}

export class UserIamSafeList extends cdktf.ComplexList {

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
  public get(index: number): UserIamSafeOutputReference {
    return new UserIamSafeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#main_id User#main_id}
  */
  readonly mainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#region User#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#security_group_id User#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#traffic User#traffic}
  */
  readonly traffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#type User#type}
  */
  readonly type?: string;
}

export function userAccessToTerraform(struct?: UserAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_id: cdktf.stringToTerraform(struct!.mainId),
    region: cdktf.stringToTerraform(struct!.region),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userAccessToHclTerraform(struct?: UserAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_id: {
      value: cdktf.stringToHclTerraform(struct!.mainId),
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
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainId = this._mainId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainId = undefined;
      this._region = undefined;
      this._securityGroupId = undefined;
      this._traffic = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainId = value.mainId;
      this._region = value.region;
      this._securityGroupId = value.securityGroupId;
      this._traffic = value.traffic;
      this._type = value.type;
    }
  }

  // main_id - computed: false, optional: true, required: false
  private _mainId?: string; 
  public get mainId() {
    return this.getStringAttribute('main_id');
  }
  public set mainId(value: string) {
    this._mainId = value;
  }
  public resetMainId() {
    this._mainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainIdInput() {
    return this._mainId;
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

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
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
}

export class UserAccessList extends cdktf.ComplexList {
  public internalValue? : UserAccess[] | cdktf.IResolvable

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
  public get(index: number): UserAccessOutputReference {
    return new UserAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserManage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#main_id User#main_id}
  */
  readonly mainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#region User#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#security_group_id User#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#traffic User#traffic}
  */
  readonly traffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#type User#type}
  */
  readonly type?: string;
}

export function userManageToTerraform(struct?: UserManage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_id: cdktf.stringToTerraform(struct!.mainId),
    region: cdktf.stringToTerraform(struct!.region),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userManageToHclTerraform(struct?: UserManage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_id: {
      value: cdktf.stringToHclTerraform(struct!.mainId),
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
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserManageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserManage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainId = this._mainId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserManage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainId = undefined;
      this._region = undefined;
      this._securityGroupId = undefined;
      this._traffic = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainId = value.mainId;
      this._region = value.region;
      this._securityGroupId = value.securityGroupId;
      this._traffic = value.traffic;
      this._type = value.type;
    }
  }

  // main_id - computed: false, optional: true, required: false
  private _mainId?: string; 
  public get mainId() {
    return this.getStringAttribute('main_id');
  }
  public set mainId(value: string) {
    this._mainId = value;
  }
  public resetMainId() {
    this._mainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainIdInput() {
    return this._mainId;
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

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
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
}

export class UserManageList extends cdktf.ComplexList {
  public internalValue? : UserManage[] | cdktf.IResolvable

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
  public get(index: number): UserManageOutputReference {
    return new UserManageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserView {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#main_id User#main_id}
  */
  readonly mainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#region User#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#security_group_id User#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#traffic User#traffic}
  */
  readonly traffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#type User#type}
  */
  readonly type?: string;
}

export function userViewToTerraform(struct?: UserView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main_id: cdktf.stringToTerraform(struct!.mainId),
    region: cdktf.stringToTerraform(struct!.region),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    traffic: cdktf.stringToTerraform(struct!.traffic),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userViewToHclTerraform(struct?: UserView | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main_id: {
      value: cdktf.stringToHclTerraform(struct!.mainId),
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
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic: {
      value: cdktf.stringToHclTerraform(struct!.traffic),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserViewOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserView | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainId = this._mainId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._traffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.traffic = this._traffic;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserView | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mainId = undefined;
      this._region = undefined;
      this._securityGroupId = undefined;
      this._traffic = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mainId = value.mainId;
      this._region = value.region;
      this._securityGroupId = value.securityGroupId;
      this._traffic = value.traffic;
      this._type = value.type;
    }
  }

  // main_id - computed: false, optional: true, required: false
  private _mainId?: string; 
  public get mainId() {
    return this.getStringAttribute('main_id');
  }
  public set mainId(value: string) {
    this._mainId = value;
  }
  public resetMainId() {
    this._mainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainIdInput() {
    return this._mainId;
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

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic?: string; 
  public get traffic() {
    return this.getStringAttribute('traffic');
  }
  public set traffic(value: string) {
    this._traffic = value;
  }
  public resetTraffic() {
    this._traffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic;
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
}

export class UserViewList extends cdktf.ComplexList {
  public internalValue? : UserView[] | cdktf.IResolvable

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
  public get(index: number): UserViewOutputReference {
    return new UserViewOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user dome9_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/user dome9_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_user',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._create = config.create;
    this._crossAccountAccess = config.crossAccountAccess;
    this._email = config.email;
    this._firstName = config.firstName;
    this._id = config.id;
    this._isOwner = config.isOwner;
    this._isSsoEnabled = config.isSsoEnabled;
    this._lastName = config.lastName;
    this._permitAlertActions = config.permitAlertActions;
    this._permitNotifications = config.permitNotifications;
    this._permitOnBoarding = config.permitOnBoarding;
    this._permitPolicies = config.permitPolicies;
    this._permitRulesets = config.permitRulesets;
    this._roleIds = config.roleIds;
    this._access.internalValue = config.access;
    this._manage.internalValue = config.manage;
    this._view.internalValue = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_switch_role - computed: true, optional: false, required: false
  public get canSwitchRole() {
    return this.getBooleanAttribute('can_switch_role');
  }

  // create - computed: false, optional: true, required: false
  private _create?: string[]; 
  public get create() {
    return this.getListAttribute('create');
  }
  public set create(value: string[]) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // cross_account_access - computed: false, optional: true, required: false
  private _crossAccountAccess?: string[]; 
  public get crossAccountAccess() {
    return this.getListAttribute('cross_account_access');
  }
  public set crossAccountAccess(value: string[]) {
    this._crossAccountAccess = value;
  }
  public resetCrossAccountAccess() {
    this._crossAccountAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossAccountAccessInput() {
    return this._crossAccountAccess;
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

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // has_api_key - computed: true, optional: false, required: false
  public get hasApiKey() {
    return this.getBooleanAttribute('has_api_key');
  }

  // has_api_key_v1 - computed: true, optional: false, required: false
  public get hasApiKeyV1() {
    return this.getBooleanAttribute('has_api_key_v1');
  }

  // has_api_key_v2 - computed: true, optional: false, required: false
  public get hasApiKeyV2() {
    return this.getBooleanAttribute('has_api_key_v2');
  }

  // iam_safe - computed: true, optional: false, required: false
  private _iamSafe = new UserIamSafeList(this, "iam_safe", true);
  public get iamSafe() {
    return this._iamSafe;
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

  // is_auditor - computed: true, optional: false, required: false
  public get isAuditor() {
    return this.getBooleanAttribute('is_auditor');
  }

  // is_locked - computed: true, optional: false, required: false
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }

  // is_mfa_enabled - computed: true, optional: false, required: false
  public get isMfaEnabled() {
    return this.getBooleanAttribute('is_mfa_enabled');
  }

  // is_mobile_device_paired - computed: true, optional: false, required: false
  public get isMobileDevicePaired() {
    return this.getBooleanAttribute('is_mobile_device_paired');
  }

  // is_owner - computed: true, optional: true, required: false
  private _isOwner?: boolean | cdktf.IResolvable; 
  public get isOwner() {
    return this.getBooleanAttribute('is_owner');
  }
  public set isOwner(value: boolean | cdktf.IResolvable) {
    this._isOwner = value;
  }
  public resetIsOwner() {
    this._isOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOwnerInput() {
    return this._isOwner;
  }

  // is_sso_enabled - computed: false, optional: false, required: true
  private _isSsoEnabled?: boolean | cdktf.IResolvable; 
  public get isSsoEnabled() {
    return this.getBooleanAttribute('is_sso_enabled');
  }
  public set isSsoEnabled(value: boolean | cdktf.IResolvable) {
    this._isSsoEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSsoEnabledInput() {
    return this._isSsoEnabled;
  }

  // is_super_user - computed: true, optional: false, required: false
  public get isSuperUser() {
    return this.getBooleanAttribute('is_super_user');
  }

  // is_suspended - computed: true, optional: false, required: false
  public get isSuspended() {
    return this.getBooleanAttribute('is_suspended');
  }

  // last_login - computed: true, optional: false, required: false
  public get lastLogin() {
    return this.getStringAttribute('last_login');
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // permit_alert_actions - computed: false, optional: true, required: false
  private _permitAlertActions?: boolean | cdktf.IResolvable; 
  public get permitAlertActions() {
    return this.getBooleanAttribute('permit_alert_actions');
  }
  public set permitAlertActions(value: boolean | cdktf.IResolvable) {
    this._permitAlertActions = value;
  }
  public resetPermitAlertActions() {
    this._permitAlertActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitAlertActionsInput() {
    return this._permitAlertActions;
  }

  // permit_notifications - computed: false, optional: true, required: false
  private _permitNotifications?: boolean | cdktf.IResolvable; 
  public get permitNotifications() {
    return this.getBooleanAttribute('permit_notifications');
  }
  public set permitNotifications(value: boolean | cdktf.IResolvable) {
    this._permitNotifications = value;
  }
  public resetPermitNotifications() {
    this._permitNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitNotificationsInput() {
    return this._permitNotifications;
  }

  // permit_on_boarding - computed: false, optional: true, required: false
  private _permitOnBoarding?: boolean | cdktf.IResolvable; 
  public get permitOnBoarding() {
    return this.getBooleanAttribute('permit_on_boarding');
  }
  public set permitOnBoarding(value: boolean | cdktf.IResolvable) {
    this._permitOnBoarding = value;
  }
  public resetPermitOnBoarding() {
    this._permitOnBoarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitOnBoardingInput() {
    return this._permitOnBoarding;
  }

  // permit_policies - computed: false, optional: true, required: false
  private _permitPolicies?: boolean | cdktf.IResolvable; 
  public get permitPolicies() {
    return this.getBooleanAttribute('permit_policies');
  }
  public set permitPolicies(value: boolean | cdktf.IResolvable) {
    this._permitPolicies = value;
  }
  public resetPermitPolicies() {
    this._permitPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitPoliciesInput() {
    return this._permitPolicies;
  }

  // permit_rulesets - computed: false, optional: true, required: false
  private _permitRulesets?: boolean | cdktf.IResolvable; 
  public get permitRulesets() {
    return this.getBooleanAttribute('permit_rulesets');
  }
  public set permitRulesets(value: boolean | cdktf.IResolvable) {
    this._permitRulesets = value;
  }
  public resetPermitRulesets() {
    this._permitRulesets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitRulesetsInput() {
    return this._permitRulesets;
  }

  // role_ids - computed: true, optional: true, required: false
  private _roleIds?: number[]; 
  public get roleIds() {
    return this.getNumberListAttribute('role_ids');
  }
  public set roleIds(value: number[]) {
    this._roleIds = value;
  }
  public resetRoleIds() {
    this._roleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdsInput() {
    return this._roleIds;
  }

  // access - computed: false, optional: true, required: false
  private _access = new UserAccessList(this, "access", false);
  public get access() {
    return this._access;
  }
  public putAccess(value: UserAccess[] | cdktf.IResolvable) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // manage - computed: false, optional: true, required: false
  private _manage = new UserManageList(this, "manage", false);
  public get manage() {
    return this._manage;
  }
  public putManage(value: UserManage[] | cdktf.IResolvable) {
    this._manage.internalValue = value;
  }
  public resetManage() {
    this._manage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageInput() {
    return this._manage.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new UserViewList(this, "view", false);
  public get view() {
    return this._view;
  }
  public putView(value: UserView[] | cdktf.IResolvable) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create: cdktf.listMapper(cdktf.stringToTerraform, false)(this._create),
      cross_account_access: cdktf.listMapper(cdktf.stringToTerraform, false)(this._crossAccountAccess),
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      is_owner: cdktf.booleanToTerraform(this._isOwner),
      is_sso_enabled: cdktf.booleanToTerraform(this._isSsoEnabled),
      last_name: cdktf.stringToTerraform(this._lastName),
      permit_alert_actions: cdktf.booleanToTerraform(this._permitAlertActions),
      permit_notifications: cdktf.booleanToTerraform(this._permitNotifications),
      permit_on_boarding: cdktf.booleanToTerraform(this._permitOnBoarding),
      permit_policies: cdktf.booleanToTerraform(this._permitPolicies),
      permit_rulesets: cdktf.booleanToTerraform(this._permitRulesets),
      role_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._roleIds),
      access: cdktf.listMapper(userAccessToTerraform, true)(this._access.internalValue),
      manage: cdktf.listMapper(userManageToTerraform, true)(this._manage.internalValue),
      view: cdktf.listMapper(userViewToTerraform, true)(this._view.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._create),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cross_account_access: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._crossAccountAccess),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_owner: {
        value: cdktf.booleanToHclTerraform(this._isOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_sso_enabled: {
        value: cdktf.booleanToHclTerraform(this._isSsoEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permit_alert_actions: {
        value: cdktf.booleanToHclTerraform(this._permitAlertActions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_notifications: {
        value: cdktf.booleanToHclTerraform(this._permitNotifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_on_boarding: {
        value: cdktf.booleanToHclTerraform(this._permitOnBoarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_policies: {
        value: cdktf.booleanToHclTerraform(this._permitPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permit_rulesets: {
        value: cdktf.booleanToHclTerraform(this._permitRulesets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._roleIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      access: {
        value: cdktf.listMapperHcl(userAccessToHclTerraform, true)(this._access.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserAccessList",
      },
      manage: {
        value: cdktf.listMapperHcl(userManageToHclTerraform, true)(this._manage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserManageList",
      },
      view: {
        value: cdktf.listMapperHcl(userViewToHclTerraform, true)(this._view.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserViewList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
