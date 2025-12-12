// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogReceiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#annotations LogReceiver#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#description LogReceiver#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#disable LogReceiver#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#id LogReceiver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#labels LogReceiver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#name LogReceiver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#namespace LogReceiver#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#site_local LogReceiver#site_local}
  */
  readonly siteLocal?: boolean | cdktf.IResolvable;
  /**
  * data_dog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#data_dog LogReceiver#data_dog}
  */
  readonly dataDog?: LogReceiverDataDog;
  /**
  * log_receiver_sites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#log_receiver_sites LogReceiver#log_receiver_sites}
  */
  readonly logReceiverSites?: LogReceiverLogReceiverSites;
  /**
  * splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#splunk LogReceiver#splunk}
  */
  readonly splunk?: LogReceiverSplunk;
  /**
  * syslog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#syslog LogReceiver#syslog}
  */
  readonly syslog?: LogReceiverSyslog;
}
export interface LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#decryption_provider LogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#store_provider LogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function logReceiverDataDogDatadogApiKeyBlindfoldSecretInfoToTerraform(struct?: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoOutputReference | LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfo): any {
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


export function logReceiverDataDogDatadogApiKeyBlindfoldSecretInfoToHclTerraform(struct?: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoOutputReference | LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfo): any {
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

export class LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfo | undefined) {
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
export interface LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#decryption_provider LogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#store_provider LogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function logReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternalToTerraform(struct?: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternalOutputReference | LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternal): any {
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


export function logReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternalOutputReference | LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternal): any {
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

export class LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface LogReceiverDataDogDatadogApiKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#provider LogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#url LogReceiver#url}
  */
  readonly url: string;
}

