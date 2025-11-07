// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdministratorSecurityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates the methods to enable or disable for admin sign-on. Required properties are `TOTP` (temporary one-time password), `FIDO2`, or `EMAIL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#allowed_methods AdministratorSecurity#allowed_methods}
  */
  readonly allowedMethods?: AdministratorSecurityAllowedMethods;
  /**
  * Indicates whether to use PingOne MFA, an external IdP, or a combination of both for admin sign-on. Possible values are `PINGONE`, `EXTERNAL`, or `HYBRID`. The default is `PINGONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#authentication_method AdministratorSecurity#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * The ID of the environment to create and manage the administrator_security in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#environment_id AdministratorSecurity#environment_id}
  */
  readonly environmentId: string;
  /**
  * The external IdP, if applicable. Required when the authentication_method is set to `EXTERNAL` or `HYBRID`, otherwise should not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#identity_provider AdministratorSecurity#identity_provider}
  */
  readonly identityProvider?: AdministratorSecurityIdentityProvider;
  /**
  * This property must be set to `ENFORCE` as MFA is required for administrator sign-ons. This property applies only to the specified environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#mfa_status AdministratorSecurity#mfa_status}
  */
  readonly mfaStatus: string;
  /**
  * Indicates whether to allow account recovery within the admin policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#recovery AdministratorSecurity#recovery}
  */
  readonly recovery: boolean | cdktf.IResolvable;
}
export interface AdministratorSecurityAllowedMethods {
  /**
  * Indicates whether to enable email for sign-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#email AdministratorSecurity#email}
  */
  readonly email: string;
  /**
  * Indicates whether to enable FIDO2 for sign-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#fido2 AdministratorSecurity#fido2}
  */
  readonly fido2: string;
  /**
  * Indicates whether to enable TOTP for sign-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#totp AdministratorSecurity#totp}
  */
  readonly totp: string;
}

export function administratorSecurityAllowedMethodsToTerraform(struct?: AdministratorSecurityAllowedMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    fido2: cdktf.stringToTerraform(struct!.fido2),
    totp: cdktf.stringToTerraform(struct!.totp),
  }
}


export function administratorSecurityAllowedMethodsToHclTerraform(struct?: AdministratorSecurityAllowedMethods | cdktf.IResolvable): any {
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
    fido2: {
      value: cdktf.stringToHclTerraform(struct!.fido2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    totp: {
      value: cdktf.stringToHclTerraform(struct!.totp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdministratorSecurityAllowedMethodsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdministratorSecurityAllowedMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._fido2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fido2 = this._fido2;
    }
    if (this._totp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totp = this._totp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdministratorSecurityAllowedMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._fido2 = undefined;
      this._totp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._fido2 = value.fido2;
      this._totp = value.totp;
    }
  }

  // email - computed: true, optional: false, required: true
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

  // fido2 - computed: true, optional: false, required: true
  private _fido2?: string; 
  public get fido2() {
    return this.getStringAttribute('fido2');
  }
  public set fido2(value: string) {
    this._fido2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fido2Input() {
    return this._fido2;
  }

  // totp - computed: true, optional: false, required: true
  private _totp?: string; 
  public get totp() {
    return this.getStringAttribute('totp');
  }
  public set totp(value: string) {
    this._totp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totpInput() {
    return this._totp;
  }
}
export interface AdministratorSecurityIdentityProvider {
  /**
  * The UUID of the external IdP, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#id AdministratorSecurity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function administratorSecurityIdentityProviderToTerraform(struct?: AdministratorSecurityIdentityProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function administratorSecurityIdentityProviderToHclTerraform(struct?: AdministratorSecurityIdentityProvider | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdministratorSecurityIdentityProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AdministratorSecurityIdentityProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdministratorSecurityIdentityProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security pingone_administrator_security}
*/
export class AdministratorSecurity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_administrator_security";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdministratorSecurity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdministratorSecurity to import
  * @param importFromId The id of the existing AdministratorSecurity that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdministratorSecurity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_administrator_security", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/administrator_security pingone_administrator_security} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdministratorSecurityConfig
  */
  public constructor(scope: Construct, id: string, config: AdministratorSecurityConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_administrator_security',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedMethods.internalValue = config.allowedMethods;
    this._authenticationMethod = config.authenticationMethod;
    this._environmentId = config.environmentId;
    this._identityProvider.internalValue = config.identityProvider;
    this._mfaStatus = config.mfaStatus;
    this._recovery = config.recovery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_methods - computed: true, optional: true, required: false
  private _allowedMethods = new AdministratorSecurityAllowedMethodsOutputReference(this, "allowed_methods");
  public get allowedMethods() {
    return this._allowedMethods;
  }
  public putAllowedMethods(value: AdministratorSecurityAllowedMethods) {
    this._allowedMethods.internalValue = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods.internalValue;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // has_fido2_capabilities - computed: true, optional: false, required: false
  public get hasFido2Capabilities() {
    return this.getBooleanAttribute('has_fido2_capabilities');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider = new AdministratorSecurityIdentityProviderOutputReference(this, "identity_provider");
  public get identityProvider() {
    return this._identityProvider;
  }
  public putIdentityProvider(value: AdministratorSecurityIdentityProvider) {
    this._identityProvider.internalValue = value;
  }
  public resetIdentityProvider() {
    this._identityProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider.internalValue;
  }

  // is_pingid_in_bom - computed: true, optional: false, required: false
  public get isPingidInBom() {
    return this.getBooleanAttribute('is_pingid_in_bom');
  }

  // mfa_status - computed: false, optional: false, required: true
  private _mfaStatus?: string; 
  public get mfaStatus() {
    return this.getStringAttribute('mfa_status');
  }
  public set mfaStatus(value: string) {
    this._mfaStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaStatusInput() {
    return this._mfaStatus;
  }

  // recovery - computed: false, optional: false, required: true
  private _recovery?: boolean | cdktf.IResolvable; 
  public get recovery() {
    return this.getBooleanAttribute('recovery');
  }
  public set recovery(value: boolean | cdktf.IResolvable) {
    this._recovery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryInput() {
    return this._recovery;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_methods: administratorSecurityAllowedMethodsToTerraform(this._allowedMethods.internalValue),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      identity_provider: administratorSecurityIdentityProviderToTerraform(this._identityProvider.internalValue),
      mfa_status: cdktf.stringToTerraform(this._mfaStatus),
      recovery: cdktf.booleanToTerraform(this._recovery),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_methods: {
        value: administratorSecurityAllowedMethodsToHclTerraform(this._allowedMethods.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdministratorSecurityAllowedMethods",
      },
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider: {
        value: administratorSecurityIdentityProviderToHclTerraform(this._identityProvider.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AdministratorSecurityIdentityProvider",
      },
      mfa_status: {
        value: cdktf.stringToHclTerraform(this._mfaStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery: {
        value: cdktf.booleanToHclTerraform(this._recovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
