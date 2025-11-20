// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZtnaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#annotations Ztna#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#description Ztna#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#disable Ztna#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#id Ztna#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#labels Ztna#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#name Ztna#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#namespace Ztna#namespace}
  */
  readonly namespace: string;
  /**
  * connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#connectivity Ztna#connectivity}
  */
  readonly connectivity?: ZtnaConnectivity;
  /**
  * per_session block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#per_session Ztna#per_session}
  */
  readonly perSession?: ZtnaPerSession;
}
export interface ZtnaConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#connectivities Ztna#connectivities}
  */
  readonly connectivities?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#connectivity_policy_name Ztna#connectivity_policy_name}
  */
  readonly connectivityPolicyName?: string;
}

export function ztnaConnectivityToTerraform(struct?: ZtnaConnectivityOutputReference | ZtnaConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivities: cdktf.stringToTerraform(struct!.connectivities),
    connectivity_policy_name: cdktf.stringToTerraform(struct!.connectivityPolicyName),
  }
}


export function ztnaConnectivityToHclTerraform(struct?: ZtnaConnectivityOutputReference | ZtnaConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivities: {
      value: cdktf.stringToHclTerraform(struct!.connectivities),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectivity_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.connectivityPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivities !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivities = this._connectivities;
    }
    if (this._connectivityPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityPolicyName = this._connectivityPolicyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivities = undefined;
      this._connectivityPolicyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivities = value.connectivities;
      this._connectivityPolicyName = value.connectivityPolicyName;
    }
  }

  // connectivities - computed: false, optional: true, required: false
  private _connectivities?: string; 
  public get connectivities() {
    return this.getStringAttribute('connectivities');
  }
  public set connectivities(value: string) {
    this._connectivities = value;
  }
  public resetConnectivities() {
    this._connectivities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivitiesInput() {
    return this._connectivities;
  }

  // connectivity_policy_name - computed: false, optional: true, required: false
  private _connectivityPolicyName?: string; 
  public get connectivityPolicyName() {
    return this.getStringAttribute('connectivity_policy_name');
  }
  public set connectivityPolicyName(value: string) {
    this._connectivityPolicyName = value;
  }
  public resetConnectivityPolicyName() {
    this._connectivityPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityPolicyNameInput() {
    return this._connectivityPolicyName;
  }
}
export interface ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#decryption_provider Ztna#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#location Ztna#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#store_provider Ztna#store_provider}
  */
  readonly storeProvider?: string;
}

export function ztnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoToTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfo): any {
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


export function ztnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoToHclTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfo): any {
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

export class ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfo | undefined) {
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
export interface ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#decryption_provider Ztna#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#location Ztna#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#store_provider Ztna#store_provider}
  */
  readonly storeProvider?: string;
}

export function ztnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternalToTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternalOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternal): any {
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


export function ztnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternalOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternal): any {
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

export class ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternal | undefined) {
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
export interface ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#provider Ztna#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#url Ztna#url}
  */
  readonly url: string;
}

export function ztnaPerSessionExternalServerValueAdminPasswordClearSecretInfoToTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfoOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ztnaPerSessionExternalServerValueAdminPasswordClearSecretInfoToHclTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfoOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfo): any {
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

export class ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfo | undefined) {
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
export interface ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#key Ztna#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#location Ztna#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#provider Ztna#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#secret_encoding Ztna#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#version Ztna#version}
  */
  readonly version?: number;
}

export function ztnaPerSessionExternalServerValueAdminPasswordVaultSecretInfoToTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfoOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfo): any {
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


export function ztnaPerSessionExternalServerValueAdminPasswordVaultSecretInfoToHclTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfoOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfo): any {
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

export class ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfo | undefined {
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

  public set internalValue(value: ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfo | undefined) {
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
export interface ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#name Ztna#name}
  */
  readonly name: string;
}

export function ztnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfoToTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfoOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ztnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfoToHclTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfoOutputReference | ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfo): any {
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

export class ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfo | undefined) {
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
export interface ZtnaPerSessionExternalServerValueAdminPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#secret_encoding_type Ztna#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#blindfold_secret_info Ztna#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#blindfold_secret_info_internal Ztna#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#clear_secret_info Ztna#clear_secret_info}
  */
  readonly clearSecretInfo?: ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#vault_secret_info Ztna#vault_secret_info}
  */
  readonly vaultSecretInfo?: ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#wingman_secret_info Ztna#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfo;
}

export function ztnaPerSessionExternalServerValueAdminPasswordToTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordOutputReference | ZtnaPerSessionExternalServerValueAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: ztnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: ztnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: ztnaPerSessionExternalServerValueAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: ztnaPerSessionExternalServerValueAdminPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: ztnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function ztnaPerSessionExternalServerValueAdminPasswordToHclTerraform(struct?: ZtnaPerSessionExternalServerValueAdminPasswordOutputReference | ZtnaPerSessionExternalServerValueAdminPassword): any {
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
      value: ztnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: ztnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: ztnaPerSessionExternalServerValueAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: ztnaPerSessionExternalServerValueAdminPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: ztnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionExternalServerValueAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionExternalServerValueAdminPassword | undefined {
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

  public set internalValue(value: ZtnaPerSessionExternalServerValueAdminPassword | undefined) {
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
  private _blindfoldSecretInfo = new ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: ZtnaPerSessionExternalServerValueAdminPasswordBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ZtnaPerSessionExternalServerValueAdminPasswordClearSecretInfo) {
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
  private _vaultSecretInfo = new ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: ZtnaPerSessionExternalServerValueAdminPasswordVaultSecretInfo) {
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
  private _wingmanSecretInfo = new ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: ZtnaPerSessionExternalServerValueAdminPasswordWingmanSecretInfo) {
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
export interface ZtnaPerSessionExternalServerValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#admin_username Ztna#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#domain Ztna#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server_type Ztna#server_type}
  */
  readonly serverType?: string;
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#admin_password Ztna#admin_password}
  */
  readonly adminPassword?: ZtnaPerSessionExternalServerValueAdminPassword;
}

export function ztnaPerSessionExternalServerValueToTerraform(struct?: ZtnaPerSessionExternalServerValueOutputReference | ZtnaPerSessionExternalServerValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    domain: cdktf.stringToTerraform(struct!.domain),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    admin_password: ztnaPerSessionExternalServerValueAdminPasswordToTerraform(struct!.adminPassword),
  }
}


export function ztnaPerSessionExternalServerValueToHclTerraform(struct?: ZtnaPerSessionExternalServerValueOutputReference | ZtnaPerSessionExternalServerValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: ztnaPerSessionExternalServerValueAdminPasswordToHclTerraform(struct!.adminPassword),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionExternalServerValueAdminPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionExternalServerValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionExternalServerValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._adminPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionExternalServerValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._domain = undefined;
      this._serverType = undefined;
      this._adminPassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._domain = value.domain;
      this._serverType = value.serverType;
      this._adminPassword.internalValue = value.adminPassword;
    }
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // server_type - computed: false, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword = new ZtnaPerSessionExternalServerValueAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: ZtnaPerSessionExternalServerValueAdminPassword) {
    this._adminPassword.internalValue = value;
  }
  public resetAdminPassword() {
    this._adminPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword.internalValue;
  }
}
export interface ZtnaPerSessionExternalServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#name Ztna#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#value Ztna#value}
  */
  readonly value: ZtnaPerSessionExternalServerValue;
}

export function ztnaPerSessionExternalServerToTerraform(struct?: ZtnaPerSessionExternalServerOutputReference | ZtnaPerSessionExternalServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: ztnaPerSessionExternalServerValueToTerraform(struct!.value),
  }
}


export function ztnaPerSessionExternalServerToHclTerraform(struct?: ZtnaPerSessionExternalServerOutputReference | ZtnaPerSessionExternalServer): any {
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
      value: ztnaPerSessionExternalServerValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionExternalServerValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionExternalServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionExternalServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionExternalServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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
  private _value = new ZtnaPerSessionExternalServerValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ZtnaPerSessionExternalServerValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#addr Ztna#addr}
  */
  readonly addr?: string;
}

export function ztnaPerSessionLeasePoolMemberValueEndAddressIpv4ToTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4OutputReference | ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function ztnaPerSessionLeasePoolMemberValueEndAddressIpv4ToHclTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4OutputReference | ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#addr Ztna#addr}
  */
  readonly addr?: string;
}

export function ztnaPerSessionLeasePoolMemberValueEndAddressIpv6ToTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6OutputReference | ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function ztnaPerSessionLeasePoolMemberValueEndAddressIpv6ToHclTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6OutputReference | ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ZtnaPerSessionLeasePoolMemberValueEndAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#ipv4 Ztna#ipv4}
  */
  readonly ipv4?: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#ipv6 Ztna#ipv6}
  */
  readonly ipv6?: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6;
}

