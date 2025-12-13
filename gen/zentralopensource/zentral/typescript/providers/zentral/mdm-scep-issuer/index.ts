// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmScepIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * SCEP issuer backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#backend MdmScepIssuer#backend}
  */
  readonly backend: string;
  /**
  * Description of the SCEP issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#description MdmScepIssuer#description}
  */
  readonly description?: string;
  /**
  * IDent backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#digicert MdmScepIssuer#digicert}
  */
  readonly digicert?: MdmScepIssuerDigicert;
  /**
  * IDent backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#ident MdmScepIssuer#ident}
  */
  readonly ident?: MdmScepIssuerIdent;
  /**
  * The key size in bits, either `1024`, `2048`, or `4096`. Defaults to `2048`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#key_size MdmScepIssuer#key_size}
  */
  readonly keySize?: number;
  /**
  * A bitmask that specifies the use of the key: `1` is signing, `4` is encryption, and `5` is both signing and encryption. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#key_usage MdmScepIssuer#key_usage}
  */
  readonly keyUsage?: number;
  /**
  * Microsoft CA backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#microsoft_ca MdmScepIssuer#microsoft_ca}
  */
  readonly microsoftCa?: MdmScepIssuerMicrosoftCa;
  /**
  * Name of the SCEP issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#name MdmScepIssuer#name}
  */
  readonly name: string;
  /**
  * Okta CA backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#okta_ca MdmScepIssuer#okta_ca}
  */
  readonly oktaCa?: MdmScepIssuerOktaCa;
  /**
  * Static Challenge backend parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#static_challenge MdmScepIssuer#static_challenge}
  */
  readonly staticChallenge?: MdmScepIssuerStaticChallenge;
  /**
  * URL of the SCEP issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#url MdmScepIssuer#url}
  */
  readonly url: string;
}
export interface MdmScepIssuerDigicert {
  /**
  * API base URL. Defaults to `https://one.digicert.com/mpki/api/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#api_base_url MdmScepIssuer#api_base_url}
  */
  readonly apiBaseUrl?: string;
  /**
  * API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#api_token MdmScepIssuer#api_token}
  */
  readonly apiToken: string;
  /**
  * Business unit GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#business_unit_guid MdmScepIssuer#business_unit_guid}
  */
  readonly businessUnitGuid: string;
  /**
  * Default seat email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#default_seat_email MdmScepIssuer#default_seat_email}
  */
  readonly defaultSeatEmail: string;
  /**
  * Profile GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#profile_guid MdmScepIssuer#profile_guid}
  */
  readonly profileGuid: string;
  /**
  * Seat ID mapping. Possible values: `common_name`, `email`, `serial_number`, `unique_identifier`, `user_identifier`, `pseudonym`, `dn_qualifier`, `rfc822Name`, `dNSName`. Defaults to `common_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#seat_id_mapping MdmScepIssuer#seat_id_mapping}
  */
  readonly seatIdMapping?: string;
  /**
  * Seat type. `DEVICE_SEAT` or `USER_SEAT`. Defaults to `DEVICE_SEAT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#seat_type MdmScepIssuer#seat_type}
  */
  readonly seatType?: string;
}

export function mdmScepIssuerDigicertToTerraform(struct?: MdmScepIssuerDigicert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_base_url: cdktf.stringToTerraform(struct!.apiBaseUrl),
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    business_unit_guid: cdktf.stringToTerraform(struct!.businessUnitGuid),
    default_seat_email: cdktf.stringToTerraform(struct!.defaultSeatEmail),
    profile_guid: cdktf.stringToTerraform(struct!.profileGuid),
    seat_id_mapping: cdktf.stringToTerraform(struct!.seatIdMapping),
    seat_type: cdktf.stringToTerraform(struct!.seatType),
  }
}


