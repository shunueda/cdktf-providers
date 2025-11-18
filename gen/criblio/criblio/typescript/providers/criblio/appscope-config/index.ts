// https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppscopeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#config AppscopeConfig#config}
  */
  readonly config: AppscopeConfigConfigA;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#description AppscopeConfig#description}
  */
  readonly description?: string;
  /**
  * The consumer group to which this instance belongs. Defaults to 'Cribl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#group_id AppscopeConfig#group_id}
  */
  readonly groupId: string;
  /**
  * Unique ID for this Appscope config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#id AppscopeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * must be one of ["cribl", "cribl-custom", "custom"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#lib AppscopeConfig#lib}
  */
  readonly lib?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tags AppscopeConfig#tags}
  */
  readonly tags?: string;
}
export interface AppscopeConfigConfigCriblTransportTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cacertpath AppscopeConfig#cacertpath}
  */
  readonly cacertpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#validateserver AppscopeConfig#validateserver}
  */
  readonly validateserver?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigCriblTransportTlsToTerraform(struct?: AppscopeConfigConfigCriblTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacertpath: cdktf.stringToTerraform(struct!.cacertpath),
    enable: cdktf.booleanToTerraform(struct!.enable),
    validateserver: cdktf.booleanToTerraform(struct!.validateserver),
  }
}


