// https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#account_key_algorithm Registration#account_key_algorithm}
  */
  readonly accountKeyAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#account_key_ecdsa_curve Registration#account_key_ecdsa_curve}
  */
  readonly accountKeyEcdsaCurve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#account_key_pem Registration#account_key_pem}
  */
  readonly accountKeyPem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#account_key_rsa_bits Registration#account_key_rsa_bits}
  */
  readonly accountKeyRsaBits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#email_address Registration#email_address}
  */
  readonly emailAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#id Registration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * external_account_binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#external_account_binding Registration#external_account_binding}
  */
  readonly externalAccountBinding?: RegistrationExternalAccountBinding;
}
export interface RegistrationExternalAccountBinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#hmac_base64 Registration#hmac_base64}
  */
  readonly hmacBase64: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#key_id Registration#key_id}
  */
  readonly keyId: string;
}

export function registrationExternalAccountBindingToTerraform(struct?: RegistrationExternalAccountBindingOutputReference | RegistrationExternalAccountBinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hmac_base64: cdktf.stringToTerraform(struct!.hmacBase64),
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function registrationExternalAccountBindingToHclTerraform(struct?: RegistrationExternalAccountBindingOutputReference | RegistrationExternalAccountBinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hmac_base64: {
      value: cdktf.stringToHclTerraform(struct!.hmacBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RegistrationExternalAccountBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RegistrationExternalAccountBinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hmacBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacBase64 = this._hmacBase64;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RegistrationExternalAccountBinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hmacBase64 = undefined;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hmacBase64 = value.hmacBase64;
      this._keyId = value.keyId;
    }
  }

  // hmac_base64 - computed: false, optional: false, required: true
  private _hmacBase64?: string; 
  public get hmacBase64() {
    return this.getStringAttribute('hmac_base64');
  }
  public set hmacBase64(value: string) {
    this._hmacBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacBase64Input() {
    return this._hmacBase64;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration acme_registration}
*/
export class Registration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "acme_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Registration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Registration to import
  * @param importFromId The id of the existing Registration that should be imported. Refer to the {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Registration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "acme_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vancluever/acme/2.38.0/docs/resources/registration acme_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: RegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'acme_registration',
      terraformGeneratorMetadata: {
        providerName: 'acme',
        providerVersion: '2.38.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountKeyAlgorithm = config.accountKeyAlgorithm;
    this._accountKeyEcdsaCurve = config.accountKeyEcdsaCurve;
    this._accountKeyPem = config.accountKeyPem;
    this._accountKeyRsaBits = config.accountKeyRsaBits;
    this._emailAddress = config.emailAddress;
    this._id = config.id;
    this._externalAccountBinding.internalValue = config.externalAccountBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_key_algorithm - computed: false, optional: true, required: false
  private _accountKeyAlgorithm?: string; 
  public get accountKeyAlgorithm() {
    return this.getStringAttribute('account_key_algorithm');
  }
  public set accountKeyAlgorithm(value: string) {
    this._accountKeyAlgorithm = value;
  }
  public resetAccountKeyAlgorithm() {
    this._accountKeyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyAlgorithmInput() {
    return this._accountKeyAlgorithm;
  }

  // account_key_ecdsa_curve - computed: false, optional: true, required: false
  private _accountKeyEcdsaCurve?: string; 
  public get accountKeyEcdsaCurve() {
    return this.getStringAttribute('account_key_ecdsa_curve');
  }
  public set accountKeyEcdsaCurve(value: string) {
    this._accountKeyEcdsaCurve = value;
  }
  public resetAccountKeyEcdsaCurve() {
    this._accountKeyEcdsaCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyEcdsaCurveInput() {
    return this._accountKeyEcdsaCurve;
  }

  // account_key_pem - computed: true, optional: true, required: false
  private _accountKeyPem?: string; 
  public get accountKeyPem() {
    return this.getStringAttribute('account_key_pem');
  }
  public set accountKeyPem(value: string) {
    this._accountKeyPem = value;
  }
  public resetAccountKeyPem() {
    this._accountKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyPemInput() {
    return this._accountKeyPem;
  }

  // account_key_rsa_bits - computed: false, optional: true, required: false
  private _accountKeyRsaBits?: number; 
  public get accountKeyRsaBits() {
    return this.getNumberAttribute('account_key_rsa_bits');
  }
  public set accountKeyRsaBits(value: number) {
    this._accountKeyRsaBits = value;
  }
  public resetAccountKeyRsaBits() {
    this._accountKeyRsaBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyRsaBitsInput() {
    return this._accountKeyRsaBits;
  }

  // email_address - computed: false, optional: false, required: true
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
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

  // registration_url - computed: true, optional: false, required: false
  public get registrationUrl() {
    return this.getStringAttribute('registration_url');
  }

  // external_account_binding - computed: false, optional: true, required: false
  private _externalAccountBinding = new RegistrationExternalAccountBindingOutputReference(this, "external_account_binding");
  public get externalAccountBinding() {
    return this._externalAccountBinding;
  }
  public putExternalAccountBinding(value: RegistrationExternalAccountBinding) {
    this._externalAccountBinding.internalValue = value;
  }
  public resetExternalAccountBinding() {
    this._externalAccountBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccountBindingInput() {
    return this._externalAccountBinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_key_algorithm: cdktf.stringToTerraform(this._accountKeyAlgorithm),
      account_key_ecdsa_curve: cdktf.stringToTerraform(this._accountKeyEcdsaCurve),
      account_key_pem: cdktf.stringToTerraform(this._accountKeyPem),
      account_key_rsa_bits: cdktf.numberToTerraform(this._accountKeyRsaBits),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      id: cdktf.stringToTerraform(this._id),
      external_account_binding: registrationExternalAccountBindingToTerraform(this._externalAccountBinding.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_key_algorithm: {
        value: cdktf.stringToHclTerraform(this._accountKeyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_key_ecdsa_curve: {
        value: cdktf.stringToHclTerraform(this._accountKeyEcdsaCurve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_key_pem: {
        value: cdktf.stringToHclTerraform(this._accountKeyPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_key_rsa_bits: {
        value: cdktf.numberToHclTerraform(this._accountKeyRsaBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
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
      external_account_binding: {
        value: registrationExternalAccountBindingToHclTerraform(this._externalAccountBinding.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RegistrationExternalAccountBindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
