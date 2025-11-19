// https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/data-sources/group_system_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioGroupSystemSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The hybrid worker group or edge fleet to which this instance belongs. Defaults to 'defaultHybrid'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/data-sources/group_system_settings#group_id DataCriblioGroupSystemSettings#group_id}
  */
  readonly groupId: string;
}
export interface DataCriblioGroupSystemSettingsItemsApiHeaders {
}

export function dataCriblioGroupSystemSettingsItemsApiHeadersToTerraform(struct?: DataCriblioGroupSystemSettingsItemsApiHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsApiHeadersToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsApiHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsApiHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsApiHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsApiHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataCriblioGroupSystemSettingsItemsApiSsl {
}

export function dataCriblioGroupSystemSettingsItemsApiSslToTerraform(struct?: DataCriblioGroupSystemSettingsItemsApiSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsApiSslToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsApiSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsApiSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsApiSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsApiSsl | undefined) {
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
}
export interface DataCriblioGroupSystemSettingsItemsApi {
}

export function dataCriblioGroupSystemSettingsItemsApiToTerraform(struct?: DataCriblioGroupSystemSettingsItemsApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsApiToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // disable_api_cache - computed: true, optional: false, required: false
  public get disableApiCache() {
    return this.getBooleanAttribute('disable_api_cache');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataCriblioGroupSystemSettingsItemsApiHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // idle_session_ttl - computed: true, optional: false, required: false
  public get idleSessionTtl() {
    return this.getNumberAttribute('idle_session_ttl');
  }

  // listen_on_port - computed: true, optional: false, required: false
  public get listenOnPort() {
    return this.getBooleanAttribute('listen_on_port');
  }

  // login_rate_limit - computed: true, optional: false, required: false
  public get loginRateLimit() {
    return this.getStringAttribute('login_rate_limit');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // scripts - computed: true, optional: false, required: false
  public get scripts() {
    return this.getBooleanAttribute('scripts');
  }

  // sensitive_fields - computed: true, optional: false, required: false
  public get sensitiveFields() {
    return this.getListAttribute('sensitive_fields');
  }

  // ssl - computed: true, optional: false, required: false
  private _ssl = new DataCriblioGroupSystemSettingsItemsApiSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }

  // sso_rate_limit - computed: true, optional: false, required: false
  public get ssoRateLimit() {
    return this.getStringAttribute('sso_rate_limit');
  }

  // worker_remote_access - computed: true, optional: false, required: false
  public get workerRemoteAccess() {
    return this.getBooleanAttribute('worker_remote_access');
  }
}
export interface DataCriblioGroupSystemSettingsItemsBackups {
}

export function dataCriblioGroupSystemSettingsItemsBackupsToTerraform(struct?: DataCriblioGroupSystemSettingsItemsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsBackupsToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsBackups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_persistence - computed: true, optional: false, required: false
  public get backupPersistence() {
    return this.getStringAttribute('backup_persistence');
  }

  // backups_directory - computed: true, optional: false, required: false
  public get backupsDirectory() {
    return this.getStringAttribute('backups_directory');
  }
}
export interface DataCriblioGroupSystemSettingsItemsCustomLogo {
}

export function dataCriblioGroupSystemSettingsItemsCustomLogoToTerraform(struct?: DataCriblioGroupSystemSettingsItemsCustomLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsCustomLogoToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsCustomLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsCustomLogoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsCustomLogo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsCustomLogo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // logo_description - computed: true, optional: false, required: false
  public get logoDescription() {
    return this.getStringAttribute('logo_description');
  }

  // logo_image - computed: true, optional: false, required: false
  public get logoImage() {
    return this.getStringAttribute('logo_image');
  }
}
export interface DataCriblioGroupSystemSettingsItemsPii {
}

export function dataCriblioGroupSystemSettingsItemsPiiToTerraform(struct?: DataCriblioGroupSystemSettingsItemsPii): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsPiiToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsPii): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsPiiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsPii | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsPii | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_pii_detection - computed: true, optional: false, required: false
  public get enablePiiDetection() {
    return this.getBooleanAttribute('enable_pii_detection');
  }
}
export interface DataCriblioGroupSystemSettingsItemsProxy {
}

export function dataCriblioGroupSystemSettingsItemsProxyToTerraform(struct?: DataCriblioGroupSystemSettingsItemsProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsProxyToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // use_env_vars - computed: true, optional: false, required: false
  public get useEnvVars() {
    return this.getBooleanAttribute('use_env_vars');
  }
}
export interface DataCriblioGroupSystemSettingsItemsRollback {
}