export function ztnaPerSessionLeasePoolMemberValueEndAddressToTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueEndAddressOutputReference | ZtnaPerSessionLeasePoolMemberValueEndAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: ztnaPerSessionLeasePoolMemberValueEndAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: ztnaPerSessionLeasePoolMemberValueEndAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function ztnaPerSessionLeasePoolMemberValueEndAddressToHclTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueEndAddressOutputReference | ZtnaPerSessionLeasePoolMemberValueEndAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: ztnaPerSessionLeasePoolMemberValueEndAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4List",
    },
    ipv6: {
      value: ztnaPerSessionLeasePoolMemberValueEndAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionLeasePoolMemberValueEndAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionLeasePoolMemberValueEndAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionLeasePoolMemberValueEndAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ZtnaPerSessionLeasePoolMemberValueEndAddressIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#addr Ztna#addr}
  */
  readonly addr?: string;
}

export function ztnaPerSessionLeasePoolMemberValueStartAddressIpv4ToTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4OutputReference | ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function ztnaPerSessionLeasePoolMemberValueStartAddressIpv4ToHclTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4OutputReference | ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#addr Ztna#addr}
  */
  readonly addr?: string;
}

export function ztnaPerSessionLeasePoolMemberValueStartAddressIpv6ToTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6OutputReference | ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function ztnaPerSessionLeasePoolMemberValueStartAddressIpv6ToHclTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6OutputReference | ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ZtnaPerSessionLeasePoolMemberValueStartAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#ipv4 Ztna#ipv4}
  */
  readonly ipv4?: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#ipv6 Ztna#ipv6}
  */
  readonly ipv6?: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6;
}

export function ztnaPerSessionLeasePoolMemberValueStartAddressToTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueStartAddressOutputReference | ZtnaPerSessionLeasePoolMemberValueStartAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: ztnaPerSessionLeasePoolMemberValueStartAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: ztnaPerSessionLeasePoolMemberValueStartAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function ztnaPerSessionLeasePoolMemberValueStartAddressToHclTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueStartAddressOutputReference | ZtnaPerSessionLeasePoolMemberValueStartAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: ztnaPerSessionLeasePoolMemberValueStartAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4List",
    },
    ipv6: {
      value: ztnaPerSessionLeasePoolMemberValueStartAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionLeasePoolMemberValueStartAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionLeasePoolMemberValueStartAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionLeasePoolMemberValueStartAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ZtnaPerSessionLeasePoolMemberValueStartAddressIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ZtnaPerSessionLeasePoolMemberValue {
  /**
  * end_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#end_address Ztna#end_address}
  */
  readonly endAddress?: ZtnaPerSessionLeasePoolMemberValueEndAddress;
  /**
  * start_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#start_address Ztna#start_address}
  */
  readonly startAddress?: ZtnaPerSessionLeasePoolMemberValueStartAddress;
}

export function ztnaPerSessionLeasePoolMemberValueToTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueOutputReference | ZtnaPerSessionLeasePoolMemberValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: ztnaPerSessionLeasePoolMemberValueEndAddressToTerraform(struct!.endAddress),
    start_address: ztnaPerSessionLeasePoolMemberValueStartAddressToTerraform(struct!.startAddress),
  }
}


export function ztnaPerSessionLeasePoolMemberValueToHclTerraform(struct?: ZtnaPerSessionLeasePoolMemberValueOutputReference | ZtnaPerSessionLeasePoolMemberValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: ztnaPerSessionLeasePoolMemberValueEndAddressToHclTerraform(struct!.endAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionLeasePoolMemberValueEndAddressList",
    },
    start_address: {
      value: ztnaPerSessionLeasePoolMemberValueStartAddressToHclTerraform(struct!.startAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionLeasePoolMemberValueStartAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionLeasePoolMemberValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionLeasePoolMemberValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress?.internalValue;
    }
    if (this._startAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionLeasePoolMemberValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endAddress.internalValue = undefined;
      this._startAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endAddress.internalValue = value.endAddress;
      this._startAddress.internalValue = value.startAddress;
    }
  }

  // end_address - computed: false, optional: true, required: false
  private _endAddress = new ZtnaPerSessionLeasePoolMemberValueEndAddressOutputReference(this, "end_address");
  public get endAddress() {
    return this._endAddress;
  }
  public putEndAddress(value: ZtnaPerSessionLeasePoolMemberValueEndAddress) {
    this._endAddress.internalValue = value;
  }
  public resetEndAddress() {
    this._endAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress.internalValue;
  }

  // start_address - computed: false, optional: true, required: false
  private _startAddress = new ZtnaPerSessionLeasePoolMemberValueStartAddressOutputReference(this, "start_address");
  public get startAddress() {
    return this._startAddress;
  }
  public putStartAddress(value: ZtnaPerSessionLeasePoolMemberValueStartAddress) {
    this._startAddress.internalValue = value;
  }
  public resetStartAddress() {
    this._startAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress.internalValue;
  }
}
export interface ZtnaPerSessionLeasePoolMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#name Ztna#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#value Ztna#value}
  */
  readonly value: ZtnaPerSessionLeasePoolMemberValue;
}

export function ztnaPerSessionLeasePoolMemberToTerraform(struct?: ZtnaPerSessionLeasePoolMemberOutputReference | ZtnaPerSessionLeasePoolMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: ztnaPerSessionLeasePoolMemberValueToTerraform(struct!.value),
  }
}


export function ztnaPerSessionLeasePoolMemberToHclTerraform(struct?: ZtnaPerSessionLeasePoolMemberOutputReference | ZtnaPerSessionLeasePoolMember): any {
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
      value: ztnaPerSessionLeasePoolMemberValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionLeasePoolMemberValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionLeasePoolMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionLeasePoolMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionLeasePoolMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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
  private _value = new ZtnaPerSessionLeasePoolMemberValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ZtnaPerSessionLeasePoolMemberValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#addr Ztna#addr}
  */
  readonly addr?: string;
}

export function ztnaPerSessionResourcesValueAclEntriesDestinationIpIpv4ToTerraform(struct?: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4OutputReference | ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function ztnaPerSessionResourcesValueAclEntriesDestinationIpIpv4ToHclTerraform(struct?: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4OutputReference | ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#addr Ztna#addr}
  */
  readonly addr?: string;
}

export function ztnaPerSessionResourcesValueAclEntriesDestinationIpIpv6ToTerraform(struct?: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6OutputReference | ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function ztnaPerSessionResourcesValueAclEntriesDestinationIpIpv6ToHclTerraform(struct?: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6OutputReference | ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ZtnaPerSessionResourcesValueAclEntriesDestinationIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#ipv4 Ztna#ipv4}
  */
  readonly ipv4?: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#ipv6 Ztna#ipv6}
  */
  readonly ipv6?: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6;
}

export function ztnaPerSessionResourcesValueAclEntriesDestinationIpToTerraform(struct?: ZtnaPerSessionResourcesValueAclEntriesDestinationIpOutputReference | ZtnaPerSessionResourcesValueAclEntriesDestinationIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: ztnaPerSessionResourcesValueAclEntriesDestinationIpIpv4ToTerraform(struct!.ipv4),
    ipv6: ztnaPerSessionResourcesValueAclEntriesDestinationIpIpv6ToTerraform(struct!.ipv6),
  }
}


export function ztnaPerSessionResourcesValueAclEntriesDestinationIpToHclTerraform(struct?: ZtnaPerSessionResourcesValueAclEntriesDestinationIpOutputReference | ZtnaPerSessionResourcesValueAclEntriesDestinationIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: ztnaPerSessionResourcesValueAclEntriesDestinationIpIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4List",
    },
    ipv6: {
      value: ztnaPerSessionResourcesValueAclEntriesDestinationIpIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionResourcesValueAclEntriesDestinationIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionResourcesValueAclEntriesDestinationIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionResourcesValueAclEntriesDestinationIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ZtnaPerSessionResourcesValueAclEntriesDestinationIpIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ZtnaPerSessionResourcesValueAclEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#action Ztna#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#destination_end_port Ztna#destination_end_port}
  */
  readonly destinationEndPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#destination_start_port Ztna#destination_start_port}
  */
  readonly destinationStartPort?: number;
  /**
  * destination_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#destination_ip Ztna#destination_ip}
  */
  readonly destinationIp?: ZtnaPerSessionResourcesValueAclEntriesDestinationIp;
}

export function ztnaPerSessionResourcesValueAclEntriesToTerraform(struct?: ZtnaPerSessionResourcesValueAclEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destination_end_port: cdktf.numberToTerraform(struct!.destinationEndPort),
    destination_start_port: cdktf.numberToTerraform(struct!.destinationStartPort),
    destination_ip: ztnaPerSessionResourcesValueAclEntriesDestinationIpToTerraform(struct!.destinationIp),
  }
}


