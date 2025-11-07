// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgOidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access token endpoint of the OpenID Connect Identity Provider. If 'wellknown_endpoint' is set, this attribute overrides the obtained access token endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#access_token_endpoint OrgOidc#access_token_endpoint}
  */
  readonly accessTokenEndpoint?: string;
  /**
  * Client ID to use when talking to the OpenID Connect Identity Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#client_id OrgOidc#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret to use when talking to the OpenID Connect Identity Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#client_secret OrgOidc#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Enables or disables OpenID Connect authentication for the specified Organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#enabled OrgOidc#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#id OrgOidc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The issuer identifier of the OpenID Connect Identity Provider. If 'wellknown_endpoint' is set, this attribute overrides the obtained issuer identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#issuer_id OrgOidc#issuer_id}
  */
  readonly issuerId?: string;
  /**
  * Defines the expiration period of the key, only when 'key_refresh_strategy=EXPIRE_AFTER'. Maximum is 24 hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#key_expire_duration_hours OrgOidc#key_expire_duration_hours}
  */
  readonly keyExpireDurationHours?: number;
  /**
  * Endpoint used to refresh the keys. If 'wellknown_endpoint' is set, then this argumentwill override the obtained endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#key_refresh_endpoint OrgOidc#key_refresh_endpoint}
  */
  readonly keyRefreshEndpoint?: string;
  /**
  * Defines the frequency of key refresh. Maximum is 720 hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#key_refresh_period_hours OrgOidc#key_refresh_period_hours}
  */
  readonly keyRefreshPeriodHours?: number;
  /**
  * Defines the strategy of key refresh
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#key_refresh_strategy OrgOidc#key_refresh_strategy}
  */
  readonly keyRefreshStrategy?: string;
  /**
  * The maximum clock skew is the maximum allowable time difference between the client and server. This time compensates for any small-time differences in the timestamps when verifying tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#max_clock_skew_seconds OrgOidc#max_clock_skew_seconds}
  */
  readonly maxClockSkewSeconds?: number;
  /**
  * ID of the Organization that will have the OpenID Connect settings configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#org_id OrgOidc#org_id}
  */
  readonly orgId: string;
  /**
  * If you want to combine claims from 'userinfo_endpoint' and the ID Token, set this to 'true'. The identity providers do not provide all the required claims set in 'userinfo_endpoint'.By setting this argument to 'true', VMware Cloud Director can fetch and consume claims from both sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#prefer_id_token OrgOidc#prefer_id_token}
  */
  readonly preferIdToken?: boolean | cdktf.IResolvable;
  /**
  * A set of scopes to use with the OpenID Connect provider. They are used to authorize access to user details, by defining the permissions that the access tokens have to access user information. If 'wellknown_endpoint' is set, this attribute overrides the obtained scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#scopes OrgOidc#scopes}
  */
  readonly scopes?: string[];
  /**
  * Customizes the label of the UI button of the login screen. Only available since VCD 10.5.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#ui_button_label OrgOidc#ui_button_label}
  */
  readonly uiButtonLabel?: string;
  /**
  * The user authorization endpoint of the OpenID Connect Identity Provider. If 'wellknown_endpoint' is set, this attribute overrides the obtained user authorization endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#user_authorization_endpoint OrgOidc#user_authorization_endpoint}
  */
  readonly userAuthorizationEndpoint?: string;
  /**
  * The user info endpoint of the OpenID Connect Identity Provider. If 'wellknown_endpoint' is set, this attribute overrides the obtained user info endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#userinfo_endpoint OrgOidc#userinfo_endpoint}
  */
  readonly userinfoEndpoint?: string;
  /**
  * Endpoint from the OpenID Connect Identity Provider that serves all the configuration values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#wellknown_endpoint OrgOidc#wellknown_endpoint}
  */
  readonly wellknownEndpoint?: string;
  /**
  * claims_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#claims_mapping OrgOidc#claims_mapping}
  */
  readonly claimsMapping?: OrgOidcClaimsMapping;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#key OrgOidc#key}
  */
  readonly key?: OrgOidcKey[] | cdktf.IResolvable;
}
export interface OrgOidcClaimsMapping {
  /**
  * Email claim mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#email OrgOidc#email}
  */
  readonly email?: string;
  /**
  * First name claim mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#first_name OrgOidc#first_name}
  */
  readonly firstName?: string;
  /**
  * Full name claim mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#full_name OrgOidc#full_name}
  */
  readonly fullName?: string;
  /**
  * Groups claim mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#groups OrgOidc#groups}
  */
  readonly groups?: string;
  /**
  * Last name claim mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#last_name OrgOidc#last_name}
  */
  readonly lastName?: string;
  /**
  * Roles claim mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#roles OrgOidc#roles}
  */
  readonly roles?: string;
  /**
  * Subject claim mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#subject OrgOidc#subject}
  */
  readonly subject?: string;
}

