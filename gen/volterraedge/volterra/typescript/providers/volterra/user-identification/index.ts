// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserIdentificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#annotations UserIdentification#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#description UserIdentification#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#disable UserIdentification#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#id UserIdentification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#labels UserIdentification#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#name UserIdentification#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#namespace UserIdentification#namespace}
  */
  readonly namespace: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#rules UserIdentification#rules}
  */
  readonly rules: UserIdentificationRules[] | cdktf.IResolvable;
}
export interface UserIdentificationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#client_asn UserIdentification#client_asn}
  */
  readonly clientAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#client_city UserIdentification#client_city}
  */
  readonly clientCity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#client_country UserIdentification#client_country}
  */
  readonly clientCountry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#client_ip UserIdentification#client_ip}
  */
  readonly clientIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#client_region UserIdentification#client_region}
  */
  readonly clientRegion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#cookie_name UserIdentification#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#http_header_name UserIdentification#http_header_name}
  */
  readonly httpHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#ip_and_http_header_name UserIdentification#ip_and_http_header_name}
  */
  readonly ipAndHttpHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#ip_and_ja4_tls_fingerprint UserIdentification#ip_and_ja4_tls_fingerprint}
  */
  readonly ipAndJa4TlsFingerprint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#ip_and_tls_fingerprint UserIdentification#ip_and_tls_fingerprint}
  */
  readonly ipAndTlsFingerprint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#ja4_tls_fingerprint UserIdentification#ja4_tls_fingerprint}
  */
  readonly ja4TlsFingerprint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#jwt_claim_name UserIdentification#jwt_claim_name}
  */
  readonly jwtClaimName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#none UserIdentification#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#query_param_key UserIdentification#query_param_key}
  */
  readonly queryParamKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#tls_fingerprint UserIdentification#tls_fingerprint}
  */
  readonly tlsFingerprint?: boolean | cdktf.IResolvable;
}

export function userIdentificationRulesToTerraform(struct?: UserIdentificationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_asn: cdktf.booleanToTerraform(struct!.clientAsn),
    client_city: cdktf.booleanToTerraform(struct!.clientCity),
    client_country: cdktf.booleanToTerraform(struct!.clientCountry),
    client_ip: cdktf.booleanToTerraform(struct!.clientIp),
    client_region: cdktf.booleanToTerraform(struct!.clientRegion),
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    ip_and_http_header_name: cdktf.stringToTerraform(struct!.ipAndHttpHeaderName),
    ip_and_ja4_tls_fingerprint: cdktf.booleanToTerraform(struct!.ipAndJa4TlsFingerprint),
    ip_and_tls_fingerprint: cdktf.booleanToTerraform(struct!.ipAndTlsFingerprint),
    ja4_tls_fingerprint: cdktf.booleanToTerraform(struct!.ja4TlsFingerprint),
    jwt_claim_name: cdktf.stringToTerraform(struct!.jwtClaimName),
    none: cdktf.booleanToTerraform(struct!.none),
    query_param_key: cdktf.stringToTerraform(struct!.queryParamKey),
    tls_fingerprint: cdktf.booleanToTerraform(struct!.tlsFingerprint),
  }
}