export function ztnaPerSessionResourcesValueAclEntriesToHclTerraform(struct?: ZtnaPerSessionResourcesValueAclEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_end_port: {
      value: cdktf.numberToHclTerraform(struct!.destinationEndPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_start_port: {
      value: cdktf.numberToHclTerraform(struct!.destinationStartPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_ip: {
      value: ztnaPerSessionResourcesValueAclEntriesDestinationIpToHclTerraform(struct!.destinationIp),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionResourcesValueAclEntriesDestinationIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionResourcesValueAclEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionResourcesValueAclEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destinationEndPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationEndPort = this._destinationEndPort;
    }
    if (this._destinationStartPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationStartPort = this._destinationStartPort;
    }
    if (this._destinationIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionResourcesValueAclEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destinationEndPort = undefined;
      this._destinationStartPort = undefined;
      this._destinationIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destinationEndPort = value.destinationEndPort;
      this._destinationStartPort = value.destinationStartPort;
      this._destinationIp.internalValue = value.destinationIp;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // destination_end_port - computed: false, optional: true, required: false
  private _destinationEndPort?: number; 
  public get destinationEndPort() {
    return this.getNumberAttribute('destination_end_port');
  }
  public set destinationEndPort(value: number) {
    this._destinationEndPort = value;
  }
  public resetDestinationEndPort() {
    this._destinationEndPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationEndPortInput() {
    return this._destinationEndPort;
  }

  // destination_start_port - computed: false, optional: true, required: false
  private _destinationStartPort?: number; 
  public get destinationStartPort() {
    return this.getNumberAttribute('destination_start_port');
  }
  public set destinationStartPort(value: number) {
    this._destinationStartPort = value;
  }
  public resetDestinationStartPort() {
    this._destinationStartPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationStartPortInput() {
    return this._destinationStartPort;
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp = new ZtnaPerSessionResourcesValueAclEntriesDestinationIpOutputReference(this, "destination_ip");
  public get destinationIp() {
    return this._destinationIp;
  }
  public putDestinationIp(value: ZtnaPerSessionResourcesValueAclEntriesDestinationIp) {
    this._destinationIp.internalValue = value;
  }
  public resetDestinationIp() {
    this._destinationIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp.internalValue;
  }
}

export class ZtnaPerSessionResourcesValueAclEntriesList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionResourcesValueAclEntries[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionResourcesValueAclEntriesOutputReference {
    return new ZtnaPerSessionResourcesValueAclEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionResourcesValueAcl {
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#entries Ztna#entries}
  */
  readonly entries?: ZtnaPerSessionResourcesValueAclEntries[] | cdktf.IResolvable;
}

export function ztnaPerSessionResourcesValueAclToTerraform(struct?: ZtnaPerSessionResourcesValueAclOutputReference | ZtnaPerSessionResourcesValueAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(ztnaPerSessionResourcesValueAclEntriesToTerraform, true)(struct!.entries),
  }
}


export function ztnaPerSessionResourcesValueAclToHclTerraform(struct?: ZtnaPerSessionResourcesValueAclOutputReference | ZtnaPerSessionResourcesValueAcl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(ztnaPerSessionResourcesValueAclEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionResourcesValueAclEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionResourcesValueAclOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionResourcesValueAcl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionResourcesValueAcl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entries.internalValue = value.entries;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new ZtnaPerSessionResourcesValueAclEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: ZtnaPerSessionResourcesValueAclEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}
export interface ZtnaPerSessionResourcesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#connectivity Ztna#connectivity}
  */
  readonly connectivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#web Ztna#web}
  */
  readonly web?: boolean | cdktf.IResolvable;
  /**
  * acl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#acl Ztna#acl}
  */
  readonly acl?: ZtnaPerSessionResourcesValueAcl;
}

export function ztnaPerSessionResourcesValueToTerraform(struct?: ZtnaPerSessionResourcesValueOutputReference | ZtnaPerSessionResourcesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity: cdktf.booleanToTerraform(struct!.connectivity),
    web: cdktf.booleanToTerraform(struct!.web),
    acl: ztnaPerSessionResourcesValueAclToTerraform(struct!.acl),
  }
}


export function ztnaPerSessionResourcesValueToHclTerraform(struct?: ZtnaPerSessionResourcesValueOutputReference | ZtnaPerSessionResourcesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity: {
      value: cdktf.booleanToHclTerraform(struct!.connectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web: {
      value: cdktf.booleanToHclTerraform(struct!.web),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    acl: {
      value: ztnaPerSessionResourcesValueAclToHclTerraform(struct!.acl),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionResourcesValueAclList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionResourcesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionResourcesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    if (this._web !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web;
    }
    if (this._acl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionResourcesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivity = undefined;
      this._web = undefined;
      this._acl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivity = value.connectivity;
      this._web = value.web;
      this._acl.internalValue = value.acl;
    }
  }

  // connectivity - computed: false, optional: true, required: false
  private _connectivity?: boolean | cdktf.IResolvable; 
  public get connectivity() {
    return this.getBooleanAttribute('connectivity');
  }
  public set connectivity(value: boolean | cdktf.IResolvable) {
    this._connectivity = value;
  }
  public resetConnectivity() {
    this._connectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity;
  }

  // web - computed: false, optional: true, required: false
  private _web?: boolean | cdktf.IResolvable; 
  public get web() {
    return this.getBooleanAttribute('web');
  }
  public set web(value: boolean | cdktf.IResolvable) {
    this._web = value;
  }
  public resetWeb() {
    this._web = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web;
  }

  // acl - computed: false, optional: true, required: false
  private _acl = new ZtnaPerSessionResourcesValueAclOutputReference(this, "acl");
  public get acl() {
    return this._acl;
  }
  public putAcl(value: ZtnaPerSessionResourcesValueAcl) {
    this._acl.internalValue = value;
  }
  public resetAcl() {
    this._acl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl.internalValue;
  }
}
export interface ZtnaPerSessionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#name Ztna#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#value Ztna#value}
  */
  readonly value: ZtnaPerSessionResourcesValue;
}

export function ztnaPerSessionResourcesToTerraform(struct?: ZtnaPerSessionResourcesOutputReference | ZtnaPerSessionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: ztnaPerSessionResourcesValueToTerraform(struct!.value),
  }
}


export function ztnaPerSessionResourcesToHclTerraform(struct?: ZtnaPerSessionResourcesOutputReference | ZtnaPerSessionResources): any {
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
      value: ztnaPerSessionResourcesValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionResourcesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value.internalValue = value.value;
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
  private _value = new ZtnaPerSessionResourcesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ZtnaPerSessionResourcesValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#acls Ztna#acls}
  */
  readonly acls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#network_access_rule Ztna#network_access_rule}
  */
  readonly networkAccessRule?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#web_top_name Ztna#web_top_name}
  */
  readonly webTopName?: string;
}

export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acls),
    network_access_rule: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkAccessRule),
    web_top_name: cdktf.stringToTerraform(struct!.webTopName),
  }
}


export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_access_rule: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkAccessRule),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    web_top_name: {
      value: cdktf.stringToHclTerraform(struct!.webTopName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acls !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls;
    }
    if (this._networkAccessRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccessRule = this._networkAccessRule;
    }
    if (this._webTopName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webTopName = this._webTopName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acls = undefined;
      this._networkAccessRule = undefined;
      this._webTopName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acls = value.acls;
      this._networkAccessRule = value.networkAccessRule;
      this._webTopName = value.webTopName;
    }
  }

  // acls - computed: false, optional: true, required: false
  private _acls?: string[]; 
  public get acls() {
    return this.getListAttribute('acls');
  }
  public set acls(value: string[]) {
    this._acls = value;
  }
  public resetAcls() {
    this._acls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls;
  }

  // network_access_rule - computed: false, optional: true, required: false
  private _networkAccessRule?: string[]; 
  public get networkAccessRule() {
    return this.getListAttribute('network_access_rule');
  }
  public set networkAccessRule(value: string[]) {
    this._networkAccessRule = value;
  }
  public resetNetworkAccessRule() {
    this._networkAccessRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessRuleInput() {
    return this._networkAccessRule;
  }

  // web_top_name - computed: false, optional: true, required: false
  private _webTopName?: string; 
  public get webTopName() {
    return this.getStringAttribute('web_top_name');
  }
  public set webTopName(value: string) {
    this._webTopName = value;
  }
  public resetWebTopName() {
    this._webTopName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webTopNameInput() {
    return this._webTopName;
  }
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#allow_name Ztna#allow_name}
  */
  readonly allowName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#deny_name Ztna#deny_name}
  */
  readonly denyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server Ztna#server}
  */
  readonly server?: string;
  /**
  * rules_resource_assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#rules_resource_assign Ztna#rules_resource_assign}
  */
  readonly rulesResourceAssign?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_name: cdktf.stringToTerraform(struct!.allowName),
    deny_name: cdktf.stringToTerraform(struct!.denyName),
    server: cdktf.stringToTerraform(struct!.server),
    rules_resource_assign: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToTerraform, true)(struct!.rulesResourceAssign),
  }
}


export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_name: {
      value: cdktf.stringToHclTerraform(struct!.allowName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_name: {
      value: cdktf.stringToHclTerraform(struct!.denyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules_resource_assign: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToHclTerraform, true)(struct!.rulesResourceAssign),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowName = this._allowName;
    }
    if (this._denyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyName = this._denyName;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._rulesResourceAssign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesResourceAssign = this._rulesResourceAssign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowName = undefined;
      this._denyName = undefined;
      this._server = undefined;
      this._rulesResourceAssign.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowName = value.allowName;
      this._denyName = value.denyName;
      this._server = value.server;
      this._rulesResourceAssign.internalValue = value.rulesResourceAssign;
    }
  }

  // allow_name - computed: false, optional: true, required: false
  private _allowName?: string; 
  public get allowName() {
    return this.getStringAttribute('allow_name');
  }
  public set allowName(value: string) {
    this._allowName = value;
  }
  public resetAllowName() {
    this._allowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNameInput() {
    return this._allowName;
  }

  // deny_name - computed: false, optional: true, required: false
  private _denyName?: string; 
  public get denyName() {
    return this.getStringAttribute('deny_name');
  }
  public set denyName(value: string) {
    this._denyName = value;
  }
  public resetDenyName() {
    this._denyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNameInput() {
    return this._denyName;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // rules_resource_assign - computed: false, optional: true, required: false
  private _rulesResourceAssign = new ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignList(this, "rules_resource_assign", false);
  public get rulesResourceAssign() {
    return this._rulesResourceAssign;
  }
  public putRulesResourceAssign(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable) {
    this._rulesResourceAssign.internalValue = value;
  }
  public resetRulesResourceAssign() {
    this._rulesResourceAssign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesResourceAssignInput() {
    return this._rulesResourceAssign.internalValue;
  }
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssign {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#allow Ztna#allow}
  */
  readonly allow?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignOutputReference | ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowToTerraform, true)(struct!.allow),
  }
}


export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignOutputReference | ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowToHclTerraform, true)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }
}
export interface ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#deny_name Ztna#deny_name}
  */
  readonly denyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#filter Ztna#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server Ztna#server}
  */
  readonly server?: string;
  /**
  * resource_assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#resource_assign Ztna#resource_assign}
  */
  readonly resourceAssign?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssign;
}

export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_name: cdktf.stringToTerraform(struct!.denyName),
    filter: cdktf.stringToTerraform(struct!.filter),
    server: cdktf.stringToTerraform(struct!.server),
    resource_assign: ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignToTerraform(struct!.resourceAssign),
  }
}