export function mdmScepIssuerDigicertToHclTerraform(struct?: MdmScepIssuerDigicert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_base_url: {
      value: cdktf.stringToHclTerraform(struct!.apiBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    business_unit_guid: {
      value: cdktf.stringToHclTerraform(struct!.businessUnitGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_seat_email: {
      value: cdktf.stringToHclTerraform(struct!.defaultSeatEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_guid: {
      value: cdktf.stringToHclTerraform(struct!.profileGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seat_id_mapping: {
      value: cdktf.stringToHclTerraform(struct!.seatIdMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seat_type: {
      value: cdktf.stringToHclTerraform(struct!.seatType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdmScepIssuerDigicertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmScepIssuerDigicert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiBaseUrl = this._apiBaseUrl;
    }
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._businessUnitGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessUnitGuid = this._businessUnitGuid;
    }
    if (this._defaultSeatEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSeatEmail = this._defaultSeatEmail;
    }
    if (this._profileGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileGuid = this._profileGuid;
    }
    if (this._seatIdMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.seatIdMapping = this._seatIdMapping;
    }
    if (this._seatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.seatType = this._seatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmScepIssuerDigicert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiBaseUrl = undefined;
      this._apiToken = undefined;
      this._businessUnitGuid = undefined;
      this._defaultSeatEmail = undefined;
      this._profileGuid = undefined;
      this._seatIdMapping = undefined;
      this._seatType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiBaseUrl = value.apiBaseUrl;
      this._apiToken = value.apiToken;
      this._businessUnitGuid = value.businessUnitGuid;
      this._defaultSeatEmail = value.defaultSeatEmail;
      this._profileGuid = value.profileGuid;
      this._seatIdMapping = value.seatIdMapping;
      this._seatType = value.seatType;
    }
  }

  // api_base_url - computed: true, optional: true, required: false
  private _apiBaseUrl?: string; 
  public get apiBaseUrl() {
    return this.getStringAttribute('api_base_url');
  }
  public set apiBaseUrl(value: string) {
    this._apiBaseUrl = value;
  }
  public resetApiBaseUrl() {
    this._apiBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiBaseUrlInput() {
    return this._apiBaseUrl;
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // business_unit_guid - computed: false, optional: false, required: true
  private _businessUnitGuid?: string; 
  public get businessUnitGuid() {
    return this.getStringAttribute('business_unit_guid');
  }
  public set businessUnitGuid(value: string) {
    this._businessUnitGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessUnitGuidInput() {
    return this._businessUnitGuid;
  }

  // default_seat_email - computed: false, optional: false, required: true
  private _defaultSeatEmail?: string; 
  public get defaultSeatEmail() {
    return this.getStringAttribute('default_seat_email');
  }
  public set defaultSeatEmail(value: string) {
    this._defaultSeatEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSeatEmailInput() {
    return this._defaultSeatEmail;
  }

  // profile_guid - computed: false, optional: false, required: true
  private _profileGuid?: string; 
  public get profileGuid() {
    return this.getStringAttribute('profile_guid');
  }
  public set profileGuid(value: string) {
    this._profileGuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileGuidInput() {
    return this._profileGuid;
  }

  // seat_id_mapping - computed: true, optional: true, required: false
  private _seatIdMapping?: string; 
  public get seatIdMapping() {
    return this.getStringAttribute('seat_id_mapping');
  }
  public set seatIdMapping(value: string) {
    this._seatIdMapping = value;
  }
  public resetSeatIdMapping() {
    this._seatIdMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seatIdMappingInput() {
    return this._seatIdMapping;
  }

  // seat_type - computed: true, optional: true, required: false
  private _seatType?: string; 
  public get seatType() {
    return this.getStringAttribute('seat_type');
  }
  public set seatType(value: string) {
    this._seatType = value;
  }
  public resetSeatType() {
    this._seatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seatTypeInput() {
    return this._seatType;
  }
}
export interface MdmScepIssuerIdent {
  /**
  * Bearer token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#bearer_token MdmScepIssuer#bearer_token}
  */
  readonly bearerToken: string;
  /**
  * Max number of retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#max_retries MdmScepIssuer#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Request timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#request_timeout MdmScepIssuer#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * HTTP endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#url MdmScepIssuer#url}
  */
  readonly url: string;
}

export function mdmScepIssuerIdentToTerraform(struct?: MdmScepIssuerIdent | cdktf.IResolvable): any {
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


export function mdmScepIssuerIdentToHclTerraform(struct?: MdmScepIssuerIdent | cdktf.IResolvable): any {
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

export class MdmScepIssuerIdentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmScepIssuerIdent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdmScepIssuerIdent | cdktf.IResolvable | undefined) {
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
export interface MdmScepIssuerMicrosoftCa {
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#password MdmScepIssuer#password}
  */
  readonly password: string;
  /**
  * HTTP endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#url MdmScepIssuer#url}
  */
  readonly url: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#username MdmScepIssuer#username}
  */
  readonly username: string;
}

export function mdmScepIssuerMicrosoftCaToTerraform(struct?: MdmScepIssuerMicrosoftCa | cdktf.IResolvable): any {
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


export function mdmScepIssuerMicrosoftCaToHclTerraform(struct?: MdmScepIssuerMicrosoftCa | cdktf.IResolvable): any {
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

export class MdmScepIssuerMicrosoftCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmScepIssuerMicrosoftCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdmScepIssuerMicrosoftCa | cdktf.IResolvable | undefined) {
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
export interface MdmScepIssuerOktaCa {
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#password MdmScepIssuer#password}
  */
  readonly password: string;
  /**
  * HTTP endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#url MdmScepIssuer#url}
  */
  readonly url: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#username MdmScepIssuer#username}
  */
  readonly username: string;
}

export function mdmScepIssuerOktaCaToTerraform(struct?: MdmScepIssuerOktaCa | cdktf.IResolvable): any {
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


export function mdmScepIssuerOktaCaToHclTerraform(struct?: MdmScepIssuerOktaCa | cdktf.IResolvable): any {
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

export class MdmScepIssuerOktaCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmScepIssuerOktaCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdmScepIssuerOktaCa | cdktf.IResolvable | undefined) {
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
export interface MdmScepIssuerStaticChallenge {
  /**
  * Challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#challenge MdmScepIssuer#challenge}
  */
  readonly challenge: string;
}

export function mdmScepIssuerStaticChallengeToTerraform(struct?: MdmScepIssuerStaticChallenge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge: cdktf.stringToTerraform(struct!.challenge),
  }
}


export function mdmScepIssuerStaticChallengeToHclTerraform(struct?: MdmScepIssuerStaticChallenge | cdktf.IResolvable): any {
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

export class MdmScepIssuerStaticChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmScepIssuerStaticChallenge | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdmScepIssuerStaticChallenge | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer zentral_mdm_scep_issuer}
*/
export class MdmScepIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_scep_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmScepIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmScepIssuer to import
  * @param importFromId The id of the existing MdmScepIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmScepIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_scep_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.68/docs/resources/mdm_scep_issuer zentral_mdm_scep_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmScepIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: MdmScepIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_scep_issuer',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backend = config.backend;
    this._description = config.description;
    this._digicert.internalValue = config.digicert;
    this._ident.internalValue = config.ident;
    this._keySize = config.keySize;
    this._keyUsage = config.keyUsage;
    this._microsoftCa.internalValue = config.microsoftCa;
    this._name = config.name;
    this._oktaCa.internalValue = config.oktaCa;
    this._staticChallenge.internalValue = config.staticChallenge;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // digicert - computed: false, optional: true, required: false
  private _digicert = new MdmScepIssuerDigicertOutputReference(this, "digicert");
  public get digicert() {
    return this._digicert;
  }
  public putDigicert(value: MdmScepIssuerDigicert) {
    this._digicert.internalValue = value;
  }
  public resetDigicert() {
    this._digicert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digicertInput() {
    return this._digicert.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ident - computed: false, optional: true, required: false
  private _ident = new MdmScepIssuerIdentOutputReference(this, "ident");
  public get ident() {
    return this._ident;
  }
  public putIdent(value: MdmScepIssuerIdent) {
    this._ident.internalValue = value;
  }
  public resetIdent() {
    this._ident.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identInput() {
    return this._ident.internalValue;
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_usage - computed: true, optional: true, required: false
  private _keyUsage?: number; 
  public get keyUsage() {
    return this.getNumberAttribute('key_usage');
  }
  public set keyUsage(value: number) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
  }

  // microsoft_ca - computed: false, optional: true, required: false
  private _microsoftCa = new MdmScepIssuerMicrosoftCaOutputReference(this, "microsoft_ca");
  public get microsoftCa() {
    return this._microsoftCa;
  }
  public putMicrosoftCa(value: MdmScepIssuerMicrosoftCa) {
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
  private _oktaCa = new MdmScepIssuerOktaCaOutputReference(this, "okta_ca");
  public get oktaCa() {
    return this._oktaCa;
  }
  public putOktaCa(value: MdmScepIssuerOktaCa) {
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
  private _staticChallenge = new MdmScepIssuerStaticChallengeOutputReference(this, "static_challenge");
  public get staticChallenge() {
    return this._staticChallenge;
  }
  public putStaticChallenge(value: MdmScepIssuerStaticChallenge) {
    this._staticChallenge.internalValue = value;
  }
  public resetStaticChallenge() {
    this._staticChallenge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticChallengeInput() {
    return this._staticChallenge.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      description: cdktf.stringToTerraform(this._description),
      digicert: mdmScepIssuerDigicertToTerraform(this._digicert.internalValue),
      ident: mdmScepIssuerIdentToTerraform(this._ident.internalValue),
      key_size: cdktf.numberToTerraform(this._keySize),
      key_usage: cdktf.numberToTerraform(this._keyUsage),
      microsoft_ca: mdmScepIssuerMicrosoftCaToTerraform(this._microsoftCa.internalValue),
      name: cdktf.stringToTerraform(this._name),
      okta_ca: mdmScepIssuerOktaCaToTerraform(this._oktaCa.internalValue),
      static_challenge: mdmScepIssuerStaticChallengeToTerraform(this._staticChallenge.internalValue),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      digicert: {
        value: mdmScepIssuerDigicertToHclTerraform(this._digicert.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmScepIssuerDigicert",
      },
      ident: {
        value: mdmScepIssuerIdentToHclTerraform(this._ident.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmScepIssuerIdent",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_usage: {
        value: cdktf.numberToHclTerraform(this._keyUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      microsoft_ca: {
        value: mdmScepIssuerMicrosoftCaToHclTerraform(this._microsoftCa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmScepIssuerMicrosoftCa",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      okta_ca: {
        value: mdmScepIssuerOktaCaToHclTerraform(this._oktaCa.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmScepIssuerOktaCa",
      },
      static_challenge: {
        value: mdmScepIssuerStaticChallengeToHclTerraform(this._staticChallenge.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmScepIssuerStaticChallenge",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
