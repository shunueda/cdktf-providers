// https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupSystemSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#api GroupSystemSettings#api}
  */
  readonly api: GroupSystemSettingsApi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#backups GroupSystemSettings#backups}
  */
  readonly backups: GroupSystemSettingsBackups;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#custom_logo GroupSystemSettings#custom_logo}
  */
  readonly customLogo: GroupSystemSettingsCustomLogo;
  /**
  * The hybrid worker group or edge fleet to which this instance belongs. Defaults to 'defaultHybrid'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#group_id GroupSystemSettings#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#pii GroupSystemSettings#pii}
  */
  readonly pii: GroupSystemSettingsPii;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#proxy GroupSystemSettings#proxy}
  */
  readonly proxy: GroupSystemSettingsProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#rollback GroupSystemSettings#rollback}
  */
  readonly rollback: GroupSystemSettingsRollback;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#shutdown GroupSystemSettings#shutdown}
  */
  readonly shutdown: GroupSystemSettingsShutdown;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#sni GroupSystemSettings#sni}
  */
  readonly sni: GroupSystemSettingsSni;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#sockets GroupSystemSettings#sockets}
  */
  readonly sockets?: GroupSystemSettingsSockets;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#system GroupSystemSettings#system}
  */
  readonly systemAttribute: GroupSystemSettingsSystem;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#tls GroupSystemSettings#tls}
  */
  readonly tls: GroupSystemSettingsTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#upgrade_group_settings GroupSystemSettings#upgrade_group_settings}
  */
  readonly upgradeGroupSettings: GroupSystemSettingsUpgradeGroupSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#upgrade_settings GroupSystemSettings#upgrade_settings}
  */
  readonly upgradeSettings: GroupSystemSettingsUpgradeSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#workers GroupSystemSettings#workers}
  */
  readonly workers: GroupSystemSettingsWorkers;
}
export interface GroupSystemSettingsApiHeaders {
}

export function groupSystemSettingsApiHeadersToTerraform(struct?: GroupSystemSettingsApiHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsApiHeadersToHclTerraform(struct?: GroupSystemSettingsApiHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsApiHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsApiHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsApiHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface GroupSystemSettingsApiSsl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#ca_path GroupSystemSettings#ca_path}
  */
  readonly caPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#cert_path GroupSystemSettings#cert_path}
  */
  readonly certPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#disabled GroupSystemSettings#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#passphrase GroupSystemSettings#passphrase}
  */
  readonly passphrase: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#priv_key_path GroupSystemSettings#priv_key_path}
  */
  readonly privKeyPath: string;
}

export function groupSystemSettingsApiSslToTerraform(struct?: GroupSystemSettingsApiSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_path: cdktf.stringToTerraform(struct!.caPath),
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
    priv_key_path: cdktf.stringToTerraform(struct!.privKeyPath),
  }
}