export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_name: {
      value: cdktf.stringToHclTerraform(struct!.denyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_assign: {
      value: ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignToHclTerraform(struct!.resourceAssign),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyName = this._denyName;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._resourceAssign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAssign = this._resourceAssign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denyName = undefined;
      this._filter = undefined;
      this._server = undefined;
      this._resourceAssign.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denyName = value.denyName;
      this._filter = value.filter;
      this._server = value.server;
      this._resourceAssign.internalValue = value.resourceAssign;
    }
  }

  // deny_name - computed: false, optional: true, required: false
  private _denyName?: string; 
  public get denyName() {
    return this.getStringAttribute('deny_name');
  }
  public set denyName(value: string) {
    this._denyName = value;
  }
  public resetDenyName() {
    this._denyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNameInput() {
    return this._denyName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // resource_assign - computed: false, optional: true, required: false
  private _resourceAssign = new ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssignOutputReference(this, "resource_assign");
  public get resourceAssign() {
    return this._resourceAssign;
  }
  public putResourceAssign(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryResourceAssign) {
    this._resourceAssign.internalValue = value;
  }
  public resetResourceAssign() {
    this._resourceAssign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAssignInput() {
    return this._resourceAssign.internalValue;
  }
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQuery[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#deny_name Ztna#deny_name}
  */
  readonly denyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#expression Ztna#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server Ztna#server}
  */
  readonly server?: string;
  /**
  * active_directory_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#active_directory_query Ztna#active_directory_query}
  */
  readonly activeDirectoryQuery?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQuery[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthOutputReference | ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_name: cdktf.stringToTerraform(struct!.denyName),
    expression: cdktf.stringToTerraform(struct!.expression),
    server: cdktf.stringToTerraform(struct!.server),
    active_directory_query: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryToTerraform, true)(struct!.activeDirectoryQuery),
  }
}


export function ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthOutputReference | ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_name: {
      value: cdktf.stringToHclTerraform(struct!.denyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_directory_query: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryToHclTerraform, true)(struct!.activeDirectoryQuery),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyName = this._denyName;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._activeDirectoryQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryQuery = this._activeDirectoryQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denyName = undefined;
      this._expression = undefined;
      this._server = undefined;
      this._activeDirectoryQuery.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denyName = value.denyName;
      this._expression = value.expression;
      this._server = value.server;
      this._activeDirectoryQuery.internalValue = value.activeDirectoryQuery;
    }
  }

  // deny_name - computed: false, optional: true, required: false
  private _denyName?: string; 
  public get denyName() {
    return this.getStringAttribute('deny_name');
  }
  public set denyName(value: string) {
    this._denyName = value;
  }
  public resetDenyName() {
    this._denyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNameInput() {
    return this._denyName;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // active_directory_query - computed: false, optional: true, required: false
  private _activeDirectoryQuery = new ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQueryList(this, "active_directory_query", false);
  public get activeDirectoryQuery() {
    return this._activeDirectoryQuery;
  }
  public putActiveDirectoryQuery(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthActiveDirectoryQuery[] | cdktf.IResolvable) {
    this._activeDirectoryQuery.internalValue = value;
  }
  public resetActiveDirectoryQuery() {
    this._activeDirectoryQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryQueryInput() {
    return this._activeDirectoryQuery.internalValue;
  }
}
export interface ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssign {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#acls Ztna#acls}
  */
  readonly acls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#network_access_rule Ztna#network_access_rule}
  */
  readonly networkAccessRule?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#web_top_name Ztna#web_top_name}
  */
  readonly webTopName?: string;
}

export function ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acls),
    network_access_rule: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkAccessRule),
    web_top_name: cdktf.stringToTerraform(struct!.webTopName),
  }
}


export function ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_access_rule: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkAccessRule),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    web_top_name: {
      value: cdktf.stringToHclTerraform(struct!.webTopName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acls !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls;
    }
    if (this._networkAccessRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccessRule = this._networkAccessRule;
    }
    if (this._webTopName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webTopName = this._webTopName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acls = undefined;
      this._networkAccessRule = undefined;
      this._webTopName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acls = value.acls;
      this._networkAccessRule = value.networkAccessRule;
      this._webTopName = value.webTopName;
    }
  }

  // acls - computed: false, optional: true, required: false
  private _acls?: string[]; 
  public get acls() {
    return this.getListAttribute('acls');
  }
  public set acls(value: string[]) {
    this._acls = value;
  }
  public resetAcls() {
    this._acls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls;
  }

  // network_access_rule - computed: false, optional: true, required: false
  private _networkAccessRule?: string[]; 
  public get networkAccessRule() {
    return this.getListAttribute('network_access_rule');
  }
  public set networkAccessRule(value: string[]) {
    this._networkAccessRule = value;
  }
  public resetNetworkAccessRule() {
    this._networkAccessRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessRuleInput() {
    return this._networkAccessRule;
  }

  // web_top_name - computed: false, optional: true, required: false
  private _webTopName?: string; 
  public get webTopName() {
    return this.getStringAttribute('web_top_name');
  }
  public set webTopName(value: string) {
    this._webTopName = value;
  }
  public resetWebTopName() {
    this._webTopName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webTopNameInput() {
    return this._webTopName;
  }
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#allow_name Ztna#allow_name}
  */
  readonly allowName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#deny_name Ztna#deny_name}
  */
  readonly denyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server Ztna#server}
  */
  readonly server?: string;
  /**
  * rules_resource_assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#rules_resource_assign Ztna#rules_resource_assign}
  */
  readonly rulesResourceAssign?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_name: cdktf.stringToTerraform(struct!.allowName),
    deny_name: cdktf.stringToTerraform(struct!.denyName),
    server: cdktf.stringToTerraform(struct!.server),
    rules_resource_assign: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToTerraform, true)(struct!.rulesResourceAssign),
  }
}


