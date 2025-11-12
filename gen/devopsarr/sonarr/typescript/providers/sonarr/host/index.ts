// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#application_url Host#application_url}
  */
  readonly applicationUrl: string;
  /**
  * Authentication configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#authentication Host#authentication}
  */
  readonly authentication: HostAuthentication;
  /**
  * Backup configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#backup Host#backup}
  */
  readonly backup: HostBackup;
  /**
  * Bind address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#bind_address Host#bind_address}
  */
  readonly bindAddress: string;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#instance_name Host#instance_name}
  */
  readonly instanceName: string;
  /**
  * Launch browser flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#launch_browser Host#launch_browser}
  */
  readonly launchBrowser?: boolean | cdktf.IResolvable;
  /**
  * Logging configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#logging Host#logging}
  */
  readonly logging: HostLogging;
  /**
  * TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#port Host#port}
  */
  readonly port: number;
  /**
  * Proxy configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#proxy Host#proxy}
  */
  readonly proxy: HostProxy;
  /**
  * Backup configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#ssl Host#ssl}
  */
  readonly ssl: HostSsl;
  /**
  * Update configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#update Host#update}
  */
  readonly update: HostUpdate;
  /**
  * URL base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#url_base Host#url_base}
  */
  readonly urlBase: string;
}
export interface HostAuthentication {
  /**
  * Authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#method Host#method}
  */
  readonly method: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#password Host#password}
  */
  readonly password?: string;
  /**
  * Required for everyone or disabled for local addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#required Host#required}
  */
  readonly required?: string;
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#username Host#username}
  */
  readonly username?: string;
}

export function hostAuthenticationToTerraform(struct?: HostAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
    required: cdktf.stringToTerraform(struct!.required),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function hostAuthenticationToHclTerraform(struct?: HostAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    required: {
      value: cdktf.stringToHclTerraform(struct!.required),
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

export class HostAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._password = undefined;
      this._required = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._password = value.password;
      this._required = value.required;
      this._username = value.username;
    }
  }

  // encrypted_password - computed: true, optional: false, required: false
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
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

  // password - computed: true, optional: true, required: false
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

  // required - computed: true, optional: true, required: false
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // username - computed: true, optional: true, required: false
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
export interface HostBackup {
  /**
  * Backup folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#folder Host#folder}
  */
  readonly folder: string;
  /**
  * Backup interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#interval Host#interval}
  */
  readonly interval: number;
  /**
  * Backup retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#retention Host#retention}
  */
  readonly retention: number;
}

export function hostBackupToTerraform(struct?: HostBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder: cdktf.stringToTerraform(struct!.folder),
    interval: cdktf.numberToTerraform(struct!.interval),
    retention: cdktf.numberToTerraform(struct!.retention),
  }
}


export function hostBackupToHclTerraform(struct?: HostBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention: {
      value: cdktf.numberToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folder = undefined;
      this._interval = undefined;
      this._retention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folder = value.folder;
      this._interval = value.interval;
      this._retention = value.retention;
    }
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: number; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }
}
export interface HostLogging {
  /**
  * Enable analytics flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#analytics_enabled Host#analytics_enabled}
  */
  readonly analyticsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Console log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#console_log_level Host#console_log_level}
  */
  readonly consoleLogLevel?: string;
  /**
  * Log level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#log_level Host#log_level}
  */
  readonly logLevel: string;
  /**
  * Log size limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#log_size_limit Host#log_size_limit}
  */
  readonly logSizeLimit: number;
}

export function hostLoggingToTerraform(struct?: HostLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analytics_enabled: cdktf.booleanToTerraform(struct!.analyticsEnabled),
    console_log_level: cdktf.stringToTerraform(struct!.consoleLogLevel),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    log_size_limit: cdktf.numberToTerraform(struct!.logSizeLimit),
  }
}