export function dataCriblioGroupSystemSettingsItemsRollbackToTerraform(struct?: DataCriblioGroupSystemSettingsItemsRollback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsRollbackToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsRollback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsRollbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsRollback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsRollback | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rollback_enabled - computed: true, optional: false, required: false
  public get rollbackEnabled() {
    return this.getBooleanAttribute('rollback_enabled');
  }

  // rollback_retries - computed: true, optional: false, required: false
  public get rollbackRetries() {
    return this.getNumberAttribute('rollback_retries');
  }

  // rollback_timeout - computed: true, optional: false, required: false
  public get rollbackTimeout() {
    return this.getNumberAttribute('rollback_timeout');
  }
}
export interface DataCriblioGroupSystemSettingsItemsShutdown {
}

export function dataCriblioGroupSystemSettingsItemsShutdownToTerraform(struct?: DataCriblioGroupSystemSettingsItemsShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsShutdownToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsShutdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsShutdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsShutdown | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // drain_timeout - computed: true, optional: false, required: false
  public get drainTimeout() {
    return this.getNumberAttribute('drain_timeout');
  }
}
export interface DataCriblioGroupSystemSettingsItemsSni {
}

export function dataCriblioGroupSystemSettingsItemsSniToTerraform(struct?: DataCriblioGroupSystemSettingsItemsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsSniToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsSni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsSni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_sni_routing - computed: true, optional: false, required: false
  public get disableSniRouting() {
    return this.getBooleanAttribute('disable_sni_routing');
  }
}
export interface DataCriblioGroupSystemSettingsItemsSockets {
}

export function dataCriblioGroupSystemSettingsItemsSocketsToTerraform(struct?: DataCriblioGroupSystemSettingsItemsSockets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsSocketsToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsSockets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsSocketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsSockets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsSockets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }
}
export interface DataCriblioGroupSystemSettingsItemsSystem {
}

export function dataCriblioGroupSystemSettingsItemsSystemToTerraform(struct?: DataCriblioGroupSystemSettingsItemsSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsSystemToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // intercom - computed: true, optional: false, required: false
  public get intercom() {
    return this.getBooleanAttribute('intercom');
  }

  // upgrade - computed: true, optional: false, required: false
  public get upgrade() {
    return this.getStringAttribute('upgrade');
  }
}
export interface DataCriblioGroupSystemSettingsItemsTls {
}

export function dataCriblioGroupSystemSettingsItemsTlsToTerraform(struct?: DataCriblioGroupSystemSettingsItemsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsTlsToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_cipher_list - computed: true, optional: false, required: false
  public get defaultCipherList() {
    return this.getStringAttribute('default_cipher_list');
  }

  // default_ecdh_curve - computed: true, optional: false, required: false
  public get defaultEcdhCurve() {
    return this.getStringAttribute('default_ecdh_curve');
  }

  // max_version - computed: true, optional: false, required: false
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }

  // min_version - computed: true, optional: false, required: false
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }

  // reject_unauthorized - computed: true, optional: false, required: false
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }
}
export interface DataCriblioGroupSystemSettingsItemsUpgradeGroupSettings {
}

export function dataCriblioGroupSystemSettingsItemsUpgradeGroupSettingsToTerraform(struct?: DataCriblioGroupSystemSettingsItemsUpgradeGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsUpgradeGroupSettingsToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsUpgradeGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsUpgradeGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsUpgradeGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsUpgradeGroupSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_rolling - computed: true, optional: false, required: false
  public get isRolling() {
    return this.getBooleanAttribute('is_rolling');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // retry_count - computed: true, optional: false, required: false
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }

  // retry_delay - computed: true, optional: false, required: false
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }
}
export interface DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrls {
}

export function dataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrlsToTerraform(struct?: DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrlsToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // package_hash_url - computed: true, optional: false, required: false
  public get packageHashUrl() {
    return this.getStringAttribute('package_hash_url');
  }

  // package_url - computed: true, optional: false, required: false
  public get packageUrl() {
    return this.getStringAttribute('package_url');
  }
}

