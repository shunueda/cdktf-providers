// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmAcmeIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the device must provide an attestation that describe the device and the generated key to the ACME issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#attest MdmAcmeIssuer#attest}
  */
  readonly attest?: boolean | cdktf.IResolvable;
  /**
  * ACME issuer backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#backend MdmAcmeIssuer#backend}
  */
  readonly backend: string;
  /**
  * Description of the ACME issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#description MdmAcmeIssuer#description}
  */
  readonly description?: string;
  /**
  * Directory URL of the ACME issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#directory_url MdmAcmeIssuer#directory_url}
  */
  readonly directoryUrl: string;
  /**
  * The device requests this extended key usage for the certificate that the ACME server issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#extended_key_usage MdmAcmeIssuer#extended_key_usage}
  */
  readonly extendedKeyUsage?: string[];
  /**
  * Indicates if the private key must be bound to the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#hardware_bound MdmAcmeIssuer#hardware_bound}
  */
  readonly hardwareBound?: boolean | cdktf.IResolvable;
  /**
  * IDent backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#ident MdmAcmeIssuer#ident}
  */
  readonly ident?: MdmAcmeIssuerIdent;
  /**
  * The key size in bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#key_size MdmAcmeIssuer#key_size}
  */
  readonly keySize: number;
  /**
  * Private key type. One of `ECSECPrimeRandom` or `RSA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#key_type MdmAcmeIssuer#key_type}
  */
  readonly keyType: string;
  /**
  * Microsoft CA backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#microsoft_ca MdmAcmeIssuer#microsoft_ca}
  */
  readonly microsoftCa?: MdmAcmeIssuerMicrosoftCa;
  /**
  * Name of the ACME issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#name MdmAcmeIssuer#name}
  */
  readonly name: string;
  /**
  * Okta CA backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#okta_ca MdmAcmeIssuer#okta_ca}
  */
  readonly oktaCa?: MdmAcmeIssuerOktaCa;
  /**
  * Static Challenge backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#static_challenge MdmAcmeIssuer#static_challenge}
  */
  readonly staticChallenge?: MdmAcmeIssuerStaticChallenge;
  /**
  * A bitmask that specifies the use of the key: `1` is signing, `4` is encryption, and `5` is both signing and encryption. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#usage_flags MdmAcmeIssuer#usage_flags}
  */
  readonly usageFlags?: number;
}
export interface MdmAcmeIssuerIdent {
  /**
  * Bearer token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#bearer_token MdmAcmeIssuer#bearer_token}
  */
  readonly bearerToken: string;
  /**
  * Max number of retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#max_retries MdmAcmeIssuer#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Request timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#request_timeout MdmAcmeIssuer#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * HTTP endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#url MdmAcmeIssuer#url}
  */
  readonly url: string;
}

export function mdmAcmeIssuerIdentToTerraform(struct?: MdmAcmeIssuerIdent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mdmAcmeIssuerIdentToHclTerraform(struct?: MdmAcmeIssuerIdent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdmAcmeIssuerIdentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmAcmeIssuerIdent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmAcmeIssuerIdent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bearerToken = undefined;
      this._maxRetries = undefined;
      this._requestTimeout = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bearerToken = value.bearerToken;
      this._maxRetries = value.maxRetries;
      this._requestTimeout = value.requestTimeout;
      this._url = value.url;
    }
  }

  // bearer_token - computed: false, optional: false, required: true
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // max_retries - computed: true, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MdmAcmeIssuerMicrosoftCa {
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#password MdmAcmeIssuer#password}
  */
  readonly password: string;
  /**
  * HTTP endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#url MdmAcmeIssuer#url}
  */
  readonly url: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#username MdmAcmeIssuer#username}
  */
  readonly username: string;
}