export function hostLoggingToHclTerraform(struct?: HostLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analytics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.analyticsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    console_log_level: {
      value: cdktf.stringToHclTerraform(struct!.consoleLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_size_limit: {
      value: cdktf.numberToHclTerraform(struct!.logSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyticsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyticsEnabled = this._analyticsEnabled;
    }
    if (this._consoleLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.consoleLogLevel = this._consoleLogLevel;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._logSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSizeLimit = this._logSizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyticsEnabled = undefined;
      this._consoleLogLevel = undefined;
      this._logLevel = undefined;
      this._logSizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyticsEnabled = value.analyticsEnabled;
      this._consoleLogLevel = value.consoleLogLevel;
      this._logLevel = value.logLevel;
      this._logSizeLimit = value.logSizeLimit;
    }
  }

  // analytics_enabled - computed: true, optional: true, required: false
  private _analyticsEnabled?: boolean | cdktf.IResolvable; 
  public get analyticsEnabled() {
    return this.getBooleanAttribute('analytics_enabled');
  }
  public set analyticsEnabled(value: boolean | cdktf.IResolvable) {
    this._analyticsEnabled = value;
  }
  public resetAnalyticsEnabled() {
    this._analyticsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsEnabledInput() {
    return this._analyticsEnabled;
  }

  // console_log_level - computed: true, optional: true, required: false
  private _consoleLogLevel?: string; 
  public get consoleLogLevel() {
    return this.getStringAttribute('console_log_level');
  }
  public set consoleLogLevel(value: string) {
    this._consoleLogLevel = value;
  }
  public resetConsoleLogLevel() {
    this._consoleLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleLogLevelInput() {
    return this._consoleLogLevel;
  }

  // log_level - computed: false, optional: false, required: true
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // log_size_limit - computed: false, optional: false, required: true
  private _logSizeLimit?: number; 
  public get logSizeLimit() {
    return this.getNumberAttribute('log_size_limit');
  }
  public set logSizeLimit(value: number) {
    this._logSizeLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logSizeLimitInput() {
    return this._logSizeLimit;
  }
}
export interface HostProxy {
  /**
  * Bypass filder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#bypass_filter Host#bypass_filter}
  */
  readonly bypassFilter?: string;
  /**
  * Bypass for local addresses flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#bypass_local_addresses Host#bypass_local_addresses}
  */
  readonly bypassLocalAddresses?: boolean | cdktf.IResolvable;
  /**
  * Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Proxy hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#hostname Host#hostname}
  */
  readonly hostname?: string;
  /**
  * Proxy password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#password Host#password}
  */
  readonly password?: string;
  /**
  * Proxy port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#port Host#port}
  */
  readonly port?: number;
  /**
  * Proxy type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#type Host#type}
  */
  readonly type?: string;
  /**
  * Proxy username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#username Host#username}
  */
  readonly username?: string;
}

export function hostProxyToTerraform(struct?: HostProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_filter: cdktf.stringToTerraform(struct!.bypassFilter),
    bypass_local_addresses: cdktf.booleanToTerraform(struct!.bypassLocalAddresses),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function hostProxyToHclTerraform(struct?: HostProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_filter: {
      value: cdktf.stringToHclTerraform(struct!.bypassFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bypass_local_addresses: {
      value: cdktf.booleanToHclTerraform(struct!.bypassLocalAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class HostProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassFilter = this._bypassFilter;
    }
    if (this._bypassLocalAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassLocalAddresses = this._bypassLocalAddresses;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypassFilter = undefined;
      this._bypassLocalAddresses = undefined;
      this._enabled = undefined;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypassFilter = value.bypassFilter;
      this._bypassLocalAddresses = value.bypassLocalAddresses;
      this._enabled = value.enabled;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // bypass_filter - computed: true, optional: true, required: false
  private _bypassFilter?: string; 
  public get bypassFilter() {
    return this.getStringAttribute('bypass_filter');
  }
  public set bypassFilter(value: string) {
    this._bypassFilter = value;
  }
  public resetBypassFilter() {
    this._bypassFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassFilterInput() {
    return this._bypassFilter;
  }

  // bypass_local_addresses - computed: true, optional: true, required: false
  private _bypassLocalAddresses?: boolean | cdktf.IResolvable; 
  public get bypassLocalAddresses() {
    return this.getBooleanAttribute('bypass_local_addresses');
  }
  public set bypassLocalAddresses(value: boolean | cdktf.IResolvable) {
    this._bypassLocalAddresses = value;
  }
  public resetBypassLocalAddresses() {
    this._bypassLocalAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassLocalAddressesInput() {
    return this._bypassLocalAddresses;
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

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // password - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: true, optional: true, required: false
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
export interface HostSsl {
  /**
  * Certificate Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#cert_password Host#cert_password}
  */
  readonly certPassword?: string;
  /**
  * Certificate path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#cert_path Host#cert_path}
  */
  readonly certPath?: string;
  /**
  * Certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#certificate_validation Host#certificate_validation}
  */
  readonly certificateValidation: string;
  /**
  * Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#enabled Host#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * SSL port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#port Host#port}
  */
  readonly port?: number;
}

export function hostSslToTerraform(struct?: HostSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_password: cdktf.stringToTerraform(struct!.certPassword),
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    certificate_validation: cdktf.stringToTerraform(struct!.certificateValidation),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function hostSslToHclTerraform(struct?: HostSsl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_password: {
      value: cdktf.stringToHclTerraform(struct!.certPassword),
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
    certificate_validation: {
      value: cdktf.stringToHclTerraform(struct!.certificateValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostSsl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPassword = this._certPassword;
    }
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._certificateValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateValidation = this._certificateValidation;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostSsl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certPassword = undefined;
      this._certPath = undefined;
      this._certificateValidation = undefined;
      this._enabled = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certPassword = value.certPassword;
      this._certPath = value.certPath;
      this._certificateValidation = value.certificateValidation;
      this._enabled = value.enabled;
      this._port = value.port;
    }
  }

  // cert_password - computed: true, optional: true, required: false
  private _certPassword?: string; 
  public get certPassword() {
    return this.getStringAttribute('cert_password');
  }
  public set certPassword(value: string) {
    this._certPassword = value;
  }
  public resetCertPassword() {
    this._certPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPasswordInput() {
    return this._certPassword;
  }

  // cert_path - computed: true, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // certificate_validation - computed: false, optional: false, required: true
  private _certificateValidation?: string; 
  public get certificateValidation() {
    return this.getStringAttribute('certificate_validation');
  }
  public set certificateValidation(value: string) {
    this._certificateValidation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidationInput() {
    return this._certificateValidation;
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface HostUpdate {
  /**
  * Branch reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#branch Host#branch}
  */
  readonly branch: string;
  /**
  * Update mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#mechanism Host#mechanism}
  */
  readonly mechanism: string;
  /**
  * Script path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#script_path Host#script_path}
  */
  readonly scriptPath?: string;
  /**
  * Update automatically flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#update_automatically Host#update_automatically}
  */
  readonly updateAutomatically?: boolean | cdktf.IResolvable;
}

export function hostUpdateToTerraform(struct?: HostUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
    script_path: cdktf.stringToTerraform(struct!.scriptPath),
    update_automatically: cdktf.booleanToTerraform(struct!.updateAutomatically),
  }
}


export function hostUpdateToHclTerraform(struct?: HostUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_path: {
      value: cdktf.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_automatically: {
      value: cdktf.booleanToHclTerraform(struct!.updateAutomatically),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HostUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HostUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._updateAutomatically !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAutomatically = this._updateAutomatically;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HostUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branch = undefined;
      this._mechanism = undefined;
      this._scriptPath = undefined;
      this._updateAutomatically = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branch = value.branch;
      this._mechanism = value.mechanism;
      this._scriptPath = value.scriptPath;
      this._updateAutomatically = value.updateAutomatically;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // mechanism - computed: false, optional: false, required: true
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // script_path - computed: true, optional: true, required: false
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  public resetScriptPath() {
    this._scriptPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }

  // update_automatically - computed: true, optional: true, required: false
  private _updateAutomatically?: boolean | cdktf.IResolvable; 
  public get updateAutomatically() {
    return this.getBooleanAttribute('update_automatically');
  }
  public set updateAutomatically(value: boolean | cdktf.IResolvable) {
    this._updateAutomatically = value;
  }
  public resetUpdateAutomatically() {
    this._updateAutomatically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAutomaticallyInput() {
    return this._updateAutomatically;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host sonarr_host}
*/
export class Host extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Host resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Host to import
  * @param importFromId The id of the existing Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Host to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/host sonarr_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostConfig
  */
  public constructor(scope: Construct, id: string, config: HostConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_host',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationUrl = config.applicationUrl;
    this._authentication.internalValue = config.authentication;
    this._backup.internalValue = config.backup;
    this._bindAddress = config.bindAddress;
    this._instanceName = config.instanceName;
    this._launchBrowser = config.launchBrowser;
    this._logging.internalValue = config.logging;
    this._port = config.port;
    this._proxy.internalValue = config.proxy;
    this._ssl.internalValue = config.ssl;
    this._update.internalValue = config.update;
    this._urlBase = config.urlBase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_url - computed: false, optional: false, required: true
  private _applicationUrl?: string; 
  public get applicationUrl() {
    return this.getStringAttribute('application_url');
  }
  public set applicationUrl(value: string) {
    this._applicationUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationUrlInput() {
    return this._applicationUrl;
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication = new HostAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: HostAuthentication) {
    this._authentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // backup - computed: false, optional: false, required: true
  private _backup = new HostBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: HostBackup) {
    this._backup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // bind_address - computed: false, optional: false, required: true
  private _bindAddress?: string; 
  public get bindAddress() {
    return this.getStringAttribute('bind_address');
  }
  public set bindAddress(value: string) {
    this._bindAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAddressInput() {
    return this._bindAddress;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // launch_browser - computed: true, optional: true, required: false
  private _launchBrowser?: boolean | cdktf.IResolvable; 
  public get launchBrowser() {
    return this.getBooleanAttribute('launch_browser');
  }
  public set launchBrowser(value: boolean | cdktf.IResolvable) {
    this._launchBrowser = value;
  }
  public resetLaunchBrowser() {
    this._launchBrowser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchBrowserInput() {
    return this._launchBrowser;
  }

  // logging - computed: false, optional: false, required: true
  private _logging = new HostLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: HostLogging) {
    this._logging.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
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

  // proxy - computed: false, optional: false, required: true
  private _proxy = new HostProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: HostProxy) {
    this._proxy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // ssl - computed: false, optional: false, required: true
  private _ssl = new HostSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: HostSsl) {
    this._ssl.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }

  // update - computed: false, optional: false, required: true
  private _update = new HostUpdateOutputReference(this, "update");
  public get update() {
    return this._update;
  }
  public putUpdate(value: HostUpdate) {
    this._update.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update.internalValue;
  }

  // url_base - computed: false, optional: false, required: true
  private _urlBase?: string; 
  public get urlBase() {
    return this.getStringAttribute('url_base');
  }
  public set urlBase(value: string) {
    this._urlBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlBaseInput() {
    return this._urlBase;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_url: cdktf.stringToTerraform(this._applicationUrl),
      authentication: hostAuthenticationToTerraform(this._authentication.internalValue),
      backup: hostBackupToTerraform(this._backup.internalValue),
      bind_address: cdktf.stringToTerraform(this._bindAddress),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      launch_browser: cdktf.booleanToTerraform(this._launchBrowser),
      logging: hostLoggingToTerraform(this._logging.internalValue),
      port: cdktf.numberToTerraform(this._port),
      proxy: hostProxyToTerraform(this._proxy.internalValue),
      ssl: hostSslToTerraform(this._ssl.internalValue),
      update: hostUpdateToTerraform(this._update.internalValue),
      url_base: cdktf.stringToTerraform(this._urlBase),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_url: {
        value: cdktf.stringToHclTerraform(this._applicationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: hostAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HostAuthentication",
      },
      backup: {
        value: hostBackupToHclTerraform(this._backup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HostBackup",
      },
      bind_address: {
        value: cdktf.stringToHclTerraform(this._bindAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_browser: {
        value: cdktf.booleanToHclTerraform(this._launchBrowser),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logging: {
        value: hostLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HostLogging",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy: {
        value: hostProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HostProxy",
      },
      ssl: {
        value: hostSslToHclTerraform(this._ssl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HostSsl",
      },
      update: {
        value: hostUpdateToHclTerraform(this._update.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HostUpdate",
      },
      url_base: {
        value: cdktf.stringToHclTerraform(this._urlBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