export function appscopeConfigConfigCriblTransportTlsToHclTerraform(struct?: AppscopeConfigConfigCriblTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacertpath: {
      value: cdktf.stringToHclTerraform(struct!.cacertpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validateserver: {
      value: cdktf.booleanToHclTerraform(struct!.validateserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCriblTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCriblTransportTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacertpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertpath = this._cacertpath;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._validateserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateserver = this._validateserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCriblTransportTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacertpath = undefined;
      this._enable = undefined;
      this._validateserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacertpath = value.cacertpath;
      this._enable = value.enable;
      this._validateserver = value.validateserver;
    }
  }

  // cacertpath - computed: true, optional: true, required: false
  private _cacertpath?: string; 
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }
  public set cacertpath(value: string) {
    this._cacertpath = value;
  }
  public resetCacertpath() {
    this._cacertpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertpathInput() {
    return this._cacertpath;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // validateserver - computed: true, optional: true, required: false
  private _validateserver?: boolean | cdktf.IResolvable; 
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
  public set validateserver(value: boolean | cdktf.IResolvable) {
    this._validateserver = value;
  }
  public resetValidateserver() {
    this._validateserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateserverInput() {
    return this._validateserver;
  }
}
export interface AppscopeConfigConfigCriblTransport {
  /**
  * must be one of ["line", "full"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#buffer AppscopeConfig#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#host AppscopeConfig#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#path AppscopeConfig#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#port AppscopeConfig#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tls AppscopeConfig#tls}
  */
  readonly tls?: AppscopeConfigConfigCriblTransportTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
}

export function appscopeConfigConfigCriblTransportToTerraform(struct?: AppscopeConfigConfigCriblTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    tls: appscopeConfigConfigCriblTransportTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appscopeConfigConfigCriblTransportToHclTerraform(struct?: AppscopeConfigConfigCriblTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    tls: {
      value: appscopeConfigConfigCriblTransportTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCriblTransportTls",
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

export class AppscopeConfigConfigCriblTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCriblTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCriblTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._tls.internalValue = value.tls;
      this._type = value.type;
    }
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // tls - computed: true, optional: true, required: false
  private _tls = new AppscopeConfigConfigCriblTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppscopeConfigConfigCriblTransportTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
}
export interface AppscopeConfigConfigCribl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#authtoken AppscopeConfig#authtoken}
  */
  readonly authtoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#transport AppscopeConfig#transport}
  */
  readonly transport?: AppscopeConfigConfigCriblTransport;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#use_scope_source_transport AppscopeConfig#use_scope_source_transport}
  */
  readonly useScopeSourceTransport?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigCriblToTerraform(struct?: AppscopeConfigConfigCribl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authtoken: cdktf.stringToTerraform(struct!.authtoken),
    enable: cdktf.booleanToTerraform(struct!.enable),
    transport: appscopeConfigConfigCriblTransportToTerraform(struct!.transport),
    use_scope_source_transport: cdktf.booleanToTerraform(struct!.useScopeSourceTransport),
  }
}


export function appscopeConfigConfigCriblToHclTerraform(struct?: AppscopeConfigConfigCribl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authtoken: {
      value: cdktf.stringToHclTerraform(struct!.authtoken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transport: {
      value: appscopeConfigConfigCriblTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCriblTransport",
    },
    use_scope_source_transport: {
      value: cdktf.booleanToHclTerraform(struct!.useScopeSourceTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCriblOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCribl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authtoken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authtoken = this._authtoken;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    if (this._useScopeSourceTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.useScopeSourceTransport = this._useScopeSourceTransport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCribl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authtoken = undefined;
      this._enable = undefined;
      this._transport.internalValue = undefined;
      this._useScopeSourceTransport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authtoken = value.authtoken;
      this._enable = value.enable;
      this._transport.internalValue = value.transport;
      this._useScopeSourceTransport = value.useScopeSourceTransport;
    }
  }

  // authtoken - computed: true, optional: true, required: false
  private _authtoken?: string; 
  public get authtoken() {
    return this.getStringAttribute('authtoken');
  }
  public set authtoken(value: string) {
    this._authtoken = value;
  }
  public resetAuthtoken() {
    this._authtoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtokenInput() {
    return this._authtoken;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // transport - computed: true, optional: true, required: false
  private _transport = new AppscopeConfigConfigCriblTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: AppscopeConfigConfigCriblTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }

  // use_scope_source_transport - computed: true, optional: true, required: false
  private _useScopeSourceTransport?: boolean | cdktf.IResolvable; 
  public get useScopeSourceTransport() {
    return this.getBooleanAttribute('use_scope_source_transport');
  }
  public set useScopeSourceTransport(value: boolean | cdktf.IResolvable) {
    this._useScopeSourceTransport = value;
  }
  public resetUseScopeSourceTransport() {
    this._useScopeSourceTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useScopeSourceTransportInput() {
    return this._useScopeSourceTransport;
  }
}
export interface AppscopeConfigConfigCustomConfigCriblTransportTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cacertpath AppscopeConfig#cacertpath}
  */
  readonly cacertpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#validateserver AppscopeConfig#validateserver}
  */
  readonly validateserver?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigCustomConfigCriblTransportTlsToTerraform(struct?: AppscopeConfigConfigCustomConfigCriblTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacertpath: cdktf.stringToTerraform(struct!.cacertpath),
    enable: cdktf.booleanToTerraform(struct!.enable),
    validateserver: cdktf.booleanToTerraform(struct!.validateserver),
  }
}


export function appscopeConfigConfigCustomConfigCriblTransportTlsToHclTerraform(struct?: AppscopeConfigConfigCustomConfigCriblTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacertpath: {
      value: cdktf.stringToHclTerraform(struct!.cacertpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validateserver: {
      value: cdktf.booleanToHclTerraform(struct!.validateserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigCriblTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigCriblTransportTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacertpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertpath = this._cacertpath;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._validateserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateserver = this._validateserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigCriblTransportTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacertpath = undefined;
      this._enable = undefined;
      this._validateserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacertpath = value.cacertpath;
      this._enable = value.enable;
      this._validateserver = value.validateserver;
    }
  }

  // cacertpath - computed: true, optional: true, required: false
  private _cacertpath?: string; 
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }
  public set cacertpath(value: string) {
    this._cacertpath = value;
  }
  public resetCacertpath() {
    this._cacertpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertpathInput() {
    return this._cacertpath;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // validateserver - computed: true, optional: true, required: false
  private _validateserver?: boolean | cdktf.IResolvable; 
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
  public set validateserver(value: boolean | cdktf.IResolvable) {
    this._validateserver = value;
  }
  public resetValidateserver() {
    this._validateserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateserverInput() {
    return this._validateserver;
  }
}
export interface AppscopeConfigConfigCustomConfigCriblTransport {
  /**
  * must be one of ["line", "full"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#buffer AppscopeConfig#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#host AppscopeConfig#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#path AppscopeConfig#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#port AppscopeConfig#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tls AppscopeConfig#tls}
  */
  readonly tls?: AppscopeConfigConfigCustomConfigCriblTransportTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
}

export function appscopeConfigConfigCustomConfigCriblTransportToTerraform(struct?: AppscopeConfigConfigCustomConfigCriblTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    tls: appscopeConfigConfigCustomConfigCriblTransportTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appscopeConfigConfigCustomConfigCriblTransportToHclTerraform(struct?: AppscopeConfigConfigCustomConfigCriblTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    tls: {
      value: appscopeConfigConfigCustomConfigCriblTransportTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigCriblTransportTls",
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

export class AppscopeConfigConfigCustomConfigCriblTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigCriblTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigCriblTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._tls.internalValue = value.tls;
      this._type = value.type;
    }
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // tls - computed: true, optional: true, required: false
  private _tls = new AppscopeConfigConfigCustomConfigCriblTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppscopeConfigConfigCustomConfigCriblTransportTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
}
export interface AppscopeConfigConfigCustomConfigCribl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#authtoken AppscopeConfig#authtoken}
  */
  readonly authtoken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#transport AppscopeConfig#transport}
  */
  readonly transport?: AppscopeConfigConfigCustomConfigCriblTransport;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#use_scope_source_transport AppscopeConfig#use_scope_source_transport}
  */
  readonly useScopeSourceTransport?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigCustomConfigCriblToTerraform(struct?: AppscopeConfigConfigCustomConfigCribl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authtoken: cdktf.stringToTerraform(struct!.authtoken),
    enable: cdktf.booleanToTerraform(struct!.enable),
    transport: appscopeConfigConfigCustomConfigCriblTransportToTerraform(struct!.transport),
    use_scope_source_transport: cdktf.booleanToTerraform(struct!.useScopeSourceTransport),
  }
}


export function appscopeConfigConfigCustomConfigCriblToHclTerraform(struct?: AppscopeConfigConfigCustomConfigCribl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authtoken: {
      value: cdktf.stringToHclTerraform(struct!.authtoken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transport: {
      value: appscopeConfigConfigCustomConfigCriblTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigCriblTransport",
    },
    use_scope_source_transport: {
      value: cdktf.booleanToHclTerraform(struct!.useScopeSourceTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigCriblOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigCribl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authtoken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authtoken = this._authtoken;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    if (this._useScopeSourceTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.useScopeSourceTransport = this._useScopeSourceTransport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigCribl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authtoken = undefined;
      this._enable = undefined;
      this._transport.internalValue = undefined;
      this._useScopeSourceTransport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authtoken = value.authtoken;
      this._enable = value.enable;
      this._transport.internalValue = value.transport;
      this._useScopeSourceTransport = value.useScopeSourceTransport;
    }
  }

  // authtoken - computed: true, optional: true, required: false
  private _authtoken?: string; 
  public get authtoken() {
    return this.getStringAttribute('authtoken');
  }
  public set authtoken(value: string) {
    this._authtoken = value;
  }
  public resetAuthtoken() {
    this._authtoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtokenInput() {
    return this._authtoken;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // transport - computed: true, optional: true, required: false
  private _transport = new AppscopeConfigConfigCustomConfigCriblTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: AppscopeConfigConfigCustomConfigCriblTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }

  // use_scope_source_transport - computed: true, optional: true, required: false
  private _useScopeSourceTransport?: boolean | cdktf.IResolvable; 
  public get useScopeSourceTransport() {
    return this.getBooleanAttribute('use_scope_source_transport');
  }
  public set useScopeSourceTransport(value: boolean | cdktf.IResolvable) {
    this._useScopeSourceTransport = value;
  }
  public resetUseScopeSourceTransport() {
    this._useScopeSourceTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useScopeSourceTransportInput() {
    return this._useScopeSourceTransport;
  }
}
export interface AppscopeConfigConfigCustomConfigEventFormat {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enhancefs AppscopeConfig#enhancefs}
  */
  readonly enhancefs?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#maxeventpersec AppscopeConfig#maxeventpersec}
  */
  readonly maxeventpersec?: number;
}

export function appscopeConfigConfigCustomConfigEventFormatToTerraform(struct?: AppscopeConfigConfigCustomConfigEventFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhancefs: cdktf.booleanToTerraform(struct!.enhancefs),
    maxeventpersec: cdktf.numberToTerraform(struct!.maxeventpersec),
  }
}


export function appscopeConfigConfigCustomConfigEventFormatToHclTerraform(struct?: AppscopeConfigConfigCustomConfigEventFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhancefs: {
      value: cdktf.booleanToHclTerraform(struct!.enhancefs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maxeventpersec: {
      value: cdktf.numberToHclTerraform(struct!.maxeventpersec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigEventFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigEventFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancefs = this._enhancefs;
    }
    if (this._maxeventpersec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxeventpersec = this._maxeventpersec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigEventFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enhancefs = undefined;
      this._maxeventpersec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enhancefs = value.enhancefs;
      this._maxeventpersec = value.maxeventpersec;
    }
  }

  // enhancefs - computed: true, optional: true, required: false
  private _enhancefs?: boolean | cdktf.IResolvable; 
  public get enhancefs() {
    return this.getBooleanAttribute('enhancefs');
  }
  public set enhancefs(value: boolean | cdktf.IResolvable) {
    this._enhancefs = value;
  }
  public resetEnhancefs() {
    this._enhancefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancefsInput() {
    return this._enhancefs;
  }

  // maxeventpersec - computed: true, optional: true, required: false
  private _maxeventpersec?: number; 
  public get maxeventpersec() {
    return this.getNumberAttribute('maxeventpersec');
  }
  public set maxeventpersec(value: number) {
    this._maxeventpersec = value;
  }
  public resetMaxeventpersec() {
    this._maxeventpersec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxeventpersecInput() {
    return this._maxeventpersec;
  }
}
export interface AppscopeConfigConfigCustomConfigEventTransportTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cacertpath AppscopeConfig#cacertpath}
  */
  readonly cacertpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#validateserver AppscopeConfig#validateserver}
  */
  readonly validateserver?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigCustomConfigEventTransportTlsToTerraform(struct?: AppscopeConfigConfigCustomConfigEventTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacertpath: cdktf.stringToTerraform(struct!.cacertpath),
    enable: cdktf.booleanToTerraform(struct!.enable),
    validateserver: cdktf.booleanToTerraform(struct!.validateserver),
  }
}


export function appscopeConfigConfigCustomConfigEventTransportTlsToHclTerraform(struct?: AppscopeConfigConfigCustomConfigEventTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacertpath: {
      value: cdktf.stringToHclTerraform(struct!.cacertpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validateserver: {
      value: cdktf.booleanToHclTerraform(struct!.validateserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigEventTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigEventTransportTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacertpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertpath = this._cacertpath;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._validateserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateserver = this._validateserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigEventTransportTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacertpath = undefined;
      this._enable = undefined;
      this._validateserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacertpath = value.cacertpath;
      this._enable = value.enable;
      this._validateserver = value.validateserver;
    }
  }

  // cacertpath - computed: true, optional: true, required: false
  private _cacertpath?: string; 
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }
  public set cacertpath(value: string) {
    this._cacertpath = value;
  }
  public resetCacertpath() {
    this._cacertpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertpathInput() {
    return this._cacertpath;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // validateserver - computed: true, optional: true, required: false
  private _validateserver?: boolean | cdktf.IResolvable; 
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
  public set validateserver(value: boolean | cdktf.IResolvable) {
    this._validateserver = value;
  }
  public resetValidateserver() {
    this._validateserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateserverInput() {
    return this._validateserver;
  }
}
export interface AppscopeConfigConfigCustomConfigEventTransport {
  /**
  * must be one of ["line", "full"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#buffer AppscopeConfig#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#host AppscopeConfig#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#path AppscopeConfig#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#port AppscopeConfig#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tls AppscopeConfig#tls}
  */
  readonly tls?: AppscopeConfigConfigCustomConfigEventTransportTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
}

export function appscopeConfigConfigCustomConfigEventTransportToTerraform(struct?: AppscopeConfigConfigCustomConfigEventTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    tls: appscopeConfigConfigCustomConfigEventTransportTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appscopeConfigConfigCustomConfigEventTransportToHclTerraform(struct?: AppscopeConfigConfigCustomConfigEventTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    tls: {
      value: appscopeConfigConfigCustomConfigEventTransportTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigEventTransportTls",
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

export class AppscopeConfigConfigCustomConfigEventTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigEventTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigEventTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._tls.internalValue = value.tls;
      this._type = value.type;
    }
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // tls - computed: true, optional: true, required: false
  private _tls = new AppscopeConfigConfigCustomConfigEventTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppscopeConfigConfigCustomConfigEventTransportTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
}
export interface AppscopeConfigConfigCustomConfigEventWatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#allowbinary AppscopeConfig#allowbinary}
  */
  readonly allowbinary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enabled AppscopeConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#field AppscopeConfig#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#headers AppscopeConfig#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#name AppscopeConfig#name}
  */
  readonly name?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#value AppscopeConfig#value}
  */
  readonly value?: string;
}

export function appscopeConfigConfigCustomConfigEventWatchToTerraform(struct?: AppscopeConfigConfigCustomConfigEventWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowbinary: cdktf.booleanToTerraform(struct!.allowbinary),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    field: cdktf.stringToTerraform(struct!.field),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appscopeConfigConfigCustomConfigEventWatchToHclTerraform(struct?: AppscopeConfigConfigCustomConfigEventWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowbinary: {
      value: cdktf.booleanToHclTerraform(struct!.allowbinary),
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
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class AppscopeConfigConfigCustomConfigEventWatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppscopeConfigConfigCustomConfigEventWatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowbinary !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowbinary = this._allowbinary;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: AppscopeConfigConfigCustomConfigEventWatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowbinary = undefined;
      this._enabled = undefined;
      this._field = undefined;
      this._headers = undefined;
      this._name = undefined;
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
      this._allowbinary = value.allowbinary;
      this._enabled = value.enabled;
      this._field = value.field;
      this._headers = value.headers;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // allowbinary - computed: true, optional: true, required: false
  private _allowbinary?: boolean | cdktf.IResolvable; 
  public get allowbinary() {
    return this.getBooleanAttribute('allowbinary');
  }
  public set allowbinary(value: boolean | cdktf.IResolvable) {
    this._allowbinary = value;
  }
  public resetAllowbinary() {
    this._allowbinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowbinaryInput() {
    return this._allowbinary;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppscopeConfigConfigCustomConfigEventWatchList extends cdktf.ComplexList {
  public internalValue? : AppscopeConfigConfigCustomConfigEventWatch[] | cdktf.IResolvable

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
  public get(index: number): AppscopeConfigConfigCustomConfigEventWatchOutputReference {
    return new AppscopeConfigConfigCustomConfigEventWatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppscopeConfigConfigCustomConfigEvent {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#format AppscopeConfig#format}
  */
  readonly format?: AppscopeConfigConfigCustomConfigEventFormat;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#transport AppscopeConfig#transport}
  */
  readonly transport?: AppscopeConfigConfigCustomConfigEventTransport;
  /**
  * Not Null; must be "ndjson"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#watch AppscopeConfig#watch}
  */
  readonly watch?: AppscopeConfigConfigCustomConfigEventWatch[] | cdktf.IResolvable;
}

export function appscopeConfigConfigCustomConfigEventToTerraform(struct?: AppscopeConfigConfigCustomConfigEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    format: appscopeConfigConfigCustomConfigEventFormatToTerraform(struct!.format),
    transport: appscopeConfigConfigCustomConfigEventTransportToTerraform(struct!.transport),
    type: cdktf.stringToTerraform(struct!.type),
    watch: cdktf.listMapper(appscopeConfigConfigCustomConfigEventWatchToTerraform, false)(struct!.watch),
  }
}


export function appscopeConfigConfigCustomConfigEventToHclTerraform(struct?: AppscopeConfigConfigCustomConfigEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: appscopeConfigConfigCustomConfigEventFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigEventFormat",
    },
    transport: {
      value: appscopeConfigConfigCustomConfigEventTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigEventTransport",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watch: {
      value: cdktf.listMapperHcl(appscopeConfigConfigCustomConfigEventWatchToHclTerraform, false)(struct!.watch),
      isBlock: true,
      type: "list",
      storageClassType: "AppscopeConfigConfigCustomConfigEventWatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._watch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watch = this._watch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._format.internalValue = undefined;
      this._transport.internalValue = undefined;
      this._type = undefined;
      this._watch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._format.internalValue = value.format;
      this._transport.internalValue = value.transport;
      this._type = value.type;
      this._watch.internalValue = value.watch;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // format - computed: true, optional: true, required: false
  private _format = new AppscopeConfigConfigCustomConfigEventFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: AppscopeConfigConfigCustomConfigEventFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // transport - computed: true, optional: true, required: false
  private _transport = new AppscopeConfigConfigCustomConfigEventTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: AppscopeConfigConfigCustomConfigEventTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
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

  // watch - computed: true, optional: true, required: false
  private _watch = new AppscopeConfigConfigCustomConfigEventWatchList(this, "watch", false);
  public get watch() {
    return this._watch;
  }
  public putWatch(value: AppscopeConfigConfigCustomConfigEventWatch[] | cdktf.IResolvable) {
    this._watch.internalValue = value;
  }
  public resetWatch() {
    this._watch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchInput() {
    return this._watch.internalValue;
  }
}
export interface AppscopeConfigConfigCustomConfigLibscopeLogTransportTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cacertpath AppscopeConfig#cacertpath}
  */
  readonly cacertpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#validateserver AppscopeConfig#validateserver}
  */
  readonly validateserver?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigCustomConfigLibscopeLogTransportTlsToTerraform(struct?: AppscopeConfigConfigCustomConfigLibscopeLogTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacertpath: cdktf.stringToTerraform(struct!.cacertpath),
    enable: cdktf.booleanToTerraform(struct!.enable),
    validateserver: cdktf.booleanToTerraform(struct!.validateserver),
  }
}


export function appscopeConfigConfigCustomConfigLibscopeLogTransportTlsToHclTerraform(struct?: AppscopeConfigConfigCustomConfigLibscopeLogTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacertpath: {
      value: cdktf.stringToHclTerraform(struct!.cacertpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validateserver: {
      value: cdktf.booleanToHclTerraform(struct!.validateserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigLibscopeLogTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigLibscopeLogTransportTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacertpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertpath = this._cacertpath;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._validateserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateserver = this._validateserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigLibscopeLogTransportTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacertpath = undefined;
      this._enable = undefined;
      this._validateserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacertpath = value.cacertpath;
      this._enable = value.enable;
      this._validateserver = value.validateserver;
    }
  }

  // cacertpath - computed: true, optional: true, required: false
  private _cacertpath?: string; 
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }
  public set cacertpath(value: string) {
    this._cacertpath = value;
  }
  public resetCacertpath() {
    this._cacertpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertpathInput() {
    return this._cacertpath;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // validateserver - computed: true, optional: true, required: false
  private _validateserver?: boolean | cdktf.IResolvable; 
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
  public set validateserver(value: boolean | cdktf.IResolvable) {
    this._validateserver = value;
  }
  public resetValidateserver() {
    this._validateserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateserverInput() {
    return this._validateserver;
  }
}
export interface AppscopeConfigConfigCustomConfigLibscopeLogTransport {
  /**
  * must be one of ["line", "full"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#buffer AppscopeConfig#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#host AppscopeConfig#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#path AppscopeConfig#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#port AppscopeConfig#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tls AppscopeConfig#tls}
  */
  readonly tls?: AppscopeConfigConfigCustomConfigLibscopeLogTransportTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
}

export function appscopeConfigConfigCustomConfigLibscopeLogTransportToTerraform(struct?: AppscopeConfigConfigCustomConfigLibscopeLogTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    tls: appscopeConfigConfigCustomConfigLibscopeLogTransportTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appscopeConfigConfigCustomConfigLibscopeLogTransportToHclTerraform(struct?: AppscopeConfigConfigCustomConfigLibscopeLogTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    tls: {
      value: appscopeConfigConfigCustomConfigLibscopeLogTransportTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigLibscopeLogTransportTls",
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

export class AppscopeConfigConfigCustomConfigLibscopeLogTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigLibscopeLogTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigLibscopeLogTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._tls.internalValue = value.tls;
      this._type = value.type;
    }
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // tls - computed: true, optional: true, required: false
  private _tls = new AppscopeConfigConfigCustomConfigLibscopeLogTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppscopeConfigConfigCustomConfigLibscopeLogTransportTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
}
export interface AppscopeConfigConfigCustomConfigLibscopeLog {
  /**
  * must be one of ["error", "debug", "info", "warning", "none"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#level AppscopeConfig#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#transport AppscopeConfig#transport}
  */
  readonly transport?: AppscopeConfigConfigCustomConfigLibscopeLogTransport;
}

export function appscopeConfigConfigCustomConfigLibscopeLogToTerraform(struct?: AppscopeConfigConfigCustomConfigLibscopeLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    transport: appscopeConfigConfigCustomConfigLibscopeLogTransportToTerraform(struct!.transport),
  }
}


export function appscopeConfigConfigCustomConfigLibscopeLogToHclTerraform(struct?: AppscopeConfigConfigCustomConfigLibscopeLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport: {
      value: appscopeConfigConfigCustomConfigLibscopeLogTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigLibscopeLogTransport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigLibscopeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigLibscopeLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigLibscopeLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._transport.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._transport.internalValue = value.transport;
    }
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // transport - computed: true, optional: true, required: false
  private _transport = new AppscopeConfigConfigCustomConfigLibscopeLogTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: AppscopeConfigConfigCustomConfigLibscopeLogTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }
}
export interface AppscopeConfigConfigCustomConfigLibscope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#commanddir AppscopeConfig#commanddir}
  */
  readonly commanddir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#configevent AppscopeConfig#configevent}
  */
  readonly configevent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#log AppscopeConfig#log}
  */
  readonly log?: AppscopeConfigConfigCustomConfigLibscopeLog;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#summaryperiod AppscopeConfig#summaryperiod}
  */
  readonly summaryperiod?: number;
}

export function appscopeConfigConfigCustomConfigLibscopeToTerraform(struct?: AppscopeConfigConfigCustomConfigLibscope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commanddir: cdktf.stringToTerraform(struct!.commanddir),
    configevent: cdktf.booleanToTerraform(struct!.configevent),
    log: appscopeConfigConfigCustomConfigLibscopeLogToTerraform(struct!.log),
    summaryperiod: cdktf.numberToTerraform(struct!.summaryperiod),
  }
}


export function appscopeConfigConfigCustomConfigLibscopeToHclTerraform(struct?: AppscopeConfigConfigCustomConfigLibscope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commanddir: {
      value: cdktf.stringToHclTerraform(struct!.commanddir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configevent: {
      value: cdktf.booleanToHclTerraform(struct!.configevent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log: {
      value: appscopeConfigConfigCustomConfigLibscopeLogToHclTerraform(struct!.log),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigLibscopeLog",
    },
    summaryperiod: {
      value: cdktf.numberToHclTerraform(struct!.summaryperiod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigLibscopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigLibscope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commanddir !== undefined) {
      hasAnyValues = true;
      internalValueResult.commanddir = this._commanddir;
    }
    if (this._configevent !== undefined) {
      hasAnyValues = true;
      internalValueResult.configevent = this._configevent;
    }
    if (this._log?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log?.internalValue;
    }
    if (this._summaryperiod !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryperiod = this._summaryperiod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigLibscope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commanddir = undefined;
      this._configevent = undefined;
      this._log.internalValue = undefined;
      this._summaryperiod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commanddir = value.commanddir;
      this._configevent = value.configevent;
      this._log.internalValue = value.log;
      this._summaryperiod = value.summaryperiod;
    }
  }

  // commanddir - computed: true, optional: true, required: false
  private _commanddir?: string; 
  public get commanddir() {
    return this.getStringAttribute('commanddir');
  }
  public set commanddir(value: string) {
    this._commanddir = value;
  }
  public resetCommanddir() {
    this._commanddir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commanddirInput() {
    return this._commanddir;
  }

  // configevent - computed: true, optional: true, required: false
  private _configevent?: boolean | cdktf.IResolvable; 
  public get configevent() {
    return this.getBooleanAttribute('configevent');
  }
  public set configevent(value: boolean | cdktf.IResolvable) {
    this._configevent = value;
  }
  public resetConfigevent() {
    this._configevent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configeventInput() {
    return this._configevent;
  }

  // log - computed: true, optional: true, required: false
  private _log = new AppscopeConfigConfigCustomConfigLibscopeLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: AppscopeConfigConfigCustomConfigLibscopeLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // summaryperiod - computed: true, optional: true, required: false
  private _summaryperiod?: number; 
  public get summaryperiod() {
    return this.getNumberAttribute('summaryperiod');
  }
  public set summaryperiod(value: number) {
    this._summaryperiod = value;
  }
  public resetSummaryperiod() {
    this._summaryperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryperiodInput() {
    return this._summaryperiod;
  }
}
export interface AppscopeConfigConfigCustomConfigMetricFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#statsdmaxlen AppscopeConfig#statsdmaxlen}
  */
  readonly statsdmaxlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#statsdprefix AppscopeConfig#statsdprefix}
  */
  readonly statsdprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#verbosity AppscopeConfig#verbosity}
  */
  readonly verbosity?: number;
}

export function appscopeConfigConfigCustomConfigMetricFormatToTerraform(struct?: AppscopeConfigConfigCustomConfigMetricFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statsdmaxlen: cdktf.numberToTerraform(struct!.statsdmaxlen),
    statsdprefix: cdktf.stringToTerraform(struct!.statsdprefix),
    type: cdktf.stringToTerraform(struct!.type),
    verbosity: cdktf.numberToTerraform(struct!.verbosity),
  }
}


export function appscopeConfigConfigCustomConfigMetricFormatToHclTerraform(struct?: AppscopeConfigConfigCustomConfigMetricFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    statsdmaxlen: {
      value: cdktf.numberToHclTerraform(struct!.statsdmaxlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statsdprefix: {
      value: cdktf.stringToHclTerraform(struct!.statsdprefix),
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
    verbosity: {
      value: cdktf.numberToHclTerraform(struct!.verbosity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigMetricFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigMetricFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statsdmaxlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsdmaxlen = this._statsdmaxlen;
    }
    if (this._statsdprefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsdprefix = this._statsdprefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._verbosity !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbosity = this._verbosity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigMetricFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statsdmaxlen = undefined;
      this._statsdprefix = undefined;
      this._type = undefined;
      this._verbosity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statsdmaxlen = value.statsdmaxlen;
      this._statsdprefix = value.statsdprefix;
      this._type = value.type;
      this._verbosity = value.verbosity;
    }
  }

  // statsdmaxlen - computed: true, optional: true, required: false
  private _statsdmaxlen?: number; 
  public get statsdmaxlen() {
    return this.getNumberAttribute('statsdmaxlen');
  }
  public set statsdmaxlen(value: number) {
    this._statsdmaxlen = value;
  }
  public resetStatsdmaxlen() {
    this._statsdmaxlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdmaxlenInput() {
    return this._statsdmaxlen;
  }

  // statsdprefix - computed: true, optional: true, required: false
  private _statsdprefix?: string; 
  public get statsdprefix() {
    return this.getStringAttribute('statsdprefix');
  }
  public set statsdprefix(value: string) {
    this._statsdprefix = value;
  }
  public resetStatsdprefix() {
    this._statsdprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdprefixInput() {
    return this._statsdprefix;
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

  // verbosity - computed: true, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }
}
export interface AppscopeConfigConfigCustomConfigMetricTransportTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cacertpath AppscopeConfig#cacertpath}
  */
  readonly cacertpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#validateserver AppscopeConfig#validateserver}
  */
  readonly validateserver?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigCustomConfigMetricTransportTlsToTerraform(struct?: AppscopeConfigConfigCustomConfigMetricTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacertpath: cdktf.stringToTerraform(struct!.cacertpath),
    enable: cdktf.booleanToTerraform(struct!.enable),
    validateserver: cdktf.booleanToTerraform(struct!.validateserver),
  }
}


export function appscopeConfigConfigCustomConfigMetricTransportTlsToHclTerraform(struct?: AppscopeConfigConfigCustomConfigMetricTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacertpath: {
      value: cdktf.stringToHclTerraform(struct!.cacertpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validateserver: {
      value: cdktf.booleanToHclTerraform(struct!.validateserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigMetricTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigMetricTransportTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacertpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertpath = this._cacertpath;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._validateserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateserver = this._validateserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigMetricTransportTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacertpath = undefined;
      this._enable = undefined;
      this._validateserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacertpath = value.cacertpath;
      this._enable = value.enable;
      this._validateserver = value.validateserver;
    }
  }

  // cacertpath - computed: true, optional: true, required: false
  private _cacertpath?: string; 
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }
  public set cacertpath(value: string) {
    this._cacertpath = value;
  }
  public resetCacertpath() {
    this._cacertpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertpathInput() {
    return this._cacertpath;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // validateserver - computed: true, optional: true, required: false
  private _validateserver?: boolean | cdktf.IResolvable; 
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
  public set validateserver(value: boolean | cdktf.IResolvable) {
    this._validateserver = value;
  }
  public resetValidateserver() {
    this._validateserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateserverInput() {
    return this._validateserver;
  }
}
export interface AppscopeConfigConfigCustomConfigMetricTransport {
  /**
  * must be one of ["line", "full"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#buffer AppscopeConfig#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#host AppscopeConfig#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#path AppscopeConfig#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#port AppscopeConfig#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tls AppscopeConfig#tls}
  */
  readonly tls?: AppscopeConfigConfigCustomConfigMetricTransportTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
}

export function appscopeConfigConfigCustomConfigMetricTransportToTerraform(struct?: AppscopeConfigConfigCustomConfigMetricTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    tls: appscopeConfigConfigCustomConfigMetricTransportTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appscopeConfigConfigCustomConfigMetricTransportToHclTerraform(struct?: AppscopeConfigConfigCustomConfigMetricTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    tls: {
      value: appscopeConfigConfigCustomConfigMetricTransportTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigMetricTransportTls",
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

export class AppscopeConfigConfigCustomConfigMetricTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigMetricTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigMetricTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._tls.internalValue = value.tls;
      this._type = value.type;
    }
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // tls - computed: true, optional: true, required: false
  private _tls = new AppscopeConfigConfigCustomConfigMetricTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppscopeConfigConfigCustomConfigMetricTransportTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
}
export interface AppscopeConfigConfigCustomConfigMetricWatch {
}

export function appscopeConfigConfigCustomConfigMetricWatchToTerraform(struct?: AppscopeConfigConfigCustomConfigMetricWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appscopeConfigConfigCustomConfigMetricWatchToHclTerraform(struct?: AppscopeConfigConfigCustomConfigMetricWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppscopeConfigConfigCustomConfigMetricWatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppscopeConfigConfigCustomConfigMetricWatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigMetricWatch | cdktf.IResolvable | undefined) {
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

export class AppscopeConfigConfigCustomConfigMetricWatchList extends cdktf.ComplexList {
  public internalValue? : AppscopeConfigConfigCustomConfigMetricWatch[] | cdktf.IResolvable

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
  public get(index: number): AppscopeConfigConfigCustomConfigMetricWatchOutputReference {
    return new AppscopeConfigConfigCustomConfigMetricWatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppscopeConfigConfigCustomConfigMetric {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#format AppscopeConfig#format}
  */
  readonly format?: AppscopeConfigConfigCustomConfigMetricFormat;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#transport AppscopeConfig#transport}
  */
  readonly transport?: AppscopeConfigConfigCustomConfigMetricTransport;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#watch AppscopeConfig#watch}
  */
  readonly watch?: AppscopeConfigConfigCustomConfigMetricWatch[] | cdktf.IResolvable;
}

export function appscopeConfigConfigCustomConfigMetricToTerraform(struct?: AppscopeConfigConfigCustomConfigMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    format: appscopeConfigConfigCustomConfigMetricFormatToTerraform(struct!.format),
    transport: appscopeConfigConfigCustomConfigMetricTransportToTerraform(struct!.transport),
    watch: cdktf.listMapper(appscopeConfigConfigCustomConfigMetricWatchToTerraform, false)(struct!.watch),
  }
}


export function appscopeConfigConfigCustomConfigMetricToHclTerraform(struct?: AppscopeConfigConfigCustomConfigMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: appscopeConfigConfigCustomConfigMetricFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigMetricFormat",
    },
    transport: {
      value: appscopeConfigConfigCustomConfigMetricTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigMetricTransport",
    },
    watch: {
      value: cdktf.listMapperHcl(appscopeConfigConfigCustomConfigMetricWatchToHclTerraform, false)(struct!.watch),
      isBlock: true,
      type: "list",
      storageClassType: "AppscopeConfigConfigCustomConfigMetricWatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    if (this._watch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watch = this._watch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._format.internalValue = undefined;
      this._transport.internalValue = undefined;
      this._watch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._format.internalValue = value.format;
      this._transport.internalValue = value.transport;
      this._watch.internalValue = value.watch;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // format - computed: true, optional: true, required: false
  private _format = new AppscopeConfigConfigCustomConfigMetricFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: AppscopeConfigConfigCustomConfigMetricFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // transport - computed: true, optional: true, required: false
  private _transport = new AppscopeConfigConfigCustomConfigMetricTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: AppscopeConfigConfigCustomConfigMetricTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }

  // watch - computed: true, optional: true, required: false
  private _watch = new AppscopeConfigConfigCustomConfigMetricWatchList(this, "watch", false);
  public get watch() {
    return this._watch;
  }
  public putWatch(value: AppscopeConfigConfigCustomConfigMetricWatch[] | cdktf.IResolvable) {
    this._watch.internalValue = value;
  }
  public resetWatch() {
    this._watch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchInput() {
    return this._watch.internalValue;
  }
}
export interface AppscopeConfigConfigCustomConfigPayload {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#dir AppscopeConfig#dir}
  */
  readonly dir?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigCustomConfigPayloadToTerraform(struct?: AppscopeConfigConfigCustomConfigPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function appscopeConfigConfigCustomConfigPayloadToHclTerraform(struct?: AppscopeConfigConfigCustomConfigPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfigPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dir = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dir = value.dir;
      this._enable = value.enable;
    }
  }

  // dir - computed: true, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface AppscopeConfigConfigCustomConfigProtocol {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#binary AppscopeConfig#binary}
  */
  readonly binary?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#detect AppscopeConfig#detect}
  */
  readonly detect?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#len AppscopeConfig#len}
  */
  readonly len?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#name AppscopeConfig#name}
  */
  readonly name?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#payload AppscopeConfig#payload}
  */
  readonly payload?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#regex AppscopeConfig#regex}
  */
  readonly regex?: string;
}

export function appscopeConfigConfigCustomConfigProtocolToTerraform(struct?: AppscopeConfigConfigCustomConfigProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary: cdktf.booleanToTerraform(struct!.binary),
    detect: cdktf.booleanToTerraform(struct!.detect),
    len: cdktf.numberToTerraform(struct!.len),
    name: cdktf.stringToTerraform(struct!.name),
    payload: cdktf.booleanToTerraform(struct!.payload),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function appscopeConfigConfigCustomConfigProtocolToHclTerraform(struct?: AppscopeConfigConfigCustomConfigProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary: {
      value: cdktf.booleanToHclTerraform(struct!.binary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detect: {
      value: cdktf.booleanToHclTerraform(struct!.detect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    len: {
      value: cdktf.numberToHclTerraform(struct!.len),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.booleanToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppscopeConfigConfigCustomConfigProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binary !== undefined) {
      hasAnyValues = true;
      internalValueResult.binary = this._binary;
    }
    if (this._detect !== undefined) {
      hasAnyValues = true;
      internalValueResult.detect = this._detect;
    }
    if (this._len !== undefined) {
      hasAnyValues = true;
      internalValueResult.len = this._len;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binary = undefined;
      this._detect = undefined;
      this._len = undefined;
      this._name = undefined;
      this._payload = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binary = value.binary;
      this._detect = value.detect;
      this._len = value.len;
      this._name = value.name;
      this._payload = value.payload;
      this._regex = value.regex;
    }
  }

  // binary - computed: true, optional: true, required: false
  private _binary?: boolean | cdktf.IResolvable; 
  public get binary() {
    return this.getBooleanAttribute('binary');
  }
  public set binary(value: boolean | cdktf.IResolvable) {
    this._binary = value;
  }
  public resetBinary() {
    this._binary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryInput() {
    return this._binary;
  }

  // detect - computed: true, optional: true, required: false
  private _detect?: boolean | cdktf.IResolvable; 
  public get detect() {
    return this.getBooleanAttribute('detect');
  }
  public set detect(value: boolean | cdktf.IResolvable) {
    this._detect = value;
  }
  public resetDetect() {
    this._detect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectInput() {
    return this._detect;
  }

  // len - computed: true, optional: true, required: false
  private _len?: number; 
  public get len() {
    return this.getNumberAttribute('len');
  }
  public set len(value: number) {
    this._len = value;
  }
  public resetLen() {
    this._len = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lenInput() {
    return this._len;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // payload - computed: true, optional: true, required: false
  private _payload?: boolean | cdktf.IResolvable; 
  public get payload() {
    return this.getBooleanAttribute('payload');
  }
  public set payload(value: boolean | cdktf.IResolvable) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class AppscopeConfigConfigCustomConfigProtocolList extends cdktf.ComplexList {
  public internalValue? : AppscopeConfigConfigCustomConfigProtocol[] | cdktf.IResolvable

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
  public get(index: number): AppscopeConfigConfigCustomConfigProtocolOutputReference {
    return new AppscopeConfigConfigCustomConfigProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppscopeConfigConfigCustomConfigTags {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#key AppscopeConfig#key}
  */
  readonly key?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#value AppscopeConfig#value}
  */
  readonly value?: string;
}

export function appscopeConfigConfigCustomConfigTagsToTerraform(struct?: AppscopeConfigConfigCustomConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appscopeConfigConfigCustomConfigTagsToHclTerraform(struct?: AppscopeConfigConfigCustomConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AppscopeConfigConfigCustomConfigTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppscopeConfigConfigCustomConfigTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfigTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppscopeConfigConfigCustomConfigTagsList extends cdktf.ComplexList {
  public internalValue? : AppscopeConfigConfigCustomConfigTags[] | cdktf.IResolvable

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
  public get(index: number): AppscopeConfigConfigCustomConfigTagsOutputReference {
    return new AppscopeConfigConfigCustomConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppscopeConfigConfigCustomConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cribl AppscopeConfig#cribl}
  */
  readonly cribl?: AppscopeConfigConfigCustomConfigCribl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#event AppscopeConfig#event}
  */
  readonly event?: AppscopeConfigConfigCustomConfigEvent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#libscope AppscopeConfig#libscope}
  */
  readonly libscope?: AppscopeConfigConfigCustomConfigLibscope;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#metric AppscopeConfig#metric}
  */
  readonly metric?: AppscopeConfigConfigCustomConfigMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#payload AppscopeConfig#payload}
  */
  readonly payload?: AppscopeConfigConfigCustomConfigPayload;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#protocol AppscopeConfig#protocol}
  */
  readonly protocol?: AppscopeConfigConfigCustomConfigProtocol[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tags AppscopeConfig#tags}
  */
  readonly tags?: AppscopeConfigConfigCustomConfigTags[] | cdktf.IResolvable;
}

export function appscopeConfigConfigCustomConfigToTerraform(struct?: AppscopeConfigConfigCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cribl: appscopeConfigConfigCustomConfigCriblToTerraform(struct!.cribl),
    event: appscopeConfigConfigCustomConfigEventToTerraform(struct!.event),
    libscope: appscopeConfigConfigCustomConfigLibscopeToTerraform(struct!.libscope),
    metric: appscopeConfigConfigCustomConfigMetricToTerraform(struct!.metric),
    payload: appscopeConfigConfigCustomConfigPayloadToTerraform(struct!.payload),
    protocol: cdktf.listMapper(appscopeConfigConfigCustomConfigProtocolToTerraform, false)(struct!.protocol),
    tags: cdktf.listMapper(appscopeConfigConfigCustomConfigTagsToTerraform, false)(struct!.tags),
  }
}


export function appscopeConfigConfigCustomConfigToHclTerraform(struct?: AppscopeConfigConfigCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cribl: {
      value: appscopeConfigConfigCustomConfigCriblToHclTerraform(struct!.cribl),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigCribl",
    },
    event: {
      value: appscopeConfigConfigCustomConfigEventToHclTerraform(struct!.event),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigEvent",
    },
    libscope: {
      value: appscopeConfigConfigCustomConfigLibscopeToHclTerraform(struct!.libscope),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigLibscope",
    },
    metric: {
      value: appscopeConfigConfigCustomConfigMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigMetric",
    },
    payload: {
      value: appscopeConfigConfigCustomConfigPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfigPayload",
    },
    protocol: {
      value: cdktf.listMapperHcl(appscopeConfigConfigCustomConfigProtocolToHclTerraform, false)(struct!.protocol),
      isBlock: true,
      type: "list",
      storageClassType: "AppscopeConfigConfigCustomConfigProtocolList",
    },
    tags: {
      value: cdktf.listMapperHcl(appscopeConfigConfigCustomConfigTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "AppscopeConfigConfigCustomConfigTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigCustomConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cribl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cribl = this._cribl?.internalValue;
    }
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    if (this._libscope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.libscope = this._libscope?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustomConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cribl.internalValue = undefined;
      this._event.internalValue = undefined;
      this._libscope.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._payload.internalValue = undefined;
      this._protocol.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cribl.internalValue = value.cribl;
      this._event.internalValue = value.event;
      this._libscope.internalValue = value.libscope;
      this._metric.internalValue = value.metric;
      this._payload.internalValue = value.payload;
      this._protocol.internalValue = value.protocol;
      this._tags.internalValue = value.tags;
    }
  }

  // cribl - computed: true, optional: true, required: false
  private _cribl = new AppscopeConfigConfigCustomConfigCriblOutputReference(this, "cribl");
  public get cribl() {
    return this._cribl;
  }
  public putCribl(value: AppscopeConfigConfigCustomConfigCribl) {
    this._cribl.internalValue = value;
  }
  public resetCribl() {
    this._cribl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criblInput() {
    return this._cribl.internalValue;
  }

  // event - computed: true, optional: true, required: false
  private _event = new AppscopeConfigConfigCustomConfigEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: AppscopeConfigConfigCustomConfigEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // libscope - computed: true, optional: true, required: false
  private _libscope = new AppscopeConfigConfigCustomConfigLibscopeOutputReference(this, "libscope");
  public get libscope() {
    return this._libscope;
  }
  public putLibscope(value: AppscopeConfigConfigCustomConfigLibscope) {
    this._libscope.internalValue = value;
  }
  public resetLibscope() {
    this._libscope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libscopeInput() {
    return this._libscope.internalValue;
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new AppscopeConfigConfigCustomConfigMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AppscopeConfigConfigCustomConfigMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new AppscopeConfigConfigCustomConfigPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: AppscopeConfigConfigCustomConfigPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol = new AppscopeConfigConfigCustomConfigProtocolList(this, "protocol", false);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: AppscopeConfigConfigCustomConfigProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AppscopeConfigConfigCustomConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppscopeConfigConfigCustomConfigTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}
export interface AppscopeConfigConfigCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#ancestor AppscopeConfig#ancestor}
  */
  readonly ancestor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#arg AppscopeConfig#arg}
  */
  readonly arg?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#config AppscopeConfig#config}
  */
  readonly config?: AppscopeConfigConfigCustomConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#env AppscopeConfig#env}
  */
  readonly env?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#hostname AppscopeConfig#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#procname AppscopeConfig#procname}
  */
  readonly procname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#username AppscopeConfig#username}
  */
  readonly username?: string;
}

export function appscopeConfigConfigCustomToTerraform(struct?: AppscopeConfigConfigCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ancestor: cdktf.stringToTerraform(struct!.ancestor),
    arg: cdktf.stringToTerraform(struct!.arg),
    config: appscopeConfigConfigCustomConfigToTerraform(struct!.config),
    env: cdktf.stringToTerraform(struct!.env),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    procname: cdktf.stringToTerraform(struct!.procname),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function appscopeConfigConfigCustomToHclTerraform(struct?: AppscopeConfigConfigCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ancestor: {
      value: cdktf.stringToHclTerraform(struct!.ancestor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg: {
      value: cdktf.stringToHclTerraform(struct!.arg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: appscopeConfigConfigCustomConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCustomConfig",
    },
    env: {
      value: cdktf.stringToHclTerraform(struct!.env),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    procname: {
      value: cdktf.stringToHclTerraform(struct!.procname),
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

export class AppscopeConfigConfigCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppscopeConfigConfigCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ancestor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestor = this._ancestor;
    }
    if (this._arg !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg = this._arg;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._procname !== undefined) {
      hasAnyValues = true;
      internalValueResult.procname = this._procname;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ancestor = undefined;
      this._arg = undefined;
      this._config.internalValue = undefined;
      this._env = undefined;
      this._hostname = undefined;
      this._procname = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ancestor = value.ancestor;
      this._arg = value.arg;
      this._config.internalValue = value.config;
      this._env = value.env;
      this._hostname = value.hostname;
      this._procname = value.procname;
      this._username = value.username;
    }
  }

  // ancestor - computed: true, optional: true, required: false
  private _ancestor?: string; 
  public get ancestor() {
    return this.getStringAttribute('ancestor');
  }
  public set ancestor(value: string) {
    this._ancestor = value;
  }
  public resetAncestor() {
    this._ancestor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorInput() {
    return this._ancestor;
  }

  // arg - computed: true, optional: true, required: false
  private _arg?: string; 
  public get arg() {
    return this.getStringAttribute('arg');
  }
  public set arg(value: string) {
    this._arg = value;
  }
  public resetArg() {
    this._arg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argInput() {
    return this._arg;
  }

  // config - computed: true, optional: true, required: false
  private _config = new AppscopeConfigConfigCustomConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AppscopeConfigConfigCustomConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // env - computed: true, optional: true, required: false
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // procname - computed: true, optional: true, required: false
  private _procname?: string; 
  public get procname() {
    return this.getStringAttribute('procname');
  }
  public set procname(value: string) {
    this._procname = value;
  }
  public resetProcname() {
    this._procname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procnameInput() {
    return this._procname;
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

export class AppscopeConfigConfigCustomList extends cdktf.ComplexList {
  public internalValue? : AppscopeConfigConfigCustom[] | cdktf.IResolvable

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
  public get(index: number): AppscopeConfigConfigCustomOutputReference {
    return new AppscopeConfigConfigCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppscopeConfigConfigEventFormat {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enhancefs AppscopeConfig#enhancefs}
  */
  readonly enhancefs?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#maxeventpersec AppscopeConfig#maxeventpersec}
  */
  readonly maxeventpersec?: number;
}

export function appscopeConfigConfigEventFormatToTerraform(struct?: AppscopeConfigConfigEventFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhancefs: cdktf.booleanToTerraform(struct!.enhancefs),
    maxeventpersec: cdktf.numberToTerraform(struct!.maxeventpersec),
  }
}


export function appscopeConfigConfigEventFormatToHclTerraform(struct?: AppscopeConfigConfigEventFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhancefs: {
      value: cdktf.booleanToHclTerraform(struct!.enhancefs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maxeventpersec: {
      value: cdktf.numberToHclTerraform(struct!.maxeventpersec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigEventFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigEventFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancefs = this._enhancefs;
    }
    if (this._maxeventpersec !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxeventpersec = this._maxeventpersec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigEventFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enhancefs = undefined;
      this._maxeventpersec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enhancefs = value.enhancefs;
      this._maxeventpersec = value.maxeventpersec;
    }
  }

  // enhancefs - computed: true, optional: true, required: false
  private _enhancefs?: boolean | cdktf.IResolvable; 
  public get enhancefs() {
    return this.getBooleanAttribute('enhancefs');
  }
  public set enhancefs(value: boolean | cdktf.IResolvable) {
    this._enhancefs = value;
  }
  public resetEnhancefs() {
    this._enhancefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancefsInput() {
    return this._enhancefs;
  }

  // maxeventpersec - computed: true, optional: true, required: false
  private _maxeventpersec?: number; 
  public get maxeventpersec() {
    return this.getNumberAttribute('maxeventpersec');
  }
  public set maxeventpersec(value: number) {
    this._maxeventpersec = value;
  }
  public resetMaxeventpersec() {
    this._maxeventpersec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxeventpersecInput() {
    return this._maxeventpersec;
  }
}
export interface AppscopeConfigConfigEventTransportTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cacertpath AppscopeConfig#cacertpath}
  */
  readonly cacertpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#validateserver AppscopeConfig#validateserver}
  */
  readonly validateserver?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigEventTransportTlsToTerraform(struct?: AppscopeConfigConfigEventTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacertpath: cdktf.stringToTerraform(struct!.cacertpath),
    enable: cdktf.booleanToTerraform(struct!.enable),
    validateserver: cdktf.booleanToTerraform(struct!.validateserver),
  }
}


export function appscopeConfigConfigEventTransportTlsToHclTerraform(struct?: AppscopeConfigConfigEventTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacertpath: {
      value: cdktf.stringToHclTerraform(struct!.cacertpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validateserver: {
      value: cdktf.booleanToHclTerraform(struct!.validateserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigEventTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigEventTransportTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacertpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertpath = this._cacertpath;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._validateserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateserver = this._validateserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigEventTransportTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacertpath = undefined;
      this._enable = undefined;
      this._validateserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacertpath = value.cacertpath;
      this._enable = value.enable;
      this._validateserver = value.validateserver;
    }
  }

  // cacertpath - computed: true, optional: true, required: false
  private _cacertpath?: string; 
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }
  public set cacertpath(value: string) {
    this._cacertpath = value;
  }
  public resetCacertpath() {
    this._cacertpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertpathInput() {
    return this._cacertpath;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // validateserver - computed: true, optional: true, required: false
  private _validateserver?: boolean | cdktf.IResolvable; 
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
  public set validateserver(value: boolean | cdktf.IResolvable) {
    this._validateserver = value;
  }
  public resetValidateserver() {
    this._validateserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateserverInput() {
    return this._validateserver;
  }
}
export interface AppscopeConfigConfigEventTransport {
  /**
  * must be one of ["line", "full"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#buffer AppscopeConfig#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#host AppscopeConfig#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#path AppscopeConfig#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#port AppscopeConfig#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tls AppscopeConfig#tls}
  */
  readonly tls?: AppscopeConfigConfigEventTransportTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
}

export function appscopeConfigConfigEventTransportToTerraform(struct?: AppscopeConfigConfigEventTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    tls: appscopeConfigConfigEventTransportTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appscopeConfigConfigEventTransportToHclTerraform(struct?: AppscopeConfigConfigEventTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    tls: {
      value: appscopeConfigConfigEventTransportTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigEventTransportTls",
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

export class AppscopeConfigConfigEventTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigEventTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigEventTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._tls.internalValue = value.tls;
      this._type = value.type;
    }
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // tls - computed: true, optional: true, required: false
  private _tls = new AppscopeConfigConfigEventTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppscopeConfigConfigEventTransportTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
}
export interface AppscopeConfigConfigEventWatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#allowbinary AppscopeConfig#allowbinary}
  */
  readonly allowbinary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enabled AppscopeConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#field AppscopeConfig#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#headers AppscopeConfig#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#name AppscopeConfig#name}
  */
  readonly name?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#value AppscopeConfig#value}
  */
  readonly value?: string;
}

export function appscopeConfigConfigEventWatchToTerraform(struct?: AppscopeConfigConfigEventWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowbinary: cdktf.booleanToTerraform(struct!.allowbinary),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    field: cdktf.stringToTerraform(struct!.field),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appscopeConfigConfigEventWatchToHclTerraform(struct?: AppscopeConfigConfigEventWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowbinary: {
      value: cdktf.booleanToHclTerraform(struct!.allowbinary),
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
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class AppscopeConfigConfigEventWatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppscopeConfigConfigEventWatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowbinary !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowbinary = this._allowbinary;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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

  public set internalValue(value: AppscopeConfigConfigEventWatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowbinary = undefined;
      this._enabled = undefined;
      this._field = undefined;
      this._headers = undefined;
      this._name = undefined;
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
      this._allowbinary = value.allowbinary;
      this._enabled = value.enabled;
      this._field = value.field;
      this._headers = value.headers;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // allowbinary - computed: true, optional: true, required: false
  private _allowbinary?: boolean | cdktf.IResolvable; 
  public get allowbinary() {
    return this.getBooleanAttribute('allowbinary');
  }
  public set allowbinary(value: boolean | cdktf.IResolvable) {
    this._allowbinary = value;
  }
  public resetAllowbinary() {
    this._allowbinary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowbinaryInput() {
    return this._allowbinary;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // field - computed: true, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppscopeConfigConfigEventWatchList extends cdktf.ComplexList {
  public internalValue? : AppscopeConfigConfigEventWatch[] | cdktf.IResolvable

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
  public get(index: number): AppscopeConfigConfigEventWatchOutputReference {
    return new AppscopeConfigConfigEventWatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppscopeConfigConfigEvent {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#format AppscopeConfig#format}
  */
  readonly format?: AppscopeConfigConfigEventFormat;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#transport AppscopeConfig#transport}
  */
  readonly transport?: AppscopeConfigConfigEventTransport;
  /**
  * Not Null; must be "ndjson"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#watch AppscopeConfig#watch}
  */
  readonly watch?: AppscopeConfigConfigEventWatch[] | cdktf.IResolvable;
}

export function appscopeConfigConfigEventToTerraform(struct?: AppscopeConfigConfigEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    format: appscopeConfigConfigEventFormatToTerraform(struct!.format),
    transport: appscopeConfigConfigEventTransportToTerraform(struct!.transport),
    type: cdktf.stringToTerraform(struct!.type),
    watch: cdktf.listMapper(appscopeConfigConfigEventWatchToTerraform, false)(struct!.watch),
  }
}


export function appscopeConfigConfigEventToHclTerraform(struct?: AppscopeConfigConfigEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: appscopeConfigConfigEventFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigEventFormat",
    },
    transport: {
      value: appscopeConfigConfigEventTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigEventTransport",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    watch: {
      value: cdktf.listMapperHcl(appscopeConfigConfigEventWatchToHclTerraform, false)(struct!.watch),
      isBlock: true,
      type: "list",
      storageClassType: "AppscopeConfigConfigEventWatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._watch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watch = this._watch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._format.internalValue = undefined;
      this._transport.internalValue = undefined;
      this._type = undefined;
      this._watch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._format.internalValue = value.format;
      this._transport.internalValue = value.transport;
      this._type = value.type;
      this._watch.internalValue = value.watch;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // format - computed: true, optional: true, required: false
  private _format = new AppscopeConfigConfigEventFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: AppscopeConfigConfigEventFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // transport - computed: true, optional: true, required: false
  private _transport = new AppscopeConfigConfigEventTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: AppscopeConfigConfigEventTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
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

  // watch - computed: true, optional: true, required: false
  private _watch = new AppscopeConfigConfigEventWatchList(this, "watch", false);
  public get watch() {
    return this._watch;
  }
  public putWatch(value: AppscopeConfigConfigEventWatch[] | cdktf.IResolvable) {
    this._watch.internalValue = value;
  }
  public resetWatch() {
    this._watch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchInput() {
    return this._watch.internalValue;
  }
}
export interface AppscopeConfigConfigLibscopeLogTransportTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cacertpath AppscopeConfig#cacertpath}
  */
  readonly cacertpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#validateserver AppscopeConfig#validateserver}
  */
  readonly validateserver?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigLibscopeLogTransportTlsToTerraform(struct?: AppscopeConfigConfigLibscopeLogTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacertpath: cdktf.stringToTerraform(struct!.cacertpath),
    enable: cdktf.booleanToTerraform(struct!.enable),
    validateserver: cdktf.booleanToTerraform(struct!.validateserver),
  }
}


export function appscopeConfigConfigLibscopeLogTransportTlsToHclTerraform(struct?: AppscopeConfigConfigLibscopeLogTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacertpath: {
      value: cdktf.stringToHclTerraform(struct!.cacertpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validateserver: {
      value: cdktf.booleanToHclTerraform(struct!.validateserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigLibscopeLogTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigLibscopeLogTransportTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacertpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertpath = this._cacertpath;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._validateserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateserver = this._validateserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigLibscopeLogTransportTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacertpath = undefined;
      this._enable = undefined;
      this._validateserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacertpath = value.cacertpath;
      this._enable = value.enable;
      this._validateserver = value.validateserver;
    }
  }

  // cacertpath - computed: true, optional: true, required: false
  private _cacertpath?: string; 
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }
  public set cacertpath(value: string) {
    this._cacertpath = value;
  }
  public resetCacertpath() {
    this._cacertpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertpathInput() {
    return this._cacertpath;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // validateserver - computed: true, optional: true, required: false
  private _validateserver?: boolean | cdktf.IResolvable; 
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
  public set validateserver(value: boolean | cdktf.IResolvable) {
    this._validateserver = value;
  }
  public resetValidateserver() {
    this._validateserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateserverInput() {
    return this._validateserver;
  }
}
export interface AppscopeConfigConfigLibscopeLogTransport {
  /**
  * must be one of ["line", "full"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#buffer AppscopeConfig#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#host AppscopeConfig#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#path AppscopeConfig#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#port AppscopeConfig#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tls AppscopeConfig#tls}
  */
  readonly tls?: AppscopeConfigConfigLibscopeLogTransportTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
}

export function appscopeConfigConfigLibscopeLogTransportToTerraform(struct?: AppscopeConfigConfigLibscopeLogTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    tls: appscopeConfigConfigLibscopeLogTransportTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appscopeConfigConfigLibscopeLogTransportToHclTerraform(struct?: AppscopeConfigConfigLibscopeLogTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    tls: {
      value: appscopeConfigConfigLibscopeLogTransportTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigLibscopeLogTransportTls",
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

export class AppscopeConfigConfigLibscopeLogTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigLibscopeLogTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigLibscopeLogTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._tls.internalValue = value.tls;
      this._type = value.type;
    }
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // tls - computed: true, optional: true, required: false
  private _tls = new AppscopeConfigConfigLibscopeLogTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppscopeConfigConfigLibscopeLogTransportTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
}
export interface AppscopeConfigConfigLibscopeLog {
  /**
  * must be one of ["error", "debug", "info", "warning", "none"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#level AppscopeConfig#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#transport AppscopeConfig#transport}
  */
  readonly transport?: AppscopeConfigConfigLibscopeLogTransport;
}

export function appscopeConfigConfigLibscopeLogToTerraform(struct?: AppscopeConfigConfigLibscopeLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    transport: appscopeConfigConfigLibscopeLogTransportToTerraform(struct!.transport),
  }
}


export function appscopeConfigConfigLibscopeLogToHclTerraform(struct?: AppscopeConfigConfigLibscopeLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport: {
      value: appscopeConfigConfigLibscopeLogTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigLibscopeLogTransport",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigLibscopeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigLibscopeLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigLibscopeLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._transport.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._transport.internalValue = value.transport;
    }
  }

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // transport - computed: true, optional: true, required: false
  private _transport = new AppscopeConfigConfigLibscopeLogTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: AppscopeConfigConfigLibscopeLogTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }
}
export interface AppscopeConfigConfigLibscope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#commanddir AppscopeConfig#commanddir}
  */
  readonly commanddir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#configevent AppscopeConfig#configevent}
  */
  readonly configevent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#log AppscopeConfig#log}
  */
  readonly log?: AppscopeConfigConfigLibscopeLog;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#summaryperiod AppscopeConfig#summaryperiod}
  */
  readonly summaryperiod?: number;
}

export function appscopeConfigConfigLibscopeToTerraform(struct?: AppscopeConfigConfigLibscope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commanddir: cdktf.stringToTerraform(struct!.commanddir),
    configevent: cdktf.booleanToTerraform(struct!.configevent),
    log: appscopeConfigConfigLibscopeLogToTerraform(struct!.log),
    summaryperiod: cdktf.numberToTerraform(struct!.summaryperiod),
  }
}


export function appscopeConfigConfigLibscopeToHclTerraform(struct?: AppscopeConfigConfigLibscope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commanddir: {
      value: cdktf.stringToHclTerraform(struct!.commanddir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configevent: {
      value: cdktf.booleanToHclTerraform(struct!.configevent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log: {
      value: appscopeConfigConfigLibscopeLogToHclTerraform(struct!.log),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigLibscopeLog",
    },
    summaryperiod: {
      value: cdktf.numberToHclTerraform(struct!.summaryperiod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigLibscopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigLibscope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commanddir !== undefined) {
      hasAnyValues = true;
      internalValueResult.commanddir = this._commanddir;
    }
    if (this._configevent !== undefined) {
      hasAnyValues = true;
      internalValueResult.configevent = this._configevent;
    }
    if (this._log?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log?.internalValue;
    }
    if (this._summaryperiod !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryperiod = this._summaryperiod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigLibscope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commanddir = undefined;
      this._configevent = undefined;
      this._log.internalValue = undefined;
      this._summaryperiod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commanddir = value.commanddir;
      this._configevent = value.configevent;
      this._log.internalValue = value.log;
      this._summaryperiod = value.summaryperiod;
    }
  }

  // commanddir - computed: true, optional: true, required: false
  private _commanddir?: string; 
  public get commanddir() {
    return this.getStringAttribute('commanddir');
  }
  public set commanddir(value: string) {
    this._commanddir = value;
  }
  public resetCommanddir() {
    this._commanddir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commanddirInput() {
    return this._commanddir;
  }

  // configevent - computed: true, optional: true, required: false
  private _configevent?: boolean | cdktf.IResolvable; 
  public get configevent() {
    return this.getBooleanAttribute('configevent');
  }
  public set configevent(value: boolean | cdktf.IResolvable) {
    this._configevent = value;
  }
  public resetConfigevent() {
    this._configevent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configeventInput() {
    return this._configevent;
  }

  // log - computed: true, optional: true, required: false
  private _log = new AppscopeConfigConfigLibscopeLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: AppscopeConfigConfigLibscopeLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // summaryperiod - computed: true, optional: true, required: false
  private _summaryperiod?: number; 
  public get summaryperiod() {
    return this.getNumberAttribute('summaryperiod');
  }
  public set summaryperiod(value: number) {
    this._summaryperiod = value;
  }
  public resetSummaryperiod() {
    this._summaryperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryperiodInput() {
    return this._summaryperiod;
  }
}
export interface AppscopeConfigConfigMetricFormat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#statsdmaxlen AppscopeConfig#statsdmaxlen}
  */
  readonly statsdmaxlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#statsdprefix AppscopeConfig#statsdprefix}
  */
  readonly statsdprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#verbosity AppscopeConfig#verbosity}
  */
  readonly verbosity?: number;
}

export function appscopeConfigConfigMetricFormatToTerraform(struct?: AppscopeConfigConfigMetricFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statsdmaxlen: cdktf.numberToTerraform(struct!.statsdmaxlen),
    statsdprefix: cdktf.stringToTerraform(struct!.statsdprefix),
    type: cdktf.stringToTerraform(struct!.type),
    verbosity: cdktf.numberToTerraform(struct!.verbosity),
  }
}


export function appscopeConfigConfigMetricFormatToHclTerraform(struct?: AppscopeConfigConfigMetricFormat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    statsdmaxlen: {
      value: cdktf.numberToHclTerraform(struct!.statsdmaxlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statsdprefix: {
      value: cdktf.stringToHclTerraform(struct!.statsdprefix),
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
    verbosity: {
      value: cdktf.numberToHclTerraform(struct!.verbosity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigMetricFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigMetricFormat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statsdmaxlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsdmaxlen = this._statsdmaxlen;
    }
    if (this._statsdprefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsdprefix = this._statsdprefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._verbosity !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbosity = this._verbosity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigMetricFormat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statsdmaxlen = undefined;
      this._statsdprefix = undefined;
      this._type = undefined;
      this._verbosity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statsdmaxlen = value.statsdmaxlen;
      this._statsdprefix = value.statsdprefix;
      this._type = value.type;
      this._verbosity = value.verbosity;
    }
  }

  // statsdmaxlen - computed: true, optional: true, required: false
  private _statsdmaxlen?: number; 
  public get statsdmaxlen() {
    return this.getNumberAttribute('statsdmaxlen');
  }
  public set statsdmaxlen(value: number) {
    this._statsdmaxlen = value;
  }
  public resetStatsdmaxlen() {
    this._statsdmaxlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdmaxlenInput() {
    return this._statsdmaxlen;
  }

  // statsdprefix - computed: true, optional: true, required: false
  private _statsdprefix?: string; 
  public get statsdprefix() {
    return this.getStringAttribute('statsdprefix');
  }
  public set statsdprefix(value: string) {
    this._statsdprefix = value;
  }
  public resetStatsdprefix() {
    this._statsdprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdprefixInput() {
    return this._statsdprefix;
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

  // verbosity - computed: true, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }
}
export interface AppscopeConfigConfigMetricTransportTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cacertpath AppscopeConfig#cacertpath}
  */
  readonly cacertpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#validateserver AppscopeConfig#validateserver}
  */
  readonly validateserver?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigMetricTransportTlsToTerraform(struct?: AppscopeConfigConfigMetricTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacertpath: cdktf.stringToTerraform(struct!.cacertpath),
    enable: cdktf.booleanToTerraform(struct!.enable),
    validateserver: cdktf.booleanToTerraform(struct!.validateserver),
  }
}


export function appscopeConfigConfigMetricTransportTlsToHclTerraform(struct?: AppscopeConfigConfigMetricTransportTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacertpath: {
      value: cdktf.stringToHclTerraform(struct!.cacertpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validateserver: {
      value: cdktf.booleanToHclTerraform(struct!.validateserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigMetricTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigMetricTransportTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacertpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacertpath = this._cacertpath;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._validateserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateserver = this._validateserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigMetricTransportTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacertpath = undefined;
      this._enable = undefined;
      this._validateserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacertpath = value.cacertpath;
      this._enable = value.enable;
      this._validateserver = value.validateserver;
    }
  }

  // cacertpath - computed: true, optional: true, required: false
  private _cacertpath?: string; 
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }
  public set cacertpath(value: string) {
    this._cacertpath = value;
  }
  public resetCacertpath() {
    this._cacertpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertpathInput() {
    return this._cacertpath;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // validateserver - computed: true, optional: true, required: false
  private _validateserver?: boolean | cdktf.IResolvable; 
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
  public set validateserver(value: boolean | cdktf.IResolvable) {
    this._validateserver = value;
  }
  public resetValidateserver() {
    this._validateserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateserverInput() {
    return this._validateserver;
  }
}
export interface AppscopeConfigConfigMetricTransport {
  /**
  * must be one of ["line", "full"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#buffer AppscopeConfig#buffer}
  */
  readonly buffer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#host AppscopeConfig#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#path AppscopeConfig#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#port AppscopeConfig#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tls AppscopeConfig#tls}
  */
  readonly tls?: AppscopeConfigConfigMetricTransportTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#type AppscopeConfig#type}
  */
  readonly type?: string;
}

export function appscopeConfigConfigMetricTransportToTerraform(struct?: AppscopeConfigConfigMetricTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer: cdktf.stringToTerraform(struct!.buffer),
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    tls: appscopeConfigConfigMetricTransportTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function appscopeConfigConfigMetricTransportToHclTerraform(struct?: AppscopeConfigConfigMetricTransport | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer: {
      value: cdktf.stringToHclTerraform(struct!.buffer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    tls: {
      value: appscopeConfigConfigMetricTransportTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigMetricTransportTls",
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

export class AppscopeConfigConfigMetricTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigMetricTransport | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buffer !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffer = this._buffer;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigMetricTransport | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buffer = undefined;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buffer = value.buffer;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._tls.internalValue = value.tls;
      this._type = value.type;
    }
  }

  // buffer - computed: true, optional: true, required: false
  private _buffer?: string; 
  public get buffer() {
    return this.getStringAttribute('buffer');
  }
  public set buffer(value: string) {
    this._buffer = value;
  }
  public resetBuffer() {
    this._buffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferInput() {
    return this._buffer;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // tls - computed: true, optional: true, required: false
  private _tls = new AppscopeConfigConfigMetricTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: AppscopeConfigConfigMetricTransportTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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
}
export interface AppscopeConfigConfigMetricWatch {
}

export function appscopeConfigConfigMetricWatchToTerraform(struct?: AppscopeConfigConfigMetricWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appscopeConfigConfigMetricWatchToHclTerraform(struct?: AppscopeConfigConfigMetricWatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppscopeConfigConfigMetricWatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppscopeConfigConfigMetricWatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigMetricWatch | cdktf.IResolvable | undefined) {
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

export class AppscopeConfigConfigMetricWatchList extends cdktf.ComplexList {
  public internalValue? : AppscopeConfigConfigMetricWatch[] | cdktf.IResolvable

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
  public get(index: number): AppscopeConfigConfigMetricWatchOutputReference {
    return new AppscopeConfigConfigMetricWatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppscopeConfigConfigMetric {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#format AppscopeConfig#format}
  */
  readonly format?: AppscopeConfigConfigMetricFormat;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#transport AppscopeConfig#transport}
  */
  readonly transport?: AppscopeConfigConfigMetricTransport;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#watch AppscopeConfig#watch}
  */
  readonly watch?: AppscopeConfigConfigMetricWatch[] | cdktf.IResolvable;
}

export function appscopeConfigConfigMetricToTerraform(struct?: AppscopeConfigConfigMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    format: appscopeConfigConfigMetricFormatToTerraform(struct!.format),
    transport: appscopeConfigConfigMetricTransportToTerraform(struct!.transport),
    watch: cdktf.listMapper(appscopeConfigConfigMetricWatchToTerraform, false)(struct!.watch),
  }
}


export function appscopeConfigConfigMetricToHclTerraform(struct?: AppscopeConfigConfigMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: appscopeConfigConfigMetricFormatToHclTerraform(struct!.format),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigMetricFormat",
    },
    transport: {
      value: appscopeConfigConfigMetricTransportToHclTerraform(struct!.transport),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigMetricTransport",
    },
    watch: {
      value: cdktf.listMapperHcl(appscopeConfigConfigMetricWatchToHclTerraform, false)(struct!.watch),
      isBlock: true,
      type: "list",
      storageClassType: "AppscopeConfigConfigMetricWatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._format?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format?.internalValue;
    }
    if (this._transport?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transport = this._transport?.internalValue;
    }
    if (this._watch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.watch = this._watch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._format.internalValue = undefined;
      this._transport.internalValue = undefined;
      this._watch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._format.internalValue = value.format;
      this._transport.internalValue = value.transport;
      this._watch.internalValue = value.watch;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // format - computed: true, optional: true, required: false
  private _format = new AppscopeConfigConfigMetricFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }
  public putFormat(value: AppscopeConfigConfigMetricFormat) {
    this._format.internalValue = value;
  }
  public resetFormat() {
    this._format.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format.internalValue;
  }

  // transport - computed: true, optional: true, required: false
  private _transport = new AppscopeConfigConfigMetricTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
  public putTransport(value: AppscopeConfigConfigMetricTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
  }

  // watch - computed: true, optional: true, required: false
  private _watch = new AppscopeConfigConfigMetricWatchList(this, "watch", false);
  public get watch() {
    return this._watch;
  }
  public putWatch(value: AppscopeConfigConfigMetricWatch[] | cdktf.IResolvable) {
    this._watch.internalValue = value;
  }
  public resetWatch() {
    this._watch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get watchInput() {
    return this._watch.internalValue;
  }
}
export interface AppscopeConfigConfigPayload {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#dir AppscopeConfig#dir}
  */
  readonly dir?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#enable AppscopeConfig#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function appscopeConfigConfigPayloadToTerraform(struct?: AppscopeConfigConfigPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dir: cdktf.stringToTerraform(struct!.dir),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function appscopeConfigConfigPayloadToHclTerraform(struct?: AppscopeConfigConfigPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dir = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dir = value.dir;
      this._enable = value.enable;
    }
  }

  // dir - computed: true, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface AppscopeConfigConfigProtocol {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#binary AppscopeConfig#binary}
  */
  readonly binary?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#detect AppscopeConfig#detect}
  */
  readonly detect?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#len AppscopeConfig#len}
  */
  readonly len?: number;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#name AppscopeConfig#name}
  */
  readonly name?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#payload AppscopeConfig#payload}
  */
  readonly payload?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#regex AppscopeConfig#regex}
  */
  readonly regex?: string;
}

export function appscopeConfigConfigProtocolToTerraform(struct?: AppscopeConfigConfigProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary: cdktf.booleanToTerraform(struct!.binary),
    detect: cdktf.booleanToTerraform(struct!.detect),
    len: cdktf.numberToTerraform(struct!.len),
    name: cdktf.stringToTerraform(struct!.name),
    payload: cdktf.booleanToTerraform(struct!.payload),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function appscopeConfigConfigProtocolToHclTerraform(struct?: AppscopeConfigConfigProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary: {
      value: cdktf.booleanToHclTerraform(struct!.binary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detect: {
      value: cdktf.booleanToHclTerraform(struct!.detect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    len: {
      value: cdktf.numberToHclTerraform(struct!.len),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.booleanToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppscopeConfigConfigProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binary !== undefined) {
      hasAnyValues = true;
      internalValueResult.binary = this._binary;
    }
    if (this._detect !== undefined) {
      hasAnyValues = true;
      internalValueResult.detect = this._detect;
    }
    if (this._len !== undefined) {
      hasAnyValues = true;
      internalValueResult.len = this._len;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binary = undefined;
      this._detect = undefined;
      this._len = undefined;
      this._name = undefined;
      this._payload = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binary = value.binary;
      this._detect = value.detect;
      this._len = value.len;
      this._name = value.name;
      this._payload = value.payload;
      this._regex = value.regex;
    }
  }

  // binary - computed: true, optional: true, required: false
  private _binary?: boolean | cdktf.IResolvable; 
  public get binary() {
    return this.getBooleanAttribute('binary');
  }
  public set binary(value: boolean | cdktf.IResolvable) {
    this._binary = value;
  }
  public resetBinary() {
    this._binary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryInput() {
    return this._binary;
  }

  // detect - computed: true, optional: true, required: false
  private _detect?: boolean | cdktf.IResolvable; 
  public get detect() {
    return this.getBooleanAttribute('detect');
  }
  public set detect(value: boolean | cdktf.IResolvable) {
    this._detect = value;
  }
  public resetDetect() {
    this._detect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectInput() {
    return this._detect;
  }

  // len - computed: true, optional: true, required: false
  private _len?: number; 
  public get len() {
    return this.getNumberAttribute('len');
  }
  public set len(value: number) {
    this._len = value;
  }
  public resetLen() {
    this._len = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lenInput() {
    return this._len;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // payload - computed: true, optional: true, required: false
  private _payload?: boolean | cdktf.IResolvable; 
  public get payload() {
    return this.getBooleanAttribute('payload');
  }
  public set payload(value: boolean | cdktf.IResolvable) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // regex - computed: true, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class AppscopeConfigConfigProtocolList extends cdktf.ComplexList {
  public internalValue? : AppscopeConfigConfigProtocol[] | cdktf.IResolvable

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
  public get(index: number): AppscopeConfigConfigProtocolOutputReference {
    return new AppscopeConfigConfigProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppscopeConfigConfigTags {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#key AppscopeConfig#key}
  */
  readonly key?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#value AppscopeConfig#value}
  */
  readonly value?: string;
}

export function appscopeConfigConfigTagsToTerraform(struct?: AppscopeConfigConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appscopeConfigConfigTagsToHclTerraform(struct?: AppscopeConfigConfigTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AppscopeConfigConfigTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppscopeConfigConfigTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppscopeConfigConfigTagsList extends cdktf.ComplexList {
  public internalValue? : AppscopeConfigConfigTags[] | cdktf.IResolvable

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
  public get(index: number): AppscopeConfigConfigTagsOutputReference {
    return new AppscopeConfigConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppscopeConfigConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#cribl AppscopeConfig#cribl}
  */
  readonly cribl?: AppscopeConfigConfigCribl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#custom AppscopeConfig#custom}
  */
  readonly custom?: AppscopeConfigConfigCustom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#event AppscopeConfig#event}
  */
  readonly event?: AppscopeConfigConfigEvent;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#libscope AppscopeConfig#libscope}
  */
  readonly libscope?: AppscopeConfigConfigLibscope;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#metric AppscopeConfig#metric}
  */
  readonly metric?: AppscopeConfigConfigMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#payload AppscopeConfig#payload}
  */
  readonly payload?: AppscopeConfigConfigPayload;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#protocol AppscopeConfig#protocol}
  */
  readonly protocol?: AppscopeConfigConfigProtocol[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#tags AppscopeConfig#tags}
  */
  readonly tags?: AppscopeConfigConfigTags[] | cdktf.IResolvable;
}

export function appscopeConfigConfigAToTerraform(struct?: AppscopeConfigConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cribl: appscopeConfigConfigCriblToTerraform(struct!.cribl),
    custom: cdktf.listMapper(appscopeConfigConfigCustomToTerraform, false)(struct!.custom),
    event: appscopeConfigConfigEventToTerraform(struct!.event),
    libscope: appscopeConfigConfigLibscopeToTerraform(struct!.libscope),
    metric: appscopeConfigConfigMetricToTerraform(struct!.metric),
    payload: appscopeConfigConfigPayloadToTerraform(struct!.payload),
    protocol: cdktf.listMapper(appscopeConfigConfigProtocolToTerraform, false)(struct!.protocol),
    tags: cdktf.listMapper(appscopeConfigConfigTagsToTerraform, false)(struct!.tags),
  }
}


export function appscopeConfigConfigAToHclTerraform(struct?: AppscopeConfigConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cribl: {
      value: appscopeConfigConfigCriblToHclTerraform(struct!.cribl),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigCribl",
    },
    custom: {
      value: cdktf.listMapperHcl(appscopeConfigConfigCustomToHclTerraform, false)(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "AppscopeConfigConfigCustomList",
    },
    event: {
      value: appscopeConfigConfigEventToHclTerraform(struct!.event),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigEvent",
    },
    libscope: {
      value: appscopeConfigConfigLibscopeToHclTerraform(struct!.libscope),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigLibscope",
    },
    metric: {
      value: appscopeConfigConfigMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigMetric",
    },
    payload: {
      value: appscopeConfigConfigPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "struct",
      storageClassType: "AppscopeConfigConfigPayload",
    },
    protocol: {
      value: cdktf.listMapperHcl(appscopeConfigConfigProtocolToHclTerraform, false)(struct!.protocol),
      isBlock: true,
      type: "list",
      storageClassType: "AppscopeConfigConfigProtocolList",
    },
    tags: {
      value: cdktf.listMapperHcl(appscopeConfigConfigTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "AppscopeConfigConfigTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppscopeConfigConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppscopeConfigConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cribl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cribl = this._cribl?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._event?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event?.internalValue;
    }
    if (this._libscope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.libscope = this._libscope?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppscopeConfigConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cribl.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._event.internalValue = undefined;
      this._libscope.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._payload.internalValue = undefined;
      this._protocol.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cribl.internalValue = value.cribl;
      this._custom.internalValue = value.custom;
      this._event.internalValue = value.event;
      this._libscope.internalValue = value.libscope;
      this._metric.internalValue = value.metric;
      this._payload.internalValue = value.payload;
      this._protocol.internalValue = value.protocol;
      this._tags.internalValue = value.tags;
    }
  }

  // cribl - computed: true, optional: true, required: false
  private _cribl = new AppscopeConfigConfigCriblOutputReference(this, "cribl");
  public get cribl() {
    return this._cribl;
  }
  public putCribl(value: AppscopeConfigConfigCribl) {
    this._cribl.internalValue = value;
  }
  public resetCribl() {
    this._cribl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criblInput() {
    return this._cribl.internalValue;
  }

  // custom - computed: true, optional: true, required: false
  private _custom = new AppscopeConfigConfigCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AppscopeConfigConfigCustom[] | cdktf.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // event - computed: true, optional: true, required: false
  private _event = new AppscopeConfigConfigEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }
  public putEvent(value: AppscopeConfigConfigEvent) {
    this._event.internalValue = value;
  }
  public resetEvent() {
    this._event.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event.internalValue;
  }

  // libscope - computed: true, optional: true, required: false
  private _libscope = new AppscopeConfigConfigLibscopeOutputReference(this, "libscope");
  public get libscope() {
    return this._libscope;
  }
  public putLibscope(value: AppscopeConfigConfigLibscope) {
    this._libscope.internalValue = value;
  }
  public resetLibscope() {
    this._libscope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libscopeInput() {
    return this._libscope.internalValue;
  }

  // metric - computed: true, optional: true, required: false
  private _metric = new AppscopeConfigConfigMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: AppscopeConfigConfigMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // payload - computed: true, optional: true, required: false
  private _payload = new AppscopeConfigConfigPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: AppscopeConfigConfigPayload) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol = new AppscopeConfigConfigProtocolList(this, "protocol", false);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: AppscopeConfigConfigProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new AppscopeConfigConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AppscopeConfigConfigTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config criblio_appscope_config}
*/
export class AppscopeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_appscope_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppscopeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppscopeConfig to import
  * @param importFromId The id of the existing AppscopeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppscopeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_appscope_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.23/docs/resources/appscope_config criblio_appscope_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppscopeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AppscopeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_appscope_config',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.23',
        providerVersionConstraint: '1.20.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._description = config.description;
    this._groupId = config.groupId;
    this._id = config.id;
    this._lib = config.lib;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new AppscopeConfigConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: AppscopeConfigConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lib - computed: true, optional: true, required: false
  private _lib?: string; 
  public get lib() {
    return this.getStringAttribute('lib');
  }
  public set lib(value: string) {
    this._lib = value;
  }
  public resetLib() {
    this._lib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libInput() {
    return this._lib;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: appscopeConfigConfigAToTerraform(this._config.internalValue),
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      lib: cdktf.stringToTerraform(this._lib),
      tags: cdktf.stringToTerraform(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: appscopeConfigConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppscopeConfigConfigA",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      lib: {
        value: cdktf.stringToHclTerraform(this._lib),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