export function ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_name: {
      value: cdktf.stringToHclTerraform(struct!.allowName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_name: {
      value: cdktf.stringToHclTerraform(struct!.denyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules_resource_assign: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToHclTerraform, true)(struct!.rulesResourceAssign),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowName = this._allowName;
    }
    if (this._denyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyName = this._denyName;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._rulesResourceAssign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesResourceAssign = this._rulesResourceAssign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowName = undefined;
      this._denyName = undefined;
      this._server = undefined;
      this._rulesResourceAssign.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowName = value.allowName;
      this._denyName = value.denyName;
      this._server = value.server;
      this._rulesResourceAssign.internalValue = value.rulesResourceAssign;
    }
  }

  // allow_name - computed: false, optional: true, required: false
  private _allowName?: string; 
  public get allowName() {
    return this.getStringAttribute('allow_name');
  }
  public set allowName(value: string) {
    this._allowName = value;
  }
  public resetAllowName() {
    this._allowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNameInput() {
    return this._allowName;
  }

  // deny_name - computed: false, optional: true, required: false
  private _denyName?: string; 
  public get denyName() {
    return this.getStringAttribute('deny_name');
  }
  public set denyName(value: string) {
    this._denyName = value;
  }
  public resetDenyName() {
    this._denyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNameInput() {
    return this._denyName;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // rules_resource_assign - computed: false, optional: true, required: false
  private _rulesResourceAssign = new ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssignList(this, "rules_resource_assign", false);
  public get rulesResourceAssign() {
    return this._rulesResourceAssign;
  }
  public putRulesResourceAssign(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable) {
    this._rulesResourceAssign.internalValue = value;
  }
  public resetRulesResourceAssign() {
    this._rulesResourceAssign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesResourceAssignInput() {
    return this._rulesResourceAssign.internalValue;
  }
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllow[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssign {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#allow Ztna#allow}
  */
  readonly allow?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllow[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignOutputReference | ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowToTerraform, true)(struct!.allow),
  }
}


export function ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignOutputReference | ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowToHclTerraform, true)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }
}
export interface ZtnaPerSessionSequenceActionNextActionActiveDirectoryQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#deny_name Ztna#deny_name}
  */
  readonly denyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#filter Ztna#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server Ztna#server}
  */
  readonly server?: string;
  /**
  * resource_assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#resource_assign Ztna#resource_assign}
  */
  readonly resourceAssign?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssign;
}

export function ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryOutputReference | ZtnaPerSessionSequenceActionNextActionActiveDirectoryQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_name: cdktf.stringToTerraform(struct!.denyName),
    filter: cdktf.stringToTerraform(struct!.filter),
    server: cdktf.stringToTerraform(struct!.server),
    resource_assign: ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignToTerraform(struct!.resourceAssign),
  }
}


export function ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryOutputReference | ZtnaPerSessionSequenceActionNextActionActiveDirectoryQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_name: {
      value: cdktf.stringToHclTerraform(struct!.denyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_assign: {
      value: ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignToHclTerraform(struct!.resourceAssign),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionActiveDirectoryQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyName = this._denyName;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._resourceAssign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAssign = this._resourceAssign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denyName = undefined;
      this._filter = undefined;
      this._server = undefined;
      this._resourceAssign.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denyName = value.denyName;
      this._filter = value.filter;
      this._server = value.server;
      this._resourceAssign.internalValue = value.resourceAssign;
    }
  }

  // deny_name - computed: false, optional: true, required: false
  private _denyName?: string; 
  public get denyName() {
    return this.getStringAttribute('deny_name');
  }
  public set denyName(value: string) {
    this._denyName = value;
  }
  public resetDenyName() {
    this._denyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNameInput() {
    return this._denyName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // resource_assign - computed: false, optional: true, required: false
  private _resourceAssign = new ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssignOutputReference(this, "resource_assign");
  public get resourceAssign() {
    return this._resourceAssign;
  }
  public putResourceAssign(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryResourceAssign) {
    this._resourceAssign.internalValue = value;
  }
  public resetResourceAssign() {
    this._resourceAssign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAssignInput() {
    return this._resourceAssign.internalValue;
  }
}
export interface ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#acls Ztna#acls}
  */
  readonly acls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#network_access_rule Ztna#network_access_rule}
  */
  readonly networkAccessRule?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#web_top_name Ztna#web_top_name}
  */
  readonly webTopName?: string;
}

export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acls),
    network_access_rule: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkAccessRule),
    web_top_name: cdktf.stringToTerraform(struct!.webTopName),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_access_rule: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkAccessRule),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    web_top_name: {
      value: cdktf.stringToHclTerraform(struct!.webTopName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acls !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls;
    }
    if (this._networkAccessRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccessRule = this._networkAccessRule;
    }
    if (this._webTopName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webTopName = this._webTopName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acls = undefined;
      this._networkAccessRule = undefined;
      this._webTopName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acls = value.acls;
      this._networkAccessRule = value.networkAccessRule;
      this._webTopName = value.webTopName;
    }
  }

  // acls - computed: false, optional: true, required: false
  private _acls?: string[]; 
  public get acls() {
    return this.getListAttribute('acls');
  }
  public set acls(value: string[]) {
    this._acls = value;
  }
  public resetAcls() {
    this._acls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls;
  }

  // network_access_rule - computed: false, optional: true, required: false
  private _networkAccessRule?: string[]; 
  public get networkAccessRule() {
    return this.getListAttribute('network_access_rule');
  }
  public set networkAccessRule(value: string[]) {
    this._networkAccessRule = value;
  }
  public resetNetworkAccessRule() {
    this._networkAccessRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessRuleInput() {
    return this._networkAccessRule;
  }

  // web_top_name - computed: false, optional: true, required: false
  private _webTopName?: string; 
  public get webTopName() {
    return this.getStringAttribute('web_top_name');
  }
  public set webTopName(value: string) {
    this._webTopName = value;
  }
  public resetWebTopName() {
    this._webTopName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webTopNameInput() {
    return this._webTopName;
  }
}

export class ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#allow_name Ztna#allow_name}
  */
  readonly allowName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#deny_name Ztna#deny_name}
  */
  readonly denyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server Ztna#server}
  */
  readonly server?: string;
  /**
  * rules_resource_assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#rules_resource_assign Ztna#rules_resource_assign}
  */
  readonly rulesResourceAssign?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_name: cdktf.stringToTerraform(struct!.allowName),
    deny_name: cdktf.stringToTerraform(struct!.denyName),
    server: cdktf.stringToTerraform(struct!.server),
    rules_resource_assign: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToTerraform, true)(struct!.rulesResourceAssign),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_name: {
      value: cdktf.stringToHclTerraform(struct!.allowName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_name: {
      value: cdktf.stringToHclTerraform(struct!.denyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules_resource_assign: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignToHclTerraform, true)(struct!.rulesResourceAssign),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowName = this._allowName;
    }
    if (this._denyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyName = this._denyName;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._rulesResourceAssign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesResourceAssign = this._rulesResourceAssign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowName = undefined;
      this._denyName = undefined;
      this._server = undefined;
      this._rulesResourceAssign.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowName = value.allowName;
      this._denyName = value.denyName;
      this._server = value.server;
      this._rulesResourceAssign.internalValue = value.rulesResourceAssign;
    }
  }

  // allow_name - computed: false, optional: true, required: false
  private _allowName?: string; 
  public get allowName() {
    return this.getStringAttribute('allow_name');
  }
  public set allowName(value: string) {
    this._allowName = value;
  }
  public resetAllowName() {
    this._allowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNameInput() {
    return this._allowName;
  }

  // deny_name - computed: false, optional: true, required: false
  private _denyName?: string; 
  public get denyName() {
    return this.getStringAttribute('deny_name');
  }
  public set denyName(value: string) {
    this._denyName = value;
  }
  public resetDenyName() {
    this._denyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNameInput() {
    return this._denyName;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // rules_resource_assign - computed: false, optional: true, required: false
  private _rulesResourceAssign = new ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssignList(this, "rules_resource_assign", false);
  public get rulesResourceAssign() {
    return this._rulesResourceAssign;
  }
  public putRulesResourceAssign(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable) {
    this._rulesResourceAssign.internalValue = value;
  }
  public resetRulesResourceAssign() {
    this._rulesResourceAssign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesResourceAssignInput() {
    return this._rulesResourceAssign.internalValue;
  }
}

export class ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssign {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#allow Ztna#allow}
  */
  readonly allow?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowToTerraform, true)(struct!.allow),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowToHclTerraform, true)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }
}
export interface ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#deny_name Ztna#deny_name}
  */
  readonly denyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#filter Ztna#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server Ztna#server}
  */
  readonly server?: string;
  /**
  * resource_assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#resource_assign Ztna#resource_assign}
  */
  readonly resourceAssign?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssign;
}

