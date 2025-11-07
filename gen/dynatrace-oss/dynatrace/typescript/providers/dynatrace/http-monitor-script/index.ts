// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpMonitorScriptAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the HTTP monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#http_id HttpMonitorScriptA#http_id}
  */
  readonly httpId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#id HttpMonitorScriptA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#script HttpMonitorScriptA#script}
  */
  readonly script: HttpMonitorScriptScript;
}
export interface HttpMonitorScriptScriptRequestAuthentication {
  /**
  * The ID of the credentials within the Dynatrace Credentials Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#credentials HttpMonitorScriptA#credentials}
  */
  readonly credentials: string;
  /**
  * The KDC IP. Valid and required only if the type of authentication is `KERBEROS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#kdc_ip HttpMonitorScriptA#kdc_ip}
  */
  readonly kdcIp?: string;
  /**
  * The Realm Name. Valid and required only if the type of authentication is `KERBEROS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#realm_name HttpMonitorScriptA#realm_name}
  */
  readonly realmName?: string;
  /**
  * The type of authentication. Possible values are `BASIC_AUTHENTICATION`, `NTLM` and `KERBEROS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#type HttpMonitorScriptA#type}
  */
  readonly type: string;
}

export function httpMonitorScriptScriptRequestAuthenticationToTerraform(struct?: HttpMonitorScriptScriptRequestAuthenticationOutputReference | HttpMonitorScriptScriptRequestAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    kdc_ip: cdktf.stringToTerraform(struct!.kdcIp),
    realm_name: cdktf.stringToTerraform(struct!.realmName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httpMonitorScriptScriptRequestAuthenticationToHclTerraform(struct?: HttpMonitorScriptScriptRequestAuthenticationOutputReference | HttpMonitorScriptScriptRequestAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kdc_ip: {
      value: cdktf.stringToHclTerraform(struct!.kdcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm_name: {
      value: cdktf.stringToHclTerraform(struct!.realmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptScriptRequestAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScriptScriptRequestAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._kdcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.kdcIp = this._kdcIp;
    }
    if (this._realmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmName = this._realmName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptScriptRequestAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentials = undefined;
      this._kdcIp = undefined;
      this._realmName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentials = value.credentials;
      this._kdcIp = value.kdcIp;
      this._realmName = value.realmName;
      this._type = value.type;
    }
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // kdc_ip - computed: false, optional: true, required: false
  private _kdcIp?: string; 
  public get kdcIp() {
    return this.getStringAttribute('kdc_ip');
  }
  public set kdcIp(value: string) {
    this._kdcIp = value;
  }
  public resetKdcIp() {
    this._kdcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kdcIpInput() {
    return this._kdcIp;
  }

  // realm_name - computed: false, optional: true, required: false
  private _realmName?: string; 
  public get realmName() {
    return this.getStringAttribute('realm_name');
  }
  public set realmName(value: string) {
    this._realmName = value;
  }
  public resetRealmName() {
    this._realmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmNameInput() {
    return this._realmName;
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
}
export interface HttpMonitorScriptScriptRequestConfigurationHeadersHeader {
  /**
  * The key of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#name HttpMonitorScriptA#name}
  */
  readonly name: string;
  /**
  * The value of the header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#value HttpMonitorScriptA#value}
  */
  readonly value: string;
}

export function httpMonitorScriptScriptRequestConfigurationHeadersHeaderToTerraform(struct?: HttpMonitorScriptScriptRequestConfigurationHeadersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function httpMonitorScriptScriptRequestConfigurationHeadersHeaderToHclTerraform(struct?: HttpMonitorScriptScriptRequestConfigurationHeadersHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptScriptRequestConfigurationHeadersHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorScriptScriptRequestConfigurationHeadersHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptScriptRequestConfigurationHeadersHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HttpMonitorScriptScriptRequestConfigurationHeadersHeaderList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorScriptScriptRequestConfigurationHeadersHeader[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorScriptScriptRequestConfigurationHeadersHeaderOutputReference {
    return new HttpMonitorScriptScriptRequestConfigurationHeadersHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorScriptScriptRequestConfigurationHeaders {
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#header HttpMonitorScriptA#header}
  */
  readonly header: HttpMonitorScriptScriptRequestConfigurationHeadersHeader[] | cdktf.IResolvable;
}

export function httpMonitorScriptScriptRequestConfigurationHeadersToTerraform(struct?: HttpMonitorScriptScriptRequestConfigurationHeadersOutputReference | HttpMonitorScriptScriptRequestConfigurationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.listMapper(httpMonitorScriptScriptRequestConfigurationHeadersHeaderToTerraform, true)(struct!.header),
  }
}


export function httpMonitorScriptScriptRequestConfigurationHeadersToHclTerraform(struct?: HttpMonitorScriptScriptRequestConfigurationHeadersOutputReference | HttpMonitorScriptScriptRequestConfigurationHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header: {
      value: cdktf.listMapperHcl(httpMonitorScriptScriptRequestConfigurationHeadersHeaderToHclTerraform, true)(struct!.header),
      isBlock: true,
      type: "set",
      storageClassType: "HttpMonitorScriptScriptRequestConfigurationHeadersHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptScriptRequestConfigurationHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScriptScriptRequestConfigurationHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptScriptRequestConfigurationHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._header.internalValue = value.header;
    }
  }

  // header - computed: false, optional: false, required: true
  private _header = new HttpMonitorScriptScriptRequestConfigurationHeadersHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: HttpMonitorScriptScriptRequestConfigurationHeadersHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface HttpMonitorScriptScriptRequestConfiguration {
  /**
  * If set to `false`, then the monitor fails with invalid SSL certificates.
  * 
  * If not set, the `false` option is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#accept_any_certificate HttpMonitorScriptA#accept_any_certificate}
  */
  readonly acceptAnyCertificate?: boolean | cdktf.IResolvable;
  /**
  * The client certificate, if applicable - eg. CREDENTIALS_VAULT-XXXXXXXXXXXXXXXX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#client_certificate HttpMonitorScriptA#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * If set to `false`, redirects are reported as successful requests with response code 3xx.
  * 
  * If not set, the `false` option is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#follow_redirects HttpMonitorScriptA#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Option not to store and display request and response bodies and header values in execution details, `true` or `false`. If not set, `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#sensitive_data HttpMonitorScriptA#sensitive_data}
  */
  readonly sensitiveData?: boolean | cdktf.IResolvable;
  /**
  * The User agent of the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#user_agent HttpMonitorScriptA#user_agent}
  */
  readonly userAgent?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#headers HttpMonitorScriptA#headers}
  */
  readonly headers?: HttpMonitorScriptScriptRequestConfigurationHeaders;
}

export function httpMonitorScriptScriptRequestConfigurationToTerraform(struct?: HttpMonitorScriptScriptRequestConfigurationOutputReference | HttpMonitorScriptScriptRequestConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_any_certificate: cdktf.booleanToTerraform(struct!.acceptAnyCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    sensitive_data: cdktf.booleanToTerraform(struct!.sensitiveData),
    user_agent: cdktf.stringToTerraform(struct!.userAgent),
    headers: httpMonitorScriptScriptRequestConfigurationHeadersToTerraform(struct!.headers),
  }
}


export function httpMonitorScriptScriptRequestConfigurationToHclTerraform(struct?: HttpMonitorScriptScriptRequestConfigurationOutputReference | HttpMonitorScriptScriptRequestConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_any_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.acceptAnyCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive_data: {
      value: cdktf.booleanToHclTerraform(struct!.sensitiveData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_agent: {
      value: cdktf.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: httpMonitorScriptScriptRequestConfigurationHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptScriptRequestConfigurationHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptScriptRequestConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScriptScriptRequestConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptAnyCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAnyCertificate = this._acceptAnyCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._sensitiveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveData = this._sensitiveData;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptScriptRequestConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptAnyCertificate = undefined;
      this._clientCertificate = undefined;
      this._followRedirects = undefined;
      this._sensitiveData = undefined;
      this._userAgent = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptAnyCertificate = value.acceptAnyCertificate;
      this._clientCertificate = value.clientCertificate;
      this._followRedirects = value.followRedirects;
      this._sensitiveData = value.sensitiveData;
      this._userAgent = value.userAgent;
      this._headers.internalValue = value.headers;
    }
  }

  // accept_any_certificate - computed: false, optional: true, required: false
  private _acceptAnyCertificate?: boolean | cdktf.IResolvable; 
  public get acceptAnyCertificate() {
    return this.getBooleanAttribute('accept_any_certificate');
  }
  public set acceptAnyCertificate(value: boolean | cdktf.IResolvable) {
    this._acceptAnyCertificate = value;
  }
  public resetAcceptAnyCertificate() {
    this._acceptAnyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAnyCertificateInput() {
    return this._acceptAnyCertificate;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // sensitive_data - computed: false, optional: true, required: false
  private _sensitiveData?: boolean | cdktf.IResolvable; 
  public get sensitiveData() {
    return this.getBooleanAttribute('sensitive_data');
  }
  public set sensitiveData(value: boolean | cdktf.IResolvable) {
    this._sensitiveData = value;
  }
  public resetSensitiveData() {
    this._sensitiveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataInput() {
    return this._sensitiveData;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpMonitorScriptScriptRequestConfigurationHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpMonitorScriptScriptRequestConfigurationHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface HttpMonitorScriptScriptRequestValidationRule {
  /**
  *  The validation condition. `true` means validation succeeds if the specified content/element is found. `false` means validation fails if the specified content/element is found. Always specify `false` for `certificateExpiryDateConstraint` to fail the monitor if SSL certificate expiry is within the specified number of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#pass_if_found HttpMonitorScriptA#pass_if_found}
  */
  readonly passIfFound?: boolean | cdktf.IResolvable;
  /**
  * The type of the rule. Possible values are `patternConstraint`, `regexConstraint`, `httpStatusesList` and `certificateExpiryDateConstraint`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#type HttpMonitorScriptA#type}
  */
  readonly type: string;
  /**
  * The content to look for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#value HttpMonitorScriptA#value}
  */
  readonly value: string;
}

export function httpMonitorScriptScriptRequestValidationRuleToTerraform(struct?: HttpMonitorScriptScriptRequestValidationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass_if_found: cdktf.booleanToTerraform(struct!.passIfFound),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function httpMonitorScriptScriptRequestValidationRuleToHclTerraform(struct?: HttpMonitorScriptScriptRequestValidationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass_if_found: {
      value: cdktf.booleanToHclTerraform(struct!.passIfFound),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptScriptRequestValidationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorScriptScriptRequestValidationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passIfFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.passIfFound = this._passIfFound;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptScriptRequestValidationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passIfFound = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passIfFound = value.passIfFound;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // pass_if_found - computed: false, optional: true, required: false
  private _passIfFound?: boolean | cdktf.IResolvable; 
  public get passIfFound() {
    return this.getBooleanAttribute('pass_if_found');
  }
  public set passIfFound(value: boolean | cdktf.IResolvable) {
    this._passIfFound = value;
  }
  public resetPassIfFound() {
    this._passIfFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passIfFoundInput() {
    return this._passIfFound;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HttpMonitorScriptScriptRequestValidationRuleList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorScriptScriptRequestValidationRule[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorScriptScriptRequestValidationRuleOutputReference {
    return new HttpMonitorScriptScriptRequestValidationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorScriptScriptRequestValidation {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#rule HttpMonitorScriptA#rule}
  */
  readonly rule: HttpMonitorScriptScriptRequestValidationRule[] | cdktf.IResolvable;
}

export function httpMonitorScriptScriptRequestValidationToTerraform(struct?: HttpMonitorScriptScriptRequestValidationOutputReference | HttpMonitorScriptScriptRequestValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(httpMonitorScriptScriptRequestValidationRuleToTerraform, true)(struct!.rule),
  }
}


export function httpMonitorScriptScriptRequestValidationToHclTerraform(struct?: HttpMonitorScriptScriptRequestValidationOutputReference | HttpMonitorScriptScriptRequestValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(httpMonitorScriptScriptRequestValidationRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptScriptRequestValidationRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptScriptRequestValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScriptScriptRequestValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptScriptRequestValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new HttpMonitorScriptScriptRequestValidationRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: HttpMonitorScriptScriptRequestValidationRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface HttpMonitorScriptScriptRequest {
  /**
  * The body of the HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#body HttpMonitorScriptA#body}
  */
  readonly body?: string;
  /**
  * A short description of the event to appear in the web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#description HttpMonitorScriptA#description}
  */
  readonly description?: string;
  /**
  * The HTTP method of the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#method HttpMonitorScriptA#method}
  */
  readonly method: string;
  /**
  * Javascript code to execute after sending the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#post_processing HttpMonitorScriptA#post_processing}
  */
  readonly postProcessing?: string;
  /**
  * Javascript code to execute before sending the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#pre_processing HttpMonitorScriptA#pre_processing}
  */
  readonly preProcessing?: string;
  /**
  * Adapt request timeout option - the maximum time this request is allowed to consume. Keep in mind the maximum timeout of the complete monitor is 60 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#request_timeout HttpMonitorScriptA#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * The URL to check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#url HttpMonitorScriptA#url}
  */
  readonly url: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#authentication HttpMonitorScriptA#authentication}
  */
  readonly authentication?: HttpMonitorScriptScriptRequestAuthentication;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#configuration HttpMonitorScriptA#configuration}
  */
  readonly configuration?: HttpMonitorScriptScriptRequestConfiguration;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#validation HttpMonitorScriptA#validation}
  */
  readonly validation?: HttpMonitorScriptScriptRequestValidation;
}

export function httpMonitorScriptScriptRequestToTerraform(struct?: HttpMonitorScriptScriptRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    description: cdktf.stringToTerraform(struct!.description),
    method: cdktf.stringToTerraform(struct!.method),
    post_processing: cdktf.stringToTerraform(struct!.postProcessing),
    pre_processing: cdktf.stringToTerraform(struct!.preProcessing),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
    url: cdktf.stringToTerraform(struct!.url),
    authentication: httpMonitorScriptScriptRequestAuthenticationToTerraform(struct!.authentication),
    configuration: httpMonitorScriptScriptRequestConfigurationToTerraform(struct!.configuration),
    validation: httpMonitorScriptScriptRequestValidationToTerraform(struct!.validation),
  }
}


export function httpMonitorScriptScriptRequestToHclTerraform(struct?: HttpMonitorScriptScriptRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_processing: {
      value: cdktf.stringToHclTerraform(struct!.postProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_processing: {
      value: cdktf.stringToHclTerraform(struct!.preProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    authentication: {
      value: httpMonitorScriptScriptRequestAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptScriptRequestAuthenticationList",
    },
    configuration: {
      value: httpMonitorScriptScriptRequestConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptScriptRequestConfigurationList",
    },
    validation: {
      value: httpMonitorScriptScriptRequestValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptScriptRequestValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptScriptRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpMonitorScriptScriptRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._postProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.postProcessing = this._postProcessing;
    }
    if (this._preProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.preProcessing = this._preProcessing;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptScriptRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._description = undefined;
      this._method = undefined;
      this._postProcessing = undefined;
      this._preProcessing = undefined;
      this._requestTimeout = undefined;
      this._url = undefined;
      this._authentication.internalValue = undefined;
      this._configuration.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._description = value.description;
      this._method = value.method;
      this._postProcessing = value.postProcessing;
      this._preProcessing = value.preProcessing;
      this._requestTimeout = value.requestTimeout;
      this._url = value.url;
      this._authentication.internalValue = value.authentication;
      this._configuration.internalValue = value.configuration;
      this._validation.internalValue = value.validation;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // post_processing - computed: false, optional: true, required: false
  private _postProcessing?: string; 
  public get postProcessing() {
    return this.getStringAttribute('post_processing');
  }
  public set postProcessing(value: string) {
    this._postProcessing = value;
  }
  public resetPostProcessing() {
    this._postProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postProcessingInput() {
    return this._postProcessing;
  }

  // pre_processing - computed: false, optional: true, required: false
  private _preProcessing?: string; 
  public get preProcessing() {
    return this.getStringAttribute('pre_processing');
  }
  public set preProcessing(value: string) {
    this._preProcessing = value;
  }
  public resetPreProcessing() {
    this._preProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preProcessingInput() {
    return this._preProcessing;
  }

  // request_timeout - computed: false, optional: true, required: false
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new HttpMonitorScriptScriptRequestAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: HttpMonitorScriptScriptRequestAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new HttpMonitorScriptScriptRequestConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: HttpMonitorScriptScriptRequestConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new HttpMonitorScriptScriptRequestValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: HttpMonitorScriptScriptRequestValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

export class HttpMonitorScriptScriptRequestList extends cdktf.ComplexList {
  public internalValue? : HttpMonitorScriptScriptRequest[] | cdktf.IResolvable

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
  public get(index: number): HttpMonitorScriptScriptRequestOutputReference {
    return new HttpMonitorScriptScriptRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpMonitorScriptScript {
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#request HttpMonitorScriptA#request}
  */
  readonly request: HttpMonitorScriptScriptRequest[] | cdktf.IResolvable;
}

export function httpMonitorScriptScriptToTerraform(struct?: HttpMonitorScriptScriptOutputReference | HttpMonitorScriptScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request: cdktf.listMapper(httpMonitorScriptScriptRequestToTerraform, true)(struct!.request),
  }
}


export function httpMonitorScriptScriptToHclTerraform(struct?: HttpMonitorScriptScriptOutputReference | HttpMonitorScriptScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request: {
      value: cdktf.listMapperHcl(httpMonitorScriptScriptRequestToHclTerraform, true)(struct!.request),
      isBlock: true,
      type: "list",
      storageClassType: "HttpMonitorScriptScriptRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpMonitorScriptScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpMonitorScriptScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpMonitorScriptScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._request.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._request.internalValue = value.request;
    }
  }

  // request - computed: false, optional: false, required: true
  private _request = new HttpMonitorScriptScriptRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: HttpMonitorScriptScriptRequest[] | cdktf.IResolvable) {
    this._request.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script dynatrace_http_monitor_script}
*/
export class HttpMonitorScriptA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_http_monitor_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpMonitorScriptA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpMonitorScriptA to import
  * @param importFromId The id of the existing HttpMonitorScriptA that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpMonitorScriptA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_http_monitor_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/http_monitor_script dynatrace_http_monitor_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpMonitorScriptAConfig
  */
  public constructor(scope: Construct, id: string, config: HttpMonitorScriptAConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_http_monitor_script',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpId = config.httpId;
    this._id = config.id;
    this._script.internalValue = config.script;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_id - computed: false, optional: false, required: true
  private _httpId?: string; 
  public get httpId() {
    return this.getStringAttribute('http_id');
  }
  public set httpId(value: string) {
    this._httpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIdInput() {
    return this._httpId;
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

  // script - computed: false, optional: false, required: true
  private _script = new HttpMonitorScriptScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: HttpMonitorScriptScript) {
    this._script.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_id: cdktf.stringToTerraform(this._httpId),
      id: cdktf.stringToTerraform(this._id),
      script: httpMonitorScriptScriptToTerraform(this._script.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_id: {
        value: cdktf.stringToHclTerraform(this._httpId),
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
      script: {
        value: httpMonitorScriptScriptToHclTerraform(this._script.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HttpMonitorScriptScriptList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
