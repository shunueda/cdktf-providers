// https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAthenzRolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#domain DataAthenzRoles#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#id DataAthenzRoles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#include_members DataAthenzRoles#include_members}
  */
  readonly includeMembers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#tag_key DataAthenzRoles#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#tag_value DataAthenzRoles#tag_value}
  */
  readonly tagValue?: string;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#roles DataAthenzRoles#roles}
  */
  readonly roles?: DataAthenzRolesRoles[] | cdktf.IResolvable;
}
export interface DataAthenzRolesRolesMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#expiration DataAthenzRoles#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#name DataAthenzRoles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#review DataAthenzRoles#review}
  */
  readonly review?: string;
}

export function dataAthenzRolesRolesMemberToTerraform(struct?: DataAthenzRolesRolesMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.stringToTerraform(struct!.expiration),
    name: cdktf.stringToTerraform(struct!.name),
    review: cdktf.stringToTerraform(struct!.review),
  }
}


export function dataAthenzRolesRolesMemberToHclTerraform(struct?: DataAthenzRolesRolesMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
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
    review: {
      value: cdktf.stringToHclTerraform(struct!.review),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAthenzRolesRolesMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAthenzRolesRolesMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._review !== undefined) {
      hasAnyValues = true;
      internalValueResult.review = this._review;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAthenzRolesRolesMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiration = undefined;
      this._name = undefined;
      this._review = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiration = value.expiration;
      this._name = value.name;
      this._review = value.review;
    }
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // review - computed: false, optional: true, required: false
  private _review?: string; 
  public get review() {
    return this.getStringAttribute('review');
  }
  public set review(value: string) {
    this._review = value;
  }
  public resetReview() {
    this._review = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewInput() {
    return this._review;
  }
}

export class DataAthenzRolesRolesMemberList extends cdktf.ComplexList {
  public internalValue? : DataAthenzRolesRolesMember[] | cdktf.IResolvable

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
  public get(index: number): DataAthenzRolesRolesMemberOutputReference {
    return new DataAthenzRolesRolesMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAthenzRolesRolesSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#cert_expiry_mins DataAthenzRoles#cert_expiry_mins}
  */
  readonly certExpiryMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#group_expiry_days DataAthenzRoles#group_expiry_days}
  */
  readonly groupExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#group_review_days DataAthenzRoles#group_review_days}
  */
  readonly groupReviewDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#max_members DataAthenzRoles#max_members}
  */
  readonly maxMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#service_expiry_days DataAthenzRoles#service_expiry_days}
  */
  readonly serviceExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#service_review_days DataAthenzRoles#service_review_days}
  */
  readonly serviceReviewDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#token_expiry_mins DataAthenzRoles#token_expiry_mins}
  */
  readonly tokenExpiryMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#user_expiry_days DataAthenzRoles#user_expiry_days}
  */
  readonly userExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#user_review_days DataAthenzRoles#user_review_days}
  */
  readonly userReviewDays?: number;
}

export function dataAthenzRolesRolesSettingsToTerraform(struct?: DataAthenzRolesRolesSettingsOutputReference | DataAthenzRolesRolesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_expiry_mins: cdktf.numberToTerraform(struct!.certExpiryMins),
    group_expiry_days: cdktf.numberToTerraform(struct!.groupExpiryDays),
    group_review_days: cdktf.numberToTerraform(struct!.groupReviewDays),
    max_members: cdktf.numberToTerraform(struct!.maxMembers),
    service_expiry_days: cdktf.numberToTerraform(struct!.serviceExpiryDays),
    service_review_days: cdktf.numberToTerraform(struct!.serviceReviewDays),
    token_expiry_mins: cdktf.numberToTerraform(struct!.tokenExpiryMins),
    user_expiry_days: cdktf.numberToTerraform(struct!.userExpiryDays),
    user_review_days: cdktf.numberToTerraform(struct!.userReviewDays),
  }
}


export function dataAthenzRolesRolesSettingsToHclTerraform(struct?: DataAthenzRolesRolesSettingsOutputReference | DataAthenzRolesRolesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_expiry_mins: {
      value: cdktf.numberToHclTerraform(struct!.certExpiryMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_expiry_days: {
      value: cdktf.numberToHclTerraform(struct!.groupExpiryDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_review_days: {
      value: cdktf.numberToHclTerraform(struct!.groupReviewDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_members: {
      value: cdktf.numberToHclTerraform(struct!.maxMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_expiry_days: {
      value: cdktf.numberToHclTerraform(struct!.serviceExpiryDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_review_days: {
      value: cdktf.numberToHclTerraform(struct!.serviceReviewDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_expiry_mins: {
      value: cdktf.numberToHclTerraform(struct!.tokenExpiryMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_expiry_days: {
      value: cdktf.numberToHclTerraform(struct!.userExpiryDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_review_days: {
      value: cdktf.numberToHclTerraform(struct!.userReviewDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAthenzRolesRolesSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAthenzRolesRolesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certExpiryMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.certExpiryMins = this._certExpiryMins;
    }
    if (this._groupExpiryDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupExpiryDays = this._groupExpiryDays;
    }
    if (this._groupReviewDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupReviewDays = this._groupReviewDays;
    }
    if (this._maxMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMembers = this._maxMembers;
    }
    if (this._serviceExpiryDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceExpiryDays = this._serviceExpiryDays;
    }
    if (this._serviceReviewDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceReviewDays = this._serviceReviewDays;
    }
    if (this._tokenExpiryMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenExpiryMins = this._tokenExpiryMins;
    }
    if (this._userExpiryDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.userExpiryDays = this._userExpiryDays;
    }
    if (this._userReviewDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.userReviewDays = this._userReviewDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAthenzRolesRolesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certExpiryMins = undefined;
      this._groupExpiryDays = undefined;
      this._groupReviewDays = undefined;
      this._maxMembers = undefined;
      this._serviceExpiryDays = undefined;
      this._serviceReviewDays = undefined;
      this._tokenExpiryMins = undefined;
      this._userExpiryDays = undefined;
      this._userReviewDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certExpiryMins = value.certExpiryMins;
      this._groupExpiryDays = value.groupExpiryDays;
      this._groupReviewDays = value.groupReviewDays;
      this._maxMembers = value.maxMembers;
      this._serviceExpiryDays = value.serviceExpiryDays;
      this._serviceReviewDays = value.serviceReviewDays;
      this._tokenExpiryMins = value.tokenExpiryMins;
      this._userExpiryDays = value.userExpiryDays;
      this._userReviewDays = value.userReviewDays;
    }
  }

  // cert_expiry_mins - computed: false, optional: true, required: false
  private _certExpiryMins?: number; 
  public get certExpiryMins() {
    return this.getNumberAttribute('cert_expiry_mins');
  }
  public set certExpiryMins(value: number) {
    this._certExpiryMins = value;
  }
  public resetCertExpiryMins() {
    this._certExpiryMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certExpiryMinsInput() {
    return this._certExpiryMins;
  }

  // group_expiry_days - computed: false, optional: true, required: false
  private _groupExpiryDays?: number; 
  public get groupExpiryDays() {
    return this.getNumberAttribute('group_expiry_days');
  }
  public set groupExpiryDays(value: number) {
    this._groupExpiryDays = value;
  }
  public resetGroupExpiryDays() {
    this._groupExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupExpiryDaysInput() {
    return this._groupExpiryDays;
  }

  // group_review_days - computed: false, optional: true, required: false
  private _groupReviewDays?: number; 
  public get groupReviewDays() {
    return this.getNumberAttribute('group_review_days');
  }
  public set groupReviewDays(value: number) {
    this._groupReviewDays = value;
  }
  public resetGroupReviewDays() {
    this._groupReviewDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupReviewDaysInput() {
    return this._groupReviewDays;
  }

  // max_members - computed: false, optional: true, required: false
  private _maxMembers?: number; 
  public get maxMembers() {
    return this.getNumberAttribute('max_members');
  }
  public set maxMembers(value: number) {
    this._maxMembers = value;
  }
  public resetMaxMembers() {
    this._maxMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMembersInput() {
    return this._maxMembers;
  }

  // service_expiry_days - computed: false, optional: true, required: false
  private _serviceExpiryDays?: number; 
  public get serviceExpiryDays() {
    return this.getNumberAttribute('service_expiry_days');
  }
  public set serviceExpiryDays(value: number) {
    this._serviceExpiryDays = value;
  }
  public resetServiceExpiryDays() {
    this._serviceExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExpiryDaysInput() {
    return this._serviceExpiryDays;
  }

  // service_review_days - computed: false, optional: true, required: false
  private _serviceReviewDays?: number; 
  public get serviceReviewDays() {
    return this.getNumberAttribute('service_review_days');
  }
  public set serviceReviewDays(value: number) {
    this._serviceReviewDays = value;
  }
  public resetServiceReviewDays() {
    this._serviceReviewDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceReviewDaysInput() {
    return this._serviceReviewDays;
  }

  // token_expiry_mins - computed: false, optional: true, required: false
  private _tokenExpiryMins?: number; 
  public get tokenExpiryMins() {
    return this.getNumberAttribute('token_expiry_mins');
  }
  public set tokenExpiryMins(value: number) {
    this._tokenExpiryMins = value;
  }
  public resetTokenExpiryMins() {
    this._tokenExpiryMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExpiryMinsInput() {
    return this._tokenExpiryMins;
  }

  // user_expiry_days - computed: false, optional: true, required: false
  private _userExpiryDays?: number; 
  public get userExpiryDays() {
    return this.getNumberAttribute('user_expiry_days');
  }
  public set userExpiryDays(value: number) {
    this._userExpiryDays = value;
  }
  public resetUserExpiryDays() {
    this._userExpiryDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userExpiryDaysInput() {
    return this._userExpiryDays;
  }

  // user_review_days - computed: false, optional: true, required: false
  private _userReviewDays?: number; 
  public get userReviewDays() {
    return this.getNumberAttribute('user_review_days');
  }
  public set userReviewDays(value: number) {
    this._userReviewDays = value;
  }
  public resetUserReviewDays() {
    this._userReviewDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userReviewDaysInput() {
    return this._userReviewDays;
  }
}
export interface DataAthenzRolesRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#audit_enabled DataAthenzRoles#audit_enabled}
  */
  readonly auditEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#delete_protection DataAthenzRoles#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#description DataAthenzRoles#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#domain DataAthenzRoles#domain}
  */
  readonly domain: string;
  /**
  * Last reviewed date for the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#last_reviewed_date DataAthenzRoles#last_reviewed_date}
  */
  readonly lastReviewedDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#name DataAthenzRoles#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#notify_details DataAthenzRoles#notify_details}
  */
  readonly notifyDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#notify_roles DataAthenzRoles#notify_roles}
  */
  readonly notifyRoles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#principal_domain_filter DataAthenzRoles#principal_domain_filter}
  */
  readonly principalDomainFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#review_enabled DataAthenzRoles#review_enabled}
  */
  readonly reviewEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#self_renew DataAthenzRoles#self_renew}
  */
  readonly selfRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#self_renew_mins DataAthenzRoles#self_renew_mins}
  */
  readonly selfRenewMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#self_serve DataAthenzRoles#self_serve}
  */
  readonly selfServe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#sign_algorithm DataAthenzRoles#sign_algorithm}
  */
  readonly signAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#tags DataAthenzRoles#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The domain, which this role is trusted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#trust DataAthenzRoles#trust}
  */
  readonly trust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#user_authority_expiration DataAthenzRoles#user_authority_expiration}
  */
  readonly userAuthorityExpiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#user_authority_filter DataAthenzRoles#user_authority_filter}
  */
  readonly userAuthorityFilter?: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#member DataAthenzRoles#member}
  */
  readonly member?: DataAthenzRolesRolesMember[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#settings DataAthenzRoles#settings}
  */
  readonly settings?: DataAthenzRolesRolesSettings;
}

export function dataAthenzRolesRolesToTerraform(struct?: DataAthenzRolesRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_enabled: cdktf.booleanToTerraform(struct!.auditEnabled),
    delete_protection: cdktf.booleanToTerraform(struct!.deleteProtection),
    description: cdktf.stringToTerraform(struct!.description),
    domain: cdktf.stringToTerraform(struct!.domain),
    last_reviewed_date: cdktf.stringToTerraform(struct!.lastReviewedDate),
    name: cdktf.stringToTerraform(struct!.name),
    notify_details: cdktf.stringToTerraform(struct!.notifyDetails),
    notify_roles: cdktf.stringToTerraform(struct!.notifyRoles),
    principal_domain_filter: cdktf.stringToTerraform(struct!.principalDomainFilter),
    review_enabled: cdktf.booleanToTerraform(struct!.reviewEnabled),
    self_renew: cdktf.booleanToTerraform(struct!.selfRenew),
    self_renew_mins: cdktf.numberToTerraform(struct!.selfRenewMins),
    self_serve: cdktf.booleanToTerraform(struct!.selfServe),
    sign_algorithm: cdktf.stringToTerraform(struct!.signAlgorithm),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    trust: cdktf.stringToTerraform(struct!.trust),
    user_authority_expiration: cdktf.stringToTerraform(struct!.userAuthorityExpiration),
    user_authority_filter: cdktf.stringToTerraform(struct!.userAuthorityFilter),
    member: cdktf.listMapper(dataAthenzRolesRolesMemberToTerraform, true)(struct!.member),
    settings: dataAthenzRolesRolesSettingsToTerraform(struct!.settings),
  }
}


export function dataAthenzRolesRolesToHclTerraform(struct?: DataAthenzRolesRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.auditEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_protection: {
      value: cdktf.booleanToHclTerraform(struct!.deleteProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_reviewed_date: {
      value: cdktf.stringToHclTerraform(struct!.lastReviewedDate),
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
    notify_details: {
      value: cdktf.stringToHclTerraform(struct!.notifyDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_roles: {
      value: cdktf.stringToHclTerraform(struct!.notifyRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_domain_filter: {
      value: cdktf.stringToHclTerraform(struct!.principalDomainFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    review_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.reviewEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_renew: {
      value: cdktf.booleanToHclTerraform(struct!.selfRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_renew_mins: {
      value: cdktf.numberToHclTerraform(struct!.selfRenewMins),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    self_serve: {
      value: cdktf.booleanToHclTerraform(struct!.selfServe),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sign_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    trust: {
      value: cdktf.stringToHclTerraform(struct!.trust),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_authority_expiration: {
      value: cdktf.stringToHclTerraform(struct!.userAuthorityExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_authority_filter: {
      value: cdktf.stringToHclTerraform(struct!.userAuthorityFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member: {
      value: cdktf.listMapperHcl(dataAthenzRolesRolesMemberToHclTerraform, true)(struct!.member),
      isBlock: true,
      type: "set",
      storageClassType: "DataAthenzRolesRolesMemberList",
    },
    settings: {
      value: dataAthenzRolesRolesSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "set",
      storageClassType: "DataAthenzRolesRolesSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAthenzRolesRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAthenzRolesRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditEnabled = this._auditEnabled;
    }
    if (this._deleteProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteProtection = this._deleteProtection;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._lastReviewedDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastReviewedDate = this._lastReviewedDate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notifyDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyDetails = this._notifyDetails;
    }
    if (this._notifyRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyRoles = this._notifyRoles;
    }
    if (this._principalDomainFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalDomainFilter = this._principalDomainFilter;
    }
    if (this._reviewEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewEnabled = this._reviewEnabled;
    }
    if (this._selfRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfRenew = this._selfRenew;
    }
    if (this._selfRenewMins !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfRenewMins = this._selfRenewMins;
    }
    if (this._selfServe !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServe = this._selfServe;
    }
    if (this._signAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signAlgorithm = this._signAlgorithm;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._trust !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust;
    }
    if (this._userAuthorityExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAuthorityExpiration = this._userAuthorityExpiration;
    }
    if (this._userAuthorityFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAuthorityFilter = this._userAuthorityFilter;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAthenzRolesRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditEnabled = undefined;
      this._deleteProtection = undefined;
      this._description = undefined;
      this._domain = undefined;
      this._lastReviewedDate = undefined;
      this._name = undefined;
      this._notifyDetails = undefined;
      this._notifyRoles = undefined;
      this._principalDomainFilter = undefined;
      this._reviewEnabled = undefined;
      this._selfRenew = undefined;
      this._selfRenewMins = undefined;
      this._selfServe = undefined;
      this._signAlgorithm = undefined;
      this._tags = undefined;
      this._trust = undefined;
      this._userAuthorityExpiration = undefined;
      this._userAuthorityFilter = undefined;
      this._member.internalValue = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditEnabled = value.auditEnabled;
      this._deleteProtection = value.deleteProtection;
      this._description = value.description;
      this._domain = value.domain;
      this._lastReviewedDate = value.lastReviewedDate;
      this._name = value.name;
      this._notifyDetails = value.notifyDetails;
      this._notifyRoles = value.notifyRoles;
      this._principalDomainFilter = value.principalDomainFilter;
      this._reviewEnabled = value.reviewEnabled;
      this._selfRenew = value.selfRenew;
      this._selfRenewMins = value.selfRenewMins;
      this._selfServe = value.selfServe;
      this._signAlgorithm = value.signAlgorithm;
      this._tags = value.tags;
      this._trust = value.trust;
      this._userAuthorityExpiration = value.userAuthorityExpiration;
      this._userAuthorityFilter = value.userAuthorityFilter;
      this._member.internalValue = value.member;
      this._settings.internalValue = value.settings;
    }
  }

  // audit_enabled - computed: false, optional: true, required: false
  private _auditEnabled?: boolean | cdktf.IResolvable; 
  public get auditEnabled() {
    return this.getBooleanAttribute('audit_enabled');
  }
  public set auditEnabled(value: boolean | cdktf.IResolvable) {
    this._auditEnabled = value;
  }
  public resetAuditEnabled() {
    this._auditEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditEnabledInput() {
    return this._auditEnabled;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
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

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // last_reviewed_date - computed: false, optional: true, required: false
  private _lastReviewedDate?: string; 
  public get lastReviewedDate() {
    return this.getStringAttribute('last_reviewed_date');
  }
  public set lastReviewedDate(value: string) {
    this._lastReviewedDate = value;
  }
  public resetLastReviewedDate() {
    this._lastReviewedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastReviewedDateInput() {
    return this._lastReviewedDate;
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

  // notify_details - computed: false, optional: true, required: false
  private _notifyDetails?: string; 
  public get notifyDetails() {
    return this.getStringAttribute('notify_details');
  }
  public set notifyDetails(value: string) {
    this._notifyDetails = value;
  }
  public resetNotifyDetails() {
    this._notifyDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDetailsInput() {
    return this._notifyDetails;
  }

  // notify_roles - computed: false, optional: true, required: false
  private _notifyRoles?: string; 
  public get notifyRoles() {
    return this.getStringAttribute('notify_roles');
  }
  public set notifyRoles(value: string) {
    this._notifyRoles = value;
  }
  public resetNotifyRoles() {
    this._notifyRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyRolesInput() {
    return this._notifyRoles;
  }

  // principal_domain_filter - computed: false, optional: true, required: false
  private _principalDomainFilter?: string; 
  public get principalDomainFilter() {
    return this.getStringAttribute('principal_domain_filter');
  }
  public set principalDomainFilter(value: string) {
    this._principalDomainFilter = value;
  }
  public resetPrincipalDomainFilter() {
    this._principalDomainFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalDomainFilterInput() {
    return this._principalDomainFilter;
  }

  // review_enabled - computed: false, optional: true, required: false
  private _reviewEnabled?: boolean | cdktf.IResolvable; 
  public get reviewEnabled() {
    return this.getBooleanAttribute('review_enabled');
  }
  public set reviewEnabled(value: boolean | cdktf.IResolvable) {
    this._reviewEnabled = value;
  }
  public resetReviewEnabled() {
    this._reviewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewEnabledInput() {
    return this._reviewEnabled;
  }

  // self_renew - computed: false, optional: true, required: false
  private _selfRenew?: boolean | cdktf.IResolvable; 
  public get selfRenew() {
    return this.getBooleanAttribute('self_renew');
  }
  public set selfRenew(value: boolean | cdktf.IResolvable) {
    this._selfRenew = value;
  }
  public resetSelfRenew() {
    this._selfRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfRenewInput() {
    return this._selfRenew;
  }

  // self_renew_mins - computed: false, optional: true, required: false
  private _selfRenewMins?: number; 
  public get selfRenewMins() {
    return this.getNumberAttribute('self_renew_mins');
  }
  public set selfRenewMins(value: number) {
    this._selfRenewMins = value;
  }
  public resetSelfRenewMins() {
    this._selfRenewMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfRenewMinsInput() {
    return this._selfRenewMins;
  }

  // self_serve - computed: false, optional: true, required: false
  private _selfServe?: boolean | cdktf.IResolvable; 
  public get selfServe() {
    return this.getBooleanAttribute('self_serve');
  }
  public set selfServe(value: boolean | cdktf.IResolvable) {
    this._selfServe = value;
  }
  public resetSelfServe() {
    this._selfServe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServeInput() {
    return this._selfServe;
  }

  // sign_algorithm - computed: false, optional: true, required: false
  private _signAlgorithm?: string; 
  public get signAlgorithm() {
    return this.getStringAttribute('sign_algorithm');
  }
  public set signAlgorithm(value: string) {
    this._signAlgorithm = value;
  }
  public resetSignAlgorithm() {
    this._signAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAlgorithmInput() {
    return this._signAlgorithm;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // trust - computed: false, optional: true, required: false
  private _trust?: string; 
  public get trust() {
    return this.getStringAttribute('trust');
  }
  public set trust(value: string) {
    this._trust = value;
  }
  public resetTrust() {
    this._trust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust;
  }

  // user_authority_expiration - computed: false, optional: true, required: false
  private _userAuthorityExpiration?: string; 
  public get userAuthorityExpiration() {
    return this.getStringAttribute('user_authority_expiration');
  }
  public set userAuthorityExpiration(value: string) {
    this._userAuthorityExpiration = value;
  }
  public resetUserAuthorityExpiration() {
    this._userAuthorityExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorityExpirationInput() {
    return this._userAuthorityExpiration;
  }

  // user_authority_filter - computed: false, optional: true, required: false
  private _userAuthorityFilter?: string; 
  public get userAuthorityFilter() {
    return this.getStringAttribute('user_authority_filter');
  }
  public set userAuthorityFilter(value: string) {
    this._userAuthorityFilter = value;
  }
  public resetUserAuthorityFilter() {
    this._userAuthorityFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorityFilterInput() {
    return this._userAuthorityFilter;
  }

  // member - computed: false, optional: true, required: false
  private _member = new DataAthenzRolesRolesMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: DataAthenzRolesRolesMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DataAthenzRolesRolesSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DataAthenzRolesRolesSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class DataAthenzRolesRolesList extends cdktf.ComplexList {
  public internalValue? : DataAthenzRolesRoles[] | cdktf.IResolvable

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
  public get(index: number): DataAthenzRolesRolesOutputReference {
    return new DataAthenzRolesRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles athenz_roles}
*/
export class DataAthenzRoles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "athenz_roles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAthenzRoles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAthenzRoles to import
  * @param importFromId The id of the existing DataAthenzRoles that should be imported. Refer to the {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAthenzRoles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "athenz_roles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/data-sources/roles athenz_roles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAthenzRolesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAthenzRolesConfig) {
    super(scope, id, {
      terraformResourceType: 'athenz_roles',
      terraformGeneratorMetadata: {
        providerName: 'athenz',
        providerVersion: '1.0.49',
        providerVersionConstraint: '1.0.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._includeMembers = config.includeMembers;
    this._tagKey = config.tagKey;
    this._tagValue = config.tagValue;
    this._roles.internalValue = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // include_members - computed: false, optional: true, required: false
  private _includeMembers?: boolean | cdktf.IResolvable; 
  public get includeMembers() {
    return this.getBooleanAttribute('include_members');
  }
  public set includeMembers(value: boolean | cdktf.IResolvable) {
    this._includeMembers = value;
  }
  public resetIncludeMembers() {
    this._includeMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMembersInput() {
    return this._includeMembers;
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataAthenzRolesRolesList(this, "roles", true);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataAthenzRolesRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      include_members: cdktf.booleanToTerraform(this._includeMembers),
      tag_key: cdktf.stringToTerraform(this._tagKey),
      tag_value: cdktf.stringToTerraform(this._tagValue),
      roles: cdktf.listMapper(dataAthenzRolesRolesToTerraform, true)(this._roles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      include_members: {
        value: cdktf.booleanToHclTerraform(this._includeMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_key: {
        value: cdktf.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_value: {
        value: cdktf.stringToHclTerraform(this._tagValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(dataAthenzRolesRolesToHclTerraform, true)(this._roles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAthenzRolesRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