export function logReceiverDataDogDatadogApiKeyClearSecretInfoToTerraform(struct?: LogReceiverDataDogDatadogApiKeyClearSecretInfoOutputReference | LogReceiverDataDogDatadogApiKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function logReceiverDataDogDatadogApiKeyClearSecretInfoToHclTerraform(struct?: LogReceiverDataDogDatadogApiKeyClearSecretInfoOutputReference | LogReceiverDataDogDatadogApiKeyClearSecretInfo): any {
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

export class LogReceiverDataDogDatadogApiKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverDataDogDatadogApiKeyClearSecretInfo | undefined {
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

  public set internalValue(value: LogReceiverDataDogDatadogApiKeyClearSecretInfo | undefined) {
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
export interface LogReceiverDataDogDatadogApiKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#key LogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#provider LogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#secret_encoding LogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#version LogReceiver#version}
  */
  readonly version?: number;
}

export function logReceiverDataDogDatadogApiKeyVaultSecretInfoToTerraform(struct?: LogReceiverDataDogDatadogApiKeyVaultSecretInfoOutputReference | LogReceiverDataDogDatadogApiKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function logReceiverDataDogDatadogApiKeyVaultSecretInfoToHclTerraform(struct?: LogReceiverDataDogDatadogApiKeyVaultSecretInfoOutputReference | LogReceiverDataDogDatadogApiKeyVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverDataDogDatadogApiKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverDataDogDatadogApiKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverDataDogDatadogApiKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface LogReceiverDataDogDatadogApiKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#name LogReceiver#name}
  */
  readonly name: string;
}

export function logReceiverDataDogDatadogApiKeyWingmanSecretInfoToTerraform(struct?: LogReceiverDataDogDatadogApiKeyWingmanSecretInfoOutputReference | LogReceiverDataDogDatadogApiKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logReceiverDataDogDatadogApiKeyWingmanSecretInfoToHclTerraform(struct?: LogReceiverDataDogDatadogApiKeyWingmanSecretInfoOutputReference | LogReceiverDataDogDatadogApiKeyWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverDataDogDatadogApiKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverDataDogDatadogApiKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverDataDogDatadogApiKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface LogReceiverDataDogDatadogApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#secret_encoding_type LogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#blindfold_secret_info LogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#blindfold_secret_info_internal LogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#clear_secret_info LogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: LogReceiverDataDogDatadogApiKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#vault_secret_info LogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: LogReceiverDataDogDatadogApiKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#wingman_secret_info LogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: LogReceiverDataDogDatadogApiKeyWingmanSecretInfo;
}

export function logReceiverDataDogDatadogApiKeyToTerraform(struct?: LogReceiverDataDogDatadogApiKeyOutputReference | LogReceiverDataDogDatadogApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: logReceiverDataDogDatadogApiKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: logReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: logReceiverDataDogDatadogApiKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: logReceiverDataDogDatadogApiKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: logReceiverDataDogDatadogApiKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function logReceiverDataDogDatadogApiKeyToHclTerraform(struct?: LogReceiverDataDogDatadogApiKeyOutputReference | LogReceiverDataDogDatadogApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: logReceiverDataDogDatadogApiKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: logReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: logReceiverDataDogDatadogApiKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverDataDogDatadogApiKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: logReceiverDataDogDatadogApiKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverDataDogDatadogApiKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: logReceiverDataDogDatadogApiKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverDataDogDatadogApiKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverDataDogDatadogApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverDataDogDatadogApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverDataDogDatadogApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: LogReceiverDataDogDatadogApiKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new LogReceiverDataDogDatadogApiKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: LogReceiverDataDogDatadogApiKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new LogReceiverDataDogDatadogApiKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: LogReceiverDataDogDatadogApiKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new LogReceiverDataDogDatadogApiKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: LogReceiverDataDogDatadogApiKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface LogReceiverDataDog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#compression_disabled LogReceiver#compression_disabled}
  */
  readonly compressionDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#compression_enabled LogReceiver#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#datadog_default_server LogReceiver#datadog_default_server}
  */
  readonly datadogDefaultServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#default_port LogReceiver#default_port}
  */
  readonly defaultPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#server_name LogReceiver#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#trusted_ca_url LogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#volterra_ca LogReceiver#volterra_ca}
  */
  readonly volterraCa?: boolean | cdktf.IResolvable;
  /**
  * datadog_api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#datadog_api_key LogReceiver#datadog_api_key}
  */
  readonly datadogApiKey?: LogReceiverDataDogDatadogApiKey;
}

export function logReceiverDataDogToTerraform(struct?: LogReceiverDataDogOutputReference | LogReceiverDataDog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_disabled: cdktf.booleanToTerraform(struct!.compressionDisabled),
    compression_enabled: cdktf.booleanToTerraform(struct!.compressionEnabled),
    datadog_default_server: cdktf.booleanToTerraform(struct!.datadogDefaultServer),
    default_port: cdktf.booleanToTerraform(struct!.defaultPort),
    port: cdktf.numberToTerraform(struct!.port),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    volterra_ca: cdktf.booleanToTerraform(struct!.volterraCa),
    datadog_api_key: logReceiverDataDogDatadogApiKeyToTerraform(struct!.datadogApiKey),
  }
}


export function logReceiverDataDogToHclTerraform(struct?: LogReceiverDataDogOutputReference | LogReceiverDataDog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.compressionDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.compressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    datadog_default_server: {
      value: cdktf.booleanToHclTerraform(struct!.datadogDefaultServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_port: {
      value: cdktf.booleanToHclTerraform(struct!.defaultPort),
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
    datadog_api_key: {
      value: logReceiverDataDogDatadogApiKeyToHclTerraform(struct!.datadogApiKey),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverDataDogDatadogApiKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverDataDogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverDataDog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionDisabled = this._compressionDisabled;
    }
    if (this._compressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionEnabled = this._compressionEnabled;
    }
    if (this._datadogDefaultServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogDefaultServer = this._datadogDefaultServer;
    }
    if (this._defaultPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPort = this._defaultPort;
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
    if (this._datadogApiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadogApiKey = this._datadogApiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverDataDog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressionDisabled = undefined;
      this._compressionEnabled = undefined;
      this._datadogDefaultServer = undefined;
      this._defaultPort = undefined;
      this._port = undefined;
      this._serverName = undefined;
      this._trustedCaUrl = undefined;
      this._volterraCa = undefined;
      this._datadogApiKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressionDisabled = value.compressionDisabled;
      this._compressionEnabled = value.compressionEnabled;
      this._datadogDefaultServer = value.datadogDefaultServer;
      this._defaultPort = value.defaultPort;
      this._port = value.port;
      this._serverName = value.serverName;
      this._trustedCaUrl = value.trustedCaUrl;
      this._volterraCa = value.volterraCa;
      this._datadogApiKey.internalValue = value.datadogApiKey;
    }
  }

  // compression_disabled - computed: false, optional: true, required: false
  private _compressionDisabled?: boolean | cdktf.IResolvable; 
  public get compressionDisabled() {
    return this.getBooleanAttribute('compression_disabled');
  }
  public set compressionDisabled(value: boolean | cdktf.IResolvable) {
    this._compressionDisabled = value;
  }
  public resetCompressionDisabled() {
    this._compressionDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionDisabledInput() {
    return this._compressionDisabled;
  }

  // compression_enabled - computed: false, optional: true, required: false
  private _compressionEnabled?: boolean | cdktf.IResolvable; 
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }
  public set compressionEnabled(value: boolean | cdktf.IResolvable) {
    this._compressionEnabled = value;
  }
  public resetCompressionEnabled() {
    this._compressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionEnabledInput() {
    return this._compressionEnabled;
  }

  // datadog_default_server - computed: false, optional: true, required: false
  private _datadogDefaultServer?: boolean | cdktf.IResolvable; 
  public get datadogDefaultServer() {
    return this.getBooleanAttribute('datadog_default_server');
  }
  public set datadogDefaultServer(value: boolean | cdktf.IResolvable) {
    this._datadogDefaultServer = value;
  }
  public resetDatadogDefaultServer() {
    this._datadogDefaultServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogDefaultServerInput() {
    return this._datadogDefaultServer;
  }

  // default_port - computed: false, optional: true, required: false
  private _defaultPort?: boolean | cdktf.IResolvable; 
  public get defaultPort() {
    return this.getBooleanAttribute('default_port');
  }
  public set defaultPort(value: boolean | cdktf.IResolvable) {
    this._defaultPort = value;
  }
  public resetDefaultPort() {
    this._defaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortInput() {
    return this._defaultPort;
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

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
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

  // datadog_api_key - computed: false, optional: true, required: false
  private _datadogApiKey = new LogReceiverDataDogDatadogApiKeyOutputReference(this, "datadog_api_key");
  public get datadogApiKey() {
    return this._datadogApiKey;
  }
  public putDatadogApiKey(value: LogReceiverDataDogDatadogApiKey) {
    this._datadogApiKey.internalValue = value;
  }
  public resetDatadogApiKey() {
    this._datadogApiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogApiKeyInput() {
    return this._datadogApiKey.internalValue;
  }
}
export interface LogReceiverLogReceiverSitesSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#name LogReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#namespace LogReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#tenant LogReceiver#tenant}
  */
  readonly tenant?: string;
}

export function logReceiverLogReceiverSitesSiteToTerraform(struct?: LogReceiverLogReceiverSitesSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function logReceiverLogReceiverSitesSiteToHclTerraform(struct?: LogReceiverLogReceiverSitesSite | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverLogReceiverSitesSiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogReceiverLogReceiverSitesSite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverLogReceiverSitesSite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class LogReceiverLogReceiverSitesSiteList extends cdktf.ComplexList {
  public internalValue? : LogReceiverLogReceiverSitesSite[] | cdktf.IResolvable

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
  public get(index: number): LogReceiverLogReceiverSitesSiteOutputReference {
    return new LogReceiverLogReceiverSitesSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogReceiverLogReceiverSites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#network LogReceiver#network}
  */
  readonly network: string;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#site LogReceiver#site}
  */
  readonly site: LogReceiverLogReceiverSitesSite[] | cdktf.IResolvable;
}

export function logReceiverLogReceiverSitesToTerraform(struct?: LogReceiverLogReceiverSitesOutputReference | LogReceiverLogReceiverSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    site: cdktf.listMapper(logReceiverLogReceiverSitesSiteToTerraform, true)(struct!.site),
  }
}


export function logReceiverLogReceiverSitesToHclTerraform(struct?: LogReceiverLogReceiverSitesOutputReference | LogReceiverLogReceiverSites): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: cdktf.listMapperHcl(logReceiverLogReceiverSitesSiteToHclTerraform, true)(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverLogReceiverSitesSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverLogReceiverSitesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverLogReceiverSites | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverLogReceiverSites | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._site.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._site.internalValue = value.site;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // site - computed: false, optional: false, required: true
  private _site = new LogReceiverLogReceiverSitesSiteList(this, "site", false);
  public get site() {
    return this._site;
  }
  public putSite(value: LogReceiverLogReceiverSitesSite[] | cdktf.IResolvable) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}
export interface LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#decryption_provider LogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#store_provider LogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function logReceiverSplunkSplunkHecTokenBlindfoldSecretInfoToTerraform(struct?: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoOutputReference | LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfo): any {
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


export function logReceiverSplunkSplunkHecTokenBlindfoldSecretInfoToHclTerraform(struct?: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoOutputReference | LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfo): any {
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

export class LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfo | undefined) {
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
export interface LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#decryption_provider LogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#store_provider LogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function logReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternalToTerraform(struct?: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternalOutputReference | LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternal): any {
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


export function logReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternalToHclTerraform(struct?: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternalOutputReference | LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternal): any {
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

export class LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternal | undefined) {
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
export interface LogReceiverSplunkSplunkHecTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#provider LogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#url LogReceiver#url}
  */
  readonly url: string;
}

export function logReceiverSplunkSplunkHecTokenClearSecretInfoToTerraform(struct?: LogReceiverSplunkSplunkHecTokenClearSecretInfoOutputReference | LogReceiverSplunkSplunkHecTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function logReceiverSplunkSplunkHecTokenClearSecretInfoToHclTerraform(struct?: LogReceiverSplunkSplunkHecTokenClearSecretInfoOutputReference | LogReceiverSplunkSplunkHecTokenClearSecretInfo): any {
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

export class LogReceiverSplunkSplunkHecTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkHecTokenClearSecretInfo | undefined {
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

  public set internalValue(value: LogReceiverSplunkSplunkHecTokenClearSecretInfo | undefined) {
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
export interface LogReceiverSplunkSplunkHecTokenVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#key LogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#provider LogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#secret_encoding LogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#version LogReceiver#version}
  */
  readonly version?: number;
}

export function logReceiverSplunkSplunkHecTokenVaultSecretInfoToTerraform(struct?: LogReceiverSplunkSplunkHecTokenVaultSecretInfoOutputReference | LogReceiverSplunkSplunkHecTokenVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function logReceiverSplunkSplunkHecTokenVaultSecretInfoToHclTerraform(struct?: LogReceiverSplunkSplunkHecTokenVaultSecretInfoOutputReference | LogReceiverSplunkSplunkHecTokenVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkSplunkHecTokenVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkHecTokenVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSplunkSplunkHecTokenVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface LogReceiverSplunkSplunkHecTokenWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#name LogReceiver#name}
  */
  readonly name: string;
}

export function logReceiverSplunkSplunkHecTokenWingmanSecretInfoToTerraform(struct?: LogReceiverSplunkSplunkHecTokenWingmanSecretInfoOutputReference | LogReceiverSplunkSplunkHecTokenWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logReceiverSplunkSplunkHecTokenWingmanSecretInfoToHclTerraform(struct?: LogReceiverSplunkSplunkHecTokenWingmanSecretInfoOutputReference | LogReceiverSplunkSplunkHecTokenWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkSplunkHecTokenWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkHecTokenWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSplunkSplunkHecTokenWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface LogReceiverSplunkSplunkHecToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#secret_encoding_type LogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#blindfold_secret_info LogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#blindfold_secret_info_internal LogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#clear_secret_info LogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: LogReceiverSplunkSplunkHecTokenClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#vault_secret_info LogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: LogReceiverSplunkSplunkHecTokenVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#wingman_secret_info LogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: LogReceiverSplunkSplunkHecTokenWingmanSecretInfo;
}

export function logReceiverSplunkSplunkHecTokenToTerraform(struct?: LogReceiverSplunkSplunkHecTokenOutputReference | LogReceiverSplunkSplunkHecToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: logReceiverSplunkSplunkHecTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: logReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: logReceiverSplunkSplunkHecTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: logReceiverSplunkSplunkHecTokenVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: logReceiverSplunkSplunkHecTokenWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function logReceiverSplunkSplunkHecTokenToHclTerraform(struct?: LogReceiverSplunkSplunkHecTokenOutputReference | LogReceiverSplunkSplunkHecToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: logReceiverSplunkSplunkHecTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: logReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: logReceiverSplunkSplunkHecTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkHecTokenClearSecretInfoList",
    },
    vault_secret_info: {
      value: logReceiverSplunkSplunkHecTokenVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkHecTokenVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: logReceiverSplunkSplunkHecTokenWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkHecTokenWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkSplunkHecTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkHecToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSplunkSplunkHecToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: LogReceiverSplunkSplunkHecTokenBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new LogReceiverSplunkSplunkHecTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: LogReceiverSplunkSplunkHecTokenClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new LogReceiverSplunkSplunkHecTokenVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: LogReceiverSplunkSplunkHecTokenVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new LogReceiverSplunkSplunkHecTokenWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: LogReceiverSplunkSplunkHecTokenWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface LogReceiverSplunkSplunkServerIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#ip_address LogReceiver#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port: number;
}

export function logReceiverSplunkSplunkServerIpToTerraform(struct?: LogReceiverSplunkSplunkServerIpOutputReference | LogReceiverSplunkSplunkServerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function logReceiverSplunkSplunkServerIpToHclTerraform(struct?: LogReceiverSplunkSplunkServerIpOutputReference | LogReceiverSplunkSplunkServerIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkSplunkServerIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSplunkSplunkServerIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipAddress = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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
}
export interface LogReceiverSplunkSplunkServerName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#server_name LogReceiver#server_name}
  */
  readonly serverName: string;
}

export function logReceiverSplunkSplunkServerNameToTerraform(struct?: LogReceiverSplunkSplunkServerNameOutputReference | LogReceiverSplunkSplunkServerName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function logReceiverSplunkSplunkServerNameToHclTerraform(struct?: LogReceiverSplunkSplunkServerNameOutputReference | LogReceiverSplunkSplunkServerName): any {
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

export class LogReceiverSplunkSplunkServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerName | undefined {
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

  public set internalValue(value: LogReceiverSplunkSplunkServerName | undefined) {
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
export interface LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#decryption_provider LogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#store_provider LogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
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


export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfo): any {
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

export class LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfo | undefined) {
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
export interface LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#decryption_provider LogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#store_provider LogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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


export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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

export class LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#provider LogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#url LogReceiver#url}
  */
  readonly url: string;
}

export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfoOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfo): any {
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

export class LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfo | undefined {
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

  public set internalValue(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfo | undefined) {
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
export interface LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#key LogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#provider LogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#secret_encoding LogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#version LogReceiver#version}
  */
  readonly version?: number;
}

export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#name LogReceiver#name}
  */
  readonly name: string;
}

export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#secret_encoding_type LogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#blindfold_secret_info LogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#blindfold_secret_info_internal LogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#clear_secret_info LogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#vault_secret_info LogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#wingman_secret_info LogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfo;
}

export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlToTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlToHclTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface LogReceiverSplunkSplunkServerTlsMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#certificate LogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#key_url LogReceiver#key_url}
  */
  readonly keyUrl?: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrl;
}

export function logReceiverSplunkSplunkServerTlsMtlsEnableToTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    key_url: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function logReceiverSplunkSplunkServerTlsMtlsEnableToHclTerraform(struct?: LogReceiverSplunkSplunkServerTlsMtlsEnableOutputReference | LogReceiverSplunkSplunkServerTlsMtlsEnable): any {
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
      value: logReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkSplunkServerTlsMtlsEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerTlsMtlsEnable | undefined {
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

  public set internalValue(value: LogReceiverSplunkSplunkServerTlsMtlsEnable | undefined) {
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
  private _keyUrl = new LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: LogReceiverSplunkSplunkServerTlsMtlsEnableKeyUrl) {
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
export interface LogReceiverSplunkSplunkServerTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#default_https_port LogReceiver#default_https_port}
  */
  readonly defaultHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#default_syslog_tls_port LogReceiver#default_syslog_tls_port}
  */
  readonly defaultSyslogTlsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#mtls_disabled LogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#server_name LogReceiver#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#trusted_ca_url LogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#volterra_ca LogReceiver#volterra_ca}
  */
  readonly volterraCa?: boolean | cdktf.IResolvable;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#mtls_enable LogReceiver#mtls_enable}
  */
  readonly mtlsEnable?: LogReceiverSplunkSplunkServerTlsMtlsEnable;
}

export function logReceiverSplunkSplunkServerTlsToTerraform(struct?: LogReceiverSplunkSplunkServerTlsOutputReference | LogReceiverSplunkSplunkServerTls): any {
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
    mtls_enable: logReceiverSplunkSplunkServerTlsMtlsEnableToTerraform(struct!.mtlsEnable),
  }
}


export function logReceiverSplunkSplunkServerTlsToHclTerraform(struct?: LogReceiverSplunkSplunkServerTlsOutputReference | LogReceiverSplunkSplunkServerTls): any {
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
      value: logReceiverSplunkSplunkServerTlsMtlsEnableToHclTerraform(struct!.mtlsEnable),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerTlsMtlsEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkSplunkServerTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunkSplunkServerTls | undefined {
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

  public set internalValue(value: LogReceiverSplunkSplunkServerTls | undefined) {
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
  private _mtlsEnable = new LogReceiverSplunkSplunkServerTlsMtlsEnableOutputReference(this, "mtls_enable");
  public get mtlsEnable() {
    return this._mtlsEnable;
  }
  public putMtlsEnable(value: LogReceiverSplunkSplunkServerTlsMtlsEnable) {
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
export interface LogReceiverSplunk {
  /**
  * splunk_hec_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#splunk_hec_token LogReceiver#splunk_hec_token}
  */
  readonly splunkHecToken?: LogReceiverSplunkSplunkHecToken;
  /**
  * splunk_server_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#splunk_server_ip LogReceiver#splunk_server_ip}
  */
  readonly splunkServerIp?: LogReceiverSplunkSplunkServerIp;
  /**
  * splunk_server_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#splunk_server_name LogReceiver#splunk_server_name}
  */
  readonly splunkServerName?: LogReceiverSplunkSplunkServerName;
  /**
  * splunk_server_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#splunk_server_tls LogReceiver#splunk_server_tls}
  */
  readonly splunkServerTls?: LogReceiverSplunkSplunkServerTls;
}

export function logReceiverSplunkToTerraform(struct?: LogReceiverSplunkOutputReference | LogReceiverSplunk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    splunk_hec_token: logReceiverSplunkSplunkHecTokenToTerraform(struct!.splunkHecToken),
    splunk_server_ip: logReceiverSplunkSplunkServerIpToTerraform(struct!.splunkServerIp),
    splunk_server_name: logReceiverSplunkSplunkServerNameToTerraform(struct!.splunkServerName),
    splunk_server_tls: logReceiverSplunkSplunkServerTlsToTerraform(struct!.splunkServerTls),
  }
}


export function logReceiverSplunkToHclTerraform(struct?: LogReceiverSplunkOutputReference | LogReceiverSplunk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    splunk_hec_token: {
      value: logReceiverSplunkSplunkHecTokenToHclTerraform(struct!.splunkHecToken),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkHecTokenList",
    },
    splunk_server_ip: {
      value: logReceiverSplunkSplunkServerIpToHclTerraform(struct!.splunkServerIp),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerIpList",
    },
    splunk_server_name: {
      value: logReceiverSplunkSplunkServerNameToHclTerraform(struct!.splunkServerName),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerNameList",
    },
    splunk_server_tls: {
      value: logReceiverSplunkSplunkServerTlsToHclTerraform(struct!.splunkServerTls),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSplunkSplunkServerTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSplunkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSplunk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splunkHecToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkHecToken = this._splunkHecToken?.internalValue;
    }
    if (this._splunkServerIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkServerIp = this._splunkServerIp?.internalValue;
    }
    if (this._splunkServerName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkServerName = this._splunkServerName?.internalValue;
    }
    if (this._splunkServerTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkServerTls = this._splunkServerTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSplunk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splunkHecToken.internalValue = undefined;
      this._splunkServerIp.internalValue = undefined;
      this._splunkServerName.internalValue = undefined;
      this._splunkServerTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splunkHecToken.internalValue = value.splunkHecToken;
      this._splunkServerIp.internalValue = value.splunkServerIp;
      this._splunkServerName.internalValue = value.splunkServerName;
      this._splunkServerTls.internalValue = value.splunkServerTls;
    }
  }

  // splunk_hec_token - computed: false, optional: true, required: false
  private _splunkHecToken = new LogReceiverSplunkSplunkHecTokenOutputReference(this, "splunk_hec_token");
  public get splunkHecToken() {
    return this._splunkHecToken;
  }
  public putSplunkHecToken(value: LogReceiverSplunkSplunkHecToken) {
    this._splunkHecToken.internalValue = value;
  }
  public resetSplunkHecToken() {
    this._splunkHecToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkHecTokenInput() {
    return this._splunkHecToken.internalValue;
  }

  // splunk_server_ip - computed: false, optional: true, required: false
  private _splunkServerIp = new LogReceiverSplunkSplunkServerIpOutputReference(this, "splunk_server_ip");
  public get splunkServerIp() {
    return this._splunkServerIp;
  }
  public putSplunkServerIp(value: LogReceiverSplunkSplunkServerIp) {
    this._splunkServerIp.internalValue = value;
  }
  public resetSplunkServerIp() {
    this._splunkServerIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkServerIpInput() {
    return this._splunkServerIp.internalValue;
  }

  // splunk_server_name - computed: false, optional: true, required: false
  private _splunkServerName = new LogReceiverSplunkSplunkServerNameOutputReference(this, "splunk_server_name");
  public get splunkServerName() {
    return this._splunkServerName;
  }
  public putSplunkServerName(value: LogReceiverSplunkSplunkServerName) {
    this._splunkServerName.internalValue = value;
  }
  public resetSplunkServerName() {
    this._splunkServerName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkServerNameInput() {
    return this._splunkServerName.internalValue;
  }

  // splunk_server_tls - computed: false, optional: true, required: false
  private _splunkServerTls = new LogReceiverSplunkSplunkServerTlsOutputReference(this, "splunk_server_tls");
  public get splunkServerTls() {
    return this._splunkServerTls;
  }
  public putSplunkServerTls(value: LogReceiverSplunkSplunkServerTls) {
    this._splunkServerTls.internalValue = value;
  }
  public resetSplunkServerTls() {
    this._splunkServerTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkServerTlsInput() {
    return this._splunkServerTls.internalValue;
  }
}
export interface LogReceiverSyslogTcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#server_name LogReceiver#server_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#decryption_provider LogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#store_provider LogReceiver#store_provider}
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
export interface LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#decryption_provider LogReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#store_provider LogReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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


export function logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternal): any {
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

export class LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#provider LogReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#url LogReceiver#url}
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
export interface LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#key LogReceiver#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#location LogReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#provider LogReceiver#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#secret_encoding LogReceiver#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#version LogReceiver#version}
  */
  readonly version?: number;
}

export function logReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfoOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function logReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfoOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
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

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#name LogReceiver#name}
  */
  readonly name: string;
}

export function logReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfoOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfoOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface LogReceiverSyslogTlsServerMtlsEnableKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#secret_encoding_type LogReceiver#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#blindfold_secret_info LogReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#blindfold_secret_info_internal LogReceiver#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#clear_secret_info LogReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#vault_secret_info LogReceiver#vault_secret_info}
  */
  readonly vaultSecretInfo?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#wingman_secret_info LogReceiver#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfo;
}

export function logReceiverSyslogTlsServerMtlsEnableKeyUrlToTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: logReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: logReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: logReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function logReceiverSyslogTlsServerMtlsEnableKeyUrlToHclTerraform(struct?: LogReceiverSyslogTlsServerMtlsEnableKeyUrlOutputReference | LogReceiverSyslogTlsServerMtlsEnableKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: logReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: logReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerMtlsEnableKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: logReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: logReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfoList",
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
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
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

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
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

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: LogReceiverSyslogTlsServerMtlsEnableKeyUrlWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface LogReceiverSyslogTlsServerMtlsEnable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#certificate LogReceiver#certificate}
  */
  readonly certificate?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#key_url LogReceiver#key_url}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#default_https_port LogReceiver#default_https_port}
  */
  readonly defaultHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#default_syslog_tls_port LogReceiver#default_syslog_tls_port}
  */
  readonly defaultSyslogTlsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#mtls_disabled LogReceiver#mtls_disabled}
  */
  readonly mtlsDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#server_name LogReceiver#server_name}
  */
  readonly serverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#trusted_ca_url LogReceiver#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#volterra_ca LogReceiver#volterra_ca}
  */
  readonly volterraCa?: boolean | cdktf.IResolvable;
  /**
  * mtls_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#mtls_enable LogReceiver#mtls_enable}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#port LogReceiver#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#server_name LogReceiver#server_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#syslog_rfc3164 LogReceiver#syslog_rfc3164}
  */
  readonly syslogRfc3164?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#syslog_rfc5424 LogReceiver#syslog_rfc5424}
  */
  readonly syslogRfc5424?: number;
  /**
  * tcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#tcp_server LogReceiver#tcp_server}
  */
  readonly tcpServer?: LogReceiverSyslogTcpServer;
  /**
  * tls_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#tls_server LogReceiver#tls_server}
  */
  readonly tlsServer?: LogReceiverSyslogTlsServer;
  /**
  * udp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#udp_server LogReceiver#udp_server}
  */
  readonly udpServer?: LogReceiverSyslogUdpServer;
}

export function logReceiverSyslogToTerraform(struct?: LogReceiverSyslogOutputReference | LogReceiverSyslog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syslog_rfc3164: cdktf.numberToTerraform(struct!.syslogRfc3164),
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
    syslog_rfc3164: {
      value: cdktf.numberToHclTerraform(struct!.syslogRfc3164),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    if (this._syslogRfc3164 !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogRfc3164 = this._syslogRfc3164;
    }
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
      this._syslogRfc3164 = undefined;
      this._syslogRfc5424 = undefined;
      this._tcpServer.internalValue = undefined;
      this._tlsServer.internalValue = undefined;
      this._udpServer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syslogRfc3164 = value.syslogRfc3164;
      this._syslogRfc5424 = value.syslogRfc5424;
      this._tcpServer.internalValue = value.tcpServer;
      this._tlsServer.internalValue = value.tlsServer;
      this._udpServer.internalValue = value.udpServer;
    }
  }

  // syslog_rfc3164 - computed: false, optional: true, required: false
  private _syslogRfc3164?: number; 
  public get syslogRfc3164() {
    return this.getNumberAttribute('syslog_rfc3164');
  }
  public set syslogRfc3164(value: number) {
    this._syslogRfc3164 = value;
  }
  public resetSyslogRfc3164() {
    this._syslogRfc3164 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogRfc3164Input() {
    return this._syslogRfc3164;
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
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver volterra_log_receiver}
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
  * @param importFromId The id of the existing LogReceiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogReceiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_log_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/log_receiver volterra_log_receiver} Resource
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
    this._siteLocal = config.siteLocal;
    this._dataDog.internalValue = config.dataDog;
    this._logReceiverSites.internalValue = config.logReceiverSites;
    this._splunk.internalValue = config.splunk;
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

  // data_dog - computed: false, optional: true, required: false
  private _dataDog = new LogReceiverDataDogOutputReference(this, "data_dog");
  public get dataDog() {
    return this._dataDog;
  }
  public putDataDog(value: LogReceiverDataDog) {
    this._dataDog.internalValue = value;
  }
  public resetDataDog() {
    this._dataDog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDogInput() {
    return this._dataDog.internalValue;
  }

  // log_receiver_sites - computed: false, optional: true, required: false
  private _logReceiverSites = new LogReceiverLogReceiverSitesOutputReference(this, "log_receiver_sites");
  public get logReceiverSites() {
    return this._logReceiverSites;
  }
  public putLogReceiverSites(value: LogReceiverLogReceiverSites) {
    this._logReceiverSites.internalValue = value;
  }
  public resetLogReceiverSites() {
    this._logReceiverSites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReceiverSitesInput() {
    return this._logReceiverSites.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new LogReceiverSplunkOutputReference(this, "splunk");
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: LogReceiverSplunk) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
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
      data_dog: logReceiverDataDogToTerraform(this._dataDog.internalValue),
      log_receiver_sites: logReceiverLogReceiverSitesToTerraform(this._logReceiverSites.internalValue),
      splunk: logReceiverSplunkToTerraform(this._splunk.internalValue),
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
      data_dog: {
        value: logReceiverDataDogToHclTerraform(this._dataDog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogReceiverDataDogList",
      },
      log_receiver_sites: {
        value: logReceiverLogReceiverSitesToHclTerraform(this._logReceiverSites.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogReceiverLogReceiverSitesList",
      },
      splunk: {
        value: logReceiverSplunkToHclTerraform(this._splunk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogReceiverSplunkList",
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