export function userIdentificationRulesToHclTerraform(struct?: UserIdentificationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_asn: {
      value: cdktf.booleanToHclTerraform(struct!.clientAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_city: {
      value: cdktf.booleanToHclTerraform(struct!.clientCity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_country: {
      value: cdktf.booleanToHclTerraform(struct!.clientCountry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_ip: {
      value: cdktf.booleanToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_region: {
      value: cdktf.booleanToHclTerraform(struct!.clientRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_and_http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.ipAndHttpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_and_ja4_tls_fingerprint: {
      value: cdktf.booleanToHclTerraform(struct!.ipAndJa4TlsFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_and_tls_fingerprint: {
      value: cdktf.booleanToHclTerraform(struct!.ipAndTlsFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ja4_tls_fingerprint: {
      value: cdktf.booleanToHclTerraform(struct!.ja4TlsFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jwt_claim_name: {
      value: cdktf.stringToHclTerraform(struct!.jwtClaimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_param_key: {
      value: cdktf.stringToHclTerraform(struct!.queryParamKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_fingerprint: {
      value: cdktf.booleanToHclTerraform(struct!.tlsFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserIdentificationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserIdentificationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAsn = this._clientAsn;
    }
    if (this._clientCity !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCity = this._clientCity;
    }
    if (this._clientCountry !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCountry = this._clientCountry;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._clientRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRegion = this._clientRegion;
    }
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._ipAndHttpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAndHttpHeaderName = this._ipAndHttpHeaderName;
    }
    if (this._ipAndJa4TlsFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAndJa4TlsFingerprint = this._ipAndJa4TlsFingerprint;
    }
    if (this._ipAndTlsFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAndTlsFingerprint = this._ipAndTlsFingerprint;
    }
    if (this._ja4TlsFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4TlsFingerprint = this._ja4TlsFingerprint;
    }
    if (this._jwtClaimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaimName = this._jwtClaimName;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._queryParamKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParamKey = this._queryParamKey;
    }
    if (this._tlsFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprint = this._tlsFingerprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserIdentificationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAsn = undefined;
      this._clientCity = undefined;
      this._clientCountry = undefined;
      this._clientIp = undefined;
      this._clientRegion = undefined;
      this._cookieName = undefined;
      this._httpHeaderName = undefined;
      this._ipAndHttpHeaderName = undefined;
      this._ipAndJa4TlsFingerprint = undefined;
      this._ipAndTlsFingerprint = undefined;
      this._ja4TlsFingerprint = undefined;
      this._jwtClaimName = undefined;
      this._none = undefined;
      this._queryParamKey = undefined;
      this._tlsFingerprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAsn = value.clientAsn;
      this._clientCity = value.clientCity;
      this._clientCountry = value.clientCountry;
      this._clientIp = value.clientIp;
      this._clientRegion = value.clientRegion;
      this._cookieName = value.cookieName;
      this._httpHeaderName = value.httpHeaderName;
      this._ipAndHttpHeaderName = value.ipAndHttpHeaderName;
      this._ipAndJa4TlsFingerprint = value.ipAndJa4TlsFingerprint;
      this._ipAndTlsFingerprint = value.ipAndTlsFingerprint;
      this._ja4TlsFingerprint = value.ja4TlsFingerprint;
      this._jwtClaimName = value.jwtClaimName;
      this._none = value.none;
      this._queryParamKey = value.queryParamKey;
      this._tlsFingerprint = value.tlsFingerprint;
    }
  }

  // client_asn - computed: false, optional: true, required: false
  private _clientAsn?: boolean | cdktf.IResolvable; 
  public get clientAsn() {
    return this.getBooleanAttribute('client_asn');
  }
  public set clientAsn(value: boolean | cdktf.IResolvable) {
    this._clientAsn = value;
  }
  public resetClientAsn() {
    this._clientAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAsnInput() {
    return this._clientAsn;
  }

  // client_city - computed: false, optional: true, required: false
  private _clientCity?: boolean | cdktf.IResolvable; 
  public get clientCity() {
    return this.getBooleanAttribute('client_city');
  }
  public set clientCity(value: boolean | cdktf.IResolvable) {
    this._clientCity = value;
  }
  public resetClientCity() {
    this._clientCity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCityInput() {
    return this._clientCity;
  }

  // client_country - computed: false, optional: true, required: false
  private _clientCountry?: boolean | cdktf.IResolvable; 
  public get clientCountry() {
    return this.getBooleanAttribute('client_country');
  }
  public set clientCountry(value: boolean | cdktf.IResolvable) {
    this._clientCountry = value;
  }
  public resetClientCountry() {
    this._clientCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCountryInput() {
    return this._clientCountry;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: boolean | cdktf.IResolvable; 
  public get clientIp() {
    return this.getBooleanAttribute('client_ip');
  }
  public set clientIp(value: boolean | cdktf.IResolvable) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // client_region - computed: false, optional: true, required: false
  private _clientRegion?: boolean | cdktf.IResolvable; 
  public get clientRegion() {
    return this.getBooleanAttribute('client_region');
  }
  public set clientRegion(value: boolean | cdktf.IResolvable) {
    this._clientRegion = value;
  }
  public resetClientRegion() {
    this._clientRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRegionInput() {
    return this._clientRegion;
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // http_header_name - computed: false, optional: true, required: false
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  public resetHttpHeaderName() {
    this._httpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // ip_and_http_header_name - computed: false, optional: true, required: false
  private _ipAndHttpHeaderName?: string; 
  public get ipAndHttpHeaderName() {
    return this.getStringAttribute('ip_and_http_header_name');
  }
  public set ipAndHttpHeaderName(value: string) {
    this._ipAndHttpHeaderName = value;
  }
  public resetIpAndHttpHeaderName() {
    this._ipAndHttpHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAndHttpHeaderNameInput() {
    return this._ipAndHttpHeaderName;
  }

  // ip_and_ja4_tls_fingerprint - computed: false, optional: true, required: false
  private _ipAndJa4TlsFingerprint?: boolean | cdktf.IResolvable; 
  public get ipAndJa4TlsFingerprint() {
    return this.getBooleanAttribute('ip_and_ja4_tls_fingerprint');
  }
  public set ipAndJa4TlsFingerprint(value: boolean | cdktf.IResolvable) {
    this._ipAndJa4TlsFingerprint = value;
  }
  public resetIpAndJa4TlsFingerprint() {
    this._ipAndJa4TlsFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAndJa4TlsFingerprintInput() {
    return this._ipAndJa4TlsFingerprint;
  }

  // ip_and_tls_fingerprint - computed: false, optional: true, required: false
  private _ipAndTlsFingerprint?: boolean | cdktf.IResolvable; 
  public get ipAndTlsFingerprint() {
    return this.getBooleanAttribute('ip_and_tls_fingerprint');
  }
  public set ipAndTlsFingerprint(value: boolean | cdktf.IResolvable) {
    this._ipAndTlsFingerprint = value;
  }
  public resetIpAndTlsFingerprint() {
    this._ipAndTlsFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAndTlsFingerprintInput() {
    return this._ipAndTlsFingerprint;
  }

  // ja4_tls_fingerprint - computed: false, optional: true, required: false
  private _ja4TlsFingerprint?: boolean | cdktf.IResolvable; 
  public get ja4TlsFingerprint() {
    return this.getBooleanAttribute('ja4_tls_fingerprint');
  }
  public set ja4TlsFingerprint(value: boolean | cdktf.IResolvable) {
    this._ja4TlsFingerprint = value;
  }
  public resetJa4TlsFingerprint() {
    this._ja4TlsFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4TlsFingerprintInput() {
    return this._ja4TlsFingerprint;
  }

  // jwt_claim_name - computed: false, optional: true, required: false
  private _jwtClaimName?: string; 
  public get jwtClaimName() {
    return this.getStringAttribute('jwt_claim_name');
  }
  public set jwtClaimName(value: string) {
    this._jwtClaimName = value;
  }
  public resetJwtClaimName() {
    this._jwtClaimName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimNameInput() {
    return this._jwtClaimName;
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // query_param_key - computed: false, optional: true, required: false
  private _queryParamKey?: string; 
  public get queryParamKey() {
    return this.getStringAttribute('query_param_key');
  }
  public set queryParamKey(value: string) {
    this._queryParamKey = value;
  }
  public resetQueryParamKey() {
    this._queryParamKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamKeyInput() {
    return this._queryParamKey;
  }

  // tls_fingerprint - computed: false, optional: true, required: false
  private _tlsFingerprint?: boolean | cdktf.IResolvable; 
  public get tlsFingerprint() {
    return this.getBooleanAttribute('tls_fingerprint');
  }
  public set tlsFingerprint(value: boolean | cdktf.IResolvable) {
    this._tlsFingerprint = value;
  }
  public resetTlsFingerprint() {
    this._tlsFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintInput() {
    return this._tlsFingerprint;
  }
}

export class UserIdentificationRulesList extends cdktf.ComplexList {
  public internalValue? : UserIdentificationRules[] | cdktf.IResolvable

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
  public get(index: number): UserIdentificationRulesOutputReference {
    return new UserIdentificationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification volterra_user_identification}
*/
export class UserIdentification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_user_identification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserIdentification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserIdentification to import
  * @param importFromId The id of the existing UserIdentification that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserIdentification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_user_identification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/user_identification volterra_user_identification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserIdentificationConfig
  */
  public constructor(scope: Construct, id: string, config: UserIdentificationConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_user_identification',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new UserIdentificationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: UserIdentificationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      rules: cdktf.listMapper(userIdentificationRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(userIdentificationRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserIdentificationRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
