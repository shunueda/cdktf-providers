// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountAuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique id of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#account_id AccountAuthentication#account_id}
  */
  readonly accountId: string;
  /**
  * Team ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#auto_join_team_id AccountAuthentication#auto_join_team_id}
  */
  readonly autoJoinTeamId?: string;
  /**
  * Status of account authentication method. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#enabled AccountAuthentication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#id AccountAuthentication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the account authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#name AccountAuthentication#name}
  */
  readonly name: string;
  /**
  * SAML Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#saml_certificate AccountAuthentication#saml_certificate}
  */
  readonly samlCertificate?: string;
  /**
  * Digest algorithm. This is an advanced option that typically does not need to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#saml_digest_algorithm AccountAuthentication#saml_digest_algorithm}
  */
  readonly samlDigestAlgorithm?: string;
  /**
  * SAML Entity id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#saml_entity_id AccountAuthentication#saml_entity_id}
  */
  readonly samlEntityId?: string;
  /**
  * Set to 'true' to enable IdP initiated login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#saml_idp_login_allowed AccountAuthentication#saml_idp_login_allowed}
  */
  readonly samlIdpLoginAllowed?: boolean | cdktf.IResolvable;
  /**
  * SAML Idp URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#saml_idp_url AccountAuthentication#saml_idp_url}
  */
  readonly samlIdpUrl?: string;
  /**
  * Signature algorithm. This is an advanced option that typically does not need to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#saml_signature_algorithm AccountAuthentication#saml_signature_algorithm}
  */
  readonly samlSignatureAlgorithm?: string;
  /**
  * SAML server variant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#saml_variant AccountAuthentication#saml_variant}
  */
  readonly samlVariant?: string;
  /**
  * The account authentication type. The possible values are `internal` and `saml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#type AccountAuthentication#type}
  */
  readonly type: string;
  /**
  * saml_field_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#saml_field_mapping AccountAuthentication#saml_field_mapping}
  */
  readonly samlFieldMapping?: AccountAuthenticationSamlFieldMapping;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#timeouts AccountAuthentication#timeouts}
  */
  readonly timeouts?: AccountAuthenticationTimeouts;
}
export interface AccountAuthenticationSamlFieldMapping {
  /**
  * Field name for user email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#email AccountAuthentication#email}
  */
  readonly email?: string;
  /**
  * Field name for user's first name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#first_name AccountAuthentication#first_name}
  */
  readonly firstName?: string;
  /**
  * Field name for user's identity. This field must always exist in responses, and must be immutable and unique. Contents of this field are used to identify the user. Using user ID (such as unix user id) is highly recommended, as email address may change, requiring relinking user to Aiven user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#identity AccountAuthentication#identity}
  */
  readonly identity?: string;
  /**
  * Field name for user's last name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#last_name AccountAuthentication#last_name}
  */
  readonly lastName?: string;
  /**
  * Field name for user's full name. If specified, first_name and last_name mappings are ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#real_name AccountAuthentication#real_name}
  */
  readonly realName?: string;
}

export function accountAuthenticationSamlFieldMappingToTerraform(struct?: AccountAuthenticationSamlFieldMappingOutputReference | AccountAuthenticationSamlFieldMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    identity: cdktf.stringToTerraform(struct!.identity),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    real_name: cdktf.stringToTerraform(struct!.realName),
  }
}