export function mdmAcmeIssuerMicrosoftCaToTerraform(struct?: MdmAcmeIssuerMicrosoftCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function mdmAcmeIssuerMicrosoftCaToHclTerraform(struct?: MdmAcmeIssuerMicrosoftCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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

export class MdmAcmeIssuerMicrosoftCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmAcmeIssuerMicrosoftCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmAcmeIssuerMicrosoftCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
}
export interface MdmAcmeIssuerOktaCa {
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#password MdmAcmeIssuer#password}
  */
  readonly password: string;
  /**
  * HTTP endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#url MdmAcmeIssuer#url}
  */
  readonly url: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#username MdmAcmeIssuer#username}
  */
  readonly username: string;
}

export function mdmAcmeIssuerOktaCaToTerraform(struct?: MdmAcmeIssuerOktaCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function mdmAcmeIssuerOktaCaToHclTerraform(struct?: MdmAcmeIssuerOktaCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
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

export class MdmAcmeIssuerOktaCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmAcmeIssuerOktaCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmAcmeIssuerOktaCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
}
export interface MdmAcmeIssuerStaticChallenge {
  /**
  * Challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#challenge MdmAcmeIssuer#challenge}
  */
  readonly challenge: string;
}

export function mdmAcmeIssuerStaticChallengeToTerraform(struct?: MdmAcmeIssuerStaticChallenge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge: cdktf.stringToTerraform(struct!.challenge),
  }
}


export function mdmAcmeIssuerStaticChallengeToHclTerraform(struct?: MdmAcmeIssuerStaticChallenge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    challenge: {
      value: cdktf.stringToHclTerraform(struct!.challenge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdmAcmeIssuerStaticChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmAcmeIssuerStaticChallenge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.challenge = this._challenge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmAcmeIssuerStaticChallenge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._challenge = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._challenge = value.challenge;
    }
  }

  // challenge - computed: false, optional: false, required: true
  private _challenge?: string; 
  public get challenge() {
    return this.getStringAttribute('challenge');
  }
  public set challenge(value: string) {
    this._challenge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeInput() {
    return this._challenge;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer zentral_mdm_acme_issuer}
*/
export class MdmAcmeIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_acme_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmAcmeIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmAcmeIssuer to import
  * @param importFromId The id of the existing MdmAcmeIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmAcmeIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_acme_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_acme_issuer zentral_mdm_acme_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmAcmeIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: MdmAcmeIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_acme_issuer',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attest = config.attest;
    this._backend = config.backend;
    this._description = config.description;
    this._directoryUrl = config.directoryUrl;
    this._extendedKeyUsage = config.extendedKeyUsage;
    this._hardwareBound = config.hardwareBound;
    this._ident.internalValue = config.ident;
    this._keySize = config.keySize;
    this._keyType = config.keyType;
    this._microsoftCa.internalValue = config.microsoftCa;
    this._name = config.name;
    this._oktaCa.internalValue = config.oktaCa;
    this._staticChallenge.internalValue = config.staticChallenge;
    this._usageFlags = config.usageFlags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attest - computed: true, optional: true, required: false
  private _attest?: boolean | cdktf.IResolvable; 
  public get attest() {
    return this.getBooleanAttribute('attest');
  }
  public set attest(value: boolean | cdktf.IResolvable) {
    this._attest = value;
  }
  public resetAttest() {
    this._attest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestInput() {
    return this._attest;
  }

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // description - computed: true, optional: true, required: false
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

  // directory_url - computed: false, optional: false, required: true
  private _directoryUrl?: string; 
  public get directoryUrl() {
    return this.getStringAttribute('directory_url');
  }
  public set directoryUrl(value: string) {
    this._directoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryUrlInput() {
    return this._directoryUrl;
  }

  // extended_key_usage - computed: true, optional: true, required: false
  private _extendedKeyUsage?: string[]; 
  public get extendedKeyUsage() {
    return cdktf.Fn.tolist(this.getListAttribute('extended_key_usage'));
  }
  public set extendedKeyUsage(value: string[]) {
    this._extendedKeyUsage = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage;
  }

  // hardware_bound - computed: true, optional: true, required: false
  private _hardwareBound?: boolean | cdktf.IResolvable; 
  public get hardwareBound() {
    return this.getBooleanAttribute('hardware_bound');
  }
  public set hardwareBound(value: boolean | cdktf.IResolvable) {
    this._hardwareBound = value;
  }
  public resetHardwareBound() {
    this._hardwareBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareBoundInput() {
    return this._hardwareBound;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ident - computed: false, optional: true, required: false
  private _ident = new MdmAcmeIssuerIdentOutputReference(this, "ident");
  public get ident() {
    return this._ident;
  }
  public putIdent(value: MdmAcmeIssuerIdent) {
    this._ident.internalValue = value;
  }
  public resetIdent() {
    this._ident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identInput() {
    return this._ident.internalValue;
  }

  // key_size - computed: false, optional: false, required: true
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // microsoft_ca - computed: false, optional: true, required: false
  private _microsoftCa = new MdmAcmeIssuerMicrosoftCaOutputReference(this, "microsoft_ca");
  public get microsoftCa() {
    return this._microsoftCa;
  }
  public putMicrosoftCa(value: MdmAcmeIssuerMicrosoftCa) {
    this._microsoftCa.internalValue = value;
  }
  public resetMicrosoftCa() {
    this._microsoftCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftCaInput() {
    return this._microsoftCa.internalValue;
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

  // okta_ca - computed: false, optional: true, required: false
  private _oktaCa = new MdmAcmeIssuerOktaCaOutputReference(this, "okta_ca");
  public get oktaCa() {
    return this._oktaCa;
  }
  public putOktaCa(value: MdmAcmeIssuerOktaCa) {
    this._oktaCa.internalValue = value;
  }
  public resetOktaCa() {
    this._oktaCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaCaInput() {
    return this._oktaCa.internalValue;
  }

  // static_challenge - computed: false, optional: true, required: false
  private _staticChallenge = new MdmAcmeIssuerStaticChallengeOutputReference(this, "static_challenge");
  public get staticChallenge() {
    return this._staticChallenge;
  }
  public putStaticChallenge(value: MdmAcmeIssuerStaticChallenge) {
    this._staticChallenge.internalValue = value;
  }
  public resetStaticChallenge() {
    this._staticChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticChallengeInput() {
    return this._staticChallenge.internalValue;
  }

  // usage_flags - computed: true, optional: true, required: false
  private _usageFlags?: number; 
  public get usageFlags() {
    return this.getNumberAttribute('usage_flags');
  }
  public set usageFlags(value: number) {
    this._usageFlags = value;
  }
  public resetUsageFlags() {
    this._usageFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageFlagsInput() {
    return this._usageFlags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attest: cdktf.booleanToTerraform(this._attest),
      backend: cdktf.stringToTerraform(this._backend),
      description: cdktf.stringToTerraform(this._description),
      directory_url: cdktf.stringToTerraform(this._directoryUrl),
      extended_key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extendedKeyUsage),
      hardware_bound: cdktf.booleanToTerraform(this._hardwareBound),
      ident: mdmAcmeIssuerIdentToTerraform(this._ident.internalValue),
      key_size: cdktf.numberToTerraform(this._keySize),
      key_type: cdktf.stringToTerraform(this._keyType),
      microsoft_ca: mdmAcmeIssuerMicrosoftCaToTerraform(this._microsoftCa.internalValue),
      name: cdktf.stringToTerraform(this._name),
      okta_ca: mdmAcmeIssuerOktaCaToTerraform(this._oktaCa.internalValue),
      static_challenge: mdmAcmeIssuerStaticChallengeToTerraform(this._staticChallenge.internalValue),
      usage_flags: cdktf.numberToTerraform(this._usageFlags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attest: {
        value: cdktf.booleanToHclTerraform(this._attest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_url: {
        value: cdktf.stringToHclTerraform(this._directoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_key_usage: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extendedKeyUsage),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hardware_bound: {
        value: cdktf.booleanToHclTerraform(this._hardwareBound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ident: {
        value: mdmAcmeIssuerIdentToHclTerraform(this._ident.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmAcmeIssuerIdent",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microsoft_ca: {
        value: mdmAcmeIssuerMicrosoftCaToHclTerraform(this._microsoftCa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmAcmeIssuerMicrosoftCa",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_ca: {
        value: mdmAcmeIssuerOktaCaToHclTerraform(this._oktaCa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmAcmeIssuerOktaCa",
      },
      static_challenge: {
        value: mdmAcmeIssuerStaticChallengeToHclTerraform(this._staticChallenge.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmAcmeIssuerStaticChallenge",
      },
      usage_flags: {
        value: cdktf.numberToHclTerraform(this._usageFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