export function orgOidcClaimsMappingToTerraform(struct?: OrgOidcClaimsMappingOutputReference | OrgOidcClaimsMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    full_name: cdktf.stringToTerraform(struct!.fullName),
    groups: cdktf.stringToTerraform(struct!.groups),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    roles: cdktf.stringToTerraform(struct!.roles),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function orgOidcClaimsMappingToHclTerraform(struct?: OrgOidcClaimsMappingOutputReference | OrgOidcClaimsMapping): any {
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
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_name: {
      value: cdktf.stringToHclTerraform(struct!.fullName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.stringToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.stringToHclTerraform(struct!.roles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgOidcClaimsMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgOidcClaimsMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._fullName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgOidcClaimsMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._firstName = undefined;
      this._fullName = undefined;
      this._groups = undefined;
      this._lastName = undefined;
      this._roles = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._firstName = value.firstName;
      this._fullName = value.fullName;
      this._groups = value.groups;
      this._lastName = value.lastName;
      this._roles = value.roles;
      this._subject = value.subject;
    }
  }

  // email - computed: true, optional: true, required: false
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

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // full_name - computed: true, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string; 
  public get roles() {
    return this.getStringAttribute('roles');
  }
  public set roles(value: string) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface OrgOidcKey {
  /**
  * Algorithm of the key, either RSA or EC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#algorithm OrgOidc#algorithm}
  */
  readonly algorithm: string;
  /**
  * The certificate contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#certificate OrgOidc#certificate}
  */
  readonly certificate: string;
  /**
  * Expiration date for the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#expiration_date OrgOidc#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * ID of the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#id OrgOidc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function orgOidcKeyToTerraform(struct?: OrgOidcKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    expiration_date: cdktf.stringToTerraform(struct!.expirationDate),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function orgOidcKeyToHclTerraform(struct?: OrgOidcKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_date: {
      value: cdktf.stringToHclTerraform(struct!.expirationDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class OrgOidcKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgOidcKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._expirationDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationDate = this._expirationDate;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgOidcKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._certificate = undefined;
      this._expirationDate = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._certificate = value.certificate;
      this._expirationDate = value.expirationDate;
      this._id = value.id;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class OrgOidcKeyList extends cdktf.ComplexList {
  public internalValue? : OrgOidcKey[] | cdktf.IResolvable

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
  public get(index: number): OrgOidcKeyOutputReference {
    return new OrgOidcKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc vcd_org_oidc}
*/
export class OrgOidc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org_oidc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgOidc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgOidc to import
  * @param importFromId The id of the existing OrgOidc that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgOidc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org_oidc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_oidc vcd_org_oidc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgOidcConfig
  */
  public constructor(scope: Construct, id: string, config: OrgOidcConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_org_oidc',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenEndpoint = config.accessTokenEndpoint;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._enabled = config.enabled;
    this._id = config.id;
    this._issuerId = config.issuerId;
    this._keyExpireDurationHours = config.keyExpireDurationHours;
    this._keyRefreshEndpoint = config.keyRefreshEndpoint;
    this._keyRefreshPeriodHours = config.keyRefreshPeriodHours;
    this._keyRefreshStrategy = config.keyRefreshStrategy;
    this._maxClockSkewSeconds = config.maxClockSkewSeconds;
    this._orgId = config.orgId;
    this._preferIdToken = config.preferIdToken;
    this._scopes = config.scopes;
    this._uiButtonLabel = config.uiButtonLabel;
    this._userAuthorizationEndpoint = config.userAuthorizationEndpoint;
    this._userinfoEndpoint = config.userinfoEndpoint;
    this._wellknownEndpoint = config.wellknownEndpoint;
    this._claimsMapping.internalValue = config.claimsMapping;
    this._key.internalValue = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_endpoint - computed: true, optional: true, required: false
  private _accessTokenEndpoint?: string; 
  public get accessTokenEndpoint() {
    return this.getStringAttribute('access_token_endpoint');
  }
  public set accessTokenEndpoint(value: string) {
    this._accessTokenEndpoint = value;
  }
  public resetAccessTokenEndpoint() {
    this._accessTokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenEndpointInput() {
    return this._accessTokenEndpoint;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // issuer_id - computed: true, optional: true, required: false
  private _issuerId?: string; 
  public get issuerId() {
    return this.getStringAttribute('issuer_id');
  }
  public set issuerId(value: string) {
    this._issuerId = value;
  }
  public resetIssuerId() {
    this._issuerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerIdInput() {
    return this._issuerId;
  }

  // key_expire_duration_hours - computed: false, optional: true, required: false
  private _keyExpireDurationHours?: number; 
  public get keyExpireDurationHours() {
    return this.getNumberAttribute('key_expire_duration_hours');
  }
  public set keyExpireDurationHours(value: number) {
    this._keyExpireDurationHours = value;
  }
  public resetKeyExpireDurationHours() {
    this._keyExpireDurationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyExpireDurationHoursInput() {
    return this._keyExpireDurationHours;
  }

  // key_refresh_endpoint - computed: true, optional: true, required: false
  private _keyRefreshEndpoint?: string; 
  public get keyRefreshEndpoint() {
    return this.getStringAttribute('key_refresh_endpoint');
  }
  public set keyRefreshEndpoint(value: string) {
    this._keyRefreshEndpoint = value;
  }
  public resetKeyRefreshEndpoint() {
    this._keyRefreshEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefreshEndpointInput() {
    return this._keyRefreshEndpoint;
  }

  // key_refresh_period_hours - computed: false, optional: true, required: false
  private _keyRefreshPeriodHours?: number; 
  public get keyRefreshPeriodHours() {
    return this.getNumberAttribute('key_refresh_period_hours');
  }
  public set keyRefreshPeriodHours(value: number) {
    this._keyRefreshPeriodHours = value;
  }
  public resetKeyRefreshPeriodHours() {
    this._keyRefreshPeriodHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefreshPeriodHoursInput() {
    return this._keyRefreshPeriodHours;
  }

  // key_refresh_strategy - computed: false, optional: true, required: false
  private _keyRefreshStrategy?: string; 
  public get keyRefreshStrategy() {
    return this.getStringAttribute('key_refresh_strategy');
  }
  public set keyRefreshStrategy(value: string) {
    this._keyRefreshStrategy = value;
  }
  public resetKeyRefreshStrategy() {
    this._keyRefreshStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefreshStrategyInput() {
    return this._keyRefreshStrategy;
  }

  // max_clock_skew_seconds - computed: false, optional: true, required: false
  private _maxClockSkewSeconds?: number; 
  public get maxClockSkewSeconds() {
    return this.getNumberAttribute('max_clock_skew_seconds');
  }
  public set maxClockSkewSeconds(value: number) {
    this._maxClockSkewSeconds = value;
  }
  public resetMaxClockSkewSeconds() {
    this._maxClockSkewSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClockSkewSecondsInput() {
    return this._maxClockSkewSeconds;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // prefer_id_token - computed: false, optional: true, required: false
  private _preferIdToken?: boolean | cdktf.IResolvable; 
  public get preferIdToken() {
    return this.getBooleanAttribute('prefer_id_token');
  }
  public set preferIdToken(value: boolean | cdktf.IResolvable) {
    this._preferIdToken = value;
  }
  public resetPreferIdToken() {
    this._preferIdToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferIdTokenInput() {
    return this._preferIdToken;
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // ui_button_label - computed: false, optional: true, required: false
  private _uiButtonLabel?: string; 
  public get uiButtonLabel() {
    return this.getStringAttribute('ui_button_label');
  }
  public set uiButtonLabel(value: string) {
    this._uiButtonLabel = value;
  }
  public resetUiButtonLabel() {
    this._uiButtonLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiButtonLabelInput() {
    return this._uiButtonLabel;
  }

  // user_authorization_endpoint - computed: true, optional: true, required: false
  private _userAuthorizationEndpoint?: string; 
  public get userAuthorizationEndpoint() {
    return this.getStringAttribute('user_authorization_endpoint');
  }
  public set userAuthorizationEndpoint(value: string) {
    this._userAuthorizationEndpoint = value;
  }
  public resetUserAuthorizationEndpoint() {
    this._userAuthorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorizationEndpointInput() {
    return this._userAuthorizationEndpoint;
  }

  // userinfo_endpoint - computed: true, optional: true, required: false
  private _userinfoEndpoint?: string; 
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }
  public set userinfoEndpoint(value: string) {
    this._userinfoEndpoint = value;
  }
  public resetUserinfoEndpoint() {
    this._userinfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoEndpointInput() {
    return this._userinfoEndpoint;
  }

  // wellknown_endpoint - computed: false, optional: true, required: false
  private _wellknownEndpoint?: string; 
  public get wellknownEndpoint() {
    return this.getStringAttribute('wellknown_endpoint');
  }
  public set wellknownEndpoint(value: string) {
    this._wellknownEndpoint = value;
  }
  public resetWellknownEndpoint() {
    this._wellknownEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellknownEndpointInput() {
    return this._wellknownEndpoint;
  }

  // claims_mapping - computed: false, optional: true, required: false
  private _claimsMapping = new OrgOidcClaimsMappingOutputReference(this, "claims_mapping");
  public get claimsMapping() {
    return this._claimsMapping;
  }
  public putClaimsMapping(value: OrgOidcClaimsMapping) {
    this._claimsMapping.internalValue = value;
  }
  public resetClaimsMapping() {
    this._claimsMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsMappingInput() {
    return this._claimsMapping.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new OrgOidcKeyList(this, "key", true);
  public get key() {
    return this._key;
  }
  public putKey(value: OrgOidcKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_endpoint: cdktf.stringToTerraform(this._accessTokenEndpoint),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      issuer_id: cdktf.stringToTerraform(this._issuerId),
      key_expire_duration_hours: cdktf.numberToTerraform(this._keyExpireDurationHours),
      key_refresh_endpoint: cdktf.stringToTerraform(this._keyRefreshEndpoint),
      key_refresh_period_hours: cdktf.numberToTerraform(this._keyRefreshPeriodHours),
      key_refresh_strategy: cdktf.stringToTerraform(this._keyRefreshStrategy),
      max_clock_skew_seconds: cdktf.numberToTerraform(this._maxClockSkewSeconds),
      org_id: cdktf.stringToTerraform(this._orgId),
      prefer_id_token: cdktf.booleanToTerraform(this._preferIdToken),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      ui_button_label: cdktf.stringToTerraform(this._uiButtonLabel),
      user_authorization_endpoint: cdktf.stringToTerraform(this._userAuthorizationEndpoint),
      userinfo_endpoint: cdktf.stringToTerraform(this._userinfoEndpoint),
      wellknown_endpoint: cdktf.stringToTerraform(this._wellknownEndpoint),
      claims_mapping: orgOidcClaimsMappingToTerraform(this._claimsMapping.internalValue),
      key: cdktf.listMapper(orgOidcKeyToTerraform, true)(this._key.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_endpoint: {
        value: cdktf.stringToHclTerraform(this._accessTokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_id: {
        value: cdktf.stringToHclTerraform(this._issuerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_expire_duration_hours: {
        value: cdktf.numberToHclTerraform(this._keyExpireDurationHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_refresh_endpoint: {
        value: cdktf.stringToHclTerraform(this._keyRefreshEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_refresh_period_hours: {
        value: cdktf.numberToHclTerraform(this._keyRefreshPeriodHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_refresh_strategy: {
        value: cdktf.stringToHclTerraform(this._keyRefreshStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_clock_skew_seconds: {
        value: cdktf.numberToHclTerraform(this._maxClockSkewSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefer_id_token: {
        value: cdktf.booleanToHclTerraform(this._preferIdToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ui_button_label: {
        value: cdktf.stringToHclTerraform(this._uiButtonLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_authorization_endpoint: {
        value: cdktf.stringToHclTerraform(this._userAuthorizationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userinfo_endpoint: {
        value: cdktf.stringToHclTerraform(this._userinfoEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wellknown_endpoint: {
        value: cdktf.stringToHclTerraform(this._wellknownEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      claims_mapping: {
        value: orgOidcClaimsMappingToHclTerraform(this._claimsMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgOidcClaimsMappingList",
      },
      key: {
        value: cdktf.listMapperHcl(orgOidcKeyToHclTerraform, true)(this._key.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgOidcKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
