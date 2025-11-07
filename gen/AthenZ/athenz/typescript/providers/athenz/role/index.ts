// https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#audit_enabled Role#audit_enabled}
  */
  readonly auditEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#audit_ref Role#audit_ref}
  */
  readonly auditRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#delete_protection Role#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#description Role#description}
  */
  readonly description?: string;
  /**
  * Name of the domain that role belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#domain Role#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#id Role#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The last reviewed timestamp for the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#last_reviewed_date Role#last_reviewed_date}
  */
  readonly lastReviewedDate?: string;
  /**
  * Athenz principal to be added as members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#members Role#members}
  */
  readonly members?: string[];
  /**
  * Name of the standard group role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#notify_details Role#notify_details}
  */
  readonly notifyDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#notify_roles Role#notify_roles}
  */
  readonly notifyRoles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#principal_domain_filter Role#principal_domain_filter}
  */
  readonly principalDomainFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#review_enabled Role#review_enabled}
  */
  readonly reviewEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#self_renew Role#self_renew}
  */
  readonly selfRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#self_renew_mins Role#self_renew_mins}
  */
  readonly selfRenewMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#self_serve Role#self_serve}
  */
  readonly selfServe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#sign_algorithm Role#sign_algorithm}
  */
  readonly signAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#tags Role#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The domain, which this role is trusted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#trust Role#trust}
  */
  readonly trust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#user_authority_expiration Role#user_authority_expiration}
  */
  readonly userAuthorityExpiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#user_authority_filter Role#user_authority_filter}
  */
  readonly userAuthorityFilter?: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#member Role#member}
  */
  readonly member?: RoleMember[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#settings Role#settings}
  */
  readonly settings?: RoleSettings;
}
export interface RoleMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#expiration Role#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#review Role#review}
  */
  readonly review?: string;
}

export function roleMemberToTerraform(struct?: RoleMember | cdktf.IResolvable): any {
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


export function roleMemberToHclTerraform(struct?: RoleMember | cdktf.IResolvable): any {
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

export class RoleMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RoleMember | cdktf.IResolvable | undefined) {
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

export class RoleMemberList extends cdktf.ComplexList {
  public internalValue? : RoleMember[] | cdktf.IResolvable

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
  public get(index: number): RoleMemberOutputReference {
    return new RoleMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#cert_expiry_mins Role#cert_expiry_mins}
  */
  readonly certExpiryMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#group_expiry_days Role#group_expiry_days}
  */
  readonly groupExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#group_review_days Role#group_review_days}
  */
  readonly groupReviewDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#max_members Role#max_members}
  */
  readonly maxMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#service_expiry_days Role#service_expiry_days}
  */
  readonly serviceExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#service_review_days Role#service_review_days}
  */
  readonly serviceReviewDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#token_expiry_mins Role#token_expiry_mins}
  */
  readonly tokenExpiryMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#user_expiry_days Role#user_expiry_days}
  */
  readonly userExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#user_review_days Role#user_review_days}
  */
  readonly userReviewDays?: number;
}

export function roleSettingsToTerraform(struct?: RoleSettingsOutputReference | RoleSettings): any {
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


export function roleSettingsToHclTerraform(struct?: RoleSettingsOutputReference | RoleSettings): any {
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

export class RoleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RoleSettings | undefined {
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

  public set internalValue(value: RoleSettings | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role athenz_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "athenz_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "athenz_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role athenz_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'athenz_role',
      terraformGeneratorMetadata: {
        providerName: 'athenz',
        providerVersion: '1.0.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditEnabled = config.auditEnabled;
    this._auditRef = config.auditRef;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._domain = config.domain;
    this._id = config.id;
    this._lastReviewedDate = config.lastReviewedDate;
    this._members = config.members;
    this._name = config.name;
    this._notifyDetails = config.notifyDetails;
    this._notifyRoles = config.notifyRoles;
    this._principalDomainFilter = config.principalDomainFilter;
    this._reviewEnabled = config.reviewEnabled;
    this._selfRenew = config.selfRenew;
    this._selfRenewMins = config.selfRenewMins;
    this._selfServe = config.selfServe;
    this._signAlgorithm = config.signAlgorithm;
    this._tags = config.tags;
    this._trust = config.trust;
    this._userAuthorityExpiration = config.userAuthorityExpiration;
    this._userAuthorityFilter = config.userAuthorityFilter;
    this._member.internalValue = config.member;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // audit_ref - computed: false, optional: true, required: false
  private _auditRef?: string; 
  public get auditRef() {
    return this.getStringAttribute('audit_ref');
  }
  public set auditRef(value: string) {
    this._auditRef = value;
  }
  public resetAuditRef() {
    this._auditRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditRefInput() {
    return this._auditRef;
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

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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
  private _member = new RoleMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: RoleMember[] | cdktf.IResolvable) {
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
  private _settings = new RoleSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: RoleSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_enabled: cdktf.booleanToTerraform(this._auditEnabled),
      audit_ref: cdktf.stringToTerraform(this._auditRef),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      last_reviewed_date: cdktf.stringToTerraform(this._lastReviewedDate),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      name: cdktf.stringToTerraform(this._name),
      notify_details: cdktf.stringToTerraform(this._notifyDetails),
      notify_roles: cdktf.stringToTerraform(this._notifyRoles),
      principal_domain_filter: cdktf.stringToTerraform(this._principalDomainFilter),
      review_enabled: cdktf.booleanToTerraform(this._reviewEnabled),
      self_renew: cdktf.booleanToTerraform(this._selfRenew),
      self_renew_mins: cdktf.numberToTerraform(this._selfRenewMins),
      self_serve: cdktf.booleanToTerraform(this._selfServe),
      sign_algorithm: cdktf.stringToTerraform(this._signAlgorithm),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      trust: cdktf.stringToTerraform(this._trust),
      user_authority_expiration: cdktf.stringToTerraform(this._userAuthorityExpiration),
      user_authority_filter: cdktf.stringToTerraform(this._userAuthorityFilter),
      member: cdktf.listMapper(roleMemberToTerraform, true)(this._member.internalValue),
      settings: roleSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_enabled: {
        value: cdktf.booleanToHclTerraform(this._auditEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audit_ref: {
        value: cdktf.stringToHclTerraform(this._auditRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      last_reviewed_date: {
        value: cdktf.stringToHclTerraform(this._lastReviewedDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_details: {
        value: cdktf.stringToHclTerraform(this._notifyDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_roles: {
        value: cdktf.stringToHclTerraform(this._notifyRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_domain_filter: {
        value: cdktf.stringToHclTerraform(this._principalDomainFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      review_enabled: {
        value: cdktf.booleanToHclTerraform(this._reviewEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      self_renew: {
        value: cdktf.booleanToHclTerraform(this._selfRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      self_renew_mins: {
        value: cdktf.numberToHclTerraform(this._selfRenewMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      self_serve: {
        value: cdktf.booleanToHclTerraform(this._selfServe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sign_algorithm: {
        value: cdktf.stringToHclTerraform(this._signAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      trust: {
        value: cdktf.stringToHclTerraform(this._trust),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_authority_expiration: {
        value: cdktf.stringToHclTerraform(this._userAuthorityExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_authority_filter: {
        value: cdktf.stringToHclTerraform(this._userAuthorityFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.listMapperHcl(roleMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleMemberList",
      },
      settings: {
        value: roleSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RoleSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