export function groupSystemSettingsApiSslToHclTerraform(struct?: GroupSystemSettingsApiSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_path: {
      value: cdktf.stringToHclTerraform(struct!.caPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_path: {
      value: cdktf.stringToHclTerraform(struct!.certPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priv_key_path: {
      value: cdktf.stringToHclTerraform(struct!.privKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsApiSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsApiSsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPath = this._caPath;
    }
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._privKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.privKeyPath = this._privKeyPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsApiSsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caPath = undefined;
      this._certPath = undefined;
      this._disabled = undefined;
      this._passphrase = undefined;
      this._privKeyPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caPath = value.caPath;
      this._certPath = value.certPath;
      this._disabled = value.disabled;
      this._passphrase = value.passphrase;
      this._privKeyPath = value.privKeyPath;
    }
  }

  // ca_path - computed: false, optional: true, required: false
  private _caPath?: string; 
  public get caPath() {
    return this.getStringAttribute('ca_path');
  }
  public set caPath(value: string) {
    this._caPath = value;
  }
  public resetCaPath() {
    this._caPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPathInput() {
    return this._caPath;
  }

  // cert_path - computed: false, optional: false, required: true
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // passphrase - computed: false, optional: false, required: true
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // priv_key_path - computed: false, optional: false, required: true
  private _privKeyPath?: string; 
  public get privKeyPath() {
    return this.getStringAttribute('priv_key_path');
  }
  public set privKeyPath(value: string) {
    this._privKeyPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privKeyPathInput() {
    return this._privKeyPath;
  }
}
export interface GroupSystemSettingsApi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#base_url GroupSystemSettings#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#disable_api_cache GroupSystemSettings#disable_api_cache}
  */
  readonly disableApiCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#disabled GroupSystemSettings#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#headers GroupSystemSettings#headers}
  */
  readonly headers?: GroupSystemSettingsApiHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#host GroupSystemSettings#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#idle_session_ttl GroupSystemSettings#idle_session_ttl}
  */
  readonly idleSessionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#listen_on_port GroupSystemSettings#listen_on_port}
  */
  readonly listenOnPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#login_rate_limit GroupSystemSettings#login_rate_limit}
  */
  readonly loginRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#port GroupSystemSettings#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#protocol GroupSystemSettings#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#scripts GroupSystemSettings#scripts}
  */
  readonly scripts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#sensitive_fields GroupSystemSettings#sensitive_fields}
  */
  readonly sensitiveFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#ssl GroupSystemSettings#ssl}
  */
  readonly ssl: GroupSystemSettingsApiSsl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#sso_rate_limit GroupSystemSettings#sso_rate_limit}
  */
  readonly ssoRateLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#worker_remote_access GroupSystemSettings#worker_remote_access}
  */
  readonly workerRemoteAccess: boolean | cdktf.IResolvable;
}

export function groupSystemSettingsApiToTerraform(struct?: GroupSystemSettingsApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    disable_api_cache: cdktf.booleanToTerraform(struct!.disableApiCache),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    headers: groupSystemSettingsApiHeadersToTerraform(struct!.headers),
    host: cdktf.stringToTerraform(struct!.host),
    idle_session_ttl: cdktf.numberToTerraform(struct!.idleSessionTtl),
    listen_on_port: cdktf.booleanToTerraform(struct!.listenOnPort),
    login_rate_limit: cdktf.stringToTerraform(struct!.loginRateLimit),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    scripts: cdktf.booleanToTerraform(struct!.scripts),
    sensitive_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sensitiveFields),
    ssl: groupSystemSettingsApiSslToTerraform(struct!.ssl),
    sso_rate_limit: cdktf.stringToTerraform(struct!.ssoRateLimit),
    worker_remote_access: cdktf.booleanToTerraform(struct!.workerRemoteAccess),
  }
}


export function groupSystemSettingsApiToHclTerraform(struct?: GroupSystemSettingsApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_api_cache: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: groupSystemSettingsApiHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupSystemSettingsApiHeaders",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_session_ttl: {
      value: cdktf.numberToHclTerraform(struct!.idleSessionTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listen_on_port: {
      value: cdktf.booleanToHclTerraform(struct!.listenOnPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.loginRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scripts: {
      value: cdktf.booleanToHclTerraform(struct!.scripts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl: {
      value: groupSystemSettingsApiSslToHclTerraform(struct!.ssl),
      isBlock: true,
      type: "struct",
      storageClassType: "GroupSystemSettingsApiSsl",
    },
    sso_rate_limit: {
      value: cdktf.stringToHclTerraform(struct!.ssoRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_remote_access: {
      value: cdktf.booleanToHclTerraform(struct!.workerRemoteAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._disableApiCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiCache = this._disableApiCache;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._idleSessionTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleSessionTtl = this._idleSessionTtl;
    }
    if (this._listenOnPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenOnPort = this._listenOnPort;
    }
    if (this._loginRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginRateLimit = this._loginRateLimit;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._scripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.scripts = this._scripts;
    }
    if (this._sensitiveFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveFields = this._sensitiveFields;
    }
    if (this._ssl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl?.internalValue;
    }
    if (this._ssoRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoRateLimit = this._ssoRateLimit;
    }
    if (this._workerRemoteAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerRemoteAccess = this._workerRemoteAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._disableApiCache = undefined;
      this._disabled = undefined;
      this._headers.internalValue = undefined;
      this._host = undefined;
      this._idleSessionTtl = undefined;
      this._listenOnPort = undefined;
      this._loginRateLimit = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._scripts = undefined;
      this._sensitiveFields = undefined;
      this._ssl.internalValue = undefined;
      this._ssoRateLimit = undefined;
      this._workerRemoteAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._disableApiCache = value.disableApiCache;
      this._disabled = value.disabled;
      this._headers.internalValue = value.headers;
      this._host = value.host;
      this._idleSessionTtl = value.idleSessionTtl;
      this._listenOnPort = value.listenOnPort;
      this._loginRateLimit = value.loginRateLimit;
      this._port = value.port;
      this._protocol = value.protocol;
      this._scripts = value.scripts;
      this._sensitiveFields = value.sensitiveFields;
      this._ssl.internalValue = value.ssl;
      this._ssoRateLimit = value.ssoRateLimit;
      this._workerRemoteAccess = value.workerRemoteAccess;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // disable_api_cache - computed: false, optional: true, required: false
  private _disableApiCache?: boolean | cdktf.IResolvable; 
  public get disableApiCache() {
    return this.getBooleanAttribute('disable_api_cache');
  }
  public set disableApiCache(value: boolean | cdktf.IResolvable) {
    this._disableApiCache = value;
  }
  public resetDisableApiCache() {
    this._disableApiCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiCacheInput() {
    return this._disableApiCache;
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new GroupSystemSettingsApiHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: GroupSystemSettingsApiHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // idle_session_ttl - computed: false, optional: true, required: false
  private _idleSessionTtl?: number; 
  public get idleSessionTtl() {
    return this.getNumberAttribute('idle_session_ttl');
  }
  public set idleSessionTtl(value: number) {
    this._idleSessionTtl = value;
  }
  public resetIdleSessionTtl() {
    this._idleSessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTtlInput() {
    return this._idleSessionTtl;
  }

  // listen_on_port - computed: false, optional: true, required: false
  private _listenOnPort?: boolean | cdktf.IResolvable; 
  public get listenOnPort() {
    return this.getBooleanAttribute('listen_on_port');
  }
  public set listenOnPort(value: boolean | cdktf.IResolvable) {
    this._listenOnPort = value;
  }
  public resetListenOnPort() {
    this._listenOnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnPortInput() {
    return this._listenOnPort;
  }

  // login_rate_limit - computed: false, optional: true, required: false
  private _loginRateLimit?: string; 
  public get loginRateLimit() {
    return this.getStringAttribute('login_rate_limit');
  }
  public set loginRateLimit(value: string) {
    this._loginRateLimit = value;
  }
  public resetLoginRateLimit() {
    this._loginRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginRateLimitInput() {
    return this._loginRateLimit;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // scripts - computed: false, optional: true, required: false
  private _scripts?: boolean | cdktf.IResolvable; 
  public get scripts() {
    return this.getBooleanAttribute('scripts');
  }
  public set scripts(value: boolean | cdktf.IResolvable) {
    this._scripts = value;
  }
  public resetScripts() {
    this._scripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts;
  }

  // sensitive_fields - computed: false, optional: true, required: false
  private _sensitiveFields?: string[]; 
  public get sensitiveFields() {
    return this.getListAttribute('sensitive_fields');
  }
  public set sensitiveFields(value: string[]) {
    this._sensitiveFields = value;
  }
  public resetSensitiveFields() {
    this._sensitiveFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveFieldsInput() {
    return this._sensitiveFields;
  }

  // ssl - computed: false, optional: false, required: true
  private _ssl = new GroupSystemSettingsApiSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: GroupSystemSettingsApiSsl) {
    this._ssl.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }

  // sso_rate_limit - computed: false, optional: true, required: false
  private _ssoRateLimit?: string; 
  public get ssoRateLimit() {
    return this.getStringAttribute('sso_rate_limit');
  }
  public set ssoRateLimit(value: string) {
    this._ssoRateLimit = value;
  }
  public resetSsoRateLimit() {
    this._ssoRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoRateLimitInput() {
    return this._ssoRateLimit;
  }

  // worker_remote_access - computed: false, optional: false, required: true
  private _workerRemoteAccess?: boolean | cdktf.IResolvable; 
  public get workerRemoteAccess() {
    return this.getBooleanAttribute('worker_remote_access');
  }
  public set workerRemoteAccess(value: boolean | cdktf.IResolvable) {
    this._workerRemoteAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerRemoteAccessInput() {
    return this._workerRemoteAccess;
  }
}
export interface GroupSystemSettingsBackups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#backup_persistence GroupSystemSettings#backup_persistence}
  */
  readonly backupPersistence: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#backups_directory GroupSystemSettings#backups_directory}
  */
  readonly backupsDirectory: string;
}

export function groupSystemSettingsBackupsToTerraform(struct?: GroupSystemSettingsBackups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_persistence: cdktf.stringToTerraform(struct!.backupPersistence),
    backups_directory: cdktf.stringToTerraform(struct!.backupsDirectory),
  }
}


export function groupSystemSettingsBackupsToHclTerraform(struct?: GroupSystemSettingsBackups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_persistence: {
      value: cdktf.stringToHclTerraform(struct!.backupPersistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backups_directory: {
      value: cdktf.stringToHclTerraform(struct!.backupsDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsBackups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupPersistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPersistence = this._backupPersistence;
    }
    if (this._backupsDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupsDirectory = this._backupsDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsBackups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupPersistence = undefined;
      this._backupsDirectory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupPersistence = value.backupPersistence;
      this._backupsDirectory = value.backupsDirectory;
    }
  }

  // backup_persistence - computed: false, optional: false, required: true
  private _backupPersistence?: string; 
  public get backupPersistence() {
    return this.getStringAttribute('backup_persistence');
  }
  public set backupPersistence(value: string) {
    this._backupPersistence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPersistenceInput() {
    return this._backupPersistence;
  }

  // backups_directory - computed: false, optional: false, required: true
  private _backupsDirectory?: string; 
  public get backupsDirectory() {
    return this.getStringAttribute('backups_directory');
  }
  public set backupsDirectory(value: string) {
    this._backupsDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsDirectoryInput() {
    return this._backupsDirectory;
  }
}
export interface GroupSystemSettingsCustomLogo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#enabled GroupSystemSettings#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#logo_description GroupSystemSettings#logo_description}
  */
  readonly logoDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#logo_image GroupSystemSettings#logo_image}
  */
  readonly logoImage: string;
}

export function groupSystemSettingsCustomLogoToTerraform(struct?: GroupSystemSettingsCustomLogo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    logo_description: cdktf.stringToTerraform(struct!.logoDescription),
    logo_image: cdktf.stringToTerraform(struct!.logoImage),
  }
}


export function groupSystemSettingsCustomLogoToHclTerraform(struct?: GroupSystemSettingsCustomLogo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logo_description: {
      value: cdktf.stringToHclTerraform(struct!.logoDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logo_image: {
      value: cdktf.stringToHclTerraform(struct!.logoImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsCustomLogoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsCustomLogo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logoDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoDescription = this._logoDescription;
    }
    if (this._logoImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoImage = this._logoImage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsCustomLogo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._logoDescription = undefined;
      this._logoImage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._logoDescription = value.logoDescription;
      this._logoImage = value.logoImage;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // logo_description - computed: false, optional: false, required: true
  private _logoDescription?: string; 
  public get logoDescription() {
    return this.getStringAttribute('logo_description');
  }
  public set logoDescription(value: string) {
    this._logoDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logoDescriptionInput() {
    return this._logoDescription;
  }

  // logo_image - computed: false, optional: false, required: true
  private _logoImage?: string; 
  public get logoImage() {
    return this.getStringAttribute('logo_image');
  }
  public set logoImage(value: string) {
    this._logoImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logoImageInput() {
    return this._logoImage;
  }
}
export interface GroupSystemSettingsItemsApiHeaders {
}

export function groupSystemSettingsItemsApiHeadersToTerraform(struct?: GroupSystemSettingsItemsApiHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsApiHeadersToHclTerraform(struct?: GroupSystemSettingsItemsApiHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsApiHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsApiHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsApiHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GroupSystemSettingsItemsApiSsl {
}

export function groupSystemSettingsItemsApiSslToTerraform(struct?: GroupSystemSettingsItemsApiSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsApiSslToHclTerraform(struct?: GroupSystemSettingsItemsApiSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsApiSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsApiSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsApiSsl | undefined) {
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
export interface GroupSystemSettingsItemsApi {
}

export function groupSystemSettingsItemsApiToTerraform(struct?: GroupSystemSettingsItemsApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsApiToHclTerraform(struct?: GroupSystemSettingsItemsApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsApi | undefined) {
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
  private _headers = new GroupSystemSettingsItemsApiHeadersOutputReference(this, "headers");
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
  private _ssl = new GroupSystemSettingsItemsApiSslOutputReference(this, "ssl");
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
export interface GroupSystemSettingsItemsAuth {
}

export function groupSystemSettingsItemsAuthToTerraform(struct?: GroupSystemSettingsItemsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsAuthToHclTerraform(struct?: GroupSystemSettingsItemsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fallback - computed: true, optional: false, required: false
  public get fallback() {
    return this.getBooleanAttribute('fallback');
  }

  // fallback_bad_login - computed: true, optional: false, required: false
  public get fallbackBadLogin() {
    return this.getBooleanAttribute('fallback_bad_login');
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface GroupSystemSettingsItemsBackups {
}

export function groupSystemSettingsItemsBackupsToTerraform(struct?: GroupSystemSettingsItemsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsBackupsToHclTerraform(struct?: GroupSystemSettingsItemsBackups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsBackups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsBackups | undefined) {
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
export interface GroupSystemSettingsItemsCustomLogo {
}

export function groupSystemSettingsItemsCustomLogoToTerraform(struct?: GroupSystemSettingsItemsCustomLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsCustomLogoToHclTerraform(struct?: GroupSystemSettingsItemsCustomLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsCustomLogoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsCustomLogo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsCustomLogo | undefined) {
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
export interface GroupSystemSettingsItemsDistributed {
}

export function groupSystemSettingsItemsDistributedToTerraform(struct?: GroupSystemSettingsItemsDistributed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsDistributedToHclTerraform(struct?: GroupSystemSettingsItemsDistributed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsDistributedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsDistributed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsDistributed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export interface GroupSystemSettingsItemsGit {
}

export function groupSystemSettingsItemsGitToTerraform(struct?: GroupSystemSettingsItemsGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsGitToHclTerraform(struct?: GroupSystemSettingsItemsGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // auto_action - computed: true, optional: false, required: false
  public get autoAction() {
    return this.getStringAttribute('auto_action');
  }

  // auto_action_message - computed: true, optional: false, required: false
  public get autoActionMessage() {
    return this.getStringAttribute('auto_action_message');
  }

  // auto_action_schedule - computed: true, optional: false, required: false
  public get autoActionSchedule() {
    return this.getStringAttribute('auto_action_schedule');
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // commit_deploy_single_action - computed: true, optional: false, required: false
  public get commitDeploySingleAction() {
    return this.getBooleanAttribute('commit_deploy_single_action');
  }

  // copilot_auto_git_commit_messages - computed: true, optional: false, required: false
  public get copilotAutoGitCommitMessages() {
    return this.getBooleanAttribute('copilot_auto_git_commit_messages');
  }

  // default_commit_message - computed: true, optional: false, required: false
  public get defaultCommitMessage() {
    return this.getStringAttribute('default_commit_message');
  }

  // git_ops - computed: true, optional: false, required: false
  public get gitOps() {
    return this.getStringAttribute('git_ops');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // remote - computed: true, optional: false, required: false
  public get remote() {
    return this.getStringAttribute('remote');
  }

  // ssh_key - computed: true, optional: false, required: false
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }

  // strict_host_key_checking - computed: true, optional: false, required: false
  public get strictHostKeyChecking() {
    return this.getBooleanAttribute('strict_host_key_checking');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface GroupSystemSettingsItemsJobLimits {
}

export function groupSystemSettingsItemsJobLimitsToTerraform(struct?: GroupSystemSettingsItemsJobLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsJobLimitsToHclTerraform(struct?: GroupSystemSettingsItemsJobLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsJobLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsJobLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsJobLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // concurrent_job_limit - computed: true, optional: false, required: false
  public get concurrentJobLimit() {
    return this.getNumberAttribute('concurrent_job_limit');
  }

  // concurrent_scheduled_job_limit - computed: true, optional: false, required: false
  public get concurrentScheduledJobLimit() {
    return this.getNumberAttribute('concurrent_scheduled_job_limit');
  }

  // concurrent_system_job_limit - computed: true, optional: false, required: false
  public get concurrentSystemJobLimit() {
    return this.getNumberAttribute('concurrent_system_job_limit');
  }

  // concurrent_system_task_limit - computed: true, optional: false, required: false
  public get concurrentSystemTaskLimit() {
    return this.getNumberAttribute('concurrent_system_task_limit');
  }

  // concurrent_task_limit - computed: true, optional: false, required: false
  public get concurrentTaskLimit() {
    return this.getNumberAttribute('concurrent_task_limit');
  }

  // disable_tasks - computed: true, optional: false, required: false
  public get disableTasks() {
    return this.getBooleanAttribute('disable_tasks');
  }

  // finished_job_artifacts_limit - computed: true, optional: false, required: false
  public get finishedJobArtifactsLimit() {
    return this.getNumberAttribute('finished_job_artifacts_limit');
  }

  // finished_task_artifacts_limit - computed: true, optional: false, required: false
  public get finishedTaskArtifactsLimit() {
    return this.getNumberAttribute('finished_task_artifacts_limit');
  }

  // job_artifacts_reaper_period - computed: true, optional: false, required: false
  public get jobArtifactsReaperPeriod() {
    return this.getStringAttribute('job_artifacts_reaper_period');
  }

  // job_timeout - computed: true, optional: false, required: false
  public get jobTimeout() {
    return this.getStringAttribute('job_timeout');
  }

  // max_task_perc - computed: true, optional: false, required: false
  public get maxTaskPerc() {
    return this.getNumberAttribute('max_task_perc');
  }

  // scheduling_policy - computed: true, optional: false, required: false
  public get schedulingPolicy() {
    return this.getStringAttribute('scheduling_policy');
  }

  // task_heartbeat_period - computed: true, optional: false, required: false
  public get taskHeartbeatPeriod() {
    return this.getNumberAttribute('task_heartbeat_period');
  }

  // task_manifest_flush_period_ms - computed: true, optional: false, required: false
  public get taskManifestFlushPeriodMs() {
    return this.getNumberAttribute('task_manifest_flush_period_ms');
  }

  // task_manifest_max_buffer_size - computed: true, optional: false, required: false
  public get taskManifestMaxBufferSize() {
    return this.getNumberAttribute('task_manifest_max_buffer_size');
  }

  // task_manifest_read_buffer_size - computed: true, optional: false, required: false
  public get taskManifestReadBufferSize() {
    return this.getStringAttribute('task_manifest_read_buffer_size');
  }

  // task_poll_timeout_ms - computed: true, optional: false, required: false
  public get taskPollTimeoutMs() {
    return this.getNumberAttribute('task_poll_timeout_ms');
  }
}
export interface GroupSystemSettingsItemsLimitsSamples {
}

export function groupSystemSettingsItemsLimitsSamplesToTerraform(struct?: GroupSystemSettingsItemsLimitsSamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsLimitsSamplesToHclTerraform(struct?: GroupSystemSettingsItemsLimitsSamples): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsLimitsSamplesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsLimitsSamples | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsLimitsSamples | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
}
export interface GroupSystemSettingsItemsLimits {
}

export function groupSystemSettingsItemsLimitsToTerraform(struct?: GroupSystemSettingsItemsLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsLimitsToHclTerraform(struct?: GroupSystemSettingsItemsLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_profile_ttl - computed: true, optional: false, required: false
  public get cpuProfileTtl() {
    return this.getStringAttribute('cpu_profile_ttl');
  }

  // edge_metrics_custom_expression - computed: true, optional: false, required: false
  public get edgeMetricsCustomExpression() {
    return this.getStringAttribute('edge_metrics_custom_expression');
  }

  // edge_metrics_mode - computed: true, optional: false, required: false
  public get edgeMetricsMode() {
    return this.getStringAttribute('edge_metrics_mode');
  }

  // edge_nodes_count - computed: true, optional: false, required: false
  public get edgeNodesCount() {
    return this.getNumberAttribute('edge_nodes_count');
  }

  // enable_metrics_persistence - computed: true, optional: false, required: false
  public get enableMetricsPersistence() {
    return this.getBooleanAttribute('enable_metrics_persistence');
  }

  // events_metadata_sources - computed: true, optional: false, required: false
  public get eventsMetadataSources() {
    return this.getListAttribute('events_metadata_sources');
  }

  // lookup_max_size - computed: true, optional: false, required: false
  public get lookupMaxSize() {
    return this.getStringAttribute('lookup_max_size');
  }

  // lookup_max_total_size - computed: true, optional: false, required: false
  public get lookupMaxTotalSize() {
    return this.getStringAttribute('lookup_max_total_size');
  }

  // max_metrics - computed: true, optional: false, required: false
  public get maxMetrics() {
    return this.getNumberAttribute('max_metrics');
  }

  // max_pq_size - computed: true, optional: false, required: false
  public get maxPqSize() {
    return this.getStringAttribute('max_pq_size');
  }

  // metrics_directory - computed: true, optional: false, required: false
  public get metricsDirectory() {
    return this.getStringAttribute('metrics_directory');
  }

  // metrics_drop_list - computed: true, optional: false, required: false
  public get metricsDropList() {
    return this.getListAttribute('metrics_drop_list');
  }

  // metrics_fields_blacklist - computed: true, optional: false, required: false
  public get metricsFieldsBlacklist() {
    return this.getListAttribute('metrics_fields_blacklist');
  }

  // metrics_gc_period - computed: true, optional: false, required: false
  public get metricsGcPeriod() {
    return this.getStringAttribute('metrics_gc_period');
  }

  // metrics_max_cardinality - computed: true, optional: false, required: false
  public get metricsMaxCardinality() {
    return this.getNumberAttribute('metrics_max_cardinality');
  }

  // metrics_max_disk_space - computed: true, optional: false, required: false
  public get metricsMaxDiskSpace() {
    return this.getStringAttribute('metrics_max_disk_space');
  }

  // metrics_never_drop_list - computed: true, optional: false, required: false
  public get metricsNeverDropList() {
    return this.getListAttribute('metrics_never_drop_list');
  }

  // metrics_worker_id_blacklist - computed: true, optional: false, required: false
  public get metricsWorkerIdBlacklist() {
    return this.getListAttribute('metrics_worker_id_blacklist');
  }

  // min_free_space - computed: true, optional: false, required: false
  public get minFreeSpace() {
    return this.getStringAttribute('min_free_space');
  }

  // samples - computed: true, optional: false, required: false
  private _samples = new GroupSystemSettingsItemsLimitsSamplesOutputReference(this, "samples");
  public get samples() {
    return this._samples;
  }
}
export interface GroupSystemSettingsItemsPii {
}

export function groupSystemSettingsItemsPiiToTerraform(struct?: GroupSystemSettingsItemsPii): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsPiiToHclTerraform(struct?: GroupSystemSettingsItemsPii): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsPiiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsPii | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsPii | undefined) {
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
export interface GroupSystemSettingsItemsProxy {
}

export function groupSystemSettingsItemsProxyToTerraform(struct?: GroupSystemSettingsItemsProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsProxyToHclTerraform(struct?: GroupSystemSettingsItemsProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsProxy | undefined) {
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
export interface GroupSystemSettingsItemsRedisCacheLimits {
}

export function groupSystemSettingsItemsRedisCacheLimitsToTerraform(struct?: GroupSystemSettingsItemsRedisCacheLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsRedisCacheLimitsToHclTerraform(struct?: GroupSystemSettingsItemsRedisCacheLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsRedisCacheLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsRedisCacheLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsRedisCacheLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_tracking_mechanism - computed: true, optional: false, required: false
  public get clientTrackingMechanism() {
    return this.getStringAttribute('client_tracking_mechanism');
  }

  // enable_server_assist - computed: true, optional: false, required: false
  public get enableServerAssist() {
    return this.getBooleanAttribute('enable_server_assist');
  }

  // key_ttl_secs - computed: true, optional: false, required: false
  public get keyTtlSecs() {
    return this.getNumberAttribute('key_ttl_secs');
  }

  // max_cache_size - computed: true, optional: false, required: false
  public get maxCacheSize() {
    return this.getNumberAttribute('max_cache_size');
  }

  // max_num_keys - computed: true, optional: false, required: false
  public get maxNumKeys() {
    return this.getNumberAttribute('max_num_keys');
  }

  // service_period_secs - computed: true, optional: false, required: false
  public get servicePeriodSecs() {
    return this.getNumberAttribute('service_period_secs');
  }
}
export interface GroupSystemSettingsItemsRedisLimitsConnections {
}

export function groupSystemSettingsItemsRedisLimitsConnectionsToTerraform(struct?: GroupSystemSettingsItemsRedisLimitsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsRedisLimitsConnectionsToHclTerraform(struct?: GroupSystemSettingsItemsRedisLimitsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsRedisLimitsConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsRedisLimitsConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsRedisLimitsConnections | undefined) {
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

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
}
export interface GroupSystemSettingsItemsRedisLimits {
}

export function groupSystemSettingsItemsRedisLimitsToTerraform(struct?: GroupSystemSettingsItemsRedisLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsRedisLimitsToHclTerraform(struct?: GroupSystemSettingsItemsRedisLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsRedisLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsRedisLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsRedisLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new GroupSystemSettingsItemsRedisLimitsConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }
}
export interface GroupSystemSettingsItemsRollback {
}

export function groupSystemSettingsItemsRollbackToTerraform(struct?: GroupSystemSettingsItemsRollback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsRollbackToHclTerraform(struct?: GroupSystemSettingsItemsRollback): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsRollbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsRollback | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsRollback | undefined) {
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
export interface GroupSystemSettingsItemsSearchLimitsWarmPoolSize {
}

export function groupSystemSettingsItemsSearchLimitsWarmPoolSizeToTerraform(struct?: GroupSystemSettingsItemsSearchLimitsWarmPoolSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsSearchLimitsWarmPoolSizeToHclTerraform(struct?: GroupSystemSettingsItemsSearchLimitsWarmPoolSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsSearchLimitsWarmPoolSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsSearchLimitsWarmPoolSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsSearchLimitsWarmPoolSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // warm_pool_size_enum - computed: true, optional: false, required: false
  public get warmPoolSizeEnum() {
    return this.getStringAttribute('warm_pool_size_enum');
  }
}
export interface GroupSystemSettingsItemsSearchLimits {
}

export function groupSystemSettingsItemsSearchLimitsToTerraform(struct?: GroupSystemSettingsItemsSearchLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsSearchLimitsToHclTerraform(struct?: GroupSystemSettingsItemsSearchLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsSearchLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsSearchLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsSearchLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compress_object_cache_artifacts - computed: true, optional: false, required: false
  public get compressObjectCacheArtifacts() {
    return this.getBooleanAttribute('compress_object_cache_artifacts');
  }

  // field_summary_max_fields - computed: true, optional: false, required: false
  public get fieldSummaryMaxFields() {
    return this.getNumberAttribute('field_summary_max_fields');
  }

  // field_summary_max_nested_depth - computed: true, optional: false, required: false
  public get fieldSummaryMaxNestedDepth() {
    return this.getNumberAttribute('field_summary_max_nested_depth');
  }

  // max_concurrent_searches - computed: true, optional: false, required: false
  public get maxConcurrentSearches() {
    return this.getNumberAttribute('max_concurrent_searches');
  }

  // max_executors_per_search - computed: true, optional: false, required: false
  public get maxExecutorsPerSearch() {
    return this.getNumberAttribute('max_executors_per_search');
  }

  // max_results_per_search - computed: true, optional: false, required: false
  public get maxResultsPerSearch() {
    return this.getNumberAttribute('max_results_per_search');
  }

  // search_history_max_jobs - computed: true, optional: false, required: false
  public get searchHistoryMaxJobs() {
    return this.getNumberAttribute('search_history_max_jobs');
  }

  // search_queue_length - computed: true, optional: false, required: false
  public get searchQueueLength() {
    return this.getNumberAttribute('search_queue_length');
  }

  // warm_pool_size - computed: true, optional: false, required: false
  private _warmPoolSize = new GroupSystemSettingsItemsSearchLimitsWarmPoolSizeOutputReference(this, "warm_pool_size");
  public get warmPoolSize() {
    return this._warmPoolSize;
  }

  // write_only_provider_secrets - computed: true, optional: false, required: false
  public get writeOnlyProviderSecrets() {
    return this.getBooleanAttribute('write_only_provider_secrets');
  }
}
export interface GroupSystemSettingsItemsServicesLimitsConnections {
}

export function groupSystemSettingsItemsServicesLimitsConnectionsToTerraform(struct?: GroupSystemSettingsItemsServicesLimitsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsServicesLimitsConnectionsToHclTerraform(struct?: GroupSystemSettingsItemsServicesLimitsConnections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsServicesLimitsConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsServicesLimitsConnections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsServicesLimitsConnections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
}
export interface GroupSystemSettingsItemsServicesLimitsMetrics {
}

export function groupSystemSettingsItemsServicesLimitsMetricsToTerraform(struct?: GroupSystemSettingsItemsServicesLimitsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsServicesLimitsMetricsToHclTerraform(struct?: GroupSystemSettingsItemsServicesLimitsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsServicesLimitsMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsServicesLimitsMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsServicesLimitsMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
}
export interface GroupSystemSettingsItemsServicesLimitsNotifications {
}

export function groupSystemSettingsItemsServicesLimitsNotificationsToTerraform(struct?: GroupSystemSettingsItemsServicesLimitsNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsServicesLimitsNotificationsToHclTerraform(struct?: GroupSystemSettingsItemsServicesLimitsNotifications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsServicesLimitsNotificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsServicesLimitsNotifications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsServicesLimitsNotifications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
}
export interface GroupSystemSettingsItemsServicesLimits {
}

export function groupSystemSettingsItemsServicesLimitsToTerraform(struct?: GroupSystemSettingsItemsServicesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsServicesLimitsToHclTerraform(struct?: GroupSystemSettingsItemsServicesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsServicesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsServicesLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsServicesLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connections - computed: true, optional: false, required: false
  private _connections = new GroupSystemSettingsItemsServicesLimitsConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new GroupSystemSettingsItemsServicesLimitsMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // notifications - computed: true, optional: false, required: false
  private _notifications = new GroupSystemSettingsItemsServicesLimitsNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }
}
export interface GroupSystemSettingsItemsShutdown {
}

export function groupSystemSettingsItemsShutdownToTerraform(struct?: GroupSystemSettingsItemsShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsShutdownToHclTerraform(struct?: GroupSystemSettingsItemsShutdown): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsShutdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsShutdown | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsShutdown | undefined) {
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
export interface GroupSystemSettingsItemsSni {
}

export function groupSystemSettingsItemsSniToTerraform(struct?: GroupSystemSettingsItemsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsSniToHclTerraform(struct?: GroupSystemSettingsItemsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsSni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsSni | undefined) {
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
export interface GroupSystemSettingsItemsSockets {
}

export function groupSystemSettingsItemsSocketsToTerraform(struct?: GroupSystemSettingsItemsSockets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsSocketsToHclTerraform(struct?: GroupSystemSettingsItemsSockets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsSocketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsSockets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsSockets | undefined) {
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
export interface GroupSystemSettingsItemsSystem {
}

export function groupSystemSettingsItemsSystemToTerraform(struct?: GroupSystemSettingsItemsSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsSystemToHclTerraform(struct?: GroupSystemSettingsItemsSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsSystem | undefined) {
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
export interface GroupSystemSettingsItemsTls {
}

export function groupSystemSettingsItemsTlsToTerraform(struct?: GroupSystemSettingsItemsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsTlsToHclTerraform(struct?: GroupSystemSettingsItemsTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsTls | undefined) {
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
export interface GroupSystemSettingsItemsUpgradeGroupSettings {
}

export function groupSystemSettingsItemsUpgradeGroupSettingsToTerraform(struct?: GroupSystemSettingsItemsUpgradeGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsUpgradeGroupSettingsToHclTerraform(struct?: GroupSystemSettingsItemsUpgradeGroupSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsUpgradeGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsUpgradeGroupSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsUpgradeGroupSettings | undefined) {
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
export interface GroupSystemSettingsItemsUpgradeSettingsPackageUrls {
}

export function groupSystemSettingsItemsUpgradeSettingsPackageUrlsToTerraform(struct?: GroupSystemSettingsItemsUpgradeSettingsPackageUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsUpgradeSettingsPackageUrlsToHclTerraform(struct?: GroupSystemSettingsItemsUpgradeSettingsPackageUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsUpgradeSettingsPackageUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupSystemSettingsItemsUpgradeSettingsPackageUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsUpgradeSettingsPackageUrls | undefined) {
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

export class GroupSystemSettingsItemsUpgradeSettingsPackageUrlsList extends cdktf.ComplexList {

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
  public get(index: number): GroupSystemSettingsItemsUpgradeSettingsPackageUrlsOutputReference {
    return new GroupSystemSettingsItemsUpgradeSettingsPackageUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupSystemSettingsItemsUpgradeSettings {
}

export function groupSystemSettingsItemsUpgradeSettingsToTerraform(struct?: GroupSystemSettingsItemsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsUpgradeSettingsToHclTerraform(struct?: GroupSystemSettingsItemsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsUpgradeSettings | undefined) {
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
  private _packageUrls = new GroupSystemSettingsItemsUpgradeSettingsPackageUrlsList(this, "package_urls", false);
  public get packageUrls() {
    return this._packageUrls;
  }

  // upgrade_source - computed: true, optional: false, required: false
  public get upgradeSource() {
    return this.getStringAttribute('upgrade_source');
  }
}
export interface GroupSystemSettingsItemsWorkers {
}

export function groupSystemSettingsItemsWorkersToTerraform(struct?: GroupSystemSettingsItemsWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsWorkersToHclTerraform(struct?: GroupSystemSettingsItemsWorkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsItemsWorkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItemsWorkers | undefined) {
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
export interface GroupSystemSettingsItems {
}

export function groupSystemSettingsItemsToTerraform(struct?: GroupSystemSettingsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupSystemSettingsItemsToHclTerraform(struct?: GroupSystemSettingsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupSystemSettingsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupSystemSettingsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api - computed: true, optional: false, required: false
  private _api = new GroupSystemSettingsItemsApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }

  // auth - computed: true, optional: false, required: false
  private _auth = new GroupSystemSettingsItemsAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }

  // backups - computed: true, optional: false, required: false
  private _backups = new GroupSystemSettingsItemsBackupsOutputReference(this, "backups");
  public get backups() {
    return this._backups;
  }

  // custom_logo - computed: true, optional: false, required: false
  private _customLogo = new GroupSystemSettingsItemsCustomLogoOutputReference(this, "custom_logo");
  public get customLogo() {
    return this._customLogo;
  }

  // distributed - computed: true, optional: false, required: false
  private _distributed = new GroupSystemSettingsItemsDistributedOutputReference(this, "distributed");
  public get distributed() {
    return this._distributed;
  }

  // fips - computed: true, optional: false, required: false
  public get fips() {
    return this.getBooleanAttribute('fips');
  }

  // git - computed: true, optional: false, required: false
  private _git = new GroupSystemSettingsItemsGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }

  // job_limits - computed: true, optional: false, required: false
  private _jobLimits = new GroupSystemSettingsItemsJobLimitsOutputReference(this, "job_limits");
  public get jobLimits() {
    return this._jobLimits;
  }

  // limits - computed: true, optional: false, required: false
  private _limits = new GroupSystemSettingsItemsLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }

  // pii - computed: true, optional: false, required: false
  private _pii = new GroupSystemSettingsItemsPiiOutputReference(this, "pii");
  public get pii() {
    return this._pii;
  }

  // proxy - computed: true, optional: false, required: false
  private _proxy = new GroupSystemSettingsItemsProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }

  // redis_cache_limits - computed: true, optional: false, required: false
  private _redisCacheLimits = new GroupSystemSettingsItemsRedisCacheLimitsOutputReference(this, "redis_cache_limits");
  public get redisCacheLimits() {
    return this._redisCacheLimits;
  }

  // redis_limits - computed: true, optional: false, required: false
  private _redisLimits = new GroupSystemSettingsItemsRedisLimitsOutputReference(this, "redis_limits");
  public get redisLimits() {
    return this._redisLimits;
  }

  // rollback - computed: true, optional: false, required: false
  private _rollback = new GroupSystemSettingsItemsRollbackOutputReference(this, "rollback");
  public get rollback() {
    return this._rollback;
  }

  // search_limits - computed: true, optional: false, required: false
  private _searchLimits = new GroupSystemSettingsItemsSearchLimitsOutputReference(this, "search_limits");
  public get searchLimits() {
    return this._searchLimits;
  }

  // services_limits - computed: true, optional: false, required: false
  private _servicesLimits = new GroupSystemSettingsItemsServicesLimitsOutputReference(this, "services_limits");
  public get servicesLimits() {
    return this._servicesLimits;
  }

  // shutdown - computed: true, optional: false, required: false
  private _shutdown = new GroupSystemSettingsItemsShutdownOutputReference(this, "shutdown");
  public get shutdown() {
    return this._shutdown;
  }

  // sni - computed: true, optional: false, required: false
  private _sni = new GroupSystemSettingsItemsSniOutputReference(this, "sni");
  public get sni() {
    return this._sni;
  }

  // sockets - computed: true, optional: false, required: false
  private _sockets = new GroupSystemSettingsItemsSocketsOutputReference(this, "sockets");
  public get sockets() {
    return this._sockets;
  }

  // system - computed: true, optional: false, required: false
  private _system = new GroupSystemSettingsItemsSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new GroupSystemSettingsItemsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // upgrade_group_settings - computed: true, optional: false, required: false
  private _upgradeGroupSettings = new GroupSystemSettingsItemsUpgradeGroupSettingsOutputReference(this, "upgrade_group_settings");
  public get upgradeGroupSettings() {
    return this._upgradeGroupSettings;
  }

  // upgrade_settings - computed: true, optional: false, required: false
  private _upgradeSettings = new GroupSystemSettingsItemsUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }

  // workers - computed: true, optional: false, required: false
  private _workers = new GroupSystemSettingsItemsWorkersOutputReference(this, "workers");
  public get workers() {
    return this._workers;
  }
}

export class GroupSystemSettingsItemsList extends cdktf.ComplexList {

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
  public get(index: number): GroupSystemSettingsItemsOutputReference {
    return new GroupSystemSettingsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupSystemSettingsPii {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#enable_pii_detection GroupSystemSettings#enable_pii_detection}
  */
  readonly enablePiiDetection: boolean | cdktf.IResolvable;
}

export function groupSystemSettingsPiiToTerraform(struct?: GroupSystemSettingsPii | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_pii_detection: cdktf.booleanToTerraform(struct!.enablePiiDetection),
  }
}


export function groupSystemSettingsPiiToHclTerraform(struct?: GroupSystemSettingsPii | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_pii_detection: {
      value: cdktf.booleanToHclTerraform(struct!.enablePiiDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsPiiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsPii | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePiiDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePiiDetection = this._enablePiiDetection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsPii | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePiiDetection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePiiDetection = value.enablePiiDetection;
    }
  }

  // enable_pii_detection - computed: false, optional: false, required: true
  private _enablePiiDetection?: boolean | cdktf.IResolvable; 
  public get enablePiiDetection() {
    return this.getBooleanAttribute('enable_pii_detection');
  }
  public set enablePiiDetection(value: boolean | cdktf.IResolvable) {
    this._enablePiiDetection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePiiDetectionInput() {
    return this._enablePiiDetection;
  }
}
export interface GroupSystemSettingsProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#use_env_vars GroupSystemSettings#use_env_vars}
  */
  readonly useEnvVars: boolean | cdktf.IResolvable;
}

export function groupSystemSettingsProxyToTerraform(struct?: GroupSystemSettingsProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_env_vars: cdktf.booleanToTerraform(struct!.useEnvVars),
  }
}


export function groupSystemSettingsProxyToHclTerraform(struct?: GroupSystemSettingsProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_env_vars: {
      value: cdktf.booleanToHclTerraform(struct!.useEnvVars),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useEnvVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnvVars = this._useEnvVars;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._useEnvVars = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._useEnvVars = value.useEnvVars;
    }
  }

  // use_env_vars - computed: false, optional: false, required: true
  private _useEnvVars?: boolean | cdktf.IResolvable; 
  public get useEnvVars() {
    return this.getBooleanAttribute('use_env_vars');
  }
  public set useEnvVars(value: boolean | cdktf.IResolvable) {
    this._useEnvVars = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnvVarsInput() {
    return this._useEnvVars;
  }
}
export interface GroupSystemSettingsRollback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#rollback_enabled GroupSystemSettings#rollback_enabled}
  */
  readonly rollbackEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#rollback_retries GroupSystemSettings#rollback_retries}
  */
  readonly rollbackRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#rollback_timeout GroupSystemSettings#rollback_timeout}
  */
  readonly rollbackTimeout?: number;
}

export function groupSystemSettingsRollbackToTerraform(struct?: GroupSystemSettingsRollback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rollback_enabled: cdktf.booleanToTerraform(struct!.rollbackEnabled),
    rollback_retries: cdktf.numberToTerraform(struct!.rollbackRetries),
    rollback_timeout: cdktf.numberToTerraform(struct!.rollbackTimeout),
  }
}


export function groupSystemSettingsRollbackToHclTerraform(struct?: GroupSystemSettingsRollback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rollback_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rollbackEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollback_retries: {
      value: cdktf.numberToHclTerraform(struct!.rollbackRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollback_timeout: {
      value: cdktf.numberToHclTerraform(struct!.rollbackTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsRollbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsRollback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollbackEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackEnabled = this._rollbackEnabled;
    }
    if (this._rollbackRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackRetries = this._rollbackRetries;
    }
    if (this._rollbackTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackTimeout = this._rollbackTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsRollback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollbackEnabled = undefined;
      this._rollbackRetries = undefined;
      this._rollbackTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollbackEnabled = value.rollbackEnabled;
      this._rollbackRetries = value.rollbackRetries;
      this._rollbackTimeout = value.rollbackTimeout;
    }
  }

  // rollback_enabled - computed: false, optional: false, required: true
  private _rollbackEnabled?: boolean | cdktf.IResolvable; 
  public get rollbackEnabled() {
    return this.getBooleanAttribute('rollback_enabled');
  }
  public set rollbackEnabled(value: boolean | cdktf.IResolvable) {
    this._rollbackEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackEnabledInput() {
    return this._rollbackEnabled;
  }

  // rollback_retries - computed: false, optional: true, required: false
  private _rollbackRetries?: number; 
  public get rollbackRetries() {
    return this.getNumberAttribute('rollback_retries');
  }
  public set rollbackRetries(value: number) {
    this._rollbackRetries = value;
  }
  public resetRollbackRetries() {
    this._rollbackRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackRetriesInput() {
    return this._rollbackRetries;
  }

  // rollback_timeout - computed: false, optional: true, required: false
  private _rollbackTimeout?: number; 
  public get rollbackTimeout() {
    return this.getNumberAttribute('rollback_timeout');
  }
  public set rollbackTimeout(value: number) {
    this._rollbackTimeout = value;
  }
  public resetRollbackTimeout() {
    this._rollbackTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackTimeoutInput() {
    return this._rollbackTimeout;
  }
}
export interface GroupSystemSettingsShutdown {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#drain_timeout GroupSystemSettings#drain_timeout}
  */
  readonly drainTimeout: number;
}

export function groupSystemSettingsShutdownToTerraform(struct?: GroupSystemSettingsShutdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_timeout: cdktf.numberToTerraform(struct!.drainTimeout),
  }
}


export function groupSystemSettingsShutdownToHclTerraform(struct?: GroupSystemSettingsShutdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsShutdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsShutdown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainTimeout = this._drainTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsShutdown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drainTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drainTimeout = value.drainTimeout;
    }
  }

  // drain_timeout - computed: false, optional: false, required: true
  private _drainTimeout?: number; 
  public get drainTimeout() {
    return this.getNumberAttribute('drain_timeout');
  }
  public set drainTimeout(value: number) {
    this._drainTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainTimeoutInput() {
    return this._drainTimeout;
  }
}
export interface GroupSystemSettingsSni {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#disable_sni_routing GroupSystemSettings#disable_sni_routing}
  */
  readonly disableSniRouting: boolean | cdktf.IResolvable;
}

export function groupSystemSettingsSniToTerraform(struct?: GroupSystemSettingsSni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_sni_routing: cdktf.booleanToTerraform(struct!.disableSniRouting),
  }
}


export function groupSystemSettingsSniToHclTerraform(struct?: GroupSystemSettingsSni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_sni_routing: {
      value: cdktf.booleanToHclTerraform(struct!.disableSniRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsSni | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSniRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSniRouting = this._disableSniRouting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsSni | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableSniRouting = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableSniRouting = value.disableSniRouting;
    }
  }

  // disable_sni_routing - computed: false, optional: false, required: true
  private _disableSniRouting?: boolean | cdktf.IResolvable; 
  public get disableSniRouting() {
    return this.getBooleanAttribute('disable_sni_routing');
  }
  public set disableSniRouting(value: boolean | cdktf.IResolvable) {
    this._disableSniRouting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSniRoutingInput() {
    return this._disableSniRouting;
  }
}
export interface GroupSystemSettingsSockets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#directory GroupSystemSettings#directory}
  */
  readonly directory?: string;
}

export function groupSystemSettingsSocketsToTerraform(struct?: GroupSystemSettingsSockets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
  }
}


export function groupSystemSettingsSocketsToHclTerraform(struct?: GroupSystemSettingsSockets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsSocketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsSockets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsSockets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }
}
export interface GroupSystemSettingsSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#intercom GroupSystemSettings#intercom}
  */
  readonly intercom: boolean | cdktf.IResolvable;
  /**
  * must be one of ["false", "api"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#upgrade GroupSystemSettings#upgrade}
  */
  readonly upgrade: string;
}

export function groupSystemSettingsSystemToTerraform(struct?: GroupSystemSettingsSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intercom: cdktf.booleanToTerraform(struct!.intercom),
    upgrade: cdktf.stringToTerraform(struct!.upgrade),
  }
}


export function groupSystemSettingsSystemToHclTerraform(struct?: GroupSystemSettingsSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intercom: {
      value: cdktf.booleanToHclTerraform(struct!.intercom),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upgrade: {
      value: cdktf.stringToHclTerraform(struct!.upgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intercom !== undefined) {
      hasAnyValues = true;
      internalValueResult.intercom = this._intercom;
    }
    if (this._upgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgrade = this._upgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intercom = undefined;
      this._upgrade = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intercom = value.intercom;
      this._upgrade = value.upgrade;
    }
  }

  // intercom - computed: false, optional: false, required: true
  private _intercom?: boolean | cdktf.IResolvable; 
  public get intercom() {
    return this.getBooleanAttribute('intercom');
  }
  public set intercom(value: boolean | cdktf.IResolvable) {
    this._intercom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intercomInput() {
    return this._intercom;
  }

  // upgrade - computed: false, optional: false, required: true
  private _upgrade?: string; 
  public get upgrade() {
    return this.getStringAttribute('upgrade');
  }
  public set upgrade(value: string) {
    this._upgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade;
  }
}
export interface GroupSystemSettingsTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#default_cipher_list GroupSystemSettings#default_cipher_list}
  */
  readonly defaultCipherList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#default_ecdh_curve GroupSystemSettings#default_ecdh_curve}
  */
  readonly defaultEcdhCurve: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#max_version GroupSystemSettings#max_version}
  */
  readonly maxVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#min_version GroupSystemSettings#min_version}
  */
  readonly minVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#reject_unauthorized GroupSystemSettings#reject_unauthorized}
  */
  readonly rejectUnauthorized: boolean | cdktf.IResolvable;
}

export function groupSystemSettingsTlsToTerraform(struct?: GroupSystemSettingsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_cipher_list: cdktf.stringToTerraform(struct!.defaultCipherList),
    default_ecdh_curve: cdktf.stringToTerraform(struct!.defaultEcdhCurve),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    reject_unauthorized: cdktf.booleanToTerraform(struct!.rejectUnauthorized),
  }
}


export function groupSystemSettingsTlsToHclTerraform(struct?: GroupSystemSettingsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_cipher_list: {
      value: cdktf.stringToHclTerraform(struct!.defaultCipherList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_ecdh_curve: {
      value: cdktf.stringToHclTerraform(struct!.defaultEcdhCurve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reject_unauthorized: {
      value: cdktf.booleanToHclTerraform(struct!.rejectUnauthorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCipherList !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCipherList = this._defaultCipherList;
    }
    if (this._defaultEcdhCurve !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEcdhCurve = this._defaultEcdhCurve;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._rejectUnauthorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.rejectUnauthorized = this._rejectUnauthorized;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultCipherList = undefined;
      this._defaultEcdhCurve = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._rejectUnauthorized = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultCipherList = value.defaultCipherList;
      this._defaultEcdhCurve = value.defaultEcdhCurve;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._rejectUnauthorized = value.rejectUnauthorized;
    }
  }

  // default_cipher_list - computed: false, optional: false, required: true
  private _defaultCipherList?: string; 
  public get defaultCipherList() {
    return this.getStringAttribute('default_cipher_list');
  }
  public set defaultCipherList(value: string) {
    this._defaultCipherList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCipherListInput() {
    return this._defaultCipherList;
  }

  // default_ecdh_curve - computed: false, optional: false, required: true
  private _defaultEcdhCurve?: string; 
  public get defaultEcdhCurve() {
    return this.getStringAttribute('default_ecdh_curve');
  }
  public set defaultEcdhCurve(value: string) {
    this._defaultEcdhCurve = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEcdhCurveInput() {
    return this._defaultEcdhCurve;
  }

  // max_version - computed: false, optional: false, required: true
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: false, required: true
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // reject_unauthorized - computed: false, optional: false, required: true
  private _rejectUnauthorized?: boolean | cdktf.IResolvable; 
  public get rejectUnauthorized() {
    return this.getBooleanAttribute('reject_unauthorized');
  }
  public set rejectUnauthorized(value: boolean | cdktf.IResolvable) {
    this._rejectUnauthorized = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectUnauthorizedInput() {
    return this._rejectUnauthorized;
  }
}
export interface GroupSystemSettingsUpgradeGroupSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#is_rolling GroupSystemSettings#is_rolling}
  */
  readonly isRolling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#quantity GroupSystemSettings#quantity}
  */
  readonly quantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#retry_count GroupSystemSettings#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#retry_delay GroupSystemSettings#retry_delay}
  */
  readonly retryDelay?: number;
}

export function groupSystemSettingsUpgradeGroupSettingsToTerraform(struct?: GroupSystemSettingsUpgradeGroupSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_rolling: cdktf.booleanToTerraform(struct!.isRolling),
    quantity: cdktf.numberToTerraform(struct!.quantity),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    retry_delay: cdktf.numberToTerraform(struct!.retryDelay),
  }
}


export function groupSystemSettingsUpgradeGroupSettingsToHclTerraform(struct?: GroupSystemSettingsUpgradeGroupSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_rolling: {
      value: cdktf.booleanToHclTerraform(struct!.isRolling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quantity: {
      value: cdktf.numberToHclTerraform(struct!.quantity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_delay: {
      value: cdktf.numberToHclTerraform(struct!.retryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsUpgradeGroupSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsUpgradeGroupSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isRolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRolling = this._isRolling;
    }
    if (this._quantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantity = this._quantity;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._retryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryDelay = this._retryDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsUpgradeGroupSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isRolling = undefined;
      this._quantity = undefined;
      this._retryCount = undefined;
      this._retryDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isRolling = value.isRolling;
      this._quantity = value.quantity;
      this._retryCount = value.retryCount;
      this._retryDelay = value.retryDelay;
    }
  }

  // is_rolling - computed: false, optional: true, required: false
  private _isRolling?: boolean | cdktf.IResolvable; 
  public get isRolling() {
    return this.getBooleanAttribute('is_rolling');
  }
  public set isRolling(value: boolean | cdktf.IResolvable) {
    this._isRolling = value;
  }
  public resetIsRolling() {
    this._isRolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRollingInput() {
    return this._isRolling;
  }

  // quantity - computed: false, optional: true, required: false
  private _quantity?: number; 
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }
  public set quantity(value: number) {
    this._quantity = value;
  }
  public resetQuantity() {
    this._quantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityInput() {
    return this._quantity;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // retry_delay - computed: false, optional: true, required: false
  private _retryDelay?: number; 
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }
  public set retryDelay(value: number) {
    this._retryDelay = value;
  }
  public resetRetryDelay() {
    this._retryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDelayInput() {
    return this._retryDelay;
  }
}
export interface GroupSystemSettingsUpgradeSettingsPackageUrls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#package_hash_url GroupSystemSettings#package_hash_url}
  */
  readonly packageHashUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#package_url GroupSystemSettings#package_url}
  */
  readonly packageUrl: string;
}

export function groupSystemSettingsUpgradeSettingsPackageUrlsToTerraform(struct?: GroupSystemSettingsUpgradeSettingsPackageUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package_hash_url: cdktf.stringToTerraform(struct!.packageHashUrl),
    package_url: cdktf.stringToTerraform(struct!.packageUrl),
  }
}


export function groupSystemSettingsUpgradeSettingsPackageUrlsToHclTerraform(struct?: GroupSystemSettingsUpgradeSettingsPackageUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package_hash_url: {
      value: cdktf.stringToHclTerraform(struct!.packageHashUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_url: {
      value: cdktf.stringToHclTerraform(struct!.packageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsUpgradeSettingsPackageUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupSystemSettingsUpgradeSettingsPackageUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packageHashUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageHashUrl = this._packageHashUrl;
    }
    if (this._packageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageUrl = this._packageUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsUpgradeSettingsPackageUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packageHashUrl = undefined;
      this._packageUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packageHashUrl = value.packageHashUrl;
      this._packageUrl = value.packageUrl;
    }
  }

  // package_hash_url - computed: false, optional: true, required: false
  private _packageHashUrl?: string; 
  public get packageHashUrl() {
    return this.getStringAttribute('package_hash_url');
  }
  public set packageHashUrl(value: string) {
    this._packageHashUrl = value;
  }
  public resetPackageHashUrl() {
    this._packageHashUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageHashUrlInput() {
    return this._packageHashUrl;
  }

  // package_url - computed: false, optional: false, required: true
  private _packageUrl?: string; 
  public get packageUrl() {
    return this.getStringAttribute('package_url');
  }
  public set packageUrl(value: string) {
    this._packageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUrlInput() {
    return this._packageUrl;
  }
}

export class GroupSystemSettingsUpgradeSettingsPackageUrlsList extends cdktf.ComplexList {
  public internalValue? : GroupSystemSettingsUpgradeSettingsPackageUrls[] | cdktf.IResolvable

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
  public get(index: number): GroupSystemSettingsUpgradeSettingsPackageUrlsOutputReference {
    return new GroupSystemSettingsUpgradeSettingsPackageUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupSystemSettingsUpgradeSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#automatic_upgrade_check_period GroupSystemSettings#automatic_upgrade_check_period}
  */
  readonly automaticUpgradeCheckPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#disable_automatic_upgrade GroupSystemSettings#disable_automatic_upgrade}
  */
  readonly disableAutomaticUpgrade: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#enable_legacy_edge_upgrade GroupSystemSettings#enable_legacy_edge_upgrade}
  */
  readonly enableLegacyEdgeUpgrade: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#package_urls GroupSystemSettings#package_urls}
  */
  readonly packageUrls?: GroupSystemSettingsUpgradeSettingsPackageUrls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#upgrade_source GroupSystemSettings#upgrade_source}
  */
  readonly upgradeSource: string;
}

export function groupSystemSettingsUpgradeSettingsToTerraform(struct?: GroupSystemSettingsUpgradeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_upgrade_check_period: cdktf.stringToTerraform(struct!.automaticUpgradeCheckPeriod),
    disable_automatic_upgrade: cdktf.booleanToTerraform(struct!.disableAutomaticUpgrade),
    enable_legacy_edge_upgrade: cdktf.booleanToTerraform(struct!.enableLegacyEdgeUpgrade),
    package_urls: cdktf.listMapper(groupSystemSettingsUpgradeSettingsPackageUrlsToTerraform, false)(struct!.packageUrls),
    upgrade_source: cdktf.stringToTerraform(struct!.upgradeSource),
  }
}


export function groupSystemSettingsUpgradeSettingsToHclTerraform(struct?: GroupSystemSettingsUpgradeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_upgrade_check_period: {
      value: cdktf.stringToHclTerraform(struct!.automaticUpgradeCheckPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_automatic_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.disableAutomaticUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_legacy_edge_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.enableLegacyEdgeUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    package_urls: {
      value: cdktf.listMapperHcl(groupSystemSettingsUpgradeSettingsPackageUrlsToHclTerraform, false)(struct!.packageUrls),
      isBlock: true,
      type: "list",
      storageClassType: "GroupSystemSettingsUpgradeSettingsPackageUrlsList",
    },
    upgrade_source: {
      value: cdktf.stringToHclTerraform(struct!.upgradeSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsUpgradeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticUpgradeCheckPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticUpgradeCheckPeriod = this._automaticUpgradeCheckPeriod;
    }
    if (this._disableAutomaticUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAutomaticUpgrade = this._disableAutomaticUpgrade;
    }
    if (this._enableLegacyEdgeUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLegacyEdgeUpgrade = this._enableLegacyEdgeUpgrade;
    }
    if (this._packageUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageUrls = this._packageUrls?.internalValue;
    }
    if (this._upgradeSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSource = this._upgradeSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsUpgradeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automaticUpgradeCheckPeriod = undefined;
      this._disableAutomaticUpgrade = undefined;
      this._enableLegacyEdgeUpgrade = undefined;
      this._packageUrls.internalValue = undefined;
      this._upgradeSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automaticUpgradeCheckPeriod = value.automaticUpgradeCheckPeriod;
      this._disableAutomaticUpgrade = value.disableAutomaticUpgrade;
      this._enableLegacyEdgeUpgrade = value.enableLegacyEdgeUpgrade;
      this._packageUrls.internalValue = value.packageUrls;
      this._upgradeSource = value.upgradeSource;
    }
  }

  // automatic_upgrade_check_period - computed: false, optional: true, required: false
  private _automaticUpgradeCheckPeriod?: string; 
  public get automaticUpgradeCheckPeriod() {
    return this.getStringAttribute('automatic_upgrade_check_period');
  }
  public set automaticUpgradeCheckPeriod(value: string) {
    this._automaticUpgradeCheckPeriod = value;
  }
  public resetAutomaticUpgradeCheckPeriod() {
    this._automaticUpgradeCheckPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpgradeCheckPeriodInput() {
    return this._automaticUpgradeCheckPeriod;
  }

  // disable_automatic_upgrade - computed: false, optional: false, required: true
  private _disableAutomaticUpgrade?: boolean | cdktf.IResolvable; 
  public get disableAutomaticUpgrade() {
    return this.getBooleanAttribute('disable_automatic_upgrade');
  }
  public set disableAutomaticUpgrade(value: boolean | cdktf.IResolvable) {
    this._disableAutomaticUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomaticUpgradeInput() {
    return this._disableAutomaticUpgrade;
  }

  // enable_legacy_edge_upgrade - computed: false, optional: false, required: true
  private _enableLegacyEdgeUpgrade?: boolean | cdktf.IResolvable; 
  public get enableLegacyEdgeUpgrade() {
    return this.getBooleanAttribute('enable_legacy_edge_upgrade');
  }
  public set enableLegacyEdgeUpgrade(value: boolean | cdktf.IResolvable) {
    this._enableLegacyEdgeUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLegacyEdgeUpgradeInput() {
    return this._enableLegacyEdgeUpgrade;
  }

  // package_urls - computed: false, optional: true, required: false
  private _packageUrls = new GroupSystemSettingsUpgradeSettingsPackageUrlsList(this, "package_urls", false);
  public get packageUrls() {
    return this._packageUrls;
  }
  public putPackageUrls(value: GroupSystemSettingsUpgradeSettingsPackageUrls[] | cdktf.IResolvable) {
    this._packageUrls.internalValue = value;
  }
  public resetPackageUrls() {
    this._packageUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUrlsInput() {
    return this._packageUrls.internalValue;
  }

  // upgrade_source - computed: false, optional: false, required: true
  private _upgradeSource?: string; 
  public get upgradeSource() {
    return this.getStringAttribute('upgrade_source');
  }
  public set upgradeSource(value: string) {
    this._upgradeSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSourceInput() {
    return this._upgradeSource;
  }
}
export interface GroupSystemSettingsWorkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#count GroupSystemSettings#count}
  */
  readonly count: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#enable_heap_snapshots GroupSystemSettings#enable_heap_snapshots}
  */
  readonly enableHeapSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#load_throttle_perc GroupSystemSettings#load_throttle_perc}
  */
  readonly loadThrottlePerc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#memory GroupSystemSettings#memory}
  */
  readonly memory: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#minimum GroupSystemSettings#minimum}
  */
  readonly minimum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#startup_max_conns GroupSystemSettings#startup_max_conns}
  */
  readonly startupMaxConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#startup_throttle_timeout GroupSystemSettings#startup_throttle_timeout}
  */
  readonly startupThrottleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#v8_single_thread GroupSystemSettings#v8_single_thread}
  */
  readonly v8SingleThread?: boolean | cdktf.IResolvable;
}

export function groupSystemSettingsWorkersToTerraform(struct?: GroupSystemSettingsWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    enable_heap_snapshots: cdktf.booleanToTerraform(struct!.enableHeapSnapshots),
    load_throttle_perc: cdktf.numberToTerraform(struct!.loadThrottlePerc),
    memory: cdktf.numberToTerraform(struct!.memory),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    startup_max_conns: cdktf.numberToTerraform(struct!.startupMaxConns),
    startup_throttle_timeout: cdktf.numberToTerraform(struct!.startupThrottleTimeout),
    v8_single_thread: cdktf.booleanToTerraform(struct!.v8SingleThread),
  }
}


export function groupSystemSettingsWorkersToHclTerraform(struct?: GroupSystemSettingsWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_heap_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.enableHeapSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_throttle_perc: {
      value: cdktf.numberToHclTerraform(struct!.loadThrottlePerc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    startup_max_conns: {
      value: cdktf.numberToHclTerraform(struct!.startupMaxConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    startup_throttle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.startupThrottleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v8_single_thread: {
      value: cdktf.booleanToHclTerraform(struct!.v8SingleThread),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSystemSettingsWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupSystemSettingsWorkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._enableHeapSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHeapSnapshots = this._enableHeapSnapshots;
    }
    if (this._loadThrottlePerc !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadThrottlePerc = this._loadThrottlePerc;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._startupMaxConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupMaxConns = this._startupMaxConns;
    }
    if (this._startupThrottleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupThrottleTimeout = this._startupThrottleTimeout;
    }
    if (this._v8SingleThread !== undefined) {
      hasAnyValues = true;
      internalValueResult.v8SingleThread = this._v8SingleThread;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSystemSettingsWorkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._enableHeapSnapshots = undefined;
      this._loadThrottlePerc = undefined;
      this._memory = undefined;
      this._minimum = undefined;
      this._startupMaxConns = undefined;
      this._startupThrottleTimeout = undefined;
      this._v8SingleThread = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._enableHeapSnapshots = value.enableHeapSnapshots;
      this._loadThrottlePerc = value.loadThrottlePerc;
      this._memory = value.memory;
      this._minimum = value.minimum;
      this._startupMaxConns = value.startupMaxConns;
      this._startupThrottleTimeout = value.startupThrottleTimeout;
      this._v8SingleThread = value.v8SingleThread;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // enable_heap_snapshots - computed: false, optional: true, required: false
  private _enableHeapSnapshots?: boolean | cdktf.IResolvable; 
  public get enableHeapSnapshots() {
    return this.getBooleanAttribute('enable_heap_snapshots');
  }
  public set enableHeapSnapshots(value: boolean | cdktf.IResolvable) {
    this._enableHeapSnapshots = value;
  }
  public resetEnableHeapSnapshots() {
    this._enableHeapSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHeapSnapshotsInput() {
    return this._enableHeapSnapshots;
  }

  // load_throttle_perc - computed: false, optional: true, required: false
  private _loadThrottlePerc?: number; 
  public get loadThrottlePerc() {
    return this.getNumberAttribute('load_throttle_perc');
  }
  public set loadThrottlePerc(value: number) {
    this._loadThrottlePerc = value;
  }
  public resetLoadThrottlePerc() {
    this._loadThrottlePerc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadThrottlePercInput() {
    return this._loadThrottlePerc;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // minimum - computed: false, optional: false, required: true
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // startup_max_conns - computed: false, optional: true, required: false
  private _startupMaxConns?: number; 
  public get startupMaxConns() {
    return this.getNumberAttribute('startup_max_conns');
  }
  public set startupMaxConns(value: number) {
    this._startupMaxConns = value;
  }
  public resetStartupMaxConns() {
    this._startupMaxConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupMaxConnsInput() {
    return this._startupMaxConns;
  }

  // startup_throttle_timeout - computed: false, optional: true, required: false
  private _startupThrottleTimeout?: number; 
  public get startupThrottleTimeout() {
    return this.getNumberAttribute('startup_throttle_timeout');
  }
  public set startupThrottleTimeout(value: number) {
    this._startupThrottleTimeout = value;
  }
  public resetStartupThrottleTimeout() {
    this._startupThrottleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupThrottleTimeoutInput() {
    return this._startupThrottleTimeout;
  }

  // v8_single_thread - computed: false, optional: true, required: false
  private _v8SingleThread?: boolean | cdktf.IResolvable; 
  public get v8SingleThread() {
    return this.getBooleanAttribute('v8_single_thread');
  }
  public set v8SingleThread(value: boolean | cdktf.IResolvable) {
    this._v8SingleThread = value;
  }
  public resetV8SingleThread() {
    this._v8SingleThread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v8SingleThreadInput() {
    return this._v8SingleThread;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings criblio_group_system_settings}
*/
export class GroupSystemSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_group_system_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupSystemSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupSystemSettings to import
  * @param importFromId The id of the existing GroupSystemSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupSystemSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_group_system_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.69/docs/resources/group_system_settings criblio_group_system_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupSystemSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: GroupSystemSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_group_system_settings',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.69',
        providerVersionConstraint: '1.20.69'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._api.internalValue = config.api;
    this._backups.internalValue = config.backups;
    this._customLogo.internalValue = config.customLogo;
    this._groupId = config.groupId;
    this._pii.internalValue = config.pii;
    this._proxy.internalValue = config.proxy;
    this._rollback.internalValue = config.rollback;
    this._shutdown.internalValue = config.shutdown;
    this._sni.internalValue = config.sni;
    this._sockets.internalValue = config.sockets;
    this._system.internalValue = config.systemAttribute;
    this._tls.internalValue = config.tls;
    this._upgradeGroupSettings.internalValue = config.upgradeGroupSettings;
    this._upgradeSettings.internalValue = config.upgradeSettings;
    this._workers.internalValue = config.workers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: false, optional: false, required: true
  private _api = new GroupSystemSettingsApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: GroupSystemSettingsApi) {
    this._api.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api.internalValue;
  }

  // backups - computed: false, optional: false, required: true
  private _backups = new GroupSystemSettingsBackupsOutputReference(this, "backups");
  public get backups() {
    return this._backups;
  }
  public putBackups(value: GroupSystemSettingsBackups) {
    this._backups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups.internalValue;
  }

  // custom_logo - computed: false, optional: false, required: true
  private _customLogo = new GroupSystemSettingsCustomLogoOutputReference(this, "custom_logo");
  public get customLogo() {
    return this._customLogo;
  }
  public putCustomLogo(value: GroupSystemSettingsCustomLogo) {
    this._customLogo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogoInput() {
    return this._customLogo.internalValue;
  }

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
  private _items = new GroupSystemSettingsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // pii - computed: false, optional: false, required: true
  private _pii = new GroupSystemSettingsPiiOutputReference(this, "pii");
  public get pii() {
    return this._pii;
  }
  public putPii(value: GroupSystemSettingsPii) {
    this._pii.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get piiInput() {
    return this._pii.internalValue;
  }

  // proxy - computed: false, optional: false, required: true
  private _proxy = new GroupSystemSettingsProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: GroupSystemSettingsProxy) {
    this._proxy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // rollback - computed: false, optional: false, required: true
  private _rollback = new GroupSystemSettingsRollbackOutputReference(this, "rollback");
  public get rollback() {
    return this._rollback;
  }
  public putRollback(value: GroupSystemSettingsRollback) {
    this._rollback.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback.internalValue;
  }

  // shutdown - computed: false, optional: false, required: true
  private _shutdown = new GroupSystemSettingsShutdownOutputReference(this, "shutdown");
  public get shutdown() {
    return this._shutdown;
  }
  public putShutdown(value: GroupSystemSettingsShutdown) {
    this._shutdown.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown.internalValue;
  }

  // sni - computed: false, optional: false, required: true
  private _sni = new GroupSystemSettingsSniOutputReference(this, "sni");
  public get sni() {
    return this._sni;
  }
  public putSni(value: GroupSystemSettingsSni) {
    this._sni.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni.internalValue;
  }

  // sockets - computed: false, optional: true, required: false
  private _sockets = new GroupSystemSettingsSocketsOutputReference(this, "sockets");
  public get sockets() {
    return this._sockets;
  }
  public putSockets(value: GroupSystemSettingsSockets) {
    this._sockets.internalValue = value;
  }
  public resetSockets() {
    this._sockets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketsInput() {
    return this._sockets.internalValue;
  }

  // system - computed: false, optional: false, required: true
  private _system = new GroupSystemSettingsSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: GroupSystemSettingsSystem) {
    this._system.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }

  // tls - computed: false, optional: false, required: true
  private _tls = new GroupSystemSettingsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: GroupSystemSettingsTls) {
    this._tls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // upgrade_group_settings - computed: false, optional: false, required: true
  private _upgradeGroupSettings = new GroupSystemSettingsUpgradeGroupSettingsOutputReference(this, "upgrade_group_settings");
  public get upgradeGroupSettings() {
    return this._upgradeGroupSettings;
  }
  public putUpgradeGroupSettings(value: GroupSystemSettingsUpgradeGroupSettings) {
    this._upgradeGroupSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeGroupSettingsInput() {
    return this._upgradeGroupSettings.internalValue;
  }

  // upgrade_settings - computed: false, optional: false, required: true
  private _upgradeSettings = new GroupSystemSettingsUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: GroupSystemSettingsUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }

  // workers - computed: false, optional: false, required: true
  private _workers = new GroupSystemSettingsWorkersOutputReference(this, "workers");
  public get workers() {
    return this._workers;
  }
  public putWorkers(value: GroupSystemSettingsWorkers) {
    this._workers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api: groupSystemSettingsApiToTerraform(this._api.internalValue),
      backups: groupSystemSettingsBackupsToTerraform(this._backups.internalValue),
      custom_logo: groupSystemSettingsCustomLogoToTerraform(this._customLogo.internalValue),
      group_id: cdktf.stringToTerraform(this._groupId),
      pii: groupSystemSettingsPiiToTerraform(this._pii.internalValue),
      proxy: groupSystemSettingsProxyToTerraform(this._proxy.internalValue),
      rollback: groupSystemSettingsRollbackToTerraform(this._rollback.internalValue),
      shutdown: groupSystemSettingsShutdownToTerraform(this._shutdown.internalValue),
      sni: groupSystemSettingsSniToTerraform(this._sni.internalValue),
      sockets: groupSystemSettingsSocketsToTerraform(this._sockets.internalValue),
      system: groupSystemSettingsSystemToTerraform(this._system.internalValue),
      tls: groupSystemSettingsTlsToTerraform(this._tls.internalValue),
      upgrade_group_settings: groupSystemSettingsUpgradeGroupSettingsToTerraform(this._upgradeGroupSettings.internalValue),
      upgrade_settings: groupSystemSettingsUpgradeSettingsToTerraform(this._upgradeSettings.internalValue),
      workers: groupSystemSettingsWorkersToTerraform(this._workers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api: {
        value: groupSystemSettingsApiToHclTerraform(this._api.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsApi",
      },
      backups: {
        value: groupSystemSettingsBackupsToHclTerraform(this._backups.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsBackups",
      },
      custom_logo: {
        value: groupSystemSettingsCustomLogoToHclTerraform(this._customLogo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsCustomLogo",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pii: {
        value: groupSystemSettingsPiiToHclTerraform(this._pii.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsPii",
      },
      proxy: {
        value: groupSystemSettingsProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsProxy",
      },
      rollback: {
        value: groupSystemSettingsRollbackToHclTerraform(this._rollback.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsRollback",
      },
      shutdown: {
        value: groupSystemSettingsShutdownToHclTerraform(this._shutdown.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsShutdown",
      },
      sni: {
        value: groupSystemSettingsSniToHclTerraform(this._sni.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsSni",
      },
      sockets: {
        value: groupSystemSettingsSocketsToHclTerraform(this._sockets.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsSockets",
      },
      system: {
        value: groupSystemSettingsSystemToHclTerraform(this._system.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsSystem",
      },
      tls: {
        value: groupSystemSettingsTlsToHclTerraform(this._tls.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsTls",
      },
      upgrade_group_settings: {
        value: groupSystemSettingsUpgradeGroupSettingsToHclTerraform(this._upgradeGroupSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsUpgradeGroupSettings",
      },
      upgrade_settings: {
        value: groupSystemSettingsUpgradeSettingsToHclTerraform(this._upgradeSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsUpgradeSettings",
      },
      workers: {
        value: groupSystemSettingsWorkersToHclTerraform(this._workers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupSystemSettingsWorkers",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