export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_name: cdktf.stringToTerraform(struct!.denyName),
    filter: cdktf.stringToTerraform(struct!.filter),
    server: cdktf.stringToTerraform(struct!.server),
    resource_assign: ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignToTerraform(struct!.resourceAssign),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_name: {
      value: cdktf.stringToHclTerraform(struct!.denyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_assign: {
      value: ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignToHclTerraform(struct!.resourceAssign),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyName = this._denyName;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._resourceAssign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAssign = this._resourceAssign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denyName = undefined;
      this._filter = undefined;
      this._server = undefined;
      this._resourceAssign.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denyName = value.denyName;
      this._filter = value.filter;
      this._server = value.server;
      this._resourceAssign.internalValue = value.resourceAssign;
    }
  }

  // deny_name - computed: false, optional: true, required: false
  private _denyName?: string; 
  public get denyName() {
    return this.getStringAttribute('deny_name');
  }
  public set denyName(value: string) {
    this._denyName = value;
  }
  public resetDenyName() {
    this._denyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNameInput() {
    return this._denyName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // resource_assign - computed: false, optional: true, required: false
  private _resourceAssign = new ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssignOutputReference(this, "resource_assign");
  public get resourceAssign() {
    return this._resourceAssign;
  }
  public putResourceAssign(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryResourceAssign) {
    this._resourceAssign.internalValue = value;
  }
  public resetResourceAssign() {
    this._resourceAssign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAssignInput() {
    return this._resourceAssign.internalValue;
  }
}

export class ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQuery[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#deny_name Ztna#deny_name}
  */
  readonly denyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#expression Ztna#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server Ztna#server}
  */
  readonly server?: string;
  /**
  * active_directory_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#active_directory_query Ztna#active_directory_query}
  */
  readonly activeDirectoryQuery?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQuery[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_name: cdktf.stringToTerraform(struct!.denyName),
    expression: cdktf.stringToTerraform(struct!.expression),
    server: cdktf.stringToTerraform(struct!.server),
    active_directory_query: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryToTerraform, true)(struct!.activeDirectoryQuery),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_name: {
      value: cdktf.stringToHclTerraform(struct!.denyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_directory_query: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryToHclTerraform, true)(struct!.activeDirectoryQuery),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyName = this._denyName;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._activeDirectoryQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryQuery = this._activeDirectoryQuery?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denyName = undefined;
      this._expression = undefined;
      this._server = undefined;
      this._activeDirectoryQuery.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denyName = value.denyName;
      this._expression = value.expression;
      this._server = value.server;
      this._activeDirectoryQuery.internalValue = value.activeDirectoryQuery;
    }
  }

  // deny_name - computed: false, optional: true, required: false
  private _denyName?: string; 
  public get denyName() {
    return this.getStringAttribute('deny_name');
  }
  public set denyName(value: string) {
    this._denyName = value;
  }
  public resetDenyName() {
    this._denyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNameInput() {
    return this._denyName;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // active_directory_query - computed: false, optional: true, required: false
  private _activeDirectoryQuery = new ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQueryList(this, "active_directory_query", false);
  public get activeDirectoryQuery() {
    return this._activeDirectoryQuery;
  }
  public putActiveDirectoryQuery(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthActiveDirectoryQuery[] | cdktf.IResolvable) {
    this._activeDirectoryQuery.internalValue = value;
  }
  public resetActiveDirectoryQuery() {
    this._activeDirectoryQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryQueryInput() {
    return this._activeDirectoryQuery.internalValue;
  }
}

export class ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuth[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#decryption_provider Ztna#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#location Ztna#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#store_provider Ztna#store_provider}
  */
  readonly storeProvider?: string;
}

export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfo): any {
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


export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfo): any {
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

export class ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfo | undefined) {
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
export interface ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#decryption_provider Ztna#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#location Ztna#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#store_provider Ztna#store_provider}
  */
  readonly storeProvider?: string;
}

export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternalToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternalOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternal): any {
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


export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternalOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternal): any {
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

export class ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternal | undefined) {
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
export interface ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#provider Ztna#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#url Ztna#url}
  */
  readonly url: string;
}

export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfoToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfoOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfoToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfoOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfo): any {
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

export class ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfo | undefined) {
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
export interface ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#key Ztna#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#location Ztna#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#provider Ztna#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#secret_encoding Ztna#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#version Ztna#version}
  */
  readonly version?: number;
}

export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfoToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfoOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfo): any {
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


export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfoToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfoOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfo): any {
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

export class ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfo | undefined {
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

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfo | undefined) {
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
export interface ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#name Ztna#name}
  */
  readonly name: string;
}

export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfoToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfoOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfoToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfoOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfo): any {
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

export class ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfo | undefined) {
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
export interface ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#secret_encoding_type Ztna#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#blindfold_secret_info Ztna#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#blindfold_secret_info_internal Ztna#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#clear_secret_info Ztna#clear_secret_info}
  */
  readonly clearSecretInfo?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#vault_secret_info Ztna#vault_secret_info}
  */
  readonly vaultSecretInfo?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#wingman_secret_info Ztna#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfo;
}

export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordOutputReference | ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPassword): any {
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
      value: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPassword | undefined {
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

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPassword | undefined) {
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
  private _blindfoldSecretInfo = new ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordClearSecretInfo) {
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
  private _vaultSecretInfo = new ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordVaultSecretInfo) {
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
  private _wingmanSecretInfo = new ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordWingmanSecretInfo) {
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
export interface ZtnaPerSessionSequenceActionNextActionLogOnCustomization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#user_name Ztna#user_name}
  */
  readonly userName?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#password Ztna#password}
  */
  readonly password?: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPassword;
}

export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    password: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordToTerraform(struct!.password),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnCustomizationToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnCustomization | cdktf.IResolvable): any {
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
      value: ztnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionLogOnCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOnCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userName = undefined;
      this._password.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userName = value.userName;
      this._password.internalValue = value.password;
    }
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // password - computed: false, optional: true, required: false
  private _password = new ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomizationPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}

export class ZtnaPerSessionSequenceActionNextActionLogOnCustomizationList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionLogOnCustomization[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionLogOnCustomizationOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionLogOnCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionLogOn {
  /**
  * active_directory_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#active_directory_auth Ztna#active_directory_auth}
  */
  readonly activeDirectoryAuth?: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuth[] | cdktf.IResolvable;
  /**
  * customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#customization Ztna#customization}
  */
  readonly customization?: ZtnaPerSessionSequenceActionNextActionLogOnCustomization[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionLogOnToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnOutputReference | ZtnaPerSessionSequenceActionNextActionLogOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory_auth: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthToTerraform, true)(struct!.activeDirectoryAuth),
    customization: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionLogOnCustomizationToTerraform, true)(struct!.customization),
  }
}


export function ztnaPerSessionSequenceActionNextActionLogOnToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionLogOnOutputReference | ZtnaPerSessionSequenceActionNextActionLogOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory_auth: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthToHclTerraform, true)(struct!.activeDirectoryAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthList",
    },
    customization: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionLogOnCustomizationToHclTerraform, true)(struct!.customization),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnCustomizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionLogOnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionLogOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryAuth = this._activeDirectoryAuth?.internalValue;
    }
    if (this._customization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customization = this._customization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionLogOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDirectoryAuth.internalValue = undefined;
      this._customization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDirectoryAuth.internalValue = value.activeDirectoryAuth;
      this._customization.internalValue = value.customization;
    }
  }

  // active_directory_auth - computed: false, optional: true, required: false
  private _activeDirectoryAuth = new ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuthList(this, "active_directory_auth", false);
  public get activeDirectoryAuth() {
    return this._activeDirectoryAuth;
  }
  public putActiveDirectoryAuth(value: ZtnaPerSessionSequenceActionNextActionLogOnActiveDirectoryAuth[] | cdktf.IResolvable) {
    this._activeDirectoryAuth.internalValue = value;
  }
  public resetActiveDirectoryAuth() {
    this._activeDirectoryAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryAuthInput() {
    return this._activeDirectoryAuth.internalValue;
  }

  // customization - computed: false, optional: true, required: false
  private _customization = new ZtnaPerSessionSequenceActionNextActionLogOnCustomizationList(this, "customization", false);
  public get customization() {
    return this._customization;
  }
  public putCustomization(value: ZtnaPerSessionSequenceActionNextActionLogOnCustomization[] | cdktf.IResolvable) {
    this._customization.internalValue = value;
  }
  public resetCustomization() {
    this._customization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationInput() {
    return this._customization.internalValue;
  }
}
export interface ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssign {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#acls Ztna#acls}
  */
  readonly acls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#network_access_rule Ztna#network_access_rule}
  */
  readonly networkAccessRule?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#web_top_name Ztna#web_top_name}
  */
  readonly webTopName?: string;
}

export function ztnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acls),
    network_access_rule: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkAccessRule),
    web_top_name: cdktf.stringToTerraform(struct!.webTopName),
  }
}


export function ztnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssign | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_access_rule: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkAccessRule),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    web_top_name: {
      value: cdktf.stringToHclTerraform(struct!.webTopName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssign | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acls !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls;
    }
    if (this._networkAccessRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAccessRule = this._networkAccessRule;
    }
    if (this._webTopName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webTopName = this._webTopName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssign | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acls = undefined;
      this._networkAccessRule = undefined;
      this._webTopName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acls = value.acls;
      this._networkAccessRule = value.networkAccessRule;
      this._webTopName = value.webTopName;
    }
  }

  // acls - computed: false, optional: true, required: false
  private _acls?: string[]; 
  public get acls() {
    return this.getListAttribute('acls');
  }
  public set acls(value: string[]) {
    this._acls = value;
  }
  public resetAcls() {
    this._acls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls;
  }

  // network_access_rule - computed: false, optional: true, required: false
  private _networkAccessRule?: string[]; 
  public get networkAccessRule() {
    return this.getListAttribute('network_access_rule');
  }
  public set networkAccessRule(value: string[]) {
    this._networkAccessRule = value;
  }
  public resetNetworkAccessRule() {
    this._networkAccessRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessRuleInput() {
    return this._networkAccessRule;
  }

  // web_top_name - computed: false, optional: true, required: false
  private _webTopName?: string; 
  public get webTopName() {
    return this.getStringAttribute('web_top_name');
  }
  public set webTopName(value: string) {
    this._webTopName = value;
  }
  public resetWebTopName() {
    this._webTopName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webTopNameInput() {
    return this._webTopName;
  }
}

export class ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionResourceAssignAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#allow_name Ztna#allow_name}
  */
  readonly allowName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#deny_name Ztna#deny_name}
  */
  readonly denyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#server Ztna#server}
  */
  readonly server?: string;
  /**
  * rules_resource_assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#rules_resource_assign Ztna#rules_resource_assign}
  */
  readonly rulesResourceAssign?: ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionResourceAssignAllowToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionResourceAssignAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_name: cdktf.stringToTerraform(struct!.allowName),
    deny_name: cdktf.stringToTerraform(struct!.denyName),
    server: cdktf.stringToTerraform(struct!.server),
    rules_resource_assign: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignToTerraform, true)(struct!.rulesResourceAssign),
  }
}


