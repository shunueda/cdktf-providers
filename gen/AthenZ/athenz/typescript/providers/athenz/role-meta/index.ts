// https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleMetaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#audit_enabled RoleMeta#audit_enabled}
  */
  readonly auditEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#audit_ref RoleMeta#audit_ref}
  */
  readonly auditRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#cert_expiry_mins RoleMeta#cert_expiry_mins}
  */
  readonly certExpiryMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#delete_protection RoleMeta#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#description RoleMeta#description}
  */
  readonly description?: string;
  /**
  * Name of the domain that role belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#domain RoleMeta#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#group_expiry_days RoleMeta#group_expiry_days}
  */
  readonly groupExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#group_review_days RoleMeta#group_review_days}
  */
  readonly groupReviewDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#id RoleMeta#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#max_members RoleMeta#max_members}
  */
  readonly maxMembers?: number;
  /**
  * Name of the standard role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#name RoleMeta#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#notify_details RoleMeta#notify_details}
  */
  readonly notifyDetails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#notify_roles RoleMeta#notify_roles}
  */
  readonly notifyRoles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#principal_domain_filter RoleMeta#principal_domain_filter}
  */
  readonly principalDomainFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#resource_state RoleMeta#resource_state}
  */
  readonly resourceState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#review_enabled RoleMeta#review_enabled}
  */
  readonly reviewEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#self_renew RoleMeta#self_renew}
  */
  readonly selfRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#self_renew_mins RoleMeta#self_renew_mins}
  */
  readonly selfRenewMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#self_serve RoleMeta#self_serve}
  */
  readonly selfServe?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#service_expiry_days RoleMeta#service_expiry_days}
  */
  readonly serviceExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#service_review_days RoleMeta#service_review_days}
  */
  readonly serviceReviewDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#sign_algorithm RoleMeta#sign_algorithm}
  */
  readonly signAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#tags RoleMeta#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#token_expiry_mins RoleMeta#token_expiry_mins}
  */
  readonly tokenExpiryMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#user_authority_expiration RoleMeta#user_authority_expiration}
  */
  readonly userAuthorityExpiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#user_authority_filter RoleMeta#user_authority_filter}
  */
  readonly userAuthorityFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#user_expiry_days RoleMeta#user_expiry_days}
  */
  readonly userExpiryDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#user_review_days RoleMeta#user_review_days}
  */
  readonly userReviewDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta athenz_role_meta}
*/
export class RoleMeta extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "athenz_role_meta";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleMeta resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleMeta to import
  * @param importFromId The id of the existing RoleMeta that should be imported. Refer to the {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleMeta to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "athenz_role_meta", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/athenz/athenz/1.0.49/docs/resources/role_meta athenz_role_meta} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleMetaConfig
  */
  public constructor(scope: Construct, id: string, config: RoleMetaConfig) {
    super(scope, id, {
      terraformResourceType: 'athenz_role_meta',
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
    this._certExpiryMins = config.certExpiryMins;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._domain = config.domain;
    this._groupExpiryDays = config.groupExpiryDays;
    this._groupReviewDays = config.groupReviewDays;
    this._id = config.id;
    this._maxMembers = config.maxMembers;
    this._name = config.name;
    this._notifyDetails = config.notifyDetails;
    this._notifyRoles = config.notifyRoles;
    this._principalDomainFilter = config.principalDomainFilter;
    this._resourceState = config.resourceState;
    this._reviewEnabled = config.reviewEnabled;
    this._selfRenew = config.selfRenew;
    this._selfRenewMins = config.selfRenewMins;
    this._selfServe = config.selfServe;
    this._serviceExpiryDays = config.serviceExpiryDays;
    this._serviceReviewDays = config.serviceReviewDays;
    this._signAlgorithm = config.signAlgorithm;
    this._tags = config.tags;
    this._tokenExpiryMins = config.tokenExpiryMins;
    this._userAuthorityExpiration = config.userAuthorityExpiration;
    this._userAuthorityFilter = config.userAuthorityFilter;
    this._userExpiryDays = config.userExpiryDays;
    this._userReviewDays = config.userReviewDays;
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

  // resource_state - computed: false, optional: true, required: false
  private _resourceState?: number; 
  public get resourceState() {
    return this.getNumberAttribute('resource_state');
  }
  public set resourceState(value: number) {
    this._resourceState = value;
  }
  public resetResourceState() {
    this._resourceState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceStateInput() {
    return this._resourceState;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_enabled: cdktf.booleanToTerraform(this._auditEnabled),
      audit_ref: cdktf.stringToTerraform(this._auditRef),
      cert_expiry_mins: cdktf.numberToTerraform(this._certExpiryMins),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      domain: cdktf.stringToTerraform(this._domain),
      group_expiry_days: cdktf.numberToTerraform(this._groupExpiryDays),
      group_review_days: cdktf.numberToTerraform(this._groupReviewDays),
      id: cdktf.stringToTerraform(this._id),
      max_members: cdktf.numberToTerraform(this._maxMembers),
      name: cdktf.stringToTerraform(this._name),
      notify_details: cdktf.stringToTerraform(this._notifyDetails),
      notify_roles: cdktf.stringToTerraform(this._notifyRoles),
      principal_domain_filter: cdktf.stringToTerraform(this._principalDomainFilter),
      resource_state: cdktf.numberToTerraform(this._resourceState),
      review_enabled: cdktf.booleanToTerraform(this._reviewEnabled),
      self_renew: cdktf.booleanToTerraform(this._selfRenew),
      self_renew_mins: cdktf.numberToTerraform(this._selfRenewMins),
      self_serve: cdktf.booleanToTerraform(this._selfServe),
      service_expiry_days: cdktf.numberToTerraform(this._serviceExpiryDays),
      service_review_days: cdktf.numberToTerraform(this._serviceReviewDays),
      sign_algorithm: cdktf.stringToTerraform(this._signAlgorithm),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      token_expiry_mins: cdktf.numberToTerraform(this._tokenExpiryMins),
      user_authority_expiration: cdktf.stringToTerraform(this._userAuthorityExpiration),
      user_authority_filter: cdktf.stringToTerraform(this._userAuthorityFilter),
      user_expiry_days: cdktf.numberToTerraform(this._userExpiryDays),
      user_review_days: cdktf.numberToTerraform(this._userReviewDays),
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
      cert_expiry_mins: {
        value: cdktf.numberToHclTerraform(this._certExpiryMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      group_expiry_days: {
        value: cdktf.numberToHclTerraform(this._groupExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_review_days: {
        value: cdktf.numberToHclTerraform(this._groupReviewDays),
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
      max_members: {
        value: cdktf.numberToHclTerraform(this._maxMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      resource_state: {
        value: cdktf.numberToHclTerraform(this._resourceState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      service_expiry_days: {
        value: cdktf.numberToHclTerraform(this._serviceExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_review_days: {
        value: cdktf.numberToHclTerraform(this._serviceReviewDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      token_expiry_mins: {
        value: cdktf.numberToHclTerraform(this._tokenExpiryMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      user_expiry_days: {
        value: cdktf.numberToHclTerraform(this._userExpiryDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_review_days: {
        value: cdktf.numberToHclTerraform(this._userReviewDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
