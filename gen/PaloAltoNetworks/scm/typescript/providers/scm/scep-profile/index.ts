// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScepProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#algorithm ScepProfile#algorithm}
  */
  readonly algorithm: ScepProfileAlgorithm;
  /**
  * Certificate Authority identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#ca_identity_name ScepProfile#ca_identity_name}
  */
  readonly caIdentityName: string;
  /**
  * Subject Alternative name type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#certificate_attributes ScepProfile#certificate_attributes}
  */
  readonly certificateAttributes?: ScepProfileCertificateAttributes;
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#device ScepProfile#device}
  */
  readonly device?: string;
  /**
  * Digest for CSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#digest ScepProfile#digest}
  */
  readonly digest: string;
  /**
  * CA certificate fingerprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#fingerprint ScepProfile#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#folder ScepProfile#folder}
  */
  readonly folder?: string;
  /**
  * The name of the SCEP profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#name ScepProfile#name}
  */
  readonly name: string;
  /**
  * SCEP server CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#scep_ca_cert ScepProfile#scep_ca_cert}
  */
  readonly scepCaCert?: string;
  /**
  * One Time Password challenge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#scep_challenge ScepProfile#scep_challenge}
  */
  readonly scepChallenge: ScepProfileScepChallenge;
  /**
  * SCEP client ceertificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#scep_client_cert ScepProfile#scep_client_cert}
  */
  readonly scepClientCert?: string;
  /**
  * SCEP server URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#scep_url ScepProfile#scep_url}
  */
  readonly scepUrl: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#snippet ScepProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * Subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#subject ScepProfile#subject}
  */
  readonly subject: string;
  /**
  * Use as digital signature?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#use_as_digital_signature ScepProfile#use_as_digital_signature}
  */
  readonly useAsDigitalSignature?: boolean | cdktf.IResolvable;
  /**
  * Use for key encipherment?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#use_for_key_encipherment ScepProfile#use_for_key_encipherment}
  */
  readonly useForKeyEncipherment?: boolean | cdktf.IResolvable;
}
export interface ScepProfileAlgorithmRsa {
  /**
  * Rsa nbits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#rsa_nbits ScepProfile#rsa_nbits}
  */
  readonly rsaNbits?: number;
}

export function scepProfileAlgorithmRsaToTerraform(struct?: ScepProfileAlgorithmRsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rsa_nbits: cdktf.numberToTerraform(struct!.rsaNbits),
  }
}


export function scepProfileAlgorithmRsaToHclTerraform(struct?: ScepProfileAlgorithmRsa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rsa_nbits: {
      value: cdktf.numberToHclTerraform(struct!.rsaNbits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScepProfileAlgorithmRsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScepProfileAlgorithmRsa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rsaNbits !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaNbits = this._rsaNbits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScepProfileAlgorithmRsa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rsaNbits = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rsaNbits = value.rsaNbits;
    }
  }

  // rsa_nbits - computed: false, optional: true, required: false
  private _rsaNbits?: number; 
  public get rsaNbits() {
    return this.getNumberAttribute('rsa_nbits');
  }
  public set rsaNbits(value: number) {
    this._rsaNbits = value;
  }
  public resetRsaNbits() {
    this._rsaNbits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaNbitsInput() {
    return this._rsaNbits;
  }
}
export interface ScepProfileAlgorithm {
  /**
  * Key length (bits)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#rsa ScepProfile#rsa}
  */
  readonly rsa?: ScepProfileAlgorithmRsa;
}

export function scepProfileAlgorithmToTerraform(struct?: ScepProfileAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rsa: scepProfileAlgorithmRsaToTerraform(struct!.rsa),
  }
}


