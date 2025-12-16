// https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/instance_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioInstanceSettingsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceConfigBundles {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceConfigBundlesToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceConfigBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceConfigBundlesToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceConfigBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceConfigBundlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceConfigBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceConfigBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remote_url - computed: true, optional: false, required: false
  public get remoteUrl() {
    return this.getStringAttribute('remote_url');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceFailover {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceFailoverToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceFailover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceFailoverToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceFailover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceFailoverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceFailover | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceFailover | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // missed_hb_limit - computed: true, optional: false, required: false
  public get missedHbLimit() {
    return this.getNumberAttribute('missed_hb_limit');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceProxy {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceProxyToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceProxyToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsCheckServerIdentity {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsCheckServerIdentityToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsCheckServerIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsCheckServerIdentityToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsCheckServerIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsCheckServerIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsCheckServerIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsCheckServerIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTls {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_path - computed: true, optional: false, required: false
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }

  // cert_path - computed: true, optional: false, required: false
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // check_server_identity - computed: true, optional: false, required: false
  private _checkServerIdentity = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsCheckServerIdentityOutputReference(this, "check_server_identity");
  public get checkServerIdentity() {
    return this._checkServerIdentity;
  }

  // common_name_regex - computed: true, optional: false, required: false
  private _commonNameRegex = new cdktf.StringMap(this, "common_name_regex");
  public get commonNameRegex() {
    return this._commonNameRegex;
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // priv_key_path - computed: true, optional: false, required: false
  public get privKeyPath() {
    return this.getStringAttribute('priv_key_path');
  }

  // reject_unauthorized - computed: true, optional: false, required: false
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }

  // request_cert - computed: true, optional: false, required: false
  public get requestCert() {
    return this.getBooleanAttribute('request_cert');
  }

  // servername - computed: true, optional: false, required: false
  public get servername() {
    return this.getStringAttribute('servername');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspace {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_token - computed: true, optional: false, required: false
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // config_bundles - computed: true, optional: false, required: false
  private _configBundles = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceConfigBundlesOutputReference(this, "config_bundles");
  public get configBundles() {
    return this._configBundles;
  }

  // config_helper_socket_dir - computed: true, optional: false, required: false
  public get configHelperSocketDir() {
    return this.getStringAttribute('config_helper_socket_dir');
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // disable_sni_routing - computed: true, optional: false, required: false
  public get disableSniRouting() {
    return this.getBooleanAttribute('disable_sni_routing');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // failover - computed: true, optional: false, required: false
  private _failover = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceFailoverOutputReference(this, "failover");
  public get failover() {
    return this._failover;
  }

  // forward_to_leader_api - computed: true, optional: false, required: false
  public get forwardToLeaderApi() {
    return this.getBooleanAttribute('forward_to_leader_api');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ip_whitelist_regex - computed: true, optional: false, required: false
  public get ipWhitelistRegex() {
    return this.getStringAttribute('ip_whitelist_regex');
  }

  // max_active_cxn - computed: true, optional: false, required: false
  public get maxActiveCxn() {
    return this.getNumberAttribute('max_active_cxn');
  }

  // max_buffer_bytes - computed: true, optional: false, required: false
  public get maxBufferBytes() {
    return this.getNumberAttribute('max_buffer_bytes');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // proxy - computed: true, optional: false, required: false
  private _proxy = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }

  // resiliency - computed: true, optional: false, required: false
  public get resiliency() {
    return this.getStringAttribute('resiliency');
  }

  // subscription_agreement - computed: true, optional: false, required: false
  public get subscriptionAgreement() {
    return this.getBooleanAttribute('subscription_agreement');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // write_timeout - computed: true, optional: false, required: false
  public get writeTimeout() {
    return this.getNumberAttribute('write_timeout');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterConfigBundles {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterConfigBundlesToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterConfigBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterConfigBundlesToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterConfigBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterConfigBundlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterConfigBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterConfigBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // remote_url - computed: true, optional: false, required: false
  public get remoteUrl() {
    return this.getStringAttribute('remote_url');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterFailover {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterFailoverToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterFailover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterFailoverToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterFailover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterFailoverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterFailover | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterFailover | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // missed_hb_limit - computed: true, optional: false, required: false
  public get missedHbLimit() {
    return this.getNumberAttribute('missed_hb_limit');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterProxy {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterProxyToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterProxyToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsCheckServerIdentity {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsCheckServerIdentityToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsCheckServerIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsCheckServerIdentityToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsCheckServerIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsCheckServerIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsCheckServerIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsCheckServerIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTls {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_path - computed: true, optional: false, required: false
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }

  // cert_path - computed: true, optional: false, required: false
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // check_server_identity - computed: true, optional: false, required: false
  private _checkServerIdentity = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsCheckServerIdentityOutputReference(this, "check_server_identity");
  public get checkServerIdentity() {
    return this._checkServerIdentity;
  }

  // common_name_regex - computed: true, optional: false, required: false
  private _commonNameRegex = new cdktf.StringMap(this, "common_name_regex");
  public get commonNameRegex() {
    return this._commonNameRegex;
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // priv_key_path - computed: true, optional: false, required: false
  public get privKeyPath() {
    return this.getStringAttribute('priv_key_path');
  }

  // reject_unauthorized - computed: true, optional: false, required: false
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }

  // request_cert - computed: true, optional: false, required: false
  public get requestCert() {
    return this.getBooleanAttribute('request_cert');
  }

  // servername - computed: true, optional: false, required: false
  public get servername() {
    return this.getStringAttribute('servername');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1Master {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1Master): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1Master): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1Master | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1Master | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_token - computed: true, optional: false, required: false
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // config_bundles - computed: true, optional: false, required: false
  private _configBundles = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterConfigBundlesOutputReference(this, "config_bundles");
  public get configBundles() {
    return this._configBundles;
  }

  // config_helper_socket_dir - computed: true, optional: false, required: false
  public get configHelperSocketDir() {
    return this.getStringAttribute('config_helper_socket_dir');
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // disable_sni_routing - computed: true, optional: false, required: false
  public get disableSniRouting() {
    return this.getBooleanAttribute('disable_sni_routing');
  }

  // failover - computed: true, optional: false, required: false
  private _failover = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterFailoverOutputReference(this, "failover");
  public get failover() {
    return this._failover;
  }

  // forward_to_leader_api - computed: true, optional: false, required: false
  public get forwardToLeaderApi() {
    return this.getBooleanAttribute('forward_to_leader_api');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ip_whitelist_regex - computed: true, optional: false, required: false
  public get ipWhitelistRegex() {
    return this.getStringAttribute('ip_whitelist_regex');
  }

  // max_active_cxn - computed: true, optional: false, required: false
  public get maxActiveCxn() {
    return this.getNumberAttribute('max_active_cxn');
  }

  // max_buffer_bytes - computed: true, optional: false, required: false
  public get maxBufferBytes() {
    return this.getNumberAttribute('max_buffer_bytes');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // proxy - computed: true, optional: false, required: false
  private _proxy = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }

  // resiliency - computed: true, optional: false, required: false
  public get resiliency() {
    return this.getStringAttribute('resiliency');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // write_timeout - computed: true, optional: false, required: false
  public get writeTimeout() {
    return this.getNumberAttribute('write_timeout');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema1 {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1ToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema1ToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_workspace - computed: true, optional: false, required: false
  private _cloudWorkspace = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1CloudWorkspaceOutputReference(this, "cloud_workspace");
  public get cloudWorkspace() {
    return this._cloudWorkspace;
  }

  // env_regex - computed: true, optional: false, required: false
  public get envRegex() {
    return this.getStringAttribute('env_regex');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // master - computed: true, optional: false, required: false
  private _master = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1MasterOutputReference(this, "master");
  public get master() {
    return this._master;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // reported_deployment_id - computed: true, optional: false, required: false
  public get reportedDeploymentId() {
    return this.getStringAttribute('reported_deployment_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}
export interface DataCriblioInstanceSettingsItemsInstanceSettingsSchema2 {
}

export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema2ToTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsInstanceSettingsSchema2ToHclTerraform(struct?: DataCriblioInstanceSettingsItemsInstanceSettingsSchema2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsInstanceSettingsSchema2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioInstanceSettingsItemsInstanceSettingsSchema2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItemsInstanceSettingsSchema2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bootstrap_host - computed: true, optional: false, required: false
  public get bootstrapHost() {
    return this.getStringAttribute('bootstrap_host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataCriblioInstanceSettingsItems {
}

export function dataCriblioInstanceSettingsItemsToTerraform(struct?: DataCriblioInstanceSettingsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioInstanceSettingsItemsToHclTerraform(struct?: DataCriblioInstanceSettingsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioInstanceSettingsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioInstanceSettingsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioInstanceSettingsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_settings_schema1 - computed: true, optional: false, required: false
  private _instanceSettingsSchema1 = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema1OutputReference(this, "instance_settings_schema1");
  public get instanceSettingsSchema1() {
    return this._instanceSettingsSchema1;
  }

  // instance_settings_schema2 - computed: true, optional: false, required: false
  private _instanceSettingsSchema2 = new DataCriblioInstanceSettingsItemsInstanceSettingsSchema2OutputReference(this, "instance_settings_schema2");
  public get instanceSettingsSchema2() {
    return this._instanceSettingsSchema2;
  }
}

export class DataCriblioInstanceSettingsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioInstanceSettingsItemsOutputReference {
    return new DataCriblioInstanceSettingsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/instance_settings criblio_instance_settings}
*/
export class DataCriblioInstanceSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_instance_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioInstanceSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioInstanceSettings to import
  * @param importFromId The id of the existing DataCriblioInstanceSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/instance_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioInstanceSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_instance_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/instance_settings criblio_instance_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioInstanceSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCriblioInstanceSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'criblio_instance_settings',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.64',
        providerVersionConstraint: '1.20.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataCriblioInstanceSettingsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