export function accountAuthenticationSamlFieldMappingToHclTerraform(struct?: AccountAuthenticationSamlFieldMappingOutputReference | AccountAuthenticationSamlFieldMapping): any {
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
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
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
    real_name: {
      value: cdktf.stringToHclTerraform(struct!.realName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountAuthenticationSamlFieldMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccountAuthenticationSamlFieldMapping | undefined {
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
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._realName !== undefined) {
      hasAnyValues = true;
      internalValueResult.realName = this._realName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountAuthenticationSamlFieldMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._firstName = undefined;
      this._identity = undefined;
      this._lastName = undefined;
      this._realName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._firstName = value.firstName;
      this._identity = value.identity;
      this._lastName = value.lastName;
      this._realName = value.realName;
    }
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

  // first_name - computed: false, optional: true, required: false
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

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // last_name - computed: false, optional: true, required: false
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

  // real_name - computed: false, optional: true, required: false
  private _realName?: string; 
  public get realName() {
    return this.getStringAttribute('real_name');
  }
  public set realName(value: string) {
    this._realName = value;
  }
  public resetRealName() {
    this._realName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realNameInput() {
    return this._realName;
  }
}
export interface AccountAuthenticationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#create AccountAuthentication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#default AccountAuthentication#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#delete AccountAuthentication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#read AccountAuthentication#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#update AccountAuthentication#update}
  */
  readonly update?: string;
}

export function accountAuthenticationTimeoutsToTerraform(struct?: AccountAuthenticationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function accountAuthenticationTimeoutsToHclTerraform(struct?: AccountAuthenticationTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class AccountAuthenticationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountAuthenticationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountAuthenticationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication aiven_account_authentication}
*/
export class AccountAuthentication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_account_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountAuthentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountAuthentication to import
  * @param importFromId The id of the existing AccountAuthentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountAuthentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_account_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/account_authentication aiven_account_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountAuthenticationConfig
  */
  public constructor(scope: Construct, id: string, config: AccountAuthenticationConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_account_authentication',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._autoJoinTeamId = config.autoJoinTeamId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._samlCertificate = config.samlCertificate;
    this._samlDigestAlgorithm = config.samlDigestAlgorithm;
    this._samlEntityId = config.samlEntityId;
    this._samlIdpLoginAllowed = config.samlIdpLoginAllowed;
    this._samlIdpUrl = config.samlIdpUrl;
    this._samlSignatureAlgorithm = config.samlSignatureAlgorithm;
    this._samlVariant = config.samlVariant;
    this._type = config.type;
    this._samlFieldMapping.internalValue = config.samlFieldMapping;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // authentication_id - computed: true, optional: false, required: false
  public get authenticationId() {
    return this.getStringAttribute('authentication_id');
  }

  // auto_join_team_id - computed: false, optional: true, required: false
  private _autoJoinTeamId?: string; 
  public get autoJoinTeamId() {
    return this.getStringAttribute('auto_join_team_id');
  }
  public set autoJoinTeamId(value: string) {
    this._autoJoinTeamId = value;
  }
  public resetAutoJoinTeamId() {
    this._autoJoinTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoJoinTeamIdInput() {
    return this._autoJoinTeamId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
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

  // saml_acs_url - computed: true, optional: false, required: false
  public get samlAcsUrl() {
    return this.getStringAttribute('saml_acs_url');
  }

  // saml_certificate - computed: false, optional: true, required: false
  private _samlCertificate?: string; 
  public get samlCertificate() {
    return this.getStringAttribute('saml_certificate');
  }
  public set samlCertificate(value: string) {
    this._samlCertificate = value;
  }
  public resetSamlCertificate() {
    this._samlCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlCertificateInput() {
    return this._samlCertificate;
  }

  // saml_digest_algorithm - computed: false, optional: true, required: false
  private _samlDigestAlgorithm?: string; 
  public get samlDigestAlgorithm() {
    return this.getStringAttribute('saml_digest_algorithm');
  }
  public set samlDigestAlgorithm(value: string) {
    this._samlDigestAlgorithm = value;
  }
  public resetSamlDigestAlgorithm() {
    this._samlDigestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlDigestAlgorithmInput() {
    return this._samlDigestAlgorithm;
  }

  // saml_entity_id - computed: false, optional: true, required: false
  private _samlEntityId?: string; 
  public get samlEntityId() {
    return this.getStringAttribute('saml_entity_id');
  }
  public set samlEntityId(value: string) {
    this._samlEntityId = value;
  }
  public resetSamlEntityId() {
    this._samlEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlEntityIdInput() {
    return this._samlEntityId;
  }

  // saml_idp_login_allowed - computed: false, optional: true, required: false
  private _samlIdpLoginAllowed?: boolean | cdktf.IResolvable; 
  public get samlIdpLoginAllowed() {
    return this.getBooleanAttribute('saml_idp_login_allowed');
  }
  public set samlIdpLoginAllowed(value: boolean | cdktf.IResolvable) {
    this._samlIdpLoginAllowed = value;
  }
  public resetSamlIdpLoginAllowed() {
    this._samlIdpLoginAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpLoginAllowedInput() {
    return this._samlIdpLoginAllowed;
  }

  // saml_idp_url - computed: false, optional: true, required: false
  private _samlIdpUrl?: string; 
  public get samlIdpUrl() {
    return this.getStringAttribute('saml_idp_url');
  }
  public set samlIdpUrl(value: string) {
    this._samlIdpUrl = value;
  }
  public resetSamlIdpUrl() {
    this._samlIdpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdpUrlInput() {
    return this._samlIdpUrl;
  }

  // saml_metadata_url - computed: true, optional: false, required: false
  public get samlMetadataUrl() {
    return this.getStringAttribute('saml_metadata_url');
  }

  // saml_signature_algorithm - computed: false, optional: true, required: false
  private _samlSignatureAlgorithm?: string; 
  public get samlSignatureAlgorithm() {
    return this.getStringAttribute('saml_signature_algorithm');
  }
  public set samlSignatureAlgorithm(value: string) {
    this._samlSignatureAlgorithm = value;
  }
  public resetSamlSignatureAlgorithm() {
    this._samlSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSignatureAlgorithmInput() {
    return this._samlSignatureAlgorithm;
  }

  // saml_variant - computed: false, optional: true, required: false
  private _samlVariant?: string; 
  public get samlVariant() {
    return this.getStringAttribute('saml_variant');
  }
  public set samlVariant(value: string) {
    this._samlVariant = value;
  }
  public resetSamlVariant() {
    this._samlVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlVariantInput() {
    return this._samlVariant;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // saml_field_mapping - computed: false, optional: true, required: false
  private _samlFieldMapping = new AccountAuthenticationSamlFieldMappingOutputReference(this, "saml_field_mapping");
  public get samlFieldMapping() {
    return this._samlFieldMapping;
  }
  public putSamlFieldMapping(value: AccountAuthenticationSamlFieldMapping) {
    this._samlFieldMapping.internalValue = value;
  }
  public resetSamlFieldMapping() {
    this._samlFieldMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlFieldMappingInput() {
    return this._samlFieldMapping.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccountAuthenticationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccountAuthenticationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      auto_join_team_id: cdktf.stringToTerraform(this._autoJoinTeamId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      saml_certificate: cdktf.stringToTerraform(this._samlCertificate),
      saml_digest_algorithm: cdktf.stringToTerraform(this._samlDigestAlgorithm),
      saml_entity_id: cdktf.stringToTerraform(this._samlEntityId),
      saml_idp_login_allowed: cdktf.booleanToTerraform(this._samlIdpLoginAllowed),
      saml_idp_url: cdktf.stringToTerraform(this._samlIdpUrl),
      saml_signature_algorithm: cdktf.stringToTerraform(this._samlSignatureAlgorithm),
      saml_variant: cdktf.stringToTerraform(this._samlVariant),
      type: cdktf.stringToTerraform(this._type),
      saml_field_mapping: accountAuthenticationSamlFieldMappingToTerraform(this._samlFieldMapping.internalValue),
      timeouts: accountAuthenticationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_join_team_id: {
        value: cdktf.stringToHclTerraform(this._autoJoinTeamId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_certificate: {
        value: cdktf.stringToHclTerraform(this._samlCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_digest_algorithm: {
        value: cdktf.stringToHclTerraform(this._samlDigestAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_entity_id: {
        value: cdktf.stringToHclTerraform(this._samlEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_idp_login_allowed: {
        value: cdktf.booleanToHclTerraform(this._samlIdpLoginAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      saml_idp_url: {
        value: cdktf.stringToHclTerraform(this._samlIdpUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._samlSignatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_variant: {
        value: cdktf.stringToHclTerraform(this._samlVariant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_field_mapping: {
        value: accountAuthenticationSamlFieldMappingToHclTerraform(this._samlFieldMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AccountAuthenticationSamlFieldMappingList",
      },
      timeouts: {
        value: accountAuthenticationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountAuthenticationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