export function scepProfileAlgorithmToHclTerraform(struct?: ScepProfileAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rsa: {
      value: scepProfileAlgorithmRsaToHclTerraform(struct!.rsa),
      isBlock: true,
      type: "struct",
      storageClassType: "ScepProfileAlgorithmRsa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScepProfileAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScepProfileAlgorithm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsa = this._rsa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScepProfileAlgorithm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rsa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rsa.internalValue = value.rsa;
    }
  }

  // rsa - computed: false, optional: true, required: false
  private _rsa = new ScepProfileAlgorithmRsaOutputReference(this, "rsa");
  public get rsa() {
    return this._rsa;
  }
  public putRsa(value: ScepProfileAlgorithmRsa) {
    this._rsa.internalValue = value;
  }
  public resetRsa() {
    this._rsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaInput() {
    return this._rsa.internalValue;
  }
}
export interface ScepProfileCertificateAttributes {
  /**
  * Dnsname
  * > ℹ️ **Note:** You must specify exactly one of `dnsname`, `rfc822name`, and `uniform_resource_identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#dnsname ScepProfile#dnsname}
  */
  readonly dnsname?: string;
  /**
  * Rfc822name
  * > ℹ️ **Note:** You must specify exactly one of `dnsname`, `rfc822name`, and `uniform_resource_identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#rfc822name ScepProfile#rfc822name}
  */
  readonly rfc822Name?: string;
  /**
  * Uniform resource identifier
  * > ℹ️ **Note:** You must specify exactly one of `dnsname`, `rfc822name`, and `uniform_resource_identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#uniform_resource_identifier ScepProfile#uniform_resource_identifier}
  */
  readonly uniformResourceIdentifier?: string;
}

export function scepProfileCertificateAttributesToTerraform(struct?: ScepProfileCertificateAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dnsname: cdktf.stringToTerraform(struct!.dnsname),
    rfc822name: cdktf.stringToTerraform(struct!.rfc822Name),
    uniform_resource_identifier: cdktf.stringToTerraform(struct!.uniformResourceIdentifier),
  }
}


