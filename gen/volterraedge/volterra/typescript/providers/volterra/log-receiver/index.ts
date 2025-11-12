// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogReceiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#annotations LogReceiver#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#description LogReceiver#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#disable LogReceiver#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#id LogReceiver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#labels LogReceiver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#name LogReceiver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#namespace LogReceiver#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#site_local LogReceiver#site_local}
  */
  readonly siteLocal?: boolean | cdktf.IResolvable;
  /**
  * syslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#syslog LogReceiver#syslog}
  */
  readonly syslog?: LogReceiverSyslog;
}
export interface LogReceiverSyslogTcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#server_name LogReceiver#server_name}
  */
  readonly serverName: string;
}

export function logReceiverSyslogTcpServerToTerraform(struct?: LogReceiverSyslogTcpServerOutputReference | LogReceiverSyslogTcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function logReceiverSyslogTcpServerToHclTerraform(struct?: LogReceiverSyslogTcpServerOutputReference | LogReceiverSyslogTcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogTcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogTcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogTcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._serverName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._serverName = value.serverName;
    }
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

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#decryption_provider LogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#store_provider LogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#provider LogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#url LogReceiver#url}
  */
  readonly url: string;
}

export function logReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoToTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function logReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
export interface LogReceiverSyslogTlsServerMtlsEnableKeyUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#blindfold_secret_info LogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#clear_secret_info LogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfo;
}

export function logReceiverSyslogTlsServerMtlsEnableKeyUrlToTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: logReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function logReceiverSyslogTlsServerMtlsEnableKeyUrlToHclTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: logReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogTlsServerMtlsEnableKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogTlsServerMtlsEnableKeyUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface LogReceiverSyslogTlsServerMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#certificate LogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#key_url LogReceiver#key_url}
  */
  readonly keyUrl?: LogReceiverSyslogTlsServerMtlsEnableKeyUrl;
}

export function logReceiverSyslogTlsServerMtlsEnableToTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableOutputReference | LogReceiverSyslogTlsServerMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key_url: logReceiverSyslogTlsServerMtlsEnableKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function logReceiverSyslogTlsServerMtlsEnableToHclTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableOutputReference | LogReceiverSyslogTlsServerMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_url: {
      value: logReceiverSyslogTlsServerMtlsEnableKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerMtlsEnableKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogTlsServerMtlsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogTlsServerMtlsEnable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._keyUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogTlsServerMtlsEnable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._keyUrl.internalValue = value.keyUrl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // key_url - computed: false, optional: true, required: false
  private _keyUrl = new LogReceiverSyslogTlsServerMtlsEnableKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrl) {
    this._keyUrl.internalValue = value;
  }
  public resetKeyUrl() {
    this._keyUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUrlInput() {
    return this._keyUrl.internalValue;
  }
}
export interface LogReceiverSyslogTlsServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#default_https_port LogReceiver#default_https_port}
  */
  readonly defaultHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#default_syslog_tls_port LogReceiver#default_syslog_tls_port}
  */
  readonly defaultSyslogTlsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#mtls_disabled LogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#server_name LogReceiver#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#trusted_ca_url LogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#volterra_ca LogReceiver#volterra_ca}
  */
  readonly volterraCa?: boolean | cdktf.IResolvable;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#mtls_enable LogReceiver#mtls_enable}
  */
  readonly mtlsEnable?: LogReceiverSyslogTlsServerMtlsEnable;
}

export function logReceiverSyslogTlsServerToTerraform(struct?: LogReceiverSyslogTlsServerOutputReference | LogReceiverSyslogTlsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_https_port: cdktf.booleanToTerraform(struct!.defaultHttpsPort),
    default_syslog_tls_port: cdktf.booleanToTerraform(struct!.defaultSyslogTlsPort),
    mtls_disabled: cdktf.booleanToTerraform(struct!.mtlsDisabled),
    port: cdktf.numberToTerraform(struct!.port),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    volterra_ca: cdktf.booleanToTerraform(struct!.volterraCa),
    mtls_enable: logReceiverSyslogTlsServerMtlsEnableToTerraform(struct!.mtlsEnable),
  }
}