export class DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrlsOutputReference {
    return new DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioGroupSystemSettingsItemsUpgradeSettings {
}

export function dataCriblioGroupSystemSettingsItemsUpgradeSettingsToTerraform(struct?: DataCriblioGroupSystemSettingsItemsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsUpgradeSettingsToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic_upgrade_check_period - computed: true, optional: false, required: false
  public get automaticUpgradeCheckPeriod() {
    return this.getStringAttribute('automatic_upgrade_check_period');
  }

  // disable_automatic_upgrade - computed: true, optional: false, required: false
  public get disableAutomaticUpgrade() {
    return this.getBooleanAttribute('disable_automatic_upgrade');
  }

  // enable_legacy_edge_upgrade - computed: true, optional: false, required: false
  public get enableLegacyEdgeUpgrade() {
    return this.getBooleanAttribute('enable_legacy_edge_upgrade');
  }

  // package_urls - computed: true, optional: false, required: false
  private _packageUrls = new DataCriblioGroupSystemSettingsItemsUpgradeSettingsPackageUrlsList(this, "package_urls", false);
  public get packageUrls() {
    return this._packageUrls;
  }

  // upgrade_source - computed: true, optional: false, required: false
  public get upgradeSource() {
    return this.getStringAttribute('upgrade_source');
  }
}
export interface DataCriblioGroupSystemSettingsItemsWorkers {
}

export function dataCriblioGroupSystemSettingsItemsWorkersToTerraform(struct?: DataCriblioGroupSystemSettingsItemsWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsWorkersToHclTerraform(struct?: DataCriblioGroupSystemSettingsItemsWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioGroupSystemSettingsItemsWorkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItemsWorkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // enable_heap_snapshots - computed: true, optional: false, required: false
  public get enableHeapSnapshots() {
    return this.getBooleanAttribute('enable_heap_snapshots');
  }

  // load_throttle_perc - computed: true, optional: false, required: false
  public get loadThrottlePerc() {
    return this.getNumberAttribute('load_throttle_perc');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // startup_max_conns - computed: true, optional: false, required: false
  public get startupMaxConns() {
    return this.getNumberAttribute('startup_max_conns');
  }

  // startup_throttle_timeout - computed: true, optional: false, required: false
  public get startupThrottleTimeout() {
    return this.getNumberAttribute('startup_throttle_timeout');
  }

  // v8_single_thread - computed: true, optional: false, required: false
  public get v8SingleThread() {
    return this.getBooleanAttribute('v8_single_thread');
  }
}
export interface DataCriblioGroupSystemSettingsItems {
}

export function dataCriblioGroupSystemSettingsItemsToTerraform(struct?: DataCriblioGroupSystemSettingsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioGroupSystemSettingsItemsToHclTerraform(struct?: DataCriblioGroupSystemSettingsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioGroupSystemSettingsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioGroupSystemSettingsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioGroupSystemSettingsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api - computed: true, optional: false, required: false
  private _api = new DataCriblioGroupSystemSettingsItemsApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }

  // backups - computed: true, optional: false, required: false
  private _backups = new DataCriblioGroupSystemSettingsItemsBackupsOutputReference(this, "backups");
  public get backups() {
    return this._backups;
  }

  // custom_logo - computed: true, optional: false, required: false
  private _customLogo = new DataCriblioGroupSystemSettingsItemsCustomLogoOutputReference(this, "custom_logo");
  public get customLogo() {
    return this._customLogo;
  }

  // pii - computed: true, optional: false, required: false
  private _pii = new DataCriblioGroupSystemSettingsItemsPiiOutputReference(this, "pii");
  public get pii() {
    return this._pii;
  }

  // proxy - computed: true, optional: false, required: false
  private _proxy = new DataCriblioGroupSystemSettingsItemsProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }

  // rollback - computed: true, optional: false, required: false
  private _rollback = new DataCriblioGroupSystemSettingsItemsRollbackOutputReference(this, "rollback");
  public get rollback() {
    return this._rollback;
  }

  // shutdown - computed: true, optional: false, required: false
  private _shutdown = new DataCriblioGroupSystemSettingsItemsShutdownOutputReference(this, "shutdown");
  public get shutdown() {
    return this._shutdown;
  }

  // sni - computed: true, optional: false, required: false
  private _sni = new DataCriblioGroupSystemSettingsItemsSniOutputReference(this, "sni");
  public get sni() {
    return this._sni;
  }

  // sockets - computed: true, optional: false, required: false
  private _sockets = new DataCriblioGroupSystemSettingsItemsSocketsOutputReference(this, "sockets");
  public get sockets() {
    return this._sockets;
  }

  // system - computed: true, optional: false, required: false
  private _system = new DataCriblioGroupSystemSettingsItemsSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioGroupSystemSettingsItemsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // upgrade_group_settings - computed: true, optional: false, required: false
  private _upgradeGroupSettings = new DataCriblioGroupSystemSettingsItemsUpgradeGroupSettingsOutputReference(this, "upgrade_group_settings");
  public get upgradeGroupSettings() {
    return this._upgradeGroupSettings;
  }

  // upgrade_settings - computed: true, optional: false, required: false
  private _upgradeSettings = new DataCriblioGroupSystemSettingsItemsUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }

  // workers - computed: true, optional: false, required: false
  private _workers = new DataCriblioGroupSystemSettingsItemsWorkersOutputReference(this, "workers");
  public get workers() {
    return this._workers;
  }
}

export class DataCriblioGroupSystemSettingsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioGroupSystemSettingsItemsOutputReference {
    return new DataCriblioGroupSystemSettingsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/data-sources/group_system_settings criblio_group_system_settings}
*/
export class DataCriblioGroupSystemSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_group_system_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioGroupSystemSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioGroupSystemSettings to import
  * @param importFromId The id of the existing DataCriblioGroupSystemSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/data-sources/group_system_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioGroupSystemSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_group_system_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.27/docs/data-sources/group_system_settings criblio_group_system_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioGroupSystemSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCriblioGroupSystemSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_group_system_settings',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.27',
        providerVersionConstraint: '1.20.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataCriblioGroupSystemSettingsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
