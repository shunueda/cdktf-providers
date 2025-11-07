// https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#audit_enabled Group#audit_enabled}
  */
  readonly auditEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#audit_ref Group#audit_ref}
  */
  readonly auditRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#delete_protection Group#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Name of the domain that group belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#domain Group#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The last reviewed timestamp for the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#last_reviewed_date Group#last_reviewed_date}
  */
  readonly lastReviewedDate?: string;
  /**
  * Users or services to be added as members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#members Group#members}
  */
  readonly members?: string[];
  /**
  * Name of the standard group role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#notify_details Group#notify_details}
  */
  readonly notifyDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#notify_roles Group#notify_roles}
  */
  readonly notifyRoles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#principal_domain_filter Group#principal_domain_filter}
  */
  readonly principalDomainFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#review_enabled Group#review_enabled}
  */
  readonly reviewEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#self_renew Group#self_renew}
  */
  readonly selfRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#self_renew_mins Group#self_renew_mins}
  */
  readonly selfRenewMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#self_serve Group#self_serve}
  */
  readonly selfServe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#tags Group#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#user_authority_expiration Group#user_authority_expiration}
  */
  readonly userAuthorityExpiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#user_authority_filter Group#user_authority_filter}
  */
  readonly userAuthorityFilter?: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#member Group#member}
  */
  readonly member?: GroupMember[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#settings Group#settings}
  */
  readonly settings?: GroupSettings;
}
export interface GroupMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#expiration Group#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#name Group#name}
  */
  readonly name: string;
}

export function groupMemberToTerraform(struct?: GroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration: cdktf.stringToTerraform(struct!.expiration),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function groupMemberToHclTerraform(struct?: GroupMember | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupMember | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiration = undefined;
      this._name = undefined;
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
}

export class GroupMemberList extends cdktf.ComplexList {
  public internalValue? : GroupMember[] | cdktf.IResolvable

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
  public get(index: number): GroupMemberOutputReference {
    return new GroupMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#max_members Group#max_members}
  */
  readonly maxMembers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#service_expiry_days Group#service_expiry_days}
  */
  readonly serviceExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#user_expiry_days Group#user_expiry_days}
  */
  readonly userExpiryDays?: number;
}

export function groupSettingsToTerraform(struct?: GroupSettingsOutputReference | GroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_members: cdktf.numberToTerraform(struct!.maxMembers),
    service_expiry_days: cdktf.numberToTerraform(struct!.serviceExpiryDays),
    user_expiry_days: cdktf.numberToTerraform(struct!.userExpiryDays),
  }
}


export function groupSettingsToHclTerraform(struct?: GroupSettingsOutputReference | GroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    user_expiry_days: {
      value: cdktf.numberToHclTerraform(struct!.userExpiryDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMembers = this._maxMembers;
    }
    if (this._serviceExpiryDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceExpiryDays = this._serviceExpiryDays;
    }
    if (this._userExpiryDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.userExpiryDays = this._userExpiryDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxMembers = undefined;
      this._serviceExpiryDays = undefined;
      this._userExpiryDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxMembers = value.maxMembers;
      this._serviceExpiryDays = value.serviceExpiryDays;
      this._userExpiryDays = value.userExpiryDays;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group athenz_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "athenz_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "athenz_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/group athenz_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'athenz_group',
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
    this._tags = config.tags;
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
  private _member = new GroupMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: GroupMember[] | cdktf.IResolvable) {
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
  private _settings = new GroupSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: GroupSettings) {
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_authority_expiration: cdktf.stringToTerraform(this._userAuthorityExpiration),
      user_authority_filter: cdktf.stringToTerraform(this._userAuthorityFilter),
      member: cdktf.listMapper(groupMemberToTerraform, true)(this._member.internalValue),
      settings: groupSettingsToTerraform(this._settings.internalValue),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
        value: cdktf.listMapperHcl(groupMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupMemberList",
      },
      settings: {
        value: groupSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