export function logReceiverSyslogTlsServerToHclTerraform(struct?: LogReceiverSyslogTlsServerOutputReference | LogReceiverSyslogTlsServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_syslog_tls_port: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSyslogTlsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtls_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.mtlsDisabled),
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
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volterra_ca: {
      value: cdktf.booleanToHclTerraform(struct!.volterraCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtls_enable: {
      value: logReceiverSyslogTlsServerMtlsEnableToHclTerraform(struct!.mtlsEnable),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerMtlsEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogTlsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogTlsServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHttpsPort = this._defaultHttpsPort;
    }
    if (this._defaultSyslogTlsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSyslogTlsPort = this._defaultSyslogTlsPort;
    }
    if (this._mtlsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsDisabled = this._mtlsDisabled;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._volterraCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraCa = this._volterraCa;
    }
    if (this._mtlsEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsEnable = this._mtlsEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogTlsServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHttpsPort = undefined;
      this._defaultSyslogTlsPort = undefined;
      this._mtlsDisabled = undefined;
      this._port = undefined;
      this._serverName = undefined;
      this._trustedCaUrl = undefined;
      this._volterraCa = undefined;
      this._mtlsEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHttpsPort = value.defaultHttpsPort;
      this._defaultSyslogTlsPort = value.defaultSyslogTlsPort;
      this._mtlsDisabled = value.mtlsDisabled;
      this._port = value.port;
      this._serverName = value.serverName;
      this._trustedCaUrl = value.trustedCaUrl;
      this._volterraCa = value.volterraCa;
      this._mtlsEnable.internalValue = value.mtlsEnable;
    }
  }

  // default_https_port - computed: false, optional: true, required: false
  private _defaultHttpsPort?: boolean | cdktf.IResolvable; 
  public get defaultHttpsPort() {
    return this.getBooleanAttribute('default_https_port');
  }
  public set defaultHttpsPort(value: boolean | cdktf.IResolvable) {
    this._defaultHttpsPort = value;
  }
  public resetDefaultHttpsPort() {
    this._defaultHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHttpsPortInput() {
    return this._defaultHttpsPort;
  }

  // default_syslog_tls_port - computed: false, optional: true, required: false
  private _defaultSyslogTlsPort?: boolean | cdktf.IResolvable; 
  public get defaultSyslogTlsPort() {
    return this.getBooleanAttribute('default_syslog_tls_port');
  }
  public set defaultSyslogTlsPort(value: boolean | cdktf.IResolvable) {
    this._defaultSyslogTlsPort = value;
  }
  public resetDefaultSyslogTlsPort() {
    this._defaultSyslogTlsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSyslogTlsPortInput() {
    return this._defaultSyslogTlsPort;
  }

  // mtls_disabled - computed: false, optional: true, required: false
  private _mtlsDisabled?: boolean | cdktf.IResolvable; 
  public get mtlsDisabled() {
    return this.getBooleanAttribute('mtls_disabled');
  }
  public set mtlsDisabled(value: boolean | cdktf.IResolvable) {
    this._mtlsDisabled = value;
  }
  public resetMtlsDisabled() {
    this._mtlsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsDisabledInput() {
    return this._mtlsDisabled;
  }

  // port - computed: false, optional: true, required: false
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

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // volterra_ca - computed: false, optional: true, required: false
  private _volterraCa?: boolean | cdktf.IResolvable; 
  public get volterraCa() {
    return this.getBooleanAttribute('volterra_ca');
  }
  public set volterraCa(value: boolean | cdktf.IResolvable) {
    this._volterraCa = value;
  }
  public resetVolterraCa() {
    this._volterraCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraCaInput() {
    return this._volterraCa;
  }

  // mtls_enable - computed: false, optional: true, required: false
  private _mtlsEnable = new LogReceiverSyslogTlsServerMtlsEnableOutputReference(this, "mtls_enable");
  public get mtlsEnable() {
    return this._mtlsEnable;
  }
  public putMtlsEnable(value: LogReceiverSyslogTlsServerMtlsEnable) {
    this._mtlsEnable.internalValue = value;
  }
  public resetMtlsEnable() {
    this._mtlsEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsEnableInput() {
    return this._mtlsEnable.internalValue;
  }
}
export interface LogReceiverSyslogUdpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#server_name LogReceiver#server_name}
  */
  readonly serverName: string;
}

export function logReceiverSyslogUdpServerToTerraform(struct?: LogReceiverSyslogUdpServerOutputReference | LogReceiverSyslogUdpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function logReceiverSyslogUdpServerToHclTerraform(struct?: LogReceiverSyslogUdpServerOutputReference | LogReceiverSyslogUdpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogUdpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogUdpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogUdpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._serverName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._serverName = value.serverName;
    }
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

  // server_name - computed: false, optional: false, required: true
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface LogReceiverSyslog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#syslog_rfc5424 LogReceiver#syslog_rfc5424}
  */
  readonly syslogRfc5424?: number;
  /**
  * tcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#tcp_server LogReceiver#tcp_server}
  */
  readonly tcpServer?: LogReceiverSyslogTcpServer;
  /**
  * tls_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#tls_server LogReceiver#tls_server}
  */
  readonly tlsServer?: LogReceiverSyslogTlsServer;
  /**
  * udp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#udp_server LogReceiver#udp_server}
  */
  readonly udpServer?: LogReceiverSyslogUdpServer;
}

export function logReceiverSyslogToTerraform(struct?: LogReceiverSyslogOutputReference | LogReceiverSyslog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syslog_rfc5424: cdktf.numberToTerraform(struct!.syslogRfc5424),
    tcp_server: logReceiverSyslogTcpServerToTerraform(struct!.tcpServer),
    tls_server: logReceiverSyslogTlsServerToTerraform(struct!.tlsServer),
    udp_server: logReceiverSyslogUdpServerToTerraform(struct!.udpServer),
  }
}


export function logReceiverSyslogToHclTerraform(struct?: LogReceiverSyslogOutputReference | LogReceiverSyslog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    syslog_rfc5424: {
      value: cdktf.numberToHclTerraform(struct!.syslogRfc5424),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_server: {
      value: logReceiverSyslogTcpServerToHclTerraform(struct!.tcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTcpServerList",
    },
    tls_server: {
      value: logReceiverSyslogTlsServerToHclTerraform(struct!.tlsServer),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerList",
    },
    udp_server: {
      value: logReceiverSyslogUdpServerToHclTerraform(struct!.udpServer),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogUdpServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syslogRfc5424 !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogRfc5424 = this._syslogRfc5424;
    }
    if (this._tcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpServer = this._tcpServer?.internalValue;
    }
    if (this._tlsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServer = this._tlsServer?.internalValue;
    }
    if (this._udpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpServer = this._udpServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syslogRfc5424 = undefined;
      this._tcpServer.internalValue = undefined;
      this._tlsServer.internalValue = undefined;
      this._udpServer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syslogRfc5424 = value.syslogRfc5424;
      this._tcpServer.internalValue = value.tcpServer;
      this._tlsServer.internalValue = value.tlsServer;
      this._udpServer.internalValue = value.udpServer;
    }
  }

  // syslog_rfc5424 - computed: false, optional: true, required: false
  private _syslogRfc5424?: number; 
  public get syslogRfc5424() {
    return this.getNumberAttribute('syslog_rfc5424');
  }
  public set syslogRfc5424(value: number) {
    this._syslogRfc5424 = value;
  }
  public resetSyslogRfc5424() {
    this._syslogRfc5424 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogRfc5424Input() {
    return this._syslogRfc5424;
  }

  // tcp_server - computed: false, optional: true, required: false
  private _tcpServer = new LogReceiverSyslogTcpServerOutputReference(this, "tcp_server");
  public get tcpServer() {
    return this._tcpServer;
  }
  public putTcpServer(value: LogReceiverSyslogTcpServer) {
    this._tcpServer.internalValue = value;
  }
  public resetTcpServer() {
    this._tcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpServerInput() {
    return this._tcpServer.internalValue;
  }

  // tls_server - computed: false, optional: true, required: false
  private _tlsServer = new LogReceiverSyslogTlsServerOutputReference(this, "tls_server");
  public get tlsServer() {
    return this._tlsServer;
  }
  public putTlsServer(value: LogReceiverSyslogTlsServer) {
    this._tlsServer.internalValue = value;
  }
  public resetTlsServer() {
    this._tlsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerInput() {
    return this._tlsServer.internalValue;
  }

  // udp_server - computed: false, optional: true, required: false
  private _udpServer = new LogReceiverSyslogUdpServerOutputReference(this, "udp_server");
  public get udpServer() {
    return this._udpServer;
  }
  public putUdpServer(value: LogReceiverSyslogUdpServer) {
    this._udpServer.internalValue = value;
  }
  public resetUdpServer() {
    this._udpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpServerInput() {
    return this._udpServer.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver volterra_log_receiver}
*/
export class LogReceiver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_log_receiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogReceiver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogReceiver to import
  * @param importFromId The id of the existing LogReceiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogReceiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_log_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/log_receiver volterra_log_receiver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogReceiverConfig
  */
  public constructor(scope: Construct, id: string, config: LogReceiverConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_log_receiver',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
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
    this._siteLocal = config.siteLocal;
    this._syslog.internalValue = config.syslog;
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

  // site_local - computed: false, optional: true, required: false
  private _siteLocal?: boolean | cdktf.IResolvable; 
  public get siteLocal() {
    return this.getBooleanAttribute('site_local');
  }
  public set siteLocal(value: boolean | cdktf.IResolvable) {
    this._siteLocal = value;
  }
  public resetSiteLocal() {
    this._siteLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInput() {
    return this._siteLocal;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog = new LogReceiverSyslogOutputReference(this, "syslog");
  public get syslog() {
    return this._syslog;
  }
  public putSyslog(value: LogReceiverSyslog) {
    this._syslog.internalValue = value;
  }
  public resetSyslog() {
    this._syslog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog.internalValue;
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
      site_local: cdktf.booleanToTerraform(this._siteLocal),
      syslog: logReceiverSyslogToTerraform(this._syslog.internalValue),
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
      site_local: {
        value: cdktf.booleanToHclTerraform(this._siteLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      syslog: {
        value: logReceiverSyslogToHclTerraform(this._syslog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogReceiverSyslogList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
