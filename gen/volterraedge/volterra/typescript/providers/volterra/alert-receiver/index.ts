// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertReceiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#annotations AlertReceiver#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#description AlertReceiver#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#disable AlertReceiver#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#id AlertReceiver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#labels AlertReceiver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#name AlertReceiver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#namespace AlertReceiver#namespace}
  */
  readonly namespace: string;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#email AlertReceiver#email}
  */
  readonly email?: AlertReceiverEmail;
  /**
  * opsgenie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#opsgenie AlertReceiver#opsgenie}
  */
  readonly opsgenie?: AlertReceiverOpsgenie;
  /**
  * pagerduty block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#pagerduty AlertReceiver#pagerduty}
  */
  readonly pagerduty?: AlertReceiverPagerduty;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#slack AlertReceiver#slack}
  */
  readonly slack?: AlertReceiverSlack;
  /**
  * sms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#sms AlertReceiver#sms}
  */
  readonly sms?: AlertReceiverSms;
  /**
  * webhook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#webhook AlertReceiver#webhook}
  */
  readonly webhook?: AlertReceiverWebhook;
}
export interface AlertReceiverEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#email AlertReceiver#email}
  */
  readonly email?: string;
}

export function alertReceiverEmailToTerraform(struct?: AlertReceiverEmailOutputReference | AlertReceiverEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function alertReceiverEmailToHclTerraform(struct?: AlertReceiverEmailOutputReference | AlertReceiverEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}
export interface AlertReceiverOpsgenieApiKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#decryption_provider AlertReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#location AlertReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#store_provider AlertReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function alertReceiverOpsgenieApiKeyBlindfoldSecretInfoToTerraform(struct?: AlertReceiverOpsgenieApiKeyBlindfoldSecretInfoOutputReference | AlertReceiverOpsgenieApiKeyBlindfoldSecretInfo): any {
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


export function alertReceiverOpsgenieApiKeyBlindfoldSecretInfoToHclTerraform(struct?: AlertReceiverOpsgenieApiKeyBlindfoldSecretInfoOutputReference | AlertReceiverOpsgenieApiKeyBlindfoldSecretInfo): any {
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

export class AlertReceiverOpsgenieApiKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverOpsgenieApiKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverOpsgenieApiKeyBlindfoldSecretInfo | undefined) {
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
export interface AlertReceiverOpsgenieApiKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#provider AlertReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: string;
}

export function alertReceiverOpsgenieApiKeyClearSecretInfoToTerraform(struct?: AlertReceiverOpsgenieApiKeyClearSecretInfoOutputReference | AlertReceiverOpsgenieApiKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertReceiverOpsgenieApiKeyClearSecretInfoToHclTerraform(struct?: AlertReceiverOpsgenieApiKeyClearSecretInfoOutputReference | AlertReceiverOpsgenieApiKeyClearSecretInfo): any {
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

export class AlertReceiverOpsgenieApiKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverOpsgenieApiKeyClearSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverOpsgenieApiKeyClearSecretInfo | undefined) {
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
export interface AlertReceiverOpsgenieApiKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#blindfold_secret_info AlertReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AlertReceiverOpsgenieApiKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#clear_secret_info AlertReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: AlertReceiverOpsgenieApiKeyClearSecretInfo;
}

export function alertReceiverOpsgenieApiKeyToTerraform(struct?: AlertReceiverOpsgenieApiKeyOutputReference | AlertReceiverOpsgenieApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: alertReceiverOpsgenieApiKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: alertReceiverOpsgenieApiKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function alertReceiverOpsgenieApiKeyToHclTerraform(struct?: AlertReceiverOpsgenieApiKeyOutputReference | AlertReceiverOpsgenieApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: alertReceiverOpsgenieApiKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverOpsgenieApiKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: alertReceiverOpsgenieApiKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverOpsgenieApiKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverOpsgenieApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverOpsgenieApiKey | undefined {
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

  public set internalValue(value: AlertReceiverOpsgenieApiKey | undefined) {
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
  private _blindfoldSecretInfo = new AlertReceiverOpsgenieApiKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AlertReceiverOpsgenieApiKeyBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new AlertReceiverOpsgenieApiKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AlertReceiverOpsgenieApiKeyClearSecretInfo) {
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
export interface AlertReceiverOpsgenie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: string;
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#api_key AlertReceiver#api_key}
  */
  readonly apiKey: AlertReceiverOpsgenieApiKey;
}

export function alertReceiverOpsgenieToTerraform(struct?: AlertReceiverOpsgenieOutputReference | AlertReceiverOpsgenie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    api_key: alertReceiverOpsgenieApiKeyToTerraform(struct!.apiKey),
  }
}


export function alertReceiverOpsgenieToHclTerraform(struct?: AlertReceiverOpsgenieOutputReference | AlertReceiverOpsgenie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key: {
      value: alertReceiverOpsgenieApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverOpsgenieApiKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverOpsgenieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverOpsgenie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverOpsgenie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._apiKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._apiKey.internalValue = value.apiKey;
    }
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

  // api_key - computed: false, optional: false, required: true
  private _apiKey = new AlertReceiverOpsgenieApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: AlertReceiverOpsgenieApiKey) {
    this._apiKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#decryption_provider AlertReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#location AlertReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#store_provider AlertReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function alertReceiverPagerdutyRoutingKeyBlindfoldSecretInfoToTerraform(struct?: AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfoOutputReference | AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfo): any {
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


export function alertReceiverPagerdutyRoutingKeyBlindfoldSecretInfoToHclTerraform(struct?: AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfoOutputReference | AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfo): any {
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

export class AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfo | undefined) {
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
export interface AlertReceiverPagerdutyRoutingKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#provider AlertReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: string;
}

export function alertReceiverPagerdutyRoutingKeyClearSecretInfoToTerraform(struct?: AlertReceiverPagerdutyRoutingKeyClearSecretInfoOutputReference | AlertReceiverPagerdutyRoutingKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertReceiverPagerdutyRoutingKeyClearSecretInfoToHclTerraform(struct?: AlertReceiverPagerdutyRoutingKeyClearSecretInfoOutputReference | AlertReceiverPagerdutyRoutingKeyClearSecretInfo): any {
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

export class AlertReceiverPagerdutyRoutingKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverPagerdutyRoutingKeyClearSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverPagerdutyRoutingKeyClearSecretInfo | undefined) {
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
export interface AlertReceiverPagerdutyRoutingKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#blindfold_secret_info AlertReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#clear_secret_info AlertReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: AlertReceiverPagerdutyRoutingKeyClearSecretInfo;
}

export function alertReceiverPagerdutyRoutingKeyToTerraform(struct?: AlertReceiverPagerdutyRoutingKeyOutputReference | AlertReceiverPagerdutyRoutingKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: alertReceiverPagerdutyRoutingKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: alertReceiverPagerdutyRoutingKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function alertReceiverPagerdutyRoutingKeyToHclTerraform(struct?: AlertReceiverPagerdutyRoutingKeyOutputReference | AlertReceiverPagerdutyRoutingKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: alertReceiverPagerdutyRoutingKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: alertReceiverPagerdutyRoutingKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverPagerdutyRoutingKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverPagerdutyRoutingKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverPagerdutyRoutingKey | undefined {
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

  public set internalValue(value: AlertReceiverPagerdutyRoutingKey | undefined) {
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
  private _blindfoldSecretInfo = new AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AlertReceiverPagerdutyRoutingKeyBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new AlertReceiverPagerdutyRoutingKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AlertReceiverPagerdutyRoutingKeyClearSecretInfo) {
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
export interface AlertReceiverPagerduty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: string;
  /**
  * routing_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#routing_key AlertReceiver#routing_key}
  */
  readonly routingKey: AlertReceiverPagerdutyRoutingKey;
}

export function alertReceiverPagerdutyToTerraform(struct?: AlertReceiverPagerdutyOutputReference | AlertReceiverPagerduty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    routing_key: alertReceiverPagerdutyRoutingKeyToTerraform(struct!.routingKey),
  }
}


export function alertReceiverPagerdutyToHclTerraform(struct?: AlertReceiverPagerdutyOutputReference | AlertReceiverPagerduty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_key: {
      value: alertReceiverPagerdutyRoutingKeyToHclTerraform(struct!.routingKey),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverPagerdutyRoutingKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverPagerdutyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverPagerduty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._routingKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingKey = this._routingKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverPagerduty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._routingKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._routingKey.internalValue = value.routingKey;
    }
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

  // routing_key - computed: false, optional: false, required: true
  private _routingKey = new AlertReceiverPagerdutyRoutingKeyOutputReference(this, "routing_key");
  public get routingKey() {
    return this._routingKey;
  }
  public putRoutingKey(value: AlertReceiverPagerdutyRoutingKey) {
    this._routingKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingKeyInput() {
    return this._routingKey.internalValue;
  }
}
export interface AlertReceiverSlackUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#decryption_provider AlertReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#location AlertReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#store_provider AlertReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function alertReceiverSlackUrlBlindfoldSecretInfoToTerraform(struct?: AlertReceiverSlackUrlBlindfoldSecretInfoOutputReference | AlertReceiverSlackUrlBlindfoldSecretInfo): any {
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


export function alertReceiverSlackUrlBlindfoldSecretInfoToHclTerraform(struct?: AlertReceiverSlackUrlBlindfoldSecretInfoOutputReference | AlertReceiverSlackUrlBlindfoldSecretInfo): any {
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

export class AlertReceiverSlackUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverSlackUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverSlackUrlBlindfoldSecretInfo | undefined) {
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
export interface AlertReceiverSlackUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#provider AlertReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: string;
}

export function alertReceiverSlackUrlClearSecretInfoToTerraform(struct?: AlertReceiverSlackUrlClearSecretInfoOutputReference | AlertReceiverSlackUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertReceiverSlackUrlClearSecretInfoToHclTerraform(struct?: AlertReceiverSlackUrlClearSecretInfoOutputReference | AlertReceiverSlackUrlClearSecretInfo): any {
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

export class AlertReceiverSlackUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverSlackUrlClearSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverSlackUrlClearSecretInfo | undefined) {
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
export interface AlertReceiverSlackUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#blindfold_secret_info AlertReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AlertReceiverSlackUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#clear_secret_info AlertReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: AlertReceiverSlackUrlClearSecretInfo;
}

export function alertReceiverSlackUrlToTerraform(struct?: AlertReceiverSlackUrlOutputReference | AlertReceiverSlackUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: alertReceiverSlackUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: alertReceiverSlackUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function alertReceiverSlackUrlToHclTerraform(struct?: AlertReceiverSlackUrlOutputReference | AlertReceiverSlackUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: alertReceiverSlackUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverSlackUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: alertReceiverSlackUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverSlackUrlClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverSlackUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverSlackUrl | undefined {
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

  public set internalValue(value: AlertReceiverSlackUrl | undefined) {
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
  private _blindfoldSecretInfo = new AlertReceiverSlackUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AlertReceiverSlackUrlBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new AlertReceiverSlackUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AlertReceiverSlackUrlClearSecretInfo) {
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
export interface AlertReceiverSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#channel AlertReceiver#channel}
  */
  readonly channel: string;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: AlertReceiverSlackUrl;
}

export function alertReceiverSlackToTerraform(struct?: AlertReceiverSlackOutputReference | AlertReceiverSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    url: alertReceiverSlackUrlToTerraform(struct!.url),
  }
}


export function alertReceiverSlackToHclTerraform(struct?: AlertReceiverSlackOutputReference | AlertReceiverSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: alertReceiverSlackUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverSlackUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
      this._url.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
      this._url.internalValue = value.url;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // url - computed: false, optional: false, required: true
  private _url = new AlertReceiverSlackUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: AlertReceiverSlackUrl) {
    this._url.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}
export interface AlertReceiverSms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#contact_number AlertReceiver#contact_number}
  */
  readonly contactNumber?: string;
}

export function alertReceiverSmsToTerraform(struct?: AlertReceiverSmsOutputReference | AlertReceiverSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_number: cdktf.stringToTerraform(struct!.contactNumber),
  }
}


export function alertReceiverSmsToHclTerraform(struct?: AlertReceiverSmsOutputReference | AlertReceiverSms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_number: {
      value: cdktf.stringToHclTerraform(struct!.contactNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverSmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverSms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactNumber = this._contactNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverSms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contactNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contactNumber = value.contactNumber;
    }
  }

  // contact_number - computed: false, optional: true, required: false
  private _contactNumber?: string; 
  public get contactNumber() {
    return this.getStringAttribute('contact_number');
  }
  public set contactNumber(value: string) {
    this._contactNumber = value;
  }
  public resetContactNumber() {
    this._contactNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactNumberInput() {
    return this._contactNumber;
  }
}
export interface AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#decryption_provider AlertReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#location AlertReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#store_provider AlertReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function alertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfoToTerraform(struct?: AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfoOutputReference | AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfo): any {
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


export function alertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfoToHclTerraform(struct?: AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfoOutputReference | AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfo): any {
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

export class AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfo | undefined) {
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
export interface AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#provider AlertReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: string;
}

export function alertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfoToTerraform(struct?: AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfoOutputReference | AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfoToHclTerraform(struct?: AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfoOutputReference | AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfo): any {
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

export class AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfo | undefined) {
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
export interface AlertReceiverWebhookHttpConfigAuthTokenToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#blindfold_secret_info AlertReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#clear_secret_info AlertReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfo;
}

export function alertReceiverWebhookHttpConfigAuthTokenTokenToTerraform(struct?: AlertReceiverWebhookHttpConfigAuthTokenTokenOutputReference | AlertReceiverWebhookHttpConfigAuthTokenToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: alertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: alertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function alertReceiverWebhookHttpConfigAuthTokenTokenToHclTerraform(struct?: AlertReceiverWebhookHttpConfigAuthTokenTokenOutputReference | AlertReceiverWebhookHttpConfigAuthTokenToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: alertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: alertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookHttpConfigAuthTokenTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigAuthTokenToken | undefined {
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

  public set internalValue(value: AlertReceiverWebhookHttpConfigAuthTokenToken | undefined) {
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
  private _blindfoldSecretInfo = new AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AlertReceiverWebhookHttpConfigAuthTokenTokenBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AlertReceiverWebhookHttpConfigAuthTokenTokenClearSecretInfo) {
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
export interface AlertReceiverWebhookHttpConfigAuthToken {
  /**
  * token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#token AlertReceiver#token}
  */
  readonly token: AlertReceiverWebhookHttpConfigAuthTokenToken;
}

export function alertReceiverWebhookHttpConfigAuthTokenToTerraform(struct?: AlertReceiverWebhookHttpConfigAuthTokenOutputReference | AlertReceiverWebhookHttpConfigAuthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: alertReceiverWebhookHttpConfigAuthTokenTokenToTerraform(struct!.token),
  }
}


export function alertReceiverWebhookHttpConfigAuthTokenToHclTerraform(struct?: AlertReceiverWebhookHttpConfigAuthTokenOutputReference | AlertReceiverWebhookHttpConfigAuthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: alertReceiverWebhookHttpConfigAuthTokenTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigAuthTokenTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookHttpConfigAuthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigAuthToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverWebhookHttpConfigAuthToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token.internalValue = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token = new AlertReceiverWebhookHttpConfigAuthTokenTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: AlertReceiverWebhookHttpConfigAuthTokenToken) {
    this._token.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }
}
export interface AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#decryption_provider AlertReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#location AlertReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#store_provider AlertReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function alertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfoToTerraform(struct?: AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfoOutputReference | AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfo): any {
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


export function alertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfoToHclTerraform(struct?: AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfoOutputReference | AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfo): any {
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

export class AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfo | undefined) {
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
export interface AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#provider AlertReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: string;
}

export function alertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfoToTerraform(struct?: AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfoOutputReference | AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfoToHclTerraform(struct?: AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfoOutputReference | AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfo): any {
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

export class AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfo | undefined) {
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
export interface AlertReceiverWebhookHttpConfigBasicAuthPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#blindfold_secret_info AlertReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#clear_secret_info AlertReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfo;
}

export function alertReceiverWebhookHttpConfigBasicAuthPasswordToTerraform(struct?: AlertReceiverWebhookHttpConfigBasicAuthPasswordOutputReference | AlertReceiverWebhookHttpConfigBasicAuthPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: alertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: alertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function alertReceiverWebhookHttpConfigBasicAuthPasswordToHclTerraform(struct?: AlertReceiverWebhookHttpConfigBasicAuthPasswordOutputReference | AlertReceiverWebhookHttpConfigBasicAuthPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: alertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: alertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookHttpConfigBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigBasicAuthPassword | undefined {
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

  public set internalValue(value: AlertReceiverWebhookHttpConfigBasicAuthPassword | undefined) {
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
  private _blindfoldSecretInfo = new AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AlertReceiverWebhookHttpConfigBasicAuthPasswordBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AlertReceiverWebhookHttpConfigBasicAuthPasswordClearSecretInfo) {
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
export interface AlertReceiverWebhookHttpConfigBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#user_name AlertReceiver#user_name}
  */
  readonly userName: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#password AlertReceiver#password}
  */
  readonly password: AlertReceiverWebhookHttpConfigBasicAuthPassword;
}

export function alertReceiverWebhookHttpConfigBasicAuthToTerraform(struct?: AlertReceiverWebhookHttpConfigBasicAuthOutputReference | AlertReceiverWebhookHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    password: alertReceiverWebhookHttpConfigBasicAuthPasswordToTerraform(struct!.password),
  }
}


export function alertReceiverWebhookHttpConfigBasicAuthToHclTerraform(struct?: AlertReceiverWebhookHttpConfigBasicAuthOutputReference | AlertReceiverWebhookHttpConfigBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: alertReceiverWebhookHttpConfigBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigBasicAuthPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookHttpConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverWebhookHttpConfigBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userName = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userName = value.userName;
      this._password.internalValue = value.password;
    }
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // password - computed: false, optional: false, required: true
  private _password = new AlertReceiverWebhookHttpConfigBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: AlertReceiverWebhookHttpConfigBasicAuthPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface AlertReceiverWebhookHttpConfigClientCertObjUseTlsObj {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#name AlertReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#namespace AlertReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#tenant AlertReceiver#tenant}
  */
  readonly tenant?: string;
}

export function alertReceiverWebhookHttpConfigClientCertObjUseTlsObjToTerraform(struct?: AlertReceiverWebhookHttpConfigClientCertObjUseTlsObj | cdktf.IResolvable): any {
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


export function alertReceiverWebhookHttpConfigClientCertObjUseTlsObjToHclTerraform(struct?: AlertReceiverWebhookHttpConfigClientCertObjUseTlsObj | cdktf.IResolvable): any {
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

export class AlertReceiverWebhookHttpConfigClientCertObjUseTlsObjOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertReceiverWebhookHttpConfigClientCertObjUseTlsObj | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertReceiverWebhookHttpConfigClientCertObjUseTlsObj | cdktf.IResolvable | undefined) {
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

export class AlertReceiverWebhookHttpConfigClientCertObjUseTlsObjList extends cdktf.ComplexList {
  public internalValue? : AlertReceiverWebhookHttpConfigClientCertObjUseTlsObj[] | cdktf.IResolvable

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
  public get(index: number): AlertReceiverWebhookHttpConfigClientCertObjUseTlsObjOutputReference {
    return new AlertReceiverWebhookHttpConfigClientCertObjUseTlsObjOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertReceiverWebhookHttpConfigClientCertObj {
  /**
  * use_tls_obj block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#use_tls_obj AlertReceiver#use_tls_obj}
  */
  readonly useTlsObj?: AlertReceiverWebhookHttpConfigClientCertObjUseTlsObj[] | cdktf.IResolvable;
}

export function alertReceiverWebhookHttpConfigClientCertObjToTerraform(struct?: AlertReceiverWebhookHttpConfigClientCertObjOutputReference | AlertReceiverWebhookHttpConfigClientCertObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_tls_obj: cdktf.listMapper(alertReceiverWebhookHttpConfigClientCertObjUseTlsObjToTerraform, true)(struct!.useTlsObj),
  }
}


export function alertReceiverWebhookHttpConfigClientCertObjToHclTerraform(struct?: AlertReceiverWebhookHttpConfigClientCertObjOutputReference | AlertReceiverWebhookHttpConfigClientCertObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_tls_obj: {
      value: cdktf.listMapperHcl(alertReceiverWebhookHttpConfigClientCertObjUseTlsObjToHclTerraform, true)(struct!.useTlsObj),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigClientCertObjUseTlsObjList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookHttpConfigClientCertObjOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigClientCertObj | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useTlsObj?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTlsObj = this._useTlsObj?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverWebhookHttpConfigClientCertObj | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useTlsObj.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useTlsObj.internalValue = value.useTlsObj;
    }
  }

  // use_tls_obj - computed: false, optional: true, required: false
  private _useTlsObj = new AlertReceiverWebhookHttpConfigClientCertObjUseTlsObjList(this, "use_tls_obj", false);
  public get useTlsObj() {
    return this._useTlsObj;
  }
  public putUseTlsObj(value: AlertReceiverWebhookHttpConfigClientCertObjUseTlsObj[] | cdktf.IResolvable) {
    this._useTlsObj.internalValue = value;
  }
  public resetUseTlsObj() {
    this._useTlsObj.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsObjInput() {
    return this._useTlsObj.internalValue;
  }
}
export interface AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#name AlertReceiver#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#namespace AlertReceiver#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#tenant AlertReceiver#tenant}
  */
  readonly tenant?: string;
}

export function alertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaToTerraform(struct?: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCa | cdktf.IResolvable): any {
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


export function alertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaToHclTerraform(struct?: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCa | cdktf.IResolvable): any {
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

export class AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCa | cdktf.IResolvable | undefined) {
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

export class AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaList extends cdktf.ComplexList {
  public internalValue? : AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCa[] | cdktf.IResolvable

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
  public get(index: number): AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaOutputReference {
    return new AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObj {
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#trusted_ca AlertReceiver#trusted_ca}
  */
  readonly trustedCa?: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCa[] | cdktf.IResolvable;
}

export function alertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjToTerraform(struct?: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjOutputReference | AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca: cdktf.listMapper(alertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaToTerraform, true)(struct!.trustedCa),
  }
}


export function alertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjToHclTerraform(struct?: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjOutputReference | AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca: {
      value: cdktf.listMapperHcl(alertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaToHclTerraform, true)(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObj | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObj | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCa.internalValue = value.trustedCa;
    }
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCaList(this, "trusted_ca", false);
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjTrustedCa[] | cdktf.IResolvable) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }
}
export interface AlertReceiverWebhookHttpConfigUseTlsUseServerVerification {
  /**
  * ca_cert_obj block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#ca_cert_obj AlertReceiver#ca_cert_obj}
  */
  readonly caCertObj?: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObj;
}

export function alertReceiverWebhookHttpConfigUseTlsUseServerVerificationToTerraform(struct?: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationOutputReference | AlertReceiverWebhookHttpConfigUseTlsUseServerVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_obj: alertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjToTerraform(struct!.caCertObj),
  }
}


export function alertReceiverWebhookHttpConfigUseTlsUseServerVerificationToHclTerraform(struct?: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationOutputReference | AlertReceiverWebhookHttpConfigUseTlsUseServerVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_obj: {
      value: alertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjToHclTerraform(struct!.caCertObj),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigUseTlsUseServerVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertObj?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertObj = this._caCertObj?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverWebhookHttpConfigUseTlsUseServerVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertObj.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertObj.internalValue = value.caCertObj;
    }
  }

  // ca_cert_obj - computed: false, optional: true, required: false
  private _caCertObj = new AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObjOutputReference(this, "ca_cert_obj");
  public get caCertObj() {
    return this._caCertObj;
  }
  public putCaCertObj(value: AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationCaCertObj) {
    this._caCertObj.internalValue = value;
  }
  public resetCaCertObj() {
    this._caCertObj.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertObjInput() {
    return this._caCertObj.internalValue;
  }
}
export interface AlertReceiverWebhookHttpConfigUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#disable_sni AlertReceiver#disable_sni}
  */
  readonly disableSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#max_version AlertReceiver#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#min_version AlertReceiver#min_version}
  */
  readonly minVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#sni AlertReceiver#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#volterra_trusted_ca AlertReceiver#volterra_trusted_ca}
  */
  readonly volterraTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * use_server_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#use_server_verification AlertReceiver#use_server_verification}
  */
  readonly useServerVerification?: AlertReceiverWebhookHttpConfigUseTlsUseServerVerification;
}

export function alertReceiverWebhookHttpConfigUseTlsToTerraform(struct?: AlertReceiverWebhookHttpConfigUseTlsOutputReference | AlertReceiverWebhookHttpConfigUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_sni: cdktf.booleanToTerraform(struct!.disableSni),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    sni: cdktf.stringToTerraform(struct!.sni),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    use_server_verification: alertReceiverWebhookHttpConfigUseTlsUseServerVerificationToTerraform(struct!.useServerVerification),
  }
}


export function alertReceiverWebhookHttpConfigUseTlsToHclTerraform(struct?: AlertReceiverWebhookHttpConfigUseTlsOutputReference | AlertReceiverWebhookHttpConfigUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_sni: {
      value: cdktf.booleanToHclTerraform(struct!.disableSni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volterra_trusted_ca: {
      value: cdktf.booleanToHclTerraform(struct!.volterraTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_server_verification: {
      value: alertReceiverWebhookHttpConfigUseTlsUseServerVerificationToHclTerraform(struct!.useServerVerification),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookHttpConfigUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfigUseTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSni = this._disableSni;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._volterraTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraTrustedCa = this._volterraTrustedCa;
    }
    if (this._useServerVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServerVerification = this._useServerVerification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverWebhookHttpConfigUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableSni = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._sni = undefined;
      this._volterraTrustedCa = undefined;
      this._useServerVerification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableSni = value.disableSni;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._sni = value.sni;
      this._volterraTrustedCa = value.volterraTrustedCa;
      this._useServerVerification.internalValue = value.useServerVerification;
    }
  }

  // disable_sni - computed: false, optional: true, required: false
  private _disableSni?: boolean | cdktf.IResolvable; 
  public get disableSni() {
    return this.getBooleanAttribute('disable_sni');
  }
  public set disableSni(value: boolean | cdktf.IResolvable) {
    this._disableSni = value;
  }
  public resetDisableSni() {
    this._disableSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSniInput() {
    return this._disableSni;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // volterra_trusted_ca - computed: false, optional: true, required: false
  private _volterraTrustedCa?: boolean | cdktf.IResolvable; 
  public get volterraTrustedCa() {
    return this.getBooleanAttribute('volterra_trusted_ca');
  }
  public set volterraTrustedCa(value: boolean | cdktf.IResolvable) {
    this._volterraTrustedCa = value;
  }
  public resetVolterraTrustedCa() {
    this._volterraTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraTrustedCaInput() {
    return this._volterraTrustedCa;
  }

  // use_server_verification - computed: false, optional: true, required: false
  private _useServerVerification = new AlertReceiverWebhookHttpConfigUseTlsUseServerVerificationOutputReference(this, "use_server_verification");
  public get useServerVerification() {
    return this._useServerVerification;
  }
  public putUseServerVerification(value: AlertReceiverWebhookHttpConfigUseTlsUseServerVerification) {
    this._useServerVerification.internalValue = value;
  }
  public resetUseServerVerification() {
    this._useServerVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerVerificationInput() {
    return this._useServerVerification.internalValue;
  }
}
export interface AlertReceiverWebhookHttpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#enable_http2 AlertReceiver#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#follow_redirects AlertReceiver#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#no_authorization AlertReceiver#no_authorization}
  */
  readonly noAuthorization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#no_tls AlertReceiver#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * auth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#auth_token AlertReceiver#auth_token}
  */
  readonly authToken?: AlertReceiverWebhookHttpConfigAuthToken;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#basic_auth AlertReceiver#basic_auth}
  */
  readonly basicAuth?: AlertReceiverWebhookHttpConfigBasicAuth;
  /**
  * client_cert_obj block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#client_cert_obj AlertReceiver#client_cert_obj}
  */
  readonly clientCertObj?: AlertReceiverWebhookHttpConfigClientCertObj;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#use_tls AlertReceiver#use_tls}
  */
  readonly useTls?: AlertReceiverWebhookHttpConfigUseTls;
}

export function alertReceiverWebhookHttpConfigToTerraform(struct?: AlertReceiverWebhookHttpConfigOutputReference | AlertReceiverWebhookHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_http2: cdktf.booleanToTerraform(struct!.enableHttp2),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    no_authorization: cdktf.booleanToTerraform(struct!.noAuthorization),
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    auth_token: alertReceiverWebhookHttpConfigAuthTokenToTerraform(struct!.authToken),
    basic_auth: alertReceiverWebhookHttpConfigBasicAuthToTerraform(struct!.basicAuth),
    client_cert_obj: alertReceiverWebhookHttpConfigClientCertObjToTerraform(struct!.clientCertObj),
    use_tls: alertReceiverWebhookHttpConfigUseTlsToTerraform(struct!.useTls),
  }
}


export function alertReceiverWebhookHttpConfigToHclTerraform(struct?: AlertReceiverWebhookHttpConfigOutputReference | AlertReceiverWebhookHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_http2: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_authorization: {
      value: cdktf.booleanToHclTerraform(struct!.noAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_tls: {
      value: cdktf.booleanToHclTerraform(struct!.noTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth_token: {
      value: alertReceiverWebhookHttpConfigAuthTokenToHclTerraform(struct!.authToken),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigAuthTokenList",
    },
    basic_auth: {
      value: alertReceiverWebhookHttpConfigBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigBasicAuthList",
    },
    client_cert_obj: {
      value: alertReceiverWebhookHttpConfigClientCertObjToHclTerraform(struct!.clientCertObj),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigClientCertObjList",
    },
    use_tls: {
      value: alertReceiverWebhookHttpConfigUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigUseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp2 = this._enableHttp2;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._noAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuthorization = this._noAuthorization;
    }
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._authToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken?.internalValue;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._clientCertObj?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertObj = this._clientCertObj?.internalValue;
    }
    if (this._useTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverWebhookHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableHttp2 = undefined;
      this._followRedirects = undefined;
      this._noAuthorization = undefined;
      this._noTls = undefined;
      this._authToken.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._clientCertObj.internalValue = undefined;
      this._useTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableHttp2 = value.enableHttp2;
      this._followRedirects = value.followRedirects;
      this._noAuthorization = value.noAuthorization;
      this._noTls = value.noTls;
      this._authToken.internalValue = value.authToken;
      this._basicAuth.internalValue = value.basicAuth;
      this._clientCertObj.internalValue = value.clientCertObj;
      this._useTls.internalValue = value.useTls;
    }
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
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

  // no_authorization - computed: false, optional: true, required: false
  private _noAuthorization?: boolean | cdktf.IResolvable; 
  public get noAuthorization() {
    return this.getBooleanAttribute('no_authorization');
  }
  public set noAuthorization(value: boolean | cdktf.IResolvable) {
    this._noAuthorization = value;
  }
  public resetNoAuthorization() {
    this._noAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthorizationInput() {
    return this._noAuthorization;
  }

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
  }

  // auth_token - computed: false, optional: true, required: false
  private _authToken = new AlertReceiverWebhookHttpConfigAuthTokenOutputReference(this, "auth_token");
  public get authToken() {
    return this._authToken;
  }
  public putAuthToken(value: AlertReceiverWebhookHttpConfigAuthToken) {
    this._authToken.internalValue = value;
  }
  public resetAuthToken() {
    this._authToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new AlertReceiverWebhookHttpConfigBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: AlertReceiverWebhookHttpConfigBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // client_cert_obj - computed: false, optional: true, required: false
  private _clientCertObj = new AlertReceiverWebhookHttpConfigClientCertObjOutputReference(this, "client_cert_obj");
  public get clientCertObj() {
    return this._clientCertObj;
  }
  public putClientCertObj(value: AlertReceiverWebhookHttpConfigClientCertObj) {
    this._clientCertObj.internalValue = value;
  }
  public resetClientCertObj() {
    this._clientCertObj.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertObjInput() {
    return this._clientCertObj.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new AlertReceiverWebhookHttpConfigUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: AlertReceiverWebhookHttpConfigUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }
}
export interface AlertReceiverWebhookUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#decryption_provider AlertReceiver#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#location AlertReceiver#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#store_provider AlertReceiver#store_provider}
  */
  readonly storeProvider?: string;
}

export function alertReceiverWebhookUrlBlindfoldSecretInfoToTerraform(struct?: AlertReceiverWebhookUrlBlindfoldSecretInfoOutputReference | AlertReceiverWebhookUrlBlindfoldSecretInfo): any {
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


export function alertReceiverWebhookUrlBlindfoldSecretInfoToHclTerraform(struct?: AlertReceiverWebhookUrlBlindfoldSecretInfoOutputReference | AlertReceiverWebhookUrlBlindfoldSecretInfo): any {
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

export class AlertReceiverWebhookUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverWebhookUrlBlindfoldSecretInfo | undefined) {
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
export interface AlertReceiverWebhookUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#provider AlertReceiver#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: string;
}

export function alertReceiverWebhookUrlClearSecretInfoToTerraform(struct?: AlertReceiverWebhookUrlClearSecretInfoOutputReference | AlertReceiverWebhookUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function alertReceiverWebhookUrlClearSecretInfoToHclTerraform(struct?: AlertReceiverWebhookUrlClearSecretInfoOutputReference | AlertReceiverWebhookUrlClearSecretInfo): any {
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

export class AlertReceiverWebhookUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookUrlClearSecretInfo | undefined {
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

  public set internalValue(value: AlertReceiverWebhookUrlClearSecretInfo | undefined) {
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
export interface AlertReceiverWebhookUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#blindfold_secret_info AlertReceiver#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AlertReceiverWebhookUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#clear_secret_info AlertReceiver#clear_secret_info}
  */
  readonly clearSecretInfo?: AlertReceiverWebhookUrlClearSecretInfo;
}

export function alertReceiverWebhookUrlToTerraform(struct?: AlertReceiverWebhookUrlOutputReference | AlertReceiverWebhookUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: alertReceiverWebhookUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: alertReceiverWebhookUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function alertReceiverWebhookUrlToHclTerraform(struct?: AlertReceiverWebhookUrlOutputReference | AlertReceiverWebhookUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: alertReceiverWebhookUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: alertReceiverWebhookUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookUrlClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhookUrl | undefined {
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

  public set internalValue(value: AlertReceiverWebhookUrl | undefined) {
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
  private _blindfoldSecretInfo = new AlertReceiverWebhookUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AlertReceiverWebhookUrlBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new AlertReceiverWebhookUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AlertReceiverWebhookUrlClearSecretInfo) {
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
export interface AlertReceiverWebhook {
  /**
  * http_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#http_config AlertReceiver#http_config}
  */
  readonly httpConfig: AlertReceiverWebhookHttpConfig;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#url AlertReceiver#url}
  */
  readonly url: AlertReceiverWebhookUrl;
}

export function alertReceiverWebhookToTerraform(struct?: AlertReceiverWebhookOutputReference | AlertReceiverWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_config: alertReceiverWebhookHttpConfigToTerraform(struct!.httpConfig),
    url: alertReceiverWebhookUrlToTerraform(struct!.url),
  }
}


export function alertReceiverWebhookToHclTerraform(struct?: AlertReceiverWebhookOutputReference | AlertReceiverWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_config: {
      value: alertReceiverWebhookHttpConfigToHclTerraform(struct!.httpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookHttpConfigList",
    },
    url: {
      value: alertReceiverWebhookUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "AlertReceiverWebhookUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertReceiverWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertReceiverWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConfig = this._httpConfig?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertReceiverWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpConfig.internalValue = undefined;
      this._url.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpConfig.internalValue = value.httpConfig;
      this._url.internalValue = value.url;
    }
  }

  // http_config - computed: false, optional: false, required: true
  private _httpConfig = new AlertReceiverWebhookHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: AlertReceiverWebhookHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url = new AlertReceiverWebhookUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: AlertReceiverWebhookUrl) {
    this._url.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver volterra_alert_receiver}
*/
export class AlertReceiver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_alert_receiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertReceiver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertReceiver to import
  * @param importFromId The id of the existing AlertReceiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertReceiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_alert_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/alert_receiver volterra_alert_receiver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertReceiverConfig
  */
  public constructor(scope: Construct, id: string, config: AlertReceiverConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_alert_receiver',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
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
    this._email.internalValue = config.email;
    this._opsgenie.internalValue = config.opsgenie;
    this._pagerduty.internalValue = config.pagerduty;
    this._slack.internalValue = config.slack;
    this._sms.internalValue = config.sms;
    this._webhook.internalValue = config.webhook;
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

  // email - computed: false, optional: true, required: false
  private _email = new AlertReceiverEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: AlertReceiverEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // opsgenie - computed: false, optional: true, required: false
  private _opsgenie = new AlertReceiverOpsgenieOutputReference(this, "opsgenie");
  public get opsgenie() {
    return this._opsgenie;
  }
  public putOpsgenie(value: AlertReceiverOpsgenie) {
    this._opsgenie.internalValue = value;
  }
  public resetOpsgenie() {
    this._opsgenie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsgenieInput() {
    return this._opsgenie.internalValue;
  }

  // pagerduty - computed: false, optional: true, required: false
  private _pagerduty = new AlertReceiverPagerdutyOutputReference(this, "pagerduty");
  public get pagerduty() {
    return this._pagerduty;
  }
  public putPagerduty(value: AlertReceiverPagerduty) {
    this._pagerduty.internalValue = value;
  }
  public resetPagerduty() {
    this._pagerduty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyInput() {
    return this._pagerduty.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new AlertReceiverSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AlertReceiverSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // sms - computed: false, optional: true, required: false
  private _sms = new AlertReceiverSmsOutputReference(this, "sms");
  public get sms() {
    return this._sms;
  }
  public putSms(value: AlertReceiverSms) {
    this._sms.internalValue = value;
  }
  public resetSms() {
    this._sms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new AlertReceiverWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: AlertReceiverWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
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
      email: alertReceiverEmailToTerraform(this._email.internalValue),
      opsgenie: alertReceiverOpsgenieToTerraform(this._opsgenie.internalValue),
      pagerduty: alertReceiverPagerdutyToTerraform(this._pagerduty.internalValue),
      slack: alertReceiverSlackToTerraform(this._slack.internalValue),
      sms: alertReceiverSmsToTerraform(this._sms.internalValue),
      webhook: alertReceiverWebhookToTerraform(this._webhook.internalValue),
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
      email: {
        value: alertReceiverEmailToHclTerraform(this._email.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertReceiverEmailList",
      },
      opsgenie: {
        value: alertReceiverOpsgenieToHclTerraform(this._opsgenie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertReceiverOpsgenieList",
      },
      pagerduty: {
        value: alertReceiverPagerdutyToHclTerraform(this._pagerduty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertReceiverPagerdutyList",
      },
      slack: {
        value: alertReceiverSlackToHclTerraform(this._slack.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertReceiverSlackList",
      },
      sms: {
        value: alertReceiverSmsToHclTerraform(this._sms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertReceiverSmsList",
      },
      webhook: {
        value: alertReceiverWebhookToHclTerraform(this._webhook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertReceiverWebhookList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