export function ztnaPerSessionSequenceActionNextActionResourceAssignAllowToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionResourceAssignAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_name: {
      value: cdktf.stringToHclTerraform(struct!.allowName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny_name: {
      value: cdktf.stringToHclTerraform(struct!.denyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules_resource_assign: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignToHclTerraform, true)(struct!.rulesResourceAssign),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionResourceAssignAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionResourceAssignAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowName = this._allowName;
    }
    if (this._denyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyName = this._denyName;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._rulesResourceAssign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesResourceAssign = this._rulesResourceAssign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionResourceAssignAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowName = undefined;
      this._denyName = undefined;
      this._server = undefined;
      this._rulesResourceAssign.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowName = value.allowName;
      this._denyName = value.denyName;
      this._server = value.server;
      this._rulesResourceAssign.internalValue = value.rulesResourceAssign;
    }
  }

  // allow_name - computed: false, optional: true, required: false
  private _allowName?: string; 
  public get allowName() {
    return this.getStringAttribute('allow_name');
  }
  public set allowName(value: string) {
    this._allowName = value;
  }
  public resetAllowName() {
    this._allowName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNameInput() {
    return this._allowName;
  }

  // deny_name - computed: false, optional: true, required: false
  private _denyName?: string; 
  public get denyName() {
    return this.getStringAttribute('deny_name');
  }
  public set denyName(value: string) {
    this._denyName = value;
  }
  public resetDenyName() {
    this._denyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNameInput() {
    return this._denyName;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // rules_resource_assign - computed: false, optional: true, required: false
  private _rulesResourceAssign = new ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssignList(this, "rules_resource_assign", false);
  public get rulesResourceAssign() {
    return this._rulesResourceAssign;
  }
  public putRulesResourceAssign(value: ZtnaPerSessionSequenceActionNextActionResourceAssignAllowRulesResourceAssign[] | cdktf.IResolvable) {
    this._rulesResourceAssign.internalValue = value;
  }
  public resetRulesResourceAssign() {
    this._rulesResourceAssign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesResourceAssignInput() {
    return this._rulesResourceAssign.internalValue;
  }
}

export class ZtnaPerSessionSequenceActionNextActionResourceAssignAllowList extends cdktf.ComplexList {
  public internalValue? : ZtnaPerSessionSequenceActionNextActionResourceAssignAllow[] | cdktf.IResolvable

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
  public get(index: number): ZtnaPerSessionSequenceActionNextActionResourceAssignAllowOutputReference {
    return new ZtnaPerSessionSequenceActionNextActionResourceAssignAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaPerSessionSequenceActionNextActionResourceAssign {
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#allow Ztna#allow}
  */
  readonly allow?: ZtnaPerSessionSequenceActionNextActionResourceAssignAllow[] | cdktf.IResolvable;
}

export function ztnaPerSessionSequenceActionNextActionResourceAssignToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionResourceAssignOutputReference | ZtnaPerSessionSequenceActionNextActionResourceAssign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(ztnaPerSessionSequenceActionNextActionResourceAssignAllowToTerraform, true)(struct!.allow),
  }
}


export function ztnaPerSessionSequenceActionNextActionResourceAssignToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionResourceAssignOutputReference | ZtnaPerSessionSequenceActionNextActionResourceAssign): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(ztnaPerSessionSequenceActionNextActionResourceAssignAllowToHclTerraform, true)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionResourceAssignAllowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionResourceAssignOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextActionResourceAssign | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextActionResourceAssign | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow.internalValue = value.allow;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new ZtnaPerSessionSequenceActionNextActionResourceAssignAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: ZtnaPerSessionSequenceActionNextActionResourceAssignAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }
}
export interface ZtnaPerSessionSequenceActionNextAction {
  /**
  * active_directory_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#active_directory_auth Ztna#active_directory_auth}
  */
  readonly activeDirectoryAuth?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuth;
  /**
  * active_directory_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#active_directory_query Ztna#active_directory_query}
  */
  readonly activeDirectoryQuery?: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQuery;
  /**
  * log_on block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#log_on Ztna#log_on}
  */
  readonly logOn?: ZtnaPerSessionSequenceActionNextActionLogOn;
  /**
  * resource_assign block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#resource_assign Ztna#resource_assign}
  */
  readonly resourceAssign?: ZtnaPerSessionSequenceActionNextActionResourceAssign;
}

export function ztnaPerSessionSequenceActionNextActionToTerraform(struct?: ZtnaPerSessionSequenceActionNextActionOutputReference | ZtnaPerSessionSequenceActionNextAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_directory_auth: ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthToTerraform(struct!.activeDirectoryAuth),
    active_directory_query: ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryToTerraform(struct!.activeDirectoryQuery),
    log_on: ztnaPerSessionSequenceActionNextActionLogOnToTerraform(struct!.logOn),
    resource_assign: ztnaPerSessionSequenceActionNextActionResourceAssignToTerraform(struct!.resourceAssign),
  }
}