export function scepProfileCertificateAttributesToHclTerraform(struct?: ScepProfileCertificateAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dnsname: {
      value: cdktf.stringToHclTerraform(struct!.dnsname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc822name: {
      value: cdktf.stringToHclTerraform(struct!.rfc822Name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniform_resource_identifier: {
      value: cdktf.stringToHclTerraform(struct!.uniformResourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScepProfileCertificateAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScepProfileCertificateAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsname = this._dnsname;
    }
    if (this._rfc822Name !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc822Name = this._rfc822Name;
    }
    if (this._uniformResourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformResourceIdentifier = this._uniformResourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScepProfileCertificateAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsname = undefined;
      this._rfc822Name = undefined;
      this._uniformResourceIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsname = value.dnsname;
      this._rfc822Name = value.rfc822Name;
      this._uniformResourceIdentifier = value.uniformResourceIdentifier;
    }
  }

  // dnsname - computed: false, optional: true, required: false
  private _dnsname?: string; 
  public get dnsname() {
    return this.getStringAttribute('dnsname');
  }
  public set dnsname(value: string) {
    this._dnsname = value;
  }
  public resetDnsname() {
    this._dnsname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsnameInput() {
    return this._dnsname;
  }

  // rfc822name - computed: false, optional: true, required: false
  private _rfc822Name?: string; 
  public get rfc822Name() {
    return this.getStringAttribute('rfc822name');
  }
  public set rfc822Name(value: string) {
    this._rfc822Name = value;
  }
  public resetRfc822Name() {
    this._rfc822Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc822NameInput() {
    return this._rfc822Name;
  }

  // uniform_resource_identifier - computed: false, optional: true, required: false
  private _uniformResourceIdentifier?: string; 
  public get uniformResourceIdentifier() {
    return this.getStringAttribute('uniform_resource_identifier');
  }
  public set uniformResourceIdentifier(value: string) {
    this._uniformResourceIdentifier = value;
  }
  public resetUniformResourceIdentifier() {
    this._uniformResourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformResourceIdentifierInput() {
    return this._uniformResourceIdentifier;
  }
}
export interface ScepProfileScepChallengeDynamic {
  /**
  * OTP server URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#otp_server_url ScepProfile#otp_server_url}
  */
  readonly otpServerUrl?: string;
  /**
  * OTP password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#password ScepProfile#password}
  */
  readonly password?: string;
  /**
  * OTP username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#username ScepProfile#username}
  */
  readonly username?: string;
}

export function scepProfileScepChallengeDynamicToTerraform(struct?: ScepProfileScepChallengeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    otp_server_url: cdktf.stringToTerraform(struct!.otpServerUrl),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function scepProfileScepChallengeDynamicToHclTerraform(struct?: ScepProfileScepChallengeDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    otp_server_url: {
      value: cdktf.stringToHclTerraform(struct!.otpServerUrl),
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
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScepProfileScepChallengeDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScepProfileScepChallengeDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._otpServerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpServerUrl = this._otpServerUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScepProfileScepChallengeDynamic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._otpServerUrl = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._otpServerUrl = value.otpServerUrl;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // otp_server_url - computed: false, optional: true, required: false
  private _otpServerUrl?: string; 
  public get otpServerUrl() {
    return this.getStringAttribute('otp_server_url');
  }
  public set otpServerUrl(value: string) {
    this._otpServerUrl = value;
  }
  public resetOtpServerUrl() {
    this._otpServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpServerUrlInput() {
    return this._otpServerUrl;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ScepProfileScepChallenge {
  /**
  * Dynamic
  * > ℹ️ **Note:** You must specify exactly one of `dynamic`, `fixed`, and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#dynamic ScepProfile#dynamic}
  */
  readonly dynamic?: ScepProfileScepChallengeDynamic;
  /**
  * Challenge to use for SCEP server on mobile clients
  * > ℹ️ **Note:** You must specify exactly one of `dynamic`, `fixed`, and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#fixed ScepProfile#fixed}
  */
  readonly fixed?: string;
  /**
  * No OTP
  * > ℹ️ **Note:** You must specify exactly one of `dynamic`, `fixed`, and `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#none ScepProfile#none}
  */
  readonly none?: string;
}

export function scepProfileScepChallengeToTerraform(struct?: ScepProfileScepChallenge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: scepProfileScepChallengeDynamicToTerraform(struct!.dynamic),
    fixed: cdktf.stringToTerraform(struct!.fixed),
    none: cdktf.stringToTerraform(struct!.none),
  }
}


export function scepProfileScepChallengeToHclTerraform(struct?: ScepProfileScepChallenge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: scepProfileScepChallengeDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "ScepProfileScepChallengeDynamic",
    },
    fixed: {
      value: cdktf.stringToHclTerraform(struct!.fixed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    none: {
      value: cdktf.stringToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScepProfileScepChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScepProfileScepChallenge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic?.internalValue;
    }
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScepProfileScepChallenge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = undefined;
      this._fixed = undefined;
      this._none = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = value.dynamic;
      this._fixed = value.fixed;
      this._none = value.none;
    }
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic = new ScepProfileScepChallengeDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: ScepProfileScepChallengeDynamic) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: string; 
  public get fixed() {
    return this.getStringAttribute('fixed');
  }
  public set fixed(value: string) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // none - computed: false, optional: true, required: false
  private _none?: string; 
  public get none() {
    return this.getStringAttribute('none');
  }
  public set none(value: string) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile scm_scep_profile}
*/
export class ScepProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_scep_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScepProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScepProfile to import
  * @param importFromId The id of the existing ScepProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScepProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_scep_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/scep_profile scm_scep_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScepProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ScepProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_scep_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm.internalValue = config.algorithm;
    this._caIdentityName = config.caIdentityName;
    this._certificateAttributes.internalValue = config.certificateAttributes;
    this._device = config.device;
    this._digest = config.digest;
    this._fingerprint = config.fingerprint;
    this._folder = config.folder;
    this._name = config.name;
    this._scepCaCert = config.scepCaCert;
    this._scepChallenge.internalValue = config.scepChallenge;
    this._scepClientCert = config.scepClientCert;
    this._scepUrl = config.scepUrl;
    this._snippet = config.snippet;
    this._subject = config.subject;
    this._useAsDigitalSignature = config.useAsDigitalSignature;
    this._useForKeyEncipherment = config.useForKeyEncipherment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm = new ScepProfileAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: ScepProfileAlgorithm) {
    this._algorithm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // ca_identity_name - computed: false, optional: false, required: true
  private _caIdentityName?: string; 
  public get caIdentityName() {
    return this.getStringAttribute('ca_identity_name');
  }
  public set caIdentityName(value: string) {
    this._caIdentityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdentityNameInput() {
    return this._caIdentityName;
  }

  // certificate_attributes - computed: false, optional: true, required: false
  private _certificateAttributes = new ScepProfileCertificateAttributesOutputReference(this, "certificate_attributes");
  public get certificateAttributes() {
    return this._certificateAttributes;
  }
  public putCertificateAttributes(value: ScepProfileCertificateAttributes) {
    this._certificateAttributes.internalValue = value;
  }
  public resetCertificateAttributes() {
    this._certificateAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAttributesInput() {
    return this._certificateAttributes.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scep_ca_cert - computed: false, optional: true, required: false
  private _scepCaCert?: string; 
  public get scepCaCert() {
    return this.getStringAttribute('scep_ca_cert');
  }
  public set scepCaCert(value: string) {
    this._scepCaCert = value;
  }
  public resetScepCaCert() {
    this._scepCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepCaCertInput() {
    return this._scepCaCert;
  }

  // scep_challenge - computed: false, optional: false, required: true
  private _scepChallenge = new ScepProfileScepChallengeOutputReference(this, "scep_challenge");
  public get scepChallenge() {
    return this._scepChallenge;
  }
  public putScepChallenge(value: ScepProfileScepChallenge) {
    this._scepChallenge.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scepChallengeInput() {
    return this._scepChallenge.internalValue;
  }

  // scep_client_cert - computed: false, optional: true, required: false
  private _scepClientCert?: string; 
  public get scepClientCert() {
    return this.getStringAttribute('scep_client_cert');
  }
  public set scepClientCert(value: string) {
    this._scepClientCert = value;
  }
  public resetScepClientCert() {
    this._scepClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepClientCertInput() {
    return this._scepClientCert;
  }

  // scep_url - computed: false, optional: false, required: true
  private _scepUrl?: string; 
  public get scepUrl() {
    return this.getStringAttribute('scep_url');
  }
  public set scepUrl(value: string) {
    this._scepUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scepUrlInput() {
    return this._scepUrl;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // use_as_digital_signature - computed: false, optional: true, required: false
  private _useAsDigitalSignature?: boolean | cdktf.IResolvable; 
  public get useAsDigitalSignature() {
    return this.getBooleanAttribute('use_as_digital_signature');
  }
  public set useAsDigitalSignature(value: boolean | cdktf.IResolvable) {
    this._useAsDigitalSignature = value;
  }
  public resetUseAsDigitalSignature() {
    this._useAsDigitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAsDigitalSignatureInput() {
    return this._useAsDigitalSignature;
  }

  // use_for_key_encipherment - computed: false, optional: true, required: false
  private _useForKeyEncipherment?: boolean | cdktf.IResolvable; 
  public get useForKeyEncipherment() {
    return this.getBooleanAttribute('use_for_key_encipherment');
  }
  public set useForKeyEncipherment(value: boolean | cdktf.IResolvable) {
    this._useForKeyEncipherment = value;
  }
  public resetUseForKeyEncipherment() {
    this._useForKeyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useForKeyEnciphermentInput() {
    return this._useForKeyEncipherment;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: scepProfileAlgorithmToTerraform(this._algorithm.internalValue),
      ca_identity_name: cdktf.stringToTerraform(this._caIdentityName),
      certificate_attributes: scepProfileCertificateAttributesToTerraform(this._certificateAttributes.internalValue),
      device: cdktf.stringToTerraform(this._device),
      digest: cdktf.stringToTerraform(this._digest),
      fingerprint: cdktf.stringToTerraform(this._fingerprint),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      scep_ca_cert: cdktf.stringToTerraform(this._scepCaCert),
      scep_challenge: scepProfileScepChallengeToTerraform(this._scepChallenge.internalValue),
      scep_client_cert: cdktf.stringToTerraform(this._scepClientCert),
      scep_url: cdktf.stringToTerraform(this._scepUrl),
      snippet: cdktf.stringToTerraform(this._snippet),
      subject: cdktf.stringToTerraform(this._subject),
      use_as_digital_signature: cdktf.booleanToTerraform(this._useAsDigitalSignature),
      use_for_key_encipherment: cdktf.booleanToTerraform(this._useForKeyEncipherment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: scepProfileAlgorithmToHclTerraform(this._algorithm.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScepProfileAlgorithm",
      },
      ca_identity_name: {
        value: cdktf.stringToHclTerraform(this._caIdentityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_attributes: {
        value: scepProfileCertificateAttributesToHclTerraform(this._certificateAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScepProfileCertificateAttributes",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest: {
        value: cdktf.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fingerprint: {
        value: cdktf.stringToHclTerraform(this._fingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      scep_ca_cert: {
        value: cdktf.stringToHclTerraform(this._scepCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_challenge: {
        value: scepProfileScepChallengeToHclTerraform(this._scepChallenge.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScepProfileScepChallenge",
      },
      scep_client_cert: {
        value: cdktf.stringToHclTerraform(this._scepClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_url: {
        value: cdktf.stringToHclTerraform(this._scepUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_as_digital_signature: {
        value: cdktf.booleanToHclTerraform(this._useAsDigitalSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_for_key_encipherment: {
        value: cdktf.booleanToHclTerraform(this._useForKeyEncipherment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
