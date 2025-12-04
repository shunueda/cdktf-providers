// https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationmanagerIdpUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * User's email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#email OrganizationmanagerIdpUser#email}
  */
  readonly email?: string;
  /**
  * External identifier for federation with external identity systems.
  *  This ID can be used to link this user with an account in an external system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#external_id OrganizationmanagerIdpUser#external_id}
  */
  readonly externalId?: string;
  /**
  * User's last name.
  *  Part of the user's profile information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#family_name OrganizationmanagerIdpUser#family_name}
  */
  readonly familyName?: string;
  /**
  * User's full name (display name).
  *  This is typically shown in the UI and used for identification purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#full_name OrganizationmanagerIdpUser#full_name}
  */
  readonly fullName: string;
  /**
  * User's first name.
  *  Part of the user's profile information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#given_name OrganizationmanagerIdpUser#given_name}
  */
  readonly givenName?: string;
  /**
  * ID of the user to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#id OrganizationmanagerIdpUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the user is active. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#is_active OrganizationmanagerIdpUser#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Password hash. Credentials type. Exactly one of credentials type must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#password_hash OrganizationmanagerIdpUser#password_hash}
  */
  readonly passwordHash?: OrganizationmanagerIdpUserPasswordHash;
  /**
  * Password specification. Credentials type. Exactly one of credentials type must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#password_spec OrganizationmanagerIdpUser#password_spec}
  */
  readonly passwordSpec?: OrganizationmanagerIdpUserPasswordSpec;
  /**
  * User's phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#phone_number OrganizationmanagerIdpUser#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#timeouts OrganizationmanagerIdpUser#timeouts}
  */
  readonly timeouts?: OrganizationmanagerIdpUserTimeouts;
  /**
  * ID of the user to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#user_id OrganizationmanagerIdpUser#user_id}
  */
  readonly userId?: string;
  /**
  * Username used for authentication.
  *  Usually in the format of an email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#username OrganizationmanagerIdpUser#username}
  */
  readonly username: string;
  /**
  * ID of the userpool this user belongs to.
  *  To get the userpool ID, make a [UserpoolService.List] request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#userpool_id OrganizationmanagerIdpUser#userpool_id}
  */
  readonly userpoolId: string;
}
export interface OrganizationmanagerIdpUserPasswordHash {
  /**
  * The password hash string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#password_hash OrganizationmanagerIdpUser#password_hash}
  */
  readonly passwordHash: string;
  /**
  * Type of the password hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#password_hash_type OrganizationmanagerIdpUser#password_hash_type}
  */
  readonly passwordHashType: string;
}

export function organizationmanagerIdpUserPasswordHashToTerraform(struct?: OrganizationmanagerIdpUserPasswordHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_hash: cdktf.stringToTerraform(struct!.passwordHash),
    password_hash_type: cdktf.stringToTerraform(struct!.passwordHashType),
  }
}


