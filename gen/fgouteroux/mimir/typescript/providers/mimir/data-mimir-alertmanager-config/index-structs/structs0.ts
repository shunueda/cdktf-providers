import * as cdktf from 'cdktf';
export interface DataMimirAlertmanagerConfigGlobalHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigGlobalHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigGlobalHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigGlobalHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigGlobalHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigGlobalHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigGlobalHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigGlobalHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigGlobalHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigGlobalHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigGlobalHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigGlobalHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigGlobalHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigGlobalHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigGlobalHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigGlobalHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigGlobalHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigGlobalHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigGlobalHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigGlobalHttpConfig {
}

export function dataMimirAlertmanagerConfigGlobalHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigGlobalHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigGlobalHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigGlobalHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigGlobalHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigGlobalHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigGlobalHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigGlobalHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigGlobalHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigGlobalHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigGlobalHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigGlobalHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigGlobal {
}

export function dataMimirAlertmanagerConfigGlobalToTerraform(struct?: DataMimirAlertmanagerConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigGlobalToHclTerraform(struct?: DataMimirAlertmanagerConfigGlobal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigGlobalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigGlobal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigGlobal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigGlobalHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // opsgenie_api_key - computed: true, optional: false, required: false
  public get opsgenieApiKey() {
    return this.getStringAttribute('opsgenie_api_key');
  }

  // opsgenie_api_url - computed: true, optional: false, required: false
  public get opsgenieApiUrl() {
    return this.getStringAttribute('opsgenie_api_url');
  }

  // pagerduty_url - computed: true, optional: false, required: false
  public get pagerdutyUrl() {
    return this.getStringAttribute('pagerduty_url');
  }

  // resolve_timeout - computed: true, optional: false, required: false
  public get resolveTimeout() {
    return this.getStringAttribute('resolve_timeout');
  }

  // slack_api_url - computed: true, optional: false, required: false
  public get slackApiUrl() {
    return this.getStringAttribute('slack_api_url');
  }

  // smtp_auth_identity - computed: true, optional: false, required: false
  public get smtpAuthIdentity() {
    return this.getStringAttribute('smtp_auth_identity');
  }

  // smtp_auth_password - computed: true, optional: false, required: false
  public get smtpAuthPassword() {
    return this.getStringAttribute('smtp_auth_password');
  }

  // smtp_auth_secret - computed: true, optional: false, required: false
  public get smtpAuthSecret() {
    return this.getStringAttribute('smtp_auth_secret');
  }

  // smtp_auth_username - computed: true, optional: false, required: false
  public get smtpAuthUsername() {
    return this.getStringAttribute('smtp_auth_username');
  }

  // smtp_from - computed: true, optional: false, required: false
  public get smtpFrom() {
    return this.getStringAttribute('smtp_from');
  }

  // smtp_hello - computed: true, optional: false, required: false
  public get smtpHello() {
    return this.getStringAttribute('smtp_hello');
  }

  // smtp_require_tls - computed: true, optional: false, required: false
  public get smtpRequireTls() {
    return this.getBooleanAttribute('smtp_require_tls');
  }

  // smtp_smarthost - computed: true, optional: false, required: false
  public get smtpSmarthost() {
    return this.getStringAttribute('smtp_smarthost');
  }

  // telegram_api_url - computed: true, optional: false, required: false
  public get telegramApiUrl() {
    return this.getStringAttribute('telegram_api_url');
  }

  // victorops_api_key - computed: true, optional: false, required: false
  public get victoropsApiKey() {
    return this.getStringAttribute('victorops_api_key');
  }

  // victorops_api_url - computed: true, optional: false, required: false
  public get victoropsApiUrl() {
    return this.getStringAttribute('victorops_api_url');
  }

  // webex_api_url - computed: true, optional: false, required: false
  public get webexApiUrl() {
    return this.getStringAttribute('webex_api_url');
  }

  // wechat_api_corp_id - computed: true, optional: false, required: false
  public get wechatApiCorpId() {
    return this.getStringAttribute('wechat_api_corp_id');
  }

  // wechat_api_secret - computed: true, optional: false, required: false
  public get wechatApiSecret() {
    return this.getStringAttribute('wechat_api_secret');
  }

  // wechat_api_url - computed: true, optional: false, required: false
  public get wechatApiUrl() {
    return this.getStringAttribute('wechat_api_url');
  }
}

export class DataMimirAlertmanagerConfigGlobalList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigGlobalOutputReference {
    return new DataMimirAlertmanagerConfigGlobalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigInhibitRule {
}

export function dataMimirAlertmanagerConfigInhibitRuleToTerraform(struct?: DataMimirAlertmanagerConfigInhibitRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigInhibitRuleToHclTerraform(struct?: DataMimirAlertmanagerConfigInhibitRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigInhibitRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigInhibitRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigInhibitRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // equal - computed: true, optional: false, required: false
  public get equal() {
    return this.getListAttribute('equal');
  }

  // source_matchers - computed: true, optional: false, required: false
  public get sourceMatchers() {
    return this.getListAttribute('source_matchers');
  }

  // target_matchers - computed: true, optional: false, required: false
  public get targetMatchers() {
    return this.getListAttribute('target_matchers');
  }
}

export class DataMimirAlertmanagerConfigInhibitRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigInhibitRuleOutputReference {
    return new DataMimirAlertmanagerConfigInhibitRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverDiscordConfigs {
}

export function dataMimirAlertmanagerConfigReceiverDiscordConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverDiscordConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverDiscordConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverDiscordConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverDiscordConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverDiscordConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverDiscordConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverDiscordConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverDiscordConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverEmailConfigs {
}

export function dataMimirAlertmanagerConfigReceiverEmailConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverEmailConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverEmailConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverEmailConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverEmailConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverEmailConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverEmailConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_identity - computed: true, optional: false, required: false
  public get authIdentity() {
    return this.getStringAttribute('auth_identity');
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_secret - computed: true, optional: false, required: false
  public get authSecret() {
    return this.getStringAttribute('auth_secret');
  }

  // auth_username - computed: true, optional: false, required: false
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // hello - computed: true, optional: false, required: false
  public get hello() {
    return this.getStringAttribute('hello');
  }

  // html - computed: true, optional: false, required: false
  public get html() {
    return this.getStringAttribute('html');
  }

  // require_tls - computed: true, optional: false, required: false
  public get requireTls() {
    return this.getBooleanAttribute('require_tls');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // smarthost - computed: true, optional: false, required: false
  public get smarthost() {
    return this.getStringAttribute('smarthost');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverEmailConfigsTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataMimirAlertmanagerConfigReceiverEmailConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverEmailConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverEmailConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverMsteamsConfigs {
}

export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverMsteamsConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverMsteamsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverMsteamsConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverMsteamsConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverMsteamsConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverMsteamsConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverMsteamsConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverMsteamsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverOpsgenieConfigsResponders {
}

export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsRespondersToTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsResponders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsRespondersToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsResponders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsRespondersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsResponders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverOpsgenieConfigsResponders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsRespondersList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsRespondersOutputReference {
    return new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsRespondersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverOpsgenieConfigs {
}

export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverOpsgenieConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverOpsgenieConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverOpsgenieConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverOpsgenieConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  public get actions() {
    return this.getStringAttribute('actions');
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMap(this, "details");
  public get details() {
    return this._details;
  }

  // entity - computed: true, optional: false, required: false
  public get entity() {
    return this.getStringAttribute('entity');
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // responders - computed: true, optional: false, required: false
  private _responders = new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsRespondersList(this, "responders", false);
  public get responders() {
    return this._responders;
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // update_alerts - computed: true, optional: false, required: false
  public get updateAlerts() {
    return this.getBooleanAttribute('update_alerts');
  }
}

export class DataMimirAlertmanagerConfigReceiverOpsgenieConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverOpsgenieConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverOpsgenieConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImages {
}

export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsImagesToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsImagesToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alt - computed: true, optional: false, required: false
  public get alt() {
    return this.getStringAttribute('alt');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // src - computed: true, optional: false, required: false
  public get src() {
    return this.getStringAttribute('src');
  }
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImagesOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinks {
}

export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinksToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinksToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinksOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPagerdutyConfigs {
}

export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPagerdutyConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPagerdutyConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPagerdutyConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPagerdutyConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // client - computed: true, optional: false, required: false
  public get client() {
    return this.getStringAttribute('client');
  }

  // client_url - computed: true, optional: false, required: false
  public get clientUrl() {
    return this.getStringAttribute('client_url');
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMap(this, "details");
  public get details() {
    return this._details;
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // images - computed: true, optional: false, required: false
  private _images = new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // routing_key - computed: true, optional: false, required: false
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // service_key - computed: true, optional: false, required: false
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataMimirAlertmanagerConfigReceiverPagerdutyConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPagerdutyConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPagerdutyConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverPushoverConfigs {
}

export function dataMimirAlertmanagerConfigReceiverPushoverConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverPushoverConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverPushoverConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverPushoverConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverPushoverConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expire - computed: true, optional: false, required: false
  public get expire() {
    return this.getStringAttribute('expire');
  }

  // html - computed: true, optional: false, required: false
  public get html() {
    return this.getBooleanAttribute('html');
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverPushoverConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getStringAttribute('retry');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // sound - computed: true, optional: false, required: false
  public get sound() {
    return this.getStringAttribute('sound');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // url_title - computed: true, optional: false, required: false
  public get urlTitle() {
    return this.getStringAttribute('url_title');
  }

  // user_key - computed: true, optional: false, required: false
  public get userKey() {
    return this.getStringAttribute('user_key');
  }
}

export class DataMimirAlertmanagerConfigReceiverPushoverConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverPushoverConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverPushoverConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirm {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirmToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirmToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dismiss_text - computed: true, optional: false, required: false
  public get dismissText() {
    return this.getStringAttribute('dismiss_text');
  }

  // ok_text - computed: true, optional: false, required: false
  public get okText() {
    return this.getStringAttribute('ok_text');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirmList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirmOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigsActions {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsActionsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsActionsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // confirm - computed: true, optional: false, required: false
  private _confirm = new DataMimirAlertmanagerConfigReceiverSlackConfigsActionsConfirmList(this, "confirm", false);
  public get confirm() {
    return this._confirm;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // style - computed: true, optional: false, required: false
  public get style() {
    return this.getStringAttribute('style');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsActionsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigsFields {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsFieldsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsFieldsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigsFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigsFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // short - computed: true, optional: false, required: false
  public get short() {
    return this.getBooleanAttribute('short');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsFieldsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSlackConfigs {
}

export function dataMimirAlertmanagerConfigReceiverSlackConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSlackConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSlackConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSlackConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSlackConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataMimirAlertmanagerConfigReceiverSlackConfigsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // callback_id - computed: true, optional: false, required: false
  public get callbackId() {
    return this.getStringAttribute('callback_id');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // fallback - computed: true, optional: false, required: false
  public get fallback() {
    return this.getStringAttribute('fallback');
  }

  // fields - computed: true, optional: false, required: false
  private _fields = new DataMimirAlertmanagerConfigReceiverSlackConfigsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }

  // footer - computed: true, optional: false, required: false
  public get footer() {
    return this.getStringAttribute('footer');
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverSlackConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // icon_emoji - computed: true, optional: false, required: false
  public get iconEmoji() {
    return this.getStringAttribute('icon_emoji');
  }

  // icon_url - computed: true, optional: false, required: false
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // link_names - computed: true, optional: false, required: false
  public get linkNames() {
    return this.getBooleanAttribute('link_names');
  }

  // mrkdwn_in - computed: true, optional: false, required: false
  public get mrkdwnIn() {
    return this.getListAttribute('mrkdwn_in');
  }

  // pretext - computed: true, optional: false, required: false
  public get pretext() {
    return this.getStringAttribute('pretext');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // short_fields - computed: true, optional: false, required: false
  public get shortFields() {
    return this.getBooleanAttribute('short_fields');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // thumb_url - computed: true, optional: false, required: false
  public get thumbUrl() {
    return this.getStringAttribute('thumb_url');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // title_link - computed: true, optional: false, required: false
  public get titleLink() {
    return this.getStringAttribute('title_link');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverSlackConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSlackConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSlackConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4 {
}

export function dataMimirAlertmanagerConfigReceiverSnsConfigsSigv4ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSnsConfigsSigv4ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4OutputReference {
    return new DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverSnsConfigs {
}

export function dataMimirAlertmanagerConfigReceiverSnsConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverSnsConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverSnsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverSnsConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverSnsConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktf.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverSnsConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // sigv4 - computed: true, optional: false, required: false
  private _sigv4 = new DataMimirAlertmanagerConfigReceiverSnsConfigsSigv4List(this, "sigv4", false);
  public get sigv4() {
    return this._sigv4;
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }

  // topic_arn - computed: true, optional: false, required: false
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
}

export class DataMimirAlertmanagerConfigReceiverSnsConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverSnsConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverSnsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverTelegramConfigs {
}

export function dataMimirAlertmanagerConfigReceiverTelegramConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverTelegramConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverTelegramConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverTelegramConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverTelegramConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // bot_token - computed: true, optional: false, required: false
  public get botToken() {
    return this.getStringAttribute('bot_token');
  }

  // chat_id - computed: true, optional: false, required: false
  public get chatId() {
    return this.getNumberAttribute('chat_id');
  }

  // disable_notifications - computed: true, optional: false, required: false
  public get disableNotifications() {
    return this.getBooleanAttribute('disable_notifications');
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverTelegramConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // parse_mode - computed: true, optional: false, required: false
  public get parseMode() {
    return this.getStringAttribute('parse_mode');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
}

export class DataMimirAlertmanagerConfigReceiverTelegramConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverTelegramConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverTelegramConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverVictoropsConfigs {
}

export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverVictoropsConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverVictoropsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverVictoropsConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverVictoropsConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // custom_fields - computed: true, optional: false, required: false
  private _customFields = new cdktf.StringMap(this, "custom_fields");
  public get customFields() {
    return this._customFields;
  }

  // entity_display_name - computed: true, optional: false, required: false
  public get entityDisplayName() {
    return this.getStringAttribute('entity_display_name');
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverVictoropsConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // message_type - computed: true, optional: false, required: false
  public get messageType() {
    return this.getStringAttribute('message_type');
  }

  // monitoring_tool - computed: true, optional: false, required: false
  public get monitoringTool() {
    return this.getStringAttribute('monitoring_tool');
  }

  // routing_key - computed: true, optional: false, required: false
  public get routingKey() {
    return this.getStringAttribute('routing_key');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }
}

export class DataMimirAlertmanagerConfigReceiverVictoropsConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverVictoropsConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverVictoropsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebexConfigs {
}

export function dataMimirAlertmanagerConfigReceiverWebexConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebexConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebexConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebexConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebexConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverWebexConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // room_id - computed: true, optional: false, required: false
  public get roomId() {
    return this.getStringAttribute('room_id');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebexConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebexConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebexConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWebhookConfigs {
}

export function dataMimirAlertmanagerConfigReceiverWebhookConfigsToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWebhookConfigsToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWebhookConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWebhookConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWebhookConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_config - computed: true, optional: false, required: false
  private _httpConfig = new DataMimirAlertmanagerConfigReceiverWebhookConfigsHttpConfigList(this, "http_config", false);
  public get httpConfig() {
    return this._httpConfig;
  }

  // max_alerts - computed: true, optional: false, required: false
  public get maxAlerts() {
    return this.getNumberAttribute('max_alerts');
  }

  // send_resolved - computed: true, optional: false, required: false
  public get sendResolved() {
    return this.getBooleanAttribute('send_resolved');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataMimirAlertmanagerConfigReceiverWebhookConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWebhookConfigsOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWebhookConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorization {
}

export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorizationToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorizationToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorizationOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuth {
}

export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuthToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuthToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuthList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuthOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2 {
}

export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2ToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2ToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // endpoint_params - computed: true, optional: false, required: false
  private _endpointParams = new cdktf.StringMap(this, "endpoint_params");
  public get endpointParams() {
    return this._endpointParams;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2TlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2List extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2OutputReference {
    return new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfig {
}

export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // insecure_skip_verify - computed: true, optional: false, required: false
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // server_name - computed: true, optional: false, required: false
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfig {
}

export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigToTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigToHclTerraform(struct?: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // basic_auth - computed: true, optional: false, required: false
  private _basicAuth = new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigBasicAuthList(this, "basic_auth", false);
  public get basicAuth() {
    return this._basicAuth;
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // enable_http2 - computed: true, optional: false, required: false
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }

  // follow_redirects - computed: true, optional: false, required: false
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOauth2List(this, "oauth2", false);
  public get oauth2() {
    return this._oauth2;
  }

  // proxy_url - computed: true, optional: false, required: false
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }

  // tls_config - computed: true, optional: false, required: false
  private _tlsConfig = new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigTlsConfigList(this, "tls_config", false);
  public get tlsConfig() {
    return this._tlsConfig;
  }
}

export class DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOutputReference {
    return new DataMimirAlertmanagerConfigReceiverWechatConfigsHttpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