export function ztnaPerSessionSequenceActionNextActionToHclTerraform(struct?: ZtnaPerSessionSequenceActionNextActionOutputReference | ZtnaPerSessionSequenceActionNextAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_directory_auth: {
      value: ztnaPerSessionSequenceActionNextActionActiveDirectoryAuthToHclTerraform(struct!.activeDirectoryAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthList",
    },
    active_directory_query: {
      value: ztnaPerSessionSequenceActionNextActionActiveDirectoryQueryToHclTerraform(struct!.activeDirectoryQuery),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryList",
    },
    log_on: {
      value: ztnaPerSessionSequenceActionNextActionLogOnToHclTerraform(struct!.logOn),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionLogOnList",
    },
    resource_assign: {
      value: ztnaPerSessionSequenceActionNextActionResourceAssignToHclTerraform(struct!.resourceAssign),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionResourceAssignList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionNextActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceActionNextAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDirectoryAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryAuth = this._activeDirectoryAuth?.internalValue;
    }
    if (this._activeDirectoryQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryQuery = this._activeDirectoryQuery?.internalValue;
    }
    if (this._logOn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOn = this._logOn?.internalValue;
    }
    if (this._resourceAssign?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceAssign = this._resourceAssign?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceActionNextAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDirectoryAuth.internalValue = undefined;
      this._activeDirectoryQuery.internalValue = undefined;
      this._logOn.internalValue = undefined;
      this._resourceAssign.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDirectoryAuth.internalValue = value.activeDirectoryAuth;
      this._activeDirectoryQuery.internalValue = value.activeDirectoryQuery;
      this._logOn.internalValue = value.logOn;
      this._resourceAssign.internalValue = value.resourceAssign;
    }
  }

  // active_directory_auth - computed: false, optional: true, required: false
  private _activeDirectoryAuth = new ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuthOutputReference(this, "active_directory_auth");
  public get activeDirectoryAuth() {
    return this._activeDirectoryAuth;
  }
  public putActiveDirectoryAuth(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryAuth) {
    this._activeDirectoryAuth.internalValue = value;
  }
  public resetActiveDirectoryAuth() {
    this._activeDirectoryAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryAuthInput() {
    return this._activeDirectoryAuth.internalValue;
  }

  // active_directory_query - computed: false, optional: true, required: false
  private _activeDirectoryQuery = new ZtnaPerSessionSequenceActionNextActionActiveDirectoryQueryOutputReference(this, "active_directory_query");
  public get activeDirectoryQuery() {
    return this._activeDirectoryQuery;
  }
  public putActiveDirectoryQuery(value: ZtnaPerSessionSequenceActionNextActionActiveDirectoryQuery) {
    this._activeDirectoryQuery.internalValue = value;
  }
  public resetActiveDirectoryQuery() {
    this._activeDirectoryQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryQueryInput() {
    return this._activeDirectoryQuery.internalValue;
  }

  // log_on - computed: false, optional: true, required: false
  private _logOn = new ZtnaPerSessionSequenceActionNextActionLogOnOutputReference(this, "log_on");
  public get logOn() {
    return this._logOn;
  }
  public putLogOn(value: ZtnaPerSessionSequenceActionNextActionLogOn) {
    this._logOn.internalValue = value;
  }
  public resetLogOn() {
    this._logOn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOnInput() {
    return this._logOn.internalValue;
  }

  // resource_assign - computed: false, optional: true, required: false
  private _resourceAssign = new ZtnaPerSessionSequenceActionNextActionResourceAssignOutputReference(this, "resource_assign");
  public get resourceAssign() {
    return this._resourceAssign;
  }
  public putResourceAssign(value: ZtnaPerSessionSequenceActionNextActionResourceAssign) {
    this._resourceAssign.internalValue = value;
  }
  public resetResourceAssign() {
    this._resourceAssign.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAssignInput() {
    return this._resourceAssign.internalValue;
  }
}
export interface ZtnaPerSessionSequenceAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#connectivity_access_policy_name Ztna#connectivity_access_policy_name}
  */
  readonly connectivityAccessPolicyName?: string;
  /**
  * next_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#next_action Ztna#next_action}
  */
  readonly nextAction?: ZtnaPerSessionSequenceActionNextAction;
}

export function ztnaPerSessionSequenceActionToTerraform(struct?: ZtnaPerSessionSequenceActionOutputReference | ZtnaPerSessionSequenceAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity_access_policy_name: cdktf.stringToTerraform(struct!.connectivityAccessPolicyName),
    next_action: ztnaPerSessionSequenceActionNextActionToTerraform(struct!.nextAction),
  }
}


export function ztnaPerSessionSequenceActionToHclTerraform(struct?: ZtnaPerSessionSequenceActionOutputReference | ZtnaPerSessionSequenceAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity_access_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.connectivityAccessPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_action: {
      value: ztnaPerSessionSequenceActionNextActionToHclTerraform(struct!.nextAction),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionNextActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionSequenceActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSessionSequenceAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivityAccessPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityAccessPolicyName = this._connectivityAccessPolicyName;
    }
    if (this._nextAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextAction = this._nextAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSessionSequenceAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivityAccessPolicyName = undefined;
      this._nextAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivityAccessPolicyName = value.connectivityAccessPolicyName;
      this._nextAction.internalValue = value.nextAction;
    }
  }

  // connectivity_access_policy_name - computed: false, optional: true, required: false
  private _connectivityAccessPolicyName?: string; 
  public get connectivityAccessPolicyName() {
    return this.getStringAttribute('connectivity_access_policy_name');
  }
  public set connectivityAccessPolicyName(value: string) {
    this._connectivityAccessPolicyName = value;
  }
  public resetConnectivityAccessPolicyName() {
    this._connectivityAccessPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityAccessPolicyNameInput() {
    return this._connectivityAccessPolicyName;
  }

  // next_action - computed: false, optional: true, required: false
  private _nextAction = new ZtnaPerSessionSequenceActionNextActionOutputReference(this, "next_action");
  public get nextAction() {
    return this._nextAction;
  }
  public putNextAction(value: ZtnaPerSessionSequenceActionNextAction) {
    this._nextAction.internalValue = value;
  }
  public resetNextAction() {
    this._nextAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextActionInput() {
    return this._nextAction.internalValue;
  }
}
export interface ZtnaPerSession {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#per_session_policy_name Ztna#per_session_policy_name}
  */
  readonly perSessionPolicyName?: string;
  /**
  * external_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#external_server Ztna#external_server}
  */
  readonly externalServer?: ZtnaPerSessionExternalServer;
  /**
  * lease_pool_member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#lease_pool_member Ztna#lease_pool_member}
  */
  readonly leasePoolMember?: ZtnaPerSessionLeasePoolMember;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#resources Ztna#resources}
  */
  readonly resources?: ZtnaPerSessionResources;
  /**
  * sequence_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#sequence_action Ztna#sequence_action}
  */
  readonly sequenceAction?: ZtnaPerSessionSequenceAction;
}

export function ztnaPerSessionToTerraform(struct?: ZtnaPerSessionOutputReference | ZtnaPerSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_session_policy_name: cdktf.stringToTerraform(struct!.perSessionPolicyName),
    external_server: ztnaPerSessionExternalServerToTerraform(struct!.externalServer),
    lease_pool_member: ztnaPerSessionLeasePoolMemberToTerraform(struct!.leasePoolMember),
    resources: ztnaPerSessionResourcesToTerraform(struct!.resources),
    sequence_action: ztnaPerSessionSequenceActionToTerraform(struct!.sequenceAction),
  }
}


export function ztnaPerSessionToHclTerraform(struct?: ZtnaPerSessionOutputReference | ZtnaPerSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_session_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.perSessionPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_server: {
      value: ztnaPerSessionExternalServerToHclTerraform(struct!.externalServer),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionExternalServerList",
    },
    lease_pool_member: {
      value: ztnaPerSessionLeasePoolMemberToHclTerraform(struct!.leasePoolMember),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionLeasePoolMemberList",
    },
    resources: {
      value: ztnaPerSessionResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionResourcesList",
    },
    sequence_action: {
      value: ztnaPerSessionSequenceActionToHclTerraform(struct!.sequenceAction),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaPerSessionSequenceActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaPerSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaPerSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perSessionPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.perSessionPolicyName = this._perSessionPolicyName;
    }
    if (this._externalServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalServer = this._externalServer?.internalValue;
    }
    if (this._leasePoolMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leasePoolMember = this._leasePoolMember?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._sequenceAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceAction = this._sequenceAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaPerSession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perSessionPolicyName = undefined;
      this._externalServer.internalValue = undefined;
      this._leasePoolMember.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._sequenceAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perSessionPolicyName = value.perSessionPolicyName;
      this._externalServer.internalValue = value.externalServer;
      this._leasePoolMember.internalValue = value.leasePoolMember;
      this._resources.internalValue = value.resources;
      this._sequenceAction.internalValue = value.sequenceAction;
    }
  }

  // per_session_policy_name - computed: false, optional: true, required: false
  private _perSessionPolicyName?: string; 
  public get perSessionPolicyName() {
    return this.getStringAttribute('per_session_policy_name');
  }
  public set perSessionPolicyName(value: string) {
    this._perSessionPolicyName = value;
  }
  public resetPerSessionPolicyName() {
    this._perSessionPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSessionPolicyNameInput() {
    return this._perSessionPolicyName;
  }

  // external_server - computed: false, optional: true, required: false
  private _externalServer = new ZtnaPerSessionExternalServerOutputReference(this, "external_server");
  public get externalServer() {
    return this._externalServer;
  }
  public putExternalServer(value: ZtnaPerSessionExternalServer) {
    this._externalServer.internalValue = value;
  }
  public resetExternalServer() {
    this._externalServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalServerInput() {
    return this._externalServer.internalValue;
  }

  // lease_pool_member - computed: false, optional: true, required: false
  private _leasePoolMember = new ZtnaPerSessionLeasePoolMemberOutputReference(this, "lease_pool_member");
  public get leasePoolMember() {
    return this._leasePoolMember;
  }
  public putLeasePoolMember(value: ZtnaPerSessionLeasePoolMember) {
    this._leasePoolMember.internalValue = value;
  }
  public resetLeasePoolMember() {
    this._leasePoolMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leasePoolMemberInput() {
    return this._leasePoolMember.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ZtnaPerSessionResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: ZtnaPerSessionResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // sequence_action - computed: false, optional: true, required: false
  private _sequenceAction = new ZtnaPerSessionSequenceActionOutputReference(this, "sequence_action");
  public get sequenceAction() {
    return this._sequenceAction;
  }
  public putSequenceAction(value: ZtnaPerSessionSequenceAction) {
    this._sequenceAction.internalValue = value;
  }
  public resetSequenceAction() {
    this._sequenceAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceActionInput() {
    return this._sequenceAction.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna volterra_ztna}
*/
export class Ztna extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_ztna";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ztna resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ztna to import
  * @param importFromId The id of the existing Ztna that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ztna to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_ztna", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/ztna volterra_ztna} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZtnaConfig
  */
  public constructor(scope: Construct, id: string, config: ZtnaConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_ztna',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
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
    this._connectivity.internalValue = config.connectivity;
    this._perSession.internalValue = config.perSession;
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

  // connectivity - computed: false, optional: true, required: false
  private _connectivity = new ZtnaConnectivityOutputReference(this, "connectivity");
  public get connectivity() {
    return this._connectivity;
  }
  public putConnectivity(value: ZtnaConnectivity) {
    this._connectivity.internalValue = value;
  }
  public resetConnectivity() {
    this._connectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity.internalValue;
  }

  // per_session - computed: false, optional: true, required: false
  private _perSession = new ZtnaPerSessionOutputReference(this, "per_session");
  public get perSession() {
    return this._perSession;
  }
  public putPerSession(value: ZtnaPerSession) {
    this._perSession.internalValue = value;
  }
  public resetPerSession() {
    this._perSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perSessionInput() {
    return this._perSession.internalValue;
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
      connectivity: ztnaConnectivityToTerraform(this._connectivity.internalValue),
      per_session: ztnaPerSessionToTerraform(this._perSession.internalValue),
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
      connectivity: {
        value: ztnaConnectivityToHclTerraform(this._connectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZtnaConnectivityList",
      },
      per_session: {
        value: ztnaPerSessionToHclTerraform(this._perSession.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZtnaPerSessionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