export function organizationmanagerIdpUserPasswordHashToHclTerraform(struct?: OrganizationmanagerIdpUserPasswordHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_hash: {
      value: cdktf.stringToHclTerraform(struct!.passwordHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_hash_type: {
      value: cdktf.stringToHclTerraform(struct!.passwordHashType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpUserPasswordHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserPasswordHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordHash = this._passwordHash;
    }
    if (this._passwordHashType !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordHashType = this._passwordHashType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpUserPasswordHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordHash = undefined;
      this._passwordHashType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordHash = value.passwordHash;
      this._passwordHashType = value.passwordHashType;
    }
  }

  // password_hash - computed: true, optional: false, required: true
  private _passwordHash?: string; 
  public get passwordHash() {
    return this.getStringAttribute('password_hash');
  }
  public set passwordHash(value: string) {
    this._passwordHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashInput() {
    return this._passwordHash;
  }

  // password_hash_type - computed: true, optional: false, required: true
  private _passwordHashType?: string; 
  public get passwordHashType() {
    return this.getStringAttribute('password_hash_type');
  }
  public set passwordHashType(value: string) {
    this._passwordHashType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashTypeInput() {
    return this._passwordHashType;
  }
}
export interface OrganizationmanagerIdpUserPasswordSpec {
  /**
  * Proof that the password was generated by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#generation_proof OrganizationmanagerIdpUser#generation_proof}
  */
  readonly generationProof?: string;
  /**
  * The password string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#password OrganizationmanagerIdpUser#password}
  */
  readonly password: string;
}

export function organizationmanagerIdpUserPasswordSpecToTerraform(struct?: OrganizationmanagerIdpUserPasswordSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation_proof: cdktf.stringToTerraform(struct!.generationProof),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function organizationmanagerIdpUserPasswordSpecToHclTerraform(struct?: OrganizationmanagerIdpUserPasswordSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation_proof: {
      value: cdktf.stringToHclTerraform(struct!.generationProof),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationmanagerIdpUserPasswordSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserPasswordSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generationProof !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationProof = this._generationProof;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerIdpUserPasswordSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generationProof = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generationProof = value.generationProof;
      this._password = value.password;
    }
  }

  // generation_proof - computed: true, optional: true, required: false
  private _generationProof?: string; 
  public get generationProof() {
    return this.getStringAttribute('generation_proof');
  }
  public set generationProof(value: string) {
    this._generationProof = value;
  }
  public resetGenerationProof() {
    this._generationProof = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationProofInput() {
    return this._generationProof;
  }

  // password - computed: true, optional: false, required: true
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
}
export interface OrganizationmanagerIdpUserTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#create OrganizationmanagerIdpUser#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#delete OrganizationmanagerIdpUser#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#read OrganizationmanagerIdpUser#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#update OrganizationmanagerIdpUser#update}
  */
  readonly update?: string;
}

export function organizationmanagerIdpUserTimeoutsToTerraform(struct?: OrganizationmanagerIdpUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function organizationmanagerIdpUserTimeoutsToHclTerraform(struct?: OrganizationmanagerIdpUserTimeouts | cdktf.IResolvable): any {
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

export class OrganizationmanagerIdpUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerIdpUserTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrganizationmanagerIdpUserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user yandex_organizationmanager_idp_user}
*/
export class OrganizationmanagerIdpUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_idp_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationmanagerIdpUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationmanagerIdpUser to import
  * @param importFromId The id of the existing OrganizationmanagerIdpUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationmanagerIdpUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_idp_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/resources/organizationmanager_idp_user yandex_organizationmanager_idp_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationmanagerIdpUserConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationmanagerIdpUserConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_idp_user',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.174.0',
        providerVersionConstraint: '0.174.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._externalId = config.externalId;
    this._familyName = config.familyName;
    this._fullName = config.fullName;
    this._givenName = config.givenName;
    this._id = config.id;
    this._isActive = config.isActive;
    this._passwordHash.internalValue = config.passwordHash;
    this._passwordSpec.internalValue = config.passwordSpec;
    this._phoneNumber = config.phoneNumber;
    this._timeouts.internalValue = config.timeouts;
    this._userId = config.userId;
    this._username = config.username;
    this._userpoolId = config.userpoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // family_name - computed: true, optional: true, required: false
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  public resetFamilyName() {
    this._familyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // full_name - computed: false, optional: false, required: true
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // given_name - computed: true, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
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

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // password_hash - computed: true, optional: true, required: false
  private _passwordHash = new OrganizationmanagerIdpUserPasswordHashOutputReference(this, "password_hash");
  public get passwordHash() {
    return this._passwordHash;
  }
  public putPasswordHash(value: OrganizationmanagerIdpUserPasswordHash) {
    this._passwordHash.internalValue = value;
  }
  public resetPasswordHash() {
    this._passwordHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashInput() {
    return this._passwordHash.internalValue;
  }

  // password_spec - computed: true, optional: true, required: false
  private _passwordSpec = new OrganizationmanagerIdpUserPasswordSpecOutputReference(this, "password_spec");
  public get passwordSpec() {
    return this._passwordSpec;
  }
  public putPasswordSpec(value: OrganizationmanagerIdpUserPasswordSpec) {
    this._passwordSpec.internalValue = value;
  }
  public resetPasswordSpec() {
    this._passwordSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSpecInput() {
    return this._passwordSpec.internalValue;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationmanagerIdpUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationmanagerIdpUserTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
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

  // userpool_id - computed: false, optional: false, required: true
  private _userpoolId?: string; 
  public get userpoolId() {
    return this.getStringAttribute('userpool_id');
  }
  public set userpoolId(value: string) {
    this._userpoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userpoolIdInput() {
    return this._userpoolId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      external_id: cdktf.stringToTerraform(this._externalId),
      family_name: cdktf.stringToTerraform(this._familyName),
      full_name: cdktf.stringToTerraform(this._fullName),
      given_name: cdktf.stringToTerraform(this._givenName),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      password_hash: organizationmanagerIdpUserPasswordHashToTerraform(this._passwordHash.internalValue),
      password_spec: organizationmanagerIdpUserPasswordSpecToTerraform(this._passwordSpec.internalValue),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      timeouts: organizationmanagerIdpUserTimeoutsToTerraform(this._timeouts.internalValue),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
      userpool_id: cdktf.stringToTerraform(this._userpoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family_name: {
        value: cdktf.stringToHclTerraform(this._familyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      given_name: {
        value: cdktf.stringToHclTerraform(this._givenName),
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
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_hash: {
        value: organizationmanagerIdpUserPasswordHashToHclTerraform(this._passwordHash.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpUserPasswordHash",
      },
      password_spec: {
        value: organizationmanagerIdpUserPasswordSpecToHclTerraform(this._passwordSpec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpUserPasswordSpec",
      },
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: organizationmanagerIdpUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerIdpUserTimeouts",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userpool_id: {
        value: cdktf.stringToHclTerraform(this._userpoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
